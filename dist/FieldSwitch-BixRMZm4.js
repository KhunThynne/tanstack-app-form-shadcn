import { j as d, b as I, d as y, c as x, u as B } from "./index-fWoRToBr.js";
import { b as T, F as $, d as M, c as O, e as A, a as H } from "./FieldErrorI18nMessage-B8-eW3NT.js";
import { useField as D, useStore as V } from "@tanstack/react-form";
import * as i from "react";
import { b as W, c as L, d as z, u as U } from "./index-CyPcatiC.js";
import "react-dom";
function q(e, r = []) {
  let t = [];
  function s(c, a) {
    const o = i.createContext(a), l = t.length;
    t = [...t, a];
    const u = (f) => {
      const { scope: m, children: b, ...h } = f, v = m?.[e]?.[l] || o, S = i.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ d.jsx(v.Provider, { value: S, children: b });
    };
    u.displayName = c + "Provider";
    function p(f, m) {
      const b = m?.[e]?.[l] || o, h = i.useContext(b);
      if (h) return h;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${c}\``);
    }
    return [u, p];
  }
  const n = () => {
    const c = t.map((a) => i.createContext(a));
    return function(o) {
      const l = o?.[e] || c;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...o, [e]: l } }),
        [o, l]
      );
    };
  };
  return n.scopeName = e, [s, G(n, ...r)];
}
function G(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const t = () => {
    const s = e.map((n) => ({
      useScope: n(),
      scopeName: n.scopeName
    }));
    return function(c) {
      const a = s.reduce((o, { useScope: l, scopeName: u }) => {
        const f = l(c)[`__scope${u}`];
        return { ...o, ...f };
      }, {});
      return i.useMemo(() => ({ [`__scope${r.scopeName}`]: a }), [a]);
    };
  };
  return t.scopeName = r.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function X(e) {
  const r = /* @__PURE__ */ Z(e), t = i.forwardRef((s, n) => {
    const { children: c, ...a } = s, o = i.Children.toArray(c), l = o.find(K);
    if (l) {
      const u = l.props.children, p = o.map((f) => f === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ d.jsx(r, { ...a, ref: n, children: i.isValidElement(u) ? i.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(r, { ...a, ref: n, children: c });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Z(e) {
  const r = i.forwardRef((t, s) => {
    const { children: n, ...c } = t;
    if (i.isValidElement(n)) {
      const a = Y(n), o = Q(c, n.props);
      return n.type !== i.Fragment && (o.ref = s ? I(s, a) : a), i.cloneElement(n, o);
    }
    return i.Children.count(n) > 1 ? i.Children.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var J = /* @__PURE__ */ Symbol("radix.slottable");
function K(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === J;
}
function Q(e, r) {
  const t = { ...r };
  for (const s in r) {
    const n = e[s], c = r[s];
    /^on[A-Z]/.test(s) ? n && c ? t[s] = (...o) => {
      const l = c(...o);
      return n(...o), l;
    } : n && (t[s] = n) : s === "style" ? t[s] = { ...n, ...c } : s === "className" && (t[s] = [n, c].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Y(e) {
  let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning;
  return t ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var ee = [
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
], k = ee.reduce((e, r) => {
  const t = /* @__PURE__ */ X(`Primitive.${r}`), s = i.forwardRef((n, c) => {
    const { asChild: a, ...o } = n, l = a ? t : r;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(l, { ...o, ref: c });
  });
  return s.displayName = `Primitive.${r}`, { ...e, [r]: s };
}, {}), w = "Switch", [te] = q(w), [re, ne] = te(w), P = i.forwardRef(
  (e, r) => {
    const {
      __scopeSwitch: t,
      name: s,
      checked: n,
      defaultChecked: c,
      required: a,
      disabled: o,
      value: l = "on",
      onCheckedChange: u,
      form: p,
      ...f
    } = e, [m, b] = i.useState(null), h = y(r, (C) => b(C)), v = i.useRef(!1), S = m ? p || !!m.closest("form") : !0, [g, N] = W({
      prop: n,
      defaultProp: c ?? !1,
      onChange: u,
      caller: w
    });
    return /* @__PURE__ */ d.jsxs(re, { scope: t, checked: g, disabled: o, children: [
      /* @__PURE__ */ d.jsx(
        k.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": g,
          "aria-required": a,
          "data-state": _(g),
          "data-disabled": o ? "" : void 0,
          disabled: o,
          value: l,
          ...f,
          ref: h,
          onClick: L(e.onClick, (C) => {
            N((F) => !F), S && (v.current = C.isPropagationStopped(), v.current || C.stopPropagation());
          })
        }
      ),
      S && /* @__PURE__ */ d.jsx(
        R,
        {
          control: m,
          bubbles: !v.current,
          name: s,
          value: l,
          checked: g,
          required: a,
          disabled: o,
          form: p,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
P.displayName = w;
var j = "SwitchThumb", E = i.forwardRef(
  (e, r) => {
    const { __scopeSwitch: t, ...s } = e, n = ne(j, t);
    return /* @__PURE__ */ d.jsx(
      k.span,
      {
        "data-state": _(n.checked),
        "data-disabled": n.disabled ? "" : void 0,
        ...s,
        ref: r
      }
    );
  }
);
E.displayName = j;
var oe = "SwitchBubbleInput", R = i.forwardRef(
  ({
    __scopeSwitch: e,
    control: r,
    checked: t,
    bubbles: s = !0,
    ...n
  }, c) => {
    const a = i.useRef(null), o = y(a, c), l = z(t), u = U(r);
    return i.useEffect(() => {
      const p = a.current;
      if (!p) return;
      const f = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== t && b) {
        const h = new Event("click", { bubbles: s });
        b.call(p, t), p.dispatchEvent(h);
      }
    }, [l, t, s]), /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: t,
        ...n,
        tabIndex: -1,
        ref: o,
        style: {
          ...n.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
R.displayName = oe;
function _(e) {
  return e ? "checked" : "unchecked";
}
var se = P, ie = E;
function ae({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    se,
    {
      "data-slot": "switch",
      className: x(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        e
      ),
      ...r,
      children: /* @__PURE__ */ d.jsx(
        ie,
        {
          "data-slot": "switch-thumb",
          className: x(
            "pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
          )
        }
      )
    }
  );
}
function fe({
  label: e,
  description: r,
  classNames: t,
  className: s,
  ...n
}) {
  const { form: c, name: a } = B(), o = D({ mode: "array", name: a, form: c }), u = V(o.store, (p) => p.meta.errors).length > 0;
  return /* @__PURE__ */ d.jsx(T, { "data-slot": "checkbox-group", children: /* @__PURE__ */ d.jsxs(
    $,
    {
      "data-invalid": u,
      orientation: "horizontal",
      className: x("flex gap-1.5", s, t?.field),
      children: [
        (e || r) && /* @__PURE__ */ d.jsxs(M, { className: x(t?.content), children: [
          e && /* @__PURE__ */ d.jsx(O, { className: x(t?.label), children: e }),
          r && /* @__PURE__ */ d.jsx(A, { className: x(t?.description), children: r }),
          /* @__PURE__ */ d.jsx(
            H,
            {
              className: x("order-4", t?.validate)
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx(
          ae,
          {
            ...n,
            name: o.name,
            checked: o.state.value,
            className: x("", t?.switch),
            onCheckedChange: o.handleChange,
            "aria-invalid": u
          }
        )
      ]
    }
  ) });
}
export {
  fe as default
};
