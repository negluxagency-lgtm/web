"use client";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>

            {/* Grid de líneas */}
            <div className="absolute inset-0" style={{
                backgroundImage: `
                    linear-gradient(rgba(254,154,0,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(254,154,0,0.02) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px"
            }} />

            {/* Línea horizontal brillante - superior */}
            <div className="absolute w-full h-px" style={{
                top: "28%",
                background: "linear-gradient(90deg, transparent 0%, rgba(254,154,0,0.1) 30%, rgba(254,154,0,0.22) 50%, rgba(254,154,0,0.1) 70%, transparent 100%)",
                animation: "scanLineH 8s ease-in-out infinite",
            }} />

            {/* Línea horizontal brillante - inferior */}
            <div className="absolute w-full h-px" style={{
                top: "68%",
                background: "linear-gradient(90deg, transparent 0%, rgba(254,154,0,0.07) 20%, rgba(254,154,0,0.15) 50%, rgba(254,154,0,0.07) 80%, transparent 100%)",
                animation: "scanLineH 10s ease-in-out infinite 3s",
            }} />

            {/* Línea vertical brillante - izquierda */}
            <div className="absolute h-full w-px" style={{
                left: "18%",
                background: "linear-gradient(180deg, transparent 0%, rgba(254,154,0,0.08) 30%, rgba(254,154,0,0.18) 50%, rgba(254,154,0,0.08) 70%, transparent 100%)",
                animation: "scanLineV 12s ease-in-out infinite 1s",
            }} />

            {/* Línea vertical brillante - derecha */}
            <div className="absolute h-full w-px" style={{
                right: "15%",
                background: "linear-gradient(180deg, transparent 0%, rgba(254,154,0,0.06) 40%, rgba(254,154,0,0.13) 60%, transparent 100%)",
                animation: "scanLineV 9s ease-in-out infinite 5s",
            }} />

            {/* Anillo pulsante - esquina superior derecha */}
            <div style={{
                position: "absolute", top: "10%", right: "10%",
                width: 160, height: 160, borderRadius: "50%",
                border: "1px solid rgba(254,154,0,0.1)",
                animation: "pulseOut 4s ease-out infinite",
            }} />
            <div style={{
                position: "absolute", top: "10%", right: "10%",
                width: 160, height: 160, borderRadius: "50%",
                border: "1px solid rgba(254,154,0,0.06)",
                animation: "pulseOut 4s ease-out infinite 1.3s",
            }} />
            <div style={{
                position: "absolute", top: "10%", right: "10%",
                width: 160, height: 160, borderRadius: "50%",
                border: "1px solid rgba(254,154,0,0.03)",
                animation: "pulseOut 4s ease-out infinite 2.6s",
            }} />

            {/* Anillo pulsante - esquina inferior izquierda */}
            <div style={{
                position: "absolute", bottom: "12%", left: "8%",
                width: 120, height: 120, borderRadius: "50%",
                border: "1px solid rgba(254,154,0,0.08)",
                animation: "pulseOut 5s ease-out infinite 0.5s",
            }} />
            <div style={{
                position: "absolute", bottom: "12%", left: "8%",
                width: 120, height: 120, borderRadius: "50%",
                border: "1px solid rgba(254,154,0,0.04)",
                animation: "pulseOut 5s ease-out infinite 2s",
            }} />

            {/* Triángulo flotante - arriba izquierda */}
            <div style={{
                position: "absolute", top: "20%", left: "8%",
                width: 0, height: 0,
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderBottom: "34px solid rgba(254,154,0,0.05)",
                animation: "floatRotate1 14s ease-in-out infinite",
            }} />

            {/* Triángulo flotante - abajo derecha */}
            <div style={{
                position: "absolute", bottom: "25%", right: "8%",
                width: 0, height: 0,
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                borderTop: "26px solid rgba(254,154,0,0.04)",
                animation: "floatRotate2 11s ease-in-out infinite 2s",
            }} />

            {/* Diamante - centro derecha */}
            <div style={{
                position: "absolute", top: "45%", right: "5%",
                width: 30, height: 30,
                border: "1px solid rgba(254,154,0,0.08)",
                transform: "rotate(45deg)",
                animation: "floatRotate1 9s ease-in-out infinite 1s",
            }} />

            {/* Diamante - centro izquierda */}
            <div style={{
                position: "absolute", top: "55%", left: "5%",
                width: 20, height: 20,
                border: "1px solid rgba(254,154,0,0.06)",
                transform: "rotate(45deg)",
                animation: "floatRotate2 12s ease-in-out infinite 3s",
            }} />

            {/* Cruz - centro superior */}
            <div style={{ position: "absolute", top: "15%", left: "50%", animation: "floatUp 8s ease-in-out infinite" }}>
                <div style={{ width: 20, height: 1, background: "rgba(254,154,0,0.12)", position: "absolute", top: 0, left: -10 }} />
                <div style={{ width: 1, height: 20, background: "rgba(254,154,0,0.12)", position: "absolute", top: -10, left: 0 }} />
            </div>

            {/* Cruz - centro inferior */}
            <div style={{ position: "absolute", bottom: "20%", right: "30%", animation: "floatUp 11s ease-in-out infinite 4s" }}>
                <div style={{ width: 16, height: 1, background: "rgba(254,154,0,0.1)", position: "absolute", top: 0, left: -8 }} />
                <div style={{ width: 1, height: 16, background: "rgba(254,154,0,0.1)", position: "absolute", top: -8, left: 0 }} />
            </div>

            {/* Puntos parpadeantes */}
            {[
                { top: "12%", left: "35%", size: 4, delay: "0s" },
                { top: "78%", left: "62%", size: 3, delay: "1.5s" },
                { top: "38%", right: "12%", size: 4, delay: "0.8s" },
                { top: "5%", left: "70%", size: 3, delay: "2.2s" },
                { top: "62%", left: "22%", size: 3, delay: "3.1s" },
                { top: "88%", right: "22%", size: 3, delay: "1.1s" },
            ].map((dot, i) => (
                <div key={i} style={{
                    position: "absolute",
                    top: dot.top,
                    left: "left" in dot ? (dot as any).left : undefined,
                    right: "right" in dot ? (dot as any).right : undefined,
                    width: dot.size,
                    height: dot.size,
                    borderRadius: "50%",
                    background: "rgba(254,154,0,0.5)",
                    boxShadow: "0 0 6px rgba(254,154,0,0.4)",
                    animation: `twinkle 3.5s ease-in-out infinite ${dot.delay}`,
                }} />
            ))}

            {/* Brackets esquinas */}
            {[
                { top: 30, left: 30, bRight: undefined, bBottom: undefined },
                { top: 30, right: 30, bLeft: undefined, bBottom: undefined },
                { bottom: 30, left: 30, bRight: undefined, bTop: undefined },
                { bottom: 30, right: 30, bLeft: undefined, bTop: undefined },
            ].map((pos, i) => (
                <div key={i} style={{ position: "absolute", ...pos }}>
                    <div style={{
                        width: 28, height: 1,
                        background: "rgba(254,154,0,0.15)",
                        position: "absolute",
                        top: pos.bottom !== undefined ? undefined : 0,
                        bottom: pos.bottom !== undefined ? 0 : undefined,
                        left: pos.right !== undefined ? undefined : 0,
                        right: pos.right !== undefined ? 0 : undefined,
                    }} />
                    <div style={{
                        width: 1, height: 28,
                        background: "rgba(254,154,0,0.15)",
                        position: "absolute",
                        top: pos.bottom !== undefined ? undefined : 0,
                        bottom: pos.bottom !== undefined ? 0 : undefined,
                        left: pos.right !== undefined ? undefined : 0,
                        right: pos.right !== undefined ? 0 : undefined,
                    }} />
                </div>
            ))}

            <style>{`
                @keyframes scanLineH {
                    0%, 100% { opacity: 0; }
                    20%, 80% { opacity: 1; }
                }
                @keyframes scanLineV {
                    0%, 100% { opacity: 0; }
                    20%, 80% { opacity: 1; }
                }
                @keyframes pulseOut {
                    0% { transform: scale(0.5); opacity: 0.7; }
                    100% { transform: scale(2.8); opacity: 0; }
                }
                @keyframes floatRotate1 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-18px) rotate(20deg); }
                }
                @keyframes floatRotate2 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(14px) rotate(-25deg); }
                }
                @keyframes floatUp {
                    0%, 100% { transform: translateY(0px); opacity: 0.4; }
                    50% { transform: translateY(-12px); opacity: 0.8; }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.08; transform: scale(0.8); }
                    50% { opacity: 0.6; transform: scale(1.4); }
                }
            `}</style>
        </div>
    );
}
