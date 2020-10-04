<template>
    <div class="form_input_checkbox">
        <p v-for="checkbox in item_data.list" :key="checkbox.value">
            <input type="checkbox" v-model="value" :value="checkbox.value" :name="item_data.name" :id="item_data.name+'_'+checkbox.value" :disabled="item_data.disabled"/>
            <label :for="item_data.name+'_'+checkbox.value">{{checkbox.label}}</label>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'FormInputCheckbox',
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

<style lang="scss">
    .form_input_checkbox{
        input{

        }
    }

</style>