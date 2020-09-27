<template>
  <div>
    <div class="event">
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
  import { mapGetters } from 'vuex'
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
      url_name:{
        type:String,
        requied:true
      }
    },
    created(){
      // title用文字列置換
      this.page_title_replace_settings.push(
        {
          replaced_str: '__EVENT_NAME__',
          replace_str: this.event.name
        }
      );
      this.setPageTitle();
    },
    computed:{
      event(){
        let _event = this.getEvents({url_name:this.url_name});
        return _event.length ? _event[0] : null;
      },
      ...mapGetters('events',['getEvents'])
    },
    components: {

    }
  }
</script>

<style lang="scss">

</style>
