import {
  createBlock,
  createElementBlock,
  defineComponent,
  onUnmounted,
  openBlock,
  ref,
  renderSlot,
  resolveDynamicComponent,
  shallowRef,
  toRefs,
  unref,
  watch,
  watchPostEffect,
  withCtx
} from "./chunk-GU3YDFVY.js";
import "./chunk-5WWUZCGV.js";

// node_modules/overlayscrollbars/overlayscrollbars.mjs
var createCache = (t2, n2) => {
  const { o: o2, u: s2, _: e2 } = t2;
  let c2 = o2;
  let r2;
  const cacheUpdateContextual = (t3, n3) => {
    const o3 = c2;
    const l2 = t3;
    const i2 = n3 || (s2 ? !s2(o3, l2) : o3 !== l2);
    if (i2 || e2) {
      c2 = l2;
      r2 = o3;
    }
    return [c2, i2, r2];
  };
  const cacheUpdateIsolated = (t3) => cacheUpdateContextual(n2(c2, r2), t3);
  const getCurrentCache = (t3) => [c2, !!t3, r2];
  return [n2 ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
};
var t = typeof window !== "undefined" && typeof document !== "undefined";
var n = t ? window : {};
var o = Math.max;
var s = Math.min;
var e = Math.round;
var c = Math.abs;
var r = n.cancelAnimationFrame;
var l = n.requestAnimationFrame;
var i = n.setTimeout;
var a = n.clearTimeout;
var getApi = (t2) => typeof n[t2] !== "undefined" ? n[t2] : void 0;
var u = getApi("MutationObserver");
var d = getApi("IntersectionObserver");
var f = getApi("ResizeObserver");
var _ = getApi("ScrollTimeline");
var v = t && Node.ELEMENT_NODE;
var { toString: h, hasOwnProperty: p } = Object.prototype;
var g = /^\[object (.+)\]$/;
var isUndefined = (t2) => t2 === void 0;
var isNull = (t2) => t2 === null;
var type = (t2) => isUndefined(t2) || isNull(t2) ? `${t2}` : h.call(t2).replace(g, "$1").toLowerCase();
var isNumber = (t2) => typeof t2 === "number";
var isString = (t2) => typeof t2 === "string";
var isBoolean = (t2) => typeof t2 === "boolean";
var isFunction = (t2) => typeof t2 === "function";
var isArray = (t2) => Array.isArray(t2);
var isObject = (t2) => typeof t2 === "object" && !isArray(t2) && !isNull(t2);
var isArrayLike = (t2) => {
  const n2 = !!t2 && t2.length;
  const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
  return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject(t2) ? n2 - 1 in t2 : true : false;
};
var isPlainObject = (t2) => {
  if (!t2 || !isObject(t2) || type(t2) !== "object") {
    return false;
  }
  let n2;
  const o2 = "constructor";
  const s2 = t2[o2];
  const e2 = s2 && s2.prototype;
  const c2 = p.call(t2, o2);
  const r2 = e2 && p.call(e2, "isPrototypeOf");
  if (s2 && !c2 && !r2) {
    return false;
  }
  for (n2 in t2) {
  }
  return isUndefined(n2) || p.call(t2, n2);
};
var isHTMLElement = (t2) => {
  const n2 = HTMLElement;
  return t2 ? n2 ? t2 instanceof n2 : t2.nodeType === v : false;
};
var isElement = (t2) => {
  const n2 = Element;
  return t2 ? n2 ? t2 instanceof n2 : t2.nodeType === v : false;
};
var animationCurrentTime = () => performance.now();
var animateNumber = (t2, n2, s2, e2, c2) => {
  let i2 = 0;
  const a2 = animationCurrentTime();
  const u2 = o(0, s2);
  const frame = (s3) => {
    const r2 = animationCurrentTime();
    const d2 = r2 - a2;
    const f2 = d2 >= u2;
    const _2 = s3 ? 1 : 1 - (o(0, a2 + u2 - r2) / u2 || 0);
    const v2 = (n2 - t2) * (isFunction(c2) ? c2(_2, _2 * u2, 0, 1, u2) : _2) + t2;
    const h2 = f2 || _2 === 1;
    e2 && e2(v2, _2, h2);
    i2 = h2 ? 0 : l(() => frame());
  };
  frame();
  return (t3) => {
    r(i2);
    t3 && frame(t3);
  };
};
function each(t2, n2) {
  if (isArrayLike(t2)) {
    for (let o2 = 0; o2 < t2.length; o2++) {
      if (n2(t2[o2], o2, t2) === false) {
        break;
      }
    }
  } else if (t2) {
    each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
  }
  return t2;
}
var inArray = (t2, n2) => t2.indexOf(n2) >= 0;
var concat = (t2, n2) => t2.concat(n2);
var push = (t2, n2, o2) => {
  !o2 && !isString(n2) && isArrayLike(n2) ? Array.prototype.push.apply(t2, n2) : t2.push(n2);
  return t2;
};
var from = (t2) => Array.from(t2 || []);
var createOrKeepArray = (t2) => isArray(t2) ? t2 : [t2];
var isEmptyArray = (t2) => !!t2 && !t2.length;
var deduplicateArray = (t2) => from(new Set(t2));
var runEachAndClear = (t2, n2, o2) => {
  const runFn = (t3) => t3 && t3.apply(void 0, n2 || []);
  each(t2, runFn);
  !o2 && (t2.length = 0);
};
var b = "paddingTop";
var w = "paddingRight";
var y = "paddingLeft";
var S = "paddingBottom";
var m = "marginLeft";
var $ = "marginRight";
var O = "marginBottom";
var C = "overflowX";
var x = "overflowY";
var H = "width";
var z = "height";
var I = "hidden";
var E = "visible";
var equal = (t2, n2, o2, s2) => {
  if (t2 && n2) {
    let e2 = true;
    each(o2, (o3) => {
      const c2 = s2 ? s2(t2[o3]) : t2[o3];
      const r2 = s2 ? s2(n2[o3]) : n2[o3];
      if (c2 !== r2) {
        e2 = false;
      }
    });
    return e2;
  }
  return false;
};
var equalWH = (t2, n2) => equal(t2, n2, ["w", "h"]);
var equalXY = (t2, n2) => equal(t2, n2, ["x", "y"]);
var equalTRBL = (t2, n2) => equal(t2, n2, ["t", "r", "b", "l"]);
var noop = () => {
};
var bind = (t2, ...n2) => t2.bind(0, ...n2);
var selfClearTimeout = (t2) => {
  let n2;
  const o2 = t2 ? i : l;
  const s2 = t2 ? a : r;
  return [(e2) => {
    s2(n2);
    n2 = o2(e2, isFunction(t2) ? t2() : t2);
  }, () => s2(n2)];
};
var debounce = (t2, n2) => {
  let o2;
  let s2;
  let e2;
  let c2 = noop;
  const { v: u2, p: d2, S: f2 } = n2 || {};
  const _2 = function invokeFunctionToDebounce(n3) {
    c2();
    a(o2);
    o2 = s2 = void 0;
    c2 = noop;
    t2.apply(this, n3);
  };
  const mergeParms = (t3) => f2 && s2 ? f2(s2, t3) : t3;
  const flush = () => {
    if (c2 !== noop) {
      _2(mergeParms(e2) || e2);
    }
  };
  const v2 = function debouncedFn() {
    const t3 = from(arguments);
    const n3 = isFunction(u2) ? u2() : u2;
    const f3 = isNumber(n3) && n3 >= 0;
    if (f3) {
      const u3 = isFunction(d2) ? d2() : d2;
      const f4 = isNumber(u3) && u3 >= 0;
      const v3 = n3 > 0 ? i : l;
      const h2 = n3 > 0 ? a : r;
      const p2 = mergeParms(t3);
      const g3 = p2 || t3;
      const b2 = _2.bind(0, g3);
      c2();
      const w2 = v3(b2, n3);
      c2 = () => h2(w2);
      if (f4 && !o2) {
        o2 = i(flush, u3);
      }
      s2 = e2 = g3;
    } else {
      _2(t3);
    }
  };
  v2.m = flush;
  return v2;
};
var hasOwnProperty = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2);
var keys = (t2) => t2 ? Object.keys(t2) : [];
var assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
  const l2 = [n2, o2, s2, e2, c2, r2];
  if ((typeof t2 !== "object" || isNull(t2)) && !isFunction(t2)) {
    t2 = {};
  }
  each(l2, (n3) => {
    each(n3, (o3, s3) => {
      const e3 = n3[s3];
      if (t2 === e3) {
        return true;
      }
      const c3 = isArray(e3);
      if (e3 && isPlainObject(e3)) {
        const n4 = t2[s3];
        let o4 = n4;
        if (c3 && !isArray(n4)) {
          o4 = [];
        } else if (!c3 && !isPlainObject(n4)) {
          o4 = {};
        }
        t2[s3] = assignDeep(o4, e3);
      } else {
        t2[s3] = c3 ? e3.slice() : e3;
      }
    });
  });
  return t2;
};
var removeUndefinedProperties = (t2, n2) => each(assignDeep({}, t2), (t3, o2, s2) => {
  if (t3 === void 0) {
    delete s2[o2];
  } else if (n2 && t3 && isPlainObject(t3)) {
    s2[o2] = removeUndefinedProperties(t3, n2);
  }
});
var isEmptyObject = (t2) => {
  for (const n2 in t2) {
    return false;
  }
  return true;
};
var capNumber = (t2, n2, e2) => o(t2, s(n2, e2));
var getDomTokensArray = (t2) => from(new Set((isArray(t2) ? t2 : (t2 || "").split(" ")).filter((t3) => t3)));
var getAttr = (t2, n2) => t2 && t2.getAttribute(n2);
var hasAttr = (t2, n2) => t2 && t2.hasAttribute(n2);
var setAttrs = (t2, n2, o2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.setAttribute(n3, o2 || "");
  });
};
var removeAttrs = (t2, n2) => {
  each(getDomTokensArray(n2), (n3) => t2 && t2.removeAttribute(n3));
};
var domTokenListAttr = (t2, n2) => {
  const o2 = getDomTokensArray(getAttr(t2, n2));
  const s2 = bind(setAttrs, t2, n2);
  const domTokenListOperation = (t3, n3) => {
    const s3 = new Set(o2);
    each(getDomTokensArray(t3), (t4) => s3[n3](t4));
    return from(s3).join(" ");
  };
  return {
    $: (t3) => s2(domTokenListOperation(t3, "delete")),
    O: (t3) => s2(domTokenListOperation(t3, "add")),
    C: (t3) => {
      const n3 = getDomTokensArray(t3);
      return n3.reduce((t4, n4) => t4 && o2.includes(n4), n3.length > 0);
    }
  };
};
var removeAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).$(o2);
};
var addAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).O(o2);
  return bind(removeAttrClass, t2, n2, o2);
};
var addRemoveAttrClass = (t2, n2, o2, s2) => {
  (s2 ? addAttrClass : removeAttrClass)(t2, n2, o2);
};
var hasAttrClass = (t2, n2, o2) => domTokenListAttr(t2, n2).C(o2);
var createDomTokenListClass = (t2) => domTokenListAttr(t2, "class");
var removeClass = (t2, n2) => {
  createDomTokenListClass(t2).$(n2);
};
var addClass = (t2, n2) => {
  createDomTokenListClass(t2).O(n2);
  return bind(removeClass, t2, n2);
};
var find = (t2, n2) => {
  const o2 = [];
  const s2 = n2 ? isElement(n2) && n2 : document;
  return s2 ? push(o2, s2.querySelectorAll(t2)) : o2;
};
var findFirst = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 ? o2.querySelector(t2) : null;
};
var is = (t2, n2) => {
  if (isElement(t2)) {
    return t2.matches(n2);
  }
  return false;
};
var isBodyElement = (t2) => is(t2, "body");
var contents = (t2) => t2 ? from(t2.childNodes) : [];
var parent = (t2) => t2 && t2.parentElement;
var closest = (t2, n2) => isElement(t2) && t2.closest(n2);
var getFocusedElement = (t2) => (t2 || document).activeElement;
var liesBetween = (t2, n2, o2) => {
  const s2 = closest(t2, n2);
  const e2 = t2 && findFirst(o2, s2);
  const c2 = closest(e2, n2) === s2;
  return s2 && e2 ? s2 === t2 || e2 === t2 || c2 && closest(closest(t2, o2), n2) !== s2 : false;
};
var removeElements = (t2) => {
  if (isArrayLike(t2)) {
    each(from(t2), (t3) => removeElements(t3));
  } else if (t2) {
    const n2 = parent(t2);
    n2 && n2.removeChild(t2);
  }
};
var before = (t2, n2, o2) => {
  if (o2 && t2) {
    let s2 = n2;
    let e2;
    if (isArrayLike(o2)) {
      e2 = document.createDocumentFragment();
      each(o2, (t3) => {
        if (t3 === s2) {
          s2 = t3.previousSibling;
        }
        e2.appendChild(t3);
      });
    } else {
      e2 = o2;
    }
    if (n2) {
      if (!s2) {
        s2 = t2.firstChild;
      } else if (s2 !== n2) {
        s2 = s2.nextSibling;
      }
    }
    t2.insertBefore(e2, s2 || null);
    return () => removeElements(o2);
  }
  return noop;
};
var appendChildren = (t2, n2) => before(t2, null, n2);
var insertAfter = (t2, n2) => before(parent(t2), t2 && t2.nextSibling, n2);
var createDiv = (t2) => {
  const n2 = document.createElement("div");
  setAttrs(n2, "class", t2);
  return n2;
};
var createDOM = (t2) => {
  const n2 = createDiv();
  n2.innerHTML = t2.trim();
  return each(contents(n2), (t3) => removeElements(t3));
};
var A = /^--/;
var getCSSVal = (t2, n2) => t2.getPropertyValue(n2) || t2[n2] || "";
var validFiniteNumber = (t2) => {
  const n2 = t2 || 0;
  return isFinite(n2) ? n2 : 0;
};
var parseToZeroOrNumber = (t2) => validFiniteNumber(parseFloat(t2 || ""));
var ratioToCssPercent = (t2) => `${(validFiniteNumber(t2) * 100).toFixed(3)}%`;
var numberToCssPx = (t2) => `${validFiniteNumber(t2)}px`;
function setStyles(t2, n2) {
  t2 && each(n2, (n3, o2) => {
    try {
      const s2 = t2.style;
      const e2 = isNumber(n3) ? numberToCssPx(n3) : (n3 || "") + "";
      if (A.test(o2)) {
        s2.setProperty(o2, e2);
      } else {
        s2[o2] = e2;
      }
    } catch (s2) {
    }
  });
}
function getStyles(t2, o2, s2) {
  const e2 = isString(o2);
  let c2 = e2 ? "" : {};
  if (t2) {
    const r2 = n.getComputedStyle(t2, s2) || t2.style;
    c2 = e2 ? getCSSVal(r2, o2) : o2.reduce((t3, n2) => {
      t3[n2] = getCSSVal(r2, n2);
      return t3;
    }, c2);
  }
  return c2;
}
var getDirectionIsRTL = (t2) => getStyles(t2, "direction") === "rtl";
var topRightBottomLeft = (t2, n2, o2) => {
  const s2 = n2 ? `${n2}-` : "";
  const e2 = o2 ? `-${o2}` : "";
  const c2 = `${s2}top${e2}`;
  const r2 = `${s2}right${e2}`;
  const l2 = `${s2}bottom${e2}`;
  const i2 = `${s2}left${e2}`;
  const a2 = getStyles(t2, [c2, r2, l2, i2]);
  return {
    t: parseToZeroOrNumber(a2[c2]),
    r: parseToZeroOrNumber(a2[r2]),
    b: parseToZeroOrNumber(a2[l2]),
    l: parseToZeroOrNumber(a2[i2])
  };
};
var getTrasformTranslateValue = (t2, n2) => `translate${isObject(t2) ? `(${t2.x},${t2.y})` : `${n2 ? "X" : "Y"}(${t2})`}`;
var T = {
  w: 0,
  h: 0
};
var getElmWidthHeightProperty = (t2, n2) => n2 ? {
  w: n2[`${t2}Width`],
  h: n2[`${t2}Height`]
} : T;
var windowSize = (t2) => getElmWidthHeightProperty("inner", t2 || n);
var D = bind(getElmWidthHeightProperty, "offset");
var k = bind(getElmWidthHeightProperty, "client");
var R = bind(getElmWidthHeightProperty, "scroll");
var fractionalSize = (t2) => {
  const n2 = parseFloat(getStyles(t2, H)) || 0;
  const o2 = parseFloat(getStyles(t2, z)) || 0;
  return {
    w: n2 - e(n2),
    h: o2 - e(o2)
  };
};
var getBoundingClientRect = (t2) => t2.getBoundingClientRect();
var domRectHasDimensions = (t2) => !!(t2 && (t2[z] || t2[H]));
var domRectAppeared = (t2, n2) => {
  const o2 = domRectHasDimensions(t2);
  const s2 = domRectHasDimensions(n2);
  return !s2 && o2;
};
var removeEventListener = (t2, n2, o2, s2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2.removeEventListener(n3, o2, s2);
  });
};
var addEventListener = (t2, n2, o2, s2) => {
  var e2;
  const c2 = (e2 = s2 && s2.H) != null ? e2 : true;
  const r2 = s2 && s2.I || false;
  const l2 = s2 && s2.A || false;
  const i2 = {
    passive: c2,
    capture: r2
  };
  return bind(runEachAndClear, getDomTokensArray(n2).map((n3) => {
    const s3 = l2 ? (e3) => {
      removeEventListener(t2, n3, s3, r2);
      o2(e3);
    } : o2;
    t2.addEventListener(n3, s3, i2);
    return bind(removeEventListener, t2, n3, s3, r2);
  }));
};
var stopPropagation = (t2) => t2.stopPropagation();
var preventDefault = (t2) => t2.preventDefault();
var M = {
  x: 0,
  y: 0
};
var absoluteCoordinates = (t2) => {
  const o2 = t2 && getBoundingClientRect(t2);
  return o2 ? {
    x: o2.left + n.scrollX,
    y: o2.top + n.scrollY
  } : M;
};
var convertScrollPosition = (t2, n2, o2) => o2 ? o2.n ? -t2 + 0 : o2.i ? n2 - t2 : t2 : t2;
var getRawScrollBounds = (t2, n2) => [convertScrollPosition(0, t2, n2), convertScrollPosition(t2, t2, n2)];
var getRawScrollRatio = (t2, n2, o2) => capNumber(0, 1, convertScrollPosition(t2, n2, o2) / n2 || 0);
var scrollElementTo = (t2, n2) => {
  const { x: o2, y: s2 } = isNumber(n2) ? {
    x: n2,
    y: n2
  } : n2 || {};
  isNumber(o2) && (t2.scrollLeft = o2);
  isNumber(s2) && (t2.scrollTop = s2);
};
var getElmentScroll = (t2) => ({
  x: t2.scrollLeft,
  y: t2.scrollTop
});
var manageListener = (t2, n2) => {
  each(createOrKeepArray(n2), t2);
};
var createEventListenerHub = (t2) => {
  const n2 = /* @__PURE__ */ new Map();
  const removeEvent = (t3, o2) => {
    if (t3) {
      const s2 = n2.get(t3);
      manageListener((t4) => {
        if (s2) {
          s2[t4 ? "delete" : "clear"](t4);
        }
      }, o2);
    } else {
      n2.forEach((t4) => {
        t4.clear();
      });
      n2.clear();
    }
  };
  const addEvent = (t3, o2) => {
    if (isString(t3)) {
      const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
      n2.set(t3, s3);
      manageListener((t4) => {
        isFunction(t4) && s3.add(t4);
      }, o2);
      return bind(removeEvent, t3, o2);
    }
    if (isBoolean(o2) && o2) {
      removeEvent();
    }
    const s2 = keys(t3);
    const e2 = [];
    each(s2, (n3) => {
      const o3 = t3[n3];
      o3 && push(e2, addEvent(n3, o3));
    });
    return bind(runEachAndClear, e2);
  };
  const triggerEvent = (t3, o2) => {
    each(from(n2.get(t3)), (t4) => {
      if (o2 && !isEmptyArray(o2)) {
        t4.apply(0, o2);
      } else {
        t4();
      }
    });
  };
  addEvent(t2 || {});
  return [addEvent, removeEvent, triggerEvent];
};
var opsStringify = (t2) => JSON.stringify(t2, (t3, n2) => {
  if (isFunction(n2)) {
    throw 0;
  }
  return n2;
});
var getPropByPath = (t2, n2) => t2 ? `${n2}`.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0;
var V = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ["mouse", "touch", "pen"]
  }
};
var getOptionsDiff = (t2, n2) => {
  const o2 = {};
  const s2 = concat(keys(n2), keys(t2));
  each(s2, (s3) => {
    const e2 = t2[s3];
    const c2 = n2[s3];
    if (isObject(e2) && isObject(c2)) {
      assignDeep(o2[s3] = {}, getOptionsDiff(e2, c2));
      if (isEmptyObject(o2[s3])) {
        delete o2[s3];
      }
    } else if (hasOwnProperty(n2, s3) && c2 !== e2) {
      let t3 = true;
      if (isArray(e2) || isArray(c2)) {
        try {
          if (opsStringify(e2) === opsStringify(c2)) {
            t3 = false;
          }
        } catch (r2) {
        }
      }
      if (t3) {
        o2[s3] = c2;
      }
    }
  });
  return o2;
};
var createOptionCheck = (t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || getPropByPath(n2, s2) !== void 0];
var L = `data-overlayscrollbars`;
var P = "os-environment";
var U = `${P}-scrollbar-hidden`;
var B = `${L}-initialize`;
var N = L;
var j = `${N}-overflow-x`;
var F = `${N}-overflow-y`;
var q = "overflowVisible";
var W = "scrollbarPressed";
var X = "updating";
var Y = "body";
var J = `${L}-viewport`;
var K = "arrange";
var Z = "scrollbarHidden";
var G = q;
var Q = `${L}-padding`;
var tt = G;
var nt = `${L}-content`;
var ot = "os-size-observer";
var st = `${ot}-appear`;
var et = `${ot}-listener`;
var ct = `${et}-scroll`;
var rt = `${et}-item`;
var lt = `${rt}-final`;
var it = "os-trinsic-observer";
var at = "os-theme-none";
var ut = "os-scrollbar";
var dt = `${ut}-rtl`;
var ft = `${ut}-horizontal`;
var _t = `${ut}-vertical`;
var vt = `${ut}-track`;
var ht = `${ut}-handle`;
var pt = `${ut}-visible`;
var gt = `${ut}-cornerless`;
var bt = `${ut}-interaction`;
var wt = `${ut}-unusable`;
var yt = `${ut}-auto-hide`;
var St = `${yt}-hidden`;
var mt = `${ut}-wheel`;
var $t = `${vt}-interactive`;
var Ot = `${ht}-interactive`;
var Ct = {};
var xt = {};
var addPlugins = (t2) => {
  each(t2, (t3) => each(t3, (n2, o2) => {
    Ct[o2] = t3[o2];
  }));
};
var registerPluginModuleInstances = (t2, n2, o2) => keys(t2).map((s2) => {
  const { static: e2, instance: c2 } = t2[s2];
  const [r2, l2, i2] = o2 || [];
  const a2 = o2 ? c2 : e2;
  if (a2) {
    const t3 = o2 ? a2(r2, l2, n2) : a2(n2);
    return (i2 || xt)[s2] = t3;
  }
});
var getStaticPluginModuleInstance = (t2) => xt[t2];
var Ht = "__osOptionsValidationPlugin";
var zt = "__osSizeObserverPlugin";
var It = (() => ({
  [zt]: {
    static: () => (t2, n2, o2) => {
      const s2 = 3333333;
      const e2 = "scroll";
      const c2 = createDOM(`<div class="${rt}" dir="ltr"><div class="${rt}"><div class="${lt}"></div></div><div class="${rt}"><div class="${lt}" style="width: 200%; height: 200%"></div></div></div>`);
      const i2 = c2[0];
      const a2 = i2.lastChild;
      const u2 = i2.firstChild;
      const d2 = u2 == null ? void 0 : u2.firstChild;
      let f2 = D(i2);
      let _2 = f2;
      let v2 = false;
      let h2;
      const reset = () => {
        scrollElementTo(u2, s2);
        scrollElementTo(a2, s2);
      };
      const onResized = (t3) => {
        h2 = 0;
        if (v2) {
          f2 = _2;
          n2(t3 === true);
        }
      };
      const onScroll = (t3) => {
        _2 = D(i2);
        v2 = !t3 || !equalWH(_2, f2);
        if (t3) {
          stopPropagation(t3);
          if (v2 && !h2) {
            r(h2);
            h2 = l(onResized);
          }
        } else {
          onResized(t3 === false);
        }
        reset();
      };
      const p2 = [appendChildren(t2, c2), addEventListener(u2, e2, onScroll), addEventListener(a2, e2, onScroll)];
      addClass(t2, ct);
      setStyles(d2, {
        [H]: s2,
        [z]: s2
      });
      l(reset);
      return [o2 ? bind(onScroll, false) : reset, p2];
    }
  }
}))();
var getShowNativeOverlaidScrollbars = (t2, n2) => {
  const { T: o2 } = n2;
  const [s2, e2] = t2("showNativeOverlaidScrollbars");
  return [s2 && o2.x && o2.y, e2];
};
var overflowIsVisible = (t2) => t2.indexOf(E) === 0;
var getViewportOverflowState = (t2, n2) => {
  const { D: o2 } = t2;
  const getStatePerAxis = (t3) => {
    const s3 = getStyles(o2, t3);
    const e3 = n2 ? n2[t3] : s3;
    const c3 = e3 === "scroll";
    return [s3, c3];
  };
  const [s2, e2] = getStatePerAxis(C);
  const [c2, r2] = getStatePerAxis(x);
  return {
    k: {
      x: s2,
      y: c2
    },
    R: {
      x: e2,
      y: r2
    }
  };
};
var setViewportOverflowState = (t2, n2, o2, s2) => {
  const e2 = n2.x || n2.y;
  const setAxisOverflowStyle = (t3, n3) => {
    const o3 = overflowIsVisible(t3);
    const s3 = o3 && e2 ? "hidden" : "";
    const c3 = n3 && o3 && t3.replace(`${E}-`, "") || s3;
    return [n3 && !o3 ? t3 : "", overflowIsVisible(c3) ? "hidden" : c3];
  };
  const [c2, r2] = setAxisOverflowStyle(o2.x, n2.x);
  const [l2, i2] = setAxisOverflowStyle(o2.y, n2.y);
  s2[C] = r2 && l2 ? r2 : c2;
  s2[x] = i2 && c2 ? i2 : l2;
  return getViewportOverflowState(t2, s2);
};
var Et = "__osScrollbarsHidingPlugin";
var At = (() => ({
  [Et]: {
    static: () => ({
      M: (t2, n2, o2, s2, e2) => {
        const { V: c2, D: r2 } = t2;
        const { L: l2, T: i2, P: a2 } = s2;
        const u2 = !c2 && !l2 && (i2.x || i2.y);
        const [d2] = getShowNativeOverlaidScrollbars(e2, s2);
        const _getViewportOverflowHideOffset = (t3) => {
          const { R: n3 } = t3;
          const o3 = l2 || d2 ? 0 : 42;
          const getHideOffsetPerAxis = (t4, n4, s4) => {
            const e4 = t4 ? o3 : s4;
            const c4 = n4 && !l2 ? e4 : 0;
            const r4 = t4 && !!o3;
            return [c4, r4];
          };
          const [s3, e3] = getHideOffsetPerAxis(i2.x, n3.x, a2.x);
          const [c3, r3] = getHideOffsetPerAxis(i2.y, n3.y, a2.y);
          return {
            U: {
              x: s3,
              y: c3
            },
            B: {
              x: e3,
              y: r3
            }
          };
        };
        const _hideNativeScrollbars = (t3, { N: o3 }, s3, e3) => {
          assignDeep(e3, {
            [$]: 0,
            [O]: 0,
            [m]: 0
          });
          if (!c2) {
            const { U: c3, B: r3 } = _getViewportOverflowHideOffset(t3);
            const { x: l3, y: i3 } = r3;
            const { x: a3, y: u3 } = c3;
            const { j: d3 } = n2;
            const f2 = o3 ? m : $;
            const _2 = o3 ? y : w;
            const v2 = d3[f2];
            const h2 = d3[O];
            const p2 = d3[_2];
            const g3 = d3[S];
            e3[H] = `calc(100% + ${u3 + v2 * -1}px)`;
            e3[f2] = -u3 + v2;
            e3[O] = -a3 + h2;
            if (s3) {
              e3[_2] = p2 + (i3 ? u3 : 0);
              e3[S] = g3 + (l3 ? a3 : 0);
            }
          }
        };
        const _arrangeViewport = (t3, s3, e3) => {
          if (u2) {
            const { j: c3 } = n2;
            const { U: l3, B: i3 } = _getViewportOverflowHideOffset(t3);
            const { x: a3, y: u3 } = i3;
            const { x: d3, y: f2 } = l3;
            const { N: _2 } = o2;
            const v2 = _2 ? w : y;
            const h2 = c3[v2];
            const p2 = c3.paddingTop;
            const g3 = s3.w + e3.w;
            const b2 = s3.h + e3.h;
            const S2 = {
              w: f2 && u3 ? `${f2 + g3 - h2}px` : "",
              h: d3 && a3 ? `${d3 + b2 - p2}px` : ""
            };
            setStyles(r2, {
              "--os-vaw": S2.w,
              "--os-vah": S2.h
            });
          }
          return u2;
        };
        const _undoViewportArrange = (s3) => {
          if (u2) {
            const e3 = s3 || getViewportOverflowState(t2);
            const { j: c3 } = n2;
            const { B: l3 } = _getViewportOverflowHideOffset(e3);
            const { x: i3, y: a3 } = l3;
            const d3 = {};
            const assignProps = (t3) => each(t3, (t4) => {
              d3[t4] = c3[t4];
            });
            if (i3) {
              assignProps([O, b, S]);
            }
            if (a3) {
              assignProps([m, $, y, w]);
            }
            const f2 = getStyles(r2, keys(d3));
            removeAttrClass(r2, J, K);
            setStyles(r2, d3);
            return [() => {
              _hideNativeScrollbars(e3, o2, u2, f2);
              setStyles(r2, f2);
              addAttrClass(r2, J, K);
            }, e3];
          }
          return [noop];
        };
        return {
          F: _getViewportOverflowHideOffset,
          q: _arrangeViewport,
          W: _undoViewportArrange,
          X: _hideNativeScrollbars
        };
      },
      Y: () => {
        let t2 = {
          w: 0,
          h: 0
        };
        let o2 = 0;
        const getWindowDPR = () => {
          const t3 = n.screen;
          const o3 = t3.deviceXDPI || 0;
          const s2 = t3.logicalXDPI || 1;
          return n.devicePixelRatio || o3 / s2;
        };
        const diffBiggerThanOne = (t3, n2) => {
          const o3 = c(t3);
          const s2 = c(n2);
          return !(o3 === s2 || o3 + 1 === s2 || o3 - 1 === s2);
        };
        return (n2, s2) => {
          const r2 = windowSize();
          const l2 = {
            w: r2.w - t2.w,
            h: r2.h - t2.h
          };
          if (l2.w === 0 && l2.h === 0) {
            return;
          }
          const i2 = {
            w: c(l2.w),
            h: c(l2.h)
          };
          const a2 = {
            w: c(e(r2.w / (t2.w / 100))),
            h: c(e(r2.h / (t2.h / 100)))
          };
          const u2 = getWindowDPR();
          const d2 = i2.w > 2 && i2.h > 2;
          const f2 = !diffBiggerThanOne(a2.w, a2.h);
          const _2 = u2 !== o2 && u2 > 0;
          const v2 = d2 && f2 && _2;
          let h2;
          let p2;
          if (v2) {
            [p2, h2] = s2();
            assignDeep(n2.P, p2);
          }
          t2 = r2;
          o2 = u2;
          return h2;
        };
      }
    })
  }
}))();
var Tt = "__osClickScrollPlugin";
var Dt = (() => ({
  [Tt]: {
    static: () => (t2, n2, o2, s2, e2) => {
      let c2 = 0;
      let r2 = noop;
      const animateClickScroll = (l2) => {
        r2 = animateNumber(l2, l2 + s2 * Math.sign(o2), 133, (o3, l3, a2) => {
          t2(o3);
          const u2 = n2();
          const d2 = u2 + s2;
          const f2 = e2 >= u2 && e2 <= d2;
          if (a2 && !f2) {
            if (c2) {
              animateClickScroll(o3);
            } else {
              const t3 = i(() => {
                animateClickScroll(o3);
              }, 222);
              r2 = () => {
                clearTimeout(t3);
              };
            }
            c2++;
          }
        });
      };
      animateClickScroll(0);
      return () => r2();
    }
  }
}))();
var kt;
var createEnvironment = () => {
  const getNativeScrollbarSize = (t3, n2, o3, s3) => {
    appendChildren(t3, n2);
    const e3 = k(n2);
    const c3 = D(n2);
    const r3 = fractionalSize(o3);
    s3 && removeElements(n2);
    return {
      x: c3.h - e3.h + r3.h,
      y: c3.w - e3.w + r3.w
    };
  };
  const getNativeScrollbarsHiding = (t3) => {
    let n2 = false;
    const o3 = addClass(t3, U);
    try {
      n2 = getStyles(t3, "scrollbar-width") === "none" || getStyles(t3, "display", "::-webkit-scrollbar") === "none";
    } catch (s3) {
    }
    o3();
    return n2;
  };
  const getRtlScrollBehavior = (t3, n2) => {
    setStyles(t3, {
      [C]: I,
      [x]: I,
      direction: "rtl"
    });
    scrollElementTo(t3, {
      x: 0
    });
    const o3 = absoluteCoordinates(t3);
    const s3 = absoluteCoordinates(n2);
    scrollElementTo(t3, {
      x: -999
    });
    const e3 = absoluteCoordinates(n2);
    return {
      i: o3.x === s3.x,
      n: s3.x !== e3.x
    };
  };
  const { body: t2 } = document;
  const o2 = `.${P}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${P} div{width:200%;height:200%;margin:10px 0}.${U}{scrollbar-width:none!important}.${U}::-webkit-scrollbar,.${U}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`;
  const s2 = createDOM(`<div class="${P}"><div></div><style>${o2}</style></div>`);
  const e2 = s2[0];
  const c2 = e2.firstChild;
  const [r2, , l2] = createEventListenerHub();
  const [i2, a2] = createCache({
    o: getNativeScrollbarSize(t2, e2, c2),
    u: equalXY
  }, bind(getNativeScrollbarSize, t2, e2, c2, true));
  const [u2] = a2();
  const d2 = getNativeScrollbarsHiding(e2);
  const f2 = {
    x: u2.x === 0,
    y: u2.y === 0
  };
  const v2 = {
    elements: {
      host: null,
      padding: !d2,
      viewport: (t3) => d2 && isBodyElement(t3) && t3,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const h2 = assignDeep({}, V);
  const p2 = bind(assignDeep, {}, h2);
  const g3 = bind(assignDeep, {}, v2);
  const b2 = {
    P: u2,
    T: f2,
    L: d2,
    J: !!_,
    K: getRtlScrollBehavior(e2, c2),
    Z: bind(r2, "r"),
    G: g3,
    tt: (t3) => assignDeep(v2, t3) && g3(),
    nt: p2,
    ot: (t3) => assignDeep(h2, t3) && p2(),
    st: assignDeep({}, v2),
    et: assignDeep({}, h2)
  };
  removeAttrs(e2, "style");
  removeElements(e2);
  n.addEventListener("resize", () => {
    let t3;
    if (!d2 && (!f2.x || !f2.y)) {
      const n2 = getStaticPluginModuleInstance(Et);
      const o3 = n2 ? n2.Y() : noop;
      t3 = !!o3(b2, i2);
    }
    l2("r", [t3]);
  });
  return b2;
};
var getEnvironment = () => {
  if (!kt) {
    kt = createEnvironment();
  }
  return kt;
};
var resolveInitialization = (t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2;
var staticInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return c2 || n2.apply(0, t2);
};
var dynamicInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
};
var cancelInitialization = (t2, n2) => {
  const { nativeScrollbarsOverlaid: o2, body: s2 } = n2 || {};
  const { T: e2, L: c2, G: r2 } = getEnvironment();
  const { nativeScrollbarsOverlaid: l2, body: i2 } = r2().cancel;
  const a2 = o2 != null ? o2 : l2;
  const u2 = isUndefined(s2) ? i2 : s2;
  const d2 = (e2.x || e2.y) && a2;
  const f2 = t2 && (isNull(u2) ? !c2 : u2);
  return !!d2 || !!f2;
};
var Rt = /* @__PURE__ */ new WeakMap();
var addInstance = (t2, n2) => {
  Rt.set(t2, n2);
};
var removeInstance = (t2) => {
  Rt.delete(t2);
};
var getInstance = (t2) => Rt.get(t2);
var createEventContentChange = (t2, n2, o2) => {
  let s2 = false;
  const e2 = o2 ? /* @__PURE__ */ new WeakMap() : false;
  const destroy = () => {
    s2 = true;
  };
  const updateElements = (c2) => {
    if (e2 && o2) {
      const r2 = o2.map((n3) => {
        const [o3, s3] = n3 || [];
        const e3 = s3 && o3 ? (c2 || find)(o3, t2) : [];
        return [e3, s3];
      });
      each(r2, (o3) => each(o3[0], (c3) => {
        const r3 = o3[1];
        const l2 = e2.get(c3) || [];
        const i2 = t2.contains(c3);
        if (i2 && r3) {
          const t3 = addEventListener(c3, r3, (o4) => {
            if (s2) {
              t3();
              e2.delete(c3);
            } else {
              n2(o4);
            }
          });
          e2.set(c3, push(l2, t3));
        } else {
          runEachAndClear(l2);
          e2.delete(c3);
        }
      }));
    }
  };
  updateElements();
  return [destroy, updateElements];
};
var createDOMObserver = (t2, n2, o2, s2) => {
  let e2 = false;
  const { ct: c2, rt: r2, lt: l2, it: i2, ut: a2, dt: d2 } = s2 || {};
  const f2 = debounce(() => e2 && o2(true), {
    v: 33,
    p: 99
  });
  const [_2, v2] = createEventContentChange(t2, f2, l2);
  const h2 = c2 || [];
  const p2 = r2 || [];
  const g3 = concat(h2, p2);
  const observerCallback = (e3, c3) => {
    if (!isEmptyArray(c3)) {
      const r3 = a2 || noop;
      const l3 = d2 || noop;
      const u2 = [];
      const f3 = [];
      let _3 = false;
      let h3 = false;
      each(c3, (o3) => {
        const { attributeName: e4, target: c4, type: a3, oldValue: d3, addedNodes: v3, removedNodes: g4 } = o3;
        const b3 = a3 === "attributes";
        const w2 = a3 === "childList";
        const y2 = t2 === c4;
        const S2 = b3 && e4;
        const m2 = S2 && getAttr(c4, e4 || "") || null;
        const $2 = S2 && d3 !== m2;
        const O2 = inArray(p2, e4) && $2;
        if (n2 && (w2 || !y2)) {
          const n3 = b3 && $2;
          const a4 = n3 && i2 && is(c4, i2);
          const f4 = a4 ? !r3(c4, e4, d3, m2) : !b3 || n3;
          const _4 = f4 && !l3(o3, !!a4, t2, s2);
          each(v3, (t3) => push(u2, t3));
          each(g4, (t3) => push(u2, t3));
          h3 = h3 || _4;
        }
        if (!n2 && y2 && $2 && !r3(c4, e4, d3, m2)) {
          push(f3, e4);
          _3 = _3 || O2;
        }
      });
      v2((t3) => deduplicateArray(u2).reduce((n3, o3) => {
        push(n3, find(t3, o3));
        return is(o3, t3) ? push(n3, o3) : n3;
      }, []));
      if (n2) {
        !e3 && h3 && o2(false);
        return [false];
      }
      if (!isEmptyArray(f3) || _3) {
        const t3 = [deduplicateArray(f3), _3];
        !e3 && o2.apply(0, t3);
        return t3;
      }
    }
  };
  const b2 = new u(bind(observerCallback, false));
  return [() => {
    b2.observe(t2, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: g3,
      subtree: n2,
      childList: n2,
      characterData: n2
    });
    e2 = true;
    return () => {
      if (e2) {
        _2();
        b2.disconnect();
        e2 = false;
      }
    };
  }, () => {
    if (e2) {
      f2.m();
      return observerCallback(true, b2.takeRecords());
    }
  }];
};
var createSizeObserver = (t2, n2, o2) => {
  const s2 = 3333333;
  const { ft: e2, _t: c2 } = o2 || {};
  const r2 = getStaticPluginModuleInstance(zt);
  const { K: l2 } = getEnvironment();
  const i2 = bind(getDirectionIsRTL, t2);
  const [a2] = createCache({
    o: false,
    _: true
  });
  return () => {
    const o3 = [];
    const u2 = createDOM(`<div class="${ot}"><div class="${et}"></div></div>`);
    const d2 = u2[0];
    const _2 = d2.firstChild;
    const onSizeChangedCallbackProxy = (t3) => {
      const o4 = t3 instanceof ResizeObserverEntry;
      const c3 = !o4 && isArray(t3);
      let r3 = false;
      let i3 = false;
      let u3 = true;
      if (o4) {
        const [n3, , o5] = a2(t3.contentRect);
        const s3 = domRectHasDimensions(n3);
        const e3 = domRectAppeared(n3, o5);
        const c4 = !o5;
        i3 = c4 || e3;
        r3 = !i3 && !s3;
        u3 = !r3;
      } else if (c3) {
        [, u3] = t3;
      } else {
        i3 = t3 === true;
      }
      if (e2 && u3) {
        const n3 = c3 ? t3[0] : getDirectionIsRTL(d2);
        scrollElementTo(d2, {
          x: convertScrollPosition(s2, s2, n3 && l2),
          y: s2
        });
      }
      if (!r3) {
        n2({
          vt: c3 ? t3 : void 0,
          ht: !c3,
          _t: i3
        });
      }
    };
    if (f) {
      const t3 = new f((t4) => onSizeChangedCallbackProxy(t4.pop()));
      t3.observe(_2);
      push(o3, () => {
        t3.disconnect();
      });
    } else if (r2) {
      const [t3, n3] = r2(_2, onSizeChangedCallbackProxy, c2);
      push(o3, concat([addClass(d2, st), addEventListener(d2, "animationstart", t3)], n3));
    } else {
      return noop;
    }
    if (e2) {
      const [t3] = createCache({
        o: void 0
      }, i2);
      push(o3, addEventListener(d2, "scroll", (n3) => {
        const o4 = t3();
        const [s3, e3, c3] = o4;
        if (e3) {
          removeClass(_2, "ltr rtl");
          addClass(_2, s3 ? "rtl" : "ltr");
          onSizeChangedCallbackProxy([!!s3, e3, c3]);
        }
        stopPropagation(n3);
      }));
    }
    return bind(runEachAndClear, push(o3, appendChildren(t2, d2)));
  };
};
var createTrinsicObserver = (t2, n2) => {
  let o2;
  const isHeightIntrinsic = (t3) => t3.h === 0 || t3.isIntersecting || t3.intersectionRatio > 0;
  const s2 = createDiv(it);
  const [e2] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t3, o3) => {
    if (t3) {
      const s3 = e2(isHeightIntrinsic(t3));
      const [, c2] = s3;
      return c2 && !o3 && n2(s3) && [s3];
    }
  };
  const intersectionObserverCallback = (t3, n3) => triggerOnTrinsicChangedCallback(n3.pop(), t3);
  return [() => {
    const n3 = [];
    if (d) {
      o2 = new d(bind(intersectionObserverCallback, false), {
        root: t2
      });
      o2.observe(s2);
      push(n3, () => {
        o2.disconnect();
      });
    } else {
      const onSizeChanged = () => {
        const t3 = D(s2);
        triggerOnTrinsicChangedCallback(t3);
      };
      push(n3, createSizeObserver(s2, onSizeChanged)());
      onSizeChanged();
    }
    return bind(runEachAndClear, push(n3, appendChildren(t2, s2)));
  }, () => o2 && intersectionObserverCallback(true, o2.takeRecords())];
};
var createObserversSetup = (t2, n2, o2, s2) => {
  let e2;
  let c2;
  let r2;
  let l2;
  let i2;
  let a2;
  const { L: u2 } = getEnvironment();
  const d2 = `[${N}]`;
  const _2 = `[${J}]`;
  const v2 = ["tabindex"];
  const h2 = ["wrap", "cols", "rows"];
  const p2 = ["id", "class", "style", "open"];
  const { gt: g3, bt: b2, D: w2, wt: y2, yt: S2, V: m2, St: $2, $t: O2 } = t2;
  const C2 = {
    Ot: false,
    N: getDirectionIsRTL(g3)
  };
  const x3 = getEnvironment();
  const H2 = getStaticPluginModuleInstance(Et);
  const [z2] = createCache({
    u: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const s3 = H2 && H2.M(t2, n2, C2, x3, o2).W;
    const e3 = $2(G);
    const c3 = !m2 && $2(K);
    const r3 = c3 && getElmentScroll(w2);
    O2(G);
    m2 && O2(X, true);
    const l3 = c3 && s3 && s3()[0];
    const i3 = R(y2);
    const a3 = R(w2);
    const u3 = fractionalSize(w2);
    O2(G, e3);
    m2 && O2(X);
    l3 && l3();
    scrollElementTo(w2, r3);
    return {
      w: a3.w + i3.w + u3.w,
      h: a3.h + i3.h + u3.h
    };
  });
  const I2 = S2 ? h2 : concat(p2, h2);
  const E2 = debounce(s2, {
    v: () => e2,
    p: () => c2,
    S(t3, n3) {
      const [o3] = t3;
      const [s3] = n3;
      return [concat(keys(o3), keys(s3)).reduce((t4, n4) => {
        t4[n4] = o3[n4] || s3[n4];
        return t4;
      }, {})];
    }
  });
  const setDirectionWhenViewportIsTarget = (t3) => {
    if (m2) {
      const n3 = getDirectionIsRTL(g3);
      assignDeep(t3, {
        Ct: a2 !== n3
      });
      assignDeep(C2, {
        N: n3
      });
      a2 = n3;
    }
  };
  const updateViewportAttrsFromHost = (t3) => {
    each(t3 || v2, (t4) => {
      if (inArray(v2, t4)) {
        const n3 = getAttr(b2, t4);
        if (isString(n3)) {
          setAttrs(w2, t4, n3);
        } else {
          removeAttrs(w2, t4);
        }
      }
    });
  };
  const onTrinsicChanged = (t3, n3) => {
    const [o3, e3] = t3;
    const c3 = {
      xt: e3
    };
    assignDeep(C2, {
      Ot: o3
    });
    !n3 && s2(c3);
    return c3;
  };
  const onSizeChanged = ({ ht: t3, vt: n3, _t: o3 }) => {
    const e3 = t3 && !o3 && !n3;
    const c3 = !e3 && u2 ? E2 : s2;
    const [r3, l3] = n3 || [];
    const i3 = {
      ht: t3 || o3,
      _t: o3,
      Ct: l3
    };
    setDirectionWhenViewportIsTarget(i3);
    n3 && assignDeep(C2, {
      N: r3
    });
    c3(i3);
  };
  const onContentMutation = (t3, n3) => {
    const [, o3] = z2();
    const e3 = {
      Ht: o3
    };
    setDirectionWhenViewportIsTarget(e3);
    const c3 = t3 ? s2 : E2;
    o3 && !n3 && c3(e3);
    return e3;
  };
  const onHostMutation = (t3, n3, o3) => {
    const s3 = {
      zt: n3
    };
    setDirectionWhenViewportIsTarget(s3);
    if (n3 && !o3) {
      E2(s3);
    } else if (!m2) {
      updateViewportAttrsFromHost(t3);
    }
    return s3;
  };
  const { Z: A2 } = x3;
  const [T2, D2] = y2 ? createTrinsicObserver(b2, onTrinsicChanged) : [];
  const k2 = !m2 && createSizeObserver(b2, onSizeChanged, {
    _t: true,
    ft: true
  });
  const [M2, V2] = createDOMObserver(b2, false, onHostMutation, {
    rt: p2,
    ct: concat(p2, v2)
  });
  const L2 = m2 && f && new f((t3) => {
    const n3 = t3[t3.length - 1].contentRect;
    onSizeChanged({
      ht: true,
      _t: domRectAppeared(n3, i2)
    });
    i2 = n3;
  });
  return [() => {
    updateViewportAttrsFromHost();
    L2 && L2.observe(b2);
    const t3 = k2 && k2();
    const n3 = T2 && T2();
    const o3 = M2();
    const s3 = A2((t4) => {
      const [, n4] = z2();
      E2({
        It: t4,
        Ht: n4
      });
    });
    return () => {
      L2 && L2.disconnect();
      t3 && t3();
      n3 && n3();
      l2 && l2();
      o3();
      s3();
    };
  }, ({ Et: t3, At: n3, Tt: o3 }) => {
    const s3 = {};
    const [i3] = t3("update.ignoreMutation");
    const [a3, u3] = t3("update.attributes");
    const [f2, v3] = t3("update.elementEvents");
    const [h3, p3] = t3("update.debounce");
    const g4 = v3 || u3;
    const b3 = n3 || o3;
    const ignoreMutationFromOptions = (t4) => isFunction(i3) && i3(t4);
    if (g4) {
      r2 && r2();
      l2 && l2();
      const [t4, n4] = createDOMObserver(y2 || w2, true, onContentMutation, {
        ct: concat(I2, a3 || []),
        lt: f2,
        it: d2,
        dt: (t5, n5) => {
          const { target: o4, attributeName: s4 } = t5;
          const e3 = !n5 && s4 && !m2 ? liesBetween(o4, d2, _2) : false;
          return e3 || !!closest(o4, `.${ut}`) || !!ignoreMutationFromOptions(t5);
        }
      });
      l2 = t4();
      r2 = n4;
    }
    if (p3) {
      E2.m();
      if (isArray(h3)) {
        const t4 = h3[0];
        const n4 = h3[1];
        e2 = isNumber(t4) && t4;
        c2 = isNumber(n4) && n4;
      } else if (isNumber(h3)) {
        e2 = h3;
        c2 = false;
      } else {
        e2 = false;
        c2 = false;
      }
    }
    if (b3) {
      const t4 = V2();
      const n4 = D2 && D2();
      const o4 = r2 && r2();
      t4 && assignDeep(s3, onHostMutation(t4[0], t4[1], b3));
      n4 && assignDeep(s3, onTrinsicChanged(n4[0], b3));
      o4 && assignDeep(s3, onContentMutation(o4[0], b3));
    }
    setDirectionWhenViewportIsTarget(s3);
    return s3;
  }, C2];
};
var createScrollbarsSetupElements = (t2, n2, o2, s2) => {
  const { G: e2, K: c2 } = getEnvironment();
  const { scrollbars: r2 } = e2();
  const { slot: l2 } = r2;
  const { gt: i2, bt: a2, D: u2, Dt: d2, kt: f2, Rt: v2, V: h2 } = n2;
  const { scrollbars: p2 } = d2 ? {} : t2;
  const { slot: g3 } = p2 || {};
  const b2 = /* @__PURE__ */ new Map();
  const initScrollTimeline = (t3) => _ && new _({
    source: f2,
    axis: t3
  });
  const w2 = initScrollTimeline("x");
  const y2 = initScrollTimeline("y");
  const S2 = dynamicInitializationElement([i2, a2, u2], () => h2 && v2 ? i2 : a2, l2, g3);
  const getScrollbarHandleLengthRatio = (t3, n3) => {
    if (n3) {
      const o3 = t3 ? H : z;
      const { Mt: s4, Vt: e4 } = n3;
      const c4 = getBoundingClientRect(e4)[o3];
      const r4 = getBoundingClientRect(s4)[o3];
      return capNumber(0, 1, c4 / r4 || 0);
    }
    const s3 = t3 ? "x" : "y";
    const { Lt: e3, Pt: c3 } = o2;
    const r3 = c3[s3];
    const l3 = e3[s3];
    return capNumber(0, 1, r3 / (r3 + l3) || 0);
  };
  const getScrollbarHandleOffsetRatio = (t3, n3, o3, s3) => {
    const e3 = getScrollbarHandleLengthRatio(o3, t3);
    return 1 / e3 * (1 - e3) * (s3 ? 1 - n3 : n3) || 0;
  };
  const addDirectionRTLKeyframes = (t3, n3) => assignDeep(t3, n3 ? {
    clear: ["left"]
  } : {});
  const cancelElementAnimations = (t3) => {
    b2.forEach((n3, o3) => {
      const s3 = t3 ? inArray(createOrKeepArray(t3), o3) : true;
      if (s3) {
        each(n3 || [], (t4) => {
          t4 && t4.cancel();
        });
        b2.delete(o3);
      }
    });
  };
  const setElementAnimation = (t3, n3, o3, s3) => {
    const e3 = b2.get(t3) || [];
    const c3 = e3.find((t4) => t4 && t4.timeline === n3);
    if (c3) {
      c3.effect = new KeyframeEffect(t3, o3, {
        composite: s3
      });
    } else {
      b2.set(t3, concat(e3, [t3.animate(o3, {
        timeline: n3,
        composite: s3
      })]));
    }
  };
  const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
    const s3 = o3 ? addClass : removeClass;
    each(t3, (t4) => {
      s3(t4.Ut, n3);
    });
  };
  const scrollbarStyle = (t3, n3) => {
    each(t3, (t4) => {
      const [o3, s3] = n3(t4);
      setStyles(o3, s3);
    });
  };
  const scrollbarStructureRefreshHandleLength = (t3, n3) => {
    scrollbarStyle(t3, (t4) => {
      const { Vt: o3 } = t4;
      return [o3, {
        [n3 ? H : z]: ratioToCssPercent(getScrollbarHandleLengthRatio(n3))
      }];
    });
  };
  const scrollbarStructureRefreshHandleOffset = (t3, n3) => {
    const { Lt: s3 } = o2;
    const e3 = n3 ? s3.x : s3.y;
    const getTransformValue = (t4, o3, s4) => getTrasformTranslateValue(ratioToCssPercent(getScrollbarHandleOffsetRatio(t4, getRawScrollRatio(o3, e3, s4), n3, s4)), n3);
    if (w2 && y2) {
      each(t3, (t4) => {
        const { Ut: o3, Vt: s4 } = t4;
        const r3 = n3 && getDirectionIsRTL(o3) && c2;
        setElementAnimation(s4, n3 ? w2 : y2, addDirectionRTLKeyframes({
          transform: getRawScrollBounds(e3, r3).map((n4) => getTransformValue(t4, n4, r3))
        }, r3));
      });
    } else {
      const o3 = getElmentScroll(f2);
      scrollbarStyle(t3, (t4) => {
        const { Vt: s4, Ut: e4 } = t4;
        return [s4, {
          transform: getTransformValue(t4, n3 ? o3.x : o3.y, n3 && getDirectionIsRTL(e4) && c2)
        }];
      });
    }
  };
  const doRefreshScrollbarOffset = (t3) => h2 && !v2 && parent(t3) === u2;
  const m2 = [];
  const $2 = [];
  const O2 = [];
  const scrollbarsAddRemoveClass = (t3, n3, o3) => {
    const s3 = isBoolean(o3);
    const e3 = s3 ? o3 : true;
    const c3 = s3 ? !o3 : true;
    e3 && scrollbarStructureAddRemoveClass($2, t3, n3);
    c3 && scrollbarStructureAddRemoveClass(O2, t3, n3);
  };
  const refreshScrollbarsHandleLength = () => {
    scrollbarStructureRefreshHandleLength($2, true);
    scrollbarStructureRefreshHandleLength(O2);
  };
  const refreshScrollbarsHandleOffset = () => {
    scrollbarStructureRefreshHandleOffset($2, true);
    scrollbarStructureRefreshHandleOffset(O2);
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (h2) {
      const { Lt: t3 } = o2;
      const n3 = 0.5;
      if (w2 && y2) {
        each(concat(O2, $2), ({ Ut: o3 }) => {
          if (doRefreshScrollbarOffset(o3)) {
            const setScrollbarElementAnimation = (t4, s3, e3) => {
              const r3 = e3 && getDirectionIsRTL(o3) && c2;
              setElementAnimation(o3, t4, addDirectionRTLKeyframes({
                transform: getRawScrollBounds(s3 - n3, r3).map((t5) => getTrasformTranslateValue(numberToCssPx(t5), e3))
              }, r3), "add");
            };
            setScrollbarElementAnimation(w2, t3.x, true);
            setScrollbarElementAnimation(y2, t3.y);
          } else {
            cancelElementAnimations(o3);
          }
        });
      } else {
        const n4 = getElmentScroll(f2);
        const styleScrollbarPosition = (o3) => {
          const { Ut: s3 } = o3;
          const e3 = doRefreshScrollbarOffset(s3) && s3;
          const getTranslateValue = (t4, n5, o4) => {
            const s4 = getRawScrollRatio(t4, n5, o4);
            const e4 = n5 * s4;
            return numberToCssPx(o4 ? -e4 : e4);
          };
          return [e3, {
            transform: e3 ? getTrasformTranslateValue({
              x: getTranslateValue(n4.x, t3.x, getDirectionIsRTL(s3) && c2),
              y: getTranslateValue(n4.y, t3.y)
            }) : ""
          }];
        };
        scrollbarStyle($2, styleScrollbarPosition);
        scrollbarStyle(O2, styleScrollbarPosition);
      }
    }
  };
  const generateScrollbarDOM = (t3) => {
    const n3 = t3 ? ft : _t;
    const o3 = createDiv(`${ut} ${n3}`);
    const e3 = createDiv(vt);
    const c3 = createDiv(ht);
    const r3 = {
      Ut: o3,
      Mt: e3,
      Vt: c3
    };
    push(t3 ? $2 : O2, r3);
    push(m2, [appendChildren(o3, e3), appendChildren(e3, c3), bind(removeElements, o3), cancelElementAnimations, s2(r3, scrollbarsAddRemoveClass, scrollbarStructureRefreshHandleOffset, t3)]);
    return r3;
  };
  const C2 = bind(generateScrollbarDOM, true);
  const x3 = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(S2, $2[0].Ut);
    appendChildren(S2, O2[0].Ut);
    return bind(runEachAndClear, m2);
  };
  C2();
  x3();
  return [{
    Bt: refreshScrollbarsHandleLength,
    Nt: refreshScrollbarsHandleOffset,
    jt: refreshScrollbarsScrollbarOffset,
    Ft: scrollbarsAddRemoveClass,
    qt: {
      J: w2,
      Wt: $2,
      Xt: C2,
      Yt: bind(scrollbarStyle, $2)
    },
    Jt: {
      J: y2,
      Wt: O2,
      Xt: x3,
      Yt: bind(scrollbarStyle, O2)
    }
  }, appendElements];
};
var createScrollbarsSetupEvents = (t2, n2, o2, s2) => {
  const { bt: c2, D: r2, V: l2, kt: a2, Kt: u2 } = n2;
  return (n3, d2, f2, _2) => {
    const { Ut: v2, Mt: h2, Vt: p2 } = n3;
    const [g3, b2] = selfClearTimeout(333);
    const [w2, y2] = selfClearTimeout();
    const S2 = bind(f2, [n3], _2);
    const m2 = !!a2.scrollBy;
    const $2 = `client${_2 ? "X" : "Y"}`;
    const O2 = _2 ? H : z;
    const C2 = _2 ? "left" : "top";
    const x3 = _2 ? "w" : "h";
    const I2 = _2 ? "x" : "y";
    const isAffectingTransition = (t3) => t3.propertyName.indexOf(O2) > -1;
    const createInteractiveScrollEvents = () => {
      const n4 = "pointerup pointerleave pointercancel lostpointercapture";
      const createRelativeHandleMove = (t3, n5) => (s3) => {
        const { Lt: e2 } = o2;
        const c3 = D(h2)[x3] - D(p2)[x3];
        const r3 = n5 * s3 / c3;
        const l3 = r3 * e2[I2];
        scrollElementTo(a2, {
          [I2]: t3 + l3
        });
      };
      return addEventListener(h2, "pointerdown", (o3) => {
        const s3 = closest(o3.target, `.${ht}`) === p2;
        const r3 = s3 ? p2 : h2;
        const l3 = t2.scrollbars;
        const { button: i2, isPrimary: d3, pointerType: f3 } = o3;
        const { pointers: _3 } = l3;
        const v3 = i2 === 0 && d3 && l3[s3 ? "dragScroll" : "clickScroll"] && (_3 || []).includes(f3);
        if (v3) {
          const t3 = !s3 && o3.shiftKey;
          const l4 = bind(getBoundingClientRect, p2);
          const i3 = bind(getBoundingClientRect, h2);
          const getHandleOffset = (t4, n5) => (t4 || l4())[C2] - (n5 || i3())[C2];
          const d4 = e(getBoundingClientRect(a2)[O2]) / D(a2)[x3] || 1;
          const f4 = createRelativeHandleMove(getElmentScroll(a2)[I2] || 0, 1 / d4);
          const _4 = o3[$2];
          const v4 = l4();
          const g4 = i3();
          const b3 = v4[O2];
          const w3 = getHandleOffset(v4, g4) + b3 / 2;
          const y3 = _4 - g4[C2];
          const S3 = s3 ? 0 : y3 - w3;
          const releasePointerCapture = (t4) => {
            runEachAndClear(H2);
            r3.releasePointerCapture(t4.pointerId);
          };
          const m3 = addAttrClass(c2, N, W);
          const H2 = [m3, addEventListener(u2, n4, releasePointerCapture), addEventListener(u2, "selectstart", (t4) => preventDefault(t4), {
            H: false
          }), addEventListener(h2, n4, releasePointerCapture), addEventListener(h2, "pointermove", (n5) => {
            const o4 = n5[$2] - _4;
            if (s3 || t3) {
              f4(S3 + o4);
            }
          })];
          r3.setPointerCapture(o3.pointerId);
          if (t3) {
            f4(S3);
          } else if (!s3) {
            const t4 = getStaticPluginModuleInstance(Tt);
            t4 && push(H2, t4(f4, getHandleOffset, S3, b3, y3));
          }
        }
      });
    };
    let E2 = true;
    return bind(runEachAndClear, [addEventListener(p2, "pointermove pointerleave", s2), addEventListener(v2, "pointerenter", () => {
      d2(bt, true);
    }), addEventListener(v2, "pointerleave pointercancel", () => {
      d2(bt, false);
    }), !l2 && addEventListener(v2, "mousedown", () => {
      const t3 = getFocusedElement();
      if (hasAttr(t3, J) || hasAttr(t3, N) || t3 === document.body) {
        i(() => {
          r2.focus();
        }, 25);
      }
    }), addEventListener(v2, "wheel", (t3) => {
      const { deltaX: n4, deltaY: o3, deltaMode: s3 } = t3;
      if (m2 && E2 && s3 === 0 && parent(v2) === c2) {
        a2.scrollBy({
          left: n4,
          top: o3,
          behavior: "smooth"
        });
      }
      E2 = false;
      d2(mt, true);
      g3(() => {
        E2 = true;
        d2(mt);
      });
      preventDefault(t3);
    }, {
      H: false,
      I: true
    }), addEventListener(p2, "transitionstart", (t3) => {
      if (isAffectingTransition(t3)) {
        const animateHandleOffset = () => {
          S2();
          w2(animateHandleOffset);
        };
        animateHandleOffset();
      }
    }), addEventListener(p2, "transitionend transitioncancel", (t3) => {
      if (isAffectingTransition(t3)) {
        y2();
        S2();
      }
    }), addEventListener(v2, "mousedown", bind(addEventListener, u2, "click", stopPropagation, {
      A: true,
      I: true
    }), {
      I: true
    }), createInteractiveScrollEvents(), b2, y2]);
  };
};
var createScrollbarsSetup = (t2, n2, o2, s2, e2, c2) => {
  let r2;
  let l2;
  let i2;
  let a2;
  let u2;
  let d2 = noop;
  let f2 = 0;
  const isHoverablePointerType = (t3) => t3.pointerType === "mouse";
  const [_2, v2] = selfClearTimeout();
  const [h2, p2] = selfClearTimeout(100);
  const [g3, b2] = selfClearTimeout(100);
  const [w2, y2] = selfClearTimeout(() => f2);
  const [S2, m2] = createScrollbarsSetupElements(t2, e2, s2, createScrollbarsSetupEvents(n2, e2, s2, (t3) => isHoverablePointerType(t3) && manageScrollbarsAutoHideInstantInteraction()));
  const { bt: $2, Zt: O2, Rt: C2 } = e2;
  const { Ft: x3, Bt: H2, Nt: z2, jt: I2 } = S2;
  const manageScrollbarsAutoHide = (t3, n3) => {
    y2();
    if (t3) {
      x3(St);
    } else {
      const t4 = bind(x3, St, true);
      if (f2 > 0 && !n3) {
        w2(t4);
      } else {
        t4();
      }
    }
  };
  const manageScrollbarsAutoHideInstantInteraction = () => {
    if (i2 ? !r2 : !a2) {
      manageScrollbarsAutoHide(true);
      h2(() => {
        manageScrollbarsAutoHide(false);
      });
    }
  };
  const manageAutoHideSuspension = (t3) => {
    x3(yt, t3, true);
    x3(yt, t3, false);
  };
  const onHostMouseEnter = (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = i2;
      i2 && manageScrollbarsAutoHide(true);
    }
  };
  const E2 = [y2, p2, b2, v2, () => d2(), addEventListener($2, "pointerover", onHostMouseEnter, {
    A: true
  }), addEventListener($2, "pointerenter", onHostMouseEnter), addEventListener($2, "pointerleave", (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = false;
      i2 && manageScrollbarsAutoHide(false);
    }
  }), addEventListener($2, "pointermove", (t3) => {
    isHoverablePointerType(t3) && l2 && manageScrollbarsAutoHideInstantInteraction();
  }), addEventListener(O2, "scroll", (t3) => {
    _2(() => {
      z2();
      manageScrollbarsAutoHideInstantInteraction();
    });
    c2(t3);
    I2();
  })];
  return [() => bind(runEachAndClear, push(E2, m2())), ({ Et: t3, Tt: n3, Gt: e3, Qt: c3 }) => {
    const { tn: r3, nn: _3, sn: v3 } = c3 || {};
    const { Ct: h3, _t: p3 } = e3 || {};
    const { N: b3 } = o2;
    const { T: w3 } = getEnvironment();
    const { k: y3, en: S3 } = s2;
    const [m3, $3] = t3("showNativeOverlaidScrollbars");
    const [E3, A2] = t3("scrollbars.theme");
    const [T2, D2] = t3("scrollbars.visibility");
    const [k2, R2] = t3("scrollbars.autoHide");
    const [M2, V2] = t3("scrollbars.autoHideSuspend");
    const [L2] = t3("scrollbars.autoHideDelay");
    const [P3, U2] = t3("scrollbars.dragScroll");
    const [B2, N2] = t3("scrollbars.clickScroll");
    const [j2, F2] = t3("overflow");
    const q2 = p3 && !n3;
    const W2 = S3.x || S3.y;
    const X2 = r3 || _3 || h3 || n3;
    const Y2 = v3 || D2 || F2;
    const J2 = m3 && w3.x && w3.y;
    const setScrollbarVisibility = (t4, n4, o3) => {
      const s3 = t4.includes("scroll") && (T2 === "visible" || T2 === "auto" && n4 === "scroll");
      x3(pt, s3, o3);
      return s3;
    };
    f2 = L2;
    if (q2) {
      if (M2 && W2) {
        manageAutoHideSuspension(false);
        d2();
        g3(() => {
          d2 = addEventListener(O2, "scroll", bind(manageAutoHideSuspension, true), {
            A: true
          });
        });
      } else {
        manageAutoHideSuspension(true);
      }
    }
    if ($3) {
      x3(at, J2);
    }
    if (A2) {
      x3(u2);
      x3(E3, true);
      u2 = E3;
    }
    if (V2 && !M2) {
      manageAutoHideSuspension(true);
    }
    if (R2) {
      l2 = k2 === "move";
      i2 = k2 === "leave";
      a2 = k2 === "never";
      manageScrollbarsAutoHide(a2, true);
    }
    if (U2) {
      x3(Ot, P3);
    }
    if (N2) {
      x3($t, B2);
    }
    if (Y2) {
      const t4 = setScrollbarVisibility(j2.x, y3.x, true);
      const n4 = setScrollbarVisibility(j2.y, y3.y, false);
      const o3 = t4 && n4;
      x3(gt, !o3);
    }
    if (X2) {
      H2();
      z2();
      I2();
      x3(wt, !S3.x, true);
      x3(wt, !S3.y, false);
      x3(dt, b3 && !C2);
    }
  }, {}, S2];
};
var createStructureSetupElements = (t2) => {
  const n2 = getEnvironment();
  const { G: o2, L: s2 } = n2;
  const { elements: e2 } = o2();
  const { host: c2, padding: r2, viewport: l2, content: i2 } = e2;
  const a2 = isHTMLElement(t2);
  const u2 = a2 ? {} : t2;
  const { elements: d2 } = u2;
  const { host: f2, padding: _2, viewport: v2, content: h2 } = d2 || {};
  const p2 = a2 ? t2 : u2.target;
  const g3 = isBodyElement(p2);
  const b2 = is(p2, "textarea");
  const w2 = p2.ownerDocument;
  const y2 = w2.documentElement;
  const S2 = w2.defaultView;
  const focusElm = (t3) => {
    if (t3 && t3.focus) {
      t3.focus();
    }
  };
  const m2 = bind(staticInitializationElement, [p2]);
  const $2 = bind(dynamicInitializationElement, [p2]);
  const O2 = bind(createDiv, "");
  const C2 = bind(m2, O2, l2);
  const x3 = bind($2, O2, i2);
  const H2 = C2(v2);
  const z2 = H2 === p2;
  const I2 = z2 && g3;
  const E2 = !z2 && x3(h2);
  const A2 = !z2 && H2 === E2;
  const T2 = I2 ? y2 : H2;
  const D2 = b2 ? m2(O2, c2, f2) : p2;
  const k2 = I2 ? T2 : D2;
  const R2 = !z2 && $2(O2, r2, _2);
  const M2 = !A2 && E2;
  const V2 = [M2, T2, R2, k2].map((t3) => isHTMLElement(t3) && !parent(t3) && t3);
  const elementIsGenerated = (t3) => t3 && inArray(V2, t3);
  const L2 = elementIsGenerated(T2) ? p2 : T2;
  const P3 = {
    gt: p2,
    bt: k2,
    D: T2,
    cn: R2,
    wt: M2,
    kt: I2 ? y2 : T2,
    Zt: I2 ? w2 : T2,
    rn: g3 ? y2 : L2,
    ln: S2,
    Kt: w2,
    yt: b2,
    Rt: g3,
    Dt: a2,
    V: z2,
    St: (t3) => hasAttrClass(T2, z2 ? N : J, t3),
    $t: (t3, n3) => addRemoveAttrClass(T2, z2 ? N : J, t3, n3)
  };
  const { gt: U2, bt: q2, cn: W2, D: X2, wt: K2 } = P3;
  const G2 = [() => {
    removeAttrs(q2, [N, B]);
    removeAttrs(U2, B);
    if (g3) {
      removeAttrs(y2, [B, N]);
    }
  }];
  const tt2 = b2 && elementIsGenerated(q2);
  let ot2 = b2 ? U2 : contents([K2, X2, W2, q2, U2].find((t3) => t3 && !elementIsGenerated(t3)));
  const st2 = I2 ? U2 : K2 || X2;
  const et2 = bind(runEachAndClear, G2);
  const appendElements = () => {
    const t3 = getFocusedElement();
    const unwrap = (t4) => {
      appendChildren(parent(t4), contents(t4));
      removeElements(t4);
    };
    const prepareWrapUnwrapFocus = (t4) => t4 ? addEventListener(t4, "focusin focusout focus blur", (t5) => {
      stopPropagation(t5);
      t5.stopImmediatePropagation();
    }, {
      I: true,
      H: false
    }) : noop;
    const n3 = "tabindex";
    const o3 = getAttr(X2, n3);
    const e3 = prepareWrapUnwrapFocus(t3);
    setAttrs(q2, N, z2 ? "viewport" : "host");
    setAttrs(W2, Q, "");
    setAttrs(K2, nt, "");
    if (!z2) {
      setAttrs(X2, J, "");
      setAttrs(X2, n3, o3 || "-1");
      g3 && addAttrClass(y2, N, Y);
    }
    if (tt2) {
      insertAfter(U2, q2);
      push(G2, () => {
        insertAfter(q2, U2);
        removeElements(q2);
      });
    }
    appendChildren(st2, ot2);
    appendChildren(q2, W2);
    appendChildren(W2 || q2, !z2 && X2);
    appendChildren(X2, K2);
    push(G2, [e3, () => {
      const t4 = getFocusedElement();
      const s3 = prepareWrapUnwrapFocus(t4);
      removeAttrs(W2, Q);
      removeAttrs(K2, nt);
      removeAttrs(X2, [j, F, J]);
      o3 ? setAttrs(X2, n3, o3) : removeAttrs(X2, n3);
      elementIsGenerated(K2) && unwrap(K2);
      elementIsGenerated(X2) && unwrap(X2);
      elementIsGenerated(W2) && unwrap(W2);
      focusElm(t4);
      s3();
    }]);
    if (s2 && !z2) {
      addAttrClass(X2, J, Z);
      push(G2, bind(removeAttrs, X2, J));
    }
    focusElm(!z2 && S2.top === S2 && t3 === p2 ? X2 : t3);
    e3();
    ot2 = 0;
    return et2;
  };
  return [P3, appendElements, et2];
};
var createTrinsicUpdateSegment = ({ wt: t2 }) => ({ Gt: n2, an: o2, Tt: s2 }) => {
  const { xt: e2 } = n2 || {};
  const { Ot: c2 } = o2;
  const r2 = t2 && (e2 || s2);
  if (r2) {
    setStyles(t2, {
      [z]: c2 && "100%"
    });
  }
};
var createPaddingUpdateSegment = ({ bt: t2, cn: n2, D: o2, V: s2 }, e2) => {
  const [c2, r2] = createCache({
    u: equalTRBL,
    o: topRightBottomLeft()
  }, bind(topRightBottomLeft, t2, "padding", ""));
  return ({ Et: t3, Gt: l2, an: i2, Tt: a2 }) => {
    let [u2, d2] = r2(a2);
    const { L: f2 } = getEnvironment();
    const { ht: _2, Ht: v2, Ct: h2 } = l2 || {};
    const { N: p2 } = i2;
    const [g3, C2] = t3("paddingAbsolute");
    const x3 = a2 || v2;
    if (_2 || d2 || x3) {
      [u2, d2] = c2(a2);
    }
    const z2 = !s2 && (C2 || h2 || d2);
    if (z2) {
      const t4 = !g3 || !n2 && !f2;
      const s3 = u2.r + u2.l;
      const c3 = u2.t + u2.b;
      const r3 = {
        [$]: t4 && !p2 ? -s3 : 0,
        [O]: t4 ? -c3 : 0,
        [m]: t4 && p2 ? -s3 : 0,
        top: t4 ? -u2.t : 0,
        right: t4 ? p2 ? -u2.r : "auto" : 0,
        left: t4 ? p2 ? "auto" : -u2.l : 0,
        [H]: t4 && `calc(100% + ${s3}px)`
      };
      const l3 = {
        [b]: t4 ? u2.t : 0,
        [w]: t4 ? u2.r : 0,
        [S]: t4 ? u2.b : 0,
        [y]: t4 ? u2.l : 0
      };
      setStyles(n2 || o2, r3);
      setStyles(o2, l3);
      assignDeep(e2, {
        cn: u2,
        un: !t4,
        j: n2 ? l3 : assignDeep({}, r3, l3)
      });
    }
    return {
      dn: z2
    };
  };
};
var createOverflowUpdateSegment = (t2, s2) => {
  const e2 = getEnvironment();
  const { bt: c2, cn: r2, D: l2, V: i2, $t: a2, Rt: u2, ln: d2 } = t2;
  const { L: f2 } = e2;
  const _2 = u2 && i2;
  const v2 = bind(o, 0);
  const h2 = {
    u: equalWH,
    o: {
      w: 0,
      h: 0
    }
  };
  const p2 = {
    u: equalXY,
    o: {
      x: I,
      y: I
    }
  };
  const getOverflowAmount = (t3, o2) => {
    const s3 = n.devicePixelRatio % 1 !== 0 ? 1 : 0;
    const e3 = {
      w: v2(t3.w - o2.w),
      h: v2(t3.h - o2.h)
    };
    return {
      w: e3.w > s3 ? e3.w : 0,
      h: e3.h > s3 ? e3.h : 0
    };
  };
  const [g3, b2] = createCache(h2, bind(fractionalSize, l2));
  const [w2, y2] = createCache(h2, bind(R, l2));
  const [S2, m2] = createCache(h2);
  const [$2, O2] = createCache(h2);
  const [H2] = createCache(p2);
  const z2 = getStaticPluginModuleInstance(Et);
  return ({ Et: n2, Gt: u3, an: h3, Tt: p3 }, { dn: I2 }) => {
    const { ht: E2, Ht: A2, Ct: T2, It: D2 } = u3 || {};
    const R2 = z2 && z2.M(t2, s2, h3, e2, n2);
    const { q: M2, W: V2, X: L2 } = R2 || {};
    const [P3, U2] = getShowNativeOverlaidScrollbars(n2, e2);
    const [B2, W2] = n2("overflow");
    const X2 = E2 || I2 || A2 || T2 || D2 || U2;
    const Y2 = overflowIsVisible(B2.x);
    const K2 = overflowIsVisible(B2.y);
    const nt2 = Y2 || K2;
    let ot2 = b2(p3);
    let st2 = y2(p3);
    let et2 = m2(p3);
    let ct2 = O2(p3);
    let rt2;
    if (U2 && f2) {
      a2(Z, !P3);
    }
    if (X2) {
      if (nt2) {
        a2(G, false);
      }
      const [t3, n3] = V2 ? V2(rt2) : [];
      const [s3, e3] = ot2 = g3(p3);
      const [c3, r3] = st2 = w2(p3);
      const i3 = k(l2);
      const u4 = c3;
      const f3 = i3;
      t3 && t3();
      if ((r3 || e3 || U2) && n3 && !P3 && M2 && M2(n3, c3, s3)) {
      }
      const h4 = windowSize(d2);
      const b3 = {
        w: v2(o(c3.w, u4.w) + s3.w),
        h: v2(o(c3.h, u4.h) + s3.h)
      };
      const y3 = {
        w: v2((_2 ? h4.w : f3.w + v2(i3.w - c3.w)) + s3.w),
        h: v2((_2 ? h4.h : f3.h + v2(i3.h - c3.h)) + s3.h)
      };
      ct2 = $2(y3);
      et2 = S2(getOverflowAmount(b3, y3), p3);
    }
    const [lt2, it2] = ct2;
    const [at2, ut2] = et2;
    const [dt2, ft2] = st2;
    const [_t2, vt2] = ot2;
    const ht2 = {
      x: at2.w > 0,
      y: at2.h > 0
    };
    const pt2 = Y2 && K2 && (ht2.x || ht2.y) || Y2 && ht2.x && !ht2.y || K2 && ht2.y && !ht2.x;
    const gt2 = I2 || T2 || D2 || vt2 || ft2 || it2 || ut2 || W2 || U2 || X2;
    if (gt2) {
      const n3 = {};
      const o2 = setViewportOverflowState(t2, ht2, B2, n3);
      L2 && L2(o2, h3, !!M2 && M2(o2, dt2, _t2), n3);
      if (i2) {
        setAttrs(c2, j, n3[C]);
        setAttrs(c2, F, n3[x]);
      } else {
        setStyles(l2, n3);
      }
    }
    addRemoveAttrClass(c2, N, q, pt2);
    addRemoveAttrClass(r2, Q, tt, pt2);
    if (!i2) {
      addRemoveAttrClass(l2, J, G, nt2);
    }
    const [bt2, wt2] = H2(getViewportOverflowState(t2).k);
    assignDeep(s2, {
      k: bt2,
      Pt: {
        x: lt2.w,
        y: lt2.h
      },
      Lt: {
        x: at2.w,
        y: at2.h
      },
      en: ht2
    });
    return {
      sn: wt2,
      tn: it2,
      nn: ut2
    };
  };
};
var createStructureSetup = (t2) => {
  const [n2, o2, s2] = createStructureSetupElements(t2);
  const e2 = {
    cn: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    un: false,
    j: {
      [$]: 0,
      [O]: 0,
      [m]: 0,
      [b]: 0,
      [w]: 0,
      [S]: 0,
      [y]: 0
    },
    Pt: {
      x: 0,
      y: 0
    },
    Lt: {
      x: 0,
      y: 0
    },
    k: {
      x: I,
      y: I
    },
    en: {
      x: false,
      y: false
    }
  };
  const { gt: c2, D: r2, V: l2 } = n2;
  const { L: i2, T: a2 } = getEnvironment();
  const u2 = !i2 && (a2.x || a2.y);
  const d2 = [createTrinsicUpdateSegment(n2), createPaddingUpdateSegment(n2, e2), createOverflowUpdateSegment(n2, e2)];
  return [o2, (t3) => {
    const n3 = {};
    const o3 = u2;
    const s3 = o3 && getElmentScroll(r2);
    const e3 = l2 ? addAttrClass(r2, N, X) : noop;
    each(d2, (o4) => {
      assignDeep(n3, o4(t3, n3) || {});
    });
    e3();
    scrollElementTo(r2, s3);
    !l2 && scrollElementTo(c2, 0);
    return n3;
  }, e2, n2, s2];
};
var createSetups = (t2, n2, o2, s2) => {
  const e2 = createOptionCheck(n2, {});
  const [c2, r2, l2, i2, a2] = createStructureSetup(t2);
  const [u2, d2, f2] = createObserversSetup(i2, l2, e2, (t3) => {
    update({}, t3);
  });
  const [_2, v2, , h2] = createScrollbarsSetup(t2, n2, f2, l2, i2, s2);
  const updateHintsAreTruthy = (t3) => keys(t3).some((n3) => !!t3[n3]);
  const update = (t3, s3) => {
    const { fn: e3, Tt: c3, At: l3, _n: i3 } = t3;
    const a3 = e3 || {};
    const u3 = !!c3;
    const _3 = {
      Et: createOptionCheck(n2, a3, u3),
      fn: a3,
      Tt: u3
    };
    if (i3) {
      v2(_3);
      return false;
    }
    const h3 = s3 || d2(assignDeep({}, _3, {
      At: l3
    }));
    const p2 = r2(assignDeep({}, _3, {
      an: f2,
      Gt: h3
    }));
    v2(assignDeep({}, _3, {
      Gt: h3,
      Qt: p2
    }));
    const g3 = updateHintsAreTruthy(h3);
    const b2 = updateHintsAreTruthy(p2);
    const w2 = g3 || b2 || !isEmptyObject(a3) || u3;
    w2 && o2(t3, {
      Gt: h3,
      Qt: p2
    });
    return w2;
  };
  return [() => {
    const { rn: t3, D: n3 } = i2;
    const o3 = getElmentScroll(t3);
    const s3 = [u2(), c2(), _2()];
    scrollElementTo(n3, o3);
    return bind(runEachAndClear, s3);
  }, update, () => ({
    vn: f2,
    hn: l2
  }), {
    pn: i2,
    gn: h2
  }, a2];
};
var OverlayScrollbars = (t2, n2, o2) => {
  const { nt: s2 } = getEnvironment();
  const e2 = isHTMLElement(t2);
  const c2 = e2 ? t2 : t2.target;
  const r2 = getInstance(c2);
  if (n2 && !r2) {
    let r3 = false;
    const l2 = [];
    const i2 = {};
    const validateOptions = (t3) => {
      const n3 = removeUndefinedProperties(t3, true);
      const o3 = getStaticPluginModuleInstance(Ht);
      return o3 ? o3(n3, true) : n3;
    };
    const a2 = assignDeep({}, s2(), validateOptions(n2));
    const [u2, d2, f2] = createEventListenerHub();
    const [_2, v2, h2] = createEventListenerHub(o2);
    const triggerEvent = (t3, n3) => {
      h2(t3, n3);
      f2(t3, n3);
    };
    const [p2, g3, b2, w2, y2] = createSetups(t2, a2, ({ fn: t3, Tt: n3 }, { Gt: o3, Qt: s3 }) => {
      const { ht: e3, Ct: c3, xt: r4, Ht: l3, zt: i3, _t: a3 } = o3;
      const { tn: u3, nn: d3, sn: f3 } = s3;
      triggerEvent("updated", [S2, {
        updateHints: {
          sizeChanged: !!e3,
          directionChanged: !!c3,
          heightIntrinsicChanged: !!r4,
          overflowEdgeChanged: !!u3,
          overflowAmountChanged: !!d3,
          overflowStyleChanged: !!f3,
          contentMutation: !!l3,
          hostMutation: !!i3,
          appear: !!a3
        },
        changedOptions: t3 || {},
        force: !!n3
      }]);
    }, (t3) => triggerEvent("scroll", [S2, t3]));
    const destroy = (t3) => {
      removeInstance(c2);
      runEachAndClear(l2);
      r3 = true;
      triggerEvent("destroyed", [S2, t3]);
      d2();
      v2();
    };
    const S2 = {
      options(t3, n3) {
        if (t3) {
          const o3 = n3 ? s2() : {};
          const e3 = getOptionsDiff(a2, assignDeep(o3, validateOptions(t3)));
          if (!isEmptyObject(e3)) {
            assignDeep(a2, e3);
            g3({
              fn: e3
            });
          }
        }
        return assignDeep({}, a2);
      },
      on: _2,
      off: (t3, n3) => {
        t3 && n3 && v2(t3, n3);
      },
      state() {
        const { vn: t3, hn: n3 } = b2();
        const { N: o3 } = t3;
        const { Pt: s3, Lt: e3, k: c3, en: l3, cn: i3, un: a3 } = n3;
        return assignDeep({}, {
          overflowEdge: s3,
          overflowAmount: e3,
          overflowStyle: c3,
          hasOverflow: l3,
          padding: i3,
          paddingAbsolute: a3,
          directionRTL: o3,
          destroyed: r3
        });
      },
      elements() {
        const { gt: t3, bt: n3, cn: o3, D: s3, wt: e3, kt: c3, Zt: r4 } = w2.pn;
        const { qt: l3, Jt: i3 } = w2.gn;
        const translateScrollbarStructure = (t4) => {
          const { Vt: n4, Mt: o4, Ut: s4 } = t4;
          return {
            scrollbar: s4,
            track: o4,
            handle: n4
          };
        };
        const translateScrollbarsSetupElement = (t4) => {
          const { Wt: n4, Xt: o4 } = t4;
          const s4 = translateScrollbarStructure(n4[0]);
          return assignDeep({}, s4, {
            clone: () => {
              const t5 = translateScrollbarStructure(o4());
              g3({
                _n: true
              });
              return t5;
            }
          });
        };
        return assignDeep({}, {
          target: t3,
          host: n3,
          padding: o3 || s3,
          viewport: s3,
          content: e3 || s3,
          scrollOffsetElement: c3,
          scrollEventElement: r4,
          scrollbarHorizontal: translateScrollbarsSetupElement(l3),
          scrollbarVertical: translateScrollbarsSetupElement(i3)
        });
      },
      update: (t3) => g3({
        Tt: t3,
        At: true
      }),
      destroy: bind(destroy, false),
      plugin: (t3) => i2[keys(t3)[0]]
    };
    push(l2, [y2]);
    addInstance(c2, S2);
    registerPluginModuleInstances(Ct, OverlayScrollbars, [S2, u2, i2]);
    if (cancelInitialization(w2.pn.Rt, !e2 && t2.cancel)) {
      destroy(true);
      return S2;
    }
    push(l2, p2());
    triggerEvent("initialized", [S2]);
    S2.update(true);
    return S2;
  }
  return r2;
};
OverlayScrollbars.plugin = (t2) => {
  const n2 = isArray(t2);
  const o2 = n2 ? t2 : [t2];
  const s2 = o2.map((t3) => registerPluginModuleInstances(t3, OverlayScrollbars)[0]);
  addPlugins(o2);
  return n2 ? s2 : s2[0];
};
OverlayScrollbars.valid = (t2) => {
  const n2 = t2 && t2.elements;
  const o2 = isFunction(n2) && n2();
  return isPlainObject(o2) && !!getInstance(o2.target);
};
OverlayScrollbars.env = () => {
  const { P: t2, T: n2, L: o2, K: s2, J: e2, st: c2, et: r2, G: l2, tt: i2, nt: a2, ot: u2 } = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t2,
    scrollbarsOverlaid: n2,
    scrollbarsHiding: o2,
    rtlScrollBehavior: s2,
    scrollTimeline: e2,
    staticDefaultInitialization: c2,
    staticDefaultOptions: r2,
    getDefaultInitialization: l2,
    setDefaultInitialization: i2,
    getDefaultOptions: a2,
    setDefaultOptions: u2
  });
};

