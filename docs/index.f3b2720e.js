function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequireb1fe;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequireb1fe=i),i.register("27Lyk",(function(t,r){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"l1gf1":"index.f3b2720e.js","2Rzth":"pic.bf690d51.jpg"}'));const a=document.querySelectorAll("[data-number]"),o=document.querySelectorAll("[data-operation]"),s=document.querySelector("[data-delete]"),l=document.querySelector("[data-all-clear]"),p=document.querySelector("[data-previous-operand]"),u=document.querySelector("[data-current-operand]"),d=new class{constructor(e,t){this.previousOperandTextElement=e,this.currentOperandTextElement=t,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0}delete(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}appendNumber(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+e.toString())}chooseOperation(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}compute(){let e;const t=parseFloat(this.previousOperand),r=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(r)){switch(this.operation){case"+":e=t+r;break;case"-":e=t-r;break;case"*":e=t*r;break;case"÷":e=t/r;break;default:return}this.currentOperand=e.toString(),this.operation=void 0,this.previousOperand=""}}getDisplayNumber(e){const t=e.toString(),r=parseFloat(t.split(".")[0]),n=t.split(".")[1];let i;return i=isNaN(r)?"":r.toLocaleString("en",{maximumFractionDigits:0}),null!=n?`${i}.${n}`:i}updateDisplay(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText=`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`:this.previousOperandTextElement.innerText=""}}(p,u);a.forEach((e=>{e.addEventListener("click",(()=>{d.appendNumber(e.innerText),d.updateDisplay()}))})),o.forEach((e=>{e.addEventListener("click",(()=>{d.chooseOperation(e.innerText),d.updateDisplay()}))})),s.addEventListener("click",(e=>{d.delete(),d.updateDisplay()})),l.addEventListener("click",(e=>{d.clear(),d.updateDisplay()}));document.querySelector("[data-equals]").addEventListener("click",(e=>{d.compute(),d.updateDisplay()}));const c=p.parentElement;var h;h=new URL(i("27Lyk").resolve("2Rzth"),import.meta.url).toString();const f=new URL(h);null!==c&&(c.style.backgroundImage=`url(${f})`);
//# sourceMappingURL=index.f3b2720e.js.map