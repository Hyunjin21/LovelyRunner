import React from "react";

const Main10 = () => {
  return (
    <footer
      style={{
        width: "100%",
        paddingBottom: "100px",
        backgroundColor: "#fe97b6",
      }}
    >
      <div
        className="footer-wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="company"
          style={{ color: "#1795ff", textAlign: "center", fontSize: "1.3rem" }}
        >
          <div
            className="logo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              marginBottom: "18px",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/cj.svg"}
              className="w-[100px] m-[10px]"
            />
            <img
              src={process.env.PUBLIC_URL + "/bon.svg"}
              className="w-[132px] m-[10px]"
            />
          </div>
          <p className="text-base text-white">
            ⓒ Lovely Runner Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Main10;
