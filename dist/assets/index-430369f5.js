function fp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l)
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(l) {
    const o = {}
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(l) {
    if (l.ep) return
    l.ep = !0
    const o = n(l)
    fetch(l.href, o)
  }
})()
function pp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var a = {},
  hp = {
    get exports() {
      return a
    },
    set exports(e) {
      a = e
    },
  },
  ho = {},
  k = {},
  mp = {
    get exports() {
      return k
    },
    set exports(e) {
      k = e
    },
  },
  W = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kr = Symbol.for('react.element'),
  gp = Symbol.for('react.portal'),
  vp = Symbol.for('react.fragment'),
  yp = Symbol.for('react.strict_mode'),
  xp = Symbol.for('react.profiler'),
  wp = Symbol.for('react.provider'),
  Sp = Symbol.for('react.context'),
  kp = Symbol.for('react.forward_ref'),
  jp = Symbol.for('react.suspense'),
  Cp = Symbol.for('react.memo'),
  Ep = Symbol.for('react.lazy'),
  Ka = Symbol.iterator
function Np(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ka && e[Ka]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Ic = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zc = Object.assign,
  Lc = {}
function Xn(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Lc),
    (this.updater = n || Ic)
}
Xn.prototype.isReactComponent = {}
Xn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Ac() {}
Ac.prototype = Xn.prototype
function Fs(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Lc),
    (this.updater = n || Ic)
}
var Bs = (Fs.prototype = new Ac())
Bs.constructor = Fs
zc(Bs, Xn.prototype)
Bs.isPureReactComponent = !0
var Za = Array.isArray,
  Mc = Object.prototype.hasOwnProperty,
  Us = { current: null },
  $c = { key: !0, ref: !0, __self: !0, __source: !0 }
function Dc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Mc.call(t, r) && !$c.hasOwnProperty(r) && (l[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) l.children = n
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2]
    l.children = u
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r])
  return { $$typeof: Kr, type: e, key: o, ref: i, props: l, _owner: Us.current }
}
function Pp(e, t) {
  return {
    $$typeof: Kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Ws(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Kr
}
function _p(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Ja = /\/+/g
function ei(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? _p('' + e.key)
    : t.toString(36)
}
function Cl(e, t, n, r, l) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Kr:
          case gp:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + ei(i, 0) : r),
      Za(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ja, '$&/') + '/'),
          Cl(l, t, n, '', function (c) {
            return c
          }))
        : l != null &&
          (Ws(l) &&
            (l = Pp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ja, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    )
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Za(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s]
      var u = r + ei(o, s)
      i += Cl(o, t, n, u, l)
    }
  else if (((u = Np(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + ei(o, s++)), (i += Cl(o, t, n, u, l))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return i
}
function nl(e, t, n) {
  if (e == null) return e
  var r = [],
    l = 0
  return (
    Cl(e, r, '', '', function (o) {
      return t.call(n, o, l++)
    }),
    r
  )
}
function Rp(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var De = { current: null },
  El = { transition: null },
  Tp = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: El,
    ReactCurrentOwner: Us,
  }
W.Children = {
  map: nl,
  forEach: function (e, t, n) {
    nl(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      nl(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      nl(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Ws(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
W.Component = Xn
W.Fragment = vp
W.Profiler = xp
W.PureComponent = Fs
W.StrictMode = yp
W.Suspense = jp
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tp
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = zc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Us.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (u in t)
      Mc.call(t, u) &&
        !$c.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
  }
  var u = arguments.length - 2
  if (u === 1) r.children = n
  else if (1 < u) {
    s = Array(u)
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2]
    r.children = s
  }
  return { $$typeof: Kr, type: e.type, key: l, ref: o, props: r, _owner: i }
}
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wp, _context: e }),
    (e.Consumer = e)
  )
}
W.createElement = Dc
W.createFactory = function (e) {
  var t = Dc.bind(null, e)
  return (t.type = e), t
}
W.createRef = function () {
  return { current: null }
}
W.forwardRef = function (e) {
  return { $$typeof: kp, render: e }
}
W.isValidElement = Ws
W.lazy = function (e) {
  return { $$typeof: Ep, _payload: { _status: -1, _result: e }, _init: Rp }
}
W.memo = function (e, t) {
  return { $$typeof: Cp, type: e, compare: t === void 0 ? null : t }
}
W.startTransition = function (e) {
  var t = El.transition
  El.transition = {}
  try {
    e()
  } finally {
    El.transition = t
  }
}
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
W.useCallback = function (e, t) {
  return De.current.useCallback(e, t)
}
W.useContext = function (e) {
  return De.current.useContext(e)
}
W.useDebugValue = function () {}
W.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e)
}
W.useEffect = function (e, t) {
  return De.current.useEffect(e, t)
}
W.useId = function () {
  return De.current.useId()
}
W.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n)
}
W.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t)
}
W.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t)
}
W.useMemo = function (e, t) {
  return De.current.useMemo(e, t)
}
W.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n)
}
W.useRef = function (e) {
  return De.current.useRef(e)
}
W.useState = function (e) {
  return De.current.useState(e)
}
W.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n)
}
W.useTransition = function () {
  return De.current.useTransition()
}
W.version = '18.2.0'
;(function (e) {
  e.exports = W
})(mp)
const yn = pp(k),
  Op = fp({ __proto__: null, default: yn }, [k])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = k,
  zp = Symbol.for('react.element'),
  Lp = Symbol.for('react.fragment'),
  Ap = Object.prototype.hasOwnProperty,
  Mp = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $p = { key: !0, ref: !0, __self: !0, __source: !0 }
function Fc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) Ap.call(t, r) && !$p.hasOwnProperty(r) && (l[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
  return { $$typeof: zp, type: e, key: o, ref: i, props: l, _owner: Mp.current }
}
ho.Fragment = Lp
ho.jsx = Fc
ho.jsxs = Fc
;(function (e) {
  e.exports = ho
})(hp)
var Ti = {},
  Oi = {},
  Dp = {
    get exports() {
      return Oi
    },
    set exports(e) {
      Oi = e
    },
  },
  Je = {},
  Ii = {},
  Fp = {
    get exports() {
      return Ii
    },
    set exports(e) {
      Ii = e
    },
  },
  Bc = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(N, A) {
    var M = N.length
    N.push(A)
    e: for (; 0 < M; ) {
      var q = (M - 1) >>> 1,
        _ = N[q]
      if (0 < l(_, A)) (N[q] = A), (N[M] = _), (M = q)
      else break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var A = N[0],
      M = N.pop()
    if (M !== A) {
      N[0] = M
      e: for (var q = 0, _ = N.length, T = _ >>> 1; q < T; ) {
        var z = 2 * (q + 1) - 1,
          $ = N[z],
          w = z + 1,
          H = N[w]
        if (0 > l($, M))
          w < _ && 0 > l(H, $)
            ? ((N[q] = H), (N[w] = M), (q = w))
            : ((N[q] = $), (N[z] = M), (q = z))
        else if (w < _ && 0 > l(H, M)) (N[q] = H), (N[w] = M), (q = w)
        else break e
      }
    }
    return A
  }
  function l(N, A) {
    var M = N.sortIndex - A.sortIndex
    return M !== 0 ? M : N.id - A.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var i = Date,
      s = i.now()
    e.unstable_now = function () {
      return i.now() - s
    }
  }
  var u = [],
    c = [],
    d = 1,
    p = null,
    g = 3,
    x = !1,
    v = !1,
    y = !1,
    j = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(N) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c)
      else if (A.startTime <= N) r(c), (A.sortIndex = A.expirationTime), t(u, A)
      else break
      A = n(c)
    }
  }
  function S(N) {
    if (((y = !1), m(N), !v))
      if (n(u) !== null) (v = !0), kt(E)
      else {
        var A = n(c)
        A !== null && Le(S, A.startTime - N)
      }
  }
  function E(N, A) {
    ;(v = !1), y && ((y = !1), h(I), (I = -1)), (x = !0)
    var M = g
    try {
      for (
        m(A), p = n(u);
        p !== null && (!(p.expirationTime > A) || (N && !ge()));

      ) {
        var q = p.callback
        if (typeof q == 'function') {
          ;(p.callback = null), (g = p.priorityLevel)
          var _ = q(p.expirationTime <= A)
          ;(A = e.unstable_now()),
            typeof _ == 'function' ? (p.callback = _) : p === n(u) && r(u),
            m(A)
        } else r(u)
        p = n(u)
      }
      if (p !== null) var T = !0
      else {
        var z = n(c)
        z !== null && Le(S, z.startTime - A), (T = !1)
      }
      return T
    } finally {
      ;(p = null), (g = M), (x = !1)
    }
  }
  var R = !1,
    O = null,
    I = -1,
    Q = 5,
    D = -1
  function ge() {
    return !(e.unstable_now() - D < Q)
  }
  function pe() {
    if (O !== null) {
      var N = e.unstable_now()
      D = N
      var A = !0
      try {
        A = O(!0, N)
      } finally {
        A ? Se() : ((R = !1), (O = null))
      }
    } else R = !1
  }
  var Se
  if (typeof f == 'function')
    Se = function () {
      f(pe)
    }
  else if (typeof MessageChannel < 'u') {
    var be = new MessageChannel(),
      _e = be.port2
    ;(be.port1.onmessage = pe),
      (Se = function () {
        _e.postMessage(null)
      })
  } else
    Se = function () {
      j(pe, 0)
    }
  function kt(N) {
    ;(O = N), R || ((R = !0), Se())
  }
  function Le(N, A) {
    I = j(function () {
      N(e.unstable_now())
    }, A)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), kt(E))
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (Q = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u)
    }),
    (e.unstable_next = function (N) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var A = 3
          break
        default:
          A = g
      }
      var M = g
      g = A
      try {
        return N()
      } finally {
        g = M
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          N = 3
      }
      var M = g
      g = N
      try {
        return A()
      } finally {
        g = M
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, M) {
      var q = e.unstable_now()
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? q + M : q))
          : (M = q),
        N)
      ) {
        case 1:
          var _ = -1
          break
        case 2:
          _ = 250
          break
        case 5:
          _ = 1073741823
          break
        case 4:
          _ = 1e4
          break
        default:
          _ = 5e3
      }
      return (
        (_ = M + _),
        (N = {
          id: d++,
          callback: A,
          priorityLevel: N,
          startTime: M,
          expirationTime: _,
          sortIndex: -1,
        }),
        M > q
          ? ((N.sortIndex = M),
            t(c, N),
            n(u) === null &&
              N === n(c) &&
              (y ? (h(I), (I = -1)) : (y = !0), Le(S, M - q)))
          : ((N.sortIndex = _), t(u, N), v || x || ((v = !0), kt(E))),
        N
      )
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (N) {
      var A = g
      return function () {
        var M = g
        g = A
        try {
          return N.apply(this, arguments)
        } finally {
          g = M
        }
      }
    })
})(Bc)
;(function (e) {
  e.exports = Bc
})(Fp)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc = k,
  Ze = Ii
function C(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Wc = new Set(),
  Rr = {}
function xn(e, t) {
  Wn(e, t), Wn(e + 'Capture', t)
}
function Wn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) Wc.add(t[e])
}
var Rt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  zi = Object.prototype.hasOwnProperty,
  Bp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xa = {},
  qa = {}
