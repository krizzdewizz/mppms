function l(r){let s=!1,u;function o(e){r.dispatchEvent(new CustomEvent(e))}function n(e,t){return t?(s=!1,u=setTimeout(()=>{s=!0,o("mppmClickLong")},500)):(clearTimeout(u),s||o("mppmClick"),o("mppmClickEnd")),e.preventDefault(),!1}const i=[["mousedown",e=>n(e,!0)],["mouseup",e=>n(e,!1)],["touchstart",e=>n(e,!0)],["touchend",e=>n(e,!1)]];return i.forEach(([e,t])=>r.addEventListener(e,t,!0)),{destroy(){i.forEach(([e,t])=>r.removeEventListener(e,t,!0))}}}export{l as m};
