<template>
    <div class="form_unit" :class="'form_unit-'+unit_data.id">
        <dl>
            <dt>{{unit_data.label}}</dt>
            <dd>
                <FormItem v-for="item in unit_data.items" :item_data="item" :stored_value="form_data[item.name]" :tmp_value="tmp_form_data[item.name]" :mode="mode" :key="item.name" @updateTmp="updateTmp"></FormItem>
            </dd>
        </dl>
    </div>
</template>

<script>
    import FormItem from '@/components/FormItem.vue';

    export default {
        name: 'FormUnit',
        props:{
            // サーバから受け取った値
            form_data:{
                type:Object
            },
            // フロントで保持している最新の値（サーバ保存前）
            tmp_form_data:{
                type:Object,
                required: true
            },
            unit_data:{
                type:Object,
                required:true
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
        components:{
            FormItem
        },
        methods:{
            updateTmp(obj){
                this.$emit('updateTmp',obj);
            }
        }
    };
</script>

<style lang="scss">

</style>