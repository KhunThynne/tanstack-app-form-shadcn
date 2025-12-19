import { j as i, c as e, u } from "./index-fWoRToBr.js";
import { F as c, a as x } from "./FieldErrorI18nMessage-B8-eW3NT.js";
import { useStore as f } from "@tanstack/react-form";
import { L as p } from "./LabelAndDescriptionFieldForm-CtUaBpba.js";
function m({ className: t, ...o }) {
  return /* @__PURE__ */ i.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: e(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        t
      ),
      ...o
    }
  );
}
function j({
  label: t,
  description: o,
  classNames: r,
  className: s,
  ...n
}) {
  const a = u(), l = f(a.store, (d) => d.meta.errors).length > 0;
  return /* @__PURE__ */ i.jsxs(
    c,
    {
      "data-invalid": l,
      className: e("flex flex-col gap-1.5", s, r?.field),
      children: [
        /* @__PURE__ */ i.jsx(
          p,
          {
            required: n.required,
            label: t,
            description: o,
            classNames: {
              label: e("order-1", r?.label),
              description: e("order-3", r?.description)
            },
            children: /* @__PURE__ */ i.jsx(
              m,
              {
                ...n,
                value: a.state.value,
                className: e("order-2", r?.textarea),
                onChange: (d) => a.handleChange(d.target.value),
                onBlur: a.handleBlur
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(x, { className: e("order-4", r?.validate) })
      ]
    }
  );
}
export {
  j as default
};
