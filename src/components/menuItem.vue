<template>
 <div class="menuItem">
            <span class="menuKindSamll">{{meunidid}}</span> |
            <span class="menuKind">{{firstName}},{{lastName}}</span> |
            <span class="menuKindSamll">{{age}}</span> |
            <span class="menuKind">{{phone}}</span> |
            <span class="menuKind">{{address}}</span> 
            <button>修改</button>
            <button @click="deleteHandler(index)">刪除</button>
</div>
</template>
<script>
export default {
        name:'menuItem',
        props:{
            id:Number,
            firstName:String,
            lastName:String,
            age:Number,
            phone:Number,
            address:String
            }
}
</script>

