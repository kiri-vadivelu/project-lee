// Creator, David Kuennen | Updater, Dariusz Więckiewicz
// MIT License: https://dariusz.wieckiewicz.org/en/minimal-google-analytics-4-snippet/

enScroll = !1;
const lStor = localStorage,
  sStor = sessionStorage,
  doc = document,
  docEl = document.documentElement,
  docBody = document.body,
  docLoc = document.location,
  w = window,
  s = screen,
  nav = navigator || {};
function a() {
  const k = "",
    t = () => Math.floor(Math.random() * 1e9) + 1,
    n = () => Math.floor(Date.now() / 1e3),
    y = () => (sStor._p || (sStor._p = t()), sStor._p),
    v = () => t() + "." + n(),
    p = () => (lStor.cid_v4 || (lStor.cid_v4 = v()), lStor.cid_v4),
    m = lStor.getItem("cid_v4"),
    u = () => (m ? void 0 : enScroll == !0 ? void 0 : "1"),
    l = () => (sStor.sid || (sStor.sid = n()), sStor.sid),
    d = () => {
      if (!sStor._ss) return (sStor._ss = "1"), sStor._ss;
      if (sStor.getItem("_ss") == "1") return void 0;
    },
    r = "1",
    h = () => {
      if (sStor.sct)
        if (enScroll == !0) return sStor.sct;
        else (x = +sStor.getItem("sct") + +r), (sStor.sct = x);
      else sStor.sct = r;
      return sStor.sct;
    },
    e = docLoc.search,
    f = new URLSearchParams(e),
    a = ["q", "s", "search", "query", "keyword"],
    g = a.some((t) => e.includes("&" + t + "=") || e.includes("?" + t + "=")),
    i = () =>
      g == !0 ? "view_search_results" : enScroll == !0 ? "scroll" : "page_view",
    b = () => (enScroll == !0 ? "90" : void 0),
    j = () => {
      if (i() == "view_search_results") {
        for (let e of f) if (a.includes(e[0])) return e[1];
      } else return void 0;
    },
    o = encodeURIComponent,
    _ = (e) => {
      let t = [];
      for (let n in e)
        e.hasOwnProperty(n) && e[n] !== void 0 && t.push(o(n) + "=" + o(e[n]));
      return t.join("&");
    },
    O = !1,
    C = "https://digitaldesigners.ca/g/collect",
    E = _({
      v: "2",
      tid: k,
      _p: y(),
      sr: (
        s.width * w.devicePixelRatio +
        "x" +
        s.height * w.devicePixelRatio
      ).toString(),
      ul: (nav.language || void 0).toLowerCase(),
      cid: p(),
      _fv: u(),
      _s: "1",
      dl: docLoc.origin + docLoc.pathname + e,
      dt: doc.title || void 0,
      dr: doc.referrer || void 0,
      sid: l(),
      sct: h(),
      seg: "1",
      en: i(),
      "epn.percent_scrolled": b(),
      "ep.search_term": j(),
      _ss: d(),
      _dbg: O ? 1 : void 0,
    }),
    c = C + "?" + E;
  if (nav.sendBeacon) nav.sendBeacon(c);
  else {
    let e = new XMLHttpRequest();
    e.open("POST", c, !0);
  }
}
a();
function sPr() {
  return (
    ((docEl.scrollTop || docBody.scrollTop) /
      ((docEl.scrollHeight || docBody.scrollHeight) - docEl.clientHeight)) *
    100
  );
}
doc.addEventListener("scroll", sEv, { passive: !0 });
function sEv() {
  const e = sPr();
  if (e < 90) return;
  (enScroll = !0), a(), doc.removeEventListener("scroll", sEv, { passive: !0 });
}
