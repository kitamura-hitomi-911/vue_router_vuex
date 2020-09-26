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
            <router-link :to="{name:'Top'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name:'Event'}">イベント</router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Top',
  components: {

  }
}
</script>
