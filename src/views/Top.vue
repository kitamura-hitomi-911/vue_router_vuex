<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="cmn_box">
      <div class="cmn_box-ttl">
        <h2>カテゴリ</h2>
      </div>
      <div class="cmn_box-main">
        <ul>
          <li>
            <router-link :to="{name:'Event'}">イベント</router-link>
          </li>
          <li>
            <router-link :to="{name:'Tour'}">大会</router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { mixin_page_title } from '@/plugins/mixin_page_title';
export default {
  name: 'Top',
  mixins:[mixin_page_title],
  components: {

  }
}
</script>
