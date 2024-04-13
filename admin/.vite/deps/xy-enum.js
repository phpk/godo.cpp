import "./chunk-5WWUZCGV.js";

// node_modules/xy-enum/dist/esm/index.js
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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
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
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
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
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
var isEmpty = function isEmpty2(val) {
  return val === null || val === void 0 || val === "";
};
var _list = /* @__PURE__ */ new WeakMap();
var Enum = function() {
  function Enum2(data, options) {
    _classCallCheck(this, Enum2);
    _classPrivateFieldInitSpec(this, _list, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _list, data);
  }
  _createClass(Enum2, [{
    key: "get",
    value: function get(val) {
      return _classPrivateFieldGet(this, _list).find(function(item) {
        return (item === null || item === void 0 ? void 0 : item.key) === val || (item === null || item === void 0 ? void 0 : item.value) === val;
      });
    }
    /**
     * 获取 key
     * @param {string|number} val
     * @param {*} def 默认值，获取不到任何内容时返回
     * @return {*}
     */
  }, {
    key: "getKey",
    value: function getKey(val) {
      var _this$get;
      var def = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var content = (_this$get = this.get(val)) === null || _this$get === void 0 ? void 0 : _this$get.key;
      return !isEmpty(content) ? content : def;
    }
    /**
     * 获取 value
     * @param {string|number} val
     * @param {*} def 默认值，获取不到任何内容时返回
     * @return {*}
     */
  }, {
    key: "getValue",
    value: function getValue(val) {
      var _this$get2;
      var def = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var content = (_this$get2 = this.get(val)) === null || _this$get2 === void 0 ? void 0 : _this$get2.value;
      return !isEmpty(content) ? content : def;
    }
    /**
     * 获取 desc
     * @param {string|number} val
     * @param {*} def 默认值，获取不到任何内容时返回
     * @return {*}
     */
  }, {
    key: "getDesc",
    value: function getDesc(val) {
      var _this$get3;
      var def = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var content = (_this$get3 = this.get(val)) === null || _this$get3 === void 0 ? void 0 : _this$get3.desc;
      return !isEmpty(content) ? content : def;
    }
    /**
     * 获取选项列表
     * 获取到的内容适用于 checkbox，radio，select 组件
     * @param {object} fieldNames 自定义节点 label、value 的字段
     * @param {string} fieldNames.label
     * @param {string} fieldNames.value
     */
  }, {
    key: "getOptions",
    value: function getOptions() {
      var fieldNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        label: "desc",
        value: "value"
      };
      var keys = Object.keys(fieldNames);
      return _classPrivateFieldGet(this, _list).map(function(item) {
        var record = {};
        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
          var key = _keys[_i];
          record[key] = item[fieldNames[key]];
        }
        return record;
      });
    }
    /**
     * 获取列表
     */
  }, {
    key: "getList",
    value: function getList() {
      return _classPrivateFieldGet(this, _list);
    }
    /**
     * 检查是否存在
     * @params {string|number} val
     */
  }, {
    key: "has",
    value: function has(val) {
      return _classPrivateFieldGet(this, _list).some(function(item) {
        return (item === null || item === void 0 ? void 0 : item.key) === val || (item === null || item === void 0 ? void 0 : item.value) === val;
      });
    }
    /**
     * 是否相等
     * @param {string|number} val
     * @param {string|number} value
     */
  }, {
    key: "is",
    value: function is(val, value) {
      var _this = this;
      var list = [];
      if (Array.isArray(val)) {
        val.forEach(function(item) {
          list.push.apply(list, [_this.getKey(item), _this.getValue(item)]);
        });
      } else {
        list.push.apply(list, [this.getKey(val), this.getValue(val)]);
      }
      return list.includes(value);
    }
  }]);
  return Enum2;
}();
export {
  Enum as default
};
//# sourceMappingURL=xy-enum.js.map
