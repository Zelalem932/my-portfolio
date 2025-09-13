import React, { useRef, useEffect } from "react";
import "./LightRaysCanvas.css";

/**
 * Top-center light rays drawn on a transparent <canvas> overlay.
 * No WebGL required. Works in all modern browsers.
 *
 * Props:
 *  - color: string (rgba) tint of light
 *  - intensity: number 0..1
 *  - rays: number of thin rays
 *  - followMouse: boolean (subtle sway)
 */
export default function LightRaysCanvas({
  color = "rgba(220,230,255,1)",
  intensity = 0.9,
  rays = 18,
  followMouse = true,
  className = "",
}) {
  const ref = useRef(null);
  const state = useRef({
    w: 0,
    h: 0,
    dpr: 1,
    t: 0,
    mx: 0.5, // normalized mouse (0..1)
    my: 0.15,
    smx: 0.5,
    smy: 0.15,
  });

  // resize canvas to parent
  const resize = () => {
    const canvas = ref.current;
    if (!canvas || !canvas.parentElement) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.current.w = (canvas.width = Math.max(1, Math.floor(rect.width * dpr)));
    state.current.h = (canvas.height = Math.max(1, Math.floor(rect.height * dpr)));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    state.current.dpr = dpr;
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // mouse sway
  useEffect(() => {
    if (!followMouse) return;
    const move = (e) => {
      const canvas = ref.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      state.current.mx = Math.max(0, Math.min(1, x));
      state.current.my = Math.max(0, Math.min(1, y));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [followMouse]);

  // drawing loop
  useEffect(() => {
    let raf;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const draw = (tms) => {
      state.current.t = (tms || 0) / 1000;
      const { w, h } = state.current;
      if (w === 0 || h === 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      // smooth mouse for gentle sway
      state.current.smx += (state.current.mx - state.current.smx) * 0.06;
      state.current.smy += (state.current.my - state.current.smy) * 0.06;

      const cx = w * (0.5 + (state.current.smx - 0.5) * 0.12); // sway mostly horizontally
      const cy = h * 0.02; // start slightly above top edge
      const beamLen = h * 0.95;
      const beamHalf = Math.max(w * 0.08, 120); // cone width

      ctx.clearRect(0, 0, w, h);

      // ---- spotlight cap (soft round)
      const spotGrad = ctx.createRadialGradient(cx, cy, h * 0.02, cx, cy, h * 0.35);
      spotGrad.addColorStop(0, `rgba(255,255,255,${0.45 * intensity})`);
      spotGrad.addColorStop(0.35, `rgba(230,236,255,${0.30 * intensity})`);
      spotGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = spotGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, h * 0.38, 0, Math.PI * 2);
      ctx.fill();

      // ---- cone body
      const coneTop = cy + h * 0.02;
      const coneBottom = cy + beamLen;
      const xLeft = cx - beamHalf;
      const xRight = cx + beamHalf;

      const coneGrad = ctx.createLinearGradient(cx, coneTop, cx, coneBottom);
      coneGrad.addColorStop(0, `rgba(230,235,255,${0.28 * intensity})`);
      coneGrad.addColorStop(0.25, `rgba(220,230,255,${0.16 * intensity})`);
      coneGrad.addColorStop(0.6, `rgba(210,225,255,${0.08 * intensity})`);
      coneGrad.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = coneGrad;
      ctx.beginPath();
      ctx.moveTo(cx, coneTop);
      ctx.lineTo(xRight, coneBottom);
      ctx.lineTo(xLeft, coneBottom);
      ctx.closePath();
      ctx.fill();

      // ---- thin rays inside cone
      const seed = Math.sin(state.current.t * 0.9) * 0.5 + 0.5;
      for (let i = 0; i < rays; i++) {
        const pct = i / (rays - 1 || 1); // 0..1
        const jitter = (Math.sin(i * 12.9898 + state.current.t * 1.7) * 0.5 + 0.5) * 0.5;
        const x = xLeft + (xRight - xLeft) * pct + (jitter - 0.25) * 12; // small sway
        const width = Math.max(1, (1 - Math.abs(pct - 0.5) * 2) * 3 + 1);
        const bottomFade = 0.65 + seed * 0.25;

        const rayGrad = ctx.createLinearGradient(x, coneTop, x, coneBottom * bottomFade);
        rayGrad.addColorStop(0.0, `rgba(255,255,255,${0.18 * intensity})`);
        rayGrad.addColorStop(0.15, `rgba(220,230,255,${0.12 * intensity})`);
        rayGrad.addColorStop(0.6, `rgba(220,230,255,${0.05 * intensity})`);
        rayGrad.addColorStop(1.0, "rgba(255,255,255,0)");

        ctx.fillStyle = rayGrad;
        ctx.fillRect(x - width / 2, coneTop, width, coneBottom);
      }

      // ---- faint vertical falloff under cone
      const underGrad = ctx.createLinearGradient(cx, h * 0.4, cx, h);
      underGrad.addColorStop(0, "rgba(255,255,255,0.08)");
      underGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = underGrad;
      ctx.fillRect(cx - beamHalf * 0.65, h * 0.4, beamHalf * 1.3, h * 0.6);

      // done
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [intensity, rays, followMouse]);

  return <canvas ref={ref} className={`lr2-canvas ${className}`} aria-hidden />;
}
