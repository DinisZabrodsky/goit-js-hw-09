!function(){var e=document.querySelector(".form");function n(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();for(var t=Number(e.delay.value),i=Number(e.step.value),a=e.amount.value,c=1;c<=a;c+=1)n(c,t).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),t+=i}))}();
//# sourceMappingURL=03-promises.8b31e59e.js.map