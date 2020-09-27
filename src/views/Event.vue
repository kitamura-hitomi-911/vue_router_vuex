<template>
  <div>
    <div class="cmn_box">
      <div class="cmn_box-ttl">
        <h2>イベント一覧</h2>
      </div>
      <div class="cmn_box-main">
        <ul>
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
  import { mapGetters,mapActions } from 'vuex'
  import { mixin_page_title } from '@/plugins/mixin_page_title';

  export default {
    name: 'Event',
    mixins:[mixin_page_title],
    computed:{
      list(){
        return this.getEvents();
      },
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
      ...mapActions('events',['getAllEvents'])
    }
  }
</script>

<style lang="scss">

</style>
