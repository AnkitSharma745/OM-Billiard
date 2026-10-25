import PoolTableData from "../Data/poolTable";

export function findTableProduct(segment: string) {
  let decoded = segment;
  try { decoded = decodeURIComponent(segment); } catch { /* Use the original segment. */ }
  return PoolTableData.find((item) => String(item.id) === decoded || item.name === decoded || item.details.title === decoded);
}

export function tableStaticParams() {
  return PoolTableData.map((item) => ({ productId: String(item.id) }));
}
