export function isNotEmpty(val) {
  const types = typeof val;
  if (types === "string" && val !== "") return true;
  if (
    types === "object" &&
    val !== null &&
    JSON.stringify(val) !== "{}" &&
    JSON.stringify(val) !== "[]"
  )
    return true;
  if (types === "number") {
    switch (val.toString()) {
      case "NaN":
        return false;
      default:
        return true;
    }
  }
  if (types === "undefined") return false;
  if (types === "boolean") return true;
  if (types === "function") return true;
  return false;
}
export function isUrl(path) {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
