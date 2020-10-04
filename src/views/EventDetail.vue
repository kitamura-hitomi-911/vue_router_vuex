<template>
  <div>
    <div class="loading" v-if="is_loading">ローディング</div>
    <div class="event_form" v-else>
      <FormUnit  v-for="unit in units" :unit_data="unit" :key="unit.id" :form_data="event" :tmp_form_data="tmp_event" :mode="mode" @updateTmp="updateTmp"></FormUnit>
    </div>
    <div class="l-btm_btns">
      <p class="btn btn-back">
        <router-link :to="{name:'Event'}">イベント一覧に戻る</router-link>
      </p>
      <p class="btn btn_next">
        <a href="#" @click.prevent="submitForm">確認</a>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import FormUnit from '@/components/FormUnit.vue';
  import groups from '@/definition/event';
  import { mixin_page_title } from '@/plugins/mixin_page_title';

  export default {
    name: 'EventDetail',
    mixins:[mixin_page_title],
    data(){
      return {
        groups,
        tmp_event:{},
        page_title_replace_settings:[]
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
      event(){
        let _event = this.getEvents({url_name:this.url_name});
        return _event.length ? _event[0] : null;
      },
      units(){
        return this.groups.length ? this.groups[0].units : [];
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
    },
    components:{
      FormUnit
    },
    methods: {
      updateTmp({name,value}){
        this.tmp_event[name] = value;
        console.log(name,value);
      },
      cloneTour(){
        this.tmp_event = Object.assign({},this.event);
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
