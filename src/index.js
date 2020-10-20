function observe(o, callback) {
  return new Proxy(o, {
    set(target, property, value) {
      callback(property, value);
      target[property] = value;
    },
  });
}

const x = { name: "BB-8" };
const p = observe(x, (property, value) => console.info(property, value));
p.name = "BB-9";

console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse(JSON.stringify([1, 2, 3])));
console.log(
  [1, 2, 3].reduce((prev, curr) => {
    return prev + curr;
  }, 0) // 6
);
