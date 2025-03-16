import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "120px",
        height: "120px",
        background: "rgba(20, 20, 30, 0.8)",
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        padding: "15px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      }}>
        <div style={{ position: "relative", width: "40px", height: "40px" }}>
          <div className="canvas-loader"></div>
        </div>
        
        <div style={{
          width: "100%",
          marginTop: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          padding: "2px",
        }}>
          <div
            style={{
              width: `${progress}%`,
              height: "6px",
              background: "linear-gradient(90deg, #804dee, #915EFF)",
              borderRadius: "6px",
              transition: "width 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 600,
            marginTop: 10,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
          }}
        >
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
