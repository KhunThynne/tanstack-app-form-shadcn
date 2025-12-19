import { j as l, e as m, c as r, a as p, u as g } from "./index-DkX2XlwB.js";
import { useStore as x } from "@tanstack/react-form";
import * as f from "react";
import { useMemo as h } from "react";
import "react-dom";
var b = [
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
], v = b.reduce((t, e) => {
  const a = m(`Primitive.${e}`), o = f.forwardRef((s, i) => {
    const { asChild: d, ...n } = s, c = d ? a : e;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...n, ref: i });
  });
  return o.displayName = `Primitive.${e}`, { ...t, [e]: o };
}, {}), w = "Label", u = f.forwardRef((t, e) => /* @__PURE__ */ l.jsx(
  v.label,
  {
    ...t,
    ref: e,
    onMouseDown: (a) => {
      a.target.closest("button, input, select, textarea") || (t.onMouseDown?.(a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
    }
  }
));
u.displayName = w;
var j = u;
function N({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    j,
    {
      "data-slot": "label",
      className: r(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t
      ),
      ...e
    }
  );
}
function D({ className: t, ...e }) {
  return /* @__PURE__ */ l.jsx(
    "fieldset",
    {
      "data-slot": "field-set",
      className: r(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        t
      ),
      ...e
    }
  );
}
function P({ className: t, ...e }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "field-group",
      className: r(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        t
      ),
      ...e
    }
  );
}
const y = p(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function R({
  className: t,
  orientation: e = "vertical",
  ...a
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": e,
      className: r(y({ orientation: e }), t),
      ...a
    }
  );
}
function $({ className: t, ...e }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "field-content",
      className: r(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        t
      ),
      ...e
    }
  );
}
function C({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    N,
    {
      "data-slot": "field-label",
      className: r(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        t
      ),
      ...e
    }
  );
}
function L({ className: t, ...e }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "field-label",
      className: r(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        t
      ),
      ...e
    }
  );
}
function z({ className: t, ...e }) {
  return /* @__PURE__ */ l.jsx(
    "p",
    {
      "data-slot": "field-description",
      className: r(
        "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        t
      ),
      ...e
    }
  );
}
function F({
  className: t,
  children: e,
  errors: a,
  ...o
}) {
  const s = h(() => {
    if (e)
      return e;
    if (!a?.length)
      return null;
    const i = [
      ...new Map(a.map((d) => [d?.message, d])).values()
    ];
    return i?.length == 1 ? i[0]?.message : /* @__PURE__ */ l.jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: i.map(
      (d, n) => d?.message && /* @__PURE__ */ l.jsx("li", { children: d.message }, n)
    ) });
  }, [e, a]);
  return s ? /* @__PURE__ */ l.jsx(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: r("text-sm font-normal text-destructive", t),
      ...o,
      children: s
    }
  ) : null;
}
function V({
  className: t,
  ...e
}) {
  const a = g(), o = x(a.store, (s) => s.meta.errors);
  return o.length === 0 ? null : /* @__PURE__ */ l.jsx(
    F,
    {
      ...e,
      className: r("flex flex-col text-sm text-destructive", t),
      children: o.map((s, i) => /* @__PURE__ */ l.jsx(
        "span",
        {
          "data-slot": "form-message",
          id: a.name,
          children: s.message
        },
        `field-message-${a.name}-${i}`
      ))
    }
  );
}
export {
  R as F,
  V as a,
  P as b,
  C as c,
  $ as d,
  z as e,
  D as f,
  L as g
};
