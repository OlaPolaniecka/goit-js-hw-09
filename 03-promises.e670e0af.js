var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;function i(e,o){return new Promise(((t,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("iQIUW");const r=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');document.querySelector("button").addEventListener("submit",(e=>{e.preventDefault();for(let e=1;e<=d;e++){i(e,r+(e-1)*l).then((({position:e,delay:o})=>{Notiflix.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{Notiflix.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.e670e0af.js.map
