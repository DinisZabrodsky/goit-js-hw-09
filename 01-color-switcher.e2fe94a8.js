!function(){var t={};t.body=document.querySelector("body"),t.start=document.querySelector("[data-start]"),t.stop=document.querySelector("[data-stop]"),t.start.addEventListener("click",(function(){o||(o=!0,e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))})),t.stop.addEventListener("click",(function(){clearInterval(e),o=!1}));var e=null,o=!1}();
//# sourceMappingURL=01-color-switcher.e2fe94a8.js.map