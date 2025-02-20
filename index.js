document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
    let currentSlide = 0; // Índice do slide atual
  
    // Função para exibir o slide atual
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); // Ativa o slide correspondente
      });
    };
  
    // Event Listener para o botão "Next"
    document.getElementById('nextSlide').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length; // Incrementa e faz o loop
      showSlide(currentSlide);
    });
  
    // Event Listener para o botão "Previous"
    document.getElementById('prevSlide').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Decrementa e faz o loop
      showSlide(currentSlide);
    });
  });
  
  
  /*!
   * jQuery JavaScript Library v3.3.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  ! function(e, t) {
      "use strict";
      "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
          if (!e.document) throw new Error("jQuery requires a window with a document");
          return t(e)
      } : t(e)
  }("undefined" != typeof window ? window : this, (function(e, t) {
      "use strict";
      var n = [],
          r = e.document,
          i = Object.getPrototypeOf,
          o = n.slice,
          a = n.concat,
          s = n.push,
          u = n.indexOf,
          l = {},
          c = l.toString,
          f = l.hasOwnProperty,
          p = f.toString,
          d = p.call(Object),
          h = {},
          g = function(e) {
              return "function" == typeof e && "number" != typeof e.nodeType
          },
          v = function(e) {
              return null != e && e === e.window
          },
          y = {
              type: !0,
              src: !0,
              noModule: !0
          };
  
      function m(e, t, n) {
          var i, o = (t = t || r).createElement("script");
          if (o.text = e, n)
              for (i in y) n[i] && (o[i] = n[i]);
          t.head.appendChild(o).parentNode.removeChild(o)
      }
  
      function x(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
      }
      var b = "3.3.1",
          w = function(e, t) {
              return new w.fn.init(e, t)
          },
          T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  
      function C(e) {
          var t = !!e && "length" in e && e.length,
              n = x(e);
          return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }
      w.fn = w.prototype = {
          jquery: b,
          constructor: w,
          length: 0,
          toArray: function() {
              return o.call(this)
          },
          get: function(e) {
              return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
          },
          pushStack: function(e) {
              var t = w.merge(this.constructor(), e);
              return t.prevObject = this, t
          },
          each: function(e) {
              return w.each(this, e)
          },
          map: function(e) {
              return this.pushStack(w.map(this, (function(t, n) {
                  return e.call(t, n, t)
              })))
          },
          slice: function() {
              return this.pushStack(o.apply(this, arguments))
          },
          first: function() {
              return this.eq(0)
          },
          last: function() {
              return this.eq(-1)
          },
          eq: function(e) {
              var t = this.length,
                  n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
          },
          end: function() {
              return this.prevObject || this.constructor()
          },
          push: s,
          sort: n.sort,
          splice: n.splice
      }, w.extend = w.fn.extend = function() {
          var e, t, n, r, i, o, a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1;
          for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
              if (null != (e = arguments[s]))
                  for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
          return a
      }, w.extend({
          expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(e) {
              throw new Error(e)
          },
          noop: function() {},
          isPlainObject: function(e) {
              var t, n;
              return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
          },
          isEmptyObject: function(e) {
              var t;
              for (t in e) return !1;
              return !0
          },
          globalEval: function(e) {
              m(e)
          },
          each: function(e, t) {
              var n, r = 0;
              if (C(e))
                  for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else
                  for (r in e)
                      if (!1 === t.call(e[r], r, e[r])) break;
              return e
          },
          trim: function(e) {
              return null == e ? "" : (e + "").replace(T, "")
          },
          makeArray: function(e, t) {
              var n = t || [];
              return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
          },
          inArray: function(e, t, n) {
              return null == t ? -1 : u.call(t, e, n)
          },
          merge: function(e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
              return e.length = i, e
          },
          grep: function(e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
              return r
          },
          map: function(e, t, n) {
              var r, i, o = 0,
                  s = [];
              if (C(e))
                  for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
              else
                  for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
              return a.apply([], s)
          },
          guid: 1,
          support: h
      }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
          l["[object " + t + "]"] = t.toLowerCase()
      }));
      var E =
          /*!
           * Sizzle CSS Selector Engine v2.3.3
           * https://sizzlejs.com/
           *
           * Copyright jQuery Foundation and other contributors
           * Released under the MIT license
           * http://jquery.org/license
           *
           * Date: 2016-08-08
           */
          function(e) {
              var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
                  w = e.document,
                  T = 0,
                  C = 0,
                  E = se(),
                  k = se(),
                  S = se(),
                  D = function(e, t) {
                      return e === t && (f = !0), 0
                  },
                  N = {}.hasOwnProperty,
                  A = [],
                  j = A.pop,
                  q = A.push,
                  L = A.push,
                  H = A.slice,
                  O = function(e, t) {
                      for (var n = 0, r = e.length; n < r; n++)
                          if (e[n] === t) return n;
                      return -1
                  },
                  P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                  M = "[\\x20\\t\\r\\n\\f]",
                  R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                  I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
                  W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                  B = new RegExp(M + "+", "g"),
                  F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                  _ = new RegExp("^" + M + "*," + M + "*"),
                  z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                  X = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                  U = new RegExp(W),
                  V = new RegExp("^" + R + "$"),
                  G = {
                      ID: new RegExp("^#(" + R + ")"),
                      CLASS: new RegExp("^\\.(" + R + ")"),
                      TAG: new RegExp("^(" + R + "|[*])"),
                      ATTR: new RegExp("^" + I),
                      PSEUDO: new RegExp("^" + W),
                      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                      bool: new RegExp("^(?:" + P + ")$", "i"),
                      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                  },
                  Y = /^(?:input|select|textarea|button)$/i,
                  Q = /^h\d$/i,
                  J = /^[^{]+\{\s*\[native \w/,
                  K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                  Z = /[+~]/,
                  ee = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                  te = function(e, t, n) {
                      var r = "0x" + t - 65536;
                      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                  },
                  ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                  re = function(e, t) {
                      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                  },
                  ie = function() {
                      p()
                  },
                  oe = xe((function(e) {
                      return !0 === e.disabled && ("form" in e || "label" in e)
                  }), {
                      dir: "parentNode",
                      next: "legend"
                  });
              try {
                  L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
              } catch (e) {
                  L = {
                      apply: A.length ? function(e, t) {
                          q.apply(e, H.call(t))
                      } : function(e, t) {
                          for (var n = e.length, r = 0; e[n++] = t[r++];);
                          e.length = n - 1
                      }
                  }
              }
  
              function ae(e, t, r, i) {
                  var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                      T = t ? t.nodeType : 9;
                  if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                  if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                      if (11 !== T && (f = K.exec(e)))
                          if (o = f[1]) {
                              if (9 === T) {
                                  if (!(l = t.getElementById(o))) return r;
                                  if (l.id === o) return r.push(l), r
                              } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                          } else {
                              if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                          } if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
                          if (1 !== T) m = t, y = e;
                          else if ("object" !== t.nodeName.toLowerCase()) {
                              for ((c = t.getAttribute("id")) ? c = c.replace(ne, re) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + me(h[s]);
                              y = h.join(","), m = Z.test(e) && ve(t.parentNode) || t
                          }
                          if (y) try {
                              return L.apply(r, m.querySelectorAll(y)), r
                          } catch (e) {} finally {
                              c === b && t.removeAttribute("id")
                          }
                      }
                  }
                  return u(e.replace(F, "$1"), t, r, i)
              }
  
              function se() {
                  var e = [];
                  return function t(n, i) {
                      return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                  }
              }
  
              function ue(e) {
                  return e[b] = !0, e
              }
  
              function le(e) {
                  var t = d.createElement("fieldset");
                  try {
                      return !!e(t)
                  } catch (e) {
                      return !1
                  } finally {
                      t.parentNode && t.parentNode.removeChild(t), t = null
                  }
              }
  
              function ce(e, t) {
                  for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
              }
  
              function fe(e, t) {
                  var n = t && e,
                      r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                  if (r) return r;
                  if (n)
                      for (; n = n.nextSibling;)
                          if (n === t) return -1;
                  return e ? 1 : -1
              }
  
              function pe(e) {
                  return function(t) {
                      return "input" === t.nodeName.toLowerCase() && t.type === e
                  }
              }
  
              function de(e) {
                  return function(t) {
                      var n = t.nodeName.toLowerCase();
                      return ("input" === n || "button" === n) && t.type === e
                  }
              }
  
              function he(e) {
                  return function(t) {
                      return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                  }
              }
  
              function ge(e) {
                  return ue((function(t) {
                      return t = +t, ue((function(n, r) {
                          for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                      }))
                  }))
              }
  
              function ve(e) {
                  return e && void 0 !== e.getElementsByTagName && e
              }
              for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                      var t = e && (e.ownerDocument || e).documentElement;
                      return !!t && "HTML" !== t.nodeName
                  }, p = ae.setDocument = function(e) {
                      var t, i, a = e ? e.ownerDocument || e : w;
                      return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ie, !1) : i.attachEvent && i.attachEvent("onunload", ie)), n.attributes = le((function(e) {
                          return e.className = "i", !e.getAttribute("className")
                      })), n.getElementsByTagName = le((function(e) {
                          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                      })), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = le((function(e) {
                          return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                      })), n.getById ? (r.filter.ID = function(e) {
                          var t = e.replace(ee, te);
                          return function(e) {
                              return e.getAttribute("id") === t
                          }
                      }, r.find.ID = function(e, t) {
                          if (void 0 !== t.getElementById && g) {
                              var n = t.getElementById(e);
                              return n ? [n] : []
                          }
                      }) : (r.filter.ID = function(e) {
                          var t = e.replace(ee, te);
                          return function(e) {
                              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                              return n && n.value === t
                          }
                      }, r.find.ID = function(e, t) {
                          if (void 0 !== t.getElementById && g) {
                              var n, r, i, o = t.getElementById(e);
                              if (o) {
                                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                              }
                              return []
                          }
                      }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                      } : function(e, t) {
                          var n, r = [],
                              i = 0,
                              o = t.getElementsByTagName(e);
                          if ("*" === e) {
                              for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                              return r
                          }
                          return o
                      }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                      }, y = [], v = [], (n.qsa = J.test(d.querySelectorAll)) && (le((function(e) {
                          h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                      })), le((function(e) {
                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = d.createElement("input");
                          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                      }))), (n.matchesSelector = J.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
                          n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", W)
                      })), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = J.test(h.compareDocumentPosition), x = t || J.test(h.contains) ? function(e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                      } : function(e, t) {
                          if (t)
                              for (; t = t.parentNode;)
                                  if (t === e) return !0;
                          return !1
                      }, D = t ? function(e, t) {
                          if (e === t) return f = !0, 0;
                          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                          return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                      } : function(e, t) {
                          if (e === t) return f = !0, 0;
                          var n, r = 0,
                              i = e.parentNode,
                              o = t.parentNode,
                              a = [e],
                              s = [t];
                          if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                          if (i === o) return fe(e, t);
                          for (n = e; n = n.parentNode;) a.unshift(n);
                          for (n = t; n = n.parentNode;) s.unshift(n);
                          for (; a[r] === s[r];) r++;
                          return r ? fe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                      }, d) : d
                  }, ae.matches = function(e, t) {
                      return ae(e, null, null, t)
                  }, ae.matchesSelector = function(e, t) {
                      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(X, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                          var r = m.call(e, t);
                          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                      } catch (e) {}
                      return ae(t, d, null, [e]).length > 0
                  }, ae.contains = function(e, t) {
                      return (e.ownerDocument || e) !== d && p(e), x(e, t)
                  }, ae.attr = function(e, t) {
                      (e.ownerDocument || e) !== d && p(e);
                      var i = r.attrHandle[t.toLowerCase()],
                          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                  }, ae.escape = function(e) {
                      return (e + "").replace(ne, re)
                  }, ae.error = function(e) {
                      throw new Error("Syntax error, unrecognized expression: " + e)
                  }, ae.uniqueSort = function(e) {
                      var t, r = [],
                          i = 0,
                          o = 0;
                      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                          for (; t = e[o++];) t === e[o] && (i = r.push(o));
                          for (; i--;) e.splice(r[i], 1)
                      }
                      return c = null, e
                  }, i = ae.getText = function(e) {
                      var t, n = "",
                          r = 0,
                          o = e.nodeType;
                      if (o) {
                          if (1 === o || 9 === o || 11 === o) {
                              if ("string" == typeof e.textContent) return e.textContent;
                              for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                          } else if (3 === o || 4 === o) return e.nodeValue
                      } else
                          for (; t = e[r++];) n += i(t);
                      return n
                  }, r = ae.selectors = {
                      cacheLength: 50,
                      createPseudo: ue,
                      match: G,
                      attrHandle: {},
                      find: {},
                      relative: {
                          ">": {
                              dir: "parentNode",
                              first: !0
                          },
                          " ": {
                              dir: "parentNode"
                          },
                          "+": {
                              dir: "previousSibling",
                              first: !0
                          },
                          "~": {
                              dir: "previousSibling"
                          }
                      },
                      preFilter: {
                          ATTR: function(e) {
                              return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                          },
                          CHILD: function(e) {
                              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                          },
                          PSEUDO: function(e) {
                              var t, n = !e[6] && e[2];
                              return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                          }
                      },
                      filter: {
                          TAG: function(e) {
                              var t = e.replace(ee, te).toLowerCase();
                              return "*" === e ? function() {
                                  return !0
                              } : function(e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t
                              }
                          },
                          CLASS: function(e) {
                              var t = E[e + " "];
                              return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, (function(e) {
                                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                              }))
                          },
                          ATTR: function(e, t, n) {
                              return function(r) {
                                  var i = ae.attr(r, e);
                                  return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                              }
                          },
                          CHILD: function(e, t, n, r, i) {
                              var o = "nth" !== e.slice(0, 3),
                                  a = "last" !== e.slice(-4),
                                  s = "of-type" === t;
                              return 1 === r && 0 === i ? function(e) {
                                  return !!e.parentNode
                              } : function(t, n, u) {
                                  var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                      v = t.parentNode,
                                      y = s && t.nodeName.toLowerCase(),
                                      m = !u && !s,
                                      x = !1;
                                  if (v) {
                                      if (o) {
                                          for (; g;) {
                                              for (p = t; p = p[g];)
                                                  if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                              h = g = "only" === e && !h && "nextSibling"
                                          }
                                          return !0
                                      }
                                      if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                          for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                              if (1 === p.nodeType && ++x && p === t) {
                                                  c[e] = [T, d, x];
                                                  break
                                              }
                                      } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                          for (;
                                              (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                      return (x -= i) === r || x % r == 0 && x / r >= 0
                                  }
                              }
                          },
                          PSEUDO: function(e, t) {
                              var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                              return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                  for (var r, o = i(e, t), a = o.length; a--;) e[r = O(e, o[a])] = !(n[r] = o[a])
                              })) : function(e) {
                                  return i(e, 0, n)
                              }) : i
                          }
                      },
                      pseudos: {
                          not: ue((function(e) {
                              var t = [],
                                  n = [],
                                  r = s(e.replace(F, "$1"));
                              return r[b] ? ue((function(e, t, n, i) {
                                  for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                              })) : function(e, i, o) {
                                  return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                              }
                          })),
                          has: ue((function(e) {
                              return function(t) {
                                  return ae(e, t).length > 0
                              }
                          })),
                          contains: ue((function(e) {
                              return e = e.replace(ee, te),
                                  function(t) {
                                      return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                  }
                          })),
                          lang: ue((function(e) {
                              return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(ee, te).toLowerCase(),
                                  function(t) {
                                      var n;
                                      do {
                                          if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                      } while ((t = t.parentNode) && 1 === t.nodeType);
                                      return !1
                                  }
                          })),
                          target: function(t) {
                              var n = e.location && e.location.hash;
                              return n && n.slice(1) === t.id
                          },
                          root: function(e) {
                              return e === h
                          },
                          focus: function(e) {
                              return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                          },
                          enabled: he(!1),
                          disabled: he(!0),
                          checked: function(e) {
                              var t = e.nodeName.toLowerCase();
                              return "input" === t && !!e.checked || "option" === t && !!e.selected
                          },
                          selected: function(e) {
                              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                          },
                          empty: function(e) {
                              for (e = e.firstChild; e; e = e.nextSibling)
                                  if (e.nodeType < 6) return !1;
                              return !0
                          },
                          parent: function(e) {
                              return !r.pseudos.empty(e)
                          },
                          header: function(e) {
                              return Q.test(e.nodeName)
                          },
                          input: function(e) {
                              return Y.test(e.nodeName)
                          },
                          button: function(e) {
                              var t = e.nodeName.toLowerCase();
                              return "input" === t && "button" === e.type || "button" === t
                          },
                          text: function(e) {
                              var t;
                              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                          },
                          first: ge((function() {
                              return [0]
                          })),
                          last: ge((function(e, t) {
                              return [t - 1]
                          })),
                          eq: ge((function(e, t, n) {
                              return [n < 0 ? n + t : n]
                          })),
                          even: ge((function(e, t) {
                              for (var n = 0; n < t; n += 2) e.push(n);
                              return e
                          })),
                          odd: ge((function(e, t) {
                              for (var n = 1; n < t; n += 2) e.push(n);
                              return e
                          })),
                          lt: ge((function(e, t, n) {
                              for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                              return e
                          })),
                          gt: ge((function(e, t, n) {
                              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                              return e
                          }))
                      }
                  }, r.pseudos.nth = r.pseudos.eq, {
                      radio: !0,
                      checkbox: !0,
                      file: !0,
                      password: !0,
                      image: !0
                  }) r.pseudos[t] = pe(t);
              for (t in {
                      submit: !0,
                      reset: !0
                  }) r.pseudos[t] = de(t);
  
              function ye() {}
  
              function me(e) {
                  for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                  return r
              }
  
              function xe(e, t, n) {
                  var r = t.dir,
                      i = t.next,
                      o = i || r,
                      a = n && "parentNode" === o,
                      s = C++;
                  return t.first ? function(t, n, i) {
                      for (; t = t[r];)
                          if (1 === t.nodeType || a) return e(t, n, i);
                      return !1
                  } : function(t, n, u) {
                      var l, c, f, p = [T, s];
                      if (u) {
                          for (; t = t[r];)
                              if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                      } else
                          for (; t = t[r];)
                              if (1 === t.nodeType || a)
                                  if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                  else {
                                      if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                      if (c[o] = p, p[2] = e(t, n, u)) return !0
                                  } return !1
                  }
              }
  
              function be(e) {
                  return e.length > 1 ? function(t, n, r) {
                      for (var i = e.length; i--;)
                          if (!e[i](t, n, r)) return !1;
                      return !0
                  } : e[0]
              }
  
              function we(e, t, n, r, i) {
                  for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                  return a
              }
  
              function Te(e, t, n, r, i, o) {
                  return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), ue((function(o, a, s, u) {
                      var l, c, f, p = [],
                          d = [],
                          h = a.length,
                          g = o || function(e, t, n) {
                              for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                              return n
                          }(t || "*", s.nodeType ? [s] : s, []),
                          v = !e || !o && t ? g : we(g, p, e, s, u),
                          y = n ? i || (o ? e : h || r) ? [] : a : v;
                      if (n && n(v, y, s, u), r)
                          for (l = we(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                      if (o) {
                          if (i || e) {
                              if (i) {
                                  for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                  i(null, y = [], l, u)
                              }
                              for (c = y.length; c--;)(f = y[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                          }
                      } else y = we(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : L.apply(a, y)
                  }))
              }
  
              function Ce(e) {
                  for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe((function(e) {
                          return e === t
                      }), s, !0), f = xe((function(e) {
                          return O(t, e) > -1
                      }), s, !0), p = [function(e, n, r) {
                          var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                          return t = null, i
                      }]; u < o; u++)
                      if (n = r.relative[e[u].type]) p = [xe(be(p), n)];
                      else {
                          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                              for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                              return Te(u > 1 && be(p), u > 1 && me(e.slice(0, u - 1).concat({
                                  value: " " === e[u - 2].type ? "*" : ""
                              })).replace(F, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && me(e))
                          }
                          p.push(n)
                      } return be(p)
              }
              return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = ae.tokenize = function(e, t) {
                  var n, i, o, a, s, u, l, c = k[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, u = [], l = r.preFilter; s;) {
                      for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                              value: n,
                              type: i[0].replace(F, " ")
                          }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                          value: n,
                          type: a,
                          matches: i
                      }), s = s.slice(n.length));
                      if (!n) break
                  }
                  return t ? s.length : s ? ae.error(e) : k(e, u).slice(0)
              }, s = ae.compile = function(e, t) {
                  var n, i = [],
                      o = [],
                      s = S[e + " "];
                  if (!s) {
                      for (t || (t = a(e)), n = t.length; n--;)(s = Ce(t[n]))[b] ? i.push(s) : o.push(s);
                      s = S(e, function(e, t) {
                          var n = t.length > 0,
                              i = e.length > 0,
                              o = function(o, a, s, u, c) {
                                  var f, h, v, y = 0,
                                      m = "0",
                                      x = o && [],
                                      b = [],
                                      w = l,
                                      C = o || i && r.find.TAG("*", c),
                                      E = T += null == w ? 1 : Math.random() || .1,
                                      k = C.length;
                                  for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                                      if (i && f) {
                                          for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                                              if (v(f, a || d, s)) {
                                                  u.push(f);
                                                  break
                                              } c && (T = E)
                                      }
                                      n && ((f = !v && f) && y--, o && x.push(f))
                                  }
                                  if (y += m, n && m !== y) {
                                      for (h = 0; v = t[h++];) v(x, b, a, s);
                                      if (o) {
                                          if (y > 0)
                                              for (; m--;) x[m] || b[m] || (b[m] = j.call(u));
                                          b = we(b)
                                      }
                                      L.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && ae.uniqueSort(u)
                                  }
                                  return c && (T = E, l = w), x
                              };
                          return n ? ue(o) : o
                      }(o, i)), s.selector = e
                  }
                  return s
              }, u = ae.select = function(e, t, n, i) {
                  var o, u, l, c, f, p = "function" == typeof e && e,
                      d = !i && a(e = p.selector || e);
                  if (n = n || [], 1 === d.length) {
                      if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                          if (!(t = (r.find.ID(l.matches[0].replace(ee, te), t) || [])[0])) return n;
                          p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                      }
                      for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                          if ((f = r.find[c]) && (i = f(l.matches[0].replace(ee, te), Z.test(u[0].type) && ve(t.parentNode) || t))) {
                              if (u.splice(o, 1), !(e = i.length && me(u))) return L.apply(n, i), n;
                              break
                          }
                  }
                  return (p || s(e, d))(i, t, !g, n, !t || Z.test(e) && ve(t.parentNode) || t), n
              }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = le((function(e) {
                  return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
              })), le((function(e) {
                  return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
              })) || ce("type|href|height|width", (function(e, t, n) {
                  if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
              })), n.attributes && le((function(e) {
                  return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
              })) || ce("value", (function(e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
              })), le((function(e) {
                  return null == e.getAttribute("disabled")
              })) || ce(P, (function(e, t, n) {
                  var r;
                  if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
              })), ae
          }(e);
      w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
      var k = function(e, t, n) {
              for (var r = [], i = void 0 !== n;
                  (e = e[t]) && 9 !== e.nodeType;)
                  if (1 === e.nodeType) {
                      if (i && w(e).is(n)) break;
                      r.push(e)
                  } return r
          },
          S = function(e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n
          },
          D = w.expr.match.needsContext;
  
      function N(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }
      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  
      function j(e, t, n) {
          return g(t) ? w.grep(e, (function(e, r) {
              return !!t.call(e, r, e) !== n
          })) : t.nodeType ? w.grep(e, (function(e) {
              return e === t !== n
          })) : "string" != typeof t ? w.grep(e, (function(e) {
              return u.call(t, e) > -1 !== n
          })) : w.filter(t, e, n)
      }
      w.filter = function(e, t, n) {
          var r = t[0];
          return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
              return 1 === e.nodeType
          })))
      }, w.fn.extend({
          find: function(e) {
              var t, n, r = this.length,
                  i = this;
              if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                  for (t = 0; t < r; t++)
                      if (w.contains(i[t], this)) return !0
              })));
              for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
              return r > 1 ? w.uniqueSort(n) : n
          },
          filter: function(e) {
              return this.pushStack(j(this, e || [], !1))
          },
          not: function(e) {
              return this.pushStack(j(this, e || [], !0))
          },
          is: function(e) {
              return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
          }
      });
      var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (w.fn.init = function(e, t, n) {
          var i, o;
          if (!e) return this;
          if (n = n || q, "string" == typeof e) {
              if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (i[1]) {
                  if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                      for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                  return this
              }
              return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
          }
          return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
      }).prototype = w.fn, q = w(r);
      var H = /^(?:parents|prev(?:Until|All))/,
          O = {
              children: !0,
              contents: !0,
              next: !0,
              prev: !0
          };
  
      function P(e, t) {
          for (;
              (e = e[t]) && 1 !== e.nodeType;);
          return e
      }
      w.fn.extend({
          has: function(e) {
              var t = w(e, this),
                  n = t.length;
              return this.filter((function() {
                  for (var e = 0; e < n; e++)
                      if (w.contains(this, t[e])) return !0
              }))
          },
          closest: function(e, t) {
              var n, r = 0,
                  i = this.length,
                  o = [],
                  a = "string" != typeof e && w(e);
              if (!D.test(e))
                  for (; r < i; r++)
                      for (n = this[r]; n && n !== t; n = n.parentNode)
                          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                              o.push(n);
                              break
                          } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
          },
          index: function(e) {
              return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
          },
          add: function(e, t) {
              return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
          },
          addBack: function(e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
          }
      }), w.each({
          parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null
          },
          parents: function(e) {
              return k(e, "parentNode")
          },
          parentsUntil: function(e, t, n) {
              return k(e, "parentNode", n)
          },
          next: function(e) {
              return P(e, "nextSibling")
          },
          prev: function(e) {
              return P(e, "previousSibling")
          },
          nextAll: function(e) {
              return k(e, "nextSibling")
          },
          prevAll: function(e) {
              return k(e, "previousSibling")
          },
          nextUntil: function(e, t, n) {
              return k(e, "nextSibling", n)
          },
          prevUntil: function(e, t, n) {
              return k(e, "previousSibling", n)
          },
          siblings: function(e) {
              return S((e.parentNode || {}).firstChild, e)
          },
          children: function(e) {
              return S(e.firstChild)
          },
          contents: function(e) {
              return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
          }
      }, (function(e, t) {
          w.fn[e] = function(n, r) {
              var i = w.map(this, t, n);
              return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
          }
      }));
      var M = /[^\x20\t\r\n\f]+/g;
  
      function R(e) {
          return e
      }
  
      function I(e) {
          throw e
      }
  
      function W(e, t, n, r) {
          var i;
          try {
              e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
          } catch (e) {
              n.apply(void 0, [e])
          }
      }
      w.Callbacks = function(e) {
          e = "string" == typeof e ? function(e) {
              var t = {};
              return w.each(e.match(M) || [], (function(e, n) {
                  t[n] = !0
              })), t
          }(e) : w.extend({}, e);
          var t, n, r, i, o = [],
              a = [],
              s = -1,
              u = function() {
                  for (i = i || e.once, r = t = !0; a.length; s = -1)
                      for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                  e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
              },
              l = {
                  add: function() {
                      return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                          w.each(n, (function(n, r) {
                              g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                          }))
                      }(arguments), n && !t && u()), this
                  },
                  remove: function() {
                      return w.each(arguments, (function(e, t) {
                          for (var n;
                              (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                      })), this
                  },
                  has: function(e) {
                      return e ? w.inArray(e, o) > -1 : o.length > 0
                  },
                  empty: function() {
                      return o && (o = []), this
                  },
                  disable: function() {
                      return i = a = [], o = n = "", this
                  },
                  disabled: function() {
                      return !o
                  },
                  lock: function() {
                      return i = a = [], n || t || (o = n = ""), this
                  },
                  locked: function() {
                      return !!i
                  },
                  fireWith: function(e, n) {
                      return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                  },
                  fire: function() {
                      return l.fireWith(this, arguments), this
                  },
                  fired: function() {
                      return !!r
                  }
              };
          return l
      }, w.extend({
          Deferred: function(t) {
              var n = [
                      ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                      ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                      ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                  ],
                  r = "pending",
                  i = {
                      state: function() {
                          return r
                      },
                      always: function() {
                          return o.done(arguments).fail(arguments), this
                      },
                      catch: function(e) {
                          return i.then(null, e)
                      },
                      pipe: function() {
                          var e = arguments;
                          return w.Deferred((function(t) {
                              w.each(n, (function(n, r) {
                                  var i = g(e[r[4]]) && e[r[4]];
                                  o[r[1]]((function() {
                                      var e = i && i.apply(this, arguments);
                                      e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                  }))
                              })), e = null
                          })).promise()
                      },
                      then: function(t, r, i) {
                          var o = 0;
  
                          function a(t, n, r, i) {
                              return function() {
                                  var s = this,
                                      u = arguments,
                                      l = function() {
                                          var e, l;
                                          if (!(t < o)) {
                                              if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                              l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, R, i), a(o, n, I, i)) : (o++, l.call(e, a(o, n, R, i), a(o, n, I, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                          }
                                      },
                                      c = i ? l : function() {
                                          try {
                                              l()
                                          } catch (e) {
                                              w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== I && (s = void 0, u = [e]), n.rejectWith(s, u))
                                          }
                                      };
                                  t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                              }
                          }
                          return w.Deferred((function(e) {
                              n[0][3].add(a(0, e, g(i) ? i : R, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : R)), n[2][3].add(a(0, e, g(r) ? r : I))
                          })).promise()
                      },
                      promise: function(e) {
                          return null != e ? w.extend(e, i) : i
                      }
                  },
                  o = {};
              return w.each(n, (function(e, t) {
                  var a = t[2],
                      s = t[5];
                  i[t[1]] = a.add, s && a.add((function() {
                      r = s
                  }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                      return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                  }, o[t[0] + "With"] = a.fireWith
              })), i.promise(o), t && t.call(o, o), o
          },
          when: function(e) {
              var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = o.call(arguments),
                  a = w.Deferred(),
                  s = function(e) {
                      return function(n) {
                          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                      }
                  };
              if (t <= 1 && (W(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
              for (; n--;) W(i[n], s(n), a.reject);
              return a.promise()
          }
      });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      w.Deferred.exceptionHook = function(t, n) {
          e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
      }, w.readyException = function(t) {
          e.setTimeout((function() {
              throw t
          }))
      };
      var F = w.Deferred();
  
      function _() {
          r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
      }
      w.fn.ready = function(e) {
          return F.then(e).catch((function(e) {
              w.readyException(e)
          })), this
      }, w.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(e) {
              (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
          }
      }), w.ready.then = F.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
      var z = function(e, t, n, r, i, o, a) {
              var s = 0,
                  u = e.length,
                  l = null == n;
              if ("object" === x(n))
                  for (s in i = !0, n) z(e, t, s, n[s], !0, o, a);
              else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                      return l.call(w(e), n)
                  })), t))
                  for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
          },
          X = /^-ms-/,
          U = /-([a-z])/g;
  
      function V(e, t) {
          return t.toUpperCase()
      }
  
      function G(e) {
          return e.replace(X, "ms-").replace(U, V)
      }
      var Y = function(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
  
      function Q() {
          this.expando = w.expando + Q.uid++
      }
      Q.uid = 1, Q.prototype = {
          cache: function(e) {
              var t = e[this.expando];
              return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                  value: t,
                  configurable: !0
              }))), t
          },
          set: function(e, t, n) {
              var r, i = this.cache(e);
              if ("string" == typeof t) i[G(t)] = n;
              else
                  for (r in t) i[G(r)] = t[r];
              return i
          },
          get: function(e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
          },
          access: function(e, t, n) {
              return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
          },
          remove: function(e, t) {
              var n, r = e[this.expando];
              if (void 0 !== r) {
                  if (void 0 !== t) {
                      n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                      for (; n--;) delete r[t[n]]
                  }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
              }
          },
          hasData: function(e) {
              var t = e[this.expando];
              return void 0 !== t && !w.isEmptyObject(t)
          }
      };
      var J = new Q,
          K = new Q,
          Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ee = /[A-Z]/g;
  
      function te(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
              if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                  try {
                      n = function(e) {
                          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                      }(n)
                  } catch (e) {}
                  K.set(e, t, n)
              } else n = void 0;
          return n
      }
      w.extend({
          hasData: function(e) {
              return K.hasData(e) || J.hasData(e)
          },
          data: function(e, t, n) {
              return K.access(e, t, n)
          },
          removeData: function(e, t) {
              K.remove(e, t)
          },
          _data: function(e, t, n) {
              return J.access(e, t, n)
          },
          _removeData: function(e, t) {
              J.remove(e, t)
          }
      }), w.fn.extend({
          data: function(e, t) {
              var n, r, i, o = this[0],
                  a = o && o.attributes;
              if (void 0 === e) {
                  if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                      for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), te(o, r, i[r]));
                      J.set(o, "hasDataAttrs", !0)
                  }
                  return i
              }
              return "object" == typeof e ? this.each((function() {
                  K.set(this, e)
              })) : z(this, (function(t) {
                  var n;
                  if (o && void 0 === t) return void 0 !== (n = K.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                  this.each((function() {
                      K.set(this, e, t)
                  }))
              }), null, t, arguments.length > 1, null, !0)
          },
          removeData: function(e) {
              return this.each((function() {
                  K.remove(this, e)
              }))
          }
      }), w.extend({
          queue: function(e, t, n) {
              var r;
              if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
          },
          dequeue: function(e, t) {
              t = t || "fx";
              var n = w.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = w._queueHooks(e, t);
              "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                  w.dequeue(e, t)
              }), o)), !r && o && o.empty.fire()
          },
          _queueHooks: function(e, t) {
              var n = t + "queueHooks";
              return J.get(e, n) || J.access(e, n, {
                  empty: w.Callbacks("once memory").add((function() {
                      J.remove(e, [t + "queue", n])
                  }))
              })
          }
      }), w.fn.extend({
          queue: function(e, t) {
              var n = 2;
              return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                  var n = w.queue(this, e, t);
                  w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
              }))
          },
          dequeue: function(e) {
              return this.each((function() {
                  w.dequeue(this, e)
              }))
          },
          clearQueue: function(e) {
              return this.queue(e || "fx", [])
          },
          promise: function(e, t) {
              var n, r = 1,
                  i = w.Deferred(),
                  o = this,
                  a = this.length,
                  s = function() {
                      --r || i.resolveWith(o, [o])
                  };
              for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
              return s(), i.promise(t)
          }
      });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
          ie = ["Top", "Right", "Bottom", "Left"],
          oe = function(e, t) {
              return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
          },
          ae = function(e, t, n, r) {
              var i, o, a = {};
              for (o in t) a[o] = e.style[o], e.style[o] = t[o];
              for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
              return i
          };
  
      function se(e, t, n, r) {
          var i, o, a = 20,
              s = r ? function() {
                  return r.cur()
              } : function() {
                  return w.css(e, t, "")
              },
              u = s(),
              l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
              c = (w.cssNumber[t] || "px" !== l && +u) && re.exec(w.css(e, t));
          if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
              c *= 2, w.style(e, t, c + l), n = n || []
          }
          return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
      }
      var ue = {};
  
      function le(e) {
          var t, n = e.ownerDocument,
              r = e.nodeName,
              i = ue[r];
          return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
      }
  
      function ce(e, t) {
          for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && oe(r) && (i[o] = le(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
          for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
          return e
      }
      w.fn.extend({
          show: function() {
              return ce(this, !0)
          },
          hide: function() {
              return ce(this)
          },
          toggle: function(e) {
              return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                  oe(this) ? w(this).show() : w(this).hide()
              }))
          }
      });
      var fe = /^(?:checkbox|radio)$/i,
          pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          de = /^$|^module$|\/(?:java|ecma)script/i,
          he = {
              option: [1, "<select multiple='multiple'>", "</select>"],
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""]
          };
  
      function ge(e, t) {
          var n;
          return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
      }
  
      function ve(e, t) {
          for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
      }
      he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
      var ye, me, xe = /<|&#?\w+;/;
  
      function be(e, t, n, r, i) {
          for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
              if ((o = e[d]) || 0 === o)
                  if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                  else if (xe.test(o)) {
              for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
              w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
          } else p.push(t.createTextNode(o));
          for (f.textContent = "", d = 0; o = p[d++];)
              if (r && w.inArray(o, r) > -1) i && i.push(o);
              else if (l = w.contains(o.ownerDocument, o), a = ge(f.appendChild(o), "script"), l && ve(a), n)
              for (c = 0; o = a[c++];) de.test(o.type || "") && n.push(o);
          return f
      }
      ye = r.createDocumentFragment().appendChild(r.createElement("div")), (me = r.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ye.appendChild(me), h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
      var we = r.documentElement,
          Te = /^key/,
          Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ee = /^([^.]*)(?:\.(.+)|)/;
  
      function ke() {
          return !0
      }
  
      function Se() {
          return !1
      }
  
      function De() {
          try {
              return r.activeElement
          } catch (e) {}
      }
  
      function Ne(e, t, n, r, i, o) {
          var a, s;
          if ("object" == typeof t) {
              for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], o);
              return e
          }
          if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
          else if (!i) return e;
          return 1 === o && (a = i, i = function(e) {
              return w().off(e), a.apply(this, arguments)
          }, i.guid = a.guid || (a.guid = w.guid++)), e.each((function() {
              w.event.add(this, t, i, r, n)
          }))
      }
      w.event = {
          global: {},
          add: function(e, t, n, r, i) {
              var o, a, s, u, l, c, f, p, d, h, g, v = J.get(e);
              if (v)
                  for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(we, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                          return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                      }), l = (t = (t || "").match(M) || [""]).length; l--;) d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && w.expr.match.needsContext.test(i),
                      namespace: h.join(".")
                  }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
          },
          remove: function(e, t, n, r, i) {
              var o, a, s, u, l, c, f, p, d, h, g, v = J.hasData(e) && J.get(e);
              if (v && (u = v.events)) {
                  for (l = (t = (t || "").match(M) || [""]).length; l--;)
                      if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                          for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
                      } else
                          for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                  w.isEmptyObject(u) && J.remove(e, "handle events")
              }
          },
          dispatch: function(e) {
              var t, n, r, i, o, a, s = w.event.fix(e),
                  u = new Array(arguments.length),
                  l = (J.get(this, "events") || {})[s.type] || [],
                  c = w.event.special[s.type] || {};
              for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
              if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                  for (a = w.event.handlers.call(this, s, l), t = 0;
                      (i = a[t++]) && !s.isPropagationStopped();)
                      for (s.currentTarget = i.elem, n = 0;
                          (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                  return c.postDispatch && c.postDispatch.call(this, s), s.result
              }
          },
          handlers: function(e, t) {
              var n, r, i, o, a, s = [],
                  u = t.delegateCount,
                  l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                  for (; l !== this; l = l.parentNode || this)
                      if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                          for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                          o.length && s.push({
                              elem: l,
                              handlers: o
                          })
                      } return l = this, u < t.length && s.push({
                  elem: l,
                  handlers: t.slice(u)
              }), s
          },
          addProp: function(e, t) {
              Object.defineProperty(w.Event.prototype, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: g(t) ? function() {
                      if (this.originalEvent) return t(this.originalEvent)
                  } : function() {
                      if (this.originalEvent) return this.originalEvent[e]
                  },
                  set: function(t) {
                      Object.defineProperty(this, e, {
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                          value: t
                      })
                  }
              })
          },
          fix: function(e) {
              return e[w.expando] ? e : new w.Event(e)
          },
          special: {
              load: {
                  noBubble: !0
              },
              focus: {
                  trigger: function() {
                      if (this !== De() && this.focus) return this.focus(), !1
                  },
                  delegateType: "focusin"
              },
              blur: {
                  trigger: function() {
                      if (this === De() && this.blur) return this.blur(), !1
                  },
                  delegateType: "focusout"
              },
              click: {
                  trigger: function() {
                      if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                  },
                  _default: function(e) {
                      return N(e.target, "a")
                  }
              },
              beforeunload: {
                  postDispatch: function(e) {
                      void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                  }
              }
          }
      }, w.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n)
      }, w.Event = function(e, t) {
          if (!(this instanceof w.Event)) return new w.Event(e, t);
          e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
      }, w.Event.prototype = {
          constructor: w.Event,
          isDefaultPrevented: Se,
          isPropagationStopped: Se,
          isImmediatePropagationStopped: Se,
          isSimulated: !1,
          preventDefault: function() {
              var e = this.originalEvent;
              this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
          },
          stopPropagation: function() {
              var e = this.originalEvent;
              this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
          },
          stopImmediatePropagation: function() {
              var e = this.originalEvent;
              this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
          }
      }, w.each({
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
          which: function(e) {
              var t = e.button;
              return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
          }
      }, w.event.addProp), w.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
      }, (function(e, t) {
          w.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                  var n, r = e.relatedTarget,
                      i = e.handleObj;
                  return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
              }
          }
      })), w.fn.extend({
          on: function(e, t, n, r) {
              return Ne(this, e, t, n, r)
          },
          one: function(e, t, n, r) {
              return Ne(this, e, t, n, r, 1)
          },
          off: function(e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
              if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this
              }
              return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each((function() {
                  w.event.remove(this, e, n, t)
              }))
          }
      });
      var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          je = /<script|<style|<link/i,
          qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  
      function He(e, t) {
          return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
      }
  
      function Oe(e) {
          return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }
  
      function Pe(e) {
          return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
      }
  
      function Me(e, t) {
          var n, r, i, o, a, s, u, l;
          if (1 === t.nodeType) {
              if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events))
                  for (i in delete a.handle, a.events = {}, l)
                      for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
              K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
          }
      }
  
      function Re(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }
  
      function Ie(e, t, n, r) {
          t = a.apply([], t);
          var i, o, s, u, l, c, f = 0,
              p = e.length,
              d = p - 1,
              v = t[0],
              y = g(v);
          if (y || p > 1 && "string" == typeof v && !h.checkClone && qe.test(v)) return e.each((function(i) {
              var o = e.eq(i);
              y && (t[0] = v.call(this, i, o.html())), Ie(o, t, n, r)
          }));
          if (p && (o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
              for (u = (s = w.map(ge(i, "script"), Oe)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ge(l, "script"))), n.call(e[f], l, f);
              if (u)
                  for (c = s[s.length - 1].ownerDocument, w.map(s, Pe), f = 0; f < u; f++) l = s[f], de.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(Le, ""), c, l))
          }
          return e
      }
  
      function $e(e, t, n) {
          for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ge(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
          return e
      }
      w.extend({
          htmlPrefilter: function(e) {
              return e.replace(Ae, "<$1></$2>")
          },
          clone: function(e, t, n) {
              var r, i, o, a, s = e.cloneNode(!0),
                  u = w.contains(e.ownerDocument, e);
              if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                  for (a = ge(s), r = 0, i = (o = ge(e)).length; r < i; r++) Re(o[r], a[r]);
              if (t)
                  if (n)
                      for (o = o || ge(e), a = a || ge(s), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                  else Me(e, s);
              return (a = ge(s, "script")).length > 0 && ve(a, !u && ge(e, "script")), s
          },
          cleanData: function(e) {
              for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                  if (Y(n)) {
                      if (t = n[J.expando]) {
                          if (t.events)
                              for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                          n[J.expando] = void 0
                      }
                      n[K.expando] && (n[K.expando] = void 0)
                  }
          }
      }), w.fn.extend({
          detach: function(e) {
              return $e(this, e, !0)
          },
          remove: function(e) {
              return $e(this, e)
          },
          text: function(e) {
              return z(this, (function(e) {
                  return void 0 === e ? w.text(this) : this.empty().each((function() {
                      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                  }))
              }), null, e, arguments.length)
          },
          append: function() {
              return Ie(this, arguments, (function(e) {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e)
              }))
          },
          prepend: function() {
              return Ie(this, arguments, (function(e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var t = He(this, e);
                      t.insertBefore(e, t.firstChild)
                  }
              }))
          },
          before: function() {
              return Ie(this, arguments, (function(e) {
                  this.parentNode && this.parentNode.insertBefore(e, this)
              }))
          },
          after: function() {
              return Ie(this, arguments, (function(e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
              }))
          },
          empty: function() {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
              return this
          },
          clone: function(e, t) {
              return e = null != e && e, t = null == t ? e : t, this.map((function() {
                  return w.clone(this, e, t)
              }))
          },
          html: function(e) {
              return z(this, (function(e) {
                  var t = this[0] || {},
                      n = 0,
                      r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if ("string" == typeof e && !je.test(e) && !he[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                      e = w.htmlPrefilter(e);
                      try {
                          for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                          t = 0
                      } catch (e) {}
                  }
                  t && this.empty().append(e)
              }), null, e, arguments.length)
          },
          replaceWith: function() {
              var e = [];
              return Ie(this, arguments, (function(t) {
                  var n = this.parentNode;
                  w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
              }), e)
          }
      }), w.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
      }, (function(e, t) {
          w.fn[e] = function(e) {
              for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
              return this.pushStack(r)
          }
      }));
      var We = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
          Be = function(t) {
              var n = t.ownerDocument.defaultView;
              return n && n.opener || (n = e), n.getComputedStyle(t)
          },
          Fe = new RegExp(ie.join("|"), "i");
  
      function _e(e, t, n) {
          var r, i, o, a, s = e.style;
          return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
      }
  
      function ze(e, t) {
          return {
              get: function() {
                  if (!e()) return (this.get = t).apply(this, arguments);
                  delete this.get
              }
          }
      }! function() {
          function t() {
              if (c) {
                  l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(l).appendChild(c);
                  var t = e.getComputedStyle(c);
                  i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", we.removeChild(l), c = null
              }
          }
  
          function n(e) {
              return Math.round(parseFloat(e))
          }
          var i, o, a, s, u, l = r.createElement("div"),
              c = r.createElement("div");
          c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
              boxSizingReliable: function() {
                  return t(), o
              },
              pixelBoxStyles: function() {
                  return t(), s
              },
              pixelPosition: function() {
                  return t(), i
              },
              reliableMarginLeft: function() {
                  return t(), u
              },
              scrollboxSize: function() {
                  return t(), a
              }
          }))
      }();
      var Xe = /^(none|table(?!-c[ea]).+)/,
          Ue = /^--/,
          Ve = {
              position: "absolute",
              visibility: "hidden",
              display: "block"
          },
          Ge = {
              letterSpacing: "0",
              fontWeight: "400"
          },
          Ye = ["Webkit", "Moz", "ms"],
          Qe = r.createElement("div").style;
  
      function Je(e) {
          var t = w.cssProps[e];
          return t || (t = w.cssProps[e] = function(e) {
              if (e in Qe) return e;
              for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
                  if ((e = Ye[n] + t) in Qe) return e
          }(e) || e), t
      }
  
      function Ke(e, t, n) {
          var r = re.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
      }
  
      function Ze(e, t, n, r, i, o) {
          var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + ie[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + ie[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ie[a] + "Width", !0, i))) : (u += w.css(e, "padding" + ie[a], !0, i), "padding" !== n ? u += w.css(e, "border" + ie[a] + "Width", !0, i) : s += w.css(e, "border" + ie[a] + "Width", !0, i));
          return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
      }
  
      function et(e, t, n) {
          var r = Be(e),
              i = _e(e, t, r),
              o = "border-box" === w.css(e, "boxSizing", !1, r),
              a = o;
          if (We.test(i)) {
              if (!n) return i;
              i = "auto"
          }
          return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
      }
  
      function tt(e, t, n, r, i) {
          return new tt.prototype.init(e, t, n, r, i)
      }
      w.extend({
          cssHooks: {
              opacity: {
                  get: function(e, t) {
                      if (t) {
                          var n = _e(e, "opacity");
                          return "" === n ? "1" : n
                      }
                  }
              }
          },
          cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0
          },
          cssProps: {},
          style: function(e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var i, o, a, s = G(t),
                      u = Ue.test(t),
                      l = e.style;
                  if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                  "string" === (o = typeof n) && (i = re.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
              }
          },
          css: function(e, t, n, r) {
              var i, o, a, s = G(t);
              return Ue.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
          }
      }), w.each(["height", "width"], (function(e, t) {
          w.cssHooks[t] = {
              get: function(e, n, r) {
                  if (n) return !Xe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ae(e, Ve, (function() {
                      return et(e, t, r)
                  }))
              },
              set: function(e, n, r) {
                  var i, o = Be(e),
                      a = "border-box" === w.css(e, "boxSizing", !1, o),
                      s = r && Ze(e, t, r, a, o);
                  return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, s)
              }
          }
      })), w.cssHooks.marginLeft = ze(h.reliableMarginLeft, (function(e, t) {
          if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
              marginLeft: 0
          }, (function() {
              return e.getBoundingClientRect().left
          }))) + "px"
      })), w.each({
          margin: "",
          padding: "",
          border: "Width"
      }, (function(e, t) {
          w.cssHooks[e + t] = {
              expand: function(n) {
                  for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                  return i
              }
          }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
      })), w.fn.extend({
          css: function(e, t) {
              return z(this, (function(e, t, n) {
                  var r, i, o = {},
                      a = 0;
                  if (Array.isArray(t)) {
                      for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                      return o
                  }
                  return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
              }), e, t, arguments.length > 1)
          }
      }), w.Tween = tt, tt.prototype = {
          constructor: tt,
          init: function(e, t, n, r, i, o) {
              this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
          },
          cur: function() {
              var e = tt.propHooks[this.prop];
              return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
          },
          run: function(e) {
              var t, n = tt.propHooks[this.prop];
              return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
          }
      }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
          _default: {
              get: function(e) {
                  var t;
                  return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
              },
              set: function(e) {
                  w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
              }
          }
      }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
          set: function(e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
          }
      }, w.easing = {
          linear: function(e) {
              return e
          },
          swing: function(e) {
              return .5 - Math.cos(e * Math.PI) / 2
          },
          _default: "swing"
      }, w.fx = tt.prototype.init, w.fx.step = {};
      var nt, rt, it = /^(?:toggle|show|hide)$/,
          ot = /queueHooks$/;
  
      function at() {
          rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
      }
  
      function st() {
          return e.setTimeout((function() {
              nt = void 0
          })), nt = Date.now()
      }
  
      function ut(e, t) {
          var n, r = 0,
              i = {
                  height: e
              };
          for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i
      }
  
      function lt(e, t, n) {
          for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, a = i.length; o < a; o++)
              if (r = i[o].call(n, t, e)) return r
      }
  
      function ct(e, t, n) {
          var r, i, o = 0,
              a = ct.prefilters.length,
              s = w.Deferred().always((function() {
                  delete u.elem
              })),
              u = function() {
                  if (i) return !1;
                  for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                  return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
              },
              l = s.promise({
                  elem: e,
                  props: w.extend({}, t),
                  opts: w.extend(!0, {
                      specialEasing: {},
                      easing: w.easing._default
                  }, n),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: nt || st(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function(t, n) {
                      var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                      return l.tweens.push(r), r
                  },
                  stop: function(t) {
                      var n = 0,
                          r = t ? l.tweens.length : 0;
                      if (i) return this;
                      for (i = !0; n < r; n++) l.tweens[n].run(1);
                      return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                  }
              }),
              c = l.props;
          for (! function(e, t) {
                  var n, r, i, o, a;
                  for (n in e)
                      if (i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                          for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                      else t[r] = i
              }(c, l.opts.specialEasing); o < a; o++)
              if (r = ct.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
          return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
              elem: e,
              anim: l,
              queue: l.opts.queue
          })), l
      }
      w.Animation = w.extend(ct, {
              tweeners: {
                  "*": [function(e, t) {
                      var n = this.createTween(e, t);
                      return se(n.elem, e, re.exec(t), n), n
                  }]
              },
              tweener: function(e, t) {
                  g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                  for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
              },
              prefilters: [function(e, t, n) {
                  var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                      p = this,
                      d = {},
                      h = e.style,
                      g = e.nodeType && oe(e),
                      v = J.get(e, "fxshow");
                  for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                          a.unqueued || s()
                      }), a.unqueued++, p.always((function() {
                          p.always((function() {
                              a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                          }))
                      }))), t)
                      if (i = t[r], it.test(i)) {
                          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                              if ("show" !== i || !v || void 0 === v[r]) continue;
                              g = !0
                          }
                          d[r] = v && v[r] || w.style(e, r)
                      } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                      for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (ce([e], !0), l = e.style.display || l, c = w.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done((function() {
                              h.display = l
                          })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                          }))), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = J.access(e, "fxshow", {
                          display: l
                      }), o && (v.hidden = !g), g && ce([e], !0), p.done((function() {
                          for (r in g || ce([e]), J.remove(e, "fxshow"), d) w.style(e, r, d[r])
                      }))), u = lt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
              }],
              prefilter: function(e, t) {
                  t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
              }
          }), w.speed = function(e, t, n) {
              var r = e && "object" == typeof e ? w.extend({}, e) : {
                  complete: n || !n && t || g(e) && e,
                  duration: e,
                  easing: n && t || t && !g(t) && t
              };
              return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                  g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
              }, r
          }, w.fn.extend({
              fadeTo: function(e, t, n, r) {
                  return this.filter(oe).css("opacity", 0).show().end().animate({
                      opacity: t
                  }, e, n, r)
              },
              animate: function(e, t, n, r) {
                  var i = w.isEmptyObject(e),
                      o = w.speed(t, n, r),
                      a = function() {
                          var t = ct(this, w.extend({}, e), o);
                          (i || J.get(this, "finish")) && t.stop(!0)
                      };
                  return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
              },
              stop: function(e, t, n) {
                  var r = function(e) {
                      var t = e.stop;
                      delete e.stop, t(n)
                  };
                  return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                      var t = !0,
                          i = null != e && e + "queueHooks",
                          o = w.timers,
                          a = J.get(this);
                      if (i) a[i] && a[i].stop && r(a[i]);
                      else
                          for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                      for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                      !t && n || w.dequeue(this, e)
                  }))
              },
              finish: function(e) {
                  return !1 !== e && (e = e || "fx"), this.each((function() {
                      var t, n = J.get(this),
                          r = n[e + "queue"],
                          i = n[e + "queueHooks"],
                          o = w.timers,
                          a = r ? r.length : 0;
                      for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                      for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                      delete n.finish
                  }))
              }
          }), w.each(["toggle", "show", "hide"], (function(e, t) {
              var n = w.fn[t];
              w.fn[t] = function(e, r, i) {
                  return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
              }
          })), w.each({
              slideDown: ut("show"),
              slideUp: ut("hide"),
              slideToggle: ut("toggle"),
              fadeIn: {
                  opacity: "show"
              },
              fadeOut: {
                  opacity: "hide"
              },
              fadeToggle: {
                  opacity: "toggle"
              }
          }, (function(e, t) {
              w.fn[e] = function(e, n, r) {
                  return this.animate(t, e, n, r)
              }
          })), w.timers = [], w.fx.tick = function() {
              var e, t = 0,
                  n = w.timers;
              for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || w.fx.stop(), nt = void 0
          }, w.fx.timer = function(e) {
              w.timers.push(e), w.fx.start()
          }, w.fx.interval = 13, w.fx.start = function() {
              rt || (rt = !0, at())
          }, w.fx.stop = function() {
              rt = null
          }, w.fx.speeds = {
              slow: 600,
              fast: 200,
              _default: 400
          }, w.fn.delay = function(t, n) {
              return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
                  var i = e.setTimeout(n, t);
                  r.stop = function() {
                      e.clearTimeout(i)
                  }
              }))
          },
          function() {
              var e = r.createElement("input"),
                  t = r.createElement("select").appendChild(r.createElement("option"));
              e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
          }();
      var ft, pt = w.expr.attrHandle;
      w.fn.extend({
          attr: function(e, t) {
              return z(this, w.attr, e, t, arguments.length > 1)
          },
          removeAttr: function(e) {
              return this.each((function() {
                  w.removeAttr(this, e)
              }))
          }
      }), w.extend({
          attr: function(e, t, n) {
              var r, i, o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
          },
          attrHooks: {
              type: {
                  set: function(e, t) {
                      if (!h.radioValue && "radio" === t && N(e, "input")) {
                          var n = e.value;
                          return e.setAttribute("type", t), n && (e.value = n), t
                      }
                  }
              }
          },
          removeAttr: function(e, t) {
              var n, r = 0,
                  i = t && t.match(M);
              if (i && 1 === e.nodeType)
                  for (; n = i[r++];) e.removeAttribute(n)
          }
      }), ft = {
          set: function(e, t, n) {
              return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
          }
      }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
          var n = pt[t] || w.find.attr;
          pt[t] = function(e, t, r) {
              var i, o, a = t.toLowerCase();
              return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i
          }
      }));
      var dt = /^(?:input|select|textarea|button)$/i,
          ht = /^(?:a|area)$/i;
  
      function gt(e) {
          return (e.match(M) || []).join(" ")
      }
  
      function vt(e) {
          return e.getAttribute && e.getAttribute("class") || ""
      }
  
      function yt(e) {
          return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
      }
      w.fn.extend({
          prop: function(e, t) {
              return z(this, w.prop, e, t, arguments.length > 1)
          },
          removeProp: function(e) {
              return this.each((function() {
                  delete this[w.propFix[e] || e]
              }))
          }
      }), w.extend({
          prop: function(e, t, n) {
              var r, i, o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
          },
          propHooks: {
              tabIndex: {
                  get: function(e) {
                      var t = w.find.attr(e, "tabindex");
                      return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                  }
              }
          },
          propFix: {
              for: "htmlFor",
              class: "className"
          }
      }), h.optSelected || (w.propHooks.selected = {
          get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null
          },
          set: function(e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
          }
      }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
          w.propFix[this.toLowerCase()] = this
      })), w.fn.extend({
          addClass: function(e) {
              var t, n, r, i, o, a, s, u = 0;
              if (g(e)) return this.each((function(t) {
                  w(this).addClass(e.call(this, t, vt(this)))
              }));
              if ((t = yt(e)).length)
                  for (; n = this[u++];)
                      if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                          for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                          i !== (s = gt(r)) && n.setAttribute("class", s)
                      } return this
          },
          removeClass: function(e) {
              var t, n, r, i, o, a, s, u = 0;
              if (g(e)) return this.each((function(t) {
                  w(this).removeClass(e.call(this, t, vt(this)))
              }));
              if (!arguments.length) return this.attr("class", "");
              if ((t = yt(e)).length)
                  for (; n = this[u++];)
                      if (i = vt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
                          for (a = 0; o = t[a++];)
                              for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                          i !== (s = gt(r)) && n.setAttribute("class", s)
                      } return this
          },
          toggleClass: function(e, t) {
              var n = typeof e,
                  r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                  w(this).toggleClass(e.call(this, n, vt(this), t), t)
              })) : this.each((function() {
                  var t, i, o, a;
                  if (r)
                      for (i = 0, o = w(this), a = yt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else void 0 !== e && "boolean" !== n || ((t = vt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
              }))
          },
          hasClass: function(e) {
              var t, n, r = 0;
              for (t = " " + e + " "; n = this[r++];)
                  if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
              return !1
          }
      });
      var mt = /\r/g;
      w.fn.extend({
          val: function(e) {
              var t, n, r, i = this[0];
              return arguments.length ? (r = g(e), this.each((function(n) {
                  var i;
                  1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                      return null == e ? "" : e + ""
                  }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
              }))) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(mt, "") : null == n ? "" : n : void 0
          }
      }), w.extend({
          valHooks: {
              option: {
                  get: function(e) {
                      var t = w.find.attr(e, "value");
                      return null != t ? t : gt(w.text(e))
                  }
              },
              select: {
                  get: function(e) {
                      var t, n, r, i = e.options,
                          o = e.selectedIndex,
                          a = "select-one" === e.type,
                          s = a ? null : [],
                          u = a ? o + 1 : i.length;
                      for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                          if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                              if (t = w(n).val(), a) return t;
                              s.push(t)
                          } return s
                  },
                  set: function(e, t) {
                      for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                      return n || (e.selectedIndex = -1), o
                  }
              }
          }
      }), w.each(["radio", "checkbox"], (function() {
          w.valHooks[this] = {
              set: function(e, t) {
                  if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
              }
          }, h.checkOn || (w.valHooks[this].get = function(e) {
              return null === e.getAttribute("value") ? "on" : e.value
          })
      })), h.focusin = "onfocusin" in e;
      var xt = /^(?:focusinfocus|focusoutblur)$/,
          bt = function(e) {
              e.stopPropagation()
          };
      w.extend(w.event, {
          trigger: function(t, n, i, o) {
              var a, s, u, l, c, p, d, h, y = [i || r],
                  m = f.call(t, "type") ? t.type : t,
                  x = f.call(t, "namespace") ? t.namespace.split(".") : [];
              if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                  if (!o && !d.noBubble && !v(i)) {
                      for (l = d.delegateType || m, xt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) y.push(s), u = s;
                      u === (i.ownerDocument || r) && y.push(u.defaultView || u.parentWindow || e)
                  }
                  for (a = 0;
                      (s = y[a++]) && !t.isPropagationStopped();) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                  return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(y.pop(), n) || !Y(i) || c && g(i[m]) && !v(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, bt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, bt), w.event.triggered = void 0, u && (i[c] = u)), t.result
              }
          },
          simulate: function(e, t, n) {
              var r = w.extend(new w.Event, n, {
                  type: e,
                  isSimulated: !0
              });
              w.event.trigger(r, null, t)
          }
      }), w.fn.extend({
          trigger: function(e, t) {
              return this.each((function() {
                  w.event.trigger(e, t, this)
              }))
          },
          triggerHandler: function(e, t) {
              var n = this[0];
              if (n) return w.event.trigger(e, t, n, !0)
          }
      }), h.focusin || w.each({
          focus: "focusin",
          blur: "focusout"
      }, (function(e, t) {
          var n = function(e) {
              w.event.simulate(t, e.target, w.event.fix(e))
          };
          w.event.special[t] = {
              setup: function() {
                  var r = this.ownerDocument || this,
                      i = J.access(r, t);
                  i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
              },
              teardown: function() {
                  var r = this.ownerDocument || this,
                      i = J.access(r, t) - 1;
                  i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
              }
          }
      }));
      var wt = e.location,
          Tt = Date.now(),
          Ct = /\?/;
      w.parseXML = function(t) {
          var n;
          if (!t || "string" != typeof t) return null;
          try {
              n = (new e.DOMParser).parseFromString(t, "text/xml")
          } catch (e) {
              n = void 0
          }
          return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
      };
      var Et = /\[\]$/,
          kt = /\r?\n/g,
          St = /^(?:submit|button|image|reset|file)$/i,
          Dt = /^(?:input|select|textarea|keygen)/i;
  
      function Nt(e, t, n, r) {
          var i;
          if (Array.isArray(t)) w.each(t, (function(t, i) {
              n || Et.test(e) ? r(e, i) : Nt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
          }));
          else if (n || "object" !== x(t)) r(e, t);
          else
              for (i in t) Nt(e + "[" + i + "]", t[i], n, r)
      }
      w.param = function(e, t) {
          var n, r = [],
              i = function(e, t) {
                  var n = g(t) ? t() : t;
                  r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
              };
          if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
              i(this.name, this.value)
          }));
          else
              for (n in e) Nt(n, e[n], t, i);
          return r.join("&")
      }, w.fn.extend({
          serialize: function() {
              return w.param(this.serializeArray())
          },
          serializeArray: function() {
              return this.map((function() {
                  var e = w.prop(this, "elements");
                  return e ? w.makeArray(e) : this
              })).filter((function() {
                  var e = this.type;
                  return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !St.test(e) && (this.checked || !fe.test(e))
              })).map((function(e, t) {
                  var n = w(this).val();
                  return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                      return {
                          name: t.name,
                          value: e.replace(kt, "\r\n")
                      }
                  })) : {
                      name: t.name,
                      value: n.replace(kt, "\r\n")
                  }
              })).get()
          }
      });
      var At = /%20/g,
          jt = /#.*$/,
          qt = /([?&])_=[^&]*/,
          Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ht = /^(?:GET|HEAD)$/,
          Ot = /^\/\//,
          Pt = {},
          Mt = {},
          Rt = "*/".concat("*"),
          It = r.createElement("a");
  
      function $t(e) {
          return function(t, n) {
              "string" != typeof t && (n = t, t = "*");
              var r, i = 0,
                  o = t.toLowerCase().match(M) || [];
              if (g(n))
                  for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
          }
      }
  
      function Wt(e, t, n, r) {
          var i = {},
              o = e === Mt;
  
          function a(s) {
              var u;
              return i[s] = !0, w.each(e[s] || [], (function(e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
              })), u
          }
          return a(t.dataTypes[0]) || !i["*"] && a("*")
      }
  
      function Bt(e, t) {
          var n, r, i = w.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && w.extend(!0, e, r), e
      }
      It.href = wt.href, w.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
              url: wt.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                  "*": Rt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript"
              },
              contents: {
                  xml: /\bxml\b/,
                  html: /\bhtml/,
                  json: /\bjson\b/
              },
              responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON"
              },
              converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": w.parseXML
              },
              flatOptions: {
                  url: !0,
                  context: !0
              }
          },
          ajaxSetup: function(e, t) {
              return t ? Bt(Bt(e, w.ajaxSettings), t) : Bt(w.ajaxSettings, e)
          },
          ajaxPrefilter: $t(Pt),
          ajaxTransport: $t(Mt),
          ajax: function(t, n) {
              "object" == typeof t && (n = t, t = void 0), n = n || {};
              var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                  g = h.context || h,
                  v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                  y = w.Deferred(),
                  m = w.Callbacks("once memory"),
                  x = h.statusCode || {},
                  b = {},
                  T = {},
                  C = "canceled",
                  E = {
                      readyState: 0,
                      getResponseHeader: function(e) {
                          var t;
                          if (c) {
                              if (!s)
                                  for (s = {}; t = Lt.exec(a);) s[t[1].toLowerCase()] = t[2];
                              t = s[e.toLowerCase()]
                          }
                          return null == t ? null : t
                      },
                      getAllResponseHeaders: function() {
                          return c ? a : null
                      },
                      setRequestHeader: function(e, t) {
                          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                      },
                      overrideMimeType: function(e) {
                          return null == c && (h.mimeType = e), this
                      },
                      statusCode: function(e) {
                          var t;
                          if (e)
                              if (c) E.always(e[E.status]);
                              else
                                  for (t in e) x[t] = [x[t], e[t]];
                          return this
                      },
                      abort: function(e) {
                          var t = e || C;
                          return i && i.abort(t), k(0, t), this
                      }
                  };
              if (y.promise(E), h.url = ((t || h.url || wt.href) + "").replace(Ot, wt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                  l = r.createElement("a");
                  try {
                      l.href = h.url, l.href = l.href, h.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host
                  } catch (e) {
                      h.crossDomain = !0
                  }
              }
              if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Wt(Pt, h, n, E), c) return E;
              for (p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), o = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ct.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(qt, "$1"), d = (Ct.test(o) ? "&" : "?") + "_=" + Tt++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
              if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
              if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = Wt(Mt, h, n, E)) {
                  if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
                  h.async && h.timeout > 0 && (u = e.setTimeout((function() {
                      E.abort("timeout")
                  }), h.timeout));
                  try {
                      c = !1, i.send(b, k)
                  } catch (e) {
                      if (c) throw e;
                      k(-1, e)
                  }
              } else k(-1, "No Transport");
  
              function k(t, n, r, s) {
                  var l, p, d, b, T, C = n;
                  c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = function(e, t, n) {
                      for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                      if (r)
                          for (i in s)
                              if (s[i] && s[i].test(r)) {
                                  u.unshift(i);
                                  break
                              } if (u[0] in n) o = u[0];
                      else {
                          for (i in n) {
                              if (!u[0] || e.converters[i + " " + u[0]]) {
                                  o = i;
                                  break
                              }
                              a || (a = i)
                          }
                          o = o || a
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o]
                  }(h, E, r)), b = function(e, t, n, r) {
                      var i, o, a, s, u, l = {},
                          c = e.dataTypes.slice();
                      if (c[1])
                          for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o;)
                          if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                              if ("*" === o) o = u;
                              else if ("*" !== u && u !== o) {
                          if (!(a = l[u + " " + o] || l["* " + o]))
                              for (i in l)
                                  if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                      !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                      break
                                  } if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else try {
                                  t = a(t)
                              } catch (e) {
                                  return {
                                      state: "parsererror",
                                      error: a ? e : "No conversion from " + u + " to " + o
                                  }
                              }
                      }
                      return {
                          state: "success",
                          data: t
                      }
                  }(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
              }
              return E
          },
          getJSON: function(e, t, n) {
              return w.get(e, t, n, "json")
          },
          getScript: function(e, t) {
              return w.get(e, void 0, t, "script")
          }
      }), w.each(["get", "post"], (function(e, t) {
          w[t] = function(e, n, r, i) {
              return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                  url: e,
                  type: t,
                  dataType: i,
                  data: n,
                  success: r
              }, w.isPlainObject(e) && e))
          }
      })), w._evalUrl = function(e) {
          return w.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              throws: !0
          })
      }, w.fn.extend({
          wrapAll: function(e) {
              var t;
              return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                  for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                  return e
              })).append(this)), this
          },
          wrapInner: function(e) {
              return g(e) ? this.each((function(t) {
                  w(this).wrapInner(e.call(this, t))
              })) : this.each((function() {
                  var t = w(this),
                      n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e)
              }))
          },
          wrap: function(e) {
              var t = g(e);
              return this.each((function(n) {
                  w(this).wrapAll(t ? e.call(this, n) : e)
              }))
          },
          unwrap: function(e) {
              return this.parent(e).not("body").each((function() {
                  w(this).replaceWith(this.childNodes)
              })), this
          }
      }), w.expr.pseudos.hidden = function(e) {
          return !w.expr.pseudos.visible(e)
      }, w.expr.pseudos.visible = function(e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, w.ajaxSettings.xhr = function() {
          try {
              return new e.XMLHttpRequest
          } catch (e) {}
      };
      var Ft = {
              0: 200,
              1223: 204
          },
          _t = w.ajaxSettings.xhr();
      h.cors = !!_t && "withCredentials" in _t, h.ajax = _t = !!_t, w.ajaxTransport((function(t) {
          var n, r;
          if (h.cors || _t && !t.crossDomain) return {
              send: function(i, o) {
                  var a, s = t.xhr();
                  if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                      for (a in t.xhrFields) s[a] = t.xhrFields[a];
                  for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                  n = function(e) {
                      return function() {
                          n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                              binary: s.response
                          } : {
                              text: s.responseText
                          }, s.getAllResponseHeaders()))
                      }
                  }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                      4 === s.readyState && e.setTimeout((function() {
                          n && r()
                      }))
                  }, n = n("abort");
                  try {
                      s.send(t.hasContent && t.data || null)
                  } catch (e) {
                      if (n) throw e
                  }
              },
              abort: function() {
                  n && n()
              }
          }
      })), w.ajaxPrefilter((function(e) {
          e.crossDomain && (e.contents.script = !1)
      })), w.ajaxSetup({
          accepts: {
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
              script: /\b(?:java|ecma)script\b/
          },
          converters: {
              "text script": function(e) {
                  return w.globalEval(e), e
              }
          }
      }), w.ajaxPrefilter("script", (function(e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      })), w.ajaxTransport("script", (function(e) {
          var t, n;
          if (e.crossDomain) return {
              send: function(i, o) {
                  t = w("<script>").prop({
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                  }), r.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }));
      var zt, Xt = [],
          Ut = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
              var e = Xt.pop() || w.expando + "_" + Tt++;
              return this[e] = !0, e
          }
      }), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
          var i, o, a, s = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
          if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + i) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
              return a || w.error(i + " was not called"), a[0]
          }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
              a = arguments
          }, r.always((function() {
              void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Xt.push(i)), a && g(o) && o(a[0]), a = o = void 0
          })), "script"
      })), h.createHTMLDocument = ((zt = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), w.parseHTML = function(e, t, n) {
          return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
          var i, o, a
      }, w.fn.load = function(e, t, n) {
          var r, i, o, a = this,
              s = e.indexOf(" ");
          return s > -1 && (r = gt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t
          }).done((function(e) {
              o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
          })).always(n && function(e, t) {
              a.each((function() {
                  n.apply(this, o || [e.responseText, t, e])
              }))
          }), this
      }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
          w.fn[t] = function(e) {
              return this.on(t, e)
          }
      })), w.expr.pseudos.animated = function(e) {
          return w.grep(w.timers, (function(t) {
              return e === t.elem
          })).length
      }, w.offset = {
          setOffset: function(e, t, n) {
              var r, i, o, a, s, u, l = w.css(e, "position"),
                  c = w(e),
                  f = {};
              "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
          }
      }, w.fn.extend({
          offset: function(e) {
              if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                  w.offset.setOffset(this, e, t)
              }));
              var t, n, r = this[0];
              return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                  top: t.top + n.pageYOffset,
                  left: t.left + n.pageXOffset
              }) : {
                  top: 0,
                  left: 0
              } : void 0
          },
          position: function() {
              if (this[0]) {
                  var e, t, n, r = this[0],
                      i = {
                          top: 0,
                          left: 0
                      };
                  if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                  else {
                      for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                      e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                  }
                  return {
                      top: t.top - i.top - w.css(r, "marginTop", !0),
                      left: t.left - i.left - w.css(r, "marginLeft", !0)
                  }
              }
          },
          offsetParent: function() {
              return this.map((function() {
                  for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                  return e || we
              }))
          }
      }), w.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
      }, (function(e, t) {
          var n = "pageYOffset" === t;
          w.fn[e] = function(r) {
              return z(this, (function(e, r, i) {
                  var o;
                  if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                  o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
              }), e, r, arguments.length)
          }
      })), w.each(["top", "left"], (function(e, t) {
          w.cssHooks[t] = ze(h.pixelPosition, (function(e, n) {
              if (n) return n = _e(e, t), We.test(n) ? w(e).position()[t] + "px" : n
          }))
      })), w.each({
          Height: "height",
          Width: "width"
      }, (function(e, t) {
          w.each({
              padding: "inner" + e,
              content: t,
              "": "outer" + e
          }, (function(n, r) {
              w.fn[r] = function(i, o) {
                  var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                  return z(this, (function(t, n, i) {
                      var o;
                      return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                  }), t, a ? i : void 0, a)
              }
          }))
      })), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
          w.fn[t] = function(e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
          }
      })), w.fn.extend({
          hover: function(e, t) {
              return this.mouseenter(e).mouseleave(t || e)
          }
      }), w.fn.extend({
          bind: function(e, t, n) {
              return this.on(e, null, t, n)
          },
          unbind: function(e, t) {
              return this.off(e, null, t)
          },
          delegate: function(e, t, n, r) {
              return this.on(t, e, n, r)
          },
          undelegate: function(e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          }
      }), w.proxy = function(e, t) {
          var n, r, i;
          if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
              return e.apply(t || this, r.concat(o.call(arguments)))
          }, i.guid = e.guid = e.guid || w.guid++, i
      }, w.holdReady = function(e) {
          e ? w.readyWait++ : w.ready(!0)
      }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = v, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
          var t = w.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, "function" == typeof define && define.amd && define("jquery", [], (function() {
          return w
      }));
      var Vt = e.jQuery,
          Gt = e.$;
      return w.noConflict = function(t) {
          return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Vt), w
      }, t || (e.jQuery = e.$ = w), w
  })), $(document).ready((function() {
      $(".navbar-burger").click((function() {
          $(".navbar-burger").toggleClass("is-active"), $(".navbar-menu").toggleClass("is-active")
      }))
  }));
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'); // Seleciona todos os elementos com a classe .slide
    let currentSlide = 0; // Índice do slide que está atualmente visível
  
    // Função para mostrar o slide correspondente ao índice atual
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        // Para cada slide, verifica se o índice é igual ao slide atual
        slide.classList.toggle('active', i === index);
      });
    };
  
    // Event Listener para o botão "Próximo"
    d.....get......('nextSlide').addEvent...('click', () => {
      // Incrementa o índice do slide atual e volta para o início se ultrapassar o número de slides
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide); // Chama a função para atualizar o slide visível
    });
  
    // Event Listener para o botão "Anterior"
    document.get....ById('prevSlide').add....Listener('click', () => {
      // Decrementa o índice do slide atual e volta para o último slide se for menor que 0
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide); // Chama a função para atualizar o slide visível
    });
  }); <section class="section skills has-text-centered">
  <div class="container is-narrow">
    <div class="box">
      <div class="content">
        <div class="columns is-centered">
          <div class="column"><span class="fa-stack fa-2x"><i class="fa-solid fa-circle fa-stack-2x has-text-success"></i><i class="fa-light fa-layer-plus fa-stack-1x has-text-dark"></i></span>
            <h1 class="title is-size-4 is-spaced">Habilidade 1</h1>
            <p>Descrição da habilidade</p>
            <p class="list-title has-text-primary has-text-weight-normal">Ferramentas da habilidade:</p>
            <ul>
              <li>Ferramenta 1</li>
              <li>Ferramenta 2</li>
              <li>Ferramenta 3</li>
            </ul>
          </div>

          <div class="column"><span class="fa-stack fa-2x"><i class="fa-solid fa-circle fa-stack-2x has-text-success"></i><i class="fa-light fa-square-terminal fa-stack-1x has-text-dark"></i></span>
            <... class="title is-size-4 is-spaced">Habilidade 2</...>
            <p>Descrição da habilidade</p>
            <p class="list-title has-text-primary has-text-weight-normal">Itens:</p>
            <p>Ferramentas da habilidade:</p>
            <p class="list-title has-text-primary has-text-weight-normal">Ferranebtas:</p>
            <...>
              <...>Ferramenta 1</...>
              <...>Ferramenta 2</...>
              <...>Ferramenta 3</...>
            </...>
          </...>
          <div class="column"><span class="fa-stack fa-2x"><i class="fa-solid fa-circle fa-stack-2x has-text-success"></i><i class="fa-light fa-book fa-stack-1x has-text-dark"></i></span>
            <h1 class="title is-size-4 is-spaced">Habilidade 3</h1>
            <p>Descrição da habilidade</p>
            <p class="list-title has-text-primary has-text-weight-normal">Ferramentas da habilidade:</p>
            <p>Itens</p>
            <p class="list-title has-text-primary has-text-weight-normal">Ferramentas:</p>
            <...>
              <...>Ferramenta 1</...>
              <...>Ferramenta 2</...>
              <...>Ferramenta 3</...>
            </...>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section projects is-medium is-white has-text-centered">