function Up(e) {
  return zi.call(qa, e)
    ? !0
    : zi.call(Xa, e)
      ? !1
      : Bp.test(e)
        ? (qa[e] = !0)
        : ((Xa[e] = !0), !1)
}
function Wp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Hp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Wp(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Fe(e, t, n, r, l, o, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i)
}
var Pe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new Fe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Pe[t] = new Fe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Pe[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Pe[e] = new Fe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Pe[e] = new Fe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Pe[e] = new Fe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Pe[e] = new Fe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Pe[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Hs = /[\-:]([a-z])/g
function Vs(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Hs, Vs)
    Pe[t] = new Fe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Hs, Vs)
    Pe[t] = new Fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Hs, Vs)
  Pe[t] = new Fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Pe.xlinkHref = new Fe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Qs(e, t, n, r) {
  var l = Pe.hasOwnProperty(t) ? Pe[t] : null
  ;(l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Hp(t, n, l, r) && (n = null),
    r || l === null
      ? Up(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var zt = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rl = Symbol.for('react.element'),
  jn = Symbol.for('react.portal'),
  Cn = Symbol.for('react.fragment'),
  bs = Symbol.for('react.strict_mode'),
  Li = Symbol.for('react.profiler'),
  Hc = Symbol.for('react.provider'),
  Vc = Symbol.for('react.context'),
  Gs = Symbol.for('react.forward_ref'),
  Ai = Symbol.for('react.suspense'),
  Mi = Symbol.for('react.suspense_list'),
  Ys = Symbol.for('react.memo'),
  $t = Symbol.for('react.lazy'),
  Qc = Symbol.for('react.offscreen'),
  eu = Symbol.iterator
function sr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (eu && e[eu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var ie = Object.assign,
  ti
function mr(e) {
  if (ti === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      ti = (t && t[1]) || ''
    }
  return (
    `
` +
    ti +
    e
  )
}
var ni = !1
function ri(e, t) {
  if (!e || ni) return ''
  ni = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (c) {
          var r = c
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (c) {
          r = c
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (c) {
        r = c
      }
      e()
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                )
              }
            while (1 <= i && 0 <= s)
          break
        }
    }
  } finally {
    ;(ni = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? mr(e) : ''
}
function Vp(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type)
    case 16:
      return mr('Lazy')
    case 13:
      return mr('Suspense')
    case 19:
      return mr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = ri(e.type, !1)), e
    case 11:
      return (e = ri(e.type.render, !1)), e
    case 1:
      return (e = ri(e.type, !0)), e
    default:
      return ''
  }
}
function $i(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Cn:
      return 'Fragment'
    case jn:
      return 'Portal'
    case Li:
      return 'Profiler'
    case bs:
      return 'StrictMode'
    case Ai:
      return 'Suspense'
    case Mi:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Vc:
        return (e.displayName || 'Context') + '.Consumer'
      case Hc:
        return (e._context.displayName || 'Context') + '.Provider'
      case Gs:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Ys:
        return (
          (t = e.displayName || null), t !== null ? t : $i(e.type) || 'Memo'
        )
      case $t:
        ;(t = e._payload), (e = e._init)
        try {
          return $i(e(t))
        } catch {}
    }
  return null
}
function Qp(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return $i(t)
    case 8:
      return t === bs ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function en(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function bc(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function bp(e) {
  var t = bc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this)
        },
        set: function (i) {
          ;(r = '' + i), o.call(this, i)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (i) {
          r = '' + i
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function ll(e) {
  e._valueTracker || (e._valueTracker = bp(e))
}
function Gc(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = bc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function $l(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Di(e, t) {
  var n = t.checked
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function tu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Yc(e, t) {
  ;(t = t.checked), t != null && Qs(e, 'checked', t, !1)
}
function Fi(e, t) {
  Yc(e, t)
  var n = en(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Bi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Bi(e, t.type, en(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function nu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Bi(e, t, n) {
  ;(t !== 'number' || $l(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var gr = Array.isArray
function Mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + en(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
        return
      }
      t !== null || e[l].disabled || (t = e[l])
    }
    t !== null && (t.selected = !0)
  }
}
function Ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91))
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function ru(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92))
      if (gr(n)) {
        if (1 < n.length) throw Error(C(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: en(n) }
}
function Kc(e, t) {
  var n = en(t.value),
    r = en(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function lu(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Zc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Wi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Zc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var ol,
  Jc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ol = ol || document.createElement('div'),
          ol.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ol.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Tr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Gp = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(xr).forEach(function (e) {
  Gp.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e])
  })
})
function Xc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xr.hasOwnProperty(e) && xr[e])
      ? ('' + t).trim()
      : t + 'px'
}
function qc(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Xc(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l)
    }
}
var Yp = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function Hi(e, t) {
  if (t) {
    if (Yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62))
  }
}
function Vi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Qi = null
function Ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var bi = null,
  $n = null,
  Dn = null
function ou(e) {
  if ((e = Xr(e))) {
    if (typeof bi != 'function') throw Error(C(280))
    var t = e.stateNode
    t && ((t = xo(t)), bi(e.stateNode, e.type, t))
  }
}
function ed(e) {
  $n ? (Dn ? Dn.push(e) : (Dn = [e])) : ($n = e)
}
function td() {
  if ($n) {
    var e = $n,
      t = Dn
    if (((Dn = $n = null), ou(e), t)) for (e = 0; e < t.length; e++) ou(t[e])
  }
}
function nd(e, t) {
  return e(t)
}
function rd() {}
var li = !1
function ld(e, t, n) {
  if (li) return e(t, n)
  li = !0
  try {
    return nd(e, t, n)
  } finally {
    ;(li = !1), ($n !== null || Dn !== null) && (rd(), td())
  }
}
function Or(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = xo(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n))
  return n
}
var Gi = !1
if (Rt)
  try {
    var ar = {}
    Object.defineProperty(ar, 'passive', {
      get: function () {
        Gi = !0
      },
    }),
      window.addEventListener('test', ar, ar),
      window.removeEventListener('test', ar, ar)
  } catch {
    Gi = !1
  }
function Kp(e, t, n, r, l, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, c)
  } catch (d) {
    this.onError(d)
  }
}
var wr = !1,
  Dl = null,
  Fl = !1,
  Yi = null,
  Zp = {
    onError: function (e) {
      ;(wr = !0), (Dl = e)
    },
  }
function Jp(e, t, n, r, l, o, i, s, u) {
  ;(wr = !1), (Dl = null), Kp.apply(Zp, arguments)
}
function Xp(e, t, n, r, l, o, i, s, u) {
  if ((Jp.apply(this, arguments), wr)) {
    if (wr) {
      var c = Dl
      ;(wr = !1), (Dl = null)
    } else throw Error(C(198))
    Fl || ((Fl = !0), (Yi = c))
  }
}
function wn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function od(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function iu(e) {
  if (wn(e) !== e) throw Error(C(188))
}
function qp(e) {
  var t = e.alternate
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(C(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var l = n.return
    if (l === null) break
    var o = l.alternate
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return iu(l), e
        if (o === r) return iu(l), t
        o = o.sibling
      }
      throw Error(C(188))
    }
    if (n.return !== r.return) (n = l), (r = o)
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          ;(i = !0), (n = l), (r = o)
          break
        }
        if (s === r) {
          ;(i = !0), (r = l), (n = o)
          break
        }
        s = s.sibling
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            ;(i = !0), (n = o), (r = l)
            break
          }
          if (s === r) {
            ;(i = !0), (r = o), (n = l)
            break
          }
          s = s.sibling
        }
        if (!i) throw Error(C(189))
      }
    }
    if (n.alternate !== r) throw Error(C(190))
  }
  if (n.tag !== 3) throw Error(C(188))
  return n.stateNode.current === n ? e : t
}
function id(e) {
  return (e = qp(e)), e !== null ? sd(e) : null
}
function sd(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = sd(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var ad = Ze.unstable_scheduleCallback,
  su = Ze.unstable_cancelCallback,
  eh = Ze.unstable_shouldYield,
  th = Ze.unstable_requestPaint,
  ce = Ze.unstable_now,
  nh = Ze.unstable_getCurrentPriorityLevel,
  Zs = Ze.unstable_ImmediatePriority,
  ud = Ze.unstable_UserBlockingPriority,
  Bl = Ze.unstable_NormalPriority,
  rh = Ze.unstable_LowPriority,
  cd = Ze.unstable_IdlePriority,
  mo = null,
  wt = null
function lh(e) {
  if (wt && typeof wt.onCommitFiberRoot == 'function')
    try {
      wt.onCommitFiberRoot(mo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : sh,
  oh = Math.log,
  ih = Math.LN2
function sh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((oh(e) / ih) | 0)) | 0
}
var il = 64,
  sl = 4194304
function vr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Ul(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var s = i & ~l
    s !== 0 ? (r = vr(s)) : ((o &= i), o !== 0 && (r = vr(o)))
  } else (i = n & ~l), i !== 0 ? (r = vr(i)) : o !== 0 && (r = vr(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
  return r
}
function ah(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function uh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - pt(o),
      s = 1 << i,
      u = l[i]
    u === -1
      ? (!(s & n) || s & r) && (l[i] = ah(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s)
  }
}
function Ki(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function dd() {
  var e = il
  return (il <<= 1), !(il & 4194240) && (il = 64), e
}
function oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Zr(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n)
}
function ch(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n),
      o = 1 << l
    ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o)
  }
}
function Js(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      l = 1 << r
    ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
  }
}
var Z = 0
function fd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var pd,
  Xs,
  hd,
  md,
  gd,
  Zi = !1,
  al = [],
  Vt = null,
  Qt = null,
  bt = null,
  Ir = new Map(),
  zr = new Map(),
  Ft = [],
  dh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function au(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Vt = null
      break
    case 'dragenter':
    case 'dragleave':
      Qt = null
      break
    case 'mouseover':
    case 'mouseout':
      bt = null
      break
    case 'pointerover':
    case 'pointerout':
      Ir.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      zr.delete(t.pointerId)
  }
}
function ur(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Xr(t)), t !== null && Xs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e)
}
function fh(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (Vt = ur(Vt, e, t, n, r, l)), !0
    case 'dragenter':
      return (Qt = ur(Qt, e, t, n, r, l)), !0
    case 'mouseover':
      return (bt = ur(bt, e, t, n, r, l)), !0
    case 'pointerover':
      var o = l.pointerId
      return Ir.set(o, ur(Ir.get(o) || null, e, t, n, r, l)), !0
    case 'gotpointercapture':
      return (
        (o = l.pointerId), zr.set(o, ur(zr.get(o) || null, e, t, n, r, l)), !0
      )
  }
  return !1
}
function vd(e) {
  var t = an(e.target)
  if (t !== null) {
    var n = wn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = od(n)), t !== null)) {
          ;(e.blockedOn = t),
            gd(e.priority, function () {
              hd(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Nl(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Qi = r), n.target.dispatchEvent(r), (Qi = null)
    } else return (t = Xr(n)), t !== null && Xs(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function uu(e, t, n) {
  Nl(e) && n.delete(t)
}
function ph() {
  ;(Zi = !1),
    Vt !== null && Nl(Vt) && (Vt = null),
    Qt !== null && Nl(Qt) && (Qt = null),
    bt !== null && Nl(bt) && (bt = null),
    Ir.forEach(uu),
    zr.forEach(uu)
}
function cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zi ||
      ((Zi = !0), Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, ph)))
}
function Lr(e) {
  function t(l) {
    return cr(l, e)
  }
  if (0 < al.length) {
    cr(al[0], e)
    for (var n = 1; n < al.length; n++) {
      var r = al[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Vt !== null && cr(Vt, e),
      Qt !== null && cr(Qt, e),
      bt !== null && cr(bt, e),
      Ir.forEach(t),
      zr.forEach(t),
      n = 0;
    n < Ft.length;
    n++
  )
    (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); )
    vd(n), n.blockedOn === null && Ft.shift()
}
var Fn = zt.ReactCurrentBatchConfig,
  Wl = !0
function hh(e, t, n, r) {
  var l = Z,
    o = Fn.transition
  Fn.transition = null
  try {
    ;(Z = 1), qs(e, t, n, r)
  } finally {
    ;(Z = l), (Fn.transition = o)
  }
}
function mh(e, t, n, r) {
  var l = Z,
    o = Fn.transition
  Fn.transition = null
  try {
    ;(Z = 4), qs(e, t, n, r)
  } finally {
    ;(Z = l), (Fn.transition = o)
  }
}
function qs(e, t, n, r) {
  if (Wl) {
    var l = Ji(e, t, n, r)
    if (l === null) mi(e, t, r, Hl, n), au(e, r)
    else if (fh(l, e, t, n, r)) r.stopPropagation()
    else if ((au(e, r), t & 4 && -1 < dh.indexOf(e))) {
      for (; l !== null; ) {
        var o = Xr(l)
        if (
          (o !== null && pd(o),
          (o = Ji(e, t, n, r)),
          o === null && mi(e, t, r, Hl, n),
          o === l)
        )
          break
        l = o
      }
      l !== null && r.stopPropagation()
    } else mi(e, t, r, null, n)
  }
}
var Hl = null
function Ji(e, t, n, r) {
  if (((Hl = null), (e = Ks(r)), (e = an(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = od(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Hl = e), null
}
function yd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (nh()) {
        case Zs:
          return 1
        case ud:
          return 4
        case Bl:
        case rh:
          return 16
        case cd:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Ut = null,
  ea = null,
  Pl = null
function xd() {
  if (Pl) return Pl
  var e,
    t = ea,
    n = t.length,
    r,
    l = 'value' in Ut ? Ut.value : Ut.textContent,
    o = l.length
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Pl = l.slice(e, 1 < r ? 1 - r : void 0))
}
function _l(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function ul() {
  return !0
}
function cu() {
  return !1
}
function Xe(e) {
  function t(n, r, l, o, i) {
    ;(this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ul
        : cu),
      (this.isPropagationStopped = cu),
      this
    )
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ul))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ul))
      },
      persist: function () {},
      isPersistent: ul,
    }),
    t
  )
}
var qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ta = Xe(qn),
  Jr = ie({}, qn, { view: 0, detail: 0 }),
  gh = Xe(Jr),
  ii,
  si,
  dr,
  go = ie({}, Jr, {
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
    getModifierState: na,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== dr &&
            (dr && e.type === 'mousemove'
              ? ((ii = e.screenX - dr.screenX), (si = e.screenY - dr.screenY))
              : (si = ii = 0),
            (dr = e)),
          ii)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : si
    },
  }),
  du = Xe(go),
  vh = ie({}, go, { dataTransfer: 0 }),
  yh = Xe(vh),
  xh = ie({}, Jr, { relatedTarget: 0 }),
  ai = Xe(xh),
  wh = ie({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sh = Xe(wh),
  kh = ie({}, qn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  jh = Xe(kh),
  Ch = ie({}, qn, { data: 0 }),
  fu = Xe(Ch),
  Eh = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Nh = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ph = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function _h(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Ph[e]) ? !!t[e] : !1
}
function na() {
  return _h
}
var Rh = ie({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = Eh[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = _l(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Nh[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: na,
    charCode: function (e) {
      return e.type === 'keypress' ? _l(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? _l(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  Th = Xe(Rh),
  Oh = ie({}, go, {
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
  pu = Xe(Oh),
  Ih = ie({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: na,
  }),
  zh = Xe(Ih),
  Lh = ie({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ah = Xe(Lh),
  Mh = ie({}, go, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $h = Xe(Mh),
  Dh = [9, 13, 27, 32],
  ra = Rt && 'CompositionEvent' in window,
  Sr = null
Rt && 'documentMode' in document && (Sr = document.documentMode)
var Fh = Rt && 'TextEvent' in window && !Sr,
  wd = Rt && (!ra || (Sr && 8 < Sr && 11 >= Sr)),
  hu = String.fromCharCode(32),
  mu = !1
function Sd(e, t) {
  switch (e) {
    case 'keyup':
      return Dh.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function kd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var En = !1
function Bh(e, t) {
  switch (e) {
    case 'compositionend':
      return kd(t)
    case 'keypress':
      return t.which !== 32 ? null : ((mu = !0), hu)
    case 'textInput':
      return (e = t.data), e === hu && mu ? null : e
    default:
      return null
  }
}
function Uh(e, t) {
  if (En)
    return e === 'compositionend' || (!ra && Sd(e, t))
      ? ((e = xd()), (Pl = ea = Ut = null), (En = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return wd && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Wh = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
}
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Wh[e.type] : t === 'textarea'
}
function jd(e, t, n, r) {
  ed(r),
    (t = Vl(t, 'onChange')),
    0 < t.length &&
      ((n = new ta('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var kr = null,
  Ar = null
function Hh(e) {
  Ld(e, 0)
}
function vo(e) {
  var t = _n(e)
  if (Gc(t)) return e
}
function Vh(e, t) {
  if (e === 'change') return t
}
var Cd = !1
if (Rt) {
  var ui
  if (Rt) {
    var ci = 'oninput' in document
    if (!ci) {
      var vu = document.createElement('div')
      vu.setAttribute('oninput', 'return;'),
        (ci = typeof vu.oninput == 'function')
    }
    ui = ci
  } else ui = !1
  Cd = ui && (!document.documentMode || 9 < document.documentMode)
}
function yu() {
  kr && (kr.detachEvent('onpropertychange', Ed), (Ar = kr = null))
}
function Ed(e) {
  if (e.propertyName === 'value' && vo(Ar)) {
    var t = []
    jd(t, Ar, e, Ks(e)), ld(Hh, t)
  }
}
function Qh(e, t, n) {
  e === 'focusin'
    ? (yu(), (kr = t), (Ar = n), kr.attachEvent('onpropertychange', Ed))
    : e === 'focusout' && yu()
}
function bh(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vo(Ar)
}
function Gh(e, t) {
  if (e === 'click') return vo(t)
}
function Yh(e, t) {
  if (e === 'input' || e === 'change') return vo(t)
}
function Kh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var mt = typeof Object.is == 'function' ? Object.is : Kh
function Mr(e, t) {
  if (mt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var l = n[r]
    if (!zi.call(t, l) || !mt(e[l], t[l])) return !1
  }
  return !0
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function wu(e, t) {
  var n = xu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = xu(n)
  }
}
function Nd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Nd(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function Pd() {
  for (var e = window, t = $l(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = $l(e.document)
  }
  return t
}
function la(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Zh(e) {
  var t = Pd(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && la(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var l = n.textContent.length,
          o = Math.min(r.start, l)
        ;(r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = wu(n, o))
        var i = wu(n, r)
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Jh = Rt && 'documentMode' in document && 11 >= document.documentMode,
  Nn = null,
  Xi = null,
  jr = null,
  qi = !1
function Su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  qi ||
    Nn == null ||
    Nn !== $l(r) ||
    ((r = Nn),
    'selectionStart' in r && la(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jr && Mr(jr, r)) ||
      ((jr = r),
      (r = Vl(Xi, 'onSelect')),
      0 < r.length &&
        ((t = new ta('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nn))))
}
function cl(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Pn = {
    animationend: cl('Animation', 'AnimationEnd'),
    animationiteration: cl('Animation', 'AnimationIteration'),
    animationstart: cl('Animation', 'AnimationStart'),
    transitionend: cl('Transition', 'TransitionEnd'),
  },
  di = {},
  _d = {}
Rt &&
  ((_d = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  'TransitionEvent' in window || delete Pn.transitionend.transition)
function yo(e) {
  if (di[e]) return di[e]
  if (!Pn[e]) return e
  var t = Pn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in _d) return (di[e] = t[n])
  return e
}
var Rd = yo('animationend'),
  Td = yo('animationiteration'),
  Od = yo('animationstart'),
  Id = yo('transitionend'),
  zd = new Map(),
  ku =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function nn(e, t) {
  zd.set(e, t), xn(t, [e])
}
for (var fi = 0; fi < ku.length; fi++) {
  var pi = ku[fi],
    Xh = pi.toLowerCase(),
    qh = pi[0].toUpperCase() + pi.slice(1)
  nn(Xh, 'on' + qh)
}
nn(Rd, 'onAnimationEnd')
nn(Td, 'onAnimationIteration')
nn(Od, 'onAnimationStart')
nn('dblclick', 'onDoubleClick')
nn('focusin', 'onFocus')
nn('focusout', 'onBlur')
nn(Id, 'onTransitionEnd')
Wn('onMouseEnter', ['mouseout', 'mouseover'])
Wn('onMouseLeave', ['mouseout', 'mouseover'])
Wn('onPointerEnter', ['pointerout', 'pointerover'])
Wn('onPointerLeave', ['pointerout', 'pointerover'])
xn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
xn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
xn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
xn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
xn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
xn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var yr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  em = new Set('cancel close invalid load scroll toggle'.split(' ').concat(yr))
function ju(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Xp(r, t, void 0, e), (e.currentTarget = null)
}
function Ld(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e
          ju(l, s, c), (o = u)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e
          ju(l, s, c), (o = u)
        }
    }
  }
  if (Fl) throw ((e = Yi), (Fl = !1), (Yi = null), e)
}
function te(e, t) {
  var n = t[ls]
  n === void 0 && (n = t[ls] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Ad(t, e, 2, !1), n.add(r))
}
function hi(e, t, n) {
  var r = 0
  t && (r |= 4), Ad(n, e, r, t)
}
var dl = '_reactListening' + Math.random().toString(36).slice(2)
function $r(e) {
  if (!e[dl]) {
    ;(e[dl] = !0),
      Wc.forEach(function (n) {
        n !== 'selectionchange' && (em.has(n) || hi(n, !1, e), hi(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[dl] || ((t[dl] = !0), hi('selectionchange', !1, t))
  }
}
function Ad(e, t, n, r) {
  switch (yd(t)) {
    case 1:
      var l = hh
      break
    case 4:
      l = mh
      break
    default:
      l = qs
  }
  ;(n = l.bind(null, t, n, e)),
    (l = void 0),
    !Gi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1)
}
function mi(e, t, n, r, l) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return
            i = i.return
          }
        for (; s !== null; ) {
          if (((i = an(s)), i === null)) return
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  ld(function () {
    var c = o,
      d = Ks(n),
      p = []
    e: {
      var g = zd.get(e)
      if (g !== void 0) {
        var x = ta,
          v = e
        switch (e) {
          case 'keypress':
            if (_l(n) === 0) break e
          case 'keydown':
          case 'keyup':
            x = Th
            break
          case 'focusin':
            ;(v = 'focus'), (x = ai)
            break
          case 'focusout':
            ;(v = 'blur'), (x = ai)
            break
          case 'beforeblur':
          case 'afterblur':
            x = ai
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = du
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = yh
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = zh
            break
          case Rd:
          case Td:
          case Od:
            x = Sh
            break
          case Id:
            x = Ah
            break
          case 'scroll':
            x = gh
            break
          case 'wheel':
            x = $h
            break
          case 'copy':
          case 'cut':
          case 'paste':
            x = jh
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = pu
        }
        var y = (t & 4) !== 0,
          j = !y && e === 'scroll',
          h = y ? (g !== null ? g + 'Capture' : null) : g
        y = []
        for (var f = c, m; f !== null; ) {
          m = f
          var S = m.stateNode
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              h !== null && ((S = Or(f, h)), S != null && y.push(Dr(f, S, m)))),
            j)
          )
            break
          f = f.return
        }
        0 < y.length &&
          ((g = new x(g, v, null, n, d)), p.push({ event: g, listeners: y }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          g &&
            n !== Qi &&
            (v = n.relatedTarget || n.fromElement) &&
            (an(v) || v[Tt]))
        )
          break e
        if (
          (x || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = c),
              (v = v ? an(v) : null),
              v !== null &&
                ((j = wn(v)), v !== j || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = c)),
          x !== v)
        ) {
          if (
            ((y = du),
            (S = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = pu),
              (S = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (f = 'pointer')),
            (j = x == null ? g : _n(x)),
            (m = v == null ? g : _n(v)),
            (g = new y(S, f + 'leave', x, n, d)),
            (g.target = j),
            (g.relatedTarget = m),
            (S = null),
            an(d) === c &&
              ((y = new y(h, f + 'enter', v, n, d)),
              (y.target = m),
              (y.relatedTarget = j),
              (S = y)),
            (j = S),
            x && v)
          )
            t: {
              for (y = x, h = v, f = 0, m = y; m; m = kn(m)) f++
              for (m = 0, S = h; S; S = kn(S)) m++
              for (; 0 < f - m; ) (y = kn(y)), f--
              for (; 0 < m - f; ) (h = kn(h)), m--
              for (; f--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t
                ;(y = kn(y)), (h = kn(h))
              }
              y = null
            }
          else y = null
          x !== null && Cu(p, g, x, y, !1),
            v !== null && j !== null && Cu(p, j, v, y, !0)
        }
      }
      e: {
        if (
          ((g = c ? _n(c) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && g.type === 'file'))
        )
          var E = Vh
        else if (gu(g))
          if (Cd) E = Yh
          else {
            E = bh
            var R = Qh
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === 'input' &&
            (g.type === 'checkbox' || g.type === 'radio') &&
            (E = Gh)
        if (E && (E = E(e, c))) {
          jd(p, E, n, d)
          break e
        }
        R && R(e, g, c),
          e === 'focusout' &&
            (R = g._wrapperState) &&
            R.controlled &&
            g.type === 'number' &&
            Bi(g, 'number', g.value)
      }
      switch (((R = c ? _n(c) : window), e)) {
        case 'focusin':
          ;(gu(R) || R.contentEditable === 'true') &&
            ((Nn = R), (Xi = c), (jr = null))
          break
        case 'focusout':
          jr = Xi = Nn = null
          break
        case 'mousedown':
          qi = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(qi = !1), Su(p, n, d)
          break
        case 'selectionchange':
          if (Jh) break
        case 'keydown':
        case 'keyup':
          Su(p, n, d)
      }
      var O
      if (ra)
        e: {
          switch (e) {
            case 'compositionstart':
              var I = 'onCompositionStart'
              break e
            case 'compositionend':
              I = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              I = 'onCompositionUpdate'
              break e
          }
          I = void 0
        }
      else
        En
          ? Sd(e, n) && (I = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (I = 'onCompositionStart')
      I &&
        (wd &&
          n.locale !== 'ko' &&
          (En || I !== 'onCompositionStart'
            ? I === 'onCompositionEnd' && En && (O = xd())
            : ((Ut = d),
              (ea = 'value' in Ut ? Ut.value : Ut.textContent),
              (En = !0))),
        (R = Vl(c, I)),
        0 < R.length &&
          ((I = new fu(I, e, null, n, d)),
          p.push({ event: I, listeners: R }),
          O ? (I.data = O) : ((O = kd(n)), O !== null && (I.data = O)))),
        (O = Fh ? Bh(e, n) : Uh(e, n)) &&
          ((c = Vl(c, 'onBeforeInput')),
          0 < c.length &&
            ((d = new fu('onBeforeInput', 'beforeinput', null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = O)))
    }
    Ld(p, t)
  })
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Vl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Or(e, n)),
      o != null && r.unshift(Dr(e, o, l)),
      (o = Or(e, t)),
      o != null && r.push(Dr(e, o, l))),
      (e = e.return)
  }
  return r
}
function kn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Cu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode
    if (u !== null && u === r) break
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Or(n, o)), u != null && i.unshift(Dr(n, u, s)))
        : l || ((u = Or(n, o)), u != null && i.push(Dr(n, u, s)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var tm = /\r\n?/g,
  nm = /\u0000|\uFFFD/g
function Eu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      tm,
      `
`,
    )
    .replace(nm, '')
}
function fl(e, t, n) {
  if (((t = Eu(t)), Eu(e) !== t && n)) throw Error(C(425))
}
function Ql() {}
var es = null,
  ts = null
function ns(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var rs = typeof setTimeout == 'function' ? setTimeout : void 0,
  rm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Nu = typeof Promise == 'function' ? Promise : void 0,
  lm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Nu < 'u'
        ? function (e) {
            return Nu.resolve(null).then(e).catch(om)
          }
        : rs
function om(e) {
  setTimeout(function () {
    throw e
  })
}
function gi(e, t) {
  var n = t,
    r = 0
  do {
    var l = n.nextSibling
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Lr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = l
  } while (n)
  Lr(t)
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Pu(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var er = Math.random().toString(36).slice(2),
  yt = '__reactFiber$' + er,
  Fr = '__reactProps$' + er,
  Tt = '__reactContainer$' + er,
  ls = '__reactEvents$' + er,
  im = '__reactListeners$' + er,
  sm = '__reactHandles$' + er
function an(e) {
  var t = e[yt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pu(e); e !== null; ) {
          if ((n = e[yt])) return n
          e = Pu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Xr(e) {
  return (
    (e = e[yt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(C(33))
}
function xo(e) {
  return e[Fr] || null
}
var os = [],
  Rn = -1
function rn(e) {
  return { current: e }
}
function ne(e) {
  0 > Rn || ((e.current = os[Rn]), (os[Rn] = null), Rn--)
}
function ee(e, t) {
  Rn++, (os[Rn] = e.current), (e.current = t)
}
var tn = {},
  ze = rn(tn),
  He = rn(!1),
  pn = tn
function Hn(e, t) {
  var n = e.type.contextTypes
  if (!n) return tn
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var l = {},
    o
  for (o in n) l[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  )
}
function Ve(e) {
  return (e = e.childContextTypes), e != null
}
function bl() {
  ne(He), ne(ze)
}
function _u(e, t, n) {
  if (ze.current !== tn) throw Error(C(168))
  ee(ze, t), ee(He, n)
}
function Md(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var l in r) if (!(l in t)) throw Error(C(108, Qp(e) || 'Unknown', l))
  return ie({}, n, r)
}
function Gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (pn = ze.current),
    ee(ze, e),
    ee(He, He.current),
    !0
  )
}
function Ru(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(C(169))
  n
    ? ((e = Md(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(He),
      ne(ze),
      ee(ze, e))
    : ne(He),
    ee(He, n)
}
var Ct = null,
  wo = !1,
  vi = !1
function $d(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e)
}
function am(e) {
  ;(wo = !0), $d(e)
}
function ln() {
  if (!vi && Ct !== null) {
    vi = !0
    var e = 0,
      t = Z
    try {
      var n = Ct
      for (Z = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ct = null), (wo = !1)
    } catch (l) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), ad(Zs, ln), l)
    } finally {
      ;(Z = t), (vi = !1)
    }
  }
  return null
}
var Tn = [],
  On = 0,
  Yl = null,
  Kl = 0,
  et = [],
  tt = 0,
  hn = null,
  Et = 1,
  Nt = ''
function on(e, t) {
  ;(Tn[On++] = Kl), (Tn[On++] = Yl), (Yl = e), (Kl = t)
}
function Dd(e, t, n) {
  ;(et[tt++] = Et), (et[tt++] = Nt), (et[tt++] = hn), (hn = e)
  var r = Et
  e = Nt
  var l = 32 - pt(r) - 1
  ;(r &= ~(1 << l)), (n += 1)
  var o = 32 - pt(t) + l
  if (30 < o) {
    var i = l - (l % 5)
    ;(o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Et = (1 << (32 - pt(t) + l)) | (n << l) | r),
      (Nt = o + e)
  } else (Et = (1 << o) | (n << l) | r), (Nt = e)
}
function oa(e) {
  e.return !== null && (on(e, 1), Dd(e, 1, 0))
}
function ia(e) {
  for (; e === Yl; )
    (Yl = Tn[--On]), (Tn[On] = null), (Kl = Tn[--On]), (Tn[On] = null)
  for (; e === hn; )
    (hn = et[--tt]),
      (et[tt] = null),
      (Nt = et[--tt]),
      (et[tt] = null),
      (Et = et[--tt]),
      (et[tt] = null)
}
var Ke = null,
  Ye = null,
  re = !1,
  ft = null
function Fd(e, t) {
  var n = nt(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (Ye = Gt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (Ye = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: Et, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (Ye = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function is(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ss(e) {
  if (re) {
    var t = Ye
    if (t) {
      var n = t
      if (!Tu(e, t)) {
        if (is(e)) throw Error(C(418))
        t = Gt(n.nextSibling)
        var r = Ke
        t && Tu(e, t)
          ? Fd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ke = e))
      }
    } else {
      if (is(e)) throw Error(C(418))
      ;(e.flags = (e.flags & -4097) | 2), (re = !1), (Ke = e)
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ke = e
}
function pl(e) {
  if (e !== Ke) return !1
  if (!re) return Ou(e), (re = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ns(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (is(e)) throw (Bd(), Error(C(418)))
    for (; t; ) Fd(e, t), (t = Gt(t.nextSibling))
  }
  if ((Ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Ye = Gt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Ye = null
    }
  } else Ye = Ke ? Gt(e.stateNode.nextSibling) : null
  return !0
}
function Bd() {
  for (var e = Ye; e; ) e = Gt(e.nextSibling)
}
function Vn() {
  ;(Ye = Ke = null), (re = !1)
}
function sa(e) {
  ft === null ? (ft = [e]) : ft.push(e)
}
var um = zt.ReactCurrentBatchConfig
function ct(e, t) {
  if (e && e.defaultProps) {
    ;(t = ie({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Zl = rn(null),
  Jl = null,
  In = null,
  aa = null
function ua() {
  aa = In = Jl = null
}
function ca(e) {
  var t = Zl.current
  ne(Zl), (e._currentValue = t)
}
function as(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Bn(e, t) {
  ;(Jl = e),
    (aa = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null))
}
function lt(e) {
  var t = e._currentValue
  if (aa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (Jl === null) throw Error(C(308))
      ;(In = e), (Jl.dependencies = { lanes: 0, firstContext: e })
    } else In = In.next = e
  return t
}
var un = null
function da(e) {
  un === null ? (un = [e]) : un.push(e)
}
function Ud(e, t, n, r) {
  var l = t.interleaved
  return (
    l === null ? ((n.next = n), da(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  )
}
function Ot(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Dt = !1
function fa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Wd(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Yt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), V & 2)) {
    var l = r.pending
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ot(e, n)
    )
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), da(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  )
}
function Rl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n)
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next)
      } while (n !== null)
      o === null ? (l = o = t) : (o = o.next = t)
    } else l = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Xl(e, t, n, r) {
  var l = e.updateQueue
  Dt = !1
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending
  if (s !== null) {
    l.shared.pending = null
    var u = s,
      c = u.next
    ;(u.next = null), i === null ? (o = c) : (i.next = c), (i = u)
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = u)))
  }
  if (o !== null) {
    var p = l.baseState
    ;(i = 0), (d = c = u = null), (s = o)
    do {
      var g = s.lane,
        x = s.eventTime
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var v = e,
            y = s
          switch (((g = t), (x = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                p = v.call(x, p, g)
                break e
              }
              p = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = y.payload),
                (g = typeof v == 'function' ? v.call(x, p, g) : v),
                g == null)
              )
                break e
              p = ie({}, p, g)
              break e
            case 2:
              Dt = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [s]) : g.push(s))
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = x), (u = p)) : (d = d.next = x),
          (i |= g)
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break
        ;(g = s),
          (s = g.next),
          (g.next = null),
          (l.lastBaseUpdate = g),
          (l.shared.pending = null)
      }
    } while (1)
    if (
      (d === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t
      do (i |= l.lane), (l = l.next)
      while (l !== t)
    } else o === null && (l.shared.lanes = 0)
    ;(gn |= i), (e.lanes = i), (e.memoizedState = p)
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(C(191, l))
        l.call(r)
      }
    }
}
var Hd = new Uc.Component().refs
function us(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var So = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = $e(),
      l = Zt(e),
      o = _t(r, l)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Yt(e, o, l)),
      t !== null && (ht(t, e, l, r), Rl(t, e, l))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = $e(),
      l = Zt(e),
      o = _t(r, l)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Yt(e, o, l)),
      t !== null && (ht(t, e, l, r), Rl(t, e, l))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = $e(),
      r = Zt(e),
      l = _t(n, r)
    ;(l.tag = 2),
      t != null && (l.callback = t),
      (t = Yt(e, l, r)),
      t !== null && (ht(t, e, r, n), Rl(t, e, r))
  },
}
function Lu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Mr(n, r) || !Mr(l, o)
        : !0
  )
}
function Vd(e, t, n) {
  var r = !1,
    l = tn,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = lt(o))
      : ((l = Ve(t) ? pn : ze.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Hn(e, l) : tn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = So),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function Au(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && So.enqueueReplaceState(t, t.state, null)
}
function cs(e, t, n, r) {
  var l = e.stateNode
  ;(l.props = n), (l.state = e.memoizedState), (l.refs = Hd), fa(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (l.context = lt(o))
    : ((o = Ve(t) ? pn : ze.current), (l.context = Hn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (us(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && So.enqueueReplaceState(l, l.state, null),
      Xl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
}
function fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309))
        var r = n.stateNode
      }
      if (!r) throw Error(C(147, e))
      var l = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs
            s === Hd && (s = l.refs = {}), i === null ? delete s[o] : (s[o] = i)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(C(284))
    if (!n._owner) throw Error(C(290, e))
  }
  return e
}
function hl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function Mu(e) {
  var t = e._init
  return t(e._payload)
}
function Qd(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f)
    }
  }
  function n(h, f) {
    if (!e) return null
    for (; f !== null; ) t(h, f), (f = f.sibling)
    return null
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling)
    return h
  }
  function l(h, f) {
    return (h = Jt(h, f)), (h.index = 0), (h.sibling = null), h
  }
  function o(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    )
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h
  }
  function s(h, f, m, S) {
    return f === null || f.tag !== 6
      ? ((f = Ci(m, h.mode, S)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f)
  }
  function u(h, f, m, S) {
    var E = m.type
    return E === Cn
      ? d(h, f, m.props.children, S, m.key)
      : f !== null &&
          (f.elementType === E ||
            (typeof E == 'object' &&
              E !== null &&
              E.$$typeof === $t &&
              Mu(E) === f.type))
        ? ((S = l(f, m.props)), (S.ref = fr(h, f, m)), (S.return = h), S)
        : ((S = Al(m.type, m.key, m.props, null, h.mode, S)),
          (S.ref = fr(h, f, m)),
          (S.return = h),
          S)
  }
  function c(h, f, m, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Ei(m, h.mode, S)), (f.return = h), f)
      : ((f = l(f, m.children || [])), (f.return = h), f)
  }
  function d(h, f, m, S, E) {
    return f === null || f.tag !== 7
      ? ((f = fn(m, h.mode, S, E)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f)
  }
  function p(h, f, m) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Ci('' + f, h.mode, m)), (f.return = h), f
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case rl:
          return (
            (m = Al(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = fr(h, null, f)),
            (m.return = h),
            m
          )
        case jn:
          return (f = Ei(f, h.mode, m)), (f.return = h), f
        case $t:
          var S = f._init
          return p(h, S(f._payload), m)
      }
      if (gr(f) || sr(f)) return (f = fn(f, h.mode, m, null)), (f.return = h), f
      hl(h, f)
    }
    return null
  }
  function g(h, f, m, S) {
    var E = f !== null ? f.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return E !== null ? null : s(h, f, '' + m, S)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case rl:
          return m.key === E ? u(h, f, m, S) : null
        case jn:
          return m.key === E ? c(h, f, m, S) : null
        case $t:
          return (E = m._init), g(h, f, E(m._payload), S)
      }
      if (gr(m) || sr(m)) return E !== null ? null : d(h, f, m, S, null)
      hl(h, m)
    }
    return null
  }
  function x(h, f, m, S, E) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (h = h.get(m) || null), s(f, h, '' + S, E)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case rl:
          return (h = h.get(S.key === null ? m : S.key) || null), u(f, h, S, E)
        case jn:
          return (h = h.get(S.key === null ? m : S.key) || null), c(f, h, S, E)
        case $t:
          var R = S._init
          return x(h, f, m, R(S._payload), E)
      }
      if (gr(S) || sr(S)) return (h = h.get(m) || null), d(f, h, S, E, null)
      hl(f, S)
    }
    return null
  }
  function v(h, f, m, S) {
    for (
      var E = null, R = null, O = f, I = (f = 0), Q = null;
      O !== null && I < m.length;
      I++
    ) {
      O.index > I ? ((Q = O), (O = null)) : (Q = O.sibling)
      var D = g(h, O, m[I], S)
      if (D === null) {
        O === null && (O = Q)
        break
      }
      e && O && D.alternate === null && t(h, O),
        (f = o(D, f, I)),
        R === null ? (E = D) : (R.sibling = D),
        (R = D),
        (O = Q)
    }
    if (I === m.length) return n(h, O), re && on(h, I), E
    if (O === null) {
      for (; I < m.length; I++)
        (O = p(h, m[I], S)),
          O !== null &&
            ((f = o(O, f, I)), R === null ? (E = O) : (R.sibling = O), (R = O))
      return re && on(h, I), E
    }
    for (O = r(h, O); I < m.length; I++)
      (Q = x(O, h, I, m[I], S)),
        Q !== null &&
          (e && Q.alternate !== null && O.delete(Q.key === null ? I : Q.key),
          (f = o(Q, f, I)),
          R === null ? (E = Q) : (R.sibling = Q),
          (R = Q))
    return (
      e &&
        O.forEach(function (ge) {
          return t(h, ge)
        }),
      re && on(h, I),
      E
    )
  }
  function y(h, f, m, S) {
    var E = sr(m)
    if (typeof E != 'function') throw Error(C(150))
    if (((m = E.call(m)), m == null)) throw Error(C(151))
    for (
      var R = (E = null), O = f, I = (f = 0), Q = null, D = m.next();
      O !== null && !D.done;
      I++, D = m.next()
    ) {
      O.index > I ? ((Q = O), (O = null)) : (Q = O.sibling)
      var ge = g(h, O, D.value, S)
      if (ge === null) {
        O === null && (O = Q)
        break
      }
      e && O && ge.alternate === null && t(h, O),
        (f = o(ge, f, I)),
        R === null ? (E = ge) : (R.sibling = ge),
        (R = ge),
        (O = Q)
    }
    if (D.done) return n(h, O), re && on(h, I), E
    if (O === null) {
      for (; !D.done; I++, D = m.next())
        (D = p(h, D.value, S)),
          D !== null &&
            ((f = o(D, f, I)), R === null ? (E = D) : (R.sibling = D), (R = D))
      return re && on(h, I), E
    }
    for (O = r(h, O); !D.done; I++, D = m.next())
      (D = x(O, h, I, D.value, S)),
        D !== null &&
          (e && D.alternate !== null && O.delete(D.key === null ? I : D.key),
          (f = o(D, f, I)),
          R === null ? (E = D) : (R.sibling = D),
          (R = D))
    return (
      e &&
        O.forEach(function (pe) {
          return t(h, pe)
        }),
      re && on(h, I),
      E
    )
  }
  function j(h, f, m, S) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Cn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case rl:
          e: {
            for (var E = m.key, R = f; R !== null; ) {
              if (R.key === E) {
                if (((E = m.type), E === Cn)) {
                  if (R.tag === 7) {
                    n(h, R.sibling),
                      (f = l(R, m.props.children)),
                      (f.return = h),
                      (h = f)
                    break e
                  }
                } else if (
                  R.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === $t &&
                    Mu(E) === R.type)
                ) {
                  n(h, R.sibling),
                    (f = l(R, m.props)),
                    (f.ref = fr(h, R, m)),
                    (f.return = h),
                    (h = f)
                  break e
                }
                n(h, R)
                break
              } else t(h, R)
              R = R.sibling
            }
            m.type === Cn
              ? ((f = fn(m.props.children, h.mode, S, m.key)),
                (f.return = h),
                (h = f))
              : ((S = Al(m.type, m.key, m.props, null, h.mode, S)),
                (S.ref = fr(h, f, m)),
                (S.return = h),
                (h = S))
          }
          return i(h)
        case jn:
          e: {
            for (R = m.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = h),
                    (h = f)
                  break e
                } else {
                  n(h, f)
                  break
                }
              else t(h, f)
              f = f.sibling
            }
            ;(f = Ei(m, h.mode, S)), (f.return = h), (h = f)
          }
          return i(h)
        case $t:
          return (R = m._init), j(h, f, R(m._payload), S)
      }
      if (gr(m)) return v(h, f, m, S)
      if (sr(m)) return y(h, f, m, S)
      hl(h, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = Ci(m, h.mode, S)), (f.return = h), (h = f)),
        i(h))
      : n(h, f)
  }
  return j
}
var Qn = Qd(!0),
  bd = Qd(!1),
  qr = {},
  St = rn(qr),
  Br = rn(qr),
  Ur = rn(qr)
function cn(e) {
  if (e === qr) throw Error(C(174))
  return e
}
function pa(e, t) {
  switch ((ee(Ur, t), ee(Br, e), ee(St, qr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wi(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wi(t, e))
  }
  ne(St), ee(St, t)
}
function bn() {
  ne(St), ne(Br), ne(Ur)
}
function Gd(e) {
  cn(Ur.current)
  var t = cn(St.current),
    n = Wi(t, e.type)
  t !== n && (ee(Br, e), ee(St, n))
}
function ha(e) {
  Br.current === e && (ne(St), ne(Br))
}
var le = rn(0)
function ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var yi = []
function ma() {
  for (var e = 0; e < yi.length; e++) yi[e]._workInProgressVersionPrimary = null
  yi.length = 0
}
var Tl = zt.ReactCurrentDispatcher,
  xi = zt.ReactCurrentBatchConfig,
  mn = 0,
  oe = null,
  he = null,
  ve = null,
  eo = !1,
  Cr = !1,
  Wr = 0,
  cm = 0
function Te() {
  throw Error(C(321))
}
function ga(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!mt(e[n], t[n])) return !1
  return !0
}
function va(e, t, n, r, l, o) {
  if (
    ((mn = o),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Tl.current = e === null || e.memoizedState === null ? hm : mm),
    (e = n(r, l)),
    Cr)
  ) {
    o = 0
    do {
      if (((Cr = !1), (Wr = 0), 25 <= o)) throw Error(C(301))
      ;(o += 1),
        (ve = he = null),
        (t.updateQueue = null),
        (Tl.current = gm),
        (e = n(r, l))
    } while (Cr)
  }
  if (
    ((Tl.current = to),
    (t = he !== null && he.next !== null),
    (mn = 0),
    (ve = he = oe = null),
    (eo = !1),
    t)
  )
    throw Error(C(300))
  return e
}
function ya() {
  var e = Wr !== 0
  return (Wr = 0), e
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ve === null ? (oe.memoizedState = ve = e) : (ve = ve.next = e), ve
}
function ot() {
  if (he === null) {
    var e = oe.alternate
    e = e !== null ? e.memoizedState : null
  } else e = he.next
  var t = ve === null ? oe.memoizedState : ve.next
  if (t !== null) (ve = t), (he = e)
  else {
    if (e === null) throw Error(C(310))
    ;(he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ve === null ? (oe.memoizedState = ve = e) : (ve = ve.next = e)
  }
  return ve
}
function Hr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function wi(e) {
  var t = ot(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = he,
    l = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (l !== null) {
      var i = l.next
      ;(l.next = o.next), (o.next = i)
    }
    ;(r.baseQueue = l = o), (n.pending = null)
  }
  if (l !== null) {
    ;(o = l.next), (r = r.baseState)
    var s = (i = null),
      u = null,
      c = o
    do {
      var d = c.lane
      if ((mn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action))
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }
        u === null ? ((s = u = p), (i = r)) : (u = u.next = p),
          (oe.lanes |= d),
          (gn |= d)
      }
      c = c.next
    } while (c !== null && c !== o)
    u === null ? (i = r) : (u.next = s),
      mt(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    l = e
    do (o = l.lane), (oe.lanes |= o), (gn |= o), (l = l.next)
    while (l !== e)
  } else l === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Si(e) {
  var t = ot(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState
  if (l !== null) {
    n.pending = null
    var i = (l = l.next)
    do (o = e(o, i.action)), (i = i.next)
    while (i !== l)
    mt(o, t.memoizedState) || (We = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Yd() {}
function Kd(e, t) {
  var n = oe,
    r = ot(),
    l = t(),
    o = !mt(r.memoizedState, l)
  if (
    (o && ((r.memoizedState = l), (We = !0)),
    (r = r.queue),
    xa(Xd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, Jd.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(C(349))
    mn & 30 || Zd(n, t, l)
  }
  return l
}
function Zd(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Jd(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), qd(t) && ef(e)
}
function Xd(e, t, n) {
  return n(function () {
    qd(t) && ef(e)
  })
}
function qd(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !mt(e, n)
  } catch {
    return !0
  }
}
function ef(e) {
  var t = Ot(e, 1)
  t !== null && ht(t, e, 1, -1)
}
function $u(e) {
  var t = vt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pm.bind(null, oe, e)),
    [t.memoizedState, e]
  )
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function tf() {
  return ot().memoizedState
}
function Ol(e, t, n, r) {
  var l = vt()
  ;(oe.flags |= e),
    (l.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r))
}
function ko(e, t, n, r) {
  var l = ot()
  r = r === void 0 ? null : r
  var o = void 0
  if (he !== null) {
    var i = he.memoizedState
    if (((o = i.destroy), r !== null && ga(r, i.deps))) {
      l.memoizedState = Vr(t, n, o, r)
      return
    }
  }
  ;(oe.flags |= e), (l.memoizedState = Vr(1 | t, n, o, r))
}
function Du(e, t) {
  return Ol(8390656, 8, e, t)
}
function xa(e, t) {
  return ko(2048, 8, e, t)
}
function nf(e, t) {
  return ko(4, 2, e, t)
}
function rf(e, t) {
  return ko(4, 4, e, t)
}
function lf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ko(4, 4, lf.bind(null, t, e), n)
  )
}
function wa() {}
function sf(e, t) {
  var n = ot()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function af(e, t) {
  var n = ot()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function uf(e, t, n) {
  return mn & 21
    ? (mt(n, t) || ((n = dd()), (oe.lanes |= n), (gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n))
}
function dm(e, t) {
  var n = Z
  ;(Z = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = xi.transition
  xi.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Z = n), (xi.transition = r)
  }
}
function cf() {
  return ot().memoizedState
}
function fm(e, t, n) {
  var r = Zt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    df(e))
  )
    ff(t, n)
  else if (((n = Ud(e, t, n, r)), n !== null)) {
    var l = $e()
    ht(n, e, r, l), pf(n, t, r)
  }
}
function pm(e, t, n) {
  var r = Zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (df(e)) ff(t, l)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n)
        if (((l.hasEagerState = !0), (l.eagerState = s), mt(s, i))) {
          var u = t.interleaved
          u === null
            ? ((l.next = l), da(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Ud(e, t, l, r)),
      n !== null && ((l = $e()), ht(n, e, r, l), pf(n, t, r))
  }
}
function df(e) {
  var t = e.alternate
  return e === oe || (t !== null && t === oe)
}
function ff(e, t) {
  Cr = eo = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function pf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n)
  }
}
var to = {
    readContext: lt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: lt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: lt,
    useEffect: Du,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ol(4194308, 4, lf.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Ol(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ol(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = vt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = vt()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = fm.bind(null, oe, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = vt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: $u,
    useDebugValue: wa,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e)
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0]
      return (e = dm.bind(null, e[1])), (vt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        l = vt()
      if (re) {
        if (n === void 0) throw Error(C(407))
        n = n()
      } else {
        if (((n = t()), xe === null)) throw Error(C(349))
        mn & 30 || Zd(r, t, n)
      }
      l.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (l.queue = o),
        Du(Xd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Vr(9, Jd.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = vt(),
        t = xe.identifierPrefix
      if (re) {
        var n = Nt,
          r = Et
        ;(n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Wr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = cm++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: lt,
    useCallback: sf,
    useContext: lt,
    useEffect: xa,
    useImperativeHandle: of,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: af,
    useReducer: wi,
    useRef: tf,
    useState: function () {
      return wi(Hr)
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var t = ot()
      return uf(t, he.memoizedState, e)
    },
    useTransition: function () {
      var e = wi(Hr)[0],
        t = ot().memoizedState
      return [e, t]
    },
    useMutableSource: Yd,
    useSyncExternalStore: Kd,
    useId: cf,
    unstable_isNewReconciler: !1,
  },
  gm = {
    readContext: lt,
    useCallback: sf,
    useContext: lt,
    useEffect: xa,
    useImperativeHandle: of,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: af,
    useReducer: Si,
    useRef: tf,
    useState: function () {
      return Si(Hr)
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var t = ot()
      return he === null ? (t.memoizedState = e) : uf(t, he.memoizedState, e)
    },
    useTransition: function () {
      var e = Si(Hr)[0],
        t = ot().memoizedState
      return [e, t]
    },
    useMutableSource: Yd,
    useSyncExternalStore: Kd,
    useId: cf,
    unstable_isNewReconciler: !1,
  }
function Gn(e, t) {
  try {
    var n = '',
      r = t
    do (n += Vp(r)), (r = r.return)
    while (r)
    var l = n
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: l, digest: null }
}
function ki(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function ds(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var vm = typeof WeakMap == 'function' ? WeakMap : Map
function hf(e, t, n) {
  ;(n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      ro || ((ro = !0), (Ss = r)), ds(e, t)
    }),
    n
  )
}
function mf(e, t, n) {
  ;(n = _t(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var l = t.value
    ;(n.payload = function () {
      return r(l)
    }),
      (n.callback = function () {
        ds(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        ds(e, t),
          typeof r != 'function' &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
      }),
    n
  )
}
function Fu(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new vm()
    var l = new Set()
    r.set(t, l)
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
  l.has(n) || (l.add(n), (e = Om.bind(null, e, t, n)), t.then(e, e))
}
function Bu(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Uu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _t(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var ym = zt.ReactCurrentOwner,
  We = !1
function Me(e, t, n, r) {
  t.child = e === null ? bd(t, null, n, r) : Qn(t, e.child, n, r)
}
function Wu(e, t, n, r, l) {
  n = n.render
  var o = t.ref
  return (
    Bn(t, l),
    (r = va(e, t, n, r, o, l)),
    (n = ya()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        It(e, t, l))
      : (re && n && oa(t), (t.flags |= 1), Me(e, t, r, l), t.child)
  )
}
function Hu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !_a(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), gf(e, t, o, r, l))
      : ((e = Al(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Mr), n(i, r) && e.ref === t.ref)
    )
      return It(e, t, l)
  }
  return (
    (t.flags |= 1),
    (e = Jt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function gf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps
    if (Mr(o, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (We = !0)
      else return (t.lanes = e.lanes), It(e, t, l)
  }
  return fs(e, t, n, r, l)
}
function vf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Ln, Ge),
        (Ge |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Ln, Ge),
          (Ge |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ee(Ln, Ge),
        (Ge |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Ln, Ge),
      (Ge |= r)
  return Me(e, t, l, n), t.child
}
function yf(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function fs(e, t, n, r, l) {
  var o = Ve(n) ? pn : ze.current
  return (
    (o = Hn(t, o)),
    Bn(t, l),
    (n = va(e, t, n, r, o, l)),
    (r = ya()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        It(e, t, l))
      : (re && r && oa(t), (t.flags |= 1), Me(e, t, n, l), t.child)
  )
}
function Vu(e, t, n, r, l) {
  if (Ve(n)) {
    var o = !0
    Gl(t)
  } else o = !1
  if ((Bn(t, l), t.stateNode === null))
    Il(e, t), Vd(t, n, r), cs(t, n, r, l), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps
    i.props = s
    var u = i.context,
      c = n.contextType
    typeof c == 'object' && c !== null
      ? (c = lt(c))
      : ((c = Ve(n) ? pn : ze.current), (c = Hn(t, c)))
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== c) && Au(t, i, r, c)),
      (Dt = !1)
    var g = t.memoizedState
    ;(i.state = g),
      Xl(t, r, i, l),
      (u = t.memoizedState),
      s !== r || g !== u || He.current || Dt
        ? (typeof d == 'function' && (us(t, n, d, r), (u = t.memoizedState)),
          (s = Dt || Lu(t, n, s, r, g, u, c))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(i = t.stateNode),
      Wd(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : ct(t.type, s)),
      (i.props = c),
      (p = t.pendingProps),
      (g = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = lt(u))
        : ((u = Ve(n) ? pn : ze.current), (u = Hn(t, u)))
    var x = n.getDerivedStateFromProps
    ;(d =
      typeof x == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== p || g !== u) && Au(t, i, r, u)),
      (Dt = !1),
      (g = t.memoizedState),
      (i.state = g),
      Xl(t, r, i, l)
    var v = t.memoizedState
    s !== p || g !== v || He.current || Dt
      ? (typeof x == 'function' && (us(t, n, x, r), (v = t.memoizedState)),
        (c = Dt || Lu(t, n, c, r, g, v, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, v, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, v, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ps(e, t, n, r, o, l)
}
function ps(e, t, n, r, l, o) {
  yf(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return l && Ru(t, n, !1), It(e, t, o)
  ;(r = t.stateNode), (ym.current = t)
  var s =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Qn(t, e.child, null, o)), (t.child = Qn(t, null, s, o)))
      : Me(e, t, s, o),
    (t.memoizedState = r.state),
    l && Ru(t, n, !0),
    t.child
  )
}
function xf(e) {
  var t = e.stateNode
  t.pendingContext
    ? _u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && _u(e, t.context, !1),
    pa(e, t.containerInfo)
}
function Qu(e, t, n, r, l) {
  return Vn(), sa(l), (t.flags |= 256), Me(e, t, n, r), t.child
}
var hs = { dehydrated: null, treeContext: null, retryLane: 0 }
function ms(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function wf(e, t, n) {
  var r = t.pendingProps,
    l = le.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(le, l & 1),
    e === null)
  )
    return (
      ss(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Eo(i, r, 0, null)),
              (e = fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ms(n)),
              (t.memoizedState = hs),
              e)
            : Sa(t, i))
    )
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return xm(e, t, i, r, s, l, n)
  if (o) {
    ;(o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling)
    var u = { mode: 'hidden', children: r.children }
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Jt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Jt(s, o)) : ((o = fn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ms(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = hs),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Jt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Sa(e, t) {
  return (
    (t = Eo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function ml(e, t, n, r) {
  return (
    r !== null && sa(r),
    Qn(t, e.child, null, n),
    (e = Sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function xm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ki(Error(C(422)))), ml(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Eo({ mode: 'visible', children: r.children }, l, 0, null)),
          (o = fn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Qn(t, e.child, null, i),
          (t.child.memoizedState = ms(i)),
          (t.memoizedState = hs),
          o)
  if (!(t.mode & 1)) return ml(e, t, i, null)
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (o = Error(C(419))), (r = ki(o, r, void 0)), ml(e, t, i, r)
  }
  if (((s = (i & e.childLanes) !== 0), We || s)) {
    if (((r = xe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2
          break
        case 16:
          l = 8
          break
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32
          break
        case 536870912:
          l = 268435456
          break
        default:
          l = 0
      }
      ;(l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ot(e, l), ht(r, e, l, -1))
    }
    return Pa(), (r = ki(Error(C(421)))), ml(e, t, i, r)
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Im.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ye = Gt(l.nextSibling)),
      (Ke = t),
      (re = !0),
      (ft = null),
      e !== null &&
        ((et[tt++] = Et),
        (et[tt++] = Nt),
        (et[tt++] = hn),
        (Et = e.id),
        (Nt = e.overflow),
        (hn = t)),
      (t = Sa(t, r.children)),
      (t.flags |= 4096),
      t)
}
function bu(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), as(e.return, t, n)
}
function ji(e, t, n, r, l) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l))
}
function Sf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail
  if ((Me(e, t, r.children, n), (r = le.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bu(e, n, t)
        else if (e.tag === 19) bu(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((ee(le, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ql(e) === null && (l = n),
            (n = n.sibling)
        ;(n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ji(t, !1, l, n, o)
        break
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ql(e) === null)) {
            t.child = l
            break
          }
          ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
        }
        ji(t, !0, n, null, o)
        break
      case 'together':
        ji(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Il(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(C(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Jt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function wm(e, t, n) {
  switch (t.tag) {
    case 3:
      xf(t), Vn()
      break
    case 5:
      Gd(t)
      break
    case 1:
      Ve(t.type) && Gl(t)
      break
    case 4:
      pa(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value
      ee(Zl, r._currentValue), (r._currentValue = l)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(le, le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? wf(e, t, n)
            : (ee(le, le.current & 1),
              (e = It(e, t, n)),
              e !== null ? e.sibling : null)
      ee(le, le.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sf(e, t, n)
        t.flags |= 128
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(le, le.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), vf(e, t, n)
  }
  return It(e, t, n)
}
var kf, gs, jf, Cf
kf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
gs = function () {}
jf = function (e, t, n, r) {
  var l = e.memoizedProps
  if (l !== r) {
    ;(e = t.stateNode), cn(St.current)
    var o = null
    switch (n) {
      case 'input':
        ;(l = Di(e, l)), (r = Di(e, r)), (o = [])
        break
      case 'select':
        ;(l = ie({}, l, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(l = Ui(e, l)), (r = Ui(e, r)), (o = [])
        break
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ql)
    }
    Hi(n, r)
    var i
    n = null
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var s = l[c]
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Rr.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null))
    for (c in r) {
      var u = r[c]
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === 'style')
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''))
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]))
          } else n || (o || (o = []), o.push(c, n)), (n = u)
        else
          c === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (o = o || []).push(c, '' + u)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (Rr.hasOwnProperty(c)
                  ? (u != null && c === 'onScroll' && te('scroll', e),
                    o || s === u || (o = []))
                  : (o = o || []).push(c, u))
    }
    n && (o = o || []).push('style', n)
    var c = o
    ;(t.updateQueue = c) && (t.flags |= 4)
  }
}
Cf = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function pr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling)
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Sm(e, t, n) {
  var r = t.pendingProps
  switch ((ia(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null
    case 1:
      return Ve(t.type) && bl(), Oe(t), null
    case 3:
      return (
        (r = t.stateNode),
        bn(),
        ne(He),
        ne(ze),
        ma(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (Cs(ft), (ft = null)))),
        gs(e, t),
        Oe(t),
        null
      )
    case 5:
      ha(t)
      var l = cn(Ur.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        jf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166))
          return Oe(t), null
        }
        if (((e = cn(St.current)), pl(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[yt] = t), (r[Fr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              te('cancel', r), te('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              te('load', r)
              break
            case 'video':
            case 'audio':
              for (l = 0; l < yr.length; l++) te(yr[l], r)
              break
            case 'source':
              te('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              te('error', r), te('load', r)
              break
            case 'details':
              te('toggle', r)
              break
            case 'input':
              tu(r, o), te('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                te('invalid', r)
              break
            case 'textarea':
              ru(r, o), te('invalid', r)
          }
          Hi(n, o), (l = null)
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i]
              i === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      fl(r.textContent, s, e),
                    (l = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      fl(r.textContent, s, e),
                    (l = ['children', '' + s]))
                : Rr.hasOwnProperty(i) &&
                  s != null &&
                  i === 'onScroll' &&
                  te('scroll', r)
            }
          switch (n) {
            case 'input':
              ll(r), nu(r, o, !0)
              break
            case 'textarea':
              ll(r), lu(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = Ql)
          }
          ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Zc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[yt] = t),
            (e[Fr] = r),
            kf(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = Vi(n, r)), n)) {
              case 'dialog':
                te('cancel', e), te('close', e), (l = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                te('load', e), (l = r)
                break
              case 'video':
              case 'audio':
                for (l = 0; l < yr.length; l++) te(yr[l], e)
                l = r
                break
              case 'source':
                te('error', e), (l = r)
                break
              case 'img':
              case 'image':
              case 'link':
                te('error', e), te('load', e), (l = r)
                break
              case 'details':
                te('toggle', e), (l = r)
                break
              case 'input':
                tu(e, r), (l = Di(e, r)), te('invalid', e)
                break
              case 'option':
                l = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ie({}, r, { value: void 0 })),
                  te('invalid', e)
                break
              case 'textarea':
                ru(e, r), (l = Ui(e, r)), te('invalid', e)
                break
              default:
                l = r
            }
            Hi(n, l), (s = l)
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o]
                o === 'style'
                  ? qc(e, u)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Jc(e, u))
                    : o === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && Tr(e, u)
                        : typeof u == 'number' && Tr(e, '' + u)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Rr.hasOwnProperty(o)
                          ? u != null && o === 'onScroll' && te('scroll', e)
                          : u != null && Qs(e, o, u, i))
              }
            switch (n) {
              case 'input':
                ll(e), nu(e, r, !1)
                break
              case 'textarea':
                ll(e), lu(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + en(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Mn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Mn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof l.onClick == 'function' && (e.onclick = Ql)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Oe(t), null
    case 6:
      if (e && t.stateNode != null) Cf(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166))
        if (((n = cn(Ur.current)), cn(St.current), pl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                fl(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fl(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r)
      }
      return Oe(t), null
    case 13:
      if (
        (ne(le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Ye !== null && t.mode & 1 && !(t.flags & 128))
          Bd(), Vn(), (t.flags |= 98560), (o = !1)
        else if (((o = pl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317))
            o[yt] = t
          } else
            Vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Oe(t), (o = !1)
        } else ft !== null && (Cs(ft), (ft = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || le.current & 1 ? me === 0 && (me = 3) : Pa())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null)
    case 4:
      return (
        bn(), gs(e, t), e === null && $r(t.stateNode.containerInfo), Oe(t), null
      )
    case 10:
      return ca(t.type._context), Oe(t), null
    case 17:
      return Ve(t.type) && bl(), Oe(t), null
    case 19:
      if ((ne(le), (o = t.memoizedState), o === null)) return Oe(t), null
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) pr(o, !1)
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ql(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    pr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ee(le, (le.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            ce() > Yn &&
            ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = ql(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !re)
            )
              return Oe(t), null
          } else
            2 * ce() - o.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ce()),
          (t.sibling = null),
          (n = le.current),
          ee(le, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null)
    case 22:
    case 23:
      return (
        Na(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(C(156, t.tag))
}
function km(e, t) {
  switch ((ia(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && bl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        bn(),
        ne(He),
        ne(ze),
        ma(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ha(t), null
    case 13:
      if (
        (ne(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340))
        Vn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ne(le), null
    case 4:
      return bn(), null
    case 10:
      return ca(t.type._context), null
    case 22:
    case 23:
      return Na(), null
    case 24:
      return null
    default:
      return null
  }
}
var gl = !1,
  Ie = !1,
  jm = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null
function zn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ae(e, t, r)
      }
    else n.current = null
}
function vs(e, t, n) {
  try {
    n()
  } catch (r) {
    ae(e, t, r)
  }
}
var Gu = !1
function Cm(e, t) {
  if (((es = Wl), (e = Pd()), la(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var l = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            s = -1,
            u = -1,
            c = 0,
            d = 0,
            p = e,
            g = null
          t: for (;;) {
            for (
              var x;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (g = p), (p = x)
            for (;;) {
              if (p === e) break t
              if (
                (g === n && ++c === l && (s = i),
                g === o && ++d === r && (u = i),
                (x = p.nextSibling) !== null)
              )
                break
              ;(p = g), (g = p.parentNode)
            }
            p = x
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (ts = { focusedElem: e, selectionRange: n }, Wl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e)
    else
      for (; L !== null; ) {
        t = L
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    j = v.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ct(t.type, y),
                      j,
                    )
                  h.__reactInternalSnapshotBeforeUpdate = f
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(C(163))
            }
        } catch (S) {
          ae(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (L = e)
          break
        }
        L = t.return
      }
  return (v = Gu), (Gu = !1), v
}
function Er(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next)
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy
        ;(l.destroy = void 0), o !== void 0 && vs(t, n, o)
      }
      l = l.next
    } while (l !== r)
  }
}
function jo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function ys(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Ef(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Ef(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[Fr], delete t[ls], delete t[im], delete t[sm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Nf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Yu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nf(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function xs(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ql))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), (e = e.sibling)
}
function ws(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ws(e, t, n), e = e.sibling; e !== null; ) ws(e, t, n), (e = e.sibling)
}
var Ee = null,
  dt = !1
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Pf(e, t, n), (n = n.sibling)
}
function Pf(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == 'function')
    try {
      wt.onCommitFiberUnmount(mo, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || zn(n, t)
    case 6:
      var r = Ee,
        l = dt
      ;(Ee = null),
        Mt(e, t, n),
        (Ee = r),
        (dt = l),
        Ee !== null &&
          (dt
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode))
      break
    case 18:
      Ee !== null &&
        (dt
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? gi(e.parentNode, n)
              : e.nodeType === 1 && gi(e, n),
            Lr(e))
          : gi(Ee, n.stateNode))
      break
    case 4:
      ;(r = Ee),
        (l = dt),
        (Ee = n.stateNode.containerInfo),
        (dt = !0),
        Mt(e, t, n),
        (Ee = r),
        (dt = l)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next
        do {
          var o = l,
            i = o.destroy
          ;(o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && vs(n, t, i),
            (l = l.next)
        } while (l !== r)
      }
      Mt(e, t, n)
      break
    case 1:
      if (
        !Ie &&
        (zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          ae(n, t, s)
        }
      Mt(e, t, n)
      break
    case 21:
      Mt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), Mt(e, t, n), (Ie = r))
        : Mt(e, t, n)
      break
    default:
      Mt(e, t, n)
  }
}
function Ku(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new jm()),
      t.forEach(function (r) {
        var l = zm.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(l, l))
      })
  }
}
function ut(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r]
      try {
        var o = e,
          i = t,
          s = i
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(Ee = s.stateNode), (dt = !1)
              break e
            case 3:
              ;(Ee = s.stateNode.containerInfo), (dt = !0)
              break e
            case 4:
              ;(Ee = s.stateNode.containerInfo), (dt = !0)
              break e
          }
          s = s.return
        }
        if (Ee === null) throw Error(C(160))
        Pf(o, i, l), (Ee = null), (dt = !1)
        var u = l.alternate
        u !== null && (u.return = null), (l.return = null)
      } catch (c) {
        ae(l, t, c)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _f(t, e), (t = t.sibling)
}
function _f(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), gt(e), r & 4)) {
        try {
          Er(3, e, e.return), jo(3, e)
        } catch (y) {
          ae(e, e.return, y)
        }
        try {
          Er(5, e, e.return)
        } catch (y) {
          ae(e, e.return, y)
        }
      }
      break
    case 1:
      ut(t, e), gt(e), r & 512 && n !== null && zn(n, n.return)
      break
    case 5:
      if (
        (ut(t, e),
        gt(e),
        r & 512 && n !== null && zn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode
        try {
          Tr(l, '')
        } catch (y) {
          ae(e, e.return, y)
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && Yc(l, o),
              Vi(s, i)
            var c = Vi(s, o)
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                p = u[i + 1]
              d === 'style'
                ? qc(l, p)
                : d === 'dangerouslySetInnerHTML'
                  ? Jc(l, p)
                  : d === 'children'
                    ? Tr(l, p)
                    : Qs(l, d, p, c)
            }
            switch (s) {
              case 'input':
                Fi(l, o)
                break
              case 'textarea':
                Kc(l, o)
                break
              case 'select':
                var g = l._wrapperState.wasMultiple
                l._wrapperState.wasMultiple = !!o.multiple
                var x = o.value
                x != null
                  ? Mn(l, !!o.multiple, x, !1)
                  : g !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Mn(l, !!o.multiple, o.defaultValue, !0)
                      : Mn(l, !!o.multiple, o.multiple ? [] : '', !1))
            }
            l[Fr] = o
          } catch (y) {
            ae(e, e.return, y)
          }
      }
      break
    case 6:
      if ((ut(t, e), gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162))
        ;(l = e.stateNode), (o = e.memoizedProps)
        try {
          l.nodeValue = o
        } catch (y) {
          ae(e, e.return, y)
        }
      }
      break
    case 3:
      if (
        (ut(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lr(t.containerInfo)
        } catch (y) {
          ae(e, e.return, y)
        }
      break
    case 4:
      ut(t, e), gt(e)
      break
    case 13:
      ut(t, e),
        gt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ca = ce())),
        r & 4 && Ku(e)
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (c = Ie) || d), ut(t, e), (Ie = c)) : ut(t, e),
        gt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (p = L = d; L !== null; ) {
              switch (((g = L), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, g, g.return)
                  break
                case 1:
                  zn(g, g.return)
                  var v = g.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = g), (n = g.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (y) {
                      ae(r, n, y)
                    }
                  }
                  break
                case 5:
                  zn(g, g.return)
                  break
                case 22:
                  if (g.memoizedState !== null) {
                    Ju(p)
                    continue
                  }
              }
              x !== null ? ((x.return = g), (L = x)) : Ju(p)
            }
            d = d.sibling
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p
              try {
                ;(l = p.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = Xc('display', i)))
              } catch (y) {
                ae(e, e.return, y)
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? '' : p.memoizedProps
              } catch (y) {
                ae(e, e.return, y)
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ;(p.child.return = p), (p = p.child)
            continue
          }
          if (p === e) break e
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e
            d === p && (d = null), (p = p.return)
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling)
        }
      }
      break
    case 19:
      ut(t, e), gt(e), r & 4 && Ku(e)
      break
    case 21:
      break
    default:
      ut(t, e), gt(e)
  }
}
function gt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nf(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(C(160))
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode
          r.flags & 32 && (Tr(l, ''), (r.flags &= -33))
          var o = Yu(e)
          ws(e, o, l)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Yu(e)
          xs(e, s, i)
          break
        default:
          throw Error(C(161))
      }
    } catch (u) {
      ae(e, e.return, u)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Em(e, t, n) {
  ;(L = e), Rf(e)
}
function Rf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L,
      o = l.child
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || gl
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || Ie
        s = gl
        var c = Ie
        if (((gl = i), (Ie = u) && !c))
          for (L = l; L !== null; )
            (i = L),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Xu(l)
                : u !== null
                  ? ((u.return = i), (L = u))
                  : Xu(l)
        for (; o !== null; ) (L = o), Rf(o), (o = o.sibling)
        ;(L = l), (gl = s), (Ie = c)
      }
      Zu(e)
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (L = o)) : Zu(e)
  }
}
function Zu(e) {
  for (; L !== null; ) {
    var t = L
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || jo(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount()
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var o = t.updateQueue
              o !== null && zu(t, o, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                zu(t, i, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var u = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus()
                    break
                  case 'img':
                    u.src && (n.src = u.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate
                if (c !== null) {
                  var d = c.memoizedState
                  if (d !== null) {
                    var p = d.dehydrated
                    p !== null && Lr(p)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(C(163))
          }
        Ie || (t.flags & 512 && ys(t))
      } catch (g) {
        ae(t, t.return, g)
      }
    }
    if (t === e) {
      L = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (L = n)
      break
    }
    L = t.return
  }
}
function Ju(e) {
  for (; L !== null; ) {
    var t = L
    if (t === e) {
      L = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (L = n)
      break
    }
    L = t.return
  }
}
function Xu(e) {
  for (; L !== null; ) {
    var t = L
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            jo(4, t)
          } catch (u) {
            ae(t, n, u)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var l = t.return
            try {
              r.componentDidMount()
            } catch (u) {
              ae(t, l, u)
            }
          }
          var o = t.return
          try {
            ys(t)
          } catch (u) {
            ae(t, o, u)
          }
          break
        case 5:
          var i = t.return
          try {
            ys(t)
          } catch (u) {
            ae(t, i, u)
          }
      }
    } catch (u) {
      ae(t, t.return, u)
    }
    if (t === e) {
      L = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (L = s)
      break
    }
    L = t.return
  }
}
var Nm = Math.ceil,
  no = zt.ReactCurrentDispatcher,
  ka = zt.ReactCurrentOwner,
  rt = zt.ReactCurrentBatchConfig,
  V = 0,
  xe = null,
  fe = null,
  Ne = 0,
  Ge = 0,
  Ln = rn(0),
  me = 0,
  Qr = null,
  gn = 0,
  Co = 0,
  ja = 0,
  Nr = null,
  Ue = null,
  Ca = 0,
  Yn = 1 / 0,
  jt = null,
  ro = !1,
  Ss = null,
  Kt = null,
  vl = !1,
  Wt = null,
  lo = 0,
  Pr = 0,
  ks = null,
  zl = -1,
  Ll = 0
