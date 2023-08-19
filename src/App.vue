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
      menu: false,
    }
  },
  methods: {
    set_menu () {
      this.menu = !this.menu
    }
  }
}
</script>

<template>
  <HeaderComponent
      :menu="menu"
      :set_menu="set_menu"
  />
  <main class="main">
    <router-view />
  </main>
  <FooterComponent />
</template>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.main {
  margin-top: 86.19px;

  @media(max-width: 576px) {
    margin-top: 70.19px;
  }
}
</style>
