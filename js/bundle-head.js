/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Head
	 *
	 * This file should only include basic environment setup logic and browser feature tests
	 *
	 * This should be included before the stylesheet so the browser doesn't need to reflow after adding the feature
	 * detect classes from modernizer. Since this goes before the stylesheet this file should be placed inline into the html.
	 *
	 * Where possible this file should always be minified and obfuscated via `gulp prod`.
	 *
	 * BEWARE: This file and all dependencies of this file should not exceed 1.5kb or it will slow down every page
	 * request as it can't be cached since it's inline and all.
	 *
	 */
	'use strict';
	
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*! modernizr 3.0.0 (Custom Build) | MIT *
	 * http://modernizr.com/download/?-backgroundsize-borderradius-boxshadow-cssanimations-cssremunit-csstransitions-formvalidation-inputtypes-queryselector-sessionstorage-touchevents !*/
	"use strict";
	
	!(function (e, t, n) {
	  function i(e, t) {
	    return typeof e === t;
	  }function r() {
	    var e, t, n, r, o, s, a;for (var l in g) {
	      if ((e = [], t = g[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), C.push((r ? "" : "no-") + a.join("-"));
	    }
	  }function o(e) {
	    var t = S.className,
	        n = Modernizr._config.classPrefix || "";if ((x && (t = t.baseVal), Modernizr._config.enableJSClass)) {
	      var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");t = t.replace(i, "$1" + n + "js$2");
	    }Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? S.className.baseVal = t : S.className = t);
	  }function s() {
	    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
	  }function a() {
	    var e = t.body;return (e || (e = s(x ? "svg" : "body"), e.fake = !0), e);
	  }function l(e, n, i, r) {
	    var o,
	        l,
	        u,
	        d,
	        f = "modernizr",
	        c = s("div"),
	        p = a();if (parseInt(i, 10)) for (; i--;) u = s("div"), u.id = r ? r[i] : f + (i + 1), c.appendChild(u);return (o = s("style"), o.type = "text/css", o.id = "s" + f, (p.fake ? p : c).appendChild(o), p.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), c.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), l = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = d, S.offsetHeight) : c.parentNode.removeChild(c), !!l);
	  }function u(e, t) {
	    return !! ~("" + e).indexOf(t);
	  }function d(e) {
	    return e.replace(/([A-Z])/g, function (e, t) {
	      return "-" + t.toLowerCase();
	    }).replace(/^ms-/, "-ms-");
	  }function f(t, i) {
	    var r = t.length;if ("CSS" in e && "supports" in e.CSS) {
	      for (; r--;) if (e.CSS.supports(d(t[r]), i)) return !0;return !1;
	    }if ("CSSSupportsRule" in e) {
	      for (var o = []; r--;) o.push("(" + d(t[r]) + ":" + i + ")");return (o = o.join(" or "), l("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
	        return "absolute" == getComputedStyle(e, null).position;
	      }));
	    }return n;
	  }function c(e) {
	    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
	      return t + n.toUpperCase();
	    }).replace(/^-/, "");
	  }function p(e, t, r, o) {
	    function a() {
	      d && (delete A.style, delete A.modElem);
	    }if ((o = i(o, "undefined") ? !1 : o, !i(r, "undefined"))) {
	      var l = f(e, r);if (!i(l, "undefined")) return l;
	    }for (var d, p, m, v, h, y = ["modernizr", "tspan"]; !A.style;) d = !0, A.modElem = s(y.shift()), A.style = A.modElem.style;for (m = e.length, p = 0; m > p; p++) if ((v = e[p], h = A.style[v], u(v, "-") && (v = c(v)), A.style[v] !== n)) {
	      if (o || i(r, "undefined")) return (a(), "pfx" == t ? v : !0);try {
	        A.style[v] = r;
	      } catch (g) {}if (A.style[v] != h) return (a(), "pfx" == t ? v : !0);
	    }return (a(), !1);
	  }function m(e, t) {
	    return function () {
	      return e.apply(t, arguments);
	    };
	  }function v(e, t, n) {
	    var r;for (var o in e) if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], i(r, "function") ? m(r, n || t) : r);return !1;
	  }function h(e, t, n, r, o) {
	    var s = e.charAt(0).toUpperCase() + e.slice(1),
	        a = (e + " " + N.join(s + " ") + s).split(" ");return i(t, "string") || i(t, "undefined") ? p(a, t, r, o) : (a = (e + " " + j.join(s + " ") + s).split(" "), v(a, t, n));
	  }function y(e, t, i) {
	    return h(e, n, n, t, i);
	  }var g = [],
	      b = { _version: "3.0.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, t) {
	      var n = this;setTimeout(function () {
	        t(n[e]);
	      }, 0);
	    }, addTest: function addTest(e, t, n) {
	      g.push({ name: e, fn: t, options: n });
	    }, addAsyncTest: function addAsyncTest(e) {
	      g.push({ name: null, fn: e });
	    } },
	      Modernizr = function Modernizr() {};Modernizr.prototype = b, Modernizr = new Modernizr();var C = [],
	      S = t.documentElement,
	      x = "svg" === S.nodeName.toLowerCase(),
	      T = s("input"),
	      w = "search tel url email datetime date month week time datetime-local number range color".split(" "),
	      _ = {};Modernizr.inputtypes = (function (e) {
	    for (var i, r, o, s = e.length, a = ":)", l = 0; s > l; l++) T.setAttribute("type", i = e[l]), o = "text" !== T.type && "style" in T, o && (T.value = a, T.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && T.style.WebkitAppearance !== n ? (S.appendChild(T), r = t.defaultView, o = r.getComputedStyle && "textfield" !== r.getComputedStyle(T, null).WebkitAppearance && 0 !== T.offsetHeight, S.removeChild(T)) : /^(search|tel)$/.test(i) || (o = /^(url|email|number)$/.test(i) ? T.checkValidity && T.checkValidity() === !1 : T.value != a)), _[e[l]] = !!o;return _;
	  })(w), Modernizr.addTest("queryselector", "querySelector" in t && "querySelectorAll" in t);var z = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];b._prefixes = z;var k = b.testStyles = l;Modernizr.addTest("touchevents", function () {
	    var n;if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;else {
	      var i = ["@media (", z.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");k(i, function (e) {
	        n = 9 === e.offsetTop;
	      });
	    }return n;
	  });var E = "Moz O ms Webkit",
	      N = b._config.usePrefixes ? E.split(" ") : [];b._cssomPrefixes = N;var P = { elem: s("modernizr") };Modernizr._q.push(function () {
	    delete P.elem;
	  });var A = { style: P.elem.style };Modernizr._q.unshift(function () {
	    delete A.style;
	  });var j = b._config.usePrefixes ? E.toLowerCase().split(" ") : [];b._domPrefixes = j, b.testAllProps = h, b.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)), Modernizr.addTest("cssremunit", function () {
	    var e = s("a").style;try {
	      e.fontSize = "3rem";
	    } catch (t) {}return (/rem/.test(e.fontSize)
	    );
	  }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("formvalidation", function () {
	    var t = s("form");if (!("checkValidity" in t && "addEventListener" in t)) return !1;if ("reportValidity" in t) return !0;var n,
	        i = !1;return (Modernizr.formvalidationapi = !0, t.addEventListener("submit", function (t) {
	      e.opera || t.preventDefault(), t.stopPropagation();
	    }, !1), t.innerHTML = '<input name="modTest" required><button></button>', k("#modernizr form{position:absolute;top:-99999em}", function (e) {
	      e.appendChild(t), n = t.getElementsByTagName("input")[0], n.addEventListener("invalid", function (e) {
	        i = !0, e.preventDefault(), e.stopPropagation();
	      }, !1), Modernizr.formvalidationmessage = !!n.validationMessage, t.getElementsByTagName("button")[0].click();
	    }), i);
	  }), Modernizr.addTest("sessionstorage", function () {
	    var e = "modernizr";try {
	      return (sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0);
	    } catch (t) {
	      return !1;
	    }
	  }), r(), o(C), delete b.addTest, delete b.addAsyncTest;for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();e.Modernizr = Modernizr;
	})(window, document);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle-head.js.map