function $e() {
  return V & 6 ? ce() : zl !== -1 ? zl : (zl = ce())
}
function Zt(e) {
  return e.mode & 1
    ? V & 2 && Ne !== 0
      ? Ne & -Ne
      : um.transition !== null
        ? (Ll === 0 && (Ll = dd()), Ll)
        : ((e = Z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yd(e.type))),
          e)
    : 1
}
function ht(e, t, n, r) {
  if (50 < Pr) throw ((Pr = 0), (ks = null), Error(C(185)))
  Zr(e, n, r),
    (!(V & 2) || e !== xe) &&
      (e === xe && (!(V & 2) && (Co |= n), me === 4 && Bt(e, Ne)),
      Qe(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Yn = ce() + 500), wo && ln()))
}
function Qe(e, t) {
  var n = e.callbackNode
  uh(e, t)
  var r = Ul(e, e === xe ? Ne : 0)
  if (r === 0)
    n !== null && su(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && su(n), t === 1))
      e.tag === 0 ? am(qu.bind(null, e)) : $d(qu.bind(null, e)),
        lm(function () {
          !(V & 6) && ln()
        }),
        (n = null)
    else {
      switch (fd(r)) {
        case 1:
          n = Zs
          break
        case 4:
          n = ud
          break
        case 16:
          n = Bl
          break
        case 536870912:
          n = cd
          break
        default:
          n = Bl
      }
      n = $f(n, Tf.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Tf(e, t) {
  if (((zl = -1), (Ll = 0), V & 6)) throw Error(C(327))
  var n = e.callbackNode
  if (Un() && e.callbackNode !== n) return null
  var r = Ul(e, e === xe ? Ne : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = oo(e, r)
  else {
    t = r
    var l = V
    V |= 2
    var o = If()
    ;(xe !== e || Ne !== t) && ((jt = null), (Yn = ce() + 500), dn(e, t))
    do
      try {
        Rm()
        break
      } catch (s) {
        Of(e, s)
      }
    while (1)
    ua(),
      (no.current = o),
      (V = l),
      fe !== null ? (t = 0) : ((xe = null), (Ne = 0), (t = me))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ki(e)), l !== 0 && ((r = l), (t = js(e, l)))), t === 1)
    )
      throw ((n = Qr), dn(e, 0), Bt(e, r), Qe(e, ce()), n)
    if (t === 6) Bt(e, r)
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Pm(l) &&
          ((t = oo(e, r)),
          t === 2 && ((o = Ki(e)), o !== 0 && ((r = o), (t = js(e, o)))),
          t === 1))
      )
        throw ((n = Qr), dn(e, 0), Bt(e, r), Qe(e, ce()), n)
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345))
        case 2:
          sn(e, Ue, jt)
          break
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = Ca + 500 - ce()), 10 < t))
          ) {
            if (Ul(e, 0) !== 0) break
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & l)
              break
            }
            e.timeoutHandle = rs(sn.bind(null, e, Ue, jt), t)
            break
          }
          sn(e, Ue, jt)
          break
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - pt(r)
            ;(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o)
          }
          if (
            ((r = l),
            (r = ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Nm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rs(sn.bind(null, e, Ue, jt), r)
            break
          }
          sn(e, Ue, jt)
          break
        case 5:
          sn(e, Ue, jt)
          break
        default:
          throw Error(C(329))
      }
    }
  }
  return Qe(e, ce()), e.callbackNode === n ? Tf.bind(null, e) : null
}
function js(e, t) {
  var n = Nr
  return (
    e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
    (e = oo(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Cs(t)),
    e
  )
}
function Cs(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e)
}
function Pm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot
          l = l.value
          try {
            if (!mt(o(), l)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Bt(e, t) {
  for (
    t &= ~ja,
      t &= ~Co,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function qu(e) {
  if (V & 6) throw Error(C(327))
  Un()
  var t = Ul(e, 0)
  if (!(t & 1)) return Qe(e, ce()), null
  var n = oo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Ki(e)
    r !== 0 && ((t = r), (n = js(e, r)))
  }
  if (n === 1) throw ((n = Qr), dn(e, 0), Bt(e, t), Qe(e, ce()), n)
  if (n === 6) throw Error(C(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Ue, jt),
    Qe(e, ce()),
    null
  )
}
function Ea(e, t) {
  var n = V
  V |= 1
  try {
    return e(t)
  } finally {
    ;(V = n), V === 0 && ((Yn = ce() + 500), wo && ln())
  }
}
function vn(e) {
  Wt !== null && Wt.tag === 0 && !(V & 6) && Un()
  var t = V
  V |= 1
  var n = rt.transition,
    r = Z
  try {
    if (((rt.transition = null), (Z = 1), e)) return e()
  } finally {
    ;(Z = r), (rt.transition = n), (V = t), !(V & 6) && ln()
  }
}
function Na() {
  ;(Ge = Ln.current), ne(Ln)
}
function dn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), rm(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n
      switch ((ia(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && bl()
          break
        case 3:
          bn(), ne(He), ne(ze), ma()
          break
        case 5:
          ha(r)
          break
        case 4:
          bn()
          break
        case 13:
          ne(le)
          break
        case 19:
          ne(le)
          break
        case 10:
          ca(r.type._context)
          break
        case 22:
        case 23:
          Na()
      }
      n = n.return
    }
  if (
    ((xe = e),
    (fe = e = Jt(e.current, null)),
    (Ne = Ge = t),
    (me = 0),
    (Qr = null),
    (ja = Co = gn = 0),
    (Ue = Nr = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var l = r.next,
          o = n.pending
        if (o !== null) {
          var i = o.next
          ;(o.next = l), (r.next = i)
        }
        n.pending = r
      }
    un = null
  }
  return e
}
function Of(e, t) {
  do {
    var n = fe
    try {
      if ((ua(), (Tl.current = to), eo)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var l = r.queue
          l !== null && (l.pending = null), (r = r.next)
        }
        eo = !1
      }
      if (
        ((mn = 0),
        (ve = he = oe = null),
        (Cr = !1),
        (Wr = 0),
        (ka.current = null),
        n === null || n.return === null)
      ) {
        ;(me = 1), (Qr = t), (fe = null)
        break
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t
        if (
          ((t = Ne),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var c = u,
            d = s,
            p = d.tag
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = d.alternate
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var x = Bu(i)
          if (x !== null) {
            ;(x.flags &= -257),
              Uu(x, i, s, o, t),
              x.mode & 1 && Fu(o, c, t),
              (t = x),
              (u = c)
            var v = t.updateQueue
            if (v === null) {
              var y = new Set()
              y.add(u), (t.updateQueue = y)
            } else v.add(u)
            break e
          } else {
            if (!(t & 1)) {
              Fu(o, c, t), Pa()
              break e
            }
            u = Error(C(426))
          }
        } else if (re && s.mode & 1) {
          var j = Bu(i)
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Uu(j, i, s, o, t),
              sa(Gn(u, s))
            break e
          }
        }
        ;(o = u = Gn(u, s)),
          me !== 4 && (me = 2),
          Nr === null ? (Nr = [o]) : Nr.push(o),
          (o = i)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var h = hf(o, u, t)
              Iu(o, h)
              break e
            case 1:
              s = u
              var f = o.type,
                m = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Kt === null || !Kt.has(m))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var S = mf(o, s, t)
                Iu(o, S)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      Lf(n)
    } catch (E) {
      ;(t = E), fe === n && n !== null && (fe = n = n.return)
      continue
    }
    break
  } while (1)
}
function If() {
  var e = no.current
  return (no.current = to), e === null ? to : e
}
function Pa() {
  ;(me === 0 || me === 3 || me === 2) && (me = 4),
    xe === null || (!(gn & 268435455) && !(Co & 268435455)) || Bt(xe, Ne)
}
function oo(e, t) {
  var n = V
  V |= 2
  var r = If()
  ;(xe !== e || Ne !== t) && ((jt = null), dn(e, t))
  do
    try {
      _m()
      break
    } catch (l) {
      Of(e, l)
    }
  while (1)
  if ((ua(), (V = n), (no.current = r), fe !== null)) throw Error(C(261))
  return (xe = null), (Ne = 0), me
}
function _m() {
  for (; fe !== null; ) zf(fe)
}
function Rm() {
  for (; fe !== null && !eh(); ) zf(fe)
}
function zf(e) {
  var t = Mf(e.alternate, e, Ge)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Lf(e) : (fe = t),
    (ka.current = null)
}
function Lf(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = km(n, t)), n !== null)) {
        ;(n.flags &= 32767), (fe = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(me = 6), (fe = null)
        return
      }
    } else if (((n = Sm(n, t, Ge)), n !== null)) {
      fe = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      fe = t
      return
    }
    fe = t = e
  } while (t !== null)
  me === 0 && (me = 5)
}
function sn(e, t, n) {
  var r = Z,
    l = rt.transition
  try {
    ;(rt.transition = null), (Z = 1), Tm(e, t, n, r)
  } finally {
    ;(rt.transition = l), (Z = r)
  }
  return null
}
function Tm(e, t, n, r) {
  do Un()
  while (Wt !== null)
  if (V & 6) throw Error(C(327))
  n = e.finishedWork
  var l = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (ch(e, o),
    e === xe && ((fe = xe = null), (Ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vl ||
      ((vl = !0),
      $f(Bl, function () {
        return Un(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = rt.transition), (rt.transition = null)
    var i = Z
    Z = 1
    var s = V
    ;(V |= 4),
      (ka.current = null),
      Cm(e, n),
      _f(n, e),
      Zh(ts),
      (Wl = !!es),
      (ts = es = null),
      (e.current = n),
      Em(n),
      th(),
      (V = s),
      (Z = i),
      (rt.transition = o)
  } else e.current = n
  if (
    (vl && ((vl = !1), (Wt = e), (lo = l)),
    (o = e.pendingLanes),
    o === 0 && (Kt = null),
    lh(n.stateNode),
    Qe(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest })
  if (ro) throw ((ro = !1), (e = Ss), (Ss = null), e)
  return (
    lo & 1 && e.tag !== 0 && Un(),
    (o = e.pendingLanes),
    o & 1 ? (e === ks ? Pr++ : ((Pr = 0), (ks = e))) : (Pr = 0),
    ln(),
    null
  )
}
function Un() {
  if (Wt !== null) {
    var e = fd(lo),
      t = rt.transition,
      n = Z
    try {
      if (((rt.transition = null), (Z = 16 > e ? 16 : e), Wt === null))
        var r = !1
      else {
        if (((e = Wt), (Wt = null), (lo = 0), V & 6)) throw Error(C(331))
        var l = V
        for (V |= 4, L = e.current; L !== null; ) {
          var o = L,
            i = o.child
          if (L.flags & 16) {
            var s = o.deletions
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u]
                for (L = c; L !== null; ) {
                  var d = L
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, d, o)
                  }
                  var p = d.child
                  if (p !== null) (p.return = d), (L = p)
                  else
                    for (; L !== null; ) {
                      d = L
                      var g = d.sibling,
                        x = d.return
                      if ((Ef(d), d === c)) {
                        L = null
                        break
                      }
                      if (g !== null) {
                        ;(g.return = x), (L = g)
                        break
                      }
                      L = x
                    }
                }
              }
              var v = o.alternate
              if (v !== null) {
                var y = v.child
                if (y !== null) {
                  v.child = null
                  do {
                    var j = y.sibling
                    ;(y.sibling = null), (y = j)
                  } while (y !== null)
                }
              }
              L = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (L = i)
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return)
                }
              var h = o.sibling
              if (h !== null) {
                ;(h.return = o.return), (L = h)
                break e
              }
              L = o.return
            }
        }
        var f = e.current
        for (L = f; L !== null; ) {
          i = L
          var m = i.child
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (L = m)
          else
            e: for (i = f; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jo(9, s)
                  }
                } catch (E) {
                  ae(s, s.return, E)
                }
              if (s === i) {
                L = null
                break e
              }
              var S = s.sibling
              if (S !== null) {
                ;(S.return = s.return), (L = S)
                break e
              }
              L = s.return
            }
        }
        if (
          ((V = l), ln(), wt && typeof wt.onPostCommitFiberRoot == 'function')
        )
          try {
            wt.onPostCommitFiberRoot(mo, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(Z = n), (rt.transition = t)
    }
  }
  return !1
}
function ec(e, t, n) {
  ;(t = Gn(n, t)),
    (t = hf(e, t, 1)),
    (e = Yt(e, t, 1)),
    (t = $e()),
    e !== null && (Zr(e, 1, t), Qe(e, t))
}
function ae(e, t, n) {
  if (e.tag === 3) ec(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ec(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Kt === null || !Kt.has(r)))
        ) {
          ;(e = Gn(n, e)),
            (e = mf(t, e, 1)),
            (t = Yt(t, e, 1)),
            (e = $e()),
            t !== null && (Zr(t, 1, e), Qe(t, e))
          break
        }
      }
      t = t.return
    }
}
function Om(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Ne & n) === n &&
      (me === 4 || (me === 3 && (Ne & 130023424) === Ne && 500 > ce() - Ca)
        ? dn(e, 0)
        : (ja |= n)),
    Qe(e, t)
}
function Af(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sl), (sl <<= 1), !(sl & 130023424) && (sl = 4194304))
      : (t = 1))
  var n = $e()
  ;(e = Ot(e, t)), e !== null && (Zr(e, t, n), Qe(e, n))
}
function Im(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Af(e, n)
}
function zm(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState
      l !== null && (n = l.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(C(314))
  }
  r !== null && r.delete(t), Af(e, n)
}
var Mf
Mf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || He.current) We = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), wm(e, t, n)
      We = !!(e.flags & 131072)
    }
  else (We = !1), re && t.flags & 1048576 && Dd(t, Kl, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Il(e, t), (e = t.pendingProps)
      var l = Hn(t, ze.current)
      Bn(t, n), (l = va(null, t, r, e, l, n))
      var o = ya()
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((o = !0), Gl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fa(t),
            (l.updater = So),
            (t.stateNode = l),
            (l._reactInternals = t),
            cs(t, r, e, n),
            (t = ps(null, t, r, !0, o, n)))
          : ((t.tag = 0), re && o && oa(t), Me(null, t, l, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Il(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Am(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = fs(null, t, r, e, n)
            break e
          case 1:
            t = Vu(null, t, r, e, n)
            break e
          case 11:
            t = Wu(null, t, r, e, n)
            break e
          case 14:
            t = Hu(null, t, r, ct(r.type, e), n)
            break e
        }
        throw Error(C(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        fs(e, t, r, l, n)
      )
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Vu(e, t, r, l, n)
      )
    case 3:
      e: {
        if ((xf(t), e === null)) throw Error(C(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Wd(e, t),
          Xl(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(l = Gn(Error(C(423)), t)), (t = Qu(e, t, r, n, l))
            break e
          } else if (r !== l) {
            ;(l = Gn(Error(C(424)), t)), (t = Qu(e, t, r, n, l))
            break e
          } else
            for (
              Ye = Gt(t.stateNode.containerInfo.firstChild),
                Ke = t,
                re = !0,
                ft = null,
                n = bd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Vn(), r === l)) {
            t = It(e, t, n)
            break e
          }
          Me(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Gd(t),
        e === null && ss(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ns(r, l) ? (i = null) : o !== null && ns(r, o) && (t.flags |= 32),
        yf(e, t),
        Me(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && ss(t), null
    case 13:
      return wf(e, t, n)
    case 4:
      return (
        pa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qn(t, null, r, n)) : Me(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Wu(e, t, r, l, n)
      )
    case 7:
      return Me(e, t, t.pendingProps, n), t.child
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ee(Zl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (mt(o.value, i)) {
            if (o.children === l.children && !He.current) {
              t = It(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies
              if (s !== null) {
                i = o.child
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ;(u = _t(-1, n & -n)), (u.tag = 2)
                      var c = o.updateQueue
                      if (c !== null) {
                        c = c.shared
                        var d = c.pending
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u)
                      }
                    }
                    ;(o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      as(o.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  u = u.next
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341))
                ;(i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  as(i, n, t),
                  (i = o.sibling)
              } else i = o.child
              if (i !== null) i.return = o
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((o = i.sibling), o !== null)) {
                    ;(o.return = i.return), (i = o)
                    break
                  }
                  i = i.return
                }
              o = i
            }
        Me(e, t, l.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Bn(t, n),
        (l = lt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Hu(e, t, r, l, n)
      )
    case 15:
      return gf(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Il(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), Gl(t)) : (e = !1),
        Bn(t, n),
        Vd(t, r, l),
        cs(t, r, l, n),
        ps(null, t, r, !0, e, n)
      )
    case 19:
      return Sf(e, t, n)
    case 22:
      return vf(e, t, n)
  }
  throw Error(C(156, t.tag))
}
function $f(e, t) {
  return ad(e, t)
}
function Lm(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function nt(e, t, n, r) {
  return new Lm(e, t, n, r)
}
function _a(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Am(e) {
  if (typeof e == 'function') return _a(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Gs)) return 11
    if (e === Ys) return 14
  }
  return 2
}
function Jt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Al(e, t, n, r, l, o) {
  var i = 2
  if (((r = e), typeof e == 'function')) _a(e) && (i = 1)
  else if (typeof e == 'string') i = 5
  else
    e: switch (e) {
      case Cn:
        return fn(n.children, l, o, t)
      case bs:
        ;(i = 8), (l |= 8)
        break
      case Li:
        return (e = nt(12, n, t, l | 2)), (e.elementType = Li), (e.lanes = o), e
      case Ai:
        return (e = nt(13, n, t, l)), (e.elementType = Ai), (e.lanes = o), e
      case Mi:
        return (e = nt(19, n, t, l)), (e.elementType = Mi), (e.lanes = o), e
      case Qc:
        return Eo(n, l, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Hc:
              i = 10
              break e
            case Vc:
              i = 9
              break e
            case Gs:
              i = 11
              break e
            case Ys:
              i = 14
              break e
            case $t:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(C(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = nt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function fn(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e
}
function Eo(e, t, n, r) {
  return (
    (e = nt(22, e, r, t)),
    (e.elementType = Qc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ci(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e
}
function Ei(e, t, n) {
  return (
    (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Mm(e, t, n, r, l) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = oi(0)),
    (this.expirationTimes = oi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = oi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null)
}
function Ra(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Mm(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = nt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fa(o),
    e
  )
}
function $m(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: jn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Df(e) {
  if (!e) return tn
  e = e._reactInternals
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(C(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(C(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ve(n)) return Md(e, n, t)
  }
  return t
}
function Ff(e, t, n, r, l, o, i, s, u) {
  return (
    (e = Ra(n, r, !0, e, l, o, i, s, u)),
    (e.context = Df(null)),
    (n = e.current),
    (r = $e()),
    (l = Zt(n)),
    (o = _t(r, l)),
    (o.callback = t ?? null),
    Yt(n, o, l),
    (e.current.lanes = l),
    Zr(e, l, r),
    Qe(e, r),
    e
  )
}
function No(e, t, n, r) {
  var l = t.current,
    o = $e(),
    i = Zt(l)
  return (
    (n = Df(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yt(l, t, i)),
    e !== null && (ht(e, l, i, o), Rl(e, l, i)),
    i
  )
}
function io(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function tc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ta(e, t) {
  tc(e, t), (e = e.alternate) && tc(e, t)
}
function Dm() {
  return null
}
var Bf =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Oa(e) {
  this._internalRoot = e
}
Po.prototype.render = Oa.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(C(409))
  No(e, t, null, null)
}
Po.prototype.unmount = Oa.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    vn(function () {
      No(null, e, null, null)
    }),
      (t[Tt] = null)
  }
}
function Po(e) {
  this._internalRoot = e
}
Po.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = md()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
    Ft.splice(n, 0, e), n === 0 && vd(e)
  }
}
function Ia(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function _o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function nc() {}
function Fm(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var c = io(i)
        o.call(c)
      }
    }
    var i = Ff(t, r, e, 0, null, !1, !1, '', nc)
    return (
      (e._reactRootContainer = i),
      (e[Tt] = i.current),
      $r(e.nodeType === 8 ? e.parentNode : e),
      vn(),
      i
    )
  }
  for (; (l = e.lastChild); ) e.removeChild(l)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var c = io(u)
      s.call(c)
    }
  }
  var u = Ra(e, 0, !1, null, null, !1, !1, '', nc)
  return (
    (e._reactRootContainer = u),
    (e[Tt] = u.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    vn(function () {
      No(t, u, n, r)
    }),
    u
  )
}
function Ro(e, t, n, r, l) {
  var o = n._reactRootContainer
  if (o) {
    var i = o
    if (typeof l == 'function') {
      var s = l
      l = function () {
        var u = io(i)
        s.call(u)
      }
    }
    No(t, i, e, l)
  } else i = Fm(n, t, e, l, r)
  return io(i)
}
pd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes)
        n !== 0 &&
          (Js(t, n | 1), Qe(t, ce()), !(V & 6) && ((Yn = ce() + 500), ln()))
      }
      break
    case 13:
      vn(function () {
        var r = Ot(e, 1)
        if (r !== null) {
          var l = $e()
          ht(r, e, 1, l)
        }
      }),
        Ta(e, 1)
  }
}
Xs = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728)
    if (t !== null) {
      var n = $e()
      ht(t, e, 134217728, n)
    }
    Ta(e, 134217728)
  }
}
hd = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = Ot(e, t)
    if (n !== null) {
      var r = $e()
      ht(n, e, t, r)
    }
    Ta(e, t)
  }
}
md = function () {
  return Z
}
gd = function (e, t) {
  var n = Z
  try {
    return (Z = e), t()
  } finally {
    Z = n
  }
}
bi = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Fi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var l = xo(r)
            if (!l) throw Error(C(90))
            Gc(r), Fi(r, l)
          }
        }
      }
      break
    case 'textarea':
      Kc(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Mn(e, !!n.multiple, t, !1)
  }
}
nd = Ea
rd = vn
var Bm = { usingClientEntryPoint: !1, Events: [Xr, _n, xo, ed, td, Ea] },
  hr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Um = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = id(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || Dm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var yl = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!yl.isDisabled && yl.supportsFiber)
    try {
      ;(mo = yl.inject(Um)), (wt = yl)
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Ia(t)) throw Error(C(200))
  return $m(e, t, null, n)
}
Je.createRoot = function (e, t) {
  if (!Ia(e)) throw Error(C(299))
  var n = !1,
    r = '',
    l = Bf
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ra(e, 1, !1, null, null, n, !1, r, l)),
    (e[Tt] = t.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    new Oa(t)
  )
}
Je.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)))
  return (e = id(t)), (e = e === null ? null : e.stateNode), e
}
Je.flushSync = function (e) {
  return vn(e)
}
Je.hydrate = function (e, t, n) {
  if (!_o(t)) throw Error(C(200))
  return Ro(null, e, t, !0, n)
}
Je.hydrateRoot = function (e, t, n) {
  if (!Ia(e)) throw Error(C(405))
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Bf
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ff(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Tt] = t.current),
    $r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l)
  return new Po(t)
}
Je.render = function (e, t, n) {
  if (!_o(t)) throw Error(C(200))
  return Ro(null, e, t, !1, n)
}
Je.unmountComponentAtNode = function (e) {
  if (!_o(e)) throw Error(C(40))
  return e._reactRootContainer
    ? (vn(function () {
        Ro(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Tt] = null)
        })
      }),
      !0)
    : !1
}
Je.unstable_batchedUpdates = Ea
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_o(n)) throw Error(C(200))
  if (e == null || e._reactInternals === void 0) throw Error(C(38))
  return Ro(e, t, n, !1, r)
}
Je.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (n) {
        console.error(n)
      }
  }
  t(), (e.exports = Je)
})(Dp)
var rc = Oi
;(Ti.createRoot = rc.createRoot), (Ti.hydrateRoot = rc.hydrateRoot)
var so = {},
  Wm = {
    get exports() {
      return so
    },
    set exports(e) {
      so = e
    },
  },
  J = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za = Symbol.for('react.element'),
  La = Symbol.for('react.portal'),
  To = Symbol.for('react.fragment'),
  Oo = Symbol.for('react.strict_mode'),
  Io = Symbol.for('react.profiler'),
  zo = Symbol.for('react.provider'),
  Lo = Symbol.for('react.context'),
  Hm = Symbol.for('react.server_context'),
  Ao = Symbol.for('react.forward_ref'),
  Mo = Symbol.for('react.suspense'),
  $o = Symbol.for('react.suspense_list'),
  Do = Symbol.for('react.memo'),
  Fo = Symbol.for('react.lazy'),
  Vm = Symbol.for('react.offscreen'),
  Uf
