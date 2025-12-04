(function () {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload")) return;
  for (const C of document.querySelectorAll('link[rel="modulepreload"]')) y(C);
  new MutationObserver((C) => {
    for (const U of C)
      if (U.type === "childList")
        for (const K of U.addedNodes)
          K.tagName === "LINK" && K.rel === "modulepreload" && y(K);
  }).observe(document, { childList: !0, subtree: !0 });
  function H(C) {
    const U = {};
    return (
      C.integrity && (U.integrity = C.integrity),
      C.referrerPolicy && (U.referrerPolicy = C.referrerPolicy),
      C.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : C.crossOrigin === "anonymous"
        ? (U.credentials = "omit")
        : (U.credentials = "same-origin"),
      U
    );
  }
  function y(C) {
    if (C.ep) return;
    C.ep = !0;
    const U = H(C);
    fetch(C.href, U);
  }
})();
var ff = { exports: {} },
  Du = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function th() {
  if (hd) return Du;
  hd = 1;
  var b = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.fragment");
  function H(y, C, U) {
    var K = null;
    if (
      (U !== void 0 && (K = "" + U),
      C.key !== void 0 && (K = "" + C.key),
      "key" in C)
    ) {
      U = {};
      for (var at in C) at !== "key" && (U[at] = C[at]);
    } else U = C;
    return (
      (C = U.ref),
      { $$typeof: b, type: y, key: K, ref: C !== void 0 ? C : null, props: U }
    );
  }
  return (Du.Fragment = p), (Du.jsx = H), (Du.jsxs = H), Du;
}
var vd;
function lh() {
  return vd || ((vd = 1), (ff.exports = th())), ff.exports;
}
var h = lh(),
  sf = { exports: {} },
  ct = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function eh() {
  if (md) return ct;
  md = 1;
  var b = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    U = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    B = Symbol.for("react.lazy"),
    tt = Symbol.iterator;
  function W(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (tt && f[tt]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var Et = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    it = Object.assign,
    mt = {};
  function I(f, T, O) {
    (this.props = f),
      (this.context = T),
      (this.refs = mt),
      (this.updater = O || Et);
  }
  (I.prototype.isReactComponent = {}),
    (I.prototype.setState = function (f, T) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, f, T, "setState");
    }),
    (I.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    });
  function rt() {}
  rt.prototype = I.prototype;
  function St(f, T, O) {
    (this.props = f),
      (this.context = T),
      (this.refs = mt),
      (this.updater = O || Et);
  }
  var V = (St.prototype = new rt());
  (V.constructor = St), it(V, I.prototype), (V.isPureReactComponent = !0);
  var lt = Array.isArray,
    x = { H: null, A: null, T: null, S: null, V: null },
    Nt = Object.prototype.hasOwnProperty;
  function ft(f, T, O, z, Z, X) {
    return (
      (O = X.ref),
      { $$typeof: b, type: f, key: T, ref: O !== void 0 ? O : null, props: X }
    );
  }
  function _t(f, T) {
    return ft(f.type, T, void 0, void 0, void 0, f.props);
  }
  function Rt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === b;
  }
  function Vt(f) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (O) {
        return T[O];
      })
    );
  }
  var Ut = /\/+/g;
  function j(f, T) {
    return typeof f == "object" && f !== null && f.key != null
      ? Vt("" + f.key)
      : T.toString(36);
  }
  function J() {}
  function k(f) {
    switch (f.status) {
      case "fulfilled":
        return f.value;
      case "rejected":
        throw f.reason;
      default:
        switch (
          (typeof f.status == "string"
            ? f.then(J, J)
            : ((f.status = "pending"),
              f.then(
                function (T) {
                  f.status === "pending" &&
                    ((f.status = "fulfilled"), (f.value = T));
                },
                function (T) {
                  f.status === "pending" &&
                    ((f.status = "rejected"), (f.reason = T));
                }
              )),
          f.status)
        ) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
        }
    }
    throw f;
  }
  function Q(f, T, O, z, Z) {
    var X = typeof f;
    (X === "undefined" || X === "boolean") && (f = null);
    var Y = !1;
    if (f === null) Y = !0;
    else
      switch (X) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case b:
            case p:
              Y = !0;
              break;
            case B:
              return (Y = f._init), Q(Y(f._payload), T, O, z, Z);
          }
      }
    if (Y)
      return (
        (Z = Z(f)),
        (Y = z === "" ? "." + j(f, 0) : z),
        lt(Z)
          ? ((O = ""),
            Y != null && (O = Y.replace(Ut, "$&/") + "/"),
            Q(Z, T, O, "", function (nt) {
              return nt;
            }))
          : Z != null &&
            (Rt(Z) &&
              (Z = _t(
                Z,
                O +
                  (Z.key == null || (f && f.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(Ut, "$&/") + "/") +
                  Y
              )),
            T.push(Z)),
        1
      );
    Y = 0;
    var ut = z === "" ? "." : z + ":";
    if (lt(f))
      for (var et = 0; et < f.length; et++)
        (z = f[et]), (X = ut + j(z, et)), (Y += Q(z, T, O, X, Z));
    else if (((et = W(f)), typeof et == "function"))
      for (f = et.call(f), et = 0; !(z = f.next()).done; )
        (z = z.value), (X = ut + j(z, et++)), (Y += Q(z, T, O, X, Z));
    else if (X === "object") {
      if (typeof f.then == "function") return Q(k(f), T, O, z, Z);
      throw (
        ((T = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Y;
  }
  function r(f, T, O) {
    if (f == null) return f;
    var z = [],
      Z = 0;
    return (
      Q(f, z, "", "", function (X) {
        return T.call(O, X, Z++);
      }),
      z
    );
  }
  function _(f) {
    if (f._status === -1) {
      var T = f._result;
      (T = T()),
        T.then(
          function (O) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = O));
          },
          function (O) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = O));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = T));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var R =
    typeof reportError == "function"
      ? reportError
      : function (f) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var T = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof f == "object" &&
                f !== null &&
                typeof f.message == "string"
                  ? String(f.message)
                  : String(f),
              error: f,
            });
            if (!window.dispatchEvent(T)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", f);
            return;
          }
          console.error(f);
        };
  function w() {}
  return (
    (ct.Children = {
      map: r,
      forEach: function (f, T, O) {
        r(
          f,
          function () {
            T.apply(this, arguments);
          },
          O
        );
      },
      count: function (f) {
        var T = 0;
        return (
          r(f, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (f) {
        return (
          r(f, function (T) {
            return T;
          }) || []
        );
      },
      only: function (f) {
        if (!Rt(f))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return f;
      },
    }),
    (ct.Component = I),
    (ct.Fragment = H),
    (ct.Profiler = C),
    (ct.PureComponent = St),
    (ct.StrictMode = y),
    (ct.Suspense = q),
    (ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (ct.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (f) {
        return x.H.useMemoCache(f);
      },
    }),
    (ct.cache = function (f) {
      return function () {
        return f.apply(null, arguments);
      };
    }),
    (ct.cloneElement = function (f, T, O) {
      if (f == null)
        throw Error(
          "The argument must be a React element, but you passed " + f + "."
        );
      var z = it({}, f.props),
        Z = f.key,
        X = void 0;
      if (T != null)
        for (Y in (T.ref !== void 0 && (X = void 0),
        T.key !== void 0 && (Z = "" + T.key),
        T))
          !Nt.call(T, Y) ||
            Y === "key" ||
            Y === "__self" ||
            Y === "__source" ||
            (Y === "ref" && T.ref === void 0) ||
            (z[Y] = T[Y]);
      var Y = arguments.length - 2;
      if (Y === 1) z.children = O;
      else if (1 < Y) {
        for (var ut = Array(Y), et = 0; et < Y; et++)
          ut[et] = arguments[et + 2];
        z.children = ut;
      }
      return ft(f.type, Z, void 0, void 0, X, z);
    }),
    (ct.createContext = function (f) {
      return (
        (f = {
          $$typeof: K,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (f.Provider = f),
        (f.Consumer = { $$typeof: U, _context: f }),
        f
      );
    }),
    (ct.createElement = function (f, T, O) {
      var z,
        Z = {},
        X = null;
      if (T != null)
        for (z in (T.key !== void 0 && (X = "" + T.key), T))
          Nt.call(T, z) &&
            z !== "key" &&
            z !== "__self" &&
            z !== "__source" &&
            (Z[z] = T[z]);
      var Y = arguments.length - 2;
      if (Y === 1) Z.children = O;
      else if (1 < Y) {
        for (var ut = Array(Y), et = 0; et < Y; et++)
          ut[et] = arguments[et + 2];
        Z.children = ut;
      }
      if (f && f.defaultProps)
        for (z in ((Y = f.defaultProps), Y)) Z[z] === void 0 && (Z[z] = Y[z]);
      return ft(f, X, void 0, void 0, null, Z);
    }),
    (ct.createRef = function () {
      return { current: null };
    }),
    (ct.forwardRef = function (f) {
      return { $$typeof: at, render: f };
    }),
    (ct.isValidElement = Rt),
    (ct.lazy = function (f) {
      return { $$typeof: B, _payload: { _status: -1, _result: f }, _init: _ };
    }),
    (ct.memo = function (f, T) {
      return { $$typeof: E, type: f, compare: T === void 0 ? null : T };
    }),
    (ct.startTransition = function (f) {
      var T = x.T,
        O = {};
      x.T = O;
      try {
        var z = f(),
          Z = x.S;
        Z !== null && Z(O, z),
          typeof z == "object" &&
            z !== null &&
            typeof z.then == "function" &&
            z.then(w, R);
      } catch (X) {
        R(X);
      } finally {
        x.T = T;
      }
    }),
    (ct.unstable_useCacheRefresh = function () {
      return x.H.useCacheRefresh();
    }),
    (ct.use = function (f) {
      return x.H.use(f);
    }),
    (ct.useActionState = function (f, T, O) {
      return x.H.useActionState(f, T, O);
    }),
    (ct.useCallback = function (f, T) {
      return x.H.useCallback(f, T);
    }),
    (ct.useContext = function (f) {
      return x.H.useContext(f);
    }),
    (ct.useDebugValue = function () {}),
    (ct.useDeferredValue = function (f, T) {
      return x.H.useDeferredValue(f, T);
    }),
    (ct.useEffect = function (f, T, O) {
      var z = x.H;
      if (typeof O == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return z.useEffect(f, T);
    }),
    (ct.useId = function () {
      return x.H.useId();
    }),
    (ct.useImperativeHandle = function (f, T, O) {
      return x.H.useImperativeHandle(f, T, O);
    }),
    (ct.useInsertionEffect = function (f, T) {
      return x.H.useInsertionEffect(f, T);
    }),
    (ct.useLayoutEffect = function (f, T) {
      return x.H.useLayoutEffect(f, T);
    }),
    (ct.useMemo = function (f, T) {
      return x.H.useMemo(f, T);
    }),
    (ct.useOptimistic = function (f, T) {
      return x.H.useOptimistic(f, T);
    }),
    (ct.useReducer = function (f, T, O) {
      return x.H.useReducer(f, T, O);
    }),
    (ct.useRef = function (f) {
      return x.H.useRef(f);
    }),
    (ct.useState = function (f) {
      return x.H.useState(f);
    }),
    (ct.useSyncExternalStore = function (f, T, O) {
      return x.H.useSyncExternalStore(f, T, O);
    }),
    (ct.useTransition = function () {
      return x.H.useTransition();
    }),
    (ct.version = "19.1.1"),
    ct
  );
}
var Sd;
function Sf() {
  return Sd || ((Sd = 1), (sf.exports = eh())), sf.exports;
}
var D = Sf(),
  of = { exports: {} },
  Ru = {},
  rf = { exports: {} },
  df = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd;
function ah() {
  return (
    gd ||
      ((gd = 1),
      (function (b) {
        function p(r, _) {
          var R = r.length;
          r.push(_);
          t: for (; 0 < R; ) {
            var w = (R - 1) >>> 1,
              f = r[w];
            if (0 < C(f, _)) (r[w] = _), (r[R] = f), (R = w);
            else break t;
          }
        }
        function H(r) {
          return r.length === 0 ? null : r[0];
        }
        function y(r) {
          if (r.length === 0) return null;
          var _ = r[0],
            R = r.pop();
          if (R !== _) {
            r[0] = R;
            t: for (var w = 0, f = r.length, T = f >>> 1; w < T; ) {
              var O = 2 * (w + 1) - 1,
                z = r[O],
                Z = O + 1,
                X = r[Z];
              if (0 > C(z, R))
                Z < f && 0 > C(X, z)
                  ? ((r[w] = X), (r[Z] = R), (w = Z))
                  : ((r[w] = z), (r[O] = R), (w = O));
              else if (Z < f && 0 > C(X, R)) (r[w] = X), (r[Z] = R), (w = Z);
              else break t;
            }
          }
          return _;
        }
        function C(r, _) {
          var R = r.sortIndex - _.sortIndex;
          return R !== 0 ? R : r.id - _.id;
        }
        if (
          ((b.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var U = performance;
          b.unstable_now = function () {
            return U.now();
          };
        } else {
          var K = Date,
            at = K.now();
          b.unstable_now = function () {
            return K.now() - at;
          };
        }
        var q = [],
          E = [],
          B = 1,
          tt = null,
          W = 3,
          Et = !1,
          it = !1,
          mt = !1,
          I = !1,
          rt = typeof setTimeout == "function" ? setTimeout : null,
          St = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function lt(r) {
          for (var _ = H(E); _ !== null; ) {
            if (_.callback === null) y(E);
            else if (_.startTime <= r)
              y(E), (_.sortIndex = _.expirationTime), p(q, _);
            else break;
            _ = H(E);
          }
        }
        function x(r) {
          if (((mt = !1), lt(r), !it))
            if (H(q) !== null) (it = !0), Nt || ((Nt = !0), j());
            else {
              var _ = H(E);
              _ !== null && Q(x, _.startTime - r);
            }
        }
        var Nt = !1,
          ft = -1,
          _t = 5,
          Rt = -1;
        function Vt() {
          return I ? !0 : !(b.unstable_now() - Rt < _t);
        }
        function Ut() {
          if (((I = !1), Nt)) {
            var r = b.unstable_now();
            Rt = r;
            var _ = !0;
            try {
              t: {
                (it = !1), mt && ((mt = !1), St(ft), (ft = -1)), (Et = !0);
                var R = W;
                try {
                  l: {
                    for (
                      lt(r), tt = H(q);
                      tt !== null && !(tt.expirationTime > r && Vt());

                    ) {
                      var w = tt.callback;
                      if (typeof w == "function") {
                        (tt.callback = null), (W = tt.priorityLevel);
                        var f = w(tt.expirationTime <= r);
                        if (((r = b.unstable_now()), typeof f == "function")) {
                          (tt.callback = f), lt(r), (_ = !0);
                          break l;
                        }
                        tt === H(q) && y(q), lt(r);
                      } else y(q);
                      tt = H(q);
                    }
                    if (tt !== null) _ = !0;
                    else {
                      var T = H(E);
                      T !== null && Q(x, T.startTime - r), (_ = !1);
                    }
                  }
                  break t;
                } finally {
                  (tt = null), (W = R), (Et = !1);
                }
                _ = void 0;
              }
            } finally {
              _ ? j() : (Nt = !1);
            }
          }
        }
        var j;
        if (typeof V == "function")
          j = function () {
            V(Ut);
          };
        else if (typeof MessageChannel < "u") {
          var J = new MessageChannel(),
            k = J.port2;
          (J.port1.onmessage = Ut),
            (j = function () {
              k.postMessage(null);
            });
        } else
          j = function () {
            rt(Ut, 0);
          };
        function Q(r, _) {
          ft = rt(function () {
            r(b.unstable_now());
          }, _);
        }
        (b.unstable_IdlePriority = 5),
          (b.unstable_ImmediatePriority = 1),
          (b.unstable_LowPriority = 4),
          (b.unstable_NormalPriority = 3),
          (b.unstable_Profiling = null),
          (b.unstable_UserBlockingPriority = 2),
          (b.unstable_cancelCallback = function (r) {
            r.callback = null;
          }),
          (b.unstable_forceFrameRate = function (r) {
            0 > r || 125 < r
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_t = 0 < r ? Math.floor(1e3 / r) : 5);
          }),
          (b.unstable_getCurrentPriorityLevel = function () {
            return W;
          }),
          (b.unstable_next = function (r) {
            switch (W) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = W;
            }
            var R = W;
            W = _;
            try {
              return r();
            } finally {
              W = R;
            }
          }),
          (b.unstable_requestPaint = function () {
            I = !0;
          }),
          (b.unstable_runWithPriority = function (r, _) {
            switch (r) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                r = 3;
            }
            var R = W;
            W = r;
            try {
              return _();
            } finally {
              W = R;
            }
          }),
          (b.unstable_scheduleCallback = function (r, _, R) {
            var w = b.unstable_now();
            switch (
              (typeof R == "object" && R !== null
                ? ((R = R.delay),
                  (R = typeof R == "number" && 0 < R ? w + R : w))
                : (R = w),
              r)
            ) {
              case 1:
                var f = -1;
                break;
              case 2:
                f = 250;
                break;
              case 5:
                f = 1073741823;
                break;
              case 4:
                f = 1e4;
                break;
              default:
                f = 5e3;
            }
            return (
              (f = R + f),
              (r = {
                id: B++,
                callback: _,
                priorityLevel: r,
                startTime: R,
                expirationTime: f,
                sortIndex: -1,
              }),
              R > w
                ? ((r.sortIndex = R),
                  p(E, r),
                  H(q) === null &&
                    r === H(E) &&
                    (mt ? (St(ft), (ft = -1)) : (mt = !0), Q(x, R - w)))
                : ((r.sortIndex = f),
                  p(q, r),
                  it || Et || ((it = !0), Nt || ((Nt = !0), j()))),
              r
            );
          }),
          (b.unstable_shouldYield = Vt),
          (b.unstable_wrapCallback = function (r) {
            var _ = W;
            return function () {
              var R = W;
              W = _;
              try {
                return r.apply(this, arguments);
              } finally {
                W = R;
              }
            };
          });
      })(df)),
    df
  );
}
var Td;
function uh() {
  return Td || ((Td = 1), (rf.exports = ah())), rf.exports;
}
var yf = { exports: {} },
  Pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function nh() {
  if (Ed) return Pt;
  Ed = 1;
  var b = Sf();
  function p(q) {
    var E = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        E += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return (
      "Minified React error #" +
      q +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function H() {}
  var y = {
      d: {
        f: H,
        r: function () {
          throw Error(p(522));
        },
        D: H,
        C: H,
        L: H,
        m: H,
        X: H,
        S: H,
        M: H,
      },
      p: 0,
      findDOMNode: null,
    },
    C = Symbol.for("react.portal");
  function U(q, E, B) {
    var tt =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: C,
      key: tt == null ? null : "" + tt,
      children: q,
      containerInfo: E,
      implementation: B,
    };
  }
  var K = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function at(q, E) {
    if (q === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    (Pt.createPortal = function (q, E) {
      var B =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(p(299));
      return U(q, E, null, B);
    }),
    (Pt.flushSync = function (q) {
      var E = K.T,
        B = y.p;
      try {
        if (((K.T = null), (y.p = 2), q)) return q();
      } finally {
        (K.T = E), (y.p = B), y.d.f();
      }
    }),
    (Pt.preconnect = function (q, E) {
      typeof q == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        y.d.C(q, E));
    }),
    (Pt.prefetchDNS = function (q) {
      typeof q == "string" && y.d.D(q);
    }),
    (Pt.preinit = function (q, E) {
      if (typeof q == "string" && E && typeof E.as == "string") {
        var B = E.as,
          tt = at(B, E.crossOrigin),
          W = typeof E.integrity == "string" ? E.integrity : void 0,
          Et = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        B === "style"
          ? y.d.S(q, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: tt,
              integrity: W,
              fetchPriority: Et,
            })
          : B === "script" &&
            y.d.X(q, {
              crossOrigin: tt,
              integrity: W,
              fetchPriority: Et,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Pt.preinitModule = function (q, E) {
      if (typeof q == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var B = at(E.as, E.crossOrigin);
            y.d.M(q, {
              crossOrigin: B,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && y.d.M(q);
    }),
    (Pt.preload = function (q, E) {
      if (
        typeof q == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var B = E.as,
          tt = at(B, E.crossOrigin);
        y.d.L(q, B, {
          crossOrigin: tt,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Pt.preloadModule = function (q, E) {
      if (typeof q == "string")
        if (E) {
          var B = at(E.as, E.crossOrigin);
          y.d.m(q, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: B,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else y.d.m(q);
    }),
    (Pt.requestFormReset = function (q) {
      y.d.r(q);
    }),
    (Pt.unstable_batchedUpdates = function (q, E) {
      return q(E);
    }),
    (Pt.useFormState = function (q, E, B) {
      return K.H.useFormState(q, E, B);
    }),
    (Pt.useFormStatus = function () {
      return K.H.useHostTransitionStatus();
    }),
    (Pt.version = "19.1.1"),
    Pt
  );
}
var Ad;
function ch() {
  if (Ad) return yf.exports;
  Ad = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (p) {
        console.error(p);
      }
  }
  return b(), (yf.exports = nh()), yf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd;
function ih() {
  if (bd) return Ru;
  bd = 1;
  var b = uh(),
    p = Sf(),
    H = ch();
  function y(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function C(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function U(t) {
    var l = t,
      e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do (l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return);
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function K(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function at(t) {
    if (U(t) !== t) throw Error(y(188));
  }
  function q(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = U(t)), l === null)) throw Error(y(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return at(u), t;
          if (n === a) return at(u), l;
          n = n.sibling;
        }
        throw Error(y(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === e) {
            (c = !0), (e = u), (a = n);
            break;
          }
          if (i === a) {
            (c = !0), (a = u), (e = n);
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === e) {
              (c = !0), (e = n), (a = u);
              break;
            }
            if (i === a) {
              (c = !0), (a = n), (e = u);
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(y(189));
        }
      }
      if (e.alternate !== a) throw Error(y(190));
    }
    if (e.tag !== 3) throw Error(y(188));
    return e.stateNode.current === e ? t : l;
  }
  function E(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((l = E(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var B = Object.assign,
    tt = Symbol.for("react.element"),
    W = Symbol.for("react.transitional.element"),
    Et = Symbol.for("react.portal"),
    it = Symbol.for("react.fragment"),
    mt = Symbol.for("react.strict_mode"),
    I = Symbol.for("react.profiler"),
    rt = Symbol.for("react.provider"),
    St = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    lt = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    Nt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    _t = Symbol.for("react.lazy"),
    Rt = Symbol.for("react.activity"),
    Vt = Symbol.for("react.memo_cache_sentinel"),
    Ut = Symbol.iterator;
  function j(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Ut && t[Ut]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var J = Symbol.for("react.client.reference");
  function k(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === J ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case it:
        return "Fragment";
      case I:
        return "Profiler";
      case mt:
        return "StrictMode";
      case x:
        return "Suspense";
      case Nt:
        return "SuspenseList";
      case Rt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Et:
          return "Portal";
        case V:
          return (t.displayName || "Context") + ".Provider";
        case St:
          return (t._context.displayName || "Context") + ".Consumer";
        case lt:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case ft:
          return (
            (l = t.displayName || null), l !== null ? l : k(t.type) || "Memo"
          );
        case _t:
          (l = t._payload), (t = t._init);
          try {
            return k(t(l));
          } catch {}
      }
    return null;
  }
  var Q = Array.isArray,
    r = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = { pending: !1, data: null, method: null, action: null },
    w = [],
    f = -1;
  function T(t) {
    return { current: t };
  }
  function O(t) {
    0 > f || ((t.current = w[f]), (w[f] = null), f--);
  }
  function z(t, l) {
    f++, (w[f] = t.current), (t.current = l);
  }
  var Z = T(null),
    X = T(null),
    Y = T(null),
    ut = T(null);
  function et(t, l) {
    switch ((z(Y, l), z(X, t), z(Z, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Qr(t) : 0;
        break;
      default:
        if (((t = l.tagName), (l = l.namespaceURI)))
          (l = Qr(l)), (t = wr(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    O(Z), z(Z, t);
  }
  function nt() {
    O(Z), O(X), O(Y);
  }
  function Tt(t) {
    t.memoizedState !== null && z(ut, t);
    var l = Z.current,
      e = wr(l, t.type);
    l !== e && (z(X, t), z(Z, e));
  }
  function Dl(t) {
    X.current === t && (O(Z), O(X)),
      ut.current === t && (O(ut), (bu._currentValue = R));
  }
  var Cl = Object.prototype.hasOwnProperty,
    Ae = b.unstable_scheduleCallback,
    ql = b.unstable_cancelCallback,
    be = b.unstable_shouldYield,
    Ne = b.unstable_requestPaint,
    $t = b.unstable_now,
    $l = b.unstable_getCurrentPriorityLevel,
    za = b.unstable_ImmediatePriority,
    bf = b.unstable_UserBlockingPriority,
    xu = b.unstable_NormalPriority,
    jd = b.unstable_LowPriority,
    Nf = b.unstable_IdlePriority,
    Hd = b.log,
    Bd = b.unstable_setDisableYieldValue,
    pa = null,
    cl = null;
  function Fl(t) {
    if (
      (typeof Hd == "function" && Bd(t),
      cl && typeof cl.setStrictMode == "function")
    )
      try {
        cl.setStrictMode(pa, t);
      } catch {}
  }
  var il = Math.clz32 ? Math.clz32 : Kd,
    Yd = Math.log,
    Gd = Math.LN2;
  function Kd(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Yd(t) / Gd) | 0)) | 0;
  }
  var Cu = 256,
    qu = 4194304;
  function _e(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ju(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      c = t.pingedLanes;
    t = t.warmLanes;
    var i = a & 134217727;
    return (
      i !== 0
        ? ((a = i & ~n),
          a !== 0
            ? (u = _e(a))
            : ((c &= i),
              c !== 0
                ? (u = _e(c))
                : e || ((e = i & ~t), e !== 0 && (u = _e(e)))))
        : ((i = a & ~n),
          i !== 0
            ? (u = _e(i))
            : c !== 0
            ? (u = _e(c))
            : e || ((e = a & ~t), e !== 0 && (u = _e(e)))),
      u === 0
        ? 0
        : l !== 0 &&
          l !== u &&
          (l & n) === 0 &&
          ((n = u & -u),
          (e = l & -l),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? l
        : u
    );
  }
  function Ua(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Xd(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _f() {
    var t = Cu;
    return (Cu <<= 1), (Cu & 4194048) === 0 && (Cu = 256), t;
  }
  function Mf() {
    var t = qu;
    return (qu <<= 1), (qu & 62914560) === 0 && (qu = 4194304), t;
  }
  function $n(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function xa(t, l) {
    (t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Qd(t, l, e, a, u, n) {
    var c = t.pendingLanes;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0);
    var i = t.entanglements,
      s = t.expirationTimes,
      m = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var A = 31 - il(e),
        M = 1 << A;
      (i[A] = 0), (s[A] = -1);
      var S = m[A];
      if (S !== null)
        for (m[A] = null, A = 0; A < S.length; A++) {
          var g = S[A];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~M;
    }
    a !== 0 && Of(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~l));
  }
  function Of(t, l, e) {
    (t.pendingLanes |= l), (t.suspendedLanes &= ~l);
    var a = 31 - il(l);
    (t.entangledLanes |= l),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 4194090));
  }
  function Df(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e; ) {
      var a = 31 - il(e),
        u = 1 << a;
      (u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u);
    }
  }
  function Fn(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function In(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Rf() {
    var t = _.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : fd(t.type));
  }
  function wd(t, l) {
    var e = _.p;
    try {
      return (_.p = t), l();
    } finally {
      _.p = e;
    }
  }
  var Il = Math.random().toString(36).slice(2),
    Ft = "__reactFiber$" + Il,
    ll = "__reactProps$" + Il,
    Ze = "__reactContainer$" + Il,
    Pn = "__reactEvents$" + Il,
    Zd = "__reactListeners$" + Il,
    Ld = "__reactHandles$" + Il,
    zf = "__reactResources$" + Il,
    Ca = "__reactMarker$" + Il;
  function tc(t) {
    delete t[Ft], delete t[ll], delete t[Pn], delete t[Zd], delete t[Ld];
  }
  function Le(t) {
    var l = t[Ft];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[Ze] || e[Ft])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = kr(t); t !== null; ) {
            if ((e = t[Ft])) return e;
            t = kr(t);
          }
        return l;
      }
      (t = e), (e = t.parentNode);
    }
    return null;
  }
  function Ve(t) {
    if ((t = t[Ft] || t[Ze])) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function qa(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(y(33));
  }
  function ke(t) {
    var l = t[zf];
    return (
      l ||
        (l = t[zf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function Qt(t) {
    t[Ca] = !0;
  }
  var pf = new Set(),
    Uf = {};
  function Me(t, l) {
    We(t, l), We(t + "Capture", l);
  }
  function We(t, l) {
    for (Uf[t] = l, t = 0; t < l.length; t++) pf.add(l[t]);
  }
  var Vd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    xf = {},
    Cf = {};
  function kd(t) {
    return Cl.call(Cf, t)
      ? !0
      : Cl.call(xf, t)
      ? !1
      : Vd.test(t)
      ? (Cf[t] = !0)
      : ((xf[t] = !0), !1);
  }
  function Hu(t, l, e) {
    if (kd(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Bu(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function jl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var lc, qf;
  function Je(t) {
    if (lc === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        (lc = (l && l[1]) || ""),
          (qf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      lc +
      t +
      qf
    );
  }
  var ec = !1;
  function ac(t, l) {
    if (!t || ec) return "";
    ec = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var M = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(M.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(M, []);
                } catch (g) {
                  var S = g;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (g) {
                  S = g;
                }
                t.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                S = g;
              }
              (M = t()) &&
                typeof M.catch == "function" &&
                M.catch(function () {});
            }
          } catch (g) {
            if (g && S && typeof g.stack == "string") return [g.stack, S.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var s = c.split(`
`),
          m = i.split(`
`);
        for (
          u = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === s.length || u === m.length)
          for (
            a = s.length - 1, u = m.length - 1;
            1 <= a && 0 <= u && s[a] !== m[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== m[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || s[a] !== m[u])) {
                  var A =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", t.displayName)),
                    A
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (ec = !1), (Error.prepareStackTrace = e);
    }
    return (e = t ? t.displayName || t.name : "") ? Je(e) : "";
  }
  function Wd(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Je(t.type);
      case 16:
        return Je("Lazy");
      case 13:
        return Je("Suspense");
      case 19:
        return Je("SuspenseList");
      case 0:
      case 15:
        return ac(t.type, !1);
      case 11:
        return ac(t.type.render, !1);
      case 1:
        return ac(t.type, !0);
      case 31:
        return Je("Activity");
      default:
        return "";
    }
  }
  function jf(t) {
    try {
      var l = "";
      do (l += Wd(t)), (t = t.return);
      while (t);
      return l;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function vl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Hf(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function Jd(t) {
    var l = Hf(t) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
      a = "" + t[l];
    if (
      !t.hasOwnProperty(l) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (a = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[l];
          },
        }
      );
    }
  }
  function Yu(t) {
    t._valueTracker || (t._valueTracker = Jd(t));
  }
  function Bf(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      a = "";
    return (
      t && (a = Hf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Gu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var $d = /[\n"\\]/g;
  function ml(t) {
    return t.replace($d, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function uc(t, l, e, a, u, n, c, i) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      l != null
        ? c === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + vl(l))
          : t.value !== "" + vl(l) && (t.value = "" + vl(l))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      l != null
        ? nc(t, c, vl(l))
        : e != null
        ? nc(t, c, vl(e))
        : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.name = "" + vl(i))
        : t.removeAttribute("name");
  }
  function Yf(t, l, e, a, u, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      l != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) return;
      (e = e != null ? "" + vl(e) : ""),
        (l = l != null ? "" + vl(l) : e),
        i || l === t.value || (t.value = l),
        (t.defaultValue = l);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = i ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function nc(t, l, e) {
    (l === "number" && Gu(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function $e(t, l, e, a) {
    if (((t = t.options), l)) {
      l = {};
      for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        (u = l.hasOwnProperty("$" + t[e].value)),
          t[e].selected !== u && (t[e].selected = u),
          u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + vl(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Gf(t, l, e) {
    if (
      l != null &&
      ((l = "" + vl(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + vl(e) : "";
  }
  function Kf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(y(92));
        if (Q(a)) {
          if (1 < a.length) throw Error(y(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (l = e);
    }
    (e = vl(l)),
      (t.defaultValue = e),
      (a = t.textContent),
      a === e && a !== "" && a !== null && (t.value = a);
  }
  function Fe(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Fd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Xf(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? t.setProperty(l, "")
        : l === "float"
        ? (t.cssFloat = "")
        : (t[l] = "")
      : a
      ? t.setProperty(l, e)
      : typeof e != "number" || e === 0 || Fd.has(l)
      ? l === "float"
        ? (t.cssFloat = e)
        : (t[l] = ("" + e).trim())
      : (t[l] = e + "px");
  }
  function Qf(t, l, e) {
    if (l != null && typeof l != "object") throw Error(y(62));
    if (((t = t.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (l != null && l.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in l)
        (a = l[u]), l.hasOwnProperty(u) && e[u] !== a && Xf(t, u, a);
    } else for (var n in l) l.hasOwnProperty(n) && Xf(t, n, l[n]);
  }
  function cc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Id = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Pd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ku(t) {
    return Pd.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var ic = null;
  function fc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ie = null,
    Pe = null;
  function wf(t) {
    var l = Ve(t);
    if (l && (t = l.stateNode)) {
      var e = t[ll] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (uc(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (l = e.name),
            e.type === "radio" && l != null)
          ) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + ml("" + l) + '"][type="radio"]'
              ),
                l = 0;
              l < e.length;
              l++
            ) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[ll] || null;
                if (!u) throw Error(y(90));
                uc(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              (a = e[l]), a.form === t.form && Bf(a);
          }
          break t;
        case "textarea":
          Gf(t, e.value, e.defaultValue);
          break t;
        case "select":
          (l = e.value), l != null && $e(t, !!e.multiple, l, !1);
      }
    }
  }
  var sc = !1;
  function Zf(t, l, e) {
    if (sc) return t(l, e);
    sc = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (
        ((sc = !1),
        (Ie !== null || Pe !== null) &&
          (On(), Ie && ((l = Ie), (t = Pe), (Pe = Ie = null), wf(l), t)))
      )
        for (l = 0; l < t.length; l++) wf(t[l]);
    }
  }
  function ja(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[ll] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(y(231, l, typeof e));
    return e;
  }
  var Hl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    oc = !1;
  if (Hl)
    try {
      var Ha = {};
      Object.defineProperty(Ha, "passive", {
        get: function () {
          oc = !0;
        },
      }),
        window.addEventListener("test", Ha, Ha),
        window.removeEventListener("test", Ha, Ha);
    } catch {
      oc = !1;
    }
  var Pl = null,
    rc = null,
    Xu = null;
  function Lf() {
    if (Xu) return Xu;
    var t,
      l = rc,
      e = l.length,
      a,
      u = "value" in Pl ? Pl.value : Pl.textContent,
      n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++);
    var c = e - t;
    for (a = 1; a <= c && l[e - a] === u[n - a]; a++);
    return (Xu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Qu(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function wu() {
    return !0;
  }
  function Vf() {
    return !1;
  }
  function el(t) {
    function l(e, a, u, n, c) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var i in t)
        t.hasOwnProperty(i) && ((e = t[i]), (this[i] = e ? e(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? wu
          : Vf),
        (this.isPropagationStopped = Vf),
        this
      );
    }
    return (
      B(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = wu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = wu));
        },
        persist: function () {},
        isPersistent: wu,
      }),
      l
    );
  }
  var Oe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zu = el(Oe),
    Ba = B({}, Oe, { view: 0, detail: 0 }),
    t0 = el(Ba),
    dc,
    yc,
    Ya,
    Lu = B({}, Ba, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ya &&
              (Ya && t.type === "mousemove"
                ? ((dc = t.screenX - Ya.screenX), (yc = t.screenY - Ya.screenY))
                : (yc = dc = 0),
              (Ya = t)),
            dc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : yc;
      },
    }),
    kf = el(Lu),
    l0 = B({}, Lu, { dataTransfer: 0 }),
    e0 = el(l0),
    a0 = B({}, Ba, { relatedTarget: 0 }),
    hc = el(a0),
    u0 = B({}, Oe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n0 = el(u0),
    c0 = B({}, Oe, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    i0 = el(c0),
    f0 = B({}, Oe, { data: 0 }),
    Wf = el(f0),
    s0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    o0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    r0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function d0(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = r0[t])
      ? !!l[t]
      : !1;
  }
  function vc() {
    return d0;
  }
  var y0 = B({}, Ba, {
      key: function (t) {
        if (t.key) {
          var l = s0[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = Qu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? o0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vc,
      charCode: function (t) {
        return t.type === "keypress" ? Qu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Qu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    h0 = el(y0),
    v0 = B({}, Lu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Jf = el(v0),
    m0 = B({}, Ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vc,
    }),
    S0 = el(m0),
    g0 = B({}, Oe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    T0 = el(g0),
    E0 = B({}, Lu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    A0 = el(E0),
    b0 = B({}, Oe, { newState: 0, oldState: 0 }),
    N0 = el(b0),
    _0 = [9, 13, 27, 32],
    mc = Hl && "CompositionEvent" in window,
    Ga = null;
  Hl && "documentMode" in document && (Ga = document.documentMode);
  var M0 = Hl && "TextEvent" in window && !Ga,
    $f = Hl && (!mc || (Ga && 8 < Ga && 11 >= Ga)),
    Ff = " ",
    If = !1;
  function Pf(t, l) {
    switch (t) {
      case "keyup":
        return _0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ts(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ta = !1;
  function O0(t, l) {
    switch (t) {
      case "compositionend":
        return ts(l);
      case "keypress":
        return l.which !== 32 ? null : ((If = !0), Ff);
      case "textInput":
        return (t = l.data), t === Ff && If ? null : t;
      default:
        return null;
    }
  }
  function D0(t, l) {
    if (ta)
      return t === "compositionend" || (!mc && Pf(t, l))
        ? ((t = Lf()), (Xu = rc = Pl = null), (ta = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return $f && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var R0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ls(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!R0[t.type] : l === "textarea";
  }
  function es(t, l, e, a) {
    Ie ? (Pe ? Pe.push(a) : (Pe = [a])) : (Ie = a),
      (l = xn(l, "onChange")),
      0 < l.length &&
        ((e = new Zu("onChange", "change", null, e, a)),
        t.push({ event: e, listeners: l }));
  }
  var Ka = null,
    Xa = null;
  function z0(t) {
    Br(t, 0);
  }
  function Vu(t) {
    var l = qa(t);
    if (Bf(l)) return t;
  }
  function as(t, l) {
    if (t === "change") return l;
  }
  var us = !1;
  if (Hl) {
    var Sc;
    if (Hl) {
      var gc = "oninput" in document;
      if (!gc) {
        var ns = document.createElement("div");
        ns.setAttribute("oninput", "return;"),
          (gc = typeof ns.oninput == "function");
      }
      Sc = gc;
    } else Sc = !1;
    us = Sc && (!document.documentMode || 9 < document.documentMode);
  }
  function cs() {
    Ka && (Ka.detachEvent("onpropertychange", is), (Xa = Ka = null));
  }
  function is(t) {
    if (t.propertyName === "value" && Vu(Xa)) {
      var l = [];
      es(l, Xa, t, fc(t)), Zf(z0, l);
    }
  }
  function p0(t, l, e) {
    t === "focusin"
      ? (cs(), (Ka = l), (Xa = e), Ka.attachEvent("onpropertychange", is))
      : t === "focusout" && cs();
  }
  function U0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Vu(Xa);
  }
  function x0(t, l) {
    if (t === "click") return Vu(l);
  }
  function C0(t, l) {
    if (t === "input" || t === "change") return Vu(l);
  }
  function q0(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var fl = typeof Object.is == "function" ? Object.is : q0;
  function Qa(t, l) {
    if (fl(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var e = Object.keys(t),
      a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Cl.call(l, u) || !fl(t[u], l[u])) return !1;
    }
    return !0;
  }
  function fs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ss(t, l) {
    var e = fs(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = t + e.textContent.length), t <= l && a >= l))
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = fs(e);
    }
  }
  function os(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
        ? !1
        : l && l.nodeType === 3
        ? os(t, l.parentNode)
        : "contains" in t
        ? t.contains(l)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(l) & 16)
        : !1
      : !1;
  }
  function rs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Gu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Gu(t.document);
    }
    return l;
  }
  function Tc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var j0 = Hl && "documentMode" in document && 11 >= document.documentMode,
    la = null,
    Ec = null,
    wa = null,
    Ac = !1;
  function ds(t, l, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ac ||
      la == null ||
      la !== Gu(a) ||
      ((a = la),
      "selectionStart" in a && Tc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (wa && Qa(wa, a)) ||
        ((wa = a),
        (a = xn(Ec, "onSelect")),
        0 < a.length &&
          ((l = new Zu("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: a }),
          (l.target = la))));
  }
  function De(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var ea = {
      animationend: De("Animation", "AnimationEnd"),
      animationiteration: De("Animation", "AnimationIteration"),
      animationstart: De("Animation", "AnimationStart"),
      transitionrun: De("Transition", "TransitionRun"),
      transitionstart: De("Transition", "TransitionStart"),
      transitioncancel: De("Transition", "TransitionCancel"),
      transitionend: De("Transition", "TransitionEnd"),
    },
    bc = {},
    ys = {};
  Hl &&
    ((ys = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ea.animationend.animation,
      delete ea.animationiteration.animation,
      delete ea.animationstart.animation),
    "TransitionEvent" in window || delete ea.transitionend.transition);
  function Re(t) {
    if (bc[t]) return bc[t];
    if (!ea[t]) return t;
    var l = ea[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in ys) return (bc[t] = l[e]);
    return t;
  }
  var hs = Re("animationend"),
    vs = Re("animationiteration"),
    ms = Re("animationstart"),
    H0 = Re("transitionrun"),
    B0 = Re("transitionstart"),
    Y0 = Re("transitioncancel"),
    Ss = Re("transitionend"),
    gs = new Map(),
    Nc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Nc.push("scrollEnd");
  function _l(t, l) {
    gs.set(t, l), Me(l, [t]);
  }
  var Ts = new WeakMap();
  function Sl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Ts.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: jf(l) }), Ts.set(t, l), l);
    }
    return { value: t, source: l, stack: jf(l) };
  }
  var gl = [],
    aa = 0,
    _c = 0;
  function ku() {
    for (var t = aa, l = (_c = aa = 0); l < t; ) {
      var e = gl[l];
      gl[l++] = null;
      var a = gl[l];
      gl[l++] = null;
      var u = gl[l];
      gl[l++] = null;
      var n = gl[l];
      if (((gl[l++] = null), a !== null && u !== null)) {
        var c = a.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (a.pending = u);
      }
      n !== 0 && Es(e, u, n);
    }
  }
  function Wu(t, l, e, a) {
    (gl[aa++] = t),
      (gl[aa++] = l),
      (gl[aa++] = e),
      (gl[aa++] = a),
      (_c |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Mc(t, l, e, a) {
    return Wu(t, l, e, a), Ju(t);
  }
  function ua(t, l) {
    return Wu(t, null, null, l), Ju(t);
  }
  function Es(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          l !== null &&
          ((u = 31 - il(e)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [l]) : a.push(l),
          (l.lane = e | 536870912)),
        n)
      : null;
  }
  function Ju(t) {
    if (50 < hu) throw ((hu = 0), (Ui = null), Error(y(185)));
    for (var l = t.return; l !== null; ) (t = l), (l = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var na = {};
  function G0(t, l, e, a) {
    (this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function sl(t, l, e, a) {
    return new G0(t, l, e, a);
  }
  function Oc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Bl(t, l) {
    var e = t.alternate;
    return (
      e === null
        ? ((e = sl(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 65011712),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    );
  }
  function As(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function $u(t, l, e, a, u, n) {
    var c = 0;
    if (((a = t), typeof t == "function")) Oc(t) && (c = 1);
    else if (typeof t == "string")
      c = Xy(t, e, Z.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Rt:
          return (t = sl(31, e, l, u)), (t.elementType = Rt), (t.lanes = n), t;
        case it:
          return ze(e.children, u, n, l);
        case mt:
          (c = 8), (u |= 24);
          break;
        case I:
          return (
            (t = sl(12, e, l, u | 2)), (t.elementType = I), (t.lanes = n), t
          );
        case x:
          return (t = sl(13, e, l, u)), (t.elementType = x), (t.lanes = n), t;
        case Nt:
          return (t = sl(19, e, l, u)), (t.elementType = Nt), (t.lanes = n), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case rt:
              case V:
                c = 10;
                break t;
              case St:
                c = 9;
                break t;
              case lt:
                c = 11;
                break t;
              case ft:
                c = 14;
                break t;
              case _t:
                (c = 16), (a = null);
                break t;
            }
          (c = 29),
            (e = Error(y(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (l = sl(c, e, l, u)), (l.elementType = t), (l.type = a), (l.lanes = n), l
    );
  }
  function ze(t, l, e, a) {
    return (t = sl(7, t, a, l)), (t.lanes = e), t;
  }
  function Dc(t, l, e) {
    return (t = sl(6, t, null, l)), (t.lanes = e), t;
  }
  function Rc(t, l, e) {
    return (
      (l = sl(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  var ca = [],
    ia = 0,
    Fu = null,
    Iu = 0,
    Tl = [],
    El = 0,
    pe = null,
    Yl = 1,
    Gl = "";
  function Ue(t, l) {
    (ca[ia++] = Iu), (ca[ia++] = Fu), (Fu = t), (Iu = l);
  }
  function bs(t, l, e) {
    (Tl[El++] = Yl), (Tl[El++] = Gl), (Tl[El++] = pe), (pe = t);
    var a = Yl;
    t = Gl;
    var u = 32 - il(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - il(l) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (u -= c),
        (Yl = (1 << (32 - il(l) + u)) | (e << u) | a),
        (Gl = n + t);
    } else (Yl = (1 << n) | (e << u) | a), (Gl = t);
  }
  function zc(t) {
    t.return !== null && (Ue(t, 1), bs(t, 1, 0));
  }
  function pc(t) {
    for (; t === Fu; )
      (Fu = ca[--ia]), (ca[ia] = null), (Iu = ca[--ia]), (ca[ia] = null);
    for (; t === pe; )
      (pe = Tl[--El]),
        (Tl[El] = null),
        (Gl = Tl[--El]),
        (Tl[El] = null),
        (Yl = Tl[--El]),
        (Tl[El] = null);
  }
  var tl = null,
    qt = null,
    gt = !1,
    xe = null,
    Rl = !1,
    Uc = Error(y(519));
  function Ce(t) {
    var l = Error(y(418, ""));
    throw (Va(Sl(l, t)), Uc);
  }
  function Ns(t) {
    var l = t.stateNode,
      e = t.type,
      a = t.memoizedProps;
    switch (((l[Ft] = t), (l[ll] = a), e)) {
      case "dialog":
        yt("cancel", l), yt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < mu.length; e++) yt(mu[e], l);
        break;
      case "source":
        yt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        yt("error", l), yt("load", l);
        break;
      case "details":
        yt("toggle", l);
        break;
      case "input":
        yt("invalid", l),
          Yf(
            l,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Yu(l);
        break;
      case "select":
        yt("invalid", l);
        break;
      case "textarea":
        yt("invalid", l), Kf(l, a.value, a.defaultValue, a.children), Yu(l);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Xr(l.textContent, e)
        ? (a.popover != null && (yt("beforetoggle", l), yt("toggle", l)),
          a.onScroll != null && yt("scroll", l),
          a.onScrollEnd != null && yt("scrollend", l),
          a.onClick != null && (l.onclick = Cn),
          (l = !0))
        : (l = !1),
      l || Ce(t);
  }
  function _s(t) {
    for (tl = t.return; tl; )
      switch (tl.tag) {
        case 5:
        case 13:
          Rl = !1;
          return;
        case 27:
        case 3:
          Rl = !0;
          return;
        default:
          tl = tl.return;
      }
  }
  function Za(t) {
    if (t !== tl) return !1;
    if (!gt) return _s(t), (gt = !0), !1;
    var l = t.tag,
      e;
    if (
      ((e = l !== 3 && l !== 27) &&
        ((e = l === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || ki(t.type, t.memoizedProps))),
        (e = !e)),
      e && qt && Ce(t),
      _s(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(y(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === "/$")) {
              if (l === 0) {
                qt = Ol(t.nextSibling);
                break t;
              }
              l--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || l++;
          t = t.nextSibling;
        }
        qt = null;
      }
    } else
      l === 27
        ? ((l = qt), ve(t.type) ? ((t = Fi), (Fi = null), (qt = t)) : (qt = l))
        : (qt = tl ? Ol(t.stateNode.nextSibling) : null);
    return !0;
  }
  function La() {
    (qt = tl = null), (gt = !1);
  }
  function Ms() {
    var t = xe;
    return (
      t !== null &&
        (nl === null ? (nl = t) : nl.push.apply(nl, t), (xe = null)),
      t
    );
  }
  function Va(t) {
    xe === null ? (xe = [t]) : xe.push(t);
  }
  var xc = T(null),
    qe = null,
    Kl = null;
  function te(t, l, e) {
    z(xc, l._currentValue), (l._currentValue = e);
  }
  function Xl(t) {
    (t._currentValue = xc.current), O(xc);
  }
  function Cc(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
          : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
        t === e)
      )
        break;
      t = t.return;
    }
  }
  function qc(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var s = 0; s < l.length; s++)
            if (i.context === l[s]) {
              (n.lanes |= e),
                (i = n.alternate),
                i !== null && (i.lanes |= e),
                Cc(n.return, e, t),
                a || (c = null);
              break t;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(y(341));
        (c.lanes |= e),
          (n = c.alternate),
          n !== null && (n.lanes |= e),
          Cc(c, e, t),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            (u.return = c.return), (c = u);
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function ka(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(y(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = u.type;
          fl(u.pendingProps.value, c.value) ||
            (t !== null ? t.push(i) : (t = [i]));
        }
      } else if (u === ut.current) {
        if (((c = u.alternate), c === null)) throw Error(y(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(bu) : (t = [bu]));
      }
      u = u.return;
    }
    t !== null && qc(l, t, e, a), (l.flags |= 262144);
  }
  function Pu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fl(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function je(t) {
    (qe = t),
      (Kl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function It(t) {
    return Os(qe, t);
  }
  function tn(t, l) {
    return qe === null && je(t), Os(t, l);
  }
  function Os(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), Kl === null)) {
      if (t === null) throw Error(y(308));
      (Kl = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288);
    } else Kl = Kl.next = l;
    return e;
  }
  var K0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (l.aborted = !0),
                t.forEach(function (e) {
                  return e();
                });
            };
          },
    X0 = b.unstable_scheduleCallback,
    Q0 = b.unstable_NormalPriority,
    Kt = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function jc() {
    return { controller: new K0(), data: new Map(), refCount: 0 };
  }
  function Wa(t) {
    t.refCount--,
      t.refCount === 0 &&
        X0(Q0, function () {
          t.controller.abort();
        });
  }
  var Ja = null,
    Hc = 0,
    fa = 0,
    sa = null;
  function w0(t, l) {
    if (Ja === null) {
      var e = (Ja = []);
      (Hc = 0),
        (fa = Yi()),
        (sa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Hc++, l.then(Ds, Ds), l;
  }
  function Ds() {
    if (--Hc === 0 && Ja !== null) {
      sa !== null && (sa.status = "fulfilled");
      var t = Ja;
      (Ja = null), (fa = 0), (sa = null);
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Z0(t, l) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = l);
          for (var u = 0; u < e.length; u++) (0, e[u])(l);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        }
      ),
      a
    );
  }
  var Rs = r.S;
  r.S = function (t, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      w0(t, l),
      Rs !== null && Rs(t, l);
  };
  var He = T(null);
  function Bc() {
    var t = He.current;
    return t !== null ? t : pt.pooledCache;
  }
  function ln(t, l) {
    l === null ? z(He, He.current) : z(He, l.pool);
  }
  function zs() {
    var t = Bc();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var $a = Error(y(460)),
    ps = Error(y(474)),
    en = Error(y(542)),
    Yc = { then: function () {} };
  function Us(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function an() {}
  function xs(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(an, an), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), qs(t), t);
      default:
        if (typeof l.status == "string") l.then(an, an);
        else {
          if (((t = pt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(y(482));
          (t = l),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), qs(t), t);
        }
        throw ((Fa = l), $a);
    }
  }
  var Fa = null;
  function Cs() {
    if (Fa === null) throw Error(y(459));
    var t = Fa;
    return (Fa = null), t;
  }
  function qs(t) {
    if (t === $a || t === en) throw Error(y(483));
  }
  var le = !1;
  function Gc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Kc(t, l) {
    (t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ee(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ae(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (At & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (a.pending = l),
        (l = Ju(t)),
        Es(t, null, e),
        l
      );
    }
    return Wu(t, a, l, e), Ju(t);
  }
  function Ia(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
    ) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), Df(t, e);
    }
  }
  function Xc(t, l) {
    var e = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = c) : (n = n.next = c), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = l) : (n = n.next = l);
      } else u = n = l;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = e);
      return;
    }
    (t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l);
  }
  var Qc = !1;
  function Pa() {
    if (Qc) {
      var t = sa;
      if (t !== null) throw t;
    }
  }
  function tu(t, l, e, a) {
    Qc = !1;
    var u = t.updateQueue;
    le = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var s = i,
        m = s.next;
      (s.next = null), c === null ? (n = m) : (c.next = m), (c = s);
      var A = t.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (i = A.lastBaseUpdate),
        i !== c &&
          (i === null ? (A.firstBaseUpdate = m) : (i.next = m),
          (A.lastBaseUpdate = s)));
    }
    if (n !== null) {
      var M = u.baseState;
      (c = 0), (A = m = s = null), (i = n);
      do {
        var S = i.lane & -536870913,
          g = S !== i.lane;
        if (g ? (ht & S) === S : (a & S) === S) {
          S !== 0 && S === fa && (Qc = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var P = t,
              $ = i;
            S = l;
            var Dt = e;
            switch ($.tag) {
              case 1:
                if (((P = $.payload), typeof P == "function")) {
                  M = P.call(Dt, M, S);
                  break t;
                }
                M = P;
                break t;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = $.payload),
                  (S = typeof P == "function" ? P.call(Dt, M, S) : P),
                  S == null)
                )
                  break t;
                M = B({}, M, S);
                break t;
              case 2:
                le = !0;
            }
          }
          (S = i.callback),
            S !== null &&
              ((t.flags |= 64),
              g && (t.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [S]) : g.push(S));
        } else
          (g = {
            lane: S,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            A === null ? ((m = A = g), (s = M)) : (A = A.next = g),
            (c |= S);
        if (((i = i.next), i === null)) {
          if (((i = u.shared.pending), i === null)) break;
          (g = i),
            (i = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null);
        }
      } while (!0);
      A === null && (s = M),
        (u.baseState = s),
        (u.firstBaseUpdate = m),
        (u.lastBaseUpdate = A),
        n === null && (u.shared.lanes = 0),
        (re |= c),
        (t.lanes = c),
        (t.memoizedState = M);
    }
  }
  function js(t, l) {
    if (typeof t != "function") throw Error(y(191, t));
    t.call(l);
  }
  function Hs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) js(e[t], l);
  }
  var oa = T(null),
    un = T(0);
  function Bs(t, l) {
    (t = Wl), z(un, t), z(oa, l), (Wl = t | l.baseLanes);
  }
  function wc() {
    z(un, Wl), z(oa, oa.current);
  }
  function Zc() {
    (Wl = un.current), O(oa), O(un);
  }
  var ue = 0,
    st = null,
    Mt = null,
    Yt = null,
    nn = !1,
    ra = !1,
    Be = !1,
    cn = 0,
    lu = 0,
    da = null,
    L0 = 0;
  function Ht() {
    throw Error(y(321));
  }
  function Lc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!fl(t[e], l[e])) return !1;
    return !0;
  }
  function Vc(t, l, e, a, u, n) {
    return (
      (ue = n),
      (st = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (r.H = t === null || t.memoizedState === null ? Ao : bo),
      (Be = !1),
      (n = e(a, u)),
      (Be = !1),
      ra && (n = Gs(l, e, a, u)),
      Ys(t),
      n
    );
  }
  function Ys(t) {
    r.H = yn;
    var l = Mt !== null && Mt.next !== null;
    if (((ue = 0), (Yt = Mt = st = null), (nn = !1), (lu = 0), (da = null), l))
      throw Error(y(300));
    t === null ||
      wt ||
      ((t = t.dependencies), t !== null && Pu(t) && (wt = !0));
  }
  function Gs(t, l, e, a) {
    st = t;
    var u = 0;
    do {
      if ((ra && (da = null), (lu = 0), (ra = !1), 25 <= u))
        throw Error(y(301));
      if (((u += 1), (Yt = Mt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (r.H = I0), (n = l(e, a));
    } while (ra);
    return n;
  }
  function V0() {
    var t = r.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? eu(l) : l),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (st.flags |= 1024),
      l
    );
  }
  function kc() {
    var t = cn !== 0;
    return (cn = 0), t;
  }
  function Wc(t, l, e) {
    (l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e);
  }
  function Jc(t) {
    if (nn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), (t = t.next);
      }
      nn = !1;
    }
    (ue = 0), (Yt = Mt = st = null), (ra = !1), (lu = cn = 0), (da = null);
  }
  function al() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Yt === null ? (st.memoizedState = Yt = t) : (Yt = Yt.next = t), Yt;
  }
  function Gt() {
    if (Mt === null) {
      var t = st.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var l = Yt === null ? st.memoizedState : Yt.next;
    if (l !== null) (Yt = l), (Mt = t);
    else {
      if (t === null)
        throw st.alternate === null ? Error(y(467)) : Error(y(310));
      (Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Yt === null ? (st.memoizedState = Yt = t) : (Yt = Yt.next = t);
    }
    return Yt;
  }
  function $c() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function eu(t) {
    var l = lu;
    return (
      (lu += 1),
      da === null && (da = []),
      (t = xs(da, t, l)),
      (l = st),
      (Yt === null ? l.memoizedState : Yt.next) === null &&
        ((l = l.alternate),
        (r.H = l === null || l.memoizedState === null ? Ao : bo)),
      t
    );
  }
  function fn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return eu(t);
      if (t.$$typeof === V) return It(t);
    }
    throw Error(y(438, String(t)));
  }
  function Fc(t) {
    var l = null,
      e = st.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var a = st.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (l = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = $c()), (st.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Vt;
    return l.index++, e;
  }
  function Ql(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function sn(t) {
    var l = Gt();
    return Ic(l, Mt, t);
  }
  function Ic(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (l.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      l = u.next;
      var i = (c = null),
        s = null,
        m = l,
        A = !1;
      do {
        var M = m.lane & -536870913;
        if (M !== m.lane ? (ht & M) === M : (ue & M) === M) {
          var S = m.revertLane;
          if (S === 0)
            s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              M === fa && (A = !0);
          else if ((ue & S) === S) {
            (m = m.next), S === fa && (A = !0);
            continue;
          } else
            (M = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              s === null ? ((i = s = M), (c = n)) : (s = s.next = M),
              (st.lanes |= S),
              (re |= S);
          (M = m.action),
            Be && e(n, M),
            (n = m.hasEagerState ? m.eagerState : e(n, M));
        } else
          (S = {
            lane: M,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            s === null ? ((i = s = S), (c = n)) : (s = s.next = S),
            (st.lanes |= M),
            (re |= M);
        m = m.next;
      } while (m !== null && m !== l);
      if (
        (s === null ? (c = n) : (s.next = i),
        !fl(n, t.memoizedState) && ((wt = !0), A && ((e = sa), e !== null)))
      )
        throw e;
      (t.memoizedState = n),
        (t.baseState = c),
        (t.baseQueue = s),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Pc(t) {
    var l = Gt(),
      e = l.queue;
    if (e === null) throw Error(y(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch,
      u = e.pending,
      n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = (u = u.next);
      do (n = t(n, c.action)), (c = c.next);
      while (c !== u);
      fl(n, l.memoizedState) || (wt = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function Ks(t, l, e) {
    var a = st,
      u = Gt(),
      n = gt;
    if (n) {
      if (e === void 0) throw Error(y(407));
      e = e();
    } else e = l();
    var c = !fl((Mt || u).memoizedState, e);
    c && ((u.memoizedState = e), (wt = !0)), (u = u.queue);
    var i = ws.bind(null, a, u, t);
    if (
      (au(2048, 8, i, [t]),
      u.getSnapshot !== l || c || (Yt !== null && Yt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, on(), Qs.bind(null, a, u, e, l), null),
        pt === null)
      )
        throw Error(y(349));
      n || (ue & 124) !== 0 || Xs(a, l, e);
    }
    return e;
  }
  function Xs(t, l, e) {
    (t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = st.updateQueue),
      l === null
        ? ((l = $c()), (st.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t));
  }
  function Qs(t, l, e, a) {
    (l.value = e), (l.getSnapshot = a), Zs(l) && Ls(t);
  }
  function ws(t, l, e) {
    return e(function () {
      Zs(l) && Ls(t);
    });
  }
  function Zs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !fl(t, e);
    } catch {
      return !0;
    }
  }
  function Ls(t) {
    var l = ua(t, 2);
    l !== null && hl(l, t, 2);
  }
  function ti(t) {
    var l = al();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), Be)) {
        Fl(!0);
        try {
          e();
        } finally {
          Fl(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ql,
        lastRenderedState: t,
      }),
      l
    );
  }
  function Vs(t, l, e, a) {
    return (t.baseState = e), Ic(t, Mt, typeof a == "function" ? a : Ql);
  }
  function k0(t, l, e, a, u) {
    if (dn(t)) throw Error(y(485));
    if (((t = l.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      r.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), ks(l, n))
          : ((n.next = e.next), (l.pending = e.next = n));
    }
  }
  function ks(t, l) {
    var e = l.action,
      a = l.payload,
      u = t.state;
    if (l.isTransition) {
      var n = r.T,
        c = {};
      r.T = c;
      try {
        var i = e(u, a),
          s = r.S;
        s !== null && s(c, i), Ws(t, l, i);
      } catch (m) {
        li(t, l, m);
      } finally {
        r.T = n;
      }
    } else
      try {
        (n = e(u, a)), Ws(t, l, n);
      } catch (m) {
        li(t, l, m);
      }
  }
  function Ws(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Js(t, l, a);
          },
          function (a) {
            return li(t, l, a);
          }
        )
      : Js(t, l, e);
  }
  function Js(t, l, e) {
    (l.status = "fulfilled"),
      (l.value = e),
      $s(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), ks(t, e)));
  }
  function li(t, l, e) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (l.status = "rejected"), (l.reason = e), $s(l), (l = l.next);
      while (l !== a);
    }
    t.action = null;
  }
  function $s(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Fs(t, l) {
    return l;
  }
  function Is(t, l) {
    if (gt) {
      var e = pt.formState;
      if (e !== null) {
        t: {
          var a = st;
          if (gt) {
            if (qt) {
              l: {
                for (var u = qt, n = Rl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = Ol(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (qt = Ol(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            Ce(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return (
      (e = al()),
      (e.memoizedState = e.baseState = l),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fs,
        lastRenderedState: l,
      }),
      (e.queue = a),
      (e = go.bind(null, st, a)),
      (a.dispatch = e),
      (a = ti(!1)),
      (n = ci.bind(null, st, !1, a.queue)),
      (a = al()),
      (u = { state: l, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (e = k0.bind(null, st, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = t),
      [l, e, !1]
    );
  }
  function Ps(t) {
    var l = Gt();
    return to(l, Mt, t);
  }
  function to(t, l, e) {
    if (
      ((l = Ic(t, l, Fs)[0]),
      (t = sn(Ql)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var a = eu(l);
      } catch (c) {
        throw c === $a ? en : c;
      }
    else a = l;
    l = Gt();
    var u = l.queue,
      n = u.dispatch;
    return (
      e !== l.memoizedState &&
        ((st.flags |= 2048), ya(9, on(), W0.bind(null, u, e), null)),
      [a, n, t]
    );
  }
  function W0(t, l) {
    t.action = l;
  }
  function lo(t) {
    var l = Gt(),
      e = Mt;
    if (e !== null) return to(l, e, t);
    Gt(), (l = l.memoizedState), (e = Gt());
    var a = e.queue.dispatch;
    return (e.memoizedState = t), [l, a, !1];
  }
  function ya(t, l, e, a) {
    return (
      (t = { tag: t, create: e, deps: a, inst: l, next: null }),
      (l = st.updateQueue),
      l === null && ((l = $c()), (st.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
      t
    );
  }
  function on() {
    return { destroy: void 0, resource: void 0 };
  }
  function eo() {
    return Gt().memoizedState;
  }
  function rn(t, l, e, a) {
    var u = al();
    (a = a === void 0 ? null : a),
      (st.flags |= t),
      (u.memoizedState = ya(1 | l, on(), e, a));
  }
  function au(t, l, e, a) {
    var u = Gt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    Mt !== null && a !== null && Lc(a, Mt.memoizedState.deps)
      ? (u.memoizedState = ya(l, n, e, a))
      : ((st.flags |= t), (u.memoizedState = ya(1 | l, n, e, a)));
  }
  function ao(t, l) {
    rn(8390656, 8, t, l);
  }
  function uo(t, l) {
    au(2048, 8, t, l);
  }
  function no(t, l) {
    return au(4, 2, t, l);
  }
  function co(t, l) {
    return au(4, 4, t, l);
  }
  function io(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function () {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function fo(t, l, e) {
    (e = e != null ? e.concat([t]) : null), au(4, 4, io.bind(null, l, t), e);
  }
  function ei() {}
  function so(t, l) {
    var e = Gt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Lc(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
  }
  function oo(t, l) {
    var e = Gt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Lc(l, a[1])) return a[0];
    if (((a = t()), Be)) {
      Fl(!0);
      try {
        t();
      } finally {
        Fl(!1);
      }
    }
    return (e.memoizedState = [a, l]), a;
  }
  function ai(t, l, e) {
    return e === void 0 || (ue & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = hr()), (st.lanes |= t), (re |= t), e);
  }
  function ro(t, l, e, a) {
    return fl(e, l)
      ? e
      : oa.current !== null
      ? ((t = ai(t, e, a)), fl(t, l) || (wt = !0), t)
      : (ue & 42) === 0
      ? ((wt = !0), (t.memoizedState = e))
      : ((t = hr()), (st.lanes |= t), (re |= t), l);
  }
  function yo(t, l, e, a, u) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var c = r.T,
      i = {};
    (r.T = i), ci(t, !1, l, e);
    try {
      var s = u(),
        m = r.S;
      if (
        (m !== null && m(i, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var A = Z0(s, a);
        uu(t, l, A, yl(t));
      } else uu(t, l, a, yl(t));
    } catch (M) {
      uu(t, l, { then: function () {}, status: "rejected", reason: M }, yl());
    } finally {
      (_.p = n), (r.T = c);
    }
  }
  function J0() {}
  function ui(t, l, e, a) {
    if (t.tag !== 5) throw Error(y(476));
    var u = ho(t).queue;
    yo(
      t,
      u,
      l,
      R,
      e === null
        ? J0
        : function () {
            return vo(t), e(a);
          }
    );
  }
  function ho(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ql,
        lastRenderedState: R,
      },
      next: null,
    };
    var e = {};
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ql,
          lastRenderedState: e,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function vo(t) {
    var l = ho(t).next.queue;
    uu(t, l, {}, yl());
  }
  function ni() {
    return It(bu);
  }
  function mo() {
    return Gt().memoizedState;
  }
  function So() {
    return Gt().memoizedState;
  }
  function $0(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = yl();
          t = ee(e);
          var a = ae(l, t, e);
          a !== null && (hl(a, l, e), Ia(a, l, e)),
            (l = { cache: jc() }),
            (t.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function F0(t, l, e) {
    var a = yl();
    (e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(t)
        ? To(l, e)
        : ((e = Mc(t, l, e, a)), e !== null && (hl(e, t, a), Eo(e, l, a)));
  }
  function go(t, l, e) {
    var a = yl();
    uu(t, l, e, a);
  }
  function uu(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(t)) To(l, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var c = l.lastRenderedState,
            i = n(c, e);
          if (((u.hasEagerState = !0), (u.eagerState = i), fl(i, c)))
            return Wu(t, l, u, 0), pt === null && ku(), !1;
        } catch {
        } finally {
        }
      if (((e = Mc(t, l, u, a)), e !== null))
        return hl(e, t, a), Eo(e, l, a), !0;
    }
    return !1;
  }
  function ci(t, l, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Yi(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(t))
    ) {
      if (l) throw Error(y(479));
    } else (l = Mc(t, e, a, 2)), l !== null && hl(l, t, 2);
  }
  function dn(t) {
    var l = t.alternate;
    return t === st || (l !== null && l === st);
  }
  function To(t, l) {
    ra = nn = !0;
    var e = t.pending;
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l);
  }
  function Eo(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), Df(t, e);
    }
  }
  var yn = {
      readContext: It,
      use: fn,
      useCallback: Ht,
      useContext: Ht,
      useEffect: Ht,
      useImperativeHandle: Ht,
      useLayoutEffect: Ht,
      useInsertionEffect: Ht,
      useMemo: Ht,
      useReducer: Ht,
      useRef: Ht,
      useState: Ht,
      useDebugValue: Ht,
      useDeferredValue: Ht,
      useTransition: Ht,
      useSyncExternalStore: Ht,
      useId: Ht,
      useHostTransitionStatus: Ht,
      useFormState: Ht,
      useActionState: Ht,
      useOptimistic: Ht,
      useMemoCache: Ht,
      useCacheRefresh: Ht,
    },
    Ao = {
      readContext: It,
      use: fn,
      useCallback: function (t, l) {
        return (al().memoizedState = [t, l === void 0 ? null : l]), t;
      },
      useContext: It,
      useEffect: ao,
      useImperativeHandle: function (t, l, e) {
        (e = e != null ? e.concat([t]) : null),
          rn(4194308, 4, io.bind(null, l, t), e);
      },
      useLayoutEffect: function (t, l) {
        return rn(4194308, 4, t, l);
      },
      useInsertionEffect: function (t, l) {
        rn(4, 2, t, l);
      },
      useMemo: function (t, l) {
        var e = al();
        l = l === void 0 ? null : l;
        var a = t();
        if (Be) {
          Fl(!0);
          try {
            t();
          } finally {
            Fl(!1);
          }
        }
        return (e.memoizedState = [a, l]), a;
      },
      useReducer: function (t, l, e) {
        var a = al();
        if (e !== void 0) {
          var u = e(l);
          if (Be) {
            Fl(!0);
            try {
              e(l);
            } finally {
              Fl(!1);
            }
          }
        } else u = l;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = F0.bind(null, st, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var l = al();
        return (t = { current: t }), (l.memoizedState = t);
      },
      useState: function (t) {
        t = ti(t);
        var l = t.queue,
          e = go.bind(null, st, l);
        return (l.dispatch = e), [t.memoizedState, e];
      },
      useDebugValue: ei,
      useDeferredValue: function (t, l) {
        var e = al();
        return ai(e, t, l);
      },
      useTransition: function () {
        var t = ti(!1);
        return (
          (t = yo.bind(null, st, t.queue, !0, !1)),
          (al().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, l, e) {
        var a = st,
          u = al();
        if (gt) {
          if (e === void 0) throw Error(y(407));
          e = e();
        } else {
          if (((e = l()), pt === null)) throw Error(y(349));
          (ht & 124) !== 0 || Xs(a, l, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: l };
        return (
          (u.queue = n),
          ao(ws.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          ya(9, on(), Qs.bind(null, a, n, e, l), null),
          e
        );
      },
      useId: function () {
        var t = al(),
          l = pt.identifierPrefix;
        if (gt) {
          var e = Gl,
            a = Yl;
          (e = (a & ~(1 << (32 - il(a) - 1))).toString(32) + e),
            (l = "«" + l + "R" + e),
            (e = cn++),
            0 < e && (l += "H" + e.toString(32)),
            (l += "»");
        } else (e = L0++), (l = "«" + l + "r" + e.toString(32) + "»");
        return (t.memoizedState = l);
      },
      useHostTransitionStatus: ni,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (t) {
        var l = al();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = e),
          (l = ci.bind(null, st, !0, e)),
          (e.dispatch = l),
          [t, l]
        );
      },
      useMemoCache: Fc,
      useCacheRefresh: function () {
        return (al().memoizedState = $0.bind(null, st));
      },
    },
    bo = {
      readContext: It,
      use: fn,
      useCallback: so,
      useContext: It,
      useEffect: uo,
      useImperativeHandle: fo,
      useInsertionEffect: no,
      useLayoutEffect: co,
      useMemo: oo,
      useReducer: sn,
      useRef: eo,
      useState: function () {
        return sn(Ql);
      },
      useDebugValue: ei,
      useDeferredValue: function (t, l) {
        var e = Gt();
        return ro(e, Mt.memoizedState, t, l);
      },
      useTransition: function () {
        var t = sn(Ql)[0],
          l = Gt().memoizedState;
        return [typeof t == "boolean" ? t : eu(t), l];
      },
      useSyncExternalStore: Ks,
      useId: mo,
      useHostTransitionStatus: ni,
      useFormState: Ps,
      useActionState: Ps,
      useOptimistic: function (t, l) {
        var e = Gt();
        return Vs(e, Mt, t, l);
      },
      useMemoCache: Fc,
      useCacheRefresh: So,
    },
    I0 = {
      readContext: It,
      use: fn,
      useCallback: so,
      useContext: It,
      useEffect: uo,
      useImperativeHandle: fo,
      useInsertionEffect: no,
      useLayoutEffect: co,
      useMemo: oo,
      useReducer: Pc,
      useRef: eo,
      useState: function () {
        return Pc(Ql);
      },
      useDebugValue: ei,
      useDeferredValue: function (t, l) {
        var e = Gt();
        return Mt === null ? ai(e, t, l) : ro(e, Mt.memoizedState, t, l);
      },
      useTransition: function () {
        var t = Pc(Ql)[0],
          l = Gt().memoizedState;
        return [typeof t == "boolean" ? t : eu(t), l];
      },
      useSyncExternalStore: Ks,
      useId: mo,
      useHostTransitionStatus: ni,
      useFormState: lo,
      useActionState: lo,
      useOptimistic: function (t, l) {
        var e = Gt();
        return Mt !== null
          ? Vs(e, Mt, t, l)
          : ((e.baseState = t), [t, e.queue.dispatch]);
      },
      useMemoCache: Fc,
      useCacheRefresh: So,
    },
    ha = null,
    nu = 0;
  function hn(t) {
    var l = nu;
    return (nu += 1), ha === null && (ha = []), xs(ha, t, l);
  }
  function cu(t, l) {
    (l = l.props.ref), (t.ref = l !== void 0 ? l : null);
  }
  function vn(t, l) {
    throw l.$$typeof === tt
      ? Error(y(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          y(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t
          )
        ));
  }
  function No(t) {
    var l = t._init;
    return l(t._payload);
  }
  function _o(t) {
    function l(d, o) {
      if (t) {
        var v = d.deletions;
        v === null ? ((d.deletions = [o]), (d.flags |= 16)) : v.push(o);
      }
    }
    function e(d, o) {
      if (!t) return null;
      for (; o !== null; ) l(d, o), (o = o.sibling);
      return null;
    }
    function a(d) {
      for (var o = new Map(); d !== null; )
        d.key !== null ? o.set(d.key, d) : o.set(d.index, d), (d = d.sibling);
      return o;
    }
    function u(d, o) {
      return (d = Bl(d, o)), (d.index = 0), (d.sibling = null), d;
    }
    function n(d, o, v) {
      return (
        (d.index = v),
        t
          ? ((v = d.alternate),
            v !== null
              ? ((v = v.index), v < o ? ((d.flags |= 67108866), o) : v)
              : ((d.flags |= 67108866), o))
          : ((d.flags |= 1048576), o)
      );
    }
    function c(d) {
      return t && d.alternate === null && (d.flags |= 67108866), d;
    }
    function i(d, o, v, N) {
      return o === null || o.tag !== 6
        ? ((o = Dc(v, d.mode, N)), (o.return = d), o)
        : ((o = u(o, v)), (o.return = d), o);
    }
    function s(d, o, v, N) {
      var G = v.type;
      return G === it
        ? A(d, o, v.props.children, N, v.key)
        : o !== null &&
          (o.elementType === G ||
            (typeof G == "object" &&
              G !== null &&
              G.$$typeof === _t &&
              No(G) === o.type))
        ? ((o = u(o, v.props)), cu(o, v), (o.return = d), o)
        : ((o = $u(v.type, v.key, v.props, null, d.mode, N)),
          cu(o, v),
          (o.return = d),
          o);
    }
    function m(d, o, v, N) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== v.containerInfo ||
        o.stateNode.implementation !== v.implementation
        ? ((o = Rc(v, d.mode, N)), (o.return = d), o)
        : ((o = u(o, v.children || [])), (o.return = d), o);
    }
    function A(d, o, v, N, G) {
      return o === null || o.tag !== 7
        ? ((o = ze(v, d.mode, N, G)), (o.return = d), o)
        : ((o = u(o, v)), (o.return = d), o);
    }
    function M(d, o, v) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = Dc("" + o, d.mode, v)), (o.return = d), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case W:
            return (
              (v = $u(o.type, o.key, o.props, null, d.mode, v)),
              cu(v, o),
              (v.return = d),
              v
            );
          case Et:
            return (o = Rc(o, d.mode, v)), (o.return = d), o;
          case _t:
            var N = o._init;
            return (o = N(o._payload)), M(d, o, v);
        }
        if (Q(o) || j(o))
          return (o = ze(o, d.mode, v, null)), (o.return = d), o;
        if (typeof o.then == "function") return M(d, hn(o), v);
        if (o.$$typeof === V) return M(d, tn(d, o), v);
        vn(d, o);
      }
      return null;
    }
    function S(d, o, v, N) {
      var G = o !== null ? o.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return G !== null ? null : i(d, o, "" + v, N);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case W:
            return v.key === G ? s(d, o, v, N) : null;
          case Et:
            return v.key === G ? m(d, o, v, N) : null;
          case _t:
            return (G = v._init), (v = G(v._payload)), S(d, o, v, N);
        }
        if (Q(v) || j(v)) return G !== null ? null : A(d, o, v, N, null);
        if (typeof v.then == "function") return S(d, o, hn(v), N);
        if (v.$$typeof === V) return S(d, o, tn(d, v), N);
        vn(d, v);
      }
      return null;
    }
    function g(d, o, v, N, G) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return (d = d.get(v) || null), i(o, d, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case W:
            return (
              (d = d.get(N.key === null ? v : N.key) || null), s(o, d, N, G)
            );
          case Et:
            return (
              (d = d.get(N.key === null ? v : N.key) || null), m(o, d, N, G)
            );
          case _t:
            var ot = N._init;
            return (N = ot(N._payload)), g(d, o, v, N, G);
        }
        if (Q(N) || j(N)) return (d = d.get(v) || null), A(o, d, N, G, null);
        if (typeof N.then == "function") return g(d, o, v, hn(N), G);
        if (N.$$typeof === V) return g(d, o, v, tn(o, N), G);
        vn(o, N);
      }
      return null;
    }
    function P(d, o, v, N) {
      for (
        var G = null, ot = null, L = o, F = (o = 0), Lt = null;
        L !== null && F < v.length;
        F++
      ) {
        L.index > F ? ((Lt = L), (L = null)) : (Lt = L.sibling);
        var vt = S(d, L, v[F], N);
        if (vt === null) {
          L === null && (L = Lt);
          break;
        }
        t && L && vt.alternate === null && l(d, L),
          (o = n(vt, o, F)),
          ot === null ? (G = vt) : (ot.sibling = vt),
          (ot = vt),
          (L = Lt);
      }
      if (F === v.length) return e(d, L), gt && Ue(d, F), G;
      if (L === null) {
        for (; F < v.length; F++)
          (L = M(d, v[F], N)),
            L !== null &&
              ((o = n(L, o, F)),
              ot === null ? (G = L) : (ot.sibling = L),
              (ot = L));
        return gt && Ue(d, F), G;
      }
      for (L = a(L); F < v.length; F++)
        (Lt = g(L, d, F, v[F], N)),
          Lt !== null &&
            (t &&
              Lt.alternate !== null &&
              L.delete(Lt.key === null ? F : Lt.key),
            (o = n(Lt, o, F)),
            ot === null ? (G = Lt) : (ot.sibling = Lt),
            (ot = Lt));
      return (
        t &&
          L.forEach(function (Ee) {
            return l(d, Ee);
          }),
        gt && Ue(d, F),
        G
      );
    }
    function $(d, o, v, N) {
      if (v == null) throw Error(y(151));
      for (
        var G = null, ot = null, L = o, F = (o = 0), Lt = null, vt = v.next();
        L !== null && !vt.done;
        F++, vt = v.next()
      ) {
        L.index > F ? ((Lt = L), (L = null)) : (Lt = L.sibling);
        var Ee = S(d, L, vt.value, N);
        if (Ee === null) {
          L === null && (L = Lt);
          break;
        }
        t && L && Ee.alternate === null && l(d, L),
          (o = n(Ee, o, F)),
          ot === null ? (G = Ee) : (ot.sibling = Ee),
          (ot = Ee),
          (L = Lt);
      }
      if (vt.done) return e(d, L), gt && Ue(d, F), G;
      if (L === null) {
        for (; !vt.done; F++, vt = v.next())
          (vt = M(d, vt.value, N)),
            vt !== null &&
              ((o = n(vt, o, F)),
              ot === null ? (G = vt) : (ot.sibling = vt),
              (ot = vt));
        return gt && Ue(d, F), G;
      }
      for (L = a(L); !vt.done; F++, vt = v.next())
        (vt = g(L, d, F, vt.value, N)),
          vt !== null &&
            (t &&
              vt.alternate !== null &&
              L.delete(vt.key === null ? F : vt.key),
            (o = n(vt, o, F)),
            ot === null ? (G = vt) : (ot.sibling = vt),
            (ot = vt));
      return (
        t &&
          L.forEach(function (Py) {
            return l(d, Py);
          }),
        gt && Ue(d, F),
        G
      );
    }
    function Dt(d, o, v, N) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === it &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case W:
            t: {
              for (var G = v.key; o !== null; ) {
                if (o.key === G) {
                  if (((G = v.type), G === it)) {
                    if (o.tag === 7) {
                      e(d, o.sibling),
                        (N = u(o, v.props.children)),
                        (N.return = d),
                        (d = N);
                      break t;
                    }
                  } else if (
                    o.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === _t &&
                      No(G) === o.type)
                  ) {
                    e(d, o.sibling),
                      (N = u(o, v.props)),
                      cu(N, v),
                      (N.return = d),
                      (d = N);
                    break t;
                  }
                  e(d, o);
                  break;
                } else l(d, o);
                o = o.sibling;
              }
              v.type === it
                ? ((N = ze(v.props.children, d.mode, N, v.key)),
                  (N.return = d),
                  (d = N))
                : ((N = $u(v.type, v.key, v.props, null, d.mode, N)),
                  cu(N, v),
                  (N.return = d),
                  (d = N));
            }
            return c(d);
          case Et:
            t: {
              for (G = v.key; o !== null; ) {
                if (o.key === G)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === v.containerInfo &&
                    o.stateNode.implementation === v.implementation
                  ) {
                    e(d, o.sibling),
                      (N = u(o, v.children || [])),
                      (N.return = d),
                      (d = N);
                    break t;
                  } else {
                    e(d, o);
                    break;
                  }
                else l(d, o);
                o = o.sibling;
              }
              (N = Rc(v, d.mode, N)), (N.return = d), (d = N);
            }
            return c(d);
          case _t:
            return (G = v._init), (v = G(v._payload)), Dt(d, o, v, N);
        }
        if (Q(v)) return P(d, o, v, N);
        if (j(v)) {
          if (((G = j(v)), typeof G != "function")) throw Error(y(150));
          return (v = G.call(v)), $(d, o, v, N);
        }
        if (typeof v.then == "function") return Dt(d, o, hn(v), N);
        if (v.$$typeof === V) return Dt(d, o, tn(d, v), N);
        vn(d, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          o !== null && o.tag === 6
            ? (e(d, o.sibling), (N = u(o, v)), (N.return = d), (d = N))
            : (e(d, o), (N = Dc(v, d.mode, N)), (N.return = d), (d = N)),
          c(d))
        : e(d, o);
    }
    return function (d, o, v, N) {
      try {
        nu = 0;
        var G = Dt(d, o, v, N);
        return (ha = null), G;
      } catch (L) {
        if (L === $a || L === en) throw L;
        var ot = sl(29, L, null, d.mode);
        return (ot.lanes = N), (ot.return = d), ot;
      } finally {
      }
    };
  }
  var va = _o(!0),
    Mo = _o(!1),
    Al = T(null),
    zl = null;
  function ne(t) {
    var l = t.alternate;
    z(Xt, Xt.current & 1),
      z(Al, t),
      zl === null &&
        (l === null || oa.current !== null || l.memoizedState !== null) &&
        (zl = t);
  }
  function Oo(t) {
    if (t.tag === 22) {
      if ((z(Xt, Xt.current), z(Al, t), zl === null)) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (zl = t);
      }
    } else ce();
  }
  function ce() {
    z(Xt, Xt.current), z(Al, Al.current);
  }
  function wl(t) {
    O(Al), zl === t && (zl = null), O(Xt);
  }
  var Xt = T(0);
  function mn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || $i(e))
        )
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
    return null;
  }
  function ii(t, l, e, a) {
    (l = t.memoizedState),
      (e = e(a, l)),
      (e = e == null ? l : B({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var fi = {
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var a = yl(),
        u = ee(a);
      (u.payload = l),
        e != null && (u.callback = e),
        (l = ae(t, u, a)),
        l !== null && (hl(l, t, a), Ia(l, t, a));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var a = yl(),
        u = ee(a);
      (u.tag = 1),
        (u.payload = l),
        e != null && (u.callback = e),
        (l = ae(t, u, a)),
        l !== null && (hl(l, t, a), Ia(l, t, a));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = yl(),
        a = ee(e);
      (a.tag = 2),
        l != null && (a.callback = l),
        (l = ae(t, a, e)),
        l !== null && (hl(l, t, e), Ia(l, t, e));
    },
  };
  function Do(t, l, e, a, u, n, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, c)
        : l.prototype && l.prototype.isPureReactComponent
        ? !Qa(e, a) || !Qa(u, n)
        : !0
    );
  }
  function Ro(t, l, e, a) {
    (t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, a),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, a),
      l.state !== t && fi.enqueueReplaceState(l, l.state, null);
  }
  function Ye(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l) a !== "ref" && (e[a] = l[a]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = B({}, e));
      for (var u in t) e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  var Sn =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function zo(t) {
    Sn(t);
  }
  function po(t) {
    console.error(t);
  }
  function Uo(t) {
    Sn(t);
  }
  function gn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function xo(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function si(t, l, e) {
    return (
      (e = ee(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        gn(t, l);
      }),
      e
    );
  }
  function Co(t) {
    return (t = ee(t)), (t.tag = 3), t;
  }
  function qo(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          xo(l, e, a);
        });
    }
    var c = e.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        xo(l, e, a),
          typeof u != "function" &&
            (de === null ? (de = new Set([this])) : de.add(this));
        var i = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function P0(t, l, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && ka(l, e, u, !0),
        (e = Al.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              zl === null ? Ci() : e.alternate === null && jt === 0 && (jt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Yc
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                  ji(t, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Yc
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue),
                      e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                  ji(t, a, u)),
              !1
            );
        }
        throw Error(y(435, e.tag));
      }
      return ji(t, a, u), Ci(), !1;
    }
    if (gt)
      return (
        (l = Al.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            a !== Uc && ((t = Error(y(422), { cause: a })), Va(Sl(t, e))))
          : (a !== Uc && ((l = Error(y(423), { cause: a })), Va(Sl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = Sl(a, e)),
            (u = si(t.stateNode, a, u)),
            Xc(t, u),
            jt !== 4 && (jt = 2)),
        !1
      );
    var n = Error(y(520), { cause: a });
    if (
      ((n = Sl(n, e)),
      yu === null ? (yu = [n]) : yu.push(n),
      jt !== 4 && (jt = 2),
      l === null)
    )
      return !0;
    (a = Sl(a, e)), (e = l);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = u & -u),
            (e.lanes |= t),
            (t = si(e.stateNode, a, t)),
            Xc(e, t),
            !1
          );
        case 1:
          if (
            ((l = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (de === null || !de.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Co(u)),
              qo(u, t, e, a),
              Xc(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var jo = Error(y(461)),
    wt = !1;
  function kt(t, l, e, a) {
    l.child = t === null ? Mo(l, null, e, a) : va(l, t.child, e, a);
  }
  function Ho(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var c = {};
      for (var i in a) i !== "ref" && (c[i] = a[i]);
    } else c = a;
    return (
      je(l),
      (a = Vc(t, l, e, c, n, u)),
      (i = kc()),
      t !== null && !wt
        ? (Wc(t, l, u), Zl(t, l, u))
        : (gt && i && zc(l), (l.flags |= 1), kt(t, l, a, u), l.child)
    );
  }
  function Bo(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !Oc(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), Yo(t, l, n, a, u))
        : ((t = $u(e.type, null, a, l, l.mode, u)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !Si(t, u))) {
      var c = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Qa), e(c, a) && t.ref === l.ref)
      )
        return Zl(t, l, u);
    }
    return (
      (l.flags |= 1),
      (t = Bl(n, a)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function Yo(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Qa(n, a) && t.ref === l.ref)
        if (((wt = !1), (l.pendingProps = a = n), Si(t, u)))
          (t.flags & 131072) !== 0 && (wt = !0);
        else return (l.lanes = t.lanes), Zl(t, l, u);
    }
    return oi(t, l, e, a, u);
  }
  function Go(t, l, e) {
    var a = l.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | e : e), t !== null)) {
          for (u = l.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          l.childLanes = n & ~a;
        } else (l.childLanes = 0), (l.child = null);
        return Ko(t, l, a, e);
      }
      if ((e & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ln(l, n !== null ? n.cachePool : null),
          n !== null ? Bs(l, n) : wc(),
          Oo(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          Ko(t, l, n !== null ? n.baseLanes | e : e, e)
        );
    } else
      n !== null
        ? (ln(l, n.cachePool), Bs(l, n), ce(), (l.memoizedState = null))
        : (t !== null && ln(l, null), wc(), ce());
    return kt(t, l, u, e), l.child;
  }
  function Ko(t, l, e, a) {
    var u = Bc();
    return (
      (u = u === null ? null : { parent: Kt._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: e, cachePool: u }),
      t !== null && ln(l, null),
      wc(),
      Oo(l),
      t !== null && ka(t, l, a, !0),
      null
    );
  }
  function Tn(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(y(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function oi(t, l, e, a, u) {
    return (
      je(l),
      (e = Vc(t, l, e, a, void 0, u)),
      (a = kc()),
      t !== null && !wt
        ? (Wc(t, l, u), Zl(t, l, u))
        : (gt && a && zc(l), (l.flags |= 1), kt(t, l, e, u), l.child)
    );
  }
  function Xo(t, l, e, a, u, n) {
    return (
      je(l),
      (l.updateQueue = null),
      (e = Gs(l, a, e, u)),
      Ys(t),
      (a = kc()),
      t !== null && !wt
        ? (Wc(t, l, n), Zl(t, l, n))
        : (gt && a && zc(l), (l.flags |= 1), kt(t, l, e, n), l.child)
    );
  }
  function Qo(t, l, e, a, u) {
    if ((je(l), l.stateNode === null)) {
      var n = na,
        c = e.contextType;
      typeof c == "object" && c !== null && (n = It(c)),
        (n = new e(a, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = fi),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = a),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Gc(l),
        (c = e.contextType),
        (n.context = typeof c == "object" && c !== null ? It(c) : na),
        (n.state = l.memoizedState),
        (c = e.getDerivedStateFromProps),
        typeof c == "function" && (ii(l, e, c, a), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && fi.enqueueReplaceState(n, n.state, null),
          tu(l, a, n, u),
          Pa(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = l.stateNode;
      var i = l.memoizedProps,
        s = Ye(e, i);
      n.props = s;
      var m = n.context,
        A = e.contextType;
      (c = na), typeof A == "object" && A !== null && (c = It(A));
      var M = e.getDerivedStateFromProps;
      (A =
        typeof M == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = l.pendingProps !== i),
        A ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || m !== c) && Ro(l, n, a, c)),
        (le = !1);
      var S = l.memoizedState;
      (n.state = S),
        tu(l, a, n, u),
        Pa(),
        (m = l.memoizedState),
        i || S !== m || le
          ? (typeof M == "function" && (ii(l, e, M, a), (m = l.memoizedState)),
            (s = le || Do(l, e, s, a, S, m, c))
              ? (A ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = a),
                (l.memoizedState = m)),
            (n.props = a),
            (n.state = m),
            (n.context = c),
            (a = s))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (a = !1));
    } else {
      (n = l.stateNode),
        Kc(t, l),
        (c = l.memoizedProps),
        (A = Ye(e, c)),
        (n.props = A),
        (M = l.pendingProps),
        (S = n.context),
        (m = e.contextType),
        (s = na),
        typeof m == "object" && m !== null && (s = It(m)),
        (i = e.getDerivedStateFromProps),
        (m =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== M || S !== s) && Ro(l, n, a, s)),
        (le = !1),
        (S = l.memoizedState),
        (n.state = S),
        tu(l, a, n, u),
        Pa();
      var g = l.memoizedState;
      c !== M ||
      S !== g ||
      le ||
      (t !== null && t.dependencies !== null && Pu(t.dependencies))
        ? (typeof i == "function" && (ii(l, e, i, a), (g = l.memoizedState)),
          (A =
            le ||
            Do(l, e, A, a, S, g, s) ||
            (t !== null && t.dependencies !== null && Pu(t.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, g, s),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, g, s)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = a),
              (l.memoizedState = g)),
          (n.props = a),
          (n.state = g),
          (n.context = s),
          (a = A))
        : (typeof n.componentDidUpdate != "function" ||
            (c === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      Tn(t, l),
      (a = (l.flags & 128) !== 0),
      n || a
        ? ((n = l.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && a
            ? ((l.child = va(l, t.child, null, u)),
              (l.child = va(l, null, e, u)))
            : kt(t, l, e, u),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Zl(t, l, u)),
      t
    );
  }
  function wo(t, l, e, a) {
    return La(), (l.flags |= 256), kt(t, l, e, a), l.child;
  }
  var ri = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function di(t) {
    return { baseLanes: t, cachePool: zs() };
  }
  function yi(t, l, e) {
    return (t = t !== null ? t.childLanes & ~e : 0), l && (t |= bl), t;
  }
  function Zo(t, l, e) {
    var a = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
      c && ((u = !0), (l.flags &= -129)),
      (c = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (gt) {
        if ((u ? ne(l) : ce(), gt)) {
          var i = qt,
            s;
          if ((s = i)) {
            t: {
              for (s = i, i = Rl; s.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break t;
                }
                if (((s = Ol(s.nextSibling)), s === null)) {
                  i = null;
                  break t;
                }
              }
              i = s;
            }
            i !== null
              ? ((l.memoizedState = {
                  dehydrated: i,
                  treeContext: pe !== null ? { id: Yl, overflow: Gl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (s = sl(18, null, null, 0)),
                (s.stateNode = i),
                (s.return = l),
                (l.child = s),
                (tl = l),
                (qt = null),
                (s = !0))
              : (s = !1);
          }
          s || Ce(l);
        }
        if (
          ((i = l.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return $i(i) ? (l.lanes = 32) : (l.lanes = 536870912), null;
        wl(l);
      }
      return (
        (i = a.children),
        (a = a.fallback),
        u
          ? (ce(),
            (u = l.mode),
            (i = En({ mode: "hidden", children: i }, u)),
            (a = ze(a, u, e, null)),
            (i.return = l),
            (a.return = l),
            (i.sibling = a),
            (l.child = i),
            (u = l.child),
            (u.memoizedState = di(e)),
            (u.childLanes = yi(t, c, e)),
            (l.memoizedState = ri),
            a)
          : (ne(l), hi(l, i))
      );
    }
    if (
      ((s = t.memoizedState), s !== null && ((i = s.dehydrated), i !== null))
    ) {
      if (n)
        l.flags & 256
          ? (ne(l), (l.flags &= -257), (l = vi(t, l, e)))
          : l.memoizedState !== null
          ? (ce(), (l.child = t.child), (l.flags |= 128), (l = null))
          : (ce(),
            (u = a.fallback),
            (i = l.mode),
            (a = En({ mode: "visible", children: a.children }, i)),
            (u = ze(u, i, e, null)),
            (u.flags |= 2),
            (a.return = l),
            (u.return = l),
            (a.sibling = u),
            (l.child = a),
            va(l, t.child, null, e),
            (a = l.child),
            (a.memoizedState = di(e)),
            (a.childLanes = yi(t, c, e)),
            (l.memoizedState = ri),
            (l = u));
      else if ((ne(l), $i(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var m = c.dgst;
        (c = m),
          (a = Error(y(419))),
          (a.stack = ""),
          (a.digest = c),
          Va({ value: a, source: null, stack: null }),
          (l = vi(t, l, e));
      } else if (
        (wt || ka(t, l, e, !1), (c = (e & t.childLanes) !== 0), wt || c)
      ) {
        if (
          ((c = pt),
          c !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : Fn(a)),
            (a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), ua(t, a), hl(c, t, a), jo);
        i.data === "$?" || Ci(), (l = vi(t, l, e));
      } else
        i.data === "$?"
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = s.treeContext),
            (qt = Ol(i.nextSibling)),
            (tl = l),
            (gt = !0),
            (xe = null),
            (Rl = !1),
            t !== null &&
              ((Tl[El++] = Yl),
              (Tl[El++] = Gl),
              (Tl[El++] = pe),
              (Yl = t.id),
              (Gl = t.overflow),
              (pe = l)),
            (l = hi(l, a.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (ce(),
        (u = a.fallback),
        (i = l.mode),
        (s = t.child),
        (m = s.sibling),
        (a = Bl(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        m !== null ? (u = Bl(m, u)) : ((u = ze(u, i, e, null)), (u.flags |= 2)),
        (u.return = l),
        (a.return = l),
        (a.sibling = u),
        (l.child = a),
        (a = u),
        (u = l.child),
        (i = t.child.memoizedState),
        i === null
          ? (i = di(e))
          : ((s = i.cachePool),
            s !== null
              ? ((m = Kt._currentValue),
                (s = s.parent !== m ? { parent: m, pool: m } : s))
              : (s = zs()),
            (i = { baseLanes: i.baseLanes | e, cachePool: s })),
        (u.memoizedState = i),
        (u.childLanes = yi(t, c, e)),
        (l.memoizedState = ri),
        a)
      : (ne(l),
        (e = t.child),
        (t = e.sibling),
        (e = Bl(e, { mode: "visible", children: a.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((c = l.deletions),
          c === null ? ((l.deletions = [t]), (l.flags |= 16)) : c.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function hi(t, l) {
    return (
      (l = En({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function En(t, l) {
    return (
      (t = sl(22, t, null, l)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function vi(t, l, e) {
    return (
      va(l, t.child, null, e),
      (t = hi(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function Lo(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Cc(t.return, l, e);
  }
  function mi(t, l, e, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
        })
      : ((n.isBackwards = l),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = e),
        (n.tailMode = u));
  }
  function Vo(t, l, e) {
    var a = l.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((kt(t, l, a.children, e), (a = Xt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (l.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Lo(t, e, l);
          else if (t.tag === 19) Lo(t, e, l);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((z(Xt, a), u)) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          (t = e.alternate),
            t !== null && mn(t) === null && (u = e),
            (e = e.sibling);
        (e = u),
          e === null
            ? ((u = l.child), (l.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          mi(l, !1, u, e, n);
        break;
      case "backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && mn(t) === null)) {
            l.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = e), (e = u), (u = t);
        }
        mi(l, !0, e, null, n);
        break;
      case "together":
        mi(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Zl(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (re |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((ka(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(y(153));
    if (l.child !== null) {
      for (
        t = l.child, e = Bl(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;

      )
        (t = t.sibling),
          (e = e.sibling = Bl(t, t.pendingProps)),
          (e.return = l);
      e.sibling = null;
    }
    return l.child;
  }
  function Si(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Pu(t)));
  }
  function ty(t, l, e) {
    switch (l.tag) {
      case 3:
        et(l, l.stateNode.containerInfo),
          te(l, Kt, t.memoizedState.cache),
          La();
        break;
      case 27:
      case 5:
        Tt(l);
        break;
      case 4:
        et(l, l.stateNode.containerInfo);
        break;
      case 10:
        te(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ne(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
            ? Zo(t, l, e)
            : (ne(l), (t = Zl(t, l, e)), t !== null ? t.sibling : null);
        ne(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (e & l.childLanes) !== 0),
          a || (ka(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
          u)
        ) {
          if (a) return Vo(t, l, e);
          l.flags |= 128;
        }
        if (
          ((u = l.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          z(Xt, Xt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), Go(t, l, e);
      case 24:
        te(l, Kt, t.memoizedState.cache);
    }
    return Zl(t, l, e);
  }
  function ko(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) wt = !0;
      else {
        if (!Si(t, e) && (l.flags & 128) === 0) return (wt = !1), ty(t, l, e);
        wt = (t.flags & 131072) !== 0;
      }
    else (wt = !1), gt && (l.flags & 1048576) !== 0 && bs(l, Iu, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType,
            u = a._init;
          if (((a = u(a._payload)), (l.type = a), typeof a == "function"))
            Oc(a)
              ? ((t = Ye(a, t)), (l.tag = 1), (l = Qo(null, l, a, t, e)))
              : ((l.tag = 0), (l = oi(null, l, a, t, e)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === lt)) {
                (l.tag = 11), (l = Ho(null, l, a, t, e));
                break t;
              } else if (u === ft) {
                (l.tag = 14), (l = Bo(null, l, a, t, e));
                break t;
              }
            }
            throw ((l = k(a) || a), Error(y(306, l, "")));
          }
        }
        return l;
      case 0:
        return oi(t, l, l.type, l.pendingProps, e);
      case 1:
        return (a = l.type), (u = Ye(a, l.pendingProps)), Qo(t, l, a, u, e);
      case 3:
        t: {
          if ((et(l, l.stateNode.containerInfo), t === null))
            throw Error(y(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          (u = n.element), Kc(t, l), tu(l, a, null, e);
          var c = l.memoizedState;
          if (
            ((a = c.cache),
            te(l, Kt, a),
            a !== n.cache && qc(l, [Kt], e, !0),
            Pa(),
            (a = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: c.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = wo(t, l, a, e);
              break t;
            } else if (a !== u) {
              (u = Sl(Error(y(424)), l)), Va(u), (l = wo(t, l, a, e));
              break t;
            } else {
              switch (((t = l.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                qt = Ol(t.firstChild),
                  tl = l,
                  gt = !0,
                  xe = null,
                  Rl = !0,
                  e = Mo(l, null, a, e),
                  l.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((La(), a === u)) {
              l = Zl(t, l, e);
              break t;
            }
            kt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          Tn(t, l),
          t === null
            ? (e = Fr(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : gt ||
                ((e = l.type),
                (t = l.pendingProps),
                (a = qn(Y.current).createElement(e)),
                (a[Ft] = l),
                (a[ll] = t),
                Jt(a, e, t),
                Qt(a),
                (l.stateNode = a))
            : (l.memoizedState = Fr(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Tt(l),
          t === null &&
            gt &&
            ((a = l.stateNode = Wr(l.type, l.pendingProps, Y.current)),
            (tl = l),
            (Rl = !0),
            (u = qt),
            ve(l.type) ? ((Fi = u), (qt = Ol(a.firstChild))) : (qt = u)),
          kt(t, l, l.pendingProps.children, e),
          Tn(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          t === null &&
            gt &&
            ((u = a = qt) &&
              ((a = Ry(a, l.type, l.pendingProps, Rl)),
              a !== null
                ? ((l.stateNode = a),
                  (tl = l),
                  (qt = Ol(a.firstChild)),
                  (Rl = !1),
                  (u = !0))
                : (u = !1)),
            u || Ce(l)),
          Tt(l),
          (u = l.type),
          (n = l.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = n.children),
          ki(u, n) ? (a = null) : c !== null && ki(u, c) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Vc(t, l, V0, null, null, e)), (bu._currentValue = u)),
          Tn(t, l),
          kt(t, l, a, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            gt &&
            ((t = e = qt) &&
              ((e = zy(e, l.pendingProps, Rl)),
              e !== null
                ? ((l.stateNode = e), (tl = l), (qt = null), (t = !0))
                : (t = !1)),
            t || Ce(l)),
          null
        );
      case 13:
        return Zo(t, l, e);
      case 4:
        return (
          et(l, l.stateNode.containerInfo),
          (a = l.pendingProps),
          t === null ? (l.child = va(l, null, a, e)) : kt(t, l, a, e),
          l.child
        );
      case 11:
        return Ho(t, l, l.type, l.pendingProps, e);
      case 7:
        return kt(t, l, l.pendingProps, e), l.child;
      case 8:
        return kt(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return kt(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return (
          (a = l.pendingProps),
          te(l, l.type, a.value),
          kt(t, l, a.children, e),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (a = l.pendingProps.children),
          je(l),
          (u = It(u)),
          (a = a(u)),
          (l.flags |= 1),
          kt(t, l, a, e),
          l.child
        );
      case 14:
        return Bo(t, l, l.type, l.pendingProps, e);
      case 15:
        return Yo(t, l, l.type, l.pendingProps, e);
      case 19:
        return Vo(t, l, e);
      case 31:
        return (
          (a = l.pendingProps),
          (e = l.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((e = En(a, e)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e))
            : ((e = Bl(t.child, a)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e)),
          l
        );
      case 22:
        return Go(t, l, e);
      case 24:
        return (
          je(l),
          (a = It(Kt)),
          t === null
            ? ((u = Bc()),
              u === null &&
                ((u = pt),
                (n = jc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (l.memoizedState = { parent: a, cache: u }),
              Gc(l),
              te(l, Kt, u))
            : ((t.lanes & e) !== 0 && (Kc(t, l), tu(l, null, null, e), Pa()),
              (u = t.memoizedState),
              (n = l.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  te(l, Kt, a))
                : ((a = n.cache),
                  te(l, Kt, a),
                  a !== u.cache && qc(l, [Kt], e, !0))),
          kt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(y(156, l.tag));
  }
  function Ll(t) {
    t.flags |= 4;
  }
  function Wo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ed(l))) {
      if (
        ((l = Al.current),
        l !== null &&
          ((ht & 4194048) === ht
            ? zl !== null
            : ((ht & 62914560) !== ht && (ht & 536870912) === 0) || l !== zl))
      )
        throw ((Fa = Yc), ps);
      t.flags |= 8192;
    }
  }
  function An(t, l) {
    l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? Mf() : 536870912), (t.lanes |= l), (Ta |= l));
  }
  function iu(t, l) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), (l = l.sibling);
          e === null ? (t.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ct(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = e), l;
  }
  function ly(t, l, e) {
    var a = l.pendingProps;
    switch ((pc(l), l.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ct(l), null;
      case 1:
        return Ct(l), null;
      case 3:
        return (
          (e = l.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          Xl(Kt),
          nt(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (Za(l)
              ? Ll(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), Ms())),
          Ct(l),
          null
        );
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? (Ll(l),
              e !== null ? (Ct(l), Wo(l, e)) : (Ct(l), (l.flags &= -16777217)))
            : e
            ? e !== t.memoizedState
              ? (Ll(l), Ct(l), Wo(l, e))
              : (Ct(l), (l.flags &= -16777217))
            : (t.memoizedProps !== a && Ll(l), Ct(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        Dl(l), (e = Y.current);
        var u = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== a && Ll(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(y(166));
            return Ct(l), null;
          }
          (t = Z.current),
            Za(l) ? Ns(l) : ((t = Wr(u, a, e)), (l.stateNode = t), Ll(l));
        }
        return Ct(l), null;
      case 5:
        if ((Dl(l), (e = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== a && Ll(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(y(166));
            return Ct(l), null;
          }
          if (((t = Z.current), Za(l))) Ns(l);
          else {
            switch (((u = qn(Y.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(e, { is: a.is })
                        : u.createElement(e);
                }
            }
            (t[Ft] = l), (t[ll] = a);
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === l) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            l.stateNode = t;
            t: switch ((Jt(t, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ll(l);
          }
        }
        return Ct(l), (l.flags &= -16777217), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && Ll(l);
        else {
          if (typeof a != "string" && l.stateNode === null) throw Error(y(166));
          if (((t = Y.current), Za(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (a = null),
              (u = tl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[Ft] = l),
              (t = !!(
                t.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Xr(t.nodeValue, e)
              )),
              t || Ce(l);
          } else (t = qn(t).createTextNode(a)), (t[Ft] = l), (l.stateNode = t);
        }
        return Ct(l), null;
      case 13:
        if (
          ((a = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Za(l)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(y(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(y(317));
              u[Ft] = l;
            } else
              La(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            Ct(l), (u = !1);
          } else
            (u = Ms()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return l.flags & 256 ? (wl(l), l) : (wl(l), null);
        }
        if ((wl(l), (l.flags & 128) !== 0)) return (l.lanes = e), l;
        if (
          ((e = a !== null), (t = t !== null && t.memoizedState !== null), e)
        ) {
          (a = l.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          e !== t && e && (l.child.flags |= 8192),
          An(l, l.updateQueue),
          Ct(l),
          null
        );
      case 4:
        return nt(), t === null && Qi(l.stateNode.containerInfo), Ct(l), null;
      case 10:
        return Xl(l.type), Ct(l), null;
      case 19:
        if ((O(Xt), (u = l.memoizedState), u === null)) return Ct(l), null;
        if (((a = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) iu(u, !1);
          else {
            if (jt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = mn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      iu(u, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      An(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    As(e, t), (e = e.sibling);
                  return z(Xt, (Xt.current & 1) | 2), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              $t() > _n &&
              ((l.flags |= 128), (a = !0), iu(u, !1), (l.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = mn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                An(l, t),
                iu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !gt)
              )
                return Ct(l), null;
            } else
              2 * $t() - u.renderingStartTime > _n &&
                e !== 536870912 &&
                ((l.flags |= 128), (a = !0), iu(u, !1), (l.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (l.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = $t()),
            (l.sibling = null),
            (t = Xt.current),
            z(Xt, a ? (t & 1) | 2 : t & 1),
            l)
          : (Ct(l), null);
      case 22:
      case 23:
        return (
          wl(l),
          Zc(),
          (a = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
            : a && (l.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (Ct(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : Ct(l),
          (e = l.updateQueue),
          e !== null && An(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (a = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          a !== e && (l.flags |= 2048),
          t !== null && O(He),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Xl(Kt),
          Ct(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, l.tag));
  }
  function ey(t, l) {
    switch ((pc(l), l.tag)) {
      case 1:
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          Xl(Kt),
          nt(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Dl(l), null;
      case 13:
        if (
          (wl(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(y(340));
          La();
        }
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return O(Xt), null;
      case 4:
        return nt(), null;
      case 10:
        return Xl(l.type), null;
      case 22:
      case 23:
        return (
          wl(l),
          Zc(),
          t !== null && O(He),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return Xl(Kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jo(t, l) {
    switch ((pc(l), l.tag)) {
      case 3:
        Xl(Kt), nt();
        break;
      case 26:
      case 27:
      case 5:
        Dl(l);
        break;
      case 4:
        nt();
        break;
      case 13:
        wl(l);
        break;
      case 19:
        O(Xt);
        break;
      case 10:
        Xl(l.type);
        break;
      case 22:
      case 23:
        wl(l), Zc(), t !== null && O(He);
        break;
      case 24:
        Xl(Kt);
    }
  }
  function fu(t, l) {
    try {
      var e = l.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create,
              c = e.inst;
            (a = n()), (c.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (i) {
      zt(l, l.return, i);
    }
  }
  function ie(t, l, e) {
    try {
      var a = l.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              i = c.destroy;
            if (i !== void 0) {
              (c.destroy = void 0), (u = l);
              var s = e,
                m = i;
              try {
                m();
              } catch (A) {
                zt(u, s, A);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (A) {
      zt(l, l.return, A);
    }
  }
  function $o(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Hs(l, e);
      } catch (a) {
        zt(t, t.return, a);
      }
    }
  }
  function Fo(t, l, e) {
    (e.props = Ye(t.type, t.memoizedProps)), (e.state = t.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      zt(t, l, a);
    }
  }
  function su(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      zt(t, l, u);
    }
  }
  function pl(t, l) {
    var e = t.ref,
      a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          zt(t, l, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          zt(t, l, u);
        }
      else e.current = null;
  }
  function Io(t) {
    var l = t.type,
      e = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      zt(t, t.return, u);
    }
  }
  function gi(t, l, e) {
    try {
      var a = t.stateNode;
      Ny(a, t.type, e, l), (a[ll] = l);
    } catch (u) {
      zt(t, t.return, u);
    }
  }
  function Po(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ve(t.type)) ||
      t.tag === 4
    );
  }
  function Ti(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Po(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ve(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ei(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        l
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(t, l)
          : ((l =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            l.appendChild(t),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = Cn));
    else if (
      a !== 4 &&
      (a === 27 && ve(t.type) && ((e = t.stateNode), (l = null)),
      (t = t.child),
      t !== null)
    )
      for (Ei(t, l, e), t = t.sibling; t !== null; )
        Ei(t, l, e), (t = t.sibling);
  }
  function bn(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && ve(t.type) && (e = t.stateNode), (t = t.child), t !== null)
    )
      for (bn(t, l, e), t = t.sibling; t !== null; )
        bn(t, l, e), (t = t.sibling);
  }
  function tr(t) {
    var l = t.stateNode,
      e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      Jt(l, a, e), (l[Ft] = t), (l[ll] = e);
    } catch (n) {
      zt(t, t.return, n);
    }
  }
  var Vl = !1,
    Bt = !1,
    Ai = !1,
    lr = typeof WeakSet == "function" ? WeakSet : Set,
    Zt = null;
  function ay(t, l) {
    if (((t = t.containerInfo), (Li = Kn), (t = rs(t)), Tc(t))) {
      if ("selectionStart" in t)
        var e = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var c = 0,
              i = -1,
              s = -1,
              m = 0,
              A = 0,
              M = t,
              S = null;
            l: for (;;) {
              for (
                var g;
                M !== e || (u !== 0 && M.nodeType !== 3) || (i = c + u),
                  M !== n || (a !== 0 && M.nodeType !== 3) || (s = c + a),
                  M.nodeType === 3 && (c += M.nodeValue.length),
                  (g = M.firstChild) !== null;

              )
                (S = M), (M = g);
              for (;;) {
                if (M === t) break l;
                if (
                  (S === e && ++m === u && (i = c),
                  S === n && ++A === a && (s = c),
                  (g = M.nextSibling) !== null)
                )
                  break;
                (M = S), (S = M.parentNode);
              }
              M = g;
            }
            e = i === -1 || s === -1 ? null : { start: i, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Vi = { focusedElem: t, selectionRange: e }, Kn = !1, Zt = l;
      Zt !== null;

    )
      if (
        ((l = Zt), (t = l.child), (l.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = l), (Zt = t);
      else
        for (; Zt !== null; ) {
          switch (((l = Zt), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (e = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode);
                try {
                  var P = Ye(e.type, u, e.elementType === e.type);
                  (t = a.getSnapshotBeforeUpdate(P, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch ($) {
                  zt(e, e.return, $);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  Ji(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ji(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(y(163));
          }
          if (((t = l.sibling), t !== null)) {
            (t.return = l.return), (Zt = t);
            break;
          }
          Zt = l.return;
        }
  }
  function er(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        fe(t, e), a & 4 && fu(5, e);
        break;
      case 1:
        if ((fe(t, e), a & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (c) {
              zt(e, e.return, c);
            }
          else {
            var u = Ye(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              zt(e, e.return, c);
            }
          }
        a & 64 && $o(e), a & 512 && su(e, e.return);
        break;
      case 3:
        if ((fe(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Hs(t, l);
          } catch (c) {
            zt(e, e.return, c);
          }
        }
        break;
      case 27:
        l === null && a & 4 && tr(e);
      case 26:
      case 5:
        fe(t, e), l === null && a & 4 && Io(e), a & 512 && su(e, e.return);
        break;
      case 12:
        fe(t, e);
        break;
      case 13:
        fe(t, e),
          a & 4 && nr(t, e),
          a & 64 &&
            ((t = e.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((e = dy.bind(null, e)), py(t, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Vl), !a)) {
          (l = (l !== null && l.memoizedState !== null) || Bt), (u = Vl);
          var n = Bt;
          (Vl = a),
            (Bt = l) && !n ? se(t, e, (e.subtreeFlags & 8772) !== 0) : fe(t, e),
            (Vl = u),
            (Bt = n);
        }
        break;
      case 30:
        break;
      default:
        fe(t, e);
    }
  }
  function ar(t) {
    var l = t.alternate;
    l !== null && ((t.alternate = null), ar(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && tc(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var xt = null,
    ul = !1;
  function kl(t, l, e) {
    for (e = e.child; e !== null; ) ur(t, l, e), (e = e.sibling);
  }
  function ur(t, l, e) {
    if (cl && typeof cl.onCommitFiberUnmount == "function")
      try {
        cl.onCommitFiberUnmount(pa, e);
      } catch {}
    switch (e.tag) {
      case 26:
        Bt || pl(e, l),
          kl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        Bt || pl(e, l);
        var a = xt,
          u = ul;
        ve(e.type) && ((xt = e.stateNode), (ul = !1)),
          kl(t, l, e),
          gu(e.stateNode),
          (xt = a),
          (ul = u);
        break;
      case 5:
        Bt || pl(e, l);
      case 6:
        if (
          ((a = xt),
          (u = ul),
          (xt = null),
          kl(t, l, e),
          (xt = a),
          (ul = u),
          xt !== null)
        )
          if (ul)
            try {
              (xt.nodeType === 9
                ? xt.body
                : xt.nodeName === "HTML"
                ? xt.ownerDocument.body
                : xt
              ).removeChild(e.stateNode);
            } catch (n) {
              zt(e, l, n);
            }
          else
            try {
              xt.removeChild(e.stateNode);
            } catch (n) {
              zt(e, l, n);
            }
        break;
      case 18:
        xt !== null &&
          (ul
            ? ((t = xt),
              Vr(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                e.stateNode
              ),
              Ou(t))
            : Vr(xt, e.stateNode));
        break;
      case 4:
        (a = xt),
          (u = ul),
          (xt = e.stateNode.containerInfo),
          (ul = !0),
          kl(t, l, e),
          (xt = a),
          (ul = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bt || ie(2, e, l), Bt || ie(4, e, l), kl(t, l, e);
        break;
      case 1:
        Bt ||
          (pl(e, l),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Fo(e, l, a)),
          kl(t, l, e);
        break;
      case 21:
        kl(t, l, e);
        break;
      case 22:
        (Bt = (a = Bt) || e.memoizedState !== null), kl(t, l, e), (Bt = a);
        break;
      default:
        kl(t, l, e);
    }
  }
  function nr(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ou(t);
      } catch (e) {
        zt(l, l.return, e);
      }
  }
  function uy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new lr()), l;
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new lr()),
          l
        );
      default:
        throw Error(y(435, t.tag));
    }
  }
  function bi(t, l) {
    var e = uy(t);
    l.forEach(function (a) {
      var u = yy.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function ol(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = t,
          c = l,
          i = c;
        t: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (ve(i.type)) {
                (xt = i.stateNode), (ul = !1);
                break t;
              }
              break;
            case 5:
              (xt = i.stateNode), (ul = !1);
              break t;
            case 3:
            case 4:
              (xt = i.stateNode.containerInfo), (ul = !0);
              break t;
          }
          i = i.return;
        }
        if (xt === null) throw Error(y(160));
        ur(n, c, u),
          (xt = null),
          (ul = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) cr(l, t), (l = l.sibling);
  }
  var Ml = null;
  function cr(t, l) {
    var e = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ol(l, t),
          rl(t),
          a & 4 && (ie(3, t, t.return), fu(3, t), ie(5, t, t.return));
        break;
      case 1:
        ol(l, t),
          rl(t),
          a & 512 && (Bt || e === null || pl(e, e.return)),
          a & 64 &&
            Vl &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = Ml;
        if (
          (ol(l, t),
          rl(t),
          a & 512 && (Bt || e === null || pl(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = t.memoizedState), e === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (e = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  l: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ca] ||
                          n[Ft] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Jt(n, a, e),
                        (n[Ft] = t),
                        Qt(n),
                        (a = n);
                      break t;
                    case "link":
                      var c = td("link", "href", u).get(a + (e.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        Jt(n, a, e),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = td("meta", "content", u).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            c.splice(i, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        Jt(n, a, e),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(y(468, a));
                  }
                  (n[Ft] = t), Qt(n), (a = n);
                }
                t.stateNode = a;
              } else ld(u, t.type, t.stateNode);
            else t.stateNode = Pr(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? ld(u, t.type, t.stateNode)
                  : Pr(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                gi(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        ol(l, t),
          rl(t),
          a & 512 && (Bt || e === null || pl(e, e.return)),
          e !== null && a & 4 && gi(t, t.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (ol(l, t),
          rl(t),
          a & 512 && (Bt || e === null || pl(e, e.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Fe(u, "");
          } catch (g) {
            zt(t, t.return, g);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), gi(t, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (Ai = !0);
        break;
      case 6:
        if ((ol(l, t), rl(t), a & 4)) {
          if (t.stateNode === null) throw Error(y(162));
          (a = t.memoizedProps), (e = t.stateNode);
          try {
            e.nodeValue = a;
          } catch (g) {
            zt(t, t.return, g);
          }
        }
        break;
      case 3:
        if (
          ((Bn = null),
          (u = Ml),
          (Ml = jn(l.containerInfo)),
          ol(l, t),
          (Ml = u),
          rl(t),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Ou(l.containerInfo);
          } catch (g) {
            zt(t, t.return, g);
          }
        Ai && ((Ai = !1), ir(t));
        break;
      case 4:
        (a = Ml),
          (Ml = jn(t.stateNode.containerInfo)),
          ol(l, t),
          rl(t),
          (Ml = a);
        break;
      case 12:
        ol(l, t), rl(t);
        break;
      case 13:
        ol(l, t),
          rl(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (Ri = $t()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), bi(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null,
          m = Vl,
          A = Bt;
        if (
          ((Vl = m || u),
          (Bt = A || s),
          ol(l, t),
          (Bt = A),
          (Vl = m),
          rl(t),
          a & 8192)
        )
          t: for (
            l = t.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (e === null || s || Vl || Bt || Ge(t)),
              e = null,
              l = t;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                s = e = l;
                try {
                  if (((n = s.stateNode), u))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    i = s.stateNode;
                    var M = s.memoizedProps.style,
                      S =
                        M != null && M.hasOwnProperty("display")
                          ? M.display
                          : null;
                    i.style.display =
                      S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (g) {
                  zt(s, s.return, g);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (g) {
                  zt(s, s.return, g);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), (l = l.return);
            }
            e === l && (e = null),
              (l.sibling.return = l.return),
              (l = l.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), bi(t, e))));
        break;
      case 19:
        ol(l, t),
          rl(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), bi(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ol(l, t), rl(t);
    }
  }
  function rl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (Po(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(y(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = Ti(t);
            bn(t, n, u);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (Fe(c, ""), (e.flags &= -33));
            var i = Ti(t);
            bn(t, i, c);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo,
              m = Ti(t);
            Ei(t, m, s);
            break;
          default:
            throw Error(y(161));
        }
      } catch (A) {
        zt(t, t.return, A);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function ir(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        ir(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function fe(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) er(t, l.alternate, l), (l = l.sibling);
  }
  function Ge(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ie(4, l, l.return), Ge(l);
          break;
        case 1:
          pl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && Fo(l, l.return, e),
            Ge(l);
          break;
        case 27:
          gu(l.stateNode);
        case 26:
        case 5:
          pl(l, l.return), Ge(l);
          break;
        case 22:
          l.memoizedState === null && Ge(l);
          break;
        case 30:
          Ge(l);
          break;
        default:
          Ge(l);
      }
      t = t.sibling;
    }
  }
  function se(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate,
        u = t,
        n = l,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          se(u, n, e), fu(4, n);
          break;
        case 1:
          if (
            (se(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (m) {
              zt(a, a.return, m);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var i = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  js(s[u], i);
            } catch (m) {
              zt(a, a.return, m);
            }
          }
          e && c & 64 && $o(n), su(n, n.return);
          break;
        case 27:
          tr(n);
        case 26:
        case 5:
          se(u, n, e), e && a === null && c & 4 && Io(n), su(n, n.return);
          break;
        case 12:
          se(u, n, e);
          break;
        case 13:
          se(u, n, e), e && c & 4 && nr(u, n);
          break;
        case 22:
          n.memoizedState === null && se(u, n, e), su(n, n.return);
          break;
        case 30:
          break;
        default:
          se(u, n, e);
      }
      l = l.sibling;
    }
  }
  function Ni(t, l) {
    var e = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && Wa(e));
  }
  function _i(t, l) {
    (t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Wa(t));
  }
  function Ul(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) fr(t, l, e, a), (l = l.sibling);
  }
  function fr(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ul(t, l, e, a), u & 2048 && fu(9, l);
        break;
      case 1:
        Ul(t, l, e, a);
        break;
      case 3:
        Ul(t, l, e, a),
          u & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Wa(t)));
        break;
      case 12:
        if (u & 2048) {
          Ul(t, l, e, a), (t = l.stateNode);
          try {
            var n = l.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (s) {
            zt(l, l.return, s);
          }
        } else Ul(t, l, e, a);
        break;
      case 13:
        Ul(t, l, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          (c = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? Ul(t, l, e, a)
              : ou(t, l)
            : n._visibility & 2
            ? Ul(t, l, e, a)
            : ((n._visibility |= 2),
              ma(t, l, e, a, (l.subtreeFlags & 10256) !== 0)),
          u & 2048 && Ni(c, l);
        break;
      case 24:
        Ul(t, l, e, a), u & 2048 && _i(l.alternate, l);
        break;
      default:
        Ul(t, l, e, a);
    }
  }
  function ma(t, l, e, a, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        c = l,
        i = e,
        s = a,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ma(n, c, i, s, u), fu(8, c);
          break;
        case 23:
          break;
        case 22:
          var A = c.stateNode;
          c.memoizedState !== null
            ? A._visibility & 2
              ? ma(n, c, i, s, u)
              : ou(n, c)
            : ((A._visibility |= 2), ma(n, c, i, s, u)),
            u && m & 2048 && Ni(c.alternate, c);
          break;
        case 24:
          ma(n, c, i, s, u), u && m & 2048 && _i(c.alternate, c);
          break;
        default:
          ma(n, c, i, s, u);
      }
      l = l.sibling;
    }
  }
  function ou(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          a = l,
          u = a.flags;
        switch (a.tag) {
          case 22:
            ou(e, a), u & 2048 && Ni(a.alternate, a);
            break;
          case 24:
            ou(e, a), u & 2048 && _i(a.alternate, a);
            break;
          default:
            ou(e, a);
        }
        l = l.sibling;
      }
  }
  var ru = 8192;
  function Sa(t) {
    if (t.subtreeFlags & ru)
      for (t = t.child; t !== null; ) sr(t), (t = t.sibling);
  }
  function sr(t) {
    switch (t.tag) {
      case 26:
        Sa(t),
          t.flags & ru &&
            t.memoizedState !== null &&
            wy(Ml, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Sa(t);
        break;
      case 3:
      case 4:
        var l = Ml;
        (Ml = jn(t.stateNode.containerInfo)), Sa(t), (Ml = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ru), (ru = 16777216), Sa(t), (ru = l))
            : Sa(t));
        break;
      default:
        Sa(t);
    }
  }
  function or(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do (l = t.sibling), (t.sibling = null), (t = l);
      while (t !== null);
    }
  }
  function du(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (Zt = a), dr(a, t);
        }
      or(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) rr(t), (t = t.sibling);
  }
  function rr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        du(t), t.flags & 2048 && ie(9, t, t.return);
        break;
      case 3:
        du(t);
        break;
      case 12:
        du(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), Nn(t))
          : du(t);
        break;
      default:
        du(t);
    }
  }
  function Nn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (Zt = a), dr(a, t);
        }
      or(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          ie(8, l, l.return), Nn(l);
          break;
        case 22:
          (e = l.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), Nn(l));
          break;
        default:
          Nn(l);
      }
      t = t.sibling;
    }
  }
  function dr(t, l) {
    for (; Zt !== null; ) {
      var e = Zt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ie(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Wa(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Zt = a);
      else
        t: for (e = t; Zt !== null; ) {
          a = Zt;
          var u = a.sibling,
            n = a.return;
          if ((ar(a), a === e)) {
            Zt = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (Zt = u);
            break t;
          }
          Zt = n;
        }
    }
  }
  var ny = {
      getCacheForType: function (t) {
        var l = It(Kt),
          e = l.data.get(t);
        return e === void 0 && ((e = t()), l.data.set(t, e)), e;
      },
    },
    cy = typeof WeakMap == "function" ? WeakMap : Map,
    At = 0,
    pt = null,
    dt = null,
    ht = 0,
    bt = 0,
    dl = null,
    oe = !1,
    ga = !1,
    Mi = !1,
    Wl = 0,
    jt = 0,
    re = 0,
    Ke = 0,
    Oi = 0,
    bl = 0,
    Ta = 0,
    yu = null,
    nl = null,
    Di = !1,
    Ri = 0,
    _n = 1 / 0,
    Mn = null,
    de = null,
    Wt = 0,
    ye = null,
    Ea = null,
    Aa = 0,
    zi = 0,
    pi = null,
    yr = null,
    hu = 0,
    Ui = null;
  function yl() {
    if ((At & 2) !== 0 && ht !== 0) return ht & -ht;
    if (r.T !== null) {
      var t = fa;
      return t !== 0 ? t : Yi();
    }
    return Rf();
  }
  function hr() {
    bl === 0 && (bl = (ht & 536870912) === 0 || gt ? _f() : 536870912);
    var t = Al.current;
    return t !== null && (t.flags |= 32), bl;
  }
  function hl(t, l, e) {
    ((t === pt && (bt === 2 || bt === 9)) || t.cancelPendingCommit !== null) &&
      (ba(t, 0), he(t, ht, bl, !1)),
      xa(t, e),
      ((At & 2) === 0 || t !== pt) &&
        (t === pt &&
          ((At & 2) === 0 && (Ke |= e), jt === 4 && he(t, ht, bl, !1)),
        xl(t));
  }
  function vr(t, l, e) {
    if ((At & 6) !== 0) throw Error(y(327));
    var a = (!e && (l & 124) === 0 && (l & t.expiredLanes) === 0) || Ua(t, l),
      u = a ? sy(t, l) : qi(t, l, !0),
      n = a;
    do {
      if (u === 0) {
        ga && !a && he(t, l, 0, !1);
        break;
      } else {
        if (((e = t.current.alternate), n && !iy(e))) {
          (u = qi(t, l, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            l = c;
            t: {
              var i = t;
              u = yu;
              var s = i.current.memoizedState.isDehydrated;
              if ((s && (ba(i, c).flags |= 256), (c = qi(i, c, !1)), c !== 2)) {
                if (Mi && !s) {
                  (i.errorRecoveryDisabledLanes |= n), (Ke |= n), (u = 4);
                  break t;
                }
                (n = nl),
                  (nl = u),
                  n !== null && (nl === null ? (nl = n) : nl.push.apply(nl, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          ba(t, 0), he(t, l, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              he(a, l, bl, !oe);
              break t;
            case 2:
              nl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((l & 62914560) === l && ((u = Ri + 300 - $t()), 10 < u)) {
            if ((he(a, l, bl, !oe), ju(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = Zr(
              mr.bind(null, a, e, nl, Mn, Di, l, bl, Ke, Ta, oe, n, 2, -0, 0),
              u
            );
            break t;
          }
          mr(a, e, nl, Mn, Di, l, bl, Ke, Ta, oe, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    xl(t);
  }
  function mr(t, l, e, a, u, n, c, i, s, m, A, M, S, g) {
    if (
      ((t.timeoutHandle = -1),
      (M = l.subtreeFlags),
      (M & 8192 || (M & 16785408) === 16785408) &&
        ((Au = { stylesheets: null, count: 0, unsuspend: Qy }),
        sr(l),
        (M = Zy()),
        M !== null))
    ) {
      (t.cancelPendingCommit = M(
        Nr.bind(null, t, l, n, e, a, u, c, i, s, A, 1, S, g)
      )),
        he(t, n, c, !m);
      return;
    }
    Nr(t, l, n, e, a, u, c, i, s);
  }
  function iy(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!fl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
        (e.return = l), (l = e);
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    return !0;
  }
  function he(t, l, e, a) {
    (l &= ~Oi),
      (l &= ~Ke),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      a && (t.warmLanes |= l),
      (a = t.expirationTimes);
    for (var u = l; 0 < u; ) {
      var n = 31 - il(u),
        c = 1 << n;
      (a[n] = -1), (u &= ~c);
    }
    e !== 0 && Of(t, e, l);
  }
  function On() {
    return (At & 6) === 0 ? (vu(0), !1) : !0;
  }
  function xi() {
    if (dt !== null) {
      if (bt === 0) var t = dt.return;
      else (t = dt), (Kl = qe = null), Jc(t), (ha = null), (nu = 0), (t = dt);
      for (; t !== null; ) Jo(t.alternate, t), (t = t.return);
      dt = null;
    }
  }
  function ba(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && ((t.timeoutHandle = -1), My(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      xi(),
      (pt = t),
      (dt = e = Bl(t.current, null)),
      (ht = l),
      (bt = 0),
      (dl = null),
      (oe = !1),
      (ga = Ua(t, l)),
      (Mi = !1),
      (Ta = bl = Oi = Ke = re = jt = 0),
      (nl = yu = null),
      (Di = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - il(a),
          n = 1 << u;
        (l |= t[u]), (a &= ~n);
      }
    return (Wl = l), ku(), e;
  }
  function Sr(t, l) {
    (st = null),
      (r.H = yn),
      l === $a || l === en
        ? ((l = Cs()), (bt = 3))
        : l === ps
        ? ((l = Cs()), (bt = 4))
        : (bt =
            l === jo
              ? 8
              : l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ? 6
              : 1),
      (dl = l),
      dt === null && ((jt = 1), gn(t, Sl(l, t.current)));
  }
  function gr() {
    var t = r.H;
    return (r.H = yn), t === null ? yn : t;
  }
  function Tr() {
    var t = r.A;
    return (r.A = ny), t;
  }
  function Ci() {
    (jt = 4),
      oe || ((ht & 4194048) !== ht && Al.current !== null) || (ga = !0),
      ((re & 134217727) === 0 && (Ke & 134217727) === 0) ||
        pt === null ||
        he(pt, ht, bl, !1);
  }
  function qi(t, l, e) {
    var a = At;
    At |= 2;
    var u = gr(),
      n = Tr();
    (pt !== t || ht !== l) && ((Mn = null), ba(t, l)), (l = !1);
    var c = jt;
    t: do
      try {
        if (bt !== 0 && dt !== null) {
          var i = dt,
            s = dl;
          switch (bt) {
            case 8:
              xi(), (c = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Al.current === null && (l = !0);
              var m = bt;
              if (((bt = 0), (dl = null), Na(t, i, s, m), e && ga)) {
                c = 0;
                break t;
              }
              break;
            default:
              (m = bt), (bt = 0), (dl = null), Na(t, i, s, m);
          }
        }
        fy(), (c = jt);
        break;
      } catch (A) {
        Sr(t, A);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (Kl = qe = null),
      (At = a),
      (r.H = u),
      (r.A = n),
      dt === null && ((pt = null), (ht = 0), ku()),
      c
    );
  }
  function fy() {
    for (; dt !== null; ) Er(dt);
  }
  function sy(t, l) {
    var e = At;
    At |= 2;
    var a = gr(),
      u = Tr();
    pt !== t || ht !== l
      ? ((Mn = null), (_n = $t() + 500), ba(t, l))
      : (ga = Ua(t, l));
    t: do
      try {
        if (bt !== 0 && dt !== null) {
          l = dt;
          var n = dl;
          l: switch (bt) {
            case 1:
              (bt = 0), (dl = null), Na(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Us(n)) {
                (bt = 0), (dl = null), Ar(l);
                break;
              }
              (l = function () {
                (bt !== 2 && bt !== 9) || pt !== t || (bt = 7), xl(t);
              }),
                n.then(l, l);
              break t;
            case 3:
              bt = 7;
              break t;
            case 4:
              bt = 5;
              break t;
            case 7:
              Us(n)
                ? ((bt = 0), (dl = null), Ar(l))
                : ((bt = 0), (dl = null), Na(t, l, n, 7));
              break;
            case 5:
              var c = null;
              switch (dt.tag) {
                case 26:
                  c = dt.memoizedState;
                case 5:
                case 27:
                  var i = dt;
                  if (!c || ed(c)) {
                    (bt = 0), (dl = null);
                    var s = i.sibling;
                    if (s !== null) dt = s;
                    else {
                      var m = i.return;
                      m !== null ? ((dt = m), Dn(m)) : (dt = null);
                    }
                    break l;
                  }
              }
              (bt = 0), (dl = null), Na(t, l, n, 5);
              break;
            case 6:
              (bt = 0), (dl = null), Na(t, l, n, 6);
              break;
            case 8:
              xi(), (jt = 6);
              break t;
            default:
              throw Error(y(462));
          }
        }
        oy();
        break;
      } catch (A) {
        Sr(t, A);
      }
    while (!0);
    return (
      (Kl = qe = null),
      (r.H = a),
      (r.A = u),
      (At = e),
      dt !== null ? 0 : ((pt = null), (ht = 0), ku(), jt)
    );
  }
  function oy() {
    for (; dt !== null && !be(); ) Er(dt);
  }
  function Er(t) {
    var l = ko(t.alternate, t, Wl);
    (t.memoizedProps = t.pendingProps), l === null ? Dn(t) : (dt = l);
  }
  function Ar(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Xo(e, l, l.pendingProps, l.type, void 0, ht);
        break;
      case 11:
        l = Xo(e, l, l.pendingProps, l.type.render, l.ref, ht);
        break;
      case 5:
        Jc(l);
      default:
        Jo(e, l), (l = dt = As(l, Wl)), (l = ko(e, l, Wl));
    }
    (t.memoizedProps = t.pendingProps), l === null ? Dn(t) : (dt = l);
  }
  function Na(t, l, e, a) {
    (Kl = qe = null), Jc(l), (ha = null), (nu = 0);
    var u = l.return;
    try {
      if (P0(t, u, l, e, ht)) {
        (jt = 1), gn(t, Sl(e, t.current)), (dt = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((dt = u), n);
      (jt = 1), gn(t, Sl(e, t.current)), (dt = null);
      return;
    }
    l.flags & 32768
      ? (gt || a === 1
          ? (t = !0)
          : ga || (ht & 536870912) !== 0
          ? (t = !1)
          : ((oe = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Al.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        br(l, t))
      : Dn(l);
  }
  function Dn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        br(l, oe);
        return;
      }
      t = l.return;
      var e = ly(l.alternate, l, Wl);
      if (e !== null) {
        dt = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        dt = l;
        return;
      }
      dt = l = t;
    } while (l !== null);
    jt === 0 && (jt = 5);
  }
  function br(t, l) {
    do {
      var e = ey(t.alternate, t);
      if (e !== null) {
        (e.flags &= 32767), (dt = e);
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        dt = t;
        return;
      }
      dt = t = e;
    } while (t !== null);
    (jt = 6), (dt = null);
  }
  function Nr(t, l, e, a, u, n, c, i, s) {
    t.cancelPendingCommit = null;
    do Rn();
    while (Wt !== 0);
    if ((At & 6) !== 0) throw Error(y(327));
    if (l !== null) {
      if (l === t.current) throw Error(y(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= _c),
        Qd(t, e, n, c, i, s),
        t === pt && ((dt = pt = null), (ht = 0)),
        (Ea = l),
        (ye = t),
        (Aa = e),
        (zi = n),
        (pi = u),
        (yr = a),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            hy(xu, function () {
              return Rr(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = r.T), (r.T = null), (u = _.p), (_.p = 2), (c = At), (At |= 4);
        try {
          ay(t, l, e);
        } finally {
          (At = c), (_.p = u), (r.T = a);
        }
      }
      (Wt = 1), _r(), Mr(), Or();
    }
  }
  function _r() {
    if (Wt === 1) {
      Wt = 0;
      var t = ye,
        l = Ea,
        e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        (e = r.T), (r.T = null);
        var a = _.p;
        _.p = 2;
        var u = At;
        At |= 4;
        try {
          cr(l, t);
          var n = Vi,
            c = rs(t.containerInfo),
            i = n.focusedElem,
            s = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            os(i.ownerDocument.documentElement, i)
          ) {
            if (s !== null && Tc(i)) {
              var m = s.start,
                A = s.end;
              if ((A === void 0 && (A = m), "selectionStart" in i))
                (i.selectionStart = m),
                  (i.selectionEnd = Math.min(A, i.value.length));
              else {
                var M = i.ownerDocument || document,
                  S = (M && M.defaultView) || window;
                if (S.getSelection) {
                  var g = S.getSelection(),
                    P = i.textContent.length,
                    $ = Math.min(s.start, P),
                    Dt = s.end === void 0 ? $ : Math.min(s.end, P);
                  !g.extend && $ > Dt && ((c = Dt), (Dt = $), ($ = c));
                  var d = ss(i, $),
                    o = ss(i, Dt);
                  if (
                    d &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== d.node ||
                      g.anchorOffset !== d.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var v = M.createRange();
                    v.setStart(d.node, d.offset),
                      g.removeAllRanges(),
                      $ > Dt
                        ? (g.addRange(v), g.extend(o.node, o.offset))
                        : (v.setEnd(o.node, o.offset), g.addRange(v));
                  }
                }
              }
            }
            for (M = [], g = i; (g = g.parentNode); )
              g.nodeType === 1 &&
                M.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < M.length;
              i++
            ) {
              var N = M[i];
              (N.element.scrollLeft = N.left), (N.element.scrollTop = N.top);
            }
          }
          (Kn = !!Li), (Vi = Li = null);
        } finally {
          (At = u), (_.p = a), (r.T = e);
        }
      }
      (t.current = l), (Wt = 2);
    }
  }
  function Mr() {
    if (Wt === 2) {
      Wt = 0;
      var t = ye,
        l = Ea,
        e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        (e = r.T), (r.T = null);
        var a = _.p;
        _.p = 2;
        var u = At;
        At |= 4;
        try {
          er(t, l.alternate, l);
        } finally {
          (At = u), (_.p = a), (r.T = e);
        }
      }
      Wt = 3;
    }
  }
  function Or() {
    if (Wt === 4 || Wt === 3) {
      (Wt = 0), Ne();
      var t = ye,
        l = Ea,
        e = Aa,
        a = yr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Wt = 5)
        : ((Wt = 0), (Ea = ye = null), Dr(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (de = null),
        In(e),
        (l = l.stateNode),
        cl && typeof cl.onCommitFiberRoot == "function")
      )
        try {
          cl.onCommitFiberRoot(pa, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (l = r.T), (u = _.p), (_.p = 2), (r.T = null);
        try {
          for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
            var i = a[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (r.T = l), (_.p = u);
        }
      }
      (Aa & 3) !== 0 && Rn(),
        xl(t),
        (u = t.pendingLanes),
        (e & 4194090) !== 0 && (u & 42) !== 0
          ? t === Ui
            ? hu++
            : ((hu = 0), (Ui = t))
          : (hu = 0),
        vu(0);
    }
  }
  function Dr(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Wa(l)));
  }
  function Rn(t) {
    return _r(), Mr(), Or(), Rr();
  }
  function Rr() {
    if (Wt !== 5) return !1;
    var t = ye,
      l = zi;
    zi = 0;
    var e = In(Aa),
      a = r.T,
      u = _.p;
    try {
      (_.p = 32 > e ? 32 : e), (r.T = null), (e = pi), (pi = null);
      var n = ye,
        c = Aa;
      if (((Wt = 0), (Ea = ye = null), (Aa = 0), (At & 6) !== 0))
        throw Error(y(331));
      var i = At;
      if (
        ((At |= 4),
        rr(n.current),
        fr(n, n.current, c, e),
        (At = i),
        vu(0, !1),
        cl && typeof cl.onPostCommitFiberRoot == "function")
      )
        try {
          cl.onPostCommitFiberRoot(pa, n);
        } catch {}
      return !0;
    } finally {
      (_.p = u), (r.T = a), Dr(t, l);
    }
  }
  function zr(t, l, e) {
    (l = Sl(e, l)),
      (l = si(t.stateNode, l, 2)),
      (t = ae(t, l, 2)),
      t !== null && (xa(t, 2), xl(t));
  }
  function zt(t, l, e) {
    if (t.tag === 3) zr(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          zr(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (de === null || !de.has(a)))
          ) {
            (t = Sl(e, t)),
              (e = Co(2)),
              (a = ae(l, e, 2)),
              a !== null && (qo(e, a, l, t), xa(a, 2), xl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function ji(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new cy();
      var u = new Set();
      a.set(l, u);
    } else (u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u));
    u.has(e) ||
      ((Mi = !0), u.add(e), (t = ry.bind(null, t, l, e)), l.then(t, t));
  }
  function ry(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      pt === t &&
        (ht & e) === e &&
        (jt === 4 || (jt === 3 && (ht & 62914560) === ht && 300 > $t() - Ri)
          ? (At & 2) === 0 && ba(t, 0)
          : (Oi |= e),
        Ta === ht && (Ta = 0)),
      xl(t);
  }
  function pr(t, l) {
    l === 0 && (l = Mf()), (t = ua(t, l)), t !== null && (xa(t, l), xl(t));
  }
  function dy(t) {
    var l = t.memoizedState,
      e = 0;
    l !== null && (e = l.retryLane), pr(t, e);
  }
  function yy(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    a !== null && a.delete(l), pr(t, e);
  }
  function hy(t, l) {
    return Ae(t, l);
  }
  var zn = null,
    _a = null,
    Hi = !1,
    pn = !1,
    Bi = !1,
    Xe = 0;
  function xl(t) {
    t !== _a &&
      t.next === null &&
      (_a === null ? (zn = _a = t) : (_a = _a.next = t)),
      (pn = !0),
      Hi || ((Hi = !0), my());
  }
  function vu(t, l) {
    if (!Bi && pn) {
      Bi = !0;
      do
        for (var e = !1, a = zn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes,
                i = a.pingedLanes;
              (n = (1 << (31 - il(42 | t) + 1)) - 1),
                (n &= u & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), qr(a, n));
          } else
            (n = ht),
              (n = ju(
                a,
                a === pt ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ua(a, n) || ((e = !0), qr(a, n));
          a = a.next;
        }
      while (e);
      Bi = !1;
    }
  }
  function vy() {
    Ur();
  }
  function Ur() {
    pn = Hi = !1;
    var t = 0;
    Xe !== 0 && (_y() && (t = Xe), (Xe = 0));
    for (var l = $t(), e = null, a = zn; a !== null; ) {
      var u = a.next,
        n = xr(a, l);
      n === 0
        ? ((a.next = null),
          e === null ? (zn = u) : (e.next = u),
          u === null && (_a = e))
        : ((e = a), (t !== 0 || (n & 3) !== 0) && (pn = !0)),
        (a = u);
    }
    vu(t);
  }
  function xr(t, l) {
    for (
      var e = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - il(n),
        i = 1 << c,
        s = u[c];
      s === -1
        ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = Xd(i, l))
        : s <= l && (t.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((l = pt),
      (e = ht),
      (e = ju(
        t,
        t === l ? e : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      e === 0 ||
        (t === l && (bt === 2 || bt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ql(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Ua(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((a !== null && ql(a), In(e))) {
        case 2:
        case 8:
          e = bf;
          break;
        case 32:
          e = xu;
          break;
        case 268435456:
          e = Nf;
          break;
        default:
          e = xu;
      }
      return (
        (a = Cr.bind(null, t)),
        (e = Ae(e, a)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      a !== null && a !== null && ql(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Cr(t, l) {
    if (Wt !== 0 && Wt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var e = t.callbackNode;
    if (Rn() && t.callbackNode !== e) return null;
    var a = ht;
    return (
      (a = ju(
        t,
        t === pt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (vr(t, a, l),
          xr(t, $t()),
          t.callbackNode != null && t.callbackNode === e
            ? Cr.bind(null, t)
            : null)
    );
  }
  function qr(t, l) {
    if (Rn()) return null;
    vr(t, l, !0);
  }
  function my() {
    Oy(function () {
      (At & 6) !== 0 ? Ae(za, vy) : Ur();
    });
  }
  function Yi() {
    return Xe === 0 && (Xe = _f()), Xe;
  }
  function jr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Ku("" + t);
  }
  function Hr(t, l) {
    var e = l.ownerDocument.createElement("input");
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute("form", t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    );
  }
  function Sy(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = jr((u[ll] || null).action),
        c = a.submitter;
      c &&
        ((l = (l = c[ll] || null)
          ? jr(l.formAction)
          : c.getAttribute("formAction")),
        l !== null && ((n = l), (c = null)));
      var i = new Zu("action", "action", null, a, u);
      t.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Xe !== 0) {
                  var s = c ? Hr(u, c) : new FormData(u);
                  ui(
                    e,
                    { pending: !0, data: s, method: u.method, action: n },
                    null,
                    s
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (s = c ? Hr(u, c) : new FormData(u)),
                  ui(
                    e,
                    { pending: !0, data: s, method: u.method, action: n },
                    n,
                    s
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Gi = 0; Gi < Nc.length; Gi++) {
    var Ki = Nc[Gi],
      gy = Ki.toLowerCase(),
      Ty = Ki[0].toUpperCase() + Ki.slice(1);
    _l(gy, "on" + Ty);
  }
  _l(hs, "onAnimationEnd"),
    _l(vs, "onAnimationIteration"),
    _l(ms, "onAnimationStart"),
    _l("dblclick", "onDoubleClick"),
    _l("focusin", "onFocus"),
    _l("focusout", "onBlur"),
    _l(H0, "onTransitionRun"),
    _l(B0, "onTransitionStart"),
    _l(Y0, "onTransitionCancel"),
    _l(Ss, "onTransitionEnd"),
    We("onMouseEnter", ["mouseout", "mouseover"]),
    We("onMouseLeave", ["mouseout", "mouseover"]),
    We("onPointerEnter", ["pointerout", "pointerover"]),
    We("onPointerLeave", ["pointerout", "pointerover"]),
    Me(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Me(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Me("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Me(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Me(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Me(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var mu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ey = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mu)
    );
  function Br(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c],
              s = i.instance,
              m = i.currentTarget;
            if (((i = i.listener), s !== n && u.isPropagationStopped()))
              break t;
            (n = i), (u.currentTarget = m);
            try {
              n(u);
            } catch (A) {
              Sn(A);
            }
            (u.currentTarget = null), (n = s);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((i = a[c]),
              (s = i.instance),
              (m = i.currentTarget),
              (i = i.listener),
              s !== n && u.isPropagationStopped())
            )
              break t;
            (n = i), (u.currentTarget = m);
            try {
              n(u);
            } catch (A) {
              Sn(A);
            }
            (u.currentTarget = null), (n = s);
          }
      }
    }
  }
  function yt(t, l) {
    var e = l[Pn];
    e === void 0 && (e = l[Pn] = new Set());
    var a = t + "__bubble";
    e.has(a) || (Yr(l, t, 2, !1), e.add(a));
  }
  function Xi(t, l, e) {
    var a = 0;
    l && (a |= 4), Yr(e, t, a, l);
  }
  var Un = "_reactListening" + Math.random().toString(36).slice(2);
  function Qi(t) {
    if (!t[Un]) {
      (t[Un] = !0),
        pf.forEach(function (e) {
          e !== "selectionchange" && (Ey.has(e) || Xi(e, !1, t), Xi(e, !0, t));
        });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Un] || ((l[Un] = !0), Xi("selectionchange", !1, l));
    }
  }
  function Yr(t, l, e, a) {
    switch (fd(l)) {
      case 2:
        var u = ky;
        break;
      case 8:
        u = Wy;
        break;
      default:
        u = ef;
    }
    (e = u.bind(null, l, e, t)),
      (u = void 0),
      !oc ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: u })
          : t.addEventListener(l, e, !0)
        : u !== void 0
        ? t.addEventListener(l, e, { passive: u })
        : t.addEventListener(l, e, !1);
  }
  function wi(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var i = a.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var s = c.tag;
              if ((s === 3 || s === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = Le(i)), c === null)) return;
            if (((s = c.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = n = c;
              continue t;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    Zf(function () {
      var m = n,
        A = fc(e),
        M = [];
      t: {
        var S = gs.get(t);
        if (S !== void 0) {
          var g = Zu,
            P = t;
          switch (t) {
            case "keypress":
              if (Qu(e) === 0) break t;
            case "keydown":
            case "keyup":
              g = h0;
              break;
            case "focusin":
              (P = "focus"), (g = hc);
              break;
            case "focusout":
              (P = "blur"), (g = hc);
              break;
            case "beforeblur":
            case "afterblur":
              g = hc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = kf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = e0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = S0;
              break;
            case hs:
            case vs:
            case ms:
              g = n0;
              break;
            case Ss:
              g = T0;
              break;
            case "scroll":
            case "scrollend":
              g = t0;
              break;
            case "wheel":
              g = A0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = i0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Jf;
              break;
            case "toggle":
            case "beforetoggle":
              g = N0;
          }
          var $ = (l & 4) !== 0,
            Dt = !$ && (t === "scroll" || t === "scrollend"),
            d = $ ? (S !== null ? S + "Capture" : null) : S;
          $ = [];
          for (var o = m, v; o !== null; ) {
            var N = o;
            if (
              ((v = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                v === null ||
                d === null ||
                ((N = ja(o, d)), N != null && $.push(Su(o, N, v))),
              Dt)
            )
              break;
            o = o.return;
          }
          0 < $.length &&
            ((S = new g(S, P, null, e, A)), M.push({ event: S, listeners: $ }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((S = t === "mouseover" || t === "pointerover"),
            (g = t === "mouseout" || t === "pointerout"),
            S &&
              e !== ic &&
              (P = e.relatedTarget || e.fromElement) &&
              (Le(P) || P[Ze]))
          )
            break t;
          if (
            (g || S) &&
            ((S =
              A.window === A
                ? A
                : (S = A.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            g
              ? ((P = e.relatedTarget || e.toElement),
                (g = m),
                (P = P ? Le(P) : null),
                P !== null &&
                  ((Dt = U(P)),
                  ($ = P.tag),
                  P !== Dt || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                  (P = null))
              : ((g = null), (P = m)),
            g !== P)
          ) {
            if (
              (($ = kf),
              (N = "onMouseLeave"),
              (d = "onMouseEnter"),
              (o = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                (($ = Jf),
                (N = "onPointerLeave"),
                (d = "onPointerEnter"),
                (o = "pointer")),
              (Dt = g == null ? S : qa(g)),
              (v = P == null ? S : qa(P)),
              (S = new $(N, o + "leave", g, e, A)),
              (S.target = Dt),
              (S.relatedTarget = v),
              (N = null),
              Le(A) === m &&
                (($ = new $(d, o + "enter", P, e, A)),
                ($.target = v),
                ($.relatedTarget = Dt),
                (N = $)),
              (Dt = N),
              g && P)
            )
              l: {
                for ($ = g, d = P, o = 0, v = $; v; v = Ma(v)) o++;
                for (v = 0, N = d; N; N = Ma(N)) v++;
                for (; 0 < o - v; ) ($ = Ma($)), o--;
                for (; 0 < v - o; ) (d = Ma(d)), v--;
                for (; o--; ) {
                  if ($ === d || (d !== null && $ === d.alternate)) break l;
                  ($ = Ma($)), (d = Ma(d));
                }
                $ = null;
              }
            else $ = null;
            g !== null && Gr(M, S, g, $, !1),
              P !== null && Dt !== null && Gr(M, Dt, P, $, !0);
          }
        }
        t: {
          if (
            ((S = m ? qa(m) : window),
            (g = S.nodeName && S.nodeName.toLowerCase()),
            g === "select" || (g === "input" && S.type === "file"))
          )
            var G = as;
          else if (ls(S))
            if (us) G = C0;
            else {
              G = U0;
              var ot = p0;
            }
          else
            (g = S.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (S.type !== "checkbox" && S.type !== "radio")
                ? m && cc(m.elementType) && (G = as)
                : (G = x0);
          if (G && (G = G(t, m))) {
            es(M, G, e, A);
            break t;
          }
          ot && ot(t, S, m),
            t === "focusout" &&
              m &&
              S.type === "number" &&
              m.memoizedProps.value != null &&
              nc(S, "number", S.value);
        }
        switch (((ot = m ? qa(m) : window), t)) {
          case "focusin":
            (ls(ot) || ot.contentEditable === "true") &&
              ((la = ot), (Ec = m), (wa = null));
            break;
          case "focusout":
            wa = Ec = la = null;
            break;
          case "mousedown":
            Ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ac = !1), ds(M, e, A);
            break;
          case "selectionchange":
            if (j0) break;
          case "keydown":
          case "keyup":
            ds(M, e, A);
        }
        var L;
        if (mc)
          t: {
            switch (t) {
              case "compositionstart":
                var F = "onCompositionStart";
                break t;
              case "compositionend":
                F = "onCompositionEnd";
                break t;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break t;
            }
            F = void 0;
          }
        else
          ta
            ? Pf(t, e) && (F = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (F = "onCompositionStart");
        F &&
          ($f &&
            e.locale !== "ko" &&
            (ta || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && ta && (L = Lf())
              : ((Pl = A),
                (rc = "value" in Pl ? Pl.value : Pl.textContent),
                (ta = !0))),
          (ot = xn(m, F)),
          0 < ot.length &&
            ((F = new Wf(F, t, null, e, A)),
            M.push({ event: F, listeners: ot }),
            L ? (F.data = L) : ((L = ts(e)), L !== null && (F.data = L)))),
          (L = M0 ? O0(t, e) : D0(t, e)) &&
            ((F = xn(m, "onBeforeInput")),
            0 < F.length &&
              ((ot = new Wf("onBeforeInput", "beforeinput", null, e, A)),
              M.push({ event: ot, listeners: F }),
              (ot.data = L))),
          Sy(M, t, m, e, A);
      }
      Br(M, l);
    });
  }
  function Su(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function xn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = ja(t, e)),
          u != null && a.unshift(Su(t, u, n)),
          (u = ja(t, l)),
          u != null && a.push(Su(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Ma(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Gr(t, l, e, a, u) {
    for (var n = l._reactName, c = []; e !== null && e !== a; ) {
      var i = e,
        s = i.alternate,
        m = i.stateNode;
      if (((i = i.tag), s !== null && s === a)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        m === null ||
        ((s = m),
        u
          ? ((m = ja(e, n)), m != null && c.unshift(Su(e, m, s)))
          : u || ((m = ja(e, n)), m != null && c.push(Su(e, m, s)))),
        (e = e.return);
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var Ay = /\r\n?/g,
    by = /\u0000|\uFFFD/g;
  function Kr(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Ay,
        `
`
      )
      .replace(by, "");
  }
  function Xr(t, l) {
    return (l = Kr(l)), Kr(t) === l;
  }
  function Cn() {}
  function Ot(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? l === "body" || (l === "textarea" && a === "") || Fe(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            l !== "body" &&
            Fe(t, "" + a);
        break;
      case "className":
        Bu(t, "class", a);
        break;
      case "tabIndex":
        Bu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bu(t, e, a);
        break;
      case "style":
        Qf(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Bu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(e);
          break;
        }
        (a = Ku("" + a)), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (l !== "input" && Ot(t, l, "name", u.name, u, null),
                Ot(t, l, "formEncType", u.formEncType, u, null),
                Ot(t, l, "formMethod", u.formMethod, u, null),
                Ot(t, l, "formTarget", u.formTarget, u, null))
              : (Ot(t, l, "encType", u.encType, u, null),
                Ot(t, l, "method", u.method, u, null),
                Ot(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        (a = Ku("" + a)), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Cn);
        break;
      case "onScroll":
        a != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(y(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (e = Ku("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "" + a)
          : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "")
          : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(e)
          : t.setAttribute(e, a);
        break;
      case "popover":
        yt("beforetoggle", t), yt("toggle", t), Hu(t, "popover", a);
        break;
      case "xlinkActuate":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        jl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        jl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        jl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Hu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Id.get(e) || e), Hu(t, e, a));
    }
  }
  function Zi(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        Qf(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(y(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Fe(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Fe(t, "" + a);
        break;
      case "onScroll":
        a != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && yt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Cn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Uf.hasOwnProperty(e))
          t: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (l = e.slice(2, u ? e.length - 7 : void 0)),
              (n = t[ll] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && t.removeEventListener(l, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in t
                  ? (t[e] = null)
                  : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, a, u);
              break t;
            }
            e in t
              ? (t[e] = a)
              : a === !0
              ? t.setAttribute(e, "")
              : Hu(t, e, a);
          }
    }
  }
  function Jt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        yt("error", t), yt("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(y(137, l));
                default:
                  Ot(t, l, n, c, e, null);
              }
          }
        u && Ot(t, l, "srcSet", e.srcSet, e, null),
          a && Ot(t, l, "src", e.src, e, null);
        return;
      case "input":
        yt("invalid", t);
        var i = (n = c = u = null),
          s = null,
          m = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var A = e[a];
            if (A != null)
              switch (a) {
                case "name":
                  u = A;
                  break;
                case "type":
                  c = A;
                  break;
                case "checked":
                  s = A;
                  break;
                case "defaultChecked":
                  m = A;
                  break;
                case "value":
                  n = A;
                  break;
                case "defaultValue":
                  i = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(y(137, l));
                  break;
                default:
                  Ot(t, l, a, A, e, null);
              }
          }
        Yf(t, n, i, s, m, c, u, !1), Yu(t);
        return;
      case "select":
        yt("invalid", t), (a = c = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((i = e[u]), i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                a = i;
              default:
                Ot(t, l, u, i, e, null);
            }
        (l = n),
          (e = c),
          (t.multiple = !!a),
          l != null ? $e(t, !!a, l, !1) : e != null && $e(t, !!a, e, !0);
        return;
      case "textarea":
        yt("invalid", t), (n = u = a = null);
        for (c in e)
          if (e.hasOwnProperty(c) && ((i = e[c]), i != null))
            switch (c) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(y(91));
                break;
              default:
                Ot(t, l, c, i, e, null);
            }
        Kf(t, a, u, n), Yu(t);
        return;
      case "option":
        for (s in e)
          if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
            switch (s) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ot(t, l, s, a, e, null);
            }
        return;
      case "dialog":
        yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t);
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mu.length; a++) yt(mu[a], t);
        break;
      case "image":
        yt("error", t), yt("load", t);
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        yt("error", t), yt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in e)
          if (e.hasOwnProperty(m) && ((a = e[m]), a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, l));
              default:
                Ot(t, l, m, a, e, null);
            }
        return;
      default:
        if (cc(l)) {
          for (A in e)
            e.hasOwnProperty(A) &&
              ((a = e[A]), a !== void 0 && Zi(t, l, A, a, e, void 0));
          return;
        }
    }
    for (i in e)
      e.hasOwnProperty(i) && ((a = e[i]), a != null && Ot(t, l, i, a, e, null));
  }
  function Ny(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          i = null,
          s = null,
          m = null,
          A = null;
        for (g in e) {
          var M = e[g];
          if (e.hasOwnProperty(g) && M != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = M;
              default:
                a.hasOwnProperty(g) || Ot(t, l, g, null, a, M);
            }
        }
        for (var S in a) {
          var g = a[S];
          if (((M = e[S]), a.hasOwnProperty(S) && (g != null || M != null)))
            switch (S) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                m = g;
                break;
              case "defaultChecked":
                A = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(y(137, l));
                break;
              default:
                g !== M && Ot(t, l, S, g, a, M);
            }
        }
        uc(t, c, i, s, m, A, n, u);
        return;
      case "select":
        g = c = i = S = null;
        for (n in e)
          if (((s = e[n]), e.hasOwnProperty(n) && s != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = s;
              default:
                a.hasOwnProperty(n) || Ot(t, l, n, null, a, s);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (s = e[u]),
            a.hasOwnProperty(u) && (n != null || s != null))
          )
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== s && Ot(t, l, u, n, a, s);
            }
        (l = i),
          (e = c),
          (a = g),
          S != null
            ? $e(t, !!e, S, !1)
            : !!a != !!e &&
              (l != null ? $e(t, !!e, l, !0) : $e(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = S = null;
        for (i in e)
          if (
            ((u = e[i]),
            e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ot(t, l, i, null, a, u);
            }
        for (c in a)
          if (
            ((u = a[c]),
            (n = e[c]),
            a.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(y(91));
                break;
              default:
                u !== n && Ot(t, l, c, u, a, n);
            }
        Gf(t, S, g);
        return;
      case "option":
        for (var P in e)
          if (
            ((S = e[P]),
            e.hasOwnProperty(P) && S != null && !a.hasOwnProperty(P))
          )
            switch (P) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ot(t, l, P, null, a, S);
            }
        for (s in a)
          if (
            ((S = a[s]),
            (g = e[s]),
            a.hasOwnProperty(s) && S !== g && (S != null || g != null))
          )
            switch (s) {
              case "selected":
                t.selected =
                  S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                Ot(t, l, s, S, a, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in e)
          (S = e[$]),
            e.hasOwnProperty($) &&
              S != null &&
              !a.hasOwnProperty($) &&
              Ot(t, l, $, null, a, S);
        for (m in a)
          if (
            ((S = a[m]),
            (g = e[m]),
            a.hasOwnProperty(m) && S !== g && (S != null || g != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(y(137, l));
                break;
              default:
                Ot(t, l, m, S, a, g);
            }
        return;
      default:
        if (cc(l)) {
          for (var Dt in e)
            (S = e[Dt]),
              e.hasOwnProperty(Dt) &&
                S !== void 0 &&
                !a.hasOwnProperty(Dt) &&
                Zi(t, l, Dt, void 0, a, S);
          for (A in a)
            (S = a[A]),
              (g = e[A]),
              !a.hasOwnProperty(A) ||
                S === g ||
                (S === void 0 && g === void 0) ||
                Zi(t, l, A, S, a, g);
          return;
        }
    }
    for (var d in e)
      (S = e[d]),
        e.hasOwnProperty(d) &&
          S != null &&
          !a.hasOwnProperty(d) &&
          Ot(t, l, d, null, a, S);
    for (M in a)
      (S = a[M]),
        (g = e[M]),
        !a.hasOwnProperty(M) ||
          S === g ||
          (S == null && g == null) ||
          Ot(t, l, M, S, a, g);
  }
  var Li = null,
    Vi = null;
  function qn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Qr(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wr(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function ki(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Wi = null;
  function _y() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Wi
        ? !1
        : ((Wi = t), !0)
      : ((Wi = null), !1);
  }
  var Zr = typeof setTimeout == "function" ? setTimeout : void 0,
    My = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lr = typeof Promise == "function" ? Promise : void 0,
    Oy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Lr < "u"
        ? function (t) {
            return Lr.resolve(null).then(t).catch(Dy);
          }
        : Zr;
  function Dy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ve(t) {
    return t === "head";
  }
  function Vr(t, l) {
    var e = l,
      a = 0,
      u = 0;
    do {
      var n = e.nextSibling;
      if ((t.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$")) {
          if (0 < a && 8 > a) {
            e = a;
            var c = t.ownerDocument;
            if ((e & 1 && gu(c.documentElement), e & 2 && gu(c.body), e & 4))
              for (e = c.head, gu(e), c = e.firstChild; c; ) {
                var i = c.nextSibling,
                  s = c.nodeName;
                c[Ca] ||
                  s === "SCRIPT" ||
                  s === "STYLE" ||
                  (s === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  e.removeChild(c),
                  (c = i);
              }
          }
          if (u === 0) {
            t.removeChild(n), Ou(l);
            return;
          }
          u--;
        } else
          e === "$" || e === "$?" || e === "$!"
            ? u++
            : (a = e.charCodeAt(0) - 48);
      else a = 0;
      e = n;
    } while (e);
    Ou(l);
  }
  function Ji(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ji(e), tc(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Ry(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ca])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = Ol(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function zy(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ol(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function $i(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function py(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete") l();
    else {
      var a = function () {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ol(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
        )
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var Fi = null;
  function kr(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Wr(t, l, e) {
    switch (((l = qn(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(y(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(y(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(y(454));
        return t;
      default:
        throw Error(y(451));
    }
  }
  function gu(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    tc(t);
  }
  var Nl = new Map(),
    Jr = new Set();
  function jn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Jl = _.d;
  _.d = { f: Uy, r: xy, D: Cy, C: qy, L: jy, m: Hy, X: Yy, S: By, M: Gy };
  function Uy() {
    var t = Jl.f(),
      l = On();
    return t || l;
  }
  function xy(t) {
    var l = Ve(t);
    l !== null && l.tag === 5 && l.type === "form" ? vo(l) : Jl.r(t);
  }
  var Oa = typeof document > "u" ? null : document;
  function $r(t, l, e) {
    var a = Oa;
    if (a && typeof l == "string" && l) {
      var u = ml(l);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        Jr.has(u) ||
          (Jr.add(u),
          (t = { rel: t, crossOrigin: e, href: l }),
          a.querySelector(u) === null &&
            ((l = a.createElement("link")),
            Jt(l, "link", t),
            Qt(l),
            a.head.appendChild(l)));
    }
  }
  function Cy(t) {
    Jl.D(t), $r("dns-prefetch", t, null);
  }
  function qy(t, l) {
    Jl.C(t, l), $r("preconnect", t, l);
  }
  function jy(t, l, e) {
    Jl.L(t, l, e);
    var a = Oa;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + ml(l) + '"]';
      l === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + ml(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + ml(e.imageSizes) + '"]'))
        : (u += '[href="' + ml(t) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = Da(t);
          break;
        case "script":
          n = Ra(t);
      }
      Nl.has(n) ||
        ((t = B(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e
        )),
        Nl.set(n, t),
        a.querySelector(u) !== null ||
          (l === "style" && a.querySelector(Tu(n))) ||
          (l === "script" && a.querySelector(Eu(n))) ||
          ((l = a.createElement("link")),
          Jt(l, "link", t),
          Qt(l),
          a.head.appendChild(l)));
    }
  }
  function Hy(t, l) {
    Jl.m(t, l);
    var e = Oa;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ml(a) + '"][href="' + ml(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ra(t);
      }
      if (
        !Nl.has(n) &&
        ((t = B({ rel: "modulepreload", href: t }, l)),
        Nl.set(n, t),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Eu(n))) return;
        }
        (a = e.createElement("link")),
          Jt(a, "link", t),
          Qt(a),
          e.head.appendChild(a);
      }
    }
  }
  function By(t, l, e) {
    Jl.S(t, l, e);
    var a = Oa;
    if (a && t) {
      var u = ke(a).hoistableStyles,
        n = Da(t);
      l = l || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = a.querySelector(Tu(n)))) i.loading = 5;
        else {
          (t = B({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = Nl.get(n)) && Ii(t, e);
          var s = (c = a.createElement("link"));
          Qt(s),
            Jt(s, "link", t),
            (s._p = new Promise(function (m, A) {
              (s.onload = m), (s.onerror = A);
            })),
            s.addEventListener("load", function () {
              i.loading |= 1;
            }),
            s.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Hn(c, l, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          u.set(n, c);
      }
    }
  }
  function Yy(t, l) {
    Jl.X(t, l);
    var e = Oa;
    if (e && t) {
      var a = ke(e).hoistableScripts,
        u = Ra(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(Eu(u))),
        n ||
          ((t = B({ src: t, async: !0 }, l)),
          (l = Nl.get(u)) && Pi(t, l),
          (n = e.createElement("script")),
          Qt(n),
          Jt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Gy(t, l) {
    Jl.M(t, l);
    var e = Oa;
    if (e && t) {
      var a = ke(e).hoistableScripts,
        u = Ra(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(Eu(u))),
        n ||
          ((t = B({ src: t, async: !0, type: "module" }, l)),
          (l = Nl.get(u)) && Pi(t, l),
          (n = e.createElement("script")),
          Qt(n),
          Jt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Fr(t, l, e, a) {
    var u = (u = Y.current) ? jn(u) : null;
    if (!u) throw Error(y(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Da(e.href)),
            (e = ke(u).hoistableStyles),
            (a = e.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          t = Da(e.href);
          var n = ke(u).hoistableStyles,
            c = n.get(t);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, c),
              (n = u.querySelector(Tu(t))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Nl.has(t) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                Nl.set(t, e),
                n || Ky(u, t, e, c.state))),
            l && a === null)
          )
            throw Error(y(528, ""));
          return c;
        }
        if (l && a !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = Ra(e)),
              (e = ke(u).hoistableScripts),
              (a = e.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, t));
    }
  }
  function Da(t) {
    return 'href="' + ml(t) + '"';
  }
  function Tu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Ir(t) {
    return B({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Ky(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (a.loading = 1)
      : ((l = t.createElement("link")),
        (a.preload = l),
        l.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Jt(l, "link", e),
        Qt(l),
        t.head.appendChild(l));
  }
  function Ra(t) {
    return '[src="' + ml(t) + '"]';
  }
  function Eu(t) {
    return "script[async]" + t;
  }
  function Pr(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ml(e.href) + '"]');
          if (a) return (l.instance = a), Qt(a), a;
          var u = B({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Qt(a),
            Jt(a, "style", u),
            Hn(a, e.precedence, t),
            (l.instance = a)
          );
        case "stylesheet":
          u = Da(e.href);
          var n = t.querySelector(Tu(u));
          if (n) return (l.state.loading |= 4), (l.instance = n), Qt(n), n;
          (a = Ir(e)),
            (u = Nl.get(u)) && Ii(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            Qt(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, s) {
              (c.onload = i), (c.onerror = s);
            })),
            Jt(n, "link", a),
            (l.state.loading |= 4),
            Hn(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = Ra(e.src)),
            (u = t.querySelector(Eu(n)))
              ? ((l.instance = u), Qt(u), u)
              : ((a = e),
                (u = Nl.get(n)) && ((a = B({}, e)), Pi(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Qt(u),
                Jt(u, "link", a),
                t.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(y(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((a = l.instance), (l.state.loading |= 4), Hn(a, e.precedence, t));
    return l.instance;
  }
  function Hn(t, l, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        c = 0;
      c < a.length;
      c++
    ) {
      var i = a[c];
      if (i.dataset.precedence === l) n = i;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function Ii(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title);
  }
  function Pi(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity);
  }
  var Bn = null;
  function td(t, l, e) {
    if (Bn === null) {
      var a = new Map(),
        u = (Bn = new Map());
      u.set(e, a);
    } else (u = Bn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), e = e.getElementsByTagName(t), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ca] ||
          n[Ft] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(l) || "";
        c = t + c;
        var i = a.get(c);
        i ? i.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function ld(t, l, e) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null
      );
  }
  function Xy(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (t = l.disabled), typeof l.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ed(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Au = null;
  function Qy() {}
  function wy(t, l, e) {
    if (Au === null) throw Error(y(475));
    var a = Au;
    if (
      l.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = Da(e.href),
          n = t.querySelector(Tu(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Yn.bind(a)), t.then(a, a)),
            (l.state.loading |= 4),
            (l.instance = n),
            Qt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (e = Ir(e)),
          (u = Nl.get(u)) && Ii(e, u),
          (n = n.createElement("link")),
          Qt(n);
        var c = n;
        (c._p = new Promise(function (i, s) {
          (c.onload = i), (c.onerror = s);
        })),
          Jt(n, "link", e),
          (l.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (a.count++,
          (l = Yn.bind(a)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  function Zy() {
    if (Au === null) throw Error(y(475));
    var t = Au;
    return (
      t.stylesheets && t.count === 0 && tf(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && tf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Yn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) tf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Gn = null;
  function tf(t, l) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Gn = new Map()),
        l.forEach(Ly, t),
        (Gn = null),
        Yn.call(t));
  }
  function Ly(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Gn.get(t);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Gn.set(t, e);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (e.set(c.dataset.precedence, c), (a = c));
        }
        a && e.set(null, a);
      }
      (u = l.instance),
        (c = u.getAttribute("data-precedence")),
        (n = e.get(c) || a),
        n === a && e.set(null, u),
        e.set(c, u),
        this.count++,
        (a = Yn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (l.state.loading |= 4);
    }
  }
  var bu = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0,
  };
  function Vy(t, l, e, a, u, n, c, i) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $n(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $n(0)),
      (this.hiddenUpdates = $n(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function ad(t, l, e, a, u, n, c, i, s, m, A, M) {
    return (
      (t = new Vy(t, l, e, c, i, s, m, M)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = sl(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = jc()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: l }),
      Gc(n),
      t
    );
  }
  function ud(t) {
    return t ? ((t = na), t) : na;
  }
  function nd(t, l, e, a, u, n) {
    (u = ud(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ee(l)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = ae(t, a, l)),
      e !== null && (hl(e, t, l), Ia(e, t, l));
  }
  function cd(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function lf(t, l) {
    cd(t, l), (t = t.alternate) && cd(t, l);
  }
  function id(t) {
    if (t.tag === 13) {
      var l = ua(t, 67108864);
      l !== null && hl(l, t, 67108864), lf(t, 67108864);
    }
  }
  var Kn = !0;
  function ky(t, l, e, a) {
    var u = r.T;
    r.T = null;
    var n = _.p;
    try {
      (_.p = 2), ef(t, l, e, a);
    } finally {
      (_.p = n), (r.T = u);
    }
  }
  function Wy(t, l, e, a) {
    var u = r.T;
    r.T = null;
    var n = _.p;
    try {
      (_.p = 8), ef(t, l, e, a);
    } finally {
      (_.p = n), (r.T = u);
    }
  }
  function ef(t, l, e, a) {
    if (Kn) {
      var u = af(a);
      if (u === null) wi(t, l, a, Xn, e), sd(t, a);
      else if ($y(u, t, l, e, a)) a.stopPropagation();
      else if ((sd(t, a), l & 4 && -1 < Jy.indexOf(t))) {
        for (; u !== null; ) {
          var n = Ve(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = _e(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var s = 1 << (31 - il(c));
                      (i.entanglements[1] |= s), (c &= ~s);
                    }
                    xl(n), (At & 6) === 0 && ((_n = $t() + 500), vu(0));
                  }
                }
                break;
              case 13:
                (i = ua(n, 2)), i !== null && hl(i, n, 2), On(), lf(n, 2);
            }
          if (((n = af(a)), n === null && wi(t, l, a, Xn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else wi(t, l, a, null, e);
    }
  }
  function af(t) {
    return (t = fc(t)), uf(t);
  }
  var Xn = null;
  function uf(t) {
    if (((Xn = null), (t = Le(t)), t !== null)) {
      var l = U(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (((t = K(l)), t !== null)) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return (Xn = t), null;
  }
  function fd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($l()) {
          case za:
            return 2;
          case bf:
            return 8;
          case xu:
          case jd:
            return 32;
          case Nf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nf = !1,
    me = null,
    Se = null,
    ge = null,
    Nu = new Map(),
    _u = new Map(),
    Te = [],
    Jy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function sd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        me = null;
        break;
      case "dragenter":
      case "dragleave":
        Se = null;
        break;
      case "mouseover":
      case "mouseout":
        ge = null;
        break;
      case "pointerover":
      case "pointerout":
        Nu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _u.delete(l.pointerId);
    }
  }
  function Mu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        l !== null && ((l = Ve(l)), l !== null && id(l)),
        t)
      : ((t.eventSystemFlags |= a),
        (l = t.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        t);
  }
  function $y(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return (me = Mu(me, t, l, e, a, u)), !0;
      case "dragenter":
        return (Se = Mu(Se, t, l, e, a, u)), !0;
      case "mouseover":
        return (ge = Mu(ge, t, l, e, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Nu.set(n, Mu(Nu.get(n) || null, t, l, e, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), _u.set(n, Mu(_u.get(n) || null, t, l, e, a, u)), !0
        );
    }
    return !1;
  }
  function od(t) {
    var l = Le(t.target);
    if (l !== null) {
      var e = U(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = K(e)), l !== null)) {
            (t.blockedOn = l),
              wd(t.priority, function () {
                if (e.tag === 13) {
                  var a = yl();
                  a = Fn(a);
                  var u = ua(e, a);
                  u !== null && hl(u, e, a), lf(e, a);
                }
              });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Qn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = af(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(e.type, e);
        (ic = a), e.target.dispatchEvent(a), (ic = null);
      } else return (l = Ve(e)), l !== null && id(l), (t.blockedOn = e), !1;
      l.shift();
    }
    return !0;
  }
  function rd(t, l, e) {
    Qn(t) && e.delete(l);
  }
  function Fy() {
    (nf = !1),
      me !== null && Qn(me) && (me = null),
      Se !== null && Qn(Se) && (Se = null),
      ge !== null && Qn(ge) && (ge = null),
      Nu.forEach(rd),
      _u.forEach(rd);
  }
  function wn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      nf ||
        ((nf = !0),
        b.unstable_scheduleCallback(b.unstable_NormalPriority, Fy)));
  }
  var Zn = null;
  function dd(t) {
    Zn !== t &&
      ((Zn = t),
      b.unstable_scheduleCallback(b.unstable_NormalPriority, function () {
        Zn === t && (Zn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            a = t[l + 1],
            u = t[l + 2];
          if (typeof a != "function") {
            if (uf(a || e) === null) continue;
            break;
          }
          var n = Ve(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            ui(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function Ou(t) {
    function l(s) {
      return wn(s, t);
    }
    me !== null && wn(me, t),
      Se !== null && wn(Se, t),
      ge !== null && wn(ge, t),
      Nu.forEach(l),
      _u.forEach(l);
    for (var e = 0; e < Te.length; e++) {
      var a = Te[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Te.length && ((e = Te[0]), e.blockedOn === null); )
      od(e), e.blockedOn === null && Te.shift();
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          c = u[ll] || null;
        if (typeof n == "function") c || dd(e);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[ll] || null))) i = c.formAction;
            else if (uf(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (e[a + 1] = i) : (e.splice(a, 3), (a -= 3)),
            dd(e);
        }
      }
  }
  function cf(t) {
    this._internalRoot = t;
  }
  (Ln.prototype.render = cf.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(y(409));
      var e = l.current,
        a = yl();
      nd(e, a, t, l, null, null);
    }),
    (Ln.prototype.unmount = cf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          nd(t.current, 2, null, t, null, null), On(), (l[Ze] = null);
        }
      });
  function Ln(t) {
    this._internalRoot = t;
  }
  Ln.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = Rf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Te.length && l !== 0 && l < Te[e].priority; e++);
      Te.splice(e, 0, t), e === 0 && od(t);
    }
  };
  var yd = p.version;
  if (yd !== "19.1.1") throw Error(y(527, yd, "19.1.1"));
  _.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(y(188))
        : ((t = Object.keys(t).join(",")), Error(y(268, t)));
    return (
      (t = q(l)),
      (t = t !== null ? E(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Iy = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: r,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vn.isDisabled && Vn.supportsFiber)
      try {
        (pa = Vn.inject(Iy)), (cl = Vn);
      } catch {}
  }
  return (
    (Ru.createRoot = function (t, l) {
      if (!C(t)) throw Error(y(299));
      var e = !1,
        a = "",
        u = zo,
        n = po,
        c = Uo,
        i = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (i = l.unstable_transitionCallbacks)),
        (l = ad(t, 1, !1, null, null, e, a, u, n, c, i, null)),
        (t[Ze] = l.current),
        Qi(t),
        new cf(l)
      );
    }),
    (Ru.hydrateRoot = function (t, l, e) {
      if (!C(t)) throw Error(y(299));
      var a = !1,
        u = "",
        n = zo,
        c = po,
        i = Uo,
        s = null,
        m = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (s = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (m = e.formState)),
        (l = ad(t, 1, !0, l, e ?? null, a, u, n, c, i, s, m)),
        (l.context = ud(null)),
        (e = l.current),
        (a = yl()),
        (a = Fn(a)),
        (u = ee(a)),
        (u.callback = null),
        ae(e, u, a),
        (e = a),
        (l.current.lanes = e),
        xa(l, e),
        xl(l),
        (t[Ze] = l.current),
        Qi(t),
        new Ln(l)
      );
    }),
    (Ru.version = "19.1.1"),
    Ru
  );
}
var Nd;
function fh() {
  if (Nd) return of.exports;
  Nd = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (p) {
        console.error(p);
      }
  }
  return b(), (of.exports = ih()), of.exports;
}
var sh = fh();
const zu = ({ packets: b, base: p, windowSize: H, onToggle: y }) => {
    const C = (U) => (U >= p && U < p + H ? "window-active" : "");
    return h.jsxs("div", {
      className: "table-container",
      children: [
        h.jsx("h3", { children: "Packet Status & Controls" }),
        h.jsxs("table", {
          children: [
            h.jsx("thead", {
              children: h.jsxs("tr", {
                children: [
                  h.jsx("th", { children: "Pkt #" }),
                  b.map((U) =>
                    h.jsx(
                      "th",
                      { className: C(U.id), children: U.isDummy ? "" : U.id },
                      U.id
                    )
                  ),
                ],
              }),
            }),
            h.jsxs("tbody", {
              children: [
                h.jsxs("tr", {
                  children: [
                    h.jsx("td", { children: "Sent" }),
                    b.map((U) =>
                      h.jsx(
                        "td",
                        {
                          children:
                            !U.isDummy &&
                            (U.status === "sent" || U.status === "acked")
                              ? "✔️"
                              : "",
                        },
                        U.id
                      )
                    ),
                  ],
                }),
                h.jsxs("tr", {
                  children: [
                    h.jsx("td", { children: "ACK'd" }),
                    b.map((U) =>
                      h.jsx(
                        "td",
                        {
                          children:
                            !U.isDummy && U.status === "acked" ? "✔️" : "",
                        },
                        U.id
                      )
                    ),
                  ],
                }),
                h.jsxs("tr", {
                  className: "control-row",
                  children: [
                    h.jsx("td", { children: "Pkt Success" }),
                    b.map((U) =>
                      h.jsx(
                        "td",
                        {
                          children:
                            !U.isDummy &&
                            h.jsxs("label", {
                              className: "switch",
                              children: [
                                h.jsx("input", {
                                  type: "checkbox",
                                  checked: U.packetWillSucceed,
                                  onChange: () => y(U.id, "packetWillSucceed"),
                                }),
                                h.jsx("span", { className: "slider" }),
                              ],
                            }),
                        },
                        U.id
                      )
                    ),
                  ],
                }),
                h.jsxs("tr", {
                  className: "control-row",
                  children: [
                    h.jsx("td", { children: "ACK Success" }),
                    b.map((U) =>
                      h.jsx(
                        "td",
                        {
                          children:
                            !U.isDummy &&
                            h.jsxs("label", {
                              className: "switch",
                              children: [
                                h.jsx("input", {
                                  type: "checkbox",
                                  checked: U.ackWillSucceed,
                                  onChange: () => y(U.id, "ackWillSucceed"),
                                }),
                                h.jsx("span", { className: "slider" }),
                              ],
                            }),
                        },
                        U.id
                      )
                    ),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Qe = ({ messages: b }) => {
    const p = D.useRef(null);
    return (
      D.useEffect(() => {
        p.current && (p.current.scrollTop = p.current.scrollHeight);
      }, [b]),
      h.jsxs("div", {
        className: "log-container",
        children: [
          h.jsx("h5", { children: "Communication Log:" }),
          h.jsx("div", {
            className: "log-content",
            ref: p,
            children: h.jsx("ol", {
              children: b.map((H, y) => h.jsx("li", { children: H }, y)),
            }),
          }),
        ],
      })
    );
  },
  pu = ({
    onSend: b,
    onMoveWindow: p,
    onResend: H,
    moveWindowDisabled: y,
    resendDisabled: C,
    isStopAndWait: U,
    onIncreaseWindow: K,
    onDecreaseWindow: at,
  }) =>
    h.jsxs("div", {
      className: "controls-container",
      style: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        marginBottom: "20px",
      },
      children: [
        h.jsx("button", {
          onClick: b,
          children: U ? "Send Packet" : "Send Window",
        }),
        h.jsx("button", { onClick: p, disabled: y, children: "Move Window" }),
        h.jsx("button", {
          onClick: H,
          disabled: C,
          children: U ? "Resend Packet" : "Resend Window",
        }),
        K && h.jsx("button", { onClick: K, children: "Increase Window" }),
        at && h.jsx("button", { onClick: at, children: "Decrease Window" }),
      ],
    }),
  we = ({ packetsInFlight: b }) =>
    h.jsxs("div", {
      className: "animation-container",
      children: [
        h.jsxs("div", {
          className: "entity-label-container",
          children: [
            h.jsx("div", { className: "entity sender", children: "Sender" }),
            h.jsx("div", {
              className: "entity receiver",
              children: "Receiver",
            }),
          ],
        }),
        h.jsx("svg", {
          viewBox: "0 0 500 200",
          preserveAspectRatio: "xMidYMid meet",
          className: "animation-svg",
          children: b.map((p) => {
            const H = p.type === "packet",
              y = H ? 20 : 480,
              C = H ? 480 : 20;
            return h.jsxs(
              "g",
              {
                className: `transit-item ${H ? "packet" : "ack"} ${
                  p.status === "lost" ? "lost" : ""
                }`,
                children: [
                  h.jsx("line", {
                    x1: y,
                    y1: p.y,
                    x2: C,
                    y2: p.y,
                    className: "path",
                  }),
                  h.jsx("circle", {
                    cx: y,
                    cy: p.y,
                    r: "15",
                    className: "circle-bg",
                  }),
                  h.jsx("text", {
                    x: y,
                    y: p.y,
                    dy: ".3em",
                    textAnchor: "middle",
                    className: "label",
                    children: H ? `Pkt ${p.seq}` : `Ack ${p.seq}`,
                  }),
                ],
              },
              p.key
            );
          }),
        }),
      ],
    }),
  Uu = ({
    windowBase: b,
    base: p,
    nextseqnum: H,
    timerValue: y,
    timerForPacket: C,
    congestionWindow: U,
    slowStartThreshold: K,
    requiredWindowSize: at,
  }) => {
    const q = () =>
      y === null
        ? "Off"
        : y === "TIMEOUT!"
        ? "TIMEOUT!"
        : C
        ? `Pkt ${C}: ${y}s`
        : `${y}s`;
    return h.jsxs("div", {
      className: "status-container",
      children: [
        p !== void 0 &&
          h.jsxs("div", {
            className: "status-item",
            children: [
              h.jsx("span", { className: "label", children: "senderBase:" }),
              h.jsx("span", { className: "value base", children: p }),
            ],
          }),
        b !== void 0 &&
          h.jsxs("div", {
            className: "status-item",
            children: [
              h.jsx("span", { className: "label", children: "windowBase:" }),
              h.jsx("span", { className: "value base", children: b }),
            ],
          }),
        H !== void 0 &&
          h.jsxs("div", {
            className: "status-item",
            children: [
              h.jsx("span", { className: "label", children: "nextseqnum:" }),
              h.jsx("span", { className: "value nextseqnum", children: H }),
            ],
          }),
        U !== void 0 &&
          h.jsxs("div", {
            className: "status-item",
            children: [
              h.jsx("span", { className: "label", children: "cwnd:" }),
              h.jsx("span", { className: "value cwnd", children: U }),
            ],
          }),
        at !== void 0 &&
          h.jsxs("div", {
            className: "status-item",
            children: [
              h.jsx("span", {
                className: "label",
                children: "Required Window Size:",
              }),
              h.jsx("span", {
                className: "value requiredWindowSize",
                children: at,
              }),
            ],
          }),
        K !== void 0 &&
          h.jsxs("div", {
            className: "status-item",
            children: [
              h.jsx("span", { className: "label", children: "ssthresh:" }),
              h.jsx("span", { className: "value ssthresh", children: K }),
            ],
          }),
        h.jsxs("div", {
          className: "status-item",
          children: [
            h.jsx("span", { className: "label", children: "Timer:" }),
            h.jsx("span", { className: "value timer", children: q() }),
          ],
        }),
      ],
    });
  },
  gf = 10,
  vf = 4,
  oh = 7e3,
  _d = 1500,
  rh = gf + vf,
  dh = Array.from({ length: rh }, (b, p) => ({
    id: p,
    status: "unsent",
    packetWillSucceed: !0,
    ackWillSucceed: !0,
    isDummy: p >= gf,
  }));
function yh() {
  const [b, p] = D.useState(dh),
    H = D.useRef(b),
    [y, C] = D.useState([]),
    [U, K] = D.useState([]),
    [at, q] = D.useState(0),
    [E, B] = D.useState(0),
    [tt, W] = D.useState(0),
    [Et, it] = D.useState(null),
    [mt, I] = D.useState(!1),
    [rt, St] = D.useState(null),
    V = D.useRef(null),
    lt = D.useRef(null);
  D.useEffect(() => {
    H.current = b;
  }, [b]);
  const x = (j) => C((J) => [...J, j]),
    Nt = (j, J) => {
      p((k) => k.map((Q) => (Q.id === j ? { ...Q, [J]: !Q[J] } : Q)));
    };
  D.useEffect(() => {
    (V.current = new Worker("./sender.worker.js")),
      (lt.current = new Worker("./receiver.worker.js"));
    const j = { windowSize: vf, totalPackets: gf, timeoutDuration: oh };
    return (
      V.current.postMessage({ type: "INIT", payload: j }),
      lt.current.postMessage({ type: "INIT" }),
      (V.current.onmessage = (J) => {
        const {
          type: k,
          packet: Q,
          message: r,
          base: _,
          windowBase: R,
          nextseqnum: w,
          timeLeft: f,
        } = J.data;
        r && x(r),
          k === "STATE_UPDATE" && (q(_), B(R), W(w)),
          k === "SEND_PACKET" && ft(Q),
          k === "TIMER_TICK" && (it(f), St(_), I(!1)),
          k === "TIMER_STOP" && (it(null), St(null), I(!1)),
          k === "TIMEOUT_EVENT" && (it("TIMEOUT!"), I(!0));
      }),
      (lt.current.onmessage = (J) => {
        const { type: k, ack: Q, message: r } = J.data;
        r && x(r), k === "SEND_ACK" && _t(Q);
      }),
      () => {
        V.current.terminate(), lt.current.terminate();
      }
    );
  }, []);
  const ft = (j) => {
      const k = !H.current.find((r) => r.id === j.seq).packetWillSucceed,
        Q = `${j.seq}-${Date.now()}`;
      p((r) => r.map((_) => (_.id === j.seq ? { ..._, status: "sent" } : _))),
        x(`(Network): Sending Packet ${j.seq}...`),
        K((r) => [
          ...r,
          {
            key: Q,
            type: "packet",
            seq: j.seq,
            status: k ? "lost" : "in-flight",
            y: 50 + (r.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          k
            ? x(`(Network): 🔴 Packet ${j.seq} was lost (manual setting)!`)
            : lt.current.postMessage({ type: "RECEIVE_PACKET", packet: j }),
            K((r) => r.filter((_) => _.key !== Q));
        }, _d);
    },
    _t = (j) => {
      const k = !H.current.find((r) => r.id === j).ackWillSucceed,
        Q = `ack-${j}-${Date.now()}`;
      x(`(Network): Sending ACK ${j}...`),
        K((r) => [
          ...r,
          {
            key: Q,
            type: "ack",
            seq: j,
            status: k ? "lost" : "in-flight",
            y: 50 + (r.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          k
            ? x(`(Network): 🔴 ACK ${j} was lost (manual setting)!`)
            : (x(`(Sender): 🟢 ACK ${j} received successfully.`),
              p((r) =>
                r.map((_) => (_.id <= j ? { ..._, status: "acked" } : _))
              ),
              V.current.postMessage({
                type: "RECEIVE_ACK",
                payload: { ack: j },
              })),
            K((r) => r.filter((_) => _.key !== Q));
        }, _d);
    },
    Rt = () => {
      if (mt) {
        x("🔴 A timeout has occurred. Please use 'Resend Window' to recover.");
        return;
      }
      V.current.postMessage({ type: "SEND_WINDOW" });
    },
    Vt = () => {
      if (E === at) {
        x("🔴 Cannot move window as it is already at the base.");
        return;
      }
      V.current.postMessage({ type: "MOVE_WINDOW" });
    },
    Ut = () => {
      if (!mt) {
        x("🔴 Please wait for the timeout to occur before resending.");
        return;
      }
      if (E !== at) {
        x("🔴 Please move the window before resending.");
        return;
      }
      V.current.postMessage({ type: "RESEND_WINDOW" }), I(!1);
    };
  return h.jsxs("div", {
    className: "app-container",
    children: [
      h.jsx(Uu, { timerValue: Et, timerForPacket: rt }),
      h.jsx(pu, { onSend: Rt, onResend: Ut, onMoveWindow: Vt }),
      h.jsxs("main", {
        className: "main-content",
        children: [
          h.jsx(zu, { packets: b, base: E, windowSize: vf, onToggle: Nt }),
          h.jsx(Qe, { messages: y }),
        ],
      }),
      h.jsx(we, { packetsInFlight: U }),
    ],
  });
}
const Tf = 10,
  Ud = 1,
  hh = 7e3,
  Md = 1500,
  vh = Tf + Ud,
  mh = Array.from({ length: vh }, (b, p) => ({
    id: p,
    status: "unsent",
    packetWillSucceed: !0,
    ackWillSucceed: !0,
    isDummy: p >= Tf,
  }));
function Sh() {
  const [b, p] = D.useState(mh),
    H = D.useRef(b),
    [y, C] = D.useState([]),
    [U, K] = D.useState([]),
    [at, q] = D.useState(0),
    [E, B] = D.useState(0),
    [tt, W] = D.useState(0),
    [Et, it] = D.useState(null),
    [mt, I] = D.useState(!1),
    [rt, St] = D.useState(null),
    V = D.useRef(null),
    lt = D.useRef(null);
  D.useEffect(() => {
    H.current = b;
  }, [b]);
  const x = (j) => C((J) => [...J, j]),
    Nt = (j, J) => {
      p((k) => k.map((Q) => (Q.id === j ? { ...Q, [J]: !Q[J] } : Q)));
    };
  D.useEffect(() => {
    (V.current = new Worker("./sw_sender.worker.js")),
      (lt.current = new Worker("./sw_receiver.worker.js"));
    const j = { totalPackets: Tf, timeoutDuration: hh };
    return (
      V.current.postMessage({ type: "INIT", payload: j }),
      lt.current.postMessage({ type: "INIT" }),
      (V.current.onmessage = (J) => {
        const {
          type: k,
          packet: Q,
          message: r,
          base: _,
          windowBase: R,
          nextseqnum: w,
          timeLeft: f,
        } = J.data;
        r && x(r),
          k === "STATE_UPDATE" && (q(_), B(R), W(w)),
          k === "SEND_PACKET" && ft(Q),
          k === "TIMER_TICK" && (it(f), St(_), I(!1)),
          k === "TIMER_STOP" && (it(null), St(null), I(!1)),
          k === "TIMEOUT_EVENT" && (it("TIMEOUT!"), I(!0));
      }),
      (lt.current.onmessage = (J) => {
        const { type: k, ack: Q, message: r } = J.data;
        r && x(r), k === "SEND_ACK" && _t(Q);
      }),
      () => {
        V.current.terminate(), lt.current.terminate();
      }
    );
  }, []);
  const ft = (j) => {
      const k = !H.current.find((r) => r.id === j.seq).packetWillSucceed,
        Q = `${j.seq}-${Date.now()}`;
      p((r) => r.map((_) => (_.id === j.seq ? { ..._, status: "sent" } : _))),
        x(`(Network): Sending Packet ${j.seq}...`),
        K((r) => [
          ...r,
          {
            key: Q,
            type: "packet",
            seq: j.seq,
            status: k ? "lost" : "in-flight",
            y: 50 + (r.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          k
            ? x(`(Network): 🔴 Packet ${j.seq} was lost (manual setting)!`)
            : lt.current.postMessage({ type: "RECEIVE_PACKET", packet: j }),
            K((r) => r.filter((_) => _.key !== Q));
        }, Md);
    },
    _t = (j) => {
      const k = !H.current.find((r) => r.id === j).ackWillSucceed,
        Q = `ack-${j}-${Date.now()}`;
      x(`(Network): Sending ACK ${j}...`),
        K((r) => [
          ...r,
          {
            key: Q,
            type: "ack",
            seq: j,
            status: k ? "lost" : "in-flight",
            y: 50 + (r.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          k
            ? x(`(Network): 🔴 ACK ${j} was lost (manual setting)!`)
            : (x(`(Sender): 🟢 ACK ${j} received successfully.`),
              p((r) =>
                r.map((_) => (_.id <= j ? { ..._, status: "acked" } : _))
              ),
              V.current.postMessage({
                type: "RECEIVE_ACK",
                payload: { ack: j },
              })),
            K((r) => r.filter((_) => _.key !== Q));
        }, Md);
    },
    Rt = () => {
      if (mt) {
        x("🔴 A timeout has occurred. Please use 'Resend Packet' to recover.");
        return;
      }
      if (E !== at) {
        x("🔴 Please move the window before sending the next packet.");
        return;
      }
      V.current.postMessage({ type: "SEND_PACKET" });
    },
    Vt = () => {
      if (!mt) {
        x("🔴 Please wait for the timeout to occur before resending.");
        return;
      }
      V.current.postMessage({ type: "RESEND_PACKET" }), I(!1);
    },
    Ut = () => {
      if (E === at) {
        x("🔴 Cannot move window as it is already at the base.");
        return;
      }
      V.current.postMessage({ type: "MOVE_WINDOW" });
    };
  return h.jsxs("div", {
    className: "app-container",
    children: [
      h.jsx(Uu, { timerValue: Et, timerForPacket: rt }),
      h.jsx(pu, {
        onSend: Rt,
        onResend: Vt,
        onMoveWindow: Ut,
        isStopAndWait: !0,
      }),
      h.jsxs("main", {
        className: "main-content",
        children: [
          h.jsx(zu, { packets: b, base: E, windowSize: Ud, onToggle: Nt }),
          h.jsx(Qe, { messages: y }),
        ],
      }),
      h.jsx(we, { packetsInFlight: U }),
    ],
  });
}
const hf = 1500;
function xd({ onHandshakeComplete: b }) {
  const [p, H] = D.useState([]),
    [y, C] = D.useState([]),
    [U, K] = D.useState(1),
    [at, q] = D.useState(0),
    [E, B] = D.useState(!1),
    tt = (I) => H((rt) => [...rt, I]),
    W = () => {
      if ((U & 1) === 0) {
        tt("🔴 Client cannot send SYN in its current state.");
        return;
      }
      const I = `syn-${Date.now()}`;
      tt("(Client): Sending SYN..."),
        C((rt) => [
          ...rt,
          { key: I, type: "packet", seq: "SYN", y: 50, status: "in-flight" },
        ]),
        setTimeout(() => {
          K(U & -2),
            tt("(Server): Received SYN."),
            q(at | 1),
            C((rt) => rt.filter((St) => St.key !== I));
        }, hf);
    },
    Et = () => {
      if ((at & 1) === 0) {
        tt("🔴 Server cannot send SYN-ACK in its current state.");
        return;
      }
      const I = `syn-ack-${Date.now()}`;
      tt("(Server): Sending SYN-ACK..."),
        C((rt) => [
          ...rt,
          { key: I, type: "ack", seq: "SYN-ACK", y: 100, status: "in-flight" },
        ]),
        setTimeout(() => {
          q(at & -2),
            tt("(Client): Received SYN-ACK."),
            K(U | 2),
            C((rt) => rt.filter((St) => St.key !== I));
        }, hf);
    },
    it = () => {
      if ((U & 2) === 0 || E) {
        tt("🔴 Client cannot send final ACK in its current state.");
        return;
      }
      const I = `ack-${Date.now()}`;
      tt("(Client): Sending final ACK..."),
        C((rt) => [
          ...rt,
          { key: I, type: "packet", seq: "ACK", y: 50, status: "in-flight" },
        ]),
        B(!0),
        setTimeout(() => {
          tt("(Server): ⭐️ Received ACK. Connection Established!"),
            q(at | 2),
            b && b(),
            C((rt) => rt.filter((St) => St.key !== I));
        }, hf);
    },
    mt = (I) => {
      const rt = I & 2 ? "ESTABLISHED" : "CLOSED";
      return h.jsx("span", {
        className: `status-badge ${rt.toLowerCase()}`,
        children: rt,
      });
    };
  return h.jsxs("div", {
    className: "app-container",
    children: [
      h.jsxs("div", {
        className: "handshake-container",
        children: [
          h.jsxs("div", {
            className: "entity-container",
            children: [
              h.jsx("h2", { children: "Client" }),
              h.jsx("p", { children: mt(U) }),
              h.jsx("button", { onClick: W, children: "Send SYN" }),
              h.jsx("button", { onClick: it, children: "Send Final ACK" }),
            ],
          }),
          h.jsxs("div", {
            className: "entity-container",
            children: [
              h.jsx("h2", { children: "Server" }),
              h.jsx("p", { children: mt(at) }),
              h.jsx("button", { onClick: Et, children: "Send SYN-ACK" }),
            ],
          }),
        ],
      }),
      h.jsx("main", {
        className: "main-content",
        children: h.jsx(Qe, { messages: p }),
      }),
      h.jsx(we, { packetsInFlight: y }),
    ],
  });
}
const Ef = 10,
  Cd = 1,
  gh = 7e3,
  Od = 1500,
  Th = Ef + Cd,
  Eh = Array.from({ length: Th }, (b, p) => ({
    id: p,
    status: "unsent",
    packetWillSucceed: !0,
    ackWillSucceed: !0,
    isDummy: p >= Ef,
  }));
function Ah() {
  const [b, p] = D.useState(Eh),
    H = D.useRef(b),
    [y, C] = D.useState([]),
    [U, K] = D.useState([]),
    [at, q] = D.useState(0),
    [E, B] = D.useState(0),
    [tt, W] = D.useState(1),
    [Et, it] = D.useState(0),
    [mt, I] = D.useState(null),
    [rt, St] = D.useState(Cd),
    [V, lt] = D.useState(1),
    [x, Nt] = D.useState(0),
    ft = D.useRef(null),
    _t = D.useRef(null);
  D.useEffect(() => {
    H.current = b;
  }, [b]);
  const Rt = (R) => C((w) => [...w, R]),
    Vt = (R, w) => {
      p((f) => f.map((T) => (T.id === R ? { ...T, [w]: !T[w] } : T)));
    };
  D.useEffect(() => {
    (ft.current = new Worker("./slow_start_sender.worker.js")),
      (_t.current = new Worker("./receiver.worker.js"));
    const R = {
      totalPackets: Ef,
      timeoutDuration: gh,
      senderBase: at,
      windowBase: E,
      windowSize: rt,
      requiredWindowSize: tt,
      nextseqnum: Et,
      acksReceivedForCurrentWindow: x,
    };
    return (
      ft.current.postMessage({ type: "INIT", payload: R }),
      _t.current.postMessage({ type: "INIT" }),
      (ft.current.onmessage = (w) => {
        const {
          type: f,
          packet: T,
          message: O,
          base: z,
          windowBase: Z,
          nextseqnum: X,
          timeLeft: Y,
          newWindowSize: ut,
          newCongestionWindow: et,
          newRequiredWindowSize: nt,
          newAcksReceivedForCurrentWindow: Tt,
        } = w.data;
        O && Rt(O),
          f === "STATE_UPDATE" &&
            (Tt !== void 0 && Nt(Tt),
            z !== void 0 && q(z),
            Z !== void 0 && B(Z),
            X !== void 0 && it(X),
            nt && W(nt),
            ut && St(ut),
            et && lt(et)),
          f === "SEND_PACKET" && Ut(T),
          f === "TIMER_TICK" && I(Y),
          f === "TIMER_STOP" && I(null),
          f === "TIMEOUT_EVENT" && I("TIMEOUT!");
      }),
      (_t.current.onmessage = (w) => {
        const { type: f, ack: T, message: O } = w.data;
        O && Rt(O), f === "SEND_ACK" && j(T);
      }),
      () => {
        ft.current.terminate(), _t.current.terminate();
      }
    );
  }, []);
  const Ut = (R) => {
      const f = !H.current.find((O) => O.id === R.seq).packetWillSucceed,
        T = `${R.seq}-${Date.now()}`;
      p((O) => O.map((z) => (z.id === R.seq ? { ...z, status: "sent" } : z))),
        Rt(`(Network): Sending Packet ${R.seq}...`),
        K((O) => [
          ...O,
          {
            key: T,
            type: "packet",
            seq: R.seq,
            status: f ? "lost" : "in-flight",
            y: 50 + (O.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          f
            ? Rt(`(Network): 🔴 Packet ${R.seq} was lost (manual setting)!`)
            : _t.current.postMessage({ type: "RECEIVE_PACKET", packet: R }),
            K((O) => O.filter((z) => z.key !== T));
        }, Od);
    },
    j = (R) => {
      const f = !H.current.find((O) => O.id === R).ackWillSucceed,
        T = `ack-${R}-${Date.now()}`;
      Rt(`(Network): Sending ACK ${R}...`),
        K((O) => [
          ...O,
          {
            key: T,
            type: "ack",
            seq: R,
            status: f ? "lost" : "in-flight",
            y: 50 + (O.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          f
            ? Rt(`(Network): 🔴 ACK ${R} was lost (manual setting)!`)
            : (Rt(`(Sender): 🟢 ACK ${R} received successfully.`),
              p((O) =>
                O.map((z) => (z.id <= R ? { ...z, status: "acked" } : z))
              ),
              ft.current.postMessage({
                type: "RECEIVE_ACK",
                payload: { ack: R },
              })),
            K((O) => O.filter((z) => z.key !== T));
        }, Od);
    },
    J = () => {
      ft.current.postMessage({ type: "SEND_WINDOW" });
    },
    k = () => {
      ft.current.postMessage({ type: "MOVE_WINDOW" });
    },
    Q = () => {
      ft.current.postMessage({ type: "RESEND_WINDOW" });
    },
    r = () => {
      ft.current.postMessage({ type: "INCREASE_WINDOW_MANUAL" });
    },
    _ = () => {
      ft.current.postMessage({ type: "DECREASE_WINDOW_MANUAL" });
    };
  return h.jsxs("div", {
    className: "app-container",
    children: [
      h.jsx(Uu, { timerValue: mt }),
      h.jsx(pu, {
        onSend: J,
        onResend: Q,
        onMoveWindow: k,
        onIncreaseWindow: r,
        onDecreaseWindow: _,
      }),
      h.jsxs("main", {
        className: "main-content",
        children: [
          h.jsx(zu, { packets: b, base: E, windowSize: rt, onToggle: Vt }),
          h.jsx(Qe, { messages: y }),
        ],
      }),
      h.jsx(we, { packetsInFlight: U }),
    ],
  });
}
const Af = 10,
  Wn = 4,
  bh = 7e3,
  Dd = 1500,
  Nh = Af + Wn,
  _h = Array.from({ length: Nh }, (b, p) => ({
    id: p,
    status: "unsent",
    packetWillSucceed: !0,
    ackWillSucceed: !0,
    isDummy: p >= Af,
  }));
function Mh() {
  const [b, p] = D.useState(_h),
    H = D.useRef(b),
    [y, C] = D.useState([]),
    [U, K] = D.useState([]),
    [at, q] = D.useState(0),
    [E, B] = D.useState(0),
    [tt, W] = D.useState(0),
    [Et, it] = D.useState(null),
    [mt, I] = D.useState(Wn),
    [rt, St] = D.useState(Wn),
    [V, lt] = D.useState(Wn),
    x = D.useRef(null),
    Nt = D.useRef(null);
  D.useEffect(() => {
    H.current = b;
  }, [b]);
  const ft = (r) => C((_) => [..._, r]),
    _t = (r, _) => {
      p((R) => R.map((w) => (w.id === r ? { ...w, [_]: !w[_] } : w)));
    };
  D.useEffect(() => {
    (x.current = new Worker("./aimd_sender.worker.js")),
      (Nt.current = new Worker("./receiver.worker.js"));
    const r = {
      totalPackets: Af,
      timeoutDuration: bh,
      senderBase: at,
      windowBase: E,
      windowSize: mt,
      requiredWindowSize: V,
      nextseqnum: tt,
    };
    return (
      x.current.postMessage({ type: "INIT", payload: r }),
      Nt.current.postMessage({ type: "INIT" }),
      (x.current.onmessage = (_) => {
        const {
          type: R,
          packet: w,
          message: f,
          base: T,
          windowBase: O,
          nextseqnum: z,
          timeLeft: Z,
          newWindowSize: X,
          newCongestionWindow: Y,
          newRequiredWindowSize: ut,
        } = _.data;
        f && ft(f),
          R === "STATE_UPDATE" &&
            (T !== void 0 && q(T),
            O !== void 0 && B(O),
            z !== void 0 && W(z),
            ut !== void 0 && lt(ut),
            X && I(X),
            Y && St(Y)),
          R === "SEND_PACKET" && Rt(w),
          R === "TIMER_TICK" && it(Z),
          R === "TIMER_STOP" && it(null),
          R === "TIMEOUT_EVENT" && it("TIMEOUT!");
      }),
      (Nt.current.onmessage = (_) => {
        const { type: R, ack: w, message: f } = _.data;
        f && ft(f), R === "SEND_ACK" && Vt(w);
      }),
      () => {
        x.current.terminate(), Nt.current.terminate();
      }
    );
  }, []);
  const Rt = (r) => {
      const R = !H.current.find((f) => f.id === r.seq).packetWillSucceed,
        w = `${r.seq}-${Date.now()}`;
      p((f) => f.map((T) => (T.id === r.seq ? { ...T, status: "sent" } : T))),
        ft(`(Network): Sending Packet ${r.seq}...`),
        K((f) => [
          ...f,
          {
            key: w,
            type: "packet",
            seq: r.seq,
            status: R ? "lost" : "in-flight",
            y: 50 + (f.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          R
            ? ft(`(Network): 🔴 Packet ${r.seq} was lost (manual setting)!`)
            : Nt.current.postMessage({ type: "RECEIVE_PACKET", packet: r }),
            K((f) => f.filter((T) => T.key !== w));
        }, Dd);
    },
    Vt = (r) => {
      const R = !H.current.find((f) => f.id === r).ackWillSucceed,
        w = `ack-${r}-${Date.now()}`;
      ft(`(Network): Sending ACK ${r}...`),
        K((f) => [
          ...f,
          {
            key: w,
            type: "ack",
            seq: r,
            status: R ? "lost" : "in-flight",
            y: 50 + (f.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          R
            ? ft(`(Network): 🔴 ACK ${r} was lost (manual setting)!`)
            : (ft(`(Sender): 🟢 ACK ${r} received successfully.`),
              p((f) =>
                f.map((T) => (T.id <= r ? { ...T, status: "acked" } : T))
              ),
              x.current.postMessage({
                type: "RECEIVE_ACK",
                payload: { ack: r },
              })),
            K((f) => f.filter((T) => T.key !== w));
        }, Dd);
    },
    Ut = () => {
      x.current.postMessage({ type: "SEND_WINDOW" });
    },
    j = () => {
      x.current.postMessage({ type: "MOVE_WINDOW" });
    },
    J = () => {
      x.current.postMessage({ type: "RESEND_WINDOW" });
    },
    k = () => {
      x.current.postMessage({ type: "INCREASE_WINDOW_MANUAL" });
    },
    Q = () => {
      x.current.postMessage({ type: "DECREASE_WINDOW_MANUAL" });
    };
  return h.jsxs("div", {
    className: "app-container",
    children: [
      h.jsx(Uu, { timerValue: Et }),
      h.jsx(pu, {
        onSend: Ut,
        onResend: J,
        onMoveWindow: j,
        onIncreaseWindow: k,
        onDecreaseWindow: Q,
      }),
      h.jsxs("main", {
        className: "main-content",
        children: [
          h.jsx(zu, { packets: b, base: E, windowSize: mt, onToggle: _t }),
          h.jsx(Qe, { messages: y }),
        ],
      }),
      h.jsx(we, { packetsInFlight: U }),
    ],
  });
}
const kn = 1500;
function qd() {
  const [b, p] = D.useState([]),
    [H, y] = D.useState([]),
    [C, U] = D.useState(1),
    [K, at] = D.useState(1),
    [q, E] = D.useState("ESTABLISHED"),
    [B, tt] = D.useState("ESTABLISHED"),
    W = (V) => p((lt) => [...lt, V]),
    Et = () => {
      if (!(K & 1)) {
        W("🔴 Server cannot send FIN in its current state.");
        return;
      }
      const V = `fin-server-${Date.now()}`;
      W("(Server): Sending FIN..."),
        y((lt) => [
          ...lt,
          { key: V, type: "ack", seq: "FIN", y: 100, status: "in-flight" },
        ]),
        setTimeout(() => {
          at(K ^ 1),
            W("(Client): Received FIN."),
            U(C | 2),
            y((lt) => lt.filter((x) => x.key !== V));
        }, kn);
    },
    it = () => {
      if (!(C & 1)) {
        W("🔴 Client cannot send FIN in its current state.");
        return;
      }
      const V = `fin-client-${Date.now()}`;
      W("(Client): Sending FIN..."),
        y((lt) => [
          ...lt,
          { key: V, type: "packet", seq: "FIN", y: 50, status: "in-flight" },
        ]),
        setTimeout(() => {
          U(C ^ 1),
            W("(Server): Received FIN."),
            at(K | 2),
            y((lt) => lt.filter((x) => x.key !== V));
        }, kn);
    },
    mt = () => {
      if (!(C & 2)) {
        W("🔴 Client cannot send ACK in its current state.");
        return;
      }
      const V = `ack-client-${Date.now()}`;
      W("(Client): Sending ACK..."),
        y((lt) => [
          ...lt,
          { key: V, type: "packet", seq: "ACK", y: 50, status: "in-flight" },
        ]),
        setTimeout(() => {
          U(C ^ 2),
            W("(Server): Received ACK."),
            y((lt) => lt.filter((x) => x.key !== V));
        }, kn);
    },
    I = () => {
      if (!(K & 2)) {
        W("🔴 Server cannot send ACK in its current state.");
        return;
      }
      const V = `ack-server-${Date.now()}`;
      W("(Server): Sending ACK..."),
        y((lt) => [
          ...lt,
          { key: V, type: "ack", seq: "ACK", y: 100, status: "in-flight" },
        ]),
        setTimeout(() => {
          at(K ^ 2),
            W("(Client): Received ACK."),
            y((lt) => lt.filter((x) => x.key !== V));
        }, kn);
    };
  let rt = D.useRef(!0);
  D.useEffect(() => {
    rt.current &&
      K === 0 &&
      C === 0 &&
      ((rt.current = !1),
      E("CLOSED"),
      tt("CLOSED"),
      W(
        "(Client): ⭐️ Both Server and Client received ACK. Connection Closed!"
      ));
  }, [K, C]);
  const St = (V) =>
    h.jsx("span", {
      className: `status-badge ${V.toLowerCase()}`,
      children: V.replace("_", "-"),
    });
  return h.jsxs("div", {
    className: "app-container",
    children: [
      h.jsxs("div", {
        className: "handshake-container",
        children: [
          h.jsxs("div", {
            className: "entity-container",
            children: [
              h.jsx("h2", { children: "Client" }),
              h.jsx("p", { children: St(q) }),
              h.jsx("button", { onClick: it, children: "Send FIN" }),
              h.jsx("button", { onClick: mt, children: "Send ACK" }),
            ],
          }),
          h.jsxs("div", {
            className: "entity-container",
            children: [
              h.jsx("h2", { children: "Server" }),
              h.jsx("p", { children: St(B) }),
              h.jsx("button", { onClick: I, children: "Send ACK" }),
              h.jsx("button", { onClick: Et, children: "Send FIN" }),
            ],
          }),
        ],
      }),
      h.jsx("main", {
        className: "main-content",
        children: h.jsx(Qe, { messages: b }),
      }),
      h.jsx(we, { packetsInFlight: H }),
    ],
  });
}
const Jn = 20,
  mf = 1,
  Rd = 7e3,
  zd = 1500,
  pd = 4,
  Oh = Jn + mf,
  Dh = Array.from({ length: Oh }, (b, p) => ({
    id: p,
    status: "unsent",
    packetWillSucceed: !0,
    ackWillSucceed: !0,
    isDummy: p >= Jn,
  }));
function Rh() {
  const [b, p] = D.useState(Dh),
    H = D.useRef(b),
    [y, C] = D.useState([]),
    [U, K] = D.useState([]),
    [at, q] = D.useState(0),
    [E, B] = D.useState(0),
    [tt, W] = D.useState(0),
    [Et, it] = D.useState(null),
    [mt, I] = D.useState(mf),
    [rt, St] = D.useState(1),
    [V, lt] = D.useState(pd),
    [x, Nt] = D.useState(mf),
    [ft, _t] = D.useState(0),
    [Rt, Vt] = D.useState(0),
    [Ut, j] = D.useState("handshake"),
    J = D.useRef(null),
    k = D.useRef(null);
  D.useEffect(() => {
    H.current = b;
  }, [b]);
  const Q = (X) => C((Y) => [...Y, X]),
    r = (X, Y) => {
      p((ut) => ut.map((et) => (et.id === X ? { ...et, [Y]: !et[Y] } : et)));
    };
  D.useEffect(() => {
    if (Ut === "slow_start" && !J.current) {
      (J.current = new Worker("./slow_start_sender.worker.js")),
        (k.current = new Worker("./receiver.worker.js"));
      const X = {
        totalPackets: Jn,
        timeoutDuration: Rd,
        ssthresh: pd,
        senderBase: at,
        windowBase: E,
        nextseqnum: tt,
        windowSize: mt,
        requiredWindowSize: x,
        acksReceivedForCurrentWindow: ft,
      };
      J.current.postMessage({ type: "INIT", payload: X }),
        k.current.postMessage({
          type: "INIT",
          payload: { expectedseqnum: Rt },
        }),
        (J.current.onmessage = (Y) => {
          const {
            type: ut,
            packet: et,
            message: nt,
            base: Tt,
            windowBase: Dl,
            nextseqnum: Cl,
            timeLeft: Ae,
            newWindowSize: ql,
            newCongestionWindow: be,
            newSlowStartThreshold: Ne,
            newPhase: $t,
            newRequiredWindowSize: $l,
            newAcksReceivedForCurrentWindow: za,
          } = Y.data;
          nt && Q(nt),
            ut === "STATE_UPDATE" &&
              (za !== void 0 && _t(za),
              Tt !== void 0 && q(Tt),
              Dl !== void 0 && B(Dl),
              $l !== void 0 && Nt($l),
              Cl !== void 0 && W(Cl),
              ql && I(ql),
              be && St(be),
              Ne && lt(Ne),
              $t && j($t)),
            ut === "SEND_PACKET" && R(et),
            ut === "TIMER_TICK" && it(Ae),
            ut === "TIMER_STOP" && it(null),
            ut === "TIMEOUT_EVENT" && it("TIMEOUT!");
        }),
        (k.current.onmessage = (Y) => {
          const {
            type: ut,
            ack: et,
            message: nt,
            newExpectedSeqNum: Tt,
          } = Y.data;
          nt && Q(nt),
            ut === "SEND_ACK" && w(et),
            ut === "STATE_UPDATE" && Tt !== void 0 && Vt(Tt);
        });
    }
    if (Ut === "aimd" && !J.current) {
      (J.current = new Worker("./aimd_sender.worker.js")),
        (k.current = new Worker("./receiver.worker.js"));
      const X = {
        totalPackets: Jn,
        timeoutDuration: Rd,
        senderBase: at,
        windowBase: E,
        nextseqnum: tt,
        windowSize: mt,
        requiredWindowSize: x,
        acksReceivedForCurrentWindow: ft,
      };
      J.current.postMessage({ type: "INIT", payload: X }),
        k.current.postMessage({
          type: "INIT",
          payload: { expectedseqnum: Rt },
        }),
        (J.current.onmessage = (Y) => {
          const {
            type: ut,
            packet: et,
            message: nt,
            base: Tt,
            windowBase: Dl,
            nextseqnum: Cl,
            timeLeft: Ae,
            newWindowSize: ql,
            newCongestionWindow: be,
            newRequiredWindowSize: Ne,
            newAcksReceivedForCurrentWindow: $t,
            newPhase: $l,
          } = Y.data;
          nt && Q(nt),
            ut === "STATE_UPDATE" &&
              ($t !== void 0 && _t($t),
              Tt !== void 0 && q(Tt),
              Dl !== void 0 && B(Dl),
              Ne !== void 0 && Nt(Ne),
              Cl !== void 0 && W(Cl),
              ql && I(ql),
              be && St(be),
              $l &&
                $l !== Ut &&
                (alert("AIMD Phase Complete! Starting TCP Closure."), j($l))),
            ut === "SEND_PACKET" && R(et),
            ut === "TIMER_TICK" && it(Ae),
            ut === "TIMER_STOP" && it(null),
            ut === "TIMEOUT_EVENT" && it("TIMEOUT!");
        }),
        (k.current.onmessage = (Y) => {
          const {
            type: ut,
            ack: et,
            message: nt,
            newExpectedSeqNum: Tt,
          } = Y.data;
          nt && Q(nt),
            ut === "SEND_ACK" && w(et),
            ut === "STATE_UPDATE" && Tt !== void 0 && Vt(Tt);
        });
    }
    return () => {
      J.current && (J.current.terminate(), (J.current = null)),
        k.current && (k.current.terminate(), (k.current = null));
    };
  }, [Ut]);
  const _ = () => {
      alert("TCP Handshake Complete! Starting Slow Start Phase."),
        Q("➡️ TCP Handshake Complete. Starting Slow Start."),
        j("slow_start");
    },
    R = (X) => {
      const Y = H.current.find((nt) => nt.id === X.seq),
        ut = Y ? !Y.packetWillSucceed : !1,
        et = `${X.seq}-${Date.now()}`;
      p((nt) =>
        nt.map((Tt) => (Tt.id === X.seq ? { ...Tt, status: "sent" } : Tt))
      ),
        Q(`(Network): Sending Packet ${X.seq}...`),
        K((nt) => [
          ...nt,
          {
            key: et,
            type: "packet",
            seq: X.seq,
            status: ut ? "lost" : "in-flight",
            y: 50 + (nt.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          ut
            ? Q(`(Network): 🔴 Packet ${X.seq} was lost (manual setting)!`)
            : k.current.postMessage({ type: "RECEIVE_PACKET", packet: X }),
            K((nt) => nt.filter((Tt) => Tt.key !== et));
        }, zd);
    },
    w = (X) => {
      const Y = H.current.find((nt) => nt.id === X),
        ut = Y ? !Y.ackWillSucceed : !1,
        et = `ack-${X}-${Date.now()}`;
      Q(`(Network): Sending ACK ${X}...`),
        K((nt) => [
          ...nt,
          {
            key: et,
            type: "ack",
            seq: X,
            status: ut ? "lost" : "in-flight",
            y: 50 + (nt.length % 4) * 30,
          },
        ]),
        setTimeout(() => {
          ut
            ? Q(`(Network): 🔴 ACK ${X} was lost (manual setting)!`)
            : (Q(`(Sender): 🟢 ACK ${X} received successfully.`),
              p((nt) =>
                nt.map((Tt) => (Tt.id <= X ? { ...Tt, status: "acked" } : Tt))
              ),
              J.current.postMessage({
                type: "RECEIVE_ACK",
                payload: { ack: X },
              })),
            K((nt) => nt.filter((Tt) => Tt.key !== et));
        }, zd);
    },
    f = () => {
      J.current.postMessage({ type: "SEND_WINDOW" });
    },
    T = () => {
      J.current.postMessage({ type: "MOVE_WINDOW" });
    },
    O = () => {
      J.current.postMessage({ type: "RESEND_WINDOW" });
    },
    z = () => {
      J.current.postMessage({ type: "INCREASE_WINDOW_MANUAL" });
    },
    Z = () => {
      J.current.postMessage({ type: "DECREASE_WINDOW_MANUAL" });
    };
  return Ut === "handshake"
    ? h.jsx(xd, { onHandshakeComplete: _ })
    : Ut === "closure"
    ? h.jsx(qd, {})
    : h.jsxs("div", {
        className: "app-container",
        children: [
          h.jsxs("header", {
            children: [
              h.jsx("h1", { children: "Complete TCP Simulator" }),
              h.jsxs("h2", {
                children: [
                  "Current Phase: ",
                  h.jsx("span", {
                    className: "phase-display",
                    children: Ut.replace("_", " "),
                  }),
                ],
              }),
            ],
          }),
          h.jsx(Uu, {
            windowBase: E,
            base: at,
            nextseqnum: tt,
            timerValue: Et,
            congestionWindow: rt,
            requiredWindowSize: x,
          }),
          h.jsx(pu, {
            onSend: f,
            onResend: O,
            onMoveWindow: T,
            onIncreaseWindow: z,
            onDecreaseWindow: Z,
          }),
          h.jsxs("main", {
            className: "main-content",
            children: [
              h.jsx(zu, { packets: b, base: E, windowSize: mt, onToggle: r }),
              h.jsx(Qe, { messages: y }),
            ],
          }),
          h.jsx(we, { packetsInFlight: U }),
        ],
      });
}
const zh = ({ setProtocol: b, title: p }) => {
    const [H, y] = D.useState(!1),
      C = (U) => {
        b(U), y(!1);
      };
    return h.jsxs("nav", {
      className: "navbar",
      children: [
        h.jsxs("button", {
          className: "hamburger-menu",
          onClick: () => y(!H),
          "aria-label": "Toggle navigation",
          children: [
            h.jsx("span", { className: "hamburger-bar" }),
            h.jsx("span", { className: "hamburger-bar" }),
            h.jsx("span", { className: "hamburger-bar" }),
          ],
        }),
        p && h.jsx("h2", { className: "navbar-title", children: p }),
        h.jsxs("div", {
          className: `navbar-links ${H ? "open" : ""}`,
          children: [
            h.jsx("button", {
              onClick: () => C("handshake"),
              children: "3-Way Handshake",
            }),
            h.jsx("button", {
              onClick: () => C("sw"),
              children: "Stop-and-Wait",
            }),
            h.jsx("button", { onClick: () => C("gbn"), children: "Go-Back-N" }),
            h.jsx("button", {
              onClick: () => C("slow_start"),
              children: "Slow Start",
            }),
            h.jsx("button", { onClick: () => C("aimd"), children: "AIMD" }),
            h.jsx("button", {
              onClick: () => C("closure"),
              children: "TCP Closure",
            }),
            h.jsx("button", {
              onClick: () => C("tcp"),
              children: "Complete TCP",
            }),
          ],
        }),
      ],
    });
  },
  ph = {
    handshake: "3-Way Handshake Simulator (Manual)",
    sw: "Stop-and-Wait Protocol Simulator",
    gbn: "Go-Back-N Protocol Simulator",
    slow_start: "Slow Start Simulator",
    aimd: "AIMD Simulator",
    closure: "TCP Closure Simulator (4-Way Handshake)",
    tcp: "Complete TCP Simulator",
  };
function Uh() {
  const [b, p] = D.useState("handshake");
  return h.jsxs("div", {
    children: [
      h.jsx(zh, { setProtocol: p, title: ph[b] }),
      b === "handshake" && h.jsx(xd, {}),
      b === "sw" && h.jsx(Sh, {}),
      b === "gbn" && h.jsx(yh, {}),
      b === "slow_start" && h.jsx(Ah, {}),
      b === "aimd" && h.jsx(Mh, {}),
      b === "closure" && h.jsx(qd, {}),
      b === "tcp" && h.jsx(Rh, {}),
    ],
  });
}
sh.createRoot(document.getElementById("root")).render(
  h.jsx(D.StrictMode, { children: h.jsx(Uh, {}) })
);
