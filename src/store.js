import Vue from 'vue';
import Vuex from 'vuex';
import {itemRead,itemCreat,itemDelet,itemEdit} from '../api.js';
Vue.use(Vuex);

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
        state.list =payload;
      }
      
  },
  actions: {
    getList(context){
      let {commit} = context;
      itemRead()
      .then(function (response) {
      commit('enterlist',(response.data));
      })
      .catch(function (error) {
        alert(error);
      });
    },
    enterList(context,posts){
      let{state}=context;
      itemCreat(posts)
      .then(function (res) {
        state.list.push(res.data);
      })
      .then(function(){
        alert('成功');
        window.location.reload();
      })
      .catch(function(err){
        alert(err);
      });
    },
    editList(context,edit){
      itemEdit(edit.id,edit)
      .then(function(){
        alert('成功');
        window.location.reload();
      })
      .catch(function(err){
        alert(err)
      })

    },
    deleteList(context,index)
    {
   
      if(confirm(`是否刪除 ${index}`)){
        itemDelet(index)
        .then(function(){
          alert('成功');
          window.location.reload();
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
