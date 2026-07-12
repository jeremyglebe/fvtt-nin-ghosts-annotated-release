import { t as e } from "../constants-BTCouAkl.js";
//#region src/module/apps/music-browser/open-music-browser-application.ts
async function t() {
	let { MusicBrowserApplication: e } = await import("../MusicBrowserApplication-CPfZj2eC.js");
	await new e().render(!0);
}
//#endregion
//#region src/module/api/create-module-api.ts
function n() {
	return {
		async openMusicBrowser() {
			await t();
		},
		openPreviewNotice() {
			console.log("NIN Ghosts RPG Annotations - Music Browser API is available.");
		}
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function r() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let t = game.modules.get(e);
	if (!t) throw Error(`Foundry module registry entry was not found for ${e}.`);
	t.api = n();
}
//#endregion
//#region src/module/hooks/add-music-browser-button.ts
var i = `${e}.openMusicBrowser`, a = "nin-ghosts-music-browser-button", o = "ninGhostsDebug", s = [
	"#playlists.sidebar-tab",
	"#sidebar section#playlists",
	"#sidebar .sidebar-tab[data-tab='playlists']",
	"#sidebar .sidebar-tab[data-tab='playlist']",
	"#sidebar section[data-tab='playlists']",
	"#sidebar section[data-tab='playlist']",
	"#sidebar .directory[data-document-name='Playlist']",
	"[data-application-part='playlists']"
];
function c() {
	b("Registering music browser sidebar hooks."), Hooks.on("renderPlaylistDirectory", (...e) => {
		b("renderPlaylistDirectory fired.", S(e)), l(e);
	}), Hooks.on("renderPlaylists", (...e) => {
		b("renderPlaylists fired.", S(e)), l(e);
	}), Hooks.on("renderSidebar", () => {
		b("renderSidebar fired; scanning visible sidebar."), u();
	}), Hooks.on("renderSidebarTab", (...e) => {
		b("renderSidebarTab fired.", S(e)), _(e) ? (b("renderSidebarTab matched playlist/sound tab."), l(e)) : b("renderSidebarTab did not match playlist/sound tab.");
	}), Hooks.on("renderApplicationV2", (...e) => {
		if (_(e)) {
			b("renderApplicationV2 matched playlist/sound application.", S(e)), l(e);
			return;
		}
		p(e)?.id === "sidebar" && (b("renderApplicationV2 matched sidebar shell; scanning visible sidebar."), u());
	}), Hooks.once("ready", () => {
		b("ready hook fired; scanning visible sidebar and starting observer."), u(), d();
	});
}
function l(e) {
	let n = p(e);
	if (!n) {
		b("No rendered HTMLElement found for button insertion.", S(e));
		return;
	}
	if (y(n)) {
		b("Skipping sidebar navigation control.", C(n));
		return;
	}
	if (n.querySelector(`[data-action="${i}"]`)) {
		b("Button already exists in target root.", C(n));
		return;
	}
	let r = document.createElement("button");
	r.className = a, r.dataset.action = i, r.type = "button", r.title = "Open NIN Ghosts music browser", r.innerHTML = "<i class=\"fa-solid fa-music\" aria-hidden=\"true\"></i><span>Ghosts Browser</span>", r.addEventListener("click", () => {
		t();
	});
	let o = document.createElement("div");
	o.className = "nin-ghosts-music-browser-button-row", o.append(r);
	let s = f(n);
	s.prepend(o), b("Inserted Ghosts Browser button.", {
		root: C(n),
		target: C(s)
	});
}
function u() {
	let e = /* @__PURE__ */ new Set(), t = g();
	t && (b("Found playlist directory root from game.playlists.directory.", C(t)), e.add(t));
	for (let t of s) {
		let n = document.querySelector(t);
		if (n) {
			if (y(n)) {
				b("Visible sidebar selector matched navigation control; skipping.", {
					root: C(n),
					selector: t
				});
				continue;
			}
			b("Visible sidebar selector matched.", {
				root: C(n),
				selector: t
			}), e.add(n);
		}
	}
	for (let t of e) l([t]);
	e.size === 0 && b("No visible playlist/sound sidebar target matched.", {
		checkedSelectors: s,
		sidebarExists: !!document.querySelector("#sidebar")
	});
}
function d() {
	let e = document.querySelector("#sidebar") ?? document.body;
	new MutationObserver(() => {
		u();
	}).observe(e, {
		childList: !0,
		subtree: !0
	}), b("Sidebar observer started.", C(e));
}
function f(e) {
	return e.querySelector(".directory-header") ?? e.querySelector(".sidebar-header") ?? e.querySelector(".directory-controls") ?? e.querySelector(".header-actions") ?? e.querySelector("header") ?? e;
}
function p(e) {
	for (let t of e) {
		let e = m(t);
		if (e) return e;
	}
}
function m(e) {
	if (e instanceof HTMLElement) return e;
	if (h(e)) {
		if (e.element instanceof HTMLElement) return e.element;
		if (e[0] instanceof HTMLElement) return e[0];
	}
}
function h(e) {
	return typeof e == "object" && !!e;
}
function g() {
	let e = game?.playlists;
	return m(e?.directory?.element);
}
function _(e) {
	let t = p(e);
	return t && v(t) ? !0 : e.some((e) => {
		if (typeof e != "object" || !e) return !1;
		let t = e.constructor.name.toLowerCase();
		return t.includes("playlist") || t.includes("audio");
	});
}
function v(e) {
	let t = e.dataset.tab?.toLowerCase();
	return y(e) ? !1 : e.id === "playlists" || t === "playlists" || t === "playlist" || e.classList.contains("playlists") || e.dataset.documentName === "Playlist" || e.matches(s.join(","));
}
function y(e) {
	return !!(e.closest("#sidebar-tabs, .sidebar-tabs, nav.tabs, menu.tabs") && (e.matches("a, button, [role='tab'], [data-tab]") || e.closest("a, button, [role='tab']")));
}
function b(e, t) {
	if (x()) {
		if (t === void 0) {
			console.debug(`[NIN Ghosts] ${e}`);
			return;
		}
		console.debug(`[NIN Ghosts] ${e}`, t);
	}
}
function x() {
	return globalThis[o] === !0;
}
function S(e) {
	return e.map((e) => {
		if (e instanceof HTMLElement) return C(e);
		if (h(e)) {
			let t = m(e);
			return {
				constructor: e.constructor.name,
				element: t ? C(t) : void 0
			};
		}
		return typeof e;
	});
}
function C(e) {
	return {
		className: e.className,
		id: e.id,
		tagName: e.tagName.toLowerCase(),
		tab: e instanceof HTMLElement ? e.dataset.tab : void 0
	};
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function w() {
	T(), Hooks.once("init", () => {
		E("init"), c();
	});
}
function T() {
	globalThis.ninGhosts = n();
}
function E(e) {
	try {
		r();
	} catch (t) {
		console.warn(`[NIN Ghosts] API registration skipped during ${e}.`, t);
	}
}
//#endregion
//#region src/main.ts
w();
//#endregion

//# sourceMappingURL=fvtt-nin-ghosts-annotated.mjs.map