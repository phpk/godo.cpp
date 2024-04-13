import {
  inputToRGB,
  rgbToHex,
  rgbToHsv
} from "./chunk-DJZYIVHG.js";
import "./chunk-5WWUZCGV.js";

// node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;
export {
  blue,
  cyan,
  geekblue,
  generate,
  gold,
  gray,
  green,
  grey,
  lime,
  magenta,
  orange,
  presetDarkPalettes,
  presetPalettes,
  presetPrimaryColors,
  purple,
  red,
  volcano,
  yellow
};
//# sourceMappingURL=@ant-design_colors.js.map
