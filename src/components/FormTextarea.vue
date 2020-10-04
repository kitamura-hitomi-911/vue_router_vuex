<template>
    <textarea v-model="value" :name="item_data.name" :disabled="item_data.disabled"></textarea>
</template>

<script>
    export default {
        name: 'FormTextarea',
        props:{
            tmp_value:{
                type:[String,Number],
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
    textarea{
        padding:2px;
        border:1px solid #ccc;
    }
</style>