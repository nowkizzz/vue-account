<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span @click="homeShow" class="clickpan">1223</span>
  </div>
</template>

<script>


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome Vue.js'
    }
  },
  methods: {
    homeShow () {
      const aa = "dsa"
      console.log(aa)
    }
  }
}
</script>


<style  scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
.hello {
  font-size: 13px;
  .clickpan {
    color: red;
  }
}

</style>
