<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data () {
    return {

    }
  },
}
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <router-view />
  </main>
  <FooterComponent />
</template>

<style scoped lang="scss">
@import "@/assets/variable.scss";


</style>
