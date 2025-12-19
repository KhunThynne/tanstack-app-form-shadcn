import { j as d, b as H, d as N, c as y, u as V } from "./index-C9JT7kwH.js";
import { b as q, F as W, c as z, a as G } from "./FieldErrorI18nMessage-BRutfuEW.js";
import { useField as K, useStore as U } from "@tanstack/react-form";
import * as c from "react";
import { b as X, c as I, d as Z, u as J } from "./index-CyPcatiC.js";
import { P as Q } from "./index-QkWvXSgN.js";
import "react-dom";
import { C as Y } from "./check-BxlvVsvD.js";
function ee(e, t = []) {
  let r = [];
  function s(n, i) {
    const a = c.createContext(i), l = r.length;
    r = [...r, i];
    const u = (p) => {
      const { scope: m, children: C, ...h } = p, k = m?.[e]?.[l] || a, g = c.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ d.jsx(k.Provider, { value: g, children: C });
    };
    u.displayName = n + "Provider";
    function f(p, m) {
      const C = m?.[e]?.[l] || a, h = c.useContext(C);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${n}\``);
    }
    return [u, f];
  }
  const o = () => {
    const n = r.map((i) => c.createContext(i));
    return function(a) {
      const l = a?.[e] || n;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [s, te(o, ...t)];
}
function te(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const s = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(n) {
      const i = s.reduce((a, { useScope: l, scopeName: u }) => {
        const p = l(n)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = /* @__PURE__ */ ne(e), r = c.forwardRef((s, o) => {
    const { children: n, ...i } = s, a = c.Children.toArray(n), l = a.find(se);
    if (l) {
      const u = l.props.children, f = a.map((p) => p === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: n });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
  const t = c.forwardRef((r, s) => {
    const { children: o, ...n } = r;
    if (c.isValidElement(o)) {
      const i = ie(o), a = ce(n, o.props);
      return o.type !== c.Fragment && (a.ref = s ? H(s, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var oe = /* @__PURE__ */ Symbol("radix.slottable");
function se(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oe;
}
function ce(e, t) {
  const r = { ...t };
  for (const s in t) {
    const o = e[s], n = t[s];
    /^on[A-Z]/.test(s) ? o && n ? r[s] = (...a) => {
      const l = n(...a);
      return o(...a), l;
    } : o && (r[s] = o) : s === "style" ? r[s] = { ...o, ...n } : s === "className" && (r[s] = [o, n].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function ie(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ae = [
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
], j = ae.reduce((e, t) => {
  const r = /* @__PURE__ */ re(`Primitive.${t}`), s = c.forwardRef((o, n) => {
    const { asChild: i, ...a } = o, l = i ? r : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(l, { ...a, ref: n });
  });
  return s.displayName = `Primitive.${t}`, { ...e, [t]: s };
}, {}), S = "Checkbox", [le] = ee(S), [de, _] = le(S);
function ue(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: s,
    defaultChecked: o,
    disabled: n,
    form: i,
    name: a,
    onCheckedChange: l,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, C] = X({
    prop: r,
    defaultProp: o ?? !1,
    onChange: l,
    caller: S
  }), [h, k] = c.useState(null), [g, b] = c.useState(null), x = c.useRef(!1), E = h ? !!i || !!h.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), P = {
    checked: m,
    disabled: n,
    setChecked: C,
    control: h,
    setControl: k,
    name: a,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: x,
    required: u,
    defaultChecked: v(o) ? !1 : o,
    isFormControl: E,
    bubbleInput: g,
    setBubbleInput: b
  };
  return /* @__PURE__ */ d.jsx(
    de,
    {
      scope: t,
      ...P,
      children: pe(p) ? p(P) : s
    }
  );
}
var w = "CheckboxTrigger", F = c.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...s }, o) => {
    const {
      control: n,
      value: i,
      disabled: a,
      checked: l,
      required: u,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: C,
      bubbleInput: h
    } = _(w, e), k = N(o, f), g = c.useRef(l);
    return c.useEffect(() => {
      const b = n?.form;
      if (b) {
        const x = () => p(g.current);
        return b.addEventListener("reset", x), () => b.removeEventListener("reset", x);
      }
    }, [n, p]), /* @__PURE__ */ d.jsx(
      j.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": v(l) ? "mixed" : l,
        "aria-required": u,
        "data-state": T(l),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: i,
        ...s,
        ref: k,
        onKeyDown: I(t, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: I(r, (b) => {
          p((x) => v(x) ? !0 : !x), h && C && (m.current = b.isPropagationStopped(), m.current || b.stopPropagation());
        })
      }
    );
  }
);
F.displayName = w;
var B = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: s,
      checked: o,
      defaultChecked: n,
      required: i,
      disabled: a,
      value: l,
      onCheckedChange: u,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ d.jsx(
      ue,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: n,
        disabled: a,
        required: i,
        onCheckedChange: u,
        name: s,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            F,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ d.jsx(
            A,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
B.displayName = S;
var O = "CheckboxIndicator", M = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: s, ...o } = e, n = _(O, r);
    return /* @__PURE__ */ d.jsx(
      Q,
      {
        present: s || v(n.checked) || n.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          j.span,
          {
            "data-state": T(n.checked),
            "data-disabled": n.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
M.displayName = O;
var $ = "CheckboxBubbleInput", A = c.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: o,
      checked: n,
      defaultChecked: i,
      required: a,
      disabled: l,
      name: u,
      value: f,
      form: p,
      bubbleInput: m,
      setBubbleInput: C
    } = _($, e), h = N(r, C), k = Z(n), g = J(s);
    c.useEffect(() => {
      const x = m;
      if (!x) return;
      const E = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        E,
        "checked"
      ).set, D = !o.current;
      if (k !== n && R) {
        const L = new Event("click", { bubbles: D });
        x.indeterminate = v(n), R.call(x, v(n) ? !1 : n), x.dispatchEvent(L);
      }
    }, [m, k, n, o]);
    const b = c.useRef(v(n) ? !1 : n);
    return /* @__PURE__ */ d.jsx(
      j.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? b.current,
        required: a,
        disabled: l,
        name: u,
        value: f,
        form: p,
        ...t,
        tabIndex: -1,
        ref: h,
        style: {
          ...t.style,
          ...g,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
A.displayName = $;
function pe(e) {
  return typeof e == "function";
}
function v(e) {
  return e === "indeterminate";
}
function T(e) {
  return v(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function fe({
  className: e,
  ...t
}) {
  const { indicator: r = /* @__PURE__ */ d.jsx(Y, { className: "size-3.5" }), ...s } = t;
  return /* @__PURE__ */ d.jsx(
    B,
    {
      "data-slot": "checkbox",
      className: y(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        e
      ),
      ...s,
      children: /* @__PURE__ */ d.jsx(
        M,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: r
        }
      )
    }
  );
}
function ge({
  label: e,
  description: t,
  classNames: r,
  className: s,
  ...o
}) {
  const { form: n, name: i } = V(), a = K({ mode: "array", name: i, form: n }), u = U(a.store, (f) => f.meta.errors).length > 0;
  return /* @__PURE__ */ d.jsxs(q, { "data-slot": "checkbox-group", children: [
    /* @__PURE__ */ d.jsx(
      W,
      {
        "data-invalid": u,
        className: y("flex flex-col gap-1.5", s, r?.field),
        children: /* @__PURE__ */ d.jsxs("span", { className: "flex gap-2", children: [
          /* @__PURE__ */ d.jsx(fe, { ...o, className: y("peer cursor-pointer") }),
          /* @__PURE__ */ d.jsx(z, { htmlFor: "test", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(G, { className: y(r?.validate) })
  ] });
}
export {
  ge as default
};
