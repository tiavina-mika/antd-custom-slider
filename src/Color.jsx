/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Layout } from "antd";
import { useState } from "react";
import Footer from "./components/Footer";
import Typography from "./components/Typography";

const colors = [
  { color: "fff", border: "000" },
  { color: "000", border: "7885E9" },
  { color: "79B3F7" },
  { color: "43C093" },
  { color: "EEC456" },
  { color: "EE9919" },
  { color: "F32840" },
  { color: "BCBCBC" }
];

const classes = {
  sliderContainer: {},
  layoutContent: (theme) => ({
    minHeight: "85vh",
    margin: 0,
    background: "#fff",
    padding: theme.spacing(3)
  }),
  colors: {
    margin: -4
  },
  button: {
    backgroundColor: "transparent",
    padding: 0,
    border: "none",
    margin: 4,
    cursor: "pointer"
  },
  color: (color) => ({
    backgroundColor: "#" + color.color,
    border: "2px solid #" + (color.border || "fff"),
    height: 32,
    width: 32,
    borderRadius: "50%"
  }),
  result: (textSize) => ({
    color: "#" + textSize,
    fontSize: 22
  })
};

const Color = () => {
  const [textColor, setTextColor] = useState(colors[1].color);
  console.log(textColor);

  const handleTextColorChange = (value) => {
    setTextColor(value);
  };

  return (
    <div css={classes.sliderContainer} className="flexCenter">
      <Layout.Content
        css={classes.layoutContent}
        className="flexCenter justifyStart stretchSelf"
      >
        {/* ---------- title ---------- */}
        <Typography>Changer la couleur de la police d’écriture</Typography>

        {/* ---------- form ---------- */}
        <div className="m-t-25 flexCenter stretchSelf">
          <div className="flexRow" css={classes.colors}>
            {colors.map((color, index) => (
              <button
                onClick={() => handleTextColorChange(color.color)}
                key={index}
                type="button"
                css={classes.button}
              >
                <div css={classes.color(color)} />
              </button>
            ))}
          </div>
        </div>

        {/* ---------- result ---------- */}
        <div className="m-t-20">
          <span css={classes.result(textColor)}>Here is the result</span>
        </div>
      </Layout.Content>
      <Footer />
    </div>
  );
};

export default Color;
