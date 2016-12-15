import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    notes:[],       //NodesList 组件要渲染的 notes 对象
    activeNote :{}   //当前选中的对象
  },
  mutations :{
    addNote(state){
      const newNote = {
        text: 'New Note',
        favorite: false
      }
      state.notes.push(newNote)
      state.activeNote = newNote
    },
    editNote(state,text){
      state.activeNote.text = text
    },
    deleteNote(state){
      const i = state.notes.indexOf(state.activeNote)                                               //删除笔记
      state.notes.splice(i,1)
      state.activeNote = state.notes[0] || {}
      //console.log(state.activeNote.text)
    },
    toggleActive(state){                                                        //收藏或取消收藏笔记
      state.activeNote.favorite = !state.activeNote.favorite
    },
    setActiveNote(state,note){                                                 //设置笔记的当前状态
      state.activeNote = note
    }
  }
})
