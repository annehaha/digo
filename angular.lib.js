!function (a, b, c) {
	"use strict";
	function d(a) {
		return function () {
			var b,
			c,
			d = arguments[0],
			e = "[" + (a ? a + ":" : "") + d + "] ",
			f = arguments[1],
			g = arguments,
			h = function (a) {
				return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
			};
			for (b = e + f.replace(/\{\d+\}/g, function (a) {
						var b,
						c = +a.slice(1, -1);
						return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a
					}), b = b + "\nhttp://errors.angularjs.org/1.2.21/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++)
				b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
			return new Error(b)
		}
	}
	function e(a) {
		if (null == a || z(a))
			return !1;
		var b = a.length;
		return 1 === a.nodeType && b ? !0 : u(a) || Cd(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	function f(a, b, c) {
		var d;
		if (a)
			if (x(a))
				for (d in a)
					"prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
			else if (Cd(a) || e(a))
				for (d = 0; d < a.length; d++)
					b.call(c, a[d], d);
			else if (a.forEach && a.forEach !== f)
				a.forEach(b, c);
			else
				for (d in a)
					a.hasOwnProperty(d) && b.call(c, a[d], d);
		return a
	}
	function g(a) {
		var b = [];
		for (var c in a)
			a.hasOwnProperty(c) && b.push(c);
		return b.sort()
	}
	function h(a, b, c) {
		for (var d = g(a), e = 0; e < d.length; e++)
			b.call(c, a[d[e]], d[e]);
		return d
	}
	function i(a) {
		return function (b, c) {
			a(c, b)
		}
	}
	function j() {
		for (var a, b = Bd.length; b; ) {
			if (b--, a = Bd[b].charCodeAt(0), 57 == a)
				return Bd[b] = "A", Bd.join("");
			if (90 != a)
				return Bd[b] = String.fromCharCode(a + 1), Bd.join("");
			Bd[b] = "0"
		}
		return Bd.unshift("0"),
		Bd.join("")
	}
	function k(a, b) {
		b ? a.$$hashKey = b : delete a.$$hashKey
	}
	function l(a) {
		var b = a.$$hashKey;
		return f(arguments, function (b) {
			b !== a && f(b, function (b, c) {
				a[c] = b
			})
		}),
		k(a, b),
		a
	}
	function m(a) {
		return parseInt(a, 10)
	}
	function n(a, b) {
		return l(new(l(function () {}, {
					prototype : a
				})), b)
	}
	function o() {}

	function p(a) {
		return a
	}
	function q(a) {
		return function () {
			return a
		}
	}
	function r(a) {
		return "undefined" == typeof a
	}
	function s(a) {
		return "undefined" != typeof a
	}
	function t(a) {
		return null != a && "object" == typeof a
	}
	function u(a) {
		return "string" == typeof a
	}
	function v(a) {
		return "number" == typeof a
	}
	function w(a) {
		return "[object Date]" === yd.call(a)
	}
	function x(a) {
		return "function" == typeof a
	}
	function y(a) {
		return "[object RegExp]" === yd.call(a)
	}
	function z(a) {
		return a && a.document && a.location && a.alert && a.setInterval
	}
	function A(a) {
		return a && a.$evalAsync && a.$watch
	}
	function B(a) {
		return "[object File]" === yd.call(a)
	}
	function C(a) {
		return "[object Blob]" === yd.call(a)
	}
	function D(a) {
		return a && x(a.then)
	}
	function E(a) {
		return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
	}
	function F(a, b, c) {
		var d = [];
		return f(a, function (a, e, f) {
			d.push(b.call(c, a, e, f))
		}),
		d
	}
	function G(a, b) {
		return -1 != H(a, b)
	}
	function H(a, b) {
		if (a.indexOf)
			return a.indexOf(b);
		for (var c = 0; c < a.length; c++)
			if (b === a[c])
				return c;
		return -1
	}
	function I(a, b) {
		var c = H(a, b);
		return c >= 0 && a.splice(c, 1),
		b
	}
	function J(a, b, c, d) {
		if (z(a) || A(a))
			throw zd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
		if (b) {
			if (a === b)
				throw zd("cpi", "Can't copy! Source and destination are identical.");
			if (c = c || [], d = d || [], t(a)) {
				var e = H(c, a);
				if (-1 !== e)
					return d[e];
				c.push(a),
				d.push(b)
			}
			var g;
			if (Cd(a)) {
				b.length = 0;
				for (var h = 0; h < a.length; h++)
					g = J(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
			} else {
				var i = b.$$hashKey;
				f(b, function (a, c) {
					delete b[c]
				});
				for (var j in a)
					g = J(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g;
				k(b, i)
			}
		} else
			b = a, a && (Cd(a) ? b = J(a, [], c, d) : w(a) ? b = new Date(a.getTime()) : y(a) ? (b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex) : t(a) && (b = J(a, {}, c, d)));
		return b
	}
	function K(a, b) {
		if (Cd(a)) {
			b = b || [];
			for (var c = 0; c < a.length; c++)
				b[c] = a[c]
		} else if (t(a)) {
			b = b || {};
			for (var d in a)
				!nd.call(a, d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (b[d] = a[d])
		}
		return b || a
	}
	function L(a, b) {
		if (a === b)
			return !0;
		if (null === a || null === b)
			return !1;
		if (a !== a && b !== b)
			return !0;
		var d,
		e,
		f,
		g = typeof a,
		h = typeof b;
		if (g == h && "object" == g) {
			if (!Cd(a)) {
				if (w(a))
					return w(b) && a.getTime() == b.getTime();
				if (y(a) && y(b))
					return a.toString() == b.toString();
				if (A(a) || A(b) || z(a) || z(b) || Cd(b))
					return !1;
				f = {};
				for (e in a)
					if ("$" !== e.charAt(0) && !x(a[e])) {
						if (!L(a[e], b[e]))
							return !1;
						f[e] = !0
					}
				for (e in b)
					if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e]))
						return !1;
				return !0
			}
			if (!Cd(b))
				return !1;
			if ((d = a.length) == b.length) {
				for (e = 0; d > e; e++)
					if (!L(a[e], b[e]))
						return !1;
				return !0
			}
		}
		return !1
	}
	function M(a, b, c) {
		return a.concat(wd.call(b, c))
	}
	function N(a, b) {
		return wd.call(a, b || 0)
	}
	function O(a, b) {
		var c = arguments.length > 2 ? N(arguments, 2) : [];
		return !x(b) || b instanceof RegExp ? b : c.length ? function () {
			return arguments.length ? b.apply(a, c.concat(wd.call(arguments, 0))) : b.apply(a, c)
		}
		 : function () {
			return arguments.length ? b.apply(a, arguments) : b.call(a)
		}
	}
	function P(a, d) {
		var e = d;
		return "string" == typeof a && "$" === a.charAt(0) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"),
		e
	}
	function Q(a, b) {
		return "undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null)
	}
	function R(a) {
		return u(a) ? JSON.parse(a) : a
	}
	function S(a) {
		if ("function" == typeof a)
			a = !0;
		else if (a && 0 !== a.length) {
			var b = md("" + a);
			a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
		} else
			a = !1;
		return a
	}
	function T(a) {
		a = sd(a).clone();
		try {
			a.empty()
		} catch (b) {}

		var c = 3,
		d = sd("<div>").append(a).html();
		try {
			return a[0].nodeType === c ? md(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
				return "<" + md(b)
			})
		} catch (b) {
			return md(d)
		}
	}
	function U(a) {
		try {
			return decodeURIComponent(a)
		} catch (b) {}

	}
	function V(a) {
		var b,
		c,
		d = {};
		return f((a || "").split("&"), function (a) {
			if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
				var e = s(b[1]) ? U(b[1]) : !0;
				nd.call(d, c) ? Cd(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
			}
		}),
		d
	}
	function W(a) {
		var b = [];
		return f(a, function (a, c) {
			Cd(a) ? f(a, function (a) {
				b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
			}) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
		}),
		b.length ? b.join("&") : ""
	}
	function X(a) {
		return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}
	function Y(a, b) {
		return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
	}
	function Z(a, c) {
		function d(a) {
			a && h.push(a)
		}
		var e,
		g,
		h = [a],
		i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
		j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
		f(i, function (c) {
			i[c] = !0,
			d(b.getElementById(c)),
			c = c.replace(":", "\\:"),
			a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
		}),
		f(h, function (a) {
			if (!e) {
				var b = " " + a.className + " ",
				c = j.exec(b);
				c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function (b) {
					!e && i[b.name] && (e = a, g = b.value)
				})
			}
		}),
		e && c(e, g ? [g] : [])
	}
	function $(c, d) {
		var e = function () {
			if (c = sd(c), c.injector()) {
				var a = c[0] === b ? "document" : T(c);
				throw zd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a)
			}
			d = d || [],
			d.unshift(["$provide", function (a) {
						a.value("$rootElement", c)
					}
				]),
			d.unshift("ng");
			var e = Hb(d);
			return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (a, b, c, d) {
						a.$apply(function () {
							b.data("$injector", d),
							c(b)(a)
						})
					}
				]),
			e
		},
		g = /^NG_DEFER_BOOTSTRAP!/;
		return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(Ad.resumeBootstrap = function (a) {
				f(a, function (a) {
					d.push(a)
				}),
				e()
			}))
	}
	function _(a, b) {
		return b = b || "_",
		a.replace(Fd, function (a, c) {
			return (c ? b : "") + a.toLowerCase()
		})
	}
	function ab() {
		td = a.jQuery,
		td && td.fn.on ? (sd = td, l(td.fn, {
				scope : Td.scope,
				isolateScope : Td.isolateScope,
				controller : Td.controller,
				injector : Td.injector,
				inheritedData : Td.inheritedData
			}), kb("remove", !0, !0, !1), kb("empty", !1, !1, !1), kb("html", !1, !1, !0)) : sd = ob,
		Ad.element = sd
	}
	function bb(a, b, c) {
		if (!a)
			throw zd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
		return a
	}
	function cb(a, b, c) {
		return c && Cd(a) && (a = a[a.length - 1]),
		bb(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)),
		a
	}
	function db(a, b) {
		if ("hasOwnProperty" === a)
			throw zd("badname", "hasOwnProperty is not a valid {0} name", b)
	}
	function eb(a, b, c) {
		if (!b)
			return a;
		for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)
			d = e[h], a && (a = (f = a)[d]);
		return !c && x(a) ? O(f, a) : a
	}
	function fb(a) {
		var b = a[0],
		c = a[a.length - 1];
		if (b === c)
			return sd(b);
		var d = b,
		e = [d];
		do {
			if (d = d.nextSibling, !d)
				break;
			e.push(d)
		} while (d !== c);
		return sd(e)
	}
	function gb(a) {
		function b(a, b, c) {
			return a[b] || (a[b] = c())
		}
		var c = d("$injector"),
		e = d("ng"),
		f = b(a, "angular", Object);
		return f.$$minErr = f.$$minErr || d,
		b(f, "module", function () {
			var a = {};
			return function (d, f, g) {
				var h = function (a, b) {
					if ("hasOwnProperty" === a)
						throw e("badname", "hasOwnProperty is not a valid {0} name", b)
				};
				return h(d, "module"),
				f && a.hasOwnProperty(d) && (a[d] = null),
				b(a, d, function () {
					function a(a, c, d) {
						return function () {
							return b[d || "push"]([a, c, arguments]),
							i
						}
					}
					if (!f)
						throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
					var b = [],
					e = [],
					h = a("$injector", "invoke"),
					i = {
						_invokeQueue : b,
						_runBlocks : e,
						requires : f,
						name : d,
						provider : a("$provide", "provider"),
						factory : a("$provide", "factory"),
						service : a("$provide", "service"),
						value : a("$provide", "value"),
						constant : a("$provide", "constant", "unshift"),
						animation : a("$animateProvider", "register"),
						filter : a("$filterProvider", "register"),
						controller : a("$controllerProvider", "register"),
						directive : a("$compileProvider", "directive"),
						config : h,
						run : function (a) {
							return e.push(a),
							this
						}
					};
					return g && h(g),
					i
				})
			}
		})
	}
	function hb(b) {
		l(b, {
			bootstrap : $,
			copy : J,
			extend : l,
			equals : L,
			element : sd,
			forEach : f,
			injector : Hb,
			noop : o,
			bind : O,
			toJson : Q,
			fromJson : R,
			identity : p,
			isUndefined : r,
			isDefined : s,
			isString : u,
			isFunction : x,
			isObject : t,
			isNumber : v,
			isElement : E,
			isArray : Cd,
			version : Gd,
			isDate : w,
			lowercase : md,
			uppercase : od,
			callbacks : {
				counter : 0
			},
			$$minErr : d,
			$$csp : Ed
		}),
		ud = gb(a);
		try {
			ud("ngLocale")
		} catch (c) {
			ud("ngLocale", []).provider("$locale", cc)
		}
		ud("ng", ["ngLocale"], ["$provide", function (a) {
					a.provider({
						$$sanitizeUri : Cc
					}),
					a.provider("$compile", Ob).directive({
						a : Ce,
						input : Ne,
						textarea : Ne,
						form : Ge,
						script : vf,
						select : yf,
						style : Af,
						option : zf,
						ngBind : Ze,
						ngBindHtml : _e,
						ngBindTemplate : $e,
						ngClass : af,
						ngClassEven : cf,
						ngClassOdd : bf,
						ngCloak : df,
						ngController : ef,
						ngForm : He,
						ngHide : pf,
						ngIf : gf,
						ngInclude : hf,
						ngInit : kf,
						ngNonBindable : lf,
						ngPluralize : mf,
						ngRepeat : nf,
						ngShow : of,
						ngStyle : qf,
						ngSwitch : rf,
						ngSwitchWhen : sf,
						ngSwitchDefault : tf,
						ngOptions : xf,
						ngTransclude : uf,
						ngModel : Te,
						ngList : We,
						ngChange : Ue,
						required : Ve,
						ngRequired : Ve,
						ngValue : Ye
					}).directive({
						ngInclude : jf
					}).directive(De).directive(ff),
					a.provider({
						$anchorScroll : Ib,
						$animate : ae,
						$browser : Lb,
						$cacheFactory : Mb,
						$controller : Rb,
						$document : Sb,
						$exceptionHandler : Tb,
						$filter : Nc,
						$interpolate : ac,
						$interval : bc,
						$http : Yb,
						$httpBackend : $b,
						$location : pc,
						$log : qc,
						$parse : xc,
						$rootScope : Bc,
						$q : yc,
						$sce : Hc,
						$sceDelegate : Gc,
						$sniffer : Ic,
						$templateCache : Nb,
						$timeout : Jc,
						$window : Mc,
						$$rAF : Ac,
						$$asyncCallback : Jb
					})
				}
			])
	}
	function ib() {
		return ++Id
	}
	function jb(a) {
		return a.replace(Ld, function (a, b, c, d) {
			return d ? c.toUpperCase() : c
		}).replace(Md, "Moz$1")
	}
	function kb(a, b, c, d) {
		function e(a) {
			var e,
			g,
			h,
			i,
			j,
			k,
			l,
			m = c && a ? [this.filter(a)] : [this],
			n = b;
			if (!d || null != a)
				for (; m.length; )
					for (e = m.shift(), g = 0, h = e.length; h > g; g++)
						for (i = sd(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++)
							m.push(td(l[j]));
			return f.apply(this, arguments)
		}
		var f = td.fn[a];
		f = f.$original || f,
		e.$original = f,
		td.fn[a] = e
	}
	function lb(a) {
		return !Pd.test(a)
	}
	function mb(a, b) {
		var c,
		d,
		e,
		f,
		g,
		h,
		i = b.createDocumentFragment(),
		j = [];
		if (lb(a))
			j.push(b.createTextNode(a));
		else {
			for (c = i.appendChild(b.createElement("div")), d = (Qd.exec(a) || ["", ""])[1].toLowerCase(), e = Sd[d] || Sd._default, c.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(Rd, "<$1></$2>") + e[2], c.removeChild(c.firstChild), f = e[0]; f--; )
				c = c.lastChild;
			for (g = 0, h = c.childNodes.length; h > g; ++g)
				j.push(c.childNodes[g]);
			c = i.firstChild,
			c.textContent = ""
		}
		return i.textContent = "",
		i.innerHTML = "",
		j
	}
	function nb(a, c) {
		c = c || b;
		var d;
		return (d = Od.exec(a)) ? [c.createElement(d[1])] : mb(a, c)
	}
	function ob(a) {
		if (a instanceof ob)
			return a;
		if (u(a) && (a = Dd(a)), !(this instanceof ob)) {
			if (u(a) && "<" != a.charAt(0))
				throw Nd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
			return new ob(a)
		}
		if (u(a)) {
			yb(this, nb(a));
			var c = sd(b.createDocumentFragment());
			c.append(this)
		} else
			yb(this, a)
	}
	function pb(a) {
		return a.cloneNode(!0)
	}
	function qb(a) {
		sb(a);
		for (var b = 0, c = a.childNodes || []; b < c.length; b++)
			qb(c[b])
	}
	function rb(a, b, c, d) {
		if (s(d))
			throw Nd("offargs", "jqLite#off() does not support the `selector` argument");
		var e = tb(a, "events"),
		g = tb(a, "handle");
		g && (r(b) ? f(e, function (b, c) {
				Kd(a, c, b),
				delete e[c]
			}) : f(b.split(" "), function (b) {
				r(c) ? (Kd(a, b, e[b]), delete e[b]) : I(e[b] || [], c)
			}))
	}
	function sb(a, b) {
		var d = a.ng339,
		e = Hd[d];
		if (e) {
			if (b)
				return void delete Hd[d].data[b];
			e.handle && (e.events.$destroy && e.handle({}, "$destroy"), rb(a)),
			delete Hd[d],
			a.ng339 = c
		}
	}
	function tb(a, b, c) {
		var d = a.ng339,
		e = Hd[d || -1];
		return s(c) ? (e || (a.ng339 = d = ib(), e = Hd[d] = {}), void(e[b] = c)) : e && e[b]
	}
	function ub(a, b, c) {
		var d = tb(a, "data"),
		e = s(c),
		f = !e && s(b),
		g = f && !t(b);
		if (d || g || tb(a, "data", d = {}), e)
			d[b] = c;
		else {
			if (!f)
				return d;
			if (g)
				return d && d[b];
			l(d, b)
		}
	}
	function vb(a, b) {
		return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
	}
	function wb(a, b) {
		b && a.setAttribute && f(b.split(" "), function (b) {
			a.setAttribute("class", Dd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Dd(b) + " ", " ")))
		})
	}
	function xb(a, b) {
		if (b && a.setAttribute) {
			var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			f(b.split(" "), function (a) {
				a = Dd(a),
				-1 === c.indexOf(" " + a + " ") && (c += a + " ")
			}),
			a.setAttribute("class", Dd(c))
		}
	}
	function yb(a, b) {
		if (b) {
			b = b.nodeName || !s(b.length) || z(b) ? [b] : b;
			for (var c = 0; c < b.length; c++)
				a.push(b[c])
		}
	}
	function zb(a, b) {
		return Ab(a, "$" + (b || "ngController") + "Controller")
	}
	function Ab(a, b, d) {
		9 == a.nodeType && (a = a.documentElement);
		for (var e = Cd(b) ? b : [b]; a; ) {
			for (var f = 0, g = e.length; g > f; f++)
				if ((d = sd.data(a, e[f])) !== c)
					return d;
			a = a.parentNode || 11 === a.nodeType && a.host
		}
	}
	function Bb(a) {
		for (var b = 0, c = a.childNodes; b < c.length; b++)
			qb(c[b]);
		for (; a.firstChild; )
			a.removeChild(a.firstChild)
	}
	function Cb(a, b) {
		var c = Ud[b.toLowerCase()];
		return c && Vd[a.nodeName] && c
	}
	function Db(a, c) {
		var d = function (d, e) {
			if (d.preventDefault || (d.preventDefault = function () {
					d.returnValue = !1
				}), d.stopPropagation || (d.stopPropagation = function () {
					d.cancelBubble = !0
				}), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
				var g = d.preventDefault;
				d.preventDefault = function () {
					d.defaultPrevented = !0,
					g.call(d)
				},
				d.defaultPrevented = !1
			}
			d.isDefaultPrevented = function () {
				return d.defaultPrevented || d.returnValue === !1
			};
			var h = K(c[e || d.type] || []);
			f(h, function (b) {
				b.call(a, d)
			}),
			8 >= rd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
		};
		return d.elem = a,
		d
	}
	function Eb(a, b) {
		var d,
		e = typeof a;
		return "function" == e || "object" == e && null !== a ? "function" == typeof(d = a.$$hashKey) ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = (b || j)()) : d = a,
		e + ":" + d
	}
	function Fb(a, b) {
		if (b) {
			var c = 0;
			this.nextUid = function () {
				return ++c
			}
		}
		f(a, this.put, this)
	}
	function Gb(a) {
		var b,
		c,
		d,
		e;
		return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Zd, ""), d = c.match(Wd), f(d[1].split(Xd), function (a) {
					a.replace(Yd, function (a, c, d) {
						b.push(d)
					})
				})), a.$inject = b) : Cd(a) ? (e = a.length - 1, cb(a[e], "fn"), b = a.slice(0, e)) : cb(a, "fn", !0),
		b
	}
	function Hb(a) {
		function b(a) {
			return function (b, c) {
				return t(b) ? void f(b, i(a)) : a(b, c)
			}
		}
		function c(a, b) {
			if (db(a, "service"), (x(b) || Cd(b)) && (b = v.instantiate(b)), !b.$get)
				throw $d("pget", "Provider '{0}' must define $get factory method.", a);
			return s[a + n] = b
		}
		function d(a, b) {
			return c(a, {
				$get : b
			})
		}
		function e(a, b) {
			return d(a, ["$injector", function (a) {
						return a.instantiate(b)
					}
				])
		}
		function g(a, b) {
			return d(a, q(b))
		}
		function h(a, b) {
			db(a, "constant"),
			s[a] = b,
			w[a] = b
		}
		function j(a, b) {
			var c = v.get(a + n),
			d = c.$get;
			c.$get = function () {
				var a = y.invoke(d, c);
				return y.invoke(b, null, {
					$delegate : a
				})
			}
		}
		function k(a) {
			var b,
			c,
			d,
			e,
			g = [];
			return f(a, function (a) {
				if (!r.get(a)) {
					r.put(a, !0);
					try {
						if (u(a))
							for (b = ud(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
								var f = c[d],
								h = v.get(f[0]);
								h[f[1]].apply(h, f[2])
							}
						else
							x(a) ? g.push(v.invoke(a)) : Cd(a) ? g.push(v.invoke(a)) : cb(a, "module")
					} catch (i) {
						throw Cd(a) && (a = a[a.length - 1]),
						i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack),
						$d("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
					}
				}
			}),
			g
		}
		function l(a, b) {
			function c(c) {
				if (a.hasOwnProperty(c)) {
					if (a[c] === m)
						throw $d("cdep", "Circular dependency found: {0}", c + " <- " + p.join(" <- "));
					return a[c]
				}
				try {
					return p.unshift(c),
					a[c] = m,
					a[c] = b(c)
				} catch (d) {
					throw a[c] === m && delete a[c],
					d
				}
				finally {
					p.shift()
				}
			}
			function d(a, b, d) {
				var e,
				f,
				g,
				h = [],
				i = Gb(a);
				for (f = 0, e = i.length; e > f; f++) {
					if (g = i[f], "string" != typeof g)
						throw $d("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
					h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
				}
				return Cd(a) && (a = a[e]),
				a.apply(b, h)
			}
			function e(a, b) {
				var c,
				e,
				f = function () {};
				return f.prototype = (Cd(a) ? a[a.length - 1] : a).prototype,
				c = new f,
				e = d(a, c, b),
				t(e) || x(e) ? e : c
			}
			return {
				invoke : d,
				instantiate : e,
				get : c,
				annotate : Gb,
				has : function (b) {
					return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
				}
			}
		}
		var m = {},
		n = "Provider",
		p = [],
		r = new Fb([], !0),
		s = {
			$provide : {
				provider : b(c),
				factory : b(d),
				service : b(e),
				value : b(g),
				constant : b(h),
				decorator : j
			}
		},
		v = s.$injector = l(s, function () {
				throw $d("unpr", "Unknown provider: {0}", p.join(" <- "))
			}),
		w = {},
		y = w.$injector = l(w, function (a) {
				var b = v.get(a + n);
				return y.invoke(b.$get, b)
			});
		return f(k(a), function (a) {
			y.invoke(a || o)
		}),
		y
	}
	function Ib() {
		var a = !0;
		this.disableAutoScrolling = function () {
			a = !1
		},
		this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
				function e(a) {
					var b = null;
					return f(a, function (a) {
						b || "a" !== md(a.nodeName) || (b = a)
					}),
					b
				}
				function g() {
					var a,
					d = c.hash();
					d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
				}
				var h = b.document;
				return a && d.$watch(function () {
					return c.hash()
				}, function () {
					d.$evalAsync(g)
				}),
				g
			}
		]
	}
	function Jb() {
		this.$get = ["$$rAF", "$timeout", function (a, b) {
				return a.supported ? function (b) {
					return a(b)
				}
				 : function (a) {
					return b(a, 0, !1)
				}
			}
		]
	}
	function Kb(a, b, d, e) {
		function g(a) {
			try {
				a.apply(null, N(arguments, 1))
			}
			finally {
				if (s--, 0 === s)
					for (; t.length; )
						try {
							t.pop()()
						} catch (b) {
							d.error(b)
						}
			}
		}
		function h(a, b) {
			!function c() {
				f(w, function (a) {
					a()
				}),
				v = b(c, a)
			}
			()
		}
		function i() {
			z = null,
			x != j.url() && (x = j.url(), f(A, function (a) {
					a(j.url())
				}))
		}
		var j = this,
		k = b[0],
		l = a.location,
		m = a.history,
		n = a.setTimeout,
		p = a.clearTimeout,
		q = {};
		j.isMock = !1;
		var s = 0,
		t = [];
		j.$$completeOutstandingRequest = g,
		j.$$incOutstandingRequestCount = function () {
			s++
		},
		j.notifyWhenNoOutstandingRequests = function (a) {
			f(w, function (a) {
				a()
			}),
			0 === s ? a() : t.push(a)
		};
		var v,
		w = [];
		j.addPollFn = function (a) {
			return r(v) && h(100, n),
			w.push(a),
			a
		};
		var x = l.href,
		y = b.find("base"),
		z = null;
		j.url = function (b, c) {
			if (l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
				if (x == b)
					return;
				return x = b,
				e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b),
				j
			}
			return z || l.href.replace(/%27/g, "'")
		};
		var A = [],
		B = !1;
		j.onUrlChange = function (b) {
			return B || (e.history && sd(a).on("popstate", i), e.hashchange ? sd(a).on("hashchange", i) : j.addPollFn(i), B = !0),
			A.push(b),
			b
		},
		j.baseHref = function () {
			var a = y.attr("href");
			return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
		};
		var C = {},
		D = "",
		E = j.baseHref();
		j.cookies = function (a, b) {
			var e,
			f,
			g,
			h,
			i;
			if (!a) {
				if (k.cookie !== D)
					for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++)
						g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
				return C
			}
			b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
		},
		j.defer = function (a, b) {
			var c;
			return s++,
			c = n(function () {
					delete q[c],
					g(a)
				}, b || 0),
			q[c] = !0,
			c
		},
		j.defer.cancel = function (a) {
			return q[a] ? (delete q[a], p(a), g(o), !0) : !1
		}
	}
	function Lb() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
				return new Kb(a, d, b, c)
			}
		]
	}
	function Mb() {
		this.$get = function () {
			function a(a, c) {
				function e(a) {
					a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
				}
				function f(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a))
				}
				if (a in b)
					throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
				var g = 0,
				h = l({}, c, {
						id : a
					}),
				i = {},
				j = c && c.capacity || Number.MAX_VALUE,
				k = {},
				m = null,
				n = null;
				return b[a] = {
					put : function (a, b) {
						if (j < Number.MAX_VALUE) {
							var c = k[a] || (k[a] = {
										key : a
									});
							e(c)
						}
						if (!r(b))
							return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
					},
					get : function (a) {
						if (j < Number.MAX_VALUE) {
							var b = k[a];
							if (!b)
								return;
							e(b)
						}
						return i[a]
					},
					remove : function (a) {
						if (j < Number.MAX_VALUE) {
							var b = k[a];
							if (!b)
								return;
							b == m && (m = b.p),
							b == n && (n = b.n),
							f(b.n, b.p),
							delete k[a]
						}
						delete i[a],
						g--
					},
					removeAll : function () {
						i = {},
						g = 0,
						k = {},
						m = n = null
					},
					destroy : function () {
						i = null,
						h = null,
						k = null,
						delete b[a]
					},
					info : function () {
						return l({}, h, {
							size : g
						})
					}
				}
			}
			var b = {};
			return a.info = function () {
				var a = {};
				return f(b, function (b, c) {
					a[c] = b.info()
				}),
				a
			},
			a.get = function (a) {
				return b[a]
			},
			a
		}
	}
	function Nb() {
		this.$get = ["$cacheFactory", function (a) {
				return a("templates")
			}
		]
	}
	function Ob(a, d) {
		var e = {},
		g = "Directive",
		h = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
		j = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
		k = /^(on[a-z]+|formaction)$/;
		this.directive = function m(b, c) {
			return db(b, "directive"),
			u(b) ? (bb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler", function (a, c) {
								var d = [];
								return f(e[b], function (e, f) {
									try {
										var g = a.invoke(e);
										x(g) ? g = {
											compile : q(g)
										}
										 : !g.compile && g.link && (g.compile = q(g.link)),
										g.priority = g.priority || 0,
										g.index = f,
										g.name = g.name || b,
										g.require = g.require || g.controller && g.name,
										g.restrict = g.restrict || "A",
										d.push(g)
									} catch (h) {
										c(h)
									}
								}),
								d
							}
						])), e[b].push(c)) : f(b, i(m)),
			this
		},
		this.aHrefSanitizationWhitelist = function (a) {
			return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
		},
		this.imgSrcSanitizationWhitelist = function (a) {
			return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
		},
		this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, d, i, m, o, q, r, s, v, w, y, z) {
				function A(a, b, c, d, e) {
					a instanceof sd || (a = sd(a)),
					f(a, function (b, c) {
						3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = sd(b).wrap("<span></span>").parent()[0])
					});
					var g = C(a, b, a, c, d, e);
					return B(a, "ng-scope"),
					function (b, c, d, e) {
						bb(b, "scope");
						var h = c ? Td.clone.call(a) : a;
						f(d, function (a, b) {
							h.data("$" + b + "Controller", a)
						});
						for (var i = 0, j = h.length; j > i; i++) {
							var k = h[i],
							l = k.nodeType;
							(1 === l || 9 === l) && h.eq(i).data("$scope", b)
						}
						return c && c(h, b),
						g && g(b, h, h, e),
						h
					}
				}
				function B(a, b) {
					try {
						a.addClass(b)
					} catch (c) {}

				}
				function C(a, b, d, e, f, g) {
					function h(a, d, e, f) {
						var g,
						h,
						i,
						j,
						k,
						l,
						m,
						n,
						p = d.length,
						q = new Array(p);
						for (k = 0; p > k; k++)
							q[k] = d[k];
						for (k = 0, m = 0, l = o.length; l > k; m++)
							i = q[m], g = o[k++], h = o[k++], g ? (g.scope ? (j = a.$new(), sd.data(i, "$scope", j)) : j = a, n = g.transcludeOnThisElement ? D(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? D(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
					}
					for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++)
						i = new X, j = E(a[p], [], i, 0 === p ? e : c, f), k = j.length ? H(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && B(i.$$element, "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : C(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), o.push(k, m), n = n || k || m, g = null;
					return n ? h : null
				}
				function D(a, b, c) {
					var d = function (d, e, f) {
						var g = !1;
						d || (d = a.$new(), d.$$transcluded = !0, g = !0);
						var h = b(d, e, f, c);
						return g && h.on("$destroy", function () {
							d.$destroy()
						}),
						h
					};
					return d
				}
				function E(a, b, c, d, e) {
					var f,
					g,
					i = a.nodeType,
					k = c.$attr;
					switch (i) {
					case 1:
						J(b, Pb(vd(a).toLowerCase()), "E", d, e);
						for (var l, m, n, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
							var v = !1,
							w = !1;
							if (l = r[s], !rd || rd >= 8 || l.specified) {
								m = l.name,
								p = Dd(l.value),
								o = Pb(m),
								(q = ab.test(o)) && (m = _(o.substr(6), "-"));
								var x = o.replace(/(Start|End)$/, "");
								o === x + "Start" && (v = m, w = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)),
								n = Pb(m.toLowerCase()),
								k[n] = m,
								(q || !c.hasOwnProperty(n)) && (c[n] = p, Cb(a, n) && (c[n] = !0)),
								U(a, b, p, n),
								J(b, n, "A", d, e, v, w)
							}
						}
						if (g = a.className, u(g) && "" !== g)
							for (; f = j.exec(g); )
								n = Pb(f[2]), J(b, n, "C", d, e) && (c[n] = Dd(f[3])), g = g.substr(f.index + f[0].length);
						break;
					case 3:
						R(b, a.nodeValue);
						break;
					case 8:
						try {
							f = h.exec(a.nodeValue),
							f && (n = Pb(f[1]), J(b, n, "M", d, e) && (c[n] = Dd(f[2])))
						} catch (y) {}

					}
					return b.sort(P),
					b
				}
				function F(a, b, c) {
					var d = [],
					e = 0;
					if (b && a.hasAttribute && a.hasAttribute(b)) {
						do {
							if (!a)
								throw be("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
							1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--),
							d.push(a),
							a = a.nextSibling
						} while (e > 0)
					} else
						d.push(a);
					return sd(d)
				}
				function G(a, b, c) {
					return function (d, e, f, g, h) {
						return e = F(e[0], b, c),
						a(d, e, f, g, h)
					}
				}
				function H(a, e, g, h, j, k, l, m, n) {
					function o(a, b, c, d) {
						a && (c && (a = G(a, c, d)), a.require = w.require, a.directiveName = y, (P === w || w.$$isolateScope) && (a = W(a, {
										isolateScope : !0
									})), l.push(a)),
						b && (c && (b = G(b, c, d)), b.require = w.require, b.directiveName = y, (P === w || w.$$isolateScope) && (b = W(b, {
										isolateScope : !0
									})), m.push(b))
					}
					function p(a, b, c, d) {
						var e,
						g = "data",
						h = !1;
						if (u(b)) {
							for (; "^" == (e = b.charAt(0)) || "?" == e; )
								b = b.substr(1), "^" == e && (g = "inheritedData"), h = h || "?" == e;
							if (e = null, d && "data" === g && (e = d[b]), e = e || c[g]("$" + b + "Controller"), !e && !h)
								throw be("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
							return e
						}
						return Cd(b) && (e = [], f(b, function (b) {
								e.push(p(a, b, c, d))
							})),
						e
					}
					function s(a, b, h, j, k) {
						function n(a, b) {
							var d;
							return arguments.length < 2 && (b = a, a = c),
							Z && (d = z),
							k(a, b, d)
						}
						var o,
						s,
						t,
						u,
						v,
						w,
						x,
						y,
						z = {};
						if (o = e === h ? g : K(g, new X(sd(h), g.$attr)), s = o.$$element, P) {
							var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
							x = b.$new(!0),
							!R || R !== P && R !== P.$$originalDirective ? s.data("$isolateScopeNoTemplate", x) : s.data("$isolateScope", x),
							B(s, "ng-isolate-scope"),
							f(P.scope, function (a, c) {
								var e,
								f,
								g,
								h,
								i = a.match(A) || [],
								j = i[3] || c,
								k = "?" == i[2],
								l = i[1];
								switch (x.$$isolateBindings[c] = l + j, l) {
								case "@":
									o.$observe(j, function (a) {
										x[c] = a
									}),
									o.$$observers[j].$$scope = b,
									o[j] && (x[c] = d(o[j])(b));
									break;
								case "=":
									if (k && !o[j])
										return;
									f = q(o[j]),
									h = f.literal ? L : function (a, b) {
										return a === b
									},
									g = f.assign || function () {
										throw e = x[c] = f(b),
										be("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], P.name)
									},
									e = x[c] = f(b),
									x.$watch(function () {
										var a = f(b);
										return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a),
										e = a
									}, null, f.literal);
									break;
								case "&":
									f = q(o[j]),
									x[c] = function (a) {
										return f(b, a)
									};
									break;
								default:
									throw be("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", P.name, c, a)
								}
							})
						}
						for (y = k && n, J && f(J, function (a) {
								var c,
								d = {
									$scope : a === P || a.$$isolateScope ? x : b,
									$element : s,
									$attrs : o,
									$transclude : y
								};
								w = a.controller,
								"@" == w && (w = o[a.name]),
								c = r(w, d),
								z[a.name] = c,
								Z || s.data("$" + a.name + "Controller", c),
								a.controllerAs && (d.$scope[a.controllerAs] = c)
							}), t = 0, u = l.length; u > t; t++)
							try {
								v = l[t],
								v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
							} catch (C) {
								i(C, T(s))
							}
						var D = b;
						for (P && (P.template || null === P.templateUrl) && (D = x), a && a(D, h.childNodes, c, k), t = m.length - 1; t >= 0; t--)
							try {
								v = m[t],
								v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
							} catch (C) {
								i(C, T(s))
							}
					}
					n = n || {};
					for (var v, w, y, z, C, D, H = -Number.MAX_VALUE, J = n.controllerDirectives, P = n.newIsolateScopeDirective, R = n.templateDirective, S = n.nonTlbTranscludeDirective, U = !1, Y = !1, Z = n.hasElementTranscludeDirective, _ = g.$$element = sd(e), ab = k, bb = h, cb = 0, db = a.length; db > cb; cb++) {
						w = a[cb];
						var eb = w.$$start,
						fb = w.$$end;
						if (eb && (_ = F(e, eb, fb)), z = c, H > w.priority)
							break;
						if ((D = w.scope) && (v = v || w, w.templateUrl || (Q("new/isolated scope", P, w, _), t(D) && (P = w))), y = w.name, !w.templateUrl && w.controller && (D = w.controller, J = J || {}, Q("'" + y + "' controller", J[y], w, _), J[y] = w), (D = w.transclude) && (U = !0, w.$$tlb || (Q("transclusion", S, w, _), S = w), "element" == D ? (Z = !0, H = w.priority, z = _, _ = g.$$element = sd(b.createComment(" " + y + ": " + g[y] + " ")), e = _[0], V(j, N(z), e), bb = A(z, h, H, ab && ab.name, {
											nonTlbTranscludeDirective : S
										})) : (z = sd(pb(e)).contents(), _.empty(), bb = A(z, h))), w.template)
							if (Y = !0, Q("template", R, w, _), R = w, D = x(w.template) ? w.template(_, g) : w.template, D = $(D), w.replace) {
								if (ab = w, z = lb(D) ? [] : sd(Dd(D)), e = z[0], 1 != z.length || 1 !== e.nodeType)
									throw be("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", y, "");
								V(j, _, e);
								var gb = {
									$attr : {}

								},
								hb = E(e, [], gb),
								ib = a.splice(cb + 1, a.length - (cb + 1));
								P && I(hb),
								a = a.concat(hb).concat(ib),
								M(g, gb),
								db = a.length
							} else
								_.html(D);
						if (w.templateUrl)
							Y = !0, Q("template", R, w, _), R = w, w.replace && (ab = w), s = O(a.splice(cb, a.length - cb), _, g, j, U && bb, l, m, {
									controllerDirectives : J,
									newIsolateScopeDirective : P,
									templateDirective : R,
									nonTlbTranscludeDirective : S
								}), db = a.length;
						else if (w.compile)
							try {
								C = w.compile(_, g, bb),
								x(C) ? o(null, C, eb, fb) : C && o(C.pre, C.post, eb, fb)
							} catch (jb) {
								i(jb, T(_))
							}
						w.terminal && (s.terminal = !0, H = Math.max(H, w.priority))
					}
					return s.scope = v && v.scope === !0,
					s.transcludeOnThisElement = U,
					s.templateOnThisElement = Y,
					s.transclude = bb,
					n.hasElementTranscludeDirective = Z,
					s
				}
				function I(a) {
					for (var b = 0, c = a.length; c > b; b++)
						a[b] = n(a[b], {
								$$isolateScope : !0
							})
				}
				function J(b, d, f, h, j, k, l) {
					if (d === j)
						return null;
					var m = null;
					if (e.hasOwnProperty(d))
						for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++)
							try {
								o = p[q],
								(h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
												$$start : k,
												$$end : l
											})), b.push(o), m = o)
							} catch (s) {
								i(s)
							}
					return m
				}
				function M(a, b) {
					var c = b.$attr,
					d = a.$attr,
					e = a.$$element;
					f(a, function (d, e) {
						"$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
					}),
					f(b, function (b, f) {
						"class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
					})
				}
				function O(a, b, c, d, e, g, h, i) {
					var j,
					k,
					n = [],
					p = b[0],
					q = a.shift(),
					r = l({}, q, {
							templateUrl : null,
							transclude : null,
							replace : null,
							$$originalDirective : q
						}),
					s = x(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
					return b.empty(),
					m.get(w.getTrustedResourceUrl(s), {
						cache : o
					}).success(function (l) {
						var m,
						o,
						u,
						v;
						if (l = $(l), q.replace) {
							if (u = lb(l) ? [] : sd(Dd(l)), m = u[0], 1 != u.length || 1 !== m.nodeType)
								throw be("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
							o = {
								$attr : {}

							},
							V(d, b, m);
							var w = E(m, [], o);
							t(q.scope) && I(w),
							a = w.concat(a),
							M(c, o)
						} else
							m = p, b.html(l);
						for (a.unshift(r), j = H(a, m, c, e, b, q, g, h, i), f(d, function (a, c) {
								a == m && (d[c] = b[0])
							}), k = C(b[0].childNodes, e); n.length; ) {
							var x = n.shift(),
							y = n.shift(),
							z = n.shift(),
							A = n.shift(),
							F = b[0];
							if (y !== p) {
								var G = y.className;
								i.hasElementTranscludeDirective && q.replace || (F = pb(m)),
								V(z, sd(y), F),
								B(sd(F), G)
							}
							v = j.transcludeOnThisElement ? D(x, j.transclude, A) : A,
							j(k, x, F, d, v)
						}
						n = null
					}).error(function (a, b, c, d) {
						throw be("tpload", "Failed to load template: {0}", d.url)
					}),
					function (a, b, c, d, e) {
						var f = e;
						n ? (n.push(b), n.push(c), n.push(d), n.push(f)) : (j.transcludeOnThisElement && (f = D(b, j.transclude, e)), j(k, b, c, d, f))
					}
				}
				function P(a, b) {
					var c = b.priority - a.priority;
					return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
				}
				function Q(a, b, c, d) {
					if (b)
						throw be("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
				}
				function R(a, b) {
					var c = d(b, !0);
					c && a.push({
						priority : 0,
						compile : function (a) {
							var b = a.parent(),
							d = b.length;
							return d && B(a.parent(), "ng-binding"),
							function (a, b) {
								var e = b.parent(),
								f = e.data("$binding") || [];
								f.push(c),
								e.data("$binding", f),
								d || B(e, "ng-binding"),
								a.$watch(c, function (a) {
									b[0].nodeValue = a
								})
							}
						}
					})
				}
				function S(a, b) {
					if ("srcdoc" == b)
						return w.HTML;
					var c = vd(a);
					return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? w.RESOURCE_URL : void 0
				}
				function U(a, b, c, e) {
					var f = d(c, !0);
					if (f) {
						if ("multiple" === e && "SELECT" === vd(a))
							throw be("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
						b.push({
							priority : 100,
							compile : function () {
								return {
									pre : function (b, c, g) {
										var h = g.$$observers || (g.$$observers = {});
										if (k.test(e))
											throw be("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
										f = d(g[e], !0, S(a, e)),
										f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function (a, b) {
												"class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
											}))
									}
								}
							}
						})
					}
				}
				function V(a, c, d) {
					var e,
					f,
					g = c[0],
					h = c.length,
					i = g.parentNode;
					if (a)
						for (e = 0, f = a.length; f > e; e++)
							if (a[e] == g) {
								a[e++] = d;
								for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)
									l > k ? a[j] = a[k] : delete a[j];
								a.length -= h - 1;
								break
							}
					i && i.replaceChild(d, g);
					var m = b.createDocumentFragment();
					m.appendChild(g),
					d[sd.expando] = g[sd.expando];
					for (var n = 1, o = c.length; o > n; n++) {
						var p = c[n];
						sd(p).remove(),
						m.appendChild(p),
						delete c[n]
					}
					c[0] = d,
					c.length = 1
				}
				function W(a, b) {
					return l(function () {
						return a.apply(null, arguments)
					}, a, b)
				}
				var X = function (a, b) {
					this.$$element = a,
					this.$attr = b || {}

				};
				X.prototype = {
					$normalize : Pb,
					$addClass : function (a) {
						a && a.length > 0 && y.addClass(this.$$element, a)
					},
					$removeClass : function (a) {
						a && a.length > 0 && y.removeClass(this.$$element, a)
					},
					$updateClass : function (a, b) {
						var c = Qb(a, b),
						d = Qb(b, a);
						0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d)
					},
					$set : function (a, b, d, e) {
						var g,
						h = Cb(this.$$element[0], a);
						h && (this.$$element.prop(a, b), e = h),
						this[a] = b,
						e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))),
						g = vd(this.$$element),
						("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = z(b, "src" === a)),
						d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
						var j = this.$$observers;
						j && f(j[a], function (a) {
							try {
								a(b)
							} catch (c) {
								i(c)
							}
						})
					},
					$observe : function (a, b) {
						var c = this,
						d = c.$$observers || (c.$$observers = {}),
						e = d[a] || (d[a] = []);
						return e.push(b),
						s.$evalAsync(function () {
							e.$$inter || b(c[a])
						}),
						b
					}
				};
				var Y = d.startSymbol(),
				Z = d.endSymbol(),
				$ = "{{" == Y || "}}" == Z ? p : function (a) {
					return a.replace(/\{\{/g, Y).replace(/}}/g, Z)
				},
				ab = /^ngAttr[A-Z]/;
				return A
			}
		]
	}
	function Pb(a) {
		return jb(a.replace(ce, ""))
	}
	function Qb(a, b) {
		var c = "",
		d = a.split(/\s+/),
		e = b.split(/\s+/);
		a : for (var f = 0; f < d.length; f++) {
			for (var g = d[f], h = 0; h < e.length; h++)
				if (g == e[h])
					continue a;
			c += (c.length > 0 ? " " : "") + g
		}
		return c
	}
	function Rb() {
		var a = {},
		b = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function (b, c) {
			db(b, "controller"),
			t(b) ? l(a, b) : a[b] = c
		},
		this.$get = ["$injector", "$window", function (c, e) {
				return function (f, g) {
					var h,
					i,
					j,
					k;
					if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
						if (!g || "object" != typeof g.$scope)
							throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
						g.$scope[k] = h
					}
					return h
				}
			}
		]
	}
	function Sb() {
		this.$get = ["$window", function (a) {
				return sd(a.document)
			}
		]
	}
	function Tb() {
		this.$get = ["$log", function (a) {
				return function () {
					a.error.apply(a, arguments)
				}
			}
		]
	}
	function Ub(a) {
		var b,
		c,
		d,
		e = {};
		return a ? (f(a.split("\n"), function (a) {
				d = a.indexOf(":"),
				b = md(Dd(a.substr(0, d))),
				c = Dd(a.substr(d + 1)),
				b && (e[b] = e[b] ? e[b] + ", " + c : c)
			}), e) : e
	}
	function Vb(a) {
		var b = t(a) ? a : c;
		return function (c) {
			return b || (b = Ub(a)),
			c ? b[md(c)] || null : b
		}
	}
	function Wb(a, b, c) {
		return x(c) ? c(a, b) : (f(c, function (c) {
				a = c(a, b)
			}), a)
	}
	function Xb(a) {
		return a >= 200 && 300 > a
	}
	function Yb() {
		var a = /^\s*(\[|\{[^\{])/,
		b = /[\}\]]\s*$/,
		d = /^\)\]\}',?\n/,
		e = {
			"Content-Type" : "application/json;charset=utf-8"
		},
		g = this.defaults = {
			transformResponse : [function (c) {
					return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))),
					c
				}
			],
			transformRequest : [function (a) {
					return !t(a) || B(a) || C(a) ? a : Q(a)
				}
			],
			headers : {
				common : {
					Accept : "application/json, text/plain, */*"
				},
				post : K(e),
				put : K(e),
				patch : K(e)
			},
			xsrfCookieName : "XSRF-TOKEN",
			xsrfHeaderName : "X-XSRF-TOKEN"
		},
		i = this.interceptors = [],
		j = this.responseInterceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, d, e, k, m) {
				function n(a) {
					function b(a) {
						var b = l({}, a, {
								data : Wb(a.data, a.headers, e.transformResponse)
							});
						return Xb(a.status) ? b : k.reject(b)
					}
					function d(a) {
						function b(a) {
							var b;
							f(a, function (c, d) {
								x(c) && (b = c(), null != b ? a[d] = b : delete a[d])
							})
						}
						var c,
						d,
						e,
						h = g.headers,
						i = l({}, a.headers);
						h = l({}, h.common, h[md(a.method)]);
						a : for (c in h) {
							d = md(c);
							for (e in i)
								if (md(e) === d)
									continue a;
							i[c] = h[c]
						}
						return b(i),
						i
					}
					var e = {
						method : "get",
						transformRequest : g.transformRequest,
						transformResponse : g.transformResponse
					},
					h = d(a);
					l(e, a),
					e.headers = h,
					e.method = od(e.method);
					var i = function (a) {
						h = a.headers;
						var c = Wb(a.data, Vb(h), a.transformRequest);
						return r(c) && f(h, function (a, b) {
							"content-type" === md(b) && delete h[b]
						}),
						r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials),
						q(a, c, h).then(b, b)
					},
					j = [i, c],
					m = k.when(e);
					for (f(z, function (a) {
							(a.request || a.requestError) && j.unshift(a.request, a.requestError),
							(a.response || a.responseError) && j.push(a.response, a.responseError)
						}); j.length; ) {
						var n = j.shift(),
						o = j.shift();
						m = m.then(n, o)
					}
					return m.success = function (a) {
						return m.then(function (b) {
							a(b.data, b.status, b.headers, e)
						}),
						m
					},
					m.error = function (a) {
						return m.then(null, function (b) {
							a(b.data, b.status, b.headers, e)
						}),
						m
					},
					m
				}
				function o() {
					f(arguments, function (a) {
						n[a] = function (b, c) {
							return n(l(c || {}, {
									method : a,
									url : b
								}))
						}
					})
				}
				function p() {
					f(arguments, function (a) {
						n[a] = function (b, c, d) {
							return n(l(d || {}, {
									method : a,
									url : b,
									data : c
								}))
						}
					})
				}
				function q(d, f, h) {
					function i(a, b, c, d) {
						m && (Xb(a) ? m.put(u, [a, b, Ub(c), d]) : m.remove(u)),
						j(b, a, c, d),
						e.$$phase || e.$apply()
					}
					function j(a, b, c, e) {
						b = Math.max(b, 0),
						(Xb(b) ? p.resolve : p.reject)({
							data : a,
							status : b,
							headers : Vb(c),
							config : d,
							statusText : e
						})
					}
					function l() {
						var a = H(n.pendingRequests, d);
						-1 !== a && n.pendingRequests.splice(a, 1)
					}
					var m,
					o,
					p = k.defer(),
					q = p.promise,
					u = v(d.url, d.params);
					if (n.pendingRequests.push(d), q.then(l, l), (d.cache || g.cache) && d.cache !== !1 && "GET" == d.method && (m = t(d.cache) ? d.cache : t(g.cache) ? g.cache : y), m)
						if (o = m.get(u), s(o)) {
							if (D(o))
								return o.then(l, l), o;
							Cd(o) ? j(o[1], o[0], K(o[2]), o[3]) : j(o, 200, {}, "OK")
						} else
							m.put(u, q);
					if (r(o)) {
						var w = Lc(d.url) ? b.cookies()[d.xsrfCookieName || g.xsrfCookieName] : c;
						w && (h[d.xsrfHeaderName || g.xsrfHeaderName] = w),
						a(d.method, u, f, i, h, d.timeout, d.withCredentials, d.responseType)
					}
					return q
				}
				function v(a, b) {
					if (!b)
						return a;
					var c = [];
					return h(b, function (a, b) {
						null === a || r(a) || (Cd(a) || (a = [a]), f(a, function (a) {
								t(a) && (w(a) ? a = a.toISOString() : t(a) && (a = Q(a))),
								c.push(Y(b) + "=" + Y(a))
							}))
					}),
					c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")),
					a
				}
				var y = d("$http"),
				z = [];
				return f(i, function (a) {
					z.unshift(u(a) ? m.get(a) : m.invoke(a))
				}),
				f(j, function (a, b) {
					var c = u(a) ? m.get(a) : m.invoke(a);
					z.splice(b, 0, {
						response : function (a) {
							return c(k.when(a))
						},
						responseError : function (a) {
							return c(k.reject(a))
						}
					})
				}),
				n.pendingRequests = [],
				o("get", "delete", "head", "jsonp"),
				p("post", "put"),
				n.defaults = g,
				n
			}
		]
	}
	function Zb(b) {
		if (8 >= rd && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest))
			return new a.ActiveXObject("Microsoft.XMLHTTP");
		if (a.XMLHttpRequest)
			return new a.XMLHttpRequest;
		throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
	}
	function $b() {
		this.$get = ["$browser", "$window", "$document", function (a, b, c) {
				return _b(a, Zb, a.defer, b.angular.callbacks, c[0])
			}
		]
	}
	function _b(a, b, c, d, e) {
		function g(a, b, c) {
			var f = e.createElement("script"),
			g = null;
			return f.type = "text/javascript",
			f.src = a,
			f.async = !0,
			g = function (a) {
				Kd(f, "load", g),
				Kd(f, "error", g),
				e.body.removeChild(f),
				f = null;
				var h = -1,
				i = "unknown";
				a && ("load" !== a.type || d[b].called || (a = {
							type : "error"
						}), i = a.type, h = "error" === a.type ? 404 : 200),
				c && c(h, i)
			},
			Jd(f, "load", g),
			Jd(f, "error", g),
			8 >= rd && (f.onreadystatechange = function () {
				u(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({
						type : "load"
					}))
			}),
			e.body.appendChild(f),
			g
		}
		var h = -1;
		return function (e, i, j, k, l, m, n, p) {
			function q() {
				t = h,
				v && v(),
				w && w.abort()
			}
			function r(b, d, e, f, g) {
				y && c.cancel(y),
				v = w = null,
				0 === d && (d = e ? 200 : "file" == Kc(i).protocol ? 404 : 0),
				d = 1223 === d ? 204 : d,
				g = g || "",
				b(d, e, f, g),
				a.$$completeOutstandingRequest(o)
			}
			var t;
			if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == md(e)) {
				var u = "_" + (d.counter++).toString(36);
				d[u] = function (a) {
					d[u].data = a,
					d[u].called = !0
				};
				var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function (a, b) {
						r(k, a, d[u].data, "", b),
						d[u] = o
					})
			} else {
				var w = b(e);
				if (w.open(e, i, !0), f(l, function (a, b) {
						s(a) && w.setRequestHeader(b, a)
					}), w.onreadystatechange = function () {
					if (w && 4 == w.readyState) {
						var a = null,
						b = null,
						c = "";
						t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText),
						t === h && 10 > rd || (c = w.statusText),
						r(k, t || w.status, b, a, c)
					}
				}, n && (w.withCredentials = !0), p)
					try {
						w.responseType = p
					} catch (x) {
						if ("json" !== p)
							throw x
					}
				w.send(j || null)
			}
			if (m > 0)
				var y = c(q, m);
			else
				D(m) && m.then(q)
		}
	}
	function ac() {
		var a = "{{",
		b = "}}";
		this.startSymbol = function (b) {
			return b ? (a = b, this) : a
		},
		this.endSymbol = function (a) {
			return a ? (b = a, this) : b
		},
		this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
				function f(f, i, j) {
					for (var k, l, m, n, o = 0, p = [], q = f.length, r = !1, s = []; q > o; )
						 - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, r = !0) : (o != q && p.push(f.substring(o)), o = q);
					if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1)
						throw de("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
					return !i || r ? (s.length = q, m = function (a) {
						try {
							for (var b, c = 0, g = q; g > c; c++) {
								if ("function" == typeof(b = p[c]))
									if (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null == b)
										b = "";
									else
										switch (typeof b) {
										case "string":
											break;
										case "number":
											b = "" + b;
											break;
										default:
											b = Q(b)
										}
								s[c] = b
							}
							return s.join("")
						} catch (h) {
							var i = de("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
							d(i)
						}
					}, m.exp = f, m.parts = p, m) : void 0
				}
				var g = a.length,
				h = b.length;
				return f.startSymbol = function () {
					return a
				},
				f.endSymbol = function () {
					return b
				},
				f
			}
		]
	}
	function bc() {
		this.$get = ["$rootScope", "$window", "$q", function (a, b, c) {
				function d(d, f, g, h) {
					var i = b.setInterval,
					j = b.clearInterval,
					k = c.defer(),
					l = k.promise,
					m = 0,
					n = s(h) && !h;
					return g = s(g) ? g : 0,
					l.then(null, null, d),
					l.$$intervalId = i(function () {
							k.notify(m++),
							g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]),
							n || a.$apply()
						}, f),
					e[l.$$intervalId] = k,
					l
				}
				var e = {};
				return d.cancel = function (a) {
					return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
				},
				d
			}
		]
	}
	function cc() {
		this.$get = function () {
			return {
				id : "en-us",
				NUMBER_FORMATS : {
					DECIMAL_SEP : ".",
					GROUP_SEP : ",",
					PATTERNS : [{
							minInt : 1,
							minFrac : 0,
							maxFrac : 3,
							posPre : "",
							posSuf : "",
							negPre : "-",
							negSuf : "",
							gSize : 3,
							lgSize : 3
						}, {
							minInt : 1,
							minFrac : 2,
							maxFrac : 2,
							posPre : "¤",
							posSuf : "",
							negPre : "(¤",
							negSuf : ")",
							gSize : 3,
							lgSize : 3
						}
					],
					CURRENCY_SYM : "$"
				},
				DATETIME_FORMATS : {
					MONTH : "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
					SHORTMONTH : "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
					DAY : "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
					SHORTDAY : "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
					AMPMS : ["AM", "PM"],
					medium : "MMM d, y h:mm:ss a",
					"short" : "M/d/yy h:mm a",
					fullDate : "EEEE, MMMM d, y",
					longDate : "MMMM d, y",
					mediumDate : "MMM d, y",
					shortDate : "M/d/yy",
					mediumTime : "h:mm:ss a",
					shortTime : "h:mm a"
				},
				pluralCat : function (a) {
					return 1 === a ? "one" : "other"
				}
			}
		}
	}
	function dc(a) {
		for (var b = a.split("/"), c = b.length; c--; )
			b[c] = X(b[c]);
		return b.join("/")
	}
	function ec(a, b, c) {
		var d = Kc(a, c);
		b.$$protocol = d.protocol,
		b.$$host = d.hostname,
		b.$$port = m(d.port) || fe[d.protocol] || null
	}
	function fc(a, b, c) {
		var d = "/" !== a.charAt(0);
		d && (a = "/" + a);
		var e = Kc(a, c);
		b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname),
		b.$$search = V(e.search),
		b.$$hash = decodeURIComponent(e.hash),
		b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
	}
	function gc(a, b) {
		return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
	}
	function hc(a) {
		var b = a.indexOf("#");
		return -1 == b ? a : a.substr(0, b)
	}
	function ic(a) {
		return a.substr(0, hc(a).lastIndexOf("/") + 1)
	}
	function jc(a) {
		return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
	}
	function kc(a, b) {
		this.$$html5 = !0,
		b = b || "";
		var d = ic(a);
		ec(a, this, a),
		this.$$parse = function (b) {
			var c = gc(d, b);
			if (!u(c))
				throw ge("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
			fc(c, this, a),
			this.$$path || (this.$$path = "/"),
			this.$$compose()
		},
		this.$$compose = function () {
			var a = W(this.$$search),
			b = this.$$hash ? "#" + X(this.$$hash) : "";
			this.$$url = dc(this.$$path) + (a ? "?" + a : "") + b,
			this.$$absUrl = d + this.$$url.substr(1)
		},
		this.$$rewrite = function (e) {
			var f,
			g;
			return (f = gc(a, e)) !== c ? (g = f, (f = gc(b, f)) !== c ? d + (gc("/", f) || f) : a + g) : (f = gc(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
		}
	}
	function lc(a, b) {
		var c = ic(a);
		ec(a, this, a),
		this.$$parse = function (d) {
			function e(a, b, c) {
				var d,
				e = /^\/[A-Z]:(\/.*)/;
				return 0 === b.indexOf(c) && (b = b.replace(c, "")),
				e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
			}
			var f = gc(a, d) || gc(c, d),
			g = "#" == f.charAt(0) ? gc(b, f) : this.$$html5 ? f : "";
			if (!u(g))
				throw ge("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
			fc(g, this, a),
			this.$$path = e(this.$$path, g, a),
			this.$$compose()
		},
		this.$$compose = function () {
			var c = W(this.$$search),
			d = this.$$hash ? "#" + X(this.$$hash) : "";
			this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d,
			this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
		},
		this.$$rewrite = function (b) {
			return hc(a) == hc(b) ? b : void 0
		}
	}
	function mc(a, b) {
		this.$$html5 = !0,
		lc.apply(this, arguments);
		var c = ic(a);
		this.$$rewrite = function (d) {
			var e;
			return a == hc(d) ? d : (e = gc(c, d)) ? a + b + e : c === d + "/" ? c : void 0
		},
		this.$$compose = function () {
			var c = W(this.$$search),
			d = this.$$hash ? "#" + X(this.$$hash) : "";
			this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d,
			this.$$absUrl = a + b + this.$$url
		}
	}
	function nc(a) {
		return function () {
			return this[a]
		}
	}
	function oc(a, b) {
		return function (c) {
			return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
		}
	}
	function pc() {
		var b = "",
		c = !1;
		this.hashPrefix = function (a) {
			return s(a) ? (b = a, this) : b
		},
		this.html5Mode = function (a) {
			return s(a) ? (c = a, this) : c
		},
		this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (d, e, f, g) {
				function h(a) {
					d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
				}
				var i,
				j,
				k,
				l = e.baseHref(),
				m = e.url();
				c ? (k = jc(m) + (l || "/"), j = f.history ? kc : mc) : (k = hc(m), j = lc),
				i = new j(k, "#" + b),
				i.$$parse(i.$$rewrite(m)),
				g.on("click", function (c) {
					if (!c.ctrlKey && !c.metaKey && 2 != c.which) {
						for (var f = sd(c.target); "a" !== md(f[0].nodeName); )
							if (f[0] === g[0] || !(f = f.parent())[0])
								return;
						var h = f.prop("href");
						if (t(h) && "[object SVGAnimatedString]" === h.toString() && (h = Kc(h.animVal).href), j === mc) {
							var l = f.attr("href") || f.attr("xlink:href");
							if (l.indexOf("://") < 0) {
								var m = "#" + b;
								if ("/" == l[0])
									h = k + m + l;
								else if ("#" == l[0])
									h = k + m + (i.path() || "/") + l;
								else {
									for (var n = i.path().split("/"), o = l.split("/"), p = 0; p < o.length; p++)
										"." != o[p] && (".." == o[p] ? n.pop() : o[p].length && n.push(o[p]));
									h = k + m + n.join("/")
								}
							}
						}
						var q = i.$$rewrite(h);
						h && !f.attr("target") && q && !c.isDefaultPrevented() && (c.preventDefault(), q != e.url() && (i.$$parse(q), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
					}
				}),
				i.absUrl() != m && e.url(i.absUrl(), !0),
				e.onUrlChange(function (a) {
					i.absUrl() != a && (d.$evalAsync(function () {
							var b = i.absUrl();
							i.$$parse(a),
							d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b)
						}), d.$$phase || d.$digest())
				});
				var n = 0;
				return d.$watch(function () {
					var a = e.url(),
					b = i.$$replace;
					return n && a == i.absUrl() || (n++, d.$evalAsync(function () {
							d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
						})),
					i.$$replace = !1,
					n
				}),
				i
			}
		]
	}
	function qc() {
		var a = !0,
		b = this;
		this.debugEnabled = function (b) {
			return s(b) ? (a = b, this) : a
		},
		this.$get = ["$window", function (c) {
				function d(a) {
					return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)),
					a
				}
				function e(a) {
					var b = c.console || {},
					e = b[a] || b.log || o,
					g = !1;
					try {
						g = !!e.apply
					} catch (h) {}

					return g ? function () {
						var a = [];
						return f(arguments, function (b) {
							a.push(d(b))
						}),
						e.apply(b, a)
					}
					 : function (a, b) {
						e(a, null == b ? "" : b)
					}
				}
				return {
					log : e("log"),
					info : e("info"),
					warn : e("warn"),
					error : e("error"),
					debug : function () {
						var c = e("debug");
						return function () {
							a && c.apply(b, arguments)
						}
					}
					()
				}
			}
		]
	}
	function rc(a, b) {
		if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)
			throw ie("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
		return a
	}
	function sc(a, b) {
		if (a) {
			if (a.constructor === a)
				throw ie("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
			if (a.document && a.location && a.alert && a.setInterval)
				throw ie("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
			if (a.children && (a.nodeName || a.prop && a.attr && a.find))
				throw ie("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
			if (a === Object)
				throw ie("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
		}
		return a
	}
	function tc(a, b) {
		if (a) {
			if (a.constructor === a)
				throw ie("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
			if (a === ke || a === le || me && a === me)
				throw ie("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
		}
	}
	function uc(a, b, d, e, f) {
		f = f || {};
		for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
			g = rc(h.shift(), e);
			var j = a[g];
			j || (j = {}, a[g] = j),
			a = j,
			a.then && f.unwrapPromises && (he(e), "$$v" in a || !function (a) {
				a.then(function (b) {
					a.$$v = b
				})
			}
				(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
		}
		return g = rc(h.shift(), e),
		sc(a, e),
		sc(a[g], e),
		a[g] = d,
		d
	}
	function vc(a, b, d, e, f, g, h) {
		return rc(a, g),
		rc(b, g),
		rc(d, g),
		rc(e, g),
		rc(f, g),
		h.unwrapPromises ? function (h, i) {
			var j,
			k = i && i.hasOwnProperty(a) ? i : h;
			return null == k ? k : (k = k[a], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
							j.$$v = a
						})), k = k.$$v), b ? null == k ? c : (k = k[b], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
								j.$$v = a
							})), k = k.$$v), d ? null == k ? c : (k = k[d], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
									j.$$v = a
								})), k = k.$$v), e ? null == k ? c : (k = k[e], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
										j.$$v = a
									})), k = k.$$v), f ? null == k ? c : (k = k[f], k && k.then && (he(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
											j.$$v = a
										})), k = k.$$v), k) : k) : k) : k) : k)
		}
		 : function (g, h) {
			var i = h && h.hasOwnProperty(a) ? h : g;
			return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i)
		}
	}
	function wc(a, b, d) {
		if (re.hasOwnProperty(a))
			return re[a];
		var e,
		g = a.split("."),
		h = g.length;
		if (b.csp)
			e = 6 > h ? vc(g[0], g[1], g[2], g[3], g[4], d, b) : function (a, e) {
				var f,
				i = 0;
				do
					f = vc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f;
				while (h > i);
				return f
			};
		else {
			var i = "var p;\n";
			f(g, function (a, c) {
				rc(a, d),
				i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
			}),
			i += "return s;";
			var j = new Function("s", "k", "pw", i);
			j.toString = q(i),
			e = b.unwrapPromises ? function (a, b) {
				return j(a, b, he)
			}
			 : j
		}
		return "hasOwnProperty" !== a && (re[a] = e),
		e
	}
	function xc() {
		var a = {},
		b = {
			csp : !1,
			unwrapPromises : !1,
			logPromiseWarnings : !0
		};
		this.unwrapPromises = function (a) {
			return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
		},
		this.logPromiseWarnings = function (a) {
			return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
		},
		this.$get = ["$filter", "$sniffer", "$log", function (c, d, e) {
				return b.csp = d.csp,
				he = function (a) {
					b.logPromiseWarnings && !je.hasOwnProperty(a) && (je[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
				},
				function (d) {
					var e;
					switch (typeof d) {
					case "string":
						if (a.hasOwnProperty(d))
							return a[d];
						var f = new pe(b),
						g = new qe(f, c, b);
						return e = g.parse(d),
						"hasOwnProperty" !== d && (a[d] = e),
						e;
					case "function":
						return d;
					default:
						return o
					}
				}
			}
		]
	}
	function yc() {
		this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
				return zc(function (b) {
					a.$evalAsync(b)
				}, b)
			}
		]
	}
	function zc(a, b) {
		function d(a) {
			return a
		}
		function e(a) {
			return j(a)
		}
		function g(a) {
			var b = h(),
			c = 0,
			d = Cd(a) ? [] : {};
			return f(a, function (a, e) {
				c++,
				i(a).then(function (a) {
					d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
				}, function (a) {
					d.hasOwnProperty(e) || b.reject(a)
				})
			}),
			0 === c && b.resolve(d),
			b.promise
		}
		var h = function () {
			var f,
			g,
			j = [];
			return g = {
				resolve : function (b) {
					if (j) {
						var d = j;
						j = c,
						f = i(b),
						d.length && a(function () {
							for (var a, b = 0, c = d.length; c > b; b++)
								a = d[b], f.then(a[0], a[1], a[2])
						})
					}
				},
				reject : function (a) {
					g.resolve(k(a))
				},
				notify : function (b) {
					if (j) {
						var c = j;
						j.length && a(function () {
							for (var a, d = 0, e = c.length; e > d; d++)
								a = c[d], a[2](b)
						})
					}
				},
				promise : {
					then : function (a, c, g) {
						var i = h(),
						k = function (c) {
							try {
								i.resolve((x(a) ? a : d)(c))
							} catch (e) {
								i.reject(e),
								b(e)
							}
						},
						l = function (a) {
							try {
								i.resolve((x(c) ? c : e)(a))
							} catch (d) {
								i.reject(d),
								b(d)
							}
						},
						m = function (a) {
							try {
								i.notify((x(g) ? g : d)(a))
							} catch (c) {
								b(c)
							}
						};
						return j ? j.push([k, l, m]) : f.then(k, l, m),
						i.promise
					},
					"catch" : function (a) {
						return this.then(null, a)
					},
					"finally" : function (a) {
						function b(a, b) {
							var c = h();
							return b ? c.resolve(a) : c.reject(a),
							c.promise
						}
						function c(c, e) {
							var f = null;
							try {
								f = (a || d)()
							} catch (g) {
								return b(g, !1)
							}
							return D(f) ? f.then(function () {
								return b(c, e)
							}, function (a) {
								return b(a, !1)
							}) : b(c, e)
						}
						return this.then(function (a) {
							return c(a, !0)
						}, function (a) {
							return c(a, !1)
						})
					}
				}
			}
		},
		i = function (b) {
			return D(b) ? b : {
				then : function (c) {
					var d = h();
					return a(function () {
						d.resolve(c(b))
					}),
					d.promise
				}
			}
		},
		j = function (a) {
			var b = h();
			return b.reject(a),
			b.promise
		},
		k = function (c) {
			return {
				then : function (d, f) {
					var g = h();
					return a(function () {
						try {
							g.resolve((x(f) ? f : e)(c))
						} catch (a) {
							g.reject(a),
							b(a)
						}
					}),
					g.promise
				}
			}
		},
		l = function (c, f, g, k) {
			var l,
			m = h(),
			n = function (a) {
				try {
					return (x(f) ? f : d)(a)
				} catch (c) {
					return b(c),
					j(c)
				}
			},
			o = function (a) {
				try {
					return (x(g) ? g : e)(a)
				} catch (c) {
					return b(c),
					j(c)
				}
			},
			p = function (a) {
				try {
					return (x(k) ? k : d)(a)
				} catch (c) {
					b(c)
				}
			};
			return a(function () {
				i(c).then(function (a) {
					l || (l = !0, m.resolve(i(a).then(n, o, p)))
				}, function (a) {
					l || (l = !0, m.resolve(o(a)))
				}, function (a) {
					l || m.notify(p(a))
				})
			}),
			m.promise
		};
		return {
			defer : h,
			reject : j,
			when : l,
			all : g
		}
	}
	function Ac() {
		this.$get = ["$window", "$timeout", function (a, b) {
				var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame,
				d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
				e = !!c,
				f = e ? function (a) {
					var b = c(a);
					return function () {
						d(b)
					}
				}
				 : function (a) {
					var c = b(a, 16.66, !1);
					return function () {
						b.cancel(c)
					}
				};
				return f.supported = e,
				f
			}
		]
	}
	function Bc() {
		var a = 10,
		b = d("$rootScope"),
		c = null;
		this.digestTtl = function (b) {
			return arguments.length && (a = b),
			a
		},
		this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, g, h, i) {
				function k() {
					this.$id = j(),
					this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
					this["this"] = this.$root = this,
					this.$$destroyed = !1,
					this.$$asyncQueue = [],
					this.$$postDigestQueue = [],
					this.$$listeners = {},
					this.$$listenerCount = {},
					this.$$isolateBindings = {}

				}
				function l(a) {
					if (r.$$phase)
						throw b("inprog", "{0} already in progress", r.$$phase);
					r.$$phase = a
				}
				function m() {
					r.$$phase = null
				}
				function n(a, b) {
					var c = h(a);
					return cb(c, b),
					c
				}
				function p(a, b, c) {
					do
						a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
					while (a = a.$parent)
				}
				function q() {}

				k.prototype = {
					constructor : k,
					$new : function (a) {
						var b;
						return a ? (b = new k, b.$root = this.$root, b.$$asyncQueue = this.$$asyncQueue, b.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
								this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
								this.$$listeners = {},
								this.$$listenerCount = {},
								this.$id = j(),
								this.$$childScopeClass = null
							}, this.$$childScopeClass.prototype = this), b = new this.$$childScopeClass),
						b["this"] = b,
						b.$parent = this,
						b.$$prevSibling = this.$$childTail,
						this.$$childHead ? (this.$$childTail.$$nextSibling = b, this.$$childTail = b) : this.$$childHead = this.$$childTail = b,
						b
					},
					$watch : function (a, b, d) {
						var e = this,
						f = n(a, "watch"),
						g = e.$$watchers,
						h = {
							fn : b,
							last : q,
							get : f,
							exp : a,
							eq : !!d
						};
						if (c = null, !x(b)) {
							var i = n(b || o, "listener");
							h.fn = function (a, b, c) {
								i(c)
							}
						}
						if ("string" == typeof a && f.constant) {
							var j = h.fn;
							h.fn = function (a, b, c) {
								j.call(this, a, b, c),
								I(g, h)
							}
						}
						return g || (g = e.$$watchers = []),
						g.unshift(h),
						function () {
							I(g, h),
							c = null
						}
					},
					$watchCollection : function (a, b) {
						function c() {
							f = m(j);
							var a,
							b,
							c;
							if (t(f))
								if (e(f)) {
									g !== n && (g = n, q = g.length = 0, l++),
									a = f.length,
									q !== a && (l++, g.length = q = a);
									for (var d = 0; a > d; d++)
										c = g[d] !== g[d] && f[d] !== f[d], c || g[d] === f[d] || (l++, g[d] = f[d])
								} else {
									g !== o && (g = o = {}, q = 0, l++),
									a = 0;
									for (b in f)
										f.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? (c = g[b] !== g[b] && f[b] !== f[b], c || g[b] === f[b] || (l++, g[b] = f[b])) : (q++, g[b] = f[b], l++));
									if (q > a) {
										l++;
										for (b in g)
											g.hasOwnProperty(b) && !f.hasOwnProperty(b) && (q--, delete g[b])
									}
								}
							else
								g !== f && (g = f, l++);
							return l
						}
						function d() {
							if (p ? (p = !1, b(f, f, j)) : b(f, i, j), k)
								if (t(f))
									if (e(f)) {
										i = new Array(f.length);
										for (var a = 0; a < f.length; a++)
											i[a] = f[a]
									} else {
										i = {};
										for (var c in f)
											nd.call(f, c) && (i[c] = f[c])
									}
								else
									i = f
						}
						var f,
						g,
						i,
						j = this,
						k = b.length > 1,
						l = 0,
						m = h(a),
						n = [],
						o = {},
						p = !0,
						q = 0;
						return this.$watch(c, d)
					},
					$digest : function () {
						var d,
						e,
						f,
						h,
						i,
						j,
						k,
						n,
						o,
						p,
						r,
						s = this.$$asyncQueue,
						t = this.$$postDigestQueue,
						u = a,
						v = this,
						w = [];
						l("$digest"),
						c = null;
						do {
							for (j = !1, n = v; s.length; ) {
								try {
									r = s.shift(),
									r.scope.$eval(r.expression)
								} catch (y) {
									m(),
									g(y)
								}
								c = null
							}
							a : do {
								if (h = n.$$watchers)
									for (i = h.length; i--; )
										try {
											if (d = h[i])
												if ((e = d.get(n)) === (f = d.last) || (d.eq ? L(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
													if (d === c) {
														j = !1;
														break a
													}
												} else
													j = !0, c = d, d.last = d.eq ? J(e, null) : e, d.fn(e, f === q ? e : f, n), 5 > u && (o = 4 - u, w[o] || (w[o] = []), p = x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, p += "; newVal: " + Q(e) + "; oldVal: " + Q(f), w[o].push(p))
										} catch (y) {
											m(),
											g(y)
										}
								if (!(k = n.$$childHead || n !== v && n.$$nextSibling))
									for (; n !== v && !(k = n.$$nextSibling); )
										n = n.$parent
							} while (n = k);
							if ((j || s.length) && !u--)
								throw m(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(w))
						} while (j || s.length);
						for (m(); t.length; )
							try {
								t.shift()()
							} catch (y) {
								g(y)
							}
					},
					$destroy : function () {
						if (!this.$$destroyed) {
							var a = this.$parent;
							this.$broadcast("$destroy"),
							this.$$destroyed = !0,
							this !== r && (f(this.$$listenerCount, O(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = o, this.$on = this.$watch = function () {
								return o
							})
						}
					},
					$eval : function (a, b) {
						return h(a)(this, b)
					},
					$evalAsync : function (a) {
						r.$$phase || r.$$asyncQueue.length || i.defer(function () {
							r.$$asyncQueue.length && r.$digest()
						}),
						this.$$asyncQueue.push({
							scope : this,
							expression : a
						})
					},
					$$postDigest : function (a) {
						this.$$postDigestQueue.push(a)
					},
					$apply : function (a) {
						try {
							return l("$apply"),
							this.$eval(a)
						} catch (b) {
							g(b)
						}
						finally {
							m();
							try {
								r.$digest()
							} catch (b) {
								throw g(b),
								b
							}
						}
					},
					$on : function (a, b) {
						var c = this.$$listeners[a];
						c || (this.$$listeners[a] = c = []),
						c.push(b);
						var d = this;
						do
							d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
						while (d = d.$parent);
						var e = this;
						return function () {
							c[H(c, b)] = null,
							p(e, 1, a)
						}
					},
					$emit : function (a) {
						var b,
						c,
						d,
						e = [],
						f = this,
						h = !1,
						i = {
							name : a,
							targetScope : f,
							stopPropagation : function () {
								h = !0
							},
							preventDefault : function () {
								i.defaultPrevented = !0
							},
							defaultPrevented : !1
						},
						j = M([i], arguments, 1);
						do {
							for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)
								if (b[c])
									try {
										b[c].apply(null, j)
									} catch (k) {
										g(k)
									}
								else
									b.splice(c, 1), c--, d--;
							if (h)
								return i;
							f = f.$parent
						} while (f);
						return i
					},
					$broadcast : function (a) {
						for (var b, c, d, e = this, f = e, h = e, i = {
								name : a,
								targetScope : e,
								preventDefault : function () {
									i.defaultPrevented = !0
								},
								defaultPrevented : !1
							}, j = M([i], arguments, 1); f = h; ) {
							for (i.currentScope = f, b = f.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)
								if (b[c])
									try {
										b[c].apply(null, j)
									} catch (k) {
										g(k)
									}
								else
									b.splice(c, 1), c--, d--;
							if (!(h = f.$$listenerCount[a] && f.$$childHead || f !== e && f.$$nextSibling))
								for (; f !== e && !(h = f.$$nextSibling); )
									f = f.$parent
						}
						return i
					}
				};
				var r = new k;
				return r
			}
		]
	}
	function Cc() {
		var a = /^\s*(https?|ftp|mailto|tel|file):/,
		b = /^\s*(https?|ftp|file):|data:image\//;
		this.aHrefSanitizationWhitelist = function (b) {
			return s(b) ? (a = b, this) : a
		},
		this.imgSrcSanitizationWhitelist = function (a) {
			return s(a) ? (b = a, this) : b
		},
		this.$get = function () {
			return function (c, d) {
				var e,
				f = d ? b : a;
				return rd && !(rd >= 8) || (e = Kc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e
			}
		}
	}
	function Dc(a) {
		return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
	}
	function Ec(a) {
		if ("self" === a)
			return a;
		if (u(a)) {
			if (a.indexOf("***") > -1)
				throw se("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
			return a = Dc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"),
			new RegExp("^" + a + "$")
		}
		if (y(a))
			return new RegExp("^" + a.source + "$");
		throw se("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
	}
	function Fc(a) {
		var b = [];
		return s(a) && f(a, function (a) {
			b.push(Ec(a))
		}),
		b
	}
	function Gc() {
		this.SCE_CONTEXTS = te;
		var a = ["self"],
		b = [];
		this.resourceUrlWhitelist = function (b) {
			return arguments.length && (a = Fc(b)),
			a
		},
		this.resourceUrlBlacklist = function (a) {
			return arguments.length && (b = Fc(a)),
			b
		},
		this.$get = ["$injector", function (d) {
				function e(a, b) {
					return "self" === a ? Lc(b) : !!a.exec(b.href)
				}
				function f(c) {
					var d,
					f,
					g = Kc(c.toString()),
					h = !1;
					for (d = 0, f = a.length; f > d; d++)
						if (e(a[d], g)) {
							h = !0;
							break
						}
					if (h)
						for (d = 0, f = b.length; f > d; d++)
							if (e(b[d], g)) {
								h = !1;
								break
							}
					return h
				}
				function g(a) {
					var b = function (a) {
						this.$$unwrapTrustedValue = function () {
							return a
						}
					};
					return a && (b.prototype = new a),
					b.prototype.valueOf = function () {
						return this.$$unwrapTrustedValue()
					},
					b.prototype.toString = function () {
						return this.$$unwrapTrustedValue().toString()
					},
					b
				}
				function h(a, b) {
					var d = m.hasOwnProperty(a) ? m[a] : null;
					if (!d)
						throw se("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
					if (null === b || b === c || "" === b)
						return b;
					if ("string" != typeof b)
						throw se("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
					return new d(b)
				}
				function i(a) {
					return a instanceof l ? a.$$unwrapTrustedValue() : a
				}
				function j(a, b) {
					if (null === b || b === c || "" === b)
						return b;
					var d = m.hasOwnProperty(a) ? m[a] : null;
					if (d && b instanceof d)
						return b.$$unwrapTrustedValue();
					if (a === te.RESOURCE_URL) {
						if (f(b))
							return b;
						throw se("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
					}
					if (a === te.HTML)
						return k(b);
					throw se("unsafe", "Attempting to use an unsafe value in a safe context.")
				}
				var k = function () {
					throw se("unsafe", "Attempting to use an unsafe value in a safe context.")
				};
				d.has("$sanitize") && (k = d.get("$sanitize"));
				var l = g(),
				m = {};
				return m[te.HTML] = g(l),
				m[te.CSS] = g(l),
				m[te.URL] = g(l),
				m[te.JS] = g(l),
				m[te.RESOURCE_URL] = g(m[te.URL]), {
					trustAs : h,
					getTrusted : j,
					valueOf : i
				}
			}
		]
	}
	function Hc() {
		var a = !0;
		this.enabled = function (b) {
			return arguments.length && (a = !!b),
			a
		},
		this.$get = ["$parse", "$sniffer", "$sceDelegate", function (b, c, d) {
				if (a && c.msie && c.msieDocumentMode < 8)
					throw se("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
				var e = K(te);
				e.isEnabled = function () {
					return a
				},
				e.trustAs = d.trustAs,
				e.getTrusted = d.getTrusted,
				e.valueOf = d.valueOf,
				a || (e.trustAs = e.getTrusted = function (a, b) {
					return b
				}, e.valueOf = p),
				e.parseAs = function (a, c) {
					var d = b(c);
					return d.literal && d.constant ? d : function (b, c) {
						return e.getTrusted(a, d(b, c))
					}
				};
				var g = e.parseAs,
				h = e.getTrusted,
				i = e.trustAs;
				return f(te, function (a, b) {
					var c = md(b);
					e[jb("parse_as_" + c)] = function (b) {
						return g(a, b)
					},
					e[jb("get_trusted_" + c)] = function (b) {
						return h(a, b)
					},
					e[jb("trust_as_" + c)] = function (b) {
						return i(a, b)
					}
				}),
				e
			}
		]
	}
	function Ic() {
		this.$get = ["$window", "$document", function (a, b) {
				var c,
				d,
				e = {},
				f = m((/android (\d+)/.exec(md((a.navigator || {}).userAgent)) || [])[1]),
				g = /Boxee/i.test((a.navigator || {}).userAgent),
				h = b[0] || {},
				i = h.documentMode,
				j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
				k = h.body && h.body.style,
				l = !1,
				n = !1;
				if (k) {
					for (var o in k)
						if (d = j.exec(o)) {
							c = d[0],
							c = c.substr(0, 1).toUpperCase() + c.substr(1);
							break
						}
					c || (c = "WebkitOpacity" in k && "webkit"),
					l = !!("transition" in k || c + "Transition" in k),
					n = !!("animation" in k || c + "Animation" in k),
					!f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
				}
				return {
					history : !(!a.history || !a.history.pushState || 4 > f || g),
					hashchange : "onhashchange" in a && (!i || i > 7),
					hasEvent : function (a) {
						if ("input" == a && 9 == rd)
							return !1;
						if (r(e[a])) {
							var b = h.createElement("div");
							e[a] = "on" + a in b
						}
						return e[a]
					},
					csp : Ed(),
					vendorPrefix : c,
					transitions : l,
					animations : n,
					android : f,
					msie : rd,
					msieDocumentMode : i
				}
			}
		]
	}
	function Jc() {
		this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (a, b, c, d) {
				function e(e, g, h) {
					var i,
					j = c.defer(),
					k = j.promise,
					l = s(h) && !h;
					return i = b.defer(function () {
							try {
								j.resolve(e())
							} catch (b) {
								j.reject(b),
								d(b)
							}
							finally {
								delete f[k.$$timeoutId]
							}
							l || a.$apply()
						}, g),
					k.$$timeoutId = i,
					f[i] = j,
					k
				}
				var f = {};
				return e.cancel = function (a) {
					return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
				},
				e
			}
		]
	}
	function Kc(a) {
		var b = a;
		return rd && (ue.setAttribute("href", b), b = ue.href),
		ue.setAttribute("href", b), {
			href : ue.href,
			protocol : ue.protocol ? ue.protocol.replace(/:$/, "") : "",
			host : ue.host,
			search : ue.search ? ue.search.replace(/^\?/, "") : "",
			hash : ue.hash ? ue.hash.replace(/^#/, "") : "",
			hostname : ue.hostname,
			port : ue.port,
			pathname : "/" === ue.pathname.charAt(0) ? ue.pathname : "/" + ue.pathname
		}
	}
	function Lc(a) {
		var b = u(a) ? Kc(a) : a;
		return b.protocol === ve.protocol && b.host === ve.host
	}
	function Mc() {
		this.$get = q(a)
	}
	function Nc(a) {
		function b(d, e) {
			if (t(d)) {
				var g = {};
				return f(d, function (a, c) {
					g[c] = b(c, a)
				}),
				g
			}
			return a.factory(d + c, e)
		}
		var c = "Filter";
		this.register = b,
		this.$get = ["$injector", function (a) {
				return function (b) {
					return a.get(b + c)
				}
			}
		],
		b("currency", Pc),
		b("date", Xc),
		b("filter", Oc),
		b("json", Yc),
		b("limitTo", Zc),
		b("lowercase", Ae),
		b("number", Qc),
		b("orderBy", $c),
		b("uppercase", Be)
	}
	function Oc() {
		return function (a, b, c) {
			if (!Cd(a))
				return a;
			var d = typeof c,
			e = [];
			e.check = function (a) {
				for (var b = 0; b < e.length; b++)
					if (!e[b](a))
						return !1;
				return !0
			},
			"function" !== d && (c = "boolean" === d && c ? function (a, b) {
				return Ad.equals(a, b)
			}
				 : function (a, b) {
				if (a && b && "object" == typeof a && "object" == typeof b) {
					for (var d in a)
						if ("$" !== d.charAt(0) && nd.call(a, d) && c(a[d], b[d]))
							return !0;
					return !1
				}
				return b = ("" + b).toLowerCase(),
				("" + a).toLowerCase().indexOf(b) > -1
			});
			var f = function (a, b) {
				if ("string" == typeof b && "!" === b.charAt(0))
					return !f(a, b.substr(1));
				switch (typeof a) {
				case "boolean":
				case "number":
				case "string":
					return c(a, b);
				case "object":
					switch (typeof b) {
					case "object":
						return c(a, b);
					default:
						for (var d in a)
							if ("$" !== d.charAt(0) && f(a[d], b))
								return !0
					}
					return !1;
				case "array":
					for (var e = 0; e < a.length; e++)
						if (f(a[e], b))
							return !0;
					return !1;
				default:
					return !1
				}
			};
			switch (typeof b) {
			case "boolean":
			case "number":
			case "string":
				b = {
					$ : b
				};
			case "object":
				for (var g in b)
					!function (a) {
						"undefined" != typeof b[a] && e.push(function (c) {
							return f("$" == a ? c : c && c[a], b[a])
						})
					}
				(g);
				break;
			case "function":
				e.push(b);
				break;
			default:
				return a
			}
			for (var h = [], i = 0; i < a.length; i++) {
				var j = a[i];
				e.check(j) && h.push(j)
			}
			return h
		}
	}
	function Pc(a) {
		var b = a.NUMBER_FORMATS;
		return function (a, c) {
			return r(c) && (c = b.CURRENCY_SYM),
			Rc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
		}
	}
	function Qc(a) {
		var b = a.NUMBER_FORMATS;
		return function (a, c) {
			return Rc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
		}
	}
	function Rc(a, b, c, d, e) {
		if (null == a || !isFinite(a) || t(a))
			return "";
		var f = 0 > a;
		a = Math.abs(a);
		var g = a + "",
		h = "",
		i = [],
		j = !1;
		if (-1 !== g.indexOf("e")) {
			var k = g.match(/([\d\.]+)e(-?)(\d+)/);
			k && "-" == k[2] && k[3] > e + 1 ? (g = "0", a = 0) : (h = g, j = !0)
		}
		if (j)
			e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
		else {
			var l = (g.split(we)[1] || "").length;
			r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)),
			a =  + (Math.round( + (a.toString() + "e" + e)).toString() + "e" + -e);
			var m = ("" + a).split(we),
			n = m[0];
			m = m[1] || "";
			var o,
			p = 0,
			q = b.lgSize,
			s = b.gSize;
			if (n.length >= q + s)
				for (p = n.length - q, o = 0; p > o; o++)
					(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
			for (o = p; o < n.length; o++)
				(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
			for (; m.length < e; )
				m += "0";
			e && "0" !== e && (h += d + m.substr(0, e))
		}
		return i.push(f ? b.negPre : b.posPre),
		i.push(h),
		i.push(f ? b.negSuf : b.posSuf),
		i.join("")
	}
	function Sc(a, b, c) {
		var d = "";
		for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; )
			a = "0" + a;
		return c && (a = a.substr(a.length - b)),
		d + a
	}
	function Tc(a, b, c, d) {
		return c = c || 0,
		function (e) {
			var f = e["get" + a]();
			return (c > 0 || f > -c) && (f += c),
			0 === f && -12 == c && (f = 12),
			Sc(f, b, d)
		}
	}
	function Uc(a, b) {
		return function (c, d) {
			var e = c["get" + a](),
			f = od(b ? "SHORT" + a : a);
			return d[f][e]
		}
	}
	function Vc(a) {
		var b = -1 * a.getTimezoneOffset(),
		c = b >= 0 ? "+" : "";
		return c += Sc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Sc(Math.abs(b % 60), 2)
	}
	function Wc(a, b) {
		return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
	}
	function Xc(a) {
		function b(a) {
			var b;
			if (b = a.match(c)) {
				var d = new Date(0),
				e = 0,
				f = 0,
				g = b[8] ? d.setUTCFullYear : d.setFullYear,
				h = b[8] ? d.setUTCHours : d.setHours;
				b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])),
				g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
				var i = m(b[4] || 0) - e,
				j = m(b[5] || 0) - f,
				k = m(b[6] || 0),
				l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
				return h.call(d, i, j, k, l),
				d
			}
			return a
		}
		var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function (c, d) {
			var e,
			g,
			h = "",
			i = [];
			if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ze.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c))
				return c;
			for (; d; )
				g = ye.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
			return f(i, function (b) {
				e = xe[b],
				h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}),
			h
		}
	}
	function Yc() {
		return function (a) {
			return Q(a, !0)
		}
	}
	function Zc() {
		return function (a, b) {
			if (!Cd(a) && !u(a))
				return a;
			if (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), u(a))
				return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
			var c,
			d,
			e = [];
			for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++)
				e.push(a[c]);
			return e
		}
	}
	function $c(a) {
		return function (b, c, d) {
			function e(a, b) {
				for (var d = 0; d < c.length; d++) {
					var e = c[d](a, b);
					if (0 !== e)
						return e
				}
				return 0
			}
			function f(a, b) {
				return S(b) ? function (b, c) {
					return a(c, b)
				}
				 : a
			}
			function g(a, b) {
				var c = typeof a,
				d = typeof b;
				return c == d ? (w(a) && w(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
			}
			if (!Cd(b))
				return b;
			if (!c)
				return b;
			c = Cd(c) ? c : [c],
			c = F(c, function (b) {
					var c = !1,
					d = b || p;
					if (u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b), d.constant)) {
						var e = d();
						return f(function (a, b) {
							return g(a[e], b[e])
						}, c)
					}
					return f(function (a, b) {
						return g(d(a), d(b))
					}, c)
				});
			for (var h = [], i = 0; i < b.length; i++)
				h.push(b[i]);
			return h.sort(f(e, d))
		}
	}
	function _c(a) {
		return x(a) && (a = {
				link : a
			}),
		a.restrict = a.restrict || "AC",
		q(a)
	}
	function ad(a, b, c, d) {
		function e(b, c) {
			c = c ? "-" + _(c, "-") : "",
			d.removeClass(a, (b ? Pe : Oe) + c),
			d.addClass(a, (b ? Oe : Pe) + c)
		}
		var g = this,
		h = a.parent().controller("form") || Ee,
		i = 0,
		j = g.$error = {},
		k = [];
		g.$name = b.name || b.ngForm,
		g.$dirty = !1,
		g.$pristine = !0,
		g.$valid = !0,
		g.$invalid = !1,
		h.$addControl(g),
		a.addClass(Qe),
		e(!0),
		g.$addControl = function (a) {
			db(a.$name, "input"),
			k.push(a),
			a.$name && (g[a.$name] = a)
		},
		g.$removeControl = function (a) {
			a.$name && g[a.$name] === a && delete g[a.$name],
			f(j, function (b, c) {
				g.$setValidity(c, !0, a)
			}),
			I(k, a)
		},
		g.$setValidity = function (a, b, c) {
			var d = j[a];
			if (b)
				d && (I(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), j[a] = !1, e(!0, a), h.$setValidity(a, !0, g)));
			else {
				if (i || e(b), d) {
					if (G(d, c))
						return
				} else
					j[a] = d = [], i++, e(!1, a), h.$setValidity(a, !1, g);
				d.push(c),
				g.$valid = !1,
				g.$invalid = !0
			}
		},
		g.$setDirty = function () {
			d.removeClass(a, Qe),
			d.addClass(a, Re),
			g.$dirty = !0,
			g.$pristine = !1,
			h.$setDirty()
		},
		g.$setPristine = function () {
			d.removeClass(a, Re),
			d.addClass(a, Qe),
			g.$dirty = !1,
			g.$pristine = !0,
			f(k, function (a) {
				a.$setPristine()
			})
		}
	}
	function bd(a, b, d, e) {
		return a.$setValidity(b, d),
		d ? e : c
	}
	function cd(a, b) {
		var c,
		d;
		if (b)
			for (c = 0; c < b.length; ++c)
				if (d = b[c], a[d])
					return !0;
		return !1
	}
	function dd(a, b, c, d, e) {
		if (t(e)) {
			a.$$hasNativeValidators = !0;
			var f = function (f) {
				return a.$error[b] || cd(e, d) || !cd(e, c) ? f : void a.$setValidity(b, !1)
			};
			a.$parsers.push(f)
		}
	}
	function ed(a, b, c, e, f, g) {
		var h = b.prop(ld),
		i = b[0].placeholder,
		j = {};
		if (e.$$validityState = h, !f.android) {
			var k = !1;
			b.on("compositionstart", function () {
				k = !0
			}),
			b.on("compositionend", function () {
				k = !1,
				l()
			})
		}
		var l = function (d) {
			if (!k) {
				var f = b.val();
				if (rd && "input" === (d || j).type && b[0].placeholder !== i)
					return void(i = b[0].placeholder);
				S(c.ngTrim || "T") && (f = Dd(f));
				var g = h && e.$$hasNativeValidators;
				(e.$viewValue !== f || "" === f && g) && (a.$$phase ? e.$setViewValue(f) : a.$apply(function () {
						e.$setViewValue(f)
					}))
			}
		};
		if (f.hasEvent("input"))
			b.on("input", l);
		else {
			var n,
			o = function () {
				n || (n = g.defer(function () {
							l(),
							n = null
						}))
			};
			b.on("keydown", function (a) {
				var b = a.keyCode;
				91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || o()
			}),
			f.hasEvent("paste") && b.on("paste cut", o)
		}
		b.on("change", l),
		e.$render = function () {
			b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue)
		};
		var p,
		q,
		r = c.ngPattern;
		if (r) {
			var s = function (a, b) {
				return bd(e, "pattern", e.$isEmpty(b) || a.test(b), b)
			};
			q = r.match(/^\/(.*)\/([gim]*)$/),
			q ? (r = new RegExp(q[1], q[2]), p = function (a) {
				return s(r, a)
			}) : p = function (c) {
				var e = a.$eval(r);
				if (!e || !e.test)
					throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", r, e, T(b));
				return s(e, c)
			},
			e.$formatters.push(p),
			e.$parsers.push(p)
		}
		if (c.ngMinlength) {
			var t = m(c.ngMinlength),
			u = function (a) {
				return bd(e, "minlength", e.$isEmpty(a) || a.length >= t, a)
			};
			e.$parsers.push(u),
			e.$formatters.push(u)
		}
		if (c.ngMaxlength) {
			var v = m(c.ngMaxlength),
			w = function (a) {
				return bd(e, "maxlength", e.$isEmpty(a) || a.length <= v, a)
			};
			e.$parsers.push(w),
			e.$formatters.push(w)
		}
	}
	function fd(a, b, d, e, f, g) {
		if (ed(a, b, d, e, f, g), e.$parsers.push(function (a) {
				var b = e.$isEmpty(a);
				return b || Ke.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
			}), dd(e, "number", Me, null, e.$$validityState), e.$formatters.push(function (a) {
				return e.$isEmpty(a) ? "" : "" + a
			}), d.min) {
			var h = function (a) {
				var b = parseFloat(d.min);
				return bd(e, "min", e.$isEmpty(a) || a >= b, a)
			};
			e.$parsers.push(h),
			e.$formatters.push(h)
		}
		if (d.max) {
			var i = function (a) {
				var b = parseFloat(d.max);
				return bd(e, "max", e.$isEmpty(a) || b >= a, a)
			};
			e.$parsers.push(i),
			e.$formatters.push(i)
		}
		e.$formatters.push(function (a) {
			return bd(e, "number", e.$isEmpty(a) || v(a), a)
		})
	}
	function gd(a, b, c, d, e, f) {
		ed(a, b, c, d, e, f);
		var g = function (a) {
			return bd(d, "url", d.$isEmpty(a) || Ie.test(a), a)
		};
		d.$formatters.push(g),
		d.$parsers.push(g)
	}
	function hd(a, b, c, d, e, f) {
		ed(a, b, c, d, e, f);
		var g = function (a) {
			return bd(d, "email", d.$isEmpty(a) || Je.test(a), a)
		};
		d.$formatters.push(g),
		d.$parsers.push(g)
	}
	function id(a, b, c, d) {
		r(c.name) && b.attr("name", j()),
		b.on("click", function () {
			b[0].checked && a.$apply(function () {
				d.$setViewValue(c.value)
			})
		}),
		d.$render = function () {
			var a = c.value;
			b[0].checked = a == d.$viewValue
		},
		c.$observe("value", d.$render)
	}
	function jd(a, b, c, d) {
		var e = c.ngTrueValue,
		f = c.ngFalseValue;
		u(e) || (e = !0),
		u(f) || (f = !1),
		b.on("click", function () {
			a.$apply(function () {
				d.$setViewValue(b[0].checked)
			})
		}),
		d.$render = function () {
			b[0].checked = d.$viewValue
		},
		d.$isEmpty = function (a) {
			return a !== e
		},
		d.$formatters.push(function (a) {
			return a === e
		}),
		d.$parsers.push(function (a) {
			return a ? e : f
		})
	}
	function kd(a, b) {
		return a = "ngClass" + a,
		["$animate", function (c) {
				function d(a, b) {
					var c = [];
					a : for (var d = 0; d < a.length; d++) {
						for (var e = a[d], f = 0; f < b.length; f++)
							if (e == b[f])
								continue a;
						c.push(e)
					}
					return c
				}
				function e(a) {
					if (Cd(a))
						return a;
					if (u(a))
						return a.split(" ");
					if (t(a)) {
						var b = [];
						return f(a, function (a, c) {
							a && (b = b.concat(c.split(" ")))
						}),
						b
					}
					return a
				}
				return {
					restrict : "AC",
					link : function (g, h, i) {
						function j(a) {
							var b = l(a, 1);
							i.$addClass(b)
						}
						function k(a) {
							var b = l(a, -1);
							i.$removeClass(b)
						}
						function l(a, b) {
							var c = h.data("$classCounts") || {},
							d = [];
							return f(a, function (a) {
								(b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] ===  + (b > 0) && d.push(a))
							}),
							h.data("$classCounts", c),
							d.join(" ")
						}
						function m(a, b) {
							var e = d(b, a),
							f = d(a, b);
							f = l(f, -1),
							e = l(e, 1),
							0 === e.length ? c.removeClass(h, f) : 0 === f.length ? c.addClass(h, e) : c.setClass(h, e, f)
						}
						function n(a) {
							if (b === !0 || g.$index % 2 === b) {
								var c = e(a || []);
								if (o) {
									if (!L(a, o)) {
										var d = e(o);
										m(d, c)
									}
								} else
									j(c)
							}
							o = K(a)
						}
						var o;
						g.$watch(i[a], n, !0),
						i.$observe("class", function () {
							n(g.$eval(i[a]))
						}),
						"ngClass" !== a && g.$watch("$index", function (c, d) {
							var f = 1 & c;
							if (f !== (1 & d)) {
								var h = e(g.$eval(i[a]));
								f === b ? j(h) : k(h)
							}
						})
					}
				}
			}
		]
	}
	var ld = "validity",
	md = function (a) {
		return u(a) ? a.toLowerCase() : a
	},
	nd = Object.prototype.hasOwnProperty,
	od = function (a) {
		return u(a) ? a.toUpperCase() : a
	},
	pd = function (a) {
		return u(a) ? a.replace(/[A-Z]/g, function (a) {
			return String.fromCharCode(32 | a.charCodeAt(0))
		}) : a
	},
	qd = function (a) {
		return u(a) ? a.replace(/[a-z]/g, function (a) {
			return String.fromCharCode(-33 & a.charCodeAt(0))
		}) : a
	};
	"i" !== "I".toLowerCase() && (md = pd, od = qd);
	var rd,
	sd,
	td,
	ud,
	vd,
	wd = [].slice,
	xd = [].push,
	yd = Object.prototype.toString,
	zd = d("ng"),
	Ad = a.angular || (a.angular = {}),
	Bd = ["0", "0", "0"];
	rd = m((/msie (\d+)/.exec(md(navigator.userAgent)) || [])[1]),
	isNaN(rd) && (rd = m((/trident\/.*; rv:(\d+)/.exec(md(navigator.userAgent)) || [])[1])),
	o.$inject = [],
	p.$inject = [];
	var Cd = function () {
		return x(Array.isArray) ? Array.isArray : function (a) {
			return "[object Array]" === yd.call(a)
		}
	}
	(),
	Dd = function () {
		return String.prototype.trim ? function (a) {
			return u(a) ? a.trim() : a
		}
		 : function (a) {
			return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
		}
	}
	();
	vd = 9 > rd ? function (a) {
		return a = a.nodeName ? a : a[0],
		a.scopeName && "HTML" != a.scopeName ? od(a.scopeName + ":" + a.nodeName) : a.nodeName
	}
	 : function (a) {
		return a.nodeName ? a.nodeName : a[0].nodeName
	};
	var Ed = function () {
		if (s(Ed.isActive_))
			return Ed.isActive_;
		var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
		if (!a)
			try {
				new Function("")
			} catch (c) {
				a = !0
			}
		return Ed.isActive_ = a
	},
	Fd = /[A-Z]/g,
	Gd = {
		full : "1.2.21",
		major : 1,
		minor : 2,
		dot : 21,
		codeName : "wizard-props"
	};
	ob.expando = "ng339";
	var Hd = ob.cache = {},
	Id = 1,
	Jd = a.document.addEventListener ? function (a, b, c) {
		a.addEventListener(b, c, !1)
	}
	 : function (a, b, c) {
		a.attachEvent("on" + b, c)
	},
	Kd = a.document.removeEventListener ? function (a, b, c) {
		a.removeEventListener(b, c, !1)
	}
	 : function (a, b, c) {
		a.detachEvent("on" + b, c)
	},
	Ld = (ob._data = function (a) {
		return this.cache[a[this.expando]] || {}

	}, /([\:\-\_]+(.))/g),
	Md = /^moz([A-Z])/,
	Nd = d("jqLite"),
	Od = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	Pd = /<|&#?\w+;/,
	Qd = /<([\w:]+)/,
	Rd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	Sd = {
		option : [1, '<select multiple="multiple">', "</select>"],
		thead : [1, "<table>", "</table>"],
		col : [2, "<table><colgroup>", "</colgroup></table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default : [0, "", ""]
	};
	Sd.optgroup = Sd.option,
	Sd.tbody = Sd.tfoot = Sd.colgroup = Sd.caption = Sd.thead,
	Sd.th = Sd.td;
	var Td = ob.prototype = {
		ready : function (c) {
			function d() {
				e || (e = !0, c())
			}
			var e = !1;
			"complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ob(a).on("load", d))
		},
		toString : function () {
			var a = [];
			return f(this, function (b) {
				a.push("" + b)
			}),
			"[" + a.join(", ") + "]"
		},
		eq : function (a) {
			return sd(a >= 0 ? this[a] : this[this.length + a])
		},
		length : 0,
		push : xd,
		sort : [].sort,
		splice : [].splice
	},
	Ud = {};
	f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
		Ud[md(a)] = a
	});
	var Vd = {};
	f("input,select,option,textarea,button,form,details".split(","), function (a) {
		Vd[od(a)] = !0
	}),
	f({
		data : ub,
		removeData : sb
	}, function (a, b) {
		ob[b] = a
	}),
	f({
		data : ub,
		inheritedData : Ab,
		scope : function (a) {
			return sd.data(a, "$scope") || Ab(a.parentNode || a, ["$isolateScope", "$scope"])
		},
		isolateScope : function (a) {
			return sd.data(a, "$isolateScope") || sd.data(a, "$isolateScopeNoTemplate")
		},
		controller : zb,
		injector : function (a) {
			return Ab(a, "$injector")
		},
		removeAttr : function (a, b) {
			a.removeAttribute(b)
		},
		hasClass : vb,
		css : function (a, b, d) {
			if (b = jb(b), !s(d)) {
				var e;
				return 8 >= rd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")),
				e = e || a.style[b],
				8 >= rd && (e = "" === e ? c : e),
				e
			}
			a.style[b] = d
		},
		attr : function (a, b, d) {
			var e = md(b);
			if (Ud[e]) {
				if (!s(d))
					return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
				d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
			} else if (s(d))
				a.setAttribute(b, d);
			else if (a.getAttribute) {
				var f = a.getAttribute(b, 2);
				return null === f ? c : f
			}
		},
		prop : function (a, b, c) {
			return s(c) ? void(a[b] = c) : a[b]
		},
		text : function () {
			function a(a, c) {
				var d = b[a.nodeType];
				return r(c) ? d ? a[d] : "" : void(a[d] = c)
			}
			var b = [];
			return 9 > rd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent",
			a.$dv = "",
			a
		}
		(),
		val : function (a, b) {
			if (r(b)) {
				if ("SELECT" === vd(a) && a.multiple) {
					var c = [];
					return f(a.options, function (a) {
						a.selected && c.push(a.value || a.text)
					}),
					0 === c.length ? null : c
				}
				return a.value
			}
			a.value = b
		},
		html : function (a, b) {
			if (r(b))
				return a.innerHTML;
			for (var c = 0, d = a.childNodes; c < d.length; c++)
				qb(d[c]);
			a.innerHTML = b
		},
		empty : Bb
	}, function (a, b) {
		ob.prototype[b] = function (b, d) {
			var e,
			f,
			g = this.length;
			if (a !== Bb && (2 == a.length && a !== vb && a !== zb ? b : d) === c) {
				if (t(b)) {
					for (e = 0; g > e; e++)
						if (a === ub)
							a(this[e], b);
						else
							for (f in b)
								a(this[e], f, b[f]);
					return this
				}
				for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
					var k = a(this[j], b, d);
					h = h ? h + k : k
				}
				return h
			}
			for (e = 0; g > e; e++)
				a(this[e], b, d);
			return this
		}
	}),
	f({
		removeData : sb,
		dealoc : qb,
		on : function Bf(a, c, d, e) {
			if (s(e))
				throw Nd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
			var g = tb(a, "events"),
			h = tb(a, "handle");
			g || tb(a, "events", g = {}),
			h || tb(a, "handle", h = Db(a, g)),
			f(c.split(" "), function (c) {
				var e = g[c];
				if (!e) {
					if ("mouseenter" == c || "mouseleave" == c) {
						var f = b.body.contains || b.body.compareDocumentPosition ? function (a, b) {
							var c = 9 === a.nodeType ? a.documentElement : a,
							d = b && b.parentNode;
							return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
						}
						 : function (a, b) {
							if (b)
								for (; b = b.parentNode; )
									if (b === a)
										return !0;
							return !1
						};
						g[c] = [];
						var i = {
							mouseleave : "mouseout",
							mouseenter : "mouseover"
						};
						Bf(a, i[c], function (a) {
							var b = this,
							d = a.relatedTarget;
							(!d || d !== b && !f(b, d)) && h(a, c)
						})
					} else
						Jd(a, c, h), g[c] = [];
					e = g[c]
				}
				e.push(d)
			})
		},
		off : rb,
		one : function (a, b, c) {
			a = sd(a),
			a.on(b, function d() {
				a.off(b, c),
				a.off(b, d)
			}),
			a.on(b, c)
		},
		replaceWith : function (a, b) {
			var c,
			d = a.parentNode;
			qb(a),
			f(new ob(b), function (b) {
				c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a),
				c = b
			})
		},
		children : function (a) {
			var b = [];
			return f(a.childNodes, function (a) {
				1 === a.nodeType && b.push(a)
			}),
			b
		},
		contents : function (a) {
			return a.contentDocument || a.childNodes || []
		},
		append : function (a, b) {
			f(new ob(b), function (b) {
				(1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
			})
		},
		prepend : function (a, b) {
			if (1 === a.nodeType) {
				var c = a.firstChild;
				f(new ob(b), function (b) {
					a.insertBefore(b, c)
				})
			}
		},
		wrap : function (a, b) {
			b = sd(b)[0];
			var c = a.parentNode;
			c && c.replaceChild(b, a),
			b.appendChild(a)
		},
		remove : function (a) {
			qb(a);
			var b = a.parentNode;
			b && b.removeChild(a)
		},
		after : function (a, b) {
			var c = a,
			d = a.parentNode;
			f(new ob(b), function (a) {
				d.insertBefore(a, c.nextSibling),
				c = a
			})
		},
		addClass : xb,
		removeClass : wb,
		toggleClass : function (a, b, c) {
			b && f(b.split(" "), function (b) {
				var d = c;
				r(d) && (d = !vb(a, b)),
				(d ? xb : wb)(a, b)
			})
		},
		parent : function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		next : function (a) {
			if (a.nextElementSibling)
				return a.nextElementSibling;
			for (var b = a.nextSibling; null != b && 1 !== b.nodeType; )
				b = b.nextSibling;
			return b
		},
		find : function (a, b) {
			return a.getElementsByTagName ? a.getElementsByTagName(b) : []
		},
		clone : pb,
		triggerHandler : function (a, b, c) {
			var d = (tb(a, "events") || {})[b],
			e = K(d || []);
			c = c || [];
			var g = [{
					preventDefault : o,
					stopPropagation : o
				}
			];
			f(e, function (b) {
				b.apply(a, g.concat(c))
			})
		}
	}, function (a, b) {
		ob.prototype[b] = function (b, c, d) {
			for (var e, f = 0; f < this.length; f++)
				r(e) ? (e = a(this[f], b, c, d), s(e) && (e = sd(e))) : yb(e, a(this[f], b, c, d));
			return s(e) ? e : this
		},
		ob.prototype.bind = ob.prototype.on,
		ob.prototype.unbind = ob.prototype.off
	}),
	Fb.prototype = {
		put : function (a, b) {
			this[Eb(a, this.nextUid)] = b
		},
		get : function (a) {
			return this[Eb(a, this.nextUid)]
		},
		remove : function (a) {
			var b = this[a = Eb(a, this.nextUid)];
			return delete this[a],
			b
		}
	};
	var Wd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
	Xd = /,/,
	Yd = /^\s*(_?)(\S+?)\1\s*$/,
	Zd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
	$d = d("$injector"),
	_d = d("$animate"),
	ae = ["$provide", function (a) {
			this.$$selectors = {},
			this.register = function (b, c) {
				var d = b + "-animation";
				if (b && "." != b.charAt(0))
					throw _d("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
				this.$$selectors[b.substr(1)] = d,
				a.factory(d, c)
			},
			this.classNameFilter = function (a) {
				return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null),
				this.$$classNameFilter
			},
			this.$get = ["$timeout", "$$asyncCallback", function (a, b) {
					function c(a) {
						a && b(a)
					}
					return {
						enter : function (a, b, d, e) {
							d ? d.after(a) : (b && b[0] || (b = d.parent()), b.append(a)),
							c(e)
						},
						leave : function (a, b) {
							a.remove(),
							c(b)
						},
						move : function (a, b, c, d) {
							this.enter(a, b, c, d)
						},
						addClass : function (a, b, d) {
							b = u(b) ? b : Cd(b) ? b.join(" ") : "",
							f(a, function (a) {
								xb(a, b)
							}),
							c(d)
						},
						removeClass : function (a, b, d) {
							b = u(b) ? b : Cd(b) ? b.join(" ") : "",
							f(a, function (a) {
								wb(a, b)
							}),
							c(d)
						},
						setClass : function (a, b, d, e) {
							f(a, function (a) {
								xb(a, b),
								wb(a, d)
							}),
							c(e)
						},
						enabled : o
					}
				}
			]
		}
	],
	be = d("$compile");
	Ob.$inject = ["$provide", "$$sanitizeUriProvider"];
	var ce = /^(x[\:\-_]|data[\:\-_])/i,
	de = d("$interpolate"),
	ee = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
	fe = {
		http : 80,
		https : 443,
		ftp : 21
	},
	ge = d("$location");
	mc.prototype = lc.prototype = kc.prototype = {
		$$html5 : !1,
		$$replace : !1,
		absUrl : nc("$$absUrl"),
		url : function (a, b) {
			if (r(a))
				return this.$$url;
			var c = ee.exec(a);
			return c[1] && this.path(decodeURIComponent(c[1])),
			(c[2] || c[1]) && this.search(c[3] || ""),
			this.hash(c[5] || "", b),
			this
		},
		protocol : nc("$$protocol"),
		host : nc("$$host"),
		port : nc("$$port"),
		path : oc("$$path", function (a) {
			return "/" == a.charAt(0) ? a : "/" + a
		}),
		search : function (a, b) {
			switch (arguments.length) {
			case 0:
				return this.$$search;
			case 1:
				if (u(a))
					this.$$search = V(a);
				else {
					if (!t(a))
						throw ge("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
					f(a, function (b, c) {
						null == b && delete a[c]
					}),
					this.$$search = a
				}
				break;
			default:
				r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
			}
			return this.$$compose(),
			this
		},
		hash : oc("$$hash", p),
		replace : function () {
			return this.$$replace = !0,
			this
		}
	};
	var he,
	ie = d("$parse"),
	je = {},
	ke = Function.prototype.call,
	le = Function.prototype.apply,
	me = Function.prototype.bind,
	ne = {
		"null" : function () {
			return null
		},
		"true" : function () {
			return !0
		},
		"false" : function () {
			return !1
		},
		undefined : o,
		"+" : function (a, b, d, e) {
			return d = d(a, b),
			e = e(a, b),
			s(d) ? s(e) ? d + e : d : s(e) ? e : c
		},
		"-" : function (a, b, c, d) {
			return c = c(a, b),
			d = d(a, b),
			(s(c) ? c : 0) - (s(d) ? d : 0)
		},
		"*" : function (a, b, c, d) {
			return c(a, b) * d(a, b)
		},
		"/" : function (a, b, c, d) {
			return c(a, b) / d(a, b)
		},
		"%" : function (a, b, c, d) {
			return c(a, b) % d(a, b)
		},
		"^" : function (a, b, c, d) {
			return c(a, b)^d(a, b)
		},
		"=" : o,
		"===" : function (a, b, c, d) {
			return c(a, b) === d(a, b)
		},
		"!==" : function (a, b, c, d) {
			return c(a, b) !== d(a, b)
		},
		"==" : function (a, b, c, d) {
			return c(a, b) == d(a, b)
		},
		"!=" : function (a, b, c, d) {
			return c(a, b) != d(a, b)
		},
		"<" : function (a, b, c, d) {
			return c(a, b) < d(a, b)
		},
		">" : function (a, b, c, d) {
			return c(a, b) > d(a, b)
		},
		"<=" : function (a, b, c, d) {
			return c(a, b) <= d(a, b)
		},
		">=" : function (a, b, c, d) {
			return c(a, b) >= d(a, b)
		},
		"&&" : function (a, b, c, d) {
			return c(a, b) && d(a, b)
		},
		"||" : function (a, b, c, d) {
			return c(a, b) || d(a, b)
		},
		"&" : function (a, b, c, d) {
			return c(a, b) & d(a, b)
		},
		"|" : function (a, b, c, d) {
			return d(a, b)(a, b, c(a, b))
		},
		"!" : function (a, b, c) {
			return !c(a, b)
		}
	},
	oe = {
		n : "\n",
		f : "\f",
		r : "\r",
		t : "	",
		v : "",
		"'" : "'",
		'"' : '"'
	},
	pe = function (a) {
		this.options = a
	};
	pe.prototype = {
		constructor : pe,
		lex : function (a) {
			for (this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = []; this.index < this.text.length; ) {
				if (this.ch = this.text.charAt(this.index), this.is("\"'"))
					this.readString(this.ch);
				else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))
					this.readNumber();
				else if (this.isIdent(this.ch))
					this.readIdent();
				else if (this.is("(){}[].,;:?"))
					this.tokens.push({
						index : this.index,
						text : this.ch
					}), this.index++;
				else {
					if (this.isWhitespace(this.ch)) {
						this.index++;
						continue
					}
					var b = this.ch + this.peek(),
					d = b + this.peek(2),
					e = ne[this.ch],
					f = ne[b],
					g = ne[d];
					g ? (this.tokens.push({
							index : this.index,
							text : d,
							fn : g
						}), this.index += 3) : f ? (this.tokens.push({
							index : this.index,
							text : b,
							fn : f
						}), this.index += 2) : e ? (this.tokens.push({
							index : this.index,
							text : this.ch,
							fn : e
						}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
				this.lastCh = this.ch
			}
			return this.tokens
		},
		is : function (a) {
			return -1 !== a.indexOf(this.ch)
		},
		was : function (a) {
			return -1 !== a.indexOf(this.lastCh)
		},
		peek : function (a) {
			var b = a || 1;
			return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
		},
		isNumber : function (a) {
			return a >= "0" && "9" >= a
		},
		isWhitespace : function (a) {
			return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
		},
		isIdent : function (a) {
			return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
		},
		isExpOperator : function (a) {
			return "-" === a || "+" === a || this.isNumber(a)
		},
		throwError : function (a, b, c) {
			c = c || this.index;
			var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
			throw ie("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
		},
		readNumber : function () {
			for (var a = "", b = this.index; this.index < this.text.length; ) {
				var c = md(this.text.charAt(this.index));
				if ("." == c || this.isNumber(c))
					a += c;
				else {
					var d = this.peek();
					if ("e" == c && this.isExpOperator(d))
						a += c;
					else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1))
						a += c;
					else {
						if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))
							break;
						this.throwError("Invalid exponent")
					}
				}
				this.index++
			}
			a = 1 * a,
			this.tokens.push({
				index : b,
				text : a,
				literal : !0,
				constant : !0,
				fn : function () {
					return a
				}
			})
		},
		readIdent : function () {
			for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d)); )
				"." === d && (a = this.index), f += d, this.index++;
			if (a)
				for (b = this.index; b < this.text.length; ) {
					if (d = this.text.charAt(b), "(" === d) {
						c = f.substr(a - g + 1),
						f = f.substr(0, a - g),
						this.index = b;
						break
					}
					if (!this.isWhitespace(d))
						break;
					b++
				}
			var h = {
				index : g,
				text : f
			};
			if (ne.hasOwnProperty(f))
				h.fn = ne[f], h.literal = !0, h.constant = !0;
			else {
				var i = wc(f, this.options, this.text);
				h.fn = l(function (a, b) {
						return i(a, b)
					}, {
						assign : function (a, b) {
							return uc(a, f, b, e.text, e.options)
						}
					})
			}
			this.tokens.push(h),
			c && (this.tokens.push({
					index : a,
					text : "."
				}), this.tokens.push({
					index : a + 1,
					text : c
				}))
		},
		readString : function (a) {
			var b = this.index;
			this.index++;
			for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
				var f = this.text.charAt(this.index);
				if (d += f, e) {
					if ("u" === f) {
						var g = this.text.substring(this.index + 1, this.index + 5);
						g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"),
						this.index += 4,
						c += String.fromCharCode(parseInt(g, 16))
					} else {
						var h = oe[f];
						c += h || f
					}
					e = !1
				} else if ("\\" === f)
					e = !0;
				else {
					if (f === a)
						return this.index++, void this.tokens.push({
							index : b,
							text : d,
							string : c,
							literal : !0,
							constant : !0,
							fn : function () {
								return c
							}
						});
					c += f
				}
				this.index++
			}
			this.throwError("Unterminated quote", b)
		}
	};
	var qe = function (a, b, c) {
		this.lexer = a,
		this.$filter = b,
		this.options = c
	};
	qe.ZERO = l(function () {
			return 0
		}, {
			constant : !0
		}),
	qe.prototype = {
		constructor : qe,
		parse : function (a) {
			this.text = a,
			this.tokens = this.lexer.lex(a);
			var b = this.statements();
			return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
			b.literal = !!b.literal,
			b.constant = !!b.constant,
			b
		},
		primary : function () {
			var a;
			if (this.expect("("))
				a = this.filterChain(), this.consume(")");
			else if (this.expect("["))
				a = this.arrayDeclaration();
			else if (this.expect("{"))
				a = this.object();
			else {
				var b = this.expect();
				a = b.fn,
				a || this.throwError("not a primary expression", b),
				a.literal = !!b.literal,
				a.constant = !!b.constant
			}
			for (var c, d; c = this.expect("(", "[", "."); )
				"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
			return a
		},
		throwError : function (a, b) {
			throw ie("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
		},
		peekToken : function () {
			if (0 === this.tokens.length)
				throw ie("ueoe", "Unexpected end of expression: {0}", this.text);
			return this.tokens[0]
		},
		peek : function (a, b, c, d) {
			if (this.tokens.length > 0) {
				var e = this.tokens[0],
				f = e.text;
				if (f === a || f === b || f === c || f === d || !a && !b && !c && !d)
					return e
			}
			return !1
		},
		expect : function (a, b, c, d) {
			var e = this.peek(a, b, c, d);
			return e ? (this.tokens.shift(), e) : !1
		},
		consume : function (a) {
			this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
		},
		unaryFn : function (a, b) {
			return l(function (c, d) {
				return a(c, d, b)
			}, {
				constant : b.constant
			})
		},
		ternaryFn : function (a, b, c) {
			return l(function (d, e) {
				return a(d, e) ? b(d, e) : c(d, e)
			}, {
				constant : a.constant && b.constant && c.constant
			})
		},
		binaryFn : function (a, b, c) {
			return l(function (d, e) {
				return b(d, e, a, c)
			}, {
				constant : a.constant && c.constant
			})
		},
		statements : function () {
			for (var a = []; ; )
				if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))
					return 1 === a.length ? a[0] : function (b, c) {
						for (var d, e = 0; e < a.length; e++) {
							var f = a[e];
							f && (d = f(b, c))
						}
						return d
					}
		},
		filterChain : function () {
			for (var a, b = this.expression(); ; ) {
				if (!(a = this.expect("|")))
					return b;
				b = this.binaryFn(b, a.fn, this.filter())
			}
		},
		filter : function () {
			for (var a = this.expect(), b = this.$filter(a.text), c = []; ; ) {
				if (!(a = this.expect(":"))) {
					var d = function (a, d, e) {
						for (var f = [e], g = 0; g < c.length; g++)
							f.push(c[g](a, d));
						return b.apply(a, f)
					};
					return function () {
						return d
					}
				}
				c.push(this.expression())
			}
		},
		expression : function () {
			return this.assignment()
		},
		assignment : function () {
			var a,
			b,
			c = this.ternary();
			return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function (b, d) {
				return c.assign(b, a(b, d), d)
			}) : c
		},
		ternary : function () {
			var a,
			b,
			c = this.logicalOR();
			return (b = this.expect("?")) ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : void this.throwError("expected :", b)) : c
		},
		logicalOR : function () {
			for (var a, b = this.logicalAND(); ; ) {
				if (!(a = this.expect("||")))
					return b;
				b = this.binaryFn(b, a.fn, this.logicalAND())
			}
		},
		logicalAND : function () {
			var a,
			b = this.equality();
			return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())),
			b
		},
		equality : function () {
			var a,
			b = this.relational();
			return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())),
			b
		},
		relational : function () {
			var a,
			b = this.additive();
			return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())),
			b
		},
		additive : function () {
			for (var a, b = this.multiplicative(); a = this.expect("+", "-"); )
				b = this.binaryFn(b, a.fn, this.multiplicative());
			return b
		},
		multiplicative : function () {
			for (var a, b = this.unary(); a = this.expect("*", "/", "%"); )
				b = this.binaryFn(b, a.fn, this.unary());
			return b
		},
		unary : function () {
			var a;
			return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(qe.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
		},
		fieldAccess : function (a) {
			var b = this,
			c = this.expect().text,
			d = wc(c, this.options, this.text);
			return l(function (b, c, e) {
				return d(e || a(b, c))
			}, {
				assign : function (d, e, f) {
					return uc(a(d, f), c, e, b.text, b.options)
				}
			})
		},
		objectIndex : function (a) {
			var b = this,
			d = this.expression();
			return this.consume("]"),
			l(function (e, f) {
				var g,
				h,
				i = a(e, f),
				j = d(e, f);
				return rc(j, b.text),
				i ? (g = sc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function (a) {
								h.$$v = a
							})), g = g.$$v), g) : c
			}, {
				assign : function (c, e, f) {
					var g = d(c, f),
					h = sc(a(c, f), b.text);
					return h[g] = e
				}
			})
		},
		functionCall : function (a, b) {
			var c = [];
			if (")" !== this.peekToken().text)
				do
					c.push(this.expression());
				while (this.expect(","));
			this.consume(")");
			var d = this;
			return function (e, f) {
				for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++)
					g.push(c[i](e, f));
				var j = a(e, f, h) || o;
				sc(h, d.text),
				tc(j, d.text);
				var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
				return sc(k, d.text)
			}
		},
		arrayDeclaration : function () {
			var a = [],
			b = !0;
			if ("]" !== this.peekToken().text)
				do {
					if (this.peek("]"))
						break;
					var c = this.expression();
					a.push(c),
					c.constant || (b = !1)
				} while (this.expect(","));
			return this.consume("]"),
			l(function (b, c) {
				for (var d = [], e = 0; e < a.length; e++)
					d.push(a[e](b, c));
				return d
			}, {
				literal : !0,
				constant : b
			})
		},
		object : function () {
			var a = [],
			b = !0;
			if ("}" !== this.peekToken().text)
				do {
					if (this.peek("}"))
						break;
					var c = this.expect(),
					d = c.string || c.text;
					this.consume(":");
					var e = this.expression();
					a.push({
						key : d,
						value : e
					}),
					e.constant || (b = !1)
				} while (this.expect(","));
			return this.consume("}"),
			l(function (b, c) {
				for (var d = {}, e = 0; e < a.length; e++) {
					var f = a[e];
					d[f.key] = f.value(b, c)
				}
				return d
			}, {
				literal : !0,
				constant : b
			})
		}
	};
	var re = {},
	se = d("$sce"),
	te = {
		HTML : "html",
		CSS : "css",
		URL : "url",
		RESOURCE_URL : "resourceUrl",
		JS : "js"
	},
	ue = b.createElement("a"),
	ve = Kc(a.location.href, !0);
	Nc.$inject = ["$provide"],
	Pc.$inject = ["$locale"],
	Qc.$inject = ["$locale"];
	var we = ".",
	xe = {
		yyyy : Tc("FullYear", 4),
		yy : Tc("FullYear", 2, 0, !0),
		y : Tc("FullYear", 1),
		MMMM : Uc("Month"),
		MMM : Uc("Month", !0),
		MM : Tc("Month", 2, 1),
		M : Tc("Month", 1, 1),
		dd : Tc("Date", 2),
		d : Tc("Date", 1),
		HH : Tc("Hours", 2),
		H : Tc("Hours", 1),
		hh : Tc("Hours", 2, -12),
		h : Tc("Hours", 1, -12),
		mm : Tc("Minutes", 2),
		m : Tc("Minutes", 1),
		ss : Tc("Seconds", 2),
		s : Tc("Seconds", 1),
		sss : Tc("Milliseconds", 3),
		EEEE : Uc("Day"),
		EEE : Uc("Day", !0),
		a : Wc,
		Z : Vc
	},
	ye = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
	ze = /^\-?\d+$/;
	Xc.$inject = ["$locale"];
	var Ae = q(md),
	Be = q(od);
	$c.$inject = ["$parse"];
	var Ce = q({
			restrict : "E",
			compile : function (a, c) {
				return 8 >= rd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))),
				c.href || c.xlinkHref || c.name ? void 0 : function (a, b) {
					var c = "[object SVGAnimatedString]" === yd.call(b.prop("href")) ? "xlink:href" : "href";
					b.on("click", function (a) {
						b.attr(c) || a.preventDefault()
					})
				}
			}
		}),
	De = {};
	f(Ud, function (a, b) {
		if ("multiple" != a) {
			var c = Pb("ng-" + b);
			De[c] = function () {
				return {
					priority : 100,
					link : function (a, d, e) {
						a.$watch(e[c], function (a) {
							e.$set(b, !!a)
						})
					}
				}
			}
		}
	}),
	f(["src", "srcset", "href"], function (a) {
		var b = Pb("ng-" + a);
		De[b] = function () {
			return {
				priority : 99,
				link : function (c, d, e) {
					var f = a,
					g = a;
					"href" === a && "[object SVGAnimatedString]" === yd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null),
					e.$observe(b, function (a) {
						a && (e.$set(g, a), rd && f && d.prop(f, e[g]))
					})
				}
			}
		}
	});
	var Ee = {
		$addControl : o,
		$removeControl : o,
		$setValidity : o,
		$setDirty : o,
		$setPristine : o
	};
	ad.$inject = ["$element", "$attrs", "$scope", "$animate"];
	var Fe = function (a) {
		return ["$timeout", function (b) {
				var d = {
					name : "form",
					restrict : a ? "EAC" : "E",
					controller : ad,
					compile : function () {
						return {
							pre : function (a, d, e, f) {
								if (!e.action) {
									var g = function (a) {
										a.preventDefault ? a.preventDefault() : a.returnValue = !1
									};
									Jd(d[0], "submit", g),
									d.on("$destroy", function () {
										b(function () {
											Kd(d[0], "submit", g)
										}, 0, !1)
									})
								}
								var h = d.parent().controller("form"),
								i = e.name || e.ngForm;
								i && uc(a, i, f, i),
								h && d.on("$destroy", function () {
									h.$removeControl(f),
									i && uc(a, i, c, i),
									l(f, Ee)
								})
							}
						}
					}
				};
				return d
			}
		]
	},
	Ge = Fe(),
	He = Fe(!0),
	Ie = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
	Je = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	Ke = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
	Le = {
		text : ed,
		number : fd,
		url : gd,
		email : hd,
		radio : id,
		checkbox : jd,
		hidden : o,
		button : o,
		submit : o,
		reset : o,
		file : o
	},
	Me = ["badInput"],
	Ne = ["$browser", "$sniffer", function (a, b) {
			return {
				restrict : "E",
				require : "?ngModel",
				link : function (c, d, e, f) {
					f && (Le[md(e.type)] || Le.text)(c, d, e, f, b, a)
				}
			}
		}
	],
	Oe = "ng-valid",
	Pe = "ng-invalid",
	Qe = "ng-pristine",
	Re = "ng-dirty",
	Se = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (a, b, c, e, g, h) {
			function i(a, b) {
				b = b ? "-" + _(b, "-") : "",
				h.removeClass(e, (a ? Pe : Oe) + b),
				h.addClass(e, (a ? Oe : Pe) + b)
			}
			this.$viewValue = Number.NaN,
			this.$modelValue = Number.NaN,
			this.$parsers = [],
			this.$formatters = [],
			this.$viewChangeListeners = [],
			this.$pristine = !0,
			this.$dirty = !1,
			this.$valid = !0,
			this.$invalid = !1,
			this.$name = c.name;
			var j = g(c.ngModel),
			k = j.assign;
			if (!k)
				throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
			this.$render = o,
			this.$isEmpty = function (a) {
				return r(a) || "" === a || null === a || a !== a
			};
			var l = e.inheritedData("$formController") || Ee,
			m = 0,
			n = this.$error = {};
			e.addClass(Qe),
			i(!0),
			this.$setValidity = function (a, b) {
				n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this))
			},
			this.$setPristine = function () {
				this.$dirty = !1,
				this.$pristine = !0,
				h.removeClass(e, Re),
				h.addClass(e, Qe)
			},
			this.$setViewValue = function (c) {
				this.$viewValue = c,
				this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, Qe), h.addClass(e, Re), l.$setDirty()),
				f(this.$parsers, function (a) {
					c = a(c)
				}),
				this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners, function (a) {
						try {
							a()
						} catch (c) {
							b(c)
						}
					}))
			};
			var p = this;
			a.$watch(function () {
				var b = j(a);
				if (p.$modelValue !== b) {
					var c = p.$formatters,
					d = c.length;
					for (p.$modelValue = b; d--; )
						b = c[d](b);
					p.$viewValue !== b && (p.$viewValue = b, p.$render())
				}
				return b
			})
		}
	],
	Te = function () {
		return {
			require : ["ngModel", "^?form"],
			controller : Se,
			link : function (a, b, c, d) {
				var e = d[0],
				f = d[1] || Ee;
				f.$addControl(e),
				a.$on("$destroy", function () {
					f.$removeControl(e)
				})
			}
		}
	},
	Ue = q({
			require : "ngModel",
			link : function (a, b, c, d) {
				d.$viewChangeListeners.push(function () {
					a.$eval(c.ngChange)
				})
			}
		}),
	Ve = function () {
		return {
			require : "?ngModel",
			link : function (a, b, c, d) {
				if (d) {
					c.required = !0;
					var e = function (a) {
						return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
					};
					d.$formatters.push(e),
					d.$parsers.unshift(e),
					c.$observe("required", function () {
						e(d.$viewValue)
					})
				}
			}
		}
	},
	We = function () {
		return {
			require : "ngModel",
			link : function (a, b, d, e) {
				var g = /\/(.*)\//.exec(d.ngList),
				h = g && new RegExp(g[1]) || d.ngList || ",",
				i = function (a) {
					if (!r(a)) {
						var b = [];
						return a && f(a.split(h), function (a) {
							a && b.push(Dd(a))
						}),
						b
					}
				};
				e.$parsers.push(i),
				e.$formatters.push(function (a) {
					return Cd(a) ? a.join(", ") : c
				}),
				e.$isEmpty = function (a) {
					return !a || !a.length
				}
			}
		}
	},
	Xe = /^(true|false|\d+)$/,
	Ye = function () {
		return {
			priority : 100,
			compile : function (a, b) {
				return Xe.test(b.ngValue) ? function (a, b, c) {
					c.$set("value", a.$eval(c.ngValue))
				}
				 : function (a, b, c) {
					a.$watch(c.ngValue, function (a) {
						c.$set("value", a)
					})
				}
			}
		}
	},
	Ze = _c({
			compile : function (a) {
				return a.addClass("ng-binding"),
				function (a, b, d) {
					b.data("$binding", d.ngBind),
					a.$watch(d.ngBind, function (a) {
						b.text(a == c ? "" : a)
					})
				}
			}
		}),
	$e = ["$interpolate", function (a) {
			return function (b, c, d) {
				var e = a(c.attr(d.$attr.ngBindTemplate));
				c.addClass("ng-binding").data("$binding", e),
				d.$observe("ngBindTemplate", function (a) {
					c.text(a)
				})
			}
		}
	],
	_e = ["$sce", "$parse", function (a, b) {
			return {
				compile : function (c) {
					return c.addClass("ng-binding"),
					function (c, d, e) {
						function f() {
							return (g(c) || "").toString()
						}
						d.data("$binding", e.ngBindHtml);
						var g = b(e.ngBindHtml);
						c.$watch(f, function () {
							d.html(a.getTrustedHtml(g(c)) || "")
						})
					}
				}
			}
		}
	],
	af = kd("", !0),
	bf = kd("Odd", 0),
	cf = kd("Even", 1),
	df = _c({
			compile : function (a, b) {
				b.$set("ngCloak", c),
				a.removeClass("ng-cloak")
			}
		}),
	ef = [function () {
			return {
				scope : !0,
				controller : "@",
				priority : 500
			}
		}
	],
	ff = {};
	f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
		var b = Pb("ng-" + a);
		ff[b] = ["$parse", function (c) {
				return {
					compile : function (d, e) {
						var f = c(e[b]);
						return function (b, c) {
							c.on(md(a), function (a) {
								b.$apply(function () {
									f(b, {
										$event : a
									})
								})
							})
						}
					}
				}
			}
		]
	});
	var gf = ["$animate", function (a) {
			return {
				transclude : "element",
				priority : 600,
				terminal : !0,
				restrict : "A",
				$$tlb : !0,
				link : function (c, d, e, f, g) {
					var h,
					i,
					j;
					c.$watch(e.ngIf, function (f) {
						S(f) ? i || (i = c.$new(), g(i, function (c) {
								c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "),
								h = {
									clone : c
								},
								a.enter(c, d.parent(), d)
							})) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = fb(h.clone), a.leave(j, function () {
									j = null
								}), h = null))
					})
				}
			}
		}
	],
	hf = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (a, b, c, d, e) {
			return {
				restrict : "ECA",
				priority : 400,
				terminal : !0,
				transclude : "element",
				controller : Ad.noop,
				compile : function (f, g) {
					var h = g.ngInclude || g.src,
					i = g.onload || "",
					j = g.autoscroll;
					return function (f, g, k, l, m) {
						var n,
						o,
						p,
						q = 0,
						r = function () {
							o && (o.remove(), o = null),
							n && (n.$destroy(), n = null),
							p && (d.leave(p, function () {
									o = null
								}), o = p, p = null)
						};
						f.$watch(e.parseAsResourceUrl(h), function (e) {
							var h = function () {
								!s(j) || j && !f.$eval(j) || c()
							},
							k = ++q;
							e ? (a.get(e, {
									cache : b
								}).success(function (a) {
									if (k === q) {
										var b = f.$new();
										l.template = a;
										var c = m(b, function (a) {
												r(),
												d.enter(a, null, g, h)
											});
										n = b,
										p = c,
										n.$emit("$includeContentLoaded"),
										f.$eval(i)
									}
								}).error(function () {
									k === q && r()
								}), f.$emit("$includeContentRequested")) : (r(), l.template = null)
						})
					}
				}
			}
		}
	],
	jf = ["$compile", function (a) {
			return {
				restrict : "ECA",
				priority : -400,
				require : "ngInclude",
				link : function (b, c, d, e) {
					c.html(e.template),
					a(c.contents())(b)
				}
			}
		}
	],
	kf = _c({
			priority : 450,
			compile : function () {
				return {
					pre : function (a, b, c) {
						a.$eval(c.ngInit)
					}
				}
			}
		}),
	lf = _c({
			terminal : !0,
			priority : 1e3
		}),
	mf = ["$locale", "$interpolate", function (a, b) {
			var c = /{}/g;
			return {
				restrict : "EA",
				link : function (d, e, g) {
					var h = g.count,
					i = g.$attr.when && e.attr(g.$attr.when),
					j = g.offset || 0,
					k = d.$eval(i) || {},
					l = {},
					m = b.startSymbol(),
					n = b.endSymbol(),
					o = /^when(Minus)?(.+)$/;
					f(g, function (a, b) {
						o.test(b) && (k[md(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
					}),
					f(k, function (a, d) {
						l[d] = b(a.replace(c, m + h + "-" + j + n))
					}),
					d.$watch(function () {
						var b = parseFloat(d.$eval(h));
						return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
					}, function (a) {
						e.text(a)
					})
				}
			}
		}
	],
	nf = ["$parse", "$animate", function (a, c) {
			function g(a) {
				return a.clone[0]
			}
			function h(a) {
				return a.clone[a.clone.length - 1]
			}
			var i = "$$NG_REMOVED",
			j = d("ngRepeat");
			return {
				transclude : "element",
				priority : 1e3,
				terminal : !0,
				$$tlb : !0,
				link : function (d, k, l, m, n) {
					var o,
					p,
					q,
					r,
					s,
					t,
					u,
					v,
					w,
					x = l.ngRepeat,
					y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
					z = {
						$id : Eb
					};
					if (!y)
						throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
					if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function (a, b, c) {
							return w && (z[w] = a),
							z[v] = b,
							z.$index = c,
							p(d, z)
						}) : (r = function (a, b) {
							return Eb(b)
						}, s = function (a) {
							return a
						}), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y)
						throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
					v = y[3] || y[1],
					w = y[2];
					var A = {};
					d.$watchCollection(u, function (a) {
						var l,
						m,
						o,
						p,
						t,
						u,
						y,
						z,
						B,
						C,
						D,
						E,
						F = k[0],
						G = {},
						H = [];
						if (e(a))
							C = a, B = q || r;
						else {
							B = q || s,
							C = [];
							for (u in a)
								a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
							C.sort()
						}
						for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
							if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), db(z, "`track by` id"), A.hasOwnProperty(z))
								D = A[z], delete A[z], G[z] = D, H[l] = D;
							else {
								if (G.hasOwnProperty(z))
									throw f(H, function (a) {
										a && a.scope && (A[a.id] = a)
									}), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", x, z);
								H[l] = {
									id : z
								},
								G[z] = !1
							}
						for (u in A)
							A.hasOwnProperty(u) && (D = A[u], E = fb(D.clone), c.leave(E), f(E, function (a) {
									a[i] = !0
								}), D.scope.$destroy());
						for (l = 0, m = C.length; m > l; l++) {
							if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
								t = D.scope,
								o = F;
								do
									o = o.nextSibling;
								while (o && o[i]);
								g(D) != o && c.move(fb(D.clone), null, sd(F)),
								F = h(D)
							} else
								t = d.$new();
							t[v] = y,
							w && (t[w] = u),
							t.$index = l,
							t.$first = 0 === l,
							t.$last = l === p - 1,
							t.$middle = !(t.$first || t.$last),
							t.$odd = !(t.$even = 0 === (1 & l)),
							D.scope || n(t, function (a) {
								a[a.length++] = b.createComment(" end ngRepeat: " + x + " "),
								c.enter(a, null, sd(F)),
								F = a,
								D.scope = t,
								D.clone = a,
								G[D.id] = D
							})
						}
						A = G
					})
				}
			}
		}
	],
	of = ["$animate", function (a) {
			return function (b, c, d) {
				b.$watch(d.ngShow, function (b) {
					a[S(b) ? "removeClass" : "addClass"](c, "ng-hide")
				})
			}
		}
	],
	pf = ["$animate", function (a) {
			return function (b, c, d) {
				b.$watch(d.ngHide, function (b) {
					a[S(b) ? "addClass" : "removeClass"](c, "ng-hide")
				})
			}
		}
	],
	qf = _c(function (a, b, c) {
			a.$watch(c.ngStyle, function (a, c) {
				c && a !== c && f(c, function (a, c) {
					b.css(c, "")
				}),
				a && b.css(a)
			}, !0)
		}),
	rf = ["$animate", function (a) {
			return {
				restrict : "EA",
				require : "ngSwitch",
				controller : ["$scope", function () {
						this.cases = {}

					}
				],
				link : function (b, c, d, e) {
					var g = d.ngSwitch || d.on,
					h = [],
					i = [],
					j = [],
					k = [];
					b.$watch(g, function (c) {
						var g,
						l;
						for (g = 0, l = j.length; l > g; ++g)
							j[g].remove();
						for (j.length = 0, g = 0, l = k.length; l > g; ++g) {
							var m = i[g];
							k[g].$destroy(),
							j[g] = m,
							a.leave(m, function () {
								j.splice(g, 1)
							})
						}
						i.length = 0,
						k.length = 0,
						(h = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(h, function (c) {
								var d = b.$new();
								k.push(d),
								c.transclude(d, function (b) {
									var d = c.element;
									i.push(b),
									a.enter(b, d.parent(), d)
								})
							}))
					})
				}
			}
		}
	],
	sf = _c({
			transclude : "element",
			priority : 800,
			require : "^ngSwitch",
			link : function (a, b, c, d, e) {
				d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [],
				d.cases["!" + c.ngSwitchWhen].push({
					transclude : e,
					element : b
				})
			}
		}),
	tf = _c({
			transclude : "element",
			priority : 800,
			require : "^ngSwitch",
			link : function (a, b, c, d, e) {
				d.cases["?"] = d.cases["?"] || [],
				d.cases["?"].push({
					transclude : e,
					element : b
				})
			}
		}),
	uf = _c({
			link : function (a, b, c, e, f) {
				if (!f)
					throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
				f(function (a) {
					b.empty(),
					b.append(a)
				})
			}
		}),
	vf = ["$templateCache", function (a) {
			return {
				restrict : "E",
				terminal : !0,
				compile : function (b, c) {
					if ("text/ng-template" == c.type) {
						var d = c.id,
						e = b[0].text;
						a.put(d, e)
					}
				}
			}
		}
	],
	wf = d("ngOptions"),
	xf = q({
			terminal : !0
		}),
	yf = ["$compile", "$parse", function (a, d) {
			var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
			h = {
				$setViewValue : o
			};
			return {
				restrict : "E",
				require : ["select", "?ngModel"],
				controller : ["$element", "$scope", "$attrs", function (a, b, c) {
						var d,
						e,
						f = this,
						g = {},
						i = h;
						f.databound = c.ngModel,
						f.init = function (a, b, c) {
							i = a,
							d = b,
							e = c
						},
						f.addOption = function (b) {
							db(b, '"option value"'),
							g[b] = !0,
							i.$viewValue == b && (a.val(b), e.parent() && e.remove())
						},
						f.removeOption = function (a) {
							this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
						},
						f.renderUnknownOption = function (b) {
							var c = "? " + Eb(b) + " ?";
							e.val(c),
							a.prepend(e),
							a.val(c),
							e.prop("selected", !0)
						},
						f.hasOption = function (a) {
							return g.hasOwnProperty(a)
						},
						b.$on("$destroy", function () {
							f.renderUnknownOption = o
						})
					}
				],
				link : function (h, i, j, k) {
					function l(a, b, c, d) {
						c.$render = function () {
							var a = c.$viewValue;
							d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
						},
						b.on("change", function () {
							a.$apply(function () {
								y.parent() && y.remove(),
								c.$setViewValue(b.val())
							})
						})
					}
					function m(a, b, c) {
						var d;
						c.$render = function () {
							var a = new Fb(c.$viewValue);
							f(b.find("option"), function (b) {
								b.selected = s(a.get(b.value))
							})
						},
						a.$watch(function () {
							L(d, c.$viewValue) || (d = K(c.$viewValue), c.$render())
						}),
						b.on("change", function () {
							a.$apply(function () {
								var a = [];
								f(b.find("option"), function (b) {
									b.selected && a.push(b.value)
								}),
								c.$setViewValue(a)
							})
						})
					}
					function n(b, f, h) {
						function i() {
							var a,
							c,
							d,
							e,
							i,
							j,
							q,
							u,
							z,
							A,
							B,
							C,
							D,
							E,
							F,
							G = {
								"" : []
							},
							H = [""],
							I = h.$modelValue,
							J = p(b) || [],
							K = m ? g(J) : J,
							L = {},
							M = !1;
							if (t)
								if (r && Cd(I)) {
									M = new Fb([]);
									for (var N = 0; N < I.length; N++)
										L[l] = I[N], M.put(r(b, L), I[N])
								} else
									M = new Fb(I);
							for (B = 0; z = K.length, z > B; B++) {
								if (q = B, m) {
									if (q = K[B], "$" === q.charAt(0))
										continue;
									L[m] = q
								}
								if (L[l] = J[q], a = n(b, L) || "", (c = G[a]) || (c = G[a] = [], H.push(a)), t)
									C = s(M.remove(r ? r(b, L) : o(b, L)));
								else {
									if (r) {
										var O = {};
										O[l] = I,
										C = r(b, O) === r(b, L)
									} else
										C = I === o(b, L);
									M = M || C
								}
								F = k(b, L),
								F = s(F) ? F : "",
								c.push({
									id : r ? r(b, L) : m ? K[B] : B,
									label : F,
									selected : C
								})
							}
							for (t || (v || null === I ? G[""].unshift({
										id : "",
										label : "",
										selected : !M
									}) : M || G[""].unshift({
										id : "?",
										label : "",
										selected : !0
									})), A = 0, u = H.length; u > A; A++) {
								for (a = H[A], c = G[a], y.length <= A ? (e = {
											element : x.clone().attr("label", a),
											label : c.label
										}, i = [e], y.push(i), f.append(e.element)) : (i = y[A], e = i[0], e.label != a && e.element.attr("label", e.label = a)), D = null, B = 0, z = c.length; z > B; B++)
									d = c[B], (j = i[B + 1]) ? (D = j.element, j.label !== d.label && D.text(j.label = d.label), j.id !== d.id && D.val(j.id = d.id), j.selected !== d.selected && (D.prop("selected", j.selected = d.selected), rd && D.prop("selected", j.selected))) : ("" === d.id && v ? E = v : (E = w.clone()).val(d.id).prop("selected", d.selected).text(d.label), i.push(j = {
												element : E,
												label : d.label,
												id : d.id,
												selected : d.selected
											}), D ? D.after(E) : e.element.append(E), D = E);
								for (B++; i.length > B; )
									i.pop().element.remove()
							}
							for (; y.length > A; )
								y.pop()[0].element.remove()
						}
						var j;
						if (!(j = u.match(e)))
							throw wf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f));
						var k = d(j[2] || j[1]),
						l = j[4] || j[6],
						m = j[5],
						n = d(j[3] || ""),
						o = d(j[2] ? j[1] : l),
						p = d(j[7]),
						q = j[8],
						r = q ? d(j[8]) : null,
						y = [[{
									element : f,
									label : ""
								}
							]];
						v && (a(v)(b), v.removeClass("ng-scope"), v.remove()),
						f.empty(),
						f.on("change", function () {
							b.$apply(function () {
								var a,
								d,
								e,
								g,
								i,
								j,
								k,
								n,
								q,
								s = p(b) || [],
								u = {};
								if (t) {
									for (e = [], j = 0, n = y.length; n > j; j++)
										for (a = y[j], i = 1, k = a.length; k > i; i++)
											if ((g = a[i].element)[0].selected) {
												if (d = g.val(), m && (u[m] = d), r)
													for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++);
												else
													u[l] = s[d];
												e.push(o(b, u))
											}
								} else {
									if (d = f.val(), "?" == d)
										e = c;
									else if ("" === d)
										e = null;
									else if (r) {
										for (q = 0; q < s.length; q++)
											if (u[l] = s[q], r(b, u) == d) {
												e = o(b, u);
												break
											}
									} else
										u[l] = s[d], m && (u[m] = d), e = o(b, u);
									y[0].length > 1 && y[0][1].id !== d && (y[0][1].selected = !1)
								}
								h.$setViewValue(e)
							})
						}),
						h.$render = i,
						b.$watch(i)
					}
					if (k[1]) {
						for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = sd(b.createElement("option")), x = sd(b.createElement("optgroup")), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++)
							if ("" === A[z].value) {
								o = v = A.eq(z);
								break
							}
						p.init(q, v, y),
						t && (q.$isEmpty = function (a) {
							return !a || 0 === a.length
						}),
						u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
					}
				}
			}
		}
	],
	zf = ["$interpolate", function (a) {
			var b = {
				addOption : o,
				removeOption : o
			};
			return {
				restrict : "E",
				priority : 100,
				compile : function (c, d) {
					if (r(d.value)) {
						var e = a(c.text(), !0);
						e || d.$set("value", c.text())
					}
					return function (a, c, d) {
						var f = "$selectController",
						g = c.parent(),
						h = g.data(f) || g.parent().data(f);
						h && h.databound ? c.prop("selected", !1) : h = b,
						e ? a.$watch(e, function (a, b) {
							d.$set("value", a),
							a !== b && h.removeOption(b),
							h.addOption(a)
						}) : h.addOption(d.value),
						c.on("$destroy", function () {
							h.removeOption(d.value)
						})
					}
				}
			}
		}
	],
	Af = q({
			restrict : "E",
			terminal : !0
		});
	return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ab(), hb(Ad), void sd(b).ready(function () {
			Z(b, $)
		}))
}
(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), function (a, b, c) {
	"use strict";
	function d(a) {
		return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
	}
	function e(a, b) {
		if (!d(b))
			throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
		for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
			var i = e[f];
			a = null !== a ? a[i] : c
		}
		return a
	}
	function f(a, c) {
		c = c || {},
		b.forEach(c, function (a, b) {
			delete c[b]
		});
		for (var d in a)
			!a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
		return c
	}
	var g = b.$$minErr("$resource"),
	h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
	b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q", function (a, d) {
				function h(a) {
					return i(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
				}
				function i(a, b) {
					return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
				}
				function j(a, b) {
					this.template = a,
					this.defaults = b || {},
					this.urlParams = {}

				}
				function k(h, i, r) {
					function s(a, b) {
						var c = {};
						return b = o({}, i, b),
						n(b, function (b, d) {
							q(b) && (b = b()),
							c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
						}),
						c
					}
					function t(a) {
						return a.resource
					}
					function u(a) {
						f(a || {}, this)
					}
					var v = new j(h);
					return r = o({}, l, r),
					n(r, function (e, h) {
						var i = /^(POST|PUT|PATCH)$/i.test(e.method);
						u[h] = function (h, j, k, l) {
							var r,
							w,
							x,
							y = {};
							switch (arguments.length) {
							case 4:
								x = l,
								w = k;
							case 3:
							case 2:
								if (!q(j)) {
									y = h,
									r = j,
									w = k;
									break
								}
								if (q(h)) {
									w = h,
									x = j;
									break
								}
								w = j,
								x = k;
							case 1:
								q(h) ? w = h : i ? r = h : y = h;
								break;
							case 0:
								break;
							default:
								throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
							}
							var z = this instanceof u,
							A = z ? r : e.isArray ? [] : new u(r),
							B = {},
							C = e.interceptor && e.interceptor.response || t,
							D = e.interceptor && e.interceptor.responseError || c;
							n(e, function (a, b) {
								"params" != b && "isArray" != b && "interceptor" != b && (B[b] = p(a))
							}),
							i && (B.data = r),
							v.setUrlParams(B, o({}, s(r, e.params || {}), y), e.url);
							var E = a(B).then(function (a) {
									var c = a.data,
									d = A.$promise;
									if (c) {
										if (b.isArray(c) !== !!e.isArray)
											throw g("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
										e.isArray ? (A.length = 0, n(c, function (a) {
												A.push("object" == typeof a ? new u(a) : a)
											})) : (f(c, A), A.$promise = d)
									}
									return A.$resolved = !0,
									a.resource = A,
									a
								}, function (a) {
									return A.$resolved = !0,
									(x || m)(a),
									d.reject(a)
								});
							return E = E.then(function (a) {
									var b = C(a);
									return (w || m)(b, a.headers),
									b
								}, D),
							z ? E : (A.$promise = E, A.$resolved = !1, A)
						},
						u.prototype["$" + h] = function (a, b, c) {
							q(a) && (c = b, b = a, a = {});
							var d = u[h].call(this, a, this, b, c);
							return d.$promise || d
						}
					}),
					u.bind = function (a) {
						return k(h, o({}, i, a), r)
					},
					u
				}
				var l = {
					get : {
						method : "GET"
					},
					save : {
						method : "POST"
					},
					query : {
						method : "GET",
						isArray : !0
					},
					remove : {
						method : "DELETE"
					},
					"delete" : {
						method : "DELETE"
					}
				},
				m = b.noop,
				n = b.forEach,
				o = b.extend,
				p = b.copy,
				q = b.isFunction;
				return j.prototype = {
					setUrlParams : function (a, c, d) {
						var e,
						f,
						i = this,
						j = d || i.template,
						k = i.urlParams = {};
						n(j.split(/\W/), function (a) {
							if ("hasOwnProperty" === a)
								throw g("badname", "hasOwnProperty is not a valid parameter name.");
							!new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
						}),
						j = j.replace(/\\:/g, ":"),
						c = c || {},
						n(i.urlParams, function (a, d) {
							e = c.hasOwnProperty(d) ? c[d] : i.defaults[d],
							b.isDefined(e) && null !== e ? (f = h(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function (a, b) {
										return f + b
									})) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function (a, b, c) {
									return "/" == c.charAt(0) ? c : b + c
								})
						}),
						j = j.replace(/\/+$/, "") || "/",
						j = j.replace(/\/\.(?=\w+($|\?))/, "."),
						a.url = j.replace(/\/\\\./, "/."),
						n(c, function (b, c) {
							i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
						})
					}
				},
				k
			}
		])
}
(window, window.angular), function (a, b) {
	"use strict";
	function c() {
		function a(a, c) {
			return b.extend(new(b.extend(function () {}, {
						prototype : a
					})), c)
		}
		function c(a, b) {
			var c = b.caseInsensitiveMatch,
			d = {
				originalPath : a,
				regexp : a
			},
			e = d.keys = [];
			return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, b, c, d) {
					var f = "?" === d ? d : null,
					g = "*" === d ? d : null;
					return e.push({
						name : c,
						optional : !!f
					}),
					b = b || "",
					"" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
				}).replace(/([\/$\*])/g, "\\$1"),
			d.regexp = new RegExp("^" + a + "$", c ? "i" : ""),
			d
		}
		var d = {};
		this.when = function (a, e) {
			if (d[a] = b.extend({
						reloadOnSearch : !0
					}, e, a && c(a, e)), a) {
				var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
				d[f] = b.extend({
						redirectTo : a
					}, c(f, e))
			}
			return this
		},
		this.otherwise = function (a) {
			return this.when(null, a),
			this
		},
		this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function (c, e, f, g, h, i, j, k) {
				function l(a, b) {
					var c = b.keys,
					d = {};
					if (!b.regexp)
						return null;
					var e = b.regexp.exec(a);
					if (!e)
						return null;
					for (var f = 1, g = e.length; g > f; ++f) {
						var h = c[f - 1],
						i = e[f];
						h && i && (d[h.name] = i)
					}
					return d
				}
				function m() {
					var a = n(),
					d = q.current;
					a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), g.when(a).then(function () {
							if (a) {
								var c,
								d,
								e = b.extend({}, a.resolve);
								return b.forEach(e, function (a, c) {
									e[c] = b.isString(a) ? h.get(a) : h.invoke(a)
								}),
								b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {
												cache : j
											}).then(function (a) {
												return a.data
											}))),
								b.isDefined(c) && (e.$template = c),
								g.all(e)
							}
						}).then(function (e) {
							a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d))
						}, function (b) {
							a == q.current && c.$broadcast("$routeChangeError", a, d, b)
						}))
				}
				function n() {
					var c,
					f;
					return b.forEach(d, function (d) {
						!f && (c = l(e.path(), d)) && (f = a(d, {
									params : b.extend({}, e.search(), c),
									pathParams : c
								}), f.$$route = d)
					}),
					f || d[null] && a(d[null], {
						params : {},
						pathParams : {}

					})
				}
				function o(a, c) {
					var d = [];
					return b.forEach((a || "").split(":"), function (a, b) {
						if (0 === b)
							d.push(a);
						else {
							var e = a.match(/(\w+)(.*)/),
							f = e[1];
							d.push(c[f]),
							d.push(e[2] || ""),
							delete c[f]
						}
					}),
					d.join("")
				}
				var p = !1,
				q = {
					routes : d,
					reload : function () {
						p = !0,
						c.$evalAsync(m)
					}
				};
				return c.$on("$locationChangeSuccess", m),
				q
			}
		]
	}
	function d() {
		this.$get = function () {
			return {}

		}
	}
	function e(a, c, d) {
		return {
			restrict : "ECA",
			terminal : !0,
			priority : 400,
			transclude : "element",
			link : function (e, f, g, h, i) {
				function j() {
					n && (n.remove(), n = null),
					l && (l.$destroy(), l = null),
					m && (d.leave(m, function () {
							n = null
						}), n = m, m = null)
				}
				function k() {
					var g = a.current && a.current.locals,
					h = g && g.$template;
					if (b.isDefined(h)) {
						var k = e.$new(),
						n = a.current,
						q = i(k, function (a) {
								d.enter(a, null, m || f, function () {
									!b.isDefined(o) || o && !e.$eval(o) || c()
								}),
								j()
							});
						m = q,
						l = n.scope = k,
						l.$emit("$viewContentLoaded"),
						l.$eval(p)
					} else
						j()
				}
				var l,
				m,
				n,
				o = g.autoscroll,
				p = g.onload || "";
				e.$on("$routeChangeSuccess", k),
				k()
			}
		}
	}
	function f(a, b, c) {
		return {
			restrict : "ECA",
			priority : -400,
			link : function (d, e) {
				var f = c.current,
				g = f.locals;
				e.html(g.$template);
				var h = a(e.contents());
				if (f.controller) {
					g.$scope = d;
					var i = b(f.controller, g);
					f.controllerAs && (d[f.controllerAs] = i),
					e.data("$ngControllerController", i),
					e.children().data("$ngControllerController", i)
				}
				h(d)
			}
		}
	}
	var g = b.module("ngRoute", ["ng"]).provider("$route", c);
	g.provider("$routeParams", d),
	g.directive("ngView", e),
	g.directive("ngView", f),
	e.$inject = ["$route", "$anchorScroll", "$animate"],
	f.$inject = ["$compile", "$controller", "$route"]
}
(window, window.angular), function (a, b) {
	var c = function () {},
	d = function () {
		this.calls = [],
		this.map = {
			events : {
				friend : "menu:share:appmessage",
				timeline : "menu:share:timeline",
				weibo : "menu:share:weibo"
			},
			actions : {
				friend : "sendAppMessage",
				timeline : "shareTimeline",
				weibo : "shareWeibo"
			},
			direct : {
				network : "getNetworkType",
				hideToolbar : "hideToolbar",
				hideOptionMenu : "hideOptionMenu",
				showOptionMenu : "showOptionMenu"
			}
		}
	};
	d.prototype._data = function (a) {
		var b = {};
		for (var c in a) {
			if (!a.hasOwnProperty(c))
				return;
			b[c] = "function" == typeof a[c] ? a[c]() : a[c]
		}
		return b.appid = b.app,
		b.img_url = b.img,
		delete b.app,
		delete b.img,
		b
	},
	d.prototype._make = function (a) {
		if ("undefined" == typeof WeixinJSBridge)
			return this.calls.push(a);
		var b = a.name,
		c = this.map.direct[b],
		d = a.data,
		e = a.callback;
		if (c)
			return "network" === b ? WeixinJSBridge.invoke(c, {}, e) : WeixinJSBridge.call(c, e);
		"weibo" === b ? (d.content = d.desc, d.url = d.link) : "timeline" === b && (d.title = d.title + " - " + d.desc, d.desc = d.title);
		var f = this;
		WeixinJSBridge.on(this.map.events[b], function () {
			WeixinJSBridge.invoke(f.map.actions[b], d, e)
		})
	},
	d.prototype.on = function (a, b, d) {
		return a ? ("function" == typeof b && (d = b, b = null), this._make({
				name : a,
				data : b ? this._data(b) : {},
				callback : d || c
			}), this) : void 0
	};
	var e = function () {
		for (var a = 0, b = f.calls.length; b > a; a++)
			f._make(f.calls[a])
	},
	f = new d;
	a.wechat = a.wechat || function () {
		return f.on.apply(f, arguments)
	},
	"undefined" == typeof WeixinJSBridge ? b.addEventListener ? b.addEventListener("WeixinJSBridgeReady", e, !1) : (b.attachEvent("WeixinJSBridgeReady", e), b.attachEvent("onWeixinJSBridgeReady", e)) : e()
}
(window, document), function (a, b, c) {
	function d(a, c) {
		this.wrapper = "string" == typeof a ? b.querySelector(a) : a,
		this.scroller = this.wrapper.children[0],
		this.scrollerStyle = this.scroller.style,
		this.options = {
			startX : 0,
			startY : 0,
			scrollY : !0,
			directionLockThreshold : 5,
			momentum : !0,
			bounce : !0,
			bounceTime : 600,
			bounceEasing : "",
			preventDefault : !0,
			preventDefaultException : {
				tagName : /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
			},
			HWCompositing : !0,
			useTransition : !0,
			useTransform : !0
		};
		for (var d in c)
			this.options[d] = c[d];
		this.translateZ = this.options.HWCompositing && f.hasPerspective ? " translateZ(0)" : "",
		this.options.useTransition = f.hasTransition && this.options.useTransition,
		this.options.useTransform = f.hasTransform && this.options.useTransform,
		this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
		this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY,
		this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX,
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
		this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? f.ease[this.options.bounceEasing] || f.ease.circular : this.options.bounceEasing,
		this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
		this.options.tap === !0 && (this.options.tap = "tap"),
		this.x = 0,
		this.y = 0,
		this.directionX = 0,
		this.directionY = 0,
		this._events = {},
		this._init(),
		this.refresh(),
		this.scrollTo(this.options.startX, this.options.startY),
		this.enable()
	}
	var e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (b) {
		a.setTimeout(b, 1e3 / 60)
	},
	f = function () {
		function d(a) {
			return g === !1 ? !1 : "" === g ? a : g + a.charAt(0).toUpperCase() + a.substr(1)
		}
		var e = {},
		f = b.createElement("div").style,
		g = function () {
			for (var a, b = ["t", "webkitT", "MozT", "msT", "OT"], c = 0, d = b.length; d > c; c++)
				if (a = b[c] + "ransform", a in f)
					return b[c].substr(0, b[c].length - 1);
			return !1
		}
		();
		e.getTime = Date.now || function () {
			return (new Date).getTime()
		},
		e.extend = function (a, b) {
			for (var c in b)
				a[c] = b[c]
		},
		e.addEvent = function (a, b, c, d) {
			a.addEventListener(b, c, !!d)
		},
		e.removeEvent = function (a, b, c, d) {
			a.removeEventListener(b, c, !!d)
		},
		e.prefixPointerEvent = function (b) {
			return a.MSPointerEvent ? "MSPointer" + b.charAt(9).toUpperCase() + b.substr(10) : b
		},
		e.momentum = function (a, b, d, e, f, g) {
			var h,
			i,
			j = a - b,
			k = c.abs(j) / d;
			return g = void 0 === g ? 6e-4 : g,
			h = a + k * k / (2 * g) * (0 > j ? -1 : 1),
			i = k / g,
			e > h ? (h = f ? e - f / 2.5 * (k / 8) : e, j = c.abs(h - a), i = j / k) : h > 0 && (h = f ? f / 2.5 * (k / 8) : 0, j = c.abs(a) + h, i = j / k), {
				destination : c.round(h),
				duration : i
			}
		};
		var h = d("transform");
		return e.extend(e, {
			hasTransform : h !== !1,
			hasPerspective : d("perspective")in f,
			hasTouch : "ontouchstart" in a,
			hasPointer : a.PointerEvent || a.MSPointerEvent,
			hasTransition : d("transition")in f
		}),
		e.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion),
		e.extend(e.style = {}, {
			transform : h,
			transitionTimingFunction : d("transitionTimingFunction"),
			transitionDuration : d("transitionDuration"),
			transitionDelay : d("transitionDelay"),
			transformOrigin : d("transformOrigin")
		}),
		e.hasClass = function (a, b) {
			var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
			return c.test(a.className)
		},
		e.addClass = function (a, b) {
			if (!e.hasClass(a, b)) {
				var c = a.className.split(" ");
				c.push(b),
				a.className = c.join(" ")
			}
		},
		e.removeClass = function (a, b) {
			if (e.hasClass(a, b)) {
				var c = new RegExp("(^|\\s)" + b + "(\\s|$)", "g");
				a.className = a.className.replace(c, " ")
			}
		},
		e.offset = function (a) {
			for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
				b -= a.offsetLeft, c -= a.offsetTop;
			return {
				left : b,
				top : c
			}
		},
		e.preventDefaultException = function (a, b) {
			for (var c in b)
				if (b[c].test(a[c]))
					return !0;
			return !1
		},
		e.extend(e.eventType = {}, {
			touchstart : 1,
			touchmove : 1,
			touchend : 1,
			mousedown : 2,
			mousemove : 2,
			mouseup : 2,
			pointerdown : 3,
			pointermove : 3,
			pointerup : 3,
			MSPointerDown : 3,
			MSPointerMove : 3,
			MSPointerUp : 3
		}),
		e.extend(e.ease = {}, {
			quadratic : {
				style : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				fn : function (a) {
					return a * (2 - a)
				}
			},
			circular : {
				style : "cubic-bezier(0.1, 0.57, 0.1, 1)",
				fn : function (a) {
					return c.sqrt(1 - --a * a)
				}
			},
			back : {
				style : "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
				fn : function (a) {
					var b = 4;
					return (a -= 1) * a * ((b + 1) * a + b) + 1
				}
			},
			bounce : {
				style : "",
				fn : function (a) {
					return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
				}
			},
			elastic : {
				style : "",
				fn : function (a) {
					var b = .22,
					d = .4;
					return 0 === a ? 0 : 1 == a ? 1 : d * c.pow(2, -10 * a) * c.sin(2 * (a - b / 4) * c.PI / b) + 1
				}
			}
		}),
		e.tap = function (a, c) {
			var d = b.createEvent("Event");
			d.initEvent(c, !0, !0),
			d.pageX = a.pageX,
			d.pageY = a.pageY,
			a.target.dispatchEvent(d)
		},
		e.click = function (a) {
			var c,
			d = a.target;
			/(SELECT|INPUT|TEXTAREA)/i.test(d.tagName) || (c = b.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, a.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), c._constructed = !0, d.dispatchEvent(c))
		},
		e
	}
	();
	d.prototype = {
		version : "5.1.3",
		_init : function () {
			this._initEvents()
		},
		destroy : function () {
			this._initEvents(!0),
			this._execEvent("destroy")
		},
		_transitionEnd : function (a) {
			a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
		},
		_start : function (a) {
			if (!(1 != f.eventType[a.type] && 0 !== a.button || !this.enabled || this.initiated && f.eventType[a.type] !== this.initiated)) {
				!this.options.preventDefault || f.isBadAndroid || f.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
				var b,
				d = a.touches ? a.touches[0] : a;
				this.initiated = f.eventType[a.type],
				this.moved = !1,
				this.distX = 0,
				this.distY = 0,
				this.directionX = 0,
				this.directionY = 0,
				this.directionLocked = 0,
				this._transitionTime(),
				this.startTime = f.getTime(),
				this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, b = this.getComputedPosition(), this._translate(c.round(b.x), c.round(b.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")),
				this.startX = this.x,
				this.startY = this.y,
				this.absStartX = this.x,
				this.absStartY = this.y,
				this.pointX = d.pageX,
				this.pointY = d.pageY,
				this._execEvent("beforeScrollStart")
			}
		},
		_move : function (a) {
			if (this.enabled && f.eventType[a.type] === this.initiated) {
				this.options.preventDefault && a.preventDefault();
				var b,
				d,
				e,
				g,
				h = a.touches ? a.touches[0] : a,
				i = h.pageX - this.pointX,
				j = h.pageY - this.pointY,
				k = f.getTime();
				if (this.pointX = h.pageX, this.pointY = h.pageY, this.distX += i, this.distY += j, e = c.abs(this.distX), g = c.abs(this.distY), !(k - this.endTime > 300 && 10 > e && 10 > g)) {
					if (this.directionLocked || this.options.freeScroll || (this.directionLocked = e > g + this.options.directionLockThreshold ? "h" : g >= e + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
						if ("vertical" == this.options.eventPassthrough)
							a.preventDefault();
						else if ("horizontal" == this.options.eventPassthrough)
							return void(this.initiated = !1);
						j = 0
					} else if ("v" == this.directionLocked) {
						if ("horizontal" == this.options.eventPassthrough)
							a.preventDefault();
						else if ("vertical" == this.options.eventPassthrough)
							return void(this.initiated = !1);
						i = 0
					}
					i = this.hasHorizontalScroll ? i : 0,
					j = this.hasVerticalScroll ? j : 0,
					b = this.x + i,
					d = this.y + j,
					(b > 0 || b < this.maxScrollX) && (b = this.options.bounce ? this.x + i / 3 : b > 0 ? 0 : this.maxScrollX),
					(d > 0 || d < this.maxScrollY) && (d = this.options.bounce ? this.y + j / 3 : d > 0 ? 0 : this.maxScrollY),
					this.directionX = i > 0 ? -1 : 0 > i ? 1 : 0,
					this.directionY = j > 0 ? -1 : 0 > j ? 1 : 0,
					this.moved || this._execEvent("scrollStart"),
					this.moved = !0,
					this._translate(b, d),
					k - this.startTime > 300 && (this.startTime = k, this.startX = this.x, this.startY = this.y)
				}
			}
		},
		_end : function (a) {
			if (this.enabled && f.eventType[a.type] === this.initiated) {
				this.options.preventDefault && !f.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
				var b,
				d,
				e = (a.changedTouches ? a.changedTouches[0] : a, f.getTime() - this.startTime),
				g = c.round(this.x),
				h = c.round(this.y),
				i = c.abs(g - this.startX),
				j = c.abs(h - this.startY),
				k = 0,
				l = "";
				if (this.isInTransition = 0, this.initiated = 0, this.endTime = f.getTime(), !this.resetPosition(this.options.bounceTime))
					return this.scrollTo(g, h), this.moved ? this._events.flick && 200 > e && 100 > i && 100 > j ? void this._execEvent("flick") : (this.options.momentum && 300 > e && (b = this.hasHorizontalScroll ? f.momentum(this.x, this.startX, e, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
								destination : g,
								duration : 0
							}, d = this.hasVerticalScroll ? f.momentum(this.y, this.startY, e, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
								destination : h,
								duration : 0
							}, g = b.destination, h = d.destination, k = c.max(b.duration, d.duration), this.isInTransition = 1), g != this.x || h != this.y ? ((g > 0 || g < this.maxScrollX || h > 0 || h < this.maxScrollY) && (l = f.ease.quadratic), void this.scrollTo(g, h, k, l)) : void this._execEvent("scrollEnd")) : (this.options.tap && f.tap(a, this.options.tap), this.options.click && f.click(a), void this._execEvent("scrollCancel"))
			}
		},
		_resize : function () {
			var a = this;
			clearTimeout(this.resizeTimeout),
			this.resizeTimeout = setTimeout(function () {
					a.refresh()
				}, this.options.resizePolling)
		},
		resetPosition : function (a) {
			var b = this.x,
			c = this.y;
			return a = a || 0,
			!this.hasHorizontalScroll || this.x > 0 ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX),
			!this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY),
			b == this.x && c == this.y ? !1 : (this.scrollTo(b, c, a, this.options.bounceEasing), !0)
		},
		disable : function () {
			this.enabled = !1
		},
		enable : function () {
			this.enabled = !0
		},
		refresh : function () {
			this.wrapper.offsetHeight;
			this.wrapperWidth = this.wrapper.clientWidth,
			this.wrapperHeight = this.wrapper.clientHeight,
			this.scrollerWidth = this.scroller.offsetWidth,
			this.scrollerHeight = this.scroller.offsetHeight,
			this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
			this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
			this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
			this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
			this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
			this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
			this.endTime = 0,
			this.directionX = 0,
			this.directionY = 0,
			this.wrapperOffset = f.offset(this.wrapper),
			this._execEvent("refresh"),
			this.resetPosition()
		},
		on : function (a, b) {
			this._events[a] || (this._events[a] = []),
			this._events[a].push(b)
		},
		off : function (a, b) {
			if (this._events[a]) {
				var c = this._events[a].indexOf(b);
				c > -1 && this._events[a].splice(c, 1)
			}
		},
		_execEvent : function (a) {
			if (this._events[a]) {
				var b = 0,
				c = this._events[a].length;
				if (c)
					for (; c > b; b++)
						this._events[a][b].apply(this, [].slice.call(arguments, 1))
			}
		},
		scrollBy : function (a, b, c, d) {
			a = this.x + a,
			b = this.y + b,
			c = c || 0,
			this.scrollTo(a, b, c, d)
		},
		scrollTo : function (a, b, c, d) {
			d = d || f.ease.circular,
			this.isInTransition = this.options.useTransition && c > 0,
			!c || this.options.useTransition && d.style ? (this._transitionTimingFunction(d.style), this._transitionTime(c), this._translate(a, b)) : this._animate(a, b, c, d.fn)
		},
		scrollToElement : function (a, b, d, e, g) {
			if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
				var h = f.offset(a);
				h.left -= this.wrapperOffset.left,
				h.top -= this.wrapperOffset.top,
				d === !0 && (d = c.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
				e === !0 && (e = c.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
				h.left -= d || 0,
				h.top -= e || 0,
				h.left = h.left > 0 ? 0 : h.left < this.maxScrollX ? this.maxScrollX : h.left,
				h.top = h.top > 0 ? 0 : h.top < this.maxScrollY ? this.maxScrollY : h.top,
				b = void 0 === b || null === b || "auto" === b ? c.max(c.abs(this.x - h.left), c.abs(this.y - h.top)) : b,
				this.scrollTo(h.left, h.top, b, g)
			}
		},
		_transitionTime : function (a) {
			a = a || 0,
			this.scrollerStyle[f.style.transitionDuration] = a + "ms",
			!a && f.isBadAndroid && (this.scrollerStyle[f.style.transitionDuration] = "0.001s")
		},
		_transitionTimingFunction : function (a) {
			this.scrollerStyle[f.style.transitionTimingFunction] = a
		},
		_translate : function (a, b) {
			this.options.useTransform ? this.scrollerStyle[f.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ : (a = c.round(a), b = c.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px"),
			this.x = a,
			this.y = b
		},
		_initEvents : function (b) {
			var c = b ? f.removeEvent : f.addEvent,
			d = this.options.bindToWrapper ? this.wrapper : a;
			c(a, "orientationchange", this),
			c(a, "resize", this),
			this.options.click && c(this.wrapper, "click", this, !0),
			this.options.disableMouse || (c(this.wrapper, "mousedown", this), c(d, "mousemove", this), c(d, "mousecancel", this), c(d, "mouseup", this)),
			f.hasPointer && !this.options.disablePointer && (c(this.wrapper, f.prefixPointerEvent("pointerdown"), this), c(d, f.prefixPointerEvent("pointermove"), this), c(d, f.prefixPointerEvent("pointercancel"), this), c(d, f.prefixPointerEvent("pointerup"), this)),
			f.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this), c(d, "touchmove", this), c(d, "touchcancel", this), c(d, "touchend", this)),
			c(this.scroller, "transitionend", this),
			c(this.scroller, "webkitTransitionEnd", this),
			c(this.scroller, "oTransitionEnd", this),
			c(this.scroller, "MSTransitionEnd", this)
		},
		getComputedPosition : function () {
			var b,
			c,
			d = a.getComputedStyle(this.scroller, null);
			return this.options.useTransform ? (d = d[f.style.transform].split(")")[0].split(", "), b =  + (d[12] || d[4]), c =  + (d[13] || d[5])) : (b = +d.left.replace(/[^-\d.]/g, ""), c = +d.top.replace(/[^-\d.]/g, "")), {
				x : b,
				y : c
			}
		},
		_animate : function (a, b, c, d) {
			function g() {
				var m,
				n,
				o,
				p = f.getTime();
				return p >= l ? (h.isAnimating = !1, h._translate(a, b), void(h.resetPosition(h.options.bounceTime) || h._execEvent("scrollEnd"))) : (p = (p - k) / c, o = d(p), m = (a - i) * o + i, n = (b - j) * o + j, h._translate(m, n), void(h.isAnimating && e(g)))
			}
			var h = this,
			i = this.x,
			j = this.y,
			k = f.getTime(),
			l = k + c;
			this.isAnimating = !0,
			g()
		},
		handleEvent : function (a) {
			switch (a.type) {
			case "touchstart":
			case "pointerdown":
			case "MSPointerDown":
			case "mousedown":
				this._start(a);
				break;
			case "touchmove":
			case "pointermove":
			case "MSPointerMove":
			case "mousemove":
				this._move(a);
				break;
			case "touchend":
			case "pointerup":
			case "MSPointerUp":
			case "mouseup":
			case "touchcancel":
			case "pointercancel":
			case "MSPointerCancel":
			case "mousecancel":
				this._end(a);
				break;
			case "orientationchange":
			case "resize":
				this._resize();
				break;
			case "transitionend":
			case "webkitTransitionEnd":
			case "oTransitionEnd":
			case "MSTransitionEnd":
				this._transitionEnd(a);
				break;
			case "wheel":
			case "DOMMouseScroll":
			case "mousewheel":
				this._wheel(a);
				break;
			case "keydown":
				this._key(a);
				break;
			case "click":
				a._constructed || (a.preventDefault(), a.stopPropagation())
			}
		}
	},
	d.utils = f,
	"undefined" != typeof module && module.exports ? module.exports = d : a.IScroll = d
}
(window, document, Math);
