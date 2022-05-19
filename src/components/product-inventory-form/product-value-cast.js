export function createCast(map) {
  return function (key, value) {
    const transform = map[key] || identity;
  
    return transform(value);
  }
}

function identity(value) {
  return value;
}
