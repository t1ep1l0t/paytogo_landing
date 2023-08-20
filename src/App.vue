<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FormModal from "@/components/FormModal.vue";

export default {
  name: 'App',
  components: {
    FormModal,
    HeaderComponent,
    FooterComponent
  },
  data () {
    return {
      menu: false,
      href: window.location.href.split('/'),
      modal: false
    }
  },
  methods: {
    set_menu () {
      this.menu = !this.menu
    },
    set_href (n) {
      this.href = [1,1,1,1,n]
    },
    set_modal () {
      console.log('some')
      this.modal = !this.modal
    }
  },
}
</script>

<template>
  <HeaderComponent
      :menu="menu"
      :set_menu="set_menu"
      :href="href[4]"
      :set_href="set_href"
      :set_modal="set_modal"
  />
  <main class="main">
    <FormModal
        v-if="modal"
        :set_modal="set_modal"
    />
    <router-view
        :set_modal="set_modal"
    />
  </main>
  <FooterComponent
      :set_href="set_href"
  />
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
