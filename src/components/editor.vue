<template>
  <div class="editor">
    <textarea class="form-control" >
      {{ editortext }}
    </textarea>
  </div>
</template>

<script>
// import { editNote } from '../actions'

export default {
  name:'editor',
  data(){
    return {
    }
  },
  computed:{
    editortext(){
      return this.$store.state.activeNote.text
    }
  }
}
</script>
<style lang="css">
.editor{
  height: 100%;
  margin-left:380px;
}
.form-control{
  width:100%;
  height:100%;
  display: block;
  border: none;
  outline: none;
  text-indent: 2em;
  font-size: 14px;
  font-family: "微软雅黑";
}
</style>
