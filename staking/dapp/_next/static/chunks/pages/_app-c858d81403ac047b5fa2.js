_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [24], {
        13: function(e, t, n) {
            n("GcxT"), e.exports = n("nOHt")
        },
        "3niX": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = a, t.flush = function() {
                var e = i.cssRules();
                return i.flush(), e
            };
            var r, o = n("q1tI");
            var i = new(((r = n("SevZ")) && r.__esModule ? r : {
                default: r
            }).default);

            function a(e) {
                return "undefined" === typeof window ? (i.add(e), null) : ((0, o.useLayoutEffect)((function() {
                    return i.add(e),
                        function() {
                            i.remove(e)
                        }
                }), [e.id, String(e.dynamic)]), null)
            }
            a.dynamic = function(e) {
                return e.map((function(e) {
                    var t = e[0],
                        n = e[1];
                    return i.computeId(t, n)
                })).join(" ")
            }
        },
        "5fIB": function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        "9kyW": function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                return t >>> 0
            }
        },
        BdAR: function(e, t, n) {
            "use strict";
            var r = n("mPvQ"),
                o = n("/GRZ"),
                i = n("i2R6"),
                a = (n("qXWd"), n("48fX")),
                s = n("tCBg"),
                c = n("T0f4");

            function u(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n("q1tI"),
                p = function(e) {
                    a(n, e);
                    var t = u(n);

                    function n(e) {
                        var i;
                        return o(this, n), (i = t.call(this, e)).emitChange = function() {
                            i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props))
                        }, i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances, i
                    }
                    return i(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(l.Component);
            t.default = p
        },
        CM2u: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeadManagerContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.HeadManagerContext = o
        },
        Ckzw: function(e, t, n) {},
        G7As: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var r = n("q1tI"),
                o = n("i8i4"),
                i = !0,
                a = !1,
                s = null,
                c = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function u(e) {
                e.metaKey || e.altKey || e.ctrlKey || (i = !0)
            }

            function l() {
                i = !1
            }

            function p() {
                "hidden" === this.visibilityState && a && (i = !0)
            }

            function d(e) {
                var t = e.target;
                try {
                    return t.matches(":focus-visible")
                } catch (n) {}
                return i || function(e) {
                    var t = e.type,
                        n = e.tagName;
                    return !("INPUT" !== n || !c[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable
                }(t)
            }

            function f() {
                a = !0, window.clearTimeout(s), s = window.setTimeout((function() {
                    a = !1
                }), 100)
            }

            function h() {
                return {
                    isFocusVisible: d,
                    onBlurVisible: f,
                    ref: r.useCallback((function(e) {
                        var t, n = o.findDOMNode(e);
                        null != n && ((t = n.ownerDocument).addEventListener("keydown", u, !0), t.addEventListener("mousedown", l, !0), t.addEventListener("pointerdown", l, !0), t.addEventListener("touchstart", l, !0), t.addEventListener("visibilitychange", p, !0))
                    }), [])
                }
            }
        },
        GIek: function(e, t, n) {
            "use strict";

            function r(e, t) {
                "function" === typeof e ? e(t) : e && (e.current = t)
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        GcxT: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("IlR1")
            }])
        },
        IlR1: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("cpVT"),
                o = n("nKUr"),
                i = n("xvhg"),
                a = n("q1tI"),
                s = n.n(a),
                c = n("g4pe"),
                u = n.n(c),
                l = (n("YFqc"), n("3LWl")),
                p = (n("17x9"), n("OKji")),
                d = n("aXM8"),
                f = n("hfi/");
            var h = function(e) {
                    var t = e.children,
                        n = e.theme,
                        r = Object(d.a)(),
                        o = s.a.useMemo((function() {
                            var e = null === r ? n : function(e, t) {
                                return "function" === typeof t ? t(e) : Object(l.a)({}, e, t)
                            }(r, n);
                            return null != e && (e[f.a] = null !== r), e
                        }), [n, r]);
                    return s.a.createElement(p.a.Provider, {
                        value: o
                    }, t)
                },
                m = n("i0m8"),
                y = n("H2TA"),
                b = {
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    boxSizing: "border-box"
                },
                v = function(e) {
                    return Object(m.a)({
                        color: e.palette.text.primary
                    }, e.typography.body2, {
                        backgroundColor: e.palette.background.default,
                        "@media print": {
                            backgroundColor: e.palette.common.white
                        }
                    })
                };
            var g = Object(y.a)((function(e) {
                    return {
                        "@global": {
                            html: b,
                            "*, *::before, *::after": {
                                boxSizing: "inherit"
                            },
                            "strong, b": {
                                fontWeight: e.typography.fontWeightBold
                            },
                            body: Object(m.a)({
                                margin: 0
                            }, v(e), {
                                "&::backdrop": {
                                    backgroundColor: e.palette.background.default
                                }
                            })
                        }
                    }
                }), {
                    name: "MuiCssBaseline"
                })((function(e) {
                    var t = e.children,
                        n = void 0 === t ? null : t;
                    return e.classes, a.createElement(a.Fragment, null, n)
                })),
                O = n("hQB0"),
                w = {
                    50: "#fff8e1",
                    100: "#ffecb3",
                    200: "#ffe082",
                    300: "#ffd54f",
                    400: "#ffca28",
                    500: "#ffc107",
                    600: "#ffb300",
                    700: "#ffa000",
                    800: "#ff8f00",
                    900: "#ff6f00",
                    A100: "#ffe57f",
                    A200: "#ffd740",
                    A400: "#ffc400",
                    A700: "#ffab00"
                },
                j = n("dl/7"),
                _ = n("LXXt"),
                S = n("viY9"),
                x = n("TrhM"),
                C = n("KpFA");

            function P(e) {
                return String(parseFloat(e)).length === String(e).length
            }

            function I(e) {
                return parseFloat(e)
            }

            function k(e) {
                return function(t, n) {
                    var r = String(t).match(/[\d.\-+]*\s*(.*)/)[1] || "";
                    if (r === n) return t;
                    var o = I(t);
                    if ("px" !== r)
                        if ("em" === r) o = I(t) * I(e);
                        else if ("rem" === r) return o = I(t) * I(e), t;
                    var i = o;
                    if ("px" !== n)
                        if ("em" === n) i = o / I(e);
                        else {
                            if ("rem" !== n) return t;
                            i = o / I(e)
                        }
                    return parseFloat(i.toFixed(5)) + n
                }
            }

            function E(e) {
                var t = e.size,
                    n = e.grid,
                    r = t - t % n,
                    o = r + n;
                return t - r < o - t ? r : o
            }

            function A(e) {
                var t = e.lineHeight;
                return e.pixels / (t * e.htmlFontSize)
            }

            function F(e) {
                var t = e.cssProperty,
                    n = e.min,
                    r = e.max,
                    o = e.unit,
                    i = void 0 === o ? "rem" : o,
                    a = e.breakpoints,
                    s = void 0 === a ? [600, 960, 1280] : a,
                    c = e.transform,
                    u = void 0 === c ? null : c,
                    l = Object(C.a)({}, t, "".concat(n).concat(i)),
                    p = (r - n) / s[s.length - 1];
                return s.forEach((function(e) {
                    var r = n + p * e;
                    null !== u && (r = u(r)), l["@media (min-width:".concat(e, "px)")] = Object(C.a)({}, t, "".concat(Math.round(1e4 * r) / 1e4).concat(i))
                })), l
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.breakpoints,
                    r = void 0 === n ? ["sm", "md", "lg"] : n,
                    o = t.disableAlign,
                    i = void 0 !== o && o,
                    a = t.factor,
                    s = void 0 === a ? 2 : a,
                    c = t.variants,
                    u = void 0 === c ? ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"] : c,
                    l = Object(m.a)({}, e);
                l.typography = Object(m.a)({}, l.typography);
                var p = l.typography,
                    d = k(p.htmlFontSize),
                    f = r.map((function(e) {
                        return l.breakpoints.values[e]
                    }));
                return u.forEach((function(e) {
                    var t = p[e],
                        n = parseFloat(d(t.fontSize, "rem"));
                    if (!(n <= 1)) {
                        var r = n,
                            o = 1 + (r - 1) / s,
                            a = t.lineHeight;
                        if (!P(a) && !i) throw new Error(Object(x.a)(6));
                        P(a) || (a = parseFloat(d(a, "rem")) / parseFloat(n));
                        var c = null;
                        i || (c = function(e) {
                            return E({
                                size: e,
                                grid: A({
                                    pixels: 4,
                                    lineHeight: a,
                                    htmlFontSize: p.htmlFontSize
                                })
                            })
                        }), p[e] = Object(m.a)({}, t, F({
                            cssProperty: "fontSize",
                            min: o,
                            max: r,
                            unit: "rem",
                            breakpoints: f,
                            transform: c
                        }))
                    }
                })), l
            }

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var D = {
                    fontFamily: ["FuturaPT", "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(",")
                },
                T = {
                    fontFamily: ["Metropolis", "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
                    letterSpacing: "0.015rem"
                },
                B = Object(S.a)({
                    type: "light",
                    palette: {
                        primary: {
                            main: "#FFF"
                        },
                        secondary: {
                            main: w[500],
                            light: "#feefc3"
                        },
                        error: {
                            main: j.a.A400
                        },
                        background: {
                            default: "white",
                            highlight: "#F1F3F4"
                        }
                    },
                    typography: M(M({}, D), {}, {
                        overline: {
                            fontWeight: 500,
                            fontSize: "0.7rem"
                        }
                    }),
                    shape: {
                        borderRadius: "0.5rem"
                    },
                    zIndex: {
                        appBar: 1200,
                        drawer: 1100
                    },
                    mixins: {
                        drawer: {
                            minWidth: 280
                        }
                    },
                    overrides: {
                        MuiListItemText: {
                            primary: M(M({}, T), {}, {
                                fontWeight: 500,
                                fontSize: "0.87rem"
                            })
                        }
                    },
                    custom: {
                        fontFamily: {
                            FuturaPT: D,
                            metropolis: T
                        },
                        palette: {
                            iconColor: "#5f6368",
                            itemBorderColor: "#DDDDDD",
                            iconHighlight: _.a[900],
                            notesCheckbox: _.a[700],
                            profilePopColor: "#FFF",
                            noteBackground: {
                                default: "#0000",
                                red: "#F28B82",
                                orange: "#FBBC04",
                                yellow: "#FFF475",
                                green: "#CCFF90",
                                cyan: "#A7FFEB",
                                lightblue: "#CBF0F8",
                                darkblue: "#AECBFA",
                                purple: "#D7AEFB",
                                pink: "#FDCFE8",
                                brown: "#E6C9A8",
                                grey: "#E8EAED"
                            },
                            noteColorCheck: "#0007",
                            labelBackground: "#0002"
                        }
                    }
                }),
                z = Object(S.a)({
                    type: "dark",
                    palette: {
                        primary: {
                            main: "#02002f"
                        },
                        secondary: {
                            main: w[500],
                            light: "#41331C"
                        },
                        error: {
                            main: j.a.A400
                        },
                        background: {
                            default: "black",
                            highlight: "#535456"
                        },
                        text: {
                            primary: "#FFFFFF",
                            secondary: "#FFFFFFDE"
                        }
                    },
                    typography: M(M({}, D), {}, {
                        overline: {
                            fontWeight: 500,
                            fontSize: "0.7rem"
                        }
                    }),
                    shape: {
                        borderRadius: "0.5rem"
                    },
                    zIndex: {
                        appBar: 1200,
                        drawer: 1100
                    },
                    mixins: {
                        drawer: {
                            minWidth: 280
                        }
                    },
                    overrides: {
                        MuiCssBaseline: {
                            "@global": {
                                body: {
                                    backgroundColor: "black"
                                }
                            }
                        },
                        MuiListItemText: {
                            primary: M(M({}, T), {}, {
                                fontWeight: 500,
                                fontSize: "0.87rem"
                            })
                        }
                    },
                    custom: {
                        fontFamily: {
                            FuturaPT: D,
                            metropolis: T
                        },
                        palette: {
                            iconColor: "#949596",
                            itemBorderColor: "#5F6368",
                            iconHighlight: "#888A8B",
                            notesCheckbox: "#5F6368",
                            profilePopColor: "#2D2E30",
                            noteBackground: {
                                default: "#0000",
                                red: "#5C2B29",
                                orange: "#614A19",
                                yellow: "#635D18",
                                green: "#345920",
                                cyan: "#16504B",
                                lightblue: "#2D555E",
                                darkblue: "#1E3A5F",
                                purple: "#42275E",
                                pink: "#5B2245",
                                brown: "#442F19",
                                grey: "#3C3F43"
                            },
                            noteColorCheck: "#FFF7",
                            labelBackground: "#0002"
                        }
                    }
                }),
                q = (R(B), R(z)),
                L = n("uJQa");

            function H(e, t) {
                void 0 === t && (t = {});
                var n = function(e) {
                    if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
                    return e
                }(e);
                if (function(e, t) {
                        return "undefined" === typeof t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]), !t
                    }(n, t.doNotParse)) try {
                    return JSON.parse(n)
                } catch (r) {}
                return e
            }
            var W = function() {
                    return (W = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                U = function() {
                    function e(e, t) {
                        var n = this;
                        this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = function(e, t) {
                            return "string" === typeof e ? L.parse(e, t) : "object" === typeof e && null !== e ? e : {}
                        }(e, t), new Promise((function() {
                            n.HAS_DOCUMENT_COOKIE = "object" === typeof document && "string" === typeof document.cookie
                        })).catch((function() {}))
                    }
                    return e.prototype._updateBrowserValues = function(e) {
                        this.HAS_DOCUMENT_COOKIE && (this.cookies = L.parse(document.cookie, e))
                    }, e.prototype._emitChange = function(e) {
                        for (var t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e)
                    }, e.prototype.get = function(e, t, n) {
                        return void 0 === t && (t = {}), this._updateBrowserValues(n), H(this.cookies[e], t)
                    }, e.prototype.getAll = function(e, t) {
                        void 0 === e && (e = {}), this._updateBrowserValues(t);
                        var n = {};
                        for (var r in this.cookies) n[r] = H(this.cookies[r], e);
                        return n
                    }, e.prototype.set = function(e, t, n) {
                        var r;
                        "object" === typeof t && (t = JSON.stringify(t)), this.cookies = W(W({}, this.cookies), ((r = {})[e] = t, r)), this.HAS_DOCUMENT_COOKIE && (document.cookie = L.serialize(e, t, n)), this._emitChange({
                            name: e,
                            value: t,
                            options: n
                        })
                    }, e.prototype.remove = function(e, t) {
                        var n = t = W(W({}, t), {
                            expires: new Date(1970, 1, 1, 0, 0, 1),
                            maxAge: 0
                        });
                        this.cookies = W({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = L.serialize(e, "", n)), this._emitChange({
                            name: e,
                            value: void 0,
                            options: t
                        })
                    }, e.prototype.addChangeListener = function(e) {
                        this.changeListeners.push(e)
                    }, e.prototype.removeChangeListener = function(e) {
                        var t = this.changeListeners.indexOf(e);
                        t >= 0 && this.changeListeners.splice(t, 1)
                    }, e
                }(),
                K = U,
                G = a.createContext(new K),
                V = G.Provider,
                X = (G.Consumer, function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }()),
                Q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return t.cookies ? n.cookies = t.cookies : n.cookies = new U, n
                    }
                    return X(t, e), t.prototype.render = function() {
                        return a.createElement(V, {
                            value: this.cookies
                        }, this.props.children)
                    }, t
                }(a.Component),
                J = n("St8r"),
                Z = n("iuhU"),
                $ = n("NqtD"),
                Y = n("kKAo"),
                ee = a.forwardRef((function(e, t) {
                    var n = e.classes,
                        r = e.className,
                        o = e.color,
                        i = void 0 === o ? "primary" : o,
                        s = e.position,
                        c = void 0 === s ? "fixed" : s,
                        u = Object(J.a)(e, ["classes", "className", "color", "position"]);
                    return a.createElement(Y.a, Object(m.a)({
                        square: !0,
                        component: "header",
                        elevation: 4,
                        className: Object(Z.default)(n.root, n["position".concat(Object($.a)(c))], n["color".concat(Object($.a)(i))], r, "fixed" === c && "mui-fixed"),
                        ref: t
                    }, u))
                })),
                te = (Object(y.a)((function(e) {
                    var t = "light" === e.palette.type ? e.palette.grey[100] : e.palette.grey[900];
                    return {
                        root: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            boxSizing: "border-box",
                            zIndex: e.zIndex.appBar,
                            flexShrink: 0
                        },
                        positionFixed: {
                            position: "fixed",
                            top: 0,
                            left: "auto",
                            right: 0,
                            "@media print": {
                                position: "absolute"
                            }
                        },
                        positionAbsolute: {
                            position: "absolute",
                            top: 0,
                            left: "auto",
                            right: 0
                        },
                        positionSticky: {
                            position: "sticky",
                            top: 0,
                            left: "auto",
                            right: 0
                        },
                        positionStatic: {
                            position: "static"
                        },
                        positionRelative: {
                            position: "relative"
                        },
                        colorDefault: {
                            backgroundColor: t,
                            color: e.palette.getContrastText(t)
                        },
                        colorPrimary: {
                            backgroundColor: e.palette.primary.main,
                            color: e.palette.primary.contrastText
                        },
                        colorSecondary: {
                            backgroundColor: e.palette.secondary.main,
                            color: e.palette.secondary.contrastText
                        },
                        colorInherit: {
                            color: "inherit"
                        },
                        colortransparent: {
                            backgroundColor: "transparent",
                            color: "inherit"
                        }
                    }
                }), {
                    name: "MuiAppBar"
                })(ee), a.forwardRef((function(e, t) {
                    var n = e.classes,
                        r = e.className,
                        o = e.component,
                        i = void 0 === o ? "div" : o,
                        s = e.disableGutters,
                        c = void 0 !== s && s,
                        u = e.variant,
                        l = void 0 === u ? "regular" : u,
                        p = Object(J.a)(e, ["classes", "className", "component", "disableGutters", "variant"]);
                    return a.createElement(i, Object(m.a)({
                        className: Object(Z.default)(n.root, n[l], r, !c && n.gutters),
                        ref: t
                    }, p))
                }))),
                ne = (Object(y.a)((function(e) {
                    return {
                        root: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center"
                        },
                        gutters: Object(C.a)({
                            paddingLeft: e.spacing(2),
                            paddingRight: e.spacing(2)
                        }, e.breakpoints.up("sm"), {
                            paddingLeft: e.spacing(3),
                            paddingRight: e.spacing(3)
                        }),
                        regular: e.mixins.toolbar,
                        dense: {
                            minHeight: 48
                        }
                    }
                }), {
                    name: "MuiToolbar"
                })(te), n("R/WZ")),
                re = n("Vvt1"),
                oe = n.n(re),
                ie = n("vOnD"),
                ae = n("MGIy"),
                se = (Object(ie.a)(ae.a).withConfig({
                    displayName: "styles__SearchInput",
                    componentId: "sc-1die9hd-0"
                })({
                    border: "1px solid #373356",
                    width: "25%",
                    borderRadius: 8,
                    input: {
                        color: "#9390b1",
                        borderRadius: 8
                    },
                    ".MuiInputBase-root": {
                        height: "35px",
                        borderRadius: 8
                    },
                    ".MuiStepLabel-iconContainer": {
                        background: "blue"
                    },
                    "@media (max-width: 768px)": {
                        width: "100%",
                        margin: "10px 0"
                    }
                }), Object(ie.a)("div").withConfig({
                    displayName: "styles__CoinsContainer",
                    componentId: "sc-1die9hd-1"
                })({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 8,
                    "@media (max-width: 768px)": {
                        display: "none"
                    }
                }), Object(ie.a)("div").withConfig({
                    displayName: "styles__CoinItemContainer",
                    componentId: "sc-1die9hd-2"
                })({
                    display: "flex",
                    color: "#646272",
                    backgroundColor: "#ffffff0d",
                    fontSize: 14,
                    alignItems: "center",
                    padding: "0 19px",
                    borderRadius: "10px",
                    margin: "0 10px"
                }), Object(ie.a)("img").withConfig({
                    displayName: "styles__CoinIcon",
                    componentId: "sc-1die9hd-3"
                })({
                    width: "14px",
                    height: "14px"
                }), Object(ie.a)("span").withConfig({
                    displayName: "styles__CoinName",
                    componentId: "sc-1die9hd-4"
                })({
                    margin: "0 5px"
                }), Object(ie.a)("span").withConfig({
                    displayName: "styles__CoinAmount",
                    componentId: "sc-1die9hd-5"
                })({}), n("/MKj"));
            oe()((function() {
                return Promise.all([n.e(4), n.e(0), n.e(7), n.e(14), n.e(51)]).then(n.bind(null, "CCKa"))
            }), {
                ssr: !1,
                loadableGenerated: {
                    webpack: function() {
                        return ["CCKa"]
                    },
                    modules: ["../components/Navbar/Navbar.jsx -> ../ConnectWallet/ConnectWallet"]
                }
            }), Object(ne.a)((function(e) {
                return {
                    root: {
                        flexGrow: 1,
                        padding: "20px 20px",
                        boxShadow: "none",
                        backgroundColor: "transparent"
                    },
                    toolbar: Object(r.a)({
                        justifyContent: "space-between",
                        zIndex: 2
                    }, e.breakpoints.down("md"), {
                        flexDirection: "column",
                        alignItems: "center"
                    }),
                    image: {
                        maxWidth: 200
                    }
                }
            })), n("MX0m"), Object(ie.a)("div").withConfig({
                displayName: "styles__ImgContainer",
                componentId: "sc-45emqb-0"
            })(Object(r.a)({
                marginLeft: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }, "marginLeft", 15)), Object(ie.a)("div").withConfig({
                displayName: "styles__SideMenuContainer",
                componentId: "sc-45emqb-1"
            })({
                position: "relative"
            }), Object(ie.a)("img").withConfig({
                displayName: "styles__MenuImg",
                componentId: "sc-45emqb-2"
            })({
                width: 20,
                marginRight: 20
            }), Object(ie.a)("img").withConfig({
                displayName: "styles__Logo",
                componentId: "sc-45emqb-3"
            })({
                width: 150
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__LivePriceContainer",
                componentId: "sc-45emqb-4"
            })({
                margin: "30px 0",
                padding: "0 25px"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__LivePrice",
                componentId: "sc-45emqb-5"
            })({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "2px solid #666666",
                padding: 10,
                borderRadius: 5,
                borderBottom: "none"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__LivePriceRow",
                componentId: "sc-45emqb-6"
            })({
                display: "flex"
            }), Object(ie.a)("span").withConfig({
                displayName: "styles__LivePriceText",
                componentId: "sc-45emqb-7"
            })({
                fontSize: 12,
                fontWeight: "bold"
            }), Object(ie.a)("span").withConfig({
                displayName: "styles__LivePriceCurrency",
                componentId: "sc-45emqb-8"
            })({
                fontSize: 12,
                color: "#646272",
                marginLeft: 5
            }), Object(ie.a)("span").withConfig({
                displayName: "styles__LivePriceAmount",
                componentId: "sc-45emqb-9"
            })({
                fontSize: 22,
                color: "#dbd50d",
                paddingTop: 5,
                fontWeight: "bold"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__MenuItemsContainer",
                componentId: "sc-45emqb-10"
            })({
                display: "flex",
                flexDirection: "column"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__MenuItemContainer",
                componentId: "sc-45emqb-11"
            })({
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "10px 0 10px 5px",
                padding: "0 25px"
            }), Object(ie.a)("img").withConfig({
                displayName: "styles__MenuItemIcon",
                componentId: "sc-45emqb-12"
            })({
                width: function(e) {
                    return "".concat(e.width, "px")
                },
                height: function(e) {
                    return "".concat(e.height, "px")
                },
                opacity: function(e) {
                    return e.disabled ? .5 : 1
                },
                marginRight: 10
            }), Object(ie.a)("a").withConfig({
                displayName: "styles__MenuItemName",
                componentId: "sc-45emqb-13"
            })({
                fontSize: 18,
                cursor: "pointer",
                color: "grey"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__Container",
                componentId: "sc-45emqb-14"
            })({
                width: 30,
                height: 30,
                marginRight: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__ActiveIndicator",
                componentId: "sc-45emqb-15"
            })({
                width: 8,
                height: 40,
                backgroundColor: "white",
                borderRadius: 8,
                position: "absolute",
                left: 0
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__MainContainer",
                componentId: "sc-45emqb-16"
            })({
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__ChartContainer",
                componentId: "sc-45emqb-17"
            })({
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start"
            }), Object(ie.a)("img").withConfig({
                displayName: "styles__ChartImage",
                componentId: "sc-45emqb-18"
            })({
                padding: 20,
                width: "100%",
                maxWidth: "200px"
            }), Object(ie.a)("div").withConfig({
                displayName: "styles__IconsContainer",
                componentId: "sc-45emqb-19"
            })({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0",
                marginRight: 20
            }), Object(ie.a)("img").withConfig({
                displayName: "styles__Social",
                componentId: "sc-45emqb-20"
            })({
                width: 35,
                cursor: "pointer",
                margin: "0 5px"
            }), Object(ie.a)("img").withConfig({
                displayName: "styles__MenuButton",
                componentId: "sc-45emqb-21"
            })({
                height: 40,
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translate(70%,-50%)",
                opacity: .5,
                cursor: "pointer"
            });
            var ce = n("20a2");
            var ue = n("G7As"),
                le = n("bfFb"),
                pe = n("ofer"),
                de = a.forwardRef((function(e, t) {
                    var n = e.classes,
                        r = e.className,
                        o = e.color,
                        i = void 0 === o ? "primary" : o,
                        s = e.component,
                        c = void 0 === s ? "a" : s,
                        u = e.onBlur,
                        l = e.onFocus,
                        p = e.TypographyClasses,
                        d = e.underline,
                        f = void 0 === d ? "hover" : d,
                        h = e.variant,
                        y = void 0 === h ? "inherit" : h,
                        b = Object(J.a)(e, ["classes", "className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant"]),
                        v = Object(ue.a)(),
                        g = v.isFocusVisible,
                        O = v.onBlurVisible,
                        w = v.ref,
                        j = a.useState(!1),
                        _ = j[0],
                        S = j[1],
                        x = Object(le.a)(t, w);
                    return a.createElement(pe.a, Object(m.a)({
                        className: Object(Z.default)(n.root, n["underline".concat(Object($.a)(f))], r, _ && n.focusVisible, "button" === c && n.button),
                        classes: p,
                        color: i,
                        component: c,
                        onBlur: function(e) {
                            _ && (O(), S(!1)), u && u(e)
                        },
                        onFocus: function(e) {
                            g(e) && S(!0), l && l(e)
                        },
                        ref: x,
                        variant: y
                    }, b))
                })),
                fe = (Object(y.a)({
                    root: {},
                    underlineNone: {
                        textDecoration: "none"
                    },
                    underlineHover: {
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline"
                        }
                    },
                    underlineAlways: {
                        textDecoration: "underline"
                    },
                    button: {
                        position: "relative",
                        WebkitTapHighlightColor: "transparent",
                        backgroundColor: "transparent",
                        outline: 0,
                        border: 0,
                        margin: 0,
                        borderRadius: 0,
                        padding: 0,
                        cursor: "pointer",
                        userSelect: "none",
                        verticalAlign: "middle",
                        "-moz-appearance": "none",
                        "-webkit-appearance": "none",
                        "&::-moz-focus-inner": {
                            borderStyle: "none"
                        },
                        "&$focusVisible": {
                            outline: "auto"
                        }
                    },
                    focusVisible: {}
                }, {
                    name: "MuiLink"
                })(de), n("/kLi"), n("raOy")),
                he = n.n(fe);

            function me(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(n), !0).forEach((function(t) {
                        me(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ve(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            var ge = "function" === typeof Symbol && Symbol.observable || "@@observable",
                Oe = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                we = {
                    INIT: "@@redux/INIT" + Oe(),
                    REPLACE: "@@redux/REPLACE" + Oe(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + Oe()
                    }
                };

            function je(e) {
                if ("object" !== typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }

            function _e(e, t, n) {
                var r;
                if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3]) throw new Error(ve(0));
                if ("function" === typeof t && "undefined" === typeof n && (n = t, t = void 0), "undefined" !== typeof n) {
                    if ("function" !== typeof n) throw new Error(ve(1));
                    return n(_e)(e, t)
                }
                if ("function" !== typeof e) throw new Error(ve(2));
                var o = e,
                    i = t,
                    a = [],
                    s = a,
                    c = !1;

                function u() {
                    s === a && (s = a.slice())
                }

                function l() {
                    if (c) throw new Error(ve(3));
                    return i
                }

                function p(e) {
                    if ("function" !== typeof e) throw new Error(ve(4));
                    if (c) throw new Error(ve(5));
                    var t = !0;
                    return u(), s.push(e),
                        function() {
                            if (t) {
                                if (c) throw new Error(ve(6));
                                t = !1, u();
                                var n = s.indexOf(e);
                                s.splice(n, 1), a = null
                            }
                        }
                }

                function d(e) {
                    if (!je(e)) throw new Error(ve(7));
                    if ("undefined" === typeof e.type) throw new Error(ve(8));
                    if (c) throw new Error(ve(9));
                    try {
                        c = !0, i = o(i, e)
                    } finally {
                        c = !1
                    }
                    for (var t = a = s, n = 0; n < t.length; n++) {
                        (0, t[n])()
                    }
                    return e
                }

                function f(e) {
                    if ("function" !== typeof e) throw new Error(ve(10));
                    o = e, d({
                        type: we.REPLACE
                    })
                }

                function h() {
                    var e, t = p;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new Error(ve(11));

                            function n() {
                                e.next && e.next(l())
                            }
                            return n(), {
                                unsubscribe: t(n)
                            }
                        }
                    })[ge] = function() {
                        return this
                    }, e
                }
                return d({
                    type: we.INIT
                }), (r = {
                    dispatch: d,
                    subscribe: p,
                    getState: l,
                    replaceReducer: f
                })[ge] = h, r
            }

            function Se() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 0 === t.length ? function(e) {
                    return e
                } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }
            var xe = "SET_PRICE";

            function Ce(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ie = {
                    wbtc: null,
                    dream: null,
                    eth: null,
                    bnb: null
                },
                ke = "SET_LOADER";

            function Ee(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ee(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Fe, Re = {
                    loader: null
                },
                Ne = function(e) {
                    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                        var o = t[r];
                        0, "function" === typeof e[o] && (n[o] = e[o])
                    }
                    var i, a = Object.keys(n);
                    try {
                        ! function(e) {
                            Object.keys(e).forEach((function(t) {
                                var n = e[t];
                                if ("undefined" === typeof n(void 0, {
                                        type: we.INIT
                                    })) throw new Error(ve(12));
                                if ("undefined" === typeof n(void 0, {
                                        type: we.PROBE_UNKNOWN_ACTION()
                                    })) throw new Error(ve(13))
                            }))
                        }(n)
                    } catch (s) {
                        i = s
                    }
                    return function(e, t) {
                        if (void 0 === e && (e = {}), i) throw i;
                        for (var r = !1, o = {}, s = 0; s < a.length; s++) {
                            var c = a[s],
                                u = n[c],
                                l = e[c],
                                p = u(l, t);
                            if ("undefined" === typeof p) {
                                t && t.type;
                                throw new Error(ve(14))
                            }
                            o[c] = p, r = r || p !== l
                        }
                        return (r = r || a.length !== Object.keys(e).length) ? o : e
                    }
                }({
                    loader: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case ke:
                                return Ae(Ae({}, e), {}, {
                                    loader: t.loader
                                });
                            default:
                                return e
                        }
                    },
                    prices: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case xe:
                                return Pe(Pe({}, e), {}, Object(r.a)({}, t.price.token, t.price.price));
                            default:
                                return e
                        }
                    }
                }),
                Me = function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                De = function() {
                    return (De = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Te = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(e) {
                            try {
                                c(r.throw(e))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, s)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                },
                Be = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (s) {
                                    i = [6, s], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                ze = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                },
                qe = "__NEXT_REDUX_WRAPPER_HYDRATE__",
                Le = function() {
                    return "undefined" === typeof window
                },
                He = function(e, t) {
                    var n = (void 0 === t ? {} : t).deserializeState;
                    return n ? n(e) : e
                },
                We = function(e, t) {
                    var n = (void 0 === t ? {} : t).serializeState;
                    return n ? n(e) : e
                },
                Ue = function(e) {
                    var t = e.makeStore,
                        n = e.context,
                        r = function() {
                            return t(n)
                        };
                    if (Le()) {
                        var o = n,
                            i = void 0;
                        return o.req && (i = o.req), o.ctx && o.ctx.req && (i = o.ctx.req), i ? (i.__nextReduxWrapperStore || (i.__nextReduxWrapperStore = r()), i.__nextReduxWrapperStore) : r()
                    }
                    return Fe || (Fe = r()), Fe
                },
                Ke = function(e, t) {
                    void 0 === t && (t = {});
                    var n = function(n) {
                            var r = n.callback,
                                o = n.context;
                            return Te(void 0, void 0, void 0, (function() {
                                var n, i, a, s, c;
                                return Be(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return n = Ue({
                                                context: o,
                                                makeStore: e
                                            }), t.debug && console.log("1. getProps created store with state", n.getState()), i = r && r(n), (s = i) ? [4, i(o)] : [3, 2];
                                        case 1:
                                            s = u.sent(), u.label = 2;
                                        case 2:
                                            return a = s || {}, t.debug && console.log("3. getProps after dispatches has store state", n.getState()), c = n.getState(), [2, {
                                                initialProps: a,
                                                initialState: Le() ? We(c, t) : c
                                            }]
                                    }
                                }))
                            }))
                        },
                        r = function(e) {
                            return function(t) {
                                return Te(void 0, void 0, void 0, (function() {
                                    var r, o, i;
                                    return Be(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, n({
                                                    callback: e,
                                                    context: t
                                                })];
                                            case 1:
                                                return r = a.sent(), o = r.initialProps, i = r.initialState, [2, De(De({}, o), {
                                                    props: De(De({}, o.props), {
                                                        initialState: i
                                                    })
                                                })]
                                        }
                                    }))
                                }))
                            }
                        };
                    return {
                        getServerSideProps: function(e) {
                            return function(t) {
                                return Te(void 0, void 0, void 0, (function() {
                                    return Be(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, r(e)(t)];
                                            case 1:
                                                return [2, n.sent()]
                                        }
                                    }))
                                }))
                            }
                        },
                        getStaticProps: r,
                        getInitialAppProps: function(e) {
                            return function(t) {
                                return Te(void 0, void 0, void 0, (function() {
                                    var r, o, i;
                                    return Be(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, n({
                                                    callback: e,
                                                    context: t
                                                })];
                                            case 1:
                                                return r = a.sent(), o = r.initialProps, i = r.initialState, [2, De(De({}, o), {
                                                    initialState: i
                                                })]
                                        }
                                    }))
                                }))
                            }
                        },
                        getInitialPageProps: function(e) {
                            return function(t) {
                                return Te(void 0, void 0, void 0, (function() {
                                    return Be(this, (function(r) {
                                        return "getState" in t ? [2, e && e(t)] : [2, n({
                                            callback: e,
                                            context: t
                                        })]
                                    }))
                                }))
                            }
                        },
                        withRedux: function(n) {
                            var r, o = "withRedux(" + (n.displayName || n.name || "Component") + ")",
                                i = "getInitialProps" in n;
                            return (r = function(r) {
                                function i(e, t) {
                                    var n = r.call(this, e, t) || this;
                                    return n.store = null, n.hydrate(e, t), n
                                }
                                return Me(i, r), i.prototype.hydrate = function(n, r) {
                                    var i, a = n.initialState,
                                        s = (n.initialProps, ze(n, ["initialState", "initialProps"])),
                                        c = null === (i = null === s || void 0 === s ? void 0 : s.pageProps) || void 0 === i ? void 0 : i.initialState;
                                    this.store || (this.store = Ue({
                                        makeStore: e,
                                        context: r
                                    }), t.debug && console.log("4. WrappedApp created new store with", o, {
                                        initialState: a,
                                        initialStateFromGSPorGSSR: c
                                    })), a && this.store.dispatch({
                                        type: qe,
                                        payload: He(a, t)
                                    }), c && this.store.dispatch({
                                        type: qe,
                                        payload: He(c, t)
                                    })
                                }, i.prototype.shouldComponentUpdate = function(e, t, n) {
                                    var r, o, i, a;
                                    return (null === (r = null === e || void 0 === e ? void 0 : e.pageProps) || void 0 === r ? void 0 : r.initialState) === (null === (i = null === (o = this.props) || void 0 === o ? void 0 : o.pageProps) || void 0 === i ? void 0 : i.initialState) && (null === e || void 0 === e ? void 0 : e.initialState) === (null === (a = this.props) || void 0 === a ? void 0 : a.initialState) || this.hydrate(e, n), !0
                                }, i.prototype.render = function() {
                                    var e, t, r = this.props,
                                        o = (r.initialState, r.initialProps),
                                        i = ze(r, ["initialState", "initialProps"]),
                                        a = i;
                                    return o && o.pageProps && (a.pageProps = De(De({}, o.pageProps), i.pageProps)), (null === (e = null === i || void 0 === i ? void 0 : i.pageProps) || void 0 === e ? void 0 : e.initialState) && delete(a = De(De({}, i), {
                                        pageProps: De({}, i.pageProps)
                                    })).pageProps.initialState, (null === (t = null === a || void 0 === a ? void 0 : a.pageProps) || void 0 === t ? void 0 : t.initialProps) && (a.pageProps = De(De({}, a.pageProps), a.pageProps.initialProps), delete a.pageProps.initialProps), s.a.createElement(se.a, {
                                        store: this.store
                                    }, s.a.createElement(n, De({}, o, a)))
                                }, i
                            }(s.a.Component)).displayName = o, r.getInitialProps = i ? n.getInitialProps : void 0, r
                        }
                    }
                };

            function Ge(e) {
                return function(t) {
                    var n = t.dispatch,
                        r = t.getState;
                    return function(t) {
                        return function(o) {
                            return "function" === typeof o ? o(n, r, e) : t(o)
                        }
                    }
                }
            }
            var Ve = Ge();
            Ve.withExtraArgument = Ge;
            var Xe = Ve,
                Qe = Ke((function() {
                    return _e(Ne, function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e) {
                            return function() {
                                var n = e.apply(void 0, arguments),
                                    r = function() {
                                        throw new Error(ve(15))
                                    },
                                    o = {
                                        getState: n.getState,
                                        dispatch: function() {
                                            return r.apply(void 0, arguments)
                                        }
                                    },
                                    i = t.map((function(e) {
                                        return e(o)
                                    }));
                                return r = Se.apply(void 0, i)(n.dispatch), be(be({}, n), {}, {
                                    dispatch: r
                                })
                            }
                        }
                    }(Xe))
                }));
            n("Ckzw"), n("QfqV");

            function Je(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Je(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var $e = Object(ne.a)((function(e) {
                return {
                    root: Object(r.a)({
                        width: 500,
                        position: "fixed",
                        zIndex: "999",
                        bottom: 0,
                        padding: "0 40px",
                        background: "#1b1b1b"
                    }, e.breakpoints.down("md"), {
                        width: "100%"
                    }),
                    sideMenu: Object(r.a)({
                        width: "15%",
                        zIndex: 2,
                        padding: "25px 0"
                    }, e.breakpoints.down("sm"), {
                        display: "none"
                    }),
                    main: Object(r.a)({
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        height: "100%"
                    }, e.breakpoints.down("md"), {
                        justifyContent: "center",
                        height: "100vh"
                    }),
                    content: {
                        width: "100%"
                    },
                    layer: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1
                    }
                }
            }));
            t.default = Qe.withRedux((function(e) {
                var t = e.Component,
                    n = e.pageProps,
                    r = Object(a.useState)(0),
                    c = (r[0], r[1]),
                    l = Object(a.useState)(!1),
                    p = l[0],
                    d = l[1],
                    f = Object(a.useState)(),
                    m = f[0],
                    y = f[1],
                    b = Object(a.useState)(),
                    v = b[0],
                    w = b[1],
                    j = s.a.useState(-1),
                    _ = Object(i.a)(j, 2),
                    S = (_[0], _[1], Object(ce.useRouter)(), $e());
                Object(a.useEffect)((function() {
                    var e = document.querySelector("#jss-server-side");
                    e && e.parentElement.removeChild(e), c(localStorage.getItem("mode") ? parseInt(localStorage.getItem("mode")) : 0), d(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)), y(window.innerHeight), w(window.innerWidth)
                }), []);
                var x = q;
                return Object(o.jsxs)(s.a.Fragment, {
                    children: [Object(o.jsxs)(u.a, {
                        children: [Object(o.jsx)("title", {
                            children: "$MING | Staking Dapp"
                        }), Object(o.jsx)("meta", {
                            name: "title",
                            content: "$MING | Staking Dapp"
                        }), Object(o.jsx)("meta", {
                            name: "description",
                            content: "We are Ming Mong, The First Mover & Innovator of Mong Coin Liquidity Pair."
                        }), Object(o.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), Object(o.jsx)("meta", {
                            property: "og:title",
                            content: "$MING | Staking Dapp"
                        }), Object(o.jsx)("meta", {
                            property: "og:description",
                            content: "We are Ming Mong, The First Mover & Innovator of Mong Coin Liquidity Pair."
                        }), Object(o.jsx)("meta", {
                            property: "og:image",
                            content: ""
                        }), Object(o.jsx)("meta", {
                            property: "twitter:card",
                            content: "summary_large_image"
                        }), Object(o.jsx)("meta", {
                            property: "twitter:title",
                            content: "$MING | Staking Dapp"
                        }), Object(o.jsx)("meta", {
                            property: "twitter:description",
                            content: "We are Ming Mong, The First Mover & Innovator of Mong Coin Liquidity Pair."
                        }), Object(o.jsx)("meta", {
                            property: "twitter:image",
                            content: ""
                        }), Object(o.jsx)("meta", {
                            name: "viewport",
                            content: "minimum-scale=1, initial-scale=1, width=device-width"
                        })]
                    }), Object(o.jsxs)(h, {
                        theme: x,
                        children: [Object(o.jsx)(he.a, {}), Object(o.jsx)(g, {}), Object(o.jsxs)("div", {
                            className: S.main,
                            style: {
                                height: v < 1280 ? m : "100%"
                            },
                            children: [!1, Object(o.jsx)("div", {
                                className: S.content,
                                children: Object(o.jsx)(O.SessionProvider, {
                                    session: n && n.session,
                                    children: Object(o.jsx)(Q, {
                                        children: Object(o.jsx)(t, Ze(Ze({}, n), {}, {
                                            isMobile: p
                                        }))
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }))
        },
        MX0m: function(e, t, n) {
            e.exports = n("3niX")
        },
        QfqV: function(e, t, n) {},
        SevZ: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var r = i(n("9kyW")),
                o = i(n("bVZc"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = function() {
                function e(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.styleSheet,
                        r = void 0 === n ? null : n,
                        i = t.optimizeForSpeed,
                        a = void 0 !== i && i,
                        s = t.isBrowser,
                        c = void 0 === s ? "undefined" !== typeof window : s;
                    this._sheet = r || new o.default({
                        name: "styled-jsx",
                        optimizeForSpeed: a
                    }), this._sheet.inject(), r && "boolean" === typeof a && (this._sheet.setOptimizeForSpeed(a), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser = c, this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
                }
                var t = e.prototype;
                return t.add = function(e) {
                    var t = this;
                    void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce((function(e, t) {
                        return e[t] = 0, e
                    }), {}));
                    var n = this.getIdAndRules(e),
                        r = n.styleId,
                        o = n.rules;
                    if (r in this._instancesCounts) this._instancesCounts[r] += 1;
                    else {
                        var i = o.map((function(e) {
                            return t._sheet.insertRule(e)
                        })).filter((function(e) {
                            return -1 !== e
                        }));
                        this._indices[r] = i, this._instancesCounts[r] = 1
                    }
                }, t.remove = function(e) {
                    var t = this,
                        n = this.getIdAndRules(e).styleId;
                    if (function(e, t) {
                            if (!e) throw new Error("StyleSheetRegistry: " + t + ".")
                        }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                        var r = this._fromServer && this._fromServer[n];
                        r ? (r.parentNode.removeChild(r), delete this._fromServer[n]) : (this._indices[n].forEach((function(e) {
                            return t._sheet.deleteRule(e)
                        })), delete this._indices[n]), delete this._instancesCounts[n]
                    }
                }, t.update = function(e, t) {
                    this.add(t), this.remove(e)
                }, t.flush = function() {
                    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
                }, t.cssRules = function() {
                    var e = this,
                        t = this._fromServer ? Object.keys(this._fromServer).map((function(t) {
                            return [t, e._fromServer[t]]
                        })) : [],
                        n = this._sheet.cssRules();
                    return t.concat(Object.keys(this._indices).map((function(t) {
                        return [t, e._indices[t].map((function(e) {
                            return n[e].cssText
                        })).join(e._optimizeForSpeed ? "" : "\n")]
                    })).filter((function(e) {
                        return Boolean(e[1])
                    })))
                }, t.createComputeId = function() {
                    var e = {};
                    return function(t, n) {
                        if (!n) return "jsx-" + t;
                        var o = String(n),
                            i = t + o;
                        return e[i] || (e[i] = "jsx-" + (0, r.default)(t + "-" + o)), e[i]
                    }
                }, t.createComputeSelector = function(e) {
                    void 0 === e && (e = /__jsx-style-dynamic-selector/g);
                    var t = {};
                    return function(n, r) {
                        this._isBrowser || (r = r.replace(/\/style/gi, "\\/style"));
                        var o = n + r;
                        return t[o] || (t[o] = r.replace(e, n)), t[o]
                    }
                }, t.getIdAndRules = function(e) {
                    var t = this,
                        n = e.children,
                        r = e.dynamic,
                        o = e.id;
                    if (r) {
                        var i = this.computeId(o, r);
                        return {
                            styleId: i,
                            rules: Array.isArray(n) ? n.map((function(e) {
                                return t.computeSelector(i, e)
                            })) : [this.computeSelector(i, n)]
                        }
                    }
                    return {
                        styleId: this.computeId(o),
                        rules: Array.isArray(n) ? n : [n]
                    }
                }, t.selectFromServer = function() {
                    return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e, t) {
                        return e[t.id.slice(2)] = t, e
                    }), {})
                }, e
            }();
            t.default = a
        },
        YFqc: function(e, t, n) {
            e.exports = n("cTJO")
        },
        bVZc: function(e, t, n) {
            "use strict";
            (function(e) {
                function n(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                t.__esModule = !0, t.default = void 0;
                var r = "undefined" !== typeof e && e.env && !0,
                    o = function(e) {
                        return "[object String]" === Object.prototype.toString.call(e)
                    },
                    i = function() {
                        function e(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.name,
                                i = void 0 === n ? "stylesheet" : n,
                                s = t.optimizeForSpeed,
                                c = void 0 === s ? r : s,
                                u = t.isBrowser,
                                l = void 0 === u ? "undefined" !== typeof window : u;
                            a(o(i), "`name` must be a string"), this._name = i, this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}", a("boolean" === typeof c, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = c, this._isBrowser = l, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                            var p = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
                            this._nonce = p ? p.getAttribute("content") : null
                        }
                        var t, i, s, c = e.prototype;
                        return c.setOptimizeForSpeed = function(e) {
                            a("boolean" === typeof e, "`setOptimizeForSpeed` accepts a boolean"), a(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, c.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, c.inject = function() {
                            var e = this;
                            if (a(!this._injected, "sheet already injected"), this._injected = !0, this._isBrowser && this._optimizeForSpeed) return this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), void(this._optimizeForSpeed || (r || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0));
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, n) {
                                    return "number" === typeof n ? e._serverSheet.cssRules[n] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), n
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, c.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, c.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, c.insertRule = function(e, t) {
                            if (a(o(e), "`insertRule` accepts only strings"), !this._isBrowser) return "number" !== typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                            if (this._optimizeForSpeed) {
                                var n = this.getSheet();
                                "number" !== typeof t && (t = n.cssRules.length);
                                try {
                                    n.insertRule(e, t)
                                } catch (s) {
                                    return r || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var i = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, i))
                            }
                            return this._rulesCount++
                        }, c.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed || !this._isBrowser) {
                                var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                                if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                                n.deleteRule(e);
                                try {
                                    n.insertRule(t, e)
                                } catch (i) {
                                    r || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var o = this._tags[e];
                                a(o, "old rule at index `" + e + "` not found"), o.textContent = t
                            }
                            return e
                        }, c.deleteRule = function(e) {
                            if (this._isBrowser)
                                if (this._optimizeForSpeed) this.replaceRule(e, "");
                                else {
                                    var t = this._tags[e];
                                    a(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                                }
                            else this._serverSheet.deleteRule(e)
                        }, c.flush = function() {
                            this._injected = !1, this._rulesCount = 0, this._isBrowser ? (this._tags.forEach((function(e) {
                                return e && e.parentNode.removeChild(e)
                            })), this._tags = []) : this._serverSheet.cssRules = []
                        }, c.cssRules = function() {
                            var e = this;
                            return this._isBrowser ? this._tags.reduce((function(t, n) {
                                return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, (function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                }))) : t.push(null), t
                            }), []) : this._serverSheet.cssRules
                        }, c.makeStyleTag = function(e, t, n) {
                            t && a(o(t), "makeStyleTag acceps only strings as second parameter");
                            var r = document.createElement("style");
                            this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                            var i = document.head || document.getElementsByTagName("head")[0];
                            return n ? i.insertBefore(r, n) : i.appendChild(r), r
                        }, t = e, (i = [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }]) && n(t.prototype, i), s && n(t, s), e
                    }();

                function a(e, t) {
                    if (!e) throw new Error("StyleSheet: " + t + ".")
                }
                t.default = i
            }).call(this, n("8oxB"))
        },
        bfFb: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("q1tI"),
                o = n("GIek");

            function i(e, t) {
                return r.useMemo((function() {
                    return null == e && null == t ? null : function(n) {
                        Object(o.a)(e, n), Object(o.a)(t, n)
                    }
                }), [e, t])
            }
        },
        cTJO: function(e, t, n) {
            "use strict";
            var r = n("zoAU");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, i = (o = n("q1tI")) && o.__esModule ? o : {
                    default: o
                },
                a = n("Sgtc"),
                s = n("nOHt"),
                c = n("vNVm");
            var u = {};

            function l(e, t, n, r) {
                if (e && a.isLocalURL(t)) {
                    e.prefetch(t, n, r).catch((function(e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    u[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var p = function(e) {
                var t, n = !1 !== e.prefetch,
                    o = s.useRouter(),
                    p = i.default.useMemo((function() {
                        var t = a.resolveHref(o, e.href, !0),
                            n = r(t, 2),
                            i = n[0],
                            s = n[1];
                        return {
                            href: i,
                            as: e.as ? a.resolveHref(o, e.as) : s || i
                        }
                    }), [o, e.href, e.as]),
                    d = p.href,
                    f = p.as,
                    h = e.children,
                    m = e.replace,
                    y = e.shallow,
                    b = e.scroll,
                    v = e.locale;
                "string" === typeof h && (h = i.default.createElement("a", null, h));
                var g = (t = i.default.Children.only(h)) && "object" === typeof t && t.ref,
                    O = c.useIntersection({
                        rootMargin: "200px"
                    }),
                    w = r(O, 2),
                    j = w[0],
                    _ = w[1],
                    S = i.default.useCallback((function(e) {
                        j(e), g && ("function" === typeof g ? g(e) : "object" === typeof g && (g.current = e))
                    }), [g, j]);
                i.default.useEffect((function() {
                    var e = _ && n && a.isLocalURL(d),
                        t = "undefined" !== typeof v ? v : o && o.locale,
                        r = u[d + "%" + f + (t ? "%" + t : "")];
                    e && !r && l(o, d, f, {
                        locale: t
                    })
                }), [f, d, _, v, n, o]);
                var x = {
                    ref: S,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, i, s, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && a.isLocalURL(n)) && (e.preventDefault(), null == s && r.indexOf("#") >= 0 && (s = !1), t[o ? "replace" : "push"](n, r, {
                                shallow: i,
                                locale: c,
                                scroll: s
                            }))
                        }(e, o, d, f, m, y, b, v)
                    },
                    onMouseEnter: function(e) {
                        a.isLocalURL(d) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), l(o, d, f, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var C = "undefined" !== typeof v ? v : o && o.locale,
                        P = o && o.isLocaleDomain && a.getDomainLocale(f, C, o && o.locales, o && o.domainLocales);
                    x.href = P || a.addBasePath(a.addLocale(f, C, o && o.defaultLocale))
                }
                return i.default.cloneElement(t, x)
            };
            t.default = p
        },
        dTAc: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isInAmpMode = a, t.useAmp = function() {
                return a(o.default.useContext(i.AmpStateContext))
            };
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                i = n("r55Z");

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    i = e.hasQuery,
                    a = void 0 !== i && i;
                return n || o && a
            }
        },
        g4pe: function(e, t, n) {
            e.exports = n("mLbm")
        },
        kG2m: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        kKAo: function(e, t, n) {
            "use strict";
            var r = n("St8r"),
                o = n("i0m8"),
                i = n("q1tI"),
                a = (n("17x9"), n("iuhU")),
                s = n("H2TA"),
                c = i.forwardRef((function(e, t) {
                    var n = e.classes,
                        s = e.className,
                        c = e.component,
                        u = void 0 === c ? "div" : c,
                        l = e.square,
                        p = void 0 !== l && l,
                        d = e.elevation,
                        f = void 0 === d ? 1 : d,
                        h = e.variant,
                        m = void 0 === h ? "elevation" : h,
                        y = Object(r.a)(e, ["classes", "className", "component", "square", "elevation", "variant"]);
                    return i.createElement(u, Object(o.a)({
                        className: Object(a.default)(n.root, s, "outlined" === m ? n.outlined : n["elevation".concat(f)], !p && n.rounded),
                        ref: t
                    }, y))
                }));
            t.a = Object(s.a)((function(e) {
                var t = {};
                return e.shadows.forEach((function(e, n) {
                    t["elevation".concat(n)] = {
                        boxShadow: e
                    }
                })), Object(o.a)({
                    root: {
                        backgroundColor: e.palette.background.paper,
                        color: e.palette.text.primary,
                        transition: e.transitions.create("box-shadow")
                    },
                    rounded: {
                        borderRadius: e.shape.borderRadius
                    },
                    outlined: {
                        border: "1px solid ".concat(e.palette.divider)
                    }
                }, t)
            }), {
                name: "MuiPaper"
            })(c)
        },
        mLbm: function(e, t, n) {
            "use strict";
            var r = n("oI91");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultHead = p, t.default = void 0;
            var i, a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            }
                    return t.default = e, t
                }(n("q1tI")),
                s = (i = n("BdAR")) && i.__esModule ? i : {
                    default: i
                },
                c = n("r55Z"),
                u = n("CM2u"),
                l = n("dTAc");

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [a.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function d(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, t) {
                return e.reduce((function(e, t) {
                    var n = a.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(d, []).reverse().concat(p(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(o) {
                        var i = !0,
                            a = !1;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            a = !0;
                            var s = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(s) ? i = !1 : e.add(s)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (var c = 0, u = f.length; c < u; c++) {
                                    var l = f[c];
                                    if (o.props.hasOwnProperty(l))
                                        if ("charSet" === l) n.has(l) ? i = !1 : n.add(l);
                                        else {
                                            var p = o.props[l],
                                                d = r[l] || new Set;
                                            "name" === l && a || !d.has(p) ? (d.add(p), r[l] = d) : i = !1
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((function(e, n) {
                    var i = e.key || n;
                    if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(t) {
                            return e.props.href.startsWith(t)
                        }))) {
                        var s = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? o(Object(n), !0).forEach((function(t) {
                                    r(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e.props || {});
                        return s["data-href"] = s.href, s.href = void 0, s["data-optimized-fonts"] = !0, a.default.cloneElement(e, s)
                    }
                    return a.default.cloneElement(e, {
                        key: i
                    })
                }))
            }
            var m = function(e) {
                var t = e.children,
                    n = a.useContext(c.AmpStateContext),
                    r = a.useContext(u.HeadManagerContext);
                return a.default.createElement(s.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: l.isInAmpMode(n)
                }, t)
            };
            t.default = m
        },
        mPvQ: function(e, t, n) {
            var r = n("5fIB"),
                o = n("rlHP"),
                i = n("KckH"),
                a = n("kG2m");
            e.exports = function(e) {
                return r(e) || o(e) || i(e) || a()
            }
        },
        ofer: function(e, t, n) {
            "use strict";
            var r = n("i0m8"),
                o = n("St8r"),
                i = n("q1tI"),
                a = (n("17x9"), n("iuhU")),
                s = n("H2TA"),
                c = n("NqtD"),
                u = {
                    h1: "h1",
                    h2: "h2",
                    h3: "h3",
                    h4: "h4",
                    h5: "h5",
                    h6: "h6",
                    subtitle1: "h6",
                    subtitle2: "h6",
                    body1: "p",
                    body2: "p"
                },
                l = i.forwardRef((function(e, t) {
                    var n = e.align,
                        s = void 0 === n ? "inherit" : n,
                        l = e.classes,
                        p = e.className,
                        d = e.color,
                        f = void 0 === d ? "initial" : d,
                        h = e.component,
                        m = e.display,
                        y = void 0 === m ? "initial" : m,
                        b = e.gutterBottom,
                        v = void 0 !== b && b,
                        g = e.noWrap,
                        O = void 0 !== g && g,
                        w = e.paragraph,
                        j = void 0 !== w && w,
                        _ = e.variant,
                        S = void 0 === _ ? "body1" : _,
                        x = e.variantMapping,
                        C = void 0 === x ? u : x,
                        P = Object(o.a)(e, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]),
                        I = h || (j ? "p" : C[S] || u[S]) || "span";
                    return i.createElement(I, Object(r.a)({
                        className: Object(a.default)(l.root, p, "inherit" !== S && l[S], "initial" !== f && l["color".concat(Object(c.a)(f))], O && l.noWrap, v && l.gutterBottom, j && l.paragraph, "inherit" !== s && l["align".concat(Object(c.a)(s))], "initial" !== y && l["display".concat(Object(c.a)(y))]),
                        ref: t
                    }, P))
                }));
            t.a = Object(s.a)((function(e) {
                return {
                    root: {
                        margin: 0
                    },
                    body2: e.typography.body2,
                    body1: e.typography.body1,
                    caption: e.typography.caption,
                    button: e.typography.button,
                    h1: e.typography.h1,
                    h2: e.typography.h2,
                    h3: e.typography.h3,
                    h4: e.typography.h4,
                    h5: e.typography.h5,
                    h6: e.typography.h6,
                    subtitle1: e.typography.subtitle1,
                    subtitle2: e.typography.subtitle2,
                    overline: e.typography.overline,
                    srOnly: {
                        position: "absolute",
                        height: 1,
                        width: 1,
                        overflow: "hidden"
                    },
                    alignLeft: {
                        textAlign: "left"
                    },
                    alignCenter: {
                        textAlign: "center"
                    },
                    alignRight: {
                        textAlign: "right"
                    },
                    alignJustify: {
                        textAlign: "justify"
                    },
                    noWrap: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    gutterBottom: {
                        marginBottom: "0.35em"
                    },
                    paragraph: {
                        marginBottom: 16
                    },
                    colorInherit: {
                        color: "inherit"
                    },
                    colorPrimary: {
                        color: e.palette.primary.main
                    },
                    colorSecondary: {
                        color: e.palette.secondary.main
                    },
                    colorTextPrimary: {
                        color: e.palette.text.primary
                    },
                    colorTextSecondary: {
                        color: e.palette.text.secondary
                    },
                    colorError: {
                        color: e.palette.error.main
                    },
                    displayInline: {
                        display: "inline"
                    },
                    displayBlock: {
                        display: "block"
                    }
                }
            }), {
                name: "MuiTypography"
            })(l)
        },
        r55Z: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AmpStateContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = o
        },
        rlHP: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        uJQa: function(e, t, n) {
            "use strict";
            t.parse = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("argument str must be a string");
                for (var n = {}, o = t || {}, i = e.split(";"), s = o.decode || r, c = 0; c < i.length; c++) {
                    var u = i[c],
                        l = u.indexOf("=");
                    if (!(l < 0)) {
                        var p = u.substring(0, l).trim();
                        if (void 0 == n[p]) {
                            var d = u.substring(l + 1, u.length).trim();
                            '"' === d[0] && (d = d.slice(1, -1)), n[p] = a(d, s)
                        }
                    }
                }
                return n
            }, t.serialize = function(e, t, n) {
                var r = n || {},
                    a = r.encode || o;
                if ("function" !== typeof a) throw new TypeError("option encode is invalid");
                if (!i.test(e)) throw new TypeError("argument name is invalid");
                var s = a(t);
                if (s && !i.test(s)) throw new TypeError("argument val is invalid");
                var c = e + "=" + s;
                if (null != r.maxAge) {
                    var u = r.maxAge - 0;
                    if (isNaN(u) || !isFinite(u)) throw new TypeError("option maxAge is invalid");
                    c += "; Max-Age=" + Math.floor(u)
                }
                if (r.domain) {
                    if (!i.test(r.domain)) throw new TypeError("option domain is invalid");
                    c += "; Domain=" + r.domain
                }
                if (r.path) {
                    if (!i.test(r.path)) throw new TypeError("option path is invalid");
                    c += "; Path=" + r.path
                }
                if (r.expires) {
                    if ("function" !== typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
                    c += "; Expires=" + r.expires.toUTCString()
                }
                r.httpOnly && (c += "; HttpOnly");
                r.secure && (c += "; Secure");
                if (r.sameSite) {
                    switch ("string" === typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                        case !0:
                            c += "; SameSite=Strict";
                            break;
                        case "lax":
                            c += "; SameSite=Lax";
                            break;
                        case "strict":
                            c += "; SameSite=Strict";
                            break;
                        case "none":
                            c += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid")
                    }
                }
                return c
            };
            var r = decodeURIComponent,
                o = encodeURIComponent,
                i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function a(e, t) {
                try {
                    return t(e)
                } catch (n) {
                    return e
                }
            }
        },
        vNVm: function(e, t, n) {
            "use strict";
            var r = n("zoAU");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !a,
                    c = o.useRef(),
                    u = o.useState(!1),
                    l = r(u, 2),
                    p = l[0],
                    d = l[1],
                    f = o.useCallback((function(e) {
                        c.current && (c.current(), c.current = void 0), n || p || e && e.tagName && (c.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = s.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return s.set(t, n = {
                                        id: t,
                                        observer: o,
                                        elements: r
                                    }), n
                                }(n),
                                o = r.id,
                                i = r.observer,
                                a = r.elements;
                            return a.set(e, t), i.observe(e),
                                function() {
                                    a.delete(e), i.unobserve(e), 0 === a.size && (i.disconnect(), s.delete(o))
                                }
                        }(e, (function(e) {
                            return e && d(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [n, t, p]);
                return o.useEffect((function() {
                    if (!a && !p) {
                        var e = i.requestIdleCallback((function() {
                            return d(!0)
                        }));
                        return function() {
                            return i.cancelIdleCallback(e)
                        }
                    }
                }), [p]), [f, p]
            };
            var o = n("q1tI"),
                i = n("0G5g"),
                a = "undefined" !== typeof IntersectionObserver;
            var s = new Map
        },
        xvhg: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (c) {
                            o = !0, i = c
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" === typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(t, "a", (function() {
                return o
            }))
        }
    },
    [
        [13, 2, 1, 0, 3, 5, 8, 11, 12, 13, 10, 15, 17]
    ]
]);