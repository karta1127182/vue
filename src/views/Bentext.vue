<template>
    <div class="menu">
        <newItem 
        :firstName.sync="input.firstName"
        :lastName.sync="input.lastName"
        :age.sync="input.age"
        :phone.sync="input.phone"
        :address.sync="input.address"
        @itemNew="enterHandler()"
        @itemClean="cleanHandler(index)"
        />
        <menuItem 
            v-for="item in list" 
            :key="item.id"  
            :itemId="item.id" 
            :itemNameFirst="item.name.first"
            :itemNameLast="item.name.last"
            :itemAge="item.age"
            :itemPhone="item.phone"
            :itemAddress="item.address"
            @itemDel="deleteHandler(item.id)"
            @editHandler="editHandler"
        />
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
import menuItem from '@/components/menuItem.vue';
import newItem from '@/components/newItem.vue';
export default {
    data()
    {
        return{
            edit:{},
            editActive:true,
            input:{
            firstName:'',
            lastName:'',
            age:Number,
            phone:'',
            address:''}
        }
    },
    mounted(){
        this.getList();
    },
   
    computed:
        mapState({
            list:state=>state.list
        }),
        
    components:{
        menuItem,
        newItem
    },
    methods:{
    ...mapActions([
      'getList',
      'enterList',
      'deleteList',
      'editList' 
    ]),
    enterHandler(){
        let posts ={
            "age": parseInt(this.input.age),
            "name": {
                "first": this.input.firstName,
                "last": this.input.lastName,
            },
            "phone": this.input.phone,
            "address": this.input.address,
        }
        
        this.enterList(posts);
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
            address:"",
        }
    },
    editHandler(edit){
        this.editList(edit)
    }
    },
}
</script>
<style>
.menuKind{
    width: 200px;
    display: inline-block;
    }
.menuKindSamll{
    widows: 50px;
    display:inline-block;
}
</style>