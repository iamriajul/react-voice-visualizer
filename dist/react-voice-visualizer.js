(function(){"use strict";(i=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(i)),document.head.appendChild(e)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})(".voice-visualizer__buttons-container{display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:15px;flex-wrap:wrap;margin-bottom:40px}.voice-visualizer__btn-center{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#fff;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s}.voice-visualizer__btn-center:disabled{opacity:.85;cursor:default}.voice-visualizer__btn-center:hover{background-color:#eaeaea;border:4px solid #9f9f9f}.voice-visualizer__btn-center>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause{background-color:#ff3030}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause:hover{background-color:#ff4f4f}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause>img{height:50%;max-height:16px}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent{border-color:transparent}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent:hover{background-color:#fff}.voice-visualizer__btn-left{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#ff3030;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s,opacity .3s}.voice-visualizer__btn-container{min-width:100px;display:flex;justify-content:flex-end}.voice-visualizer__btn-left:hover{background-color:#ff4f4f}.voice-visualizer__btn-left:disabled{opacity:.6;background-color:#ff3030;cursor:default}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone{background-color:#fff}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-left>img{width:auto;height:50%;max-height:16px}.voice-visualizer__btn-left:hover{border:4px solid #9f9f9f}.voice-visualizer__btn{box-sizing:border-box;min-width:100px;min-height:60px;padding:5px 20px;border-radius:40px;font-size:15px;background-color:#f0f0f0;transition:background-color .3s,opacity .3s}.voice-visualizer__btn:disabled{opacity:.8;background-color:#f0f0f0;cursor:default}.voice-visualizer__btn:hover{background-color:#bebebe}.voice-visualizer__canvas-container{position:relative;width:fit-content;margin:0 auto;overflow:hidden}.voice-visualizer__canvas-container canvas{display:block}.voice-visualizer__canvas-microphone-btn{position:absolute;top:50%;left:50%;width:auto;max-width:12%;min-width:24px;height:50%;max-height:100px;background-color:transparent;border:none;outline:none;transform:translate(-50%,-50%)}.voice-visualizer__canvas-microphone-icon{width:100%;height:100%;will-change:transform;transition:transform .3s}.voice-visualizer__canvas-microphone-btn:hover .voice-visualizer__canvas-microphone-icon{transform:scale(1.03)}.voice-visualizer__canvas-audio-wave-icon{position:absolute;top:50%;left:50%;width:auto;max-width:40%;height:40%;max-height:100px;transform:translate(-118%,-50%) scale(-1)}.voice-visualizer__canvas-audio-wave-icon2{transform:translate(18%,-50%)}.voice-visualizer__canvas-audio-processing{position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}.voice-visualizer__progress-indicator-hovered{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#85858599}.voice-visualizer__progress-indicator-hovered-time{position:absolute;top:3%;left:1px;width:fit-content;margin:0;padding:0 7px;opacity:.8;font-size:12px;border-radius:0 4px 4px 0;background-color:#575757;text-align:left}.voice-visualizer__progress-indicator-hovered-time.voice-visualizer__progress-indicator-hovered-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__progress-indicator{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#efefef}.voice-visualizer__progress-indicator-time{position:absolute;top:3%;left:1px;width:fit-content;box-sizing:border-box;min-width:37px;margin:0;padding:0 7px;font-size:12px;border-radius:0 4px 4px 0;text-align:left;color:#000;font-weight:500;background-color:#efefef}.voice-visualizer__progress-indicator-time.voice-visualizer__progress-indicator-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__audio-info-container{box-sizing:border-box;height:55px;display:flex;align-items:center;justify-content:center;gap:30px}.voice-visualizer__audio-info-time{margin:15px 0;min-width:38px;text-align:left}.voice-visualizer__visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:4px solid #c5c5c5;white-space:nowrap;clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.relative{position:relative}.spinner__wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:52px;height:52px;display:flex;justify-content:center;align-items:center}.spinner{flex-shrink:0;width:100%;height:100%;border:4px solid rgba(197,197,197,.5);border-radius:50%;border-top-color:#b7b7b7;animation:spin 1s ease-in-out infinite;-webkit-animation:spin 1s ease-in-out infinite}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes spin{to{transform:rotate(360deg)}}")})();
import { jsx as s, jsxs as K, Fragment as Ge } from "react/jsx-runtime";
import { useState as l, useRef as y, useCallback as it, useLayoutEffect as Je, forwardRef as ct, useEffect as O } from "react";
const Oe = ({
  canvas: e,
  backgroundColor: t
}) => {
  const n = e.height, r = e.width, c = Math.round(r / 2), m = e.getContext("2d");
  return m ? (m.clearRect(0, 0, r, n), t !== "transparent" && (m.fillStyle = t, m.fillRect(0, 0, r, n)), { context: m, height: n, width: r, halfWidth: c }) : null;
}, Ee = ({
  context: e,
  color: t,
  rounded: n,
  x: r,
  y: c,
  w: m,
  h: g
}) => {
  e.fillStyle = t, e.beginPath(), e.roundRect ? (e.roundRect(r, c, m, g, n), e.fill()) : e.fillRect(r, c, m, g);
}, ot = ({
  barsData: e,
  canvas: t,
  barWidth: n,
  gap: r,
  backgroundColor: c,
  mainBarColor: m,
  secondaryBarColor: g,
  currentAudioTime: d = 0,
  rounded: M,
  duration: z
}) => {
  const S = Oe({ canvas: t, backgroundColor: c });
  if (!S)
    return;
  const { context: w, height: L } = S, N = d / z;
  e.forEach((f, h) => {
    const p = h / e.length, v = N > p;
    Ee({
      context: w,
      color: v ? g : m,
      rounded: M,
      x: h * (n + r * n),
      y: L / 2 - f.max,
      h: f.max * 2,
      w: n
    });
  });
};
function st({
  context: e,
  color: t,
  rounded: n,
  width: r,
  height: c,
  barWidth: m
}) {
  Ee({
    context: e,
    color: t,
    rounded: n,
    x: r / 2 + m / 2,
    y: c / 2 - 1,
    h: 2,
    w: r - (r / 2 + m / 2)
  });
}
const at = ({
  audioData: e,
  unit: t,
  index: n,
  index2: r,
  canvas: c,
  isRecordingInProgress: m,
  isPausedRecording: g,
  picks: d,
  backgroundColor: M,
  barWidth: z,
  mainBarColor: S,
  secondaryBarColor: w,
  rounded: L,
  animateCurrentPick: N,
  fullscreen: f
}) => {
  const h = Oe({ canvas: c, backgroundColor: M });
  if (!h)
    return;
  const { context: p, height: v, width: R, halfWidth: Z } = h;
  if (e != null && e.length && m) {
    const _ = Math.max(...e);
    if (!g) {
      if (r.current >= z) {
        r.current = 0;
        const A = (v - _ / 258 * v) / v * 100, te = (-v + _ / 258 * v * 2) / v * 100, W = n.current === z ? {
          startY: A,
          barHeight: te
        } : null;
        n.current >= t ? n.current = z : n.current += z, d.length > (f ? R : Z) / z && d.pop(), d.unshift(W);
      }
      r.current += 1;
    }
    !f && G(), N && Ee({
      context: p,
      rounded: L,
      color: S,
      x: f ? R : Z,
      y: v - _ / 258 * v,
      h: -v + _ / 258 * v * 2,
      w: z
    });
    let ee = (f ? R : Z) - r.current;
    d.forEach((A) => {
      A && Ee({
        context: p,
        color: S,
        rounded: L,
        x: ee,
        y: A.startY * v / 100 > v / 2 - 1 ? v / 2 - 1 : A.startY * v / 100,
        h: A.barHeight * v / 100 > 2 ? A.barHeight * v / 100 : 2,
        w: z
      }), ee -= z;
    });
  } else
    d.length = 0;
  function G() {
    st({
      context: p,
      color: w,
      rounded: L,
      width: R,
      height: v,
      barWidth: z
    });
  }
}, Qe = (e) => {
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = e % 60, c = Math.floor(
    (r - Math.floor(r)) * 1e3
  );
  return t > 0 ? `${String(t).padStart(2, "0")}:${String(n).padStart(
    2,
    "0"
  )}:${String(Math.floor(r)).padStart(2, "0")}:${String(
    c
  ).charAt(0)}` : n > 0 ? `${String(n).padStart(2, "0")}:${String(
    Math.floor(r)
  ).padStart(2, "0")}:${String(c).charAt(0)}` : `${String(Math.floor(r)).padStart(2, "0")}:${String(
    c
  ).charAt(0)}`;
}, ut = (e) => {
  const t = Math.floor(e / 1e3), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), c = t % 60;
  return n > 0 ? `${String(n).padStart(2, "0")}:${String(r).padStart(
    2,
    "0"
  )}:${String(c).padStart(2, "0")}` : `${String(r).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
};
function We(e) {
  if (typeof e == "string") {
    const t = Number(e);
    if (!Number.isNaN(t))
      return `${Math.trunc(t / 2) * 2}px`;
  }
  return e;
}
const ht = ({
  bufferData: e,
  height: t,
  width: n,
  barWidth: r,
  gap: c
}) => {
  const m = n / (r + c * r), g = Math.floor(e.length / m), d = t / 2;
  let M = [], z = 0;
  for (let S = 0; S < m; S++) {
    const w = [];
    let L = 0;
    for (let f = 0; f < g && S * g + f < e.length; f++) {
      const h = e[S * g + f];
      h > 0 && (w.push(h), L++);
    }
    const N = w.reduce((f, h) => f + h, 0) / L;
    N > z && (z = N), M.push({ max: N });
  }
  if (d * 0.95 > z * d) {
    const S = d * 0.95 / z;
    M = M.map((w) => ({
      max: w.max > 0.01 ? w.max * S : 1
    }));
  }
  return M;
}, lt = (e) => {
  if (!e)
    return "";
  const t = e.match(/audio\/([^;]+)/);
  return t && t.length >= 2 ? `.${t[1]}` : "";
}, mt = (e) => {
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = e % 60, c = Math.floor(
    (r - Math.floor(r)) * 1e3
  );
  return t > 0 ? `${String(t).padStart(2, "0")}:${String(n).padStart(
    2,
    "0"
  )}:${String(Math.floor(r)).padStart(2, "0")}}h` : n > 0 ? `${String(n).padStart(2, "0")}:${String(
    Math.floor(r)
  ).padStart(2, "0")}m` : `${String(Math.floor(r)).padStart(2, "0")}:${String(
    c
  ).charAt(0)}${String(c).charAt(1)}s`;
}, vt = (e) => {
  onmessage = (t) => {
    postMessage(e(t.data));
  };
};
function dt({
  fn: e,
  initialValue: t,
  onMessageReceived: n
}) {
  const [r, c] = l(t);
  return {
    result: r,
    setResult: c,
    run: (g) => {
      const d = new Worker(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        URL.createObjectURL(new Blob([`(${vt})(${e})`]))
      );
      d.onmessage = (M) => {
        M.data && (c(M.data), n && n(), d.terminate());
      }, d.onerror = (M) => {
        console.error(M.message), d.terminate();
      }, d.postMessage(g);
    }
  };
}
const ft = (e, t = 250) => {
  const n = y();
  return it(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...r) => {
      const c = () => {
        clearTimeout(n.current), e(...r);
      };
      clearTimeout(n.current), n.current = setTimeout(c, t);
    },
    [e, t]
  );
};
function zt(e) {
  const t = y(e);
  return Je(() => {
    t.current = e;
  }, [e]), t;
}
const gt = ({
  color: e = "#000000",
  stroke: t = 2,
  className: n
}) => /* @__PURE__ */ s(
  "svg",
  {
    viewBox: "0 0 23 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M1.1 16.72c0 3 .96 5.8 3.61 7.95a9.96 9.96 0 0 0 6.5 2.17m0 0v4.34h4.34-8.67m4.34-4.34c2.35 0 4.42-.48 6.5-2.17a9.87 9.87 0 0 0 3.61-7.95M11.22 1.82c-1.45 0-2.5.37-3.3.93a5.6 5.6 0 0 0-1.84 2.4c-.9 2.06-1.1 4.77-1.1 7.24 0 2.46.2 5.17 1.1 7.24a5.6 5.6 0 0 0 1.84 2.4c.8.55 1.85.92 3.3.92 1.44 0 2.5-.37 3.29-.93a5.6 5.6 0 0 0 1.84-2.4c.9-2.06 1.1-4.77 1.1-7.23 0-2.47-.2-5.18-1.1-7.24a5.6 5.6 0 0 0-1.84-2.4 5.52 5.52 0 0 0-3.3-.93Z",
        stroke: e,
        strokeWidth: t,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Pe = ({
  color: e = "#FFFFFF",
  reflect: t
}) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0.92 17.54 48.27 14.92",
    className: `voice-visualizer__canvas-audio-wave-icon ${t ? "voice-visualizer__canvas-audio-wave-icon2" : ""}`,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M.92 24.63h.21v.75H.92zm.42-1.39h.21v3.52h-.21zm.43.68h.21v2.17h-.21zM2.2 22h.21v6.01H2.2zm.43-1.27h.21v8.55h-.21zm.43 2.07h.21v4.4h-.21zm.43 1.22h.21v1.97h-.21zm.43.47h.21v1.03h-.21zm.43-1.66h.21v4.35h-.21zm.43-1.74h.21v7.82h-.21zm.43 1.94h.21v3.94h-.21zm.43 1.07h.21v1.81h-.21zm.42-.94h.21v3.68h-.21zm.43.91h.21v1.86h-.21zm.43-.23h.21v2.33h-.21zm.43.46h.21v1.4h-.21zm.43-.7h.21v2.8h-.21zm.43-1.6h.21v6.01h-.21zm.43-2.23h.21v10.46h-.21zm.43-1.4h.21v13.26h-.21zm.43.62h.21v12.02H9.5zm.43 1.64h.21v8.75h-.21zm.43 1.37h.21v6.01h-.21zm.43-1.87H11v9.74h-.21zm.42 1.32h.21v7.1h-.21zm.43-2.64h.21v12.38h-.21zm.43 1.61h.21v9.17h-.21zM12.5 22h.21v6.01h-.21zm.43 1.32h.21v3.37h-.21zm.43-2.51h.21v8.39h-.21zm.43.59H14v7.2h-.21zm.43 1.79h.21v3.62h-.21zm.43.41h.21v2.8h-.21zm.43.57h.21v1.66h-.21zm.43-1.11h.21v3.88h-.21zm.42-2.98h.21v9.84h-.21zm.43 1.06h.21v7.72h-.21zm.43 3.19H17v1.35h-.21zm.86-2.33h.21v6.01h-.21zm-.43 1.4h.21v3.21h-.21zm1.29.15h.21v2.9h-.21zm.43.68h.21v1.55h-.21zm-.86-.76h.21v3.05h-.21zm1.29-.05h.21v3.16h-.21zm.43-.64h.21v4.45h-.21zm.43.38h.21v3.68h-.21zm.42-.49h.21v4.66h-.21zm.43 1.32h.21v2.02h-.21zm.43.37h.21v1.29h-.21zm.43.31h.21v.67h-.21zm.43-.39h.21v1.45h-.21zm.43-1.35h.21v4.14h-.21zm.86.73h.21v2.69h-.21zm-.43.44h.21v1.81h-.21zm1.29-3.45h.21v8.7h-.21zm.43 1.71h.21v5.28h-.21zm-.86-2.3h.21v9.89h-.21zm1.29 3.36h.21v3.16h-.21zM25.8 22h.21v6.01h-.21zm.43 1.42h.21v3.16h-.21zm.43.88h.21v1.4h-.21zm.43-.93h.21v3.26h-.21zm.43-1.37h.21v6.01h-.21zm.43-.93h.21v7.87h-.21zm.43-.76h.21v9.38h-.21zm.43 1.69h.21v6.01h-.21zm.86 1.92h.21v2.17h-.21zm-.43-.6h.21v3.37h-.21zm1.28.05h.21v3.26h-.21zm.43.67h.21v1.91h-.21zm-.85-.51h.21v2.95h-.21zm1.28-.13h.21v3.21h-.21zm.43-1.4h.21v6.01h-.21zm.43-.99h.21v7.98h-.21zm.43 1.77h.21v4.45h-.21zm.43-1.22h.21v6.89h-.21zm.43 1.6h.21v3.68h-.21zm.43-.28h.21v4.25h-.21zm.43-.6h.21v5.44h-.21zm.43-.28h.21v6.01h-.21zm.85 2.02h.21v1.97h-.21zm-.43-.57h.21v3.11h-.21zm1.29.93h.21v1.24h-.21zm.43-.65h.21v2.54h-.21zm-.86-.28h.21v3.11h-.21zm1.29.83h.21v1.45h-.21zm.43-.99h.21v3.42h-.21zm.43-.1h.21v3.62h-.21zm.43-.7h.21v5.02h-.21zm.43.8h.21v3.42h-.21zm.43-1.29h.21v6.01h-.21zm.42-1.71h.21v9.43h-.21zm.43 2.38h.21v4.66h-.21zm.43.65h.21v3.37h-.21zm.86.08h.21v3.21h-.21zm-.43.54h.21v2.12h-.21zm1.29-.05h.21v2.23h-.21zm.43.28h.21v1.66h-.21zm-.86.16h.21v1.35h-.21zm1.29.21h.21v.93h-.21zm.43-6.04h.21v13h-.21zm.43.8h.21v11.4h-.21zm.43-1.76h.21v14.92h-.21zm.42 1.09h.21v12.74h-.21zm.43 1.17h.21v10.41h-.21zm.43 1.32h.21v7.77h-.21zm.43 1.6h.21v4.56h-.21zm.43 1.17h.21v2.23h-.21zm.86-.08h.21v2.38h-.21zm-.43-.34h.21v3.05h-.21zm1.29-.1h.21v3.26h-.21zm.43.93h.21v1.4h-.21zm-.86-.02h.21v1.45h-.21z",
        fill: e
      }
    )
  }
), Be = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTEuMSAxNi43MmMwIDMgLjk2IDUuOCAzLjYxIDcuOTVhOS45NiA5Ljk2IDAgMCAwIDYuNSAyLjE3bTAgMHY0LjM0aDQuMzQtOC42N200LjM0LTQuMzRjMi4zNSAwIDQuNDItLjQ4IDYuNS0yLjE3YTkuODcgOS44NyAwIDAgMCAzLjYxLTcuOTVNMTEuMjIgMS44MmMtMS40NSAwLTIuNS4zNy0zLjMuOTNhNS42IDUuNiAwIDAgMC0xLjg0IDIuNGMtLjkgMi4wNi0xLjEgNC43Ny0xLjEgNy4yNCAwIDIuNDYuMiA1LjE3IDEuMSA3LjI0YTUuNiA1LjYgMCAwIDAgMS44NCAyLjRjLjguNTUgMS44NS45MiAzLjMuOTIgMS40NCAwIDIuNS0uMzcgMy4yOS0uOTNhNS42IDUuNiAwIDAgMCAxLjg0LTIuNGMuOS0yLjA2IDEuMS00Ljc3IDEuMS03LjIzIDAtMi40Ny0uMi01LjE4LTEuMS03LjI0YTUuNiA1LjYgMCAwIDAtMS44NC0yLjQgNS41MiA1LjUyIDAgMCAwLTMuMy0uOTNaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K", Mt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE4Ljc1IDYuMTZjNC4zMSAyLjYgNi40NiAzLjkgNi40NiA1Ljg0IDAgMS45NS0yLjE1IDMuMjQtNi40NiA1Ljg0bC00Ljg0IDIuOTJjLTQuMzEgMi42LTYuNDYgMy44OS04LjA4IDIuOTItMS42Mi0uOTgtMS42Mi0zLjU3LTEuNjItOC43NlY5LjA4YzAtNS4xOSAwLTcuNzggMS42Mi04Ljc2IDEuNjItLjk3IDMuNzcuMzMgOC4wOCAyLjkybDQuODQgMi45MloiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", ke = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE0IDMuNWEzLjUgMy41IDAgMSAxIDcgMHYyMmEzLjUgMy41IDAgMSAxLTcgMHYtMjJaIiBmaWxsPSIjZmZmIi8+CiAgPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjkiIHJ4PSIzLjUiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", pt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iLjIxIiB3aWR0aD0iMjYiIGhlaWdodD0iMjUiIHJ4PSI1IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=", Lt = ct(
  ({
    controls: {
      audioData: e,
      isRecordingInProgress: t,
      recordedBlob: n,
      duration: r,
      currentAudioTime: c,
      audioSrc: m,
      bufferFromRecordedBlob: g,
      togglePauseResume: d,
      startRecording: M,
      stopRecording: z,
      saveAudioFile: S,
      isAvailableRecordedAudio: w,
      isPausedRecordedAudio: L,
      isPausedRecording: N,
      isProcessingStartRecording: f,
      isProcessingRecordedAudio: h,
      isCleared: p,
      formattedDuration: v,
      formattedRecordingTime: R,
      formattedRecordedAudioCurrentTime: Z,
      clearCanvas: G,
      setCurrentAudioTime: _,
      isProcessingOnResize: ee,
      _setIsProcessingOnResize: A,
      _setIsProcessingAudioOnComplete: te
    },
    width: W = "100%",
    height: Se = 200,
    speed: re = 3,
    backgroundColor: C = "transparent",
    mainBarColor: T = "#FFFFFF",
    secondaryBarColor: P = "#5e5e5e",
    barWidth: ne = 2,
    gap: B = 1,
    rounded: k = 5,
    isControlPanelShown: Ce = !0,
    isDownloadAudioButtonShown: ie = !1,
    animateCurrentPick: ce = !0,
    fullscreen: U = !1,
    onlyRecording: x = !1,
    isDefaultUIShown: me = !0,
    defaultMicrophoneIconColor: Ne = T,
    defaultAudioWaveIconColor: ve = T,
    mainContainerClassName: de,
    canvasContainerClassName: oe,
    isProgressIndicatorShown: ye = !x,
    progressIndicatorClassName: se,
    isProgressIndicatorTimeShown: I = !0,
    progressIndicatorTimeClassName: H,
    isProgressIndicatorOnHoverShown: J = !x,
    progressIndicatorOnHoverClassName: ae,
    isProgressIndicatorTimeOnHoverShown: Q = !0,
    progressIndicatorTimeOnHoverClassName: b,
    isAudioProcessingTextShown: E = !0,
    audioProcessingTextClassName: a,
    controlButtonsClassName: fe
  }, xe) => {
    const [ze, He] = l(0), [D, Ae] = l(0), [ge, $e] = l(0), [V, Me] = l(0), [q, je] = l(!1), [Te, X] = l(window.innerWidth), [De, be] = l(!1), ue = Te < 768, he = Math.trunc(re), i = Math.trunc(B), u = Math.trunc(
      ue && i > 0 ? ne + 1 : ne
    ), $ = u + i * u, o = y(null), pe = y([]), _e = y(he), Ve = y(u), qe = y(u), Ie = y(null), F = xe, Xe = zt(Te), {
      result: we,
      setResult: Ke,
      run: et
    } = dt({
      fn: ht,
      initialValue: [],
      onMessageReceived: rt
    }), tt = ft(le);
    O(() => {
      le(), setTimeout(le, 100), setTimeout(le, 500), setTimeout(le, 1e3);
      const j = () => {
        Xe.current !== window.innerWidth && (w ? (X(window.innerWidth), A(!0), be(!0), tt()) : (X(window.innerWidth), le()));
      };
      return window.addEventListener("resize", j), () => {
        window.removeEventListener("resize", j);
      };
    }, [W, w]), Je(() => {
      o.current && ((_e.current >= he || !e.length) && (_e.current = e.length ? 0 : he, at({
        audioData: e,
        unit: $,
        index: Ve,
        index2: qe,
        canvas: o.current,
        picks: pe.current,
        isRecordingInProgress: t,
        isPausedRecording: N,
        backgroundColor: C,
        mainBarColor: T,
        secondaryBarColor: P,
        barWidth: u,
        rounded: k,
        animateCurrentPick: ce,
        fullscreen: U
      })), _e.current += 1);
    }, [
      o.current,
      e,
      u,
      C,
      T,
      P,
      k,
      U,
      me,
      V
    ]), O(() => {
      var j, Y;
      if (w)
        return q ? (j = o.current) == null || j.addEventListener("mouseleave", Ze) : (Y = o.current) == null || Y.addEventListener("mouseenter", Re), () => {
          var Le, Ye;
          q ? (Le = o.current) == null || Le.removeEventListener(
            "mouseleave",
            Ze
          ) : (Ye = o.current) == null || Ye.removeEventListener(
            "mouseenter",
            Re
          );
        };
    }, [q, w]), O(() => {
      var Y;
      if (!g || !o.current || t || De)
        return;
      if (x) {
        G();
        return;
      }
      pe.current = [];
      const j = g.getChannelData(0);
      return et({
        bufferData: j,
        height: ge,
        width: V,
        barWidth: u,
        gap: i
      }), (Y = o.current) == null || Y.addEventListener(
        "mousemove",
        Ue
      ), () => {
        var Le;
        (Le = o.current) == null || Le.removeEventListener(
          "mousemove",
          Ue
        );
      };
    }, [
      g,
      D,
      ge,
      B,
      ne,
      De
    ]), O(() => {
      if (!(x || !(we != null && we.length) || !o.current || h)) {
        if (p) {
          Ke([]);
          return;
        }
        ot({
          barsData: we,
          canvas: o.current,
          barWidth: u,
          gap: i,
          backgroundColor: C,
          mainBarColor: T,
          secondaryBarColor: P,
          currentAudioTime: c,
          rounded: k,
          duration: r
        });
      }
    }, [
      we,
      c,
      p,
      k,
      C,
      T,
      P
    ]), O(() => {
      h && o.current && Oe({
        canvas: o.current,
        backgroundColor: C
      });
    }, [h]);
    function le() {
      if (!Ie.current || !o.current)
        return;
      _e.current = he;
      const j = Math.trunc(
        Ie.current.clientHeight * window.devicePixelRatio / 2
      ) * 2;
      Ae(Ie.current.clientWidth), $e(j), Me(
        Math.round(
          Ie.current.clientWidth * window.devicePixelRatio
        )
      ), be(!1);
    }
    function rt() {
      A(!1), te(!1), F != null && F.current && !ee && (F.current.src = m);
    }
    const Re = () => {
      je(!0);
    }, Ze = () => {
      je(!1);
    }, Ue = (j) => {
      He(j.offsetX);
    }, nt = (j) => {
      if (F != null && F.current && o.current) {
        const Y = r / D * (j.clientX - o.current.getBoundingClientRect().left);
        F.current.currentTime = Y, _(Y);
      }
    }, Fe = c / r * D;
    return /* @__PURE__ */ K("div", { className: `voice-visualizer ${de ?? ""}`, children: [
      /* @__PURE__ */ K(
        "div",
        {
          className: `voice-visualizer__canvas-container ${oe ?? ""}`,
          ref: Ie,
          style: { width: We(W) },
          children: [
            /* @__PURE__ */ s(
              "canvas",
              {
                ref: o,
                width: V,
                height: ge,
                onClick: nt,
                style: {
                  height: We(Se),
                  width: D
                },
                children: "Your browser does not support HTML5 Canvas."
              }
            ),
            me && p && /* @__PURE__ */ K(Ge, { children: [
              /* @__PURE__ */ s(Pe, { color: ve }),
              /* @__PURE__ */ s(Pe, { color: ve, reflect: !0 }),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: M,
                  className: "voice-visualizer__canvas-microphone-btn",
                  children: /* @__PURE__ */ s(
                    gt,
                    {
                      color: Ne,
                      stroke: 0.5,
                      className: "voice-visualizer__canvas-microphone-icon"
                    }
                  )
                }
              )
            ] }),
            E && h && /* @__PURE__ */ s(
              "p",
              {
                className: `voice-visualizer__canvas-audio-processing ${a ?? ""}`,
                style: { color: T },
                children: "Processing Audio..."
              }
            ),
            q && w && !h && !ue && J && /* @__PURE__ */ s(
              "div",
              {
                className: `voice-visualizer__progress-indicator-hovered ${ae ?? ""}`,
                style: {
                  left: ze
                },
                children: Q && /* @__PURE__ */ s(
                  "p",
                  {
                    className: `voice-visualizer__progress-indicator-hovered-time 
                    ${D - ze < 70 ? "voice-visualizer__progress-indicator-hovered-time-left" : ""} 
                    ${b ?? ""}`,
                    children: Qe(
                      r / D * ze
                    )
                  }
                )
              }
            ),
            ye && w && !h && r ? /* @__PURE__ */ s(
              "div",
              {
                className: `voice-visualizer__progress-indicator ${se ?? ""}`,
                style: {
                  left: Fe < D - 1 ? Fe : D - 1
                },
                children: I && /* @__PURE__ */ s(
                  "p",
                  {
                    className: `voice-visualizer__progress-indicator-time ${D - c * D / r < 70 ? "voice-visualizer__progress-indicator-time-left" : ""} ${H ?? ""}`,
                    children: Z
                  }
                )
              }
            ) : null
          ]
        }
      ),
      Ce && /* @__PURE__ */ K(Ge, { children: [
        /* @__PURE__ */ K("div", { className: "voice-visualizer__audio-info-container", children: [
          t && /* @__PURE__ */ s("p", { className: "voice-visualizer__audio-info-time", children: R }),
          r && !h ? /* @__PURE__ */ s("p", { children: v }) : null
        ] }),
        /* @__PURE__ */ K("div", { className: "voice-visualizer__buttons-container", children: [
          t && /* @__PURE__ */ s("div", { className: "voice-visualizer__btn-container", children: /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: `voice-visualizer__btn-left ${N ? "voice-visualizer__btn-left-microphone" : ""}`,
              onClick: d,
              children: /* @__PURE__ */ s(
                "img",
                {
                  src: N ? Be : ke,
                  alt: N ? "Play" : "Pause"
                }
              )
            }
          ) }),
          !p && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: `voice-visualizer__btn-left ${t || f ? "voice-visualizer__visually-hidden" : ""}`,
              onClick: d,
              disabled: h,
              children: /* @__PURE__ */ s(
                "img",
                {
                  src: L ? Mt : ke,
                  alt: L ? "Play" : "Pause"
                }
              )
            }
          ),
          p && /* @__PURE__ */ K(
            "button",
            {
              type: "button",
              className: `voice-visualizer__btn-center relative ${f ? "voice-visualizer__btn-center--border-transparent" : ""}`,
              onClick: M,
              disabled: f,
              children: [
                f && /* @__PURE__ */ s("div", { className: "spinner__wrapper", children: /* @__PURE__ */ s("div", { className: "spinner" }) }),
                /* @__PURE__ */ s("img", { src: Be, alt: "Microphone" })
              ]
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: `voice-visualizer__btn-center voice-visualizer__btn-center-pause ${t ? "" : "voice-visualizer__visually-hidden"}`,
              onClick: z,
              children: /* @__PURE__ */ s("img", { src: pt, alt: "Stop" })
            }
          ),
          !p && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: G,
              className: `voice-visualizer__btn ${fe ?? ""}`,
              disabled: h,
              children: "Clear"
            }
          ),
          ie && n && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: S,
              className: `voice-visualizer__btn ${fe ?? ""}`,
              disabled: h,
              children: "Download Audio"
            }
          )
        ] })
      ] })
    ] });
  }
);
function St({
  onStartRecording: e,
  onStopRecording: t,
  onPausedRecording: n,
  onResumedRecording: r,
  onClearCanvas: c,
  onEndAudioPlayback: m,
  onStartAudioPlayback: g,
  onPausedAudioPlayback: d,
  onResumedAudioPlayback: M,
  onErrorPlayingAudio: z,
  mediaRecorderOptions: S,
  audioTrackConstraints: w
} = {}) {
  const [L, N] = l(!1), [f, h] = l(!1), [p, v] = l(null), [R, Z] = l(new Uint8Array(0)), [G, _] = l(!1), [ee, A] = l(null), [te, W] = l(null), [Se, re] = l(0), [C, T] = l(0), [P, ne] = l(0), [B, k] = l(""), [Ce, ie] = l(!0), [ce, U] = l(0), [x, me] = l(!0), [Ne, ve] = l(!1), [de, oe] = l(null), [ye, se] = l(!1), I = y(null), H = y(null), J = y(null), ae = y(null), Q = y(null), b = y(null), E = y(null), a = y(null), fe = !!(te && !G), xe = mt(P), ze = ut(Se), He = Qe(ce), D = Ne || G;
  O(() => {
    if (!L || f)
      return;
    const u = setInterval(() => {
      const $ = performance.now();
      re((o) => o + ($ - C)), T($);
    }, 1e3);
    return () => clearInterval(u);
  }, [C, f, L]), O(() => {
    if (de) {
      X();
      return;
    }
  }, [de]), O(() => () => {
    X();
  }, []), O(() => (x || window.addEventListener("beforeunload", Ae), () => {
    window.removeEventListener("beforeunload", Ae);
  }), [x]);
  const Ae = (i) => {
    i.preventDefault(), i.returnValue = "";
  }, ge = async (i) => {
    if (i)
      try {
        if (i.size === 0)
          throw new Error("Error: The audio blob is empty");
        const u = URL.createObjectURL(i);
        k(u);
        const $ = await i.arrayBuffer(), pe = await new AudioContext().decodeAudioData($);
        W(pe), ne(pe.duration - 0.06), oe(null);
      } catch (u) {
        console.error("Error processing the audio blob:", u), oe(
          u instanceof Error ? u : new Error("Error processing the audio blob")
        );
      }
  }, $e = () => {
    se(!0), navigator.mediaDevices.getUserMedia({ audio: w ?? !0 }).then((i) => {
      me(!1), se(!1), N(!0), T(performance.now()), v(i), H.current = new window.AudioContext(), J.current = H.current.createAnalyser(), ae.current = new Uint8Array(
        J.current.frequencyBinCount
      ), Q.current = H.current.createMediaStreamSource(i), Q.current.connect(J.current), I.current = new MediaRecorder(
        i,
        S
      ), I.current.addEventListener(
        "dataavailable",
        Me
      ), I.current.start(), e && e(), V();
    }).catch((i) => {
      se(!1), oe(
        i instanceof Error ? i : new Error("Error starting audio recording")
      );
    });
  }, V = () => {
    J.current.getByteTimeDomainData(ae.current), Z(new Uint8Array(ae.current)), b.current = requestAnimationFrame(V);
  }, Me = (i) => {
    I.current && (I.current = null, a.current = new Audio(), A(i.data), ge(i.data));
  }, q = () => {
    a.current && (U(a.current.currentTime), E.current = requestAnimationFrame(q));
  }, je = () => {
    L || ye || (x || X(), $e());
  }, Te = () => {
    L && (N(!1), I.current && (I.current.stop(), I.current.removeEventListener(
      "dataavailable",
      Me
    )), p == null || p.getTracks().forEach((i) => i.stop()), b.current && cancelAnimationFrame(b.current), Q.current && Q.current.disconnect(), H.current && H.current.state !== "closed" && H.current.close(), _(!0), re(0), h(!1), t && t());
  }, X = () => {
    b.current && (cancelAnimationFrame(b.current), b.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null), I.current && (I.current.removeEventListener(
      "dataavailable",
      Me
    ), I.current.stop(), I.current = null), p == null || p.getTracks().forEach((i) => i.stop()), a != null && a.current && (a.current.removeEventListener("ended", ue), a.current.pause(), a.current.src = "", a.current = null), H.current = null, J.current = null, ae.current = null, Q.current = null, v(null), se(!1), N(!1), _(!1), A(null), W(null), re(0), T(0), ne(0), k(""), U(0), ie(!0), h(!1), ve(!1), Z(new Uint8Array(0)), oe(null), me(!0), c && c();
  }, De = () => {
    if (a.current && a.current.paused) {
      const i = a.current.play();
      i !== void 0 && i.catch((u) => {
        console.error(u), z && z(
          u instanceof Error ? u : new Error("Error playing audio")
        );
      });
    }
  }, be = () => {
    var i, u, $;
    if (L) {
      h((o) => !o), ((i = I.current) == null ? void 0 : i.state) === "recording" ? ((u = I.current) == null || u.pause(), re((o) => o + (performance.now() - C)), b.current && cancelAnimationFrame(b.current), n && n()) : (b.current = requestAnimationFrame(V), ($ = I.current) == null || $.resume(), T(performance.now()), r && r());
      return;
    }
    if (a.current && fe)
      if (a.current.paused)
        requestAnimationFrame(q), De(), a.current.addEventListener("ended", ue), ie(!1), g && ce === 0 && g(), M && ce !== 0 && M();
      else {
        E.current && cancelAnimationFrame(E.current), a.current.removeEventListener("ended", ue), a.current.pause(), ie(!0);
        const o = a.current.currentTime;
        U(o), a.current.currentTime = o, d && d();
      }
  }, ue = () => {
    E.current && cancelAnimationFrame(E.current), ie(!0), a != null && a.current && (a.current.currentTime = 0, U(0), m && m());
  }, he = () => {
    var u;
    if (!B)
      return;
    const i = document.createElement("a");
    i.href = B, i.download = `recorded_audio${lt(
      (u = I.current) == null ? void 0 : u.mimeType
    )}`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(B);
  };
  return {
    audioRef: a,
    isRecordingInProgress: L,
    isPausedRecording: f,
    audioData: R,
    recordingTime: Se,
    isProcessingRecordedAudio: D,
    recordedBlob: ee,
    mediaRecorder: I.current,
    duration: P,
    currentAudioTime: ce,
    audioSrc: B,
    isPausedRecordedAudio: Ce,
    bufferFromRecordedBlob: te,
    isCleared: x,
    isAvailableRecordedAudio: fe,
    formattedDuration: xe,
    formattedRecordingTime: ze,
    formattedRecordedAudioCurrentTime: He,
    startRecording: je,
    togglePauseResume: be,
    stopRecording: Te,
    saveAudioFile: he,
    clearCanvas: X,
    setCurrentAudioTime: U,
    error: de,
    isProcessingOnResize: Ne,
    isProcessingStartRecording: ye,
    _setIsProcessingAudioOnComplete: _,
    _setIsProcessingOnResize: ve
  };
}
export {
  Lt as VoiceVisualizer,
  St as useVoiceVisualizer
};
