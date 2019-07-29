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
    
    getNum(context){
      console.log(context)
      let {commit, dispatch, getters, rootGetters, rootState, state} = context;
      // setTimeout(()=>{return ChangeNum(300)},(2000))

      setTimeout(() => {
        commit('changeNum', '300');
      }, 1e3);

        axios.get('http://localhost:3000/posts')
        .then(function (response) {
        commit('enterlist',(response.data));
        console.log(response.data);
        console.log(state.list);
        })
        .catch(function (error) {
          console.log(error);
        });  
      
      
  
    }
  }
})
