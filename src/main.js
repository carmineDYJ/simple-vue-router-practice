import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
let history;
function simpleRouter() {
  let hash = window.location.hash;
  let hashNum = hash.substr(1);
  hashNum = hashNum || 1;
  let div = window.document.querySelector(`#d${hashNum}`);
  console.log(!div);
  if (!div) {
    div = window.document.querySelector(`#d404`);
  }
  div.style.display = "block";
  if(history)
    history.style.display = "none";
  console.log(div);
  history = div;
}
simpleRouter();

window.addEventListener("hashchange", ()=>{
  simpleRouter();
});