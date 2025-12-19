import { j as d, b as G, d as _, c as C, u as pe } from "./index-C9JT7kwH.js";
import { f as fe, c as me, F as ve, d as xe, g as be, e as ge, a as Re } from "./FieldErrorI18nMessage-BRutfuEW.js";
import { useStore as he } from "@tanstack/react-form";
import { L as Ce } from "./LabelAndDescriptionFieldForm-6-9J9yx3.js";
import * as s from "react";
import { c as y, b as M, d as ye, u as Se } from "./index-CyPcatiC.js";
import "react-dom";
import { c as Ie, b as Ee, a as L, u as we } from "./index-Dd3xWHvv.js";
import { P as _e } from "./index-QkWvXSgN.js";
import { c as Fe } from "./createLucideIcon-D4r5Phnh.js";
const Pe = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], je = Fe("circle", Pe);
function V(e, t = []) {
  let o = [];
  function n(a, i) {
    const c = s.createContext(i), u = o.length;
    o = [...o, i];
    const l = (p) => {
      const { scope: b, children: v, ...m } = p, g = b?.[e]?.[u] || c, x = s.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ d.jsx(g.Provider, { value: x, children: v });
    };
    l.displayName = a + "Provider";
    function f(p, b) {
      const v = b?.[e]?.[u] || c, m = s.useContext(v);
      if (m) return m;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [l, f];
  }
  const r = () => {
    const a = o.map((i) => s.createContext(i));
    return function(c) {
      const u = c?.[e] || a;
      return s.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: u } }),
        [c, u]
      );
    };
  };
  return r.scopeName = e, [n, Ne(r, ...t)];
}
function Ne(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const n = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(a) {
      const i = n.reduce((c, { useScope: u, scopeName: l }) => {
        const p = u(a)[`__scope${l}`];
        return { ...c, ...p };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return o.scopeName = t.scopeName, o;
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  const t = /* @__PURE__ */ Te(e), o = s.forwardRef((n, r) => {
    const { children: a, ...i } = n, c = s.Children.toArray(a), u = c.find(Oe);
    if (u) {
      const l = u.props.children, f = c.map((p) => p === u ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: r, children: s.isValidElement(l) ? s.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: r, children: a });
  });
  return o.displayName = `${e}.Slot`, o;
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  const t = s.forwardRef((o, n) => {
    const { children: r, ...a } = o;
    if (s.isValidElement(r)) {
      const i = ke(r), c = $e(a, r.props);
      return r.type !== s.Fragment && (c.ref = n ? G(n, i) : i), s.cloneElement(r, c);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var De = /* @__PURE__ */ Symbol("radix.slottable");
function Oe(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === De;
}
function $e(e, t) {
  const o = { ...t };
  for (const n in t) {
    const r = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? r && a ? o[n] = (...c) => {
      const u = a(...c);
      return r(...c), u;
    } : r && (o[n] = r) : n === "style" ? o[n] = { ...r, ...a } : n === "className" && (o[n] = [r, a].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function ke(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Ge = [
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
], F = Ge.reduce((e, t) => {
  const o = /* @__PURE__ */ Ae(`Primitive.${t}`), n = s.forwardRef((r, a) => {
    const { asChild: i, ...c } = r, u = i ? o : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(u, { ...c, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Me(e, t = []) {
  let o = [];
  function n(a, i) {
    const c = s.createContext(i), u = o.length;
    o = [...o, i];
    const l = (p) => {
      const { scope: b, children: v, ...m } = p, g = b?.[e]?.[u] || c, x = s.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ d.jsx(g.Provider, { value: x, children: v });
    };
    l.displayName = a + "Provider";
    function f(p, b) {
      const v = b?.[e]?.[u] || c, m = s.useContext(v);
      if (m) return m;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [l, f];
  }
  const r = () => {
    const a = o.map((i) => s.createContext(i));
    return function(c) {
      const u = c?.[e] || a;
      return s.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: u } }),
        [c, u]
      );
    };
  };
  return r.scopeName = e, [n, Le(r, ...t)];
}
function Le(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const n = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(a) {
      const i = n.reduce((c, { useScope: u, scopeName: l }) => {
        const p = u(a)[`__scope${l}`];
        return { ...c, ...p };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return o.scopeName = t.scopeName, o;
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  const t = /* @__PURE__ */ Be(e), o = s.forwardRef((n, r) => {
    const { children: a, ...i } = n, c = s.Children.toArray(a), u = c.find(Ue);
    if (u) {
      const l = u.props.children, f = c.map((p) => p === u ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: r, children: s.isValidElement(l) ? s.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: r, children: a });
  });
  return o.displayName = `${e}.Slot`, o;
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = s.forwardRef((o, n) => {
    const { children: r, ...a } = o;
    if (s.isValidElement(r)) {
      const i = He(r), c = We(a, r.props);
      return r.type !== s.Fragment && (c.ref = n ? G(n, i) : i), s.cloneElement(r, c);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ke = /* @__PURE__ */ Symbol("radix.slottable");
function Ue(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ke;
}
function We(e, t) {
  const o = { ...t };
  for (const n in t) {
    const r = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? r && a ? o[n] = (...c) => {
      const u = a(...c);
      return r(...c), u;
    } : r && (o[n] = r) : n === "style" ? o[n] = { ...r, ...a } : n === "className" && (o[n] = [r, a].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function He(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var qe = [
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
], B = qe.reduce((e, t) => {
  const o = /* @__PURE__ */ Ve(`Primitive.${t}`), n = s.forwardRef((r, a) => {
    const { asChild: i, ...c } = r, u = i ? o : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(u, { ...c, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), T = "rovingFocusGroup.onEntryFocus", ze = { bubbles: !1, cancelable: !0 }, w = "RovingFocusGroup", [D, K, Ye] = Ie(w), [Ze, U] = Me(
  w,
  [Ye]
), [Xe, Je] = Ze(w), W = s.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(D.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(D.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(Qe, { ...e, ref: t }) }) })
);
W.displayName = w;
var Qe = s.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: n,
    loop: r = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: u,
    onEntryFocus: l,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, b = s.useRef(null), v = _(t, b), m = L(a), [g, x] = M({
    prop: i,
    defaultProp: c ?? null,
    onChange: u,
    caller: w
  }), [S, j] = s.useState(!1), h = we(l), I = K(o), N = s.useRef(!1), [ae, $] = s.useState(0);
  return s.useEffect(() => {
    const R = b.current;
    if (R)
      return R.addEventListener(T, h), () => R.removeEventListener(T, h);
  }, [h]), /* @__PURE__ */ d.jsx(
    Xe,
    {
      scope: o,
      orientation: n,
      dir: m,
      loop: r,
      currentTabStopId: g,
      onItemFocus: s.useCallback(
        (R) => x(R),
        [x]
      ),
      onItemShiftTab: s.useCallback(() => j(!0), []),
      onFocusableItemAdd: s.useCallback(
        () => $((R) => R + 1),
        []
      ),
      onFocusableItemRemove: s.useCallback(
        () => $((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        B.div,
        {
          tabIndex: S || ae === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: y(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: y(e.onFocus, (R) => {
            const ce = !N.current;
            if (R.target === R.currentTarget && ce && !S) {
              const k = new CustomEvent(T, ze);
              if (R.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const A = I().filter((E) => E.focusable), ue = A.find((E) => E.active), le = A.find((E) => E.id === g), de = [ue, le, ...A].filter(
                  Boolean
                ).map((E) => E.ref.current);
                z(de, f);
              }
            }
            N.current = !1;
          }),
          onBlur: y(e.onBlur, () => j(!1))
        }
      )
    }
  );
}), H = "RovingFocusGroupItem", q = s.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: n = !0,
      active: r = !1,
      tabStopId: a,
      children: i,
      ...c
    } = e, u = Ee(), l = a || u, f = Je(H, o), p = f.currentTabStopId === l, b = K(o), { onFocusableItemAdd: v, onFocusableItemRemove: m, currentTabStopId: g } = f;
    return s.useEffect(() => {
      if (n)
        return v(), () => m();
    }, [n, v, m]), /* @__PURE__ */ d.jsx(
      D.ItemSlot,
      {
        scope: o,
        id: l,
        focusable: n,
        active: r,
        children: /* @__PURE__ */ d.jsx(
          B.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...c,
            ref: t,
            onMouseDown: y(e.onMouseDown, (x) => {
              n ? f.onItemFocus(l) : x.preventDefault();
            }),
            onFocus: y(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: y(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const S = ot(x, f.orientation, f.dir);
              if (S !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let h = b().filter((I) => I.focusable).map((I) => I.ref.current);
                if (S === "last") h.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && h.reverse();
                  const I = h.indexOf(x.currentTarget);
                  h = f.loop ? rt(h, I + 1) : h.slice(I + 1);
                }
                setTimeout(() => z(h));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
q.displayName = H;
var et = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function tt(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ot(e, t, o) {
  const n = tt(e.key, o);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return et[n];
}
function z(e, t = !1) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus({ preventScroll: t }), document.activeElement !== o)) return;
}
function rt(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
var nt = W, st = q, O = "Radio", [it, Y] = V(O), [at, ct] = it(O), Z = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: o,
      name: n,
      checked: r = !1,
      required: a,
      disabled: i,
      value: c = "on",
      onCheck: u,
      form: l,
      ...f
    } = e, [p, b] = s.useState(null), v = _(t, (x) => b(x)), m = s.useRef(!1), g = p ? l || !!p.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(at, { scope: o, checked: r, disabled: i, children: [
      /* @__PURE__ */ d.jsx(
        F.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": ee(r),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...f,
          ref: v,
          onClick: y(e.onClick, (x) => {
            r || u?.(), g && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ d.jsx(
        Q,
        {
          control: p,
          bubbles: !m.current,
          name: n,
          value: c,
          checked: r,
          required: a,
          disabled: i,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Z.displayName = O;
var X = "RadioIndicator", J = s.forwardRef(
  (e, t) => {
    const { __scopeRadio: o, forceMount: n, ...r } = e, a = ct(X, o);
    return /* @__PURE__ */ d.jsx(_e, { present: n || a.checked, children: /* @__PURE__ */ d.jsx(
      F.span,
      {
        "data-state": ee(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    ) });
  }
);
J.displayName = X;
var ut = "RadioBubbleInput", Q = s.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: o,
    bubbles: n = !0,
    ...r
  }, a) => {
    const i = s.useRef(null), c = _(i, a), u = ye(o), l = Se(t);
    return s.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (u !== o && v) {
        const m = new Event("click", { bubbles: n });
        v.call(f, o), f.dispatchEvent(m);
      }
    }, [u, o, n]), /* @__PURE__ */ d.jsx(
      F.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...r,
        tabIndex: -1,
        ref: c,
        style: {
          ...r.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Q.displayName = ut;
function ee(e) {
  return e ? "checked" : "unchecked";
}
var lt = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], P = "RadioGroup", [dt] = V(P, [
  U,
  Y
]), te = U(), oe = Y(), [pt, ft] = dt(P), re = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: o,
      name: n,
      defaultValue: r,
      value: a,
      required: i = !1,
      disabled: c = !1,
      orientation: u,
      dir: l,
      loop: f = !0,
      onValueChange: p,
      ...b
    } = e, v = te(o), m = L(l), [g, x] = M({
      prop: a,
      defaultProp: r ?? null,
      onChange: p,
      caller: P
    });
    return /* @__PURE__ */ d.jsx(
      pt,
      {
        scope: o,
        name: n,
        required: i,
        disabled: c,
        value: g,
        onValueChange: x,
        children: /* @__PURE__ */ d.jsx(
          nt,
          {
            asChild: !0,
            ...v,
            orientation: u,
            dir: m,
            loop: f,
            children: /* @__PURE__ */ d.jsx(
              F.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": u,
                "data-disabled": c ? "" : void 0,
                dir: m,
                ...b,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
re.displayName = P;
var ne = "RadioGroupItem", se = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, disabled: n, ...r } = e, a = ft(ne, o), i = a.disabled || n, c = te(o), u = oe(o), l = s.useRef(null), f = _(t, l), p = a.value === r.value, b = s.useRef(!1);
    return s.useEffect(() => {
      const v = (g) => {
        lt.includes(g.key) && (b.current = !0);
      }, m = () => b.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", m), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", m);
      };
    }, []), /* @__PURE__ */ d.jsx(
      st,
      {
        asChild: !0,
        ...c,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ d.jsx(
          Z,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...u,
            ...r,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(r.value),
            onKeyDown: y((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: y(r.onFocus, () => {
              b.current && l.current?.click();
            })
          }
        )
      }
    );
  }
);
se.displayName = ne;
var mt = "RadioGroupIndicator", ie = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: o, ...n } = e, r = oe(o);
    return /* @__PURE__ */ d.jsx(J, { ...r, ...n, ref: t });
  }
);
ie.displayName = mt;
var vt = re, xt = se, bt = ie;
function gt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    vt,
    {
      "data-slot": "radio-group",
      className: C("grid gap-3", e),
      ...t
    }
  );
}
function Rt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    xt,
    {
      "data-slot": "radio-group-item",
      className: C(
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(
        bt,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ d.jsx(je, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
        }
      )
    }
  );
}
function jt({
  label: e,
  description: t,
  classNames: o,
  className: n,
  items: r,
  ...a
}) {
  const i = pe(), u = he(i.store, (l) => l.meta.errors).length > 0;
  return /* @__PURE__ */ d.jsxs(
    fe,
    {
      "data-invalid": u,
      className: C("", n, o?.field),
      children: [
        /* @__PURE__ */ d.jsx(
          Ce,
          {
            label: e,
            description: t,
            classNames: {
              label: C(o?.label),
              description: C(o?.description)
            },
            children: /* @__PURE__ */ d.jsx(
              gt,
              {
                ...a,
                onValueChange: i.handleChange,
                value: i.state.value,
                className: C("group border-t pt-3", n, o?.group),
                children: r.map((l, f) => {
                  const p = `${i.name}-${l.value}-${f}`, { title: b, description: v, classNames: m, ...g } = l;
                  return /* @__PURE__ */ d.jsx(
                    me,
                    {
                      className: C(
                        "flex space-x-2",
                        //   items.classNames?.container,
                        m?.container
                      ),
                      children: /* @__PURE__ */ d.jsxs(
                        ve,
                        {
                          orientation: "horizontal",
                          className: C(m?.section),
                          children: [
                            /* @__PURE__ */ d.jsxs(xe, { children: [
                              b && (typeof b == "string" ? /* @__PURE__ */ d.jsx(
                                be,
                                {
                                  className: C(
                                    m?.title,
                                    //   items.classNames?.label,
                                    "cursor-pointer"
                                  ),
                                  children: l.title
                                }
                              ) : b),
                              v && (typeof v == "string" ? /* @__PURE__ */ d.jsx(
                                ge,
                                {
                                  className: C(
                                    m?.description,
                                    //   items.classNames?.description,
                                    "mt-1 text-sm text-muted-foreground"
                                  ),
                                  children: l.description
                                }
                              ) : v)
                            ] }),
                            /* @__PURE__ */ d.jsx(
                              Rt,
                              {
                                ...g,
                                id: p,
                                value: l.value ?? p,
                                "aria-invalid": u
                              }
                            )
                          ]
                        }
                      )
                    },
                    p
                  );
                })
              }
            )
          }
        ),
        /* @__PURE__ */ d.jsx(Re, { className: C("order-4", o?.validate) })
      ]
    }
  );
}
export {
  jt as default
};
