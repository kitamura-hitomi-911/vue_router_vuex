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
  import { mapGetters } from 'vuex'
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
    components: {

    }
  }
</script>

<style lang="scss">

</style>
