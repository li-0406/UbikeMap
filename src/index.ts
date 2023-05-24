// import L, { LayerGroup, marker } from "leaflet";
// import mapConfig from "./map.config";
import { districts } from "./districtData";
import fetchUBikeData from "./fetchData";

// const { coordinate, zoomLevel, titleLayerURL, containerID } = mapConfig;

// const map = L.map(containerID);

// map.setView(coordinate, zoomLevel);

// L.tileLayer(titleLayerURL).addTo(map);

// const $selectDistrict = <HTMLSelectElement | null>(
//   document.getElementById("select-district")
// );

// let markerLayer: LayerGroup;
// let currentDistrict = $selectDistrict?.value as Districts;

// function updateUBikeMap(districts: Districts): void {
//   fetchUBikeData().then((res) => {
//     const selectData = res.filter(
//       (info) => info.regionName === currentDistrict
//     );
//     const markers = selectData.map((data) => {
//       const marker = new L.Marker(data.latLng);
//       marker.bindTooltip(`
//     <p>${data.regionName}-${data.stopName}</p>
//     <p>總自行車數：${data.totalBikes}</p>
//     <p>可用自行車數：${data.availableBikes}</p>`);

//       marker.on("mouseover", () => marker.openTooltip());
//       marker.on("mouseleave", () => marker.closeTooltip());
//       return marker;
//     });

//     markerLayer = L.layerGroup(markers);
//     markerLayer.addTo(map);
//   });
// }
// updateUBikeMap(currentDistrict);

// $selectDistrict?.addEventListener("change", (e) => {
//   let { value } = e.target as HTMLSelectElement;
//   currentDistrict = value as Districts;
//   markerLayer.remove();
//   updateUBikeMap(currentDistrict);
// });
import UBikeMapFacade from "./MapFacade";
import mapConfig from "./map.config";

const mapFacade = new UBikeMapFacade(mapConfig, function (data: UBikeInfo) {
  return `
         <p>${data.regionName}-${data.stopName}</p>
         <p>總自行車數：${data.totalBikes}</p>
        <p>可用自行車數：${data.availableBikes}</p>`;
});

const $selectDistrict = <HTMLSelectElement | null>(
  document.getElementById("select-district")
);
districts.forEach((e) => {
  const $optionTag = document.createElement("option");
  $optionTag.setAttribute("value", e);
  $optionTag.innerText = e;
  if ($selectDistrict === null) throw new Error("No select-district !");
  $selectDistrict.appendChild($optionTag);
});

let currentDistrict = $selectDistrict?.value as Districts;

function updateUBikeMap(districts: Districts): void {
  fetchUBikeData().then((res) => {
    const selectData = res.filter(
      (info) => info.regionName === currentDistrict
    );
    mapFacade.pinstops(selectData);
  });
}
updateUBikeMap(currentDistrict);

$selectDistrict?.addEventListener("change", (e) => {
  let { value } = e.target as HTMLSelectElement;
  currentDistrict = value as Districts;
  mapFacade.clearStops();
  updateUBikeMap(currentDistrict);
});
