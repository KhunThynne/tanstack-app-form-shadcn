import { j as t, c as e, a as h, u as m } from "./index-DkX2XlwB.js";
import { F as x, a as v } from "./FieldErrorI18nMessage-DXRsbQM2.js";
import { useStore as k } from "@tanstack/react-form";
import { L as j } from "./LabelAndDescriptionFieldForm-B9ucLcIn.js";
import { c as w } from "./createLucideIcon-D4r5Phnh.js";
function b({ className: n, type: r, ...a }) {
  return /* @__PURE__ */ t.jsx(
    "input",
    {
      type: r,
      "data-slot": "input",
      className: e(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        n
      ),
      ...a
    }
  );
}
const y = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], F = w("x", y);
function I({ className: n, ...r }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: e(
        "group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none dark:bg-input/30",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        n
      ),
      ...r
    }
  );
}
const N = h(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function C({
  className: n,
  align: r = "inline-start",
  ...a
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": r,
      className: e(N({ align: r }), n),
      onClick: (l) => {
        l.target.closest("button") || l.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...a
    }
  );
}
function B({
  className: n,
  ...r
}) {
  return /* @__PURE__ */ t.jsx(
    b,
    {
      "data-slot": "input-group-control",
      className: e(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        n
      ),
      ...r
    }
  );
}
function V({
  label: n,
  description: r,
  classNames: a,
  className: l,
  children: p,
  groupe: d,
  clear: c,
  type: o,
  ...u
}) {
  const i = m(), f = k(i.store, (s) => s.meta.errors).length > 0, g = typeof d != "boolean" ? d : {};
  return /* @__PURE__ */ t.jsxs(
    x,
    {
      "data-invalid": f,
      className: e("flex flex-col gap-1.5", l, a?.field),
      children: [
        /* @__PURE__ */ t.jsx(
          j,
          {
            label: n,
            required: u.required,
            description: r,
            classNames: {
              label: e("order-1", a?.label),
              description: e("order-3", a?.description)
            },
            children: d || o === "search" || c ? /* @__PURE__ */ t.jsxs(
              I,
              {
                className: e("order-2", g?.className),
                ...g,
                children: [
                  /* @__PURE__ */ t.jsx(
                    B,
                    {
                      ...u,
                      value: i.state.value,
                      className: e(a?.input),
                      onChange: (s) => i.handleChange(s.target.value),
                      onBlur: i.handleBlur,
                      type: o === "search" ? "text" : o
                    }
                  ),
                  (o === "search" || c) && i.state.value && /* @__PURE__ */ t.jsx(
                    C,
                    {
                      className: "cursor-default",
                      align: "inline-end",
                      onClick: () => i.setValue(""),
                      children: /* @__PURE__ */ t.jsx(F, { className: "size-4 stroke-3 opacity-80" })
                    }
                  ),
                  p
                ]
              }
            ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(
                b,
                {
                  ...u,
                  value: i.state.value,
                  className: e("order-2", a?.input),
                  onChange: (s) => i.handleChange(s.target.value),
                  onBlur: i.handleBlur,
                  type: o
                }
              ),
              p
            ] })
          }
        ),
        /* @__PURE__ */ t.jsx(
          v,
          {
            className: e("order-4", a?.validate)
          }
        )
      ]
    }
  );
}
export {
  V as default
};
