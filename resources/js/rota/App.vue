<template>
  <div>
    Raiz do App
    <router-view></router-view>
    <router-link :to="{ name: 'foo'}">Foo</router-link>
    <router-link :to="{ name: 'bar'}">Bar</router-link>
  </div>
</template>

<script>
export default {
}
</script>