Uf = Symbol.for('react.module.reference')
function st(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case za:
        switch (((e = e.type), e)) {
          case To:
          case Io:
          case Oo:
          case Mo:
          case $o:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Hm:
              case Lo:
              case Ao:
              case Fo:
              case Do:
              case zo:
                return e
              default:
                return t
            }
        }
      case La:
        return t
    }
  }
}
J.ContextConsumer = Lo
J.ContextProvider = zo
J.Element = za
J.ForwardRef = Ao
J.Fragment = To
J.Lazy = Fo
J.Memo = Do
J.Portal = La
J.Profiler = Io
J.StrictMode = Oo
J.Suspense = Mo
J.SuspenseList = $o
J.isAsyncMode = function () {
  return !1
}
J.isConcurrentMode = function () {
  return !1
}
J.isContextConsumer = function (e) {
  return st(e) === Lo
}
J.isContextProvider = function (e) {
  return st(e) === zo
}
J.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === za
}
J.isForwardRef = function (e) {
  return st(e) === Ao
}
J.isFragment = function (e) {
  return st(e) === To
}
J.isLazy = function (e) {
  return st(e) === Fo
}
J.isMemo = function (e) {
  return st(e) === Do
}
J.isPortal = function (e) {
  return st(e) === La
}
J.isProfiler = function (e) {
  return st(e) === Io
}
J.isStrictMode = function (e) {
  return st(e) === Oo
}
J.isSuspense = function (e) {
  return st(e) === Mo
}
J.isSuspenseList = function (e) {
  return st(e) === $o
}
J.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === To ||
    e === Io ||
    e === Oo ||
    e === Mo ||
    e === $o ||
    e === Vm ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Fo ||
        e.$$typeof === Do ||
        e.$$typeof === zo ||
        e.$$typeof === Lo ||
        e.$$typeof === Ao ||
        e.$$typeof === Uf ||
        e.getModuleId !== void 0))
  )
}
J.typeOf = st
;(function (e) {
  e.exports = J
})(Wm)
function Qm(e) {
  function t(_, T, z, $, w) {
    for (
      var H = 0,
        P = 0,
        se = 0,
        G = 0,
        K,
        B,
        ke = 0,
        Be = 0,
        b,
        Re = (b = K = 0),
        Y = 0,
        je = 0,
        or = 0,
        Ce = 0,
        tl = z.length,
        ir = tl - 1,
        at,
        F = '',
        ue = '',
        Xo = '',
        qo = '',
        At;
      Y < tl;

    ) {
      if (
        ((B = z.charCodeAt(Y)),
        Y === ir &&
          P + G + se + H !== 0 &&
          (P !== 0 && (B = P === 47 ? 10 : 47), (G = se = H = 0), tl++, ir++),
        P + G + se + H === 0)
      ) {
        if (
          Y === ir &&
          (0 < je && (F = F.replace(g, '')), 0 < F.trim().length)
        ) {
          switch (B) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break
            default:
              F += z.charAt(Y)
          }
          B = 59
        }
        switch (B) {
          case 123:
            for (F = F.trim(), K = F.charCodeAt(0), b = 1, Ce = ++Y; Y < tl; ) {
              switch ((B = z.charCodeAt(Y))) {
                case 123:
                  b++
                  break
                case 125:
                  b--
                  break
                case 47:
                  switch ((B = z.charCodeAt(Y + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Re = Y + 1; Re < ir; ++Re)
                          switch (z.charCodeAt(Re)) {
                            case 47:
                              if (
                                B === 42 &&
                                z.charCodeAt(Re - 1) === 42 &&
                                Y + 2 !== Re
                              ) {
                                Y = Re + 1
                                break e
                              }
                              break
                            case 10:
                              if (B === 47) {
                                Y = Re + 1
                                break e
                              }
                          }
                        Y = Re
                      }
                  }
                  break
                case 91:
                  B++
                case 40:
                  B++
                case 34:
                case 39:
                  for (; Y++ < ir && z.charCodeAt(Y) !== B; );
              }
              if (b === 0) break
              Y++
            }
            switch (
              ((b = z.substring(Ce, Y)),
              K === 0 && (K = (F = F.replace(p, '').trim()).charCodeAt(0)),
              K)
            ) {
              case 64:
                switch (
                  (0 < je && (F = F.replace(g, '')), (B = F.charCodeAt(1)), B)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    je = T
                    break
                  default:
                    je = kt
                }
                if (
                  ((b = t(T, je, b, B, w + 1)),
                  (Ce = b.length),
                  0 < N &&
                    ((je = n(kt, F, or)),
                    (At = s(3, b, je, T, Se, pe, Ce, B, w, $)),
                    (F = je.join('')),
                    At !== void 0 &&
                      (Ce = (b = At.trim()).length) === 0 &&
                      ((B = 0), (b = ''))),
                  0 < Ce)
                )
                  switch (B) {
                    case 115:
                      F = F.replace(R, i)
                    case 100:
                    case 109:
                    case 45:
                      b = F + '{' + b + '}'
                      break
                    case 107:
                      ;(F = F.replace(f, '$1 $2')),
                        (b = F + '{' + b + '}'),
                        (b =
                          _e === 1 || (_e === 2 && o('@' + b, 3))
                            ? '@-webkit-' + b + '@' + b
                            : '@' + b)
                      break
                    default:
                      ;(b = F + b), $ === 112 && (b = ((ue += b), ''))
                  }
                else b = ''
                break
              default:
                b = t(T, n(T, F, or), b, $, w + 1)
            }
            ;(Xo += b),
              (b = or = je = Re = K = 0),
              (F = ''),
              (B = z.charCodeAt(++Y))
            break
          case 125:
          case 59:
            if (
              ((F = (0 < je ? F.replace(g, '') : F).trim()),
              1 < (Ce = F.length))
            )
              switch (
                (Re === 0 &&
                  ((K = F.charCodeAt(0)), K === 45 || (96 < K && 123 > K)) &&
                  (Ce = (F = F.replace(' ', ':')).length),
                0 < N &&
                  (At = s(1, F, T, _, Se, pe, ue.length, $, w, $)) !== void 0 &&
                  (Ce = (F = At.trim()).length) === 0 &&
                  (F = '\0\0'),
                (K = F.charCodeAt(0)),
                (B = F.charCodeAt(1)),
                K)
              ) {
                case 0:
                  break
                case 64:
                  if (B === 105 || B === 99) {
                    qo += F + z.charAt(Y)
                    break
                  }
                default:
                  F.charCodeAt(Ce - 1) !== 58 &&
                    (ue += l(F, K, B, F.charCodeAt(2)))
              }
            ;(or = je = Re = K = 0), (F = ''), (B = z.charCodeAt(++Y))
        }
      }
      switch (B) {
        case 13:
        case 10:
          P === 47
            ? (P = 0)
            : 1 + K === 0 &&
              $ !== 107 &&
              0 < F.length &&
              ((je = 1), (F += '\0')),
            0 < N * M && s(0, F, T, _, Se, pe, ue.length, $, w, $),
            (pe = 1),
            Se++
          break
        case 59:
        case 125:
          if (P + G + se + H === 0) {
            pe++
            break
          }
        default:
          switch ((pe++, (at = z.charAt(Y)), B)) {
            case 9:
            case 32:
              if (G + H + P === 0)
                switch (ke) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    at = ''
                    break
                  default:
                    B !== 32 && (at = ' ')
                }
              break
            case 0:
              at = '\\0'
              break
            case 12:
              at = '\\f'
              break
            case 11:
              at = '\\v'
              break
            case 38:
              G + P + H === 0 && ((je = or = 1), (at = '\f' + at))
              break
            case 108:
              if (G + P + H + be === 0 && 0 < Re)
                switch (Y - Re) {
                  case 2:
                    ke === 112 && z.charCodeAt(Y - 3) === 58 && (be = ke)
                  case 8:
                    Be === 111 && (be = Be)
                }
              break
            case 58:
              G + P + H === 0 && (Re = Y)
              break
            case 44:
              P + se + G + H === 0 && ((je = 1), (at += '\r'))
              break
            case 34:
            case 39:
              P === 0 && (G = G === B ? 0 : G === 0 ? B : G)
              break
            case 91:
              G + P + se === 0 && H++
              break
            case 93:
              G + P + se === 0 && H--
              break
            case 41:
              G + P + H === 0 && se--
              break
            case 40:
              if (G + P + H === 0) {
                if (K === 0)
                  switch (2 * ke + 3 * Be) {
                    case 533:
                      break
                    default:
                      K = 1
                  }
                se++
              }
              break
            case 64:
              P + se + G + H + Re + b === 0 && (b = 1)
              break
            case 42:
            case 47:
              if (!(0 < G + H + se))
                switch (P) {
                  case 0:
                    switch (2 * B + 3 * z.charCodeAt(Y + 1)) {
                      case 235:
                        P = 47
                        break
                      case 220:
                        ;(Ce = Y), (P = 42)
                    }
                    break
                  case 42:
                    B === 47 &&
                      ke === 42 &&
                      Ce + 2 !== Y &&
                      (z.charCodeAt(Ce + 2) === 33 &&
                        (ue += z.substring(Ce, Y + 1)),
                      (at = ''),
                      (P = 0))
                }
          }
          P === 0 && (F += at)
      }
      ;(Be = ke), (ke = B), Y++
    }
    if (((Ce = ue.length), 0 < Ce)) {
      if (
        ((je = T),
        0 < N &&
          ((At = s(2, ue, je, _, Se, pe, Ce, $, w, $)),
          At !== void 0 && (ue = At).length === 0))
      )
        return qo + ue + Xo
      if (((ue = je.join(',') + '{' + ue + '}'), _e * be !== 0)) {
        switch ((_e !== 2 || o(ue, 2) || (be = 0), be)) {
          case 111:
            ue = ue.replace(S, ':-moz-$1') + ue
            break
          case 112:
            ue =
              ue.replace(m, '::-webkit-input-$1') +
              ue.replace(m, '::-moz-$1') +
              ue.replace(m, ':-ms-input-$1') +
              ue
        }
        be = 0
      }
    }
    return qo + ue + Xo
  }
  function n(_, T, z) {
    var $ = T.trim().split(j)
    T = $
    var w = $.length,
      H = _.length
    switch (H) {
      case 0:
      case 1:
        var P = 0
        for (_ = H === 0 ? '' : _[0] + ' '; P < w; ++P)
          T[P] = r(_, T[P], z).trim()
        break
      default:
        var se = (P = 0)
        for (T = []; P < w; ++P)
          for (var G = 0; G < H; ++G) T[se++] = r(_[G] + ' ', $[P], z).trim()
    }
    return T
  }
  function r(_, T, z) {
    var $ = T.charCodeAt(0)
    switch ((33 > $ && ($ = (T = T.trim()).charCodeAt(0)), $)) {
      case 38:
        return T.replace(h, '$1' + _.trim())
      case 58:
        return _.trim() + T.replace(h, '$1' + _.trim())
      default:
        if (0 < 1 * z && 0 < T.indexOf('\f'))
          return T.replace(h, (_.charCodeAt(0) === 58 ? '' : '$1') + _.trim())
    }
    return _ + T
  }
  function l(_, T, z, $) {
    var w = _ + ';',
      H = 2 * T + 3 * z + 4 * $
    if (H === 944) {
      _ = w.indexOf(':', 9) + 1
      var P = w.substring(_, w.length - 1).trim()
      return (
        (P = w.substring(0, _).trim() + P + ';'),
        _e === 1 || (_e === 2 && o(P, 1)) ? '-webkit-' + P + P : P
      )
    }
    if (_e === 0 || (_e === 2 && !o(w, 1))) return w
    switch (H) {
      case 1015:
        return w.charCodeAt(10) === 97 ? '-webkit-' + w + w : w
      case 951:
        return w.charCodeAt(3) === 116 ? '-webkit-' + w + w : w
      case 963:
        return w.charCodeAt(5) === 110 ? '-webkit-' + w + w : w
      case 1009:
        if (w.charCodeAt(4) !== 100) break
      case 969:
      case 942:
        return '-webkit-' + w + w
      case 978:
        return '-webkit-' + w + '-moz-' + w + w
      case 1019:
      case 983:
        return '-webkit-' + w + '-moz-' + w + '-ms-' + w + w
      case 883:
        if (w.charCodeAt(8) === 45) return '-webkit-' + w + w
        if (0 < w.indexOf('image-set(', 11))
          return w.replace(ge, '$1-webkit-$2') + w
        break
      case 932:
        if (w.charCodeAt(4) === 45)
          switch (w.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                w.replace('-grow', '') +
                '-webkit-' +
                w +
                '-ms-' +
                w.replace('grow', 'positive') +
                w
              )
            case 115:
              return (
                '-webkit-' + w + '-ms-' + w.replace('shrink', 'negative') + w
              )
            case 98:
              return (
                '-webkit-' +
                w +
                '-ms-' +
                w.replace('basis', 'preferred-size') +
                w
              )
          }
        return '-webkit-' + w + '-ms-' + w + w
      case 964:
        return '-webkit-' + w + '-ms-flex-' + w + w
      case 1023:
        if (w.charCodeAt(8) !== 99) break
        return (
          (P = w
            .substring(w.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + P + '-webkit-' + w + '-ms-flex-pack' + P + w
        )
      case 1005:
        return v.test(w)
          ? w.replace(x, ':-webkit-') + w.replace(x, ':-moz-') + w
          : w
      case 1e3:
        switch (
          ((P = w.substring(13).trim()),
          (T = P.indexOf('-') + 1),
          P.charCodeAt(0) + P.charCodeAt(T))
        ) {
          case 226:
            P = w.replace(E, 'tb')
            break
          case 232:
            P = w.replace(E, 'tb-rl')
            break
          case 220:
            P = w.replace(E, 'lr')
            break
          default:
            return w
        }
        return '-webkit-' + w + '-ms-' + P + w
      case 1017:
        if (w.indexOf('sticky', 9) === -1) break
      case 975:
        switch (
          ((T = (w = _).length - 10),
          (P = (w.charCodeAt(T) === 33 ? w.substring(0, T) : w)
            .substring(_.indexOf(':', 7) + 1)
            .trim()),
          (H = P.charCodeAt(0) + (P.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > P.charCodeAt(8)) break
          case 115:
            w = w.replace(P, '-webkit-' + P) + ';' + w
            break
          case 207:
          case 102:
            w =
              w.replace(P, '-webkit-' + (102 < H ? 'inline-' : '') + 'box') +
              ';' +
              w.replace(P, '-webkit-' + P) +
              ';' +
              w.replace(P, '-ms-' + P + 'box') +
              ';' +
              w
        }
        return w + ';'
      case 938:
        if (w.charCodeAt(5) === 45)
          switch (w.charCodeAt(6)) {
            case 105:
              return (
                (P = w.replace('-items', '')),
                '-webkit-' + w + '-webkit-box-' + P + '-ms-flex-' + P + w
              )
            case 115:
              return '-webkit-' + w + '-ms-flex-item-' + w.replace(I, '') + w
            default:
              return (
                '-webkit-' +
                w +
                '-ms-flex-line-pack' +
                w.replace('align-content', '').replace(I, '') +
                w
              )
          }
        break
      case 973:
      case 989:
        if (w.charCodeAt(3) !== 45 || w.charCodeAt(4) === 122) break
      case 931:
      case 953:
        if (D.test(_) === !0)
          return (P = _.substring(_.indexOf(':') + 1)).charCodeAt(0) === 115
            ? l(_.replace('stretch', 'fill-available'), T, z, $).replace(
                ':fill-available',
                ':stretch',
              )
            : w.replace(P, '-webkit-' + P) +
                w.replace(P, '-moz-' + P.replace('fill-', '')) +
                w
        break
      case 962:
        if (
          ((w =
            '-webkit-' + w + (w.charCodeAt(5) === 102 ? '-ms-' + w : '') + w),
          z + $ === 211 &&
            w.charCodeAt(13) === 105 &&
            0 < w.indexOf('transform', 10))
        )
          return (
            w.substring(0, w.indexOf(';', 27) + 1).replace(y, '$1-webkit-$2') +
            w
          )
    }
    return w
  }
  function o(_, T) {
    var z = _.indexOf(T === 1 ? ':' : '{'),
      $ = _.substring(0, T !== 3 ? z : 10)
    return (
      (z = _.substring(z + 1, _.length - 1)),
      A(T !== 2 ? $ : $.replace(Q, '$1'), z, T)
    )
  }
  function i(_, T) {
    var z = l(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2))
    return z !== T + ';' ? z.replace(O, ' or ($1)').substring(4) : '(' + T + ')'
  }
  function s(_, T, z, $, w, H, P, se, G, K) {
    for (var B = 0, ke = T, Be; B < N; ++B)
      switch ((Be = Le[B].call(d, _, ke, z, $, w, H, P, se, G, K))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break
        default:
          ke = Be
      }
    if (ke !== T) return ke
  }
  function u(_) {
    switch (_) {
      case void 0:
      case null:
        N = Le.length = 0
        break
      default:
        if (typeof _ == 'function') Le[N++] = _
        else if (typeof _ == 'object')
          for (var T = 0, z = _.length; T < z; ++T) u(_[T])
        else M = !!_ | 0
    }
    return u
  }
  function c(_) {
    return (
      (_ = _.prefix),
      _ !== void 0 &&
        ((A = null),
        _
          ? typeof _ != 'function'
            ? (_e = 1)
            : ((_e = 2), (A = _))
          : (_e = 0)),
      c
    )
  }
  function d(_, T) {
    var z = _
    if ((33 > z.charCodeAt(0) && (z = z.trim()), (q = z), (z = [q]), 0 < N)) {
      var $ = s(-1, T, z, z, Se, pe, 0, 0, 0, 0)
      $ !== void 0 && typeof $ == 'string' && (T = $)
    }
    var w = t(kt, z, T, 0, 0)
    return (
      0 < N &&
        (($ = s(-2, w, z, z, Se, pe, w.length, 0, 0, 0)),
        $ !== void 0 && (w = $)),
      (q = ''),
      (be = 0),
      (pe = Se = 1),
      w
    )
  }
  var p = /^\0+/g,
    g = /[\0\r\f]/g,
    x = /: */g,
    v = /zoo|gra/,
    y = /([,: ])(transform)/g,
    j = /,\r+?/g,
    h = /([\t\r\n ])*\f?&/g,
    f = /@(k\w+)\s*(\S*)\s*/,
    m = /::(place)/g,
    S = /:(read-only)/g,
    E = /[svh]\w+-[tblr]{2}/,
    R = /\(\s*(.*)\s*\)/g,
    O = /([\s\S]*?);/g,
    I = /-self|flex-/g,
    Q = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    D = /stretch|:\s*\w+\-(?:conte|avail)/,
    ge = /([^-])(image-set\()/,
    pe = 1,
    Se = 1,
    be = 0,
    _e = 1,
    kt = [],
    Le = [],
    N = 0,
    A = null,
    M = 0,
    q = ''
  return (d.use = u), (d.set = c), e !== void 0 && c(e), d
}
var bm = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
}
function Gm(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var Ym =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  lc = Gm(function (e) {
    return (
      Ym.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    )
  }),
  Es = {},
  Km = {
    get exports() {
      return Es
    },
    set exports(e) {
      Es = e
    },
  },
  X = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var we = typeof Symbol == 'function' && Symbol.for,
  Aa = we ? Symbol.for('react.element') : 60103,
  Ma = we ? Symbol.for('react.portal') : 60106,
  Bo = we ? Symbol.for('react.fragment') : 60107,
  Uo = we ? Symbol.for('react.strict_mode') : 60108,
  Wo = we ? Symbol.for('react.profiler') : 60114,
  Ho = we ? Symbol.for('react.provider') : 60109,
  Vo = we ? Symbol.for('react.context') : 60110,
  $a = we ? Symbol.for('react.async_mode') : 60111,
  Qo = we ? Symbol.for('react.concurrent_mode') : 60111,
  bo = we ? Symbol.for('react.forward_ref') : 60112,
  Go = we ? Symbol.for('react.suspense') : 60113,
  Zm = we ? Symbol.for('react.suspense_list') : 60120,
  Yo = we ? Symbol.for('react.memo') : 60115,
  Ko = we ? Symbol.for('react.lazy') : 60116,
  Jm = we ? Symbol.for('react.block') : 60121,
  Xm = we ? Symbol.for('react.fundamental') : 60117,
  qm = we ? Symbol.for('react.responder') : 60118,
  e0 = we ? Symbol.for('react.scope') : 60119
function qe(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Aa:
        switch (((e = e.type), e)) {
          case $a:
          case Qo:
          case Bo:
          case Wo:
          case Uo:
          case Go:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Vo:
              case bo:
              case Ko:
              case Yo:
              case Ho:
                return e
              default:
                return t
            }
        }
      case Ma:
        return t
    }
  }
}
function Wf(e) {
  return qe(e) === Qo
}
X.AsyncMode = $a
X.ConcurrentMode = Qo
X.ContextConsumer = Vo
X.ContextProvider = Ho
X.Element = Aa
X.ForwardRef = bo
X.Fragment = Bo
X.Lazy = Ko
X.Memo = Yo
X.Portal = Ma
X.Profiler = Wo
X.StrictMode = Uo
X.Suspense = Go
X.isAsyncMode = function (e) {
  return Wf(e) || qe(e) === $a
}
X.isConcurrentMode = Wf
X.isContextConsumer = function (e) {
  return qe(e) === Vo
}
X.isContextProvider = function (e) {
  return qe(e) === Ho
}
X.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Aa
}
X.isForwardRef = function (e) {
  return qe(e) === bo
}
X.isFragment = function (e) {
  return qe(e) === Bo
}
X.isLazy = function (e) {
  return qe(e) === Ko
}
X.isMemo = function (e) {
  return qe(e) === Yo
}
X.isPortal = function (e) {
  return qe(e) === Ma
}
X.isProfiler = function (e) {
  return qe(e) === Wo
}
X.isStrictMode = function (e) {
  return qe(e) === Uo
}
X.isSuspense = function (e) {
  return qe(e) === Go
}
X.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Bo ||
    e === Qo ||
    e === Wo ||
    e === Uo ||
    e === Go ||
    e === Zm ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ko ||
        e.$$typeof === Yo ||
        e.$$typeof === Ho ||
        e.$$typeof === Vo ||
        e.$$typeof === bo ||
        e.$$typeof === Xm ||
        e.$$typeof === qm ||
        e.$$typeof === e0 ||
        e.$$typeof === Jm))
  )
}
X.typeOf = qe
;(function (e) {
  e.exports = X
})(Km)
var Da = Es,
  t0 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  n0 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  r0 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Hf = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Fa = {}
