<script>
export default {
    name:'inputComponent',
    props:{
        text:{
            type:String,
            require:true
        }
    },
    computed:{
        inputtext:{
            get(){
                return this.text;
            },
            set(val){
                this.$emit('update:text',val)
            }
        }
    }
    
    
}
</script>
<template>
    <input type="text" v-model="inputtext">
</template>
<style >
    input{
        height: 20px;
    }
</style>
