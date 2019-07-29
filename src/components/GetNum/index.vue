<template>
<div>
    <h1>{{num}}</h1>
    <button @click="resetButton">Reset</button>
</div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    mounted(){
        this.getNum();
    },
    computed:mapState({
        num:state=>state.num,
        list:state=>state.list
        }),
    methods: {
        ...mapActions([
            'getNum'
            ]),
        ...mapMutations([
            'changeNum'
        ]),
        resetButton(){
            this.changeNum('500');
        },   
     
    },
}
</script>
<style scoped src="./style.css"></style>