Fa[Da.ForwardRef] = r0
Fa[Da.Memo] = Hf
function oc(e) {
  return Da.isMemo(e) ? Hf : Fa[e.$$typeof] || t0
}
var l0 = Object.defineProperty,
  o0 = Object.getOwnPropertyNames,
  ic = Object.getOwnPropertySymbols,
  i0 = Object.getOwnPropertyDescriptor,
  s0 = Object.getPrototypeOf,
  sc = Object.prototype
function Vf(e, t, n) {
  if (typeof t != 'string') {
    if (sc) {
      var r = s0(t)
      r && r !== sc && Vf(e, r, n)
    }
    var l = o0(t)
    ic && (l = l.concat(ic(t)))
    for (var o = oc(e), i = oc(t), s = 0; s < l.length; ++s) {
      var u = l[s]
      if (!n0[u] && !(n && n[u]) && !(i && i[u]) && !(o && o[u])) {
        var c = i0(t, u)
        try {
          l0(e, u, c)
        } catch {}
      }
    }
  }
  return e
}
var a0 = Vf
function Pt() {
  return (Pt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
var ac = function (e, t) {
    for (var n = [e[0]], r = 0, l = t.length; r < l; r += 1)
      n.push(t[r], e[r + 1])
    return n
  },
  Ns = function (e) {
    return (
      e !== null &&
      typeof e == 'object' &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        '[object Object]' &&
      !so.typeOf(e)
    )
  },
  ao = Object.freeze([]),
  Xt = Object.freeze({})
function br(e) {
  return typeof e == 'function'
}
function uc(e) {
  return e.displayName || e.name || 'Component'
}
function Ba(e) {
  return e && typeof e.styledComponentId == 'string'
}
var Kn =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  Ua = typeof window < 'u' && 'HTMLElement' in window,
  u0 = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : {}.SC_DISABLE_SPEEDY !== void 0 &&
          {}.SC_DISABLE_SPEEDY !== '' &&
          {}.SC_DISABLE_SPEEDY !== 'false' &&
          {}.SC_DISABLE_SPEEDY))
function el(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  throw new Error(
    'An error occurred. See https://git.io/JUIaE#' +
      e +
      ' for more information.' +
      (n.length > 0 ? ' Args: ' + n.join(', ') : ''),
  )
}
var c0 = (function () {
    function e(n) {
      ;(this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n)
    }
    var t = e.prototype
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, l = 0; l < n; l++) r += this.groupSizes[l]
        return r
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var l = this.groupSizes, o = l.length, i = o; n >= i; )
            (i <<= 1) < 0 && el(16, '' + n)
          ;(this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(l),
            (this.length = i)
          for (var s = o; s < i; s++) this.groupSizes[s] = 0
        }
        for (var u = this.indexOfGroup(n + 1), c = 0, d = r.length; c < d; c++)
          this.tag.insertRule(u, r[c]) && (this.groupSizes[n]++, u++)
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            l = this.indexOfGroup(n),
            o = l + r
          this.groupSizes[n] = 0
          for (var i = l; i < o; i++) this.tag.deleteRule(l)
        }
      }),
      (t.getGroup = function (n) {
        var r = ''
        if (n >= this.length || this.groupSizes[n] === 0) return r
        for (
          var l = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + l,
            s = o;
          s < i;
          s++
        )
          r +=
            this.tag.getRule(s) +
            `/*!sc*/
`
        return r
      }),
      e
    )
  })(),
  Ml = new Map(),
  uo = new Map(),
  _r = 1,
  xl = function (e) {
    if (Ml.has(e)) return Ml.get(e)
    for (; uo.has(_r); ) _r++
    var t = _r++
    return Ml.set(e, t), uo.set(t, e), t
  },
  d0 = function (e) {
    return uo.get(e)
  },
  f0 = function (e, t) {
    t >= _r && (_r = t + 1), Ml.set(e, t), uo.set(t, e)
  },
  p0 = 'style[' + Kn + '][data-styled-version="5.3.11"]',
  h0 = new RegExp('^' + Kn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  m0 = function (e, t, n) {
    for (var r, l = n.split(','), o = 0, i = l.length; o < i; o++)
      (r = l[o]) && e.registerName(t, r)
  },
  g0 = function (e, t) {
    for (
      var n = (t.textContent || '').split(`/*!sc*/
`),
        r = [],
        l = 0,
        o = n.length;
      l < o;
      l++
    ) {
      var i = n[l].trim()
      if (i) {
        var s = i.match(h0)
        if (s) {
          var u = 0 | parseInt(s[1], 10),
            c = s[2]
          u !== 0 && (f0(c, u), m0(e, c, s[3]), e.getTag().insertRules(u, r)),
            (r.length = 0)
        } else r.push(i)
      }
    }
  },
  v0 = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null
  },
  Qf = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      l = (function (s) {
        for (var u = s.childNodes, c = u.length; c >= 0; c--) {
          var d = u[c]
          if (d && d.nodeType === 1 && d.hasAttribute(Kn)) return d
        }
      })(n),
      o = l !== void 0 ? l.nextSibling : null
    r.setAttribute(Kn, 'active'),
      r.setAttribute('data-styled-version', '5.3.11')
    var i = v0()
    return i && r.setAttribute('nonce', i), n.insertBefore(r, o), r
  },
  y0 = (function () {
    function e(n) {
      var r = (this.element = Qf(n))
      r.appendChild(document.createTextNode('')),
        (this.sheet = (function (l) {
          if (l.sheet) return l.sheet
          for (var o = document.styleSheets, i = 0, s = o.length; i < s; i++) {
            var u = o[i]
            if (u.ownerNode === l) return u
          }
          el(17)
        })(r)),
        (this.length = 0)
    }
    var t = e.prototype
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0
        } catch {
          return !1
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n]
        return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : ''
      }),
      e
    )
  })(),
  x0 = (function () {
    function e(n) {
      var r = (this.element = Qf(n))
      ;(this.nodes = r.childNodes), (this.length = 0)
    }
    var t = e.prototype
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var l = document.createTextNode(r),
            o = this.nodes[n]
          return this.element.insertBefore(l, o || null), this.length++, !0
        }
        return !1
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : ''
      }),
      e
    )
  })(),
  w0 = (function () {
    function e(n) {
      ;(this.rules = []), (this.length = 0)
    }
    var t = e.prototype
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        )
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : ''
      }),
      e
    )
  })(),
  cc = Ua,
  S0 = { isServer: !Ua, useCSSOMInjection: !u0 },
  bf = (function () {
    function e(n, r, l) {
      n === void 0 && (n = Xt),
        r === void 0 && (r = {}),
        (this.options = Pt({}, S0, {}, n)),
        (this.gs = r),
        (this.names = new Map(l)),
        (this.server = !!n.isServer),
        !this.server &&
          Ua &&
          cc &&
          ((cc = !1),
          (function (o) {
            for (
              var i = document.querySelectorAll(p0), s = 0, u = i.length;
              s < u;
              s++
            ) {
              var c = i[s]
              c &&
                c.getAttribute(Kn) !== 'active' &&
                (g0(o, c), c.parentNode && c.parentNode.removeChild(c))
            }
          })(this))
    }
    e.registerId = function (n) {
      return xl(n)
    }
    var t = e.prototype
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            Pt({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0,
          )
        )
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1)
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((l = (r = this.options).isServer),
            (o = r.useCSSOMInjection),
            (i = r.target),
            (n = l ? new w0(i) : o ? new y0(i) : new x0(i)),
            new c0(n)))
        )
        var n, r, l, o, i
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r)
      }),
      (t.registerName = function (n, r) {
        if ((xl(n), this.names.has(n))) this.names.get(n).add(r)
        else {
          var l = new Set()
          l.add(r), this.names.set(n, l)
        }
      }),
      (t.insertRules = function (n, r, l) {
        this.registerName(n, r), this.getTag().insertRules(xl(n), l)
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear()
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(xl(n)), this.clearNames(n)
      }),
      (t.clearTag = function () {
        this.tag = void 0
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), l = r.length, o = '', i = 0; i < l; i++) {
            var s = d0(i)
            if (s !== void 0) {
              var u = n.names.get(s),
                c = r.getGroup(i)
              if (u && c && u.size) {
                var d = Kn + '.g' + i + '[id="' + s + '"]',
                  p = ''
                u !== void 0 &&
                  u.forEach(function (g) {
                    g.length > 0 && (p += g + ',')
                  }),
                  (o +=
                    '' +
                    c +
                    d +
                    '{content:"' +
                    p +
                    `"}/*!sc*/
`)
              }
            }
          }
          return o
        })(this)
      }),
      e
    )
  })(),
  k0 = /(a)(d)/gi,
  dc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97))
  }
function Ps(e) {
  var t,
    n = ''
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = dc(t % 52) + n
  return (dc(t % 52) + n).replace(k0, '$1-$2')
}
var An = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n)
    return e
  },
  Gf = function (e) {
    return An(5381, e)
  }
function j0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t]
    if (br(n) && !Ba(n)) return !1
  }
  return !0
}
var C0 = Gf('5.3.11'),
  E0 = (function () {
    function e(t, n, r) {
      ;(this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && j0(t)),
        (this.componentId = n),
        (this.baseHash = An(C0, n)),
        (this.baseStyle = r),
        bf.registerId(n)
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var l = this.componentId,
          o = []
        if (
          (this.baseStyle &&
            o.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(l, this.staticRulesId))
            o.push(this.staticRulesId)
          else {
            var i = Zn(this.rules, t, n, r).join(''),
              s = Ps(An(this.baseHash, i) >>> 0)
            if (!n.hasNameForId(l, s)) {
              var u = r(i, '.' + s, void 0, l)
              n.insertRules(l, s, u)
            }
            o.push(s), (this.staticRulesId = s)
          }
        else {
          for (
            var c = this.rules.length,
              d = An(this.baseHash, r.hash),
              p = '',
              g = 0;
            g < c;
            g++
          ) {
            var x = this.rules[g]
            if (typeof x == 'string') p += x
            else if (x) {
              var v = Zn(x, t, n, r),
                y = Array.isArray(v) ? v.join('') : v
              ;(d = An(d, y + g)), (p += y)
            }
          }
          if (p) {
            var j = Ps(d >>> 0)
            if (!n.hasNameForId(l, j)) {
              var h = r(p, '.' + j, void 0, l)
              n.insertRules(l, j, h)
            }
            o.push(j)
          }
        }
        return o.join(' ')
      }),
      e
    )
  })(),
  N0 = /^\s*\/\/.*$/gm,
  P0 = [':', '[', '.', '#']
function _0(e) {
  var t,
    n,
    r,
    l,
    o = e === void 0 ? Xt : e,
    i = o.options,
    s = i === void 0 ? Xt : i,
    u = o.plugins,
    c = u === void 0 ? ao : u,
    d = new Qm(s),
    p = [],
    g = (function (y) {
      function j(h) {
        if (h)
          try {
            y(h + '}')
          } catch {}
      }
      return function (h, f, m, S, E, R, O, I, Q, D) {
        switch (h) {
          case 1:
            if (Q === 0 && f.charCodeAt(0) === 64) return y(f + ';'), ''
            break
          case 2:
            if (I === 0) return f + '/*|*/'
            break
          case 3:
            switch (I) {
              case 102:
              case 112:
                return y(m[0] + f), ''
              default:
                return f + (D === 0 ? '/*|*/' : '')
            }
          case -2:
            f.split('/*|*/}').forEach(j)
        }
      }
    })(function (y) {
      p.push(y)
    }),
    x = function (y, j, h) {
      return (j === 0 && P0.indexOf(h[n.length]) !== -1) || h.match(l)
        ? y
        : '.' + t
    }
  function v(y, j, h, f) {
    f === void 0 && (f = '&')
    var m = y.replace(N0, ''),
      S = j && h ? h + ' ' + j + ' { ' + m + ' }' : m
    return (
      (t = f),
      (n = j),
      (r = new RegExp('\\' + n + '\\b', 'g')),
      (l = new RegExp('(\\' + n + '\\b){2,}')),
      d(h || !j ? '' : j, S)
    )
  }
  return (
    d.use(
      [].concat(c, [
        function (y, j, h) {
          y === 2 &&
            h.length &&
            h[0].lastIndexOf(n) > 0 &&
            (h[0] = h[0].replace(r, x))
        },
        g,
        function (y) {
          if (y === -2) {
            var j = p
            return (p = []), j
          }
        },
      ]),
    ),
    (v.hash = c.length
      ? c
          .reduce(function (y, j) {
            return j.name || el(15), An(y, j.name)
          }, 5381)
          .toString()
      : ''),
    v
  )
}
var Yf = yn.createContext()
Yf.Consumer
var Kf = yn.createContext(),
  R0 = (Kf.Consumer, new bf()),
  _s = _0()
function T0() {
  return k.useContext(Yf) || R0
}
function O0() {
  return k.useContext(Kf) || _s
}
var I0 = (function () {
    function e(t, n) {
      var r = this
      ;(this.inject = function (l, o) {
        o === void 0 && (o = _s)
        var i = r.name + o.hash
        l.hasNameForId(r.id, i) ||
          l.insertRules(r.id, i, o(r.rules, i, '@keyframes'))
      }),
        (this.toString = function () {
          return el(12, String(r.name))
        }),
        (this.name = t),
        (this.id = 'sc-keyframes-' + t),
        (this.rules = n)
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = _s), this.name + t.hash
      }),
      e
    )
  })(),
  z0 = /([A-Z])/,
  L0 = /([A-Z])/g,
  A0 = /^ms-/,
  M0 = function (e) {
    return '-' + e.toLowerCase()
  }
