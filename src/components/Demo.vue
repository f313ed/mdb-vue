<template>
  <div class="search-list">
    <div>
      <button class="btn peach-gradient btn-rounded waves-effect waves-light">検索する</button>
    </div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  data () {
    return {
      msg: 'Search'
    };
  }
}
</script>

<style scoped>

</style>
