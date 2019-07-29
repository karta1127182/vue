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
<template src="./template.html"></template>
<style scoped src="./style.css"></style>
