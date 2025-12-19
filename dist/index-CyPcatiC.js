import * as n from "react";
function R(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(r) {
    if (e?.(r), o === !1 || !r.defaultPrevented)
      return t?.(r);
  };
}
var v = globalThis?.document ? n.useLayoutEffect : () => {
};
function y(e) {
  const [t, o] = n.useState(void 0);
  return v(() => {
    if (e) {
      o({ width: e.offsetWidth, height: e.offsetHeight });
      const c = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const u = r[0];
        let f, s;
        if ("borderBoxSize" in u) {
          const l = u.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          f = d.inlineSize, s = d.blockSize;
        } else
          f = e.offsetWidth, s = e.offsetHeight;
        o({ width: f, height: s });
      });
      return c.observe(e, { box: "border-box" }), () => c.unobserve(e);
    } else
      o(void 0);
  }, [e]), t;
}
var h = n[" useInsertionEffect ".trim().toString()] || v;
function E({
  prop: e,
  defaultProp: t,
  onChange: o = () => {
  },
  caller: c
}) {
  const [r, u, f] = b({
    defaultProp: t,
    onChange: o
  }), s = e !== void 0, l = s ? e : r;
  {
    const i = n.useRef(e !== void 0);
    n.useEffect(() => {
      const a = i.current;
      a !== s && console.warn(
        `${c} is changing from ${a ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), i.current = s;
    }, [s, c]);
  }
  const d = n.useCallback(
    (i) => {
      if (s) {
        const a = S(i) ? i(e) : i;
        a !== e && f.current?.(a);
      } else
        u(i);
    },
    [s, e, u, f]
  );
  return [l, d];
}
function b({
  defaultProp: e,
  onChange: t
}) {
  const [o, c] = n.useState(e), r = n.useRef(o), u = n.useRef(t);
  return h(() => {
    u.current = t;
  }, [t]), n.useEffect(() => {
    r.current !== o && (u.current?.(o), r.current = o);
  }, [o, r]), [o, c, u];
}
function S(e) {
  return typeof e == "function";
}
function w(e) {
  const t = n.useRef({ value: e, previous: e });
  return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
export {
  v as a,
  E as b,
  R as c,
  w as d,
  y as u
};
