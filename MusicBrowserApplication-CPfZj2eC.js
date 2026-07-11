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
	let t = /* @__PURE__ */ L(e);
	return t === e ? t : (N(t, "iterate", tt), /* @__PURE__ */ I(e) ? t : t.map(R));
}
function it(e) {
	return N(e = /* @__PURE__ */ L(e), "iterate", tt), e;
}
function P(e, t) {
	return /* @__PURE__ */ zt(e) ? Ht(/* @__PURE__ */ Rt(e) ? R(t) : t) : R(t);
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
		return F(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return F(this, "filter", e, t, (e) => e.map((e) => P(this, e)), arguments);
	},
	find(e, t) {
		return F(this, "find", e, t, (e) => P(this, e), arguments);
	},
	findIndex(e, t) {
		return F(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return F(this, "findLast", e, t, (e) => P(this, e), arguments);
	},
	findLastIndex(e, t) {
		return F(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return F(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return lt(this, "includes", e);
	},
	indexOf(...e) {
		return lt(this, "indexOf", e);
	},
	join(e) {
		return rt(this).join(e);
	},
	lastIndexOf(...e) {
		return lt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return F(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ut(this, "pop");
	},
	push(...e) {
		return ut(this, "push", e);
	},
	reduce(e, ...t) {
		return ct(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ct(this, "reduceRight", e, t);
	},
	shift() {
		return ut(this, "shift");
	},
	some(e, t) {
		return F(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ut(this, "splice", e);
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
		return ut(this, "unshift", e);
	},
	values() {
		return ot(this, "values", (e) => P(this, e));
	}
};
function ot(e, t, n) {
	let r = it(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ I(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var st = Array.prototype;
function F(e, t, n, r, i, a) {
	let o = it(e), s = o !== e && !/* @__PURE__ */ I(e), c = o[t];
	if (c !== st[t]) {
		let t = c.apply(e, a);
		return s ? R(t) : t;
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
function ct(e, t, n, r) {
	let i = it(e), a = i !== e && !/* @__PURE__ */ I(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = P(e, t)), n.call(this, t, P(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? P(e, c) : c;
}
function lt(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	N(r, "iterate", tt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Bt(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function ut(e, t, n = []) {
	Ge(), Ie();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return Le(), Ke(), r;
}
var dt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), ft = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function pt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var mt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Mt : jt : i ? At : kt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = at[t])) return e;
			if (t === "hasOwnProperty") return pt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ z(e) ? e : n);
		if ((y(t) ? ft.has(t) : dt(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ z(o)) {
			let e = a && te(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ It(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ It(o) : /* @__PURE__ */ Pt(o) : o;
	}
}, ht = class extends mt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ zt(i);
			if (!/* @__PURE__ */ I(n) && !/* @__PURE__ */ zt(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ z(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && (o ? O(n, i) && nt(e, "set", t, n, i) : nt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && nt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !ft.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", p(e) ? "length" : $e), Reflect.ownKeys(e);
	}
}, gt = class extends mt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, _t = /* @__PURE__ */ new ht(), vt = /* @__PURE__ */ new gt(), yt = /* @__PURE__ */ new ht(!0), bt = (e) => e, xt = (e) => Reflect.getPrototypeOf(e);
function St(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? bt : t ? Ht : R;
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
function Ct(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function wt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (O(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = xt(i), s = t ? bt : e ? Ht : R;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ L(t), "iterate", $e), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (O(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? bt : e ? Ht : R;
			return !e && N(o, "iterate", $e), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Ct("add"),
		set: Ct("set"),
		delete: Ct("delete"),
		clear: Ct("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = xt(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ I(e) && !/* @__PURE__ */ zt(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), nt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ I(n) && !/* @__PURE__ */ zt(n) && (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = xt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ L(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && nt(r, "set", e, n, s) : nt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = xt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ L(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && nt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = e.clear();
			return t && nt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = St(r, e, t);
	}), n;
}
function Tt(e, t) {
	let n = wt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Et = { get: /* @__PURE__ */ Tt(!1, !1) }, Dt = { get: /* @__PURE__ */ Tt(!1, !0) }, Ot = { get: /* @__PURE__ */ Tt(!0, !1) }, kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap();
function Nt(e) {
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
function Pt(e) {
	return /* @__PURE__ */ zt(e) ? e : Lt(e, !1, _t, Et, kt);
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
	return Lt(e, !1, yt, Dt, At);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return Lt(e, !0, vt, Ot, jt);
}
function Lt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Nt(w(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return /* @__PURE__ */ zt(e) ? /* @__PURE__ */ Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function Vt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var R = (e) => b(e) ? /* @__PURE__ */ Pt(e) : e, Ht = (e) => b(e) ? /* @__PURE__ */ It(e) : e;
// @__NO_SIDE_EFFECTS__
function z(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Wt(e, !1);
}
function Wt(e, t) {
	return /* @__PURE__ */ z(e) ? e : new Gt(e, t);
}
var Gt = class {
	constructor(e, t) {
		this.dep = new Xe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : R(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ I(e) || /* @__PURE__ */ zt(e);
		e = n ? e : /* @__PURE__ */ L(e), O(e, t) && (this._rawValue = e, this._value = n ? e : R(e), this.dep.trigger());
	}
};
function Kt(e) {
	return /* @__PURE__ */ z(e) ? e.value : e;
}
var qt = {
	get: (e, t, n) => t === "__v_raw" ? e : Kt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Jt(e) {
	return /* @__PURE__ */ Rt(e) ? e : new Proxy(e, qt);
}
var Yt = class {
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
function Xt(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new Yt(r, i, n);
}
var Zt = {}, Qt = /* @__PURE__ */ new WeakMap(), $t = void 0;
function en(e, t = !1, n = $t) {
	if (n) {
		let t = Qt.get(n);
		t || Qt.set(n, t = []), t.push(e);
	}
}
function tn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ I(e) || o === !1 || o === 0 ? nn(e, 1) : nn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ z(e) ? (h = () => e.value, y = /* @__PURE__ */ I(e)) : /* @__PURE__ */ Rt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Rt(e) || /* @__PURE__ */ I(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ z(e)) return e.value;
		if (/* @__PURE__ */ Rt(e)) return f(e);
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
		let t = $t;
		$t = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			$t = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => nn(e(), t);
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
	let C = b ? Array(e.length).fill(Zt) : Zt, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let n = m.run();
			if (e || o || y || (b ? n.some((e, t) => O(e, C[t])) : O(n, C))) {
				g && g();
				let e = $t;
				$t = m;
				try {
					let e = [
						n,
						C === Zt ? void 0 : b && C[0] === Zt ? [] : C,
						v
					];
					C = n, d ? d(t, 3, e) : t(...e);
				} finally {
					$t = e;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new je(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => en(e, !1, m), g = m.onStop = () => {
		let e = Qt.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			Qt.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function nn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ z(e)) nn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) nn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		nn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) nn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && nn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function rn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		an(e, t, n);
	}
}
function B(e, t, n, r) {
	if (_(e)) {
		let i = rn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			an(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(B(e[a], t, n, r));
		return i;
	}
}
function an(e, t, n, i = !0) {
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
			Ge(), rn(o, null, 10, [
				e,
				i,
				a
			]), Ke();
			return;
		}
	}
	on(e, n, a, i, s);
}
function on(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var V = [], H = -1, sn = [], cn = null, ln = 0, un = /* @__PURE__ */ Promise.resolve(), dn = null;
function fn(e) {
	let t = dn || un;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function pn(e) {
	let t = H + 1, n = V.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = V[r], a = yn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function mn(e) {
	if (!(e.flags & 1)) {
		let t = yn(e), n = V[V.length - 1];
		!n || !(e.flags & 2) && t >= yn(n) ? V.push(e) : V.splice(pn(t), 0, e), e.flags |= 1, hn();
	}
}
function hn() {
	dn ||= un.then(bn);
}
function gn(e) {
	p(e) ? sn.push(...e) : cn && e.id === -1 ? cn.splice(ln + 1, 0, e) : e.flags & 1 || (sn.push(e), e.flags |= 1), hn();
}
function _n(e, t, n = H + 1) {
	for (; n < V.length; n++) {
		let t = V[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			V.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function vn(e) {
	if (sn.length) {
		let e = [...new Set(sn)].sort((e, t) => yn(e) - yn(t));
		if (sn.length = 0, cn) {
			cn.push(...e);
			return;
		}
		for (cn = e, ln = 0; ln < cn.length; ln++) {
			let e = cn[ln];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		cn = null, ln = 0;
	}
}
var yn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function bn(e) {
	try {
		for (H = 0; H < V.length; H++) {
			let e = V[H];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), rn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; H < V.length; H++) {
			let e = V[H];
			e && (e.flags &= -2);
		}
		H = -1, V.length = 0, vn(e), dn = null, (V.length || sn.length) && bn(e);
	}
}
var U = null, xn = null;
function Sn(e) {
	let t = U;
	return U = e, xn = e && e.type.__scopeId || null, t;
}
function Cn(e, t = U, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Di(-1);
		let i = Sn(t), a;
		try {
			a = e(...n);
		} finally {
			Sn(i), r._d && Di(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function wn(e, t) {
	if (U === null) return e;
	let n = sa(U), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && nn(o), i.push({
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
function Tn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ge(), B(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ke());
	}
}
function En(e, t) {
	if ($) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function Dn(e, t, n = !1) {
	let r = Ki();
	if (r || Mr) {
		let i = Mr ? Mr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
var On = /* @__PURE__ */ Symbol.for("v-scx"), kn = () => Dn(On);
function An(e, t, n) {
	return jn(e, t, n);
}
function jn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Qi) {
		if (s === "sync") {
			let e = kn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = $;
	u.call = (e, t, n) => B(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		G(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : mn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = tn(e, t, u);
	return Qi && (f ? f.push(h) : d && h()), h;
}
function Mn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Nn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Yi(this), s = jn(i, a.bind(r), n);
	return o(), s;
}
function Nn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Pn = /* @__PURE__ */ Symbol("_vte"), Fn = (e) => e.__isTeleport, In = /* @__PURE__ */ Symbol("_leaveCb");
function Ln(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Ln(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Rn(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function zn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Bn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Vn = /* @__PURE__ */ new WeakMap();
function Hn(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => Hn(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (Wn(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Hn(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? sa(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ L(g), b = g === r ? o : (e) => Bn(h, e) ? !1 : f(y, e), x = (e, t) => !(t && Bn(h, t));
	if (m != null && m !== d) {
		if (Un(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ z(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) rn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ z(d);
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
					i(), Vn.delete(e);
				};
				t.id = -1, Vn.set(e, t), G(t, n);
			} else Un(e), i();
		}
	}
}
function Un(e) {
	let t = Vn.get(e);
	t && (t.flags |= 8, Vn.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var Wn = (e) => !!e.type.__asyncLoader, Gn = (e) => e.type.__isKeepAlive;
function Kn(e, t) {
	Jn(e, "a", t);
}
function qn(e, t) {
	Jn(e, "da", t);
}
function Jn(e, t, n = $) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Xn(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Gn(e.parent.vnode) && Yn(r, t, n, e), e = e.parent;
	}
}
function Yn(e, t, n, r) {
	let i = Xn(t, e, r, !0);
	rr(() => {
		u(r[t], i);
	}, n);
}
function Xn(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ge();
			let i = Yi(n), a = B(t, n, e, r);
			return i(), Ke(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Zn = (e) => (t, n = $) => {
	(!Qi || e === "sp") && Xn(e, (...e) => t(...e), n);
}, Qn = Zn("bm"), $n = Zn("m"), er = Zn("bu"), tr = Zn("u"), nr = Zn("bum"), rr = Zn("um"), ir = Zn("sp"), ar = Zn("rtg"), or = Zn("rtc");
function sr(e, t = $) {
	Xn("ec", e, t);
}
var cr = /* @__PURE__ */ Symbol.for("v-ndc");
function lr(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Rt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ I(e), s = /* @__PURE__ */ zt(e), e = it(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Ht(R(e[n])) : R(e[n]) : e[n], n, void 0, a && a[n]);
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
var ur = (e) => e ? Zi(e) ? sa(e) : ur(e.parent) : null, dr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => ur(e.parent),
	$root: (e) => ur(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => br(e),
	$forceUpdate: (e) => e.f ||= () => {
		mn(e.update);
	},
	$nextTick: (e) => e.n ||= fn.bind(e.proxy),
	$watch: (e) => Mn.bind(e)
}), fr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), pr = {
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
			else if (fr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else hr && (s[t] = 0);
		}
		let u = dr[t], d, p;
		if (u) return t === "$attrs" && N(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return fr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || fr(t, c) || f(o, c) || f(i, c) || f(dr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function mr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var hr = !0;
function gr(e) {
	let t = br(e), n = e.proxy, r = e.ctx;
	hr = !1, t.beforeCreate && vr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: D, directives: ae, filters: oe } = t;
	if (u && _r(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Pt(t));
	}
	if (hr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) yr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			En(t, e[t]);
		});
	}
	d && vr(d, e, "c");
	function O(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(Qn, f), O($n, m), O(er, h), O(tr, g), O(Kn, v), O(qn, y), O(sr, T), O(or, te), O(ar, ne), O(nr, S), O(rr, w), O(ir, re), p(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === a && (e.render = ee), ie != null && (e.inheritAttrs = ie), D && (e.components = D), ae && (e.directives = ae), re && zn(e);
}
function _r(e, t, n = a) {
	p(e) && (e = Tr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Dn(r.from || n, r.default, !0) : Dn(r.from || n) : Dn(r), /* @__PURE__ */ z(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function vr(e, t, n) {
	B(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function yr(e, t, n, r) {
	let i = r.includes(".") ? Nn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && An(i, n);
	} else if (_(e)) An(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => yr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && An(i, r, e);
	}
}
function br(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => xr(c, e, o, !0)), xr(c, t, o)), b(t) && a.set(t, c), c;
}
function xr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && xr(e, a, n, !0), i && i.forEach((t) => xr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Sr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Sr = {
	data: Cr,
	props: Dr,
	emits: Dr,
	methods: Er,
	computed: Er,
	beforeCreate: W,
	created: W,
	beforeMount: W,
	mounted: W,
	beforeUpdate: W,
	updated: W,
	beforeDestroy: W,
	beforeUnmount: W,
	destroyed: W,
	unmounted: W,
	activated: W,
	deactivated: W,
	errorCaptured: W,
	serverPrefetch: W,
	components: Er,
	directives: Er,
	watch: Or,
	provide: Cr,
	inject: wr
};
function Cr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function wr(e, t) {
	return Er(Tr(e), Tr(t));
}
function Tr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function W(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Er(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Dr(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), mr(e), mr(t ?? {})) : t;
}
function Or(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = W(e[r], t[r]);
	return n;
}
function kr() {
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
var Ar = 0;
function jr(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = kr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Ar++,
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
					let u = c._ceVNode || Pi(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, sa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (B(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Mr;
				Mr = c;
				try {
					return e();
				} finally {
					Mr = t;
				}
			}
		};
		return c;
	};
}
var Mr = null, Nr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function Pr(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && Nr(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(le)));
	let c, l = i[c = oe(t)] || i[c = oe(E(t))];
	!l && o && (l = i[c = oe(D(t))]), l && B(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, B(u, e, 6, a);
	}
}
var Fr = /* @__PURE__ */ new WeakMap();
function Ir(e, t, n = !1) {
	let r = n ? Fr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = Ir(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function Lr(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, D(t)) || f(e, t));
}
function Rr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Sn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Z(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Z(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : zr(s);
		}
	} catch (t) {
		wi.length = 0, an(t, e, 1), v = Pi(Si);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = Br(y, a)), b = Li(b, y, !1, !0));
	}
	return n.dirs && (b = Li(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Ln(b, n.transition), v = b, Sn(_), v;
}
var zr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Br = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Vr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Hr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Ur(o, r, n) && !Lr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Hr(r, o, l) : !0 : !!o;
	return !1;
}
function Hr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Ur(t, e, a) && !Lr(n, a)) return !0;
	}
	return !1;
}
function Ur(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function Wr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Gr = {}, Kr = () => Object.create(Gr), qr = (e) => Object.getPrototypeOf(e) === Gr;
function Jr(e, t, n, r = !1) {
	let i = {}, a = Kr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Xr(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ft(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Yr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Lr(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = Zr(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Xr(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = D(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Zr(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && nt(e.attrs, "set", "");
}
function Xr(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ne(r)) continue;
		let l = t[r], u;
		a && f(a, u = E(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Lr(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ L(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Zr(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Zr(e, t, n, r, i, a) {
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
var Qr = /* @__PURE__ */ new WeakMap();
function $r(e, t, n = !1) {
	let a = n ? Qr : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = $r(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		ei(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (ei(t)) {
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
function ei(e) {
	return e[0] !== "$" && !ne(e);
}
var ti = (e) => e === "_" || e === "_ctx" || e === "$stable", ni = (e) => p(e) ? e.map(Z) : [Z(e)], ri = (e, t, n) => {
	if (t._n) return t;
	let r = Cn((...e) => ni(t(...e)), n);
	return r._c = !1, r;
}, ii = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ti(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = ri(n, i, r);
		else if (i != null) {
			let e = ni(i);
			t[n] = () => e;
		}
	}
}, ai = (e, t) => {
	let n = ni(t);
	e.slots.default = () => n;
}, oi = (e, t, n) => {
	for (let r in t) (n || !ti(r)) && (e[r] = t[r]);
}, si = (e, t, n) => {
	let r = e.slots = Kr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (oi(r, t, n), n && ce(r, "_", e, !0)) : ii(t, r);
	} else t && ai(e, t);
}, ci = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : oi(a, t, n) : (o = !t.$stable, ii(t, a)), s = t;
	} else t && (ai(e, t), s = { default: 1 });
	if (o) for (let e in a) !ti(e) && s[e] == null && delete a[e];
}, G = bi;
function li(e) {
	return ui(e);
}
function ui(e, t) {
	let n = de();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ji(e, t) && (r = be(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case xi:
				y(e, t, n, r);
				break;
			case Si:
				b(e, t, n, r);
				break;
			case Ci:
				e ?? x(t, n, r, o);
				break;
			case K:
				D(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ae(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
		}
		u != null && i ? Hn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Hn(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, di(e, a), s, u), _ && Tn(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Q(f, r, e);
		}
		_ && Tn(e, null, r, "beforeMount");
		let v = pi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && G(() => {
			try {
				f && Q(f, r, e), v && g.enter(d), _ && Tn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || yi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Bi(e[l]) : Z(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && fi(n, !1), (g = h.onVnodeBeforeUpdate) && Q(g, n, t, e), f && Tn(t, e, n, "beforeUpdate"), n && fi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, n, i, di(t, a), o) : s || ue(e, t, l, null, n, i, di(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && G(() => {
			g && Q(g, n, t, e), f && Tn(t, e, n, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === K || !ji(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && mi(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : O(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = Gi(e, r, i);
		if (Gn(e) && (s.ctx.renderer = Ce), $i(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = Pi(Si);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (Vr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = gi(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							G(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				fi(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Q(d, s, t, c), fi(e, !0);
				let f = Rr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && Wr(e, f.el), r && G(r, i), (d = t.props && t.props.onVnodeUpdated) && G(() => Q(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Wn(t);
				if (fi(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && Q(o, d, t), fi(e, !0), s && k) {
					let t = () => {
						e.subTree = Rr(e), k(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Rr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && G(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					G(() => Q(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Wn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && G(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => mn(u), fi(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Yr(e, t.props, r, n), ci(e, t.children, n), Ge(), _n(e), Ke();
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
			let r = t[p] = l ? Bi(t[p]) : Z(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : T(t, n, r, a, o, s, c, l, f);
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Bi(t[u]) : Z(t[u]);
			if (ji(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Bi(t[p]) : Z(t[p]);
			if (ji(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Bi(t[u]) : Z(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Bi(t[u]) : Z(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ji(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? hi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || vi(f) : r;
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
		if (c === K) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Ci) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[In] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), G(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[In];
				a._isLeaving && a[In](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ge(), Hn(s, null, n, e, !0), Ke()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Wn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Q(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Tn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== K || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === K && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && G(() => {
			_ && Q(_, t, e), h && Tn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === K) {
			_e(n, r);
			return;
		}
		if (t === Ci) {
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
		_i(c), _i(l), r && se(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && G(s, t), G(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Pn];
		return n ? h(n) : t;
	}, xe = !1, Se = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, _n(r), vn(), !1);
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
		createApp: jr(Se, we)
	};
}
function di({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function pi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Bi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && mi(t, a)), a.type === xi && (a.patchFlag === -1 && (a = i[e] = Bi(a)), a.el = t.el), a.type === Si && !a.el && (a.el = t.el);
	}
}
function hi(e) {
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
function gi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : gi(t);
}
function _i(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function vi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? vi(t.subTree) : null;
}
var yi = (e) => e.__isSuspense;
function bi(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : gn(e);
}
var K = /* @__PURE__ */ Symbol.for("v-fgt"), xi = /* @__PURE__ */ Symbol.for("v-txt"), Si = /* @__PURE__ */ Symbol.for("v-cmt"), Ci = /* @__PURE__ */ Symbol.for("v-stc"), wi = [], q = null;
function J(e = !1) {
	wi.push(q = e ? null : []);
}
function Ti() {
	wi.pop(), q = wi[wi.length - 1] || null;
}
var Ei = 1;
function Di(e, t = !1) {
	Ei += e, e < 0 && q && t && (q.hasOnce = !0);
}
function Oi(e) {
	return e.dynamicChildren = Ei > 0 ? q || i : null, Ti(), Ei > 0 && q && q.push(e), e;
}
function Y(e, t, n, r, i, a) {
	return Oi(X(e, t, n, r, i, a, !0));
}
function ki(e, t, n, r, i) {
	return Oi(Pi(e, t, n, r, i, !0));
}
function Ai(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ji(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Mi = ({ key: e }) => e ?? null, Ni = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ z(e) || _(e) ? {
	i: U,
	r: e,
	k: t,
	f: !!n
} : e);
function X(e, t = null, n = null, r = 0, i = null, a = e === K ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Mi(t),
		ref: t && Ni(t),
		scopeId: xn,
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
		ctx: U
	};
	return s ? (Vi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), Ei > 0 && !o && q && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && q.push(c), c;
}
var Pi = Fi;
function Fi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === cr) && (e = Si), Ai(e)) {
		let r = Li(e, t, !0);
		return n && Vi(r, n), Ei > 0 && !a && q && (r.shapeFlag & 6 ? q[q.indexOf(e)] = r : q.push(r)), r.patchFlag = -2, r;
	}
	if (ca(e) && (e = e.__vccOpts), t) {
		t = Ii(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = _e(e)), b(n) && (/* @__PURE__ */ Bt(n) && !p(n) && (n = l({}, n)), t.style = fe(n));
	}
	let o = v(e) ? 1 : yi(e) ? 128 : Fn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return X(e, t, n, r, i, o, a, !0);
}
function Ii(e) {
	return e ? /* @__PURE__ */ Bt(e) || qr(e) ? l({}, e) : e : null;
}
function Li(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Hi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Mi(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(Ni(t)) : [a, Ni(t)] : Ni(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== K ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Li(e.ssContent),
		ssFallback: e.ssFallback && Li(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Ln(u, c.clone(u)), u;
}
function Ri(e = " ", t = 0) {
	return Pi(xi, null, e, t);
}
function zi(e = "", t = !1) {
	return t ? (J(), ki(Si, null, e)) : Pi(Si, null, e);
}
function Z(e) {
	return e == null || typeof e == "boolean" ? Pi(Si) : p(e) ? Pi(K, null, e.slice()) : Ai(e) ? Bi(e) : Pi(xi, null, String(e));
}
function Bi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Li(e);
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
		!r && !qr(t) ? t._ctx = U : r === 3 && U && (U.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: U
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ri(t)]) : n = 8);
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
	B(e, t, 7, [n, r]);
}
var Ui = kr(), Wi = 0;
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
		propsOptions: $r(i, a),
		emitsOptions: Ir(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Pr.bind(null, o), e.ce && e.ce(o), o;
}
var $ = null, Ki = () => $ || U, qi, Ji;
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
	Jr(e, r, a, t), si(e, i, n || t);
	let o = a ? ea(e, t) : void 0;
	return t && Ji(!1), o;
}
function ea(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pr);
	let { setup: r } = n;
	if (r) {
		Ge();
		let n = e.setupContext = r.length > 1 ? oa(e) : null, i = Yi(e), a = rn(r, e, 0, [e.props, n]), o = x(a);
		if (Ke(), i(), (o || e.sp) && !Wn(e) && zn(e), o) {
			if (a.then(Xi, Xi), t) return a.then((n) => {
				ta(e, n, t);
			}).catch((t) => {
				an(t, e, 0);
			});
			e.asyncDep = a;
		} else ta(e, a, t);
	} else ia(e, t);
}
function ta(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = Jt(t)), ia(e, n);
}
var na, ra;
function ia(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && na && !r.render) {
			let t = r.template || br(e).template;
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
			gr(e);
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
	return e.exposed ? e.exposeProxy ||= new Proxy(Jt(Vt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in dr) return dr[n](e);
		},
		has(e, t) {
			return t in e || t in dr;
		}
	}) : e.proxy;
}
function ca(e) {
	return _(e) && "__vccOpts" in e;
}
var la = (e, t) => /* @__PURE__ */ Xt(e, t, Qi), ua = "3.5.38", da = void 0, fa = typeof window < "u" && window.trustedTypes;
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
				e && B(e, t, 5, a);
			}
		} else B(r, t, 5, [e]);
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
			e[Qa](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, fn(() => {
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
	return ao ||= li(io);
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
//#region src/functions/music/filter-music-browser-tracks.ts
function uo(e, t) {
	let n = mo(t.query).split(" ").filter(Boolean);
	return e.filter((e) => fo(e, t)).map((e, t) => ({
		index: t,
		score: po(e, n),
		track: e
	})).filter(({ score: e }) => n.length === 0 || e > 0).sort((e, t) => t.score - e.score || e.index - t.index).map(({ track: e }) => e);
}
function fo(e, t) {
	if (t.album && e.album !== t.album || t.tag && !e.tags.includes(t.tag)) return !1;
	let n = e.ratings.intensity;
	return !t.energy || n === null ? !t.energy : t.energy === "low" ? n <= 2 : t.energy === "medium" ? n === 3 : n >= 4;
}
function po(e, t) {
	if (t.length === 0) return 0;
	let n = {
		album: mo(e.album),
		cue: mo(e.gmCue),
		notes: mo(e.notes),
		officialTitle: mo(e.officialTitle),
		rpgTitle: mo(e.rpgTitle),
		tags: e.tags.map(mo)
	}, r = Object.values(n).flat().join(" ");
	return t.every((e) => r.includes(e)) ? t.reduce((e, t) => (n.rpgTitle.includes(t) && (e += 8), n.tags.some((e) => e.includes(t)) && (e += 6), n.cue.includes(t) && (e += 4), n.officialTitle.includes(t) && (e += 2), n.album.includes(t) && (e += 1), n.notes.includes(t) && (e += 1), e), 0) : 0;
}
function mo(e) {
	return e.trim().toLowerCase().replaceAll("-", " ").replaceAll(/\s+/g, " ");
}
//#endregion
//#region src/functions/music/create-music-browser-catalog.ts
var ho = ["/modules/fvtt-nin-ghosts-annotated/catalog/nin-ghosts-track-manifest.json", "/catalog/nin-ghosts-track-manifest.json"];
async function go(e = fetch) {
	return _o(await vo(e));
}
function _o(e) {
	return e.tracks.map((e) => ({
		...e,
		title: e.officialTitle.startsWith(e.trackNumber) ? e.officialTitle : `${e.trackNumber} ${e.officialTitle}`
	}));
}
async function vo(e) {
	let t;
	for (let n of ho) try {
		let r = await e(n);
		if (r.ok) return await r.json();
		t = /* @__PURE__ */ Error(`Track manifest request failed with ${r.status} for ${n}.`);
	} catch (e) {
		t = e;
	}
	throw t instanceof Error ? t : /* @__PURE__ */ Error("Music browser track manifest could not be loaded.");
}
//#endregion
//#region src/view/apps/music-browser/MusicTrackCard.vue?vue&type=script&setup=true&lang.ts
var yo = { class: "tw:dui-card tw:dui-card-sm track-card" }, bo = { class: "tw:dui-card-body tw:gap-3" }, xo = { class: "tw:flex tw:items-start tw:justify-between tw:gap-3" }, So = { class: "tw:min-w-0" }, Co = { class: "track-catalog-line" }, wo = { class: "tw:dui-card-title tw:mt-1 tw:text-xl" }, To = ["aria-label", "disabled"], Eo = { "aria-hidden": "true" }, Do = { class: "track-cue" }, Oo = {
	class: "tw:flex tw:flex-wrap tw:gap-1.5",
	"aria-label": "Scene tags"
}, ko = ["aria-pressed", "onClick"], Ao = {
	class: "mood-grid",
	"aria-label": "Track mood ratings"
}, jo = ["aria-label"], Mo = {
	class: "mood-dots",
	"aria-hidden": "true"
}, No = { class: "track-details" }, Po = { class: "tw:grid tw:gap-2 tw:pt-3" }, Fo = { class: "track-official-title" }, Io = { class: "tw:flex tw:flex-wrap tw:gap-1.5" }, Lo = { class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm" }, Ro = { class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm" }, zo = /* @__PURE__ */ Rn({
	__name: "MusicTrackCard",
	props: {
		busy: { type: Boolean },
		selectedTag: {},
		track: {}
	},
	emits: ["play", "selectTag"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = la(() => [
			{
				label: "Energy",
				value: n.track.ratings.intensity
			},
			{
				label: "Dark",
				value: n.track.ratings.darkness
			},
			{
				label: "Tension",
				value: n.track.ratings.tension
			},
			{
				label: "Strange",
				value: n.track.ratings.weirdness
			}
		]);
		function a(e) {
			return e === "unreviewed" ? "Not reviewed" : `${e} confidence`;
		}
		return (t, n) => (J(), Y("article", yo, [X("div", bo, [
			X("div", xo, [X("div", So, [X("p", Co, [
				X("span", null, k(e.track.album), 1),
				n[1] ||= X("span", { "aria-hidden": "true" }, "·", -1),
				X("span", null, "Track " + k(e.track.trackNumber), 1)
			]), X("h2", wo, k(e.track.rpgTitle), 1)]), X("button", {
				"aria-label": `Play ${e.track.rpgTitle}`,
				class: "tw:dui-btn tw:dui-btn-sm tw:min-w-24 tw:shrink-0",
				disabled: e.busy,
				type: "button",
				onClick: n[0] ||= (t) => r("play", e.track)
			}, [X("span", Eo, k(e.busy ? "…" : "▶"), 1), Ri(" " + k(e.busy ? "Starting" : "Play"), 1)], 8, To)]),
			X("p", Do, k(e.track.gmCue), 1),
			X("div", Oo, [(J(!0), Y(K, null, lr(e.track.tags, (t) => (J(), Y("button", {
				key: `${e.track.id}-${t}`,
				"aria-pressed": e.selectedTag === t,
				class: _e(["tw:dui-badge tw:dui-badge-sm track-tag", { "tw:dui-badge-neutral": e.selectedTag === t }]),
				type: "button",
				onClick: (e) => r("selectTag", t)
			}, k(t.replaceAll("-", " ")), 11, ko))), 128))]),
			X("div", Ao, [(J(!0), Y(K, null, lr(i.value, (e) => (J(), Y("div", {
				key: e.label,
				class: "mood-meter",
				"aria-label": `${e.label}: ${e.value ?? "not rated"} out of 5`
			}, [X("span", null, k(e.label), 1), X("span", Mo, [(J(), Y(K, null, lr(5, (t) => X("i", {
				key: t,
				class: _e({ "is-filled": e.value !== null && t <= e.value })
			}, null, 2)), 64))])], 8, jo))), 128))]),
			X("details", No, [n[3] ||= X("summary", null, "Why it fits & track details", -1), X("div", Po, [
				X("p", null, k(e.track.notes), 1),
				X("p", Fo, [n[2] ||= X("span", null, "Official track", -1), X("strong", null, k(e.track.officialTitle), 1)]),
				X("div", Io, [X("span", Lo, k(a(e.track.confidence)), 1), X("span", Ro, k(e.track.researchSources.length) + " research sources ", 1)])
			])])
		])]));
	}
}), Bo = { class: "music-browser" }, Vo = { class: "browser-header" }, Ho = { class: "tw:dui-input tw:dui-input-lg browser-search" }, Uo = {
	class: "quick-filters",
	"aria-label": "Quick scene filters"
}, Wo = ["aria-pressed", "onClick"], Go = { class: "browser-filters" }, Ko = ["value"], qo = ["value"], Jo = ["disabled"], Yo = {
	class: "browser-results",
	"aria-labelledby": "results-heading"
}, Xo = { class: "results-heading-row" }, Zo = { "aria-live": "polite" }, Qo = { key: 0 }, $o = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-neutral tw:gap-1"
}, es = { "aria-hidden": "true" }, ts = {
	key: 1,
	class: "tw:dui-alert",
	role: "status"
}, ns = {
	key: 2,
	class: "track-grid"
}, rs = {
	key: 3,
	class: "empty-results"
}, is = /* @__PURE__ */ Rn({
	__name: "MusicBrowserApp",
	props: { onPlayTrack: { type: Function } },
	setup(e) {
		let t = e, n = [
			{
				label: "Explore",
				value: "exploration"
			},
			{
				label: "Investigate",
				value: "investigation"
			},
			{
				label: "Sneak",
				value: "stealth"
			},
			{
				label: "Fight",
				value: "combat"
			},
			{
				label: "Horror",
				value: "horror"
			},
			{
				label: "Recover",
				value: "recovery"
			},
			{
				label: "Travel",
				value: "travel"
			}
		], r = /* @__PURE__ */ Ut(""), i = /* @__PURE__ */ Ut(""), a = /* @__PURE__ */ Ut(""), o = /* @__PURE__ */ Ut("Loading the track catalog…"), s = /* @__PURE__ */ Ut(null), c = /* @__PURE__ */ Ut(""), l = /* @__PURE__ */ Ut(""), u = /* @__PURE__ */ Ut([]), d = la(() => Array.from(new Set(u.value.map((e) => e.album))).sort((e, t) => e.localeCompare(t))), f = la(() => uo(u.value, {
			album: r.value,
			energy: a.value,
			query: c.value,
			tag: l.value
		})), p = la(() => !!(r.value || a.value || c.value || l.value)), m = la(() => Array.from(new Set(u.value.flatMap((e) => e.tags))).sort((e, t) => e.localeCompare(t)));
		$n(async () => {
			try {
				u.value = await go(), o.value = "";
			} catch (e) {
				o.value = e instanceof Error ? e.message : "The track catalog could not be loaded.";
			}
		});
		function h() {
			r.value = "", a.value = "", c.value = "", l.value = "";
		}
		function g(e) {
			l.value = l.value === e ? "" : e;
		}
		async function _(e) {
			i.value = e.id;
			try {
				s.value = {
					...t.onPlayTrack ? await t.onPlayTrack({
						id: e.id,
						path: e.path,
						title: e.title
					}) : {
						message: `Preview selected ${e.title}.`,
						ok: !0
					},
					id: e.id
				};
			} catch (t) {
				s.value = {
					id: e.id,
					message: t instanceof Error ? t.message : "The track could not be started.",
					ok: !1
				};
			} finally {
				i.value = "";
			}
		}
		return (e, t) => (J(), Y("main", Bo, [X("header", Vo, [
			t[14] ||= X("p", { class: "browser-kicker" }, "NIN Ghosts · GM score finder", -1),
			t[15] ||= X("h1", null, "Find the right track for the scene.", -1),
			t[16] ||= X("p", { class: "browser-intro" }, " Describe the moment, pick a scene type, or dial in the energy. The catalog is curated for play at the table. ", -1),
			X("label", Ho, [
				t[6] ||= X("span", {
					"aria-hidden": "true",
					class: "tw:text-xl"
				}, "⌕", -1),
				wn(X("input", {
					"onUpdate:modelValue": t[0] ||= (e) => c.value = e,
					"aria-label": "Describe the scene",
					class: "tw:grow",
					placeholder: "Try “quiet investigation”, “ruins”, or “frantic escape”…",
					type: "search"
				}, null, 512), [[eo, c.value]]),
				c.value ? (J(), Y("button", {
					key: 0,
					"aria-label": "Clear search",
					class: "tw:dui-btn tw:dui-btn-circle tw:dui-btn-ghost tw:dui-btn-sm",
					type: "button",
					onClick: t[1] ||= (e) => c.value = ""
				}, " × ")) : zi("", !0)
			]),
			X("div", Uo, [t[7] ||= X("span", null, "Quick scenes", -1), (J(), Y(K, null, lr(n, (e) => X("button", {
				key: e.value,
				"aria-pressed": l.value === e.value,
				class: _e(["tw:dui-btn tw:dui-btn-xs", { "tw:dui-btn-neutral": l.value === e.value }]),
				type: "button",
				onClick: (t) => g(e.value)
			}, k(e.label), 11, Wo)), 64))]),
			X("div", Go, [
				X("label", null, [t[9] ||= X("span", null, "Album", -1), wn(X("select", {
					"onUpdate:modelValue": t[2] ||= (e) => r.value = e,
					class: "tw:dui-select tw:dui-select-sm tw:w-full"
				}, [t[8] ||= X("option", { value: "" }, "Every album", -1), (J(!0), Y(K, null, lr(d.value, (e) => (J(), Y("option", {
					key: e,
					value: e
				}, k(e), 9, Ko))), 128))], 512), [[to, r.value]])]),
				X("label", null, [t[11] ||= X("span", null, "Energy", -1), wn(X("select", {
					"onUpdate:modelValue": t[3] ||= (e) => a.value = e,
					class: "tw:dui-select tw:dui-select-sm tw:w-full"
				}, [...t[10] ||= [
					X("option", { value: "" }, "Any energy", -1),
					X("option", { value: "low" }, "Low · 1–2", -1),
					X("option", { value: "medium" }, "Medium · 3", -1),
					X("option", { value: "high" }, "High · 4–5", -1)
				]], 512), [[to, a.value]])]),
				X("label", null, [t[13] ||= X("span", null, "Scene tag", -1), wn(X("select", {
					"onUpdate:modelValue": t[4] ||= (e) => l.value = e,
					class: "tw:dui-select tw:dui-select-sm tw:w-full"
				}, [t[12] ||= X("option", { value: "" }, "Any scene", -1), (J(!0), Y(K, null, lr(m.value, (e) => (J(), Y("option", {
					key: e,
					value: e
				}, k(e.replaceAll("-", " ")), 9, qo))), 128))], 512), [[to, l.value]])]),
				X("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:self-end",
					disabled: !p.value,
					type: "button",
					onClick: h
				}, " Reset ", 8, Jo)
			])
		]), X("section", Yo, [
			X("div", Xo, [X("div", null, [t[17] ||= X("h2", { id: "results-heading" }, "Tracks for your scene", -1), X("p", Zo, [Ri(k(f.value.length) + " " + k(f.value.length === 1 ? "match" : "matches") + " ", 1), p.value ? (J(), Y("span", Qo, " in the 59-track library")) : zi("", !0)])]), l.value ? (J(), Y("p", $o, [Ri(k(l.value.replaceAll("-", " ")) + " ", 1), X("button", {
				"aria-label": "Remove scene tag filter",
				type: "button",
				onClick: t[5] ||= (e) => l.value = ""
			}, " × ")])) : zi("", !0)]),
			s.value ? (J(), Y("div", {
				key: 0,
				class: _e(["tw:dui-alert tw:mb-3", s.value.ok ? "tw:dui-alert-success" : "tw:dui-alert-error"]),
				role: "status"
			}, [X("span", es, k(s.value.ok ? "▶" : "!"), 1), X("span", null, k(s.value.message), 1)], 2)) : zi("", !0),
			o.value ? (J(), Y("div", ts, [t[18] ||= X("span", {
				class: "tw:dui-loading tw:dui-loading-sm tw:dui-loading-spinner",
				"aria-hidden": "true"
			}, null, -1), X("span", null, k(o.value), 1)])) : f.value.length ? (J(), Y("div", ns, [(J(!0), Y(K, null, lr(f.value, (e) => (J(), ki(zo, {
				key: e.id,
				busy: i.value === e.id,
				"selected-tag": l.value,
				track: e,
				onPlay: _,
				onSelectTag: g
			}, null, 8, [
				"busy",
				"selected-tag",
				"track"
			]))), 128))])) : (J(), Y("div", rs, [
				t[19] ||= X("span", { "aria-hidden": "true" }, "⌕", -1),
				t[20] ||= X("h3", null, "No tracks fit all of those choices.", -1),
				t[21] ||= X("p", null, "Try fewer words, a different energy level, or clear the scene tag.", -1),
				X("button", {
					class: "tw:dui-btn tw:dui-btn-sm",
					type: "button",
					onClick: h
				}, " Show all tracks ")
			]))
		])]));
	}
}), as = "NIN Ghosts RPG Browser";
async function os(e) {
	let t = await ss(), n = await cs(t, e);
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
async function ss() {
	let e = ls(as);
	if (e) return e;
	if (typeof Playlist > "u") throw Error("Foundry Playlist document constructor is unavailable.");
	return Playlist.create({
		channel: "music",
		description: "Tracks launched from the NIN Ghosts RPG music browser.",
		flags: { [t]: { browserPlaylist: !0 } },
		mode: 0,
		name: as,
		playing: !1,
		sounds: []
	});
}
async function cs(e, n) {
	let r = ds(e).find((e) => e.flags?.["fvtt-nin-ghosts-annotated"]?.trackId === n.id || e.path === n.path);
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
function ls(e) {
	let t = game?.playlists;
	if (t) return t.getName?.(e) ?? us().find((t) => t.name === e);
}
function us() {
	let e = game?.playlists;
	return e ? e.contents ? e.contents : e.values ? Array.from(e.values()) : [] : [];
}
function ds(e) {
	let t = e.sounds;
	return t ? Array.isArray(t) ? t : t.contents ? t.contents : t.values ? Array.from(t.values()) : [] : [];
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var fs = typeof window < "u", ps = Symbol(), ms;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ms ||= {});
var hs = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function gs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function _s(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Ss(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function vs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function ys(e) {
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
var bs = typeof navigator == "object" ? navigator : { userAgent: "" }, xs = /Macintosh/.test(bs.userAgent) && /AppleWebKit/.test(bs.userAgent) && !/Safari/.test(bs.userAgent), Ss = fs ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !xs ? Cs : "msSaveOrOpenBlob" in bs ? ws : Ts : () => {};
function Cs(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? ys(r) : vs(r.href) ? _s(e, t, n) : (r.target = "_blank", ys(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		ys(r);
	}, 0));
}
function ws(e, t = "download", n) {
	if (typeof e == "string") if (vs(e)) _s(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			ys(t);
		});
	}
	else navigator.msSaveOrOpenBlob(gs(e, n), t);
}
function Ts(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return _s(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(hs.HTMLElement)) || "safari" in hs, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || xs) && typeof FileReader < "u") {
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
var { assign: Es } = Object;
function Ds() {
	let e = Oe(!0), t = e.run(() => /* @__PURE__ */ Ut({})), n = [], r = [], i = Vt({
		install(e) {
			i._a = e, e.provide(ps, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var { assign: Os } = Object, ks = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("fvtt-nin-ghosts-annotated-root"), n.dataset.theme = "fvtt-nin-ghosts-annotated", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("fvtt-nin-ghosts-annotated-app"), t.replaceChildren(e), this.#e = so(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(Ds()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, As = class extends ks {
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
		return is;
	}
	getVueProps() {
		return { onPlayTrack: async (e) => os(e) };
	}
};
//#endregion
export { As as MusicBrowserApplication };

//# sourceMappingURL=MusicBrowserApplication-CPfZj2eC.js.map