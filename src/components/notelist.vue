<template lang="html">
  <div class="notelist">
    <h2>Notes | coligo</h2>
    <div class="listbox">
      <ul>
        <li  @click="show = 'all'" :class="{action: show === 'all'}"> All Notes </li><!--所有笔记 -->
        <li  @click="show = 'favorites'" :class="{action: show === 'favorites'}"> Favorites </li><!--收藏笔记 -->
      </ul>
    </div>
    <div class="container">
      <ul>
        <li v-for= "(note,index) in notes" :class="{action:note===activeNote}" @click="setActiveNote(index)">{{ note.text + index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { updateActiveNote } from './actions'
export default {
  name: 'notelist',
  data () {
    return {
      show : 'all'
    }
  },
  computed: {
    activeNote(){
      return this.$store.state.activeNote
    },
    notes(){
      if(this.show === 'all'){
        return this.$store.state.notes
      }else if(this.show === 'favorites'){
        return this.$store.state.notes.filter(note => note.favorite)
      }
    }
  },
  mounted() {
  },
  methods:{
    setActiveNote(index){
      this.$store.commit('setActiveNote',this.notes[index])
    }
  }
}
</script>

<style lang="css">
.notelist{
  float: left;
  width: 300px;
  height: 100%;
  background: #f5f5f5;
}
.notelist h2{
  padding: 40px 0;
}
.listbox ul{
  padding:20px 0;
  display: inline-block;
}
.listbox ul li{
  height: 32px;
  width: 120px;
  line-height: 32px;
  border: 1px solid #dbdbdb;
  float: left;
  margin: 0 5px;
  cursor: pointer;
}
.container{
  padding: 10px 0;
}
.container ul li{
  height: 32px;
  line-height: 32px;
  cursor:pointer;
  background:#fff;
  color:#333;
}
.action{
  background:#6495ed!important;
  color:#fff!important;
}
</style>
