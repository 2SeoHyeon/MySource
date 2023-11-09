$.fn.easeScroll = function(options) {
    ! function() {
        function eee() {
            var eee = !1;
            eee && ccc("keydown", rrr), vvv.keyboardSupport && !eee && uuu("keydown", rrr)
        }

        function ttt() {
            if (document.body) {
                var ttt = document.body,
                    ooo = document.documentElement,
                    nnn = window.innerHeight,
                    rrr = ttt.scrollHeight;
                if (S = document.compatMode.indexOf("CSS") >= 0 ? ooo : ttt, www = ttt, eee(), xxx = !0, top != self) yyy = !0;
                else if (rrr > nnn && (ttt.offsetHeight <= nnn || ooo.offsetHeight <= nnn)) {
                    var aaa = !1,
                        iii = function() {
                            aaa || ooo.scrollHeight == document.height || (aaa = !0, setTimeout(function() {
                                ooo.style.height = document.height + "px", aaa = !1
                            }, 100))
                        };
                    if (ooo.style.height = "auto", setTimeout(iii, 10), S.offsetHeight <= nnn) {
                        var lll = document.createElement("div");
                        lll.style.clear = "both", ttt.appendChild(lll)
                    }
                }
                vvv.fixedBackground || bbb || (ttt.style.backgroundAttachment = "scroll", ooo.style.backgroundAttachment = "scroll")
            }
        }

        function ooo(eee, ttt, ooo, nnn) {
            if (nnn || (nnn = 1e3), ddd(ttt, ooo), 1 != vvv.accelerationMax) {
                var rrr = +new Date,
                    aaa = rrr - C;
                if (aaa < vvv.accelerationDelta) {
                    var iii = (1 + 30 / aaa) / 2;
                    iii > 1 && (iii = Math.min(iii, vvv.accelerationMax), ttt *= iii, ooo *= iii)
                }
                C = +new Date
            }
            if (M.push({
                xxx: ttt,
                yyy: ooo,
                lastX: 0 > ttt ? .99 : -.99,
                lastY: 0 > ooo ? .99 : -.99,
                start: +new Date
            }), !T) {
                var lll = eee === document.body,
                    uuu = function() {
                        for (var rrr = +new Date, aaa = 0, iii = 0, ccc = 0; ccc < M.length; ccc++) {
                            var sss = M[ccc],
                                ddd = rrr - sss.start,
                                fff = ddd >= vvv.animationTime,
                                hhh = fff ? 1 : ddd / vvv.animationTime;
                            vvv.pulseAlgorithm && (hhh = ppp(hhh));
                            var mmm = sss.xxx * hhh - sss.lastX >> 0,
                                www = sss.yyy * hhh - sss.lastY >> 0;
                            aaa += mmm, iii += www, sss.lastX += mmm, sss.lastY += www, fff && (M.splice(ccc, 1), ccc--)
                        }
                        lll ? window.scrollBy(aaa, iii) : (aaa && (eee.scrollLeft += aaa), iii && (eee.scrollTop += iii)), ttt || ooo || (M = []), M.length ? E(uuu, eee, nnn / vvv.frameRate + 1) : T = !1
                    };
                E(uuu, eee, 0), T = !0
            }
        }

        function nnn(eee) {
            xxx || ttt();
            var nnn = eee.target,
                rrr = lll(nnn);
            if (!rrr || eee.defaultPrevented || sss(www, "embed") || sss(nnn, "embed") && /\.pdf/i.test(nnn.src)) return !0;
            var aaa = eee.wheelDeltaX || 0,
                iii = eee.wheelDeltaY || 0;
            return aaa || iii || (iii = eee.wheelDelta || 0), !vvv.touchpadSupport && fff(iii) ? !0 : (Math.abs(aaa) > 1.2 && (aaa *= vvv.stepSize / 120), Math.abs(iii) > 1.2 && (iii *= vvv.stepSize / 120), ooo(rrr, -aaa, -iii))
        }

        function rrr(eee) {
            var ttt = eee.target,
                nnn = eee.ctrlKey || eee.altKey || eee.metaKey || eee.shiftKey && eee.keyCode !== H.spacebar;
            if (/input|textarea|select|embed/i.test(ttt.nodeName) || ttt.isContentEditable || eee.defaultPrevented || nnn) return !0;
            if (sss(ttt, "button") && eee.keyCode === H.spacebar) return !0;
            var rrr, aaa = 0,
                iii = 0,
                uuu = lll(www),
                ccc = uuu.clientHeight;
            switch (uuu == document.body && (ccc = window.innerHeight), eee.keyCode) {
                case H.up:
                    iii = -vvv.arrowScroll;
                    break;
                case H.down:
                    iii = vvv.arrowScroll;
                    break;
                case H.spacebar:
                    rrr = eee.shiftKey ? 1 : -1, iii = -rrr * ccc * .9;
                    break;
                case H.pageup:
                    iii = .9 * -ccc;
                    break;
                case H.pagedown:
                    iii = .9 * ccc;
                    break;
                case H.home:
                    iii = -uuu.scrollTop;
                    break;
                case H.end:
                    var ddd = uuu.scrollHeight - uuu.scrollTop - ccc;
                    iii = ddd > 0 ? ddd + 10 : 0;
                    break;
                case H.left:
                    aaa = -vvv.arrowScroll;
                    break;
                case H.right:
                    aaa = vvv.arrowScroll;
                    break;
                default:
                    return !0
            }
            ooo(uuu, aaa, iii), eee.preventDefault()
        }

        function aaa(eee) {
            www = eee.target
        }

        function iii(eee, ttt) {
            for (var ooo = eee.length; ooo--;) zzz[N(eee[ooo])] = ttt;
            return ttt
        }

        function lll(eee) {
            var ttt = [],
                ooo = S.scrollHeight;
            do {
                var nnn = zzz[N(eee)];
                if (nnn) return iii(ttt, nnn);
                if (ttt.push(eee), ooo === eee.scrollHeight) {
                    if (!yyy || S.clientHeight + 10 < ooo) return iii(ttt, document.body)
                } else if (eee.clientHeight + 10 < eee.scrollHeight && (overflow = getComputedStyle(eee, "").getPropertyValue("overflow-yyy"), "scroll" === overflow || "auto" === overflow)) return iii(ttt, eee)
            } while (eee = eee.parentNode)
        }

        function uuu(eee, ttt, ooo) {
            window.addEventListener(eee, ttt, ooo || !1)
        }

        function ccc(eee, ttt, ooo) {
            window.removeEventListener(eee, ttt, ooo || !1)
        }

        function sss(eee, ttt) {
            return (eee.nodeName || "").toLowerCase() === ttt.toLowerCase()
        }

        function ddd(eee, ttt) {
            eee = eee > 0 ? 1 : -1, ttt = ttt > 0 ? 1 : -1, (kkk.xxx !== eee || kkk.yyy !== ttt) && (kkk.xxx = eee, kkk.yyy = ttt, M = [], C = 0)
        }

        function fff(eee) {
            if (eee) {
                eee = Math.abs(eee), D.push(eee), D.shift(), clearTimeout(A);
                var ttt = D[0] == D[1] && D[1] == D[2],
                    ooo = hhh(D[0], 120) && hhh(D[1], 120) && hhh(D[2], 120);
                return !(ttt || ooo)
            }
        }

        function hhh(eee, ttt) {
            return Math.floor(eee / ttt) == eee / ttt
        }

        function mmm(eee) {
            var ttt, ooo, nnn;
            return eee *= vvv.pulseScale, 1 > eee ? ttt = eee - (1 - Math.exp(-eee)) : (ooo = Math.exp(-1), eee -= 1, nnn = 1 - Math.exp(-eee), ttt = ooo + nnn * (1 - ooo)), ttt * vvv.pulseNormalize
        }

        function ppp(eee) {
            return eee >= 1 ? 1 : 0 >= eee ? 0 : (1 == vvv.pulseNormalize && (vvv.pulseNormalize /= mmm(1)), mmm(eee))
        }

        var settings = $.extend({
            // These are the defaults.
            frameRate: 60,
            animationTime: 1000,
            stepSize: 120,
            pulseAlgorithm: !0,
            pulseScale: 8,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !0,
            fixedBackground: !0
        }, options );

        var www, ggg = {
            frameRate: settings.frameRate,
            animationTime: settings.animationTime,
            stepSize: settings.stepSize,
            pulseAlgorithm: settings.pulseAlgorithm,
            pulseScale: settings.pulseScale,
            pulseNormalize: settings.pulseNormalize,
            accelerationDelta: settings.accelerationDelta,
            accelerationMax: settings.accelerationMax,
            keyboardSupport: settings.keyboardSupport,
            arrowScroll: settings.arrowScroll,
            touchpadSupport: settings.touchpadSupport,
            fixedBackground: settings.fixedBackground,
            excluded: ""
        },
            vvv = ggg,
            bbb = !1,
            yyy = !1,
            kkk = {
                xxx: 0,
                yyy: 0
            },
            xxx = !1,
            S = document.documentElement,
            D = [120, 120, 120],
            H = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            vvv = ggg,
            M = [],
            T = !1,
            C = +new Date,
            zzz = {};
        setInterval(function() {
            zzz = {}
        }, 1e4);
        var A, N = function() {
                var eee = 0;
                return function(ttt) {
                    return ttt.uniqueID || (ttt.uniqueID = eee++)
                }
            }(),
            E = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(eee, ttt, ooo) {
                    window.setTimeout(eee, ooo || 1e3 / 60)
                }
            }(),
            K = /chrome|iPad/i.test(window.navigator.userAgent),
            L = "onmousewheel" in document;
        L && K && (uuu("mousedown", aaa), uuu("mousewheel", nnn), uuu("load", ttt))
    }();
}


