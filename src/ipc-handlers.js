const { ipcRenderer } = require("electron");

ipcRenderer.on("cpu", (event, data) => {
  document.getElementById("cpu").innerHTML = data;
});
ipcRenderer.on("mem", (event, data) => {
  document.getElementById("mem").innerHTML = data;
});
ipcRenderer.on("total-mem", (event, data) => {
  document.getElementById("total-mem").innerHTML = data;
});