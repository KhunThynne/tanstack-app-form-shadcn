import { j as e, c as t } from "./index-DkX2XlwB.js";
import { Fragment as c } from "react";
import { c as n, e as o } from "./FieldErrorI18nMessage-DXRsbQM2.js";
import { c as m } from "./createLucideIcon-D4r5Phnh.js";
const d = [
  ["path", { d: "M12 6v12", key: "1vza4d" }],
  ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
  ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]
], p = m("asterisk", d);
function j({
  classNames: a,
  children: i,
  label: s,
  description: r,
  required: l
}) {
  return /* @__PURE__ */ e.jsxs(c, { children: [
    s && /* @__PURE__ */ e.jsxs(
      n,
      {
        className: t(
          "flex max-w-full gap-x-1.5 truncate break-all",
          a?.label
        ),
        children: [
          /* @__PURE__ */ e.jsx("span", { children: s }),
          l && /* @__PURE__ */ e.jsx(p, { className: "size-3 self-start text-destructive" })
        ]
      }
    ),
    i,
    r && /* @__PURE__ */ e.jsx(
      o,
      {
        className: t(
          "line-clamp-3 max-w-full break-all",
          a?.description
        ),
        children: r
      }
    )
  ] });
}
export {
  j as L
};
