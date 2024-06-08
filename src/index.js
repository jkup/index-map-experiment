document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML += '<button id="load">Load Dynamic Module</button>';
  document.getElementById("load").addEventListener("click", async () => {
    const { dynamicFunction } = await import("./dynamic.js");
    dynamicFunction();
  });
});
