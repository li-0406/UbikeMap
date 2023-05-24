import axios from "axios";
import { LatLngExpression } from "leaflet";

let URL =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

export default async function fetchUBikeData(url = URL) {
  const res = await axios.get(url.toString());
  const ubikeInfoArray: UBikeInfo[] = res.data.map((item: any) => {
    return {
      availableBikes: item.sbi,
      totalBikes: item.tot,
      latLng: [item.lat, item.lng],
      regionName: item.sarea,
      stopName: item.sna,
    };
  });
  return ubikeInfoArray;
}
