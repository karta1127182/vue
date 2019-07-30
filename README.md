套件安裝
vue-cli
axios
babel-eslint
vuex 
vue-router
vue

兩個子組件綁定資料

inputComponent組件內的input用v-model綁定computed中的inputtext,使數值變化後用set and get 拿值與傳值 

//inputComponent

<template>
  
    <input type="text" v-model="inputtext">
    
</template>

 props:
 
    {
        text:{
            type:String,
            require:true
        }     
    },
    
computed:

    {
        inputtext:{       
            get(){           
                return this.text;               
            },            
            set(val){           
                this.$emit('update:text',val)                
            }            
        }        
    }
    
//Titlehandler
    
    <template>
        <h1>{{title}}</h1>
    </template> 

父層//ben.vue
  
    <template>
      <titlehandler :title="title" />
      <InputComponent :text.sync="title" />  
    </template>
    ...
    data(){
      return{
          title:'Hellloword'
      }
    }
    
 當InputComponent改變的時候，this.$emit('update:text',val)與父層的:text.sync，可以使子層輸入時同時改變父層data的資料
 
 
 Vuex
 
 state
 
 存放資料的地方
 
 Actions
 
 執行異步動作，不能直接修改state，必須經由Mutations
 
 Actions內函式有xxx(context)，可以執行其他動作
 
 
    xxx(context){
      let {commit, dispatch, getters, rootGetters, rootState, state} = context;
    }
 
 Mutations
 
 執行同步動作，不能執行異步
 
 Mutations內函式有xxx(state,payload)，可以操作state
 
     xxx(state, payload){
          state.xxx = payload;
      }
 
 mapstate,mapActions(使用於異步),mapMutations(使用於同步)
 import {mapState,mapMutations,mapActions} from 'vuex'
 避免重複使用this.$store.state.xxx,this.$store.mutations.xxx,this.$store.actions.xxx 等等，造成程式碼不好閱讀
    
    
 當state資料為對象時
 
      ...mapstate([
      xxx:state=>state.list;(將this.$store.state.xxx簡化成state.xxx)
      ])
      
  當state資料為物件時
 
      ...mapstate([
          'xxx';(將this.$store.state.xxx簡化成state.xxx)
      ])
 
    
