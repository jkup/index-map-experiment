const fs = require("fs");
const path = require("path");

const distDir = "./dist";
const indexMapFile = path.join(distDir, "index-map.json");

const bundles = [
  { file: "index.js", map: "index.js.map", offset: { line: 0, column: 0 } },
  {
    file: "dynamic.js",
    map: "dynamic.js.map",
    offset: { line: 100, column: 0 },
  },
];

const indexMap = {
  version: 3,
  file: "combined.js",
  sections: bundles.map((bundle) => ({
    offset: bundle.offset,
    url: bundle.map,
  })),
};

fs.writeFileSync(indexMapFile, JSON.stringify(indexMap), "utf8");
console.log(`Index map generated at ${indexMapFile}`);
