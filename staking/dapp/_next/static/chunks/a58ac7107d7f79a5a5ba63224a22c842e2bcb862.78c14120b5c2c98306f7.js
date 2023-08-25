(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [20], {
        CCKa: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n("nKUr"),
                r = n("vJKn"),
                s = n.n(r),
                i = n("rg98"),
                a = n("q1tI"),
                o = n("vOnD"),
                l = (Object(o.a)("a").withConfig({
                    displayName: "styles__ConnectButton",
                    componentId: "sc-1xkdu0f-0"
                })({
                    cursor: "pointer",
                    padding: "5px 30px",
                    borderRadius: 2,
                    fontSize: 18,
                    fontWeight: "bold",
                    background: "white",
                    color: "black",
                    font: "Open Sans"
                }), Object(o.a)("img").withConfig({
                    displayName: "styles__ConnectButtonImage",
                    componentId: "sc-1xkdu0f-1"
                })({
                    height: 30
                }), Object(o.a)("div").withConfig({
                    displayName: "styles__Container",
                    componentId: "sc-1xkdu0f-2"
                })({
                    borderTop: "1px solid #666666",
                    borderBottom: "1px solid #666666",
                    borderLeft: "1px solid #666666",
                    padding: 5,
                    borderRadius: "8px 0 0 8px",
                    height: 38,
                    width: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }), Object(o.a)("div").withConfig({
                    displayName: "styles__MainContainer",
                    componentId: "sc-1xkdu0f-3"
                })({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px"
                })),
                d = (n("/MKj"), n("QxG1"));
            n("EN/r"), t.default = function() {
                var e = Object(a.useState)(""),
                    t = e[0],
                    n = e[1],
                    r = Object(d.a)(),
                    o = r.connectWallet,
                    u = r.disconnectWallet,
                    j = r.provider;
                r.error;
                Object(a.useEffect)((function() {
                    var e = function() {
                        var e = Object(i.a)(s.a.mark((function e() {
                            var t, c;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = j.getSigner(), e.next = 3, t.getAddress();
                                    case 3:
                                        c = e.sent, n(c);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    j ? e() : n("")
                }), [j]);
                var b, f = function() {
                    var e = Object(i.a)(s.a.mark((function e() {
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o();
                                case 2:
                                    window.location.reload();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(c.jsx)(l, {
                    children: Object(c.jsx)("div", {
                        className: "button",
                        href: "#",
                        onClick: t ? function() {
                            u(), window.location.reload()
                        } : f,
                        style: {
                            cursor: "pointer",
                            fontSize: "1em"
                        },
                        children: t ? (b = t, b.slice(0, 6) + "..." + b.slice(-4)) : "CONNECT"
                    })
                })
            }
        },
        R055: function(e, t, n) {
            "use strict";
            var c = this && this.__createBinding || (Object.create ? function(e, t, n, c) {
                    void 0 === c && (c = n), Object.defineProperty(e, c, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, c) {
                    void 0 === c && (c = n), e[c] = t[n]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                s = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && c(t, e, n);
                    return r(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = s(n("q1tI"));
            t.default = function(e) {
                var t = i.useState(0),
                    n = t[0],
                    c = t[1],
                    r = e.transitionDuration || 400,
                    s = e.delay || 50,
                    a = e.wrapperTag || "div",
                    o = e.childTag || "div",
                    l = "undefined" === typeof e.visible || e.visible;
                return i.useEffect((function() {
                    var t = i.default.Children.count(e.children);
                    if (l || (t = 0), t == n) {
                        var a = setTimeout((function() {
                            e.onComplete && e.onComplete()
                        }), r);
                        return function() {
                            return clearTimeout(a)
                        }
                    }
                    var o = t > n ? 1 : -1,
                        d = setTimeout((function() {
                            c(n + o)
                        }), s);
                    return function() {
                        return clearTimeout(d)
                    }
                }), [i.default.Children.count(e.children), s, n, l, r]), i.default.createElement(a, {
                    className: e.className
                }, i.default.Children.map(e.children, (function(t, c) {
                    return i.default.createElement(o, {
                        className: e.childClassName,
                        style: {
                            transition: "opacity " + r + "ms, transform " + r + "ms",
                            transform: n > c ? "none" : "translateY(20px)",
                            opacity: n > c ? 1 : 0
                        }
                    }, t)
                })))
            }
        },
        ynQC: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return k
            }));
            var c = n("cpVT"),
                r = n("nKUr"),
                s = n("vJKn"),
                i = n.n(s),
                a = n("rg98"),
                o = n("q1tI"),
                l = n.n(o),
                d = (n("HToB"), n("raOy")),
                u = n("/MKj"),
                j = n("QxG1"),
                b = n("hQB0"),
                f = n("20a2"),
                h = n("/kLi"),
                O = n("EN/r"),
                p = (n("CCKa"), n("iae6")),
                x = n("R/WZ"),
                m = n("R055"),
                v = n.n(m);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    t && (c = c.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, c)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        Object(c.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = "0xb52edb5cf2d88e78191f21b027f53d07f4ab7e5d",
                N = "0xd768acb98bd756cfbdc4983dbe4230480a2c68d5",
                S = function(e) {
                    var t = Object(o.useState)(0),
                        n = t[0],
                        c = (t[1], Object(o.useState)(!1)),
                        s = c[0],
                        p = c[1],
                        x = Object(o.useState)(0),
                        m = x[0],
                        g = x[1],
                        y = Object(o.useState)(0),
                        S = y[0],
                        T = y[1],
                        E = Object(o.useState)(w),
                        D = E[0],
                        _ = E[1],
                        A = Object(o.useState)(0),
                        I = A[0],
                        P = A[1],
                        R = Object(o.useState)(0),
                        K = R[0],
                        Y = R[1],
                        z = Object(o.useState)(void 0),
                        B = z[0],
                        W = z[1],
                        M = Object(o.useState)(0),
                        q = M[0],
                        G = M[1],
                        L = Object(o.useState)(0),
                        F = L[0],
                        H = L[1],
                        J = Object(o.useState)({}),
                        Q = (J[0], J[1], Object(o.useState)(void 0)),
                        U = (Q[0], Q[1], Object(o.useState)(!1)),
                        V = U[0],
                        $ = U[1],
                        Z = Object(o.useState)("green"),
                        X = Z[0],
                        ee = Z[1],
                        te = Object(o.useState)("Token"),
                        ne = te[0],
                        ce = te[1],
                        re = Object(o.useState)(0),
                        se = re[0],
                        ie = re[1],
                        ae = Object(o.useState)([]),
                        oe = ae[0],
                        le = (ae[1], Object(o.useState)(!1)),
                        de = le[0],
                        ue = le[1],
                        je = (Object(b.useSession)().data, Object(f.useRouter)(), "white"),
                        be = Object(j.a)().provider,
                        fe = (Object(u.b)(), C(), function() {
                            var e = Object(a.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(O.a)(be, D);
                                        case 2:
                                            return t = e.sent, e.next = 5, t.wait();
                                        case 5:
                                            pe(), d.notify.show("Approve Done!", "success", 7e3);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()),
                        he = function() {
                            var e = Object(a.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (V) {
                                                e.next = 3;
                                                break
                                            }
                                            return d.notify.show("Error: You need to approve first", "error", 7e3), e.abrupt("return");
                                        case 3:
                                            return e.next = 5, Object(O.k)(be, parseInt(I), D);
                                        case 5:
                                            return t = e.sent, e.next = 8, t.wait();
                                        case 8:
                                            d.notify.show("Stake Done!", "success", 7e3), ge(), me(), ve();
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Oe = function() {
                            var e = Object(a.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(O.j)(be, D);
                                        case 2:
                                            if (!(t = e.sent)) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 6, t.wait();
                                        case 6:
                                            d.notify.show("Redeem Done!", "success", 7e3), me(), ve();
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        pe = function() {
                            Object(O.d)(be, D).then((function(e) {
                                $(e)
                            }))
                        };
                    l.a.useEffect((function() {
                        ee(je), D || alert("You need to add contractAddress in your url params"), be ? (ue(!0), p(!0), Object(O.c)(be, "0xf43f8ca2a52574edd3a38d9aff7552d4571302ce").then((function(e) {
                            console.log("Your NFT's balance is ".concat(e)), g(e || 0)
                        })).finally((function() {
                            setTimeout((function() {
                                p(!1)
                            }), 1e3)
                        })), ve(), pe(), setInterval(pe, 1e4), Object(O.e)(be, D).then((function(e) {
                            Y(e), P(e)
                        })), xe(), ge(), me(), setTimeout((function() {
                            ue(!1)
                        }), 1e3), setTimeout(ve, 6e4)) : ue(!1)
                    }), [be, D]), l.a.useEffect((function() {
                        0 == S ? _(w) : 1 == S && _(N)
                    }), [S]);
                    var xe = function() {
                            var e = Object(a.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(O.g)(be, D);
                                        case 2:
                                            t = e.sent, ce(t.symbol);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        me = function() {
                            var e = Object(a.a)(i.a.mark((function e() {
                                var t, n;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(O.h)(be, D);
                                        case 2:
                                            t = e.sent, n = t.amount, console.log(n), H(n);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ve = function() {
                            var e = Object(a.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(O.l)(be, D);
                                        case 2:
                                            t = e.sent, G(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ge = function() {
                            var e = Object(a.a)(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(O.i)(be, D);
                                        case 2:
                                            t = e.sent, ie(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return l.a.useEffect((function() {
                        if (oe && oe.length > 0) {
                            var e = new Date,
                                t = new Date;
                            t.setDate(e.getDate() + oe[n].nights), W(t)
                        }
                    }), [oe]), Object(r.jsxs)("div", {
                        className: "container-fluid py-4",
                        children: [Object(r.jsxs)("div", {
                            className: "row align-items-center",
                            children: [Object(r.jsx)("div", {
                                className: "col-12 col-md-12 ",
                                children: Object(r.jsx)(k, {
                                    active: 0 == S,
                                    title: "Staking APY 50%",
                                    subtitle: "Available for everyone",
                                    onClick: function() {
                                        T(0)
                                    }
                                })
                            }), Object(r.jsx)("div", {
                                className: "col-12 col-md-12",
                                children: Object(r.jsx)(k, {
                                    loading: s,
                                    active: 1 == S,
                                    disabled: 0 == m,
                                    title: "Staking APY 75%",
                                    subtitle: m > 0 ? "You can use this pool because you have ".concat(m, " nfts") : "Not available for your account. Requires holding at least 1 $MING NFT",
                                    onClick: function() {
                                        m > 0 && T(1)
                                    }
                                })
                            })]
                        }), de && Object(r.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 50,
                                flexDirection: "column"
                            },
                            children: [Object(r.jsx)("img", {
                                class: "w-100 position-relative z-index-2 pt-4 animation_1",
                                src: "",
                                alt: "",
                                style: {
                                    padding: 10,
                                    maxWidth: 100,
                                    maxHeight: 100,
                                    objectFit: "contain"
                                }
                            }), Object(r.jsx)(v.a, {
                                children: Object(r.jsx)("h5", {
                                    style: {
                                        fontWeight: 800
                                    },
                                    children: "Loading.."
                                })
                            })]
                        }) || Object(r.jsx)(r.Fragment, {
                            children: Object(r.jsxs)("div", {
                                className: "row mt-4 pb-0",
                                children: [Object(r.jsx)("div", {
                                    className: "col-lg-12 mb-lg-0 mb-0",
                                    children: Object(r.jsx)("div", {
                                        className: "bg-gradient-primary",
                                        style: {
                                            borderRadius: 10,
                                            overflow: "hidden"
                                        },
                                        children: Object(r.jsx)("div", {
                                            className: "card-body p-3",
                                            children: Object(r.jsxs)("div", {
                                                className: "row",
                                                children: [Object(r.jsx)("div", {
                                                    className: "col-lg-8",
                                                    children: Object(r.jsxs)("div", {
                                                        className: "d-flex flex-column h-100",
                                                        children: [Object(r.jsx)("p", {
                                                            className: "mb-1 pt-2 text-bold",
                                                            children: "Staking"
                                                        }), Object(r.jsx)("h5", {
                                                            className: "font-weight-bolder",
                                                            style: {
                                                                color: "#fff"
                                                            },
                                                            children: "STAKE $"
                                                        }), Object(r.jsxs)(h.m, {
                                                            children: [Object(r.jsxs)(h.a, {
                                                                children: [Object(r.jsxs)(h.c, {
                                                                    children: ["Balance:", " "]
                                                                }), Object(r.jsx)(h.d, {
                                                                    children: K
                                                                }), Object(r.jsx)(h.b, {
                                                                    color: X,
                                                                    children: ne
                                                                })]
                                                            }), Object(r.jsx)(h.n, {
                                                                value: Number(I).toString(),
                                                                placeholder: "Amount",
                                                                max: K,
                                                                onChange: function(e) {
                                                                    e.target.value < K && P(e.target.value)
                                                                }
                                                            }), Object(r.jsxs)(h.g, {
                                                                children: [Object(r.jsxs)(h.i, {
                                                                    children: [Object(r.jsx)(h.t, {
                                                                        color: "white",
                                                                        bold: !0,
                                                                        children: "TOTAL AMOUNT"
                                                                    }), Object(r.jsx)(h.u, {
                                                                        color: "white",
                                                                        bold: !0,
                                                                        children: Object(r.jsx)(h.f, {
                                                                            children: I
                                                                        })
                                                                    })]
                                                                }), Object(r.jsxs)(h.i, {
                                                                    children: [Object(r.jsx)(h.t, {
                                                                        color: X,
                                                                        children: "APY"
                                                                    }), Object(r.jsx)(h.u, {
                                                                        children: Object(r.jsxs)(h.f, {
                                                                            children: [se, "%"]
                                                                        })
                                                                    })]
                                                                }), se > 0 && Object(r.jsxs)(h.i, {
                                                                    children: [Object(r.jsx)(h.t, {
                                                                        color: X,
                                                                        children: "ESTIMATED YEARLY EARNINGS"
                                                                    }), Object(r.jsx)(h.u, {
                                                                        children: Object(r.jsxs)(h.f, {
                                                                            children: [(I * (se / 100)).toFixed(2), " ", ne]
                                                                        })
                                                                    })]
                                                                }), B && Object(r.jsxs)(h.i, {
                                                                    children: [Object(r.jsx)(h.t, {
                                                                        color: X,
                                                                        children: "REDEMPTION DATE"
                                                                    }), Object(r.jsx)(h.u, {
                                                                        children: B.toLocaleString("en-GB")
                                                                    })]
                                                                }), be && Object(r.jsxs)(h.h, {
                                                                    children: [!V && Object(r.jsx)(h.e, {
                                                                        secondaryColor: X,
                                                                        onClick: fe,
                                                                        children: "APPROVE"
                                                                    }), V && Object(r.jsx)(h.e, {
                                                                        secondaryColor: X,
                                                                        onClick: he,
                                                                        children: "STAKE"
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), 
                                                // Object(r.jsx)("div", {
                                                //     className: "col-lg-4 ms-auto text-center",
                                                //     children: Object(r.jsx)("div", {
                                                //         className: "border-radius-lg h-100",
                                                //         children: Object(r.jsx)("div", {
                                                //             className: "position-relative d-flex align-items-center justify-content-center h-100",
                                                //             children: Object(r.jsx)(h.o, {
                                                //                 className: "w-100 position-relative z-index-2 pt-4 animation_1",
                                                //                 src: "/staking/dapp/assets/img/logo.png",
                                                //                 alt: "rocket"
                                                //             })
                                                //         })
                                                //     })
                                                // })
                                            ]
                                            })
                                        })
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "col-lg-12",
                                    children: Object(r.jsx)("div", {
                                        className: "card h-100 p-3 bg-gradient-primary-inverted",
                                        children: Object(r.jsx)("div", {
                                            className: "border-radius-lg h-100",
                                            children: Object(r.jsxs)("div", {
                                                className: "card-body position-relative z-index-1 d-flex flex-column h-100 p-3",
                                                children: [Object(r.jsxs)(h.q, {
                                                    children: [Object(r.jsxs)(h.p, {
                                                        borderColor: X,
                                                        children: [Object(r.jsxs)(h.r, {
                                                            color: X,
                                                            children: [Object(r.jsx)("b", {
                                                                children: ne
                                                            }), " STAKED"]
                                                        }), Object(r.jsx)(h.s, {
                                                            color: X,
                                                            children: F
                                                        })]
                                                    }), Object(r.jsxs)(h.p, {
                                                        borderColor: X,
                                                        children: [Object(r.jsxs)(h.r, {
                                                            color: X,
                                                            children: [Object(r.jsx)("b", {
                                                                children: ne
                                                            }), " EARNINGS"]
                                                        }), Object(r.jsx)(h.s, {
                                                            color: X,
                                                            children: q
                                                        })]
                                                    })]
                                                }), Object(r.jsx)(h.q, {
                                                    style: {
                                                        marginTop: 15,
                                                        marginBottom: 15,
                                                        flex: 1,
                                                        alignItems: "flex-start"
                                                    },
                                                    children: Object(r.jsxs)(h.j, {
                                                        children: [Object(r.jsxs)(h.k, {
                                                            children: [Object(r.jsx)("img", {
                                                                className: "w-100",
                                                                style: {
                                                                    maxWidth: 40,
                                                                    maxHeigth: 40
                                                                },
                                                                src: "",
                                                                alt: ""
                                                            }), "Your earnings"]
                                                        }), Object(r.jsxs)(h.l, {
                                                            children: [q, " ", Object(r.jsx)("img", {
                                                                className: "w-100 position-relative z-index-2",
                                                                style: {
                                                                    maxWidth: 40,
                                                                    maxHeight: 40
                                                                },
                                                                src: "",
                                                                alt: ""
                                                            })]
                                                        })]
                                                    })
                                                }), Object(r.jsx)(h.q, {
                                                    style: {
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        width: "100%"
                                                    },
                                                    children: Object(r.jsx)(h.e, {
                                                        secondaryColor: X,
                                                        onClick: Oe,
                                                        children: "UNSTAKE"
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                k = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        c = e.iconComponent,
                        s = e.style,
                        i = e.loading,
                        a = e.active,
                        o = e.disabled,
                        l = e.onClick;
                    return Object(r.jsxs)("div", {
                        className: "card bg-gradient-primary effect-hover",
                        style: y({
                            opacity: o ? .5 : a ? 1 : .9,
                            // border: a ? "3px dashed rgba(255,255,255,.8)" : "3px dashed transparent",
                            transform: a ? "scale(1)" : "scale(.8)"
                        }, s),
                        children: [i && Object(r.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0,0,0,.75)",
                                borderRadius: 10,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 9999
                            },
                            children: Object(r.jsx)(p.a, {
                                style: {
                                    color: "#F8B320"
                                }
                            })
                        }), Object(r.jsx)("div", {
                            onClick: l,
                            className: "card-body p-3",
                            children: Object(r.jsxs)("div", {
                                className: "row",
                                children: [Object(r.jsx)("div", {
                                    className: "col-8",
                                    children: Object(r.jsxs)("div", {
                                        className: "numbers",
                                        children: [Object(r.jsx)("p", {
                                            className: "text-sm mb-0 text-capitalize font-weight-bold",
                                            children: Object(r.jsx)("span", {
                                                style: {
                                                    fontSize: "1.2em",
                                                    color: "white",
                                                    fontWeight: 800,
                                                    textDecoration: "underline"
                                                },
                                                children: t
                                            })
                                        }), Object(r.jsx)("h5", {
                                            className: "font-weight-bolder mb-0 text-white",
                                            style: {
                                                fontSize: "0.8em",
                                                marginTop: 5
                                            },
                                            children: n
                                        })]
                                    })
                                }), Object(r.jsxs)("div", {
                                    className: "col-4 text-end",
                                    children: [c && c, !c && Object(r.jsx)("div", {
                                        className: "icon icon-shape bg-gradient-primary shadow text-center border-radius-md transition-property-transform animation-rotate animation-1times",
                                        children: Object(r.jsx)("i", {
                                            className: "",
                                            "aria-hidden": "true"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                };
            S.getInitialProps = function(e) {
                return {
                    secondaryColor: "blue"
                }
            };
            var C = Object(x.a)((function(e) {
                return {
                    twitterLogin: {
                        maxWidth: "60%",
                        background: "white",
                        borderRadius: 8,
                        marginTop: 10,
                        padding: 15,
                        cursor: "pointer"
                    }
                }
            }));
            t.b = S
        }
    }
]);