import {
  defineComponent,
  h,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  ref,
  toRefs,
  watch
} from "./chunk-GU3YDFVY.js";
import "./chunk-5WWUZCGV.js";

// node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js
var validEvents = [
  "onActivate",
  "onAddUndo",
  "onBeforeAddUndo",
  "onBeforeExecCommand",
  "onBeforeGetContent",
  "onBeforeRenderUI",
  "onBeforeSetContent",
  "onBeforePaste",
  "onBlur",
  "onChange",
  "onClearUndos",
  "onClick",
  "onContextMenu",
  "onCopy",
  "onCut",
  "onDblclick",
  "onDeactivate",
  "onDirty",
  "onDrag",
  "onDragDrop",
  "onDragEnd",
  "onDragGesture",
  "onDragOver",
  "onDrop",
  "onExecCommand",
  "onFocus",
  "onFocusIn",
  "onFocusOut",
  "onGetContent",
  "onHide",
  "onInit",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onLoadContent",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onNodeChange",
  "onObjectResizeStart",
  "onObjectResized",
  "onObjectSelected",
  "onPaste",
  "onPostProcess",
  "onPostRender",
  "onPreProcess",
  "onProgressState",
  "onRedo",
  "onRemove",
  "onReset",
  "onSaveContent",
  "onSelectionChange",
  "onSetAttrib",
  "onSetContent",
  "onShow",
  "onSubmit",
  "onUndo",
  "onVisualAid"
];
var isValidKey = function(key) {
  return validEvents.map(function(event) {
    return event.toLowerCase();
  }).indexOf(key.toLowerCase()) !== -1;
};
var bindHandlers = function(initEvent, listeners, editor) {
  Object.keys(listeners).filter(isValidKey).forEach(function(key) {
    var handler = listeners[key];
    if (typeof handler === "function") {
      if (key === "onInit") {
        handler(initEvent, editor);
      } else {
        editor.on(key.substring(2), function(e) {
          return handler(e, editor);
        });
      }
    }
  });
};
var bindModelHandlers = function(props, ctx, editor, modelValue) {
  var modelEvents = props.modelEvents ? props.modelEvents : null;
  var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(" ") : modelEvents;
  watch(modelValue, function(val, prevVal) {
    if (editor && typeof val === "string" && val !== prevVal && val !== editor.getContent({ format: props.outputFormat })) {
      editor.setContent(val);
    }
  });
  editor.on(normalizedEvents ? normalizedEvents : "change input undo redo", function() {
    ctx.emit("update:modelValue", editor.getContent({ format: props.outputFormat }));
  });
};
var initEditor = function(initEvent, props, ctx, editor, modelValue, content) {
  editor.setContent(content());
  if (ctx.attrs["onUpdate:modelValue"]) {
    bindModelHandlers(props, ctx, editor, modelValue);
  }
  bindHandlers(initEvent, ctx.attrs, editor);
};
var unique = 0;
var uuid = function(prefix) {
  var time = Date.now();
  var random = Math.floor(Math.random() * 1e9);
  unique++;
  return prefix + "_" + random + unique + String(time);
};
var isTextarea = function(element) {
  return element !== null && element.tagName.toLowerCase() === "textarea";
};
var normalizePluginArray = function(plugins) {
  if (typeof plugins === "undefined" || plugins === "") {
    return [];
  }
  return Array.isArray(plugins) ? plugins : plugins.split(" ");
};
var mergePlugins = function(initPlugins, inputPlugins) {
  return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function(value) {
  return value === null || value === void 0;
};

// node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js
var createState = function() {
  return {
    listeners: [],
    scriptId: uuid("tiny-script"),
    scriptLoaded: false
  };
};
var CreateScriptLoader = function() {
  var state = createState();
  var injectScriptTag = function(scriptId, doc, url, callback) {
    var scriptTag = doc.createElement("script");
    scriptTag.referrerPolicy = "origin";
    scriptTag.type = "application/javascript";
    scriptTag.id = scriptId;
    scriptTag.src = url;
    var handler = function() {
      scriptTag.removeEventListener("load", handler);
      callback();
    };
    scriptTag.addEventListener("load", handler);
    if (doc.head) {
      doc.head.appendChild(scriptTag);
    }
  };
  var load = function(doc, url, callback) {
    if (state.scriptLoaded) {
      callback();
    } else {
      state.listeners.push(callback);
      if (!doc.getElementById(state.scriptId)) {
        injectScriptTag(state.scriptId, doc, url, function() {
          state.listeners.forEach(function(fn) {
            return fn();
          });
          state.scriptLoaded = true;
        });
      }
    }
  };
  var reinitialize = function() {
    state = createState();
  };
  return {
    load,
    reinitialize
  };
};
var ScriptLoader = CreateScriptLoader();

// node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js
var getGlobal = function() {
  return typeof window !== "undefined" ? window : global;
};
var getTinymce = function() {
  var global2 = getGlobal();
  return global2 && global2.tinymce ? global2.tinymce : null;
};

// node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js
var editorProps = {
  apiKey: String,
  cloudChannel: String,
  id: String,
  init: Object,
  initialValue: String,
  inline: Boolean,
  modelEvents: [String, Array],
  plugins: [String, Array],
  tagName: String,
  toolbar: [String, Array],
  modelValue: String,
  disabled: Boolean,
  tinymceScriptSrc: String,
  outputFormat: {
    type: String,
    validator: function(prop) {
      return prop === "html" || prop === "text";
    }
  }
};

// node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var renderInline = function(ce, id, elementRef, tagName) {
  return ce(tagName ? tagName : "div", {
    id,
    ref: elementRef
  });
};
var renderIframe = function(ce, id, elementRef) {
  return ce("textarea", {
    id,
    visibility: "hidden",
    ref: elementRef
  });
};
var defaultInitValues = { selector: void 0, target: void 0 };
var Editor = defineComponent({
  props: editorProps,
  setup: function(props, ctx) {
    var conf = props.init ? __assign(__assign({}, props.init), defaultInitValues) : __assign({}, defaultInitValues);
    var _a = toRefs(props), disabled = _a.disabled, modelValue = _a.modelValue, tagName = _a.tagName;
    var element = ref(null);
    var vueEditor = null;
    var elementId = props.id || uuid("tiny-vue");
    var inlineEditor = props.init && props.init.inline || props.inline;
    var modelBind = !!ctx.attrs["onUpdate:modelValue"];
    var mounting = true;
    var initialValue = props.initialValue ? props.initialValue : "";
    var cache = "";
    var getContent = function(isMounting) {
      return modelBind ? function() {
        return (modelValue === null || modelValue === void 0 ? void 0 : modelValue.value) ? modelValue.value : "";
      } : function() {
        return isMounting ? initialValue : cache;
      };
    };
    var initWrapper = function() {
      var content = getContent(mounting);
      var finalInit = __assign(__assign({}, conf), { readonly: props.disabled, target: element.value, plugins: mergePlugins(conf.plugins, props.plugins), toolbar: props.toolbar || conf.toolbar, inline: inlineEditor, setup: function(editor) {
        vueEditor = editor;
        editor.on("init", function(e) {
          return initEditor(e, props, ctx, editor, modelValue, content);
        });
        if (typeof conf.setup === "function") {
          conf.setup(editor);
        }
      } });
      if (isTextarea(element.value)) {
        element.value.style.visibility = "";
      }
      getTinymce().init(finalInit);
      mounting = false;
    };
    watch(disabled, function(disable) {
      var _a2;
      if (vueEditor !== null) {
        if (typeof ((_a2 = vueEditor.mode) === null || _a2 === void 0 ? void 0 : _a2.set) === "function") {
          vueEditor.mode.set(disable ? "readonly" : "design");
        } else {
          vueEditor.setMode(disable ? "readonly" : "design");
        }
      }
    });
    watch(tagName, function(_) {
      var _a2;
      if (!modelBind) {
        cache = vueEditor.getContent();
      }
      (_a2 = getTinymce()) === null || _a2 === void 0 ? void 0 : _a2.remove(vueEditor);
      nextTick(function() {
        return initWrapper();
      });
    });
    onMounted(function() {
      if (getTinymce() !== null) {
        initWrapper();
      } else if (element.value && element.value.ownerDocument) {
        var channel = props.cloudChannel ? props.cloudChannel : "6";
        var apiKey = props.apiKey ? props.apiKey : "no-api-key";
        var scriptSrc = isNullOrUndefined(props.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(apiKey, "/tinymce/").concat(channel, "/tinymce.min.js") : props.tinymceScriptSrc;
        ScriptLoader.load(element.value.ownerDocument, scriptSrc, initWrapper);
      }
    });
    onBeforeUnmount(function() {
      if (getTinymce() !== null) {
        getTinymce().remove(vueEditor);
      }
    });
    if (!inlineEditor) {
      onActivated(function() {
        if (!mounting) {
          initWrapper();
        }
      });
      onDeactivated(function() {
        var _a2;
        if (!modelBind) {
          cache = vueEditor.getContent();
        }
        (_a2 = getTinymce()) === null || _a2 === void 0 ? void 0 : _a2.remove(vueEditor);
      });
    }
    var rerender = function(init) {
      var _a2;
      cache = vueEditor.getContent();
      (_a2 = getTinymce()) === null || _a2 === void 0 ? void 0 : _a2.remove(vueEditor);
      conf = __assign(__assign(__assign({}, conf), init), defaultInitValues);
      nextTick(function() {
        return initWrapper();
      });
    };
    ctx.expose({
      rerender,
      getEditor: function() {
        return vueEditor;
      }
    });
    return function() {
      return inlineEditor ? renderInline(h, elementId, element, props.tagName) : renderIframe(h, elementId, element);
    };
  }
});

// node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js
var ts_default = Editor;
export {
  ts_default as default
};
//# sourceMappingURL=@tinymce_tinymce-vue.js.map
