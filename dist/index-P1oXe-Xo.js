import * as n from "react";
import y from "react";
import { j as v, b as N, d as h } from "./index-fWoRToBr.js";
import { a as A } from "./index-CyPcatiC.js";
function O(e, t = []) {
  let o = [];
  function c(l, i) {
    const s = n.createContext(i), u = o.length;
    o = [...o, i];
    const a = (p) => {
      const { scope: _, children: E, ...S } = p, d = _?.[e]?.[u] || s, f = n.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ v.jsx(d.Provider, { value: f, children: E });
    };
    a.displayName = l + "Provider";
    function m(p, _) {
      const E = _?.[e]?.[u] || s, S = n.useContext(E);
      if (S) return S;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return [a, m];
  }
  const r = () => {
    const l = o.map((i) => n.createContext(i));
    return function(s) {
      const u = s?.[e] || l;
      return n.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: u } }),
        [s, u]
      );
    };
  };
  return r.scopeName = e, [c, j(r, ...t)];
}
function j(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const c = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(l) {
      const i = c.reduce((s, { useScope: u, scopeName: a }) => {
        const p = u(l)[`__scope${a}`];
        return { ...s, ...p };
      }, {});
      return n.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return o.scopeName = t.scopeName, o;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = /* @__PURE__ */ T(e), o = n.forwardRef((c, r) => {
    const { children: l, ...i } = c, s = n.Children.toArray(l), u = s.find(D);
    if (u) {
      const a = u.props.children, m = s.map((p) => p === u ? n.Children.count(a) > 1 ? n.Children.only(null) : n.isValidElement(a) ? a.props.children : null : p);
      return /* @__PURE__ */ v.jsx(t, { ...i, ref: r, children: n.isValidElement(a) ? n.cloneElement(a, void 0, m) : null });
    }
    return /* @__PURE__ */ v.jsx(t, { ...i, ref: r, children: l });
  });
  return o.displayName = `${e}.Slot`, o;
}
// @__NO_SIDE_EFFECTS__
function T(e) {
  const t = n.forwardRef((o, c) => {
    const { children: r, ...l } = o;
    if (n.isValidElement(r)) {
      const i = L(r), s = $(l, r.props);
      return r.type !== n.Fragment && (s.ref = c ? N(c, i) : i), n.cloneElement(r, s);
    }
    return n.Children.count(r) > 1 ? n.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var w = /* @__PURE__ */ Symbol("radix.slottable");
function D(e) {
  return n.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === w;
}
function $(e, t) {
  const o = { ...t };
  for (const c in t) {
    const r = e[c], l = t[c];
    /^on[A-Z]/.test(c) ? r && l ? o[c] = (...s) => {
      const u = l(...s);
      return r(...s), u;
    } : r && (o[c] = r) : c === "style" ? o[c] = { ...r, ...l } : c === "className" && (o[c] = [r, l].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function L(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
function q(e) {
  const t = e + "CollectionProvider", [o, c] = O(t), [r, l] = o(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (d) => {
    const { scope: f, children: I } = d, C = y.useRef(null), x = y.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(r, { scope: f, itemMap: x, collectionRef: C, children: I });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", u = /* @__PURE__ */ P(s), a = y.forwardRef(
    (d, f) => {
      const { scope: I, children: C } = d, x = l(s, I), R = h(f, x.collectionRef);
      return /* @__PURE__ */ v.jsx(u, { ref: R, children: C });
    }
  );
  a.displayName = s;
  const m = e + "CollectionItemSlot", p = "data-radix-collection-item", _ = /* @__PURE__ */ P(m), E = y.forwardRef(
    (d, f) => {
      const { scope: I, children: C, ...x } = d, R = y.useRef(null), M = h(f, R), g = l(m, I);
      return y.useEffect(() => (g.itemMap.set(R, { ref: R, ...x }), () => {
        g.itemMap.delete(R);
      })), /* @__PURE__ */ v.jsx(_, { [p]: "", ref: M, children: C });
    }
  );
  E.displayName = m;
  function S(d) {
    const f = l(e + "CollectionConsumer", d);
    return y.useCallback(() => {
      const C = f.collectionRef.current;
      if (!C) return [];
      const x = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(f.itemMap.values()).sort(
        (g, b) => x.indexOf(g.ref.current) - x.indexOf(b.ref.current)
      );
    }, [f.collectionRef, f.itemMap]);
  }
  return [
    { Provider: i, Slot: a, ItemSlot: E },
    S,
    c
  ];
}
var V = n.createContext(void 0);
function Z(e) {
  const t = n.useContext(V);
  return e || t || "ltr";
}
function z(e) {
  const t = n.useRef(e);
  return n.useEffect(() => {
    t.current = e;
  }), n.useMemo(() => (...o) => t.current?.(...o), []);
}
var W = n[" useId ".trim().toString()] || (() => {
}), k = 0;
function G(e) {
  const [t, o] = n.useState(W());
  return A(() => {
    o((c) => c ?? String(k++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
export {
  Z as a,
  G as b,
  q as c,
  z as u
};
