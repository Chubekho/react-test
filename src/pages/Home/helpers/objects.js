// object.js

// So sánh sâu hai object
export const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null)
    return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }
  return true;
};

// Clone sâu object
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map((item) => deepClone(item));

  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
};

// Kiểm tra object rỗng
export const isEmptyObject = (obj) => {
  return (
    obj &&
    typeof obj === "object" &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
  );
};
