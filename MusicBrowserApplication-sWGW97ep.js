import { n as e, t } from "./constants-BTCouAkl.js";
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function n(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var r = {}, i = [], a = () => {}, o = () => !1, s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), c = (e) => e.startsWith("onUpdate:"), l = Object.assign, u = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), ee = (e) => C(e) === "[object Object]", te = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ne = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, E = T((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, D = T((e) => e.replace(ie, "-$1").toLowerCase()), ae = T((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = T((e) => e ? `on${ae(e)}` : ""), O = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ce = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, le = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? ge(r) : fe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, "").split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function _e(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = _e(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ve = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ye = /* @__PURE__ */ n(ve);
ve + "";
function be(e) {
	return !!e || e === "";
}
function xe(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Se(e[r], t[r]);
	return n;
}
function Se(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? xe(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Se(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Ce(e, t) {
	return e.findIndex((e) => Se(e, t));
}
var we = (e) => !!(e && e.__v_isRef === !0), k = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? we(e) ? k(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : y(t) ? Ee(t) : b(t) && !p(t) && !ee(t) ? String(t) : t, Ee = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, A, De = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Oe(e) {
	return new De(e);
}
function ke() {
	return A;
}
var j, Ae = /* @__PURE__ */ new WeakSet(), je = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, qe(this), Re(this);
		let e = j, t = M;
		j = this, M = !0;
		try {
			return this.fn();
		} finally {
			ze(this), j = e, M = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) He(e);
			this.deps = this.depsTail = void 0, qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Be(this) && this.run();
	}
	get dirty() {
		return Be(this);
	}
}, Me = 0, Ne, Pe;
function Fe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Pe, Pe = e;
		return;
	}
	e.next = Ne, Ne = e;
}
function Ie() {
	Me++;
}
function Le() {
	if (--Me > 0) return;
	if (Pe) {
		let e = Pe;
		for (Pe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ne;) {
		let t = Ne;
		for (Ne = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), He(r), Ue(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ve(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ve(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Je) || (e.globalVersion = Je, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Be(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = M;
	j = e, M = !0;
	try {
		Re(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, M = r, ze(e), e.flags &= -3;
	}
}
function He(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) He(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ue(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var M = !0, We = [];
function Ge() {
	We.push(M), M = !1;
}
function Ke() {
	let e = We.pop();
	M = e === void 0 ? !0 : e;
}
function qe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var Je = 0, Ye = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Xe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !M || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Ye(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, Ze(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Je++, this.notify(e);
	}
	notify(e) {
		Ie();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Le();
		}
	}
};
function Ze(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ze(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (M && j) {
		let t = Qe.get(e);
		t || Qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Xe()), r.map = t, r.key = n), r.track();
	}
}
function nt(e, t, n, r, i, a) {
	let o = Qe.get(e);
	if (!o) {
		Je++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ie(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === tt || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(tt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get($e)), m(e) && s(o.get(et)));
				break;
			case "delete":
				i || (s(o.get($e)), m(e) && s(o.get(et)));
				break;
			case "set":
				m(e) && s(o.get($e));
				break;
		}
	}
	Le();
}
function rt(e) {
	let t = /* @__PURE__ */ I(e);
	return t === e ? t : (N(t, "iterate", tt), /* @__PURE__ */ F(e) ? t : t.map(L));
}
function it(e) {
	return N(e = /* @__PURE__ */ I(e), "iterate", tt), e;
}
function P(e, t) {
	return /* @__PURE__ */ Bt(e) ? Ut(/* @__PURE__ */ zt(e) ? L(t) : t) : L(t);
}
var at = {
	__proto__: null,
	[Symbol.iterator]() {
		return ot(this, Symbol.iterator, (e) => P(this, e));
	},
	concat(...e) {
		return rt(this).concat(...e.map((e) => p(e) ? rt(e) : e));
	},
	entries() {
		return ot(this, "entries", (e) => (e[1] = P(this, e[1]), e));
	},
	every(e, t) {
		return ct(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ct(this, "filter", e, t, (e) => e.map((e) => P(this, e)), arguments);
	},
	find(e, t) {
		return ct(this, "find", e, t, (e) => P(this, e), arguments);
	},
	findIndex(e, t) {
		return ct(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ct(this, "findLast", e, t, (e) => P(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ct(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ct(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ut(this, "includes", e);
	},
	indexOf(...e) {
		return ut(this, "indexOf", e);
	},
	join(e) {
		return rt(this).join(e);
	},
	lastIndexOf(...e) {
		return ut(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ct(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return dt(this, "pop");
	},
	push(...e) {
		return dt(this, "push", e);
	},
	reduce(e, ...t) {
		return lt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return lt(this, "reduceRight", e, t);
	},
	shift() {
		return dt(this, "shift");
	},
	some(e, t) {
		return ct(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return dt(this, "splice", e);
	},
	toReversed() {
		return rt(this).toReversed();
	},
	toSorted(e) {
		return rt(this).toSorted(e);
	},
	toSpliced(...e) {
		return rt(this).toSpliced(...e);
	},
	unshift(...e) {
		return dt(this, "unshift", e);
	},
	values() {
		return ot(this, "values", (e) => P(this, e));
	}
};
function ot(e, t, n) {
	let r = it(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ F(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var st = Array.prototype;
function ct(e, t, n, r, i, a) {
	let o = it(e), s = o !== e && !/* @__PURE__ */ F(e), c = o[t];
	if (c !== st[t]) {
		let t = c.apply(e, a);
		return s ? L(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, P(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function lt(e, t, n, r) {
	let i = it(e), a = i !== e && !/* @__PURE__ */ F(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = P(e, t)), n.call(this, t, P(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? P(e, c) : c;
}
function ut(e, t, n) {
	let r = /* @__PURE__ */ I(e);
	N(r, "iterate", tt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Vt(n[0]) ? (n[0] = /* @__PURE__ */ I(n[0]), r[t](...n)) : i;
}
function dt(e, t, n = []) {
	Ge(), Ie();
	let r = (/* @__PURE__ */ I(e))[t].apply(e, n);
	return Le(), Ke(), r;
}
var ft = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), pt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function mt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ I(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var ht = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Nt : Mt : i ? jt : At).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = at[t])) return e;
			if (t === "hasOwnProperty") return mt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ R(e) ? e : n);
		if ((y(t) ? pt.has(t) : ft(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ R(o)) {
			let e = a && te(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Lt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Lt(o) : /* @__PURE__ */ Ft(o) : o;
	}
}, gt = class extends ht {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Bt(i);
			if (!/* @__PURE__ */ F(n) && !/* @__PURE__ */ Bt(n) && (i = /* @__PURE__ */ I(i), n = /* @__PURE__ */ I(n)), !a && /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ R(e) ? e : r);
		return e === /* @__PURE__ */ I(r) && (o ? O(n, i) && nt(e, "set", t, n, i) : nt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && nt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !pt.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", p(e) ? "length" : $e), Reflect.ownKeys(e);
	}
}, _t = class extends ht {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, vt = /* @__PURE__ */ new gt(), yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new gt(!0), xt = (e) => e, St = (e) => Reflect.getPrototypeOf(e);
function Ct(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ I(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? xt : t ? Ut : L;
		return !t && N(a, "iterate", c ? et : $e), l(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function wt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Tt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ I(r), a = /* @__PURE__ */ I(n);
			e || (O(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = St(i), s = t ? xt : e ? Ut : L;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ I(t), "iterate", $e), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ I(n), i = /* @__PURE__ */ I(t);
			return e || (O(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ I(a), s = t ? xt : e ? Ut : L;
			return !e && N(o, "iterate", $e), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: wt("add"),
		set: wt("set"),
		delete: wt("delete"),
		clear: wt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ I(this), r = St(n), i = /* @__PURE__ */ I(e), a = !t && !/* @__PURE__ */ F(e) && !/* @__PURE__ */ Bt(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), nt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ F(n) && !/* @__PURE__ */ Bt(n) && (n = /* @__PURE__ */ I(n));
			let r = /* @__PURE__ */ I(this), { has: i, get: a } = St(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ I(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && nt(r, "set", e, n, s) : nt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ I(this), { has: n, get: r } = St(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ I(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && nt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ I(this), t = e.size !== 0, n = e.clear();
			return t && nt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ct(r, e, t);
	}), n;
}
function Et(e, t) {
	let n = Tt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Dt = { get: /* @__PURE__ */ Et(!1, !1) }, Ot = { get: /* @__PURE__ */ Et(!1, !0) }, kt = { get: /* @__PURE__ */ Et(!0, !1) }, At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap();
function Pt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
	return /* @__PURE__ */ Bt(e) ? e : Rt(e, !1, vt, Dt, At);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return Rt(e, !1, bt, Ot, jt);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return Rt(e, !0, yt, kt, Mt);
}
function Rt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Pt(w(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return /* @__PURE__ */ Bt(e) ? /* @__PURE__ */ zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ I(t) : e;
}
function Ht(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var L = (e) => b(e) ? /* @__PURE__ */ Ft(e) : e, Ut = (e) => b(e) ? /* @__PURE__ */ Lt(e) : e;
// @__NO_SIDE_EFFECTS__
function R(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Gt(e, !1);
}
function Gt(e, t) {
	return /* @__PURE__ */ R(e) ? e : new Kt(e, t);
}
var Kt = class {
	constructor(e, t) {
		this.dep = new Xe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ I(e), this._value = t ? e : L(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ F(e) || /* @__PURE__ */ Bt(e);
		e = n ? e : /* @__PURE__ */ I(e), O(e, t) && (this._rawValue = e, this._value = n ? e : L(e), this.dep.trigger());
	}
};
function qt(e) {
	return /* @__PURE__ */ R(e) ? e.value : e;
}
var Jt = {
	get: (e, t, n) => t === "__v_raw" ? e : qt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Yt(e) {
	return /* @__PURE__ */ zt(e) ? e : new Proxy(e, Jt);
}
var Xt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Xe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Je - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Fe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ve(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function Zt(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new Xt(r, i, n);
}
var Qt = {}, $t = /* @__PURE__ */ new WeakMap(), en = void 0;
function tn(e, t = !1, n = en) {
	if (n) {
		let t = $t.get(n);
		t || $t.set(n, t = []), t.push(e);
	}
}
function nn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ F(e) || o === !1 || o === 0 ? rn(e, 1) : rn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ R(e) ? (h = () => e.value, y = /* @__PURE__ */ F(e)) : /* @__PURE__ */ zt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ zt(e) || /* @__PURE__ */ F(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ R(e)) return e.value;
		if (/* @__PURE__ */ zt(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			Ge();
			try {
				g();
			} finally {
				Ke();
			}
		}
		let t = en;
		en = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			en = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => rn(e(), t);
	}
	let x = ke(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(Qt) : Qt, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let n = m.run();
			if (e || o || y || (b ? n.some((e, t) => O(e, C[t])) : O(n, C))) {
				g && g();
				let e = en;
				en = m;
				try {
					let e = [
						n,
						C === Qt ? void 0 : b && C[0] === Qt ? [] : C,
						v
					];
					C = n, d ? d(t, 3, e) : t(...e);
				} finally {
					en = e;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new je(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => tn(e, !1, m), g = m.onStop = () => {
		let e = $t.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			$t.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function rn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ R(e)) rn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) rn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		rn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) rn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && rn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function an(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		on(e, t, n);
	}
}
function z(e, t, n, r) {
	if (_(e)) {
		let i = an(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			on(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(z(e[a], t, n, r));
		return i;
	}
}
function on(e, t, n, i = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || r;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			Ge(), an(o, null, 10, [
				e,
				i,
				a
			]), Ke();
			return;
		}
	}
	sn(e, n, a, i, s);
}
function sn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var B = [], V = -1, cn = [], ln = null, un = 0, dn = /* @__PURE__ */ Promise.resolve(), fn = null;
function pn(e) {
	let t = fn || dn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function mn(e) {
	let t = V + 1, n = B.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = B[r], a = bn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function hn(e) {
	if (!(e.flags & 1)) {
		let t = bn(e), n = B[B.length - 1];
		!n || !(e.flags & 2) && t >= bn(n) ? B.push(e) : B.splice(mn(t), 0, e), e.flags |= 1, gn();
	}
}
function gn() {
	fn ||= dn.then(xn);
}
function _n(e) {
	p(e) ? cn.push(...e) : ln && e.id === -1 ? ln.splice(un + 1, 0, e) : e.flags & 1 || (cn.push(e), e.flags |= 1), gn();
}
function vn(e, t, n = V + 1) {
	for (; n < B.length; n++) {
		let t = B[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			B.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function yn(e) {
	if (cn.length) {
		let e = [...new Set(cn)].sort((e, t) => bn(e) - bn(t));
		if (cn.length = 0, ln) {
			ln.push(...e);
			return;
		}
		for (ln = e, un = 0; un < ln.length; un++) {
			let e = ln[un];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		ln = null, un = 0;
	}
}
var bn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function xn(e) {
	try {
		for (V = 0; V < B.length; V++) {
			let e = B[V];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), an(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; V < B.length; V++) {
			let e = B[V];
			e && (e.flags &= -2);
		}
		V = -1, B.length = 0, yn(e), fn = null, (B.length || cn.length) && xn(e);
	}
}
var H = null, Sn = null;
function Cn(e) {
	let t = H;
	return H = e, Sn = e && e.type.__scopeId || null, t;
}
function wn(e, t = H, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Oi(-1);
		let i = Cn(t), a;
		try {
			a = e(...n);
		} finally {
			Cn(i), r._d && Oi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Tn(e, t) {
	if (H === null) return e;
	let n = sa(H), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && rn(o), i.push({
			dir: a,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function En(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ge(), z(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ke());
	}
}
function Dn(e, t) {
	if ($) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function On(e, t, n = !1) {
	let r = Ki();
	if (r || Nr) {
		let i = Nr ? Nr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
var kn = /* @__PURE__ */ Symbol.for("v-scx"), An = () => On(kn);
function jn(e, t, n) {
	return Mn(e, t, n);
}
function Mn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Qi) {
		if (s === "sync") {
			let e = An();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = $;
	u.call = (e, t, n) => z(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		W(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : hn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = nn(e, t, u);
	return Qi && (f ? f.push(h) : d && h()), h;
}
function Nn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Pn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Yi(this), s = Mn(i, a.bind(r), n);
	return o(), s;
}
function Pn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Fn = /* @__PURE__ */ Symbol("_vte"), In = (e) => e.__isTeleport, Ln = /* @__PURE__ */ Symbol("_leaveCb");
function Rn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Rn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function Bn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Vn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Hn = /* @__PURE__ */ new WeakMap();
function Un(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => Un(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (Gn(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Un(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? sa(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ I(g), b = g === r ? o : (e) => Vn(h, e) ? !1 : f(y, e), x = (e, t) => !(t && Vn(h, t));
	if (m != null && m !== d) {
		if (Wn(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ R(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) an(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ R(d);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? b(d) ? g[d] : h[d] : x(d) || !e.k ? d.value : h[e.k];
					if (a) p(n) && u(n, s);
					else if (p(n)) n.includes(s) || n.push(s);
					else if (t) h[d] = [s], b(d) && (g[d] = h[d]);
					else {
						let t = [s];
						x(d, e.k) && (d.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[d] = c, b(d) && (g[d] = c)) : r && (x(d, e.k) && (d.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), Hn.delete(e);
				};
				t.id = -1, Hn.set(e, t), W(t, n);
			} else Wn(e), i();
		}
	}
}
function Wn(e) {
	let t = Hn.get(e);
	t && (t.flags |= 8, Hn.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var Gn = (e) => !!e.type.__asyncLoader, Kn = (e) => e.type.__isKeepAlive;
function qn(e, t) {
	Yn(e, "a", t);
}
function Jn(e, t) {
	Yn(e, "da", t);
}
function Yn(e, t, n = $) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Zn(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Kn(e.parent.vnode) && Xn(r, t, n, e), e = e.parent;
	}
}
function Xn(e, t, n, r) {
	let i = Zn(t, e, r, !0);
	ir(() => {
		u(r[t], i);
	}, n);
}
function Zn(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ge();
			let i = Yi(n), a = z(t, n, e, r);
			return i(), Ke(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Qn = (e) => (t, n = $) => {
	(!Qi || e === "sp") && Zn(e, (...e) => t(...e), n);
}, $n = Qn("bm"), er = Qn("m"), tr = Qn("bu"), nr = Qn("u"), rr = Qn("bum"), ir = Qn("um"), ar = Qn("sp"), or = Qn("rtg"), sr = Qn("rtc");
function cr(e, t = $) {
	Zn("ec", e, t);
}
var lr = /* @__PURE__ */ Symbol.for("v-ndc");
function ur(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ zt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ F(e), s = /* @__PURE__ */ Bt(e), e = it(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Ut(L(e[n])) : L(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (b(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
var dr = (e) => e ? Zi(e) ? sa(e) : dr(e.parent) : null, fr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => dr(e.parent),
	$root: (e) => dr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => xr(e),
	$forceUpdate: (e) => e.f ||= () => {
		hn(e.update);
	},
	$nextTick: (e) => e.n ||= pn.bind(e.proxy),
	$watch: (e) => Nn.bind(e)
}), pr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), mr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (pr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else gr && (s[t] = 0);
		}
		let u = fr[t], d, p;
		if (u) return t === "$attrs" && N(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return pr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || pr(t, c) || f(o, c) || f(i, c) || f(fr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function hr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var gr = !0;
function _r(e) {
	let t = xr(e), n = e.proxy, r = e.ctx;
	gr = !1, t.beforeCreate && yr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: D, directives: ae, filters: oe } = t;
	if (u && vr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Ft(t));
	}
	if (gr = !0, o) for (let e in o) {
		let t = o[e], i = la({
			get: _(t) ? t.bind(n, n) : _(t.get) ? t.get.bind(n, n) : a,
			set: !_(t) && _(t.set) ? t.set.bind(n) : a
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) br(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Dn(t, e[t]);
		});
	}
	d && yr(d, e, "c");
	function O(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O($n, f), O(er, m), O(tr, h), O(nr, g), O(qn, v), O(Jn, y), O(cr, T), O(sr, te), O(or, ne), O(rr, S), O(ir, w), O(ar, re), p(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === a && (e.render = ee), ie != null && (e.inheritAttrs = ie), D && (e.components = D), ae && (e.directives = ae), re && Bn(e);
}
function vr(e, t, n = a) {
	p(e) && (e = Er(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? On(r.from || n, r.default, !0) : On(r.from || n) : On(r), /* @__PURE__ */ R(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function yr(e, t, n) {
	z(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function br(e, t, n, r) {
	let i = r.includes(".") ? Pn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && jn(i, n);
	} else if (_(e)) jn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => br(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && jn(i, r, e);
	}
}
function xr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Sr(c, e, o, !0)), Sr(c, t, o)), b(t) && a.set(t, c), c;
}
function Sr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Sr(e, a, n, !0), i && i.forEach((t) => Sr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Cr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Cr = {
	data: wr,
	props: Or,
	emits: Or,
	methods: Dr,
	computed: Dr,
	beforeCreate: U,
	created: U,
	beforeMount: U,
	mounted: U,
	beforeUpdate: U,
	updated: U,
	beforeDestroy: U,
	beforeUnmount: U,
	destroyed: U,
	unmounted: U,
	activated: U,
	deactivated: U,
	errorCaptured: U,
	serverPrefetch: U,
	components: Dr,
	directives: Dr,
	watch: kr,
	provide: wr,
	inject: Tr
};
function wr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Tr(e, t) {
	return Dr(Er(e), Er(t));
}
function Er(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function U(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Dr(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Or(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), hr(e), hr(t ?? {})) : t;
}
function kr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = U(e[r], t[r]);
	return n;
}
function Ar() {
	return {
		app: null,
		config: {
			isNativeTag: o,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var jr = 0;
function Mr(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = Ar(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: jr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ua,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && _(e.install) ? (a.add(e), e.install(c, ...t)) : _(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Fi(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, sa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (z(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Nr;
				Nr = c;
				try {
					return e();
				} finally {
					Nr = t;
				}
			}
		};
		return c;
	};
}
var Nr = null, Pr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function Fr(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && Pr(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(le)));
	let c, l = i[c = oe(t)] || i[c = oe(E(t))];
	!l && o && (l = i[c = oe(D(t))]), l && z(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, z(u, e, 6, a);
	}
}
var Ir = /* @__PURE__ */ new WeakMap();
function Lr(e, t, n = !1) {
	let r = n ? Ir : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = Lr(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function Rr(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, D(t)) || f(e, t));
}
function zr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Cn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = X(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = X(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : Br(s);
		}
	} catch (t) {
		Ti.length = 0, on(t, e, 1), v = Fi(Ci);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = Vr(y, a)), b = Ri(b, y, !1, !0));
	}
	return n.dirs && (b = Ri(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Rn(b, n.transition), v = b, Cn(_), v;
}
var Br = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Vr = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Hr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ur(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Wr(o, r, n) && !Rr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Ur(r, o, l) : !0 : !!o;
	return !1;
}
function Ur(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Wr(t, e, a) && !Rr(n, a)) return !0;
	}
	return !1;
}
function Wr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function Gr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Kr = {}, qr = () => Object.create(Kr), Jr = (e) => Object.getPrototypeOf(e) === Kr;
function Yr(e, t, n, r = !1) {
	let i = {}, a = qr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Zr(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ It(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Xr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ I(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Rr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = Qr(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Zr(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = D(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Qr(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && nt(e.attrs, "set", "");
}
function Zr(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ne(r)) continue;
		let l = t[r], u;
		a && f(a, u = E(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Rr(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ I(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Qr(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Qr(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Yi(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === D(n)) && (r = !0));
	}
	return r;
}
var $r = /* @__PURE__ */ new WeakMap();
function ei(e, t, n = !1) {
	let a = n ? $r : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = ei(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		ti(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (ti(t)) {
			let n = s[e], r = c[t] = p(n) || _(n) ? { type: n } : l({}, n), i = r.type, a = !1, o = !0;
			if (p(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = _(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = _(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || f(r, "default")) && u.push(t);
		}
	}
	let m = [c, u];
	return b(e) && a.set(e, m), m;
}
function ti(e) {
	return e[0] !== "$" && !ne(e);
}
var ni = (e) => e === "_" || e === "_ctx" || e === "$stable", ri = (e) => p(e) ? e.map(X) : [X(e)], ii = (e, t, n) => {
	if (t._n) return t;
	let r = wn((...e) => ri(t(...e)), n);
	return r._c = !1, r;
}, ai = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ni(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = ii(n, i, r);
		else if (i != null) {
			let e = ri(i);
			t[n] = () => e;
		}
	}
}, oi = (e, t) => {
	let n = ri(t);
	e.slots.default = () => n;
}, si = (e, t, n) => {
	for (let r in t) (n || !ni(r)) && (e[r] = t[r]);
}, ci = (e, t, n) => {
	let r = e.slots = qr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (si(r, t, n), n && ce(r, "_", e, !0)) : ai(t, r);
	} else t && oi(e, t);
}, li = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : si(a, t, n) : (o = !t.$stable, ai(t, a)), s = t;
	} else t && (oi(e, t), s = { default: 1 });
	if (o) for (let e in a) !ni(e) && s[e] == null && delete a[e];
}, W = xi;
function ui(e) {
	return di(e);
}
function di(e, t) {
	let n = de();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Mi(e, t) && (r = be(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Si:
				y(e, t, n, r);
				break;
			case Ci:
				b(e, t, n, r);
				break;
			case wi:
				e ?? x(t, n, r, o);
				break;
			case G:
				D(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ae(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
		}
		u != null && i ? Un(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Un(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, fi(e, a), s, u), _ && En(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Q(f, r, e);
		}
		_ && En(e, null, r, "beforeMount");
		let v = mi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && W(() => {
			try {
				f && Q(f, r, e), v && g.enter(d), _ && En(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || bi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Z(e[l]) : X(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && pi(n, !1), (g = h.onVnodeBeforeUpdate) && Q(g, n, t, e), f && En(t, e, n, "beforeUpdate"), n && pi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, n, i, fi(t, a), o) : s || ue(e, t, l, null, n, i, fi(t, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ie(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && W(() => {
			g && Q(g, n, t, e), f && En(t, e, n, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === G || !Mi(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ne(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ne(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, D = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && hi(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : O(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = Gi(e, r, i);
		if (Kn(e) && (s.ctx.renderer = Ce), $i(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = Fi(Ci);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (Hr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = _i(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							W(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				pi(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Q(d, s, t, c), pi(e, !0);
				let f = zr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && Gr(e, f.el), r && W(r, i), (d = t.props && t.props.onVnodeUpdated) && W(() => Q(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Gn(t);
				if (pi(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && Q(o, d, t), pi(e, !0), s && k) {
					let t = () => {
						e.subTree = zr(e), k(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = zr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && W(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					W(() => Q(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Gn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && W(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => hn(u), pi(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Xr(e, t.props, r, n), li(e, t.children, n), Ge(), vn(e), Ke();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, fe = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Z(t[p]) : X(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : T(t, n, r, a, o, s, c, l, f);
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Z(t[u]) : X(t[u]);
			if (Mi(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Z(t[p]) : X(t[p]);
			if (Mi(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Z(t[u]) : X(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Z(t[u]) : X(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					he(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Mi(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? gi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || yi(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(i, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Ce);
			return;
		}
		if (c === G) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === wi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Ln] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), W(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Ln];
				a._isLeaving && a[Ln](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ge(), Un(s, null, n, e, !0), Ke()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Gn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Q(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && En(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== G || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === G && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && W(() => {
			_ && Q(_, t, e), h && En(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === G) {
			_e(n, r);
			return;
		}
		if (t === wi) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		vi(c), vi(l), r && se(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && W(s, t), W(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Fn];
		return n ? h(n) : t;
	}, xe = !1, Se = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, vn(r), yn(), !1);
	}, Ce = {
		p: v,
		um: he,
		m: me,
		r: ge,
		mt: oe,
		mc: T,
		pc: ue,
		pbc: E,
		n: be,
		o: e
	}, we, k;
	return t && ([we, k] = t(Ce)), {
		render: Se,
		hydrate: we,
		createApp: Mr(Se, we)
	};
}
function fi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Z(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && hi(t, a)), a.type === Si && (a.patchFlag === -1 && (a = i[e] = Z(a)), a.el = t.el), a.type === Ci && !a.el && (a.el = t.el);
	}
}
function gi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function _i(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : _i(t);
}
function vi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function yi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? yi(t.subTree) : null;
}
var bi = (e) => e.__isSuspense;
function xi(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : _n(e);
}
var G = /* @__PURE__ */ Symbol.for("v-fgt"), Si = /* @__PURE__ */ Symbol.for("v-txt"), Ci = /* @__PURE__ */ Symbol.for("v-cmt"), wi = /* @__PURE__ */ Symbol.for("v-stc"), Ti = [], K = null;
function q(e = !1) {
	Ti.push(K = e ? null : []);
}
function Ei() {
	Ti.pop(), K = Ti[Ti.length - 1] || null;
}
var Di = 1;
function Oi(e, t = !1) {
	Di += e, e < 0 && K && t && (K.hasOnce = !0);
}
function ki(e) {
	return e.dynamicChildren = Di > 0 ? K || i : null, Ei(), Di > 0 && K && K.push(e), e;
}
function J(e, t, n, r, i, a) {
	return ki(Y(e, t, n, r, i, a, !0));
}
function Ai(e, t, n, r, i) {
	return ki(Fi(e, t, n, r, i, !0));
}
function ji(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Mi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ni = ({ key: e }) => e ?? null, Pi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ R(e) || _(e) ? {
	i: H,
	r: e,
	k: t,
	f: !!n
} : e);
function Y(e, t = null, n = null, r = 0, i = null, a = e === G ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ni(t),
		ref: t && Pi(t),
		scopeId: Sn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: H
	};
	return s ? (Vi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), Di > 0 && !o && K && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && K.push(c), c;
}
var Fi = Ii;
function Ii(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === lr) && (e = Ci), ji(e)) {
		let r = Ri(e, t, !0);
		return n && Vi(r, n), Di > 0 && !a && K && (r.shapeFlag & 6 ? K[K.indexOf(e)] = r : K.push(r)), r.patchFlag = -2, r;
	}
	if (ca(e) && (e = e.__vccOpts), t) {
		t = Li(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = _e(e)), b(n) && (/* @__PURE__ */ Vt(n) && !p(n) && (n = l({}, n)), t.style = fe(n));
	}
	let o = v(e) ? 1 : bi(e) ? 128 : In(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return Y(e, t, n, r, i, o, a, !0);
}
function Li(e) {
	return e ? /* @__PURE__ */ Vt(e) || Jr(e) ? l({}, e) : e : null;
}
function Ri(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Hi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ni(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(Pi(t)) : [a, Pi(t)] : Pi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== G ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ri(e.ssContent),
		ssFallback: e.ssFallback && Ri(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Rn(u, c.clone(u)), u;
}
function zi(e = " ", t = 0) {
	return Fi(Si, null, e, t);
}
function Bi(e = "", t = !1) {
	return t ? (q(), Ai(Ci, null, e)) : Fi(Ci, null, e);
}
function X(e) {
	return e == null || typeof e == "boolean" ? Fi(Ci) : p(e) ? Fi(G, null, e.slice()) : ji(e) ? Z(e) : Fi(Si, null, String(e));
}
function Z(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ri(e);
}
function Vi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Vi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Jr(t) ? t._ctx = H : r === 3 && H && (H.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: H
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [zi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Hi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = _e([t.class, r.class]));
		else if (e === "style") t.style = fe([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Q(e, t, n, r = null) {
	z(e, t, 7, [n, r]);
}
var Ui = Ar(), Wi = 0;
function Gi(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Ui, o = {
		uid: Wi++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new De(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: ei(i, a),
		emitsOptions: Lr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: r,
		inheritAttrs: i.inheritAttrs,
		ctx: r,
		data: r,
		props: r,
		attrs: r,
		slots: r,
		refs: r,
		setupState: r,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fr.bind(null, o), e.ce && e.ce(o), o;
}
var $ = null, Ki = () => $ || H, qi, Ji;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	qi = t("__VUE_INSTANCE_SETTERS__", (e) => $ = e), Ji = t("__VUE_SSR_SETTERS__", (e) => Qi = e);
}
var Yi = (e) => {
	let t = $;
	return qi(e), e.scope.on(), () => {
		e.scope.off(), qi(t);
	};
}, Xi = () => {
	$ && $.scope.off(), qi(null);
};
function Zi(e) {
	return e.vnode.shapeFlag & 4;
}
var Qi = !1;
function $i(e, t = !1, n = !1) {
	t && Ji(t);
	let { props: r, children: i } = e.vnode, a = Zi(e);
	Yr(e, r, a, t), ci(e, i, n || t);
	let o = a ? ea(e, t) : void 0;
	return t && Ji(!1), o;
}
function ea(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mr);
	let { setup: r } = n;
	if (r) {
		Ge();
		let n = e.setupContext = r.length > 1 ? oa(e) : null, i = Yi(e), a = an(r, e, 0, [e.props, n]), o = x(a);
		if (Ke(), i(), (o || e.sp) && !Gn(e) && Bn(e), o) {
			if (a.then(Xi, Xi), t) return a.then((n) => {
				ta(e, n, t);
			}).catch((t) => {
				on(t, e, 0);
			});
			e.asyncDep = a;
		} else ta(e, a, t);
	} else ia(e, t);
}
function ta(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = Yt(t)), ia(e, n);
}
var na, ra;
function ia(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && na && !r.render) {
			let t = r.template || xr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = na(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, ra && ra(e);
	}
	{
		let t = Yi(e);
		Ge();
		try {
			_r(e);
		} finally {
			Ke(), t();
		}
	}
}
var aa = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function oa(e) {
	return {
		attrs: new Proxy(e.attrs, aa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function sa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Yt(Ht(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in fr) return fr[n](e);
		},
		has(e, t) {
			return t in e || t in fr;
		}
	}) : e.proxy;
}
function ca(e) {
	return _(e) && "__vccOpts" in e;
}
var la = (e, t) => /* @__PURE__ */ Zt(e, t, Qi), ua = "3.5.38", da = void 0, fa = typeof window < "u" && window.trustedTypes;
if (fa) try {
	da = /* @__PURE__ */ fa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var pa = da ? (e) => da.createHTML(e) : (e) => e, ma = "http://www.w3.org/2000/svg", ha = "http://www.w3.org/1998/Math/MathML", ga = typeof document < "u" ? document : null, _a = ga && /* @__PURE__ */ ga.createElement("template"), va = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ga.createElementNS(ma, e) : t === "mathml" ? ga.createElementNS(ha, e) : n ? ga.createElement(e, { is: n }) : ga.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ga.createTextNode(e),
	createComment: (e) => ga.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ga.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			_a.innerHTML = pa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = _a.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ya = /* @__PURE__ */ Symbol("_vtc");
function ba(e, t, n) {
	let r = e[ya];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var xa = /* @__PURE__ */ Symbol("_vod"), Sa = /* @__PURE__ */ Symbol("_vsh"), Ca = /* @__PURE__ */ Symbol(""), wa = /(?:^|;)\s*display\s*:/;
function Ta(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Da(r, t, "");
		}
		else for (let e in t) n[e] ?? Da(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Da(r, i, "") : ja(e, i, !v(t) && t ? t[i] : void 0, o) || Da(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ca];
			e && (n += ";" + e), r.cssText = n, a = wa.test(n);
		}
	} else t && e.removeAttribute("style");
	xa in e && (e[xa] = a ? r.display : "", e[Sa] && (r.display = "none"));
}
var Ea = /\s*!important$/;
function Da(e, t, n) {
	if (p(n)) n.forEach((n) => Da(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Aa(e, t);
		Ea.test(n) ? e.setProperty(D(r), n.replace(Ea, ""), "important") : e[r] = n;
	}
}
var Oa = [
	"Webkit",
	"Moz",
	"ms"
], ka = {};
function Aa(e, t) {
	let n = ka[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return ka[t] = r;
	r = ae(r);
	for (let n = 0; n < Oa.length; n++) {
		let i = Oa[n] + r;
		if (i in e) return ka[t] = i;
	}
	return t;
}
function ja(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Ma = "http://www.w3.org/1999/xlink";
function Na(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ma, t.slice(6, t.length)) : e.setAttributeNS(Ma, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Pa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? pa(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = be(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Fa(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ia(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var La = /* @__PURE__ */ Symbol("_vei");
function Ra(e, t, n, r, i = null) {
	let a = e[La] || (e[La] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ba(t);
		r ? Fa(e, n, a[t] = Wa(r, i), s) : o && (Ia(e, n, o, s), a[t] = void 0);
	}
}
var za = /(?:Once|Passive|Capture)$/;
function Ba(e) {
	let t;
	if (za.test(e)) {
		t = {};
		let n;
		for (; n = e.match(za);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : D(e.slice(2)), t];
}
var Va = 0, Ha = /* @__PURE__ */ Promise.resolve(), Ua = () => Va ||= (Ha.then(() => Va = 0), Date.now());
function Wa(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (p(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && z(e, t, 5, a);
			}
		} else z(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ua(), n;
}
var Ga = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ka = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? ba(e, r, o) : t === "style" ? Ta(e, n, r) : s(t) ? c(t) || Ra(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qa(e, t, r, o)) ? (Pa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Na(e, t, r, o, a, t !== "value")) : e._isVueCE && (Ja(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Pa(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Na(e, t, r, o));
};
function qa(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ga(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ga(t) && v(n) ? !1 : t in e;
}
function Ja(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Ya = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => se(t, e) : t;
};
function Xa(e) {
	e.target.composing = !0;
}
function Za(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Qa = /* @__PURE__ */ Symbol("_assign");
function $a(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var eo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Qa] = Ya(i);
		let a = r || i.props && i.props.type === "number";
		Fa(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Qa]($a(e.value, n, a));
		}), (n || a) && Fa(e, "change", () => {
			e.value = $a(e.value, n, a);
		}), t || (Fa(e, "compositionstart", Xa), Fa(e, "compositionend", Za), Fa(e, "change", Za));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Qa] = Ya(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, to = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Fa(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(ro(e)) : ro(e));
			e[Qa](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, pn(() => {
				e._assigning = !1;
			});
		}), e[Qa] = Ya(r);
	},
	mounted(e, { value: t }) {
		no(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Qa] = Ya(n);
	},
	updated(e, { value: t }) {
		e._assigning || no(e, t);
	}
};
function no(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = ro(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(ro(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function ro(e) {
	return "_value" in e ? e._value : e.value;
}
var io = /* @__PURE__ */ l({ patchProp: Ka }, va), ao;
function oo() {
	return ao ||= ui(io);
}
var so = ((...e) => {
	let t = oo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = lo(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, co(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function co(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function lo(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/functions/music/create-music-browser-catalog.ts
var uo = ["/modules/fvtt-nin-ghosts-annotated/catalog/nin-ghosts-track-manifest.json", "/catalog/nin-ghosts-track-manifest.json"];
async function fo(e = fetch) {
	return po(await mo(e));
}
function po(e) {
	return e.tracks.map((e) => ({
		...e,
		title: e.officialTitle.startsWith(e.trackNumber) ? e.officialTitle : `${e.trackNumber} ${e.officialTitle}`
	}));
}
async function mo(e) {
	let t;
	for (let n of uo) try {
		let r = await e(n);
		if (r.ok) return await r.json();
		t = /* @__PURE__ */ Error(`Track manifest request failed with ${r.status} for ${n}.`);
	} catch (e) {
		t = e;
	}
	throw t instanceof Error ? t : /* @__PURE__ */ Error("Music browser track manifest could not be loaded.");
}
//#endregion
//#region src/view/apps/music-browser/MusicBrowserApp.vue?vue&type=script&setup=true&lang.ts
var ho = { class: "music-browser tw-grid tw-gap-3 tw-p-3" }, go = { class: "tw-grid tw-gap-3" }, _o = { class: "tw-flex tw-flex-col tw-gap-2 md:tw-flex-row md:tw-items-end" }, vo = { class: "tw-grid tw-flex-1 tw-gap-1" }, yo = { class: "tw-grid tw-gap-1 md:tw-w-52" }, bo = ["value"], xo = { class: "tw-grid tw-gap-1 md:tw-w-52" }, So = {
	key: 0,
	disabled: "",
	value: ""
}, Co = ["value"], wo = { class: "tw-flex tw-flex-col tw-gap-2 md:tw-flex-row md:tw-items-center md:tw-justify-between" }, To = { class: "tw-m-0 tw-text-sm" }, Eo = {
	key: 0,
	class: "tw-m-0 tw-text-sm tw-text-secondary"
}, Do = {
	key: 0,
	class: "dui-alert"
}, Oo = {
	key: 1,
	class: "tw-overflow-x-auto"
}, ko = { class: "dui-table dui-table-sm" }, Ao = { class: "tw-grid tw-gap-1" }, jo = { class: "tw-font-semibold" }, Mo = { class: "tw-flex tw-flex-wrap tw-gap-1" }, No = { class: "dui-badge dui-badge-sm dui-badge-outline" }, Po = { class: "dui-badge dui-badge-sm dui-badge-outline" }, Fo = { class: "tw-text-sm" }, Io = { class: "tw-flex tw-flex-wrap tw-gap-1" }, Lo = {
	key: 0,
	class: "dui-badge dui-badge-sm dui-badge-ghost"
}, Ro = ["onClick"], zo = { class: "rating-grid" }, Bo = { class: "tw-grid tw-gap-1" }, Vo = { class: "tw-font-semibold" }, Ho = { class: "tw-text-xs tw-text-base-content/70" }, Uo = { class: "tw-font-semibold" }, Wo = ["onClick"], Go = /* @__PURE__ */ zn({
	__name: "MusicBrowserApp",
	props: { onPlayTrack: { type: Function } },
	setup(e) {
		let t = e, n = /* @__PURE__ */ Wt(""), r = /* @__PURE__ */ Wt("Loading catalog."), i = /* @__PURE__ */ Wt(""), a = /* @__PURE__ */ Wt(""), o = /* @__PURE__ */ Wt(""), s = /* @__PURE__ */ Wt([]), c = la(() => Array.from(new Set(s.value.map((e) => e.album))).sort((e, t) => e.localeCompare(t))), l = la(() => {
			let e = a.value.trim().toLowerCase();
			return s.value.filter((t) => n.value && t.album !== n.value || o.value && !t.tags.includes(o.value) ? !1 : e ? [
				t.album,
				t.annotationStatus,
				t.confidence,
				t.gmCue,
				t.notes,
				t.officialTitle,
				t.rpgTitle,
				t.tags.join(" "),
				t.trackNumber
			].join(" ").toLowerCase().includes(e) : !0);
		}), u = la(() => Array.from(new Set(s.value.flatMap((e) => e.tags))).sort((e, t) => e.localeCompare(t)));
		er(async () => {
			try {
				s.value = await fo(), r.value = "";
			} catch (e) {
				r.value = e instanceof Error ? e.message : "The music browser catalog could not be loaded.";
			}
		});
		function d() {
			n.value = "", i.value = "", a.value = "", o.value = "";
		}
		async function f(e) {
			if (!t.onPlayTrack) {
				i.value = `Preview selected ${e.title}.`;
				return;
			}
			i.value = (await t.onPlayTrack({
				id: e.id,
				path: e.path,
				title: e.title
			})).message;
		}
		function p(e) {
			return e === null ? "-" : String(e);
		}
		return (e, t) => (q(), J("main", ho, [Y("header", go, [Y("div", _o, [
			Y("label", vo, [t[3] ||= Y("span", { class: "tw-text-xs tw-font-semibold tw-uppercase tw-tracking-normal" }, "Search", -1), Tn(Y("input", {
				"onUpdate:modelValue": t[0] ||= (e) => a.value = e,
				class: "dui-input dui-input-sm tw-w-full",
				placeholder: "RPG title, scene tag, cue, official title...",
				type: "search"
			}, null, 512), [[eo, a.value]])]),
			Y("label", yo, [t[5] ||= Y("span", { class: "tw-text-xs tw-font-semibold tw-uppercase tw-tracking-normal" }, "Album", -1), Tn(Y("select", {
				"onUpdate:modelValue": t[1] ||= (e) => n.value = e,
				class: "dui-select dui-select-sm tw-w-full"
			}, [t[4] ||= Y("option", { value: "" }, "All albums", -1), (q(!0), J(G, null, ur(c.value, (e) => (q(), J("option", {
				key: e,
				value: e
			}, k(e), 9, bo))), 128))], 512), [[to, n.value]])]),
			Y("label", xo, [t[7] ||= Y("span", { class: "tw-text-xs tw-font-semibold tw-uppercase tw-tracking-normal" }, "Tag", -1), Tn(Y("select", {
				"onUpdate:modelValue": t[2] ||= (e) => o.value = e,
				class: "dui-select dui-select-sm tw-w-full"
			}, [
				t[6] ||= Y("option", { value: "" }, "All tags", -1),
				u.value.length === 0 ? (q(), J("option", So, "No researched tags yet")) : Bi("", !0),
				(q(!0), J(G, null, ur(u.value, (e) => (q(), J("option", {
					key: e,
					value: e
				}, k(e), 9, Co))), 128))
			], 512), [[to, o.value]])]),
			Y("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: d
			}, "Clear")
		]), Y("div", wo, [Y("p", To, k(l.value.length) + " of " + k(s.value.length) + " verified playable tracks ", 1), i.value ? (q(), J("p", Eo, k(i.value), 1)) : Bi("", !0)])]), r.value ? (q(), J("div", Do, [Y("span", null, k(r.value), 1)])) : (q(), J("div", Oo, [Y("table", ko, [t[8] ||= Y("thead", null, [Y("tr", null, [
			Y("th", { class: "tw-w-44" }, "RPG Title"),
			Y("th", null, "Suggested Use"),
			Y("th", null, "Tags"),
			Y("th", { class: "tw-w-36" }, "Ratings"),
			Y("th", { class: "tw-w-20" }, "Track"),
			Y("th", null, "Official Title"),
			Y("th", { class: "tw-w-24" }, "Play")
		])], -1), Y("tbody", null, [(q(!0), J(G, null, ur(l.value, (e) => (q(), J("tr", { key: e.id }, [
			Y("td", null, [Y("div", Ao, [Y("span", jo, k(e.rpgTitle || "Unreviewed"), 1), Y("div", Mo, [Y("span", No, k(e.annotationStatus), 1), Y("span", Po, k(e.confidence), 1)])])]),
			Y("td", null, [Y("span", Fo, k(e.gmCue || "No RPG cue yet. Research required before annotation."), 1)]),
			Y("td", null, [Y("div", Io, [e.tags.length === 0 ? (q(), J("span", Lo, " no tags yet ")) : Bi("", !0), (q(!0), J(G, null, ur(e.tags, (t) => (q(), J("button", {
				key: `${e.id}-${t}`,
				class: "dui-badge dui-badge-sm",
				type: "button",
				onClick: (e) => o.value = t
			}, k(t), 9, Ro))), 128))])]),
			Y("td", null, [Y("div", zo, [
				Y("span", null, "I " + k(p(e.ratings.intensity)), 1),
				Y("span", null, "D " + k(p(e.ratings.darkness)), 1),
				Y("span", null, "T " + k(p(e.ratings.tension)), 1),
				Y("span", null, "W " + k(p(e.ratings.weirdness)), 1)
			])]),
			Y("td", null, [Y("div", Bo, [Y("span", Vo, k(e.trackNumber), 1), Y("span", Ho, k(e.album), 1)])]),
			Y("td", null, [Y("span", Uo, k(e.officialTitle), 1)]),
			Y("td", null, [Y("button", {
				class: "dui-btn dui-btn-sm dui-btn-primary",
				type: "button",
				onClick: (t) => f(e)
			}, " Play ", 8, Wo)])
		]))), 128))])])]))]));
	}
}), Ko = "NIN Ghosts RPG Browser";
async function qo(e) {
	let t = await Jo(), n = await Yo(t, e);
	return t.playSound ? (await t.playSound(n), {
		ok: !0,
		message: `Playing ${e.title}.`
	}) : n.play ? (await n.play(), {
		ok: !0,
		message: `Playing ${e.title}.`
	}) : {
		ok: !1,
		message: "Foundry did not expose a playlist playback method for this track."
	};
}
async function Jo() {
	let e = Xo(Ko);
	if (e) return e;
	if (typeof Playlist > "u") throw Error("Foundry Playlist document constructor is unavailable.");
	return Playlist.create({
		channel: "music",
		description: "Tracks launched from the NIN Ghosts RPG music browser.",
		flags: { [t]: { browserPlaylist: !0 } },
		mode: 0,
		name: Ko,
		playing: !1,
		sounds: []
	});
}
async function Yo(e, n) {
	let r = Qo(e).find((e) => e.flags?.["fvtt-nin-ghosts-annotated"]?.trackId === n.id || e.path === n.path);
	if (r) return r;
	if (!e.createEmbeddedDocuments) throw Error("Foundry did not expose playlist sound creation for the browser playlist.");
	let [i] = await e.createEmbeddedDocuments("PlaylistSound", [{
		channel: "music",
		description: "Created by the NIN Ghosts RPG music browser.",
		fade: null,
		flags: { [t]: { trackId: n.id } },
		name: n.title,
		path: n.path,
		pausedTime: null,
		playing: !1,
		repeat: !1,
		volume: .5
	}]);
	if (!i) throw Error("Foundry did not return the created playlist sound.");
	return i;
}
function Xo(e) {
	let t = game?.playlists;
	if (t) return t.getName?.(e) ?? Zo().find((t) => t.name === e);
}
function Zo() {
	let e = game?.playlists;
	return e ? e.contents ? e.contents : e.values ? Array.from(e.values()) : [] : [];
}
function Qo(e) {
	let t = e.sounds;
	return t ? Array.isArray(t) ? t : t.contents ? t.contents : t.values ? Array.from(t.values()) : [] : [];
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var $o = typeof window < "u", es = Symbol(), ts;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ts ||= {});
var ns = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function rs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function is(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		ls(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function as(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function os(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var ss = typeof navigator == "object" ? navigator : { userAgent: "" }, cs = /Macintosh/.test(ss.userAgent) && /AppleWebKit/.test(ss.userAgent) && !/Safari/.test(ss.userAgent), ls = $o ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !cs ? us : "msSaveOrOpenBlob" in ss ? ds : fs : () => {};
function us(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? os(r) : as(r.href) ? is(e, t, n) : (r.target = "_blank", os(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		os(r);
	}, 0));
}
function ds(e, t = "download", n) {
	if (typeof e == "string") if (as(e)) is(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			os(t);
		});
	}
	else navigator.msSaveOrOpenBlob(rs(e, n), t);
}
function fs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return is(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(ns.HTMLElement)) || "safari" in ns, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || cs) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: ps } = Object;
function ms() {
	let e = Oe(!0), t = e.run(() => /* @__PURE__ */ Wt({})), n = [], r = [], i = Ht({
		install(e) {
			i._a = e, e.provide(es, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var { assign: hs } = Object, gs = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("fvtt-nin-ghosts-annotated-root"), n.dataset.theme = "fvtt-nin-ghosts-annotated", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("fvtt-nin-ghosts-annotated-app"), t.replaceChildren(e), this.#e = so(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(ms()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, _s = class extends gs {
	static DEFAULT_OPTIONS = {
		id: `${t}-music-browser`,
		tag: "section",
		window: {
			icon: "fa-solid fa-music",
			resizable: !0,
			title: e
		},
		position: {
			height: 720,
			width: 980
		}
	};
	getVueComponent() {
		return Go;
	}
	getVueProps() {
		return { onPlayTrack: async (e) => qo(e) };
	}
};
//#endregion
export { _s as MusicBrowserApplication };

//# sourceMappingURL=MusicBrowserApplication-sWGW97ep.js.map