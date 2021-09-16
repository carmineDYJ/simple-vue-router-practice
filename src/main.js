import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


let hash = window.location.hash;
let hashNum = hash.substr(1);
hashNum = hashNum || 1;
console.log(`#d${hashNum}`);
let div = window.document.querySelector(`#d${hashNum}`);
if (div) {
  div.style.display = "block";
} else {
  div = window.document.querySelector(`#d404`);
  div.style.display = "block";
}
console.log(div);
let history = window.document.querySelector(`#d${hashNum}`);

window.addEventListener("hashchange", function () {
  hash = window.location.hash;
  hashNum = hash.substr(1);
  console.log("#"+hashNum);
  div = window.document.querySelector(`#d${hashNum}`);
  console.log(div);
  if (div) {
    div.style.display = "block";
  } else {
    div = window.document.querySelector(`#d404`);
    div.style.display = "block";
  }
  history.style.display = "none";
  history = window.document.querySelector(`#d${hashNum}`);
})