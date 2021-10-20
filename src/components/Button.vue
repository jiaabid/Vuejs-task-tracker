<template>
    <button @click="onClick()" :style="{background:color}" class="btn" type="type">{{title}}</button>
</template>

<script>
export default {
    name:"Button",
    props:{
        title:String,
        color:String,
        type:{
            type:String,
            default:'button'
        }
    },
    methods:{
        onClick(){
           
           this.$emit('toggle-task-form');
        }
    }
}
</script>