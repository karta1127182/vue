<template>
  <div class="Ben">
    <div>
    <router-link to="/ben/info">Info</router-link> | 
    <router-link to="/ben/text">Text</router-link> 
    <router-view></router-view>
    </div>
    <titlehandler :title="title" />
    <InputComponent :text.sync="title" />  

  </div>
</template>

<script>
// @ is an alias to /src
import titlehandler from '@/components/Titlehandler.vue'
import InputComponent from '@/components/InputComponent/index.vue'
export default {
  name: 'Ben',
  data(){
      return{
          title:'Hellloword'
      }
  },
  components: {
    InputComponent,
    titlehandler,
  },
  methods: {
    changehandler(val){
        this.title=val;
    }  
  },
}
</script>
