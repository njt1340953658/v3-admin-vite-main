export const stringify = (obj: object) => {
  if (!obj) return false
  return Object.entries(obj)
    .map((item) => `${item[0]}=${item[1]}`)
    .join('&')
}
