export const TTJSON = {
  stringify: function (obj) {
    if (globalThis.Prototype && globalThis.Prototype.Version === "1.5.1") {
      return window["JSON"].parse(window["JSON"].stringify(obj));
    }
    return window["JSON"].stringify(obj);
  },
  parse: window["JSON"].parse,
};
