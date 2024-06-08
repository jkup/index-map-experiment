const fs = require("fs");

const indexMap = {
  version: 3,
  file: "bundle.min.js",
  sections: [
    {
      offset: { line: 0, column: 0 },
      url: "bundle.js.map",
    },
    {
      offset: { line: 100, column: 0 },
      url: "bundle.min.js.map",
    },
  ],
};

fs.writeFileSync("dist/index-map.json", JSON.stringify(indexMap), "utf8");
