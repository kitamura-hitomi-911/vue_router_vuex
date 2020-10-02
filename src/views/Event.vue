<template>
  <div>
    <div class="cmn_box">
      <div class="cmn_box-ttl">
        <h2>イベント一覧</h2>
      </div>
      <div class="cmn_box-main">
        <div class="loading" v-if="is_loading">ローディング</div>
        <ul v-else>
          <li v-for="event in list" :key="event.id">
            <router-link :to="{name:'EventDetail',params:{url_name:event.url_name}}">{{event.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="l-btm_btns">
      <p class="btn btn-back">
        <router-link :to="{name:'Top'}">戻る</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters,mapActions } from 'vuex'
  import { mixin_page_title } from '@/plugins/mixin_page_title';

  export default {
    name: 'Event',
    mixins:[mixin_page_title],
    data(){
      return {
        is_loading:true,
      }
    },
    computed:{
      list(){
        return this.getEvents();
      },
      ...mapState('events',['is_loaded']),
      ...mapGetters('events',['getEvents'])
    },
    created(){
      this.getAllEvents().then(() => {
        console.log('イベント全取得処理完了');
      });

      // this.$storeからたたく
      // パラメータがあるとき
      // this.$store.dispatch('events/getAllEvents');
      // this.$store.dispatch('events/getAllEvents',{key:100});

      // 以下の書き方でもいける
      // this.$store.dispatch({type:'events/getAllEvents'});
      // this.$store.dispatch({type:'events/getAllEvents',key:100});

      // 以下の書き方はできない
      // this.$store.dispatch('events',{type:'getAllEvents'});
    },
    methods: {
      onGetAllEvents(){
        console.log('イベント取得完了');
        this.is_loading = false;
      },
      ...mapActions('events',['getAllEvents'])
    },
    watch:{
      '$route':{
        handler(){
          this.is_loading = true;
          this.getAllEvents().then(this.onGetAllEvents);
        },
        immediate:true
      }
    }
  }
</script>

<style lang="scss">

</style>
