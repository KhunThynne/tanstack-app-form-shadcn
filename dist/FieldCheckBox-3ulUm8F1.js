import { j as d, b as H, d as N, c as y, u as V } from "./index-fWoRToBr.js";
import { b as q, F as W, c as z, a as G } from "./FieldErrorI18nMessage-B8-eW3NT.js";
import { useField as K, useStore as U } from "@tanstack/react-form";
import * as c from "react";
import { b as X, c as I, d as Z, u as J } from "./index-CyPcatiC.js";
import { P as Q } from "./index-DRisJiaX.js";
import "react-dom";
import { C as Y } from "./check-BxlvVsvD.js";
function ee(e, t = []) {
  let n = [];
  function s(r, i) {
    const a = c.createContext(i), l = n.length;
    n = [...n, i];
    const u = (p) => {
      const { scope: f, children: C, ...m } = p, k = f?.[e]?.[l] || a, g = c.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ d.jsx(k.Provider, { value: g, children: C });
    };
    u.displayName = r + "Provider";
    function b(p, f) {
      const C = f?.[e]?.[l] || a, m = c.useContext(C);
      if (m) return m;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${r}\``);
    }
    return [u, b];
  }
  const o = () => {
    const r = n.map((i) => c.createContext(i));
    return function(a) {
      const l = a?.[e] || r;
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
  const n = () => {
    const s = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(r) {
      const i = s.reduce((a, { useScope: l, scopeName: u }) => {
        const p = l(r)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = /* @__PURE__ */ ne(e), n = c.forwardRef((s, o) => {
    const { children: r, ...i } = s, a = c.Children.toArray(r), l = a.find(se);
    if (l) {
      const u = l.props.children, b = a.map((p) => p === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, b) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: r });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
  const t = c.forwardRef((n, s) => {
    const { children: o, ...r } = n;
    if (c.isValidElement(o)) {
      const i = ie(o), a = ce(r, o.props);
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
  const n = { ...t };
  for (const s in t) {
    const o = e[s], r = t[s];
    /^on[A-Z]/.test(s) ? o && r ? n[s] = (...a) => {
      const l = r(...a);
      return o(...a), l;
    } : o && (n[s] = o) : s === "style" ? n[s] = { ...o, ...r } : s === "className" && (n[s] = [o, r].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ie(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
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
  const n = /* @__PURE__ */ re(`Primitive.${t}`), s = c.forwardRef((o, r) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(l, { ...a, ref: r });
  });
  return s.displayName = `Primitive.${t}`, { ...e, [t]: s };
}, {}), S = "Checkbox", [le] = ee(S), [de, _] = le(S);
function ue(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: s,
    defaultChecked: o,
    disabled: r,
    form: i,
    name: a,
    onCheckedChange: l,
    required: u,
    value: b = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [f, C] = X({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: S
  }), [m, k] = c.useState(null), [g, h] = c.useState(null), x = c.useRef(!1), E = m ? !!i || !!m.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), P = {
    checked: f,
    disabled: r,
    setChecked: C,
    control: m,
    setControl: k,
    name: a,
    form: i,
    value: b,
    hasConsumerStoppedPropagationRef: x,
    required: u,
    defaultChecked: v(o) ? !1 : o,
    isFormControl: E,
    bubbleInput: g,
    setBubbleInput: h
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
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...s }, o) => {
    const {
      control: r,
      value: i,
      disabled: a,
      checked: l,
      required: u,
      setControl: b,
      setChecked: p,
      hasConsumerStoppedPropagationRef: f,
      isFormControl: C,
      bubbleInput: m
    } = _(w, e), k = N(o, b), g = c.useRef(l);
    return c.useEffect(() => {
      const h = r?.form;
      if (h) {
        const x = () => p(g.current);
        return h.addEventListener("reset", x), () => h.removeEventListener("reset", x);
      }
    }, [r, p]), /* @__PURE__ */ d.jsx(
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
        onKeyDown: I(t, (h) => {
          h.key === "Enter" && h.preventDefault();
        }),
        onClick: I(n, (h) => {
          p((x) => v(x) ? !0 : !x), m && C && (f.current = h.isPropagationStopped(), f.current || h.stopPropagation());
        })
      }
    );
  }
);
F.displayName = w;
var B = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: s,
      checked: o,
      defaultChecked: r,
      required: i,
      disabled: a,
      value: l,
      onCheckedChange: u,
      form: b,
      ...p
    } = e;
    return /* @__PURE__ */ d.jsx(
      ue,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: r,
        disabled: a,
        required: i,
        onCheckedChange: u,
        name: s,
        form: b,
        value: l,
        internal_do_not_use_render: ({ isFormControl: f }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            F,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          f && /* @__PURE__ */ d.jsx(
            A,
            {
              __scopeCheckbox: n
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
    const { __scopeCheckbox: n, forceMount: s, ...o } = e, r = _(O, n);
    return /* @__PURE__ */ d.jsx(
      Q,
      {
        present: s || v(r.checked) || r.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          j.span,
          {
            "data-state": T(r.checked),
            "data-disabled": r.disabled ? "" : void 0,
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
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: o,
      checked: r,
      defaultChecked: i,
      required: a,
      disabled: l,
      name: u,
      value: b,
      form: p,
      bubbleInput: f,
      setBubbleInput: C
    } = _($, e), m = N(n, C), k = Z(r), g = J(s);
    c.useEffect(() => {
      const x = f;
      if (!x) return;
      const E = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        E,
        "checked"
      ).set, D = !o.current;
      if (k !== r && R) {
        const L = new Event("click", { bubbles: D });
        x.indeterminate = v(r), R.call(x, v(r) ? !1 : r), x.dispatchEvent(L);
      }
    }, [f, k, r, o]);
    const h = c.useRef(v(r) ? !1 : r);
    return /* @__PURE__ */ d.jsx(
      j.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? h.current,
        required: a,
        disabled: l,
        name: u,
        value: b,
        form: p,
        ...t,
        tabIndex: -1,
        ref: m,
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
  const { indicator: n = /* @__PURE__ */ d.jsx(Y, { className: "size-3.5" }), ...s } = t;
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
          children: n
        }
      )
    }
  );
}
function ge({
  label: e,
  classNames: t,
  className: n,
  ...s
}) {
  const { form: o, name: r } = V(), i = K({ mode: "array", name: r, form: o }), l = U(i.store, (u) => u.meta.errors).length > 0;
  return /* @__PURE__ */ d.jsxs(q, { "data-slot": "checkbox-group", children: [
    /* @__PURE__ */ d.jsx(
      W,
      {
        "data-invalid": l,
        className: y("flex flex-col gap-1.5", n, t?.field),
        children: /* @__PURE__ */ d.jsxs("span", { className: "flex gap-2", children: [
          /* @__PURE__ */ d.jsx(fe, { ...s, className: y("peer cursor-pointer") }),
          /* @__PURE__ */ d.jsx(z, { htmlFor: "test", children: e })
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(G, { className: y(t?.validate) })
  ] });
}
export {
  ge as default
};
