!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.6.3
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2022-12-20T21:28Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var i = [],
        a = Object.getPrototypeOf,
        s = i.slice,
        l = i.flat
          ? function (e) {
              return i.flat.call(e);
            }
          : function (e) {
              return i.concat.apply([], e);
            },
        c = i.push,
        u = i.indexOf,
        f = {},
        d = f.toString,
        p = f.hasOwnProperty,
        h = p.toString,
        m = h.call(Object),
        v = {},
        g = function (e) {
          return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
          );
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          o,
          i = (n = n || b).createElement("script");
        if (((i.text = e), t))
          for (r in x)
            (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function C(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? f[d.call(e)] || "object"
          : typeof e;
      }
      var T = function (e, t) {
        return new T.fn.init(e, t);
      };
      function S(e) {
        var t = !!e && "length" in e && e.length,
          n = C(e);
        return (
          !g(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype =
        {
          jquery: "3.6.3",
          constructor: T,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (e) {
            return null == e
              ? s.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return T.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              T.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: i.sort,
          splice: i.splice,
        }),
        (T.extend = T.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              o,
              i,
              a = arguments[0] || {},
              s = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || g(a) || (a = {}),
                s === l && ((a = this), s--);
              s < l;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      a !== r &&
                      (c && r && (T.isPlainObject(r) || (o = Array.isArray(r)))
                        ? ((n = a[t]),
                          (i =
                            o && !Array.isArray(n)
                              ? []
                              : o || T.isPlainObject(n)
                              ? n
                              : {}),
                          (o = !1),
                          (a[t] = T.extend(c, i, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        T.extend({
          expando: "jQuery" + ("3.6.3" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = a(e)) ||
                ("function" ==
                  typeof (n = p.call(t, "constructor") && t.constructor) &&
                  h.call(n) === m))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (S(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (S(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
              e[o++] = t[r];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
              !t(e[o], o) !== a && r.push(e[o]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              o,
              i = 0,
              a = [];
            if (S(e))
              for (r = e.length; i < r; i++)
                null != (o = t(e[i], i, n)) && a.push(o);
            else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return l(a);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = i[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var k =
        /*!
         * Sizzle CSS Selector Engine v2.3.9
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2022-12-19
         */
        (function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            h,
            m,
            v,
            g,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            T = 0,
            S = le(),
            k = le(),
            E = le(),
            A = le(),
            j = function (e, t) {
              return e === t && (f = !0), 0;
            },
            L = {}.hasOwnProperty,
            I = [],
            O = I.pop,
            N = I.push,
            D = I.push,
            P = I.slice,
            H = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            M =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            B =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              q +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            R =
              "\\[" +
              q +
              "*(" +
              B +
              ")(?:" +
              q +
              "*([*^$|!~]?=)" +
              q +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              B +
              "))|)" +
              q +
              "*\\]",
            z =
              ":(" +
              B +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            _ = new RegExp(q + "+", "g"),
            F = new RegExp(
              "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
              "g"
            ),
            W = new RegExp("^" + q + "*," + q + "*"),
            $ = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            U = new RegExp(q + "|>"),
            X = new RegExp(z),
            V = new RegExp("^" + B + "$"),
            Y = {
              ID: new RegExp("^#(" + B + ")"),
              CLASS: new RegExp("^\\.(" + B + ")"),
              TAG: new RegExp("^(" + B + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + z),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  q +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  q +
                  "*(?:([+-]|)" +
                  q +
                  "*(\\d+)|))" +
                  q +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + M + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  q +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  q +
                  "*((?:-\\d)?\\d*)" +
                  q +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            K = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ie = function () {
              d();
            },
            ae = xe(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            D.apply((I = P.call(w.childNodes)), w.childNodes),
              I[w.childNodes.length].nodeType;
          } catch (e) {
            D = {
              apply: I.length
                ? function (e, t) {
                    N.apply(e, P.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, o) {
            var i,
              s,
              c,
              u,
              f,
              h,
              g,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!o && (d(t), (t = t || p), m)) {
              if (11 !== w && (f = Q.exec(e)))
                if ((i = f[1])) {
                  if (9 === w) {
                    if (!(c = t.getElementById(i))) return r;
                    if (c.id === i) return r.push(c), r;
                  } else if (
                    y &&
                    (c = y.getElementById(i)) &&
                    b(t, c) &&
                    c.id === i
                  )
                    return r.push(c), r;
                } else {
                  if (f[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (i = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return D.apply(r, t.getElementsByClassName(i)), r;
                }
              if (
                n.qsa &&
                !A[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== w || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((g = e), (y = t), 1 === w && (U.test(e) || $.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ge(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((u = t.getAttribute("id"))
                        ? (u = u.replace(re, oe))
                        : t.setAttribute("id", (u = x))),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                  g = h.join(",");
                }
                try {
                  if (
                    n.cssSupportsSelector &&
                    !CSS.supports("selector(:is(" + g + "))")
                  )
                    throw new Error();
                  return D.apply(r, y.querySelectorAll(g)), r;
                } catch (t) {
                  A(e, !0);
                } finally {
                  u === x && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(F, "$1"), t, r, o);
          }
          function le() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function ce(e) {
            return (e[x] = !0), e;
          }
          function ue(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              r.attrHandle[n[o]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function me(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, r) {
                  for (var o, i = e([], n.length, t), a = i.length; a--; )
                    n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (i = se.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !K.test(t || (n && n.nodeName) || "HTML");
            }),
          (d = se.setDocument =
            function (e) {
              var t,
                o,
                a = e ? e.ownerDocument || e : w;
              return a != p && 9 === a.nodeType && a.documentElement
                ? ((h = (p = a).documentElement),
                  (m = !i(p)),
                  w != p &&
                    (o = p.defaultView) &&
                    o.top !== o &&
                    (o.addEventListener
                      ? o.addEventListener("unload", ie, !1)
                      : o.attachEvent && o.attachEvent("onunload", ie)),
                  (n.scope = ue(function (e) {
                    return (
                      h.appendChild(e).appendChild(p.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.cssSupportsSelector = ue(function () {
                    return (
                      CSS.supports("selector(*)") &&
                      p.querySelectorAll(":is(:jqfake)") &&
                      !CSS.supports("selector(:is(*,:jqfake))")
                    );
                  })),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return (
                      e.appendChild(p.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = J.test(p.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (h.appendChild(e).id = x),
                      !p.getElementsByName || !p.getElementsByName(x).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                            for (
                              o = t.getElementsByName(e), r = 0;
                              (i = o[r++]);

                            )
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          o = 0,
                          i = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return i;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && m)
                        return t.getElementsByClassName(e);
                    }),
                  (g = []),
                  (v = []),
                  (n.qsa = J.test(p.querySelectorAll)) &&
                    (ue(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + q + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + q + "*(?:value|" + M + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length ||
                          v.push("~="),
                        (t = p.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          v.push(
                            "\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length ||
                          v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + q + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = J.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        g.push("!=", z);
                    }),
                  n.cssSupportsSelector || v.push(":has"),
                  (v = v.length && new RegExp(v.join("|"))),
                  (g = g.length && new RegExp(g.join("|"))),
                  (t = J.test(h.compareDocumentPosition)),
                  (b =
                    t || J.test(h.contains)
                      ? function (e, t) {
                          var n = (9 === e.nodeType && e.documentElement) || e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (j = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == p || (e.ownerDocument == w && b(w, e))
                              ? -1
                              : t == p || (t.ownerDocument == w && b(w, t))
                              ? 1
                              : u
                              ? H(u, e) - H(u, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          o = e.parentNode,
                          i = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!o || !i)
                          return e == p
                            ? -1
                            : t == p
                            ? 1
                            : o
                            ? -1
                            : i
                            ? 1
                            : u
                            ? H(u, e) - H(u, t)
                            : 0;
                        if (o === i) return de(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? de(a[r], s[r])
                          : a[r] == w
                          ? -1
                          : s[r] == w
                          ? 1
                          : 0;
                      }),
                  p)
                : p;
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (d(e),
              n.matchesSelector &&
                m &&
                !A[t + " "] &&
                (!g || !g.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                A(t, !0);
              }
            return se(t, p, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), b(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var o = r.attrHandle[t.toLowerCase()],
              i =
                o && L.call(r.attrHandle, t.toLowerCase())
                  ? o(e, t, !m)
                  : void 0;
            return void 0 !== i
              ? i
              : n.attributes || !m
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, oe);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              o = 0,
              i = 0;
            if (
              ((f = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(j),
              f)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
              for (; o--; ) e.splice(r[o], 1);
            }
            return (u = null), e;
          }),
          (o = se.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += o(t);
              return n;
            }),
          ((r = se.selectors =
            {
              cacheLength: 50,
              createPseudo: ce,
              match: Y,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return Y.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = S[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                      S(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var o = se.attr(r, e);
                    return null == o
                      ? "!=" === t
                      : !t ||
                          ((o += ""),
                          "=" === t
                            ? o === n
                            : "!=" === t
                            ? o !== n
                            : "^=" === t
                            ? n && 0 === o.indexOf(n)
                            : "*=" === t
                            ? n && o.indexOf(n) > -1
                            : "$=" === t
                            ? n && o.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + o.replace(_, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (o === n ||
                                o.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, o) {
                  var i = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === o
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          u,
                          f,
                          d,
                          p,
                          h,
                          m = i !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          g = s && t.nodeName.toLowerCase(),
                          y = !l && !s,
                          b = !1;
                        if (v) {
                          if (i) {
                            for (; m; ) {
                              for (d = t; (d = d[m]); )
                                if (
                                  s
                                    ? d.nodeName.toLowerCase() === g
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = m = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && y)
                          ) {
                            for (
                              b =
                                (p =
                                  (c =
                                    (u =
                                      (f = (d = v)[x] || (d[x] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === C && c[1]) && c[2],
                                d = p && v.childNodes[p];
                              (d =
                                (++p && d && d[m]) || (b = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++b && d === t) {
                                u[e] = [C, p, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = p =
                                (c =
                                  (u =
                                    (f = (d = t)[x] || (d[x] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  C && c[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (d =
                                (++p && d && d[m]) || (b = p = 0) || h.pop()) &&
                              ((s
                                ? d.nodeName.toLowerCase() !== g
                                : 1 !== d.nodeType) ||
                                !++b ||
                                (y &&
                                  ((u =
                                    (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                    (f[d.uniqueID] = {}))[e] = [C, b]),
                                d !== t));

                            );
                          return (b -= o) === r || (b % r == 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    o =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return o[x]
                    ? o(t)
                    : o.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ce(function (e, n) {
                            for (var r, i = o(e, t), a = i.length; a--; )
                              e[(r = H(e, i[a]))] = !(n[r] = i[a]);
                          })
                        : function (e) {
                            return o(e, 0, n);
                          })
                    : o;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(F, "$1"));
                  return r[x]
                    ? ce(function (e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; )
                          (i = a[s]) && (e[s] = !(t[s] = i));
                      })
                    : function (e, o, i) {
                        return (
                          (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || o(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    V.test(e || "") || se.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = m
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Z.test(e.nodeName);
                },
                input: function (e) {
                  return G.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function xe(e, t, n) {
            var r = t.dir,
              o = t.next,
              i = o || r,
              a = n && "parentNode" === i,
              s = T++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, o);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    f,
                    d = [C, s];
                  if (l) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((u =
                            (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((c = u[i]) && c[0] === C && c[1] === s)
                            return (d[2] = c[2]);
                          if (((u[i] = d), (d[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ce(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
              (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
            return a;
          }
          function Te(e, t, n, r, o, i) {
            return (
              r && !r[x] && (r = Te(r)),
              o && !o[x] && (o = Te(o, i)),
              ce(function (i, a, s, l) {
                var c,
                  u,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  m =
                    i ||
                    (function (e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!i && t) ? m : Ce(m, d, e, s, l),
                  g = n ? (o || (i ? e : h || r) ? [] : a) : v;
                if ((n && n(v, g, s, l), r))
                  for (c = Ce(g, p), r(c, [], s, l), u = c.length; u--; )
                    (f = c[u]) && (g[p[u]] = !(v[p[u]] = f));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (c = [], u = g.length; u--; )
                        (f = g[u]) && c.push((v[u] = f));
                      o(null, (g = []), c, l);
                    }
                    for (u = g.length; u--; )
                      (f = g[u]) &&
                        (c = o ? H(i, f) : d[u]) > -1 &&
                        (i[c] = !(a[c] = f));
                  }
                } else (g = Ce(g === a ? g.splice(h, g.length) : g)), o ? o(null, a, g, l) : D.apply(a, g);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                o,
                i = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                l = a ? 1 : 0,
                u = xe(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = xe(
                  function (e) {
                    return H(t, e) > -1;
                  },
                  s,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var o =
                      (!a && (r || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
                    return (t = null), o;
                  },
                ];
              l < i;
              l++
            )
              if ((n = r.relative[e[l].type])) d = [xe(we(d), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                  for (o = ++l; o < i && !r.relative[e[o].type]; o++);
                  return Te(
                    l > 1 && we(d),
                    l > 1 &&
                      be(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(F, "$1"),
                    n,
                    l < o && Se(e.slice(l, o)),
                    o < i && Se((e = e.slice(o))),
                    o < i && be(e)
                  );
                }
                d.push(n);
              }
            return we(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = se.tokenize =
              function (e, t) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = k[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, l = [], c = r.preFilter; s; ) {
                  for (a in ((n && !(o = W.exec(s))) ||
                    (o && (s = s.slice(o[0].length) || s), l.push((i = []))),
                  (n = !1),
                  (o = $.exec(s)) &&
                    ((n = o.shift()),
                    i.push({ value: n, type: o[0].replace(F, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(o = Y[a].exec(s)) ||
                      (c[a] && !(o = c[a](o))) ||
                      ((n = o.shift()),
                      i.push({ value: n, type: a, matches: o }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : k(e, l).slice(0);
              }),
            (s = se.compile =
              function (e, t) {
                var n,
                  o = [],
                  i = [],
                  s = E[e + " "];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = Se(t[n]))[x] ? o.push(s) : i.push(s);
                  (s = E(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        o = e.length > 0,
                        i = function (i, a, s, l, u) {
                          var f,
                            h,
                            v,
                            g = 0,
                            y = "0",
                            b = i && [],
                            x = [],
                            w = c,
                            T = i || (o && r.find.TAG("*", u)),
                            S = (C += null == w ? 1 : Math.random() || 0.1),
                            k = T.length;
                          for (
                            u && (c = a == p || a || u);
                            y !== k && null != (f = T[y]);
                            y++
                          ) {
                            if (o && f) {
                              for (
                                h = 0,
                                  a || f.ownerDocument == p || (d(f), (s = !m));
                                (v = e[h++]);

                              )
                                if (v(f, a || p, s)) {
                                  l.push(f);
                                  break;
                                }
                              u && (C = S);
                            }
                            n && ((f = !v && f) && g--, i && b.push(f));
                          }
                          if (((g += y), n && y !== g)) {
                            for (h = 0; (v = t[h++]); ) v(b, x, a, s);
                            if (i) {
                              if (g > 0)
                                for (; y--; )
                                  b[y] || x[y] || (x[y] = O.call(l));
                              x = Ce(x);
                            }
                            D.apply(l, x),
                              u &&
                                !i &&
                                x.length > 0 &&
                                g + t.length > 1 &&
                                se.uniqueSort(l);
                          }
                          return u && ((C = S), (c = w)), b;
                        };
                      return n ? ce(i) : i;
                    })(i, o)
                  )).selector = e;
                }
                return s;
              }),
            (l = se.select =
              function (e, t, n, o) {
                var i,
                  l,
                  c,
                  u,
                  f,
                  d = "function" == typeof e && e,
                  p = !o && a((e = d.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (l = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (c = l[0]).type &&
                    9 === t.nodeType &&
                    m &&
                    r.relative[l[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(c.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    d && (t = t.parentNode),
                      (e = e.slice(l.shift().value.length));
                  }
                  for (
                    i = Y.needsContext.test(e) ? 0 : l.length;
                    i-- && ((c = l[i]), !r.relative[(u = c.type)]);

                  )
                    if (
                      (f = r.find[u]) &&
                      (o = f(
                        c.matches[0].replace(te, ne),
                        (ee.test(l[0].type) && ge(t.parentNode)) || t
                      ))
                    ) {
                      if ((l.splice(i, 1), !(e = o.length && be(l))))
                        return D.apply(n, o), n;
                      break;
                    }
                }
                return (
                  (d || s(e, p))(
                    o,
                    t,
                    !m,
                    n,
                    !t || (ee.test(e) && ge(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = x.split("").sort(j).join("") === x),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ue(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(M, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(n);
      (T.find = k),
        (T.expr = k.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = k.uniqueSort),
        (T.text = k.getText),
        (T.isXMLDoc = k.isXML),
        (T.contains = k.contains),
        (T.escapeSelector = k.escape);
      var E = function (e, t, n) {
          for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && T(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        A = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        j = T.expr.match.needsContext;
      function L(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function O(e, t, n) {
        return g(t)
          ? T.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? T.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? T.find.matchesSelector(r, e)
              ? [r]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < r; t++) if (T.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
            return r > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(O(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(O(this, e || [], !0));
          },
          is: function (e) {
            return !!O(
              this,
              "string" == typeof e && j.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      var N,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || N), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : D.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              I.test(r[1]) && T.isPlainObject(t))
            )
              for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (o = b.getElementById(r[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : g(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (N = T(b));
      var P = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            o = this.length,
            i = [],
            a = "string" != typeof e && T(e);
          if (!j.test(e))
            for (; r < o; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(T(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return E(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return E(e, "parentNode", n);
            },
            next: function (e) {
              return M(e, "nextSibling");
            },
            prev: function (e) {
              return M(e, "previousSibling");
            },
            nextAll: function (e) {
              return E(e, "nextSibling");
            },
            prevAll: function (e) {
              return E(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return E(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return E(e, "previousSibling", n);
            },
            siblings: function (e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return A(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (L(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, r) {
              var o = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = T.filter(r, o)),
                this.length > 1 &&
                  (H[e] || T.uniqueSort(o), P.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var q = /[^\x20\t\r\n\f]+/g;
      function B(e) {
        return e;
      }
      function R(e) {
        throw e;
      }
      function z(e, t, n, r) {
        var o;
        try {
          e && g((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && g((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(q) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          r,
          o,
          i = [],
          a = [],
          s = -1,
          l = function () {
            for (o = o || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < i.length; )
                !1 === i[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                i &&
                  (n && !t && ((s = i.length - 1), a.push(n)),
                  (function t(n) {
                    T.each(n, function (n, r) {
                      g(r)
                        ? (e.unique && c.has(r)) || i.push(r)
                        : r && r.length && "string" !== C(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, i, n)) > -1; )
                    i.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (o = a = []), (i = n = ""), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (o = a = []), n || t || (i = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return c;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              o = {
                state: function () {
                  return r;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, r) {
                      var o = g(e[r[4]]) && e[r[4]];
                      i[r[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && g(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, o) {
                  var i = 0;
                  function a(e, t, r, o) {
                    return function () {
                      var s = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < i)) {
                            if ((n = r.apply(s, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              g(c)
                                ? o
                                  ? c.call(n, a(i, t, B, o), a(i, t, R, o))
                                  : (i++,
                                    c.call(
                                      n,
                                      a(i, t, B, o),
                                      a(i, t, R, o),
                                      a(i, t, B, t.notifyWith)
                                    ))
                                : (r !== B && ((s = void 0), (l = [n])),
                                  (o || t.resolveWith)(s, l));
                          }
                        },
                        u = o
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= i &&
                                    (r !== R && ((s = void 0), (l = [n])),
                                    t.rejectWith(s, l));
                              }
                            };
                      e
                        ? u()
                        : (T.Deferred.getStackHook &&
                            (u.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(a(0, n, g(o) ? o : B, n.notifyWith)),
                      t[1][3].add(a(0, n, g(e) ? e : B)),
                      t[2][3].add(a(0, n, g(r) ? r : R));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, o) : o;
                },
              },
              i = {};
            return (
              T.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (o[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (i[n[0]] = function () {
                    return (
                      i[n[0] + "With"](this === i ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (i[n[0] + "With"] = a.fireWith);
              }),
              o.promise(i),
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              o = s.call(arguments),
              i = T.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                    --t || i.resolveWith(r, o);
                };
              };
            if (
              t <= 1 &&
              (z(e, i.done(a(n)).resolve, i.reject, !t),
              "pending" === i.state() || g(o[n] && o[n].then))
            )
              return i.then();
            for (; n--; ) z(o[n], a(n), i.reject);
            return i.promise();
          },
        });
      var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          _.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var F = T.Deferred();
      function W() {
        b.removeEventListener("DOMContentLoaded", W),
          n.removeEventListener("load", W),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          F.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || F.resolveWith(b, [T]));
          },
        }),
        (T.ready.then = F.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (b.addEventListener("DOMContentLoaded", W),
            n.addEventListener("load", W));
      var $ = function (e, t, n, r, o, i, a) {
          var s = 0,
            l = e.length,
            c = null == n;
          if ("object" === C(n))
            for (s in ((o = !0), n)) $(e, t, s, n[s], !0, i, a);
          else if (
            void 0 !== r &&
            ((o = !0),
            g(r) || (a = !0),
            c &&
              (a
                ? (t.call(e, r), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(T(e), n);
                  }))),
            t)
          )
            for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return o ? e : c ? t.call(e) : l ? t(e[0], n) : i;
        },
        U = /^-ms-/,
        X = /-([a-z])/g;
      function V(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace(U, "ms-").replace(X, V);
      }
      var K = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function G() {
        this.expando = T.expando + G.uid++;
      }
      (G.uid = 1),
        (G.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                K(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n;
            else for (r in t) o[Y(r)] = t[r];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Y)
                  : (t = Y(t)) in r
                  ? [t]
                  : t.match(q) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || T.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var Z = new G(),
        J = new G(),
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Q.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            J.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return J.hasData(e) || Z.hasData(e);
        },
        data: function (e, t, n) {
          return J.access(e, t, n);
        },
        removeData: function (e, t) {
          J.remove(e, t);
        },
        _data: function (e, t, n) {
          return Z.access(e, t, n);
        },
        _removeData: function (e, t) {
          Z.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = J.get(i)), 1 === i.nodeType && !Z.get(i, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = Y(r.slice(5))), te(i, r, o[r]));
                Z.set(i, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  J.set(this, e);
                })
              : $(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t)
                      return void 0 !== (n = J.get(i, e)) ||
                        void 0 !== (n = te(i, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      J.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              J.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = Z.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = Z.access(e, t, T.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              r = n.length,
              o = n.shift(),
              i = T._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), r--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                o.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  i
                )),
              !r && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              Z.get(e, n) ||
              Z.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  Z.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              o = T.Deferred(),
              i = this,
              a = this.length,
              s = function () {
                --r || o.resolveWith(i, [i]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = Z.get(i[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ie = b.documentElement,
        ae = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
      ie.getRootNode &&
        (ae = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(se) === e.ownerDocument
          );
        });
      var le = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ae(e) && "none" === T.css(e, "display"))
        );
      };
      function ce(e, t, n, r) {
        var o,
          i,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          l = s(),
          c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== c && +l)) &&
            re.exec(T.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; a--; )
            T.style(e, t, u + c),
              (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0),
              (u /= i);
          (u *= 2), T.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = u), (r.end = o))),
          o
        );
      }
      var ue = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = ue[r];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(r))),
          (o = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (ue[r] = o),
          o)
        );
      }
      function de(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
          (r = e[i]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((o[i] = Z.get(r, "display") || null),
                  o[i] || (r.style.display = "")),
                "" === r.style.display && le(r) && (o[i] = fe(r)))
              : "none" !== n && ((o[i] = "none"), Z.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return de(this, !0);
        },
        hide: function () {
          return de(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var pe,
        he,
        me = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        pe.appendChild(he),
        (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = "<option></option>"),
        (v.option = !!pe.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && L(e, t)) ? T.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var we = /<|&#?\w+;/;
      function Ce(e, t, n, r, o) {
        for (
          var i,
            a,
            s,
            l,
            c,
            u,
            f = t.createDocumentFragment(),
            d = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((i = e[p]) || 0 === i)
            if ("object" === C(i)) T.merge(d, i.nodeType ? [i] : i);
            else if (we.test(i)) {
              for (
                a = a || f.appendChild(t.createElement("div")),
                  s = (ve.exec(i) || ["", ""])[1].toLowerCase(),
                  l = ye[s] || ye._default,
                  a.innerHTML = l[1] + T.htmlPrefilter(i) + l[2],
                  u = l[0];
                u--;

              )
                a = a.lastChild;
              T.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
            } else d.push(t.createTextNode(i));
        for (f.textContent = "", p = 0; (i = d[p++]); )
          if (r && T.inArray(i, r) > -1) o && o.push(i);
          else if (
            ((c = ae(i)), (a = be(f.appendChild(i), "script")), c && xe(a), n)
          )
            for (u = 0; (i = a[u++]); ) ge.test(i.type || "") && n.push(i);
        return f;
      }
      var Te = /^([^.]*)(?:\.(.+)|)/;
      function Se() {
        return !0;
      }
      function ke() {
        return !1;
      }
      function Ee(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Ae(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Ae(e, s, n, r, t[s], i);
          return e;
        }
        if (
          (null == r && null == o
            ? ((o = n), (r = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = r), (r = void 0))
                : ((o = r), (r = n), (n = void 0))),
          !1 === o)
        )
          o = ke;
        else if (!o) return e;
        return (
          1 === i &&
            ((a = o),
            ((o = function (e) {
              return T().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, o, r, n);
          })
        );
      }
      function je(e, t, n) {
        n
          ? (Z.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  o,
                  i = Z.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i.length)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((i = s.call(arguments)),
                    Z.set(this, t, i),
                    (r = n(this, t)),
                    this[t](),
                    i !== (o = Z.get(this, t)) || r
                      ? Z.set(this, t, !1)
                      : (o = {}),
                    i !== o)
                  )
                    return (
                      e.stopImmediatePropagation(),
                      e.preventDefault(),
                      o && o.value
                    );
                } else
                  i.length &&
                    (Z.set(this, t, {
                      value: T.event.trigger(
                        T.extend(i[0], T.Event.prototype),
                        i.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === Z.get(e, t) && T.event.add(e, t, Se);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, r, o) {
          var i,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            h,
            m,
            v = Z.get(e);
          if (K(e))
            for (
              n.handler && ((n = (i = n).handler), (o = i.selector)),
                o && T.find.matchesSelector(ie, o),
                n.guid || (n.guid = T.guid++),
                (l = v.events) || (l = v.events = Object.create(null)),
                (a = v.handle) ||
                  (a = v.handle =
                    function (t) {
                      return void 0 !== T && T.event.triggered !== t.type
                        ? T.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(q) || [""]).length;
              c--;

            )
              (p = m = (s = Te.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p &&
                  ((f = T.event.special[p] || {}),
                  (p = (o ? f.delegateType : f.bindType) || p),
                  (f = T.event.special[p] || {}),
                  (u = T.extend(
                    {
                      type: p,
                      origType: m,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && T.expr.match.needsContext.test(o),
                      namespace: h.join("."),
                    },
                    i
                  )),
                  (d = l[p]) ||
                    (((d = l[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (T.event.global[p] = !0));
        },
        remove: function (e, t, n, r, o) {
          var i,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            h,
            m,
            v = Z.hasData(e) && Z.get(e);
          if (v && (l = v.events)) {
            for (c = (t = (t || "").match(q) || [""]).length; c--; )
              if (
                ((p = m = (s = Te.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  f = T.event.special[p] || {},
                    d = l[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = i = d.length;
                  i--;

                )
                  (u = d[i]),
                    (!o && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (s && !s.test(u.namespace)) ||
                      (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                      (d.splice(i, 1),
                      u.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, u));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    T.removeEvent(e, p, v.handle),
                  delete l[p]);
              } else for (p in l) T.event.remove(e, p + t[c], n, r, !0);
            T.isEmptyObject(l) && Z.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s = new Array(arguments.length),
            l = T.event.fix(e),
            c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
            u = T.event.special[l.type] || {};
          for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              a = T.event.handlers.call(this, l, c), t = 0;
              (o = a[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = o.elem, n = 0;
                (i = o.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== i.namespace &&
                  !l.rnamespace.test(i.namespace)) ||
                  ((l.handleObj = i),
                  (l.data = i.data),
                  void 0 !==
                    (r = (
                      (T.event.special[i.origType] || {}).handle || i.handler
                    ).apply(o.elem, s)) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (i = [], a = {}, n = 0; n < l; n++)
                  void 0 === a[(o = (r = t[n]).selector + " ")] &&
                    (a[o] = r.needsContext
                      ? T(o, this).index(c) > -1
                      : T.find(o, this, null, [c]).length),
                    a[o] && i.push(r);
                i.length && s.push({ elem: c, handlers: i });
              }
          return (
            (c = this),
            l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: g(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                me.test(t.type) &&
                  t.click &&
                  L(t, "input") &&
                  je(t, "click", Se),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                me.test(t.type) && t.click && L(t, "input") && je(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (me.test(t.type) &&
                  t.click &&
                  L(t, "input") &&
                  Z.get(t, "click")) ||
                L(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Se
                  : ke),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: ke,
          isPropagationStopped: ke,
          isImmediatePropagationStopped: ke,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Se),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Se),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Se),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return je(this, e, Ee), !1;
            },
            trigger: function () {
              return je(this, e), !0;
            },
            _default: function (t) {
              return Z.get(t.target, e);
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  o = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (o && (o === r || T.contains(r, o))) ||
                    ((e.type = i.origType),
                    (n = i.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, r) {
            return Ae(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                T(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = ke),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Le = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Ne(e, t) {
        return (
          (L(e, "table") &&
            L(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function De(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Pe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function He(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
          if (Z.hasData(e) && (s = Z.get(e).events))
            for (o in (Z.remove(t, "handle events"), s))
              for (n = 0, r = s[o].length; n < r; n++)
                T.event.add(t, o, s[o][n]);
          J.hasData(e) &&
            ((i = J.access(e)), (a = T.extend({}, i)), J.set(t, a));
        }
      }
      function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function qe(e, t, n, r) {
        t = l(t);
        var o,
          i,
          a,
          s,
          c,
          u,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          m = g(h);
        if (m || (d > 1 && "string" == typeof h && !v.checkClone && Ie.test(h)))
          return e.each(function (o) {
            var i = e.eq(o);
            m && (t[0] = h.call(this, o, i.html())), qe(i, t, n, r);
          });
        if (
          d &&
          ((i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === o.childNodes.length && (o = i),
          i || r)
        ) {
          for (s = (a = T.map(be(o, "script"), De)).length; f < d; f++)
            (c = o),
              f !== p &&
                ((c = T.clone(c, !0, !0)), s && T.merge(a, be(c, "script"))),
              n.call(e[f], c, f);
          if (s)
            for (
              u = a[a.length - 1].ownerDocument, T.map(a, Pe), f = 0;
              f < s;
              f++
            )
              (c = a[f]),
                ge.test(c.type || "") &&
                  !Z.access(c, "globalEval") &&
                  T.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !c.noModule &&
                      T._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : w(c.textContent.replace(Oe, ""), c, u));
        }
        return e;
      }
      function Be(e, t, n) {
        for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
          n || 1 !== r.nodeType || T.cleanData(be(r)),
            r.parentNode &&
              (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            o,
            i,
            a,
            s = e.cloneNode(!0),
            l = ae(e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++)
              Me(i[r], a[r]);
          if (t)
            if (n)
              for (
                i = i || be(e), a = a || be(s), r = 0, o = i.length;
                r < o;
                r++
              )
                He(i[r], a[r]);
            else He(e, s);
          return (
            (a = be(s, "script")).length > 0 && xe(a, !l && be(e, "script")), s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, o = T.event.special, i = 0;
            void 0 !== (n = e[i]);
            i++
          )
            if (K(n)) {
              if ((t = n[Z.expando])) {
                if (t.events)
                  for (r in t.events)
                    o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                n[Z.expando] = void 0;
              }
              n[J.expando] && (n[J.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return Be(this, e, !0);
          },
          remove: function (e) {
            return Be(this, e);
          },
          text: function (e) {
            return $(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return qe(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Ne(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return qe(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Ne(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return qe(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return qe(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return $(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Le.test(e) &&
                  !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return qe(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var n, r = [], o = T(e), i = o.length - 1, a = 0;
                a <= i;
                a++
              )
                (n = a === i ? this : this.clone(!0)),
                  T(o[a])[t](n),
                  c.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        ze = /^--/,
        _e = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Fe = function (e, t, n) {
          var r,
            o,
            i = {};
          for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
          return r;
        },
        We = new RegExp(oe.join("|"), "i"),
        $e = new RegExp(
          "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
          "g"
        );
      function Ue(e, t, n) {
        var r,
          o,
          i,
          a,
          s = ze.test(t),
          l = e.style;
        return (
          (n = n || _e(e)) &&
            ((a = n.getPropertyValue(t) || n[t]),
            s && a && (a = a.replace($e, "$1") || void 0),
            "" !== a || ae(e) || (a = T.style(e, t)),
            !v.pixelBoxStyles() &&
              Re.test(a) &&
              We.test(t) &&
              ((r = l.width),
              (o = l.minWidth),
              (i = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = a),
              (a = n.width),
              (l.width = r),
              (l.minWidth = o),
              (l.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }
      function Xe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ie.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (r = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (a = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (i = 12 === t(u.offsetWidth / 3)),
              ie.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          o,
          i,
          a,
          s,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
          T.extend(v, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), i;
            },
            reliableTrDimensions: function () {
              var e, t, r, o;
              return (
                null == s &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (r = b.createElement("div")),
                  (e.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "border:1px solid"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  (r.style.display = "block"),
                  ie.appendChild(e).appendChild(t).appendChild(r),
                  (o = n.getComputedStyle(t)),
                  (s =
                    parseInt(o.height, 10) +
                      parseInt(o.borderTopWidth, 10) +
                      parseInt(o.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  ie.removeChild(e)),
                s
              );
            },
          }));
      })();
      var Ve = ["Webkit", "Moz", "ms"],
        Ye = b.createElement("div").style,
        Ke = {};
      function Ge(e) {
        var t = T.cssProps[e] || Ke[e];
        return (
          t ||
          (e in Ye
            ? e
            : (Ke[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                    n--;

                  )
                    if ((e = Ve[n] + t) in Ye) return e;
                })(e) || e))
        );
      }
      var Ze = /^(none|table(?!-c[ea]).+)/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };
      function et(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function tt(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (l += T.css(e, n + oe[a], !0, o)),
            r
              ? ("content" === n && (l -= T.css(e, "padding" + oe[a], !0, o)),
                "margin" !== n &&
                  (l -= T.css(e, "border" + oe[a] + "Width", !0, o)))
              : ((l += T.css(e, "padding" + oe[a], !0, o)),
                "padding" !== n
                  ? (l += T.css(e, "border" + oe[a] + "Width", !0, o))
                  : (s += T.css(e, "border" + oe[a] + "Width", !0, o)));
        return (
          !r &&
            i >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    i -
                    l -
                    s -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function nt(e, t, n) {
        var r = _e(e),
          o =
            (!v.boxSizingReliable() || n) &&
            "border-box" === T.css(e, "boxSizing", !1, r),
          i = o,
          a = Ue(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!v.boxSizingReliable() && o) ||
            (!v.reliableTrDimensions() && L(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === T.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((o = "border-box" === T.css(e, "boxSizing", !1, r)),
            (i = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            tt(e, t, n || (o ? "border" : "content"), i, r, a) +
            "px"
        );
      }
      function rt(e, t, n, r, o) {
        return new rt.prototype.init(e, t, n, r, o);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ue(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              i,
              a,
              s = Y(t),
              l = ze.test(t),
              c = e.style;
            if (
              (l || (t = Ge(s)),
              (a = T.cssHooks[t] || T.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                ? o
                : c[t];
            "string" === (i = typeof n) &&
              (o = re.exec(n)) &&
              o[1] &&
              ((n = ce(e, t, o)), (i = "number")),
              null != n &&
                n == n &&
                ("number" !== i ||
                  l ||
                  (n += (o && o[3]) || (T.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var o,
            i,
            a,
            s = Y(t);
          return (
            ze.test(t) || (t = Ge(s)),
            (a = T.cssHooks[t] || T.cssHooks[s]) &&
              "get" in a &&
              (o = a.get(e, !0, n)),
            void 0 === o && (o = Ue(e, t, r)),
            "normal" === o && t in Qe && (o = Qe[t]),
            "" === n || n
              ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
              : o
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ze.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? nt(e, t, r)
                  : Fe(e, Je, function () {
                      return nt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var o,
                i = _e(e),
                a = !v.scrollboxSize() && "absolute" === i.position,
                s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, i),
                l = r ? tt(e, t, r, s, i) : 0;
              return (
                s &&
                  a &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(i[t]) -
                      tt(e, t, "border", !1, i) -
                      0.5
                  )),
                l &&
                  (o = re.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                et(0, n, l)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Fe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  o = {},
                  i = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
              return o;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = et);
        }),
        T.fn.extend({
          css: function (e, t) {
            return $(
              this,
              function (e, t, n) {
                var r,
                  o,
                  i = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = _e(e), o = t.length; a < o; a++)
                    i[t[a]] = T.css(e, t[a], !1, r);
                  return i;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = rt),
        (rt.prototype = {
          constructor: rt,
          init: function (e, t, n, r, o, i) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = i || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = rt.propHooks[this.prop];
            return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = rt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    T.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : rt.propHooks._default.set(this),
              this
            );
          },
        }),
        (rt.prototype.init.prototype = rt.prototype),
        (rt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!T.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = rt.prototype.init),
        (T.fx.step = {});
      var ot,
        it,
        at = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
      function lt() {
        it &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(lt)
            : n.setTimeout(lt, T.fx.interval),
          T.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            ot = void 0;
          }),
          (ot = Date.now())
        );
      }
      function ut(e, t) {
        var n,
          r = 0,
          o = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          o["margin" + (n = oe[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function ft(e, t, n) {
        for (
          var r,
            o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
            i = 0,
            a = o.length;
          i < a;
          i++
        )
          if ((r = o[i].call(n, t, e))) return r;
      }
      function dt(e, t, n) {
        var r,
          o,
          i = 0,
          a = dt.prefilters.length,
          s = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var t = ot || ct(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = 1 - (n / c.duration || 0),
                i = 0,
                a = c.tweens.length;
              i < a;
              i++
            )
              c.tweens[i].run(r);
            return (
              s.notifyWith(e, [c, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ot || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = T.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                  : s.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, r, o, i, a;
            for (n in e)
              if (
                ((o = t[(r = Y(n))]),
                (i = e[n]),
                Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                n !== r && ((e[r] = i), delete e[n]),
                (a = T.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((i = a.expand(i)), delete e[r], i))
                  (n in e) || ((e[n] = i[n]), (t[n] = o));
              else t[r] = o;
          })(u, c.opts.specialEasing);
          i < a;
          i++
        )
          if ((r = dt.prefilters[i].call(c, e, u, c.opts)))
            return (
              g(r.stop) &&
                (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          T.map(u, ft, c),
          g(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (T.Animation = T.extend(dt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ce(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          g(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
          for (var n, r = 0, o = e.length; r < o; r++)
            (n = e[r]),
              (dt.tweeners[n] = dt.tweeners[n] || []),
              dt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              l,
              c,
              u,
              f = "width" in t || "height" in t,
              d = this,
              p = {},
              h = e.style,
              m = e.nodeType && le(e),
              v = Z.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = T._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((o = t[r]), at.test(o))) {
                if (
                  (delete t[r],
                  (i = i || "toggle" === o),
                  o === (m ? "hide" : "show"))
                ) {
                  if ("show" !== o || !v || void 0 === v[r]) continue;
                  m = !0;
                }
                p[r] = (v && v[r]) || T.style(e, r);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = v && v.display) && (c = Z.get(e, "display")),
                "none" === (u = T.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (de([e], !0),
                      (c = e.style.display || c),
                      (u = T.css(e, "display")),
                      de([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === T.css(e, "float") &&
                  (l ||
                    (d.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (v
                    ? "hidden" in v && (m = v.hidden)
                    : (v = Z.access(e, "fxshow", { display: c })),
                  i && (v.hidden = !m),
                  m && de([e], !0),
                  d.done(function () {
                    for (r in (m || de([e]), Z.remove(e, "fxshow"), p))
                      T.style(e, r, p[r]);
                  })),
                  (l = ft(m ? v[r] : 0, r, d)),
                  r in v ||
                    ((v[r] = l.start), m && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (g(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !g(t) && t),
                };
          return (
            T.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in T.fx.speeds
                  ? (r.duration = T.fx.speeds[r.duration])
                  : (r.duration = T.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              g(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }),
            r
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var o = T.isEmptyObject(e),
              i = T.speed(t, n, r),
              a = function () {
                var t = dt(this, T.extend({}, e), i);
                (o || Z.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  i = T.timers,
                  a = Z.get(this);
                if (o) a[o] && a[o].stop && r(a[o]);
                else for (o in a) a[o] && a[o].stop && st.test(o) && r(a[o]);
                for (o = i.length; o--; )
                  i[o].elem !== this ||
                    (null != e && i[o].queue !== e) ||
                    (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = Z.get(this),
                  r = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  i = T.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = i.length;
                  t--;

                )
                  i[t].elem === this &&
                    i[t].queue === e &&
                    (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, r, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ut(t, !0), e, r, o);
          };
        }),
        T.each(
          {
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (ot = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (ot = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          it || ((it = !0), lt());
        }),
        (T.fx.stop = function () {
          it = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var o = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var pt,
        ht = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return $(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === i && T.isXMLDoc(e)) ||
                    (o =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? pt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (r = o.get(e, t))
                    ? r
                    : null == (r = T.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && L(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              o = t && t.match(q);
            if (o && 1 === e.nodeType)
              for (; (n = o[r++]); ) e.removeAttribute(n);
          },
        }),
        (pt = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = ht[t] || T.find.attr;
          ht[t] = function (e, t, r) {
            var o,
              i,
              a = t.toLowerCase();
            return (
              r ||
                ((i = ht[a]),
                (ht[a] = o),
                (o = null != n(e, t, r) ? a : null),
                (ht[a] = i)),
              o
            );
          };
        });
      var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
      function gt(e) {
        return (e.match(q) || []).join(" ");
      }
      function yt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function bt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(q)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return $(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (o = T.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : o && "get" in o && null !== (r = o.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t, n, r, o, i, a;
            return g(e)
              ? this.each(function (t) {
                  T(this).addClass(e.call(this, t, yt(this)));
                })
              : (t = bt(e)).length
              ? this.each(function () {
                  if (
                    ((r = yt(this)),
                    (n = 1 === this.nodeType && " " + gt(r) + " "))
                  ) {
                    for (i = 0; i < t.length; i++)
                      (o = t[i]),
                        n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    (a = gt(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this;
          },
          removeClass: function (e) {
            var t, n, r, o, i, a;
            return g(e)
              ? this.each(function (t) {
                  T(this).removeClass(e.call(this, t, yt(this)));
                })
              : arguments.length
              ? (t = bt(e)).length
                ? this.each(function () {
                    if (
                      ((r = yt(this)),
                      (n = 1 === this.nodeType && " " + gt(r) + " "))
                    ) {
                      for (i = 0; i < t.length; i++)
                        for (o = t[i]; n.indexOf(" " + o + " ") > -1; )
                          n = n.replace(" " + o + " ", " ");
                      (a = gt(n)), r !== a && this.setAttribute("class", a);
                    }
                  })
                : this
              : this.attr("class", "");
          },
          toggleClass: function (e, t) {
            var n,
              r,
              o,
              i,
              a = typeof e,
              s = "string" === a || Array.isArray(e);
            return g(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, yt(this), t), t);
                })
              : "boolean" == typeof t && s
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : ((n = bt(e)),
                this.each(function () {
                  if (s)
                    for (i = T(this), o = 0; o < n.length; o++)
                      (r = n[o]),
                        i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                  else
                    (void 0 !== e && "boolean" !== a) ||
                      ((r = yt(this)) && Z.set(this, "__className__", r),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          r || !1 === e
                            ? ""
                            : Z.get(this, "__className__") || ""
                        ));
                }));
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + gt(yt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var xt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            o = this[0];
          return arguments.length
            ? ((r = g(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = r ? e.call(this, n, T(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = T.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(xt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : gt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o = e.options,
                  i = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  l = a ? i + 1 : o.length;
                for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                  if (
                    ((n = o[r]).selected || r === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, o = e.options, i = T.makeArray(t), a = o.length;
                  a--;

                )
                  ((r = o[a]).selected =
                    T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var wt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, r, o) {
          var i,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            h = [r || b],
            m = p.call(e, "type") ? e.type : e,
            v = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = d = s = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !wt.test(m + T.event.triggered) &&
              (m.indexOf(".") > -1 &&
                ((v = m.split(".")), (m = v.shift()), v.sort()),
              (c = m.indexOf(":") < 0 && "on" + m),
              ((e = e[T.expando]
                ? e
                : new T.Event(m, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (f = T.event.special[m] || {}),
              o || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!o && !f.noBubble && !y(r)) {
              for (
                l = f.delegateType || m, wt.test(l + m) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (s = a);
              s === (r.ownerDocument || b) &&
                h.push(s.defaultView || s.parentWindow || n);
            }
            for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
              (d = a),
                (e.type = i > 1 ? l : f.bindType || m),
                (u =
                  (Z.get(a, "events") || Object.create(null))[e.type] &&
                  Z.get(a, "handle")) && u.apply(a, t),
                (u = c && a[c]) &&
                  u.apply &&
                  K(a) &&
                  ((e.result = u.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = m),
              o ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !K(r) ||
                (c &&
                  g(r[m]) &&
                  !y(r) &&
                  ((s = r[c]) && (r[c] = null),
                  (T.event.triggered = m),
                  e.isPropagationStopped() && d.addEventListener(m, Ct),
                  r[m](),
                  e.isPropagationStopped() && d.removeEventListener(m, Ct),
                  (T.event.triggered = void 0),
                  s && (r[c] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(r, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  o = Z.access(r, t);
                o || r.addEventListener(e, n, !0), Z.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  o = Z.access(r, t) - 1;
                o
                  ? Z.access(r, t, o)
                  : (r.removeEventListener(e, n, !0), Z.remove(r, t));
              },
            };
          });
      var Tt = n.location,
        St = { guid: Date.now() },
        kt = /\?/;
      T.parseXML = function (e) {
        var t, r;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (r = t && t.getElementsByTagName("parsererror")[0]),
          (t && !r) ||
            T.error(
              "Invalid XML: " +
                (r
                  ? T.map(r.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e)
            ),
          t
        );
      };
      var Et = /\[\]$/,
        At = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      function It(e, t, n, r) {
        var o;
        if (Array.isArray(t))
          T.each(t, function (t, o) {
            n || Et.test(e)
              ? r(e, o)
              : It(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  r
                );
          });
        else if (n || "object" !== C(t)) r(e, t);
        else for (o in t) It(e + "[" + o + "]", t[o], n, r);
      }
      (T.param = function (e, t) {
        var n,
          r = [],
          o = function (e, t) {
            var n = g(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) It(n, e[n], t, o);
        return r.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Lt.test(this.nodeName) &&
                  !jt.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(At, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(At, "\r\n") };
              })
              .get();
          },
        });
      var Ot = /%20/g,
        Nt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        qt = {},
        Bt = {},
        Rt = "*/".concat("*"),
        zt = b.createElement("a");
      function _t(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            o = 0,
            i = t.toLowerCase().match(q) || [];
          if (g(n))
            for (; (r = i[o++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Ft(e, t, n, r) {
        var o = {},
          i = e === Bt;
        function a(s) {
          var l;
          return (
            (o[s] = !0),
            T.each(e[s] || [], function (e, s) {
              var c = s(t, n, r);
              return "string" != typeof c || i || o[c]
                ? i
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), a(c), !1);
            }),
            l
          );
        }
        return a(t.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function Wt(e, t) {
        var n,
          r,
          o = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e;
      }
      (zt.href = Tt.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Tt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Rt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
          },
          ajaxPrefilter: _t(qt),
          ajaxTransport: _t(Bt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              o,
              i,
              a,
              s,
              l,
              c,
              u,
              f,
              d,
              p = T.ajaxSetup({}, t),
              h = p.context || p,
              m = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
              v = T.Deferred(),
              g = T.Callbacks("once memory"),
              y = p.statusCode || {},
              x = {},
              w = {},
              C = "canceled",
              S = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!a)
                      for (a = {}; (t = Pt.exec(i)); )
                        a[t[1].toLowerCase() + " "] = (
                          a[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? i : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) S.always(e[S.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || C;
                  return r && r.abort(t), k(0, t), this;
                },
              };
            if (
              (v.promise(S),
              (p.url = ((e || p.url || Tt.href) + "").replace(
                Mt,
                Tt.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(q) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = p.url),
                  (l.href = l.href),
                  (p.crossDomain =
                    zt.protocol + "//" + zt.host != l.protocol + "//" + l.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = T.param(p.data, p.traditional)),
              Ft(qt, p, t, S),
              c)
            )
              return S;
            for (f in ((u = T.event && p.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Ht.test(p.type)),
            (o = p.url.replace(Nt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Ot, "+"))
              : ((d = p.url.slice(o.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((o += (kt.test(o) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((o = o.replace(Dt, "$1")),
                  (d = (kt.test(o) ? "&" : "?") + "_=" + St.guid++ + d)),
                (p.url = o + d)),
            p.ifModified &&
              (T.lastModified[o] &&
                S.setRequestHeader("If-Modified-Since", T.lastModified[o]),
              T.etag[o] && S.setRequestHeader("If-None-Match", T.etag[o])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              S.setRequestHeader("Content-Type", p.contentType),
            S.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              S.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || c))
              return S.abort();
            if (
              ((C = "abort"),
              g.add(p.complete),
              S.done(p.success),
              S.fail(p.error),
              (r = Ft(Bt, p, t, S)))
            ) {
              if (((S.readyState = 1), u && m.trigger("ajaxSend", [S, p]), c))
                return S;
              p.async &&
                p.timeout > 0 &&
                (s = n.setTimeout(function () {
                  S.abort("timeout");
                }, p.timeout));
              try {
                (c = !1), r.send(x, k);
              } catch (e) {
                if (c) throw e;
                k(-1, e);
              }
            } else k(-1, "No Transport");
            function k(e, t, a, l) {
              var f,
                d,
                b,
                x,
                w,
                C = t;
              c ||
                ((c = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (i = l || ""),
                (S.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function (e, t, n) {
                    for (
                      var r, o, i, a, s = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (o in s)
                        if (s[o] && s[o].test(r)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) i = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          i = o;
                          break;
                        }
                        a || (a = o);
                      }
                      i = i || a;
                    }
                    if (i) return i !== l[0] && l.unshift(i), n[i];
                  })(p, S, a)),
                !f &&
                  T.inArray("script", p.dataTypes) > -1 &&
                  T.inArray("json", p.dataTypes) < 0 &&
                  (p.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var o,
                    i,
                    a,
                    s,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (a in e.converters)
                      c[a.toLowerCase()] = e.converters[a];
                  for (i = u.shift(); i; )
                    if (
                      (e.responseFields[i] && (n[e.responseFields[i]] = t),
                      !l &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = i),
                      (i = u.shift()))
                    )
                      if ("*" === i) i = l;
                      else if ("*" !== l && l !== i) {
                        if (!(a = c[l + " " + i] || c["* " + i]))
                          for (o in c)
                            if (
                              (s = o.split(" "))[1] === i &&
                              (a = c[l + " " + s[0]] || c["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = c[o])
                                : !0 !== c[o] && ((i = s[0]), u.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + l + " to " + i,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, x, S, f)),
                f
                  ? (p.ifModified &&
                      ((w = S.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[o] = w),
                      (w = S.getResponseHeader("etag")) && (T.etag[o] = w)),
                    204 === e || "HEAD" === p.type
                      ? (C = "nocontent")
                      : 304 === e
                      ? (C = "notmodified")
                      : ((C = x.state), (d = x.data), (f = !(b = x.error))))
                  : ((b = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                (S.status = e),
                (S.statusText = (t || C) + ""),
                f ? v.resolveWith(h, [d, C, S]) : v.rejectWith(h, [S, C, b]),
                S.statusCode(y),
                (y = void 0),
                u &&
                  m.trigger(f ? "ajaxSuccess" : "ajaxError", [S, p, f ? d : b]),
                g.fireWith(h, [S, C]),
                u &&
                  (m.trigger("ajaxComplete", [S, p]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, n, r, o) {
            return (
              g(n) && ((o = o || r), (r = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: o, data: n, success: r },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        T.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t, n);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (g(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return g(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var $t = { 0: 200, 1223: 204 },
        Ut = T.ajaxSettings.xhr();
      (v.cors = !!Ut && "withCredentials" in Ut),
        (v.ajax = Ut = !!Ut),
        T.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || (Ut && !e.crossDomain))
            return {
              send: function (o, i) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  s.setRequestHeader(a, o[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? i(0, "error")
                          : i(s.status, s.statusText)
                        : i(
                            $t[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, o) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Xt,
        Vt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Vt.pop() || T.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, r) {
          var o,
            i,
            a,
            s =
              !1 !== e.jsonp &&
              (Yt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Yt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback =
                g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Yt, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return a || T.error(o + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (i = n[o]),
              (n[o] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === i ? T(n).removeProp(o) : (n[o] = i),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(o)),
                  a && g(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Xt = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Xt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (i = !n && []),
              (o = I.exec(e))
                ? [t.createElement(o[1])]
                : ((o = Ce([e], t, i)),
                  i && i.length && T(i).remove(),
                  T.merge([], o.childNodes)));
          var r, o, i;
        }),
        (T.fn.load = function (e, t, n) {
          var r,
            o,
            i,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = gt(e.slice(s))), (e = e.slice(0, s))),
            g(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            a.length > 0 &&
              T.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (i = arguments),
                    a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              l,
              c = T.css(e, "position"),
              u = T(e),
              f = {};
            "static" === c && (e.style.position = "relative"),
              (s = u.offset()),
              (i = T.css(e, "top")),
              (l = T.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (i + l).indexOf("auto") > -1
                ? ((a = (r = u.position()).top), (o = r.left))
                : ((a = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
              g(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + o),
              "using" in t ? t.using.call(e, f) : u.css(f);
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === T.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (o.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - T.css(r, "marginTop", !0),
                left: t.left - o.left - T.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || ie;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
              return $(
                this,
                function (e, r, o) {
                  var i;
                  if (
                    (y(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === o)
                  )
                    return i ? i[t] : e[r];
                  i
                    ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset)
                    : (e[r] = o);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Xe(v.pixelPosition, function (e, n) {
            if (n)
              return (n = Ue(e, t)), Re.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              T.fn[r] = function (o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                  s = n || (!0 === o || !0 === i ? "margin" : "border");
                return $(
                  this,
                  function (t, n, o) {
                    var i;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((i = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          i["scroll" + e],
                          t.body["offset" + e],
                          i["offset" + e],
                          i["client" + e]
                        ))
                      : void 0 === o
                      ? T.css(t, n, s)
                      : T.style(t, n, o, s);
                  },
                  t,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Kt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (e, t) {
        var n, r, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
          return (
            (r = s.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || T.guid++),
            o
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = L),
        (T.isFunction = g),
        (T.isWindow = y),
        (T.camelCase = Y),
        (T.type = C),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (T.trim = function (e) {
          return null == e ? "" : (e + "").replace(Kt, "$1");
        }),
        void 0 ===
          (r = function () {
            return T;
          }.apply(t, [])) || (e.exports = r);
      var Gt = n.jQuery,
        Zt = n.$;
      return (
        (T.noConflict = function (e) {
          return (
            n.$ === T && (n.$ = Zt), e && n.jQuery === T && (n.jQuery = Gt), T
          );
        }),
        void 0 === o && (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function (e, t, n) {
    e.exports = n(2);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(3), n(7), n(9);
  },
  function (e, t, n) {
    var r = n(4);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(5)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var r,
      o,
      i = {},
      a =
        ((r = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === o && (o = r.apply(this, arguments)), o;
        }),
      s = function (e, t) {
        return t ? t.querySelector(e) : document.querySelector(e);
      },
      l = (function (e) {
        var t = {};
        return function (e, n) {
          if ("function" == typeof e) return e();
          if (void 0 === t[e]) {
            var r = s.call(this, e, n);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            t[e] = r;
          }
          return t[e];
        };
      })(),
      c = null,
      u = 0,
      f = [],
      d = n(6);
    function p(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = i[r.id];
        if (o) {
          o.refs++;
          for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) o.parts.push(b(r.parts[a], t));
        } else {
          var s = [];
          for (a = 0; a < r.parts.length; a++) s.push(b(r.parts[a], t));
          i[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function h(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(s) : n.push((r[a] = { id: a, parts: [s] }));
      }
      return n;
    }
    function m(e, t) {
      var n = l(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = f[f.length - 1];
      if ("top" === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          f.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var o = l(e.insertAt.before, n);
        n.insertBefore(t, o);
      }
    }
    function v(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = f.indexOf(e);
      t >= 0 && f.splice(t, 1);
    }
    function g(e) {
      var t = document.createElement("style");
      if (
        (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce)
      ) {
        var r = (function () {
          0;
          return n.nc;
        })();
        r && (e.attrs.nonce = r);
      }
      return y(t, e.attrs), m(e, t), t;
    }
    function y(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }
    function b(e, t) {
      var n, r, o, i;
      if (t.transform && e.css) {
        if (
          !(i =
            "function" == typeof t.transform
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function () {};
        e.css = i;
      }
      if (t.singleton) {
        var a = u++;
        (n = c || (c = g(t))),
          (r = C.bind(null, n, a, !1)),
          (o = C.bind(null, n, a, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function (e) {
              var t = document.createElement("link");
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                y(t, e.attrs),
                m(e, t),
                t
              );
            })(t)),
            (r = S.bind(null, n, t)),
            (o = function () {
              v(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = g(t)),
            (r = T.bind(null, n)),
            (o = function () {
              v(n);
            }));
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = h(e, t);
      return (
        p(n, t),
        function (e) {
          for (var r = [], o = 0; o < n.length; o++) {
            var a = n[o];
            (s = i[a.id]).refs--, r.push(s);
          }
          e && p(h(e, t), t);
          for (o = 0; o < r.length; o++) {
            var s;
            if (0 === (s = r[o]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();
              delete i[s.id];
            }
          }
        }
      );
    };
    var x,
      w =
        ((x = []),
        function (e, t) {
          return (x[e] = t), x.filter(Boolean).join("\n");
        });
    function C(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function T(e, t) {
      var n = t.css,
        r = t.media;
      if ((r && e.setAttribute("media", r), e.styleSheet))
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function S(e, t, n) {
      var r = n.css,
        o = n.sourceMap,
        i = void 0 === t.convertToAbsoluteUrls && o;
      (t.convertToAbsoluteUrls || i) && (r = d(r)),
        o &&
          (r +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            " */");
      var a = new Blob([r], { type: "text/css" }),
        s = e.href;
      (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (e, t) {
          var o,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? e
            : ((o =
                0 === i.indexOf("//")
                  ? i
                  : 0 === i.indexOf("/")
                  ? n + i
                  : r + i.replace(/^\.\//, "")),
              "url(" + JSON.stringify(o) + ")");
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(8);
      function t(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return r(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      e(document).ready(function () {
        window.addEventListener("touchstart", function () {}, { passive: !1 }),
          1 == localStorage.getItem("contraindications") &&
            e(".js-contraindications-block").addClass("is-hidden"),
          e("#fullpage").fullpage({ scrollBar: !0 }),
          e(".js-video-open").click(function () {
            popups.video();
          }),
          e(".js-menu-btn").click(function () {
            e(".js-header").toggleClass("is-open");
          }),
          e(".js-contraindications-hidden-btn").click(function () {
            e(".js-contraindications-block").addClass("is-hidden"),
              localStorage.setItem("contraindications", 1);
          }),
          e(".js-main").addClass("is-loaded"),
          t(document.querySelectorAll(".accordionZZZ")).forEach(function (e) {
            e.addEventListener("click", function (t) {
              e.classList.toggle("active");
              var n = e.children[1];
              n.style.maxHeight
                ? (n.style.maxHeight = null)
                : (n.style.maxHeight = n.scrollHeight + "px");
            });
          });
      });
    }.call(this, n(0)));
  },
  function (e, t, n) {
    var r, o;
    /*!
     * fullPage 2.9.7
     * https://github.com/alvarotrigo/fullPage.js
     * @license MIT licensed
     *
     * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
     */
    !(function (i, a) {
      "use strict";
      (r = [n(0)]),
        void 0 ===
          (o = function (e) {
            return (function (e, t, n, r, o) {
              var i = "active",
                a = "fp-completely",
                s = ".fp-section",
                l = s + ".active",
                c = e(t),
                u = e(n);
              e.fn.fullpage = function (f) {
                if (e("html").hasClass("fp-enabled")) pt();
                else {
                  var d = e("html, body"),
                    p = e("body"),
                    h = e.fn.fullpage;
                  f = e.extend(
                    {
                      menu: !1,
                      anchors: [],
                      lockAnchors: !1,
                      navigation: !1,
                      navigationPosition: "right",
                      navigationTooltips: [],
                      showActiveTooltip: !1,
                      slidesNavigation: !1,
                      slidesNavPosition: "bottom",
                      scrollBar: !1,
                      hybrid: !1,
                      css3: !0,
                      scrollingSpeed: 700,
                      autoScrolling: !0,
                      fitToSection: !0,
                      fitToSectionDelay: 1e3,
                      easing: "easeInOutCubic",
                      easingcss3: "ease",
                      loopBottom: !1,
                      loopTop: !1,
                      loopHorizontal: !0,
                      continuousVertical: !1,
                      continuousHorizontal: !1,
                      scrollHorizontally: !1,
                      interlockedSlides: !1,
                      dragAndMove: !1,
                      offsetSections: !1,
                      resetSliders: !1,
                      fadingEffect: !1,
                      normalScrollElements: null,
                      scrollOverflow: !1,
                      scrollOverflowReset: !1,
                      scrollOverflowHandler: e.fn.fp_scrolloverflow
                        ? e.fn.fp_scrolloverflow.iscrollHandler
                        : null,
                      scrollOverflowOptions: null,
                      touchSensitivity: 5,
                      normalScrollElementTouchThreshold: 5,
                      bigSectionsDestination: null,
                      keyboardScrolling: !0,
                      animateAnchor: !0,
                      recordHistory: !0,
                      controlArrows: !0,
                      controlArrowColor: "#fff",
                      verticalCentered: !0,
                      sectionsColor: [],
                      paddingTop: 0,
                      paddingBottom: 0,
                      fixedElements: null,
                      responsive: 0,
                      responsiveWidth: 0,
                      responsiveHeight: 0,
                      responsiveSlides: !1,
                      parallax: !1,
                      parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate",
                      },
                      sectionSelector: ".section",
                      slideSelector: ".slide",
                      afterLoad: null,
                      onLeave: null,
                      afterRender: null,
                      afterResize: null,
                      afterReBuild: null,
                      afterSlideLoad: null,
                      onSlideLeave: null,
                      afterResponsive: null,
                      lazyLoading: !0,
                    },
                    f
                  );
                  var m,
                    v,
                    g,
                    y,
                    b = !1,
                    x = navigator.userAgent.match(
                      /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
                    ),
                    w =
                      "ontouchstart" in t ||
                      navigator.msMaxTouchPoints > 0 ||
                      navigator.maxTouchPoints,
                    C = e(this),
                    T = c.height(),
                    S = !1,
                    k = !0,
                    E = !0,
                    A = [],
                    j = { m: { up: !0, down: !0, left: !0, right: !0 } };
                  j.k = e.extend(!0, {}, j.m);
                  var L,
                    I,
                    O,
                    N,
                    D,
                    P,
                    H,
                    M = (function () {
                      var e;
                      e = t.PointerEvent
                        ? { down: "pointerdown", move: "pointermove" }
                        : { down: "MSPointerDown", move: "MSPointerMove" };
                      return e;
                    })(),
                    q = {
                      touchmove: "ontouchmove" in t ? "touchmove" : M.move,
                      touchstart: "ontouchstart" in t ? "touchstart" : M.down,
                    },
                    B = e.extend(!0, {}, f);
                  pt(),
                    e.extend(e.easing, {
                      easeInOutCubic: function (e, t, n, r, o) {
                        return (t /= o / 2) < 1
                          ? (r / 2) * t * t * t + n
                          : (r / 2) * ((t -= 2) * t * t + 2) + n;
                      },
                    }),
                    e(this).length &&
                      ((h.version = "2.9.6"),
                      (h.setAutoScrolling = K),
                      (h.setRecordHistory = G),
                      (h.setScrollingSpeed = Z),
                      (h.setFitToSection = J),
                      (h.setLockAnchors = function (e) {
                        f.lockAnchors = e;
                      }),
                      (h.setMouseWheelScrolling = Q),
                      (h.setAllowScrolling = ee),
                      (h.setKeyboardScrolling = te),
                      (h.moveSectionUp = ne),
                      (h.moveSectionDown = re),
                      (h.silentMoveTo = oe),
                      (h.moveTo = ie),
                      (h.moveSlideRight = ae),
                      (h.moveSlideLeft = se),
                      (h.fitToSection = de),
                      (h.reBuild = le),
                      (h.setResponsive = ce),
                      (h.destroy = function (t) {
                        K(!1, "internal"),
                          ee(!1),
                          te(!1),
                          C.addClass("fp-destroyed"),
                          clearTimeout(N),
                          clearTimeout(O),
                          clearTimeout(I),
                          clearTimeout(D),
                          clearTimeout(P),
                          c
                            .off("scroll", fe)
                            .off("hashchange", Oe)
                            .off("resize", Ue),
                          u
                            .off("keydown", De)
                            .off("keyup", He)
                            .off("click touchstart", "#fp-nav a")
                            .off("mouseenter", "#fp-nav li")
                            .off("mouseleave", "#fp-nav li")
                            .off("click touchstart", ".fp-slidesNav a")
                            .off("mouseover", f.normalScrollElements)
                            .off("mouseout", f.normalScrollElements),
                          e(s).off("click touchstart", ".fp-controlArrow"),
                          clearTimeout(N),
                          clearTimeout(O),
                          t &&
                            (function () {
                              ct(0),
                                C.find(
                                  "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
                                ).each(function () {
                                  Se(e(this), "src");
                                }),
                                C.find("img[data-srcset]").each(function () {
                                  Se(e(this), "srcset");
                                }),
                                e(
                                  "#fp-nav, .fp-slidesNav, .fp-controlArrow"
                                ).remove(),
                                e(s).css({
                                  height: "",
                                  "background-color": "",
                                  padding: "",
                                }),
                                e(".fp-slide").css({ width: "" }),
                                C.css({
                                  height: "",
                                  position: "",
                                  "-ms-touch-action": "",
                                  "touch-action": "",
                                }),
                                d.css({ overflow: "", height: "" }),
                                e("html").removeClass("fp-enabled"),
                                p.removeClass("fp-responsive"),
                                e.each(
                                  p.get(0).className.split(/\s+/),
                                  function (e, t) {
                                    0 === t.indexOf("fp-viewing") &&
                                      p.removeClass(t);
                                  }
                                ),
                                e(s + ", .fp-slide").each(function () {
                                  f.scrollOverflowHandler &&
                                    f.scrollOverflowHandler.remove(e(this)),
                                    e(this).removeClass("fp-table " + i),
                                    e(this).attr(
                                      "style",
                                      e(this).data("fp-styles")
                                    );
                                }),
                                Ye(C),
                                C.find(
                                  ".fp-tableCell, .fp-slidesContainer, .fp-slides"
                                ).each(function () {
                                  e(this).replaceWith(this.childNodes);
                                }),
                                C.css({
                                  "-webkit-transition": "none",
                                  transition: "none",
                                }),
                                d.scrollTop(0);
                              var t = [
                                "fp-section",
                                "fp-slide",
                                "fp-slidesContainer",
                              ];
                              e.each(t, function (t, n) {
                                e("." + n).removeClass(n);
                              });
                            })();
                      }),
                      (h.shared = { afterRenderActions: ue }),
                      (function () {
                        f.css3 &&
                          (f.css3 = (function () {
                            var e,
                              r = n.createElement("p"),
                              i = {
                                webkitTransform: "-webkit-transform",
                                OTransform: "-o-transform",
                                msTransform: "-ms-transform",
                                MozTransform: "-moz-transform",
                                transform: "transform",
                              };
                            for (var a in (n.body.insertBefore(r, null), i))
                              r.style[a] !== o &&
                                ((r.style[a] = "translate3d(1px,1px,1px)"),
                                (e = t
                                  .getComputedStyle(r)
                                  .getPropertyValue(i[a])));
                            return (
                              n.body.removeChild(r),
                              e !== o && e.length > 0 && "none" !== e
                            );
                          })());
                        (f.scrollBar = f.scrollBar || f.hybrid),
                          (function () {
                            var t = C.find(f.sectionSelector);
                            f.anchors.length ||
                              (f.anchors = t
                                .filter("[data-anchor]")
                                .map(function () {
                                  return e(this).data("anchor").toString();
                                })
                                .get());
                            f.navigationTooltips.length ||
                              (f.navigationTooltips = t
                                .filter("[data-tooltip]")
                                .map(function () {
                                  return e(this).data("tooltip").toString();
                                })
                                .get());
                          })(),
                          (function () {
                            C.css({ height: "100%", position: "relative" }),
                              C.addClass("fullpage-wrapper"),
                              e("html").addClass("fp-enabled"),
                              (T = c.height()),
                              C.removeClass("fp-destroyed"),
                              C.find(f.sectionSelector).addClass("fp-section"),
                              void C.find(f.slideSelector).addClass("fp-slide"),
                              e(s).each(function (t) {
                                var n = e(this),
                                  r = n.find(".fp-slide"),
                                  o = r.length;
                                n.data("fp-styles", n.attr("style")),
                                  (function (t, n) {
                                    n || 0 !== e(l).length || t.addClass(i);
                                    (y = e(l)),
                                      t.css("height", T + "px"),
                                      f.paddingTop &&
                                        t.css("padding-top", f.paddingTop);
                                    f.paddingBottom &&
                                      t.css("padding-bottom", f.paddingBottom);
                                    void 0 !== f.sectionsColor[n] &&
                                      t.css(
                                        "background-color",
                                        f.sectionsColor[n]
                                      );
                                    void 0 !== f.anchors[n] &&
                                      t.attr("data-anchor", f.anchors[n]);
                                  })(n, t),
                                  (function (t, n) {
                                    void 0 !== f.anchors[n] &&
                                      t.hasClass(i) &&
                                      Ke(f.anchors[n], n);
                                    f.menu &&
                                      f.css3 &&
                                      e(f.menu).closest(".fullpage-wrapper")
                                        .length &&
                                      e(f.menu).appendTo(p);
                                  })(n, t),
                                  o > 0
                                    ? (function (t, n, r) {
                                        var o = 100 * r,
                                          a = 100 / r;
                                        n.wrapAll(
                                          '<div class="fp-slidesContainer" />'
                                        ),
                                          n
                                            .parent()
                                            .wrap('<div class="fp-slides" />'),
                                          t
                                            .find(".fp-slidesContainer")
                                            .css("width", o + "%"),
                                          r > 1 &&
                                            (f.controlArrows &&
                                              (function (e) {
                                                e
                                                  .find(".fp-slides")
                                                  .after(
                                                    '<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'
                                                  ),
                                                  "#fff" !=
                                                    f.controlArrowColor &&
                                                    (e
                                                      .find(
                                                        ".fp-controlArrow.fp-next"
                                                      )
                                                      .css(
                                                        "border-color",
                                                        "transparent transparent transparent " +
                                                          f.controlArrowColor
                                                      ),
                                                    e
                                                      .find(
                                                        ".fp-controlArrow.fp-prev"
                                                      )
                                                      .css(
                                                        "border-color",
                                                        "transparent " +
                                                          f.controlArrowColor +
                                                          " transparent transparent"
                                                      ));
                                                f.loopHorizontal ||
                                                  e
                                                    .find(
                                                      ".fp-controlArrow.fp-prev"
                                                    )
                                                    .hide();
                                              })(t),
                                            f.slidesNavigation &&
                                              (function (e, t) {
                                                e.append(
                                                  '<div class="fp-slidesNav"><ul></ul></div>'
                                                );
                                                var n = e.find(".fp-slidesNav");
                                                n.addClass(f.slidesNavPosition);
                                                for (var r = 0; r < t; r++)
                                                  n.find("ul").append(
                                                    '<li><a href="#"><span></span></a></li>'
                                                  );
                                                n.css(
                                                  "margin-left",
                                                  "-" + n.width() / 2 + "px"
                                                ),
                                                  n
                                                    .find("li")
                                                    .first()
                                                    .find("a")
                                                    .addClass(i);
                                              })(t, r));
                                        n.each(function (t) {
                                          e(this).css("width", a + "%"),
                                            f.verticalCentered && Ze(e(this));
                                        });
                                        var c = t.find(".fp-slide.active");
                                        c.length &&
                                        (0 !== e(l).index(s) ||
                                          (0 === e(l).index(s) &&
                                            0 !== c.index()))
                                          ? lt(c, "internal")
                                          : n.eq(0).addClass(i);
                                      })(n, r, o)
                                    : f.verticalCentered && Ze(n);
                              }),
                              f.fixedElements &&
                                f.css3 &&
                                e(f.fixedElements).appendTo(p);
                            f.navigation &&
                              (function () {
                                p.append('<div id="fp-nav"><ul></ul></div>');
                                var t = e("#fp-nav");
                                t.addClass(function () {
                                  return f.showActiveTooltip
                                    ? "fp-show-active " + f.navigationPosition
                                    : f.navigationPosition;
                                });
                                for (var n = 0; n < e(s).length; n++) {
                                  var r = "";
                                  f.anchors.length && (r = f.anchors[n]);
                                  var o =
                                      '<li><a href="#' +
                                      r +
                                      '"><span></span></a>',
                                    a = f.navigationTooltips[n];
                                  void 0 !== a &&
                                    "" !== a &&
                                    (o +=
                                      '<div class="fp-tooltip ' +
                                      f.navigationPosition +
                                      '">' +
                                      a +
                                      "</div>"),
                                    (o += "</li>"),
                                    t.find("ul").append(o);
                                }
                                e("#fp-nav").css(
                                  "margin-top",
                                  "-" + e("#fp-nav").height() / 2 + "px"
                                ),
                                  e("#fp-nav")
                                    .find("li")
                                    .eq(e(l).index(s))
                                    .find("a")
                                    .addClass(i);
                              })();
                            void C.find(
                              'iframe[src*="youtube.com/embed/"]'
                            ).each(function () {
                              var t, n, r;
                              (t = e(this)),
                                (n = "enablejsapi=1"),
                                (r = t.attr("src")),
                                t.attr(
                                  "src",
                                  r + (/\?/.test(r) ? "&" : "?") + n
                                );
                            }),
                              f.scrollOverflow
                                ? (L = f.scrollOverflowHandler.init(f))
                                : ue();
                          })(),
                          ee(!0),
                          K(f.autoScrolling, "internal"),
                          Xe(),
                          at(),
                          "complete" === n.readyState && Ie();
                        c.on("load", Ie);
                      })(),
                      c
                        .on("scroll", fe)
                        .on("hashchange", Oe)
                        .blur(Re)
                        .resize(Ue),
                      u
                        .keydown(De)
                        .keyup(He)
                        .on("click touchstart", "#fp-nav a", ze)
                        .on("click touchstart", ".fp-slidesNav a", _e)
                        .on("click", ".fp-tooltip", Pe),
                      e(s).on("click touchstart", ".fp-controlArrow", Be),
                      f.normalScrollElements &&
                        (u.on(
                          "mouseenter touchstart",
                          f.normalScrollElements,
                          function () {
                            ee(!1);
                          }
                        ),
                        u.on(
                          "mouseleave touchend",
                          f.normalScrollElements,
                          function () {
                            ee(!0);
                          }
                        )));
                  var R = !1,
                    z = 0,
                    _ = 0,
                    F = 0,
                    W = 0,
                    $ = 0,
                    U = new Date().getTime(),
                    X = 0,
                    V = 0,
                    Y = T;
                }
                function K(t, n) {
                  t || ct(0), dt("autoScrolling", t, n);
                  var r = e(l);
                  f.autoScrolling && !f.scrollBar
                    ? (d.css({ overflow: "hidden", height: "100%" }),
                      G(B.recordHistory, "internal"),
                      C.css({
                        "-ms-touch-action": "none",
                        "touch-action": "none",
                      }),
                      r.length && ct(r.position().top))
                    : (d.css({ overflow: "visible", height: "initial" }),
                      G(!1, "internal"),
                      C.css({ "-ms-touch-action": "", "touch-action": "" }),
                      r.length && d.scrollTop(r.position().top));
                }
                function G(e, t) {
                  dt("recordHistory", e, t);
                }
                function Z(e, t) {
                  dt("scrollingSpeed", e, t);
                }
                function J(e, t) {
                  dt("fitToSection", e, t);
                }
                function Q(e) {
                  e
                    ? (!(function () {
                        var e,
                          r = "";
                        t.addEventListener
                          ? (e = "addEventListener")
                          : ((e = "attachEvent"), (r = "on"));
                        var i =
                          "onwheel" in n.createElement("div")
                            ? "wheel"
                            : n.onmousewheel !== o
                            ? "mousewheel"
                            : "DOMMouseScroll";
                        "DOMMouseScroll" == i
                          ? n[e](r + "MozMousePixelScroll", be, !1)
                          : n[e](r + i, be, !1);
                      })(),
                      C.on("mousedown", Me).on("mouseup", qe))
                    : (n.addEventListener
                        ? (n.removeEventListener("mousewheel", be, !1),
                          n.removeEventListener("wheel", be, !1),
                          n.removeEventListener("MozMousePixelScroll", be, !1))
                        : n.detachEvent("onmousewheel", be),
                      C.off("mousedown", Me).off("mouseup", qe));
                }
                function ee(t, n) {
                  void 0 !== n
                    ? ((n = n.replace(/ /g, "").split(",")),
                      e.each(n, function (e, n) {
                        ft(t, n, "m");
                      }))
                    : (ft(t, "all", "m"),
                      t
                        ? (Q(!0),
                          (x || w) &&
                            (f.autoScrolling &&
                              p.off(q.touchmove).on(q.touchmove, he),
                            e(".fullpage-wrapper")
                              .off(q.touchstart)
                              .on(q.touchstart, ge)
                              .off(q.touchmove)
                              .on(q.touchmove, me)))
                        : (Q(!1),
                          (x || w) &&
                            (f.autoScrolling && p.off(q.touchmove),
                            e(".fullpage-wrapper")
                              .off(q.touchstart)
                              .off(q.touchmove))));
                }
                function te(t, n) {
                  void 0 !== n
                    ? ((n = n.replace(/ /g, "").split(",")),
                      e.each(n, function (e, n) {
                        ft(t, n, "k");
                      }))
                    : (ft(t, "all", "k"), (f.keyboardScrolling = t));
                }
                function ne() {
                  var t = e(l).prev(s);
                  t.length ||
                    (!f.loopTop && !f.continuousVertical) ||
                    (t = e(s).last()),
                    t.length && Ce(t, null, !0);
                }
                function re() {
                  var t = e(l).next(s);
                  t.length ||
                    (!f.loopBottom && !f.continuousVertical) ||
                    (t = e(s).first()),
                    t.length && Ce(t, null, !1);
                }
                function oe(e, t) {
                  Z(0, "internal"), ie(e, t), Z(B.scrollingSpeed, "internal");
                }
                function ie(e, t) {
                  var n = et(e);
                  void 0 !== t ? tt(e, t) : n.length > 0 && Ce(n);
                }
                function ae(e) {
                  xe("right", e);
                }
                function se(e) {
                  xe("left", e);
                }
                function le(t) {
                  if (!C.hasClass("fp-destroyed")) {
                    (S = !0),
                      (T = c.height()),
                      e(s).each(function () {
                        var t = e(this).find(".fp-slides"),
                          n = e(this).find(".fp-slide");
                        f.verticalCentered &&
                          e(this)
                            .find(".fp-tableCell")
                            .css("height", Je(e(this)) + "px"),
                          e(this).css("height", T + "px"),
                          n.length > 1 && We(t, t.find(".fp-slide.active"));
                      }),
                      f.scrollOverflow && L.createScrollBarForAll();
                    var n = e(l).index(s);
                    n && oe(n + 1),
                      (S = !1),
                      e.isFunction(f.afterResize) && t && f.afterResize.call(C),
                      e.isFunction(f.afterReBuild) &&
                        !t &&
                        f.afterReBuild.call(C);
                  }
                }
                function ce(t) {
                  var n = p.hasClass("fp-responsive");
                  t
                    ? n ||
                      (K(!1, "internal"),
                      J(!1, "internal"),
                      e("#fp-nav").hide(),
                      p.addClass("fp-responsive"),
                      e.isFunction(f.afterResponsive) &&
                        f.afterResponsive.call(C, t))
                    : n &&
                      (K(B.autoScrolling, "internal"),
                      J(B.autoScrolling, "internal"),
                      e("#fp-nav").show(),
                      p.removeClass("fp-responsive"),
                      e.isFunction(f.afterResponsive) &&
                        f.afterResponsive.call(C, t));
                }
                function ue() {
                  var t,
                    n = e(l);
                  n.addClass(a),
                    ke(n),
                    Ee(n),
                    f.scrollOverflow && f.scrollOverflowHandler.afterLoad(),
                    (!(t = et(Ne().section)) ||
                      (t.length && t.index() === y.index())) &&
                      e.isFunction(f.afterLoad) &&
                      f.afterLoad.call(n, n.data("anchor"), n.index(s) + 1),
                    e.isFunction(f.afterRender) && f.afterRender.call(C);
                }
                function fe() {
                  var t;
                  if (!f.autoScrolling || f.scrollBar) {
                    var r = c.scrollTop(),
                      o = (function (e) {
                        var t = e > z ? "down" : "up";
                        return (z = e), (X = e), t;
                      })(r),
                      u = 0,
                      d = r + c.height() / 2,
                      h = p.height() - c.height() === r,
                      v = n.querySelectorAll(s);
                    if (h) u = v.length - 1;
                    else if (r)
                      for (var g = 0; g < v.length; ++g) {
                        v[g].offsetTop <= d && (u = g);
                      }
                    else u = 0;
                    if (
                      ((function (t) {
                        var n = e(l).position().top,
                          r = n + c.height();
                        if ("up" == t) return r >= c.scrollTop() + c.height();
                        return n <= c.scrollTop();
                      })(o) &&
                        (e(l).hasClass(a) ||
                          e(l).addClass(a).siblings().removeClass(a)),
                      !(t = e(v).eq(u)).hasClass(i))
                    ) {
                      R = !0;
                      var y,
                        b,
                        x = e(l),
                        w = x.index(s) + 1,
                        C = Ge(t),
                        S = t.data("anchor"),
                        k = t.index(s) + 1,
                        A = t.find(".fp-slide.active");
                      A.length && ((b = A.data("anchor")), (y = A.index())),
                        E &&
                          (t.addClass(i).siblings().removeClass(i),
                          e.isFunction(f.onLeave) && f.onLeave.call(x, w, k, C),
                          e.isFunction(f.afterLoad) &&
                            f.afterLoad.call(t, S, k),
                          je(x),
                          ke(t),
                          Ee(t),
                          Ke(S, k - 1),
                          f.anchors.length && (m = S),
                          rt(y, b, S, k)),
                        clearTimeout(D),
                        (D = setTimeout(function () {
                          R = !1;
                        }, 100));
                    }
                    f.fitToSection &&
                      (clearTimeout(P),
                      (P = setTimeout(function () {
                        f.fitToSection && e(l).outerHeight() <= T && de();
                      }, f.fitToSectionDelay)));
                  }
                }
                function de() {
                  E && ((S = !0), Ce(e(l)), (S = !1));
                }
                function pe(t) {
                  if (j.m[t]) {
                    var n = "down" === t ? re : ne;
                    if (f.scrollOverflow) {
                      var r = f.scrollOverflowHandler.scrollable(e(l)),
                        o = "down" === t ? "bottom" : "top";
                      if (r.length > 0) {
                        if (!f.scrollOverflowHandler.isScrolled(o, r))
                          return !0;
                        n();
                      } else n();
                    } else n();
                  }
                }
                function he(e) {
                  var t = e.originalEvent;
                  f.autoScrolling && ve(t) && e.preventDefault();
                }
                function me(t) {
                  var n = t.originalEvent,
                    o = e(n.target).closest(s);
                  if (ve(n)) {
                    f.autoScrolling && t.preventDefault();
                    var i = st(n);
                    (W = i.y),
                      ($ = i.x),
                      o.find(".fp-slides").length && r.abs(F - $) > r.abs(_ - W)
                        ? !b &&
                          r.abs(F - $) >
                            (c.outerWidth() / 100) * f.touchSensitivity &&
                          (F > $ ? j.m.right && ae(o) : j.m.left && se(o))
                        : f.autoScrolling &&
                          E &&
                          r.abs(_ - W) >
                            (c.height() / 100) * f.touchSensitivity &&
                          (_ > W ? pe("down") : W > _ && pe("up"));
                  }
                }
                function ve(e) {
                  return void 0 === e.pointerType || "mouse" != e.pointerType;
                }
                function ge(e) {
                  var t = e.originalEvent;
                  if ((f.fitToSection && d.stop(), ve(t))) {
                    var n = st(t);
                    (_ = n.y), (F = n.x);
                  }
                }
                function ye(e, t) {
                  for (
                    var n = 0, o = e.slice(r.max(e.length - t, 1)), i = 0;
                    i < o.length;
                    i++
                  )
                    n += o[i];
                  return r.ceil(n / t);
                }
                function be(n) {
                  var o = new Date().getTime(),
                    i = e(".fp-completely").hasClass("fp-normal-scroll");
                  if (f.autoScrolling && !g && !i) {
                    var a =
                        (n = n || t.event).wheelDelta || -n.deltaY || -n.detail,
                      s = r.max(-1, r.min(1, a)),
                      l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                      c =
                        r.abs(n.wheelDeltaX) < r.abs(n.wheelDelta) ||
                        r.abs(n.deltaX) < r.abs(n.deltaY) ||
                        !l;
                    A.length > 149 && A.shift(),
                      A.push(r.abs(a)),
                      f.scrollBar || (n.returnValue = !1);
                    var u = o - U;
                    if (((U = o), u > 200 && (A = []), E))
                      ye(A, 10) >= ye(A, 70) && c && pe(s < 0 ? "down" : "up");
                    return !1;
                  }
                  f.fitToSection && d.stop();
                }
                function xe(t, n) {
                  var r = (void 0 === n ? e(l) : n).find(".fp-slides"),
                    o = r.find(".fp-slide").length;
                  if (!(!r.length || b || o < 2)) {
                    var i = r.find(".fp-slide.active"),
                      a = null;
                    if (
                      !(a =
                        "left" === t
                          ? i.prev(".fp-slide")
                          : i.next(".fp-slide")).length
                    ) {
                      if (!f.loopHorizontal) return;
                      a =
                        "left" === t
                          ? i.siblings(":last")
                          : i.siblings(":first");
                    }
                    (b = !0), We(r, a, t);
                  }
                }
                function we() {
                  e(".fp-slide.active").each(function () {
                    lt(e(this), "internal");
                  });
                }
                function Ce(t, n, o) {
                  if (void 0 !== t) {
                    var a,
                      u,
                      d = (function (e) {
                        var t = e.position(),
                          n = t.top,
                          r = t.top > X,
                          o = n - T + e.outerHeight(),
                          i = f.bigSectionsDestination;
                        return (
                          e.outerHeight() > T
                            ? ((r || i) && "bottom" !== i) || (n = o)
                            : (r || (S && e.is(":last-child"))) && (n = o),
                          (X = n),
                          n
                        );
                      })(t),
                      p = {
                        element: t,
                        callback: n,
                        isMovementUp: o,
                        dtop: d,
                        yMovement: Ge(t),
                        anchorLink: t.data("anchor"),
                        sectionIndex: t.index(s),
                        activeSlide: t.find(".fp-slide.active"),
                        activeSection: e(l),
                        leavingSection: e(l).index(s) + 1,
                        localIsResizing: S,
                      };
                    if (
                      !(
                        (p.activeSection.is(t) && !S) ||
                        (f.scrollBar &&
                          c.scrollTop() === p.dtop &&
                          !t.hasClass("fp-auto-height"))
                      )
                    ) {
                      if (
                        (p.activeSlide.length &&
                          ((a = p.activeSlide.data("anchor")),
                          (u = p.activeSlide.index())),
                        e.isFunction(f.onLeave) && !p.localIsResizing)
                      ) {
                        var h = p.yMovement;
                        if (
                          (void 0 !== o && (h = o ? "up" : "down"),
                          !1 ===
                            f.onLeave.call(
                              p.activeSection,
                              p.leavingSection,
                              p.sectionIndex + 1,
                              h
                            ))
                        )
                          return;
                      }
                      f.autoScrolling &&
                        f.continuousVertical &&
                        void 0 !== p.isMovementUp &&
                        ((!p.isMovementUp && "up" == p.yMovement) ||
                          (p.isMovementUp && "down" == p.yMovement)) &&
                        (p = (function (t) {
                          t.isMovementUp
                            ? e(l).before(t.activeSection.nextAll(s))
                            : e(l).after(
                                t.activeSection.prevAll(s).get().reverse()
                              );
                          return (
                            ct(e(l).position().top),
                            we(),
                            (t.wrapAroundElements = t.activeSection),
                            (t.dtop = t.element.position().top),
                            (t.yMovement = Ge(t.element)),
                            (t.leavingSection = t.activeSection.index(s) + 1),
                            (t.sectionIndex = t.element.index(s)),
                            t
                          );
                        })(p)),
                        p.localIsResizing || je(p.activeSection),
                        f.scrollOverflow &&
                          f.scrollOverflowHandler.beforeLeave(),
                        t.addClass(i).siblings().removeClass(i),
                        ke(t),
                        f.scrollOverflow && f.scrollOverflowHandler.onLeave(),
                        (E = !1),
                        rt(u, a, p.anchorLink, p.sectionIndex),
                        (function (t) {
                          if (f.css3 && f.autoScrolling && !f.scrollBar) {
                            Qe(
                              "translate3d(0px, -" +
                                r.round(t.dtop) +
                                "px, 0px)",
                              !0
                            ),
                              f.scrollingSpeed
                                ? (clearTimeout(O),
                                  (O = setTimeout(function () {
                                    Te(t);
                                  }, f.scrollingSpeed)))
                                : Te(t);
                          } else {
                            var n = (function (e) {
                              var t = {};
                              f.autoScrolling && !f.scrollBar
                                ? ((t.options = { top: -e.dtop }),
                                  (t.element = ".fullpage-wrapper"))
                                : ((t.options = { scrollTop: e.dtop }),
                                  (t.element = "html, body"));
                              return t;
                            })(t);
                            e(n.element)
                              .animate(n.options, f.scrollingSpeed, f.easing)
                              .promise()
                              .done(function () {
                                f.scrollBar
                                  ? setTimeout(function () {
                                      Te(t);
                                    }, 30)
                                  : Te(t);
                              });
                          }
                        })(p),
                        (m = p.anchorLink),
                        Ke(p.anchorLink, p.sectionIndex);
                    }
                  }
                }
                function Te(t) {
                  !(function (t) {
                    t.wrapAroundElements &&
                      t.wrapAroundElements.length &&
                      (t.isMovementUp
                        ? e(".fp-section:first").before(t.wrapAroundElements)
                        : e(".fp-section:last").after(t.wrapAroundElements),
                      ct(e(l).position().top),
                      we());
                  })(t),
                    e.isFunction(f.afterLoad) &&
                      !t.localIsResizing &&
                      f.afterLoad.call(
                        t.element,
                        t.anchorLink,
                        t.sectionIndex + 1
                      ),
                    f.scrollOverflow && f.scrollOverflowHandler.afterLoad(),
                    t.localIsResizing || Ee(t.element),
                    t.element.addClass(a).siblings().removeClass(a),
                    (E = !0),
                    e.isFunction(t.callback) && t.callback.call(this);
                }
                function Se(e, t) {
                  e.attr(t, e.data(t)).removeAttr("data-" + t);
                }
                function ke(t) {
                  var n;
                  f.lazyLoading &&
                    Le(t)
                      .find(
                        "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]"
                      )
                      .each(function () {
                        if (
                          ((n = e(this)),
                          e.each(["src", "srcset"], function (e, t) {
                            var r = n.attr("data-" + t);
                            void 0 !== r && r && Se(n, t);
                          }),
                          n.is("source"))
                        ) {
                          var t = n.closest("video").length ? "video" : "audio";
                          n.closest(t).get(0).load();
                        }
                      });
                }
                function Ee(t) {
                  var n = Le(t);
                  n.find("video, audio").each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-autoplay") &&
                      "function" == typeof t.play &&
                      t.play();
                  }),
                    n
                      .find('iframe[src*="youtube.com/embed/"]')
                      .each(function () {
                        var t = e(this).get(0);
                        t.hasAttribute("data-autoplay") && Ae(t),
                          (t.onload = function () {
                            t.hasAttribute("data-autoplay") && Ae(t);
                          });
                      });
                }
                function Ae(e) {
                  e.contentWindow.postMessage(
                    '{"event":"command","func":"playVideo","args":""}',
                    "*"
                  );
                }
                function je(t) {
                  var n = Le(t);
                  n.find("video, audio").each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-keepplaying") ||
                      "function" != typeof t.pause ||
                      t.pause();
                  }),
                    n
                      .find('iframe[src*="youtube.com/embed/"]')
                      .each(function () {
                        var t = e(this).get(0);
                        /youtube\.com\/embed\//.test(e(this).attr("src")) &&
                          !t.hasAttribute("data-keepplaying") &&
                          e(this)
                            .get(0)
                            .contentWindow.postMessage(
                              '{"event":"command","func":"pauseVideo","args":""}',
                              "*"
                            );
                      });
                }
                function Le(t) {
                  var n = t.find(".fp-slide.active");
                  return n.length && (t = e(n)), t;
                }
                function Ie() {
                  var e = Ne(),
                    t = e.section,
                    n = e.slide;
                  t && (f.animateAnchor ? tt(t, n) : oe(t, n));
                }
                function Oe() {
                  if (!R && !f.lockAnchors) {
                    var e = Ne(),
                      t = e.section,
                      n = e.slide,
                      r = void 0 === m,
                      o = void 0 === m && void 0 === n && !b;
                    t &&
                      t.length &&
                      ((t && t !== m && !r) || o || (!b && v != n)) &&
                      tt(t, n);
                  }
                }
                function Ne() {
                  var e,
                    n,
                    r = t.location.hash;
                  if (r.length) {
                    var o = r.replace("#", "").split("/"),
                      i = r.indexOf("#/") > -1;
                    e = i ? "/" + o[1] : decodeURIComponent(o[0]);
                    var a = i ? o[2] : o[1];
                    a && a.length && (n = decodeURIComponent(a));
                  }
                  return { section: e, slide: n };
                }
                function De(t) {
                  clearTimeout(H);
                  var n = e(":focus"),
                    r = t.which;
                  if (9 === r)
                    !(function (t) {
                      var n = t.shiftKey,
                        r = e(":focus"),
                        o = e(l),
                        i = o.find(".fp-slide.active"),
                        a = (i.length ? i : o)
                          .find(
                            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
                          )
                          .not('[tabindex="-1"]');
                      function s(e) {
                        return e.preventDefault(), a.first().focus();
                      }
                      r.length
                        ? r.closest(l, ".fp-slide.active").length || (r = s(t))
                        : s(t);
                      ((!n && r.is(a.last())) || (n && r.is(a.first()))) &&
                        t.preventDefault();
                    })(t);
                  else if (
                    !n.is("textarea") &&
                    !n.is("input") &&
                    !n.is("select") &&
                    "true" !== n.attr("contentEditable") &&
                    "" !== n.attr("contentEditable") &&
                    f.keyboardScrolling &&
                    f.autoScrolling
                  ) {
                    e.inArray(r, [40, 38, 32, 33, 34]) > -1 &&
                      t.preventDefault(),
                      (g = t.ctrlKey),
                      (H = setTimeout(function () {
                        !(function (t) {
                          var n = t.shiftKey;
                          if (!E && [37, 39].indexOf(t.which) < 0) return;
                          switch (t.which) {
                            case 38:
                            case 33:
                              j.k.up && ne();
                              break;
                            case 32:
                              if (n && j.k.up) {
                                ne();
                                break;
                              }
                            case 40:
                            case 34:
                              j.k.down && re();
                              break;
                            case 36:
                              j.k.up && ie(1);
                              break;
                            case 35:
                              j.k.down && ie(e(s).length);
                              break;
                            case 37:
                              j.k.left && se();
                              break;
                            case 39:
                              j.k.right && ae();
                              break;
                            default:
                          }
                        })(t);
                      }, 150));
                  }
                }
                function Pe() {
                  e(this).prev().trigger("click");
                }
                function He(e) {
                  k && (g = e.ctrlKey);
                }
                function Me(e) {
                  2 == e.which && ((V = e.pageY), C.on("mousemove", Fe));
                }
                function qe(e) {
                  2 == e.which && C.off("mousemove");
                }
                function Be() {
                  var t = e(this).closest(s);
                  e(this).hasClass("fp-prev")
                    ? j.m.left && se(t)
                    : j.m.right && ae(t);
                }
                function Re() {
                  (k = !1), (g = !1);
                }
                function ze(t) {
                  t.preventDefault();
                  var n = e(this).parent().index();
                  Ce(e(s).eq(n));
                }
                function _e(t) {
                  t.preventDefault();
                  var n = e(this).closest(s).find(".fp-slides"),
                    r = n.find(".fp-slide").eq(e(this).closest("li").index());
                  We(n, r);
                }
                function Fe(e) {
                  E &&
                    (e.pageY < V && j.m.up
                      ? ne()
                      : e.pageY > V && j.m.down && re()),
                    (V = e.pageY);
                }
                function We(t, n, o) {
                  var a = t.closest(s),
                    l = {
                      slides: t,
                      destiny: n,
                      direction: o,
                      destinyPos: n.position(),
                      slideIndex: n.index(),
                      section: a,
                      sectionIndex: a.index(s),
                      anchorLink: a.data("anchor"),
                      slidesNav: a.find(".fp-slidesNav"),
                      slideAnchor: it(n),
                      prevSlide: a.find(".fp-slide.active"),
                      prevSlideIndex: a.find(".fp-slide.active").index(),
                      localIsResizing: S,
                    };
                  (l.xMovement = (function (e, t) {
                    if (e == t) return "none";
                    if (e > t) return "left";
                    return "right";
                  })(l.prevSlideIndex, l.slideIndex)),
                    l.localIsResizing || (E = !1),
                    f.onSlideLeave &&
                    !l.localIsResizing &&
                    "none" !== l.xMovement &&
                    e.isFunction(f.onSlideLeave) &&
                    !1 ===
                      f.onSlideLeave.call(
                        l.prevSlide,
                        l.anchorLink,
                        l.sectionIndex + 1,
                        l.prevSlideIndex,
                        l.direction,
                        l.slideIndex
                      )
                      ? (b = !1)
                      : (n.addClass(i).siblings().removeClass(i),
                        l.localIsResizing || (je(l.prevSlide), ke(n)),
                        !f.loopHorizontal &&
                          f.controlArrows &&
                          (a
                            .find(".fp-controlArrow.fp-prev")
                            .toggle(0 !== l.slideIndex),
                          a
                            .find(".fp-controlArrow.fp-next")
                            .toggle(!n.is(":last-child"))),
                        a.hasClass(i) &&
                          !l.localIsResizing &&
                          rt(
                            l.slideIndex,
                            l.slideAnchor,
                            l.anchorLink,
                            l.sectionIndex
                          ),
                        (function (e, t, n) {
                          var o = t.destinyPos;
                          if (f.css3) {
                            var i =
                              "translate3d(-" +
                              r.round(o.left) +
                              "px, 0px, 0px)";
                            Ve(e.find(".fp-slidesContainer")).css(ut(i)),
                              (N = setTimeout(
                                function () {
                                  n && $e(t);
                                },
                                f.scrollingSpeed,
                                f.easing
                              ));
                          } else
                            e.animate(
                              { scrollLeft: r.round(o.left) },
                              f.scrollingSpeed,
                              f.easing,
                              function () {
                                n && $e(t);
                              }
                            );
                        })(t, l, !0));
                }
                function $e(t) {
                  var n, r;
                  (n = t.slidesNav),
                    (r = t.slideIndex),
                    n.find(".active").removeClass(i),
                    n.find("li").eq(r).find("a").addClass(i),
                    t.localIsResizing ||
                      (e.isFunction(f.afterSlideLoad) &&
                        f.afterSlideLoad.call(
                          t.destiny,
                          t.anchorLink,
                          t.sectionIndex + 1,
                          t.slideAnchor,
                          t.slideIndex
                        ),
                      (E = !0),
                      Ee(t.destiny)),
                    (b = !1);
                }
                function Ue() {
                  if ((Xe(), x)) {
                    var t = e(n.activeElement);
                    if (
                      !t.is("textarea") &&
                      !t.is("input") &&
                      !t.is("select")
                    ) {
                      var o = c.height();
                      r.abs(o - Y) > (20 * r.max(Y, o)) / 100 &&
                        (le(!0), (Y = o));
                    }
                  } else
                    clearTimeout(I),
                      (I = setTimeout(function () {
                        le(!0);
                      }, 350));
                }
                function Xe() {
                  var e = f.responsive || f.responsiveWidth,
                    t = f.responsiveHeight,
                    n = e && c.outerWidth() < e,
                    r = t && c.height() < t;
                  e && t ? ce(n || r) : e ? ce(n) : t && ce(r);
                }
                function Ve(e) {
                  var t = "all " + f.scrollingSpeed + "ms " + f.easingcss3;
                  return (
                    e.removeClass("fp-notransition"),
                    e.css({ "-webkit-transition": t, transition: t })
                  );
                }
                function Ye(e) {
                  return e.addClass("fp-notransition");
                }
                function Ke(t, n) {
                  var r;
                  (r = t),
                    f.menu &&
                      (e(f.menu).find(".active").removeClass(i),
                      e(f.menu)
                        .find('[data-menuanchor="' + r + '"]')
                        .addClass(i)),
                    (function (t, n) {
                      f.navigation &&
                        (e("#fp-nav").find(".active").removeClass(i),
                        t
                          ? e("#fp-nav")
                              .find('a[href="#' + t + '"]')
                              .addClass(i)
                          : e("#fp-nav")
                              .find("li")
                              .eq(n)
                              .find("a")
                              .addClass(i));
                    })(t, n);
                }
                function Ge(t) {
                  var n = e(l).index(s),
                    r = t.index(s);
                  return n == r ? "none" : n > r ? "up" : "down";
                }
                function Ze(t) {
                  if (!t.hasClass("fp-table")) {
                    var n = e('<div class="fp-tableCell" />').height(Je(t));
                    t.addClass("fp-table").wrapInner(n);
                  }
                }
                function Je(e) {
                  var t = T;
                  if (f.paddingTop || f.paddingBottom) {
                    var n = e;
                    n.hasClass("fp-section") || (n = e.closest(s));
                    var r =
                      parseInt(n.css("padding-top")) +
                      parseInt(n.css("padding-bottom"));
                    t = T - r;
                  }
                  return t;
                }
                function Qe(e, t) {
                  t ? Ve(C) : Ye(C),
                    C.css(ut(e)),
                    setTimeout(function () {
                      C.removeClass("fp-notransition");
                    }, 10);
                }
                function et(t) {
                  var n = C.find(s + '[data-anchor="' + t + '"]');
                  if (!n.length) {
                    var r = void 0 !== t ? t - 1 : 0;
                    n = e(s).eq(r);
                  }
                  return n;
                }
                function tt(e, t) {
                  var n = et(e);
                  if (n.length) {
                    var r = (function (e, t) {
                      var n = t.find('.fp-slide[data-anchor="' + e + '"]');
                      return (
                        n.length ||
                          ((e = void 0 !== e ? e : 0),
                          (n = t.find(".fp-slide").eq(e))),
                        n
                      );
                    })(t, n);
                    e === m || n.hasClass(i)
                      ? nt(r)
                      : Ce(n, function () {
                          nt(r);
                        });
                  }
                }
                function nt(e) {
                  e.length && We(e.closest(".fp-slides"), e);
                }
                function rt(e, t, n, r) {
                  var o = "";
                  f.anchors.length &&
                    !f.lockAnchors &&
                    (e
                      ? (void 0 !== n && (o = n),
                        void 0 === t && (t = e),
                        (v = t),
                        ot(o + "/" + t))
                      : void 0 !== e
                      ? ((v = t), ot(n))
                      : ot(n)),
                    at();
                }
                function ot(e) {
                  if (f.recordHistory) location.hash = e;
                  else if (x || w) t.history.replaceState(o, o, "#" + e);
                  else {
                    var n = t.location.href.split("#")[0];
                    t.location.replace(n + "#" + e);
                  }
                }
                function it(e) {
                  var t = e.data("anchor"),
                    n = e.index();
                  return void 0 === t && (t = n), t;
                }
                function at() {
                  var t = e(l),
                    n = t.find(".fp-slide.active"),
                    r = it(t),
                    o = it(n),
                    i = String(r);
                  n.length && (i = i + "-" + o),
                    (i = i.replace("/", "-").replace("#", ""));
                  var a = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
                  (p[0].className = p[0].className.replace(a, "")),
                    p.addClass("fp-viewing-" + i);
                }
                function st(e) {
                  var t = [];
                  return (
                    (t.y =
                      void 0 !== e.pageY && (e.pageY || e.pageX)
                        ? e.pageY
                        : e.touches[0].pageY),
                    (t.x =
                      void 0 !== e.pageX && (e.pageY || e.pageX)
                        ? e.pageX
                        : e.touches[0].pageX),
                    w &&
                      ve(e) &&
                      (f.scrollBar || !f.autoScrolling) &&
                      ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                    t
                  );
                }
                function lt(e, t) {
                  Z(0, "internal"),
                    void 0 !== t && (S = !0),
                    We(e.closest(".fp-slides"), e),
                    void 0 !== t && (S = !1),
                    Z(B.scrollingSpeed, "internal");
                }
                function ct(e) {
                  var t = r.round(e);
                  f.css3 && f.autoScrolling && !f.scrollBar
                    ? Qe("translate3d(0px, -" + t + "px, 0px)", !1)
                    : f.autoScrolling && !f.scrollBar
                    ? C.css("top", -t)
                    : d.scrollTop(t);
                }
                function ut(e) {
                  return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e,
                  };
                }
                function ft(t, n, r) {
                  "all" !== n
                    ? (j[r][n] = t)
                    : e.each(Object.keys(j[r]), function (e, n) {
                        j[r][n] = t;
                      });
                }
                function dt(e, t, n) {
                  (f[e] = t), "internal" !== n && (B[e] = t);
                }
                function pt() {
                  e("html").hasClass("fp-enabled")
                    ? ht(
                        "error",
                        "Fullpage.js can only be initialized once and you are doing it multiple times!"
                      )
                    : (f.continuousVertical &&
                        (f.loopTop || f.loopBottom) &&
                        ((f.continuousVertical = !1),
                        ht(
                          "warn",
                          "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                        )),
                      f.scrollBar &&
                        f.scrollOverflow &&
                        ht(
                          "warn",
                          "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
                        ),
                      !f.continuousVertical ||
                        (!f.scrollBar && f.autoScrolling) ||
                        ((f.continuousVertical = !1),
                        ht(
                          "warn",
                          "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                        )),
                      f.scrollOverflow &&
                        !f.scrollOverflowHandler &&
                        ((f.scrollOverflow = !1),
                        ht(
                          "error",
                          "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
                        )),
                      e.each(
                        [
                          "fadingEffect",
                          "continuousHorizontal",
                          "scrollHorizontally",
                          "interlockedSlides",
                          "resetSliders",
                          "responsiveSlides",
                          "offsetSections",
                          "dragAndMove",
                          "scrollOverflowReset",
                          "parallax",
                        ],
                        function (e, t) {
                          f[t] &&
                            ht(
                              "warn",
                              "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " +
                                t
                            );
                        }
                      ),
                      e.each(f.anchors, function (t, n) {
                        var r = u.find("[name]").filter(function () {
                            return (
                              e(this).attr("name") &&
                              e(this).attr("name").toLowerCase() ==
                                n.toLowerCase()
                            );
                          }),
                          o = u.find("[id]").filter(function () {
                            return (
                              e(this).attr("id") &&
                              e(this).attr("id").toLowerCase() ==
                                n.toLowerCase()
                            );
                          });
                        (o.length || r.length) &&
                          (ht(
                            "error",
                            "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                          ),
                          o.length &&
                            ht(
                              "error",
                              '"' +
                                n +
                                '" is is being used by another element `id` property'
                            ),
                          r.length &&
                            ht(
                              "error",
                              '"' +
                                n +
                                '" is is being used by another element `name` property'
                            ));
                      }));
                }
                function ht(e, t) {
                  console && console[e] && console[e]("fullPage: " + t);
                }
              };
            })(e, i, i.document, i.Math);
          }.apply(t, r)) || (e.exports = o);
    })("undefined" != typeof window ? window : this);
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var t = n(0),
        r = n.n(t);
      n(10);
      r()(document).ready(function () {
        var t = {
          video: function () {
            e.magnificPopup.open({
              items: { src: ".js-video-popup" },
              closeOnBgClick: !1,
              closeOnContentClick: !1,
              showCloseBtn: !1,
              type: "inline",
            });
          },
        };
        (window.popups = t),
          r()(".js-close-mfp").click(function () {
            r.a.magnificPopup.close();
          });
      });
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (r) {
      var o, i, a;
      /*! Magnific Popup - v1.1.0 - 2016-02-20
       * http://dimsemenov.com/plugins/magnific-popup/
       * Copyright (c) 2016 Dmitry Semenov; */ (i = [n(0)]),
        void 0 ===
          (a =
            "function" ==
            typeof (o = function (e) {
              var t,
                n,
                o,
                i,
                a,
                s,
                l = function () {},
                c = !!r,
                u = e(window),
                f = function (e, n) {
                  t.ev.on("mfp" + e + ".mfp", n);
                },
                d = function (t, n, r, o) {
                  var i = document.createElement("div");
                  return (
                    (i.className = "mfp-" + t),
                    r && (i.innerHTML = r),
                    o
                      ? n && n.appendChild(i)
                      : ((i = e(i)), n && i.appendTo(n)),
                    i
                  );
                },
                p = function (n, r) {
                  t.ev.triggerHandler("mfp" + n, r),
                    t.st.callbacks &&
                      ((n = n.charAt(0).toLowerCase() + n.slice(1)),
                      t.st.callbacks[n] &&
                        t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]));
                },
                h = function (n) {
                  return (
                    (n === s && t.currTemplate.closeBtn) ||
                      ((t.currTemplate.closeBtn = e(
                        t.st.closeMarkup.replace("%title%", t.st.tClose)
                      )),
                      (s = n)),
                    t.currTemplate.closeBtn
                  );
                },
                m = function () {
                  e.magnificPopup.instance ||
                    ((t = new l()).init(), (e.magnificPopup.instance = t));
                };
              (l.prototype = {
                constructor: l,
                init: function () {
                  var n = navigator.appVersion;
                  (t.isLowIE = t.isIE8 =
                    document.all && !document.addEventListener),
                    (t.isAndroid = /android/gi.test(n)),
                    (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
                    (t.supportsTransition = (function () {
                      var e = document.createElement("p").style,
                        t = ["ms", "O", "Moz", "Webkit"];
                      if (void 0 !== e.transition) return !0;
                      for (; t.length; )
                        if (t.pop() + "Transition" in e) return !0;
                      return !1;
                    })()),
                    (t.probablyMobile =
                      t.isAndroid ||
                      t.isIOS ||
                      /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                        navigator.userAgent
                      )),
                    (o = e(document)),
                    (t.popupsCache = {});
                },
                open: function (n) {
                  var r;
                  if (!1 === n.isObj) {
                    (t.items = n.items.toArray()), (t.index = 0);
                    var i,
                      s = n.items;
                    for (r = 0; r < s.length; r++)
                      if (((i = s[r]).parsed && (i = i.el[0]), i === n.el[0])) {
                        t.index = r;
                        break;
                      }
                  } else
                    (t.items = e.isArray(n.items) ? n.items : [n.items]),
                      (t.index = n.index || 0);
                  if (!t.isOpen) {
                    (t.types = []),
                      (a = ""),
                      n.mainEl && n.mainEl.length
                        ? (t.ev = n.mainEl.eq(0))
                        : (t.ev = o),
                      n.key
                        ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                          (t.currTemplate = t.popupsCache[n.key]))
                        : (t.currTemplate = {}),
                      (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
                      (t.fixedContentPos =
                        "auto" === t.st.fixedContentPos
                          ? !t.probablyMobile
                          : t.st.fixedContentPos),
                      t.st.modal &&
                        ((t.st.closeOnContentClick = !1),
                        (t.st.closeOnBgClick = !1),
                        (t.st.showCloseBtn = !1),
                        (t.st.enableEscapeKey = !1)),
                      t.bgOverlay ||
                        ((t.bgOverlay = d("bg").on("click.mfp", function () {
                          t.close();
                        })),
                        (t.wrap = d("wrap")
                          .attr("tabindex", -1)
                          .on("click.mfp", function (e) {
                            t._checkIfClose(e.target) && t.close();
                          })),
                        (t.container = d("container", t.wrap))),
                      (t.contentContainer = d("content")),
                      t.st.preloader &&
                        (t.preloader = d(
                          "preloader",
                          t.container,
                          t.st.tLoading
                        ));
                    var l = e.magnificPopup.modules;
                    for (r = 0; r < l.length; r++) {
                      var c = l[r];
                      (c = c.charAt(0).toUpperCase() + c.slice(1)),
                        t["init" + c].call(t);
                    }
                    p("BeforeOpen"),
                      t.st.showCloseBtn &&
                        (t.st.closeBtnInside
                          ? (f("MarkupParse", function (e, t, n, r) {
                              n.close_replaceWith = h(r.type);
                            }),
                            (a += " mfp-close-btn-in"))
                          : t.wrap.append(h())),
                      t.st.alignTop && (a += " mfp-align-top"),
                      t.fixedContentPos
                        ? t.wrap.css({
                            overflow: t.st.overflowY,
                            overflowX: "hidden",
                            overflowY: t.st.overflowY,
                          })
                        : t.wrap.css({
                            top: u.scrollTop(),
                            position: "absolute",
                          }),
                      (!1 === t.st.fixedBgPos ||
                        ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
                        t.bgOverlay.css({
                          height: o.height(),
                          position: "absolute",
                        }),
                      t.st.enableEscapeKey &&
                        o.on("keyup.mfp", function (e) {
                          27 === e.keyCode && t.close();
                        }),
                      u.on("resize.mfp", function () {
                        t.updateSize();
                      }),
                      t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
                      a && t.wrap.addClass(a);
                    var m = (t.wH = u.height()),
                      v = {};
                    if (t.fixedContentPos && t._hasScrollBar(m)) {
                      var g = t._getScrollbarSize();
                      g && (v.marginRight = g);
                    }
                    t.fixedContentPos &&
                      (t.isIE7
                        ? e("body, html").css("overflow", "hidden")
                        : (v.overflow = "hidden"));
                    var y = t.st.mainClass;
                    return (
                      t.isIE7 && (y += " mfp-ie7"),
                      y && t._addClassToMFP(y),
                      t.updateItemHTML(),
                      p("BuildControls"),
                      e("html").css(v),
                      t.bgOverlay
                        .add(t.wrap)
                        .prependTo(t.st.prependTo || e(document.body)),
                      (t._lastFocusedEl = document.activeElement),
                      setTimeout(function () {
                        t.content
                          ? (t._addClassToMFP("mfp-ready"), t._setFocus())
                          : t.bgOverlay.addClass("mfp-ready"),
                          o.on("focusin.mfp", t._onFocusIn);
                      }, 16),
                      (t.isOpen = !0),
                      t.updateSize(m),
                      p("Open"),
                      n
                    );
                  }
                  t.updateItemHTML();
                },
                close: function () {
                  t.isOpen &&
                    (p("BeforeClose"),
                    (t.isOpen = !1),
                    t.st.removalDelay && !t.isLowIE && t.supportsTransition
                      ? (t._addClassToMFP("mfp-removing"),
                        setTimeout(function () {
                          t._close();
                        }, t.st.removalDelay))
                      : t._close());
                },
                _close: function () {
                  p("Close");
                  var n = "mfp-removing mfp-ready ";
                  if (
                    (t.bgOverlay.detach(),
                    t.wrap.detach(),
                    t.container.empty(),
                    t.st.mainClass && (n += t.st.mainClass + " "),
                    t._removeClassFromMFP(n),
                    t.fixedContentPos)
                  ) {
                    var r = { marginRight: "" };
                    t.isIE7
                      ? e("body, html").css("overflow", "")
                      : (r.overflow = ""),
                      e("html").css(r);
                  }
                  o.off("keyup.mfp focusin.mfp"),
                    t.ev.off(".mfp"),
                    t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    t.bgOverlay.attr("class", "mfp-bg"),
                    t.container.attr("class", "mfp-container"),
                    !t.st.showCloseBtn ||
                      (t.st.closeBtnInside &&
                        !0 !== t.currTemplate[t.currItem.type]) ||
                      (t.currTemplate.closeBtn &&
                        t.currTemplate.closeBtn.detach()),
                    t.st.autoFocusLast &&
                      t._lastFocusedEl &&
                      e(t._lastFocusedEl).focus(),
                    (t.currItem = null),
                    (t.content = null),
                    (t.currTemplate = null),
                    (t.prevHeight = 0),
                    p("AfterClose");
                },
                updateSize: function (e) {
                  if (t.isIOS) {
                    var n =
                        document.documentElement.clientWidth /
                        window.innerWidth,
                      r = window.innerHeight * n;
                    t.wrap.css("height", r), (t.wH = r);
                  } else t.wH = e || u.height();
                  t.fixedContentPos || t.wrap.css("height", t.wH), p("Resize");
                },
                updateItemHTML: function () {
                  var n = t.items[t.index];
                  t.contentContainer.detach(),
                    t.content && t.content.detach(),
                    n.parsed || (n = t.parseEl(t.index));
                  var r = n.type;
                  if (
                    (p("BeforeChange", [t.currItem ? t.currItem.type : "", r]),
                    (t.currItem = n),
                    !t.currTemplate[r])
                  ) {
                    var o = !!t.st[r] && t.st[r].markup;
                    p("FirstMarkupParse", o), (t.currTemplate[r] = !o || e(o));
                  }
                  i &&
                    i !== n.type &&
                    t.container.removeClass("mfp-" + i + "-holder");
                  var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](
                    n,
                    t.currTemplate[r]
                  );
                  t.appendContent(a, r),
                    (n.preloaded = !0),
                    p("Change", n),
                    (i = n.type),
                    t.container.prepend(t.contentContainer),
                    p("AfterChange");
                },
                appendContent: function (e, n) {
                  (t.content = e),
                    e
                      ? t.st.showCloseBtn &&
                        t.st.closeBtnInside &&
                        !0 === t.currTemplate[n]
                        ? t.content.find(".mfp-close").length ||
                          t.content.append(h())
                        : (t.content = e)
                      : (t.content = ""),
                    p("BeforeAppend"),
                    t.container.addClass("mfp-" + n + "-holder"),
                    t.contentContainer.append(t.content);
                },
                parseEl: function (n) {
                  var r,
                    o = t.items[n];
                  if (
                    (o.tagName
                      ? (o = { el: e(o) })
                      : ((r = o.type), (o = { data: o, src: o.src })),
                    o.el)
                  ) {
                    for (var i = t.types, a = 0; a < i.length; a++)
                      if (o.el.hasClass("mfp-" + i[a])) {
                        r = i[a];
                        break;
                      }
                    (o.src = o.el.attr("data-mfp-src")),
                      o.src || (o.src = o.el.attr("href"));
                  }
                  return (
                    (o.type = r || t.st.type || "inline"),
                    (o.index = n),
                    (o.parsed = !0),
                    (t.items[n] = o),
                    p("ElementParse", o),
                    t.items[n]
                  );
                },
                addGroup: function (e, n) {
                  var r = function (r) {
                    (r.mfpEl = this), t._openClick(r, e, n);
                  };
                  n || (n = {});
                  var o = "click.magnificPopup";
                  (n.mainEl = e),
                    n.items
                      ? ((n.isObj = !0), e.off(o).on(o, r))
                      : ((n.isObj = !1),
                        n.delegate
                          ? e.off(o).on(o, n.delegate, r)
                          : ((n.items = e), e.off(o).on(o, r)));
                },
                _openClick: function (n, r, o) {
                  if (
                    (void 0 !== o.midClick
                      ? o.midClick
                      : e.magnificPopup.defaults.midClick) ||
                    !(
                      2 === n.which ||
                      n.ctrlKey ||
                      n.metaKey ||
                      n.altKey ||
                      n.shiftKey
                    )
                  ) {
                    var i =
                      void 0 !== o.disableOn
                        ? o.disableOn
                        : e.magnificPopup.defaults.disableOn;
                    if (i)
                      if (e.isFunction(i)) {
                        if (!i.call(t)) return !0;
                      } else if (u.width() < i) return !0;
                    n.type &&
                      (n.preventDefault(), t.isOpen && n.stopPropagation()),
                      (o.el = e(n.mfpEl)),
                      o.delegate && (o.items = r.find(o.delegate)),
                      t.open(o);
                  }
                },
                updateStatus: function (e, r) {
                  if (t.preloader) {
                    n !== e && t.container.removeClass("mfp-s-" + n),
                      r || "loading" !== e || (r = t.st.tLoading);
                    var o = { status: e, text: r };
                    p("UpdateStatus", o),
                      (e = o.status),
                      (r = o.text),
                      t.preloader.html(r),
                      t.preloader.find("a").on("click", function (e) {
                        e.stopImmediatePropagation();
                      }),
                      t.container.addClass("mfp-s-" + e),
                      (n = e);
                  }
                },
                _checkIfClose: function (n) {
                  if (!e(n).hasClass("mfp-prevent-close")) {
                    var r = t.st.closeOnContentClick,
                      o = t.st.closeOnBgClick;
                    if (r && o) return !0;
                    if (
                      !t.content ||
                      e(n).hasClass("mfp-close") ||
                      (t.preloader && n === t.preloader[0])
                    )
                      return !0;
                    if (n === t.content[0] || e.contains(t.content[0], n)) {
                      if (r) return !0;
                    } else if (o && e.contains(document, n)) return !0;
                    return !1;
                  }
                },
                _addClassToMFP: function (e) {
                  t.bgOverlay.addClass(e), t.wrap.addClass(e);
                },
                _removeClassFromMFP: function (e) {
                  this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
                },
                _hasScrollBar: function (e) {
                  return (
                    (t.isIE7 ? o.height() : document.body.scrollHeight) >
                    (e || u.height())
                  );
                },
                _setFocus: function () {
                  (t.st.focus
                    ? t.content.find(t.st.focus).eq(0)
                    : t.wrap
                  ).focus();
                },
                _onFocusIn: function (n) {
                  if (
                    n.target !== t.wrap[0] &&
                    !e.contains(t.wrap[0], n.target)
                  )
                    return t._setFocus(), !1;
                },
                _parseMarkup: function (t, n, r) {
                  var o;
                  r.data && (n = e.extend(r.data, n)),
                    p("MarkupParse", [t, n, r]),
                    e.each(n, function (n, r) {
                      if (void 0 === r || !1 === r) return !0;
                      if ((o = n.split("_")).length > 1) {
                        var i = t.find(".mfp-" + o[0]);
                        if (i.length > 0) {
                          var a = o[1];
                          "replaceWith" === a
                            ? i[0] !== r[0] && i.replaceWith(r)
                            : "img" === a
                            ? i.is("img")
                              ? i.attr("src", r)
                              : i.replaceWith(
                                  e("<img>")
                                    .attr("src", r)
                                    .attr("class", i.attr("class"))
                                )
                            : i.attr(o[1], r);
                        }
                      } else t.find(".mfp-" + n).html(r);
                    });
                },
                _getScrollbarSize: function () {
                  if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    (e.style.cssText =
                      "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                      document.body.appendChild(e),
                      (t.scrollbarSize = e.offsetWidth - e.clientWidth),
                      document.body.removeChild(e);
                  }
                  return t.scrollbarSize;
                },
              }),
                (e.magnificPopup = {
                  instance: null,
                  proto: l.prototype,
                  modules: [],
                  open: function (t, n) {
                    return (
                      m(),
                      ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
                      (t.index = n || 0),
                      this.instance.open(t)
                    );
                  },
                  close: function () {
                    return (
                      e.magnificPopup.instance &&
                      e.magnificPopup.instance.close()
                    );
                  },
                  registerModule: function (t, n) {
                    n.options && (e.magnificPopup.defaults[t] = n.options),
                      e.extend(this.proto, n.proto),
                      this.modules.push(t);
                  },
                  defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup:
                      '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                  },
                }),
                (e.fn.magnificPopup = function (n) {
                  m();
                  var r = e(this);
                  if ("string" == typeof n)
                    if ("open" === n) {
                      var o,
                        i = c ? r.data("magnificPopup") : r[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                      i.items
                        ? (o = i.items[a])
                        : ((o = r),
                          i.delegate && (o = o.find(i.delegate)),
                          (o = o.eq(a))),
                        t._openClick({ mfpEl: o }, r, i);
                    } else
                      t.isOpen &&
                        t[n].apply(t, Array.prototype.slice.call(arguments, 1));
                  else
                    (n = e.extend(!0, {}, n)),
                      c ? r.data("magnificPopup", n) : (r[0].magnificPopup = n),
                      t.addGroup(r, n);
                  return r;
                });
              var v,
                g,
                y,
                b = function () {
                  y && (g.after(y.addClass(v)).detach(), (y = null));
                };
              e.magnificPopup.registerModule("inline", {
                options: {
                  hiddenClass: "hide",
                  markup: "",
                  tNotFound: "Content not found",
                },
                proto: {
                  initInline: function () {
                    t.types.push("inline"),
                      f("Close.inline", function () {
                        b();
                      });
                  },
                  getInline: function (n, r) {
                    if ((b(), n.src)) {
                      var o = t.st.inline,
                        i = e(n.src);
                      if (i.length) {
                        var a = i[0].parentNode;
                        a &&
                          a.tagName &&
                          (g ||
                            ((v = o.hiddenClass), (g = d(v)), (v = "mfp-" + v)),
                          (y = i.after(g).detach().removeClass(v))),
                          t.updateStatus("ready");
                      } else
                        t.updateStatus("error", o.tNotFound), (i = e("<div>"));
                      return (n.inlineElement = i), i;
                    }
                    return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r;
                  },
                },
              });
              var x,
                w = function () {
                  x && e(document.body).removeClass(x);
                },
                C = function () {
                  w(), t.req && t.req.abort();
                };
              e.magnificPopup.registerModule("ajax", {
                options: {
                  settings: null,
                  cursor: "mfp-ajax-cur",
                  tError:
                    '<a href="%url%">The content</a> could not be loaded.',
                },
                proto: {
                  initAjax: function () {
                    t.types.push("ajax"),
                      (x = t.st.ajax.cursor),
                      f("Close.ajax", C),
                      f("BeforeChange.ajax", C);
                  },
                  getAjax: function (n) {
                    x && e(document.body).addClass(x),
                      t.updateStatus("loading");
                    var r = e.extend(
                      {
                        url: n.src,
                        success: function (r, o, i) {
                          var a = { data: r, xhr: i };
                          p("ParseAjax", a),
                            t.appendContent(e(a.data), "ajax"),
                            (n.finished = !0),
                            w(),
                            t._setFocus(),
                            setTimeout(function () {
                              t.wrap.addClass("mfp-ready");
                            }, 16),
                            t.updateStatus("ready"),
                            p("AjaxContentAdded");
                        },
                        error: function () {
                          w(),
                            (n.finished = n.loadError = !0),
                            t.updateStatus(
                              "error",
                              t.st.ajax.tError.replace("%url%", n.src)
                            );
                        },
                      },
                      t.st.ajax.settings
                    );
                    return (t.req = e.ajax(r)), "";
                  },
                },
              });
              var T,
                S,
                k = function (n) {
                  if (n.data && void 0 !== n.data.title) return n.data.title;
                  var r = t.st.image.titleSrc;
                  if (r) {
                    if (e.isFunction(r)) return r.call(t, n);
                    if (n.el) return n.el.attr(r) || "";
                  }
                  return "";
                };
              e.magnificPopup.registerModule("image", {
                options: {
                  markup:
                    '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                  cursor: "mfp-zoom-out-cur",
                  titleSrc: "title",
                  verticalFit: !0,
                  tError: '<a href="%url%">The image</a> could not be loaded.',
                },
                proto: {
                  initImage: function () {
                    var n = t.st.image,
                      r = ".image";
                    t.types.push("image"),
                      f("Open" + r, function () {
                        "image" === t.currItem.type &&
                          n.cursor &&
                          e(document.body).addClass(n.cursor);
                      }),
                      f("Close" + r, function () {
                        n.cursor && e(document.body).removeClass(n.cursor),
                          u.off("resize.mfp");
                      }),
                      f("Resize" + r, t.resizeImage),
                      t.isLowIE && f("AfterChange", t.resizeImage);
                  },
                  resizeImage: function () {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                      var n = 0;
                      t.isLowIE &&
                        (n =
                          parseInt(e.img.css("padding-top"), 10) +
                          parseInt(e.img.css("padding-bottom"), 10)),
                        e.img.css("max-height", t.wH - n);
                    }
                  },
                  _onImageHasSize: function (e) {
                    e.img &&
                      ((e.hasSize = !0),
                      T && clearInterval(T),
                      (e.isCheckingImgSize = !1),
                      p("ImageHasSize", e),
                      e.imgHidden &&
                        (t.content && t.content.removeClass("mfp-loading"),
                        (e.imgHidden = !1)));
                  },
                  findImageSize: function (e) {
                    var n = 0,
                      r = e.img[0],
                      o = function (i) {
                        T && clearInterval(T),
                          (T = setInterval(function () {
                            r.naturalWidth > 0
                              ? t._onImageHasSize(e)
                              : (n > 200 && clearInterval(T),
                                3 == ++n
                                  ? o(10)
                                  : 40 === n
                                  ? o(50)
                                  : 100 === n && o(500));
                          }, i));
                      };
                    o(1);
                  },
                  getImage: function (n, r) {
                    var o = 0,
                      i = function () {
                        n &&
                          (n.img[0].complete
                            ? (n.img.off(".mfploader"),
                              n === t.currItem &&
                                (t._onImageHasSize(n), t.updateStatus("ready")),
                              (n.hasSize = !0),
                              (n.loaded = !0),
                              p("ImageLoadComplete"))
                            : ++o < 200
                            ? setTimeout(i, 100)
                            : a());
                      },
                      a = function () {
                        n &&
                          (n.img.off(".mfploader"),
                          n === t.currItem &&
                            (t._onImageHasSize(n),
                            t.updateStatus(
                              "error",
                              s.tError.replace("%url%", n.src)
                            )),
                          (n.hasSize = !0),
                          (n.loaded = !0),
                          (n.loadError = !0));
                      },
                      s = t.st.image,
                      l = r.find(".mfp-img");
                    if (l.length) {
                      var c = document.createElement("img");
                      (c.className = "mfp-img"),
                        n.el &&
                          n.el.find("img").length &&
                          (c.alt = n.el.find("img").attr("alt")),
                        (n.img = e(c)
                          .on("load.mfploader", i)
                          .on("error.mfploader", a)),
                        (c.src = n.src),
                        l.is("img") && (n.img = n.img.clone()),
                        (c = n.img[0]).naturalWidth > 0
                          ? (n.hasSize = !0)
                          : c.width || (n.hasSize = !1);
                    }
                    return (
                      t._parseMarkup(
                        r,
                        { title: k(n), img_replaceWith: n.img },
                        n
                      ),
                      t.resizeImage(),
                      n.hasSize
                        ? (T && clearInterval(T),
                          n.loadError
                            ? (r.addClass("mfp-loading"),
                              t.updateStatus(
                                "error",
                                s.tError.replace("%url%", n.src)
                              ))
                            : (r.removeClass("mfp-loading"),
                              t.updateStatus("ready")),
                          r)
                        : (t.updateStatus("loading"),
                          (n.loading = !0),
                          n.hasSize ||
                            ((n.imgHidden = !0),
                            r.addClass("mfp-loading"),
                            t.findImageSize(n)),
                          r)
                    );
                  },
                },
              }),
                e.magnificPopup.registerModule("zoom", {
                  options: {
                    enabled: !1,
                    easing: "ease-in-out",
                    duration: 300,
                    opener: function (e) {
                      return e.is("img") ? e : e.find("img");
                    },
                  },
                  proto: {
                    initZoom: function () {
                      var e,
                        n = t.st.zoom,
                        r = ".zoom";
                      if (n.enabled && t.supportsTransition) {
                        var o,
                          i,
                          a = n.duration,
                          s = function (e) {
                            var t = e
                                .clone()
                                .removeAttr("style")
                                .removeAttr("class")
                                .addClass("mfp-animated-image"),
                              r = "all " + n.duration / 1e3 + "s " + n.easing,
                              o = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden",
                              },
                              i = "transition";
                            return (
                              (o["-webkit-" + i] =
                                o["-moz-" + i] =
                                o["-o-" + i] =
                                o[i] =
                                  r),
                              t.css(o),
                              t
                            );
                          },
                          l = function () {
                            t.content.css("visibility", "visible");
                          };
                        f("BuildControls" + r, function () {
                          if (t._allowZoom()) {
                            if (
                              (clearTimeout(o),
                              t.content.css("visibility", "hidden"),
                              !(e = t._getItemToZoom()))
                            )
                              return void l();
                            (i = s(e)).css(t._getOffset()),
                              t.wrap.append(i),
                              (o = setTimeout(function () {
                                i.css(t._getOffset(!0)),
                                  (o = setTimeout(function () {
                                    l(),
                                      setTimeout(function () {
                                        i.remove(),
                                          (e = i = null),
                                          p("ZoomAnimationEnded");
                                      }, 16);
                                  }, a));
                              }, 16));
                          }
                        }),
                          f("BeforeClose" + r, function () {
                            if (t._allowZoom()) {
                              if (
                                (clearTimeout(o), (t.st.removalDelay = a), !e)
                              ) {
                                if (!(e = t._getItemToZoom())) return;
                                i = s(e);
                              }
                              i.css(t._getOffset(!0)),
                                t.wrap.append(i),
                                t.content.css("visibility", "hidden"),
                                setTimeout(function () {
                                  i.css(t._getOffset());
                                }, 16);
                            }
                          }),
                          f("Close" + r, function () {
                            t._allowZoom() &&
                              (l(), i && i.remove(), (e = null));
                          });
                      }
                    },
                    _allowZoom: function () {
                      return "image" === t.currItem.type;
                    },
                    _getItemToZoom: function () {
                      return !!t.currItem.hasSize && t.currItem.img;
                    },
                    _getOffset: function (n) {
                      var r,
                        o = (r = n
                          ? t.currItem.img
                          : t.st.zoom.opener(
                              t.currItem.el || t.currItem
                            )).offset(),
                        i = parseInt(r.css("padding-top"), 10),
                        a = parseInt(r.css("padding-bottom"), 10);
                      o.top -= e(window).scrollTop() - i;
                      var s = {
                        width: r.width(),
                        height:
                          (c ? r.innerHeight() : r[0].offsetHeight) - a - i,
                      };
                      return (
                        void 0 === S &&
                          (S =
                            void 0 !==
                            document.createElement("p").style.MozTransform),
                        S
                          ? (s["-moz-transform"] = s.transform =
                              "translate(" + o.left + "px," + o.top + "px)")
                          : ((s.left = o.left), (s.top = o.top)),
                        s
                      );
                    },
                  },
                });
              var E = function (e) {
                if (t.currTemplate.iframe) {
                  var n = t.currTemplate.iframe.find("iframe");
                  n.length &&
                    (e || (n[0].src = "//about:blank"),
                    t.isIE8 && n.css("display", e ? "block" : "none"));
                }
              };
              e.magnificPopup.registerModule("iframe", {
                options: {
                  markup:
                    '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                  srcAction: "iframe_src",
                  patterns: {
                    youtube: {
                      index: "youtube.com",
                      id: "v=",
                      src: "//www.youtube.com/embed/%id%?autoplay=1",
                    },
                    vimeo: {
                      index: "vimeo.com/",
                      id: "/",
                      src: "//player.vimeo.com/video/%id%?autoplay=1",
                    },
                    gmaps: {
                      index: "//maps.google.",
                      src: "%id%&output=embed",
                    },
                  },
                },
                proto: {
                  initIframe: function () {
                    t.types.push("iframe"),
                      f("BeforeChange", function (e, t, n) {
                        t !== n &&
                          ("iframe" === t ? E() : "iframe" === n && E(!0));
                      }),
                      f("Close.iframe", function () {
                        E();
                      });
                  },
                  getIframe: function (n, r) {
                    var o = n.src,
                      i = t.st.iframe;
                    e.each(i.patterns, function () {
                      if (o.indexOf(this.index) > -1)
                        return (
                          this.id &&
                            (o =
                              "string" == typeof this.id
                                ? o.substr(
                                    o.lastIndexOf(this.id) + this.id.length,
                                    o.length
                                  )
                                : this.id.call(this, o)),
                          (o = this.src.replace("%id%", o)),
                          !1
                        );
                    });
                    var a = {};
                    return (
                      i.srcAction && (a[i.srcAction] = o),
                      t._parseMarkup(r, a, n),
                      t.updateStatus("ready"),
                      r
                    );
                  },
                },
              });
              var A = function (e) {
                  var n = t.items.length;
                  return e > n - 1 ? e - n : e < 0 ? n + e : e;
                },
                j = function (e, t, n) {
                  return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
                };
              e.magnificPopup.registerModule("gallery", {
                options: {
                  enabled: !1,
                  arrowMarkup:
                    '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                  preload: [0, 2],
                  navigateByImgClick: !0,
                  arrows: !0,
                  tPrev: "Previous (Left arrow key)",
                  tNext: "Next (Right arrow key)",
                  tCounter: "%curr% of %total%",
                },
                proto: {
                  initGallery: function () {
                    var n = t.st.gallery,
                      r = ".mfp-gallery";
                    if (((t.direction = !0), !n || !n.enabled)) return !1;
                    (a += " mfp-gallery"),
                      f("Open" + r, function () {
                        n.navigateByImgClick &&
                          t.wrap.on("click" + r, ".mfp-img", function () {
                            if (t.items.length > 1) return t.next(), !1;
                          }),
                          o.on("keydown" + r, function (e) {
                            37 === e.keyCode
                              ? t.prev()
                              : 39 === e.keyCode && t.next();
                          });
                      }),
                      f("UpdateStatus" + r, function (e, n) {
                        n.text &&
                          (n.text = j(
                            n.text,
                            t.currItem.index,
                            t.items.length
                          ));
                      }),
                      f("MarkupParse" + r, function (e, r, o, i) {
                        var a = t.items.length;
                        o.counter = a > 1 ? j(n.tCounter, i.index, a) : "";
                      }),
                      f("BuildControls" + r, function () {
                        if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                          var r = n.arrowMarkup,
                            o = (t.arrowLeft = e(
                              r
                                .replace(/%title%/gi, n.tPrev)
                                .replace(/%dir%/gi, "left")
                            ).addClass("mfp-prevent-close")),
                            i = (t.arrowRight = e(
                              r
                                .replace(/%title%/gi, n.tNext)
                                .replace(/%dir%/gi, "right")
                            ).addClass("mfp-prevent-close"));
                          o.click(function () {
                            t.prev();
                          }),
                            i.click(function () {
                              t.next();
                            }),
                            t.container.append(o.add(i));
                        }
                      }),
                      f("Change" + r, function () {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout),
                          (t._preloadTimeout = setTimeout(function () {
                            t.preloadNearbyImages(), (t._preloadTimeout = null);
                          }, 16));
                      }),
                      f("Close" + r, function () {
                        o.off(r),
                          t.wrap.off("click" + r),
                          (t.arrowRight = t.arrowLeft = null);
                      });
                  },
                  next: function () {
                    (t.direction = !0),
                      (t.index = A(t.index + 1)),
                      t.updateItemHTML();
                  },
                  prev: function () {
                    (t.direction = !1),
                      (t.index = A(t.index - 1)),
                      t.updateItemHTML();
                  },
                  goTo: function (e) {
                    (t.direction = e >= t.index),
                      (t.index = e),
                      t.updateItemHTML();
                  },
                  preloadNearbyImages: function () {
                    var e,
                      n = t.st.gallery.preload,
                      r = Math.min(n[0], t.items.length),
                      o = Math.min(n[1], t.items.length);
                    for (e = 1; e <= (t.direction ? o : r); e++)
                      t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? r : o); e++)
                      t._preloadItem(t.index - e);
                  },
                  _preloadItem: function (n) {
                    if (((n = A(n)), !t.items[n].preloaded)) {
                      var r = t.items[n];
                      r.parsed || (r = t.parseEl(n)),
                        p("LazyLoad", r),
                        "image" === r.type &&
                          (r.img = e('<img class="mfp-img" />')
                            .on("load.mfploader", function () {
                              r.hasSize = !0;
                            })
                            .on("error.mfploader", function () {
                              (r.hasSize = !0),
                                (r.loadError = !0),
                                p("LazyLoadError", r);
                            })
                            .attr("src", r.src)),
                        (r.preloaded = !0);
                    }
                  },
                },
              }),
                e.magnificPopup.registerModule("retina", {
                  options: {
                    replaceSrc: function (e) {
                      return e.src.replace(/\.\w+$/, function (e) {
                        return "@2x" + e;
                      });
                    },
                    ratio: 1,
                  },
                  proto: {
                    initRetina: function () {
                      if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                          n = e.ratio;
                        (n = isNaN(n) ? n() : n) > 1 &&
                          (f("ImageHasSize.retina", function (e, t) {
                            t.img.css({
                              "max-width": t.img[0].naturalWidth / n,
                              width: "100%",
                            });
                          }),
                          f("ElementParse.retina", function (t, r) {
                            r.src = e.replaceSrc(r, n);
                          }));
                      }
                    },
                  },
                }),
                m();
            })
              ? o.apply(t, i)
              : o) || (e.exports = a);
    }.call(this, n(0)));
  },
]);

document.querySelectorAll(".accordion-btn").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;
    if (parent.classList.contains("active")) {
      parent.classList.remove("active");
    } else {
      document
        .querySelectorAll(".faq__item")
        .forEach((child) => child.classList.remove("active"));
      parent.classList.toggle("active");
    }
  });
});

var elem = document.querySelector(".articles__items");
if (elem) {
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".articles__item",
    columnWidth: 1,
    gutter: ".gutter-sizer",
    percentPosition: true,
  });
}
