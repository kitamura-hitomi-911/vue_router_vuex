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

  export default {
    name: 'EventDetail',
    props:{
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
    components: {

    }
  }
</script>

<style lang="scss">

</style>
