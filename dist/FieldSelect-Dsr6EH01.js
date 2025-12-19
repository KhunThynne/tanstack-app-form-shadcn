import { j as v, b as be, d as U, c as q, u as Tr } from "./index-DkX2XlwB.js";
import { F as Nr, a as Ir } from "./FieldErrorI18nMessage-DXRsbQM2.js";
import { useStore as _r } from "@tanstack/react-form";
import * as a from "react";
import { useLayoutEffect as Dr, useState as Lr } from "react";
import * as Qe from "react-dom";
import Mr from "react-dom";
import { c as H, u as jr, a as J, b as Ft, d as $r } from "./index-CyPcatiC.js";
import { u as ye, a as kr, b as Tt, c as Fr } from "./index-Ca5AMCu4.js";
import { c as dn } from "./createLucideIcon-D4r5Phnh.js";
import { C as Wr } from "./check-BxlvVsvD.js";
import { L as Br } from "./LabelAndDescriptionFieldForm-B9ucLcIn.js";
const Vr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], pn = dn("chevron-down", Vr);
const Hr = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], zr = dn("chevron-up", Hr);
function Wt(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Ur(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = a.createContext(c), l = n.length;
    n = [...n, c];
    const u = (f) => {
      const { scope: h, children: m, ...y } = f, d = h?.[e]?.[l] || s, g = a.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ v.jsx(d.Provider, { value: g, children: m });
    };
    u.displayName = i + "Provider";
    function p(f, h) {
      const m = h?.[e]?.[l] || s, y = a.useContext(m);
      if (y) return y;
      if (c !== void 0) return c;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, p];
  }
  const o = () => {
    const i = n.map((c) => a.createContext(c));
    return function(s) {
      const l = s?.[e] || i;
      return a.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, Kr(o, ...t)];
}
function Kr(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const c = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  const t = /* @__PURE__ */ Xr(e), n = a.forwardRef((r, o) => {
    const { children: i, ...c } = r, s = a.Children.toArray(i), l = s.find(Zr);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: a.isValidElement(u) ? a.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (a.isValidElement(o)) {
      const c = Qr(o), s = qr(i, o.props);
      return o.type !== a.Fragment && (s.ref = r ? be(r, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Gr = /* @__PURE__ */ Symbol("radix.slottable");
function Zr(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gr;
}
function qr(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Qr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Jr = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], mn = Jr.reduce((e, t) => {
  const n = /* @__PURE__ */ Yr(`Primitive.${t}`), r = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function eo(e, t) {
  e && Qe.flushSync(() => e.dispatchEvent(t));
}
function to(e, t = globalThis?.document) {
  const n = ye(e);
  a.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var no = "DismissableLayer", wt = "dismissableLayer.update", ro = "dismissableLayer.pointerDownOutside", oo = "dismissableLayer.focusOutside", Bt, hn = a.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vn = a.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: c,
      onDismiss: s,
      ...l
    } = e, u = a.useContext(hn), [p, f] = a.useState(null), h = p?.ownerDocument ?? globalThis?.document, [, m] = a.useState({}), y = U(t, (E) => f(E)), d = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), x = d.indexOf(g), w = p ? d.indexOf(p) : -1, S = u.layersWithOutsidePointerEventsDisabled.size > 0, b = w >= x, C = co((E) => {
      const O = E.target, _ = [...u.branches].some((N) => N.contains(O));
      !b || _ || (o?.(E), c?.(E), E.defaultPrevented || s?.());
    }, h), A = ao((E) => {
      const O = E.target;
      [...u.branches].some((N) => N.contains(O)) || (i?.(E), c?.(E), E.defaultPrevented || s?.());
    }, h);
    return to((E) => {
      w === u.layers.size - 1 && (r?.(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
    }, h), a.useEffect(() => {
      if (p)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Bt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(p)), u.layers.add(p), Vt(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Bt);
        };
    }, [p, h, n, u]), a.useEffect(() => () => {
      p && (u.layers.delete(p), u.layersWithOutsidePointerEventsDisabled.delete(p), Vt());
    }, [p, u]), a.useEffect(() => {
      const E = () => m({});
      return document.addEventListener(wt, E), () => document.removeEventListener(wt, E);
    }, []), /* @__PURE__ */ v.jsx(
      mn.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: S ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
vn.displayName = no;
var io = "DismissableLayerBranch", so = a.forwardRef((e, t) => {
  const n = a.useContext(hn), r = a.useRef(null), o = U(t, r);
  return a.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ v.jsx(mn.div, { ...e, ref: o });
});
so.displayName = io;
function co(e, t = globalThis?.document) {
  const n = ye(e), r = a.useRef(!1), o = a.useRef(() => {
  });
  return a.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          gn(
            ro,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function ao(e, t = globalThis?.document) {
  const n = ye(e), r = a.useRef(!1);
  return a.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && gn(oo, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Vt() {
  const e = new CustomEvent(wt);
  document.dispatchEvent(e);
}
function gn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? eo(o, i) : o.dispatchEvent(i);
}
var ut = 0;
function lo() {
  a.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ht()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ht()), ut++, () => {
      ut === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ut--;
    };
  }, []);
}
function Ht() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
  const t = /* @__PURE__ */ fo(e), n = a.forwardRef((r, o) => {
    const { children: i, ...c } = r, s = a.Children.toArray(i), l = s.find(mo);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: a.isValidElement(u) ? a.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (a.isValidElement(o)) {
      const c = vo(o), s = ho(i, o.props);
      return o.type !== a.Fragment && (s.ref = r ? be(r, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var po = /* @__PURE__ */ Symbol("radix.slottable");
function mo(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === po;
}
function ho(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vo(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var go = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], yo = go.reduce((e, t) => {
  const n = /* @__PURE__ */ uo(`Primitive.${t}`), r = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), ft = "focusScope.autoFocusOnMount", dt = "focusScope.autoFocusOnUnmount", zt = { bubbles: !1, cancelable: !0 }, wo = "FocusScope", yn = a.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...c
  } = e, [s, l] = a.useState(null), u = ye(o), p = ye(i), f = a.useRef(null), h = U(t, (d) => l(d)), m = a.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  a.useEffect(() => {
    if (r) {
      let d = function(S) {
        if (m.paused || !s) return;
        const b = S.target;
        s.contains(b) ? f.current = b : ue(f.current, { select: !0 });
      }, g = function(S) {
        if (m.paused || !s) return;
        const b = S.relatedTarget;
        b !== null && (s.contains(b) || ue(f.current, { select: !0 }));
      }, x = function(S) {
        if (document.activeElement === document.body)
          for (const C of S)
            C.removedNodes.length > 0 && ue(s);
      };
      document.addEventListener("focusin", d), document.addEventListener("focusout", g);
      const w = new MutationObserver(x);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", d), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [r, s, m.paused]), a.useEffect(() => {
    if (s) {
      Kt.add(m);
      const d = document.activeElement;
      if (!s.contains(d)) {
        const x = new CustomEvent(ft, zt);
        s.addEventListener(ft, u), s.dispatchEvent(x), x.defaultPrevented || (xo(Po(wn(s)), { select: !0 }), document.activeElement === d && ue(s));
      }
      return () => {
        s.removeEventListener(ft, u), setTimeout(() => {
          const x = new CustomEvent(dt, zt);
          s.addEventListener(dt, p), s.dispatchEvent(x), x.defaultPrevented || ue(d ?? document.body, { select: !0 }), s.removeEventListener(dt, p), Kt.remove(m);
        }, 0);
      };
    }
  }, [s, u, p, m]);
  const y = a.useCallback(
    (d) => {
      if (!n && !r || m.paused) return;
      const g = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, x = document.activeElement;
      if (g && x) {
        const w = d.currentTarget, [S, b] = So(w);
        S && b ? !d.shiftKey && x === b ? (d.preventDefault(), n && ue(S, { select: !0 })) : d.shiftKey && x === S && (d.preventDefault(), n && ue(b, { select: !0 })) : x === w && d.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ v.jsx(yo.div, { tabIndex: -1, ...c, ref: h, onKeyDown: y });
});
yn.displayName = wo;
function xo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ue(r, { select: t }), document.activeElement !== n) return;
}
function So(e) {
  const t = wn(e), n = Ut(t, e), r = Ut(t.reverse(), e);
  return [n, r];
}
function wn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ut(e, t) {
  for (const n of e)
    if (!bo(n, { upTo: t })) return n;
}
function bo(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Co(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ue(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Co(e) && t && e.select();
  }
}
var Kt = Eo();
function Eo() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Yt(e, t), e.unshift(t);
    },
    remove(t) {
      e = Yt(e, t), e[0]?.resume();
    }
  };
}
function Yt(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Po(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ro = ["top", "right", "bottom", "left"], fe = Math.min, Y = Math.max, Ye = Math.round, Fe = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), Ao = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Oo = {
  start: "end",
  end: "start"
};
function xt(e, t, n) {
  return Y(e, fe(t, n));
}
function ce(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ae(e) {
  return e.split("-")[0];
}
function Ne(e) {
  return e.split("-")[1];
}
function Nt(e) {
  return e === "x" ? "y" : "x";
}
function It(e) {
  return e === "y" ? "height" : "width";
}
const To = /* @__PURE__ */ new Set(["top", "bottom"]);
function re(e) {
  return To.has(ae(e)) ? "y" : "x";
}
function _t(e) {
  return Nt(re(e));
}
function No(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ne(e), o = _t(e), i = It(o);
  let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Xe(c)), [c, Xe(c)];
}
function Io(e) {
  const t = Xe(e);
  return [St(e), t, St(t)];
}
function St(e) {
  return e.replace(/start|end/g, (t) => Oo[t]);
}
const Xt = ["left", "right"], Gt = ["right", "left"], _o = ["top", "bottom"], Do = ["bottom", "top"];
function Lo(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Gt : Xt : t ? Xt : Gt;
    case "left":
    case "right":
      return t ? _o : Do;
    default:
      return [];
  }
}
function Mo(e, t, n, r) {
  const o = Ne(e);
  let i = Lo(ae(e), n === "start", r);
  return o && (i = i.map((c) => c + "-" + o), t && (i = i.concat(i.map(St)))), i;
}
function Xe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ao[t]);
}
function jo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xn(e) {
  return typeof e != "number" ? jo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ge(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Zt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = re(t), c = _t(t), s = It(c), l = ae(t), u = i === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[s] / 2 - o[s] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ne(t)) {
    case "start":
      m[c] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      m[c] += h * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const $o = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: c
  } = n, s = i.filter(Boolean), l = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let u = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: f
  } = Zt(u, r, l), h = r, m = {}, y = 0;
  for (let d = 0; d < s.length; d++) {
    const {
      name: g,
      fn: x
    } = s[d], {
      x: w,
      y: S,
      data: b,
      reset: C
    } = await x({
      x: p,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = w ?? p, f = S ?? f, m = {
      ...m,
      [g]: {
        ...m[g],
        ...b
      }
    }, C && y <= 50 && (y++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (u = C.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: p,
      y: f
    } = Zt(u, h, l)), d = -1);
  }
  return {
    x: p,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function je(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: c,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = ce(t, e), y = xn(m), g = s[h ? f === "floating" ? "reference" : "floating" : f], x = Ge(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: p,
    strategy: l
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: c.floating.width,
    height: c.floating.height
  } : c.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), b = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ge(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: S,
    strategy: l
  }) : w);
  return {
    top: (x.top - C.top + y.top) / b.y,
    bottom: (C.bottom - x.bottom + y.bottom) / b.y,
    left: (x.left - C.left + y.left) / b.x,
    right: (C.right - x.right + y.right) / b.x
  };
}
const ko = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: c,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: p = 0
    } = ce(e, t) || {};
    if (u == null)
      return {};
    const f = xn(p), h = {
      x: n,
      y: r
    }, m = _t(o), y = It(m), d = await c.getDimensions(u), g = m === "y", x = g ? "top" : "left", w = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", b = i.reference[y] + i.reference[m] - h[m] - i.floating[y], C = h[m] - i.reference[m], A = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u));
    let E = A ? A[S] : 0;
    (!E || !await (c.isElement == null ? void 0 : c.isElement(A))) && (E = s.floating[S] || i.floating[y]);
    const O = b / 2 - C / 2, _ = E / 2 - d[y] / 2 - 1, N = fe(f[x], _), D = fe(f[w], _), M = N, j = E - d[y] - D, I = E / 2 - d[y] / 2 + O, W = xt(M, I, j), T = !l.arrow && Ne(o) != null && I !== W && i.reference[y] / 2 - (I < M ? N : D) - d[y] / 2 < 0, L = T ? I < M ? I - M : I - j : 0;
    return {
      [m]: h[m] + L,
      data: {
        [m]: W,
        centerOffset: I - W - L,
        ...T && {
          alignmentOffset: L
        }
      },
      reset: T
    };
  }
}), Fo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: c,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: d = !0,
        ...g
      } = ce(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const x = ae(o), w = re(s), S = ae(s) === s, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = h || (S || !d ? [Xe(s)] : Io(s)), A = y !== "none";
      !h && A && C.push(...Mo(s, d, y, b));
      const E = [s, ...C], O = await je(t, g), _ = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && _.push(O[x]), f) {
        const I = No(o, c, b);
        _.push(O[I[0]], O[I[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: _
      }], !_.every((I) => I <= 0)) {
        var D, M;
        const I = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, W = E[I];
        if (W && (!(f === "alignment" ? w !== re(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((R) => re(R.placement) === w ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: N
            },
            reset: {
              placement: W
            }
          };
        let T = (M = N.filter((L) => L.overflows[0] <= 0).sort((L, R) => L.overflows[1] - R.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!T)
          switch (m) {
            case "bestFit": {
              var j;
              const L = (j = N.filter((R) => {
                if (A) {
                  const $ = re(R.placement);
                  return $ === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter(($) => $ > 0).reduce(($, K) => $ + K, 0)]).sort((R, $) => R[1] - $[1])[0]) == null ? void 0 : j[0];
              L && (T = L);
              break;
            }
            case "initialPlacement":
              T = s;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function qt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Qt(e) {
  return Ro.some((t) => e[t] >= 0);
}
const Wo = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = ce(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await je(t, {
            ...o,
            elementContext: "reference"
          }), c = qt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Qt(c)
            }
          };
        }
        case "escaped": {
          const i = await je(t, {
            ...o,
            altBoundary: !0
          }), c = qt(i, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Qt(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Sn = /* @__PURE__ */ new Set(["left", "top"]);
async function Bo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), c = ae(n), s = Ne(n), l = re(n) === "y", u = Sn.has(c) ? -1 : 1, p = i && l ? -1 : 1, f = ce(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: y
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof y == "number" && (m = s === "end" ? y * -1 : y), l ? {
    x: m * p,
    y: h * u
  } : {
    x: h * u,
    y: m * p
  };
}
const Vo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: c,
        middlewareData: s
      } = t, l = await Bo(t, e);
      return c === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: c
        }
      };
    }
  };
}, Ho = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: c = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x,
              y: w
            } = g;
            return {
              x,
              y: w
            };
          }
        },
        ...l
      } = ce(e, t), u = {
        x: n,
        y: r
      }, p = await je(t, l), f = re(ae(o)), h = Nt(f);
      let m = u[h], y = u[f];
      if (i) {
        const g = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", w = m + p[g], S = m - p[x];
        m = xt(w, m, S);
      }
      if (c) {
        const g = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", w = y + p[g], S = y - p[x];
        y = xt(w, y, S);
      }
      const d = s.fn({
        ...t,
        [h]: m,
        [f]: y
      });
      return {
        ...d,
        data: {
          x: d.x - n,
          y: d.y - r,
          enabled: {
            [h]: i,
            [f]: c
          }
        }
      };
    }
  };
}, zo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: c
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = ce(e, t), p = {
        x: n,
        y: r
      }, f = re(o), h = Nt(f);
      let m = p[h], y = p[f];
      const d = ce(s, t), g = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...d
      };
      if (l) {
        const S = h === "y" ? "height" : "width", b = i.reference[h] - i.floating[S] + g.mainAxis, C = i.reference[h] + i.reference[S] - g.mainAxis;
        m < b ? m = b : m > C && (m = C);
      }
      if (u) {
        var x, w;
        const S = h === "y" ? "width" : "height", b = Sn.has(ae(o)), C = i.reference[f] - i.floating[S] + (b && ((x = c.offset) == null ? void 0 : x[f]) || 0) + (b ? 0 : g.crossAxis), A = i.reference[f] + i.reference[S] + (b ? 0 : ((w = c.offset) == null ? void 0 : w[f]) || 0) - (b ? g.crossAxis : 0);
        y < C ? y = C : y > A && (y = A);
      }
      return {
        [h]: m,
        [f]: y
      };
    }
  };
}, Uo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: c,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...u
      } = ce(e, t), p = await je(t, u), f = ae(o), h = Ne(o), m = re(o) === "y", {
        width: y,
        height: d
      } = i.floating;
      let g, x;
      f === "top" || f === "bottom" ? (g = f, x = h === (await (c.isRTL == null ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (x = f, g = h === "end" ? "top" : "bottom");
      const w = d - p.top - p.bottom, S = y - p.left - p.right, b = fe(d - p[g], w), C = fe(y - p[x], S), A = !t.middlewareData.shift;
      let E = b, O = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = S), (r = t.middlewareData.shift) != null && r.enabled.y && (E = w), A && !h) {
        const N = Y(p.left, 0), D = Y(p.right, 0), M = Y(p.top, 0), j = Y(p.bottom, 0);
        m ? O = y - 2 * (N !== 0 || D !== 0 ? N + D : Y(p.left, p.right)) : E = d - 2 * (M !== 0 || j !== 0 ? M + j : Y(p.top, p.bottom));
      }
      await l({
        ...t,
        availableWidth: O,
        availableHeight: E
      });
      const _ = await c.getDimensions(s.floating);
      return y !== _.width || d !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Je() {
  return typeof window < "u";
}
function Ie(e) {
  return bn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function X(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function se(e) {
  var t;
  return (t = (bn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bn(e) {
  return Je() ? e instanceof Node || e instanceof X(e).Node : !1;
}
function ee(e) {
  return Je() ? e instanceof Element || e instanceof X(e).Element : !1;
}
function ie(e) {
  return Je() ? e instanceof HTMLElement || e instanceof X(e).HTMLElement : !1;
}
function Jt(e) {
  return !Je() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot;
}
const Ko = /* @__PURE__ */ new Set(["inline", "contents"]);
function ke(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ko.has(o);
}
const Yo = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Xo(e) {
  return Yo.has(Ie(e));
}
const Go = [":popover-open", ":modal"];
function et(e) {
  return Go.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Zo = ["transform", "translate", "scale", "rotate", "perspective"], qo = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Qo = ["paint", "layout", "strict", "content"];
function Dt(e) {
  const t = Lt(), n = ee(e) ? te(e) : e;
  return Zo.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || qo.some((r) => (n.willChange || "").includes(r)) || Qo.some((r) => (n.contain || "").includes(r));
}
function Jo(e) {
  let t = de(e);
  for (; ie(t) && !Te(t); ) {
    if (Dt(t))
      return t;
    if (et(t))
      return null;
    t = de(t);
  }
  return null;
}
function Lt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ei = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Te(e) {
  return ei.has(Ie(e));
}
function te(e) {
  return X(e).getComputedStyle(e);
}
function tt(e) {
  return ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function de(e) {
  if (Ie(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jt(e) && e.host || // Fallback.
    se(e)
  );
  return Jt(t) ? t.host : t;
}
function Cn(e) {
  const t = de(e);
  return Te(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ie(t) && ke(t) ? t : Cn(t);
}
function $e(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Cn(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), c = X(o);
  if (i) {
    const s = bt(c);
    return t.concat(c, c.visualViewport || [], ke(o) ? o : [], s && n ? $e(s) : []);
  }
  return t.concat(o, $e(o, [], n));
}
function bt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function En(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ie(e), i = o ? e.offsetWidth : n, c = o ? e.offsetHeight : r, s = Ye(n) !== i || Ye(r) !== c;
  return s && (n = i, r = c), {
    width: n,
    height: r,
    $: s
  };
}
function Mt(e) {
  return ee(e) ? e : e.contextElement;
}
function Ae(e) {
  const t = Mt(e);
  if (!ie(t))
    return oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = En(t);
  let c = (i ? Ye(n.width) : n.width) / r, s = (i ? Ye(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const ti = /* @__PURE__ */ oe(0);
function Pn(e) {
  const t = X(e);
  return !Lt() || !t.visualViewport ? ti : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ni(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== X(e) ? !1 : t;
}
function we(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Mt(e);
  let c = oe(1);
  t && (r ? ee(r) && (c = Ae(r)) : c = Ae(e));
  const s = ni(i, n, r) ? Pn(i) : oe(0);
  let l = (o.left + s.x) / c.x, u = (o.top + s.y) / c.y, p = o.width / c.x, f = o.height / c.y;
  if (i) {
    const h = X(i), m = r && ee(r) ? X(r) : r;
    let y = h, d = bt(y);
    for (; d && r && m !== y; ) {
      const g = Ae(d), x = d.getBoundingClientRect(), w = te(d), S = x.left + (d.clientLeft + parseFloat(w.paddingLeft)) * g.x, b = x.top + (d.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, u *= g.y, p *= g.x, f *= g.y, l += S, u += b, y = X(d), d = bt(y);
    }
  }
  return Ge({
    width: p,
    height: f,
    x: l,
    y: u
  });
}
function nt(e, t) {
  const n = tt(e).scrollLeft;
  return t ? t.left + n : we(se(e)).left + n;
}
function Rn(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - nt(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ri(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", c = se(r), s = t ? et(t.floating) : !1;
  if (r === c || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = oe(1);
  const p = oe(0), f = ie(r);
  if ((f || !f && !i) && ((Ie(r) !== "body" || ke(c)) && (l = tt(r)), ie(r))) {
    const m = we(r);
    u = Ae(r), p.x = m.x + r.clientLeft, p.y = m.y + r.clientTop;
  }
  const h = c && !f && !i ? Rn(c, l) : oe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + p.x + h.x,
    y: n.y * u.y - l.scrollTop * u.y + p.y + h.y
  };
}
function oi(e) {
  return Array.from(e.getClientRects());
}
function ii(e) {
  const t = se(e), n = tt(e), r = e.ownerDocument.body, o = Y(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Y(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + nt(e);
  const s = -n.scrollTop;
  return te(r).direction === "rtl" && (c += Y(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: c,
    y: s
  };
}
const en = 25;
function si(e, t) {
  const n = X(e), r = se(e), o = n.visualViewport;
  let i = r.clientWidth, c = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, c = o.height;
    const p = Lt();
    (!p || p && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const u = nt(r);
  if (u <= 0) {
    const p = r.ownerDocument, f = p.body, h = getComputedStyle(f), m = p.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(r.clientWidth - f.clientWidth - m);
    y <= en && (i -= y);
  } else u <= en && (i += u);
  return {
    width: i,
    height: c,
    x: s,
    y: l
  };
}
const ci = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ai(e, t) {
  const n = we(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ie(e) ? Ae(e) : oe(1), c = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: c,
    height: s,
    x: l,
    y: u
  };
}
function tn(e, t, n) {
  let r;
  if (t === "viewport")
    r = si(e, n);
  else if (t === "document")
    r = ii(se(e));
  else if (ee(t))
    r = ai(t, n);
  else {
    const o = Pn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ge(r);
}
function An(e, t) {
  const n = de(e);
  return n === t || !ee(n) || Te(n) ? !1 : te(n).position === "fixed" || An(n, t);
}
function li(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $e(e, [], !1).filter((s) => ee(s) && Ie(s) !== "body"), o = null;
  const i = te(e).position === "fixed";
  let c = i ? de(e) : e;
  for (; ee(c) && !Te(c); ) {
    const s = te(c), l = Dt(c);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && ci.has(o.position) || ke(c) && !l && An(e, c)) ? r = r.filter((p) => p !== c) : o = s, c = de(c);
  }
  return t.set(e, r), r;
}
function ui(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const c = [...n === "clippingAncestors" ? et(t) ? [] : li(t, this._c) : [].concat(n), r], s = c[0], l = c.reduce((u, p) => {
    const f = tn(t, p, o);
    return u.top = Y(f.top, u.top), u.right = fe(f.right, u.right), u.bottom = fe(f.bottom, u.bottom), u.left = Y(f.left, u.left), u;
  }, tn(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function fi(e) {
  const {
    width: t,
    height: n
  } = En(e);
  return {
    width: t,
    height: n
  };
}
function di(e, t, n) {
  const r = ie(t), o = se(t), i = n === "fixed", c = we(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = oe(0);
  function u() {
    l.x = nt(o);
  }
  if (r || !r && !i)
    if ((Ie(t) !== "body" || ke(o)) && (s = tt(t)), r) {
      const m = we(t, !0, i, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const p = o && !r && !i ? Rn(o, s) : oe(0), f = c.left + s.scrollLeft - l.x - p.x, h = c.top + s.scrollTop - l.y - p.y;
  return {
    x: f,
    y: h,
    width: c.width,
    height: c.height
  };
}
function pt(e) {
  return te(e).position === "static";
}
function nn(e, t) {
  if (!ie(e) || te(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return se(e) === n && (n = n.ownerDocument.body), n;
}
function On(e, t) {
  const n = X(e);
  if (et(e))
    return n;
  if (!ie(e)) {
    let o = de(e);
    for (; o && !Te(o); ) {
      if (ee(o) && !pt(o))
        return o;
      o = de(o);
    }
    return n;
  }
  let r = nn(e, t);
  for (; r && Xo(r) && pt(r); )
    r = nn(r, t);
  return r && Te(r) && pt(r) && !Dt(r) ? n : r || Jo(e) || n;
}
const pi = async function(e) {
  const t = this.getOffsetParent || On, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: di(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function mi(e) {
  return te(e).direction === "rtl";
}
const hi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ri,
  getDocumentElement: se,
  getClippingRect: ui,
  getOffsetParent: On,
  getElementRects: pi,
  getClientRects: oi,
  getDimensions: fi,
  getScale: Ae,
  isElement: ee,
  isRTL: mi
};
function Tn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function vi(e, t) {
  let n = null, r;
  const o = se(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function c(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: h,
      height: m
    } = u;
    if (s || t(), !h || !m)
      return;
    const y = Fe(f), d = Fe(o.clientWidth - (p + h)), g = Fe(o.clientHeight - (f + m)), x = Fe(p), S = {
      rootMargin: -y + "px " + -d + "px " + -g + "px " + -x + "px",
      threshold: Y(0, fe(1, l)) || 1
    };
    let b = !0;
    function C(A) {
      const E = A[0].intersectionRatio;
      if (E !== l) {
        if (!b)
          return c();
        E ? c(!1, E) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Tn(u, e.getBoundingClientRect()) && c(), b = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, S);
    }
    n.observe(e);
  }
  return c(!0), i;
}
function gi(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Mt(e), p = o || i ? [...u ? $e(u) : [], ...$e(t)] : [];
  p.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const f = u && s ? vi(u, n) : null;
  let h = -1, m = null;
  c && (m = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === u && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = m) == null || S.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let y, d = l ? we(e) : null;
  l && g();
  function g() {
    const x = we(e);
    d && !Tn(d, x) && n(), d = x, y = requestAnimationFrame(g);
  }
  return n(), () => {
    var x;
    p.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), f?.(), (x = m) == null || x.disconnect(), m = null, l && cancelAnimationFrame(y);
  };
}
const yi = Vo, wi = Ho, xi = Fo, Si = Uo, bi = Wo, rn = ko, Ci = zo, Ei = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: hi,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return $o(e, t, {
    ...o,
    platform: i
  });
};
var Pi = typeof document < "u", Ri = function() {
}, ze = Pi ? Dr : Ri;
function Ze(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ze(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ze(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Nn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function on(e, t) {
  const n = Nn(e);
  return Math.round(t * n) / n;
}
function mt(e) {
  const t = a.useRef(e);
  return ze(() => {
    t.current = e;
  }), t;
}
function Ai(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: c
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: u
  } = e, [p, f] = a.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = a.useState(r);
  Ze(h, r) || m(r);
  const [y, d] = a.useState(null), [g, x] = a.useState(null), w = a.useCallback((R) => {
    R !== A.current && (A.current = R, d(R));
  }, []), S = a.useCallback((R) => {
    R !== E.current && (E.current = R, x(R));
  }, []), b = i || y, C = c || g, A = a.useRef(null), E = a.useRef(null), O = a.useRef(p), _ = l != null, N = mt(l), D = mt(o), M = mt(u), j = a.useCallback(() => {
    if (!A.current || !E.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: h
    };
    D.current && (R.platform = D.current), Ei(A.current, E.current, R).then(($) => {
      const K = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      I.current && !Ze(O.current, K) && (O.current = K, Qe.flushSync(() => {
        f(K);
      }));
    });
  }, [h, t, n, D, M]);
  ze(() => {
    u === !1 && O.current.isPositioned && (O.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const I = a.useRef(!1);
  ze(() => (I.current = !0, () => {
    I.current = !1;
  }), []), ze(() => {
    if (b && (A.current = b), C && (E.current = C), b && C) {
      if (N.current)
        return N.current(b, C, j);
      j();
    }
  }, [b, C, j, N, _]);
  const W = a.useMemo(() => ({
    reference: A,
    floating: E,
    setReference: w,
    setFloating: S
  }), [w, S]), T = a.useMemo(() => ({
    reference: b,
    floating: C
  }), [b, C]), L = a.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return R;
    const $ = on(T.floating, p.x), K = on(T.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + $ + "px, " + K + "px)",
      ...Nn(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: K
    };
  }, [n, s, T.floating, p.x, p.y]);
  return a.useMemo(() => ({
    ...p,
    update: j,
    refs: W,
    elements: T,
    floatingStyles: L
  }), [p, j, W, T, L]);
}
const Oi = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? rn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? rn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ti = (e, t) => ({
  ...yi(e),
  options: [e, t]
}), Ni = (e, t) => ({
  ...wi(e),
  options: [e, t]
}), Ii = (e, t) => ({
  ...Ci(e),
  options: [e, t]
}), _i = (e, t) => ({
  ...xi(e),
  options: [e, t]
}), Di = (e, t) => ({
  ...Si(e),
  options: [e, t]
}), Li = (e, t) => ({
  ...bi(e),
  options: [e, t]
}), Mi = (e, t) => ({
  ...Oi(e),
  options: [e, t]
});
// @__NO_SIDE_EFFECTS__
function ji(e) {
  const t = /* @__PURE__ */ $i(e), n = a.forwardRef((r, o) => {
    const { children: i, ...c } = r, s = a.Children.toArray(i), l = s.find(Fi);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: a.isValidElement(u) ? a.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function $i(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (a.isValidElement(o)) {
      const c = Bi(o), s = Wi(i, o.props);
      return o.type !== a.Fragment && (s.ref = r ? be(r, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ki = /* @__PURE__ */ Symbol("radix.slottable");
function Fi(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ki;
}
function Wi(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Bi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Vi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Hi = Vi.reduce((e, t) => {
  const n = /* @__PURE__ */ ji(`Primitive.${t}`), r = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), zi = "Arrow", In = a.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ v.jsx(
    Hi.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ v.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
In.displayName = zi;
var Ui = In;
function Ki(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = a.createContext(c), l = n.length;
    n = [...n, c];
    const u = (f) => {
      const { scope: h, children: m, ...y } = f, d = h?.[e]?.[l] || s, g = a.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ v.jsx(d.Provider, { value: g, children: m });
    };
    u.displayName = i + "Provider";
    function p(f, h) {
      const m = h?.[e]?.[l] || s, y = a.useContext(m);
      if (y) return y;
      if (c !== void 0) return c;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, p];
  }
  const o = () => {
    const i = n.map((c) => a.createContext(c));
    return function(s) {
      const l = s?.[e] || i;
      return a.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, Yi(o, ...t)];
}
function Yi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const c = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  const t = /* @__PURE__ */ Gi(e), n = a.forwardRef((r, o) => {
    const { children: i, ...c } = r, s = a.Children.toArray(i), l = s.find(qi);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: a.isValidElement(u) ? a.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (a.isValidElement(o)) {
      const c = Ji(o), s = Qi(i, o.props);
      return o.type !== a.Fragment && (s.ref = r ? be(r, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Zi = /* @__PURE__ */ Symbol("radix.slottable");
function qi(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zi;
}
function Qi(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ji(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var es = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], _n = es.reduce((e, t) => {
  const n = /* @__PURE__ */ Xi(`Primitive.${t}`), r = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), jt = "Popper", [Dn, Ln] = Ki(jt), [ts, Mn] = Dn(jt), jn = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = a.useState(null);
  return /* @__PURE__ */ v.jsx(ts, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
jn.displayName = jt;
var $n = "PopperAnchor", kn = a.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Mn($n, n), c = a.useRef(null), s = U(t, c), l = a.useRef(null);
    return a.useEffect(() => {
      const u = l.current;
      l.current = r?.current || c.current, u !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ v.jsx(_n.div, { ...o, ref: s });
  }
);
kn.displayName = $n;
var $t = "PopperContent", [ns, rs] = Dn($t), Fn = a.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: c = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: y,
      ...d
    } = e, g = Mn($t, n), [x, w] = a.useState(null), S = U(t, (P) => w(P)), [b, C] = a.useState(null), A = jr(b), E = A?.width ?? 0, O = A?.height ?? 0, _ = r + (i !== "center" ? "-" + i : ""), N = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, D = Array.isArray(u) ? u : [u], M = D.length > 0, j = {
      padding: N,
      boundary: D.filter(is),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: I, floatingStyles: W, placement: T, isPositioned: L, middlewareData: R } = Ai({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...P) => gi(...P, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Ti({ mainAxis: o + O, alignmentAxis: c }),
        l && Ni({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Ii() : void 0,
          ...j
        }),
        l && _i({ ...j }),
        Di({
          ...j,
          apply: ({ elements: P, rects: B, availableWidth: z, availableHeight: k }) => {
            const { width: F, height: V } = B.reference, Z = P.floating.style;
            Z.setProperty("--radix-popper-available-width", `${z}px`), Z.setProperty("--radix-popper-available-height", `${k}px`), Z.setProperty("--radix-popper-anchor-width", `${F}px`), Z.setProperty("--radix-popper-anchor-height", `${V}px`);
          }
        }),
        b && Mi({ element: b, padding: s }),
        ss({ arrowWidth: E, arrowHeight: O }),
        h && Li({ strategy: "referenceHidden", ...j })
      ]
    }), [$, K] = Vn(T), he = ye(y);
    J(() => {
      L && he?.();
    }, [L, he]);
    const De = R.arrow?.x, Le = R.arrow?.y, le = R.arrow?.centerOffset !== 0, [Ce, ve] = a.useState();
    return J(() => {
      x && ve(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: L ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ce,
          "--radix-popper-transform-origin": [
            R.transformOrigin?.x,
            R.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...R.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ v.jsx(
          ns,
          {
            scope: n,
            placedSide: $,
            onArrowChange: C,
            arrowX: De,
            arrowY: Le,
            shouldHideArrow: le,
            children: /* @__PURE__ */ v.jsx(
              _n.div,
              {
                "data-side": $,
                "data-align": K,
                ...d,
                ref: S,
                style: {
                  ...d.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Fn.displayName = $t;
var Wn = "PopperArrow", os = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Bn = a.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = rs(Wn, r), c = os[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ v.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [c]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ v.jsx(
          Ui,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Bn.displayName = Wn;
function is(e) {
  return e !== null;
}
var ss = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, c = o.arrow?.centerOffset !== 0, s = c ? 0 : e.arrowWidth, l = c ? 0 : e.arrowHeight, [u, p] = Vn(n), f = { start: "0%", center: "50%", end: "100%" }[p], h = (o.arrow?.x ?? 0) + s / 2, m = (o.arrow?.y ?? 0) + l / 2;
    let y = "", d = "";
    return u === "bottom" ? (y = c ? f : `${h}px`, d = `${-l}px`) : u === "top" ? (y = c ? f : `${h}px`, d = `${r.floating.height + l}px`) : u === "right" ? (y = `${-l}px`, d = c ? f : `${m}px`) : u === "left" && (y = `${r.floating.width + l}px`, d = c ? f : `${m}px`), { data: { x: y, y: d } };
  }
});
function Vn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var cs = jn, as = kn, ls = Fn, us = Bn;
// @__NO_SIDE_EFFECTS__
function fs(e) {
  const t = /* @__PURE__ */ ds(e), n = a.forwardRef((r, o) => {
    const { children: i, ...c } = r, s = a.Children.toArray(i), l = s.find(ms);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: a.isValidElement(u) ? a.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ds(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (a.isValidElement(o)) {
      const c = vs(o), s = hs(i, o.props);
      return o.type !== a.Fragment && (s.ref = r ? be(r, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ps = /* @__PURE__ */ Symbol("radix.slottable");
function ms(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ps;
}
function hs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vs(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var gs = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ys = gs.reduce((e, t) => {
  const n = /* @__PURE__ */ fs(`Primitive.${t}`), r = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), ws = "Portal", Hn = a.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, i] = a.useState(!1);
  J(() => i(!0), []);
  const c = n || o && globalThis?.document?.body;
  return c ? Mr.createPortal(/* @__PURE__ */ v.jsx(ys.div, { ...r, ref: t }), c) : null;
});
Hn.displayName = ws;
// @__NO_SIDE_EFFECTS__
function zn(e) {
  const t = /* @__PURE__ */ xs(e), n = a.forwardRef((r, o) => {
    const { children: i, ...c } = r, s = a.Children.toArray(i), l = s.find(bs);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: a.isValidElement(u) ? a.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (a.isValidElement(o)) {
      const c = Es(o), s = Cs(i, o.props);
      return o.type !== a.Fragment && (s.ref = r ? be(r, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ss = /* @__PURE__ */ Symbol("radix.slottable");
function bs(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ss;
}
function Cs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Es(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ps = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], G = Ps.reduce((e, t) => {
  const n = /* @__PURE__ */ zn(`Primitive.${t}`), r = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
// @__NO_SIDE_EFFECTS__
function Rs(e) {
  const t = /* @__PURE__ */ As(e), n = a.forwardRef((r, o) => {
    const { children: i, ...c } = r, s = a.Children.toArray(i), l = s.find(Ts);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: a.isValidElement(u) ? a.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...c, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function As(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (a.isValidElement(o)) {
      const c = Is(o), s = Ns(i, o.props);
      return o.type !== a.Fragment && (s.ref = r ? be(r, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Os = /* @__PURE__ */ Symbol("radix.slottable");
function Ts(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Os;
}
function Ns(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Is(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _s = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ds = _s.reduce((e, t) => {
  const n = /* @__PURE__ */ Rs(`Primitive.${t}`), r = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Un = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Ls = "VisuallyHidden", Ms = a.forwardRef(
  (e, t) => /* @__PURE__ */ v.jsx(
    Ds.span,
    {
      ...e,
      ref: t,
      style: { ...Un, ...e.style }
    }
  )
);
Ms.displayName = Ls;
var js = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ee = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), Be = {}, ht = 0, Kn = function(e) {
  return e && (e.host || Kn(e.parentNode));
}, $s = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Kn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ks = function(e, t, n, r) {
  var o = $s(t, Array.isArray(e) ? e : [e]);
  Be[n] || (Be[n] = /* @__PURE__ */ new WeakMap());
  var i = Be[n], c = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var p = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (s.has(h))
        p(h);
      else
        try {
          var m = h.getAttribute(r), y = m !== null && m !== "false", d = (Ee.get(h) || 0) + 1, g = (i.get(h) || 0) + 1;
          Ee.set(h, d), i.set(h, g), c.push(h), d === 1 && y && We.set(h, !0), g === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return p(t), s.clear(), ht++, function() {
    c.forEach(function(f) {
      var h = Ee.get(f) - 1, m = i.get(f) - 1;
      Ee.set(f, h), i.set(f, m), h || (We.has(f) || f.removeAttribute(r), We.delete(f)), m || f.removeAttribute(n);
    }), ht--, ht || (Ee = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), Be = {});
  };
}, Fs = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = js(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ks(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ne = function() {
  return ne = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ne.apply(this, arguments);
};
function Yn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ws(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ue = "right-scroll-bar-position", Ke = "width-before-scroll-bar", Bs = "with-scroll-bars-hidden", Vs = "--removed-body-scroll-bar-size";
function vt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Hs(e, t) {
  var n = Lr(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var zs = typeof window < "u" ? a.useLayoutEffect : a.useEffect, sn = /* @__PURE__ */ new WeakMap();
function Us(e, t) {
  var n = Hs(null, function(r) {
    return e.forEach(function(o) {
      return vt(o, r);
    });
  });
  return zs(function() {
    var r = sn.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), c = n.current;
      o.forEach(function(s) {
        i.has(s) || vt(s, null);
      }), i.forEach(function(s) {
        o.has(s) || vt(s, c);
      });
    }
    sn.set(n, e);
  }, [e]), n;
}
function Ks(e) {
  return e;
}
function Ys(e, t) {
  t === void 0 && (t = Ks);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var c = t(i, r);
      return n.push(c), function() {
        n = n.filter(function(s) {
          return s !== c;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var c = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), c = n;
      }
      var l = function() {
        var p = c;
        c = [], p.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(p) {
          c.push(p), u();
        },
        filter: function(p) {
          return c = c.filter(p), n;
        }
      };
    }
  };
  return o;
}
function Xs(e) {
  e === void 0 && (e = {});
  var t = Ys(null);
  return t.options = ne({ async: !0, ssr: !1 }, e), t;
}
var Xn = function(e) {
  var t = e.sideCar, n = Yn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return a.createElement(r, ne({}, n));
};
Xn.isSideCarExport = !0;
function Gs(e, t) {
  return e.useMedium(t), Xn;
}
var Gn = Xs(), gt = function() {
}, rt = a.forwardRef(function(e, t) {
  var n = a.useRef(null), r = a.useState({
    onScrollCapture: gt,
    onWheelCapture: gt,
    onTouchMoveCapture: gt
  }), o = r[0], i = r[1], c = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, p = e.enabled, f = e.shards, h = e.sideCar, m = e.noRelative, y = e.noIsolation, d = e.inert, g = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, S = e.gapMode, b = Yn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, A = Us([n, t]), E = ne(ne({}, b), o);
  return a.createElement(
    a.Fragment,
    null,
    p && a.createElement(C, { sideCar: Gn, removeScrollBar: u, shards: f, noRelative: m, noIsolation: y, inert: d, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: S }),
    c ? a.cloneElement(a.Children.only(s), ne(ne({}, E), { ref: A })) : a.createElement(w, ne({}, E, { className: l, ref: A }), s)
  );
});
rt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
rt.classNames = {
  fullWidth: Ke,
  zeroRight: Ue
};
var Zs = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function qs() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Zs();
  return t && e.setAttribute("nonce", t), e;
}
function Qs(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Js(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ec = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = qs()) && (Qs(t, n), Js(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, tc = function() {
  var e = ec();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Zn = function() {
  var e = tc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, nc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yt = function(e) {
  return parseInt(e || "", 10) || 0;
}, rc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yt(n), yt(r), yt(o)];
}, oc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return nc;
  var t = rc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ic = Zn(), Oe = "data-scroll-locked", sc = function(e, t, n, r) {
  var o = e.left, i = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Bs, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Oe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ue, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ke, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ue, " .").concat(Ue, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ke, " .").concat(Ke, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Oe, `] {
    `).concat(Vs, ": ").concat(s, `px;
  }
`);
}, cn = function() {
  var e = parseInt(document.body.getAttribute(Oe) || "0", 10);
  return isFinite(e) ? e : 0;
}, cc = function() {
  a.useEffect(function() {
    return document.body.setAttribute(Oe, (cn() + 1).toString()), function() {
      var e = cn() - 1;
      e <= 0 ? document.body.removeAttribute(Oe) : document.body.setAttribute(Oe, e.toString());
    };
  }, []);
}, ac = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  cc();
  var i = a.useMemo(function() {
    return oc(o);
  }, [o]);
  return a.createElement(ic, { styles: sc(i, !t, o, n ? "" : "!important") });
}, Ct = !1;
if (typeof window < "u")
  try {
    var Ve = Object.defineProperty({}, "passive", {
      get: function() {
        return Ct = !0, !0;
      }
    });
    window.addEventListener("test", Ve, Ve), window.removeEventListener("test", Ve, Ve);
  } catch {
    Ct = !1;
  }
var Pe = Ct ? { passive: !1 } : !1, lc = function(e) {
  return e.tagName === "TEXTAREA";
}, qn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !lc(e) && n[t] === "visible")
  );
}, uc = function(e) {
  return qn(e, "overflowY");
}, fc = function(e) {
  return qn(e, "overflowX");
}, an = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Qn(e, r);
    if (o) {
      var i = Jn(e, r), c = i[1], s = i[2];
      if (c > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, dc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, pc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Qn = function(e, t) {
  return e === "v" ? uc(t) : fc(t);
}, Jn = function(e, t) {
  return e === "v" ? dc(t) : pc(t);
}, mc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, hc = function(e, t, n, r, o) {
  var i = mc(e, window.getComputedStyle(t).direction), c = i * r, s = n.target, l = t.contains(s), u = !1, p = c > 0, f = 0, h = 0;
  do {
    if (!s)
      break;
    var m = Jn(e, s), y = m[0], d = m[1], g = m[2], x = d - g - i * y;
    (y || x) && Qn(e, s) && (f += x, h += y);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(h) < 1) && (u = !0), u;
}, He = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ln = function(e) {
  return [e.deltaX, e.deltaY];
}, un = function(e) {
  return e && "current" in e ? e.current : e;
}, vc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, gc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, yc = 0, Re = [];
function wc(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), r = a.useRef(), o = a.useState(yc++)[0], i = a.useState(Zn)[0], c = a.useRef(e);
  a.useEffect(function() {
    c.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var d = Ws([e.lockRef.current], (e.shards || []).map(un), !0).filter(Boolean);
      return d.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), d.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = a.useCallback(function(d, g) {
    if ("touches" in d && d.touches.length === 2 || d.type === "wheel" && d.ctrlKey)
      return !c.current.allowPinchZoom;
    var x = He(d), w = n.current, S = "deltaX" in d ? d.deltaX : w[0] - x[0], b = "deltaY" in d ? d.deltaY : w[1] - x[1], C, A = d.target, E = Math.abs(S) > Math.abs(b) ? "h" : "v";
    if ("touches" in d && E === "h" && A.type === "range")
      return !1;
    var O = window.getSelection(), _ = O && O.anchorNode, N = _ ? _ === A || _.contains(A) : !1;
    if (N)
      return !1;
    var D = an(E, A);
    if (!D)
      return !0;
    if (D ? C = E : (C = E === "v" ? "h" : "v", D = an(E, A)), !D)
      return !1;
    if (!r.current && "changedTouches" in d && (S || b) && (r.current = C), !C)
      return !0;
    var M = r.current || C;
    return hc(M, g, d, M === "h" ? S : b);
  }, []), l = a.useCallback(function(d) {
    var g = d;
    if (!(!Re.length || Re[Re.length - 1] !== i)) {
      var x = "deltaY" in g ? ln(g) : He(g), w = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && vc(C.delta, x);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var S = (c.current.shards || []).map(un).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), b = S.length > 0 ? s(g, S[0]) : !c.current.noIsolation;
        b && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = a.useCallback(function(d, g, x, w) {
    var S = { name: d, delta: g, target: x, should: w, shadowParent: xc(x) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== S;
      });
    }, 1);
  }, []), p = a.useCallback(function(d) {
    n.current = He(d), r.current = void 0;
  }, []), f = a.useCallback(function(d) {
    u(d.type, ln(d), d.target, s(d, e.lockRef.current));
  }, []), h = a.useCallback(function(d) {
    u(d.type, He(d), d.target, s(d, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return Re.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, Pe), document.addEventListener("touchmove", l, Pe), document.addEventListener("touchstart", p, Pe), function() {
      Re = Re.filter(function(d) {
        return d !== i;
      }), document.removeEventListener("wheel", l, Pe), document.removeEventListener("touchmove", l, Pe), document.removeEventListener("touchstart", p, Pe);
    };
  }, []);
  var m = e.removeScrollBar, y = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    y ? a.createElement(i, { styles: gc(o) }) : null,
    m ? a.createElement(ac, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function xc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Sc = Gs(Gn, wc);
var er = a.forwardRef(function(e, t) {
  return a.createElement(rt, ne({}, e, { ref: t, sideCar: Sc }));
});
er.classNames = rt.classNames;
var bc = [" ", "Enter", "ArrowUp", "ArrowDown"], Cc = [" ", "Enter"], xe = "Select", [ot, it, Ec] = Fr(xe), [_e] = Ur(xe, [
  Ec,
  Ln
]), st = Ln(), [Pc, pe] = _e(xe), [Rc, Ac] = _e(xe), tr = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: c,
    defaultValue: s,
    onValueChange: l,
    dir: u,
    name: p,
    autoComplete: f,
    disabled: h,
    required: m,
    form: y
  } = e, d = st(t), [g, x] = a.useState(null), [w, S] = a.useState(null), [b, C] = a.useState(!1), A = kr(u), [E, O] = Ft({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: xe
  }), [_, N] = Ft({
    prop: c,
    defaultProp: s,
    onChange: l,
    caller: xe
  }), D = a.useRef(null), M = g ? y || !!g.closest("form") : !0, [j, I] = a.useState(/* @__PURE__ */ new Set()), W = Array.from(j).map((T) => T.props.value).join(";");
  return /* @__PURE__ */ v.jsx(cs, { ...d, children: /* @__PURE__ */ v.jsxs(
    Pc,
    {
      required: m,
      scope: t,
      trigger: g,
      onTriggerChange: x,
      valueNode: w,
      onValueNodeChange: S,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: C,
      contentId: Tt(),
      value: _,
      onValueChange: N,
      open: E,
      onOpenChange: O,
      dir: A,
      triggerPointerDownPosRef: D,
      disabled: h,
      children: [
        /* @__PURE__ */ v.jsx(ot.Provider, { scope: t, children: /* @__PURE__ */ v.jsx(
          Rc,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: a.useCallback((T) => {
              I((L) => new Set(L).add(T));
            }, []),
            onNativeOptionRemove: a.useCallback((T) => {
              I((L) => {
                const R = new Set(L);
                return R.delete(T), R;
              });
            }, []),
            children: n
          }
        ) }),
        M ? /* @__PURE__ */ v.jsxs(
          Pr,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: _,
            onChange: (T) => N(T.target.value),
            disabled: h,
            form: y,
            children: [
              _ === void 0 ? /* @__PURE__ */ v.jsx("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          W
        ) : null
      ]
    }
  ) });
};
tr.displayName = xe;
var nr = "SelectTrigger", rr = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = st(n), c = pe(nr, n), s = c.disabled || r, l = U(t, c.onTriggerChange), u = it(n), p = a.useRef("touch"), [f, h, m] = Ar((d) => {
      const g = u().filter((S) => !S.disabled), x = g.find((S) => S.value === c.value), w = Or(g, d, x);
      w !== void 0 && c.onValueChange(w.value);
    }), y = (d) => {
      s || (c.onOpenChange(!0), m()), d && (c.triggerPointerDownPosRef.current = {
        x: Math.round(d.pageX),
        y: Math.round(d.pageY)
      });
    };
    return /* @__PURE__ */ v.jsx(as, { asChild: !0, ...i, children: /* @__PURE__ */ v.jsx(
      G.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": c.contentId,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": Rr(c.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: H(o.onClick, (d) => {
          d.currentTarget.focus(), p.current !== "mouse" && y(d);
        }),
        onPointerDown: H(o.onPointerDown, (d) => {
          p.current = d.pointerType;
          const g = d.target;
          g.hasPointerCapture(d.pointerId) && g.releasePointerCapture(d.pointerId), d.button === 0 && d.ctrlKey === !1 && d.pointerType === "mouse" && (y(d), d.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (d) => {
          const g = f.current !== "";
          !(d.ctrlKey || d.altKey || d.metaKey) && d.key.length === 1 && h(d.key), !(g && d.key === " ") && bc.includes(d.key) && (y(), d.preventDefault());
        })
      }
    ) });
  }
);
rr.displayName = nr;
var or = "SelectValue", ir = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: c = "", ...s } = e, l = pe(or, n), { onValueNodeHasChildrenChange: u } = l, p = i !== void 0, f = U(t, l.onValueNodeChange);
    return J(() => {
      u(p);
    }, [u, p]), /* @__PURE__ */ v.jsx(
      G.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: Rr(l.value) ? /* @__PURE__ */ v.jsx(v.Fragment, { children: c }) : i
      }
    );
  }
);
ir.displayName = or;
var Oc = "SelectIcon", sr = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ v.jsx(G.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
sr.displayName = Oc;
var Tc = "SelectPortal", cr = (e) => /* @__PURE__ */ v.jsx(Hn, { asChild: !0, ...e });
cr.displayName = Tc;
var Se = "SelectContent", ar = a.forwardRef(
  (e, t) => {
    const n = pe(Se, e.__scopeSelect), [r, o] = a.useState();
    if (J(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Qe.createPortal(
        /* @__PURE__ */ v.jsx(lr, { scope: e.__scopeSelect, children: /* @__PURE__ */ v.jsx(ot.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ v.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ v.jsx(ur, { ...e, ref: t });
  }
);
ar.displayName = Se;
var Q = 10, [lr, me] = _e(Se), Nc = "SelectContentImpl", Ic = /* @__PURE__ */ zn("SelectContent.RemoveScroll"), ur = a.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: u,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: y,
      hideWhenDetached: d,
      avoidCollisions: g,
      //
      ...x
    } = e, w = pe(Se, n), [S, b] = a.useState(null), [C, A] = a.useState(null), E = U(t, (P) => b(P)), [O, _] = a.useState(null), [N, D] = a.useState(
      null
    ), M = it(n), [j, I] = a.useState(!1), W = a.useRef(!1);
    a.useEffect(() => {
      if (S) return Fs(S);
    }, [S]), lo();
    const T = a.useCallback(
      (P) => {
        const [B, ...z] = M().map((V) => V.ref.current), [k] = z.slice(-1), F = document.activeElement;
        for (const V of P)
          if (V === F || (V?.scrollIntoView({ block: "nearest" }), V === B && C && (C.scrollTop = 0), V === k && C && (C.scrollTop = C.scrollHeight), V?.focus(), document.activeElement !== F)) return;
      },
      [M, C]
    ), L = a.useCallback(
      () => T([O, S]),
      [T, O, S]
    );
    a.useEffect(() => {
      j && L();
    }, [j, L]);
    const { onOpenChange: R, triggerPointerDownPosRef: $ } = w;
    a.useEffect(() => {
      if (S) {
        let P = { x: 0, y: 0 };
        const B = (k) => {
          P = {
            x: Math.abs(Math.round(k.pageX) - ($.current?.x ?? 0)),
            y: Math.abs(Math.round(k.pageY) - ($.current?.y ?? 0))
          };
        }, z = (k) => {
          P.x <= 10 && P.y <= 10 ? k.preventDefault() : S.contains(k.target) || R(!1), document.removeEventListener("pointermove", B), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", B), document.addEventListener("pointerup", z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", B), document.removeEventListener("pointerup", z, { capture: !0 });
        };
      }
    }, [S, R, $]), a.useEffect(() => {
      const P = () => R(!1);
      return window.addEventListener("blur", P), window.addEventListener("resize", P), () => {
        window.removeEventListener("blur", P), window.removeEventListener("resize", P);
      };
    }, [R]);
    const [K, he] = Ar((P) => {
      const B = M().filter((F) => !F.disabled), z = B.find((F) => F.ref.current === document.activeElement), k = Or(B, P, z);
      k && setTimeout(() => k.ref.current.focus());
    }), De = a.useCallback(
      (P, B, z) => {
        const k = !W.current && !z;
        (w.value !== void 0 && w.value === B || k) && (_(P), k && (W.current = !0));
      },
      [w.value]
    ), Le = a.useCallback(() => S?.focus(), [S]), le = a.useCallback(
      (P, B, z) => {
        const k = !W.current && !z;
        (w.value !== void 0 && w.value === B || k) && D(P);
      },
      [w.value]
    ), Ce = r === "popper" ? Et : fr, ve = Ce === Et ? {
      side: s,
      sideOffset: l,
      align: u,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: y,
      hideWhenDetached: d,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ v.jsx(
      lr,
      {
        scope: n,
        content: S,
        viewport: C,
        onViewportChange: A,
        itemRefCallback: De,
        selectedItem: O,
        onItemLeave: Le,
        itemTextRefCallback: le,
        focusSelectedItem: L,
        selectedItemText: N,
        position: r,
        isPositioned: j,
        searchRef: K,
        children: /* @__PURE__ */ v.jsx(er, { as: Ic, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
          yn,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (P) => {
              P.preventDefault();
            },
            onUnmountAutoFocus: H(o, (P) => {
              w.trigger?.focus({ preventScroll: !0 }), P.preventDefault();
            }),
            children: /* @__PURE__ */ v.jsx(
              vn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: c,
                onFocusOutside: (P) => P.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ v.jsx(
                  Ce,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (P) => P.preventDefault(),
                    ...x,
                    ...ve,
                    onPlaced: () => I(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: H(x.onKeyDown, (P) => {
                      const B = P.ctrlKey || P.altKey || P.metaKey;
                      if (P.key === "Tab" && P.preventDefault(), !B && P.key.length === 1 && he(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
                        let k = M().filter((F) => !F.disabled).map((F) => F.ref.current);
                        if (["ArrowUp", "End"].includes(P.key) && (k = k.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
                          const F = P.target, V = k.indexOf(F);
                          k = k.slice(V + 1);
                        }
                        setTimeout(() => T(k)), P.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ur.displayName = Nc;
var _c = "SelectItemAlignedPosition", fr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = pe(Se, n), c = me(Se, n), [s, l] = a.useState(null), [u, p] = a.useState(null), f = U(t, (E) => p(E)), h = it(n), m = a.useRef(!1), y = a.useRef(!0), { viewport: d, selectedItem: g, selectedItemText: x, focusSelectedItem: w } = c, S = a.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && d && g && x) {
      const E = i.trigger.getBoundingClientRect(), O = u.getBoundingClientRect(), _ = i.valueNode.getBoundingClientRect(), N = x.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const F = N.left - O.left, V = _.left - F, Z = E.left - V, ge = E.width + Z, ct = Math.max(ge, O.width), at = window.innerWidth - Q, lt = Wt(V, [
          Q,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Q, at - ct)
        ]);
        s.style.minWidth = ge + "px", s.style.left = lt + "px";
      } else {
        const F = O.right - N.right, V = window.innerWidth - _.right - F, Z = window.innerWidth - E.right - V, ge = E.width + Z, ct = Math.max(ge, O.width), at = window.innerWidth - Q, lt = Wt(V, [
          Q,
          Math.max(Q, at - ct)
        ]);
        s.style.minWidth = ge + "px", s.style.right = lt + "px";
      }
      const D = h(), M = window.innerHeight - Q * 2, j = d.scrollHeight, I = window.getComputedStyle(u), W = parseInt(I.borderTopWidth, 10), T = parseInt(I.paddingTop, 10), L = parseInt(I.borderBottomWidth, 10), R = parseInt(I.paddingBottom, 10), $ = W + T + j + R + L, K = Math.min(g.offsetHeight * 5, $), he = window.getComputedStyle(d), De = parseInt(he.paddingTop, 10), Le = parseInt(he.paddingBottom, 10), le = E.top + E.height / 2 - Q, Ce = M - le, ve = g.offsetHeight / 2, P = g.offsetTop + ve, B = W + T + P, z = $ - B;
      if (B <= le) {
        const F = D.length > 0 && g === D[D.length - 1].ref.current;
        s.style.bottom = "0px";
        const V = u.clientHeight - d.offsetTop - d.offsetHeight, Z = Math.max(
          Ce,
          ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (F ? Le : 0) + V + L
        ), ge = B + Z;
        s.style.height = ge + "px";
      } else {
        const F = D.length > 0 && g === D[0].ref.current;
        s.style.top = "0px";
        const Z = Math.max(
          le,
          W + d.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (F ? De : 0) + ve
        ) + z;
        s.style.height = Z + "px", d.scrollTop = B - le + d.offsetTop;
      }
      s.style.margin = `${Q}px 0`, s.style.minHeight = K + "px", s.style.maxHeight = M + "px", r?.(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    s,
    u,
    d,
    g,
    x,
    i.dir,
    r
  ]);
  J(() => S(), [S]);
  const [b, C] = a.useState();
  J(() => {
    u && C(window.getComputedStyle(u).zIndex);
  }, [u]);
  const A = a.useCallback(
    (E) => {
      E && y.current === !0 && (S(), w?.(), y.current = !1);
    },
    [S, w]
  );
  return /* @__PURE__ */ v.jsx(
    Lc,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: b
          },
          children: /* @__PURE__ */ v.jsx(
            G.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
fr.displayName = _c;
var Dc = "SelectPopperPosition", Et = a.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Q,
    ...i
  } = e, c = st(n);
  return /* @__PURE__ */ v.jsx(
    ls,
    {
      ...c,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Et.displayName = Dc;
var [Lc, kt] = _e(Se, {}), Pt = "SelectViewport", dr = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = me(Pt, n), c = kt(Pt, n), s = U(t, i.onViewportChange), l = a.useRef(0);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ v.jsx(ot.Slot, { scope: n, children: /* @__PURE__ */ v.jsx(
        G.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: H(o.onScroll, (u) => {
            const p = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = c;
            if (h?.current && f) {
              const m = Math.abs(l.current - p.scrollTop);
              if (m > 0) {
                const y = window.innerHeight - Q * 2, d = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), x = Math.max(d, g);
                if (x < y) {
                  const w = x + m, S = Math.min(y, w), b = w - S;
                  f.style.height = S + "px", f.style.bottom === "0px" && (p.scrollTop = b > 0 ? b : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
dr.displayName = Pt;
var pr = "SelectGroup", [Mc, jc] = _e(pr), mr = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Tt();
    return /* @__PURE__ */ v.jsx(Mc, { scope: n, id: o, children: /* @__PURE__ */ v.jsx(G.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
mr.displayName = pr;
var hr = "SelectLabel", vr = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = jc(hr, n);
    return /* @__PURE__ */ v.jsx(G.div, { id: o.id, ...r, ref: t });
  }
);
vr.displayName = hr;
var qe = "SelectItem", [$c, gr] = _e(qe), yr = a.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...c
    } = e, s = pe(qe, n), l = me(qe, n), u = s.value === r, [p, f] = a.useState(i ?? ""), [h, m] = a.useState(!1), y = U(
      t,
      (w) => l.itemRefCallback?.(w, r, o)
    ), d = Tt(), g = a.useRef("touch"), x = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ v.jsx(
      $c,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: d,
        isSelected: u,
        onItemTextChange: a.useCallback((w) => {
          f((S) => S || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ v.jsx(
          ot.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ v.jsx(
              G.div,
              {
                role: "option",
                "aria-labelledby": d,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...c,
                ref: y,
                onFocus: H(c.onFocus, () => m(!0)),
                onBlur: H(c.onBlur, () => m(!1)),
                onClick: H(c.onClick, () => {
                  g.current !== "mouse" && x();
                }),
                onPointerUp: H(c.onPointerUp, () => {
                  g.current === "mouse" && x();
                }),
                onPointerDown: H(c.onPointerDown, (w) => {
                  g.current = w.pointerType;
                }),
                onPointerMove: H(c.onPointerMove, (w) => {
                  g.current = w.pointerType, o ? l.onItemLeave?.() : g.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(c.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: H(c.onKeyDown, (w) => {
                  l.searchRef?.current !== "" && w.key === " " || (Cc.includes(w.key) && x(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
yr.displayName = qe;
var Me = "SelectItemText", wr = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, c = pe(Me, n), s = me(Me, n), l = gr(Me, n), u = Ac(Me, n), [p, f] = a.useState(null), h = U(
      t,
      (x) => f(x),
      l.onItemTextChange,
      (x) => s.itemTextRefCallback?.(x, l.value, l.disabled)
    ), m = p?.textContent, y = a.useMemo(
      () => /* @__PURE__ */ v.jsx("option", { value: l.value, disabled: l.disabled, children: m }, l.value),
      [l.disabled, l.value, m]
    ), { onNativeOptionAdd: d, onNativeOptionRemove: g } = u;
    return J(() => (d(y), () => g(y)), [d, g, y]), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(G.span, { id: l.textId, ...i, ref: h }),
      l.isSelected && c.valueNode && !c.valueNodeHasChildren ? Qe.createPortal(i.children, c.valueNode) : null
    ] });
  }
);
wr.displayName = Me;
var xr = "SelectItemIndicator", Sr = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return gr(xr, n).isSelected ? /* @__PURE__ */ v.jsx(G.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Sr.displayName = xr;
var Rt = "SelectScrollUpButton", br = a.forwardRef((e, t) => {
  const n = me(Rt, e.__scopeSelect), r = kt(Rt, e.__scopeSelect), [o, i] = a.useState(!1), c = U(t, r.onScrollButtonChange);
  return J(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = l.scrollTop > 0;
        i(u);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ v.jsx(
    Er,
    {
      ...e,
      ref: c,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
br.displayName = Rt;
var At = "SelectScrollDownButton", Cr = a.forwardRef((e, t) => {
  const n = me(At, e.__scopeSelect), r = kt(At, e.__scopeSelect), [o, i] = a.useState(!1), c = U(t, r.onScrollButtonChange);
  return J(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = l.scrollHeight - l.clientHeight, p = Math.ceil(l.scrollTop) < u;
        i(p);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ v.jsx(
    Er,
    {
      ...e,
      ref: c,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Cr.displayName = At;
var Er = a.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = me("SelectScrollButton", n), c = a.useRef(null), s = it(n), l = a.useCallback(() => {
    c.current !== null && (window.clearInterval(c.current), c.current = null);
  }, []);
  return a.useEffect(() => () => l(), [l]), J(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ v.jsx(
    G.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: H(o.onPointerDown, () => {
        c.current === null && (c.current = window.setInterval(r, 50));
      }),
      onPointerMove: H(o.onPointerMove, () => {
        i.onItemLeave?.(), c.current === null && (c.current = window.setInterval(r, 50));
      }),
      onPointerLeave: H(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), kc = "SelectSeparator", Fc = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ v.jsx(G.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Fc.displayName = kc;
var Ot = "SelectArrow", Wc = a.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = st(n), i = pe(Ot, n), c = me(Ot, n);
    return i.open && c.position === "popper" ? /* @__PURE__ */ v.jsx(us, { ...o, ...r, ref: t }) : null;
  }
);
Wc.displayName = Ot;
var Bc = "SelectBubbleInput", Pr = a.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = a.useRef(null), i = U(r, o), c = $r(t);
    return a.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (c !== t && p) {
        const f = new Event("change", { bubbles: !0 });
        p.call(s, t), s.dispatchEvent(f);
      }
    }, [c, t]), /* @__PURE__ */ v.jsx(
      G.select,
      {
        ...n,
        style: { ...Un, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
Pr.displayName = Bc;
function Rr(e) {
  return e === "" || e === void 0;
}
function Ar(e) {
  const t = ye(e), n = a.useRef(""), r = a.useRef(0), o = a.useCallback(
    (c) => {
      const s = n.current + c;
      t(s), (function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [t]
  ), i = a.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return a.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Or(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let c = Vc(e, Math.max(i, 0));
  o.length === 1 && (c = c.filter((u) => u !== n));
  const l = c.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Vc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Hc = tr, zc = rr, Uc = ir, Kc = sr, Yc = cr, Xc = ar, Gc = dr, Zc = mr, qc = vr, Qc = yr, Jc = wr, ea = Sr, ta = br, na = Cr;
function ra({
  ...e
}) {
  return /* @__PURE__ */ v.jsx(Hc, { "data-slot": "select", ...e });
}
function oa({
  ...e
}) {
  return /* @__PURE__ */ v.jsx(Zc, { "data-slot": "select-group", ...e });
}
function ia({
  ...e
}) {
  return /* @__PURE__ */ v.jsx(Uc, { "data-slot": "select-value", ...e });
}
function sa({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ v.jsxs(
    zc,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: q(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ v.jsx(Kc, { asChild: !0, children: /* @__PURE__ */ v.jsx(pn, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function ca({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ v.jsx(Yc, { children: /* @__PURE__ */ v.jsxs(
    Xc,
    {
      "data-slot": "select-content",
      className: q(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ v.jsx(la, {}),
        /* @__PURE__ */ v.jsx(
          Gc,
          {
            className: q(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ v.jsx(ua, {})
      ]
    }
  ) });
}
function aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ v.jsx(
    qc,
    {
      "data-slot": "select-label",
      className: q("px-2 py-1.5 text-xs text-muted-foreground", e),
      ...t
    }
  );
}
function fn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ v.jsxs(
    Qc,
    {
      "data-slot": "select-item",
      className: q(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ v.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(ea, { children: /* @__PURE__ */ v.jsx(Wr, { className: "size-4" }) }) }),
        /* @__PURE__ */ v.jsx(Jc, { children: t })
      ]
    }
  );
}
function la({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ v.jsx(
    ta,
    {
      "data-slot": "select-scroll-up-button",
      className: q(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ v.jsx(zr, { className: "size-4" })
    }
  );
}
function ua({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ v.jsx(
    na,
    {
      "data-slot": "select-scroll-down-button",
      className: q(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ v.jsx(pn, { className: "size-4" })
    }
  );
}
function Sa({
  label: e,
  description: t,
  classNames: n,
  className: r,
  placeholder: o,
  options: i,
  ...c
}) {
  const s = Tr(), u = _r(s.store, (f) => f.meta.errors).length > 0, p = Array.isArray(i) && "items" in i[0];
  return /* @__PURE__ */ v.jsxs(
    Nr,
    {
      "data-invalid": u,
      className: q("flex flex-col gap-1.5", r, n?.field),
      children: [
        /* @__PURE__ */ v.jsx(
          Br,
          {
            required: c.required,
            label: e,
            description: t,
            classNames: {
              label: q("order-1", n?.label),
              description: q("order-3", n?.description)
            },
            children: /* @__PURE__ */ v.jsxs(
              ra,
              {
                name: s.name,
                value: s.state.value,
                onValueChange: s.handleChange,
                ...c,
                children: [
                  /* @__PURE__ */ v.jsx(
                    sa,
                    {
                      "data-invalid": u,
                      className: q(
                        "order-2 grow cursor-pointer",
                        n?.selectTriger
                      ),
                      children: /* @__PURE__ */ v.jsx(ia, { placeholder: o ?? "Select..." })
                    }
                  ),
                  /* @__PURE__ */ v.jsx(ca, { className: "grow", align: "start", children: p ? i.map((f, h) => /* @__PURE__ */ v.jsxs(oa, { children: [
                    f.label && /* @__PURE__ */ v.jsx(aa, { children: f.label }),
                    f.items.map((m) => /* @__PURE__ */ v.jsx(
                      fn,
                      {
                        value: m.value,
                        className: "cursor-pointer",
                        children: m.label
                      },
                      m.value
                    ))
                  ] }, h)) : i.map((f) => /* @__PURE__ */ v.jsx(
                    fn,
                    {
                      value: f.value,
                      className: "cursor-pointer",
                      children: f.label
                    },
                    f.value
                  )) })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx(Ir, { className: q("order-4", n?.validate) })
      ]
    }
  );
}
export {
  Sa as default
};
