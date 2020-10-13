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
