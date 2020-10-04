<template>
    <div class="form_item">
        <template v-if="mode === 'view'">
            {{item_data.label}}{{tmp_value}}
        </template>
        <template v-else>
            <component :is="component_name" :item_data="item_data" :tmp_value="tmp_value" @updateTmp="updateTmp"></component>
        </template>
    </div>
</template>

<script>
    import FormInputText from '@/components/FormInputText.vue';
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
                return 'FormInputText';
            }
        },
        components:{
            FormInputText
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