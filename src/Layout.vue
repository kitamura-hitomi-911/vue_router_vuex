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
    computed:{
      is_login(){
        return !!this.$route.meta.isRequestAuth;
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
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


