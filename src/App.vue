<template>
  <div id="app">
    <toolbar></toolbar>
    <notelist></notelist>
    <editor></editor>
  </div>
</template>

<script>
import toolbar from './components/toolbar'
import notelist from './components/notelist'
import editor from './components/editor'

export default {
  name: 'app',
  components: {
    toolbar,
    notelist,
    editor
  }
}
</script>

<style>
html,body{
  height:100%;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
}
ul, li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width: 100%;
}
</style>
