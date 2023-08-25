(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [14], {
        "EN/r": function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return l
            })), n.d(e, "j", (function() {
                return m
            })), n.d(e, "a", (function() {
                return f
            })), n.d(e, "e", (function() {
                return T
            })), n.d(e, "c", (function() {
                return M
            })), n.d(e, "b", (function() {
                return g
            })), n.d(e, "f", (function() {
                return x
            })), n.d(e, "g", (function() {
                return S
            })), n.d(e, "i", (function() {
                return A
            })), n.d(e, "d", (function() {
                return B
            })), n.d(e, "l", (function() {
                return E
            })), n.d(e, "h", (function() {
                return F
            }));
            var a = n("vJKn"),
                i = n.n(a),
                u = n("rg98"),
                s = n("wDBh"),
                p = n("4218"),
                r = n("Jjcv"),
                o = n("hO0D"),
                y = n("raOy");

            function l(t, e, n) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = Object(u.a)(i.a.mark((function t(e, n, a) {
                    var u, p, r, l, c, m;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, u = e.getSigner(), p = new s.ethers.Contract(a, o, u), t.next = 5, S(e, a);
                            case 5:
                                return r = t.sent, l = s.ethers.utils.parseUnits("".concat(n), r.decimals), t.next = 9, p.deposit(l.toString());
                            case 9:
                                return c = t.sent, y.notify.show("Success TX: ".concat(c.hash, "."), "success", 7e3), t.abrupt("return", c);
                            case 14:
                                t.prev = 14, t.t0 = t.catch(0), m = (t.t0.message.includes("execution reverted: Locking time not finished") ? "Locking time not finished" : t.t0.message.includes("execution reverted: Transfer amount must be greater than zero") && "Transfer amount must be greater than zero") || JSON.stringify(t.t0.message), y.notify.show("Error: ".concat(m), "error", 7e3);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 14]
                    ])
                })))).apply(this, arguments)
            }

            function m(t, e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, r;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, a = e.getSigner(), u = new s.ethers.Contract(n, o, a), t.next = 5, u.withdraw();
                            case 5:
                                return p = t.sent, y.notify.show("Success TX: ".concat(p.hash), "success", 7e3), t.abrupt("return", p);
                            case 10:
                                t.prev = 10, t.t0 = t.catch(0), console.log(t.t0.message), r = t.t0.message.includes("execution reverted: Locking time not finished") ? "Locking time not finished" : t.t0.message, y.notify.show("Error: ".concat(r), "error", 7e3);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }

            function f(t, e) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, l, c, m, d;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, a = e.getSigner(), u = new s.ethers.Contract(n, o, e), t.next = 5, u.rewardToken();
                            case 5:
                                return l = t.sent, c = new s.ethers.Contract(l, r, a), t.next = 9, c.approve(n, p.a.from("115792089237316195423570985008687907853269984665640564039457584007913129639935"));
                            case 9:
                                return m = t.sent, y.notify.show("Success TX: ".concat(m.hash), "success", 7e3), t.abrupt("return", m);
                            case 14:
                                t.prev = 14, t.t0 = t.catch(0), console.log(t.t0.message), d = t.t0.message.includes("execution reverted: Locking time not finished") ? "Locking time not finished" : t.t0.message.includes("undefined (reading 'getSigner')") && "You need to connect your wallet first", t.t0.message, y.notify.show("Error: ".concat(d), "error", 7e3);
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 14]
                    ])
                })))).apply(this, arguments)
            }

            function T(t, e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, y, l, c, m;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = e.getSigner(), u = new s.ethers.Contract(n, o, e), t.next = 4, u.rewardToken();
                            case 4:
                                return p = t.sent, y = new s.ethers.Contract(p, r, e), t.next = 8, y.balanceOf(a.getAddress());
                            case 8:
                                return l = t.sent.toString(), t.next = 11, y.decimals();
                            case 11:
                                return c = t.sent, m = s.ethers.utils.formatUnits(l, c), t.abrupt("return", parseInt(m));
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function M(t, e, n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = Object(u.a)(i.a.mark((function t(e, n, a) {
                    var u, p, o;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return u = e.getSigner(), p = new s.ethers.Contract(n, r, e), t.next = 4, p.balanceOf(u.getAddress());
                            case 4:
                                return o = t.sent.toString(), t.abrupt("return", parseInt(o) || 0);
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function g(t, e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, o;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = e.getSigner(), u = new s.ethers.Contract(n, r, e), t.next = 4, u.balanceOf(a.getAddress());
                            case 4:
                                return p = t.sent.toString(), o = s.ethers.utils.formatUnits(p, 18), t.abrupt("return", parseInt(o));
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function x(t, e) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, o;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = new s.ethers.Contract(n, r, e), t.next = 3, a.decimals();
                            case 3:
                                return u = t.sent, t.next = 6, a.name();
                            case 6:
                                return p = t.sent, t.next = 9, a.symbol();
                            case 9:
                                return o = t.sent, t.abrupt("return", {
                                    decimals: u,
                                    name: p,
                                    symbol: o
                                });
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function S(t, e) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, y, l, c;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = new s.ethers.Contract(n, o, e), t.next = 3, a.rewardToken();
                            case 3:
                                return u = t.sent, p = new s.ethers.Contract(u, r, e), t.next = 7, p.decimals();
                            case 7:
                                return y = t.sent, t.next = 10, p.name();
                            case 10:
                                return l = t.sent, t.next = 13, p.symbol();
                            case 13:
                                return c = t.sent, t.abrupt("return", {
                                    decimals: y,
                                    name: l,
                                    symbol: c
                                });
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function A(t, e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, r;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = e.getSigner(), u = new s.ethers.Contract(n, o, e), t.next = 4, a.getAddress();
                            case 4:
                                return p = t.sent, t.next = 7, u.getWalletAPR(p);
                            case 7:
                                return r = t.sent, t.abrupt("return", parseInt(r.toString()));
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function B(t, e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, y, l;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = new s.ethers.Contract(n, o, e), t.next = 3, a.rewardToken();
                            case 3:
                                return u = t.sent, p = e.getSigner(), y = new s.ethers.Contract(u, r, e), t.next = 8, y.allowance(p.getAddress(), n);
                            case 8:
                                return l = t.sent, t.abrupt("return", l.toString() > 0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function E(t, e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, r, y;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = e.getSigner(), u = new s.ethers.Contract(n, o, e), t.next = 4, a.getAddress();
                            case 4:
                                return p = t.sent, t.next = 7, u.pendingReward(p);
                            case 7:
                                return r = t.sent, t.next = 10, S(e, n);
                            case 10:
                                return y = t.sent, t.abrupt("return", s.ethers.utils.formatUnits(r.toString(), y.decimals));
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function F(t, e) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = Object(u.a)(i.a.mark((function t(e, n) {
                    var a, u, p, r, y, l;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = e.getSigner(), u = new s.ethers.Contract(n, o, e), t.next = 4, a.getAddress();
                            case 4:
                                return p = t.sent, t.next = 7, u.userInfo(p);
                            case 7:
                                return r = t.sent, y = r.amount, t.next = 11, S(e, n);
                            case 11:
                                return l = t.sent, t.abrupt("return", {
                                    amount: s.ethers.utils.formatUnits(y.toString(), l.decimals)
                                });
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        Jjcv: function(t) {
            t.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_maxBuyAmount","type":"uint256"}],"name":"MaxBuyAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_maxSellAmount","type":"uint256"}],"name":"MaxSellAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiquidity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"notbot","type":"address"}],"name":"delBot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"month","type":"uint8"},{"internalType":"uint16","name":"year","type":"uint16"}],"name":"getDaysInMonth","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getHour","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getMinute","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getSecond","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getWeekday","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getYear","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"year","type":"uint16"}],"name":"isLeapYear","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"year","type":"uint256"}],"name":"leapYearsBefore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"manualsend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manualswap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"marketOpened","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"openTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blocks","type":"uint256"}],"name":"setBlocksToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"bots_","type":"address[]"}],"name":"setBots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"onoff","type":"bool"}],"name":"setCheckHolidaysEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"onoff","type":"bool"}],"name":"setCooldownEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"developmentFee","type":"uint256"}],"name":"setDevelopmentFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"developmentWallet","type":"address"}],"name":"setDevelopmentWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"foundationFee","type":"uint256"}],"name":"setFoundationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"liquidityWallet","type":"address"}],"name":"setLiquidityWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"closingTimeHr","type":"uint8"}],"name":"setMarketClosingTimeHr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"onoff","type":"bool"}],"name":"setMarketHoursEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"openingTimeHr","type":"uint8"}],"name":"setMarketOpeningTimeHr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"openingTimeMin","type":"uint8"}],"name":"setMarketOpeningTimeMin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketingFee","type":"uint256"}],"name":"setMarketingFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxBuy","type":"uint256"}],"name":"setMaxBuyAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxSell","type":"uint256"}],"name":"setMaxSellAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxToken","type":"uint256"}],"name":"setMaxWalletAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"projectWallet","type":"address"}],"name":"setProjectWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rewardFee","type":"uint256"}],"name":"setRewardFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"saturday","type":"uint8"}],"name":"setSaturday","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"onoff","type":"bool"}],"name":"setSpecialEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"sunday","type":"uint8"}],"name":"setSunday","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"onoff","type":"bool"}],"name":"setSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"setSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawStuckETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        hO0D: function(t) {
            t.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_apr","type":"uint256"},{"internalType":"uint256","name":"_lockDurationInDays","type":"uint256"},{"internalType":"uint256","name":"_exitPenaltyPerc","type":"uint256"},{"internalType":"bool","name":"_canCompoundOrStakeMore","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Compound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"addBoost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"amountPerBoost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateNewRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canCompoundOrStakeMore","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exitPenaltyPerc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getWalletAPR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getWalletBoostedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"holderUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxBoostAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"internalType":"uint256","name":"accTokensPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"removeBoost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"authorized","type":"bool"}],"name":"setAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBoostedStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newApr","type":"uint256"}],"name":"updateApr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMaxBoostAmount","type":"uint256"},{"internalType":"uint256","name":"newAmountPerBoost","type":"uint256"}],"name":"updateBoosters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"compoundEnabled","type":"bool"}],"name":"updateCanCompoundOrStakeMore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPenaltyPerc","type":"uint256"}],"name":"updateExitPenalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"daysForLock","type":"uint256"}],"name":"updateLockDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"boostedAmount","type":"uint256"},{"internalType":"uint256","name":"boosts","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"pendingPayout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        }
    }
]);