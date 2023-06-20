//your JS code here. If required.
const container = document.getElementById("browser-info");

let browserInfo = navigator.userAgent;

browserInfo = browserInfo.replace("/", " version ")

let innerContent = `You are using ${browserInfo}`;

container.innerHTML = `<p>${innerContent}</p>`;