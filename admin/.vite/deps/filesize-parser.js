import {
  __commonJS
} from "./chunk-5WWUZCGV.js";

// node_modules/filesize-parser/index.js
var require_filesize_parser = __commonJS({
  "node_modules/filesize-parser/index.js"(exports, module) {
    var validAmount = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    var parsableUnit = function(u) {
      return u.match(/\D*/).pop() === u;
    };
    var incrementBases = {
      2: [
        [["b", "bit", "bits"], 1 / 8],
        [["B", "Byte", "Bytes", "bytes"], 1],
        [["Kb"], 128],
        [["k", "K", "kb", "KB", "KiB", "Ki", "ki"], 1024],
        [["Mb"], 131072],
        [["m", "M", "mb", "MB", "MiB", "Mi", "mi"], Math.pow(1024, 2)],
        [["Gb"], 1342e5],
        [["g", "G", "gb", "GB", "GiB", "Gi", "gi"], Math.pow(1024, 3)],
        [["Tb"], 1374e8],
        [["t", "T", "tb", "TB", "TiB", "Ti", "ti"], Math.pow(1024, 4)],
        [["Pb"], 1407e11],
        [["p", "P", "pb", "PB", "PiB", "Pi", "pi"], Math.pow(1024, 5)],
        [["Eb"], 1441e14],
        [["e", "E", "eb", "EB", "EiB", "Ei", "ei"], Math.pow(1024, 6)]
      ],
      10: [
        [["b", "bit", "bits"], 1 / 8],
        [["B", "Byte", "Bytes", "bytes"], 1],
        [["Kb"], 125],
        [["k", "K", "kb", "KB", "KiB", "Ki", "ki"], 1e3],
        [["Mb"], 125e3],
        [["m", "M", "mb", "MB", "MiB", "Mi", "mi"], 1e6],
        [["Gb"], 125e6],
        [["g", "G", "gb", "GB", "GiB", "Gi", "gi"], 1e9],
        [["Tb"], 125e9],
        [["t", "T", "tb", "TB", "TiB", "Ti", "ti"], 1e12],
        [["Pb"], 125e12],
        [["p", "P", "pb", "PB", "PiB", "Pi", "pi"], 1e15],
        [["Eb"], 125e15],
        [["e", "E", "eb", "EB", "EiB", "Ei", "ei"], 1e18]
      ]
    };
    module.exports = function(input) {
      var options = arguments[1] || {};
      var base = parseInt(options.base || 2);
      var parsed = input.toString().match(/^([0-9\.,]*)(?:\s*)?(.*)$/);
      var amount = parsed[1].replace(",", ".");
      var unit = parsed[2];
      var validUnit = function(sourceUnit) {
        return sourceUnit === unit;
      };
      if (!validAmount(amount) || !parsableUnit(unit)) {
        throw "Can't interpret " + (input || "a blank string");
      }
      if (unit === "")
        return Math.round(Number(amount));
      var increments = incrementBases[base];
      for (var i = 0; i < increments.length; i++) {
        var _increment = increments[i];
        if (_increment[0].some(validUnit)) {
          return Math.round(amount * _increment[1]);
        }
      }
      throw unit + " doesn't appear to be a valid unit";
    };
  }
});
export default require_filesize_parser();
//# sourceMappingURL=filesize-parser.js.map
