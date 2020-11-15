<template>
    <div class="form_item">
        <template v-if="is_view">
            {{item_data.label}}{{tmp_value_d}}
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
            },
            tmp_value_d(){
                // TODO:未入力
                return Array.isArray(this.tmp_value) ? this.tmp_value.reduce( (_ret, _val) => {
                    let tmp = this.item_data.list.reduce((_ret, _list_item) => {
                        _ret = _list_item.value === _val ? _list_item.label : _ret;
                        return _ret;
                    },'');
                    if(tmp){
                        _ret.push(tmp);
                    }
                    return _ret;
                },[]).join('・') : this.tmp_value;
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