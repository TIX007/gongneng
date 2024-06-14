### LODOP打印

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-cbe8f212", "chunk-2d0a43d9"], {
    "0045": function(T, _, P) {
        "use strict";
        var O = P("00f6")
          , L = P("a4b3")
          , E = RangeError;
        T.exports = function(T, _, P, D) {
            var S = O(T)
              , A = L(P)
              , e = A < 0 ? S + A : A;
            if (e >= S || e < 0)
                throw new E("Incorrect index");
            for (var N = new _(S), I = 0; I < S; I++)
                N[I] = I === e ? D : T[I];
            return N
        }
    },
    "0630": function(T, _, P) {
        "use strict";
        var O = P("d7c5")
          , L = P("7d6f");
        T.exports = "process" === L(O.process)
    },
    "0abb": function(T, _, P) {
        "use strict";
        T.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
    },
    "11d0": function(T, _, P) {
        "use strict";
        var O, L, E, D, S = P("d7c5"), A = P("6b4f"), e = P("57d6"), N = S.structuredClone, I = S.ArrayBuffer, n = S.MessageChannel, R = !1;
        if (e)
            R = function(T) {
                N(T, {
                    transfer: [T]
                })
            }
            ;
        else if (I)
            try {
                n || (O = A("worker_threads"),
                O && (n = O.MessageChannel)),
                n && (L = new n,
                E = new I(2),
                D = function(T) {
                    L.port1.postMessage(null, [T])
                }
                ,
                2 === E.byteLength && (D(E),
                0 === E.byteLength && (R = D)))
            } catch (t) {}
        T.exports = R
    },
    "17e4": function(T, _, P) {
        "use strict";
        var O = P("927e")
          , L = P("535e")
          , E = P("cd42")
          , D = P("1d3b")
          , S = P("4ccc")
          , A = D("IE_PROTO")
          , e = Object
          , N = e.prototype;
        T.exports = S ? e.getPrototypeOf : function(T) {
            var _ = E(T);
            if (O(_, A))
                return _[A];
            var P = _.constructor;
            return L(P) && _ instanceof P ? P.prototype : _ instanceof e ? N : null
        }
    },
    1976: function(T, _, P) {
        "use strict";
        var O = P("c3a3")
          , L = P("7b13")
          , E = P("d049")
          , D = O(O.bind);
        T.exports = function(T, _) {
            return L(T),
            void 0 === _ ? T : E ? D(T, _) : function() {
                return T.apply(_, arguments)
            }
        }
    },
    "1b74": function(T, _, P) {
        "use strict";
        var O = P("d7c5")
          , L = P("c34b")
          , E = P("7e61")
          , D = P("e018")
          , S = P("6003")
          , A = P("ba53")
          , e = P("11d0")
          , N = P("57d6")
          , I = O.structuredClone
          , n = O.ArrayBuffer
          , R = O.DataView
          , t = O.TypeError
          , o = Math.min
          , i = n.prototype
          , r = R.prototype
          , Y = L(i.slice)
          , m = E(i, "resizable", "get")
          , l = E(i, "maxByteLength", "get")
          , a = L(r.getInt8)
          , s = L(r.setInt8);
        T.exports = (N || e) && function(T, _, P) {
            var O, L = A(T), E = void 0 === _ ? L : D(_), i = !m || !m(T);
            if (S(T))
                throw new t("ArrayBuffer is detached");
            if (N && (T = I(T, {
                transfer: [T]
            }),
            L === E && (P || i)))
                return T;
            if (L >= E && (!P || i))
                O = Y(T, 0, E);
            else {
                var r = P && !i && l ? {
                    maxByteLength: l(T)
                } : void 0;
                O = new n(E,r);
                for (var F = new R(T), p = new R(O), g = o(E, L), z = 0; z < g; z++)
                    s(p, z, a(F, z))
            }
            return N || e(T),
            O
        }
    },
    "20c0": function(T, _, P) {
        "use strict";
        var O = P("96c4")
          , L = P("c34b")
          , E = P("7b13")
          , D = P("391d")
          , S = O.aTypedArray
          , A = O.getTypedArrayConstructor
          , e = O.exportTypedArrayMethod
          , N = L(O.TypedArrayPrototype.sort);
        e("toSorted", (function(T) {
            void 0 !== T && E(T);
            var _ = S(this)
              , P = D(A(_), _);
            return N(P, T)
        }
        ))
    },
    2418: function(T, _, P) {
        "use strict";
        var O = P("b0d0")
          , L = TypeError;
        T.exports = function(T) {
            var _ = O(T, "number");
            if ("number" == typeof _)
                throw new L("Can't convert number to bigint");
            return BigInt(_)
        }
    },
    "29ae": function(T, _, P) {
        "use strict";
        var O = P("a4b3")
          , L = RangeError;
        T.exports = function(T) {
            var _ = O(T);
            if (_ < 0)
                throw new L("The argument can't be less than 0");
            return _
        }
    },
    "391d": function(T, _, P) {
        "use strict";
        var O = P("00f6");
        T.exports = function(T, _, P) {
            var L = 0
              , E = arguments.length > 2 ? P : O(_)
              , D = new T(E);
            while (E > L)
                D[L] = _[L++];
            return D
        }
    },
    "3fef": function(T, _, P) {
        "use strict";
        var O = P("0045")
          , L = P("96c4")
          , E = P("7995")
          , D = P("a4b3")
          , S = P("2418")
          , A = L.aTypedArray
          , e = L.getTypedArrayConstructor
          , N = L.exportTypedArrayMethod
          , I = !!function() {
            try {
                new Int8Array(1)["with"](2, {
                    valueOf: function() {
                        throw 8
                    }
                })
            } catch (T) {
                return 8 === T
            }
        }();
        N("with", {
            with: function(T, _) {
                var P = A(this)
                  , L = D(T)
                  , N = E(P) ? S(_) : +_;
                return O(P, e(P), L, N)
            }
        }["with"], !I)
    },
    "4ccc": function(T, _, P) {
        "use strict";
        var O = P("fb8a");
        T.exports = !O((function() {
            function T() {}
            return T.prototype.constructor = null,
            Object.getPrototypeOf(new T) !== T.prototype
        }
        ))
    },
    "57d6": function(T, _, P) {
        "use strict";
        var O = P("d7c5")
          , L = P("fb8a")
          , E = P("85cb")
          , D = P("bdaa")
          , S = P("0abb")
          , A = P("0630")
          , e = O.structuredClone;
        T.exports = !!e && !L((function() {
            if (S && E > 92 || A && E > 94 || D && E > 97)
                return !1;
            var T = new ArrayBuffer(8)
              , _ = e(T, {
                transfer: [T]
            });
            return 0 !== T.byteLength || 8 !== _.byteLength
        }
        ))
    },
    "57e4": function(T, _, P) {
        "use strict";
        var O = P("777c")
          , L = P("96c4")
          , E = L.aTypedArray
          , D = L.exportTypedArrayMethod
          , S = L.getTypedArrayConstructor;
        D("toReversed", (function() {
            return O(E(this), S(this))
        }
        ))
    },
    "59c4": function(T, _, P) {
        "use strict";
        var O = P("316d")
          , L = P("1b74");
        L && O({
            target: "ArrayBuffer",
            proto: !0
        }, {
            transferToFixedLength: function() {
                return L(this, arguments.length ? arguments[0] : void 0, !1)
            }
        })
    },
    "5a69": function(T, _, P) {
        "use strict";
        var O = P("96c4")
          , L = P("f8ed").findLastIndex
          , E = O.aTypedArray
          , D = O.exportTypedArrayMethod;
        D("findLastIndex", (function(T) {
            return L(E(this), T, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    "5c1a": function(T, _, P) {
        "use strict";
        var O = P("b79b")
          , L = P("6b00");
        T.exports = function(T, _, P) {
            return P.get && O(P.get, _, {
                getter: !0
            }),
            P.set && O(P.set, _, {
                setter: !0
            }),
            L.f(T, _, P)
        }
    },
    6003: function(T, _, P) {
        "use strict";
        var O = P("c34b")
          , L = P("ba53")
          , E = O(ArrayBuffer.prototype.slice);
        T.exports = function(T) {
            if (0 !== L(T))
                return !1;
            try {
                return E(T, 0, 0),
                !1
            } catch (_) {
                return !0
            }
        }
    },
    6985: function(T, _, P) {
        "use strict";
        var O = P("18dc")
          , L = P("5c1a")
          , E = P("6003")
          , D = ArrayBuffer.prototype;
        O && !("detached"in D) && L(D, "detached", {
            configurable: !0,
            get: function() {
                return E(this)
            }
        })
    },
    "6b4f": function(T, _, P) {
        "use strict";
        var O = P("0630");
        T.exports = function(T) {
            try {
                if (O)
                    return Function('return require("' + T + '")')()
            } catch (_) {}
        }
    },
    "777c": function(T, _, P) {
        "use strict";
        var O = P("00f6");
        T.exports = function(T, _) {
            for (var P = O(T), L = new _(P), E = 0; E < P; E++)
                L[E] = T[P - E - 1];
            return L
        }
    },
    7995: function(T, _, P) {
        "use strict";
        var O = P("3f85");
        T.exports = function(T) {
            var _ = O(T);
            return "BigInt64Array" === _ || "BigUint64Array" === _
        }
    },
    "96c4": function(T, _, P) {
        "use strict";
        var O, L, E, D = P("d27f"), S = P("18dc"), A = P("d7c5"), e = P("535e"), N = P("b548"), I = P("927e"), n = P("3f85"), R = P("d52b"), t = P("5910"), o = P("af28"), i = P("5c1a"), r = P("47e7"), Y = P("17e4"), m = P("d4d7"), l = P("fef8"), a = P("ec81"), s = P("5a28"), F = s.enforce, p = s.get, g = A.Int8Array, z = g && g.prototype, c = A.Uint8ClampedArray, d = c && c.prototype, X = g && Y(g), h = z && Y(z), u = Object.prototype, y = A.TypeError, w = l("toStringTag"), v = a("TYPED_ARRAY_TAG"), f = "TypedArrayConstructor", C = D && !!m && "Opera" !== n(A.opera), x = !1, b = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, j = {
            BigInt64Array: 8,
            BigUint64Array: 8
        }, B = function(T) {
            if (!N(T))
                return !1;
            var _ = n(T);
            return "DataView" === _ || I(b, _) || I(j, _)
        }, M = function(T) {
            var _ = Y(T);
            if (N(_)) {
                var P = p(_);
                return P && I(P, f) ? P[f] : M(_)
            }
        }, H = function(T) {
            if (!N(T))
                return !1;
            var _ = n(T);
            return I(b, _) || I(j, _)
        }, W = function(T) {
            if (H(T))
                return T;
            throw new y("Target is not a typed array")
        }, Q = function(T) {
            if (e(T) && (!m || r(X, T)))
                return T;
            throw new y(R(T) + " is not a typed array constructor")
        }, q = function(T, _, P, O) {
            if (S) {
                if (P)
                    for (var L in b) {
                        var E = A[L];
                        if (E && I(E.prototype, T))
                            try {
                                delete E.prototype[T]
                            } catch (D) {
                                try {
                                    E.prototype[T] = _
                                } catch (e) {}
                            }
                    }
                h[T] && !P || o(h, T, P ? _ : C && z[T] || _, O)
            }
        }, k = function(T, _, P) {
            var O, L;
            if (S) {
                if (m) {
                    if (P)
                        for (O in b)
                            if (L = A[O],
                            L && I(L, T))
                                try {
                                    delete L[T]
                                } catch (E) {}
                    if (X[T] && !P)
                        return;
                    try {
                        return o(X, T, P ? _ : C && X[T] || _)
                    } catch (E) {}
                }
                for (O in b)
                    L = A[O],
                    !L || L[T] && !P || o(L, T, _)
            }
        };
        for (O in b)
            L = A[O],
            E = L && L.prototype,
            E ? F(E)[f] = L : C = !1;
        for (O in j)
            L = A[O],
            E = L && L.prototype,
            E && (F(E)[f] = L);
        if ((!C || !e(X) || X === Function.prototype) && (X = function() {
            throw new y("Incorrect invocation")
        }
        ,
        C))
            for (O in b)
                A[O] && m(A[O], X);
        if ((!C || !h || h === u) && (h = X.prototype,
        C))
            for (O in b)
                A[O] && m(A[O].prototype, h);
        if (C && Y(d) !== h && m(d, h),
        S && !I(h, w))
            for (O in x = !0,
            i(h, w, {
                configurable: !0,
                get: function() {
                    return N(this) ? this[v] : void 0
                }
            }),
            b)
                A[O] && t(A[O], v, O);
        T.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: C,
            TYPED_ARRAY_TAG: x && v,
            aTypedArray: W,
            aTypedArrayConstructor: Q,
            exportTypedArrayMethod: q,
            exportTypedArrayStaticMethod: k,
            getTypedArrayConstructor: M,
            isView: B,
            isTypedArray: H,
            TypedArray: X,
            TypedArrayPrototype: h
        }
    },
    ba53: function(T, _, P) {
        "use strict";
        var O = P("7e61")
          , L = P("7d6f")
          , E = TypeError;
        T.exports = O(ArrayBuffer.prototype, "byteLength", "get") || function(T) {
            if ("ArrayBuffer" !== L(T))
                throw new E("ArrayBuffer expected");
            return T.byteLength
        }
    },
    bc12: function(T, _, P) {
        "use strict";
        var O = P("d7c5")
          , L = P("6efd")
          , E = P("96c4")
          , D = P("00f6")
          , S = P("cf78")
          , A = P("cd42")
          , e = P("fb8a")
          , N = O.RangeError
          , I = O.Int8Array
          , n = I && I.prototype
          , R = n && n.set
          , t = E.aTypedArray
          , o = E.exportTypedArrayMethod
          , i = !e((function() {
            var T = new Uint8ClampedArray(2);
            return L(R, T, {
                length: 1,
                0: 3
            }, 1),
            3 !== T[1]
        }
        ))
          , r = i && E.NATIVE_ARRAY_BUFFER_VIEWS && e((function() {
            var T = new I(2);
            return T.set(1),
            T.set("2", 1),
            0 !== T[0] || 2 !== T[1]
        }
        ));
        o("set", (function(T) {
            t(this);
            var _ = S(arguments.length > 1 ? arguments[1] : void 0, 1)
              , P = A(T);
            if (i)
                return L(R, this, P, _);
            var O = this.length
              , E = D(P)
              , e = 0;
            if (E + _ > O)
                throw new N("Wrong length");
            while (e < E)
                this[_ + e] = P[e++]
        }
        ), !i || r)
    },
    bdaa: function(T, _, P) {
        "use strict";
        var O = P("0abb")
          , L = P("0630");
        T.exports = !O && !L && "object" == typeof window && "object" == typeof document
    },
    c171: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "j", (function() {
            return invicePrintAll
        }
        )),
        __webpack_require__.d(__webpack_exports__, "g", (function() {
            return getPrintName
        }
        )),
        __webpack_require__.d(__webpack_exports__, "c", (function() {
            return ZzspFpdy
        }
        )),
        __webpack_require__.d(__webpack_exports__, "e", (function() {
            return ZzszFpdy
        }
        )),
        __webpack_require__.d(__webpack_exports__, "d", (function() {
            return Zzspqddy
        }
        )),
        __webpack_require__.d(__webpack_exports__, "f", (function() {
            return Zzszqddy
        }
        )),
        __webpack_require__.d(__webpack_exports__, "b", (function() {
            return ZzsjFpdy
        }
        )),
        __webpack_require__.d(__webpack_exports__, "n", (function() {
            return viewfptj
        }
        )),
        __webpack_require__.d(__webpack_exports__, "k", (function() {
            return prinfptj
        }
        )),
        __webpack_require__.d(__webpack_exports__, "h", (function() {
            return getPrintNr
        }
        )),
        __webpack_require__.d(__webpack_exports__, "i", (function() {
            return getPrintNr1
        }
        )),
        __webpack_require__.d(__webpack_exports__, "m", (function() {
            return printingShopee
        }
        )),
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Jdcpdy
        }
        )),
        __webpack_require__.d(__webpack_exports__, "l", (function() {
            return printPDFs
        }
        ));
        var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c13f")
          , core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__)
          , core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5384")
          , core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__)
          , core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6985")
          , core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_2__)
          , core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ef2c")
          , core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_3__)
          , core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("59c4")
          , core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_4__)
          , core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("df85")
          , core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_5__)
          , core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eb3f")
          , core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_6__)
          , core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("5a69")
          , core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_7__)
          , core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bc12")
          , core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_8__)
          , core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("57e4")
          , core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_9__)
          , core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("20c0")
          , core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_10__)
          , core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("3fef")
          , core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_11__)
          , core_js_modules_esnext_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("1ba1")
          , core_js_modules_esnext_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(core_js_modules_esnext_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_12__)
          , core_js_modules_esnext_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("44ca")
          , core_js_modules_esnext_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(core_js_modules_esnext_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_13__)
          , core_js_modules_esnext_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("84ba")
          , core_js_modules_esnext_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_14__)
          , core_js_modules_esnext_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("206e")
          , core_js_modules_esnext_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(core_js_modules_esnext_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_15__)
          , core_js_modules_esnext_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("4d9c")
          , core_js_modules_esnext_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(core_js_modules_esnext_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_16__)
          , core_js_modules_esnext_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("a6ef")
          , core_js_modules_esnext_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(core_js_modules_esnext_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_17__)
          , core_js_modules_esnext_set_union_v2_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("e60b")
          , core_js_modules_esnext_set_union_v2_js__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(core_js_modules_esnext_set_union_v2_js__WEBPACK_IMPORTED_MODULE_18__)
          , element_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("1277")
          , element_ui__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_19__);
        function invicePrintAll(T, _, P, O, L, E, D) {
            console.log(T, "132456798"),
            "004" === L && 0 === E ? ZzszFpdy(T, _, P, O) : "007" === L && 0 === E ? ZzspFpdy(T, _, P, O) : "025" === L && void 0 != D ? ZzsjFpdy(T, _, P, O, D) : "026" === L && 0 === E ? Zzszdddy(T, _, P, O) : "028" === L && 0 === E ? Zzsdzddy(T, _, P, O) : "028" === L && 1 === E ? Zzsdzqddy(T, _, P, O) : "007" === L && 1 === E ? Zzspqddy(T, _, P, O) : "004" === L && 1 === E ? Zzszqddy(T, _, P, O) : "hz" === L ? printsqd(T, _, P, O) : "005" === L || "87" === L || "03" === L ? Jdcpdy(T, _, P, O) : "86" === L && 0 === E ? fullPtzpPrint(T, _, P, O) : "85" === L && 0 === E ? fullZyzpPrint(T, _, P, O) : "86" === L && 1 === E ? ZzspqddyFull(T, _, P, O) : "85" === L && 1 === E ? ZzszqddyFull(T, _, P, O) : "88" != L && "006" !== L || escDyFull(T, _, P, O)
        }
        window.confirm = element_ui__WEBPACK_IMPORTED_MODULE_19__["MessageBox"].confirm;
        var bjstr = localStorage.getItem("key")
          , bj = JSON.parse(bjstr);
        if (null == bj) {
            var daysz = {
                dyqxzdyj: !1,
                zbj_zzsp: "-10",
                ybj_zzsp: "0",
                sbj_zzsz: "0",
                zbj_zzsz: "-10",
                sbj_zzsp_qd: "0",
                zbj_zzsp_qd: "-5",
                sbj_zzsz_qd: "0",
                zbj_zzsz_qd: "-5",
                zbj_jp: "-10",
                ybj_jp: "0",
                jqxzbs: "0",
                sfdyewm: !1,
                jdcsbz: "0",
                jdczbz: "0",
                escsbz: "0",
                esczbz: "0",
                bans: "06",
                zzsp_width: "230",
                zzsp_height: "159",
                zzsz_width: "230",
                zzsz_height: "159",
                pldyType: "1",
                jdcfp_width: "230",
                jdcfp_height: "159"
            };
            localStorage.setItem("key", JSON.stringify(daysz))
        }
        function printHzSqXx(T) {
            LODOP.ADD_PRINT_TEXT("6.9mm", "88mm", "78.2mm", "5mm", "红字信息表申请单"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_RECT(80, 29, 40, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 69, 80, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 149, 60, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 209, 60, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 269, 85, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 354, 110, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 464, 100, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 564, 100, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_RECT(80, 664, 100, 29, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 34, 40, 20, "序号"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 74, 80, 20, "发票代码"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 154, 60, 20, "发票号码"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 214, 60, 20, "申请时间"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 274, 85, 20, "机器编号"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 359, 110, 20, "信息表编号"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 469, 100, 20, "销方名称"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 569, 100, 20, "购方名称"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 669, 104, 20, "申请理由"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            for (var _ = 1, P = 0; P < T.length; P++)
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 29, 40, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 69, 80, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 149, 60, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 209, 60, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 269, 85, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 354, 110, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 464, 100, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 564, 100, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(70 + 40 * _, 664, 100, 40, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 34, 40, 40, P + 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 74, 80, 40, T[P].fpdm),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 154, 60, 40, T[P].fphm),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 214, 60, 40, T[P].kprq),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 274, 85, 40, T[P].kpddm),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 359, 110, 40, T[P].xxbbh),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 469, 100, 40, T[P].xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 569, 100, 40, T[P].ghdwmc),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(80 + 40 * _, 669, 104, 40, T[P].sqly),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                _++;
            LODOP.PREVIEW()
        }
        function printsqd(T) {
            var _;
            check();
            var P = 35
              , O = 7 * P;
            LODOP.PRINT_INITA("0", "0", "210mm", "297mm", "红字信息表打印"),
            LODOP.ADD_PRINT_TEXT(30, 20, 710, 20, "开具红字增值税专用发票信息表"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.ADD_PRINT_TEXT(67, 21, 233, 20, "填开日期：" + T.kprq),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_RECT(90, 20, 730, 601 + O, 0, 1),
            LODOP.ADD_PRINT_RECT(90, 20, 730, 60, 0, 1),
            LODOP.ADD_PRINT_RECT(150, 20, 730, 118 + O, 0, 1),
            LODOP.ADD_PRINT_RECT(90, 20, 89, 601 + O, 0, 1),
            LODOP.ADD_PRINT_RECT(90, 109, 141, 30, 0, 1),
            LODOP.ADD_PRINT_RECT(90, 250, 141, 30, 0, 1),
            LODOP.ADD_PRINT_RECT(120, 109, 141, 30, 0, 1),
            LODOP.ADD_PRINT_RECT(90, 390, 75, 60, 0, 1),
            LODOP.ADD_PRINT_RECT(90, 464, 135, 30, 0, 1),
            LODOP.ADD_PRINT_RECT(120, 464, 135, 30, 0, 1),
            LODOP.ADD_PRINT_RECT(90, 599, 151, 30, 0, 1),
            LODOP.ADD_PRINT_TEXT(109, 37, 58, 20, "销售方"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(98, 127, 98, 20, "名       称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(127, 127, 108, 20, "纳税人识别号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(110, 406, 63, 20, "购买方"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(98, 483, 98, 20, "名       称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(127, 481, 107, 20, "纳税人识别号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var L = T.xhdwmc;
            countStrLength(L) <= 16 ? (LODOP.ADD_PRINT_TEXT(99, 250, 140, 23, L),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2)) : (LODOP.ADD_PRINT_TEXT(95, 250, 140, 33, L),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2));
            const E = T.xhdwdm;
            LODOP.ADD_PRINT_TEXT(130, 252, 140, 15, E),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            const D = T.ghdwdm;
            LODOP.ADD_PRINT_TEXT(130, 602, 140, 15, D),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            var S = null !== (_ = T.ghdwmc) && void 0 !== _ ? _ : ""
              , A = countStrLength(S);
            A <= 16 ? (LODOP.ADD_PRINT_TEXT(98, 600, 130, 23, S),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2)) : (LODOP.ADD_PRINT_TEXT(95, 600, 130, 36, S),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2)),
            LODOP.ADD_PRINT_TEXT(158 + O / 2, 44, 50, 150, "开具红字专用发票内容"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(650, 41, 42, 24, "说明"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(292 + O, 130, 129, 19, "一、购买方"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.ADD_PRINT_TEXT(326 + O, 151, 380, 19, "对应蓝字专用发票抵扣增值税销项税额情况："),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(360 + O, 241, 84, 19, "1、已抵扣"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(390 + O, 241, 84, 19, "2、未抵扣"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(426 + O, 240, 302, 19, "对应蓝字专用发票的代码："),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(426 + O, 545, 61, 19, "号码："),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(501 + O, 130, 129, 19, "二、销售方"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.ADD_PRINT_TEXT(537 + O, 240, 298, 19, "对应蓝字专用发票的代码："),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(537 + O, 545, 61, 19, "号码："),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var e = [];
            T.checks.forEach((function(T) {
                e.push("checked" == T ? "√" : "　")
            }
            )),
            LODOP.ADD_PRINT_TEXT(292 + O, 224, 25, 20, e[0]),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "TextFrame", 5),
            LODOP.ADD_PRINT_TEXT(360 + O, 324, 25, 20, e[1]),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "TextFrame", 5),
            LODOP.ADD_PRINT_TEXT(390 + O, 324, 25, 20, e[2]),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "TextFrame", 5),
            LODOP.ADD_PRINT_TEXT(501 + O, 224, 25, 20, e[3]),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "TextFrame", 5),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
            const N = T.jbr;
            LODOP.ADD_PRINT_TEXT(735 + O, 58, 199, 19, "申请方经办人：" + N),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            const I = T.lxdh;
            LODOP.ADD_PRINT_TEXT(735 + O, 256, 204, 19, "联系电话：" + I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(735 + O, 459, 155, 19, "申请方名称<印章>："),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_LINE(443 + O, 430, 443 + O, 520, 0, 1),
            LODOP.ADD_PRINT_LINE(443 + O, 580, 443 + O, 670, 0, 1),
            LODOP.ADD_PRINT_LINE(552 + O, 430, 552 + O, 520, 0, 1),
            LODOP.ADD_PRINT_LINE(552 + O, 580, 552 + O, 670, 0, 1),
            LODOP.ADD_PRINT_RECT(590 + O, 20, 730, 101, 0, 1),
            LODOP.ADD_PRINT_RECT(590 + O, 20, 90, 101, 0, 1),
            LODOP.ADD_PRINT_TEXT(600 + O, 37, 60, 85, "红字专用发票信息表编号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            const n = T.xxbbh;
            LODOP.ADD_PRINT_TEXT(625 + O, 300, 450, 50, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 17);
            const R = T.fpdm
              , t = T.fphm;
            "√" == e[0] ? (LODOP.ADD_PRINT_TEXT(426 + O, 435, 228, 19, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(426 + O, 593, 228, 19, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(535 + O, 435, 228, 19, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(535 + O, 593, 228, 19, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            LODOP.ADD_PRINT_LINE(755 + O, 605, 755 + O, 750, 0, 1),
            LODOP.ADD_PRINT_TEXT(762 + O, 57, 693, 19, "注：本申请单一式两联：第一联，申请方留存；第二联，申请方所属主管税务机关留存。"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_LINE(268 + O, 250, 150, 250, 0, 1),
            LODOP.ADD_PRINT_LINE(268 + O, 390, 150, 390, 0, 1),
            LODOP.ADD_PRINT_LINE(268 + O, 465, 150, 465, 0, 1),
            LODOP.ADD_PRINT_LINE(268 + O, 600, 150, 600, 0, 1),
            LODOP.ADD_PRINT_LINE(268 + O, 670, 150, 670, 0, 1),
            LODOP.ADD_PRINT_TEXT(154, 120, 153, 20, "货物（劳务服务）"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(175, 160, 50, 20, "名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(165, 305, 43, 20, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(165, 413, 42, 20, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(165, 515, 42, 20, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(165, 618, 42, 20, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(165, 695, 43, 20, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(488, 161, 43, 20, "合计"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(488, 295, 48, 20, "----"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(488, 410, 46, 20, "----"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(488, 465, 135, 20, T.hjje),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.ADD_PRINT_TEXT(243 + O, 600, 70, 20, "--"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.ADD_PRINT_TEXT(243 + O, 670, 88, 20, T.hjse),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            for (var o = 0; o < 9; o++)
                LODOP.ADD_PRINT_RECT(198 + P * o, 109, 642, 35, 0, 1);
            for (o = 0; o < T.zbmx.length; o++) {
                var i = T.zbmx[o].spmc;
                countStrLength(i) <= 22 ? (LODOP.ADD_PRINT_TEXT(209 + o * P, 109, 141, 20, i),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2)) : (LODOP.ADD_PRINT_TEXT(198 + o * P, 109, 145, 35, i),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2)),
                LODOP.ADD_PRINT_TEXT(209 + o * P, 250, 140, 35, T.zbmx[o].spsl),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var r = T.zbmx[o].spdj;
                LODOP.ADD_PRINT_TEXT(209 + o * P, 390, 75, 35, r),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                const _ = T.zbmx[o].je;
                LODOP.ADD_PRINT_TEXT(209 + o * P, 465, 135, 35, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                const O = T.zbmx[o].lslbs;
                let L = T.zbmx[o].sl;
                L = "99.01" == L || null == L ? "" : "1" == O || "2" == O ? "***" : 100 * L + "%",
                LODOP.ADD_PRINT_TEXT(209 + o * P, 600, 70, 35, L),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                const E = T.zbmx[o].se;
                LODOP.ADD_PRINT_TEXT(209 + o * P, 670, 85, 35, E),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2)
            }
            LODOP.PREVIEW()
        }
        function ZzszFpdy(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.sbj_zzsz),
            S = Number(E.zbj_zzsz)),
            LODOP.PRINT_INITA(D + "mm", S + "mm", "230mm", "159mm", "增值税专用发票"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1);
            const A = E.zzsz_width || "230"
              , e = E.zzsz_height || "159";
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            printZzszp(T);
            var N = getSavePrinter("1");
            void 0 === N && null === N || LODOP.SET_PRINTER_INDEX(N),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function ZzspFpdy(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.ybj_zzsp),
            S = Number(E.zbj_zzsp)),
            LODOP.PRINT_INITA(D + "mm", S + "mm", "230mm", "159mm", "增值税普通发票"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1);
            const A = E.zzsp_width || "230"
              , e = E.zzsp_height || "159";
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            printZzspp(T);
            var N = getSavePrinter("1");
            void 0 === N && null === N || LODOP.SET_PRINTER_INDEX(N),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function fullPtzpPrint(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.ybj_zzsp),
            S = Number(E.zbj_zzsp)),
            LODOP.PRINT_INITA(D + "mm", S + "mm", "230mm", "159mm", "增值税普通发票"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1);
            const A = E.zzsp_width || "230"
              , e = E.zzsp_height || "159";
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            printFullPtzp(T);
            var N = getSavePrinter("1");
            void 0 === N && null === N || LODOP.SET_PRINTER_INDEX(N),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function fullZyzpPrint(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.sbj_zzsz),
            S = Number(E.zbj_zzsz)),
            LODOP.PRINT_INITA(D + "mm", S + "mm", "230mm", "159mm", "增值税专用发票"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1);
            const A = E.zzsz_width || "230"
              , e = E.zzsz_height || "159";
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            printFullZyfp(T);
            var N = getSavePrinter("1");
            void 0 === N && null === N || LODOP.SET_PRINTER_INDEX(N),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function ZzsjFpdy(T, _, P, O, L, E) {
            check();
            var D = localStorage.getItem("key")
              , S = JSON.parse(D)
              , A = "0"
              , e = "0";
            null != S && (A = Number(S.ybj_jp),
            e = Number(S.zbj_jp));
            var N = !1;
            printJsfp(T, N, A, e, L, E),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !1);
            var I = getSavePrinter("1");
            void 0 === I && null === I || LODOP.SET_PRINTER_INDEX(I),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function Zzspqddy(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0"
              , A = 210
              , e = 297;
            null != E && (D = Number(E.sbj_zzsp_qd),
            S = Number(E.zbj_zzsp_qd),
            A = Number(E.zzsp_qd_width),
            e = Number(E.zzsp_qd_height)),
            console.log(A, e),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !1),
            LODOP.PRINT_INITA(D + "mm", S + "mm", A, e, "增值税普通发票（清单）"),
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            LODOP.SET_PRINT_MODE("RESELECT_PAGESIZE", !0),
            printZzsppQD(T);
            var N = window.localStorage.getItem("qdPrinter");
            void 0 != N && "" != N && null != N && (LODOP.SET_PRINTER_INDEX(N),
            LODOP.GET_PRINTER_NAME(N)),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function ZzspqddyFull(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0"
              , A = 210
              , e = 297;
            null != E && (D = Number(E.sbj_zzsp_qd),
            S = Number(E.zbj_zzsp_qd),
            A = Number(E.zzsp_qd_width),
            e = Number(E.zzsp_qd_height)),
            console.log(A, e),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !1),
            LODOP.PRINT_INITA(D + "mm", S + "mm", A, e, "增值税普通发票（清单）"),
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            LODOP.SET_PRINT_MODE("RESELECT_PAGESIZE", !0),
            printZzsppQDFull(T);
            var N = window.localStorage.getItem("qdPrinter");
            void 0 != N && "" != N && null != N && (LODOP.SET_PRINTER_INDEX(N),
            LODOP.GET_PRINTER_NAME(N)),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function Zzszqddy(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0"
              , A = 210
              , e = 297;
            null != E && (D = Number(E.sbj_zzsz_qd),
            S = Number(E.zbj_zzsz_qd),
            A = Number(E.zzsz_qd_width),
            e = Number(E.zzsz_qd_height)),
            console.log(A, e),
            LODOP.PRINT_INITA((D || 0) + "mm", (S || 0) + "mm", A, e, "增值税专用发票（清单）"),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !1),
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            LODOP.SET_PRINT_MODE("RESELECT_PAGESIZE", !0),
            printZzszpQD(T);
            var N = window.localStorage.getItem("qdPrinter");
            void 0 != N && "" != N && null != N && (LODOP.SET_PRINTER_INDEX(N),
            LODOP.GET_PRINTER_NAME(N)),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function ZzszqddyFull(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0"
              , A = 210
              , e = 297;
            null != E && (D = Number(E.sbj_zzsz_qd),
            S = Number(E.zbj_zzsz_qd),
            A = Number(E.zzsz_qd_width),
            e = Number(E.zzsz_qd_height)),
            console.log(A, e),
            LODOP.PRINT_INITA((D || 0) + "mm", (S || 0) + "mm", A, e, "增值税专用发票（清单）"),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !1),
            LODOP.SET_PRINT_PAGESIZE(1, A + "mm", e + "mm", "CreateCustomPage"),
            LODOP.SET_PRINT_MODE("RESELECT_PAGESIZE", !0),
            printZzszpQDFull(T);
            var N = window.localStorage.getItem("qdPrinter");
            void 0 != N && "" != N && null != N && (LODOP.SET_PRINTER_INDEX(N),
            LODOP.GET_PRINTER_NAME(N)),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function Zzsdzqddy(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.ybj_zzsp),
            S = Number(E.zbj_zzsp)),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1),
            LODOP.PRINT_INITA(D + "mm", S + "mm", "230mm", "159mm", "增值税电子专票"),
            LODOP.SET_PRINT_PAGESIZE(1, 2300, 1590, "CreateCustomPage"),
            LODOP.SET_PRINT_MODE("RESELECT_PAGESIZE", !0),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            printZzsdzpQD(T);
            var A = getSavePrinter("1");
            void 0 === A && null === A || LODOP.SET_PRINTER_INDEX(A),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function Jdcpdy(T, _, P, O) {
            console.log(T, _, P, O),
            check();
            var L = localStorage.getItem("key");
            console.log(L);
            var E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.jdcsbz),
            S = Number(E.jdczbz)),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !0),
            LODOP.PRINT_INITA((D || 0) + "mm", (S || 0) + "mm", "241mm", "177mm", "机动车销售统一发票"),
            printJdcfp(T);
            var A = getSavePrinter("1");
            void 0 === A && null === A || LODOP.SET_PRINTER_INDEX(A),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function escDyFull(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.escsbz),
            S = Number(E.esczbz)),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_SETUP", !0),
            LODOP.PRINT_INITA((D || 0) + "mm", (S || 0) + "mm", "241mm", "177mm", "二手车销售统一发票"),
            printEscFullfp(T);
            var A = getSavePrinter("1");
            void 0 === A && null === A || LODOP.SET_PRINTER_INDEX(A),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function Zzszdddy(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.ybj_zzsp),
            S = Number(E.zbj_zzsp)),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1),
            LODOP.PRINT_INITA(D + "mm", S + "mm", "230mm", "159mm", "增值税普通发票(电子)"),
            LODOP.SET_PRINT_PAGESIZE(1, 2300, 1590, "CreateCustomPage"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            printZzsdp(T);
            var A = getSavePrinter("1");
            void 0 === A && null === A || LODOP.SET_PRINTER_INDEX(A),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function Zzsdzddy(T, _, P, O) {
            check();
            var L = localStorage.getItem("key")
              , E = JSON.parse(L)
              , D = "0"
              , S = "0";
            null != E && (D = Number(E.ybj_zzsp),
            S = Number(E.zbj_zzsp)),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1),
            LODOP.PRINT_INITA(D + "mm", S + "mm", "230mm", "159mm", "增值税电子专票"),
            LODOP.SET_PRINT_PAGESIZE(1, 2300, 1590, "CreateCustomPage"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            printZzsdzp(T);
            var A = getSavePrinter("1");
            void 0 === A && null === A || LODOP.SET_PRINTER_INDEX(A),
            0 === _ || "0" === _ ? LODOP.PREVIEW() : LODOP.PRINT()
        }
        function printZzszp(T) {
            var _, P, O, L, E;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            var D = T.bz;
            LODOP.ADD_PRINT_TEXT("6.9mm", "90mm", "58.2mm", "5mm", "增值税专用发票"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            "08" === T.tspz || "18" === T.tspz && "01" !== T.fpzt ? (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : ("01" !== T.fpzt || "08" === T.tspz && "18" === T.tspz ? "01" !== T.fpzt || "08" !== T.tspz && "18" !== T.tspz || (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 245, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            "03" !== T.fpzt && "04" !== T.fpzt || (LODOP.ADD_PRINT_TEXT(85, 420, 100, 32, "作废"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1))),
            LODOP.ADD_PRINT_TEXT(42, 159, 132, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_SHAPE(1, "16.9mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "18mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(42, 634, 113, 20, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(39, 595, 26, 24, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAYABgAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAgFBgcGBQgHBgcJCAgJDBQNDAsLDBgREg4UHRkeHhwZHBsgJC4nICIrIhscKDYoKy8xMzQzHyY4PDgyPC4yMzEBCAkJDAoMFw0NFzEhHCExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIABoAGwMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APQvil421rwNBHqUOjWt9pG5I5JTcFZUY5/hxjHHXNAEnjfx+2j+CbLXvD9qmpSalJFHaRsThi4yM457Yx60AbvgnV9R1rw1Z3+s6c2mX0ynzbZgRtIOM4PIz1waANygDz748WsV94Iis5yVjuNRtoiw6gM+CfyJoA8dstRvtBurH4f6vvabS/ENvNbNjhoixzj25DD/AHqAOhu/GHiWbw3q3jmDWbiB7HVvs8engj7P5A4Klcck+vWgD3uwn+02NvcYx5sSvj0yAaAPJ/iPqHifXPHdt4QttEJ0pbq0ukvgrYAQh3JPTHUY9vegC78WfA0mp+JfDniXSoDJd2V7Cl0qdWi3ghv+A/yPtQBx2qaeTq15aJ4W8U/2JNqH2ybTkjj8uWUHqG6hT1xQB79bY+zRYjMQ2DCH+HjpQBLQAUAFABQB/9k="),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("23.3mm", "168mm", "19.6mm", "4.5mm", "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "95mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "7.4mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "136mm", "5mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "51.6mm", "20.1mm", "201.1mm", "54mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 276, 1, 202, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 372, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 419, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 495, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 571, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 684, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 726, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "20.1mm", "7.4mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "136mm", "5mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(120, 84, 18, 76, "购货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 1),
            LODOP.ADD_PRINT_TEXT(118, 107, 114, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(136, 107, 114, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(155, 157, 62, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(175, 107, 111, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(123, 517, 18, 71, "密码区"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 6),
            LODOP.ADD_PRINT_TEXT(200, 108, 155, 17, "货物或应税劳务名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 295, 86, 17, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 382, 60, 17, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 438, 61, 17, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 512, 80, 17, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 602, 90, 17, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(200, 691, 60, 17, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 755, 90, 17, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_SHAPE(0, 364, 77, 758, 1, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(348, 127, 103, 17, "合         计"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(375, 115, 146, 17, "价税合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "○"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "×"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(375, 620, 65, 17, "（小写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(405, 84, 18, 71, "销货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -2),
            LODOP.ADD_PRINT_TEXT(404, 107, 109, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 107, 108, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(439, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(439, 157, 61, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(454, 107, 109, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(411, 518, 18, 59, "备\n\n注"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 90, 68, 19, "收款人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 306, 60, 19, "复核："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 474, 68, 19, "开票人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 626, 130, 19, "销货单位：（章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(74, 155, 162, 15, "机器编号："),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 1),
            LODOP.ADD_PRINT_TEXT(92, 155, 147, 15, T.jqbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(52, 770, 78, 15, T.fpdm),
            LODOP.ADD_PRINT_TEXT(66, 762, 87, 15, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var S = T.kprq;
            S = S.substring(0, 4) + "年" + S.substring(4, 6) + "月" + S.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT("23.3mm", 714, 121, 15, S),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New");
            var A = 1.8
              , e = A / .0264;
            LODOP.ADD_PRINT_IMAGE(31, 78, e, e, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
            var N = null !== (_ = T.ghdwmc) && void 0 !== _ ? _ : ""
              , I = countStrLength(N);
            I <= 50 ? LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, N) : I <= 56 ? (LODOP.ADD_PRINT_TEXT(115, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : I <= 60 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : I <= 64 ? (LODOP.ADD_PRINT_TEXT(116, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : I <= 75 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(117, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(135, 204, 290, 15, T.ghdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var n = null !== (P = ghdwdzdhFun(T)) && void 0 !== P ? P : ""
              , R = countStrLength(n);
            R <= 45 ? LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, n) : R <= 56 ? (LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : R <= 60 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : R <= 64 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : R <= 75 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(153, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var t = null !== (O = T.ghdwyhzh) && void 0 !== O ? O : ""
              , o = countStrLength(t);
            if (o <= 50 ? LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, t) : o <= 56 ? (LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 60 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 66 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 76 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(174, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            printSkmOneByOne(T.skm, 120, 551),
            Array.isArray(T.zbmx)) {
                var i = T.zbmx;
                $.each(i, (function(_, P) {
                    if ("1" == T.qdbz && (3 == P.fphxz || 4 == P.fphxz) || "1" != T.qdbz && P.fphxz <= 2) {
                        console.log(P.sl),
                        null == P.sl && (P.sl = "");
                        var O = P.sl + "" === "" ? "" : P.sl + "" === "99.01" ? "99.01" : ((P.sl + "").length > 4 && 1 * (P.sl + "").substring(4, 5) > 0 ? (100 * P.sl).toFixed(1) : (100 * P.sl).toFixed()) + "%";
                        if ("1" !== T.zsfs && "2" !== T.zsfs || (O = "***"),
                        "_count" === _)
                            return !1;
                        var L = P.spsl ? controllerLength(P.spsl, 13) : ""
                          , E = P.spdj ? controllerLength(P.spdj, 13) : ""
                          , D = (1 * P.je).toFixed(2)
                          , S = (1 * P.se).toFixed(2);
                        "1" === T.qdbz && 3 === P.fphxz ? (console.log(O),
                        addPrintLineZzszp(0, P.spmc, P.ggxh, P.dw, L, E, D, O, S)) : addPrintLineZzszp(_, P.spmc, P.ggxh, P.dw, L, E, D, O, S)
                    } else if ("0" === T.qdbz && 3 === P.fphxz) {
                        O = P.sl + "" === "" ? "" : P.sl + "" === "99.01" ? "99.01" : ((P.sl + "").length > 4 && 1 * (P.sl + "").substring(4, 5) > 0 ? (100 * P.sl).toFixed(1) : (100 * P.sl).toFixed()) + "%";
                        if ("1" !== T.zsfs && "2" !== T.zsfs || (O = "***"),
                        "_count" === _)
                            return !1;
                        L = P.spsl ? controllerLength(P.spsl, 13) : "",
                        E = P.spdj ? controllerLength(P.spdj, 13) : "",
                        D = (1 * P.je).toFixed(2),
                        S = (1 * P.se).toFixed(2);
                        addPrintLineZzszp(_, P.spmc, P.ggxh, P.dw, L, E, D, O, S)
                    }
                }
                ))
            } else {
                var r = T.zbmx.group
                  , Y = r.sl + "" === "" ? "" : r.sl + "" === "99.01" ? "99.01" : ((r.sl + "").length > 4 && 1 * (r.sl + "").substring(4, 5) > 0 ? (100 * r.sl).toFixed(1) : (100 * r.sl).toFixed()) + "%";
                "1" !== T.zsfs && "2" !== T.zsfs || (Y = "***");
                var m = r.spsl ? controllerLength(r.spsl, 13) : ""
                  , l = r.spdj ? controllerLength(r.spdj, 13) : ""
                  , a = (1 * r.je).toFixed(2)
                  , s = (1 * r.se).toFixed(2);
                addPrintLineZzszp(0, r.spmc, r.ggxh, r.dw, m, l, a, Y, s)
            }
            void 0 == T.se && (T.se = 0);
            var F = (1 * T.hjje).toFixed(2)
              , p = countStrLength(F);
            LODOP.ADD_PRINT_TEXT(345, 553, 129, 20, F),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            addMoney(346, 680 - 6.9 * p - 12);
            var g = (1 * T.se).toFixed(2)
              , z = countStrLength(g);
            LODOP.ADD_PRINT_TEXT(345, 696, 135, 20, g),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            addMoney(346, 834 - 7 * z - 12),
            LODOP.ADD_PRINT_TEXT(376, 303, 335, 20, (T.jshj < 0 ? "(负数)" : "") + je2Upper(T.jshj)),
            addMoney(374, 680),
            LODOP.ADD_PRINT_TEXT(373, 690, 135, 20, (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var c = T.xhdwmc
              , d = countStrLength(c);
            d <= 50 ? LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, c) : d <= 56 ? (LODOP.ADD_PRINT_TEXT(401, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : d <= 60 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : d <= 64 ? (LODOP.ADD_PRINT_TEXT(402, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : d <= 75 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(403, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(419, 204, 276, 15, T.xhdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var X = null !== (L = T.xhdwdzdh) && void 0 !== L ? L : ""
              , h = countStrLength(X);
            h <= 50 ? LODOP.ADD_PRINT_TEXT(439, 204, 315, 16, X) : h <= 56 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : h <= 60 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : h <= 64 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : h <= 75 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(438, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var u = null !== (E = T.xhdwyhzh) && void 0 !== E ? E : ""
              , y = countStrLength(u);
            if (y <= 50 ? LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, u) : y <= 56 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : y <= 60 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5)) : y <= 64 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : y <= 75 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(453, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 5.8)),
            null !== D) {
                var w = patch("\\n", D);
                if (w <= 2 || null === w) {
                    var v = countStrLength(D);
                    console.log(v),
                    v <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : v <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                    LODOP.ADD_PRINT_TEXT(403, 540, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                } else {
                    console.log("bzs > 2");
                    v = countStrLength(D);
                    console.log(v),
                    v <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : v <= 190 && w <= 3 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                }
            }
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0);
            var f = T.kpr
              , C = countStrLength(f);
            C <= 14 ? (LODOP.ADD_PRINT_TEXT(477, 152, 152, 15, T.skr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(477, 359, 115, 15, T.fhr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(476, 526, 121, 15, f),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : LODOP.ADD_PRINT_TEXT(477, 526, 121, 15, f)
        }
        function printFullPtzp(T) {
            var _, P, O;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            var L = (null === T || void 0 === T ? void 0 : T.tdysbz) || T.bz;
            LODOP.ADD_PRINT_TEXT("6.9mm", "90mm", "58.2mm", "5mm", "增值税普通发票"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            "16" == T.tdyslxDm ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : ("08" === T.tspz || "18" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : "01" === T.fpzt && (LODOP.ADD_PRINT_TEXT(71, 245, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            "03" !== T.fpzt && "04" !== T.fpzt || (LODOP.ADD_PRINT_TEXT(85, 420, 100, 32, "作废"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1))),
            LODOP.ADD_PRINT_TEXT(42, 159, 155, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_SHAPE(1, "16.9mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "18mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(42, 634, 113, 20, T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(39, 595, 26, 24, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAYABgAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAgFBgcGBQgHBgcJCAgJDBQNDAsLDBgREg4UHRkeHhwZHBsgJC4nICIrIhscKDYoKy8xMzQzHyY4PDgyPC4yMzEBCAkJDAoMFw0NFzEhHCExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIABoAGwMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APQvil421rwNBHqUOjWt9pG5I5JTcFZUY5/hxjHHXNAEnjfx+2j+CbLXvD9qmpSalJFHaRsThi4yM457Yx60AbvgnV9R1rw1Z3+s6c2mX0ynzbZgRtIOM4PIz1waANygDz748WsV94Iis5yVjuNRtoiw6gM+CfyJoA8dstRvtBurH4f6vvabS/ENvNbNjhoixzj25DD/AHqAOhu/GHiWbw3q3jmDWbiB7HVvs8engj7P5A4Klcck+vWgD3uwn+02NvcYx5sSvj0yAaAPJ/iPqHifXPHdt4QttEJ0pbq0ukvgrYAQh3JPTHUY9vegC78WfA0mp+JfDniXSoDJd2V7Cl0qdWi3ghv+A/yPtQBx2qaeTq15aJ4W8U/2JNqH2ybTkjj8uWUHqG6hT1xQB79bY+zRYjMQ2DCH+HjpQBLQAUAFABQB/9k="),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("23.3mm", "168mm", "19.6mm", "4.5mm", "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "95mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "7.4mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "136mm", "5mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "51.6mm", "20.1mm", "201.1mm", "54mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 276, 1, 202, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 372, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 419, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 495, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 571, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 684, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 726, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "20.1mm", "7.4mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "136mm", "5mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(120, 84, 18, 76, "购货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 1),
            LODOP.ADD_PRINT_TEXT(118, 107, 114, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(136, 107, 114, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(155, 157, 62, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(175, 107, 111, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(123, 517, 18, 71, "密码区"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 6),
            LODOP.ADD_PRINT_TEXT(200, 108, 155, 17, "货物或应税劳务名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 295, 86, 17, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 382, 60, 17, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 438, 61, 17, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 512, 80, 17, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 602, 90, 17, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(200, 691, 60, 17, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 755, 90, 17, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_SHAPE(0, 364, 77, 758, 1, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(348, 127, 103, 17, "合         计"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(375, 115, 146, 17, "价税合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "○"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "×"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(375, 620, 65, 17, "（小写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(405, 84, 18, 71, "销货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -2),
            LODOP.ADD_PRINT_TEXT(404, 107, 109, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 107, 108, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(439, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(439, 157, 61, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(454, 107, 109, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(411, 518, 18, 59, "备\n\n注"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 90, 68, 19, "收款人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 306, 60, 19, "复核："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 474, 68, 19, "开票人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 626, 130, 19, "销货单位：（章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(52, 740, 85, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(66, 750, 87, 15, T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var E = T.kprq;
            E = E.substring(0, 4) + "年" + E.substring(4, 6) + "月" + E.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT("23.3mm", 714, 121, 15, E),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New");
            var D = 1.8
              , S = D / .0264;
            LODOP.ADD_PRINT_IMAGE(31, 78, S, S, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
            var A = ghdwmcFun(T)
              , e = countStrLength(A);
            e <= 50 ? LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, A) : e <= 56 ? (LODOP.ADD_PRINT_TEXT(115, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : e <= 60 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : e <= 64 ? (LODOP.ADD_PRINT_TEXT(116, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : e <= 75 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(117, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var N = ghdwdmFun(T);
            LODOP.ADD_PRINT_TEXT(135, 204, 290, 15, N),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var I = null !== (_ = ghdwdzdhFun(T)) && void 0 !== _ ? _ : ""
              , n = countStrLength(I);
            n <= 45 ? LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I) : n <= 56 ? (LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : n <= 60 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 64 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 75 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(153, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var R = ghdwyhzhFun(T)
              , t = countStrLength(R);
            t <= 50 ? LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R) : t <= 56 ? (LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : t <= 60 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 66 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 76 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(174, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            printFullMmqOneByOne(T, 128, 544);
            if (console.log("123132明细", T.zbmx),
            Array.isArray(T.zbmx))
                $.each(T.zbmx, (function(_, P) {
                    if ("1" == T.qdbz && ("3" == P.fphxz || "4" == P.fphxz) || "1" != (null === T || void 0 === T ? void 0 : T.qdbz) && Number(P.fphxz) <= 2) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        var O = P.sl;
                        0 == O && O + "" != "" && ("1" == P.lslbs && (O = "免税"),
                        "2" == P.lslbs && (O = "不征税"),
                        "3" != P.lslbs && "" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && "3" == P.fphxz && (O = "0%",
                        O = "免税",
                        O = slText(T.zbmx)),
                        "02" === T.tspz && (O = "免税"),
                        "2" != T.zsfs && "3" != T.zsfs || (O = "0***"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        0 === T.zhsl && "详见对应正数发票及清单" == P.spmc && P.je.toString().includes("-") && (O = "免税"),
                        console.log("商品shuilv显示", O),
                        "1" === T.qdbz && "3" == P.fphxz ? addPrintLineZzspp(0, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2)) : addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    } else if ("0" === T.qdbz && "3" == P.fphxz) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        O = P.sl;
                        0 === O && O + "" !== "" && ("1" !== P.lslbs && "" !== P.lslbs || (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && "3" == P.fphxz && (O = "0%",
                        O = "免税",
                        O = slText(T.zbmx)),
                        "02" === T.tspz && (O = "免税"),
                        "2" != T.zsfs && "3" != T.zsfs || (O = "0***"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    }
                }
                ));
            else {
                var o = [];
                if (o = T.zbmx.group,
                "1" === T.qdbz && ("3" == o.fphxz || "4" == o.fphxz) || "1" != (null === T || void 0 === T ? void 0 : T.qdbz) && Number(o.fphxz) <= 2) {
                    (0 !== o.sl || o.sl + "" === "" || 0 === o.sl && 0 !== o.se) && !1;
                    var i = o.sl;
                    0 === i && i + "" !== "" && ("1" === o.lslbs && (i = "免税"),
                    "2" === o.lslbs && (i = "不征税"),
                    "3" !== o.lslbs && "" !== o.lslbs && null !== o.lslbs || (i = "0%",
                    0 !== o.se && (i = ""))),
                    T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && "3" == o.fphxz && (i = "0%",
                    i = "免税",
                    i = slText(T.zbmx)),
                    "02" === T.tspz && (i = "免税"),
                    "2" === T.zsfs && 0 === o.sl && (i = "0***"),
                    "2" === T.zsfs && 0 !== o.sl && (i = "1***"),
                    "1" === T.zsfs && (i = "j***"),
                    addPrintLineZzspp(0, o.spmc, o.ggxh, o.dw, o.spsl ? controllerLength(o.spsl, 13) : "", o.spdj ? controllerLength(o.spdj, 13) : "", (1 * o.je).toFixed(2), i, (1 * o.se).toFixed(2))
                }
            }
            void 0 == T.se && (T.se = 0);
            var r = (1 * T.hjje).toFixed(2)
              , Y = countStrLength(r);
            LODOP.ADD_PRINT_TEXT(345, 551, 129, 20, r),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            addMoney(346, 680 - 6.9 * Y - 12);
            var m = (1 * T.se).toFixed(2)
              , l = countStrLength(m);
            0 === Number(m) ? m = "***" : addMoney(346, 833 - 7 * l - 12),
            LODOP.ADD_PRINT_TEXT(345, 696, 135, 20, m),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            LODOP.ADD_PRINT_TEXT(376, 303, 335, 20, (T.jshj < 0 ? "(负数)" : "") + je2Upper(T.jshj)),
            addMoney(374, 680),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.ADD_PRINT_TEXT(373, 690, 135, 20, (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var a = xhdwmcFun(T)
              , s = countStrLength(a);
            s <= 50 ? LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a) : s <= 56 ? (LODOP.ADD_PRINT_TEXT(401, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : s <= 60 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 64 ? (LODOP.ADD_PRINT_TEXT(402, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 75 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(403, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var F = xhdwdmFun(T);
            LODOP.ADD_PRINT_TEXT(419, 204, 276, 15, F),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var p = null !== (P = xhdwdzdhFun(T)) && void 0 !== P ? P : ""
              , g = countStrLength(p);
            g <= 50 ? LODOP.ADD_PRINT_TEXT(439, 204, 315, 16, p) : g <= 56 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : g <= 60 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : g <= 64 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : g <= 75 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(438, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var z = null !== (O = xhdwyhzhFun(T)) && void 0 !== O ? O : ""
              , c = countStrLength(z);
            console.log("购方长度", c),
            c <= 50 ? LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, z) : c <= 56 ? (LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : c <= 60 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5)) : c < 66 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : c <= 76 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6.2)) : (LODOP.ADD_PRINT_TEXT(453, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var d = T.kpr
              , X = countStrLength(d);
            if (X <= 14 ? (LODOP.ADD_PRINT_TEXT(477, 152, 152, 15, T.skr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(477, 355, 115, 15, T.fhr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(476, 540, 91, 15, d),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : LODOP.ADD_PRINT_TEXT(477, 536, 91, 15, d),
            null !== L) {
                var h = patch("\\n", L);
                if (h <= 2 || null === h) {
                    var u = countStrLength(L);
                    console.log(u),
                    u <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 9),
                    LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, L || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : u <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, L || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, L || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                } else {
                    u = countStrLength(L);
                    console.log(u),
                    u <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, L || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : u <= 190 && h <= 3 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, L || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, L || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                }
            }
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0)
        }
        function printFullZyfp(T) {
            var _, P, O, L, E;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            var D = (null === T || void 0 === T ? void 0 : T.tdysbz) || T.bz;
            LODOP.ADD_PRINT_TEXT("6.9mm", "90mm", "58.2mm", "5mm", "增值税专用发票"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            "08" === T.tspz || "18" === T.tspz && "01" !== T.fpzt ? (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : ("01" !== T.fpzt || "08" === T.tspz && "18" === T.tspz ? "01" !== T.fpzt || "08" !== T.tspz && "18" !== T.tspz || (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 245, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            "03" !== T.fpzt && "04" !== T.fpzt || (LODOP.ADD_PRINT_TEXT(85, 420, 100, 32, "作废"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1)),
            "00" === T.fpzt && (LODOP.ADD_PRINT_TEXT(63, 170, 100, 32, tdysFilter(T.tdyslxDm)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"))),
            LODOP.ADD_PRINT_TEXT(42, 159, 132, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_SHAPE(1, "16.9mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "18mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(42, 634, 113, 20, T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(39, 595, 26, 24, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAYABgAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAgFBgcGBQgHBgcJCAgJDBQNDAsLDBgREg4UHRkeHhwZHBsgJC4nICIrIhscKDYoKy8xMzQzHyY4PDgyPC4yMzEBCAkJDAoMFw0NFzEhHCExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIABoAGwMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APQvil421rwNBHqUOjWt9pG5I5JTcFZUY5/hxjHHXNAEnjfx+2j+CbLXvD9qmpSalJFHaRsThi4yM457Yx60AbvgnV9R1rw1Z3+s6c2mX0ynzbZgRtIOM4PIz1waANygDz748WsV94Iis5yVjuNRtoiw6gM+CfyJoA8dstRvtBurH4f6vvabS/ENvNbNjhoixzj25DD/AHqAOhu/GHiWbw3q3jmDWbiB7HVvs8engj7P5A4Klcck+vWgD3uwn+02NvcYx5sSvj0yAaAPJ/iPqHifXPHdt4QttEJ0pbq0ukvgrYAQh3JPTHUY9vegC78WfA0mp+JfDniXSoDJd2V7Cl0qdWi3ghv+A/yPtQBx2qaeTq15aJ4W8U/2JNqH2ybTkjj8uWUHqG6hT1xQB79bY+zRYjMQ2DCH+HjpQBLQAUAFABQB/9k="),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("23.3mm", "168mm", "19.6mm", "4.5mm", "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "95mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "7.4mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "136mm", "5mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "51.6mm", "20.1mm", "201.1mm", "54mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 276, 1, 202, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 372, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 419, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 495, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 571, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 684, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 726, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "20.1mm", "7.4mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "136mm", "5mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(120, 84, 18, 76, "购货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 1),
            LODOP.ADD_PRINT_TEXT(118, 107, 114, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(136, 107, 114, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(155, 157, 62, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(175, 107, 111, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(123, 517, 18, 71, "密码区"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 6),
            LODOP.ADD_PRINT_TEXT(200, 108, 155, 17, "货物或应税劳务名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 295, 86, 17, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 382, 60, 17, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 438, 61, 17, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 512, 80, 17, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 602, 90, 17, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(200, 691, 60, 17, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 755, 90, 17, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_SHAPE(0, 364, 77, 758, 1, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(348, 127, 103, 17, "合         计"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(375, 115, 146, 17, "价税合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "○"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "×"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(375, 620, 65, 17, "（小写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(405, 84, 18, 71, "销货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -2),
            LODOP.ADD_PRINT_TEXT(404, 107, 109, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 107, 108, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(439, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(439, 157, 61, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(454, 107, 109, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(411, 518, 18, 59, "备\n\n注"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 90, 68, 19, "收款人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 306, 60, 19, "复核："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 474, 68, 19, "开票人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 626, 130, 19, "销货单位：（章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(52, 770, 78, 15, T.fpdm),
            LODOP.ADD_PRINT_TEXT(66, 762, 87, 15, T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var S = T.kprq;
            S = S.substring(0, 4) + "年" + S.substring(4, 6) + "月" + S.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT("23.3mm", 714, 121, 15, S),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New");
            var A = 1.8
              , e = A / .0264;
            LODOP.ADD_PRINT_IMAGE(31, 78, e, e, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
            var N = null !== (_ = T.ghdwmc) && void 0 !== _ ? _ : ""
              , I = countStrLength(N);
            I <= 50 ? LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, N) : I <= 56 ? (LODOP.ADD_PRINT_TEXT(115, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : I <= 60 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : I <= 64 ? (LODOP.ADD_PRINT_TEXT(116, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : I <= 75 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(117, 204, 315, 16, N),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(135, 204, 290, 15, T.ghdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var n = null !== (P = ghdwdzdhFun(T)) && void 0 !== P ? P : ""
              , R = countStrLength(n);
            R <= 45 ? LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, n) : R <= 56 ? (LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : R <= 60 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : R <= 64 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : R <= 75 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(153, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var t = null !== (O = T.ghdwyhzh) && void 0 !== O ? O : ""
              , o = countStrLength(t);
            if (o <= 50 ? LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, t) : o <= 56 ? (LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 60 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 66 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 76 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(174, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            printFullMmqOneByOne(T, 128, 544),
            Array.isArray(T.zbmx)) {
                var i = T.zbmx;
                console.log("dayinmingxi", i),
                $.each(i, (function(_, P) {
                    if ("1" === T.qdbz && ("3" == P.fphxz || "4" == P.fphxz) || "1" != (null === T || void 0 === T ? void 0 : T.qdbz) && Number(P.fphxz) <= 2) {
                        console.log(P.sl),
                        null == P.sl && (P.sl = "");
                        var O = P.sl + "" === "" ? "" : P.sl + "" === "99.01" ? "99.01" : ((P.sl + "").length > 4 && 1 * (P.sl + "").substring(4, 5) > 0 ? (100 * P.sl).toFixed(1) : (100 * P.sl).toFixed()) + "%";
                        if ("2" != T.zsfs && "3" != T.zsfs || (O = "***"),
                        "_count" === _)
                            return !1;
                        var L = P.spsl ? controllerLength(P.spsl, 13) : ""
                          , E = P.spdj ? controllerLength(P.spdj, 13) : ""
                          , D = (1 * P.je).toFixed(2)
                          , S = (1 * P.se).toFixed(2);
                        console.log("打印的1111", P),
                        "1" === T.qdbz && "3" == P.fphxz ? (console.log(122222222, O),
                        addPrintLineZzszp(0, P.spmc, P.ggxh, P.dw, L, E, D, O, S)) : addPrintLineZzszp(_, P.spmc, P.ggxh, P.dw, L, E, D, O, S)
                    } else if ("0" === T.qdbz && "3" == P.fphxz) {
                        O = P.sl + "" === "" ? "" : P.sl + "" === "99.01" ? "99.01" : ((P.sl + "").length > 4 && 1 * (P.sl + "").substring(4, 5) > 0 ? (100 * P.sl).toFixed(1) : (100 * P.sl).toFixed()) + "%";
                        if ("2" != T.zsfs && "3" != T.zsfs || (O = "***"),
                        "_count" === _)
                            return !1;
                        L = P.spsl ? controllerLength(P.spsl, 13) : "",
                        E = P.spdj ? controllerLength(P.spdj, 13) : "",
                        D = (1 * P.je).toFixed(2),
                        S = (1 * P.se).toFixed(2);
                        addPrintLineZzszp(_, P.spmc, P.ggxh, P.dw, L, E, D, O, S)
                    }
                }
                ))
            } else {
                var r = T.zbmx.group
                  , Y = r.sl + "" === "" ? "" : r.sl + "" === "99.01" ? "99.01" : ((r.sl + "").length > 4 && 1 * (r.sl + "").substring(4, 5) > 0 ? (100 * r.sl).toFixed(1) : (100 * r.sl).toFixed()) + "%";
                "2" != T.zsfs && "3" != T.zsfs || (Y = "***");
                var m = r.spsl ? controllerLength(r.spsl, 13) : ""
                  , l = r.spdj ? controllerLength(r.spdj, 13) : ""
                  , a = (1 * r.je).toFixed(2)
                  , s = (1 * r.se).toFixed(2);
                addPrintLineZzszp(0, r.spmc, r.ggxh, r.dw, m, l, a, Y, s)
            }
            void 0 == T.se && (T.se = 0);
            var F = (1 * T.hjje).toFixed(2)
              , p = countStrLength(F);
            LODOP.ADD_PRINT_TEXT(345, 553, 129, 20, F),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            addMoney(346, 680 - 6.9 * p - 12);
            var g = (1 * T.se).toFixed(2)
              , z = countStrLength(g);
            LODOP.ADD_PRINT_TEXT(345, 696, 135, 20, g),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            addMoney(346, 834 - 7 * z - 12),
            LODOP.ADD_PRINT_TEXT(376, 303, 335, 20, (T.jshj < 0 ? "(负数)" : "") + je2Upper(T.jshj)),
            addMoney(374, 680),
            LODOP.ADD_PRINT_TEXT(373, 690, 135, 20, (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var c = T.xhdwmc
              , d = countStrLength(c);
            d <= 50 ? LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, c) : d <= 56 ? (LODOP.ADD_PRINT_TEXT(401, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : d <= 60 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : d <= 64 ? (LODOP.ADD_PRINT_TEXT(402, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : d <= 75 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(403, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(419, 204, 276, 15, T.xhdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var X = null !== (L = T.xhdwdzdh) && void 0 !== L ? L : ""
              , h = countStrLength(X);
            h <= 50 ? LODOP.ADD_PRINT_TEXT(439, 204, 315, 16, X) : h <= 56 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : h <= 60 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : h <= 64 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : h <= 75 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(438, 204, 315, 16, X),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var u = null !== (E = T.xhdwyhzh) && void 0 !== E ? E : ""
              , y = countStrLength(u);
            if (y <= 50 ? LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, u) : y <= 56 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : y <= 60 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5)) : y <= 64 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : y <= 75 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(453, 204, 315, 16, u),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 5.8)),
            null !== D) {
                var w = patch("\\n", D);
                if (w <= 2 || null === w) {
                    var v = countStrLength(D);
                    console.log(v),
                    v <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 9),
                    LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : v <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                } else {
                    v = countStrLength(D);
                    console.log(v),
                    v <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : v <= 190 && w <= 3 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                    LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, D || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                }
            }
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0);
            var f = T.kpr
              , C = countStrLength(f);
            C <= 14 ? (LODOP.ADD_PRINT_TEXT(477, 152, 152, 15, T.skr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(477, 359, 115, 15, T.fhr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(476, 526, 121, 15, f),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : LODOP.ADD_PRINT_TEXT(477, 526, 121, 15, f)
        }
        function printZzspp(T) {
            var _, P, O;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            var L = T.bz;
            LODOP.ADD_PRINT_TEXT("6.9mm", "90mm", "58.2mm", "5mm", "增值税普通发票"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            "02" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : ("08" === T.tspz || "18" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : "01" === T.fpzt && (LODOP.ADD_PRINT_TEXT(71, 245, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            "03" !== T.fpzt && "04" !== T.fpzt || (LODOP.ADD_PRINT_TEXT(85, 420, 100, 32, "作废"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1))),
            LODOP.ADD_PRINT_TEXT(42, 159, 155, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_SHAPE(1, "16.9mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "18mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(42, 634, 113, 20, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(39, 595, 26, 24, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAYABgAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAgFBgcGBQgHBgcJCAgJDBQNDAsLDBgREg4UHRkeHhwZHBsgJC4nICIrIhscKDYoKy8xMzQzHyY4PDgyPC4yMzEBCAkJDAoMFw0NFzEhHCExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIABoAGwMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APQvil421rwNBHqUOjWt9pG5I5JTcFZUY5/hxjHHXNAEnjfx+2j+CbLXvD9qmpSalJFHaRsThi4yM457Yx60AbvgnV9R1rw1Z3+s6c2mX0ynzbZgRtIOM4PIz1waANygDz748WsV94Iis5yVjuNRtoiw6gM+CfyJoA8dstRvtBurH4f6vvabS/ENvNbNjhoixzj25DD/AHqAOhu/GHiWbw3q3jmDWbiB7HVvs8engj7P5A4Klcck+vWgD3uwn+02NvcYx5sSvj0yAaAPJ/iPqHifXPHdt4QttEJ0pbq0ukvgrYAQh3JPTHUY9vegC78WfA0mp+JfDniXSoDJd2V7Cl0qdWi3ghv+A/yPtQBx2qaeTq15aJ4W8U/2JNqH2ybTkjj8uWUHqG6hT1xQB79bY+zRYjMQ2DCH+HjpQBLQAUAFABQB/9k="),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("23.3mm", "168mm", "19.6mm", "4.5mm", "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "95mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "7.4mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "136mm", "5mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "51.6mm", "20.1mm", "201.1mm", "54mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 276, 1, 202, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 372, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 419, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 495, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 571, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 684, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 726, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "20.1mm", "7.4mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "136mm", "5mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(120, 84, 18, 76, "购货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 1),
            LODOP.ADD_PRINT_TEXT(118, 107, 114, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(136, 107, 114, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(155, 157, 62, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(175, 107, 111, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(123, 517, 18, 71, "密码区"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 6),
            LODOP.ADD_PRINT_TEXT(200, 108, 155, 17, "货物或应税劳务名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 295, 86, 17, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 382, 60, 17, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 438, 61, 17, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 512, 80, 17, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 602, 90, 17, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(200, 691, 60, 17, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 755, 90, 17, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_SHAPE(0, 364, 77, 758, 1, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(348, 127, 103, 17, "合         计"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(375, 115, 146, 17, "价税合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "○"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "×"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(375, 620, 65, 17, "（小写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(405, 84, 18, 71, "销货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -2),
            LODOP.ADD_PRINT_TEXT(404, 107, 109, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 107, 108, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(439, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(439, 157, 61, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(454, 107, 109, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(411, 518, 18, 59, "备\n\n注"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 90, 68, 19, "收款人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 306, 60, 19, "复核："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 474, 68, 19, "开票人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 626, 130, 19, "销货单位：（章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(74, 155, 162, 15, "机器编号："),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 1),
            LODOP.ADD_PRINT_TEXT(92, 155, 147, 15, T.jqbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(52, 740, 85, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(66, 740, 87, 15, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var E = T.kprq;
            E = E.substring(0, 4) + "年" + E.substring(4, 6) + "月" + E.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT("23.3mm", 714, 121, 15, E),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New");
            var D = 1.8
              , S = D / .0264;
            LODOP.ADD_PRINT_IMAGE(31, 78, S, S, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
            var A = ghdwmcFun(T)
              , e = countStrLength(A);
            e <= 50 ? (console.log("mingchengh ", e, A),
            LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, A),
            A.includes("O") && (console.log("走到了零"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "微软雅黑"))) : e <= 56 ? (LODOP.ADD_PRINT_TEXT(115, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : e <= 60 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : e <= 64 ? (LODOP.ADD_PRINT_TEXT(116, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : e <= 75 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(117, 204, 315, 16, A),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var N = ghdwdmFun(T);
            LODOP.ADD_PRINT_TEXT(135, 204, 290, 15, N),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var I = null !== (_ = ghdwdzdhFun(T)) && void 0 !== _ ? _ : ""
              , n = countStrLength(I);
            n <= 45 ? LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I) : n <= 56 ? (LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : n <= 60 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 64 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 75 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(153, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var R = ghdwyhzhFun(T)
              , t = countStrLength(R);
            t <= 50 ? LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R) : t <= 56 ? (LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : t <= 60 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 66 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 76 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(174, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            printSkmOneByOne(T.skm, 120, 551);
            if (console.log("123132明细", T.zbmx),
            Array.isArray(T.zbmx))
                $.each(T.zbmx, (function(_, P) {
                    if ("1" === T.qdbz && (3 === P.fphxz || 4 === P.fphxz) || "1" != T.qdbz && P.fphxz <= 2) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        var O = P.sl;
                        0 === O && O + "" !== "" && ("1" === P.lslbs && (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && "" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === P.fphxz && (O = "0%",
                        O = "免税",
                        O = slText(T.zbmx)),
                        "02" === T.tspz && (O = "免税"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        0 === T.zhsl && "详见对应正数发票及清单" == P.spmc && P.je.toString().includes("-") && (O = "免税"),
                        console.log("商品shuilv显示", O),
                        "1" === T.qdbz && 3 === P.fphxz ? addPrintLineZzspp(0, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2)) : addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    } else if ("1" != T.qdbz && 3 === P.fphxz) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        O = P.sl;
                        0 === O && O + "" !== "" && ("1" !== P.lslbs && "" !== P.lslbs || (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === P.fphxz && (O = "0%",
                        O = "免税",
                        O = slText(T.zbmx)),
                        "02" === T.tspz && (O = "免税"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    }
                }
                ));
            else {
                var o = [];
                if (o = T.zbmx.group,
                "1" === T.qdbz && (3 === o.fphxz || 4 === o.fphxz) || "0" === T.qdbz && o.fphxz <= 2) {
                    (0 !== o.sl || o.sl + "" === "" || 0 === o.sl && 0 !== o.se) && !1;
                    var i = o.sl;
                    0 === i && i + "" !== "" && ("1" === o.lslbs && (i = "免税"),
                    "2" === o.lslbs && (i = "不征税"),
                    "3" !== o.lslbs && "" !== o.lslbs && null !== o.lslbs || (i = "0%",
                    0 !== o.se && (i = ""))),
                    T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === o.fphxz && (i = "0%",
                    i = "免税",
                    i = slText(T.zbmx)),
                    "02" === T.tspz && (i = "免税"),
                    "2" === T.zsfs && 0 === o.sl && (i = "0***"),
                    "2" === T.zsfs && 0 !== o.sl && (i = "1***"),
                    "1" === T.zsfs && (i = "j***"),
                    addPrintLineZzspp(0, o.spmc, o.ggxh, o.dw, o.spsl ? controllerLength(o.spsl, 13) : "", o.spdj ? controllerLength(o.spdj, 13) : "", (1 * o.je).toFixed(2), i, (1 * o.se).toFixed(2))
                }
            }
            void 0 == T.se && (T.se = 0);
            var r = (1 * T.hjje).toFixed(2)
              , Y = countStrLength(r);
            LODOP.ADD_PRINT_TEXT(345, 551, 129, 20, r),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            addMoney(346, 680 - 6.9 * Y - 12);
            var m = (1 * T.se).toFixed(2)
              , l = countStrLength(m);
            0 === Number(m) ? m = "***" : addMoney(346, 833 - 7 * l - 12),
            LODOP.ADD_PRINT_TEXT(345, 696, 135, 20, m),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1.5),
            LODOP.ADD_PRINT_TEXT(376, 303, 335, 20, (T.jshj < 0 ? "(负数)" : "") + je2Upper(T.jshj)),
            addMoney(374, 680),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.ADD_PRINT_TEXT(373, 690, 135, 20, (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var a = xhdwmcFun(T)
              , s = countStrLength(a);
            s <= 50 ? LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a) : s <= 56 ? (LODOP.ADD_PRINT_TEXT(401, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : s <= 60 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 64 ? (LODOP.ADD_PRINT_TEXT(402, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 75 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(403, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var F = xhdwdmFun(T);
            LODOP.ADD_PRINT_TEXT(419, 204, 276, 15, F),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var p = null !== (P = xhdwdzdhFun(T)) && void 0 !== P ? P : ""
              , g = countStrLength(p);
            g <= 50 ? LODOP.ADD_PRINT_TEXT(439, 204, 315, 16, p) : g <= 56 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : g <= 60 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : g <= 64 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : g <= 75 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(438, 204, 315, 16, p),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var z = null !== (O = xhdwyhzhFun(T)) && void 0 !== O ? O : ""
              , c = countStrLength(z);
            console.log(c),
            c <= 50 ? LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, z) : c <= 56 ? (LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : c <= 60 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5)) : c <= 66 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : c <= 76 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(453, 204, 315, 16, z),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var d = T.kpr
              , X = countStrLength(d);
            X <= 14 ? (LODOP.ADD_PRINT_TEXT(477, 152, 152, 15, T.skr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(477, 355, 115, 15, T.fhr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(476, 540, 91, 15, d),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : LODOP.ADD_PRINT_TEXT(477, 536, 91, 15, d);
            var h = T.jym;
            h = h.substring(0, 5) + " " + h.substring(5, 10) + " " + h.substring(10, 15) + " " + h.substring(15, h.length);
            var u = patch("\\n", L);
            if (console.log({
                bzs: u,
                bzLen: y
            }),
            u <= 2 || null === u) {
                var y = countStrLength(L);
                y <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, "校验码 " + h + "\n" + (L || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : y <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + h + "\n" + (L || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + h + "\n" + (L || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            } else {
                y = countStrLength(L);
                console.log(y),
                y <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, "校验码 " + h + "\n" + (L || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : y <= 190 && u <= 3 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + h + "\n" + (L || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 6),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + h + "\n" + (L || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
        }
        function printZzsdp(T) {
            var _, P, O, L;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            var E = T.bz;
            LODOP.ADD_PRINT_TEXT("6.9mm", "88mm", "100mm", "5mm", "增值税普通发票（电子）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            "02" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : ("08" === T.tspz || "18" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : "01" === T.fpzt && (LODOP.ADD_PRINT_TEXT(71, 245, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            "03" !== T.fpzt && "04" !== T.fpzt || (LODOP.ADD_PRINT_TEXT(85, 420, 100, 32, "作废"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1))),
            LODOP.ADD_PRINT_TEXT(42, 159, 155, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_SHAPE(1, "16.9mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "18mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(42, 634, 113, 20, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(39, 595, 26, 24, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAYABgAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAgFBgcGBQgHBgcJCAgJDBQNDAsLDBgREg4UHRkeHhwZHBsgJC4nICIrIhscKDYoKy8xMzQzHyY4PDgyPC4yMzEBCAkJDAoMFw0NFzEhHCExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIABoAGwMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APQvil421rwNBHqUOjWt9pG5I5JTcFZUY5/hxjHHXNAEnjfx+2j+CbLXvD9qmpSalJFHaRsThi4yM457Yx60AbvgnV9R1rw1Z3+s6c2mX0ynzbZgRtIOM4PIz1waANygDz748WsV94Iis5yVjuNRtoiw6gM+CfyJoA8dstRvtBurH4f6vvabS/ENvNbNjhoixzj25DD/AHqAOhu/GHiWbw3q3jmDWbiB7HVvs8engj7P5A4Klcck+vWgD3uwn+02NvcYx5sSvj0yAaAPJ/iPqHifXPHdt4QttEJ0pbq0ukvgrYAQh3JPTHUY9vegC78WfA0mp+JfDniXSoDJd2V7Cl0qdWi3ghv+A/yPtQBx2qaeTq15aJ4W8U/2JNqH2ybTkjj8uWUHqG6hT1xQB79bY+zRYjMQ2DCH+HjpQBLQAUAFABQB/9k="),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("23.3mm", "168mm", "19.6mm", "4.5mm", "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "95mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "7.4mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "136mm", "5mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "51.6mm", "20.1mm", "201.1mm", "54mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 276, 1, 202, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 372, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 419, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 495, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 571, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 684, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 726, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "20.1mm", "7.4mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "136mm", "5mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(120, 84, 18, 76, "购货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 1),
            LODOP.ADD_PRINT_TEXT(118, 107, 114, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(136, 107, 114, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(155, 157, 62, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(175, 107, 111, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(123, 517, 18, 71, "密码区"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 6),
            LODOP.ADD_PRINT_TEXT(200, 108, 155, 17, "货物或应税劳务名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 295, 86, 17, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 382, 60, 17, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 438, 61, 17, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 512, 80, 17, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 602, 90, 17, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(200, 691, 60, 17, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 755, 90, 17, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_SHAPE(0, 364, 77, 758, 1, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(348, 127, 103, 17, "合         计"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(375, 115, 146, 17, "价税合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "○"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "×"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(375, 620, 65, 17, "（小写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(405, 84, 18, 71, "销货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -2),
            LODOP.ADD_PRINT_TEXT(404, 107, 109, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 107, 108, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(439, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(439, 157, 61, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(454, 107, 109, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(411, 518, 18, 59, "备\n\n注"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 90, 68, 19, "收款人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 306, 60, 19, "复核："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 474, 68, 19, "开票人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 626, 130, 19, "销货单位：（章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(74, 155, 162, 15, "机器编号："),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 1),
            LODOP.ADD_PRINT_TEXT(92, 155, 147, 15, T.jqbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(52, 750, 85, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(66, 762, 87, 15, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var D = T.kprq;
            D = D.substring(0, 4) + "年" + D.substring(4, 6) + "月" + D.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT("23.3mm", 714, 121, 15, D),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New");
            var S = 1.8
              , A = S / .0264;
            LODOP.ADD_PRINT_IMAGE(31, 78, A, A, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
            var e = ghdwmcFun(T)
              , N = countStrLength(e);
            N <= 50 ? LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e) : N <= 56 ? (LODOP.ADD_PRINT_TEXT(115, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : N <= 60 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : N <= 64 ? (LODOP.ADD_PRINT_TEXT(116, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : N <= 75 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(117, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var I = ghdwdmFun(T);
            LODOP.ADD_PRINT_TEXT(135, 204, 290, 15, I),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var n = null !== (_ = ghdwdzdhFun(T)) && void 0 !== _ ? _ : ""
              , R = countStrLength(n);
            R <= 45 ? LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, n) : R <= 56 ? (LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : R <= 60 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : R <= 64 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : R <= 75 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(153, 204, 315, 16, n),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var t = null !== (P = ghdwyhzhFun(T)) && void 0 !== P ? P : ""
              , o = countStrLength(t);
            o <= 50 ? LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, t) : o <= 56 ? (LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 60 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 66 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : o <= 76 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(174, 204, 315, 16, t),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            printSkmOneByOne(T.skm, 120, 551);
            if (Array.isArray(T.zbmx))
                $.each(T.zbmx, (function(_, P) {
                    if ("1" === T.qdbz && (3 === P.fphxz || 4 === P.fphxz) || "0" === T.qdbz && P.fphxz <= 2) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        var O = P.sl;
                        0 === O && O + "" !== "" && ("1" === P.lslbs && (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && "" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === P.fphxz && (O = "0%"),
                        "02" === T.tspz && (O = "免税"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        "1" === T.qdbz && 3 === P.fphxz ? addPrintLineZzspp(0, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2)) : addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    }
                }
                ));
            else {
                var i = T.zbmx.group;
                if ("1" === T.qdbz && (3 === i.fphxz || 4 === i.fphxz) || "0" === T.qdbz && i.fphxz <= 2) {
                    (0 !== i.sl || i.sl + "" === "" || 0 === i.sl && 0 !== i.se) && !1;
                    var r = i.sl;
                    0 === r && r + "" !== "" && ("1" === i.lslbs && (r = "免税"),
                    "2" === i.lslbs && (r = "不征税"),
                    "3" !== i.lslbs && "" !== i.lslbs && null !== i.lslbs || (r = "0%",
                    0 !== i.se && (r = ""))),
                    T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === i.fphxz && (r = "0%"),
                    "02" === T.tspz && (r = "免税"),
                    "2" === T.zsfs && 0 === i.sl && (r = "0***"),
                    "2" === T.zsfs && 0 !== i.sl && (r = "1***"),
                    "1" === T.zsfs && (r = "j***"),
                    addPrintLineZzspp(0, i.spmc, i.ggxh, i.dw, i.spsl ? controllerLength(i.spsl, 13) : "", i.spdj ? controllerLength(i.spdj, 13) : "", (1 * i.je).toFixed(2), r, (1 * i.se).toFixed(2))
                }
            }
            void 0 == T.se && (T.se = 0);
            var Y = (1 * T.hjje).toFixed(2)
              , m = countStrLength(Y);
            LODOP.ADD_PRINT_TEXT(345, 551, 129, 20, Y),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
            addMoney(346, 680 - 7.2 * m - 12);
            var l = (1 * T.se).toFixed(2)
              , a = countStrLength(l);
            0 === Number(l) ? l = "***" : addMoney(346, 833 - 7.2 * a - 12),
            LODOP.ADD_PRINT_TEXT(345, 696, 135, 20, l),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
            LODOP.ADD_PRINT_TEXT(376, 303, 335, 20, (T.jshj < 0 ? "(负数)" : "") + je2Upper(T.jshj)),
            addMoney(374, 680),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.ADD_PRINT_TEXT(373, 695, 135, 20, (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var s = xhdwmcFun(T)
              , F = countStrLength(s);
            F <= 50 ? LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, s) : F <= 56 ? (LODOP.ADD_PRINT_TEXT(401, 204, 315, 16, s),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : F <= 60 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, s),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : F <= 64 ? (LODOP.ADD_PRINT_TEXT(402, 204, 315, 16, s),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : F <= 75 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, s),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(403, 204, 315, 16, s),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var p = xhdwdmFun(T);
            LODOP.ADD_PRINT_TEXT(419, 204, 276, 15, p),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var g = null !== (O = xhdwdzdhFun(T)) && void 0 !== O ? O : ""
              , z = countStrLength(g);
            z <= 50 ? LODOP.ADD_PRINT_TEXT(439, 204, 315, 16, g) : z <= 56 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : z <= 60 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : z <= 64 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : z <= 75 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(438, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var c = null !== (L = xhdwyhzhFun(T)) && void 0 !== L ? L : ""
              , d = countStrLength(c);
            d <= 50 ? LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, c) : d <= 56 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : d <= 60 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3)) : d <= 64 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : d <= 75 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(453, 204, 315, 16, c),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 5.8));
            var X = T.kpr
              , h = countStrLength(X);
            h <= 14 ? (LODOP.ADD_PRINT_TEXT(477, 152, 152, 15, T.skr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(477, 359, 115, 15, T.fhr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(476, 536, 91, 15, X),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : LODOP.ADD_PRINT_TEXT(477, 536, 91, 15, X);
            var u = T.jym;
            u = u.substring(0, 5) + " " + u.substring(5, 10) + " " + u.substring(10, 15) + " " + u.substring(15, u.length);
            var y = patch("\\n", E);
            if (y <= 2 || null === y) {
                var w = countStrLength(E);
                w <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(405, 545, 300, 61, "校验码 " + u + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(403, 545, 300, 61, "校验码 " + u + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            } else {
                w = countStrLength(E);
                w <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 7.7),
                LODOP.ADD_PRINT_TEXT(405, 545, 300, 61, "校验码 " + u + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                LODOP.ADD_PRINT_TEXT(403, 545, 300, 61, "校验码 " + u + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
        }
        function printZzsdzp(T) {
            var _, P, O, L;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            var E = T.bz;
            LODOP.ADD_PRINT_TEXT("6.9mm", "90mm", "58.2mm", "5mm", "增值税电子专票"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            "02" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : ("08" === T.tspz || "18" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : "01" === T.fpzt && (LODOP.ADD_PRINT_TEXT(71, 245, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            "03" !== T.fpzt && "04" !== T.fpzt || (LODOP.ADD_PRINT_TEXT(85, 420, 100, 32, "作废"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1))),
            LODOP.ADD_PRINT_TEXT(42, 159, 155, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_SHAPE(1, "16.9mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "18mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(42, 634, 113, 20, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(39, 595, 26, 24, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAYABgAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAgFBgcGBQgHBgcJCAgJDBQNDAsLDBgREg4UHRkeHhwZHBsgJC4nICIrIhscKDYoKy8xMzQzHyY4PDgyPC4yMzEBCAkJDAoMFw0NFzEhHCExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIABoAGwMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APQvil421rwNBHqUOjWt9pG5I5JTcFZUY5/hxjHHXNAEnjfx+2j+CbLXvD9qmpSalJFHaRsThi4yM457Yx60AbvgnV9R1rw1Z3+s6c2mX0ynzbZgRtIOM4PIz1waANygDz748WsV94Iis5yVjuNRtoiw6gM+CfyJoA8dstRvtBurH4f6vvabS/ENvNbNjhoixzj25DD/AHqAOhu/GHiWbw3q3jmDWbiB7HVvs8engj7P5A4Klcck+vWgD3uwn+02NvcYx5sSvj0yAaAPJ/iPqHifXPHdt4QttEJ0pbq0ukvgrYAQh3JPTHUY9vegC78WfA0mp+JfDniXSoDJd2V7Cl0qdWi3ghv+A/yPtQBx2qaeTq15aJ4W8U/2JNqH2ybTkjj8uWUHqG6hT1xQB79bY+zRYjMQ2DCH+HjpQBLQAUAFABQB/9k="),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("23.3mm", "168mm", "19.6mm", "4.5mm", "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "95mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "7.4mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "136mm", "5mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "51.6mm", "20.1mm", "201.1mm", "54mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 276, 1, 202, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 372, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 419, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 495, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 571, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 684, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 726, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "20.1mm", "7.4mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "136mm", "5mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(120, 84, 18, 76, "购货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 1),
            LODOP.ADD_PRINT_TEXT(118, 107, 114, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(136, 107, 114, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(155, 157, 62, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(175, 107, 111, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(123, 517, 18, 71, "密码区"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 6),
            LODOP.ADD_PRINT_TEXT(200, 108, 155, 17, "货物或应税劳务名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 295, 86, 17, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 382, 60, 17, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 438, 61, 17, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 512, 80, 17, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 602, 90, 17, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(200, 691, 60, 17, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 755, 90, 17, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_SHAPE(0, 364, 77, 758, 1, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(348, 127, 103, 17, "合         计"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(375, 115, 146, 17, "价税合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "○"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "×"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(375, 620, 65, 17, "（小写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(405, 84, 18, 71, "销货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -2),
            LODOP.ADD_PRINT_TEXT(404, 107, 109, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 107, 108, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(439, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(439, 157, 61, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(454, 107, 109, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(411, 518, 18, 59, "备\n\n注"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 90, 68, 19, "收款人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 306, 60, 19, "复核："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 474, 68, 19, "开票人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 626, 130, 19, "销货单位：（章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(74, 155, 162, 15, "机器编号："),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 1),
            LODOP.ADD_PRINT_TEXT(92, 155, 147, 15, T.jqbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(52, 750, 85, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(66, 762, 87, 15, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var D = T.kprq;
            D = D.substring(0, 4) + "年" + D.substring(4, 6) + "月" + D.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT("23.3mm", 714, 121, 15, D),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New");
            var S = 1.8
              , A = S / .0264;
            LODOP.ADD_PRINT_IMAGE(31, 78, A, A, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
            var e = T.ghdwmc
              , N = countStrLength(e);
            N <= 50 ? LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e) : N <= 56 ? (LODOP.ADD_PRINT_TEXT(115, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : N <= 60 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : N <= 64 ? (LODOP.ADD_PRINT_TEXT(116, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : N <= 75 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(117, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(135, 204, 290, 15, T.ghdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var I = null !== (_ = T.ghdwdzdh) && void 0 !== _ ? _ : ""
              , n = countStrLength(I);
            n <= 50 ? LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I) : n <= 56 ? (LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : n <= 60 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 64 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 75 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(153, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var R = null !== (P = T.ghdwyhzh) && void 0 !== P ? P : ""
              , t = countStrLength(R);
            t <= 50 ? LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R) : t <= 56 ? (LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 60 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 66 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 76 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(174, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            printSkmOneByOne(T.skm, 120, 551);
            if (Array.isArray(T.zbmx))
                $.each(T.zbmx, (function(_, P) {
                    if ("1" === T.qdbz && (3 === P.fphxz || 4 === P.fphxz) || "0" === T.qdbz && P.fphxz <= 2) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        var O = P.sl;
                        0 === O && O + "" !== "" && ("1" === P.lslbs && (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && "" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === P.fphxz && (O = "0%"),
                        "02" === T.tspz && (O = "免税"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        "1" === T.qdbz && 3 === P.fphxz ? addPrintLineZzspp(0, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2)) : addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    } else if ("1" === T.qdbz && 3 === P.fphxz) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        O = P.sl;
                        0 === O && O + "" !== "" && ("1" === P.lslbs && (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && "" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === P.fphxz && (O = "0%"),
                        "02" === T.tspz && (O = "免税"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    }
                }
                ));
            else {
                var o = T.zbmx.group;
                if ("1" === T.qdbz && (3 === o.fphxz || 4 === o.fphxz) || "0" === T.qdbz && o.fphxz <= 2) {
                    (0 !== o.sl || o.sl + "" === "" || 0 === o.sl && 0 !== o.se) && !1;
                    var i = o.sl;
                    0 === i && i + "" !== "" && ("1" === o.lslbs && (i = "免税"),
                    "2" === o.lslbs && (i = "不征税"),
                    "3" !== o.lslbs && "" !== o.lslbs && null !== o.lslbs || (i = "0%",
                    0 !== o.se && (i = ""))),
                    T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === o.fphxz && (i = "0%"),
                    "02" === T.tspz && (i = "免税"),
                    "2" === T.zsfs && 0 === o.sl && (i = "0***"),
                    "2" === T.zsfs && 0 !== o.sl && (i = "1***"),
                    "1" === T.zsfs && (i = "j***"),
                    addPrintLineZzspp(0, o.spmc, o.ggxh, o.dw, o.spsl ? controllerLength(o.spsl, 13) : "", o.spdj ? controllerLength(o.spdj, 13) : "", (1 * o.je).toFixed(2), i, (1 * o.se).toFixed(2))
                }
            }
            void 0 == T.se && (T.se = 0);
            var r = (1 * T.hjje).toFixed(2)
              , Y = countStrLength(r);
            LODOP.ADD_PRINT_TEXT(345, 551, 129, 20, r),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
            addMoney(346, 680 - 7.2 * Y - 12);
            var m = (1 * T.se).toFixed(2)
              , l = countStrLength(m);
            0 === Number(m) ? m = "***" : addMoney(346, 833 - 7.2 * l - 12),
            LODOP.ADD_PRINT_TEXT(345, 696, 135, 20, m),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
            LODOP.ADD_PRINT_TEXT(376, 303, 335, 20, (T.jshj < 0 ? "(负数)" : "") + je2Upper(T.jshj)),
            addMoney(374, 680),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.ADD_PRINT_TEXT(373, 695, 135, 20, (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var a = T.xhdwmc
              , s = countStrLength(a);
            s <= 50 ? LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a) : s <= 56 ? (LODOP.ADD_PRINT_TEXT(401, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : s <= 60 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 64 ? (LODOP.ADD_PRINT_TEXT(402, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 75 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(403, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(419, 204, 276, 15, T.xhdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var F = null !== (O = T.xhdwdzdh) && void 0 !== O ? O : ""
              , p = countStrLength(F);
            p <= 50 ? LODOP.ADD_PRINT_TEXT(439, 204, 315, 16, F) : p <= 56 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : p <= 60 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : p <= 64 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : p <= 75 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(438, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var g = null !== (L = T.xhdwyhzh) && void 0 !== L ? L : ""
              , z = countStrLength(g);
            z <= 50 ? LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, g) : z <= 56 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : z <= 60 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : z <= 64 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : z <= 75 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(453, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 5.8));
            var c = T.kpr
              , d = countStrLength(c);
            d <= 14 ? (LODOP.ADD_PRINT_TEXT(477, 152, 152, 15, T.skr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(477, 359, 115, 15, T.fhr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(476, 536, 91, 15, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : LODOP.ADD_PRINT_TEXT(477, 536, 91, 15, c);
            var X = T.jym;
            X = X.substring(0, 5) + " " + X.substring(5, 10) + " " + X.substring(10, 15) + " " + X.substring(15, X.length);
            var h = patch("\\n", E);
            if (h <= 2 || null === h) {
                var u = countStrLength(E);
                u <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            } else {
                u = countStrLength(E);
                u <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7.5),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
        }
        function patch(re, s) {
            var status = s ? s.search("\\n") : "";
            re = eval("/" + re + "/ig");
            var sx = sx;
            return sx = status && -1 !== status ? s.match(re).length : null,
            sx
        }
        function printZzsdzpQD(T) {
            var _, P, O, L;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            var E = T.bz;
            LODOP.ADD_PRINT_TEXT("6.9mm", "90mm", "58.2mm", "5mm", "增值税电子专票"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            "02" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "收购"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : ("08" === T.tspz || "18" === T.tspz ? "01" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(63, 269, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(85, 262, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(71, 260, 100, 32, "成品油"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : "01" === T.fpzt && (LODOP.ADD_PRINT_TEXT(71, 245, 100, 32, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)),
            "03" !== T.fpzt && "04" !== T.fpzt || (LODOP.ADD_PRINT_TEXT(85, 420, 100, 32, "作废"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1))),
            LODOP.ADD_PRINT_TEXT(42, 159, 155, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_SHAPE(1, "16.9mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "18mm", "86.5mm", "65.1mm", "1", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(42, 634, 113, 20, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 15),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(39, 595, 26, 24, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAYABgAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAgFBgcGBQgHBgcJCAgJDBQNDAsLDBgREg4UHRkeHhwZHBsgJC4nICIrIhscKDYoKy8xMzQzHyY4PDgyPC4yMzEBCAkJDAoMFw0NFzEhHCExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIABoAGwMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APQvil421rwNBHqUOjWt9pG5I5JTcFZUY5/hxjHHXNAEnjfx+2j+CbLXvD9qmpSalJFHaRsThi4yM457Yx60AbvgnV9R1rw1Z3+s6c2mX0ynzbZgRtIOM4PIz1waANygDz748WsV94Iis5yVjuNRtoiw6gM+CfyJoA8dstRvtBurH4f6vvabS/ENvNbNjhoixzj25DD/AHqAOhu/GHiWbw3q3jmDWbiB7HVvs8engj7P5A4Klcck+vWgD3uwn+02NvcYx5sSvj0yAaAPJ/iPqHifXPHdt4QttEJ0pbq0ukvgrYAQh3JPTHUY9vegC78WfA0mp+JfDniXSoDJd2V7Cl0qdWi3ghv+A/yPtQBx2qaeTq15aJ4W8U/2JNqH2ybTkjj8uWUHqG6hT1xQB79bY+zRYjMQ2DCH+HjpQBLQAUAFABQB/9k="),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("23.3mm", "168mm", "19.6mm", "4.5mm", "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "95mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "201.1mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "20.1mm", "7.4mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "29.9mm", "136mm", "5mm", "22mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "51.6mm", "20.1mm", "201.1mm", "54mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 276, 1, 202, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 372, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 419, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 495, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 571, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 195, 684, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 196, 726, 1, 169, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "20.1mm", "7.4mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, "105.3mm", "136mm", "5mm", "19.6mm", 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(120, 84, 18, 76, "购货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 1),
            LODOP.ADD_PRINT_TEXT(118, 107, 114, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(136, 107, 114, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(155, 157, 62, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(175, 107, 111, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(123, 517, 18, 71, "密码区"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 6),
            LODOP.ADD_PRINT_TEXT(200, 108, 155, 17, "货物或应税劳务名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 295, 86, 17, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 382, 60, 17, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 438, 61, 17, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 512, 80, 17, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 12),
            LODOP.ADD_PRINT_TEXT(200, 602, 90, 17, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(200, 691, 60, 17, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(200, 755, 90, 17, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_SHAPE(0, 364, 77, 758, 1, 0, 1, "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(348, 127, 103, 17, "合         计"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(375, 115, 146, 17, "价税合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "○"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(374, 288, 15, 15, "×"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(375, 620, 65, 17, "（小写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(405, 84, 18, 71, "销货单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -2),
            LODOP.ADD_PRINT_TEXT(404, 107, 109, 20, "名        称："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 107, 108, 20, "纳税人识别号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(439, 107, 58, 20, "地址、"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(439, 157, 61, 20, "电话："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(454, 107, 109, 20, "开户行及账号："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(411, 518, 18, 59, "备\n\n注"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 90, 68, 19, "收款人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 306, 60, 19, "复核："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 474, 68, 19, "开票人："),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(476, 626, 130, 19, "销货单位：（章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#008000"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(74, 155, 162, 15, "机器编号："),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 1),
            LODOP.ADD_PRINT_TEXT(92, 155, 147, 15, T.jqbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(52, 750, 85, 15, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(66, 762, 87, 15, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var D = T.kprq;
            D = D.substring(0, 4) + "年" + D.substring(4, 6) + "月" + D.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT("23.3mm", 714, 121, 15, D),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New");
            var S = 1.8
              , A = S / .0264;
            LODOP.ADD_PRINT_IMAGE(31, 78, A, A, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
            var e = T.ghdwmc
              , N = countStrLength(e);
            N <= 50 ? LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e) : N <= 56 ? (LODOP.ADD_PRINT_TEXT(115, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : N <= 60 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : N <= 64 ? (LODOP.ADD_PRINT_TEXT(116, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : N <= 75 ? (LODOP.ADD_PRINT_TEXT(119, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(117, 204, 315, 16, e),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(135, 204, 290, 15, T.ghdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var I = null !== (_ = T.ghdwdzdh) && void 0 !== _ ? _ : ""
              , n = countStrLength(I);
            n <= 50 ? LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I) : n <= 56 ? (LODOP.ADD_PRINT_TEXT(156, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : n <= 60 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 64 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : n <= 75 ? (LODOP.ADD_PRINT_TEXT(158, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(153, 204, 315, 16, I),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var R = null !== (P = T.ghdwyhzh) && void 0 !== P ? P : ""
              , t = countStrLength(R);
            t <= 50 ? LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R) : t <= 56 ? (LODOP.ADD_PRINT_TEXT(176, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 60 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 66 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : t <= 76 ? (LODOP.ADD_PRINT_TEXT(178, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(174, 204, 315, 16, R),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            printSkmOneByOne(T.skm, 120, 551);
            if (Array.isArray(T.zbmx))
                $.each(T.zbmx, (function(_, P) {
                    if ("1" === T.qdbz && (3 === P.fphxz || 4 === P.fphxz) || "0" === T.qdbz && P.fphxz <= 2) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        var O = P.sl;
                        0 === O && O + "" !== "" && ("1" === P.lslbs && (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && "" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === P.fphxz && (O = "0%"),
                        "02" === T.tspz && (O = "免税"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        "1" === T.qdbz && 3 === P.fphxz ? addPrintLineZzspp(0, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2)) : addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    } else if ("1" === T.qdbz && 3 === P.fphxz) {
                        (0 !== P.sl || P.sl + "" === "" || 0 === P.sl && 0 !== P.se) && !1;
                        O = P.sl;
                        0 === O && O + "" !== "" && ("1" === P.lslbs && (O = "免税"),
                        "2" === P.lslbs && (O = "不征税"),
                        "3" !== P.lslbs && "" !== P.lslbs && null !== P.lslbs || (O = "0%",
                        0 !== P.se && (O = ""))),
                        T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === P.fphxz && (O = "0%"),
                        "02" === T.tspz && (O = "免税"),
                        "2" === T.zsfs && 0 === P.sl && (O = "0***"),
                        "2" === T.zsfs && 0 !== P.sl && (O = "1***"),
                        "1" === T.zsfs && (O = "j***"),
                        addPrintLineZzspp(_, P.spmc, P.ggxh, P.dw, P.spsl ? controllerLength(P.spsl, 13) : "", P.spdj ? controllerLength(P.spdj, 13) : "", (1 * P.je).toFixed(2), O, (1 * P.se).toFixed(2))
                    }
                }
                ));
            else {
                var o = T.zbmx.group;
                if ("1" === T.qdbz && (3 === o.fphxz || 4 === o.fphxz) || "0" === T.qdbz && o.fphxz <= 2) {
                    (0 !== o.sl || o.sl + "" === "" || 0 === o.sl && 0 !== o.se) && !1;
                    var i = o.sl;
                    0 === i && i + "" !== "" && ("1" === o.lslbs && (i = "免税"),
                    "2" === o.lslbs && (i = "不征税"),
                    "3" !== o.lslbs && "" !== o.lslbs && null !== o.lslbs || (i = "0%",
                    0 !== o.se && (i = ""))),
                    T.bmbbbh && "1" === T.qdbz && 0 === T.zhsl && 3 === o.fphxz && (i = "0%"),
                    "02" === T.tspz && (i = "免税"),
                    "2" === T.zsfs && 0 === o.sl && (i = "0***"),
                    "2" === T.zsfs && 0 !== o.sl && (i = "1***"),
                    "1" === T.zsfs && (i = "j***"),
                    addPrintLineZzspp(0, o.spmc, o.ggxh, o.dw, o.spsl ? controllerLength(o.spsl, 13) : "", o.spdj ? controllerLength(o.spdj, 13) : "", (1 * o.je).toFixed(2), i, (1 * o.se).toFixed(2))
                }
            }
            void 0 == T.se && (T.se = 0);
            var r = (1 * T.hjje).toFixed(2)
              , Y = countStrLength(r);
            LODOP.ADD_PRINT_TEXT(345, 551, 129, 20, r),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
            addMoney(346, 680 - 7.2 * Y - 12);
            var m = (1 * T.se).toFixed(2)
              , l = countStrLength(m);
            0 === Number(m) ? m = "***" : addMoney(346, 833 - 7.2 * l - 12),
            LODOP.ADD_PRINT_TEXT(345, 696, 135, 20, m),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
            LODOP.ADD_PRINT_TEXT(376, 303, 335, 20, (T.jshj < 0 ? "(负数)" : "") + je2Upper(T.jshj)),
            addMoney(374, 680),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 2),
            LODOP.ADD_PRINT_TEXT(373, 695, 135, 20, (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var a = T.xhdwmc
              , s = countStrLength(a);
            s <= 50 ? LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a) : s <= 56 ? (LODOP.ADD_PRINT_TEXT(401, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : s <= 60 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 64 ? (LODOP.ADD_PRINT_TEXT(402, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : s <= 75 ? (LODOP.ADD_PRINT_TEXT(405, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(403, 204, 315, 16, a),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)),
            LODOP.ADD_PRINT_TEXT(419, 204, 276, 15, T.xhdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var F = null !== (O = T.xhdwdzdh) && void 0 !== O ? O : ""
              , p = countStrLength(F);
            p <= 50 ? LODOP.ADD_PRINT_TEXT(439, 204, 315, 16, F) : p <= 56 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : p <= 60 ? (LODOP.ADD_PRINT_TEXT(441, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : p <= 64 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : p <= 75 ? (LODOP.ADD_PRINT_TEXT(442, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(438, 204, 315, 16, F),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6));
            var g = null !== (L = T.xhdwyhzh) && void 0 !== L ? L : ""
              , z = countStrLength(g);
            z <= 50 ? LODOP.ADD_PRINT_TEXT(456, 204, 315, 16, g) : z <= 56 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : z <= 60 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : z <= 64 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : z <= 75 ? (LODOP.ADD_PRINT_TEXT(458, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 6)) : (LODOP.ADD_PRINT_TEXT(453, 204, 315, 16, g),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 5.8));
            var c = T.kpr
              , d = countStrLength(c);
            d <= 14 ? (LODOP.ADD_PRINT_TEXT(477, 152, 152, 15, T.skr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(477, 359, 115, 15, T.fhr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(476, 536, 91, 15, c),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : LODOP.ADD_PRINT_TEXT(477, 536, 91, 15, c);
            var X = T.jym;
            X = X.substring(0, 5) + " " + X.substring(5, 10) + " " + X.substring(10, 15) + " " + X.substring(15, X.length);
            var h = patch("\\n", E);
            if (h <= 2 || null === h) {
                var u = countStrLength(E);
                u <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.SET_PRINT_STYLE("FontSize", 8),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            } else {
                u = countStrLength(E);
                u <= 138 ? (LODOP.SET_PRINT_STYLE("FontSize", 7.5),
                LODOP.ADD_PRINT_TEXT(405, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 7),
                LODOP.ADD_PRINT_TEXT(403, 550, 300, 61, "校验码 " + X + "\n" + (E || "")),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
        }
        function printZzszpQD(T) {
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            LODOP.SET_PRINT_STYLE("FontColor", "#000000"),
            LODOP.ADD_PRINT_TEXT(41, 216, 360, 35, "销售货物或者提供应税劳务、服务清单"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
            var _ = ghdwmcFun(T);
            LODOP.ADD_PRINT_TEXT(90, 20, 534, 22, "购货单位名称:" + _),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var P = xhdwmcFun(T);
            LODOP.ADD_PRINT_TEXT(120, 20, 535, 23, "销货单位名称:" + P),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 20, 358, 24, "所属增值税专用发票代码:" + T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 270, 200, 23, "号码:" + T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 585, 114, 25, " 第#页/共&页"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 2),
            LODOP.ADD_PRINT_LINE(780, 300, 190, 301, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 358, 190, 359, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 400, 190, 401, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 454, 190, 455, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 528, 190, 529, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 613, 190, 614, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 642, 190, 643, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(191, 20, 190, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 20, 50, 20, "序号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 120, 145, 20, "货物（劳务）名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(215, 20, 216, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 307, 54, 20, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 365, 34, 20, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 411, 40, 20, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 475, 40, 20, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 552, 40, 20, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 617, 35, 20, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 662, 40, 20, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(760, 20, 50, 20, "合计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(740, 20, 50, 20, "折扣"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(720, 20, 50, 20, "小计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var O = T.bz || ""
              , L = patch("\\n", O)
              , E = Number(L);
            E = 850 + 10 * E,
            LODOP.ADD_PRINT_TEXT(E, 36, 143, 25, "销货单位（章）:"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var D = T.kprq;
            D = D.substring(0, 4) + "年" + D.substring(4, 6) + "月" + D.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT(E, 473, 223, 25, "开票日期:" + D),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var S = Number(L);
            S = 875 + 10 * S,
            LODOP.ADD_PRINT_TEXT(S, 36, 600, 25, "注：本清单一式两联：第一联，销售方留存；第二联，销售方送交购买方。"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(781, 20, 782, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var A = Number(L);
            A = 800 + 10 * A,
            LODOP.ADD_PRINT_TEXT(800, 24, 44, 25, "备注"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var e = Number(L);
            e = 840 + 5 * e,
            LODOP.ADD_PRINT_LINE(e, 70, 190, 71, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(e, 20, e, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(e, 20, 190, 21, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(190, 710, e, 711, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            for (var N = 220, I = 0, n = T.zbmx, R = [], t = 0; t < n.length; t++) {
                var o = n[t];
                o.fphxz < 3 && R.push(o)
            }
            for (var i = Math.ceil(R.length / 25), r = 0, Y = 0, m = 0, l = 0, a = 0, s = 0, F = 0, p = 0; p < R.length; p++) {
                var g;
                o = R[p];
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 20, 50, 20, (null === (g = o) || void 0 === g ? void 0 : g.fpmxxh) || p + 1),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var z = o.spmc
                  , c = countStrLength(z);
                c <= 34 ? LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, z) : c <= 36 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, z),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : c <= 80 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, z),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, z),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
                var d = o.ggxh
                  , X = countStrLength(d);
                X <= 8 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : X <= 16 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : X <= 20 || X <= 24 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var h = o.dw
                  , u = countStrLength(h);
                u <= 5 ? LODOP.ADD_PRINT_TEXT(N + 19 * I, 360, 42, 20, h) : u <= 10 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 360, 42, 20, h),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 360, 42, 20, h),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var y = countStrLength(o.spsl ? o.spsl : "");
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 395, 65, 20, o.spsl ? controllerLength(o.spsl, 13) : ""),
                y > 10 && (LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                const _ = o.spdj ? controllerLength(o.spdj, 13) : "";
                _.length < 12 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 450, 82, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 450, 82, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6.5)),
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 524, 95, 20, (1 * o.je).toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 614, 34, 20, ((o.sl + "").length > 4 && 1 * (o.sl + "").substring(4, 5) > 0 ? (100 * o.sl).toFixed(1) : (100 * o.sl).toFixed()) + "%"),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 644, 69, 20, (1 * o.se).toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                1 === o.fphxz && (s += parseFloat(o.je)),
                Y += parseFloat(o.je),
                l += parseFloat(o.je);
                var w = o.sl;
                0 === w ? (o.spbm ? ("1" === o.lslbs && (w = "免税"),
                "2" === o.lslbs && (w = "不征税"),
                "3" === o.lslbs && (w = "0%")) : w = "***",
                "不征税" === w ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 608, 40, 20, w),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : "免税" === w ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 608, 40, 20, w),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : LODOP.ADD_PRINT_TEXT(N + 19 * I, 614, 34, 20, w),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 614, 34, 20, ((w + "").length > 4 && 1 * (w + "").substring(4, 5) > 0 ? (100 * w).toFixed(1) : (100 * w).toFixed()) + "%"),
                !1,
                !1),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var v = (1 * o.se).toFixed(2);
                console.log(v),
                m += parseFloat(v),
                a += parseFloat(v),
                1 === o.fphxz && (F += parseFloat(o.se)),
                "0.00" === v ? (v = "***",
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 644, 69, 20, v),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : LODOP.ADD_PRINT_TEXT(N + 19 * I, 644, 69, 20, v),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                console.log(I);
                O = T.bz || "",
                L = patch("\\n", O);
                if (L <= 2 || null === L) {
                    var f = countStrLength(O);
                    console.log(f),
                    f <= 138 || f <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 9),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                } else {
                    f = countStrLength(O);
                    if (console.log(f),
                    f <= 138 && L <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else if (f <= 190 && L <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else {
                        LODOP.SET_PRINT_STYLE("FontSize", 8);
                        var C = Number(L);
                        C = 47 + 5 * C,
                        console.log("num", C),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, C, O || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)
                    }
                }
                if (console.log("打印的num数", I),
                0 !== I && I % 24 === 0) {
                    if (0 != s && "0.00" != s || 0 != F && "0.00" != F) {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, Y.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1);
                        var x = m.toFixed(2);
                        console.log(x),
                        "0.00" === x && (x = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, x),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, s.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1);
                        var b = F.toFixed(2);
                        0 === b && (b = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, b),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1)
                    } else {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, Y.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1);
                        x = m.toFixed(2);
                        console.log(x),
                        "0.00" === x && (x = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, x),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, s.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1);
                        b = F.toFixed(2);
                        0 === b && (b = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, b),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1)
                    }
                    LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, l.toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1);
                    var j = a.toFixed(2);
                    "0.00" === j && (j = "***"),
                    LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, j),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                    LODOP.NewPage(),
                    console.log(i, r),
                    r++,
                    Y = 0,
                    m = 0,
                    s = 0,
                    F = 0,
                    I = 0
                } else if (p === R.length - 1) {
                    if (0 != s && "0.00" != s || 0 != F && "0.00" != F) {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, Y.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i);
                        x = m.toFixed(2);
                        "0.00" === x && (x = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, x),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, s.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i);
                        b = F.toFixed(2);
                        0 === b && (b = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, b),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i)
                    } else {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, Y.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i);
                        x = m.toFixed(2);
                        "0.00" === x && (x = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, x),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, s.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i);
                        b = F.toFixed(2);
                        0 === b && (b = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, b),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", i)
                    }
                    LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, l.toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", i);
                    j = a.toFixed(2);
                    "0.00" === j && (j = "***"),
                    LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, j),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", i)
                } else
                    I++
            }
        }
        function printZzszpQDFull(T) {
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            LODOP.SET_PRINT_STYLE("FontColor", "#000000"),
            LODOP.ADD_PRINT_TEXT(41, 216, 360, 35, "销售货物或者提供应税劳务、服务清单"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
            var _ = ghdwmcFun(T);
            LODOP.ADD_PRINT_TEXT(90, 20, 534, 22, "购货单位名称:" + _),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var P = xhdwmcFun(T);
            LODOP.ADD_PRINT_TEXT(120, 20, 535, 23, "销货单位名称:" + P),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 20, 358, 24, "所属增值税专用发票代码:" + T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 270, 200, 23, "号码:" + T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 585, 114, 25, " 第#页/共&页"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 2),
            LODOP.ADD_PRINT_LINE(780, 300, 190, 301, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 358, 190, 359, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 400, 190, 401, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 454, 190, 455, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 528, 190, 529, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 613, 190, 614, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 642, 190, 643, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(191, 20, 190, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 20, 50, 20, "序号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 120, 145, 20, "货物（劳务）名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(215, 20, 216, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 307, 54, 20, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 365, 34, 20, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 411, 40, 20, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 475, 40, 20, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 552, 40, 20, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 617, 35, 20, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 662, 40, 20, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(760, 20, 50, 20, "合计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(740, 20, 50, 20, "折扣"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(720, 20, 50, 20, "小计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var O = T.bz || ""
              , L = patch("\\n", O)
              , E = Number(L);
            E = 850 + 10 * E,
            LODOP.ADD_PRINT_TEXT(E, 36, 143, 25, "销货单位（章）:"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var D = T.kprq;
            D = D.substring(0, 4) + "年" + D.substring(4, 6) + "月" + D.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT(E, 473, 223, 25, "开票日期:" + D),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var S = Number(L);
            S = 875 + 10 * S,
            LODOP.ADD_PRINT_TEXT(S, 36, 600, 25, "注：本清单一式两联：第一联，销售方留存；第二联，销售方送交购买方。"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(781, 20, 782, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var A = Number(L);
            A = 800 + 10 * A,
            LODOP.ADD_PRINT_TEXT(800, 24, 44, 25, "备注"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var e = Number(L);
            e = 840 + 5 * e,
            LODOP.ADD_PRINT_LINE(e, 70, 190, 71, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(e, 20, e, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(e, 20, 190, 21, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(190, 710, e, 711, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            for (var N = 220, I = 0, n = T.zbmx, R = [], t = 0; t < n.length; t++) {
                var o = n[t];
                o.fphxz < 3 && R.push(o)
            }
            for (var i = Math.ceil(R.length / 26), r = 0, Y = 0, m = 0, l = 0, a = 0, s = 0, F = 0, p = 0; p < R.length; p++) {
                o = R[p];
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 20, 50, 20, p + 1),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var g = o.spmc
                  , z = countStrLength(g);
                z <= 34 ? LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, g) : z <= 36 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, g),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : z <= 80 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, g),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 75, 225, 20, g),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
                var c = o.ggxh
                  , d = countStrLength(c);
                d <= 8 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, c),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : d <= 16 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, c),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : d <= 20 || d <= 24 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, c),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 297, 65, 20, c),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var X = o.dw
                  , h = countStrLength(X);
                h <= 5 ? LODOP.ADD_PRINT_TEXT(N + 19 * I, 360, 42, 20, X) : h <= 10 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 360, 42, 20, X),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 360, 42, 20, X),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var u = countStrLength(o.spsl ? o.spsl : "");
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 395, 65, 20, o.spsl ? controllerLength(o.spsl, 13) : ""),
                u > 10 && (LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                const _ = o.spdj ? controllerLength(o.spdj, 13) : "";
                _.length < 12 ? (LODOP.ADD_PRINT_TEXT(N + 19 * I, 450, 82, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : (LODOP.ADD_PRINT_TEXT(N + 19 * I, 450, 82, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6.5)),
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 524, 95, 20, (1 * o.je).toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                Y += parseFloat(o.je),
                l += parseFloat(o.je),
                console.log("清单的显示22222", o),
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 614, 34, 20, ((o.sl + "").length > 4 && 1 * (o.sl + "").substring(4, 5) > 0 ? (100 * o.sl).toFixed(1) : (100 * o.sl).toFixed()) + "%"),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.ADD_PRINT_TEXT(N + 19 * I, 644, 69, 20, (1 * o.se).toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                m += parseFloat(o.se),
                a += parseFloat(o.se);
                O = T.bz || "",
                L = patch("\\n", O);
                if (L <= 2 || null === L) {
                    var y = countStrLength(O);
                    console.log(y),
                    y <= 138 || y <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 9),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                } else {
                    y = countStrLength(O);
                    if (console.log(y),
                    y <= 138 && L <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else if (y <= 190 && L <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, O || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else {
                        LODOP.SET_PRINT_STYLE("FontSize", 8);
                        var w = Number(L);
                        w = 47 + 5 * w,
                        console.log("num", w),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, w, O || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)
                    }
                }
                0 !== I && I % 25 === 0 ? (LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, Y.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, m.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, s.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, F.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, l.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, a.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", r + 1),
                LODOP.NewPage(),
                r++,
                Y = 0,
                m = 0,
                s = 0,
                F = 0,
                I = 0) : p === R.length - 1 ? (LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, Y.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", i),
                LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, m.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", i),
                LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, s.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", i),
                LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, F.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", i),
                LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, l.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", i),
                LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, a.toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "PageIndex", i)) : I++
            }
        }
        function printZzsppQD(T) {
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            LODOP.SET_PRINT_STYLE("FontColor", "#000000"),
            LODOP.ADD_PRINT_TEXT(41, 216, 360, 35, "销售货物或者提供应税劳务、服务清单"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 20, 534, 22, "购货单位名称:" + T.ghdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(120, 20, 535, 23, "销货单位名称:" + T.xhdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 20, 358, 24, "所属增值税普通发票代码:" + T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 270, 200, 23, "号码:" + T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 585, 114, 25, " 第#页/共&页"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 2),
            LODOP.ADD_PRINT_LINE(780, 300, 190, 301, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 358, 190, 359, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 400, 190, 401, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 454, 190, 455, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 528, 190, 529, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 613, 190, 614, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 642, 190, 643, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(191, 20, 190, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 20, 50, 20, "序号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 120, 145, 20, "货物（劳务）名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(215, 20, 216, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 307, 54, 20, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 365, 34, 20, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 411, 40, 20, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 475, 40, 20, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 552, 40, 20, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 617, 35, 20, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 662, 40, 20, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(760, 20, 50, 20, "合计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(740, 20, 50, 20, "折扣"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(720, 20, 50, 20, "小计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var _ = T.bz || ""
              , P = patch("\\n", _)
              , O = Number(P);
            O = 850 + 10 * O,
            LODOP.ADD_PRINT_TEXT(O, 36, 143, 25, "销货单位（章）:"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var L = T.kprq;
            L = L.substring(0, 4) + "年" + L.substring(4, 6) + "月" + L.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT(O, 473, 223, 25, "开票日期:" + L),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var E = Number(P);
            E = 875 + 10 * E,
            LODOP.ADD_PRINT_TEXT(E, 36, 600, 25, "注：本清单一式两联：第一联，销售方留存；第二联，销售方送交购买方。"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(781, 20, 782, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var D = Number(P);
            D = 800 + 10 * D,
            LODOP.ADD_PRINT_TEXT(800, 24, 44, 25, "备注"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var S = Number(P);
            S = 840 + 5 * S,
            LODOP.ADD_PRINT_LINE(S, 70, 190, 71, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(S, 20, S, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(S, 20, 190, 21, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(190, 710, S, 711, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            for (var A = 220, e = 0, N = T.zbmx, I = [], n = 0; n < N.length; n++) {
                var R = N[n];
                R.fphxz < 3 && I.push(R)
            }
            var t = Math.ceil(I.length / 25);
            console.log("清单页数打印", t);
            for (var o = 0, i = 0, r = 0, Y = 0, m = 0, l = 0, a = 0, s = 0; s < I.length; s++) {
                var F;
                R = I[s];
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 20, 50, 20, (null === (F = R) || void 0 === F ? void 0 : F.fpmxxh) || s + 1),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var p = R.spmc
                  , g = countStrLength(p);
                g <= 34 ? LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, p) : g <= 36 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, p),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : g <= 80 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, p),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, p),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
                var z = R.ggxh
                  , c = countStrLength(z);
                c <= 8 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, z),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : c <= 16 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, z),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : c <= 20 || c <= 24 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, z),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, z),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var d = R.dw
                  , X = countStrLength(d);
                X <= 5 ? LODOP.ADD_PRINT_TEXT(A + 19 * e, 360, 42, 20, d) : X <= 10 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 360, 42, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 360, 42, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var h = countStrLength(R.spsl ? R.spsl : "");
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 396, 65, 20, R.spsl ? controllerLength(R.spsl, 13) : ""),
                h > 10 && (LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                const O = R.spdj ? controllerLength(R.spdj, 13) : "";
                O.length < 12 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 451, 85, 20, R.spdj ? controllerLength(R.spdj, 13) : ""),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 451, 85, 20, R.spdj ? controllerLength(R.spdj, 13) : ""),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6.5)),
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 525, 95, 20, (1 * R.je).toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                1 === R.fphxz && (l += parseFloat(R.je)),
                i += parseFloat(R.je),
                Y += parseFloat(R.je);
                var u = R.sl;
                0 === u ? (R.spbm ? ("1" === R.lslbs && (u = "免税"),
                "2" === R.lslbs && (u = "不征税"),
                "3" === R.lslbs && (u = "0%")) : u = "***",
                "不征税" === u ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 608, 40, 20, u),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : "免税" === u ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 608, 40, 20, u),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : LODOP.ADD_PRINT_TEXT(A + 19 * e, 614, 34, 20, u),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 614, 34, 20, ((u + "").length > 4 && 1 * (u + "").substring(4, 5) > 0 ? (100 * u).toFixed(1) : (100 * u).toFixed()) + "%"),
                !1,
                !1),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var y = (1 * R.se).toFixed(2);
                console.log(y),
                r += parseFloat(y),
                m += parseFloat(y),
                1 === R.fphxz && (a += parseFloat(R.se)),
                "0.00" === y ? (y = "***",
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 644, 69, 20, y),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : LODOP.ADD_PRINT_TEXT(A + 19 * e, 644, 69, 20, y),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                console.log(e);
                _ = T.bz || "",
                P = patch("\\n", _);
                if (P <= 2 || null === P) {
                    var w = countStrLength(_);
                    console.log(w),
                    w <= 138 || w <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 9),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                } else {
                    w = countStrLength(_);
                    if (console.log(w),
                    w <= 138 && P <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else if (w <= 190 && P <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else {
                        LODOP.SET_PRINT_STYLE("FontSize", 8);
                        var v = Number(P);
                        v = 47 + 5 * v,
                        console.log("num", v),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, v, _ || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)
                    }
                }
                if (console.log("打印的num数", e),
                0 !== e && e % 24 === 0) {
                    if (0 != l && "0.00" != l || 0 != a && "0.00" != a) {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        var f = r.toFixed(2);
                        console.log(f),
                        "0.00" === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        var C = a.toFixed(2);
                        0 === C && (C = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, C),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1)
                    } else {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        f = r.toFixed(2);
                        console.log(f),
                        "0.00" === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        C = a.toFixed(2);
                        0 === C && (C = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, C),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1)
                    }
                    LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, Y.toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                    var x = m.toFixed(2);
                    "0.00" === x && (x = "***"),
                    LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, x),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1),
                    LODOP.NewPage(),
                    console.log(t, o),
                    o++,
                    i = 0,
                    r = 0,
                    l = 0,
                    a = 0,
                    e = 0
                } else if (s === I.length - 1) {
                    if (0 != l && "0.00" != l || 0 != a && "0.00" != a) {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        f = r.toFixed(2);
                        "0.00" === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        C = a.toFixed(2);
                        0 === C && (C = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, C),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t)
                    } else {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        f = r.toFixed(2);
                        "0.00" === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        C = a.toFixed(2);
                        0 === C && (C = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, C),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t)
                    }
                    LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, Y.toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                    x = m.toFixed(2);
                    "0.00" === x && (x = "***"),
                    LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, x),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", t)
                } else
                    e++
            }
        }
        function printZzsppQDFull(T) {
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            LODOP.SET_PRINT_STYLE("FontColor", "#000000"),
            LODOP.ADD_PRINT_TEXT(41, 216, 360, 35, "销售货物或者提供应税劳务、服务清单"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 14),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(90, 20, 534, 22, "购货单位名称:" + T.ghdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(120, 20, 535, 23, "销货单位名称:" + T.xhdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 20, 358, 24, "所属增值税普通发票代码:" + T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 270, 200, 23, "号码:" + T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(154, 585, 114, 25, " 第#页/共&页"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 2),
            LODOP.ADD_PRINT_LINE(780, 300, 190, 301, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 358, 190, 359, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 400, 190, 401, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 454, 190, 455, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 528, 190, 529, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 613, 190, 614, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(780, 642, 190, 643, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(191, 20, 190, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 20, 50, 20, "序号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 120, 145, 20, "货物（劳务）名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(215, 20, 216, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 307, 54, 20, "规格型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 365, 34, 20, "单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 411, 40, 20, "数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 475, 40, 20, "单价"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 552, 40, 20, "金额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 617, 35, 20, "税率"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(195, 662, 40, 20, "税额"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(760, 20, 50, 20, "合计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(740, 20, 50, 20, "折扣"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_TEXT(720, 20, 50, 20, "小计"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var _ = T.bz || ""
              , P = patch("\\n", _)
              , O = Number(P);
            O = 850 + 10 * O,
            LODOP.ADD_PRINT_TEXT(O, 36, 143, 25, "销货单位（章）:"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var L = T.kprq;
            L = L.substring(0, 4) + "年" + L.substring(4, 6) + "月" + L.substring(6, 8) + "日",
            LODOP.ADD_PRINT_TEXT(O, 473, 223, 25, "开票日期:" + L),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var E = Number(P);
            E = 875 + 10 * E,
            LODOP.ADD_PRINT_TEXT(E, 36, 600, 25, "注：本清单一式两联：第一联，销售方留存；第二联，销售方送交购买方。"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(781, 20, 782, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var D = Number(P);
            D = 800 + 10 * D,
            LODOP.ADD_PRINT_TEXT(800, 24, 44, 25, "备注"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            var S = Number(P);
            S = 840 + 5 * S,
            LODOP.ADD_PRINT_LINE(S, 70, 190, 71, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(S, 20, S, 710, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(S, 20, 190, 21, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
            LODOP.ADD_PRINT_LINE(190, 710, S, 711, 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
            for (var A = 220, e = 0, N = T.zbmx, I = [], n = 0; n < N.length; n++) {
                var R = N[n];
                R.fphxz < 3 && I.push(R)
            }
            var t = Math.ceil(I.length / 25);
            console.log("清单页数打印", t);
            for (var o = 0, i = 0, r = 0, Y = 0, m = 0, l = 0, a = 0, s = 0; s < I.length; s++) {
                R = I[s];
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 20, 50, 20, s + 1),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var F = R.spmc
                  , p = countStrLength(F);
                p <= 34 ? LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, F) : p <= 36 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, F),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : p <= 80 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, F),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 75, 225, 20, F),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
                var g = R.ggxh
                  , z = countStrLength(g);
                z <= 8 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, g),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : z <= 16 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, g),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : z <= 20 || z <= 24 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, g),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 297, 65, 20, g),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 5),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var c = R.dw
                  , d = countStrLength(c);
                d <= 5 ? LODOP.ADD_PRINT_TEXT(A + 19 * e, 360, 42, 20, c) : d <= 10 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 360, 42, 20, c),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 360, 42, 20, c),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var X = countStrLength(R.spsl ? R.spsl : "");
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 396, 65, 20, R.spsl ? controllerLength(R.spsl, 13) : ""),
                X > 10 && (LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                const O = R.spdj ? controllerLength(R.spdj, 13) : "";
                O.length < 12 ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 451, 85, 20, R.spdj ? controllerLength(R.spdj, 13) : ""),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 451, 85, 20, R.spdj ? controllerLength(R.spdj, 13) : ""),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6.5)),
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 525, 95, 20, (1 * R.je).toFixed(2)),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                1 === R.fphxz && (l += parseFloat(R.je)),
                i += parseFloat(R.je),
                Y += parseFloat(R.je),
                console.log("清单的显示1111", R);
                var h = R.sl;
                0 == h ? (R.spbm ? ("1" == R.lslbs && (h = "免税"),
                "2" === R.lslbs && (h = "不征税"),
                "3" === R.lslbs && (h = "0%")) : h = "***",
                "不征税" === h ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 608, 40, 20, h),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : "免税" === h ? (LODOP.ADD_PRINT_TEXT(A + 19 * e, 608, 40, 20, h),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : LODOP.ADD_PRINT_TEXT(A + 19 * e, 614, 34, 20, h),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : (LODOP.ADD_PRINT_TEXT(A + 19 * e, 614, 34, 20, ((h + "").length > 4 && 1 * (h + "").substring(4, 5) > 0 ? (100 * h).toFixed(1) : (100 * h).toFixed()) + "%"),
                !1,
                !1),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                var u = (1 * R.se).toFixed(2);
                console.log(u),
                r += parseFloat(u),
                m += parseFloat(u),
                1 === R.fphxz && (a += parseFloat(R.se)),
                "0.00" === u ? (u = "***",
                LODOP.ADD_PRINT_TEXT(A + 19 * e, 644, 69, 20, u),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : LODOP.ADD_PRINT_TEXT(A + 19 * e, 644, 69, 20, u),
                LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                console.log(e);
                _ = T.bz || "",
                P = patch("\\n", _);
                if (P <= 2 || null === P) {
                    var y = countStrLength(_);
                    console.log(y),
                    y <= 138 || y <= 190 ? (LODOP.SET_PRINT_STYLE("FontSize", 9),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.SET_PRINT_STYLE("FontSize", 8),
                    LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
                } else {
                    y = countStrLength(_);
                    if (console.log(y),
                    y <= 138 && P <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else if (y <= 190 && P <= 3)
                        LODOP.SET_PRINT_STYLE("FontSize", 9),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, 47, _ || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3);
                    else {
                        LODOP.SET_PRINT_STYLE("FontSize", 8);
                        var w = Number(P);
                        w = 47 + 5 * w,
                        console.log("num", w),
                        LODOP.ADD_PRINT_TEXT(784, 72, 630, w, _ || ""),
                        LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)
                    }
                }
                if (console.log("打印的num数", e),
                0 !== e && e % 24 === 0) {
                    if (0 != l && "0.00" != l || 0 != a && "0.00" != a) {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        var v = r.toFixed(2);
                        console.log(v),
                        "0.00" === v && (v = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, v),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        var f = a.toFixed(2);
                        0 === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1)
                    } else {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        v = r.toFixed(2);
                        console.log(v),
                        "0.00" === v && (v = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, v),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                        f = a.toFixed(2);
                        0 === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1)
                    }
                    LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, Y.toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1);
                    var C = m.toFixed(2);
                    "0.00" === C && (C = "***"),
                    LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, C),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", o + 1),
                    LODOP.NewPage(),
                    console.log(t, o),
                    o++,
                    i = 0,
                    r = 0,
                    l = 0,
                    a = 0,
                    e = 0
                } else if (s === I.length - 1) {
                    if (0 != l && "0.00" != l || 0 != a && "0.00" != a) {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        v = r.toFixed(2);
                        "0.00" === v && (v = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, v),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        f = a.toFixed(2);
                        0 === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t)
                    } else {
                        LODOP.ADD_PRINT_TEXT(723, 514, 110, 20, i.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        v = r.toFixed(2);
                        "0.00" === v && (v = "***"),
                        LODOP.ADD_PRINT_TEXT(723, 628, 100, 20, v),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t),
                        LODOP.ADD_PRINT_TEXT(743, 514, 110, 20, l.toFixed(2)),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                        f = a.toFixed(2);
                        0 === f && (f = "***"),
                        LODOP.ADD_PRINT_TEXT(743, 628, 100, 20, f),
                        LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                        LODOP.SET_PRINT_STYLEA(0, "PageIndex", t)
                    }
                    LODOP.ADD_PRINT_TEXT(763, 514, 110, 20, Y.toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", t);
                    C = m.toFixed(2);
                    "0.00" === C && (C = "***"),
                    LODOP.ADD_PRINT_TEXT(763, 628, 100, 20, C),
                    LODOP.SET_PRINT_STYLEA(0, "FontColor", "#000000"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                    LODOP.SET_PRINT_STYLEA(0, "PageIndex", t)
                } else
                    e++
            }
        }
        function addPrintLineZzszp(T, _, P, O, L, E, D, S, A) {
            if (console.log("商品添加shuikong", T, _, P, O, L, E, D, S, A),
            _) {
                var e = countStrLength(_);
                e <= 30 ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 90, 197, 20, _) : e <= 34 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 90, 197, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : e <= 40 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 90, 197, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(214 + 17 * T, 90, 197, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0)
            }
            if (P) {
                var N = countStrLength(P);
                N <= 14 ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 281, 97, 20, P) : N <= 16 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 281, 97, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : N <= 18 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 281, 97, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(214 + 17 * T, 281, 97, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
            if (O) {
                var I = countStrLength(O);
                I <= 6 ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 378, 45, 20, O) : I <= 8 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 378, 45, 20, O),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : (LODOP.ADD_PRINT_TEXT(214 + 17 * T, 378, 45, 20, O),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
            if (L) {
                var n = countStrLength(L);
                n <= 11 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 405, 86, 40, L),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 394, 96, 20, L),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)
            }
            if (E) {
                var R = countStrLength(E);
                LODOP.ADD_PRINT_TEXT(217 + 17 * T, 480, 90, 20, E),
                R > 11 && LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)
            }
            D && (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 569, 110, 20, D),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)),
            S && (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 684, 42, 20, S),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)),
            A && (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 720, 108, 20, A),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3))
        }
        function addPrintLineZzspp(T, _, P, O, L, E, D, S, A) {
            if (_) {
                var e = countStrLength(_);
                e <= 30 ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 90, 197, 20, _) : e <= 34 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 90, 197, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : e <= 40 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 90, 197, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(214 + 17 * T, 90, 197, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0)
            }
            if (P) {
                var N = countStrLength(P);
                N <= 14 ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 281, 97, 20, P) : N <= 16 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 281, 97, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : N <= 18 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 281, 97, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(214 + 17 * T, 281, 97, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
            if (O) {
                var I = countStrLength(O);
                I <= 6 ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 378, 45, 20, O) : I <= 8 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 378, 45, 20, O),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : (LODOP.ADD_PRINT_TEXT(214 + 17 * T, 378, 45, 20, O),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3))
            }
            if (L) {
                var n = countStrLength(L);
                n <= 11 ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 405, 86, 40, L),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 394, 96, 20, L),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)
            }
            if (E) {
                var R = countStrLength(E);
                LODOP.ADD_PRINT_TEXT(217 + 17 * T, 480, 90, 20, E),
                R > 11 && LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)
            }
            D && (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 569, 110, 20, D),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)),
            S + "" !== "" && "0" === S && 0 === Number(A) ? (S = "***",
            LODOP.ADD_PRINT_TEXT(217 + 17 * T, 684, 37, 20, S),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : "0***" === S || "1***" === S || "j***" === S ? (LODOP.ADD_PRINT_TEXT(217 + 17 * T, 684, 37, 20, "***"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : "免税" === S || "不征税" === S || "0%" === S ? ("不征税" === S ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 666, 60, 20, S) : LODOP.ADD_PRINT_TEXT(217 + 17 * T, 684, 37, 20, S),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : null === S || S + "" === "" || "0" === S && 0 !== A ? LODOP.ADD_PRINT_TEXT(217 + 17 * T, 684, 37, 20, "") : LODOP.ADD_PRINT_TEXT(217 + 17 * T, 684, 37, 20, ((S + "").length > 4 && 1 * (S + "").substring(4, 5) > 0 ? (100 * S).toFixed(1) : (100 * S).toFixed()) + "%"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            0 === Number(A) ? (A = "***",
            LODOP.ADD_PRINT_TEXT(217 + 17 * T, 720, 108, 20, A),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New")) : LODOP.ADD_PRINT_TEXT(217 + 17 * T, 720, 108, 20, A),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)
        }
        function filterMxzbPrint(T) {
            var _ = "1" === T.qdbz;
            return $.map(T.mxzb, (function(T) {
                return _ && (!_ || "3" !== T.fphxz && "4" !== T.fphxz) || "99" === T.fphxz ? null : T
            }
            ))
        }
        function filterMxzbQDPrint(T) {
            var _ = "1" === T.qdbz;
            return $.map(T.mxzb, (function(T) {
                return !_ || "1" !== T.fphxz && "2" !== T.fphxz && "0" !== T.fphxz || "99" === T.fphxz ? null : T
            }
            ))
        }
        function printRzxh(T) {
            LODOP.PRINT_INITA("12.7mm", "12.7mm", "209mm", "147mm", "日终销号列表"),
            LODOP.SET_PRINT_PAGESIZE(1, 2090, 1470, "CreateCustomPage"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 890, 700, ""),
            LODOP.ADD_PRINT_TEXT(0, 260, 238, 26, "增值税发票销号表"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 18),
            LODOP.SET_PRINT_STYLEA(0, "Horient", 2),
            LODOP.ADD_PRINT_TEXT(40, 0, 259, 20, "查询用户：" + T.czy),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(40, 260, 204, 20, "查询终端：" + T.kpd),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(40, 461, 306, 20, "打印时间：" + T.dysj),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(91, 0, 137, 20, "发票种类"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(91, 127, 144, 20, "发票代码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(91, 251, 146, 20, "发票起始号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(91, 396, 152, 20, "发票终止号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(91, 540, 159, 20, "销号数量"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(91, 620, 159, 20, "状态"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13);
            var _ = 0
              , P = 0;
            $.each(T.xhlb, (function(T, O) {
                LODOP.ADD_PRINT_TEXT(122 + 30 * T, 0, 137, 20, O[0]),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
                LODOP.ADD_PRINT_TEXT(122 + 30 * T, 127, 144, 20, O[3]),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
                LODOP.ADD_PRINT_TEXT(122 + 30 * T, 251, 146, 20, O[2]),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
                LODOP.ADD_PRINT_TEXT(122 + 30 * T, 396, 152, 20, O[1]),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
                LODOP.ADD_PRINT_TEXT(122 + 30 * T, 540, 159, 20, O[4]),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
                LODOP.ADD_PRINT_TEXT(122 + 30 * T, 620, 159, 20, "1" === O[5] ? "空白作废" : "正常"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
                "1" === O[5] ? _ += O[4] : P += O[4]
            }
            )),
            LODOP.ADD_PRINT_TEXT(66, 0, 259, 20, "销号总数：" + (_ + P)),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(66, 260, 204, 20, "正常总数：" + P),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.ADD_PRINT_TEXT(66, 461, 306, 20, "空白作废总数：" + _),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 13),
            LODOP.PREVIEW()
        }
        function printSkmOneByOne(T, _, P) {
            var O = 2;
            if (null == T)
                return element_ui__WEBPACK_IMPORTED_MODULE_19__["MessageBox"].alert("空白作废，无法打印");
            for (var L = 0; L < 4; L++)
                for (var E = T.substring(28 * L, 28 * L + 28), D = 0, S = 0; S < 28; S++)
                    0 !== S && S % O === 0 && S % 8 !== 0 && D++,
                    LODOP.ADD_PRINT_TEXT(_ + 18 * L, P + 10 * S - D, 15, 15, E.charAt(S)),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)
        }
        function printFullMmqOneByOne(T, _, P) {
            let O = T;
            LODOP.ADD_PRINT_TEXT(_, P, 500, 15, O.mmqOne),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(_ + 20, P, 500, 15, O.mmqTwo),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(_ + 40, P, 500, 15, O.mmqThree),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)
        }
        function printJsfp(T, _, P, O, L, E) {
            if (LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            "02" === L) {
                LODOP.PRINT_INITA((_ ? 0 : P || 0) + "mm", (_ ? 0 : O || 0) + "mm", "76mm", "152.4mm", "增值税普通发票(卷式)" + L),
                LODOP.SET_PRINT_PAGESIZE(1, 760, 1524, "CreateCustomPage"),
                LODOP.ADD_PRINT_SETUP_BKIMG("<img src='76-152.jpg'/>"),
                LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", !0);
                var D = T.fphm;
                LODOP.ADD_PRINT_TEXT(165, 80, 70, 10, D),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(165, 188, 93, 12, T.jqbh),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(180, 80, 212, 26, T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(211, 81, 150, 12, T.xhdwdm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(123, 79, 150, 20, ""),
                LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
                LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(144, 79, 150, 20, ""),
                LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
                LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                h = T.kprq,
                h = h.substring(0, 4) + "-" + h.substring(4, 6) + "-" + h.substring(6, 8),
                LODOP.ADD_PRINT_TEXT(227, 81, 70, 20, h),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(228, 180, 100, 20, T.skr),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(242, 20, 270, 26, "          " + T.ghdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(273, 84, 212, 18, T.ghdwdm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6);
                (1 * T.hjse).toFixed(2);
                var S = (1 * T.jshj).toFixed(2)
                  , A = je2Upper(T.jshj);
                void 0 == T.se && (T.se = 0);
                var e = (1 * T.hjje).toFixed(2);
                LODOP.ADD_PRINT_TEXT(414, 80, 100, 12, e),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(429, 80, 100, 12, m),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(444, 80, 100, 12, S),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(460, 80, 239, 12, A),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(477, 80, 150, 12, T.skm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体");
                var N = T.zbmx;
                "1" === N._count && (N = [T.zbmx.group]);
                for (var I = 0; I < N.length; I++) {
                    var n = N[I]
                      , R = n.xm;
                    if ("" === R)
                        break;
                    var t = n.hsdj
                      , o = (1 * t).toFixed(2);
                    o = delRight(String(o));
                    var i = n.sl
                      , r = (1 * i).toFixed(2);
                    r = delRight(String(r));
                    var Y = n.hsje;
                    LODOP.ADD_PRINT_TEXT(302 + 35 * I, 16, 90, 24, R),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                    LODOP.ADD_PRINT_TEXT(302 + 35 * I, 50, 71, 20, 0 === o ? "" : o),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                    LODOP.ADD_PRINT_TEXT(302 + 35 * I, 110, 54, 20, 0 === r ? "" : r),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                    LODOP.ADD_PRINT_TEXT(302 + 35 * I, 160, 74, 20, (1 * Y).toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)
                }
                LODOP.SET_PRINT_STYLEA(0, "Stretch", 2)
            } else if ("07" === L) {
                LODOP.PRINT_INITA((_ ? 0 : P || 0) + "mm", (_ ? 0 : O || 0) + "mm", "57mm", "177.8mm", "增值税普通发票(卷式)" + L),
                LODOP.SET_PRINT_PAGESIZE(1, 570, 1778, "CreateCustomPage"),
                LODOP.ADD_PRINT_SETUP_BKIMG('<img src="57-177.8.jpg">'),
                LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", !0);
                D = T.fphm;
                var m = (1 * T.se).toFixed(2);
                S = (1 * T.jshj).toFixed(2),
                A = je2Upper(T.jshj);
                void 0 == T.se && (T.se = 0);
                e = (1 * T.hjje).toFixed(2);
                LODOP.ADD_PRINT_TEXT(165, 77, 129, 10, D),
                LODOP.ADD_PRINT_TEXT(180, 77, 82, 14, T.jqbh),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 11),
                LODOP.ADD_PRINT_TEXT(195, 79, 130, 46, T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 0),
                LODOP.ADD_PRINT_TEXT(242, 88, 130, 16, T.xhdwdm),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 11),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 0),
                LODOP.ADD_PRINT_TEXT(130, 77, 129, 10, ""),
                LODOP.ADD_PRINT_TEXT(150, 77, 82, 14, ""),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 11),
                h = T.kprq,
                h = h.substring(0, 4) + "-" + h.substring(4, 6) + "-" + h.substring(6, 8),
                LODOP.ADD_PRINT_TEXT(257, 80, 123, 14, h),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 11),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing"),
                LODOP.ADD_PRINT_TEXT(289, 20, 200, 46, "          " + T.ghdwmc),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(272, 80, 110, 16, T.skr),
                LODOP.ADD_PRINT_TEXT(552, 65, 100, 12, "￥" + S),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1),
                LODOP.ADD_PRINT_TEXT(334, 86, 130, 14, T.ghdwdm),
                "01" === T.fpzt || "04" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(542, 20, 142, 20, "原发票号码：" + T.yfphm),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.ADD_PRINT_TEXT(531, 20, 155, 20, "原发票代码：" + T.yfpdm),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.ADD_PRINT_TEXT(568, 62, 186, 12, "负" + A),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : (LODOP.ADD_PRINT_TEXT(568, 62, 186, 12, A),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1));
                var l = T.zbmx
                  , a = 0;
                "1" === l._count && (l = [T.zbmx.group]);
                for (I = 0; I < l.length; I++) {
                    n = l[I],
                    R = n.xm;
                    var s = Math.ceil(countStrLength(R) / 10)
                      , F = Math.ceil(countStrLength(R) / 8);
                    n.zyhs7 = s,
                    n.zyhs8 = F,
                    a += F
                }
                var p = 0;
                for (I = 0; I < l.length; I++) {
                    n = l[I],
                    R = n.spmc;
                    if ("" === R)
                        break;
                    t = "fpcxQd" == E ? n.spdj : n.hsdj,
                    o = (1 * t).toFixed(2),
                    i = n.spsl,
                    r = (1 * i).toFixed(2);
                    r = delRight(String(r));
                    Y = "fpcxQd" == E ? n.je : n.hsje;
                    countStrLength(T.bz) > 0 ? a > 11 ? (PrintLine07jsfp7hz(p, R, o, r, Y),
                    p += n.zyhs7) : (PrintLine07jsfp8hz(p, R, o, r, Y),
                    p += n.zyhs8) : a > 14 ? (PrintLine07jsfp7hz(p, R, o, r, Y),
                    p += n.zyhs7) : (PrintLine07jsfp8hz(p, R, o, r, Y),
                    p += n.zyhs8)
                }
                addPrintLineJsfpBZ(L, T.bz),
                LODOP.ADD_PRINT_TEXT(584, 65, 168, 16, T.skm),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -6);
                var g = localStorage.getItem("key")
                  , z = JSON.parse(g)
                  , c = z.sfdyewm;
                "true" !== c && !0 !== c || (LODOP.ADD_PRINT_IMAGE(600, 20, 66, 66, "data:image/png;base64," + T.ewm),
                LODOP.SET_PRINT_STYLEA(0, "Stretch", 2))
            } else if ("06" === L) {
                LODOP.PRINT_INITA((_ ? 0 : P || 0) + "mm", (_ ? 0 : O || 0) + "mm", "76mm", "177.8mm", "增值税普通发票(卷式)" + L),
                LODOP.SET_PRINT_PAGESIZE(1, 760, 1778, "CreateCustomPage"),
                LODOP.ADD_PRINT_SETUP_BKIMG("<img src='76-177.8.jpg'/>"),
                LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", !0);
                var d = T.fphm;
                LODOP.ADD_PRINT_TEXT(165, 73, 67, 10, d),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(166, 195, 83, 12, T.jqbh),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(181, 20, 247, 23, "          " + T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "HtmWaitMilSecs", 100),
                LODOP.ADD_PRINT_TEXT(211, 90, 150, 12, T.xhdwdm),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(130, 77, 129, 10, ""),
                LODOP.ADD_PRINT_TEXT(150, 77, 82, 14, ""),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 11),
                h = T.kprq,
                h = h.substring(0, 4) + "-" + h.substring(4, 6) + "-" + h.substring(6, 8),
                LODOP.ADD_PRINT_TEXT(227, 81, 80, 20, h),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(227, 195, 100, 20, T.skr),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(244, 20, 247, 30, "          " + T.ghdwmc),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(275, 90, 201, 18, T.ghdwdm),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6);
                m = (1 * T.se).toFixed(2),
                S = (1 * T.jshj).toFixed(2),
                A = je2Upper(T.jshj);
                void 0 == T.se && (T.se = 0);
                e = (1 * T.hjje).toFixed(2);
                LODOP.ADD_PRINT_TEXT(554, 85, 100, 12, "￥" + S),
                LODOP.ADD_PRINT_TEXT(585, 85, 195, 12, T.skm),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                "01" === T.fpzt || "04" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(533, 18, 155, 20, "原发票代码：" + T.yfpdm),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.ADD_PRINT_TEXT(543, 18, 145, 20, "原发票号码：" + T.yfphm),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.ADD_PRINT_TEXT(570, 85, 239, 12, "负" + A),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : (LODOP.ADD_PRINT_TEXT(570, 85, 239, 12, A),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1));
                N = T.zbmx;
                var X = 0;
                a = 0;
                Array.isArray(T.zbmx) || (N = [T.zbmx.group]);
                for (I = 0; I < N.length; I++) {
                    n = N[I],
                    R = n.spmc,
                    s = Math.ceil(countStrLength(R) / 14),
                    F = Math.ceil(countStrLength(R) / 12);
                    n.zyhs7 = s,
                    n.zyhs8 = F,
                    a += F
                }
                for (p = 0,
                I = 0; I < N.length; I++) {
                    n = N[I],
                    R = n.spmc;
                    if ("" === R)
                        break;
                    t = n.hsdj,
                    o = Number((1 * t).toFixed(2)),
                    i = n.spsl,
                    r = (1 * i).toFixed(2);
                    r = delRight(String(r));
                    Y = n.hsje;
                    countStrLength(T.bz) > 0 ? a > 17 ? (PrintLine06jsfp7hz(p, R, o, r, Y),
                    p += n.zyhs7) : (PrintLine06jsfp8hz(p, R, o, r, Y),
                    p += n.zyhs8) : a > 19 ? (PrintLine06jsfp7hz(p, R, o, r, Y),
                    p += n.zyhs7) : (PrintLine06jsfp8hz(p, R, o, r, Y),
                    p += n.zyhs8)
                }
                addPrintLineJsfpBZ(L, T.bz);
                g = localStorage.getItem("key"),
                z = JSON.parse(g),
                c = z.sfdyewm;
                "true" !== c && !0 !== c || (LODOP.ADD_PRINT_IMAGE(600, 20, 66, 66, "data:image/png;base64," + T.ewm),
                LODOP.SET_PRINT_STYLEA(0, "Stretch", 2))
            } else if ("08" === L) {
                LODOP.PRINT_INITA((_ ? 0 : P || 0) + "mm", (_ ? 0 : O || 0) + "mm", "76mm", "152.4mm", "增值税普通发票(卷式)" + L),
                LODOP.SET_PRINT_PAGESIZE(1, 760, 1524, "CreateCustomPage"),
                LODOP.ADD_PRINT_SETUP_BKIMG("<img src='76-152.4.jpg'/>"),
                LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", !0);
                var h;
                D = T.fphm;
                LODOP.ADD_PRINT_TEXT(211, 16, 120, 10, "机打号码：" + D),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "HtmWaitMilSecs", 100),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(211, 127, 188, 12, "机器编号：" + T.jqbh),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(223, 16, 260, 26, "销售方名称：" + T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(257, 16, 264, 12, "销售方税号：" + T.xhdwdm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(109, 108, 150, 20, ""),
                LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
                LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(131, 109, 150, 20, ""),
                LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", !0),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
                LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                h = T.kprq,
                h = h.substring(0, 4) + "-" + h.substring(4, 6) + "-" + h.substring(6, 8),
                LODOP.ADD_PRINT_TEXT(269, 16, 129, 20, "开票日期：" + h),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1),
                LODOP.ADD_PRINT_TEXT(269, 125, 153, 20, "收款员：" + T.skr),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1),
                LODOP.ADD_PRINT_TEXT(156, 45, 230, 35, "               " + T.ghdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.ADD_PRINT_TEXT(199, 16, 262, 18, "购货方税号：" + T.ghdwdm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6);
                m = (1 * T.se).toFixed(2),
                S = (1 * T.jshj).toFixed(2),
                A = je2Upper(T.jshj);
                void 0 == T.se && (T.se = 0);
                e = (1 * T.hjje).toFixed(2);
                LODOP.ADD_PRINT_TEXT(414, 16, 268, 12, "合计金额（小写）：" + e),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(429, 16, 268, 12, "合计税额（小写）：" + m),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(444, 16, 268, 12, "价税合计（小写）：" + S),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                "01" === T.fpzt || "04" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(390, 16, 155, 20, "原发票代码：" + T.yfpdm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(401, 16, 145, 20, "原发票号码：" + T.yfphm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(460, 16, 289, 12, "合计金额（大写）：负" + A),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : (LODOP.ADD_PRINT_TEXT(460, 16, 289, 12, "合计金额（大写）：" + A),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7.5),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)),
                LODOP.ADD_PRINT_TEXT(475, 16, 268, 12, "检验码：" + T.skm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(283, 15, 50, 20, "项目"),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(283, 88, 61, 20, "含税单价"),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(283, 160, 40, 20, "数量"),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.ADD_PRINT_TEXT(283, 208, 73, 20, "含税金额"),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体");
                N = T.zbmx,
                X = 0;
                "1" === N._count && (N = [T.zbmx.group]);
                for (I = 0; I < N.length; I++) {
                    n = N[I],
                    R = n.spmc;
                    if ("" === R)
                        break;
                    t = n.hsdj,
                    o = (1 * t).toFixed(2),
                    i = n.spsl,
                    r = (1 * i).toFixed(2);
                    r = delRight(String(r));
                    Y = n.hsje;
                    var u = countStrLength(R)
                      , y = Math.ceil(u / 12);
                    LODOP.ADD_PRINT_TEXT(295 + X, 16, 78, 20, R),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                    LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1),
                    LODOP.ADD_PRINT_TEXT(295 + X, 71, 71, 15, 0 === o ? "" : o),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -7),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                    LODOP.ADD_PRINT_TEXT(295 + X, 132, 58, 15, 0 === r ? "" : r),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                    LODOP.ADD_PRINT_TEXT(295 + X, 181, 75, 15, (1 * Y).toFixed(2)),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
                    X += 11 * y
                }
                g = localStorage.getItem("key"),
                z = JSON.parse(g),
                c = z.sfdyewm;
                "true" !== c && !0 !== c || (LODOP.ADD_PRINT_IMAGE(600, 20, 66, 66, "data:image/png;base64," + T.ewm),
                LODOP.SET_PRINT_STYLEA(0, "Stretch", 2)),
                LODOP.SET_PRINT_STYLEA(0, "Stretch", 2)
            }
        }
        function printJdcfp(T, _) {
            console.log(T, "123465798"),
            LODOP.SET_PRINT_PAGESIZE(1, 2410, 1770, "CreateCustomPage"),
            LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", !0),
            "87" != T.fplxdm && (LODOP.ADD_PRINT_TEXT(50, 705, 131, 20, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(72, 705, 125, 20, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1)),
            LODOP.ADD_PRINT_TEXT(127, 209, "51.3mm", 20, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(155, 207, 196, 20, T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(184, 207, 196, 20, T.jqbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -2),
            printJdcfpSkmOneByOne("", 115, 447),
            "87" == T.fplxdm ? (LODOP.ADD_PRINT_TEXT(127, 458, "80mm", 20, T.mmqOne),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(155, 458, "80mm", 20, T.mmqTwo),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(170, 458, "80mm", 20, T.mmqThree),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(155, 458, "80mm", 20, T.skm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10));
            var P = "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc.length : T.ghfmc.length;
            P < 20 ? (LODOP.ADD_PRINT_TEXT(240, 185, 260, 45, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc : T.ghfmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.ADD_PRINT_TEXT(245, 185, 247, 15, T.sfzhm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : P >= 20 && P < 45 ? (LODOP.ADD_PRINT_TEXT(229, 185, 260, 45, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc : T.ghfmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.ADD_PRINT_TEXT(247, 185, 247, 15, T.sfzhm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : P >= 45 && (LODOP.ADD_PRINT_TEXT(225, 185, 260, 45, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwmc : T.ghfmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.ADD_PRINT_TEXT(253, 185, 247, 15, T.sfzhm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)),
            LODOP.ADD_PRINT_TEXT(234, 604, 238, 30, "87" == T.fplxdm || "03" == T.fplxdm ? T.ghdwdm : T.ghfsbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var O = "87" == T.fplxdm || "03" == T.fplxdm ? T.zbmx[0].spmc.split("*")[2].length : T.cllx.length;
            O < 13 ? (LODOP.ADD_PRINT_TEXT(280, 187, 165, 21, "87" == T.fplxdm || "03" == T.fplxdm ? T.zbmx[0].spmc.split("*")[2] : T.cllx),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : O >= 13 && (LODOP.ADD_PRINT_TEXT(277, 187, 160, 21, "87" == T.fplxdm || "03" == T.fplxdm ? T.zbmx[0].spmc.split("*")[2] : T.cllx),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
            var L = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cpxh.length : T.cpxh.length;
            L < 20 ? (LODOP.ADD_PRINT_TEXT(280, 411, 260, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cpxh : T.cpxh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : L >= 20 && (LODOP.ADD_PRINT_TEXT(282, 411, 260, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cpxh : T.cpxh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
            var E = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cd.length : T.cd.length;
            E < 10 ? (LODOP.ADD_PRINT_TEXT(280, 709, 127, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cd : T.cd),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : E >= 10 && (LODOP.ADD_PRINT_TEXT(278, 703, 130, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cd : T.cd),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
            var D = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].hgzh.length : T.hgzh.length;
            D < 23 ? (LODOP.ADD_PRINT_TEXT(316, 185, 168, 25, "87" == T.fplxdm || "03" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].hgzh : T.hgzh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : D >= 23 && (LODOP.ADD_PRINT_TEXT(316, 185, 168, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].hgzh : T.hgzh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)),
            LODOP.ADD_PRINT_TEXT(316, 447, 190, 19, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].jkzmsh : T.jkzmsh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
            LODOP.ADD_PRINT_TEXT(316, 716, 134, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].sjdh : T.sjdh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
            LODOP.ADD_PRINT_TEXT(349, 187, 259, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].fdjhm : T.fdjhm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
            LODOP.ADD_PRINT_TEXT(350, 591, 248, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cjh : T.clsbdh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            "87" == T.fplxdm && ("00" !== T.fpzt && "03" !== T.fpzt || LODOP.ADD_PRINT_IMAGE(384, 190, 392, 20, "data:image/bmp;base64,Qk0GAwAAAAAAADYAAAAoAAAADwAAAA8AAAABABgAAAAAANACAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////////////AAAAAAAA////////////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA"));
            var S = je2Upper(T.jshj) + ""
              , A = 1 * T.jshj;
            "87" == T.fplxdm ? LODOP.ADD_PRINT_TEXT(384, "01" === T.fpzt || "04" === T.fpzt ? 190 : 204, 392, 20, "01" === T.fpzt || "04" === T.fpzt ? "负数：" + S : S) : LODOP.ADD_PRINT_TEXT(384, "01" === T.fpzt || "04" === T.fpzt ? 190 : 187, 392, 20, "01" === T.fpzt || "04" === T.fpzt ? "负数：" + S : S),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(384, 662, 170, 20, ("87" == T.fplxdm ? "￥" : "") + A.toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            var e = T.xhdwmc.length;
            e < 30 ? (LODOP.ADD_PRINT_TEXT(420, 187, 390, 26, T.xhdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : e >= 30 && (LODOP.ADD_PRINT_TEXT(418, 187, 390, 26, T.xhdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
            LODOP.ADD_PRINT_TEXT(422, 619, 184, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[1] : T.dh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(453, 188, 360, 25, T.xhdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(456, 619, 220, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[1] : T.zh),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var N = "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[0].length : T.dz.length;
            N < 22 ? (LODOP.ADD_PRINT_TEXT(490, 185, 305, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[0] : T.dz),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : N >= 22 && (LODOP.ADD_PRINT_TEXT(494, 187, 285, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwdzdh.split(" ")[0] : T.dz),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8));
            var I, n, R = "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[0].length : T.khyh.length;
            R < 23 ? (LODOP.ADD_PRINT_TEXT(492, 541, 295, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[0] : T.khyh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : R >= 23 && (LODOP.ADD_PRINT_TEXT(486, 539, 295, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.xhdwyhzh.split(" ")[0] : T.khyh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5));
            var t = T.zbmx[0].lslbs;
            if ("1" === t && (I = "免税",
            n = "***"),
            "2" === t && (I = "不征税",
            n = "***"),
            "3" === t && (I = "0%",
            n = "***"),
            "" === t || null === t || "0" == t) {
                var o = T.zbmx[0].sl;
                0 === o ? (I = "0%",
                n = "***") : "87" == T.fplxdm ? (I = 100 * o + "%",
                n = "￥" + (1 * T.se).toFixed(2)) : (I = o,
                n = (1 * T.se).toFixed(2))
            }
            LODOP.ADD_PRINT_TEXT(527, 194, 77, 26, I),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(525, 342, 169, 25, n),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var i = T.swjgmc.length;
            i < 20 ? (LODOP.ADD_PRINT_TEXT(525, 577, 256, 35, T.swjgmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.ADD_PRINT_TEXT(537, 577, 195, 20, T.swjgdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : i >= 20 && i < 40 ? (LODOP.ADD_PRINT_TEXT(521, 577, 256, 35, T.swjgmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.ADD_PRINT_TEXT(539, 577, 195, 20, T.swjgdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : i >= 40 && (LODOP.ADD_PRINT_TEXT(520, 577, 256, 35, T.swjgmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5),
            LODOP.ADD_PRINT_TEXT(544, 577, 195, 20, T.swjgdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)),
            console.log(T.hjje, "fpmx.hjjefpmx.hjjefpmx.hjje"),
            LODOP.ADD_PRINT_TEXT(571, 213, 170, 19, ("87" == T.fplxdm ? "￥" : "") + ("87" == T.fplxdm || "03" == T.fplxdm ? T.hjje.toFixed(2) : (1 * T.bhsj).toFixed(2))),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1);
            var r, Y = "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cldw.length : T.dw.length;
            Y >= 5 ? (LODOP.ADD_PRINT_TEXT(572, 668, 60, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cldw : T.dw),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7)) : (LODOP.ADD_PRINT_TEXT(572, 668, 44, 20, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].cldw : T.dw),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)),
            LODOP.ADD_PRINT_TEXT(572, 784, 50, 25, "87" == T.fplxdm || "03" == T.fplxdm ? T.tdys[0].xcrs : T.xcrs),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
            LODOP.ADD_PRINT_TEXT(602, 450, 100, 20, T.kpr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(572, 452, 176, 30, T.tdys[0].wspzhm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            r = T.kprq,
            r = r.substring(0, 4) + "-" + r.substring(4, 6) + "-" + r.substring(6, 8),
            LODOP.ADD_PRINT_TEXT(84, 157, 120, 20, r),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_SHAPE(2, 103, 82, 745, 497, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 103, 434, 393, 119, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 103, 184, 1, 497, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(127, 92, 85, 20, "机打代码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_SHAPE(0, 221, 82, 352, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 270, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 305, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 339, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 376, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 410, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 481, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 445, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 515, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 560, 82, 745, 1, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, 103, 406, 1, 119, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 221, 434, 1, 49, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, 222, 601, 1, 47, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 269, 342, 65, 36, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 269, 661, 40, 36, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 304, 342, 95, 35, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 304, 637, 63, 35, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 339, 437, 150, 37, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 409, 569, 44, 72, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 480, 475, 62, 35, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 514, 278, 62, 46, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 514, 491, 82, 46, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 559, 357, 90, 41, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 559, 625, 40, 41, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(2, 559, 704, 62, 41, 0, 1, "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(155, 92, 85, 20, "机打号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(184, 92, 85, 20, "机器编号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(128, 411, 21, 79, "税控码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "AlignJustify", 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            "87" == T.fplxdm || "03" == T.fplxdm ? LODOP.ADD_PRINT_TEXT(240, 92, 89, 45, "购买方名称") : LODOP.ADD_PRINT_TEXT(223, 92, 89, 45, "购买方名称及\n身份证号码/\n组织结构代码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(281, 92, 90, 20, "车辆类型"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(281, 347, 64, 20, "厂牌型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(281, 670, 39, 20, "产地"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            "87" == T.fplxdm || "03" == T.fplxdm ? LODOP.ADD_PRINT_TEXT(223, 469, 100, 50, "纳税人识别号/\n身份证号码/\n组织结构代码") : LODOP.ADD_PRINT_TEXT(235, 469, 100, 20, "纳税人识别号"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(313, 92, 90, 20, "合格证号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(350, 92, 80, 20, "发动机号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(313, 345, 80, 20, "进口证明号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(313, 639, 63, 20, "商检单号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(350, 440, 155, 25, "车辆识别号代码/车架号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(384, 92, 95, 20, "价税合计"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(384, 627, 41, 20, "小写"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 92, 95, 20, "销货单位名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(420, 573, 39, 20, "电话"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(456, 573, 36, 20, "账号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(456, 92, 90, 20, "纳税人识别号"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(491, 92, 90, 20, "地址"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(522, 92, 95, 41, "增值税税率\n或 征 收 率"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(522, 285, 53, 35, "增值税\n税 额"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(491, 481, 63, 20, "开户银行"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(522, 495, 84, 36, "主管税务\n机关及代码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(571, 92, 85, 20, "不含税价"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(571, 185, 41, 20, "小写"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.ADD_PRINT_TEXT(571, 360, 85, 20, "完税凭证号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(571, 630, 36, 20, "吨位"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(571, 709, 65, 20, "限乘人数"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(602, 81, 100, 20, "销货单位盖章"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(602, 384, 55, 20, "开票人"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(602, 631, 142, 20, "备注：一车一票"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(84, 86, 75, 20, "开票日期"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            "87" != T.fplxdm && (LODOP.ADD_PRINT_TEXT(50, 629, 75, 20, "发票代码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(73, 630, 74, 20, "发票号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1)),
            LODOP.ADD_PRINT_TEXT(11, 285, 368, 30, "机 动  车  销  售  统  一  发  票"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(54, 379, 153, 30, "发   票   联"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_IMAGE(15, 90, 66, 66, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 1)
        }
        function printEscFullfp(T, _) {
            LODOP.SET_PRINT_PAGESIZE(1, "216.51mm", "178.01mm", "CreateCustomPage"),
            LODOP.ADD_PRINT_SHAPE(2, "30.27mm", "9mm", "200mm", "131mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "58.21mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "66.2mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, "74mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "89.51mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "97.29mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "105.09mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "113mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "120.6mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "128.4mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "144.01mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "151.9mm", "9.21mm", "200mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, "30.27mm", "28.71mm", "0.21mm", "21.01mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "30.27mm", "100.99mm", "0.21mm", "21.01mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(1, "30.22mm", "109.01mm", "0.21mm", "21.01mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "49mm", "0.21mm", "100.7mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "114.91mm", "0.21mm", "7.2mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "66.2mm", "114.91mm", "0.21mm", "7.81mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "51.01mm", "152.51mm", "0.21mm", "30.8mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "58.21mm", "164.49mm", "0.21mm", "7.99mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "74mm", "164.49mm", "0.21mm", "31.09mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "84.01mm", "0.21mm", "15.5mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "102mm", "0.21mm", "15.5mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "81.81mm", "142.9mm", "0.21mm", "15.5mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "97.29mm", "152.51mm", "0.21mm", "7.81mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "113mm", "134.99mm", "0.21mm", "7.59mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "113mm", "152.51mm", "0.21mm", "7.59mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "120.6mm", "164.49mm", "0.21mm", "7.81mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "120.6mm", "177.01mm", "0.21mm", "7.81mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "128.4mm", "110.99mm", "0.21mm", "15.61mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "128.4mm", "128.91mm", "0.21mm", "15.61mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "144.01mm", "165.5mm", "0.21mm", "7.91mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "144.01mm", "177.01mm", "0.21mm", "7.81mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_SHAPE(0, "136.5mm", "110.99mm", "98mm", "0.21mm", 0, 1),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT("34.32mm", "9.95mm", "20mm", "16.48mm", "机打代码\n机打号码\n机器编号"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 3),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT("8.23mm", "70.54mm", "78mm", "6.11mm", "二手车销售统一发票"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 8),
            LODOP.ADD_PRINT_TEXT(73, 322, 200, 20, "发票联"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 16),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 24),
            LODOP.ADD_PRINT_TEXT(89, 36, 100, 19, "开票日期："),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            "88" != T.fplxdm && (LODOP.ADD_PRINT_TEXT("11.54mm", "155mm", "20mm", "5mm", "发票代码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT("19.31mm", "155mm", "19mm", "5mm", "发票号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3)),
            LODOP.ADD_PRINT_TEXT(125, 383, 31, 71, "税控码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", 5),
            LODOP.ADD_PRINT_TEXT(201, 44, 154, 19, "买方单位/个人 "),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 9),
            LODOP.ADD_PRINT_TEXT(231, 34, 158, 20, "买方单位/个人住址"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 4),
            LODOP.ADD_PRINT_TEXT(258, 38, 154, 19, "卖方单位/个人"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 9),
            LODOP.ADD_PRINT_TEXT(289, 34, 158, 20, "卖方单位/个人住址"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 4),
            LODOP.ADD_PRINT_TEXT(318, 42, 169, 20, "车牌照号"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 28),
            LODOP.ADD_PRINT_TEXT(348, 33, 160, 20, "车架号/车辆识别代码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(377, 40, 157, 20, "车价合计（大写）"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 6),
            LODOP.ADD_PRINT_TEXT(406, 40, 151, 20, "经营、拍卖单位"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 8),
            LODOP.ADD_PRINT_TEXT(435, 39, 147, 20, "经营、拍卖单位地址"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(466, 31, 170, 20, "开户银行、账户"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 8),
            LODOP.ADD_PRINT_TEXT(509, 21, 195, 20, "二手车市场"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 16),
            LODOP.ADD_PRINT_TEXT(553, 43, 144, 20, "开户银行、账户"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 7),
            LODOP.ADD_PRINT_TEXT(586, 40, 100, 20, "备 注："),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 5),
            LODOP.ADD_PRINT_TEXT(616, 40, 147, 20, "开票单位（盖章）"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(616, 472, 153, 20, "开票人"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 3),
            LODOP.ADD_PRINT_TEXT(489, 425, 71, 19, "纳 税 人  "),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(503, 418, 73, 20, "识 别 号"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(525, 425, 61, 20, "地    址"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(553, 617, 63, 20, "电话"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(465, 617, 58, 20, "电话"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(431, 514, 63, 20, "纳 税 人"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(444, 512, 66, 20, "识 别 号"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(201, 437, 143, 20, "单位代码/身份证号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(230, 574, 52, 20, "电话"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(259, 437, 143, 20, "单位代码/身份证号码"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(288, 574, 52, 20, "电话"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(318, 314, 79, 20, "登记证号"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(348, 314, 79, 20, "厂牌型号"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(318, 533, 100, 20, "车 辆 类 型"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(341, 533, 100, 20, "转入地车辆"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(355, 533, 100, 20, "管理所名称"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2),
            LODOP.ADD_PRINT_TEXT(377, 565, 70, 20, "小写"),
            LODOP.SET_PRINT_STYLEA(0, "FontColor"),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", 2);
            var P = T.kprq
              , O = P.substring(0, 4)
              , L = P.substring(4, 6)
              , E = P.substring(6, 8);
            P = O + "-" + L + "-" + E,
            LODOP.ADD_PRINT_TEXT(89, 108, 122, 20, P),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            LODOP.ADD_PRINT_TEXT(122, 127, 237, 20, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(145, 127, 235, 20, T.zzfphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(168, 127, 238, 20, T.jqbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            "88" != T.fplxdm && (LODOP.ADD_PRINT_TEXT(40, 650, 131, 20, T.fpdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1),
            LODOP.ADD_PRINT_TEXT(70, 650, 125, 20, T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.SET_PRINT_STYLEA(0, "FontColor", "#E22C3E"),
            LODOP.SET_PRINT_STYLEA(0, "PreviewOnly", 1)),
            countStrLength(T.ghdwmc) <= 36 ? (LODOP.ADD_PRINT_TEXT(200, 190, 243, 40, T.ghdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : countStrLength(T.ghdwmc) <= 40 ? (LODOP.ADD_PRINT_TEXT(200, 190, 251, 40, T.ghdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : (LODOP.ADD_PRINT_TEXT(195, 190, 243, 40, T.ghdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            LODOP.ADD_PRINT_TEXT(198, 576, 215, 20, T.ghdwdm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
            var D = T.ghdwdzdh.split(" ")[0]
              , S = T.ghdwdzdh.split(" ")[1];
            console.log("goufangdizhdianhu", countStrLength(D)),
            countStrLength(D) <= 55 ? (LODOP.ADD_PRINT_TEXT(229, 190, 384, 20, D),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(224, 190, 384, 20, D),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(S) <= 15 ? (LODOP.ADD_PRINT_TEXT(233, 627, 164, 20, S),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(225, 627, 164, 20, S),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.tdys[0].mfmc) <= 36 ? (LODOP.ADD_PRINT_TEXT(258, 190, 243, 20, T.tdys[0].mfmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : countStrLength(T.tdys[0].mfmc) <= 40 ? (LODOP.ADD_PRINT_TEXT(258, 190, 251, 20, T.tdys[0].mfmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : (LODOP.ADD_PRINT_TEXT(253, 190, 240, 20, T.tdys[0].mfmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            LODOP.ADD_PRINT_TEXT(258, 576, 207, 20, T.tdys[0].mfsbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            console.log("卖方地址", countStrLength(T.tdys[0].mfdz)),
            countStrLength(T.tdys[0].mfdz) <= 55 ? (LODOP.ADD_PRINT_TEXT(290, 190, 384, 20, T.tdys[0].mfdz),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(283, 190, 384, 20, T.tdys[0].mfdz),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.tdys[0].mfdh) <= 15 ? (LODOP.ADD_PRINT_TEXT(289, 627, 164, 20, T.tdys[0].mfdh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(281, 627, 164, 20, T.tdys[0].mfdh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.tdys[0].cphm) <= 10 ? (LODOP.ADD_PRINT_TEXT(318, 186, 125, 20, T.tdys[0].cphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)) : (LODOP.ADD_PRINT_TEXT(312, 192, 125, 20, T.tdys[0].cphm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.tdys[0].djzh) <= 14 ? (LODOP.ADD_PRINT_TEXT(318, 392, 145, 20, T.tdys[0].djzh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(315, 390, 154, 20, T.tdys[0].djzh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.zyspmc.split("*")[2]) <= 16 ? (LODOP.ADD_PRINT_TEXT(318, 627, 160, 20, T.zyspmc.split("*")[2]),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(313, 630, 160, 20, T.zyspmc.split("*")[2]),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.tdys[0].cjh) <= 13 ? (LODOP.ADD_PRINT_TEXT(348, 188, 131, 20, T.tdys[0].cjh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(348, 188, 131, 20, T.tdys[0].cjh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            console.log("厂牌型号", countStrLength(T.tdys[0].cpxh)),
            countStrLength(T.tdys[0].cpxh) > 28 ? (LODOP.ADD_PRINT_TEXT(340, 390, 158, 20, T.tdys[0].cpxh),
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : countStrLength(T.tdys[0].cpxh) > 25 ? (LODOP.ADD_PRINT_TEXT(348, 390, 180, 20, T.tdys[0].cpxh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : countStrLength(T.tdys[0].cpxh) > 22 ? (LODOP.ADD_PRINT_TEXT(348, 390, 160, 20, T.tdys[0].cpxh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9)) : (LODOP.ADD_PRINT_TEXT(348, 393, 160, 20, T.tdys[0].cpxh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)),
            countStrLength(T.tdys[0].zrdclglsmc) <= 20 ? (LODOP.ADD_PRINT_TEXT(347, 626, 175, 20, T.tdys[0].zrdclglsmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : countStrLength(T.tdys[0].zrdclglsmc) <= 58 ? (LODOP.ADD_PRINT_TEXT(343, 626, 175, 20, T.tdys[0].zrdclglsmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(340, 625, 175, 20, T.tdys[0].zrdclglsmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            "00" !== T.fpzt && "03" !== T.fpzt || (LODOP.ADD_PRINT_IMAGE(377, 188, 378, 20, "data:image/bmp;base64,Qk0GAwAAAAAAADYAAAAoAAAADwAAAA8AAAABABgAAAAAANACAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////////////AAAAAAAA////////////AAAAAAAA////////AAAA////AAAAAAAA////////AAAAAAAAAAAAAAAA////////AAAAAAAA////////AAAA////AAAAAAAA////AAAAAAAA////////AAAAAAAA////AAAAAAAA////////AAAA////////AAAAAAAA////////////////////////AAAAAAAA////////////AAAA////////////AAAAAAAA////////////////AAAAAAAA////////////////AAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAA////////////////////AAAA////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////AAAA"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10));
            var A = je2Upper(T.jshj);
            if (LODOP.ADD_PRINT_TEXT(378, 202, 378, 20, "01" === T.fpzt ? "负数：" + A : A),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(376, 620, 185, 20, "￥" + (1 * T.jshj).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            countStrLength(T.jypmdwmc) <= 64 ? (LODOP.ADD_PRINT_TEXT(407, 190, 600, 20, T.jypmdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(405, 190, 600, 20, T.jypmdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.jypmdwdz) <= 26 ? (LODOP.ADD_PRINT_TEXT(436, 188, 326, 20, T.jypmdwdz),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(436, 190, 326, 20, T.jypmdwdz),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            LODOP.ADD_PRINT_TEXT(436, 576, 210, 20, T.jypmdwsbh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
            countStrLength(T.jypmdwyhzh) <= 58 ? (LODOP.ADD_PRINT_TEXT(466, 188, 435, 20, T.jypmdwyhzh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(464, 188, 435, 20, T.jypmdwyhzh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            countStrLength(T.jypmdwdh) <= 12 ? (LODOP.ADD_PRINT_TEXT(466, 671, 130, 20, T.jypmdwdh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(460, 671, 130, 20, T.jypmdwdh),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            "08" == T.tdys[0].escyqrhyxz) {
                countStrLength(T.xhdwmc) <= 28 ? (LODOP.ADD_PRINT_TEXT(405, 188, 243, 56, T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(405, 188, 237, 56, T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                LODOP.ADD_PRINT_TEXT(436, 583, 291, 20, T.xhdwdm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
                countStrLength(T.xhdwyhzh) <= 60 ? (LODOP.ADD_PRINT_TEXT(463, 188, 441, 20, T.xhdwyhzh),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(469, 188, 441, 20, T.xhdwyhzh),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4));
                var e = T.xhdwdzdh.split(" ")[0]
                  , N = T.xhdwdzdh.split(" ")[1];
                countStrLength(N) <= 12 ? (LODOP.ADD_PRINT_TEXT(470, 671, 128, 20, N),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(467, 671, 128, 20, N),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                countStrLength(e) <= 38 ? (LODOP.ADD_PRINT_TEXT(436, 188, 310, 20, e),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(430, 188, 310, 20, e),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4))
            } else {
                countStrLength(T.xhdwmc) <= 28 ? (LODOP.ADD_PRINT_TEXT(493, 188, 243, 56, T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(493, 188, 237, 56, T.xhdwmc),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                LODOP.ADD_PRINT_TEXT(496, 493, 291, 20, T.xhdwdm),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11),
                countStrLength(T.xhdwyhzh) <= 60 ? (LODOP.ADD_PRINT_TEXT(553, 187, 441, 20, T.xhdwyhzh),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(549, 187, 441, 20, T.xhdwyhzh),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4));
                e = T.xhdwdzdh.split(" ")[0],
                N = T.xhdwdzdh.split(" ")[1];
                countStrLength(N) <= 12 ? (LODOP.ADD_PRINT_TEXT(550, 671, 128, 20, N),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 11)) : (LODOP.ADD_PRINT_TEXT(547, 671, 128, 20, N),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
                countStrLength(e) <= 38 ? (LODOP.ADD_PRINT_TEXT(521, 489, 310, 20, e),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : (LODOP.ADD_PRINT_TEXT(519, 492, 310, 20, e),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 9),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4))
            }
            countStrLength(T.bz) <= 120 ? (LODOP.ADD_PRINT_TEXT(583, 122, 677, 40, T.bz),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -3)) : (LODOP.ADD_PRINT_TEXT(578, 115, 680, 40, T.bz),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)),
            "88" == T.fplxdm ? (LODOP.ADD_PRINT_TEXT(616, 585, 114, 20, T.kpr),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(125, 425, 361, 43, T.mmqOne),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(145, 425, 361, 43, T.mmqTwo),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_TEXT(165, 425, 361, 43, T.mmqThree)) : (LODOP.ADD_PRINT_TEXT(155, 458, "80mm", 20, T.skm),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10),
            LODOP.ADD_PRINT_IMAGE(15, 40, 66, 66, "data:image/png;base64," + T.ewm),
            LODOP.SET_PRINT_STYLEA(0, "Stretch", 1),
            "00" === T.fpzt ? (LODOP.ADD_PRINT_TEXT(40, 120, 120, 66, tdysFilter(T.tdyslxDm)),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10)) : "01" === T.fpzt && (LODOP.ADD_PRINT_TEXT(40, 120, 120, 66, "销项负数"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10))
        }
        function PrintLine06jsfp8hz(T, _, P, O, L) {
            LODOP.ADD_PRINT_TEXT(302 + 11 * T, 20, 80, 120, _),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
            LODOP.ADD_PRINT_TEXT(302 + 11 * T, 80, 40, 15, 0 == P ? "" : P),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -7),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(302 + 11 * T, 107, 58, 15, 0 == O ? "" : O),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(302 + 11 * T, 166, 75, 15, (1 * L).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)
        }
        function PrintLine06jsfp7hz(T, _, P, O, L) {
            LODOP.ADD_PRINT_TEXT(302 + 9 * T, 26, 80, 100, _),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
            LODOP.ADD_PRINT_TEXT(302 + 9 * T, 81, 80, 15, 0 == P ? "" : P),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -7),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(302 + 9 * T, 107, 58, 15, 0 == O ? "" : O),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(302 + 9 * T, 166, 75, 15, (1 * L).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)
        }
        function PrintLine07jsfp8hz(T, _, P, O, L) {
            LODOP.ADD_PRINT_TEXT(361 + 11 * T, 25, 59, 130, _),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
            LODOP.ADD_PRINT_TEXT(361 + 11 * T, 48 + 2 * P.length, 58, 12, 0 == P ? "" : P),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(361 + 11 * T, 105, 51, 12, 0 == O ? "" : O),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(361 + 11 * T, 134 + 2 * P.length, 63, 12, (1 * L).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)
        }
        function PrintLine07jsfp7hz(T, _, P, O, L) {
            LODOP.ADD_PRINT_TEXT(361 + 9 * T, 25, 59, 100, _),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
            LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0),
            LODOP.ADD_PRINT_TEXT(361 + 9 * T, 48 + 2 * P.length, 58, 12, 0 === P ? "" : P),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(361 + 9 * T, 105, 51, 12, 0 === O ? "" : O),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3),
            LODOP.ADD_PRINT_TEXT(361 + 9 * T, 134 + 2 * P.length, 63, 12, (1 * L).toFixed(2)),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 3)
        }
        function addPrintLinejsfp(T, _, P) {
            if ("07" === _) {
                var O = countStrLength(P);
                O <= 16 && O > 0 ? (LODOP.ADD_PRINT_TEXT(361 + 24 * T, 18, 59, 30, P),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6)) : O <= 30 && O > 16 ? (LODOP.ADD_PRINT_TEXT(361 + 24 * T, 18, 59, 30, P),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : O <= 40 && O > 30 && (LODOP.ADD_PRINT_TEXT(361 + 24 * T, 18, 59, 30, P),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0)
            }
            if ("06" === _) {
                O = countStrLength(P);
                O <= 12 && O > 0 ? (LODOP.ADD_PRINT_TEXT(302 + 18 * T, 16, 80, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : O <= 24 && O > 12 ? (LODOP.ADD_PRINT_TEXT(302 + 18 * T, 16, 80, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -6),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : O <= 32 && O > 24 ? (LODOP.ADD_PRINT_TEXT(302 + 18 * T, 16, 80, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)) : O <= 40 && O > 32 && (LODOP.ADD_PRINT_TEXT(302 + 18 * T, 16, 80, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "FontName", "楷体"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4),
                LODOP.SET_PRINT_STYLEA(0, "LetterSpacing", -1)),
                LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", !0)
            }
        }
        function addPrintLineJsfpBZ(T, _) {
            if ("07" === T) {
                var P = countStrLength(_);
                P > 0 && P <= 68 ? (LODOP.ADD_PRINT_TEXT(503, 20, 201, 44, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : (LODOP.ADD_PRINT_TEXT(503, 20, 201, 44, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4))
            } else if ("06" === T) {
                P = countStrLength(_);
                P > 0 && P <= 42 ? (LODOP.ADD_PRINT_TEXT(505, 16, 247, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4)) : P > 42 && P <= 104 ? (LODOP.ADD_PRINT_TEXT(505, 16, 247, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 7),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -5)) : (LODOP.ADD_PRINT_TEXT(505, 16, 247, 20, _),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 6),
                LODOP.SET_PRINT_STYLEA(0, "LineSpacing", -4))
            }
        }
        function printJdcfpSkmOneByOne(T, _, P) {
            console.log(T, "??????????????");
            for (var O = 2, L = 0; L < 5; L++)
                for (var E = T.substring(38 * L, 38 * L + 38), D = 0, S = 0; S < 38; S++)
                    0 !== S && S % O === 0 && S % 8 !== 0 && D++,
                    LODOP.ADD_PRINT_TEXT(_ + 18 * L, P + 10 * S - D, 15, 15, E.charAt(S)),
                    LODOP.SET_PRINT_STYLEA(0, "FontName", "Courier New"),
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)
        }
        function delRightPercent(T) {
            return T = $.trim(T),
            T.substring(0, T.length - 1)
        }
        function countStrLength(T) {
            var _ = T + "";
            if (!_)
                return 0;
            for (var P = 0, O = 0; O < _.length; O++) {
                var L = _.charCodeAt(O);
                L >= 1 && L <= 126 || L >= 65439 && L <= 65376 ? P++ : P += 2
            }
            return P
        }
        function addMoney(T, _) {
            LODOP.ADD_PRINT_TEXT(T - 1, _, 20, 20, "Y"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(T - 9, _, 20, 20, "_"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12),
            LODOP.ADD_PRINT_TEXT(T - 7, _, 20, 20, "_"),
            LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12)
        }
        function delRight(T) {
            var _ = T + "";
            while ("0" === _.charAt(_.length - 1) && -1 !== _.indexOf(".") || "0" === _ || "." === _.charAt(_.length - 1))
                _ = delRightPercent(_);
            return _
        }
        function je2Upper(T) {
            T = Number(T).toFixed(2);
            var _ = ""
              , P = "仟佰拾亿仟佰拾万仟佰拾圆角分";
            T += "00",
            "-" === T.charAt(0) && (T = T.substring(1));
            var O = T.indexOf(".");
            O >= 0 && (T = T.substring(0, O) + T.substr(O + 1, 2)),
            P = P.substr(P.length - T.length);
            for (var L = 0; L < T.length; L++)
                _ += "零壹贰叁肆伍陆柒捌玖".substr(T.substr(L, 1), 1) + P.substr(L, 1);
            return _.replace(/零角零分$/, "整").replace(/零[仟佰拾]/g, "零").replace(/零{2,}/g, "零").replace(/零([亿|万])/g, "$1").replace(/零+圆/, "圆").replace(/亿零{0,3}万/, "亿").replace(/^圆/, "零圆").replace(/零分$/, "整").replace(/^零圆/, "").replace(/^整$/, "零圆整")
        }
        function check() {
            try {
                return null === LODOP || "undefined" === typeof LODOP.VERSION ? (alert("尚未安装打印控件或者不是最新版本，点击确定下载？"),
                !1) : (LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
                !0)
            } catch (T) {
                return window.confirm("尚未安装打印控件或者不是最新版本，点击确定下载？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    customClass: "closeMsgBox",
                    type: "warning"
                }).then(async()=>{
                    const T = localStorage.osInfo ? JSON.parse(localStorage.osInfo) : "";
                    var _ = "";
                    _ = "Windows" == T.name && "Windows 11" == T.version ? "https://newtime-app-update.oss-cn-zhangjiakou.aliyuncs.com/newtime-sasa-file/CLodop_WIN11.exe" : "https://newtime-app-update.oss-cn-zhangjiakou.aliyuncs.com/newtime-sasa-file/clodop_win7.exe";
                    var P = await document.createElement("a");
                    await document.body.appendChild(P),
                    P.href = await _,
                    await P.click(),
                    await P.remove()
                }
                ).catch(T=>{
                    throw new Error(T)
                }
                ),
                !1
            }
        }
        function getPrintName() {
            var T = getCLodop()
              , _ = window.localStorage.getItem("xpPrinter");
            void 0 != _ && "" != _ && null != _ && (T.SET_PRINTER_INDEX(_),
            T.GET_PRINTER_NAME(_));
            for (var P = T.GET_PRINTER_COUNT(), O = [], L = 0; L < P; L++) {
                var E = T.GET_PRINTER_NAME(L);
                O.push({
                    value: L,
                    label: E
                })
            }
            return T.SET_PRINT_MODE("RESELECT_PRINTER", !0),
            O
        }
        function printZzsfpQd(T, _) {
            if (!check())
                return !1;
            var P = localStorage.getItem("key")
              , O = JSON.parse(P);
            null != O && (Number(O.sbj_zzsz),
            Number(O.zbj_zzsz)),
            "004" == T ? LODOP.PRINT_INITA($("#zbj_qd_zzsz").val() + "mm", $("#ybj_qd_zzsz").val() + "mm", 775, 959, "增值税专用发票（清单）") : "007" == T && LODOP.PRINT_INITA($("#zbj_qd_zzsp").val() + "mm", $("#ybj_qd_zzsp").val() + "mm", 775, 959, "增值税普通发票（清单）"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 850, 750, "");
            var L = $.extend({
                fplxdm: "004"
            }, fpmx, {
                jshjdx: je2Upper(fpmx.jshj),
                fplxdm: T
            });
            "004" == T ? printZzszpQD(L) : "007" == T && printZzsppQD(L),
            LODOP.PREVIEW()
        }
        function viewfptj(T) {
            check() && ("82" == T.fplxdm || "81" == T.fplxdm || "86" == T.fplxdm || "85" == T.fplxdm ? initPrintData(T, !0, "0") : initPrintDataSk(T, !0, "0"),
            LODOP.SET_PREVIEW_WINDOW(1, 0, 0, 900, 1e3, ""),
            LODOP.SET_SHOW_MODE("HIDE_PBUTTIN_PREVIEW", !1),
            LODOP.PREVIEW())
        }
        function prinfptj(T) {
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            initPrintData(T, !0, "1"),
            LODOP.PRINT()
        }
        function initPrintData(T) {
            console.log("发票统计预览数据", T);
            var _ = T.sbcx.cxtj
              , P = "";
            P = null != T.dwxx ? T.dwxx.addressphone : "";
            var O = _.split("-")
              , L = O[0]
              , E = O[1]
              , D = T.sbcx.cxfs;
            if (void 0 != D && "-1" == D) {
                var S = T.sbcx.nf;
                L = S,
                E = "1~12月"
            }
            if (void 0 != D && "-1" != D && "3" == D) {
                var A = T.sbcx.cxtj1;
                if (void 0 != A && "1" == A) {
                    S = T.sbcx.nf;
                    L = S,
                    E = "1~6月"
                }
                if (void 0 != A && "2" == A) {
                    S = T.sbcx.nf;
                    L = S,
                    E = "7~12月"
                }
            }
            var e = T.sbcx.cxtj1;
            if ("" === _ && "-1" !== e) {
                S = T.sbcx.nf;
                L = S,
                E = e
            }
            var N, I, n = new Date, R = n.getFullYear(), t = n.getMonth() + 1, o = n.getDate(), i = T.tabletou, r = T.jetj, Y = T.fplxdm, m = (A = T.sbcx.cxtj1,
            T.sbcx.pnid);
            if ("004" == Y ? (N = "专用发票",
            I = "专用增值税发票") : "007" == Y ? (N = "普通发票",
            I = "普通增值税发票") : "026" == Y ? (N = "电子发票",
            I = "普通增值税发票(电子)") : "025" == Y ? (N = "卷式发票",
            I = "普通增值税发票(卷式)") : "005" == Y || "87" == Y ? (N = "机动车发票",
            I = "机动车销售统一发票") : "028" == Y ? (N = "电子专票",
            I = "专用增值税发票(电子)") : "81" == Y ? (N = "数电专票",
            I = "数电票(增值税专用发票)") : "82" == Y ? (N = "数电普票",
            I = "数电票(普通发票)") : "85" == Y ? (N = "数电纸专",
            I = "数电发票(增值税纸质专用发票)") : "86" == Y && (N = "数电纸普",
            I = "数电发票(增值税纸质普通发票)"),
            "-1" !== e && "1" == D) {
                var l = "";
                1 == m ? l = I + "汇总表(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 2 == m ? l = "正数发票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 3 == m ? l = "负数发票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 4 == m ? l = "正数发票废票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 5 == m ? l = "负数发票废票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 6 == m && (l = "空白发票废票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)")
            } else if (void 0 != D && "0" == D) {
                l = "";
                1 == m ? l = I + "汇总表(" + L + "年1~12月)" : 2 == m ? l = "正数发票清单(" + L + "年1~12月)" : 3 == m ? l = "负数发票清单(" + L + "年1~12月)" : 4 == m ? l = "正数发票废票清单(" + L + "年1~12月)" : 5 == m ? l = "负数发票废票清单(" + L + "年1~12月)" : 6 == m && (l = "空白发票废票清单(" + L + "年1~12")
            } else if (void 0 != D && "-1" != D && "3" == D) {
                l = "";
                void 0 != A && "01" == A ? 1 == m ? l = I + "汇总表(" + L + "年1~6月)" : 2 == m ? l = "正数发票清单(" + L + "年1~6月)" : 3 == m ? l = "负数发票清单(" + L + "年1~6月)" : 4 == m ? l = "正数发票废票清单(" + L + "年1~6月)" : 5 == m ? l = "负数发票废票清单(" + L + "年1~6月)" : 6 == m && (l = "空白发票废票清单(" + L + "年1~6") : void 0 != A && "07" == A && (1 == m ? l = I + "汇总表(" + L + "年7~12月)" : 2 == m ? l = "正数发票清单(" + L + "年7~12月)" : 3 == m ? l = "负数发票清单(" + L + "年7~12月)" : 4 == m ? l = "正数发票废票清单(" + L + "年7~12月)" : 5 == m ? l = "负数发票废票清单(" + L + "年7~12月)" : 6 == m && (l = "空白发票废票清单(" + L + "年7~12月)"))
            } else {
                l = "";
                1 == m ? l = I + "汇总表(" + L + "年" + E + "月)" : 2 == m ? l = "正数发票清单(" + L + "年" + E + "月)" : 3 == m ? l = "负数发票清单(" + L + "年" + E + "月)" : 4 == m ? l = "正数发票废票清单(" + L + "年" + E + "月)" : 5 == m ? l = "负数发票废票清单(" + L + "年" + E + "月)" : 6 == m && (l = "空白发票废票清单(" + L + "年" + E + "月)")
            }
            var a, s = T.nsrsbh, F = T.qymc, p = sessionStorage.getItem("vuex"), g = JSON.parse(p), z = g.czyxx, c = z.yhlx, d = z.czydm;
            if (1 == m) {
                LODOP.PRINT_INITA("1.3mm", "-2.59mm", "210.11mm", "300.1mm", N + "汇总表1"),
                LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "CreateCustomPage"),
                LODOP.ADD_PRINT_TEXT(58, 187, 300, 43, N + "汇总表"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 18),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "Horient", 2),
                LODOP.ADD_PRINT_TEXT(111, 82, 70, 20, "制表日期：\n"),
                LODOP.ADD_PRINT_TEXT(131, 82, 70, 20, "所属期间："),
                LODOP.ADD_PRINT_TEXT(151, 82, 122, 20, N + "统计表："),
                LODOP.ADD_PRINT_TEXT(171, 82, 300, 20, l),
                LODOP.ADD_PRINT_TEXT(191, 82, 94, 20, "纳税人登记号："),
                LODOP.ADD_PRINT_TEXT(211, 82, 70, 20, "企业名称："),
                LODOP.ADD_PRINT_TEXT(231, 82, 70, 20, "地址电话："),
                0 == c && LODOP.ADD_PRINT_TEXT(251, 82, 94, 20, "开票人："),
                LODOP.ADD_PRINT_TEXT(111, 149, 95, 20, R + "年" + t + "月" + o + "日"),
                "-1" !== e && "1" == D ? LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, E + "月份~~" + (parseInt(E) + 2) + "月") : void 0 != D && "0" == D ? LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, "1月份~~12月份") : void 0 != D && "-1" != D && "3" == D ? void 0 != A && "01" == A ? LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, "1月份~~6月份") : void 0 != A && "07" == A && LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, "1月份~~12月份") : LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, E + "月份~~" + E + "月"),
                LODOP.ADD_PRINT_TEXT(151, 190, 38, 20, "1-0" + m),
                LODOP.ADD_PRINT_TEXT(191, 176, 137, 20, s),
                LODOP.ADD_PRINT_TEXT(211, 152, 400, 20, F),
                LODOP.ADD_PRINT_TEXT(231, 152, 400, 20, P),
                0 == c ? (-1 == a ? LODOP.ADD_PRINT_TEXT(251, 176, 137, 20, d) : LODOP.ADD_PRINT_TEXT(251, 176, 137, 20, a),
                LODOP.ADD_PRINT_LINE(272, 82, 271, 582, 0, 2),
                LODOP.ADD_PRINT_TEXT(280, 82, 145, 20, "★  发票领用存情况  ★")) : (LODOP.ADD_PRINT_LINE(262, 82, 261, 582, 0, 2),
                LODOP.ADD_PRINT_TEXT(272, 82, 145, 20, "★  发票领用存情况  ★")),
                LODOP.ADD_PRINT_TEXT(297, 82, 85, 20, "期初库存份数"),
                LODOP.ADD_PRINT_TEXT(317, 82, 85, 20, "购进发票份数"),
                LODOP.ADD_PRINT_TEXT(337, 82, 85, 20, "退回发票份数"),
                LODOP.ADD_PRINT_TEXT(297, 167, 85, 20, T.zstj.qckcfs),
                LODOP.ADD_PRINT_TEXT(317, 167, 85, 20, T.zstj.gjfpfs),
                LODOP.ADD_PRINT_TEXT(337, 167, 85, 20, T.zstj.thfpfs),
                LODOP.ADD_PRINT_TEXT(297, 252, 85, 20, "正数发票份数"),
                LODOP.ADD_PRINT_TEXT(317, 252, 85, 20, "正数废票份数"),
                LODOP.ADD_PRINT_TEXT(337, 252, 85, 20, "期末库存份数"),
                LODOP.ADD_PRINT_TEXT(297, 337, 85, 20, T.zstj.zsfpfs),
                LODOP.ADD_PRINT_TEXT(317, 337, 85, 20, T.zstj.zffpfs),
                LODOP.ADD_PRINT_TEXT(337, 337, 85, 20, T.zstj.qmkcfs),
                LODOP.ADD_PRINT_TEXT(297, 422, 85, 20, "负数发票份数"),
                LODOP.ADD_PRINT_TEXT(317, 422, 85, 20, "负数废票份数"),
                LODOP.ADD_PRINT_TEXT(297, 507, 85, 20, T.zstj.fsfpfs),
                LODOP.ADD_PRINT_TEXT(317, 507, 85, 20, T.zstj.fffpfs),
                LODOP.ADD_PRINT_TEXT(337, 422, 85, 20, "空废发票份数"),
                LODOP.ADD_PRINT_TEXT(337, 507, 85, 20, T.zstj.kffpfs),
                LODOP.ADD_PRINT_LINE(368, 82, 367, 582, 0, 2),
                LODOP.ADD_PRINT_TEXT(378, 82, 105, 20, "★  销项情况  ★"),
                LODOP.ADD_PRINT_TEXT(398, 82, 88, 20, "金额单位：元");
                for (var X = 37, h = 85, u = 630, y = parseInt(Number((u - X - h) / Number(i.length - 1))), w = 82, v = 85, f = 428, C = 433, x = 10, b = 0; b <= i.length; b++)
                    0 == b ? (LODOP.ADD_PRINT_RECT(f, w, 37, 30, 0, 1),
                    LODOP.ADD_PRINT_TEXT(C, v, 35, 20, "序号"),
                    w += X,
                    v = w + x) : 1 == b ? (LODOP.ADD_PRINT_RECT(f, w, 85, 30, 0, 1),
                    LODOP.ADD_PRINT_TEXT(C, v, 81, 20, i[b - 1]),
                    w += h,
                    v = w + x) : (LODOP.ADD_PRINT_RECT(f, w, y, 30, 0, 1),
                    LODOP.ADD_PRINT_TEXT(C, v, 60, 20, i[b - 1]),
                    w += y,
                    v = w + x);
                for (var j = f + 30, B = 82, M = 82, H = j + 12, W = 87, Q = 87, q = 0; q < r.length; q++) {
                    var k = r[q].columnNameModelList;
                    B = M,
                    W = Q;
                    for (var U = 0; U <= k.length; U++)
                        if (0 == U)
                            LODOP.ADD_PRINT_RECT(j, B, 37, 30, 0, 1),
                            LODOP.ADD_PRINT_TEXT(H, W, 35, 20, q + 1),
                            B += X,
                            W = B + 5;
                        else if (1 == U) {
                            l = k[U - 1].columnVal;
                            LODOP.ADD_PRINT_RECT(j, B, 85, 30, 0, 1),
                            LODOP.ADD_PRINT_TEXT(H, W, 81, 20, l),
                            B += h,
                            W = B + 5
                        } else {
                            l = k[U - 1].columnVal;
                            LODOP.ADD_PRINT_RECT(j, B, y, 30, 0, 1),
                            9 * l.length > y ? (LODOP.ADD_PRINT_TEXT(H - 8, W, y - 3, 20, l),
                            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : LODOP.ADD_PRINT_TEXT(H, W, y - 3, 20, l),
                            B += y,
                            W = B + 5
                        }
                    j += 30,
                    H = j + 12
                }
            } else {
                console.log("走到这111111111111", r);
                r = r;
                LODOP.PRINT_INITA("1.3mm", "-2.6mm", "210.1mm", "297.1mm", N + "汇总表"),
                LODOP.SET_PRINT_PAGESIZE(1, 2100, 2900, "CreateCustomPage"),
                LODOP.SET_PRINT_MODE("RESELECT_PAGESIZE", !0),
                LODOP.ADD_PRINT_TEXT(32, 265, 206, 40, N + "明细表"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 18),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.ADD_PRINT_TEXT(78, 23, 73, 20, "制表日期：\n\n"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(104, 23, 122, 20, N + "统计表："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(130, 23, 300, 20, l),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(155, 23, 110, 20, "纳税人登记号："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(179, 23, 72, 20, "企业名称："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(204, 23, 72, 20, "地址电话："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                0 == c ? (LODOP.ADD_PRINT_TEXT(229, 23, 72, 20, "开票人："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(229, 217, 2140, 20, "金额单位：元"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1)) : (LODOP.ADD_PRINT_TEXT(226, 23, 100, 20, "金额单位：元"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1)),
                LODOP.ADD_PRINT_TEXT(78, 105, 407, 20, R + "年" + t + "月" + o + "日"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(104, 131, 405, 20, "1-0" + m),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(155, 135, 882, 20, s),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(179, 95, 929, 20, F),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(204, 97, 925, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                0 == c && (-1 == a ? (LODOP.ADD_PRINT_TEXT(229, 97, 925, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1)) : (LODOP.ADD_PRINT_TEXT(229, 97, 925, 20, a),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1))),
                LODOP.ADD_PRINT_RECT(252, 26, 37, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 62, 80, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 141, 74, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 214, 70, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 283, 74, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 356, 121, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 478, 119, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 596, 104, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 700, 95, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 29, 36, 20, "序号"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 65, 60, 20, "发票种类"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 142, 60, 20, "类别代码"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 217, 65, 20, "发票号码"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 288, 63, 20, "开票日期"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 360, 121, 20, "购方税号"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 480, 121, 20, "购方名称"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 600, 100, 20, "合计金额"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(256, 703, 100, 20, "合计税额"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
                var Z = 0
                  , J = (U = 0,
                Math.ceil(r.length / 13));
                console.log((Number(T.page) - 1) * Number(T.num), "11分页1111111111");
                var K = (Number(T.page) - 1) * Number(T.num);
                if (r.length > 0)
                    for (q = 0; q < r.length; q++)
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 26, 37, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 62, 80, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 141, 73, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 214, 70, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 283, 74, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 356, 121, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 478, 119, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 596, 104, 52, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 51 * U, 700, 95, 52, 0, 1),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 29, 36, 43, K + q + 1),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 65, 80, 43, I),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 147, 70, 43, r[q].fpdm),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 217, 65, 43, r[q].fphm),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 288, 90, 43, r[q].kprq),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 360, 121, 43, r[q].ghdwsbh),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 480, 119, 43, r[q].ghdwmc),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 600, 100, 43, r[q].hjje),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 703, 91, 43, r[q].hjse),
                        U++,
                        q == r.length - 1 && q % 13 != 0 ? (LODOP.ADD_PRINT_TEXT(286 + 51 * U, 23, 65, 20, "填表人："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 164, 61, 20, "抽样员："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 282, 58, 20, "录入员："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 387, 57, 20, "复核员："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 509, 58, 20, "审核员："),
                        Z++,
                        LODOP.ADD_PRINT_TEXT(1e3, 23, 40, 20, "第" + Z + "页"),
                        LODOP.ADD_PRINT_TEXT(1e3, 70, 49, 20, "总" + J + "页")) : q % 12 == 0 && 0 != q ? (LODOP.ADD_PRINT_TEXT(286 + 51 * U, 23, 65, 20, "填表人："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 164, 61, 20, "抽样员："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 282, 58, 20, "录入员："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 387, 57, 20, "复核员："),
                        LODOP.ADD_PRINT_TEXT(286 + 51 * U, 509, 58, 20, "审核员："),
                        U = 0,
                        Z++,
                        LODOP.ADD_PRINT_TEXT(1e3, 23, 40, 20, "第" + Z + "页"),
                        LODOP.ADD_PRINT_TEXT(1e3, 70, 49, 20, "总" + J + "页"),
                        LODOP.NewPage()) : 0 == q && q == r.length - 1 && (LODOP.ADD_PRINT_TEXT(286 + 48 * U, 23, 65, 20, "填表人："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 164, 61, 20, "抽样员："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 282, 58, 20, "录入员："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 387, 57, 20, "复核员："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 509, 58, 20, "审核员："),
                        U = 0,
                        Z++,
                        LODOP.ADD_PRINT_TEXT(1e3, 23, 40, 20, "第" + Z + "页"),
                        LODOP.ADD_PRINT_TEXT(1e3, 70, 49, 20, "总" + J + "页"),
                        LODOP.NewPage())
            }
        }
        function initPrintDataSk(T) {
            console.log(T);
            var _ = T.sbcx.cxtj
              , P = "";
            P = null != T.dwxx ? T.dwxx.addressphone : "";
            var O = _.split("-")
              , L = O[0]
              , E = O[1]
              , D = T.sbcx.cxfs;
            if (void 0 != D && "-1" == D) {
                var S = T.sbcx.nf;
                L = S,
                E = "1~12月"
            }
            if (void 0 != D && "-1" != D && "3" == D) {
                var A = T.sbcx.cxtj1;
                if (void 0 != A && "1" == A) {
                    S = T.sbcx.nf;
                    L = S,
                    E = "1~6月"
                }
                if (void 0 != A && "2" == A) {
                    S = T.sbcx.nf;
                    L = S,
                    E = "7~12月"
                }
            }
            var e = T.sbcx.cxtj1;
            if ("" === _ && "-1" !== e) {
                S = T.sbcx.nf;
                L = S,
                E = e
            }
            var N, I, n = new Date, R = n.getFullYear(), t = n.getMonth() + 1, o = n.getDate(), i = T.tabletou, r = T.jetj, Y = T.fplxdm, m = (A = T.sbcx.cxtj1,
            T.sbcx.pnid);
            if ("004" == Y ? (N = "专用发票",
            I = "专用增值税发票") : "007" == Y ? (N = "普通发票",
            I = "普通增值税发票") : "026" == Y ? (N = "电子发票",
            I = "普通增值税发票(电子)") : "025" == Y ? (N = "卷式发票",
            I = "普通增值税发票(卷式)") : "005" == Y || "87" == Y ? (N = "机动车发票",
            I = "机动车销售统一发票") : "028" == Y ? (N = "电子专票",
            I = "专用增值税发票(电子)") : "81" == Y ? (N = "数电专票",
            I = "数电票(增值税专用发票)") : "82" == Y && (N = "数电普票",
            I = "数电票(普通发票)"),
            "-1" !== e && "1" == D) {
                var l = "";
                1 == m ? l = I + "汇总表(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 2 == m ? l = "正数发票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 3 == m ? l = "负数发票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 4 == m ? l = "正数发票废票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 5 == m ? l = "负数发票废票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)" : 6 == m && (l = "空白发票废票清单(" + L + "年" + E + "月~" + (parseInt(E) + 2) + "月)")
            } else if (void 0 != D && "0" == D) {
                l = "";
                1 == m ? l = I + "汇总表(" + L + "年1~12月)" : 2 == m ? l = "正数发票清单(" + L + "年1~12月)" : 3 == m ? l = "负数发票清单(" + L + "年1~12月)" : 4 == m ? l = "正数发票废票清单(" + L + "年1~12月)" : 5 == m ? l = "负数发票废票清单(" + L + "年1~12月)" : 6 == m && (l = "空白发票废票清单(" + L + "年1~12")
            } else if (void 0 != D && "-1" != D && "3" == D) {
                l = "";
                void 0 != A && "01" == A ? 1 == m ? l = I + "汇总表(" + L + "年1~6月)" : 2 == m ? l = "正数发票清单(" + L + "年1~6月)" : 3 == m ? l = "负数发票清单(" + L + "年1~6月)" : 4 == m ? l = "正数发票废票清单(" + L + "年1~6月)" : 5 == m ? l = "负数发票废票清单(" + L + "年1~6月)" : 6 == m && (l = "空白发票废票清单(" + L + "年1~6") : void 0 != A && "07" == A && (1 == m ? l = I + "汇总表(" + L + "年7~12月)" : 2 == m ? l = "正数发票清单(" + L + "年7~12月)" : 3 == m ? l = "负数发票清单(" + L + "年7~12月)" : 4 == m ? l = "正数发票废票清单(" + L + "年7~12月)" : 5 == m ? l = "负数发票废票清单(" + L + "年7~12月)" : 6 == m && (l = "空白发票废票清单(" + L + "年7~12月)"))
            } else {
                l = "";
                1 == m ? l = I + "汇总表(" + L + "年" + E + "月)" : 2 == m ? l = "正数发票清单(" + L + "年" + E + "月)" : 3 == m ? l = "负数发票清单(" + L + "年" + E + "月)" : 4 == m ? l = "正数发票废票清单(" + L + "年" + E + "月)" : 5 == m ? l = "负数发票废票清单(" + L + "年" + E + "月)" : 6 == m && (l = "空白发票废票清单(" + L + "年" + E + "月)")
            }
            var a, s = T.nsrsbh, F = T.qymc, p = sessionStorage.getItem("vuex"), g = JSON.parse(p), z = g.czyxx, c = z.yhlx, d = z.czydm;
            if (1 == m) {
                LODOP.PRINT_INITA("1.3mm", "-2.59mm", "210.11mm", "300.1mm", N + "汇总表1"),
                LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "CreateCustomPage"),
                LODOP.ADD_PRINT_TEXT(58, 187, 300, 43, N + "汇总表"),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 18),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.SET_PRINT_STYLEA(0, "Horient", 2),
                LODOP.ADD_PRINT_TEXT(111, 82, 70, 20, "制表日期：\n"),
                LODOP.ADD_PRINT_TEXT(131, 82, 70, 20, "所属期间："),
                LODOP.ADD_PRINT_TEXT(151, 82, 122, 20, N + "统计表："),
                LODOP.ADD_PRINT_TEXT(171, 82, 300, 20, l),
                LODOP.ADD_PRINT_TEXT(191, 82, 94, 20, "纳税人登记号："),
                LODOP.ADD_PRINT_TEXT(211, 82, 70, 20, "企业名称："),
                LODOP.ADD_PRINT_TEXT(231, 82, 70, 20, "地址电话："),
                0 == c && LODOP.ADD_PRINT_TEXT(251, 82, 94, 20, "开票人："),
                LODOP.ADD_PRINT_TEXT(111, 149, 95, 20, R + "年" + t + "月" + o + "日"),
                "-1" !== e && "1" == D ? LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, E + "月份~~" + (parseInt(E) + 2) + "月") : void 0 != D && "0" == D ? LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, "1月份~~12月份") : void 0 != D && "-1" != D && "3" == D ? void 0 != A && "01" == A ? LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, "1月份~~6月份") : void 0 != A && "07" == A && LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, "1月份~~12月份") : LODOP.ADD_PRINT_TEXT(131, 149, 95, 20, E + "月份~~" + E + "月"),
                LODOP.ADD_PRINT_TEXT(151, 190, 38, 20, "1-0" + m),
                LODOP.ADD_PRINT_TEXT(191, 176, 137, 20, s),
                LODOP.ADD_PRINT_TEXT(211, 152, 400, 20, F),
                LODOP.ADD_PRINT_TEXT(231, 152, 400, 20, P),
                0 == c ? (-1 == a ? LODOP.ADD_PRINT_TEXT(251, 176, 137, 20, d) : LODOP.ADD_PRINT_TEXT(251, 176, 137, 20, a),
                LODOP.ADD_PRINT_LINE(272, 82, 271, 582, 0, 2),
                LODOP.ADD_PRINT_TEXT(280, 82, 145, 20, "★  发票领用存情况  ★")) : (LODOP.ADD_PRINT_LINE(262, 82, 261, 582, 0, 2),
                LODOP.ADD_PRINT_TEXT(272, 82, 145, 20, "★  发票领用存情况  ★")),
                LODOP.ADD_PRINT_TEXT(297, 82, 85, 20, "期初库存份数"),
                LODOP.ADD_PRINT_TEXT(317, 82, 85, 20, "购进发票份数"),
                LODOP.ADD_PRINT_TEXT(337, 82, 85, 20, "退回发票份数"),
                LODOP.ADD_PRINT_TEXT(297, 167, 85, 20, T.zstj.qckcfs),
                LODOP.ADD_PRINT_TEXT(317, 167, 85, 20, T.zstj.gjfpfs),
                LODOP.ADD_PRINT_TEXT(337, 167, 85, 20, T.zstj.thfpfs),
                LODOP.ADD_PRINT_TEXT(297, 252, 85, 20, "正数发票份数"),
                LODOP.ADD_PRINT_TEXT(317, 252, 85, 20, "正数废票份数"),
                LODOP.ADD_PRINT_TEXT(337, 252, 85, 20, "期末库存份数"),
                LODOP.ADD_PRINT_TEXT(297, 337, 85, 20, T.zstj.zsfpfs),
                LODOP.ADD_PRINT_TEXT(317, 337, 85, 20, T.zstj.zffpfs),
                LODOP.ADD_PRINT_TEXT(337, 337, 85, 20, T.zstj.qmkcfs),
                LODOP.ADD_PRINT_TEXT(297, 422, 85, 20, "负数发票份数"),
                LODOP.ADD_PRINT_TEXT(317, 422, 85, 20, "负数废票份数"),
                LODOP.ADD_PRINT_TEXT(297, 507, 85, 20, T.zstj.fsfpfs),
                LODOP.ADD_PRINT_TEXT(317, 507, 85, 20, T.zstj.fffpfs),
                LODOP.ADD_PRINT_TEXT(337, 422, 85, 20, "空废发票份数"),
                LODOP.ADD_PRINT_TEXT(337, 507, 85, 20, T.zstj.kffpfs),
                LODOP.ADD_PRINT_LINE(368, 82, 367, 582, 0, 2),
                LODOP.ADD_PRINT_TEXT(378, 82, 105, 20, "★  销项情况  ★"),
                LODOP.ADD_PRINT_TEXT(398, 82, 88, 20, "金额单位：元");
                for (var X = 37, h = 85, u = 630, y = parseInt(Number((u - X - h) / Number(i.length - 1))), w = 82, v = 85, f = 428, C = 433, x = 10, b = 0; b <= i.length; b++)
                    0 == b ? (LODOP.ADD_PRINT_RECT(f, w, 37, 30, 0, 1),
                    LODOP.ADD_PRINT_TEXT(C, v, 35, 20, "序号"),
                    w += X,
                    v = w + x) : 1 == b ? (LODOP.ADD_PRINT_RECT(f, w, 85, 30, 0, 1),
                    LODOP.ADD_PRINT_TEXT(C, v, 81, 20, i[b - 1]),
                    w += h,
                    v = w + x) : (LODOP.ADD_PRINT_RECT(f, w, y, 30, 0, 1),
                    LODOP.ADD_PRINT_TEXT(C, v, 60, 20, i[b - 1]),
                    w += y,
                    v = w + x);
                for (var j = f + 30, B = 82, M = 82, H = j + 12, W = 87, Q = 87, q = 0; q < r.length; q++) {
                    var k = r[q].columnNameModelList;
                    B = M,
                    W = Q;
                    for (var U = 0; U <= k.length; U++)
                        if (0 == U)
                            LODOP.ADD_PRINT_RECT(j, B, 37, 30, 0, 1),
                            LODOP.ADD_PRINT_TEXT(H, W, 35, 20, q + 1),
                            B += X,
                            W = B + 5;
                        else if (1 == U) {
                            l = k[U - 1].columnVal;
                            LODOP.ADD_PRINT_RECT(j, B, 85, 30, 0, 1),
                            LODOP.ADD_PRINT_TEXT(H, W, 81, 20, l),
                            B += h,
                            W = B + 5
                        } else {
                            l = k[U - 1].columnVal;
                            LODOP.ADD_PRINT_RECT(j, B, y, 30, 0, 1),
                            9 * l.length > y ? (LODOP.ADD_PRINT_TEXT(H - 8, W, y - 3, 20, l),
                            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)) : LODOP.ADD_PRINT_TEXT(H, W, y - 3, 20, l),
                            B += y,
                            W = B + 5
                        }
                    j += 30,
                    H = j + 12
                }
            } else {
                r = r;
                LODOP.PRINT_INITA("1.3mm", "-2.6mm", "210.1mm", "297.1mm", N + "汇总表"),
                LODOP.SET_PRINT_PAGESIZE(1, 2100, 2900, "CreateCustomPage"),
                LODOP.SET_PRINT_MODE("RESELECT_PAGESIZE", !0),
                LODOP.ADD_PRINT_TEXT(32, 265, 206, 40, N + "明细表"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 18),
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2),
                LODOP.ADD_PRINT_TEXT(78, 23, 73, 20, "制表日期：\n\n"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(104, 23, 122, 20, N + "统计表："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(130, 23, 300, 20, l),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(155, 23, 110, 20, "纳税人登记号："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(179, 23, 72, 20, "企业名称："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(204, 23, 72, 20, "地址电话："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                0 == c ? (LODOP.ADD_PRINT_TEXT(229, 23, 72, 20, "开票人："),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(229, 217, 2140, 20, "金额单位：元"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1)) : (LODOP.ADD_PRINT_TEXT(226, 23, 100, 20, "金额单位：元"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1)),
                LODOP.ADD_PRINT_TEXT(78, 105, 407, 20, R + "年" + t + "月" + o + "日"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(104, 131, 405, 20, "1-0" + m),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(155, 135, 882, 20, s),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(179, 95, 929, 20, F),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(204, 97, 925, 20, P),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                0 == c && (-1 == a ? (LODOP.ADD_PRINT_TEXT(229, 97, 925, 20, d),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1)) : (LODOP.ADD_PRINT_TEXT(229, 97, 925, 20, a),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1))),
                LODOP.ADD_PRINT_RECT(252, 26, 37, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 62, 65, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 126, 89, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 214, 70, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 283, 74, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 356, 136, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 492, 104, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_RECT(252, 596, 104, 29, 0, 1),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 29, 36, 20, "序号"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 65, 60, 20, "发票种类"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 142, 60, 20, "类别代码"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 217, 65, 20, "发票号码"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 288, 63, 20, "开票日期"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 360, 131, 20, "购方税号"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(258, 494, 100, 20, "合计金额"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1),
                LODOP.ADD_PRINT_TEXT(256, 595, 100, 20, "合计税额"),
                LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
                var Z = 0
                  , J = (U = 0,
                Math.ceil(r.length / 23));
                if (r.length > 0)
                    for (q = 0; q < r.length; q++)
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 26, 37, 29, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 62, 65, 29, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 126, 89, 29, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 214, 70, 29, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 283, 74, 29, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 356, 136, 29, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 492, 104, 29, 0, 1),
                        LODOP.ADD_PRINT_RECT(280 + 28 * U, 596, 104, 29, 0, 1),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 29, 36, 20, q + 1),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 65, 60, 20, r[q].fplxdmmc),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 132, 85, 20, r[q].fpdm),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 217, 65, 20, r[q].fphm),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 288, 90, 20, r[q].kprq),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 360, 131, 20, r[q].ghdwsbh),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 496, 100, 20, r[q].hjje),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 601, 100, 20, r[q].hjse),
                        U++,
                        q == r.length - 1 && q % 24 != 0 ? (LODOP.ADD_PRINT_TEXT(286 + 28 * U, 23, 65, 20, "填表人："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 164, 61, 20, "抽样员："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 282, 58, 20, "录入员："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 387, 57, 20, "复核员："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 509, 58, 20, "审核员："),
                        Z++,
                        LODOP.ADD_PRINT_TEXT(1e3, 23, 40, 20, "第" + Z + "页"),
                        LODOP.ADD_PRINT_TEXT(1e3, 70, 49, 20, "总" + J + "页")) : q % 23 == 0 && 0 != q ? (LODOP.ADD_PRINT_TEXT(286 + 28 * U, 23, 65, 20, "填表人："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 164, 61, 20, "抽样员："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 282, 58, 20, "录入员："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 387, 57, 20, "复核员："),
                        LODOP.ADD_PRINT_TEXT(286 + 28 * U, 509, 58, 20, "审核员："),
                        U = 0,
                        Z++,
                        LODOP.ADD_PRINT_TEXT(1e3, 23, 40, 20, "第" + Z + "页"),
                        LODOP.ADD_PRINT_TEXT(1e3, 70, 49, 20, "总" + J + "页"),
                        LODOP.NewPage()) : 0 == q && q == r.length - 1 && (LODOP.ADD_PRINT_TEXT(286 + 48 * U, 23, 65, 20, "填表人："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 164, 61, 20, "抽样员："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 282, 58, 20, "录入员："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 387, 57, 20, "复核员："),
                        LODOP.ADD_PRINT_TEXT(286 + 48 * U, 509, 58, 20, "审核员："),
                        U = 0,
                        Z++,
                        LODOP.ADD_PRINT_TEXT(1e3, 23, 40, 20, "第" + Z + "页"),
                        LODOP.ADD_PRINT_TEXT(1e3, 70, 49, 20, "总" + J + "页"),
                        LODOP.NewPage())
            }
        }
        function getPrintNr(T, _, P, O) {
            printEwm(T, _);
            var L = getSavePrinter("4");
            void 0 === L && null === L || LODOP.SET_PRINTER_INDEX(L),
            O ? LODOP.SET_PRINT_COPIES(O) : LODOP.SET_PRINT_COPIES(1),
            "1" == P ? LODOP.PRINT() : LODOP.PREVIEW()
        }
        function printEwm(T, _) {
            var P;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            let O = {};
            if (localStorage.getItem("fullTimer")) {
                let T = JSON.parse(localStorage.getItem("fullTimer"));
                O.headWeight = T.headWeight,
                O.weight = T.weight,
                O.ewmBj = T.ewmBj,
                O.dzdh = T.dzdh,
                O.hjje = T.hjje,
                O.hjse = T.hjse,
                O.scsj = T.scsj,
                O.sxsj = T.sxsj
            } else
                O.headWeight = "3",
                O.weight = "0",
                O.ewmBj = "15",
                O.dzdh = "1",
                O.hjje = "1",
                O.hjse = "1",
                O.scsj = "1",
                O.sxsj = "1";
            var L, E = "80" == _ ? "15mm" : O.headWeight + "mm", D = "80" == _ ? 43 : O.weight, S = 195, A = "80" == _ ? 70 : O.ewmBj, e = -40, N = T.jzsj, I = T.tjsj.replace("-", "").replace("-", "").replace(" ", "").replace(":", "").replace(":", ""), n = N.substring(0, 4) + "年" + N.substring(4, 6) + "月" + N.substring(6, 8) + "日" + N.substring(8, 10) + "时" + N.substring(10, 12) + "分", R = I.substring(0, 4) + "年" + I.substring(4, 6) + "月" + I.substring(6, 8) + "日" + I.substring(8, 10) + "时" + I.substring(10, 12) + "分";
            if (console.log(T.fplxdm),
            "81" == T.fplxdm || "82" == T.fplxdm)
                switch (T.fplxdm) {
                case "81":
                    L = "电子发票（增值税专用发票）";
                    break;
                case "82":
                    L = "电子发票（普通发票）";
                    break;
                default:
                    L = T.fplxdm
                }
            else
                switch (T.fplxdmNum) {
                case "007":
                    L = "增值税普通发票";
                    break;
                case "004":
                    L = "增值税专用发票";
                    break;
                case "026":
                    L = "增值税普通发票(电)";
                    break;
                case "028":
                    L = "增值税专用发票(电)";
                    break;
                case "025":
                    L = "增值税普通发票(卷式)";
                    break;
                default:
                    L = T.fplxdm
                }
            LODOP.ADD_PRINT_TEXT("6mm", E, "291mm", "9.53mm", "发票开具凭证"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 18),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1),
            LODOP.ADD_PRINT_TEXT(120 + e, D, S, 22, "单 据 号: " + T.ddh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.ADD_PRINT_TEXT(140 + e, D, S, 22, "商家名称: " + T.xhdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            "2" != O.dzdh && (LODOP.ADD_PRINT_TEXT(170 + e, D, S, 48, "地址电话: " + T.xhdwdzdh),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8));
            let t = 240 + e;
            "2" == O.dzdh && (t -= 70),
            LODOP.ADD_PRINT_TEXT(t, D, S, 22, "商品名称: " + T.zyspmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8);
            let o = 270 + e;
            if ("2" == O.dzdh && (o -= 70),
            LODOP.ADD_PRINT_TEXT(o, D, S, 22, "发票类型: " + L),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            "2" != O.hjje) {
                let _ = 290 + e;
                "2" == O.dzdh && (_ -= 70),
                LODOP.ADD_PRINT_TEXT(_, D, S, 22, "合计金额: ￥" + T.hjje),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)
            }
            if ("2" != O.hjse) {
                let _ = 310 + e;
                "2" == O.dzdh && (_ -= 70),
                "2" == O.hjje && (_ -= 20),
                LODOP.ADD_PRINT_TEXT(_, D, S, 22, "合计税额: ￥" + T.hjse),
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)
            }
            let i = 330 + e;
            "2" == O.dzdh && (i -= 70),
            "2" == O.hjje && (i -= 20),
            "2" == O.hjse && (i -= 20),
            LODOP.ADD_PRINT_TEXT(i, D, S, 22, "价税合计: ￥" + T.jshj),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8);
            let r = 350 + e;
            "2" == O.dzdh && (r -= 70),
            "2" == O.hjje && (r -= 20),
            "2" == O.hjse && (r -= 20),
            "2" != O.scsj && (LODOP.ADD_PRINT_TEXT(r, D, S, 22, "生成时间: " + R),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8));
            let Y = 370 + e;
            "2" == O.dzdh && (Y -= 70),
            "2" == O.hjje && (Y -= 20),
            "2" == O.hjse && (Y -= 20),
            "2" == O.scsj && (Y -= 20),
            "2" != O.sxsj && (LODOP.ADD_PRINT_TEXT(Y, D, S, 22, "失效时间: " + n),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8));
            let m = 390 + e;
            "2" == O.dzdh && (m -= 70),
            "2" == O.hjje && (m -= 20),
            "2" == O.hjse && (m -= 20),
            "2" == O.scsj && (m -= 20),
            "2" == O.sxsj && (m -= 20);
            var l = "";
            l = null !== (P = null === T || void 0 === T ? void 0 : T.bz) && void 0 !== P ? P : "",
            LODOP.ADD_PRINT_TEXT(m, D, S, 22, "备   注: " + l),
            LODOP.ADD_PRINT_TEXT(m + 20, D, S, 35, '请在失效时间前使用"微信"扫描二维码开具发票,超过时间将无法开票！');
            var a = "data:image/png;base64," + T.ewm;
            LODOP.ADD_PRINT_IMAGE(m + 80, A, S, 230, a),
            LODOP.ADD_PRINT_TEXT(m + 240, D, S, 22, "*-----------------------------*"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)
        }
        function getPrintNr1(T, _, P, O) {
            printEwm1(T, _);
            var L = getSavePrinter("4");
            void 0 === L && null === L || LODOP.SET_PRINTER_INDEX(L),
            O ? LODOP.SET_PRINT_COPIES(O) : LODOP.SET_PRINT_COPIES(1),
            "1" == P ? LODOP.PRINT() : LODOP.PREVIEW()
        }
        function printEwm1(T, _) {
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", "");
            let P = {};
            if (localStorage.getItem("qrCodeInfo")) {
                let T = JSON.parse(localStorage.getItem("qrCodeInfo"));
                P.headWeight = T.headWeight,
                P.weight = T.weight,
                P.ewmBj = T.ewmBj
            } else
                P.headWeight = "3",
                P.weight = "0",
                P.ewmBj = "15";
            var O = "80" == _ ? "20mm" : P.headWeight + "mm"
              , L = "80" == _ ? 43 : P.weight
              , E = 195
              , D = "80" == _ ? 70 : P.ewmBj
              , S = -40;
            if ("81" == T.fplxdm || "82" == T.fplxdm)
                switch (T.fplxdm) {
                case "81":
                    "电子发票（增值税专用发票）";
                    break;
                case "82":
                    "电子发票（普通发票）";
                    break;
                default:
                    T.fplxdm
                }
            else
                switch (T.fplxdmNum) {
                case "007":
                    "增值税普通发票";
                    break;
                case "004":
                    "增值税专用发票";
                    break;
                case "026":
                    "增值税普通发票(电)";
                    break;
                case "028":
                    "增值税专用发票(电)";
                    break;
                case "025":
                    "增值税普通发票(卷式)";
                    break;
                default:
                    T.fplxdm
                }
            LODOP.ADD_PRINT_TEXT("6mm", O, "291mm", "9.53mm", "收票二维码"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 18),
            LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
            var A = "data:image/png;base64," + T.ewm;
            LODOP.ADD_PRINT_IMAGE(60, D, E, 150, A),
            LODOP.ADD_PRINT_TEXT(340 + S, L, E, 22, "*-----------------------------*"),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.ADD_PRINT_TEXT(260 + S, L, E, 22, "发票号码: " + T.fphm),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.ADD_PRINT_TEXT(290 + S, L, E, 22, "购方名称: " + T.ghdwmc),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8),
            LODOP.ADD_PRINT_TEXT(320 + S, L, E, 28, "价税合计（元）: " + T.jshj),
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 8)
        }
        function getSavePrinter(T) {
            const _ = window.localStorage.getItem("key") ? JSON.parse(window.localStorage.getItem("key")) : {};
            if (_) {
                if (_.printer && Array.isArray(_.printer) && _.printer.length) {
                    const P = _.printer.filter(_=>_.paramType == T);
                    return P[0].printName
                }
                return null
            }
            return null
        }
        function xhdwmcFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.ghdwmc : T.xhdwmc
        }
        function xhdwdmFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.ghdwdm : T.xhdwdm
        }
        function xhdwdzdhFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.ghdwdzdh : T.xhdwdzdh
        }
        function xhdwyhzhFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.ghdwyhzh : T.xhdwyhzh
        }
        function ghdwmcFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.xhdwmc : T.ghdwmc
        }
        function ghdwdmFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.xhdwdm : T.ghdwdm
        }
        function ghdwdzdhFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.xhdwdzdh : T.ghdwdzdh
        }
        function ghdwyhzhFun(T) {
            return "02" === T.tspz || "16" == (null === T || void 0 === T ? void 0 : T.tdyslxDm) ? T.xhdwyhzh : T.ghdwyhzh
        }
        function slText(T) {
            const _ = T.filter(T=>0 == T.fphxz || 1 == T.fphxz || 2 == T.fphxz);
            let P = []
              , O = [];
            return _.forEach(T=>{
                P.push(T.sl + ""),
                O.push(T.lslbs + "")
            }
            ),
            P = [...new Set(P)],
            O = [...new Set(O)],
            1 === P.length && "0" == P[0] && 1 === O.length && "1" === O[0] ? "免税" : 1 === P.length && "0" == P[0] && 1 === O.length && "2" === O[0] ? "不征税" : "0%"
        }
        function controllerLength(T, _) {
            const P = T > 0 ? "" : "-"
              , O = Math.abs(T) + "";
            if (O.length < _)
                return T;
            let L = O;
            const E = L.split(".")[0].length + 1;
            return console.log(E),
            L = Number(L).toFixed(_ - E),
            L = Number(L),
            P + L
        }
        function compareVersion(T, _) {
            const P = T.split(".").map(T=>1 * T)
              , O = _.split(".").map(T=>1 * T)
              , L = Math.max(P.length, O.length);
            for (let E = 0; E < L; E++) {
                if ((P[E] || 0) > (O[E] || 0))
                    return 1;
                if ((P[E] || 0) < (O[E] || 0))
                    return -1
            }
            return 0
        }
        function printingShopeePdf(T) {
            if (check(),
            1 != compareVersion(LODOP.VERSION, "6.5.6.6"))
                return window.confirm("打印服务需升级，升级后请刷新页面，点击确定下载？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    customClass: "closeMsgBox",
                    type: "warning"
                }).then(()=>{
                    window.open("http://www.lodop.net/demolist/CLodop_Setup_for_Win32NT.zip")
                }
                ),
                !1;
            console.log("urlList", T);
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            LODOP.PRINT_INIT("打印"),
            LODOP.NEWPAGE(),
            LODOP.ADD_PRINT_PDF(0, 0, "50%", "50%", demoDownloadPDF(T[0])),
            LODOP.SET_PRINT_STYLEA(1, "AngleOfPageInside", -90),
            LODOP.PREVIEW()
        }
        function printingShopee(T) {
            if (check(),
            1 != compareVersion(LODOP.VERSION, "6.5.6.6"))
                return window.confirm("打印服务需升级，升级后请刷新页面，点击确定下载？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    customClass: "closeMsgBox",
                    type: "warning"
                }).then(()=>{
                    window.open("http://www.lodop.net/demolist/CLodop_Setup_for_Win32NT.zip")
                }
                ),
                !1;
            console.log("urlList", T);
            const _ = T;
            LODOP.SET_LICENSES("ZCSB技术处研发中心", "545C44BD459DBBAFB79F18A0F8160A12", "", ""),
            LODOP.PRINT_INIT("打印");
            for (let P = 0; P < _.length; P++)
                creatPdfRage(_[P], P);
            LODOP.PREVIEW()
        }
        function creatPdfRage(T, _) {
            var P = localStorage.getItem("key")
              , O = JSON.parse(P);
            "2" == (null === O || void 0 === O ? void 0 : O.pldyType) ? _ % 2 == 1 && 0 != _ ? (LODOP.ADD_PRINT_PDF("50%", 0, "50%", "50%", demoDownloadPDF(T)),
            LODOP.NewPageA()) : LODOP.ADD_PRINT_PDF(0, 0, "50%", "50%", demoDownloadPDF(T)) : (LODOP.NewPageA(),
            LODOP.ADD_PRINT_PDF(0, 0, "50%", "50%", demoDownloadPDF(T)))
        }
        function demoDownloadPDF(T) {
            if (/^https?:/i.test(T)) {
                if (window.XMLHttpRequest)
                    var _ = new XMLHttpRequest;
                else
                    _ = new ActiveXObject("MSXML2.XMLHTTP");
                if (_.open("GET", T, !1),
                _.overrideMimeType)
                    try {
                        _.responseType = "arraybuffer";
                        var P = !0
                    } catch (D) {
                        _.overrideMimeType("text/plain; charset=x-user-defined")
                    }
                _.send(null);
                var O = _.response || _.responseBody;
                if ("undefined" !== typeof Uint8Array)
                    if (P)
                        var L = new Uint8Array(O);
                    else {
                        L = new Uint8Array(O.length);
                        for (var E = 0; E < L.length; E++)
                            L[E] = O.charCodeAt(E)
                    }
                else
                    L = VBS_BinaryToArray(O).toArray();
                return demoGetBASE64(L)
            }
        }
        function demoGetBASE64(T) {
            for (var _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", P = "", O = 0, L = T.length; O < L; O += 3) {
                if (isNaN(T[O]))
                    break;
                var E = 255 & T[O]
                  , D = 255 & T[O + 1]
                  , S = 255 & T[O + 2]
                  , A = E >> 2
                  , e = (3 & E) << 4 | D >> 4
                  , N = O + 1 < L ? (15 & D) << 2 | S >> 6 : 64
                  , I = O + 2 < L ? 63 & S : 64;
                P += _.substring(A, A + 1) + _.substring(e, e + 1) + _.substring(N, N + 1) + _.substring(I, I + 1)
            }
            return P
        }
        function tdysFilter(T) {
            switch (T) {
            case "01":
                return "成品油";
            case "14":
                return "机动车";
            case "52":
                return "反向开具";
            default:
                return ""
            }
        }
        function printPDFs(T, _, P) {
            check(),
            P = "" == P || void 0 == P || null == P ? "A4" : P;
            let O = {
                w: 210,
                h: 297
            }
              , L = 2;
            console.log(T, "将发票数据拆分");
            let E = classification(T, L);
            return console.log(E, "将发票数据拆分 结果"),
            E.invoices.length > 0 && (E.invoices.forEach((function(T) {
                LODOP.NewPage();
                let P, E, D, S = 0;
                T.forEach((function(T, A) {
                    1 === A ? E += O.h / L : (P = (O.w - .8 * parseInt(T.width)) / L,
                    E = (O.h / 2 - .8 * parseInt(T.height)) / L,
                    D = parseInt(T.width) * _,
                    S = parseInt(T.height) * _,
                    console.log()),
                    LODOP.ADD_PRINT_IMAGE(E + "mm", P + "mm", D + "mm", S + "mm", T.base64),
                    LODOP.SET_PRINT_STYLEA(0, "Stretch", 1)
                }
                ))
            }
            )),
            LODOP.SET_PRINT_PAGESIZE(0, 0, 0, P),
            LODOP.On_Return = function(T, _) {
                console.log(T, _),
                E.isprint = 1
            }
            ,
            LODOP.PREVIEW()),
            E
        }
        function classification(T, _) {
            let P = {
                invoices: [],
                errorinvoice: [],
                isprint: 0
            }
              , O = []
              , L = []
              , E = [];
            T.forEach((function(T) {
                200 == T.code ? T.height > 148 ? L.push(T) : O.push(T) : E.push(T)
            }
            ));
            let D = separate(O, _);
            return D.concat(separate(L, 1)),
            P.invoices = D,
            P.errorinvoice = E,
            P
        }
        function separate(T, _) {
            for (var P = [], O = 0; O < T.length; O += _) {
                var L = T.slice(O, O + _);
                P.push(L)
            }
            return P
        }
        Number.prototype.toFixed = function(T) {
            T = T || 0;
            var _ = Math.abs(this)
              , P = Math.pow(10, T)
              , O = _ * P;
            if (2 === T) {
                var L = new String(O)
                  , E = L.indexOf(".");
                E > 0 && 4 === L.substring(E + 1, E + 2) && /^9{6,}$/.test(L.substring(E + 2, E + 8)) && (O = parseInt(O) + 1)
            }
            var D = (parseInt(O + .5) / P).toString()
              , S = D.indexOf(".");
            if (S < 0 && T > 0) {
                D += ".";
                for (var A = 0; A < T; A++)
                    D += "0"
            } else {
                S = D.length - S;
                for (A = 0; A < T - S + 1; A++)
                    D += "0"
            }
            return (this < 0 ? "-" : "") + D
        }
    },
    c3a3: function(T, _, P) {
        "use strict";
        var O = P("7d6f")
          , L = P("c34b");
        T.exports = function(T) {
            if ("Function" === O(T))
                return L(T)
        }
    },
    cf78: function(T, _, P) {
        "use strict";
        var O = P("29ae")
          , L = RangeError;
        T.exports = function(T, _) {
            var P = O(T);
            if (P % _)
                throw new L("Wrong offset");
            return P
        }
    },
    d27f: function(T, _, P) {
        "use strict";
        T.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    },
    df85: function(T, _, P) {
        "use strict";
        var O = P("96c4")
          , L = P("00f6")
          , E = P("a4b3")
          , D = O.aTypedArray
          , S = O.exportTypedArrayMethod;
        S("at", (function(T) {
            var _ = D(this)
              , P = L(_)
              , O = E(T)
              , S = O >= 0 ? O : P + O;
            return S < 0 || S >= P ? void 0 : _[S]
        }
        ))
    },
    e018: function(T, _, P) {
        "use strict";
        var O = P("a4b3")
          , L = P("ead5")
          , E = RangeError;
        T.exports = function(T) {
            if (void 0 === T)
                return 0;
            var _ = O(T)
              , P = L(_);
            if (_ !== P)
                throw new E("Wrong length or index");
            return P
        }
    },
    eb3f: function(T, _, P) {
        "use strict";
        var O = P("96c4")
          , L = P("f8ed").findLast
          , E = O.aTypedArray
          , D = O.exportTypedArrayMethod;
        D("findLast", (function(T) {
            return L(E(this), T, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    ef2c: function(T, _, P) {
        "use strict";
        var O = P("316d")
          , L = P("1b74");
        L && O({
            target: "ArrayBuffer",
            proto: !0
        }, {
            transfer: function() {
                return L(this, arguments.length ? arguments[0] : void 0, !0)
            }
        })
    },
    f8ed: function(T, _, P) {
        "use strict";
        var O = P("1976")
          , L = P("382a")
          , E = P("cd42")
          , D = P("00f6")
          , S = function(T) {
            var _ = 1 === T;
            return function(P, S, A) {
                var e, N, I = E(P), n = L(I), R = D(n), t = O(S, A);
                while (R-- > 0)
                    if (e = n[R],
                    N = t(e, R, I),
                    N)
                        switch (T) {
                        case 0:
                            return e;
                        case 1:
                            return R
                        }
                return _ ? -1 : void 0
            }
        };
        T.exports = {
            findLast: S(0),
            findLastIndex: S(1)
        }
    }
}]);

```
