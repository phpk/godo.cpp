import "./chunk-5WWUZCGV.js";

// node_modules/filesize/dist/filesize.esm.js
var ARRAY = "array";
var BIT = "bit";
var BITS = "bits";
var BYTE = "byte";
var BYTES = "bytes";
var EMPTY = "";
var EXPONENT = "exponent";
var FUNCTION = "function";
var IEC = "iec";
var INVALID_NUMBER = "Invalid number";
var INVALID_ROUND = "Invalid rounding method";
var JEDEC = "jedec";
var OBJECT = "object";
var PERIOD = ".";
var ROUND = "round";
var S = "s";
var SI = "si";
var SI_KBIT = "kbit";
var SI_KBYTE = "kB";
var SPACE = " ";
var STRING = "string";
var ZERO = "0";
var STRINGS = {
  symbol: {
    iec: {
      bits: ["bit", "Kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
      bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
    },
    jedec: {
      bits: ["bit", "Kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
      bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    }
  },
  fullform: {
    iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
    jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
  }
};
function filesize(arg, {
  bits = false,
  pad = false,
  base = -1,
  round = 2,
  locale = EMPTY,
  localeOptions = {},
  separator = EMPTY,
  spacer = SPACE,
  symbols = {},
  standard = EMPTY,
  output = STRING,
  fullform = false,
  fullforms = [],
  exponent = -1,
  roundingMethod = ROUND,
  precision = 0
} = {}) {
  let e = exponent, num = Number(arg), result = [], val = 0, u = EMPTY;
  if (standard === SI) {
    base = 10;
    standard = JEDEC;
  } else if (standard === IEC || standard === JEDEC) {
    base = 2;
  } else if (base === 2) {
    standard = IEC;
  } else {
    base = 10;
    standard = JEDEC;
  }
  const ceil = base === 10 ? 1e3 : 1024, full = fullform === true, neg = num < 0, roundingFunc = Math[roundingMethod];
  if (typeof arg !== "bigint" && isNaN(arg)) {
    throw new TypeError(INVALID_NUMBER);
  }
  if (typeof roundingFunc !== FUNCTION) {
    throw new TypeError(INVALID_ROUND);
  }
  if (neg) {
    num = -num;
  }
  if (e === -1 || isNaN(e)) {
    e = Math.floor(Math.log(num) / Math.log(ceil));
    if (e < 0) {
      e = 0;
    }
  }
  if (e > 8) {
    if (precision > 0) {
      precision += 8 - e;
    }
    e = 8;
  }
  if (output === EXPONENT) {
    return e;
  }
  if (num === 0) {
    result[0] = 0;
    u = result[1] = STRINGS.symbol[standard][bits ? BITS : BYTES][e];
  } else {
    val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1e3, e));
    if (bits) {
      val = val * 8;
      if (val >= ceil && e < 8) {
        val = val / ceil;
        e++;
      }
    }
    const p = Math.pow(10, e > 0 ? round : 0);
    result[0] = roundingFunc(val * p) / p;
    if (result[0] === ceil && e < 8 && exponent === -1) {
      result[0] = 1;
      e++;
    }
    u = result[1] = base === 10 && e === 1 ? bits ? SI_KBIT : SI_KBYTE : STRINGS.symbol[standard][bits ? BITS : BYTES][e];
  }
  if (neg) {
    result[0] = -result[0];
  }
  if (precision > 0) {
    result[0] = result[0].toPrecision(precision);
  }
  result[1] = symbols[result[1]] || result[1];
  if (locale === true) {
    result[0] = result[0].toLocaleString();
  } else if (locale.length > 0) {
    result[0] = result[0].toLocaleString(locale, localeOptions);
  } else if (separator.length > 0) {
    result[0] = result[0].toString().replace(PERIOD, separator);
  }
  if (pad && Number.isInteger(result[0]) === false && round > 0) {
    const x = separator || PERIOD, tmp = result[0].toString().split(x), s = tmp[1] || EMPTY, l = s.length, n = round - l;
    result[0] = `${tmp[0]}${x}${s.padEnd(l + n, ZERO)}`;
  }
  if (full) {
    result[1] = fullforms[e] ? fullforms[e] : STRINGS.fullform[standard][e] + (bits ? BIT : BYTE) + (result[0] === 1 ? EMPTY : S);
  }
  return output === ARRAY ? result : output === OBJECT ? {
    value: result[0],
    symbol: result[1],
    exponent: e,
    unit: u
  } : result.join(spacer);
}
function partial({
  bits = false,
  pad = false,
  base = -1,
  round = 2,
  locale = EMPTY,
  localeOptions = {},
  separator = EMPTY,
  spacer = SPACE,
  symbols = {},
  standard = EMPTY,
  output = STRING,
  fullform = false,
  fullforms = [],
  exponent = -1,
  roundingMethod = ROUND,
  precision = 0
} = {}) {
  return (arg) => filesize(arg, {
    bits,
    pad,
    base,
    round,
    locale,
    localeOptions,
    separator,
    spacer,
    symbols,
    standard,
    output,
    fullform,
    fullforms,
    exponent,
    roundingMethod,
    precision
  });
}
export {
  filesize,
  partial
};
/*! Bundled license information:

filesize/dist/filesize.esm.js:
  (**
   * filesize
   *
   * @copyright 2024 Jason Mulligan <jason.mulligan@avoidwork.com>
   * @license BSD-3-Clause
   * @version 10.1.1
   *)
*/
//# sourceMappingURL=filesize.js.map
