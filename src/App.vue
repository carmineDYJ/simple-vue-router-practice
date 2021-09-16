<template>
  <div id="app">
    <a href="#1">go to 1</a>
    <a href="#2">go to 2</a>
    <a href="#3">go to 3</a>
    <a href="#4">go to 4</a>
    <div id="d1" style="display: none">1</div>
    <div id="d2" style="display: none">2</div>
    <div id="d3" style="display: none">3</div>
    <div id="d4" style="display: none">4</div>
    <div id="d404" style="display: none">不存在</div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      user:{},
      message: "Hi",
      checkedNames: [],
    };
  },
  components: {},
  methods:{
    onSubmit(){
      alert(this.user);
      console.log(this.user);
    }
  }
};
</script>

