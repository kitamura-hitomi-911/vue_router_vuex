<template>
  <div>
    <div class="loading" v-if="is_loading">ローディング</div>
    <div class="event_form" v-else>
      <FormUnit v-for="unit in units" :unit_data="unit" :key="unit.id" :form_data="event" :tmp_form_data="tmp_event" :mode="mode" @updateTmp="updateTmp"></FormUnit>
    </div>
    <div class="l-btm_btns">
      <p class="btn" :class="btn.class_name" v-for="btn in btns" :key="btn.label">
        <router-link :to="btn.to_obj" v-if="btn.to_obj">{{btn.label}}</router-link>
        <a href="#" @click.prevent="submitForm" v-else>{{btn.label}}</a>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import FormUnit from '@/components/FormUnit.vue';
  import { mixin_page_title } from '@/plugins/mixin_page_title';

  export default {
    name: 'EventDetail',
    mixins:[mixin_page_title],
    data(){
      return {
        units:[],
        tmp_event:{},
        page_title_replace_settings:[],
        btn_settings:{
          edit_input: [
            {
              class_name: 'btn-back',
              label: 'イベント一覧に戻る',
              to_obj: {name: 'Event'}
            },
            {
              class_name: 'btn_next',
              label: '確認'
            }
          ],
          edit_confirm: [
            {
              class_name: 'btn-back',
              label: '戻る',
              to_obj: {name: 'EventEditInput'}
            },
            {
              class_name: 'btn_next',
              label: '上記の内容で更新'
            }
          ]
        }

      }
    },
    props:{
      is_loading:{
        type:Boolean,
        requied:true
      },
      url_name:{
        type:String,
        requied:true
      },
      step:{
        type:String,
        required:true
      }
    },
    computed:{
      btns(){
        console.log(this.step);
        console.log(this.btn_settings);
        return this.btn_settings[this.step];
      },
      item_obj_by_name(){
        return this.units.reduce( (acc,unit) => {
          unit.items.forEach(item=>{
            acc[item.name] = item;
          });
          return acc;
        }, {});
      },
      event(){
        let _event = this.getEvents({url_name:this.url_name});
        return _event.length ? _event[0] : {};
      },
      mode(){
        return this.step.match(/input$/) ? 'edit' : 'view';
      },
      ...mapGetters('events',['getEvents'])
    },
    mounted(){
      console.log('EventDetailMounted');
    },
    created(){
      console.log('EventDetailCreated');
      this.units = this.$getUnitData('event');

    },
    components:{
      FormUnit
    },
    methods: {
      updateTmp({name,value}){
        // 配列かどうかで処理わけ
        if(Array.isArray(value)){
          // value が配列の場合は1回リセットして入れなおす
          this.tmp_event[name].splice(0);
          // 並び順は units の方に準じる
          this.item_obj_by_name[name].list.forEach( ({value:list_value}) => {
            if(value.indexOf(list_value) !== -1){
              this.tmp_event[name].push(list_value);
            }
          });
        }else{
          this.tmp_event[name] = value;
        }
      },
      cloneTour(){
        // 配列があるので
        Object.keys(this.event).forEach(key => {
          this.tmp_event[key] = Array.isArray(this.event[key]) ? this.event[key].concat() : this.event[key];
        });
      },
      onGetAllEvents(){
        console.log('イベント取得完了@イベント詳細ページ');
        this.page_title_replace_settings.push(
          {
            replaced_str: '__EVENT_NAME__',
            replace_str: this.event.name
          }
        );
        this.setPageTitle();
      },
      submitForm(){
        console.log('送信');
        this.$router.push({ name: 'EventEditConfirm', params: { url_name: this.url_name } })
      }
    },
    watch:{
      'is_loading':{
        handler(new_val){
          if(!new_val){
            console.log('Eventから受け取ったis_loading が false になった！');
            this.onGetAllEvents();
          }

        },
        immediate:true
      },
      'event':{
        handler(){
          this.cloneTour();
        },
        immediate:true
      }
    }
  }
</script>

<style lang="scss">

</style>
