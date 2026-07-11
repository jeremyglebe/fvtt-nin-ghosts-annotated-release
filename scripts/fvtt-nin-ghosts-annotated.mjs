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
var i = `${e}.openMusicBrowser`, a = "nin-ghosts-music-browser-button", o = [
	"#playlists.sidebar-tab",
	"#sidebar section#playlists",
	"#sidebar .sidebar-tab[data-tab='playlists']",
	"#sidebar .sidebar-tab[data-tab='playlist']",
	"#sidebar section[data-tab='playlists']",
	"#sidebar section[data-tab='playlist']",
	"#sidebar .directory[data-document-name='Playlist']",
	"[data-application-part='playlists']"
];
function s() {
	y("Registering music browser sidebar hooks."), Hooks.on("renderPlaylistDirectory", (...e) => {
		y("renderPlaylistDirectory fired.", b(e)), c(e);
	}), Hooks.on("renderPlaylists", (...e) => {
		y("renderPlaylists fired.", b(e)), c(e);
	}), Hooks.on("renderSidebar", () => {
		y("renderSidebar fired; scanning visible sidebar."), l();
	}), Hooks.on("renderSidebarTab", (...e) => {
		y("renderSidebarTab fired.", b(e)), g(e) ? (y("renderSidebarTab matched playlist/sound tab."), c(e)) : y("renderSidebarTab did not match playlist/sound tab.");
	}), Hooks.on("renderApplicationV2", (...e) => {
		if (g(e)) {
			y("renderApplicationV2 matched playlist/sound application.", b(e)), c(e);
			return;
		}
		f(e)?.id === "sidebar" && (y("renderApplicationV2 matched sidebar shell; scanning visible sidebar."), l());
	}), Hooks.once("ready", () => {
		y("ready hook fired; scanning visible sidebar and starting observer."), l(), u();
	});
}
function c(e) {
	let n = f(e);
	if (!n) {
		y("No rendered HTMLElement found for button insertion.", b(e));
		return;
	}
	if (v(n)) {
		y("Skipping sidebar navigation control.", x(n));
		return;
	}
	if (n.querySelector(`[data-action="${i}"]`)) {
		y("Button already exists in target root.", x(n));
		return;
	}
	let r = document.createElement("button");
	r.className = a, r.dataset.action = i, r.type = "button", r.title = "Open NIN Ghosts music browser", r.innerHTML = "<i class=\"fa-solid fa-music\" aria-hidden=\"true\"></i><span>Ghosts Browser</span>", r.addEventListener("click", () => {
		t();
	});
	let o = document.createElement("div");
	o.className = "nin-ghosts-music-browser-button-row", o.append(r);
	let s = d(n);
	s.prepend(o), y("Inserted Ghosts Browser button.", {
		root: x(n),
		target: x(s)
	});
}
function l() {
	let e = 0, t = h();
	t && (e += 1, y("Found playlist directory root from game.playlists.directory.", x(t)), c([t]));
	for (let t of o) {
		let n = document.querySelector(t);
		if (n) {
			if (v(n)) {
				y("Visible sidebar selector matched navigation control; skipping.", {
					root: x(n),
					selector: t
				});
				continue;
			}
			e += 1, y("Visible sidebar selector matched.", {
				root: x(n),
				selector: t
			}), c([n]);
		}
	}
	e === 0 && y("No visible playlist/sound sidebar target matched.", {
		checkedSelectors: o,
		sidebarExists: !!document.querySelector("#sidebar")
	});
}
function u() {
	let e = document.querySelector("#sidebar") ?? document.body;
	new MutationObserver(() => {
		l();
	}).observe(e, {
		childList: !0,
		subtree: !0
	}), y("Sidebar observer started.", x(e));
}
function d(e) {
	return e.querySelector(".directory-header") ?? e.querySelector(".sidebar-header") ?? e.querySelector(".directory-controls") ?? e.querySelector(".header-actions") ?? e.querySelector("header") ?? e;
}
function f(e) {
	for (let t of e) {
		let e = p(t);
		if (e) return e;
	}
}
function p(e) {
	if (e instanceof HTMLElement) return e;
	if (m(e)) {
		if (e.element instanceof HTMLElement) return e.element;
		if (e[0] instanceof HTMLElement) return e[0];
	}
}
function m(e) {
	return typeof e == "object" && !!e;
}
function h() {
	let e = game?.playlists;
	return p(e?.directory?.element);
}
function g(e) {
	let t = f(e);
	return t && _(t) ? !0 : e.some((e) => {
		if (typeof e != "object" || !e) return !1;
		let t = e.constructor.name.toLowerCase();
		return t.includes("playlist") || t.includes("audio");
	});
}
function _(e) {
	let t = e.dataset.tab?.toLowerCase();
	return v(e) ? !1 : e.id === "playlists" || t === "playlists" || t === "playlist" || e.classList.contains("playlists") || e.dataset.documentName === "Playlist" || e.matches(o.join(","));
}
function v(e) {
	return !!(e.closest("#sidebar-tabs, .sidebar-tabs, nav.tabs, menu.tabs") && (e.matches("a, button, [role='tab'], [data-tab]") || e.closest("a, button, [role='tab']")));
}
function y(e, t) {
	if (t === void 0) {
		console.info(`[NIN Ghosts] ${e}`);
		return;
	}
	console.info(`[NIN Ghosts] ${e}`, t);
}
function b(e) {
	return e.map((e) => {
		if (e instanceof HTMLElement) return x(e);
		if (m(e)) {
			let t = p(e);
			return {
				constructor: e.constructor.name,
				element: t ? x(t) : void 0
			};
		}
		return typeof e;
	});
}
function x(e) {
	return {
		className: e.className,
		id: e.id,
		tagName: e.tagName.toLowerCase(),
		tab: e instanceof HTMLElement ? e.dataset.tab : void 0
	};
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function S() {
	console.info(`[NIN Ghosts] Module script loaded: ${e}`), C(), Hooks.once("init", () => {
		console.info("[NIN Ghosts] init hook fired; registering API and sidebar button hooks."), w("init"), s();
	});
}
function C() {
	globalThis.ninGhosts = n(), console.info("[NIN Ghosts] Debug API registered at globalThis.ninGhosts.");
}
function w(e) {
	try {
		r(), console.info(`[NIN Ghosts] API registered during ${e}.`);
	} catch (t) {
		console.warn(`[NIN Ghosts] API registration skipped during ${e}.`, t);
	}
}
//#endregion
//#region src/main.ts
S();
//#endregion

//# sourceMappingURL=fvtt-nin-ghosts-annotated.mjs.map