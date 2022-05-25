import { dma, ma, sma, ema, wma } from "../../lib";

const methods = {
  dma,
  ma,
  sma,
  ema,
  wma,
};

export const only = true;

const to_fixed_10 = (n) => n.toFixed(10);

export const type = (type) => {
  return (obj) => {
    obj.type = type;
    return obj;
  };
};

function _runner(c, prefix) {
  const type = c.type;
  const [args, result, only] = c;

  const d_args = JSON.stringify(args);
  const d = `${prefix}${type}(${d_args})`;

  test(d, () => {
    const r = methods[type](...args);

    if (Array.isArray(result)) {
      expect(r.map(to_fixed_10)).toEqual(result.map(to_fixed_10));
      return;
    }

    expect(to_fixed_10(r)).toBe(to_fixed_10(result));
  });
}

export const runner = (prefix = "") => {
  return (c) => _runner(c, prefix);
};
