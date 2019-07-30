<template>
       <div>
            <div class="menuItem" v-if="itemLook">
                <span class="menuKindSamll">{{itemId}}</span> |
                <span class="menuKind">{{itemNameFirst}},{{itemNameLast}}</span> |
                <span class="menuKindSamll">{{itemAge}}</span> |
                <span class="menuKind">{{itemPhone}}</span> |
                <span class="menuKind">{{itemAddress}}</span> 
                <button @click="itemChangeInput">修改</button>
                <button @click="$emit('itemDel')">刪除</button>
            </div>
            <div class="menuItem" v-else>
                <span class="menuKindSamll">{{itemId}}</span> |
                <input v-model="edit.name.first"> |
                <input v-model="edit.name.last"> |
                <input v-model="edit.age"> |
                <input v-model="edit.phone"> |
                <input v-model="edit.address"> |
                <button @click="itemEditInput">修改</button>
                <button @click="itemChangeInput">取消</button>
            </div>
        </div>
</template>
<script>

export default {
        data() {
            return {
                itemLook:true,
                edit:{
                "id":this.itemId,
                "name":{
                    "first":this.itemNameFirst,
                    "last":this.itemNameLast,
                },
                
                "age":parseInt(this.itemAge),
                "phone":this.itemPhone,
                "address":this.itemAddress
                }
                
            }
        },
        props:{
            itemId:Number,
            itemNameFirst:String,
            itemNameLast:String,
            itemAge:Number,
            itemPhone:String,
            itemAddress:String,
            },
        methods: {
            itemChangeInput(){
                this.itemLook=!this.itemLook;
                this.edit.name.first=this.itemNameFirst;
                this.edit.name.last=this.itemNameLast;
                this.edit.age=this.itemAge;
                this.edit.phone=this.itemPhone;
                this.edit.address=this.itemAddress;
            },
            itemEditInput(){
            this.edit.age=parseInt(this.edit.age)
            this.$emit('editHandler', this.edit)
            }
        }
}
</script>


