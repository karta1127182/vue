<template>
    <div class="menu">
        <div class="newItem">
            <input type="text" name="firstName" placeholder="firstname" v-model="input.firstName">
            <input type="text" name="lastName" placeholder="lastname"  v-model="input.lastName">
            <input type="text" name="age" placeholder="age" v-model="input.age">
            <input type="text" name="phone" placeholder="phone" v-model="input.phone">
            <input type="text" name="address" placeholder="address"  v-model="input.address">
            <button @click="enterHandler">新增</button>
            <button @click="cleanHandler">取消</button>
        </div>
        <div class="menuItem" v-for="(item,index) in list" :key="item.id">
            <span class="menuKindSamll">{{item.id}}</span> |
            <span class="menuKind">{{item.name.first}},{{item.name.last}}</span> |
            <span class="menuKindSamll">{{item.age}}</span> |
            <span class="menuKind">{{item.phone}}</span> |
            <span class="menuKind">{{item.address}}</span> 
            <button>修改</button>
            <button @click="deleteHandler(index)">刪除</button>
        </div>
        
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
import menuItem from '@/components/menuItem.vue';
export default {
    data()
    {
        return{
            input:{
            firstName:'',
            lastName:'',
            age:'',
            phone:'',
            address:''}
        }
    },
    mounted(){
        this.getList();
    },
   
    computed:mapState({
        list:state=>state.list
        }),
    components:{
        menuItem
    },
    methods:{
    ...mapActions([
      'getList',
      'enterList',
      'deleteList'
    ]),
    enterHandler(){
        let posts ={
            "age": this.input.age,
            "name": {
                "first": this.input.firstName,
                "last": this.input.lastName
            },
            "phone": this.input.phone,
            "address": this.input.address
        }
        
        this.enterList(posts)
        this.cleanHandler();
    },
    deleteHandler(index){
        alert(index);
        this.deleteList(index);
    },
    cleanHandler(){
        this.input={
            firstName:"",
            lastName:"",
            age:"",
            phone:"",
            address:""
        }
    }
    },
}
</script>
<style scope>
.menuKind{
    width: 200px;
    display: inline-block;
    }
.menuKindSamll{
    widows: 50px;
    display:inline-block;
}
</style>