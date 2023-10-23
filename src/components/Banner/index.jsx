import React from "react";

export default function Banner() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/new/slides/041.webp')",
        height: 400,
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Collection</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
