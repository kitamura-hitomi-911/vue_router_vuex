<template>
  <div>
    <div class="event">
      <dl>
        <dt>イベント名</dt>
        <dd></dd>
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
  import {mapState,mapActions, mapGetters} from 'vuex';
  import { mixin_page_title } from '@/plugins/mixin_page_title';

  export default {
    mixins:[mixin_page_title],
    data(){
      return {
      }
    },
    computed:{
      ...mapState('events',['is_loaded']),
      ...mapGetters('events',['getEvents'])
    },
    methods: {
      ...mapActions('events',['getAllEvents','updateEvents'])
    },
    watch:{
      '$route':{
        handler(){
          // 絶対なにかに使う
        },
        immediate:true
      }
    }
  }
</script>

<style lang="scss">

</style>
