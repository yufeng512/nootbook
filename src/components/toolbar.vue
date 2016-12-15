<template>
  <div class="toolbar">
    <span @click="addnote">＋</span>
    <span @click="toggleActive" :class="{starred:activeNote.favorite}">★</span>
    <span @click="deleteNote">×</span>
  </div>
</template>
<script>
import store from '../store'
export default {
  name: 'toolbar',
  data () {
    return {
    }
  },
  computed: {
    activeNote(){
      return this.$store.state.activeNote
    }
  },
  methods:{
    addnote(state){
      this.$store.commit('addNote')
    },
    toggleActive(){
      this.$store.commit('toggleActive')
      console.log(this.activeNote);
    },
    deleteNote(state){
      this.$store.commit('deleteNote')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.toolbar{
  width: 80px;
  float: left;
  height:100%;
  background: #30414D;
  /*padding: 60px 0;*/
}
.toolbar span{
  font-size: 30px;
  color: #999;
  display: block;
  margin-top: 40px;
  cursor: pointer;
}
.starred{
  color:#ff6600!important;
}
</style>
