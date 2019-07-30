<template>
    <div>
        <div class="newItem">
            
            <input type="text" name="firstName" placeholder="firstname" v-model="inputFirstName">
            <input type="text" name="lastName" placeholder="lastname"  v-model="inputLastName">
            <input type="text" name="age" placeholder="age" v-model="inputAge" >
            <input type="text" name="phone" placeholder="phone" v-model="inputPhone">
            <input type="text" name="address" placeholder="address"  v-model="inputAddress">
            <button @click="$emit('itemNew')">新增</button>
            <button @click="$emit('itemClean')">取消</button>
        </div>
    </div>
</template>
<script>
export default {
        name:'newItem',

        computed:{
            inputFirstName:{
                get(){
                    return this.firstName;
                },
                set(val){
                    this.$emit('update:firstName',val);
                }                
            },
            inputLastName:{
                get(){
                    return this.lastName;
                },
                set(val){
                    this.$emit('update:lastName',val);
                }
            },
            inputAge:{
                get(){
                    return this.age;
                },
                set(val){
                    this.$emit('update:age',val);
                }
            },
            inputPhone:{
                get(){
                    return this.phone;
                },
                set(val){
                    this.$emit('update:phone',val);
                }
            },
            inputAddress:{
                get(){
                    return this.address;
                },
                set(val){
                    this.$emit('update:address',val);
                }
            },            
        }
}
</script>

