(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [17], {
        "+Pb6": function(t, e) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        "+qRK": function(t, e, r) {
            var n = r("4p6G"),
                o = r("undO");

            function a(e, r, u) {
                return o() ? (t.exports = a = Reflect.construct.bind(), t.exports.__esModule = !0, t.exports.default = t.exports) : (t.exports = a = function(t, e, r) {
                    var o = [null];
                    o.push.apply(o, e);
                    var a = new(Function.bind.apply(t, o));
                    return r && n(a, r.prototype), a
                }, t.exports.__esModule = !0, t.exports.default = t.exports), a.apply(null, arguments)
            }
            t.exports = a, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        "20a2": function(t, e, r) {
            t.exports = r("nOHt")
        },
        "4p6G": function(t, e) {
            function r(e, n) {
                return t.exports = r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, r(e, n)
            }
            t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        AIAV: function(t, e) {
            t.exports = function(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        Dmg9: function(t, e, r) {
            var n = r("YJ8O")();
            t.exports = n;
            try {
                regeneratorRuntime = n
            } catch (o) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
            }
        },
        EJuK: function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        HcoA: function(t, e, r) {
            "use strict";
            var n = r("kxaz");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BroadcastChannel = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nextauth.message";
                return {
                    receive: function(e) {
                        var r = function(r) {
                            var n;
                            if (r.key === t) {
                                var o = JSON.parse(null !== (n = r.newValue) && void 0 !== n ? n : "{}");
                                "session" === (null === o || void 0 === o ? void 0 : o.event) && null !== o && void 0 !== o && o.data && e(o)
                            }
                        };
                        return window.addEventListener("storage", r),
                            function() {
                                return window.removeEventListener("storage", r)
                            }
                    },
                    post: function(e) {
                        if ("undefined" !== typeof window) try {
                            localStorage.setItem(t, JSON.stringify(c(c({}, e), {}, {
                                timestamp: f()
                            })))
                        } catch (r) {}
                    }
                }
            }, e.apiBaseUrl = l, e.fetchData = function(t, e, r) {
                return s.apply(this, arguments)
            }, e.now = f;
            var o = n(r("Dmg9")),
                a = n(r("s3pi")),
                u = n(r("RUKv"));

            function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(r), !0).forEach((function(e) {
                        (0, a.default)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function s() {
                return (s = (0, u.default)(o.default.mark((function t(e, r, n) {
                    var a, u, i, c, s, f, p, d, v = arguments;
                    return o.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = v.length > 3 && void 0 !== v[3] ? v[3] : {}, u = a.ctx, i = a.req, c = void 0 === i ? null === u || void 0 === u ? void 0 : u.req : i, s = "".concat(l(r), "/").concat(e), t.prev = 2, f = null !== c && void 0 !== c && c.headers.cookie ? {
                                    headers: {
                                        cookie: c.headers.cookie
                                    }
                                } : {}, t.next = 6, fetch(s, f);
                            case 6:
                                return p = t.sent, t.next = 9, p.json();
                            case 9:
                                if (d = t.sent, p.ok) {
                                    t.next = 12;
                                    break
                                }
                                throw d;
                            case 12:
                                return t.abrupt("return", Object.keys(d).length > 0 ? d : null);
                            case 15:
                                return t.prev = 15, t.t0 = t.catch(2), n.error("CLIENT_FETCH_ERROR", {
                                    error: t.t0,
                                    url: s
                                }), t.abrupt("return", null);
                            case 19:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 15]
                    ])
                })))).apply(this, arguments)
            }

            function l(t) {
                return "undefined" === typeof window ? "".concat(t.baseUrlServer).concat(t.basePathServer) : t.basePath
            }

            function f() {
                return Math.floor(Date.now() / 1e3)
            }
        },
        NWRp: function(t, e) {
            t.exports = function(t, e) {
                var r = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, a = [],
                        u = !0,
                        i = !1;
                    try {
                        for (r = r.call(t); !(u = (n = r.next()).done) && (a.push(n.value), !e || a.length !== e); u = !0);
                    } catch (c) {
                        i = !0, o = c
                    } finally {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        O6aI: function(t, e) {
            t.exports = function(t) {
                return -1 !== Function.toString.call(t).indexOf("[native code]")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        RUKv: function(t, e) {
            function r(t, e, r, n, o, a, u) {
                try {
                    var i = t[a](u),
                        c = i.value
                } catch (s) {
                    return void r(s)
                }
                i.done ? e(c) : Promise.resolve(c).then(n, o)
            }
            t.exports = function(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(o, a) {
                        var u = t.apply(e, n);

                        function i(t) {
                            r(u, o, a, i, c, "next", t)
                        }

                        function c(t) {
                            r(u, o, a, i, c, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        TMG6: function(t, e) {
            function r(e) {
                return t.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports, r(e)
            }
            t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        VZPf: function(t, e, r) {
            "use strict";
            var n = r("kxaz");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.UnsupportedStrategy = e.UnknownError = e.OAuthCallbackError = e.MissingSecret = e.MissingAuthorize = e.MissingAdapterMethods = e.MissingAdapter = e.MissingAPIRoute = e.InvalidCallbackUrl = e.AccountNotLinkedError = void 0, e.adapterErrorHandler = function(t, e) {
                if (!t) return;
                return Object.keys(t).reduce((function(r, n) {
                    return r[n] = (0, a.default)(o.default.mark((function r() {
                        var a, u, i, c, s, l = arguments;
                        return o.default.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    for (r.prev = 0, a = l.length, u = new Array(a), i = 0; i < a; i++) u[i] = l[i];
                                    return e.debug("adapter_".concat(n), {
                                        args: u
                                    }), c = t[n], r.next = 6, c.apply(void 0, u);
                                case 6:
                                    return r.abrupt("return", r.sent);
                                case 9:
                                    throw r.prev = 9, r.t0 = r.catch(0), e.error("adapter_error_".concat(n), r.t0), (s = new v(r.t0)).name = "".concat(S(n), "Error"), s;
                                case 15:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [0, 9]
                        ])
                    }))), r
                }), {})
            }, e.capitalize = S, e.eventsErrorHandler = function(t, e) {
                return Object.keys(t).reduce((function(r, n) {
                    return r[n] = (0, a.default)(o.default.mark((function r() {
                        var a, u = arguments;
                        return o.default.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, a = t[n], r.next = 4, a.apply(void 0, u);
                                case 4:
                                    return r.abrupt("return", r.sent);
                                case 7:
                                    r.prev = 7, r.t0 = r.catch(0), e.error("".concat(E(n), "_EVENT_ERROR"), r.t0);
                                case 10:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [0, 7]
                        ])
                    }))), r
                }), {})
            }, e.upperSnake = E;
            var o = n(r("Dmg9")),
                a = n(r("RUKv")),
                u = n(r("+Pb6")),
                i = n(r("s3pi")),
                c = n(r("zUFN")),
                s = n(r("pb+s")),
                l = n(r("rzMM")),
                f = n(r("kSkR")),
                p = n(r("TMG6"));

            function d(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = (0, p.default)(t);
                    if (e) {
                        var o = (0, p.default)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, f.default)(this, r)
                }
            }
            var v = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r(t) {
                    var n, o;
                    return (0, c.default)(this, r), (o = e.call(this, null !== (n = null === t || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : t)).name = "UnknownError", o.code = t.code, t instanceof Error && (o.stack = t.stack), o
                }
                return (0, s.default)(r, [{
                    key: "toJSON",
                    value: function() {
                        return {
                            name: this.name,
                            message: this.message,
                            stack: this.stack
                        }
                    }
                }]), r
            }((0, n(r("j3uU")).default)(Error));
            e.UnknownError = v;
            var h = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "OAuthCallbackError"), t
                }
                return (0, s.default)(r)
            }(v);
            e.OAuthCallbackError = h;
            var y = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "AccountNotLinkedError"), t
                }
                return (0, s.default)(r)
            }(v);
            e.AccountNotLinkedError = y;
            var g = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "MissingAPIRouteError"), (0, i.default)((0, u.default)(t), "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR"), t
                }
                return (0, s.default)(r)
            }(v);
            e.MissingAPIRoute = g;
            var b = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "MissingSecretError"), (0, i.default)((0, u.default)(t), "code", "NO_SECRET"), t
                }
                return (0, s.default)(r)
            }(v);
            e.MissingSecret = b;
            var x = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "MissingAuthorizeError"), (0, i.default)((0, u.default)(t), "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR"), t
                }
                return (0, s.default)(r)
            }(v);
            e.MissingAuthorize = x;
            var w = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "MissingAdapterError"), (0, i.default)((0, u.default)(t), "code", "EMAIL_REQUIRES_ADAPTER_ERROR"), t
                }
                return (0, s.default)(r)
            }(v);
            e.MissingAdapter = w;
            var _ = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "MissingAdapterMethodsError"), (0, i.default)((0, u.default)(t), "code", "MISSING_ADAPTER_METHODS_ERROR"), t
                }
                return (0, s.default)(r)
            }(v);
            e.MissingAdapterMethods = _;
            var m = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "UnsupportedStrategyError"), (0, i.default)((0, u.default)(t), "code", "CALLBACK_CREDENTIALS_JWT_ERROR"), t
                }
                return (0, s.default)(r)
            }(v);
            e.UnsupportedStrategy = m;
            var O = function(t) {
                (0, l.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, c.default)(this, r);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)), (0, i.default)((0, u.default)(t), "name", "InvalidCallbackUrl"), (0, i.default)((0, u.default)(t), "code", "INVALID_CALLBACK_URL_ERROR"), t
                }
                return (0, s.default)(r)
            }(v);

            function E(t) {
                return t.replace(/([A-Z])/g, "_$1").toUpperCase()
            }

            function S(t) {
                return "".concat(t[0].toUpperCase()).concat(t.slice(1))
            }
            e.InvalidCallbackUrl = O
        },
        YJ8O: function(t, e, r) {
            var n = r("cJsI").default;

            function o() {
                "use strict";
                t.exports = o = function() {
                    return e
                }, t.exports.__esModule = !0, t.exports.default = t.exports;
                var e = {},
                    r = Object.prototype,
                    a = r.hasOwnProperty,
                    u = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    c = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    l = i.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (M) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function p(t, e, r, n) {
                    var o = e && e.prototype instanceof h ? e : h,
                        a = Object.create(o.prototype),
                        i = new P(n || []);
                    return u(a, "_invoke", {
                        value: E(t, r, i)
                    }), a
                }

                function d(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (M) {
                        return {
                            type: "throw",
                            arg: M
                        }
                    }
                }
                e.wrap = p;
                var v = {};

                function h() {}

                function y() {}

                function g() {}
                var b = {};
                f(b, c, (function() {
                    return this
                }));
                var x = Object.getPrototypeOf,
                    w = x && x(x(R([])));
                w && w !== r && a.call(w, c) && (b = w);
                var _ = g.prototype = h.prototype = Object.create(b);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function O(t, e) {
                    function r(o, u, i, c) {
                        var s = d(t[o], t, u);
                        if ("throw" !== s.type) {
                            var l = s.arg,
                                f = l.value;
                            return f && "object" == n(f) && a.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                r("next", t, i, c)
                            }), (function(t) {
                                r("throw", t, i, c)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, i(l)
                            }), (function(t) {
                                return r("throw", t, i, c)
                            }))
                        }
                        c(s.arg)
                    }
                    var o;
                    u(this, "_invoke", {
                        value: function(t, n) {
                            function a() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function E(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw a;
                            return L()
                        }
                        for (r.method = o, r.arg = a;;) {
                            var u = r.delegate;
                            if (u) {
                                var i = S(u, r);
                                if (i) {
                                    if (i === v) continue;
                                    return i
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var c = d(t, e, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? "completed" : "suspendedYield", c.arg === v) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                        }
                    }
                }

                function S(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, S(t, e), "throw" === e.method)) return v;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return v
                    }
                    var n = d(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, v;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, v) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
                }

                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function P(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(k, this), this.reset(!0)
                }

                function R(t) {
                    if (t) {
                        var e = t[c];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                n = function e() {
                                    for (; ++r < t.length;)
                                        if (a.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: L
                    }
                }

                function L() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = g, u(_, "constructor", {
                    value: g,
                    configurable: !0
                }), u(g, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(g, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, f(t, l, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(O.prototype), f(O.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = O, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var u = new O(p(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? u : u.next().then((function(t) {
                        return t.done ? t.value : u.next()
                    }))
                }, m(_), f(_, l, "Generator"), f(_, c, (function() {
                    return this
                })), f(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = R, P.prototype = {
                    constructor: P,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
                            for (var e in this) "t" === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(r, n) {
                            return u.type = "throw", u.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                u = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    c = a.call(o, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var u = o ? o.completion : {};
                        return u.type = t, u.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(u)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: R(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), v
                    }
                }, e
            }
            t.exports = o, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        cJsI: function(t, e) {
            function r(e) {
                return t.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, r(e)
            }
            t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        dll0: function(t, e, r) {
            var n = r("AIAV");
            t.exports = function(t, e) {
                if (t) {
                    if ("string" === typeof t) return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        "eu/r": function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e;
                const r = new URL("http://localhost:3000/api/auth");
                t && !t.startsWith("http") && (t = `https://${t}`);
                const n = new URL(null !== (e = t) && void 0 !== e ? e : r),
                    o = ("/" === n.pathname ? r.pathname : n.pathname).replace(/\/$/, ""),
                    a = `${n.origin}${o}`;
                return {
                    origin: n.origin,
                    host: n.host,
                    path: o,
                    base: a,
                    toString: () => a
                }
            }
        },
        fqCP: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        hQB0: function(t, e, r) {
            "use strict";
            (function(t) {
                var n = r("kxaz"),
                    o = r("cJsI");
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var a = {
                    SessionContext: !0,
                    useSession: !0,
                    getSession: !0,
                    getCsrfToken: !0,
                    getProviders: !0,
                    signIn: !0,
                    signOut: !0,
                    SessionProvider: !0
                };
                e.SessionContext = void 0, e.SessionProvider = function(t) {
                    var e = t.children,
                        r = t.basePath,
                        n = t.refetchInterval,
                        o = t.refetchWhenOffline;
                    r && (E.basePath = r);
                    var a = void 0 !== t.session;
                    E._lastSync = a ? (0, g.now)() : 0;
                    var u = v.useState((function() {
                            return a && (E._session = t.session), t.session
                        })),
                        i = (0, d.default)(u, 2),
                        c = i[0],
                        s = i[1],
                        f = v.useState(!a),
                        h = (0, d.default)(f, 2),
                        y = h[0],
                        x = h[1];
                    v.useEffect((function() {
                        return E._getSession = (0, p.default)(l.default.mark((function t() {
                                var e, r, n, o = arguments;
                                return l.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = o.length > 0 && void 0 !== o[0] ? o[0] : {}, r = e.event, t.prev = 1, !(n = "storage" === r) && void 0 !== E._session) {
                                                t.next = 10;
                                                break
                                            }
                                            return E._lastSync = (0, g.now)(), t.next = 7, P({
                                                broadcast: !n
                                            });
                                        case 7:
                                            return E._session = t.sent, s(E._session), t.abrupt("return");
                                        case 10:
                                            if (r && null !== E._session && !((0, g.now)() < E._lastSync)) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 12:
                                            return E._lastSync = (0, g.now)(), t.next = 15, P();
                                        case 15:
                                            E._session = t.sent, s(E._session), t.next = 22;
                                            break;
                                        case 19:
                                            t.prev = 19, t.t0 = t.catch(1), k.error("CLIENT_SESSION_ERROR", t.t0);
                                        case 22:
                                            return t.prev = 22, x(!1), t.finish(22);
                                        case 25:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [1, 19, 22, 25]
                                ])
                            }))), E._getSession(),
                            function() {
                                E._lastSync = 0, E._session = void 0, E._getSession = function() {}
                            }
                    }), []), v.useEffect((function() {
                        var t = S.receive((function() {
                            return E._getSession({
                                event: "storage"
                            })
                        }));
                        return function() {
                            return t()
                        }
                    }), []), v.useEffect((function() {
                        var e = t.refetchOnWindowFocus,
                            r = void 0 === e || e,
                            n = function() {
                                r && "visible" === document.visibilityState && E._getSession({
                                    event: "visibilitychange"
                                })
                            };
                        return document.addEventListener("visibilitychange", n, !1),
                            function() {
                                return document.removeEventListener("visibilitychange", n, !1)
                            }
                    }), [t.refetchOnWindowFocus]);
                    var w = function() {
                            var t = v.useState("undefined" !== typeof navigator && navigator.onLine),
                                e = (0, d.default)(t, 2),
                                r = e[0],
                                n = e[1],
                                o = function() {
                                    return n(!0)
                                },
                                a = function() {
                                    return n(!1)
                                };
                            return v.useEffect((function() {
                                return window.addEventListener("online", o), window.addEventListener("offline", a),
                                    function() {
                                        window.removeEventListener("online", o), window.removeEventListener("offline", a)
                                    }
                            }), []), r
                        }(),
                        _ = !1 !== o || w;
                    v.useEffect((function() {
                        if (n && _) {
                            var t = setInterval((function() {
                                E._session && E._getSession({
                                    event: "poll"
                                })
                            }), 1e3 * n);
                            return function() {
                                return clearInterval(t)
                            }
                        }
                    }), [n, _]);
                    var m = v.useMemo((function() {
                        return {
                            data: c,
                            status: y ? "loading" : c ? "authenticated" : "unauthenticated"
                        }
                    }), [c, y]);
                    return (0, b.jsx)(j.Provider, {
                        value: m,
                        children: e
                    })
                }, e.getCsrfToken = L, e.getProviders = A, e.getSession = P, e.signIn = function(t, e, r) {
                    return T.apply(this, arguments)
                }, e.signOut = function(t) {
                    return N.apply(this, arguments)
                }, e.useSession = function(t) {
                    var e = v.useContext(j);
                    0;
                    var r = null !== t && void 0 !== t ? t : {},
                        n = r.required,
                        o = r.onUnauthenticated,
                        a = n && "unauthenticated" === e.status;
                    if (v.useEffect((function() {
                            if (a) {
                                var t = "/api/auth/signin?".concat(new URLSearchParams({
                                    error: "SessionRequired",
                                    callbackUrl: window.location.href
                                }));
                                o ? o() : window.location.href = t
                            }
                        }), [a, o]), a) return {
                        data: e.data,
                        status: "loading"
                    };
                    return e
                };
                var u, i, c, s, l = n(r("Dmg9")),
                    f = n(r("s3pi")),
                    p = n(r("RUKv")),
                    d = n(r("krhN")),
                    v = _(r("q1tI")),
                    h = _(r("vVlp")),
                    y = n(r("eu/r")),
                    g = r("HcoA"),
                    b = r("nKUr"),
                    x = r("fqCP");

                function w(t) {
                    if ("function" !== typeof WeakMap) return null;
                    var e = new WeakMap,
                        r = new WeakMap;
                    return (w = function(t) {
                        return t ? r : e
                    })(t)
                }

                function _(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== o(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var r = w(e);
                    if (r && r.has(t)) return r.get(t);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in t)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
                            var i = a ? Object.getOwnPropertyDescriptor(t, u) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = t[u]
                        }
                    return n.default = t, r && r.set(t, n), n
                }

                function m(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function O(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? m(Object(r), !0).forEach((function(e) {
                            (0, f.default)(t, e, r[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }
                Object.keys(x).forEach((function(t) {
                    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(a, t) || t in e && e[t] === x[t] || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function() {
                            return x[t]
                        }
                    }))
                }));
                var E = {
                        baseUrl: (0, y.default)(null !== (u = t.env.NEXTAUTH_URL) && void 0 !== u ? u : t.env.VERCEL_URL).origin,
                        basePath: (0, y.default)(t.env.NEXTAUTH_URL).path,
                        baseUrlServer: (0, y.default)(null !== (i = null !== (c = t.env.NEXTAUTH_URL_INTERNAL) && void 0 !== c ? c : t.env.NEXTAUTH_URL) && void 0 !== i ? i : t.env.VERCEL_URL).origin,
                        basePathServer: (0, y.default)(null !== (s = t.env.NEXTAUTH_URL_INTERNAL) && void 0 !== s ? s : t.env.NEXTAUTH_URL).path,
                        _lastSync: 0,
                        _session: void 0,
                        _getSession: function() {}
                    },
                    S = (0, g.BroadcastChannel)(),
                    k = (0, h.proxyLogger)(h.default, E.basePath);
                var j = v.createContext(void 0);

                function P(t) {
                    return R.apply(this, arguments)
                }

                function R() {
                    return (R = (0, p.default)(l.default.mark((function t(e) {
                        var r, n;
                        return l.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, g.fetchData)("session", E, k, e);
                                case 2:
                                    return n = t.sent, (null === (r = null === e || void 0 === e ? void 0 : e.broadcast) || void 0 === r || r) && S.post({
                                        event: "session",
                                        data: {
                                            trigger: "getSession"
                                        }
                                    }), t.abrupt("return", n);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function L(t) {
                    return M.apply(this, arguments)
                }

                function M() {
                    return (M = (0, p.default)(l.default.mark((function t(e) {
                        var r;
                        return l.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, g.fetchData)("csrf", E, k, e);
                                case 2:
                                    return r = t.sent, t.abrupt("return", null === r || void 0 === r ? void 0 : r.csrfToken);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function A() {
                    return U.apply(this, arguments)
                }

                function U() {
                    return (U = (0, p.default)(l.default.mark((function t() {
                        return l.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, g.fetchData)("providers", E, k);
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function T() {
                    return (T = (0, p.default)(l.default.mark((function t(e, r, n) {
                        var o, a, u, i, c, s, f, p, d, v, h, y, b, x, w, _, m;
                        return l.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return a = (o = null !== r && void 0 !== r ? r : {}).callbackUrl, u = void 0 === a ? window.location.href : a, i = o.redirect, c = void 0 === i || i, s = (0, g.apiBaseUrl)(E), t.next = 4, A();
                                case 4:
                                    if (f = t.sent) {
                                        t.next = 8;
                                        break
                                    }
                                    return window.location.href = "".concat(s, "/error"), t.abrupt("return");
                                case 8:
                                    if (e && e in f) {
                                        t.next = 11;
                                        break
                                    }
                                    return window.location.href = "".concat(s, "/signin?").concat(new URLSearchParams({
                                        callbackUrl: u
                                    })), t.abrupt("return");
                                case 11:
                                    return p = "credentials" === f[e].type, d = "email" === f[e].type, v = p || d, h = "".concat(s, "/").concat(p ? "callback" : "signin", "/").concat(e), y = "".concat(h, "?").concat(new URLSearchParams(n)), t.t0 = fetch, t.t1 = y, t.t2 = {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    }, t.t3 = URLSearchParams, t.t4 = O, t.t5 = O({}, r), t.t6 = {}, t.next = 25, L();
                                case 25:
                                    return t.t7 = t.sent, t.t8 = u, t.t9 = {
                                        csrfToken: t.t7,
                                        callbackUrl: t.t8,
                                        json: !0
                                    }, t.t10 = (0, t.t4)(t.t5, t.t6, t.t9), t.t11 = new t.t3(t.t10), t.t12 = {
                                        method: "post",
                                        headers: t.t2,
                                        body: t.t11
                                    }, t.next = 33, (0, t.t0)(t.t1, t.t12);
                                case 33:
                                    return b = t.sent, t.next = 36, b.json();
                                case 36:
                                    if (x = t.sent, !c && v) {
                                        t.next = 42;
                                        break
                                    }
                                    return _ = null !== (w = x.url) && void 0 !== w ? w : u, window.location.href = _, _.includes("#") && window.location.reload(), t.abrupt("return");
                                case 42:
                                    if (m = new URL(x.url).searchParams.get("error"), !b.ok) {
                                        t.next = 46;
                                        break
                                    }
                                    return t.next = 46, E._getSession({
                                        event: "storage"
                                    });
                                case 46:
                                    return t.abrupt("return", {
                                        error: m,
                                        status: b.status,
                                        ok: b.ok,
                                        url: m ? null : x.url
                                    });
                                case 47:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function N() {
                    return (N = (0, p.default)(l.default.mark((function t(e) {
                        var r, n, o, a, u, i, c, s, f;
                        return l.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = (null !== e && void 0 !== e ? e : {}).callbackUrl, o = void 0 === n ? window.location.href : n, a = (0, g.apiBaseUrl)(E), t.t0 = {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    }, t.t1 = URLSearchParams, t.next = 6, L();
                                case 6:
                                    return t.t2 = t.sent, t.t3 = o, t.t4 = {
                                        csrfToken: t.t2,
                                        callbackUrl: t.t3,
                                        json: !0
                                    }, t.t5 = new t.t1(t.t4), u = {
                                        method: "post",
                                        headers: t.t0,
                                        body: t.t5
                                    }, t.next = 13, fetch("".concat(a, "/signout"), u);
                                case 13:
                                    return i = t.sent, t.next = 16, i.json();
                                case 16:
                                    if (c = t.sent, S.post({
                                            event: "session",
                                            data: {
                                                trigger: "signout"
                                            }
                                        }), null !== (r = null === e || void 0 === e ? void 0 : e.redirect) && void 0 !== r && !r) {
                                        t.next = 23;
                                        break
                                    }
                                    return f = null !== (s = c.url) && void 0 !== s ? s : o, window.location.href = f, f.includes("#") && window.location.reload(), t.abrupt("return");
                                case 23:
                                    return t.next = 25, E._getSession({
                                        event: "storage"
                                    });
                                case 25:
                                    return t.abrupt("return", c);
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                e.SessionContext = j
            }).call(this, r("8oxB"))
        },
        j3uU: function(t, e, r) {
            var n = r("TMG6"),
                o = r("4p6G"),
                a = r("O6aI"),
                u = r("+qRK");

            function i(e) {
                var r = "function" === typeof Map ? new Map : void 0;
                return t.exports = i = function(t) {
                    if (null === t || !a(t)) return t;
                    if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof r) {
                        if (r.has(t)) return r.get(t);
                        r.set(t, e)
                    }

                    function e() {
                        return u(t, arguments, n(this).constructor)
                    }
                    return e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), o(e, t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports, i(e)
            }
            t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        kSkR: function(t, e, r) {
            var n = r("cJsI").default,
                o = r("+Pb6");
            t.exports = function(t, e) {
                if (e && ("object" === n(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return o(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        krhN: function(t, e, r) {
            var n = r("rME1"),
                o = r("NWRp"),
                a = r("dll0"),
                u = r("EJuK");
            t.exports = function(t, e) {
                return n(t) || o(t, e) || a(t, e) || u()
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        kxaz: function(t, e) {
            t.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        "pb+s": function(t, e) {
            function r(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            t.exports = function(t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        rME1: function(t, e) {
            t.exports = function(t) {
                if (Array.isArray(t)) return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        rzMM: function(t, e, r) {
            var n = r("4p6G");
            t.exports = function(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && n(t, e)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        s3pi: function(t, e) {
            t.exports = function(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        undO: function(t, e) {
            t.exports = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        vVlp: function(t, e, r) {
            "use strict";
            var n = r("kxaz");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, e.proxyLogger = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                try {
                    if ("undefined" === typeof window) return t;
                    var r = {},
                        n = function(t) {
                            r[t] = function(r, n) {
                                s[t](r, n), "error" === t && (n = c(n)), n.client = !0;
                                var o = "".concat(e, "/_log"),
                                    a = new URLSearchParams(i({
                                        level: t,
                                        code: r
                                    }, n));
                                return navigator.sendBeacon ? navigator.sendBeacon(o, a) : fetch(o, {
                                    method: "POST",
                                    body: a,
                                    keepalive: !0
                                })
                            }
                        };
                    for (var o in t) n(o);
                    return r
                } catch (a) {
                    return s
                }
            }, e.setLogger = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 ? arguments[1] : void 0;
                e || (s.debug = function() {});
                t.error && (s.error = t.error);
                t.warn && (s.warn = t.warn);
                t.debug && (s.debug = t.debug)
            };
            var o = n(r("s3pi")),
                a = r("VZPf");

            function u(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach((function(e) {
                        (0, o.default)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function c(t) {
                if (t instanceof Error && !(t instanceof a.UnknownError)) return {
                    message: t.message,
                    stack: t.stack,
                    name: t.name
                };
                var e, r;
                null !== (r = t) && void 0 !== r && r.error && (t.error = c(t.error), t.message = null !== (e = t.message) && void 0 !== e ? e : t.error.message);
                return t
            }
            var s = {
                error: function(t, e) {
                    e = c(e), console.error("[next-auth][error][".concat(t, "]"), "\nhttps://next-auth.js.org/errors#".concat(t.toLowerCase()), e.message, e)
                },
                warn: function(t) {
                    console.warn("[next-auth][warn][".concat(t, "]"), "\nhttps://next-auth.js.org/warnings#".concat(t.toLowerCase()))
                },
                debug: function(t, e) {
                    console.log("[next-auth][debug][".concat(t, "]"), e)
                }
            };
            var l = s;
            e.default = l
        },
        zUFN: function(t, e) {
            t.exports = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }
    }
]);