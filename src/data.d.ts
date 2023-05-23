declare type Districts =
  | "中正區"
  | "大同區"
  | "中山區"
  | "松山區"
  | "大安區"
  | "萬華區"
  | "信義區"
  | "士林區"
  | "北投區"
  | "內湖區"
  | "南港區"
  | "文山區";

declare type UBikeInfo = {
  availableBikes: number; //車數量 sbi
  totalBikes: number; //車格數 tot
  latLng: LatLngExpression; //經緯度 lat,lng
  regionName: string; //區域 sarea
  stopName: string; //站點名稱 sna
};
