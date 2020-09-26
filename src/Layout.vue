<template>
  <div class="l-wrapper">
    <header class="l-header">
      <Header :is_login="is_login" />
    </header>
    <div class="l-content">
      <div class="l-content-inner">
        <router-view/>
      </div>
    </div>
    <div class="l-footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'Layout',
    data(){
      return {
        is_request_auth : !!this.$route.meta.isRequestAuth
      }
    },
    computed:{
      is_login(){
        return this.is_request_auth;
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  .l-content{
    .l-content-inner{
      max-width:$max_width;
      margin:0 auto;
    }
  }
</style>


