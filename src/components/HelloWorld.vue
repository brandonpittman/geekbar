<template>
  <div class="hello">
    <h1>{{ msg }} {{ number }}: {{ createdAt }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      createdAt: null
    }
  },
  props: {
    msg: String,
    number: Number
  },
  mounted () {
    this.createdAt = Date.now()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
