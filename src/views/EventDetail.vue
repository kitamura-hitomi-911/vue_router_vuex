<template>
  <div>
    <div class="loading" v-if="is_loading">ローディング</div>
    <EventForm :is_disp="!is_loading" v-else></EventForm>

    <div class="event" v-if="!is_loading">
      <dl>
        <dt>イベント名</dt>
        <dd>{{event.name}}</dd>
      </dl>
    </div>
    <div class="l-btm_btns">
      <p class="btn btn-back">
        <router-link :to="{name:'Event'}">イベント一覧に戻る</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import EventForm from '@/containers/EventForm.vue';
  import { mixin_page_title } from '@/plugins/mixin_page_title';

  export default {
    name: 'EventDetail',
    mixins:[mixin_page_title],
    data(){
      return {
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
      }
    },
    computed:{
      event(){
        let _event = this.getEvents({url_name:this.url_name});
        return _event.length ? _event[0] : null;
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
      EventForm
    },
    methods: {
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
      }
    }
  }
</script>

<style lang="scss">

</style>
