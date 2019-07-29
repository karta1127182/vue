import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
      num:'500',
      list:[],
  },
  mutations: {
      changeNum(state, payload){
          state.num = payload;
      },
      enterlist(state,payload){
        state.list =payload
      }
      
  },
  actions: {
    getList(context){
      let {commit} = context;
      axios.get('http://localhost:3000/posts')
      .then(function (response) {
      commit('enterlist',(response.data));
      })
      .catch(function (error) {
        alert(error);
      });
    },
    enterList(context,posts){
      let{state}=context
      axios.post('http://localhost:3000/posts',posts)
      .then(function (res) {
        state.list.push(res.data);
      })
      .then(function(){
        alert('成功')
      })
      .catch(function(err){
        alert(err);
      });
    },
    deleteList(context,index)
    {
      let{state}=context;
      let target=this.state.list[index]
      if(confirm(`是否刪除 ${target.name.first},${target.name.last}`)){
        axios.delete('http://localhost:3000/posts/'+index)
        .then(function(){
          state.list.splice(index,1)
          alert('成功')
        })
        .catch(function(err){
          alert(err);
        });
      }
      
    },
    getNum(context){
      
      let {commit} = context;
      // let {commit, dispatch, getters, rootGetters, rootState, state} = context;
      setTimeout(() => {
        commit('changeNum', '300');
      }, 5e3);      
    }
  }
})