<div class="container is-narrow">
<h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">Meus trabalhos recentes</h1>
<h2 class="subtitle is-size-5-desktop">Um pouco do que sou capaz de entregar</h2>

<div class="columns is-multiline is-centered">
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
  <div class="column is-4">
    <figure class="image is-square">
      <img src="https://placehold.co/150x150" alt="Placeholder">
    </figure>
  </div>
</div>
</div>
</section> <footer class="section is-primary is-small has-text-centered">
      <div class="container is-narrow"><a class="logo has-text-white" href="/"><i class="fak fa-mf-logo fa-4x"></i></a>
        <div class="columns is-centered"> 
          <div class="column is-one-third">
            <h1 class="title is-size-4-touch has-text-weight-normal">Frase impactante</h1>
          </div>
        </div>
        <div class="social-icons">
          <p class="field"><a class="button is-medium" href="..." target="_blank"><span class="icon is-small"><i class="fab fa-twitter fa-fw"></i></span></a><a class="button is-medium" href="https://dribbble.com/mattfarley" target="_blank"><span class="icon is-small"><i class="fab fa-dribbble fa-fw"></i></span></a><a class="button is-medium" href="..." target="_blank"><span class="icon is-small"><i class="fab fa-linkedin-in fa-fw"></i></span></a><a class="button is-medium" href="..." target="_blank"><span class="icon is-small"><i class="fak fa-indie-hackers fa-fw"></i></span></a><a class="button is-medium" href="..." target="_blank"><span class="icon is-small"><i class="fab fa-product-hunt fa-fw"></i></span></a><a class="button is-medium" href="mailto:..."><span class="icon is-small"><i class="far fa-envelope fa-fw"></i></span></a></p>
        </div>
        <div class="copyright">Criado por<span class="icon has-white-text" style="vertical-align:middle;"><i class="far fa-copyright"></i></span></div>
        
      </div>
    </footer>