<template>
<div>
    <h1>{{num}}</h1>
    <button @click="resetButton">Reset</button>
</div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    name:'FooterFake',
    props:{

    },
    computed:mapState({
        num:state=>state.num,
        list:state=>state.list,
        num(state){
            return state.num;
        },
        list(state){
            return state.list;
        },
    
    mounted() {
        this.$store.dispatch('getNum');
    }
    })},
    methods: {
        ...mapMutations([
            'changeNum'
        ]),
    resetButton(){
        this.changeNum('500');
    }   

    },
}
</script>
<style scoped src="./style.css"></style>
