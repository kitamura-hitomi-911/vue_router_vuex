<template>
    <input type="text" v-model="value" :name="item_data.name" />
</template>

<script>
    export default {
        name: 'FormInputText',
        props:{
            tmp_value:{
                type:[String,Number,Array],
                required:true
            },
            item_data:{
                type:Object,
                required:true
            }
        },
        computed:{
            value:{
                get(){
                    return this.tmp_value;
                },
                set(val){
                    this.$emit('updateTmp',{
                        name:this.item_data.name,
                        value:val
                    });
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    input{
        padding:2px;
        border:1px solid #ccc;
    }
</style>