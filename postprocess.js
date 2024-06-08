const fs = require("fs");
const { minify } = require("uglify-js");

const code = fs.readFileSync("dist/bundle.js", "utf8");
const result = minify(code, {
  sourceMap: {
    filename: "bundle.min.js",
    url: "bundle.min.js.map",
    includeSources: true,
    content: fs.readFileSync("dist/bundle.js.map", "utf8"),
  },
});

fs.writeFileSync("dist/bundle.min.js", result.code, "utf8");
fs.writeFileSync("dist/bundle.min.js.map", result.map, "utf8");
