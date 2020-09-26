<template>
	<div class="header">
		<div class="header-inner">
			<h1>Backoffice</h1>
			<p class="header-logout" v-if="is_login">
				<a href="#">ログアウト</a>
			</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      is_login: {
        type: Boolean,
        required: true
      }
    }
  };
</script>

<style lang="scss">
	.header-inner{
		display: flex;
		max-width:$max_width;
		justify-content: space-between;
		margin: 0 auto;
	}
</style>