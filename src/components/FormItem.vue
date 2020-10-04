<template>
    <div class="form_item">
        <template v-if="is_view">
            {{item_data.label}}{{tmp_value}}
        </template>
        <template v-else>
            <component :is="component_name" :item_data="item_data" :tmp_value="tmp_value" @updateTmp="updateTmp"></component>
        </template>
    </div>
</template>

<script>
    import FormInputText from '@/components/FormInputText.vue';
    import FormInputCheckbox from '@/components/FormInputCheckbox.vue';
    import FormTextarea from '@/components/FormTextarea.vue';
    export default {
        name: 'FormItem',
        props:{
            item_data:{
                type:Object,
                required:true
            },
            tmp_value:{
                type:[String,Number,Array],
                required:true
            },
            stored_value:{
                type:[String,Number,Array]
            },
            mode:{
                type:String,
                default(){
                    return 'view';
                },
                validator: function (value) {
                    // プロパティの値は、必ずいずれかの文字列でなければならない
                    return ['view', 'edit'].indexOf(value) !== -1
                }
            }
        },
        computed:{
            component_name(){
                return {
                    input_text:'FormInputText',
                    input_checkbox:'FormInputCheckbox',
                    textarea:'FormTextarea'
                }[this.item_data.form_type] || 'FormInputText';
            },
            is_view(){
                return this.mode === 'view' || !this.item_data.is_editable
            }
        },
        components:{
            FormInputText,
            FormInputCheckbox,
            FormTextarea
        },
        methods:{
            updateTmp(obj){
                this.$emit('updateTmp',obj);
            }
        }
    };
</script>

<style lang="scss">
    .form_item{

    }
</style>