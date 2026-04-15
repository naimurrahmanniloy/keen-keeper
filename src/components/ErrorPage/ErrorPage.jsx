import React, { useState } from "react";

const BeautifulError = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  // Soft parallax effect on mouse move
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setTransform({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center p-5 bg-fixed overflow-hidden"
      style={{
        background: `radial-gradient(at 0% 0%, hsla(210,100%,95%,1) 0, transparent 50%), 
                    radial-gradient(at 100% 0%, hsla(225,100%,92%,1) 0, transparent 50%), 
                    radial-gradient(at 100% 100%, hsla(250,100%,95%,1) 0, transparent 50%), 
                    radial-gradient(at 0% 100%, hsla(200,100%,92%,1) 0, transparent 50%)`,
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Interactive Card */}
      <div
        style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}
        className="relative transition-transform duration-75 ease-out max-w-lg w-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-3xl p-12 text-center"
      >
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-24 w-24 bg-blue-50 rounded-2xl flex items-center justify-center animate-bounce">
            <span className="text-5xl">☁️</span>
            <span className="absolute -top-2 -right-2 text-2xl animate-pulse">
              ✨
            </span>
          </div>
        </div>

        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500 tracking-tighter mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Lost in the clouds?
        </h2>

        <p className="text-slate-500 leading-relaxed mb-10">
          The page you're looking for has drifted away. <br />
          Don't worry, even the best explorers get lost sometimes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            Take Me Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all active:scale-95"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
    </div>
  );
};

export default BeautifulError;