// node_modules/overlayscrollbars-vue/overlayscrollbars-vue.mjs
var g2 = () => {
  if (typeof window > "u") {
    const o2 = () => {
    };
    return [o2, o2];
  }
  let a2, t2;
  const n2 = window, l2 = typeof n2.requestIdleCallback == "function", s2 = n2.requestAnimationFrame, r2 = n2.cancelAnimationFrame, f2 = l2 ? n2.requestIdleCallback : s2, p2 = l2 ? n2.cancelIdleCallback : r2, e2 = () => {
    p2(a2), r2(t2);
  };
  return [
    (o2, m2) => {
      e2(), a2 = f2(
        l2 ? () => {
          e2(), t2 = s2(o2);
        } : o2,
        typeof m2 == "object" ? m2 : { timeout: 2233 }
      );
    },
    e2
  ];
};
var x2 = (a2) => {
  let t2 = null, n2, l2, s2;
  const r2 = shallowRef(a2 || {}), [f2, p2] = g2();
  return watch(
    () => {
      var e2;
      return unref((e2 = r2.value) == null ? void 0 : e2.defer);
    },
    (e2) => {
      s2 = e2;
    },
    { deep: true, immediate: true }
  ), watch(
    () => {
      var e2;
      return unref((e2 = r2.value) == null ? void 0 : e2.options);
    },
    (e2) => {
      n2 = e2, OverlayScrollbars.valid(t2) && t2.options(n2 || {}, true);
    },
    { deep: true, immediate: true }
  ), watch(
    () => {
      var e2;
      return unref((e2 = r2.value) == null ? void 0 : e2.events);
    },
    (e2) => {
      l2 = e2, OverlayScrollbars.valid(t2) && t2.on(
        /* c8 ignore next */
        l2 || {},
        true
      );
    },
    { deep: true, immediate: true }
  ), onUnmounted(() => {
    p2(), t2 == null || t2.destroy();
  }), [
    (e2) => {
      if (OverlayScrollbars.valid(t2))
        return t2;
      const o2 = () => t2 = OverlayScrollbars(e2, n2 || {}, l2 || {});
      s2 ? f2(o2, s2) : o2();
    },
    () => t2
  ];
};
var P2 = defineComponent({
  __name: "OverlayScrollbarsComponent",
  props: {
    element: {
      type: [String, Object],
      default: "div"
    },
    options: { type: Object },
    events: { type: Object },
    defer: { type: [Boolean, Object] }
  },
  emits: ["osInitialized", "osUpdated", "osDestroyed", "osScroll"],
  setup(a2, { expose: t2, emit: n2 }) {
    const l2 = a2, s2 = {
      initialized: "osInitialized",
      updated: "osUpdated",
      destroyed: "osDestroyed",
      scroll: "osScroll"
    }, { element: r2, options: f2, events: p2, defer: e2 } = toRefs(l2), o2 = shallowRef(null), m2 = shallowRef(null), I2 = ref(), [E2, O2] = x2({ options: f2, events: I2, defer: e2 });
    return t2({
      osInstance: O2,
      getElement: () => o2.value
    }), watchPostEffect((c2) => {
      const { value: i2 } = o2, { value: v2 } = m2;
      i2 && (E2(
        r2.value === "body" ? {
          target: i2,
          cancel: {
            body: null
          }
        } : {
          target: i2,
          elements: {
            viewport: v2,
            content: v2
          }
        }
      ), c2(() => {
        var d2;
        return (d2 = O2()) == null ? void 0 : d2.destroy();
      }));
    }), watch(
      () => unref(p2),
      (c2) => {
        const i2 = c2 || {};
        I2.value = Object.keys(s2).reduce((v2, d2) => {
          const k2 = i2[d2];
          return v2[d2] = [
            (...R2) => n2(
              s2[d2],
              ...R2
            ),
            ...(Array.isArray(k2) ? k2 : [k2]).filter(Boolean)
          ], v2;
        }, {});
      },
      { deep: true, immediate: true }
    ), (c2, i2) => (openBlock(), createBlock(resolveDynamicComponent(unref(r2)), {
      "data-overlayscrollbars-initialize": "",
      ref_key: "elementRef",
      ref: o2
    }, {
      default: withCtx(() => [
        unref(r2) === "body" ? renderSlot(c2.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", {
          key: 1,
          "data-overlayscrollbars-contents": "",
          ref_key: "slotRef",
          ref: m2
        }, [
          renderSlot(c2.$slots, "default")
        ], 512))
      ]),
      _: 3
    }, 512));
  }
});
export {
  P2 as OverlayScrollbarsComponent,
  x2 as useOverlayScrollbars
};
/*! Bundled license information:

overlayscrollbars/overlayscrollbars.mjs:
  (*!
   * OverlayScrollbars
   * Version: 2.7.1
   *
   * Copyright (c) Rene Haas | KingSora.
   * https://github.com/KingSora
   *
   * Released under the MIT license.
   *)
*/
//# sourceMappingURL=overlayscrollbars-vue.js.map
