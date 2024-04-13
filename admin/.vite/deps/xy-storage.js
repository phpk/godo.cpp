import "./chunk-5WWUZCGV.js";

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// node_modules/xy-storage/dist/es/index.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}
var isNumber = function isNumber2(value) {
  return "[object Number]" === Object.prototype.toString.call(value);
};
var isDate = function isDate2(value) {
  return "[object Date]" === Object.prototype.toString.call(value);
};
var isCookie = function isCookie2(value) {
  return "cookie" === value;
};
var _storage = /* @__PURE__ */ new WeakMap();
var _opts = /* @__PURE__ */ new WeakMap();
var _getStorage = /* @__PURE__ */ new WeakSet();
var _generateKey = /* @__PURE__ */ new WeakSet();
var Storage = function() {
  function Storage2(options) {
    _classCallCheck(this, Storage2);
    _classPrivateMethodInitSpec(this, _generateKey);
    _classPrivateMethodInitSpec(this, _getStorage);
    _classPrivateFieldInitSpec(this, _storage, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _opts, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _opts, _objectSpread2({
      name: "local",
      namespace: "",
      attrs: null
    }, options));
    _classPrivateFieldSet(this, _storage, _classPrivateMethodGet(this, _getStorage, _getStorage2).call(this, _classPrivateFieldGet(this, _opts).name));
  }
  _createClass(Storage2, [{
    key: "setItem",
    value: function setItem(key, value) {
      var _classPrivateFieldGet2, _classPrivateFieldGet3, _attrs;
      var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      attrs = _objectSpread2(_objectSpread2({}, (_classPrivateFieldGet2 = (_classPrivateFieldGet3 = _classPrivateFieldGet(this, _opts)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.attrs) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : {}), (_attrs = attrs) !== null && _attrs !== void 0 ? _attrs : {});
      if (isCookie(_classPrivateFieldGet(this, _opts).name)) {
        _classPrivateFieldGet(this, _storage).set(_classPrivateMethodGet(this, _generateKey, _generateKey2).call(this, key), JSON.stringify({
          value
        }), attrs);
      } else {
        var _attrs2 = attrs, expires = _attrs2.expires;
        var date = null;
        var exp = null;
        if (expires) {
          if (isNumber(expires)) {
            date = /* @__PURE__ */ new Date();
            date.setDate(date.getDate() + expires);
            exp = new Date(date);
          }
          if (isDate(expires)) {
            exp = expires;
          }
        }
        value = JSON.stringify({
          value,
          expires: exp
        });
        _classPrivateFieldGet(this, _storage).setItem(_classPrivateMethodGet(this, _generateKey, _generateKey2).call(this, key), value);
      }
    }
    /**
     * 获取
     * @param {string} key
     * @param {*} def
     * @returns
     */
  }, {
    key: "getItem",
    value: function getItem(key) {
      var def = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var data;
      if (isCookie(_classPrivateFieldGet(this, _opts).name)) {
        data = _classPrivateFieldGet(this, _storage).get(_classPrivateMethodGet(this, _generateKey, _generateKey2).call(this, key));
        if ("" !== data && "undefined" !== typeof data) {
          var _JSON$parse$value, _JSON$parse;
          return (_JSON$parse$value = (_JSON$parse = JSON.parse(data)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.value) !== null && _JSON$parse$value !== void 0 ? _JSON$parse$value : def;
        } else {
          return def;
        }
      } else {
        var _data, _data2;
        data = JSON.parse(_classPrivateFieldGet(this, _storage).getItem(_classPrivateMethodGet(this, _generateKey, _generateKey2).call(this, key)) || "{}");
        if (null === ((_data = data) === null || _data === void 0 ? void 0 : _data.expires) || new Date((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.expires).getTime() >= (/* @__PURE__ */ new Date()).getTime()) {
          var _data3;
          return (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.value;
        }
        this.removeItem(key);
        return def;
      }
    }
    /**
     * 移除
     * @param {string} key
     * @param {object} attrs
     * @returns
     */
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (isCookie(_classPrivateFieldGet(this, _opts).name)) {
        var _classPrivateFieldGet4, _classPrivateFieldGet5;
        return _classPrivateFieldGet(this, _storage).remove(_classPrivateMethodGet(this, _generateKey, _generateKey2).call(this, key), _objectSpread2(_objectSpread2({}, (_classPrivateFieldGet4 = (_classPrivateFieldGet5 = _classPrivateFieldGet(this, _opts)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.attrs) !== null && _classPrivateFieldGet4 !== void 0 ? _classPrivateFieldGet4 : {}), attrs !== null && attrs !== void 0 ? attrs : {}));
      } else {
        return _classPrivateFieldGet(this, _storage).removeItem(_classPrivateMethodGet(this, _generateKey, _generateKey2).call(this, key));
      }
    }
    /**
     * 清除所有
     * @returns
     */
  }, {
    key: "clear",
    value: function clear() {
      var _classPrivateFieldGet6;
      if (isCookie(_classPrivateFieldGet(this, _opts).name)) {
        console.error("Cookies do not support the clear method");
        return;
      }
      var len = (_classPrivateFieldGet6 = _classPrivateFieldGet(this, _storage).length) !== null && _classPrivateFieldGet6 !== void 0 ? _classPrivateFieldGet6 : 0;
      if (len === 0)
        return;
      var keys = [];
      for (var i = 0; i < len; i++) {
        var name = _classPrivateFieldGet(this, _storage).key(i);
        var regexp = new RegExp("^".concat(_classPrivateFieldGet(this, _opts).namespace, "(.+)"), "i");
        if (regexp.test(name) === false) {
          continue;
        }
        var _name$match = name.match(regexp), _name$match2 = _slicedToArray(_name$match, 2);
        _name$match2[0];
        var key = _name$match2[1];
        keys.push(key);
      }
      for (var _key in keys) {
        this.removeItem(keys[_key]);
      }
    }
  }]);
  return Storage2;
}();
function _getStorage2(name) {
  var storages = /* @__PURE__ */ new Map();
  storages.set("local", localStorage);
  storages.set("session", sessionStorage);
  storages.set("cookie", api);
  return storages.get(name);
}
function _generateKey2(key) {
  return "".concat(_classPrivateFieldGet(this, _opts).namespace).concat(key);
}
export {
  Storage as default
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
//# sourceMappingURL=xy-storage.js.map
