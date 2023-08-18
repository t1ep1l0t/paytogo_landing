<template>
  <footer class="footer">
    <div class="container">
      <nav class="nav">
        <router-link to="/">
          <img src="../assets/images/logotype.png"
               alt="PayToGo"
               class="logotype"
          >
        </router-link>

        <ul class="list">
          <li class="item"
              v-for="(link, idx) of links"
              :key="idx"
          >
            <router-link :to="link.path" class="link">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data () {
    return {
      links: [
        {
          name: 'Политика безопасности',
          path: '/privacy-policy'
        },
        {
          name: 'Публичная Оферта',
          path: '/public-oferta'
        },
        {
          name: 'Порядок оплаты',
          path: '/payment-procedure'
        },
        {
          name: 'Парвила возврата',
          path: '/return-policy'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";


</style>