function fc(e) {
  return z0.test(e) ? e.replace(L0, M0).replace(A0, '-ms-') : e
}
var pc = function (e) {
  return e == null || e === !1 || e === ''
}
function Zn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var l, o = [], i = 0, s = e.length; i < s; i += 1)
      (l = Zn(e[i], t, n, r)) !== '' &&
        (Array.isArray(l) ? o.push.apply(o, l) : o.push(l))
    return o
  }
  if (pc(e)) return ''
  if (Ba(e)) return '.' + e.styledComponentId
  if (br(e)) {
    if (
      typeof (c = e) != 'function' ||
      (c.prototype && c.prototype.isReactComponent) ||
      !t
    )
      return e
    var u = e(t)
    return Zn(u, t, n, r)
  }
  var c
  return e instanceof I0
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : Ns(e)
      ? (function d(p, g) {
          var x,
            v,
            y = []
          for (var j in p)
            p.hasOwnProperty(j) &&
              !pc(p[j]) &&
              ((Array.isArray(p[j]) && p[j].isCss) || br(p[j])
                ? y.push(fc(j) + ':', p[j], ';')
                : Ns(p[j])
                  ? y.push.apply(y, d(p[j], j))
                  : y.push(
                      fc(j) +
                        ': ' +
                        ((x = j),
                        (v = p[j]) == null || typeof v == 'boolean' || v === ''
                          ? ''
                          : typeof v != 'number' ||
                              v === 0 ||
                              x in bm ||
                              x.startsWith('--')
                            ? String(v).trim()
                            : v + 'px') +
                        ';',
                    ))
          return g ? [g + ' {'].concat(y, ['}']) : y
        })(e)
      : e.toString()
}
var hc = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e
}
function $0(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  return br(e) || Ns(e)
    ? hc(Zn(ac(ao, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == 'string'
      ? e
      : hc(Zn(ac(e, n)))
}
var D0 = function (e, t, n) {
    return (
      n === void 0 && (n = Xt), (e.theme !== n.theme && e.theme) || t || n.theme
    )
  },
  F0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  B0 = /(^-|-$)/g
function Ni(e) {
  return e.replace(F0, '-').replace(B0, '')
}
var U0 = function (e) {
  return Ps(Gf(e) >>> 0)
}
function wl(e) {
  return typeof e == 'string' && !0
}
var Rs = function (e) {
    return (
      typeof e == 'function' ||
      (typeof e == 'object' && e !== null && !Array.isArray(e))
    )
  },
  W0 = function (e) {
    return e !== '__proto__' && e !== 'constructor' && e !== 'prototype'
  }
function H0(e, t, n) {
  var r = e[n]
  Rs(t) && Rs(r) ? Zf(r, t) : (e[n] = t)
}
function Zf(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  for (var l = 0, o = n; l < o.length; l++) {
    var i = o[l]
    if (Rs(i)) for (var s in i) W0(s) && H0(e, i[s], s)
  }
  return e
}
var Jf = yn.createContext()
Jf.Consumer
var Pi = {}
function Xf(e, t, n) {
  var r = Ba(e),
    l = !wl(e),
    o = t.attrs,
    i = o === void 0 ? ao : o,
    s = t.componentId,
    u =
      s === void 0
        ? (function (f, m) {
            var S = typeof f != 'string' ? 'sc' : Ni(f)
            Pi[S] = (Pi[S] || 0) + 1
            var E = S + '-' + U0('5.3.11' + S + Pi[S])
            return m ? m + '-' + E : E
          })(t.displayName, t.parentComponentId)
        : s,
    c = t.displayName,
    d =
      c === void 0
        ? (function (f) {
            return wl(f) ? 'styled.' + f : 'Styled(' + uc(f) + ')'
          })(e)
        : c,
    p =
      t.displayName && t.componentId
        ? Ni(t.displayName) + '-' + t.componentId
        : t.componentId || u,
    g = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i,
    x = t.shouldForwardProp
  r &&
    e.shouldForwardProp &&
    (x = t.shouldForwardProp
      ? function (f, m, S) {
          return e.shouldForwardProp(f, m, S) && t.shouldForwardProp(f, m, S)
        }
      : e.shouldForwardProp)
  var v,
    y = new E0(n, p, r ? e.componentStyle : void 0),
    j = y.isStatic && i.length === 0,
    h = function (f, m) {
      return (function (S, E, R, O) {
        var I = S.attrs,
          Q = S.componentStyle,
          D = S.defaultProps,
          ge = S.foldedComponentIds,
          pe = S.shouldForwardProp,
          Se = S.styledComponentId,
          be = S.target,
          _e = (function ($, w, H) {
            $ === void 0 && ($ = Xt)
            var P = Pt({}, w, { theme: $ }),
              se = {}
            return (
              H.forEach(function (G) {
                var K,
                  B,
                  ke,
                  Be = G
                for (K in (br(Be) && (Be = Be(P)), Be))
                  P[K] = se[K] =
                    K === 'className'
                      ? ((B = se[K]),
                        (ke = Be[K]),
                        B && ke ? B + ' ' + ke : B || ke)
                      : Be[K]
              }),
              [P, se]
            )
          })(D0(E, k.useContext(Jf), D) || Xt, E, I),
          kt = _e[0],
          Le = _e[1],
          N = (function ($, w, H, P) {
            var se = T0(),
              G = O0(),
              K = w
                ? $.generateAndInjectStyles(Xt, se, G)
                : $.generateAndInjectStyles(H, se, G)
            return K
          })(Q, O, kt),
          A = R,
          M = Le.$as || E.$as || Le.as || E.as || be,
          q = wl(M),
          _ = Le !== E ? Pt({}, E, {}, Le) : E,
          T = {}
        for (var z in _)
          z[0] !== '$' &&
            z !== 'as' &&
            (z === 'forwardedAs'
              ? (T.as = _[z])
              : (pe ? pe(z, lc, M) : !q || lc(z)) && (T[z] = _[z]))
        return (
          E.style &&
            Le.style !== E.style &&
            (T.style = Pt({}, E.style, {}, Le.style)),
          (T.className = Array.prototype
            .concat(ge, Se, N !== Se ? N : null, E.className, Le.className)
            .filter(Boolean)
            .join(' ')),
          (T.ref = A),
          k.createElement(M, T)
        )
      })(v, f, m, j)
    }
  return (
    (h.displayName = d),
    ((v = yn.forwardRef(h)).attrs = g),
    (v.componentStyle = y),
    (v.displayName = d),
    (v.shouldForwardProp = x),
    (v.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : ao),
    (v.styledComponentId = p),
    (v.target = r ? e.target : e),
    (v.withComponent = function (f) {
      var m = t.componentId,
        S = (function (R, O) {
          if (R == null) return {}
          var I,
            Q,
            D = {},
            ge = Object.keys(R)
          for (Q = 0; Q < ge.length; Q++)
            (I = ge[Q]), O.indexOf(I) >= 0 || (D[I] = R[I])
          return D
        })(t, ['componentId']),
        E = m && m + '-' + (wl(f) ? f : Ni(uc(f)))
      return Xf(f, Pt({}, S, { attrs: g, componentId: E }), n)
    }),
    Object.defineProperty(v, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps
      },
      set: function (f) {
        this._foldedDefaultProps = r ? Zf({}, e.defaultProps, f) : f
      },
    }),
    Object.defineProperty(v, 'toString', {
      value: function () {
        return '.' + v.styledComponentId
      },
    }),
    l &&
      a0(v, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    v
  )
}
var Ts = function (e) {
  return (function t(n, r, l) {
    if ((l === void 0 && (l = Xt), !so.isValidElementType(r)))
      return el(1, String(r))
    var o = function () {
      return n(r, l, $0.apply(void 0, arguments))
    }
    return (
      (o.withConfig = function (i) {
        return t(n, r, Pt({}, l, {}, i))
      }),
      (o.attrs = function (i) {
        return t(
          n,
          r,
          Pt({}, l, {
            attrs: Array.prototype.concat(l.attrs, i).filter(Boolean),
          }),
        )
      }),
      o
    )
  })(Xf, e)
}
;[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (e) {
  Ts[e] = Ts(e)
})
const U = Ts,
  V0 = U.h2`
  color: #111;
  font-size: 2rem;
  padding-inline: 0.2em;
  font-size: ${(e) => e.$size};
  position: relative;
  overflow: hidden;
  font-style: italic;
  color: ${(e) => e.$color};
  background-color: ${(e) => (e.$background ? 'var(--main-color-300);' : '')};
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`,
  Q0 = U.b`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 50%;
    height: 2px;
    background-color: var(--main-color-500);
  }
`
function qf({ $color: e, text: t, $size: n, $background: r, accent: l }) {
  return a.jsxs(V0, {
    $color: e,
    $background: r,
    $size: n,
    children: [t, a.jsx(Q0, { children: l })],
  })
}
const b0 =
    'data:image/webp;base64,UklGRmYLAABXRUJQVlA4WAoAAAAQAAAALAEA5gAAQUxQSFEGAAABoIDtfyFJqqqerp6u8XI8a9u2bdvG3a1t2zZ77R6tzbN9s3NYa9SVnC9V1fVLnSNiAoT//f+fTyW74h8YGBQYHJQp2N9PtlkZPgG56vQev2DtnkOHj56Iiz20ZXbP0oGiNSH55++4/u3HqR6V0N8m6qODDTM7JKshS62511MIZUuSXZ3DrYTA6rPephp/OLt6oEUQPirxFdXhq8RR4RZA5NRPqW4/nRrJeaHT7lNd358WynFSt7tU93e7SbxWxkUN6SrDZdLQB9SgD4ZK/BW2hRp4SxhvVblNDX27Cl+1/o4a/LvWPNX7JTX8y978NMpDvaBnFC+No15yHB8NJN6CDOShzinUa6Z05p86D6gXfVCHd6I/o171s2jOOU297Gm+mU697nSeafDE+zxpwC+Zb1A9pr3v3rxy3ryVm93vp+mB3sjMLa9TzT1fb+xWNDTARxAEwScgtGi3jV97NKOv80quZ1o9PNguWPjDwe0OPtTqWS5OOUS1fbWtusC4+rZX2tBDfFI1TZuLNQUNa17UJq0qj4h7qZZp0wMFTQOnp2lB94ocUvmBFkktBc1bJmnxoDJ/2FdRDd8rK+iw7Hsa0FV27sj5SIN38gu6zP+OBo9yckc/yv6L4oJOi3/BjvbjDfESu6fVBN1We8ruksgZJTzsBgo6HsjOU4Iz5lPm+0Q9ifuY0fl8IV1lllxS0HXJZGZXJa7In8SKTBd0Pp2wSsrPFV3SWSWF6C0kiVV6F65YRllPFnQ/mRVdxhPOWFYp0fqLTmEV6+SImLdY7ZP1J+9j9VYMR5T5nlVHwYAdWX1fhiPqE0Y/lDBCiR8YkfocMYQyPhdihJBzjOgQjpjLaotgyC2s5nLEMlYTjTGR1TJ+sK1nRHoYowdhtN7GDfIuRqltjdE2ldEumRuUo4xeNDFGkxeMjircEBDL6HFdY9R9zCg2gB/cjJ4Y5Qkj9//++496sYwe1zZG7ceMYvlA8o/IlfMUoyf1FUVRnIriVP6o0+nnH5QpS9ZsoRExMVFh2TIFBfgpiqI4FUVR6j9hdKFKmZIF8+aMCg+RRdikmOFnPk3+3sOIqqqqEkJUQoj6m55fV1VVJb9T/aXnN1XCiKqe9NTnD75++9ioUk7QMk97SKj5kuRpURJg9nrvE2rOnlNFJbicw15Q0yaXCotg+Y5JoyZOjoViJbZNoaaePswOVZaPqMnfjYGqKzG71JYSUM5YavoLFaCin5vfxRCgShLzux8FVHlq/imlgSoGAOkMVG4A6BwRpzwI7LfjVACBs744FUfgphOnggjcASoCgbtABVsrCgJ3rJV71spta+UOUH7Wij8Ct4EKROAWUMEI3AYqMwK3fHHKhsBtJ04RCNwCKhKBm7445UDglhOnfAjcBKoQAjeAKoLAdaBKIHADqDII3PTFqTwEDpwqI3BDxqkqAteAqo3AdaDqIHANqEbWSlMErgLVAoFrQLVC4ApQ7RC4ClQXBK4A1R2Bq3aceiFwWYZJ7GOpSP0QuATUYGtlCAKXgXoNgUvWykWgRlkrYxE4j5MNgotATUbgAlBTEDgP1HQEzgE1E4ELQM1G4BxQ86yVhdbKEgTOA7UMgbNALbdWViGQCNRaBBKA2oBAIlCbEEj4s2qzpeKz3VKx70QgHid5NwJxQO1BINZaiQPKhUAsUAcRcAN1CIFYoI5YK0cROAPUCQTcQJ1C4AxQpxFw23E6g8BpGadYBE4AFY/AYZwciQjsslsqS204xQNAXhNhkk8CkNFYgNl+GIDH+YE6AsA1P5ycCLwu4KzsNb/n+YByzDc/lz9QUjuP2b1qJAEl5Pzc7FwhAtL26cTckssJWOf5xNRS+viAZev2ysQyFjoFtIMWZJhW+toQAe+si1NM6oc3AgTEg7q87TGfjM8WlbILmNvC2u39IsWjEkKICRD15aeu16qEyqIAu6hEl63fskPX3kNGjnpj9Nix48eMnzxx6rQpU2bMmDlj9py5c+fPX7Bo/qKFy5evWL5ixYpVa9etW7du/YaNmzZt3bxl6/btO3bt2r1n7549u10HD7gOHDx09PDRI8ePnThx/MTJ06dPnzkT6451x8cnJiac3L1gUN3cfpLAkaLE0sZasv1hHx+77HDIjt8tOxyyLDscssMhO3xlmyj87/9/zQcAVlA4IO4EAADQKwCdASotAecAPpFInEulpCKhpNHowLASCWVu4XHF7mIC31ZjyH2ddMJuXDjfecs+gP0M+YBznfMT51PoA3jP0GvLQ9lL92Mpk+aY/tHezuWkD1kj8073sTf47wcd4OO8HHeDju4g2XrAvNkW0VErGxAxSP8gYKjarBsJauv1QgfkB6DFJBikVIyxLWTaihQ/o8/3gR7hQoYa9O7WN3ihBPjWzO3cKagaHpp8bvWN3rEVbWEMDIO8HHeDcDs3nT9iiWhTNPp8ED8wxzSX3+bZZnu0WN3qcq1GRFhpTFrk/esZJqtVwwdBx3g3VdrxJJCcyn2Mm2srsCkgxQkkEm/yCZDFHYZABm2chXlS49YOO8G5OqnBvpiAf9fALspTU1+8K+ysYXfPq9VnGgmlGfoGBN7BaRAxSP4Qv4CYMTwbgGnpcUVYOO8HGcS4rDZ2CEQh9rJE3GgED4+dJ2QYpIMxWMnZBikRAAD+/ysACJwj6zUG79+NzRqCN6Fvyc1puNVSGvXQwHPrTsL7e+8hTBx+8Pbm39k1MOp46hcrQOIIUrlSc4S+sUW1JQZjKjag8SQk+FrZWkqRrZpUIxICXRD2Ee822q6YaJuQEIxH6SOjPaFnuAwrEYIGPIolYTQ2L+UredTeEvM5z3tbUBAz0YUrD4c8WNMUiLdgwdZmOyiI2DBi2TEkhApB4+BdFQXDeUHPTFZvPKDeKjiiL64i2jBt+JI3Haiq5TaBg0NWPP89LuKdzX7PWbrozrmke65MOSwdZpG6nfTlFqXs+1MKbRu6p3uGfjSXhF30E6zml5dSbDN88jVKzNYdc/k5QVYZrM6+ZJkbzK5rN8iNJxkOcVE9L0LcFfQO15dsXK1OGO2dwGsLNbmaqQJGWFAlvxiczkxJxyGjPpogjTdl8wMutA7MOPuVJuKpmLyXRqf10LwQnVMe+OeoedLLnalKWVwjijS8UifAb3jmbtZAL3KOI818zvNvn1VZibE81ljDzECP8r/IaB6IwEnKKpasCYNX5GFkjpIknzveImFCcG3iLmfRj+//jQjKoLB+CQ5WgUiJU4kQucg0G+kB7f5UVOgo+570mZM9SJpbTtdITwg8g0Q8Et/Owv01Y5wUnbSdgAZvFQRnp90l0WZRuhky+aIG+Ij6mZSp92j4Z96l3yctA2Yk5dOg2yZ/C0Y606RcdnOO0pJWtoyMKe8FinU+Dd/qAq3mveC8immw4tZn5IuBsCmKV8tGQiYCdwdH7CIk0s+lAaW2Fx4NwrTryZzA4/deADK9wIVLOb11zdvz1i2JXbLL8sYBo9J43RpV4r/OzROdoKtMZE5JrGHaoJRJUQHEdgfzZM9sPQvlVLWnpd53Yp1fl/phrb2gFIrxK4pqkAEVEGnkH3zo3dDqsyViAk1l6wXl4GitW0D/P5ViMQvfuO/XhxhuEMFR91dH88/Ry1zlup5MuZ/ATCQCTB0NgUiQmfTzlBTBogHo1mYI7Mhu+Zs+GCVOwYripjYOX9XwZfs3G/F2FL+ysnIBpakBe6zKCZwAcKZAL+Whe6X2bnhJMENX29f87Hds3LrTwtrcgUkF018sqGPh9HVKk8nrBwxaNtw6UpMKi1q8czG+LP4MydCRg6uTihJJF7+P+IyblWGf9EN9DMxAfq/KG+8h+PoaGNwYYqHe17fdZJkCAAAAAA==',
  G0 = '/assets/shipping-d8b0ba6c.webp',
  Y0 = '/assets/premium-a9491c5e.webp'
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gr() {
  return (
    (Gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Gr.apply(this, arguments)
  )
}
var Ht
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Ht || (Ht = {}))
const mc = 'popstate'
function K0(e) {
  e === void 0 && (e = {})
  function t(r, l) {
    let { pathname: o, search: i, hash: s } = r.location
    return Os(
      '',
      { pathname: o, search: i, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    )
  }
  function n(r, l) {
    return typeof l == 'string' ? l : co(l)
  }
  return J0(t, n, null, e)
}
function de(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Wa(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function Z0() {
  return Math.random().toString(36).substr(2, 8)
}
function gc(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Os(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Gr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? tr(t) : t,
      { state: n, key: (t && t.key) || r || Z0() },
    )
  )
}
function co(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function tr(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function J0(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    s = Ht.Pop,
    u = null,
    c = d()
  c == null && ((c = 0), i.replaceState(Gr({}, i.state, { idx: c }), ''))
  function d() {
    return (i.state || { idx: null }).idx
  }
  function p() {
    s = Ht.Pop
    let j = d(),
      h = j == null ? null : j - c
    ;(c = j), u && u({ action: s, location: y.location, delta: h })
  }
  function g(j, h) {
    s = Ht.Push
    let f = Os(y.location, j, h)
    n && n(f, j), (c = d() + 1)
    let m = gc(f, c),
      S = y.createHref(f)
    try {
      i.pushState(m, '', S)
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E
      l.location.assign(S)
    }
    o && u && u({ action: s, location: y.location, delta: 1 })
  }
  function x(j, h) {
    s = Ht.Replace
    let f = Os(y.location, j, h)
    n && n(f, j), (c = d())
    let m = gc(f, c),
      S = y.createHref(f)
    i.replaceState(m, '', S),
      o && u && u({ action: s, location: y.location, delta: 0 })
  }
  function v(j) {
    let h = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      f = typeof j == 'string' ? j : co(j)
    return (
      de(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          f,
      ),
      new URL(f, h)
    )
  }
  let y = {
    get action() {
      return s
    },
    get location() {
      return e(l, i)
    },
    listen(j) {
      if (u) throw new Error('A history only accepts one active listener')
      return (
        l.addEventListener(mc, p),
        (u = j),
        () => {
          l.removeEventListener(mc, p), (u = null)
        }
      )
    },
    createHref(j) {
      return t(l, j)
    },
    createURL: v,
    encodeLocation(j) {
      let h = v(j)
      return { pathname: h.pathname, search: h.search, hash: h.hash }
    },
    push: g,
    replace: x,
    go(j) {
      return i.go(j)
    },
  }
  return y
}
var vc
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(vc || (vc = {}))
function X0(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? tr(t) : t,
    l = Ha(r.pathname || '/', n)
  if (l == null) return null
  let o = ep(e)
  q0(o)
  let i = null
  for (let s = 0; i == null && s < o.length; ++s) i = ag(o[s], dg(l))
  return i
}
function ep(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let l = (o, i, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || '' : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    }
    u.relativePath.startsWith('/') &&
      (de(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (u.relativePath = u.relativePath.slice(r.length)))
    let c = qt([r, u.relativePath]),
      d = n.concat(u)
    o.children &&
      o.children.length > 0 &&
      (de(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + c + '".'),
      ),
      ep(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: ig(c, o.index), routesMeta: d })
  }
  return (
    e.forEach((o, i) => {
      var s
      if (o.path === '' || !((s = o.path) != null && s.includes('?'))) l(o, i)
      else for (let u of tp(o.path)) l(o, i, u)
    }),
    t
  )
}
function tp(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return l ? [o, ''] : [o]
  let i = tp(r.join('/')),
    s = []
  return (
    s.push(...i.map((u) => (u === '' ? o : [o, u].join('/')))),
    l && s.push(...i),
    s.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  )
}
function q0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  )
}
const eg = /^:\w+$/,
  tg = 3,
  ng = 2,
  rg = 1,
  lg = 10,
  og = -2,
  yc = (e) => e === '*'
function ig(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(yc) && (r += og),
    t && (r += ng),
    n
      .filter((l) => !yc(l))
      .reduce((l, o) => l + (eg.test(o) ? tg : o === '' ? rg : lg), r)
  )
}
function sg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function ag(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = []
  for (let i = 0; i < n.length; ++i) {
    let s = n[i],
      u = i === n.length - 1,
      c = l === '/' ? t : t.slice(l.length) || '/',
      d = ug(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c,
      )
    if (!d) return null
    Object.assign(r, d.params)
    let p = s.route
    o.push({
      params: r,
      pathname: qt([l, d.pathname]),
      pathnameBase: mg(qt([l, d.pathnameBase])),
      route: p,
    }),
      d.pathnameBase !== '/' && (l = qt([l, d.pathnameBase]))
  }
  return o
}
function ug(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = cg(e.path, e.caseSensitive, e.end),
    l = t.match(n)
  if (!l) return null
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    s = l.slice(1)
  return {
    params: r.reduce((c, d, p) => {
      if (d === '*') {
        let g = s[p] || ''
        i = o.slice(0, o.length - g.length).replace(/(.)\/+$/, '$1')
      }
      return (c[d] = fg(s[p] || '', d)), c
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  }
}
function cg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Wa(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    )
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (i, s) => (r.push(s), '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  )
}
function dg(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      Wa(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    )
  }
}
function fg(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      Wa(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    )
  }
}
function Ha(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function pg(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? tr(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : hg(n, t)) : t,
    search: gg(r),
    hash: vg(l),
  }
}
function hg(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function _i(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Va(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  )
}
function Qa(e, t, n, r) {
  r === void 0 && (r = !1)
  let l
  typeof e == 'string'
    ? (l = tr(e))
    : ((l = Gr({}, e)),
      de(
        !l.pathname || !l.pathname.includes('?'),
        _i('?', 'pathname', 'search', l),
      ),
      de(
        !l.pathname || !l.pathname.includes('#'),
        _i('#', 'pathname', 'hash', l),
      ),
      de(!l.search || !l.search.includes('#'), _i('#', 'search', 'hash', l)))
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    s
  if (r || i == null) s = n
  else {
    let p = t.length - 1
    if (i.startsWith('..')) {
      let g = i.split('/')
      for (; g[0] === '..'; ) g.shift(), (p -= 1)
      l.pathname = g.join('/')
    }
    s = p >= 0 ? t[p] : '/'
  }
  let u = pg(l, s),
    c = i && i !== '/' && i.endsWith('/'),
    d = (o || i === '.') && n.endsWith('/')
  return !u.pathname.endsWith('/') && (c || d) && (u.pathname += '/'), u
}
const qt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  mg = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  gg = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  vg = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function yg(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const np = ['post', 'put', 'patch', 'delete']
new Set(np)
const xg = ['get', ...np]
new Set(xg)
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fo() {
  return (
    (fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    fo.apply(this, arguments)
  )
}
const ba = k.createContext(null),
  wg = k.createContext(null),
  nr = k.createContext(null),
  Zo = k.createContext(null),
  Lt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  rp = k.createContext(null)
function Sg(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  rr() || de(!1)
  let { basename: r, navigator: l } = k.useContext(nr),
    { hash: o, pathname: i, search: s } = op(e, { relative: n }),
    u = i
  return (
    r !== '/' && (u = i === '/' ? r : qt([r, i])),
    l.createHref({ pathname: u, search: s, hash: o })
  )
}
function rr() {
  return k.useContext(Zo) != null
}
function lr() {
  return rr() || de(!1), k.useContext(Zo).location
}
function lp(e) {
  k.useContext(nr).static || k.useLayoutEffect(e)
}
function Jo() {
  let { isDataRoute: e } = k.useContext(Lt)
  return e ? Mg() : kg()
}
function kg() {
  rr() || de(!1)
  let e = k.useContext(ba),
    { basename: t, navigator: n } = k.useContext(nr),
    { matches: r } = k.useContext(Lt),
    { pathname: l } = lr(),
    o = JSON.stringify(Va(r).map((u) => u.pathnameBase)),
    i = k.useRef(!1)
  return (
    lp(() => {
      i.current = !0
    }),
    k.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !i.current)) return
        if (typeof u == 'number') {
          n.go(u)
          return
        }
        let d = Qa(u, JSON.parse(o), l, c.relative === 'path')
        e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : qt([t, d.pathname])),
          (c.replace ? n.replace : n.push)(d, c.state, c)
      },
      [t, n, o, l, e],
    )
  )
}
const jg = k.createContext(null)
function Cg(e) {
  let t = k.useContext(Lt).outlet
  return t && k.createElement(jg.Provider, { value: e }, t)
}
function op(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(Lt),
    { pathname: l } = lr(),
    o = JSON.stringify(Va(r).map((i) => i.pathnameBase))
  return k.useMemo(() => Qa(e, JSON.parse(o), l, n === 'path'), [e, o, l, n])
}
function Eg(e, t) {
  return Ng(e, t)
}
function Ng(e, t, n) {
  rr() || de(!1)
  let { navigator: r } = k.useContext(nr),
    { matches: l } = k.useContext(Lt),
    o = l[l.length - 1],
    i = o ? o.params : {}
  o && o.pathname
  let s = o ? o.pathnameBase : '/'
  o && o.route
  let u = lr(),
    c
  if (t) {
    var d
    let y = typeof t == 'string' ? tr(t) : t
    s === '/' || ((d = y.pathname) != null && d.startsWith(s)) || de(!1),
      (c = y)
  } else c = u
  let p = c.pathname || '/',
    g = s === '/' ? p : p.slice(s.length) || '/',
    x = X0(e, { pathname: g }),
    v = Og(
      x &&
        x.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: qt([
              s,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? s
                : qt([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
    )
  return t && v
    ? k.createElement(
        Zo.Provider,
        {
          value: {
            location: fo(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c,
            ),
            navigationType: Ht.Pop,
          },
        },
        v,
      )
    : v
}
function Pg() {
  let e = Ag(),
    t = yg(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null
  return k.createElement(
    k.Fragment,
    null,
    k.createElement('h2', null, 'Unexpected Application Error!'),
    k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? k.createElement('pre', { style: l }, n) : null,
    o,
  )
}
const _g = k.createElement(Pg, null)
class Rg extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error
      ? k.createElement(
          Lt.Provider,
          { value: this.props.routeContext },
          k.createElement(rp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children
  }
}
function Tg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(ba)
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Lt.Provider, { value: t }, r)
  )
}
function Og(e, t, n) {
  var r
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l
    if ((l = n) != null && l.errors) e = n.matches
    else return null
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors
  if (i != null) {
    let s = o.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id]),
    )
    s >= 0 || de(!1), (o = o.slice(0, Math.min(o.length, s + 1)))
  }
  return o.reduceRight((s, u, c) => {
    let d = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
      p = null
    n && (p = u.route.errorElement || _g)
    let g = t.concat(o.slice(0, c + 1)),
      x = () => {
        let v
        return (
          d
            ? (v = p)
            : u.route.Component
              ? (v = k.createElement(u.route.Component, null))
              : u.route.element
                ? (v = u.route.element)
                : (v = s),
          k.createElement(Tg, {
            match: u,
            routeContext: { outlet: s, matches: g, isDataRoute: n != null },
            children: v,
          })
        )
      }
    return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0)
      ? k.createElement(Rg, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: d,
          children: x(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : x()
  }, null)
}
var Is
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate')
})(Is || (Is = {}))
var Yr
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId')
})(Yr || (Yr = {}))
function Ig(e) {
  let t = k.useContext(ba)
  return t || de(!1), t
}
function zg(e) {
  let t = k.useContext(wg)
  return t || de(!1), t
}
function Lg(e) {
  let t = k.useContext(Lt)
  return t || de(!1), t
}
function ip(e) {
  let t = Lg(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || de(!1), n.route.id
}
function Ag() {
  var e
  let t = k.useContext(rp),
    n = zg(Yr.UseRouteError),
    r = ip(Yr.UseRouteError)
  return t || ((e = n.errors) == null ? void 0 : e[r])
}
function Mg() {
  let { router: e } = Ig(Is.UseNavigateStable),
    t = ip(Yr.UseNavigateStable),
    n = k.useRef(!1)
  return (
    lp(() => {
      n.current = !0
    }),
    k.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, fo({ fromRouteId: t }, o)))
      },
      [e, t],
    )
  )
}
function $g(e) {
  let { to: t, replace: n, state: r, relative: l } = e
  rr() || de(!1)
  let { matches: o } = k.useContext(Lt),
    { pathname: i } = lr(),
    s = Jo(),
    u = Qa(
      t,
      Va(o).map((d) => d.pathnameBase),
      i,
      l === 'path',
    ),
    c = JSON.stringify(u)
  return (
    k.useEffect(
      () => s(JSON.parse(c), { replace: n, state: r, relative: l }),
      [s, c, l, n, r],
    ),
    null
  )
}
function sp(e) {
  return Cg(e.context)
}
function Ae(e) {
  de(!1)
}
function Dg(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = Ht.Pop,
    navigator: o,
    static: i = !1,
  } = e
  rr() && de(!1)
  let s = t.replace(/^\/*/, '/'),
    u = k.useMemo(() => ({ basename: s, navigator: o, static: i }), [s, o, i])
  typeof r == 'string' && (r = tr(r))
  let {
      pathname: c = '/',
      search: d = '',
      hash: p = '',
      state: g = null,
      key: x = 'default',
    } = r,
    v = k.useMemo(() => {
      let y = Ha(c, s)
      return y == null
        ? null
        : {
            location: { pathname: y, search: d, hash: p, state: g, key: x },
            navigationType: l,
          }
    }, [s, c, d, p, g, x, l])
  return v == null
    ? null
    : k.createElement(
        nr.Provider,
        { value: u },
        k.createElement(Zo.Provider, { children: n, value: v }),
      )
}
function Fg(e) {
  let { children: t, location: n } = e
  return Eg(zs(t), n)
}
var xc
;(function (e) {
  ;(e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error')
})(xc || (xc = {}))
new Promise(() => {})
function zs(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return
      let o = [...t, l]
      if (r.type === k.Fragment) {
        n.push.apply(n, zs(r.props.children, o))
        return
      }
      r.type !== Ae && de(!1), !r.props.index || !r.props.children || de(!1)
      let i = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (i.children = zs(r.props.children, o)), n.push(i)
    }),
    n
  )
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ls() {
  return (
    (Ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ls.apply(this, arguments)
  )
}
function Bg(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    l,
    o
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l])
  return n
}
function Ug(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Wg(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Ug(e)
}
const Hg = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  Vg = 'startTransition',
  wc = Op[Vg]
function Qg(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = k.useRef()
  o.current == null && (o.current = K0({ window: l, v5Compat: !0 }))
  let i = o.current,
    [s, u] = k.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    d = k.useCallback(
      (p) => {
        c && wc ? wc(() => u(p)) : u(p)
      },
      [u, c],
    )
  return (
    k.useLayoutEffect(() => i.listen(d), [i, d]),
    k.createElement(Dg, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
    })
  )
}
const bg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Gg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ye = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: s,
        target: u,
        to: c,
        preventScrollReset: d,
      } = t,
      p = Bg(t, Hg),
      { basename: g } = k.useContext(nr),
      x,
      v = !1
    if (typeof c == 'string' && Gg.test(c) && ((x = c), bg))
      try {
        let f = new URL(window.location.href),
          m = c.startsWith('//') ? new URL(f.protocol + c) : new URL(c),
          S = Ha(m.pathname, g)
        m.origin === f.origin && S != null
          ? (c = S + m.search + m.hash)
          : (v = !0)
      } catch {}
    let y = Sg(c, { relative: l }),
      j = Yg(c, {
        replace: i,
        state: s,
        target: u,
        preventScrollReset: d,
        relative: l,
      })
    function h(f) {
      r && r(f), f.defaultPrevented || j(f)
    }
    return k.createElement(
      'a',
      Ls({}, p, { href: x || y, onClick: v || o ? r : h, ref: n, target: u }),
    )
  })
var Sc
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher')
})(Sc || (Sc = {}))
var kc
;(function (e) {
  ;(e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(kc || (kc = {}))
function Yg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    s = Jo(),
    u = lr(),
    c = op(e, { relative: i })
  return k.useCallback(
    (d) => {
      if (Wg(d, n)) {
        d.preventDefault()
        let p = r !== void 0 ? r : co(u) === co(c)
        s(e, { replace: p, state: l, preventScrollReset: o, relative: i })
      }
    },
    [u, s, c, r, l, n, e, o, i],
  )
}
const Kg = U(ye)`
  background-color: ${(e) => (e.$altButton ? '#888' : ' var(--main-color-450)')};
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding: 0.6em 3em;
  transition: 200ms;
  &:hover {
    filter: brightness(1.05);
    background-color: ${(e) => e.$altButton && ' var(--main-color-450)'};
  }
`,
  Zg = U.button`
  background-color: var(--main-color-450);
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
  padding: 0.8em 3em;
  transition: 200ms;
  border: none;
  &:hover {
    filter: brightness(1.05);
  }
`
function ap({ to: e, $altButton: t, typeLink: n, onClick: r, children: l }) {
  return a.jsx(a.Fragment, {
    children: n
      ? a.jsx(Kg, { $altButton: t, to: e, children: l })
      : a.jsx(Zg, { onClick: r, children: l }),
  })
}
const Jg = U.div`
  background-color: #f5f5f5;
  padding: 3em;
  display: flex;
  justify-content: center;
`,
  Xg = U.div`
  max-width: 100ch;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
`,
  qg = U.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2em;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
function ev() {
  return a.jsx(Jg, {
    children: a.jsxs(Xg, {
      children: [
        a.jsx(qf, { $noBackground: !0, text: 'Sobre Eride' }),
        a.jsxs(qg, {
          children: [
            a.jsx(Ri, {
              src: Y0,
              alt: 'imagen de una estrella ',
              text: 'Nuestros productos son de las marcas y modelos más reconocidos de la industria, lo que garantiza el máximo valor por tu inversión',
            }),
            a.jsx(Ri, {
              src: G0,
              alt: 'icono de envio',
              text: 'Tus compras cuentan con envío gratuito a todo el país',
            }),
            a.jsx(Ri, {
              text: 'Tu privacidad es nuestra principal preocupación. Por ello, no solicitamos ni almacenamos datos personales, ni requerimos registro',
              src: b0,
              alt: 'imagen de un candado',
            }),
          ],
        }),
        a.jsx(ap, {
          typeLink: !0,
          $altButton: !0,
          to: '/about',
          children: 'Conocer más...',
        }),
      ],
    }),
  })
}
function Ri({ src: e, alt: t, text: n }) {
  return a.jsx(a.Fragment, {
    children: a.jsxs('div', {
      className: 'w-full',
      children: [
        a.jsx('div', {
          className: 'm-2 flex w-full items-center justify-center',
          children: a.jsx('img', {
            width: 120,
            height: 100,
            className: 'pointer-events-none object-contain',
            src: e,
            alt: t,
          }),
        }),
        a.jsx('p', { className: 'text-center', children: n }),
      ],
    }),
  })
}
const tv = '/assets/brand_dualtron-ca7f5b69.webp',
  nv = '/assets/brand_inmotion-0d470094.webp',
  rv = '/assets/brand_maxyou-d61cf109.webp',
  lv = '/assets/brand_segway-0cfc4c06.webp',
  ov = '/assets/brand_vsett-c57148ac.webp',
  iv = '/assets/brand_zero-e293c47a.webp',
  sv = U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 3em;
  filter: grayscale(1);
  @media (max-width: 700px) {
    overflow: auto;
    flex-wrap: nowrap;
    padding-inline: 2em;
    gap: 3em;
    justify-content: start;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
function av() {
  const e = [tv, nv, rv, lv, ov, iv]
  return a.jsx('div', {
    className:
      'objec-fit flex flex-col items-center justify-center gap-1 bg-[#f5f5f5] text-center',
    children: a.jsx(sv, {
      children: e.map((t, n) =>
        a.jsx(
          'img',
          {
            className: 'h-20 w-36 object-contain duration-300',
            src: t,
            alt: 'Imagen Marca',
          },
          n,
        ),
      ),
    }),
  })
}
function Jn(e) {
  return typeof e == 'string'
    ? e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    : e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
}
function Ga(e, t) {
  const n = e * (t / 100),
    r = e - n
  return Jn(r)
}
const uv = U.div`
  height: 420px;
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  @media (max-width: 700px) {
    height: 340px;
    width: 100%;
  }
`
function cv({ data: e }) {
  return a.jsx(a.Fragment, {
    children: a.jsxs('div', {
      className: 'flex flex-col-reverse px-4 md:flex-row',
      children: [
        a.jsxs('div', {
          className: 'flex flex-col md:size-96',
          children: [
            a.jsx('h2', { className: 'text-3xl', children: e.title }),
            a.jsxs('div', {
              children: [
                e.discount &&
                  a.jsxs('p', {
                    className: 'text-gray-500 line-through',
                    children: ['$ ', Ga(e.price, e.discount)],
                  }),
                a.jsx('span', {
                  className: 'flex items-center gap-2',
                  children: a.jsx('p', {
                    className: 'text-3xl text-primary-600',
                    children: e.price && Jn(e.price),
                  }),
                }),
              ],
            }),
            a.jsx('p', { className: '', children: e.description }),
            a.jsx(ye, {
              className:
                'w-full bg-primary-500 py-3 text-center font-bold text-white hover:bg-primary-400 md:w-40',
              to: '/product/id/' + e._id,
              children: 'Saber Más',
            }),
          ],
        }),
        a.jsxs(uv, {
          className: 'px-2',
          children: [
            a.jsxs('p', {
              className: 'absolute text-2xl font-bold text-primary-400',
              children: [e.discount, '% OFF'],
            }),
            a.jsx('img', {
              className: 'm-auto size-80 object-contain md:size-96',
              src: e.coverImage,
              alt: 'imagen de producto destacado',
            }),
          ],
        }),
      ],
    }),
  })
}
function dv() {
  return a.jsx(a.Fragment, {
    children: a.jsxs('div', {
      className: 'flex w-max flex-col-reverse gap-5 md:flex-row',
      children: [
        a.jsxs('div', {
          className: 'space-y-2',
          children: [
            a.jsx('div', { className: 'animate-skeleton h-8 w-32 rounded-lg' }),
            a.jsx('div', { className: 'animate-skeleton h-8 w-32 rounded-lg' }),
            a.jsx('div', {
              className: 'animate-skeleton h-44 w-96 rounded-lg',
            }),
            a.jsx('div', {
              className: 'animate-skeleton h-14 w-full rounded-lg md:w-36',
            }),
          ],
        }),
        a.jsx('div', {
          className:
            'animate-skeleton rounded-lx h-96 w-full rounded-lg md:size-96',
        }),
      ],
    }),
  })
}
const fv = '/assets/main-banner-b60fcd70.webp',
  pv = '/assets/banner-mobile-7147e132.webp',
  hv = U.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${fv});
  background-size: cover;
  background-position: center;
  @media (max-width: 1150px) {
    background-size: cover;
    background-position: 50%;
    width: 100%;
    background-repeat: no-repeat;
    height: 300px;
    background-image: url(${pv});
  }
`
function mv() {
  return a.jsx(a.Fragment, { children: a.jsx(hv, {}) })
}
const it = 'https://eride-api.vercel.app/api'
async function gv() {
  try {
    return await (
      await fetch(`${it}/user/token`, { credentials: 'include' })
    ).json()
  } catch (e) {
    console.error('Hubo un problema con la solicitud del token', e)
  }
}
/*! js-cookie v3.0.5 | MIT */ function Sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) e[r] = n[r]
  }
  return e
}
var vv = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    )
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent,
    )
  },
}
function As(e, t) {
  function n(l, o, i) {
    if (!(typeof document > 'u')) {
      ;(i = Sl({}, t, i)),
        typeof i.expires == 'number' &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape))
      var s = ''
      for (var u in i)
        i[u] &&
          ((s += '; ' + u), i[u] !== !0 && (s += '=' + i[u].split(';')[0]))
      return (document.cookie = l + '=' + e.write(o, l) + s)
    }
  }
  function r(l) {
    if (!(typeof document > 'u' || (arguments.length && !l))) {
      for (
        var o = document.cookie ? document.cookie.split('; ') : [],
          i = {},
          s = 0;
        s < o.length;
        s++
      ) {
        var u = o[s].split('='),
          c = u.slice(1).join('=')
        try {
          var d = decodeURIComponent(u[0])
          if (((i[d] = e.read(c, d)), l === d)) break
        } catch {}
      }
      return l ? i[l] : i
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (l, o) {
        n(l, '', Sl({}, o, { expires: -1 }))
      },
      withAttributes: function (l) {
        return As(this.converter, Sl({}, this.attributes, l))
      },
      withConverter: function (l) {
        return As(Sl({}, this.converter, l), this.attributes)
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  )
}
var jc = As(vv, { path: '/' })
const up = k.createContext()
function Sn() {
  const e = k.useContext(up)
  if (!e) throw new Error('useContext debe estar dentro de un provider')
  return e
}
function yv({ children: e }) {
  const [t, n] = k.useState(null),
    [r, l] = k.useState(!1),
    [o, i] = k.useState(''),
    [s, u] = k.useState(!0),
    c = Jo()
  k.useEffect(() => {
    g()
  }, []),
    k.useEffect(() => {
      i('')
    }, [c])
  async function d(v) {
    try {
      const y = await fetch(`${it}/user/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(v),
          credentials: 'include',
        }),
        j = await y.json()
      if (j.error) return console.log(y), n(null), i(j.error)
      n(j), console.log(j), l(!0), c('/'), console.log('login successful')
    } catch (y) {
      console.log('login error', y)
    }
  }
  async function p(v) {
    try {
      const j = await (
        await fetch(`${it}/user/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(v),
          credentials: 'include',
        })
      ).json()
      if ((console.log(j), j.error)) {
        n(null), i(j.error)
        return
      } else n(j), l(!0), c('/')
    } catch (y) {
      console.log('Login error', y)
    }
  }
  async function g() {
    const v = jc.get()
    if (!v.token) return l(!1), u(!1), n(null)
    try {
      const y = await gv(v.token)
      if (!y) {
        console.log('Respuesta no válida o indefinida'), u(!1), l(!1), n(null)
        return
      }
      if (y.error) {
        u(!1), l(!1), n(null)
        return
      } else {
        u(!1), l(!0), n(y)
        return
      }
    } catch (y) {
      console.log('error al validar', y), u(!1), l(!1), n(null)
    }
  }
  function x() {
    try {
      jc.remove('token'), l(!1), n(null), c('/')
    } catch (v) {
      console.log('error al salir', v)
    }
  }
  return a.jsx(up.Provider, {
    value: {
      userLogin: d,
      userRegister: p,
      userLogout: x,
      setUser: n,
      user: t,
      isAuth: r,
      message: o,
      loading: s,
    },
    children: e,
  })
}
function Ms({ productId: e }) {
  const { isAuth: t, user: n, setUser: r } = Sn(),
    [l, o] = k.useState(!1),
    i = Jo()
  k.useEffect(() => {
    if (n) {
      const c = n.favorites.includes(e)
      o(c)
    }
  }, [n, e])
  async function s(c) {
    try {
      const d = await fetch(`${it}/user/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: c }),
        credentials: 'include',
      })
      if (!d.ok) throw new Error('No se pudo crear el favorito')
      const p = await d.json()
      r((g) => ({ ...g, favorites: p.favorites }))
    } catch (d) {
      console.error('¡No se pudo crear el favorito!', d)
    }
  }
  const u = () => {
    t ? (o(!l), s(e)) : i('/user/account')
  }
  return a.jsx(a.Fragment, {
    children: a.jsx('button', {
      onClick: u,
      className: `${l ? 'fill-red-400' : 'fill-white'} relative z-20 size-8 items-center justify-center rounded-full stroke-red-500 p-1 hover:shadow-lg`,
      children: a.jsxs('svg', {
        className: 'h-full w-full',
        viewBox: '0 0 24 24',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        children: [
          a.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }),
          a.jsx('path', {
            d: 'M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572',
          }),
        ],
      }),
    }),
  })
}
function po({ productData: e }) {
  const { _id: t, coverImage: n, price: r, title: l, discount: o } = e
  return a.jsx(a.Fragment, {
    children: a.jsxs('figure', {
      className:
        'relative w-full border-b duration-300 hover:shadow-lg md:w-60 md:rounded-xl md:border-none md:shadow-md',
      children: [
        a.jsx('div', {
          className: 'absolute right-2 z-50 hidden md:left-2 md:flex',
          children: a.jsx(Ms, { productId: t }),
        }),
        a.jsxs(ye, {
          to: `/product/id/${t}`,
          className: 'flex h-full w-full cursor-pointer md:block',
          children: [
            a.jsxs('div', {
              className: 'rounded-t-xl bg-white md:border-b-2',
              children: [
                o &&
                  a.jsxs('span', {
                    'aria-label': 'Descuento',
                    className:
                      'absolute right-0 hidden rounded-bl-xl rounded-tr-xl bg-primary-500 px-3 text-lg font-bold text-white md:flex',
                    children: [o, '%'],
                  }),
                a.jsx('img', {
                  loading: 'lazy',
                  alt: 'Product image',
                  className:
                    'm-auto flex size-32 rounded-t-xl object-contain p-3 md:h-56 md:w-64',
                  src: n,
                }),
              ],
            }),
            a.jsxs('figcaption', {
              className: 'rounded-b-xl bg-white p-2 text-slate-700',
              children: [
                a.jsxs('div', {
                  className:
                    'flex flex-col items-start gap-2 md:flex-row md:items-center',
                  children: [
                    o &&
                      a.jsxs(a.Fragment, {
                        children: [
                          a.jsxs('div', {
                            className: 'flex gap-2 text-xl md:gap-0',
                            children: [
                              '$',
                              o && Ga(r, o),
                              a.jsx('div', {
                                className: 'right-2 z-10 md:left-2 md:hidden',
                                children: a.jsx(Ms, { id: t }),
                              }),
                            ],
                          }),
                          a.jsxs('p', {
                            className: 'text-gray-500 line-through',
                            children: [o && '$', Jn(r)],
                          }),
                        ],
                      }),
                    r &&
                      !o &&
                      a.jsxs('p', {
                        className: 'text-xl',
                        children: ['$', Jn(r)],
                      }),
                  ],
                }),
                a.jsx('p', {
                  className: 'text-start text-green-600',
                  children: 'Envío gratis',
                }),
                a.jsx('h2', { className: 'text-start font-bold', children: l }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
function $s() {
  return a.jsx(a.Fragment, {
    children: a.jsxs('div', {
      className:
        'relative flex rounded-xl p-2 shadow-md duration-300 hover:shadow-lg md:block md:w-60',
      children: [
        a.jsx('div', {
          className:
            'animate-skeleton size-28 rounded-xl bg-gray-300 md:h-52 md:w-full',
        }),
        a.jsxs('div', {
          className: 'flex flex-col gap-1 px-2 py-2 md:px-0',
          children: [
            a.jsx('span', {
              className: 'animate-skeleton h-6 w-44 rounded-xl',
            }),
            a.jsx('span', {
              className: 'animate-skeleton h-6 w-20 rounded-xl',
            }),
            a.jsx('span', {
              className: 'animate-skeleton h-6 w-28 rounded-xl',
            }),
          ],
        }),
      ],
    }),
  })
}
const xv = '/assets/scotter-banner-f541022f.webp'
function wv(e) {
  const [t, n] = k.useState({}),
    [r, l] = k.useState(!0),
    [o, i] = k.useState(null),
    s = k.useCallback(async () => {
      try {
        l(!0)
        const c = await (await fetch(`${it}/scooters/${e}`)).json()
        n(c)
      } catch (u) {
        i(u), console.error('¡Hubo un problema con la solicitud!', u)
      } finally {
        l(!1)
      }
    }, [e, it, l, n, i])
  return (
    k.useEffect(() => {
      s()
    }, []),
    { data: t, loading: r, error: o }
  )
}
function Ds(e) {
  const [t, n] = k.useState([]),
    [r, l] = k.useState(!0),
    [o, i] = k.useState(null)
  async function s() {
    try {
      l(!0)
      const c = await (
        await fetch(`${it}/scooters/multiple`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids: e }),
        })
      ).json()
      n(c)
    } catch (u) {
      i(u), console.error('¡Hubo un problema con la solicitud!', u)
    } finally {
      l(!1)
    }
  }
  return (
    k.useEffect(() => {
      s()
    }, []),
    { data: t, loading: r, error: o }
  )
}
function Sv() {
  const e = '66e4906be4f50256a4d1f2b5',
    t = [
      '66e4906be4f50256a4d1f2c6',
      '66e4906be4f50256a4d1f2ba',
      '66e4906be4f50256a4d1f2c3',
      '66e4906be4f50256a4d1f2b6',
    ],
    n = [
      '66e4906be4f50256a4d1f2bb',
      '66e4906be4f50256a4d1f2b9',
      '66e4906be4f50256a4d1f2be',
      '66e4906be4f50256a4d1f2c1',
      '66e4906be4f50256a4d1f2c1',
      '66e4906be4f50256a4d1f2c1',
    ],
    { data: r, loading: l } = wv(e),
    { data: o, loading: i } = Ds(t),
    { data: s, loading: u } = Ds(n)
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(mv, {
        title: 'SOLO LO MEJOR',
        subtitle: 'No te conformes con menos cuando se trata de tu pasión',
      }),
      a.jsx(av, {}),
      a.jsxs('main', {
        className: 'flex flex-col items-center justify-center gap-20 py-20',
        children: [
          a.jsxs('section', {
            className: 'flex flex-col items-center justify-start gap-10',
            children: [
              a.jsx('h2', { className: 'text-4xl', children: 'Destacado' }),
              l ? a.jsx(dv, {}) : a.jsx(cv, { data: r }),
            ],
          }),
          a.jsxs('section', {
            className: 'flex min-h-96 flex-col justify-start gap-5',
            children: [
              a.jsx('h2', {
                className: 'text-center text-4xl',
                children: 'Las mejores ofertas',
              }),
              a.jsx('div', {
                className:
                  'flex flex-wrap items-center justify-center gap-4 pt-5',
                children: i
                  ? Array(t.length)
                      .fill()
                      .map((c, d) => a.jsx($s, {}, d))
                  : o.map((c, d) => a.jsx(po, { productData: c }, d)),
              }),
            ],
          }),
          a.jsxs('section', {
            className:
              'relative flex h-[calc(100vh-10em)] w-full snap-mandatory flex-col items-center justify-center gap-2 text-white',
            children: [
              a.jsxs('div', {
                className: 'flex max-w-[45em] flex-col',
                children: [
                  a.jsx('h2', {
                    className: 'text-6xl font-bold',
                    children: 'Nunca pares de viajar elegi la mejor autonomia',
                  }),
                  a.jsx('p', {
                    className: 'text-2xl',
                    children:
                      'Hagas lo que hagas, vas a necesitar equipo resistente, cómodo y duradero.',
                  }),
                ],
              }),
              a.jsx(ye, {
                to: '/product/scooters',
                className:
                  'mt-5 rounded-full bg-white px-5 py-4 font-bold text-black hover:bg-primary-600 hover:text-white',
                children: 'Explorar la colección',
              }),
              a.jsx('img', {
                className:
                  'absolute -z-10 h-full w-full object-cover object-center blur-[1px] brightness-90',
                loading: 'lazy',
                fetchpriority: 'low',
                src: xv,
                alt: 'Imagen del banner',
              }),
            ],
          }),
          a.jsxs('section', {
            className: 'flex min-h-96 flex-col justify-start gap-5',
            children: [
              a.jsx('h2', {
                className: 'text-center text-4xl',
                children: 'Más vendidos',
              }),
              a.jsx('div', {
                className:
                  'flex flex-wrap items-center justify-center gap-4 pt-5',
                children: u
                  ? Array(n.length)
                      .fill()
                      .map((c, d) => a.jsx($s, {}, d))
                  : s.map((c, d) => a.jsx(po, { productData: c }, d)),
              }),
            ],
          }),
        ],
      }),
      '|',
      a.jsx(ev, {}),
    ],
  })
}
function kv() {
  const { user: e } = Sn(),
    { data: t, loading: n } = Ds(e.favorites)
  return a.jsx(a.Fragment, {
    children: a.jsxs('div', {
      className:
        'flex min-h-[30em] flex-col items-center justify-center gap-10 py-20',
      children: [
        a.jsx('h1', {
          className: 'text-center text-4xl',
          children: 'Favoritos',
        }),
        a.jsx('section', {
          className: 'flex flex-wrap items-center justify-center gap-10',
          children:
            !n && t.length > 0
              ? t.map((r) => a.jsx(po, { productData: r }, r._id))
              : a.jsx('p', {
                  children: 'Agrega tus productos favoritos y velos aqui!',
                }),
        }),
      ],
    }),
  })
}
const jv = '/assets/low-892326f4.svg',
  Cv = '/assets/mercado-e99e931b.webp',
  Ev = U.footer`
  padding-top: 2em;
  padding-bottom: 1em;
  width: 100%;
  min-height: 230px;

  color: #fff;
  display: flex;

  flex-direction: column;
  position: relative;
`,
  Nv = U.img`
  object-fit: cover;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
`,
  Pv = U.p`
  font-size: 14px;
  color: #cacaca;
`,
  _v = U.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-row-gap: 2em;
  justify-content: center;
  padding-bottom: 2em;
`,
  Cc = U.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  transition: 0.2s;
`,
  Ec = U.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  color: #cacaca;
`,
  Rv = U.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`,
  Nc = U.h2`
  font-size: 18px;
  position: relative;
  color: var(--main-color-300);
  margin-bottom: 10px;
  &::before {
    content: '';
    position: absolute;

    width: 70px;
    bottom: 0px;

    height: 2px;
    background-color: var(--main-color-500);
  }
`
function Tv() {
  let t = new Date().getFullYear()
  return a.jsxs(Ev, {
    className: 'bg-slate-800/95',
    children: [
      a.jsxs(_v, {
        children: [
          a.jsxs(Cc, {
            children: [
              a.jsx(Nc, { children: 'CONTACTO' }),
              a.jsx(Ec, { children: 'consultas.eride@gmail.com' }),
              a.jsxs('div', {
                className: 'flex items-center justify-center gap-3 py-2',
                children: [
                  a.jsx('a', {
                    className:
                      'stroke-white object-contain hover:stroke-primary-400',
                    href: '',
                    children: a.jsxs('svg', {
                      width: '44',
                      height: '44',
                      viewBox: '0 0 24 24',
                      strokeWidth: '1.5',
                      fill: 'none',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      children: [
                        a.jsx('path', {
                          stroke: 'none',
                          d: 'M0 0h24v24H0z',
                          fill: 'none',
                        }),
                        a.jsx('path', {
                          d: 'M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9',
                        }),
                        a.jsx('path', {
                          d: 'M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1',
                        }),
                      ],
                    }),
                  }),
                  a.jsx('a', {
                    className:
                      'stroke-white object-contain hover:stroke-primary-400',
                    href: '',
                    children: a.jsxs('svg', {
                      width: '44',
                      height: '44',
                      viewBox: '0 0 24 24',
                      strokeWidth: '1.5',
                      fill: 'none',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      children: [
                        a.jsx('path', {
                          stroke: 'none',
                          d: 'M0 0h24v24H0z',
                          fill: 'none',
                        }),
                        a.jsx('path', {
                          d: 'M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3',
                        }),
                      ],
                    }),
                  }),
                  a.jsx('a', {
                    className:
                      'stroke-white object-contain hover:stroke-primary-400',
                    href: '',
                    children: a.jsxs('svg', {
                      width: '44',
                      height: '44',
                      viewBox: '0 0 24 24',
                      strokeWidth: '1.5',
                      fill: 'none',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      children: [
                        a.jsx('path', {
                          stroke: 'none',
                          d: 'M0 0h24v24H0z',
                          fill: 'none',
                        }),
                        a.jsx('path', {
                          d: 'M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z',
                        }),
                        a.jsx('path', {
                          d: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
                        }),
                        a.jsx('path', { d: 'M16.5 7.5l0 .01' }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          a.jsxs(Cc, {
            children: [
              a.jsx(Nc, { children: 'PAGO SEGURO' }),
              a.jsx(Ec, {
                children:
                  'Podés pagar con tarjeta, débito y efectivo. Tus datos y las compras están protegidas con',
              }),
              a.jsx('div', {
                className: 'flex items-center justify-center',
                children: a.jsx('a', {
                  rel: 'noreferrer',
                  href: 'https://www.mercadopago.com.ar/c/pagar-online-con-mercadopago',
                  target: '_blank',
                  className: 'size-max duration-300 hover:scale-105',
                  children: a.jsx('img', {
                    className: 'h-12 w-36 object-cover',
                    src: Cv,
                    alt: '',
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      a.jsx(Rv, {
        children: a.jsxs(Pv, {
          children: ['Copyright © 2021 - ', t, ' Eride '],
        }),
      }),
      a.jsx(Nv, { src: jv, alt: '' }),
    ],
  })
}
const Ov = '/assets/logo-4132137c.webp'
function Iv() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(!0),
    [l, o] = k.useState(null)
  async function i() {
    if (n)
      try {
        const u = await (await fetch(`${it}/scooters/names`)).json()
        t(u)
      } catch (s) {
        o(l), console.error('Hubo un problema con la solicitud!', s)
      } finally {
        r(!1)
      }
    else return
  }
  return { data: e, loading: n, requestNames: i, error: l }
}
function zv() {
  const e = k.useRef(null),
    [t, n] = k.useState(''),
    [r, l] = k.useState([]),
    [o, i] = k.useState(!1),
    { data: s, loading: u, requestNames: c } = Iv()
  function d() {
    c(), i(!0)
  }
  return (
    k.useEffect(() => {
      const p = s.filter((g) => g.title.toLowerCase().includes(t.toLowerCase()))
      l(p)
    }, [t]),
    k.useEffect(() => {
      function p(g) {
        e.current && !e.current.contains(g.target) && i(!1)
      }
      return (
        document.addEventListener('mousedown', p),
        () => {
          document.removeEventListener('mousedown', p)
        }
      )
    }, [n]),
    a.jsxs('span', {
      className: 'relative',
      ref: e,
      children: [
        a.jsxs('div', {
          className: 'relative flex h-max w-52 items-center justify-start',
          children: [
            a.jsx('input', {
              type: 'text',
              className:
                'text-red caret-primary focus-visible:border-primary peer w-64 rounded-md border-transparent bg-gray-600 px-3 py-0.5 text-white outline-none',
              placeholder: ' ',
              value: t,
              onClick: d,
              onChange: (p) => n(p.target.value),
            }),
            a.jsx('p', {
              className:
                'pointer-events-none absolute -translate-x-20 px-3 text-slate-300 duration-300 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-slate-300 peer-focus:-translate-x-20 peer-focus:text-gray-100',
              children: 'Buscar',
            }),
            a.jsx('button', {
              onClick: () => n(''),
              className:
                'absolute right-2 text-white peer-placeholder-shown:hidden',
              children: '✕',
            }),
          ],
        }),
        !u &&
          o &&
          t !== '' &&
          r.length > 0 &&
          a.jsx('div', {
            className:
              'absolute z-10 mt-2 flex w-full flex-col gap-2 rounded-md bg-white shadow-lg',
            children: r
              .slice(0, 6)
              .map(({ title: p, _id: g }) =>
                a.jsx(
                  ye,
                  {
                    className:
                      'item-center flex justify-start rounded-md p-2 hover:bg-primary-500 hover:text-white',
                    to: `/product/id/${g}`,
                    onClick: () => n(''),
                    children: p,
                  },
                  p,
                ),
              ),
          }),
      ],
    })
  )
}
function Lv({ menuRef: e, setIsOpen: t }) {
  const { userLogout: n, user: r } = Sn()
  return a.jsx(a.Fragment, {
    children: a.jsx('div', {
      ref: e,
      className:
        'absolute right-0 z-50 flex w-max flex-col gap-2 rounded-lg bg-white px-7 py-6 shadow-xl',
      children: a.jsxs('div', {
        className: 'relative flex flex-col items-center gap-3',
        children: [
          a.jsx('p', { className: 'text-xs', children: r.email }),
          a.jsxs('h2', {
            className: 'text-xl font-bold',
            children: ['¡Hola, ', r.name, '!'],
          }),
          a.jsx(ye, {
            to: 'user/profile',
            onClick: () => t(!1),
            className:
              'w-full rounded-lg border border-primary-500 px-4 py-1 text-center text-primary-500 hover:bg-primary-500 hover:text-white',
            children: 'Administrar mi cuenta',
          }),
          a.jsxs('button', {
            onClick: n,
            className:
              'just-center flex items-center gap-1 stroke-black hover:stroke-primary-500 hover:text-primary-500',
            children: [
              a.jsxs('svg', {
                className: 'size-5',
                viewBox: '0 0 24 24',
                strokeWidth: '1.5',
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                children: [
                  a.jsx('path', {
                    stroke: 'none',
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  }),
                  a.jsx('path', {
                    d: 'M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2',
                  }),
                  a.jsx('path', { d: 'M9 12h12l-3 -3' }),
                  a.jsx('path', { d: 'M18 15l3 -3' }),
                ],
              }),
              'Salir',
            ],
          }),
        ],
      }),
    }),
  })
}
function Av(e) {
  const [t, n] = k.useState(!1)
  function r(l) {
    e.current && !e.current.contains(l.target) && n(!1)
  }
  return (
    k.useEffect(
      () => (
        document.addEventListener('mousedown', r),
        () => {
          document.removeEventListener('mousedown', r)
        }
      ),
      [],
    ),
    { isOpen: t, setIsOpen: n }
  )
}
function Mv() {
  const { isAuth: e } = Sn(),
    t = k.useRef(),
    { isOpen: n, setIsOpen: r } = Av(t)
  return a.jsx(a.Fragment, {
    children: a.jsxs('header', {
      className:
        'hidden h-14 w-full items-center justify-between bg-slate-800 md:flex md:px-10',
      children: [
        a.jsx(ye, {
          className: 'w-max',
          title: 'Home',
          to: '/',
          children: a.jsx('img', {
            className: 'size-36 object-contain',
            src: Ov,
            alt: '',
          }),
        }),
        a.jsxs('nav', {
          className: 'z-50 flex items-center justify-end gap-5',
          children: [
            a.jsx(zv, {}),
            a.jsx(ye, {
              className: 'rounded-lg px-3 py-1 text-white hover:bg-gray-700',
              to: '/product/scooters',
              children: 'Monopatines',
            }),
            e
              ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsxs(ye, {
                      to: 'user/favorites',
                      className:
                        'flex items-center justify-center gap-1 rounded-lg p-2 text-white hover:bg-gray-700',
                      children: [
                        a.jsxs('svg', {
                          className:
                            'size-5 text-white duration-200 peer-checked:text-primary-500',
                          viewBox: '0 0 24 24',
                          strokeWidth: '1.5',
                          fill: 'currentColor',
                          children: [
                            a.jsx('path', {
                              stroke: 'none',
                              d: 'M0 0h24v24H0z',
                              fill: 'none',
                            }),
                            a.jsx('path', {
                              d: 'M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572',
                            }),
                          ],
                        }),
                        'Favoritos',
                      ],
                    }),
                    a.jsxs('span', {
                      className: 'relative',
                      children: [
                        a.jsx('button', {
                          onClick: () => r(!n),
                          to: '/user/profile',
                          className: 'size-8 rounded-full bg-gray-200',
                          children: a.jsxs('svg', {
                            className: 'size-full object-contain p-1',
                            viewBox: '0 0 24 24',
                            strokeWidth: '1.5',
                            stroke: 'var(--primary-600)',
                            fill: 'none',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            children: [
                              a.jsx('path', {
                                stroke: 'none',
                                d: 'M0 0h24v24H0z',
                                fill: 'none',
                              }),
                              a.jsx('path', {
                                d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0',
                              }),
                              a.jsx('path', {
                                d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2',
                              }),
                            ],
                          }),
                        }),
                        n && a.jsx(Lv, { menuRef: t, setIsOpen: r }),
                      ],
                    }),
                  ],
                })
              : a.jsxs(a.Fragment, {
                  children: [
                    a.jsx(ye, {
                      className:
                        'rounded-lg border px-3 py-1 text-white hover:bg-gray-700',
                      to: '/user/login',
                      children: 'Ingresar',
                    }),
                    a.jsx(ye, {
                      className:
                        'rounded-lg bg-primary-600 px-3 py-1 text-white hover:bg-primary-500',
                      to: '/user/register',
                      children: 'Registrarse',
                    }),
                  ],
                }),
          ],
        }),
      ],
    }),
  })
}
const $v = '/favicon.webp'
function Dv() {
  const [e, t] = k.useState(!1),
    [n, r] = k.useState(!1)
  return a.jsx(a.Fragment, {
    children: a.jsxs('header', {
      className:
        'fixed z-50 flex h-14 w-full items-center justify-between bg-slate-800 px-2 md:hidden xl:px-10',
      children: [
        a.jsx(ye, {
          className: 'w-max',
          title: 'Home',
          to: '/',
          children: a.jsx('img', {
            className: 'size-10 object-contain',
            src: $v,
            alt: '',
          }),
        }),
        a.jsxs('div', {
          className: 'flex items-center gap-4',
          children: [
            a.jsx('button', {
              title: 'Buscar',
              onClick: () => t(!e),
              className:
                'justify-centert-ce flex size-8 items-center rounded-lg p-1 text-white hover:bg-gray-700',
              children: a.jsxs('svg', {
                viewBox: '0 0 24 24',
                strokeWidth: '2',
                stroke: '#fff',
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                children: [
                  a.jsx('path', {
                    stroke: 'none',
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  }),
                  a.jsx('path', {
                    d: 'M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0',
                  }),
                  a.jsx('path', { d: 'M21 21l-6 -6' }),
                ],
              }),
            }),
            a.jsx(ye, {
              className:
                'justify-centert-ce flex size-8 items-center rounded-lg text-white hover:bg-gray-700',
              to: '/product/scooters',
              title: 'Monopatines',
              children: a.jsxs('svg', {
                viewBox: '0 0 24 24',
                strokeWidth: '1.5',
                stroke: '#fff',
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                children: [
                  a.jsx('path', {
                    stroke: 'none',
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  }),
                  a.jsx('path', {
                    d: 'M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0',
                  }),
                  a.jsx('path', {
                    d: 'M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0',
                  }),
                  a.jsx('path', {
                    d: 'M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1',
                  }),
                ],
              }),
            }),
            a.jsx(ye, {
              to: '/user/login',
              onClick: () => r(!n),
              className:
                'justify-centert-ce flex size-8 items-center rounded-lg text-white hover:bg-gray-700',
              title: 'Ingresar',
              children: a.jsxs('svg', {
                width: '44',
                height: '44',
                viewBox: '0 0 24 24',
                strokeWidth: '1.5',
                stroke: '#ffffff',
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                children: [
                  a.jsx('path', {
                    stroke: 'none',
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  }),
                  a.jsx('path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' }),
                  a.jsx('path', {
                    d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2',
                  }),
                ],
              }),
            }),
          ],
        }),
        e &&
          a.jsx('aside', {
            className:
              'absolute left-0 top-14 flex w-full flex-col bg-gray-700 p-3',
            children: a.jsx('input', {
              type: 'text',
              placeholder: 'Buscar...',
              className: 'w-full rounded-lg px-2 py-3',
            }),
          }),
      ],
    }),
  })
}
function Fv() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(Mv, {}),
      a.jsx(Dv, {}),
      a.jsx('div', { className: 'pt-14 md:p-0', children: a.jsx(sp, {}) }),
      a.jsx(Tv, {}),
    ],
  })
}
function Bv() {
  const { userRegister: e, message: t } = Sn(),
    [n, r] = k.useState()
  console.log(n)
  async function l(o) {
    o.preventDefault(), r(t)
    const i = o.target.name.value,
      s = o.target.lastname.value,
      u = o.target.email.value,
      c = o.target.password.value
    if (i === '') return r('Rellena el campo de Nombre')
    if (s === '') return r('Rellena el campo de Apellido')
    if (u === '') return r('Rellena el campo de Email')
    if (c === '') return r('Rellena el campo de Contraseña')
    if (c.length < 6) return r('La contraseña debe tener al menos 6 caracteres')
    e({ lastname: s, name: i, password: c, email: u })
  }
  return a.jsx(a.Fragment, {
    children: a.jsx('div', {
      className:
        'flex h-[calc(100vh-3.5em)] w-full items-center justify-center',
      children: a.jsxs('form', {
        name: 'register',
        onSubmit: l,
        className: 'mb-20 flex w-96 flex-col gap-3',
        children: [
          a.jsx('h1', { className: 'text-3xl', children: 'Registrarse' }),
          a.jsxs('div', {
            className: 'grid grid-cols-2 gap-2',
            children: [
              a.jsx('input', {
                name: 'name',
                type: 'text',
                autoComplete: 'name',
                className: 'input-form',
                placeholder: 'Nombre',
              }),
              a.jsx('input', {
                name: 'lastname',
                type: 'text',
                autoComplete: 'lastname',
                className: 'input-form',
                placeholder: 'Apellido',
              }),
            ],
          }),
          a.jsx('input', {
            name: 'email',
            type: 'email',
            autoComplete: 'email',
            className: 'input-form',
            placeholder: 'email',
          }),
          a.jsx('label', {
            className: 'flex flex-col',
            children: a.jsx('div', {
              className: 'flex w-full flex-row',
              children: a.jsx('input', {
                name: 'password',
                type: 'password',
                autoComplete: 'current-password',
                className: 'input-form',
                placeholder: 'password',
              }),
            }),
          }),
          a.jsx('button', {
            type: 'submit',
            className:
              'w-full rounded-lg bg-primary-500 py-3 text-lg text-white hover:bg-primary-400',
            children: 'Enviar',
          }),
          a.jsx(ye, {
            className: 'text-primary-600 hover:text-primary-400',
            to: '/user/login',
            children: 'Ya tienes una cuenta? Ingresa aqui',
          }),
          a.jsx('div', { className: 'flex h-10 flex-col', children: n }),
        ],
      }),
    }),
  })
}
function Uv() {
  const { userLogin: e, message: t } = Sn()
  async function n(r) {
    r.preventDefault()
    const l = r.target.email.value,
      o = r.target.password.value
    e({ email: l, password: o })
  }
  return a.jsx(a.Fragment, {
    children: a.jsx('div', {
      className:
        'flex h-[calc(100vh-3.5em)] w-full items-center justify-center',
      children: a.jsxs('form', {
        name: 'login',
        onSubmit: n,
        className: 'mb-20 flex w-80 flex-col gap-3',
        children: [
          a.jsx('h1', { className: 'text-3xl', children: 'Login' }),
          a.jsx('input', {
            name: 'email',
            type: 'email',
            required: !0,
            className: 'input-form',
            placeholder: 'email',
            autoComplete: 'email',
          }),
          a.jsx('label', {
            className: 'flex flex-col',
            children: a.jsx('div', {
              className: 'flex w-full flex-row',
              children: a.jsx('input', {
                name: 'password',
                type: 'password',
                className: 'input-form',
                placeholder: 'password',
                required: !0,
                autoComplete: 'current-password',
              }),
            }),
          }),
          a.jsx('button', {
            type: 'submit',
            className: 'button-main',
            children: 'Enviar',
          }),
          a.jsx(ye, {
            className: 'text-primary-600 hover:text-primary-400',
            to: '/user/register',
            children: 'No tienes cuenta? registrate aqui',
          }),
          a.jsx('p', { className: 'h-10', children: t }),
        ],
      }),
    }),
  })
}
function Wv() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState([]),
    [l, o] = k.useState(e),
    [i, s] = k.useState(!0)
  async function u() {
    try {
      s(!0)
      const v = await (await fetch(`${it}/scooters`)).json()
      s(!1), t(v), o(v), c(v)
    } catch (x) {
      console.error('¡Hubo un problema con la solicitud!', x)
    }
  }
  function c(x) {
    const v = [...new Set(x.map((y) => y.brand))]
    r(v)
  }
  k.useEffect(() => {
    u()
  }, [])
  function d(x) {
    if (x === 'todas') o(e)
    else {
      const v = e.filter((y) => y.brand === x)
      o(v)
    }
  }
  function p(x) {
    let v
    x === 'sortMinPrice' && (v = [...l].sort((y, j) => y.price - j.price)),
      x === 'sortMaxPrice' && (v = [...l].sort((y, j) => j.price - y.price)),
      o(v)
  }
  function g(x) {
    const v = []
    for (let y = 0; y < x; y++) v.push(a.jsx($s, {}, y))
    return v
  }
  return a.jsx(a.Fragment, {
    children: a.jsxs('div', {
      className: 'flex flex-col md:flex-row',
      children: [
        a.jsxs('aside', {
          className:
            'flex w-full flex-col gap-5 py-10 pl-3 md:h-screen md:w-48 md:items-center',
          children: [
            a.jsxs('div', {
              className: 'flex flex-wrap space-y-1 md:block',
              children: [
                a.jsx('h3', {
                  className: 'text-xl font-bold',
                  children: 'Marcas',
                }),
                a.jsxs('div', {
                  className: 'flex flex-wrap gap-4 md:block md:space-y-1',
                  children: [
                    a.jsx(kl, {
                      defaultChecked: !0,
                      onChange: (x) => d(x.target.value),
                      name: 'brands',
                      value: 'todas',
                      children: 'Todas',
                    }),
                    n < 1
                      ? a.jsxs(a.Fragment, {
                          children: [
                            a.jsx('div', {
                              className: 'animate-skeleton h-6 w-20 rounded-lg',
                            }),
                            a.jsx('div', {
                              className: 'animate-skeleton h-6 w-20 rounded-lg',
                            }),
                            a.jsx('div', {
                              className: 'animate-skeleton h-6 w-20 rounded-lg',
                            }),
                            a.jsx('div', {
                              className: 'animate-skeleton h-6 w-20 rounded-lg',
                            }),
                            a.jsx('div', {
                              className: 'animate-skeleton h-6 w-20 rounded-lg',
                            }),
                            a.jsx('div', {
                              className: 'animate-skeleton h-6 w-20 rounded-lg',
                            }),
                          ],
                        })
                      : n.map((x) =>
                          a.jsx(
                            kl,
                            {
                              onChange: (v) => d(v.target.value),
                              name: 'brands',
                              value: x,
                              featured: !0,
                              children: x,
                            },
                            x,
                          ),
                        ),
                  ],
                }),
              ],
            }),
            a.jsxs('div', {
              className: 'space-y-1',
              children: [
                a.jsx('h3', {
                  className: 'text-xl font-bold',
                  children: 'Precio',
                }),
                a.jsxs('div', {
                  className: 'flex md:block md:space-y-1',
                  children: [
                    a.jsx(kl, {
                      onChange: (x) => p(x.target.value),
                      name: 'price',
                      value: 'sortMinPrice',
                      children: 'Más bajo',
                    }),
                    a.jsx(kl, {
                      onChange: (x) => p(x.target.value),
                      name: 'price',
                      value: 'sortMaxPrice',
                      children: 'Más Alto',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        a.jsxs('div', {
          className: 'w-full py-10 md:py-20',
          children: [
            a.jsx('h1', {
              className: 'pb-10 text-center text-4xl',
              children: 'Monopatines',
            }),
            a.jsx('section', {
              className: 'flex w-full flex-wrap justify-center gap-4',
              children: i
                ? g(19)
                : l.map((x) => a.jsx(po, { productData: x }, x.id)),
            }),
          ],
        }),
      ],
    }),
  })
}
function kl({
  children: e,
  name: t,
  defaultChecked: n,
  onChange: r,
  value: l,
}) {
  return a.jsxs('div', {
    className: 'relative flex w-fit items-center justify-center',
    children: [
      a.jsx('input', {
        type: 'radio',
        name: t,
        value: l,
        defaultChecked: n,
        className: 'peer absolute h-full w-full cursor-pointer appearance-none',
        onChange: r,
      }),
      a.jsx('p', {
        className:
          'pointer-events-none rounded-md px-2 peer-checked:bg-primary-100',
        children: e,
      }),
    ],
  })
}
const Hv = U.input`
  padding: 8px 15px 4px 4px;
  width: 100%;

  font-size: 16px;
  border: 0px;

  border-bottom: 2px solid #ebebeb;
  &:focus-visible {
    outline: 0px;
    border-bottom: 2px solid var(--main-color-500);
  }
`
function Pc({
  value: e,
  title: t,
  name: n,
  type: r,
  placeholder: l,
  onChange: o,
  onSubmit: i,
}) {
  return a.jsx(Hv, {
    value: e,
    title: t,
    name: n,
    onSubmit: i,
    required: !0,
    onChange: o,
    type: r,
    placeholder: l,
  })
}
var Ya = {}
Object.defineProperty(Ya, '__esModule', { value: !0 })
var cp = (Ya.loadMercadoPago = void 0)
const dp = 'https://sdk.mercadopago.com/js/v2',
  Vv = /^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/,
  _c =
    'MercadoPago has already been initialized in your window, please remove the duplicate import',
  Qv = 'MercadoPago.js not available',
  bv = 'Failed to load MercadoPago.js',
  Gv = () => {
    for (
      var e = document.querySelectorAll(`script[src^="${dp}"`), t = 0;
      t < e.length;
      t++
    ) {
      var n = e[t]
      if (Vv.test(n.src)) return n
    }
    return null
  },
  Yv = () => {
    const e = document.createElement('script')
    e.src = dp
    const t = document.head || document.body
    if (!t)
      throw new Error(
        'Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.',
      )
    return t.appendChild(e), e
  }
let jl = null
const Kv = () => (
  jl !== null ||
    (jl = new Promise((e, t) => {
      if (typeof window > 'u') {
        e(null)
        return
      }
      if (window.MercadoPago) {
        console.warn(_c), e(window.MercadoPago)
        return
      }
      try {
        let n = Gv()
        n ? console.warn(_c) : n || (n = Yv()),
          n.addEventListener('load', () => {
            window.MercadoPago ? e(window.MercadoPago) : t(new Error(Qv))
          }),
          n.addEventListener('error', () => {
            t(new Error(bv))
          })
      } catch (n) {
        t(n)
        return
      }
    })),
  jl
)
cp = Ya.loadMercadoPago = Kv
var Zv =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function l(o) {
      return o instanceof n
        ? o
        : new n(function (i) {
            i(o)
          })
    }
    return new (n || (n = Promise))(function (o, i) {
      function s(d) {
        try {
          c(r.next(d))
        } catch (p) {
          i(p)
        }
      }
      function u(d) {
        try {
          c(r.throw(d))
        } catch (p) {
          i(p)
        }
      }
      function c(d) {
        d.done ? o(d.value) : l(d.value).then(s, u)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
class xt {
  static getInstance() {
    return Zv(this, void 0, void 0, function* () {
      if (this.publicKey)
        return (
          this.loadedInstanceMercadoPago ||
            (yield cp(), (this.loadedInstanceMercadoPago = !0)),
          this.instanceMercadoPago ||
            (this.instanceMercadoPago = new window.MercadoPago(
              this.publicKey,
              this.options,
            )),
          this.instanceMercadoPago
        )
      console.error(
        'Expected the PUBLIC_KEY to render the MercadoPago SDK React',
      )
    })
  }
}
xt.publicKey = null
xt.options = {}
xt.instanceMercadoPago = void 0
xt.loadedInstanceMercadoPago = !1
function Jv(e, t) {
  return (
    Object.keys(e).length === Object.keys(t).length &&
    Object.keys(e).every(
      (r) => Object.prototype.hasOwnProperty.call(t, r) && e[r] === t[r],
    )
  )
}
const Xv = (e, t) => {
    const n = Object.assign(Object.assign({}, t), { frontEndStack: 'react' }),
      r = !Jv(xt.options, n)
    ;(e !== xt.publicKey || r) &&
      ((xt.publicKey = e), (xt.options = n), (xt.instanceMercadoPago = void 0))
  },
  qv = 200
var ey =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function l(o) {
      return o instanceof n
        ? o
        : new n(function (i) {
            i(o)
          })
    }
    return new (n || (n = Promise))(function (o, i) {
      function s(d) {
        try {
          c(r.next(d))
        } catch (p) {
          i(p)
        }
      }
      function u(d) {
        try {
          c(r.throw(d))
        } catch (p) {
          i(p)
        }
      }
      function c(d) {
        d.done ? o(d.value) : l(d.value).then(s, u)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const ty = () => ey(void 0, void 0, void 0, function* () {}),
  ny = () => {},
  ry = (e) => {
    console.error(e)
  }
var ly =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, n, r) {
    function l(o) {
      return o instanceof n
        ? o
        : new n(function (i) {
            i(o)
          })
    }
    return new (n || (n = Promise))(function (o, i) {
      function s(d) {
        try {
          c(r.next(d))
        } catch (p) {
          i(p)
        }
      }
      function u(d) {
        try {
          c(r.throw(d))
        } catch (p) {
          i(p)
        }
      }
      function c(d) {
        d.done ? o(d.value) : l(d.value).then(s, u)
      }
      c((r = r.apply(e, t || [])).next())
    })
  }
const oy = ({ settings: e, name: t, divId: n, controller: r }) =>
    ly(void 0, void 0, void 0, function* () {
      const l = yield xt.getInstance(),
        o = l == null ? void 0 : l.bricks()
      window[r] = yield o == null ? void 0 : o.create(t, n, e)
    }),
  iy = ({
    onReady: e = ny,
    onError: t = ry,
    onSubmit: n = ty,
    customization: r,
    initialization: l,
    locale: o,
  }) => (
    k.useEffect(() => {
      let i
      const s = {
        settings: {
          initialization: l,
          customization: r,
          locale: o,
          callbacks: { onReady: e, onSubmit: n, onError: t },
        },
        name: 'wallet',
        divId: 'walletBrick_container',
        controller: 'walletBrickController',
      }
      return (
        (i = setTimeout(() => {
          oy(s)
        }, qv)),
        () => {
          var u
          clearTimeout(i),
            (u = window.walletBrickController) === null ||
              u === void 0 ||
              u.unmount()
        }
      )
    }, [r, l, e, t, n]),
    yn.createElement('div', { id: 'walletBrick_container' })
  )
globalThis && globalThis.__awaiter
globalThis && globalThis.__awaiter
globalThis && globalThis.__awaiter
globalThis && globalThis.__awaiter
globalThis && globalThis.__awaiter
globalThis && globalThis.__awaiter
globalThis && globalThis.__awaiter
function sy({ title: e, price: t, setShipping: n, shipping: r }) {
  const [l, o] = k.useState(null),
    [i, s] = k.useState(!1)
  Xv('APP_USR-400ac6bd-a71b-4e78-9dfe-7f390acd7f68', { locale: 'es-AR' })
  const [u, c] = k.useState(!1),
    [d, p] = k.useState(''),
    [g, x] = k.useState({}),
    v = (m) => {
      const S = m.target.value
      x({ ...g, [m.target.name]: S })
    },
    y = async () => {
      try {
        return (
          await (
            await fetch(
              'https://eride-api.vercel.app/api/payment/create_preference',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: e, price: t, quantity: 1 }),
              },
            )
          ).json()
        ).id
      } catch (m) {
        console.log(m)
      }
    },
    j = [{ name: !0 }],
    h = async (m) => {
      if ((m.preventDefault(), j.every((S) => S !== void 0 && S !== ''))) {
        s(!0)
        const S = await y()
        S && o(S)
      } else p('Rellena el formulario de envio')
    },
    f = [
      { label: 'Nombre', name: 'name', type: 'text' },
      { label: 'Apellido', name: 'lastName', type: 'text' },
      { label: 'Telefono', name: 'phone', type: 'number' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Direccion', name: 'address', type: 'text' },
      { label: 'Ciudad', name: 'city', type: 'text' },
      { label: 'Provincia', name: 'province', type: 'text' },
      { label: 'Pais', name: 'country', type: 'text' },
      { label: 'Codigo Postal', name: 'postalCode', type: 'number' },
    ]
  return a.jsx(cy, {
    children: a.jsxs('div', {
      className: 'rounded-lg bg-white p-7 shadow-xl',
      children: [
        r === !0 &&
          i === !1 &&
          a.jsxs(a.Fragment, {
            children: [
              a.jsxs('div', {
                className: 'flex w-full justify-between',
                children: [
                  a.jsx('h1', {
                    className: 'text-3xl',
                    children: 'Datos de Envío',
                  }),
                  a.jsx('button', {
                    className:
                      'flex size-9 items-center justify-center rounded-full p-2 text-3xl text-primary-600 hover:bg-gray-100',
                    onClick: () => {
                      n(!1), x({})
                    },
                    title: 'Cerrar modal',
                    children: '🞪',
                  }),
                ],
              }),
              a.jsxs('p', {
                className:
                  'w-full text-wrap bg-red-200 text-center text-red-700',
                children: [
                  'Los pagos online estaran desabilitados en producción ',
                  a.jsx('br', {}),
                  ' para evitar compras no intencionadas',
                ],
              }),
              a.jsxs(ay, {
                children: [
                  'Todos nuestros productos cuentan con ',
                  a.jsx('b', { children: 'ENVIO GRATIS' }),
                ],
              }),
              a.jsxs('form', {
                children: [
                  a.jsxs(dy, {
                    children: [
                      f.map(({ type: m, name: S, label: E, value: R }, O) =>
                        a.jsx(
                          Pc,
                          {
                            type: m,
                            name: S,
                            placeholder: E,
                            onChange: v,
                            value: R,
                          },
                          O,
                        ),
                      ),
                      a.jsxs('div', {
                        className:
                          'flex h-10 w-full items-center justify-center gap-5',
                        children: [
                          u === !1
                            ? a.jsx(Pc, {
                                onChange: v,
                                type: 'text',
                                name: 'NCalle',
                                placeholder: 'Numero de Calle',
                              })
                            : a.jsx('div', { className: 'w-full' }),
                          a.jsx('button', {
                            type: 'button',
                            className: `${u && 'border-primary-700 text-primary-700'} w-full rounded-xl border-2 border-black`,
                            onClick: () => c(!u),
                            name: 'NCalle',
                            children: u ? 'Con numeración' : 'Sin Numeración',
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx('p', { className: 'text-red-500', children: d }),
                  a.jsx('button', {
                    className:
                      'w-full rounded-lg bg-primary-500 py-3 text-xl text-white',
                    onClick: (m) => h(m),
                    children: 'Confirmar',
                  }),
                ],
              }),
            ],
          }),
        i === !0 &&
          a.jsx(a.Fragment, {
            children: a.jsxs(fy, {
              children: [
                a.jsx(qf, { text: 'PAGO' }),
                a.jsxs(uy, {
                  children: [
                    a.jsxs('p', {
                      children: [
                        a.jsx('b', { children: '♦ Producto:' }),
                        ' ',
                        e,
                      ],
                    }),
                    a.jsxs('p', {
                      children: [
                        a.jsx('b', { children: '♦ Direccion:' }),
                        ' ',
                        g.calle,
                        ' ',
                        g.NCalle,
                        ', ',
                        g.provincia,
                        ',',
                        ' ',
                        g.localidad,
                      ],
                    }),
                    a.jsxs('p', {
                      children: [
                        a.jsx('b', { children: '♦ Total:' }),
                        ' $',
                        t.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'),
                      ],
                    }),
                  ],
                }),
                l && a.jsx(iy, { initialization: { preferenceId: l } }),
              ],
            }),
          }),
      ],
    }),
  })
}
const ay = U.p`
  color: var(--main-color-550);
  text-transform: uppercase;
  font-size: 14px;
  text-align: start;
`,
  uy = U.div`
  text-align: start;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-top: 1em;
`,
  cy = U.div`
  position: absolute;
  display: flex;
  align-items: start;
  height: max-content;
  justify-content: center;
  padding-block: 8em;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 100;
  text-align: center;
`,
  dy = U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 1em;
  width: 100%;
`,
  fy = U.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  flex-direction: column;
  gap: 5px;
  opacity: 0;
  animation: 1s show forwards 0.4s;
  padding: 1em;
`
function py({ images: e }) {
  const [t, n] = k.useState(0)
  return a.jsx(a.Fragment, {
    children: a.jsxs('section', {
      className: 'pb- flex flex-col-reverse md:flex-row',
      children: [
        a.jsx('div', {
          className:
            'flex max-h-96 flex-wrap items-center justify-center gap-2 md:flex-col',
          children: e.map((r, l) =>
            a.jsx(
              'button',
              {
                className: 'rounded-xl shadow-md duration-300 hover:shadow-xl',
                onMouseEnter: () => n(l),
                children: a.jsx('img', {
                  className: 'size-16 rounded-xl bg-white object-contain',
                  src: r,
                  alt: 'Imagen pequeña del producto',
                }),
              },
              l,
            ),
          ),
        }),
        a.jsx('div', {
          className: 'flex items-center justify-center',
          children: a.jsx('img', {
            className: 'size-80 object-contain md:size-96',
            src: e[t],
          }),
        }),
      ],
    }),
  })
}
function hy() {
  return a.jsx('div', {
    className: 'flex w-full items-center justify-center',
    children: a.jsxs('div', {
      className: 'flex gap-5',
      children: [
        a.jsx('div', { className: 'animate-skeleton size-96 rounded-lg' }),
        a.jsxs('div', {
          className: 'flex flex-col gap-5',
          children: [
            a.jsx('div', {
              className: 'animate-skeleton h-10 w-96 rounded-lg',
            }),
            a.jsx('div', {
              className: 'animate-skeleton h-44 w-96 rounded-lg',
            }),
            a.jsx('div', {
              className: 'animate-skeleton h-10 w-64 rounded-lg',
            }),
            a.jsx('div', {
              className: 'animate-skeleton h-10 w-64 rounded-lg',
            }),
          ],
        }),
      ],
    }),
  })
}
function my() {
  const t = lr().pathname.split('/')[3],
    [n, r] = k.useState({}),
    [l, o] = k.useState(!1),
    [i, s] = k.useState(!0)
  k.useEffect(() => {
    window.scrollTo(0, 0), u()
  }, [t])
  async function u() {
    try {
      s(!0)
      const v = await (await fetch(`${it}/scooters/${t}`)).json()
      v.images.unshift(v.coverImage), s(!1), r(v)
      return
    } catch (x) {
      console.error('¡Hubo un problema con la solicitud!', x)
    }
  }
  function c() {
    o(!0)
  }
  var d = new Date(),
    p = new Date()
  p.setDate(d.getDate() + 6)
  var g =
    p.toLocaleDateString('es-ES', { weekday: 'long' }) +
    ' ' +
    p.toLocaleDateString()
  return a.jsx(a.Fragment, {
    children: a.jsxs(xy, {
      className: 'min-h-screen',
      children: [
        l === !0 &&
          a.jsx(sy, {
            title: n.title,
            price: n.price,
            shipping: l,
            setShipping: o,
          }),
        i
          ? a.jsx(hy, {})
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs('section', {
                  className:
                    'flex min-h-[30em] flex-col items-center justify-center px-4 lg:flex-row lg:items-start',
                  children: [
                    a.jsx('div', {
                      className: 'flex',
                      children: a.jsx(py, {
                        coverImage: n.coverImage,
                        render: n.images.length,
                        images: n.images,
                      }),
                    }),
                    a.jsxs('div', {
                      className: 'space-y-2',
                      children: [
                        a.jsxs('div', {
                          className: 'flex gap-1',
                          children: [
                            a.jsxs('h1', {
                              className: 'text-4xl',
                              children: [n.title, ' '],
                            }),
                            a.jsx(Ms, { productId: n._id }),
                          ],
                        }),
                        a.jsx(wy, { children: n.description }),
                        a.jsxs(gy, {
                          children: [
                            a.jsx(Rc, { children: 'Llega gratis ' }),
                            a.jsxs('p', { children: ['el ', g] }),
                          ],
                        }),
                        a.jsxs(vy, {
                          children: [
                            a.jsx(Rc, { children: 'Devolución gratis' }),
                            a.jsx(yy, {
                              children: 'Tenés 30 días desde que lo recibís.',
                            }),
                          ],
                        }),
                        a.jsxs('div', {
                          className: 'flex flex-col items-start',
                          children: [
                            n.discount &&
                              a.jsxs(a.Fragment, {
                                children: [
                                  a.jsxs('p', {
                                    className: 'text-gray-500 line-through',
                                    children: ['$', Jn(n.price)],
                                  }),
                                  a.jsxs('span', {
                                    className: 'flex items-center gap-2',
                                    children: [
                                      a.jsxs('p', {
                                        className: 'text-3xl',
                                        children: [
                                          '$',
                                          Ga(n.price, n.discount),
                                        ],
                                      }),
                                      a.jsxs('p', {
                                        className: 'text-xl text-primary-600',
                                        children: [n.discount, '% OFF'],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            n.price &&
                              !n.discount &&
                              a.jsxs('p', {
                                className: 'text-3xl',
                                children: ['$', Jn(n.price)],
                              }),
                          ],
                        }),
                        a.jsx(ap, { onClick: c, children: 'COMPRAR' }),
                      ],
                    }),
                  ],
                }),
                a.jsxs('section', {
                  className:
                    'flex min-h-[30em] flex-col items-center bg-gray-100 py-10',
                  children: [
                    a.jsx('h2', {
                      className: 'text-3xl',
                      children: 'ESPECIFICACIONES',
                    }),
                    a.jsx(Sy, {
                      children: n.specs.map(
                        ({ category: x, name: v, info: y }) =>
                          a.jsx(
                            'div',
                            {
                              children: a.jsxs(ky, {
                                children: [
                                  x && a.jsx(Cy, { children: x }),
                                  a.jsx(jy, { children: v }),
                                  a.jsx(Ey, { children: y }),
                                ],
                              }),
                            },
                            v,
                          ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
      ],
    }),
  })
}
const gy = U.div`
  display: flex;
  gap: 0.5em;
`,
  vy = U.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`,
  Rc = U.p`
  color: var(--main-color-450);
  font-weight: 800;
`,
  yy = U.p``,
  xy = U.div`
  padding-top: 4em;
  display: flex;
  flex-direction: column;
  gap: 5em;
  justify-content: start;

  opacity: 0;
  animation: 400ms show forwards;
`,
  wy = U.p`
  font-size: 15px;
  text-align: start;
  max-width: 80ch;
`,
  Sy = U.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  max-width: 1200px;
  gap: 5px;
  padding: 2em;
`,
  ky = U.div`
  display: flex;
  flex-wrap: wrap;
`,
  jy = U.p`
  padding-left: 0.2em;
  margin-bottom: 5px;
  color: var(--main-color-600);
`,
  Cy = U.p`
  text-transform: uppercase;
  padding-bottom: 10px;
  font-weight: 800;

  color: var(--main-color-700);
`,
  Ey = U.p`
  padding-left: 0.8em;
`
function Ny() {
  const [e, t] = k.useState({}),
    [n, r] = k.useState(!0),
    [l, o] = k.useState(null)
  async function i() {
    try {
      const u = await (
        await fetch(`${it}/user/profile`, { credentials: 'include' })
      ).json()
      t(u)
    } catch (s) {
      o(l), console.error('Hubo un problema con la solicitud!', s)
    } finally {
      r(!1)
    }
  }
  return (
    k.useEffect(() => {
      i()
    }, []),
    { userData: e, loading: n, error: l }
  )
}
function Py() {
  const { userData: e, loading: t } = Ny(),
    [n, r] = k.useState(!1),
    [l, o] = k.useState({}),
    [i, s] = k.useState(!0)
  function u() {
    console.log('input info')
  }
  async function c() {
    try {
      s(!0)
      const v = await (
        await fetch(`${it}/user/profile`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userShipping: l }),
        })
      ).json()
      console.log(v)
    } catch (x) {
      setError(x), console.error('¡Hubo un problema con la solicitud!', x)
    } finally {
      s(!1)
    }
  }
  function d() {
    r(!1)
  }
  function p() {
    n ? (c(), r(!1)) : r(!0)
  }
  const g = [
    { name: 'nombre', label: 'Nombre', value: e.name },
    { name: 'appelido', label: 'Apellido', value: e.lastname },
    { name: 'direccion', label: 'Direccion', value: e.address },
    { name: 'provincia', label: 'Provincia', value: e.province },
    { name: 'cp', label: 'Codigo postal', value: e.cp },
    { name: 'email', label: 'Email', value: e.email },
    { name: 'calle', label: 'Calle' },
    { name: 'localidad', label: 'Localidad', value: e.localidad },
    { name: 'telefono', label: 'Telefono', value: e.phone },
    { name: 'dni', label: 'DNI', value: e.dni },
    { name: 'NCalle', label: 'Numero de calle', value: e.cp },
  ]
  return a.jsx(a.Fragment, {
    children: a.jsxs('section', {
      className: 'just-center flex flex-col items-center gap-10 py-20',
      children: [
        a.jsx('h1', {
          className: 'py10 text-center text-4xl',
          children: 'Mi Perfil',
        }),
        a.jsx('div', {
          children: a.jsx('div', {
            className: `${n ? 'pointer-events-auto' : 'pointer-events-none'} grid grid-cols-2 items-center justify-center gap-4 px-10 text-primary-700`,
            children:
              !t &&
              g.map(({ name: x, label: v, value: y }) =>
                a.jsx(
                  'input',
                  {
                    className: 'input-form',
                    type: 'text',
                    name: x,
                    placeholder: v,
                    value: y && y,
                    onChange: u,
                  },
                  v,
                ),
              ),
          }),
        }),
        a.jsxs('div', {
          className: 'just-center flex items-center gap-5',
          children: [
            a.jsx('button', {
              className:
                'w-max rounded-lg bg-primary-500 px-4 py-3 text-lg text-white hover:bg-primary-400',
              onClick: p,
              children: n ? 'Guardar cambios' : 'Editar mis datos',
            }),
            n &&
              a.jsx(a.Fragment, {
                children: a.jsx('button', {
                  onClick: d,
                  className:
                    'w-max rounded-lg bg-red-500 px-4 py-3 text-lg text-white hover:bg-red-400',
                  children: 'Cancelar cambios',
                }),
              }),
          ],
        }),
      ],
    }),
  })
}
function _y() {
  return a.jsx(a.Fragment, {
    children: a.jsx('div', {
      className: 'flex h-[calc(100vh-3.5em)] items-center justify-center',
      children: a.jsxs('section', {
        className:
          'flex w-96 flex-col items-center justify-center gap-5 rounded-lg p-10 text-center shadow-xl',
        children: [
          a.jsx('h1', {
            className: 'text-2xl',
            children: '¡Hola! Para agregar favoritos, ingresá a tu cuenta',
          }),
          a.jsx(ye, {
            className: 'button-main text-center',
            to: '/user/register',
            children: 'Crear cuenta',
          }),
          a.jsx(ye, {
            className: 'button-alt',
            to: '/user/login',
            children: 'Ingresar',
          }),
        ],
      }),
    }),
  })
}
const Ry = '/assets/aboutussanjuan-9eda9614.webp',
  Ty = '/assets/aboutusshipping-886e62d8.webp'
function Oy() {
  return a.jsx(a.Fragment, {
    children: a.jsxs(zy, {
      children: [
        a.jsx('h1', { className: 'text-4xl', children: 'Conocé E-Ride' }),
        a.jsxs('div', {
          className:
            'flex max-w-[45em] flex-col items-center space-y-2 text-start md:flex-row',
          children: [
            a.jsx('p', {
              children:
                'En el corazón de la pintoresca provincia de San Juan, Argentina, se encuentra E-ride, tu destino definitivo para explorar el emocionante mundo de la movilidad electrica. Si sos un amante de la aventura, E-ride tiene todo lo que necesitas para comenzar tu viaje.',
            }),
            a.jsx('img', {
              width: 350,
              className: 'rounded-lg object-contain',
              src: Ry,
              alt: 'Imagen de san juan',
            }),
          ],
        }),
        a.jsxs('div', {
          className: 'max-w-[45em] space-y-2 text-start',
          children: [
            a.jsx(Tc, { children: 'Calidad Inigualable' }),
            a.jsx(Iy, {
              children: a.jsx('p', {
                children:
                  'Nos enorgullece ofrecer una amplia gama de scooters de la más alta calidad. Cada monopatin que vendemos está cuidadosamente seleccionada por su durabilidad, rendimiento, lo que garantiza que obtengas el máximo valor por tu inversión.',
              }),
            }),
          ],
        }),
        a.jsxs('div', {
          className:
            'flex max-w-[45em] flex-col items-center space-y-2 text-start',
          children: [
            a.jsx(Tc, { children: 'Comodidad en Línea' }),
            a.jsx('p', {
              children:
                'Sabemos que tu tiempo es valioso. Es por eso que hemos creado una plataforma de compras en línea intuitiva y segura que te permite explorar nuestra selección, hacer pedidos y realizar pagos sin problemas desde la comodidad de tu hogar.',
            }),
            a.jsx('img', {
              width: 350,
              className: 'rounded-lg object-contain',
              src: Ty,
              alt: '',
            }),
          ],
        }),
      ],
    }),
  })
}
const Iy = U.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`,
  zy = U.div`
  height: 100%;
  width: 100%;
  text-align: center;
  padding-block: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
  flex-direction: column;
  background-color: #f5f5f5;
`,
  Tc = U.h2`
  font-weight: 800;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  width: 100%;
`
function Oc() {
  const { isAuth: e } = Sn()
  return e ? a.jsx($g, { to: '/', replace: !0 }) : a.jsx(sp, {})
}
function Ly() {
  return a.jsx(a.Fragment, {
    children: a.jsx(Qg, {
      children: a.jsx(yv, {
        children: a.jsx(Fg, {
          children: a.jsxs(Ae, {
            element: a.jsx(Fv, {}),
            children: [
              a.jsx(Ae, { index: !0, path: '/', element: a.jsx(Sv, {}) }),
              a.jsxs(Ae, {
                path: '/product',
                children: [
                  a.jsx(Ae, { path: 'scooters', element: a.jsx(Wv, {}) }),
                  a.jsx(Ae, { path: 'id/:id', element: a.jsx(my, {}) }),
                ],
              }),
              a.jsxs(Ae, {
                path: '/user',
                children: [
                  a.jsxs(Ae, {
                    element: a.jsx(Oc, {}),
                    children: [
                      a.jsx(Ae, { path: 'login', element: a.jsx(Uv, {}) }),
                      a.jsx(Ae, { path: 'register', element: a.jsx(Bv, {}) }),
                      a.jsx(Ae, { path: 'account', element: a.jsx(_y, {}) }),
                    ],
                  }),
                  a.jsxs(Ae, {
                    element: a.jsx(Oc, {}),
                    children: [
                      a.jsx(Ae, { path: 'favorites', element: a.jsx(kv, {}) }),
                      a.jsx(Ae, { path: 'profile', element: a.jsx(Py, {}) }),
                    ],
                  }),
                ],
              }),
              a.jsx(Ae, { path: '/about', element: a.jsx(Oy, {}) }),
            ],
          }),
        }),
      }),
    }),
  })
}
Ti.createRoot(document.getElementById('root')).render(
  a.jsx(yn.StrictMode, { children: a.jsx(Ly, {}) }),
)
