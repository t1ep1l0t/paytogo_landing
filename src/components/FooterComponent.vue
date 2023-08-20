<template>
  <footer class="footer">
    <div class="container">
      <div class="inner">
        <nav class="nav">
          <router-link to="/">
            <img src="../assets/images/logotype.png"
                 alt="PayToGo"
                 class="logotype"
                 @click="set_href('')"
            >
          </router-link>
          <div class="info">
          <span class="name">
            Полезная информация
          </span>
            <ul class="list">
              <li class="item"
                  v-for="(link, idx) of links"
                  :key="idx"
              >
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M10 7L15 12L10 17" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg>
                <router-link :to="link.path" class="link"
                             @click.prevent="set_href(1)"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="info">
          <span class="name">
            Реквизиты
          </span>
            ООО «РЕСТО ПЭЙ» <br>
            Юридический адрес: 183038, Мурманская обл., г. Мурманск, ул. Челюскинцев, д. 1, литер А3, часть помещения 27 <br><br>
            ИНН: 5190089243 <br>
            КПП: 519001001 <br>
            ОГРН: 1215100006175 <br><br>
            Банк: ТОЧКА ПАО БАНКА «ФК ОТКРЫТИЕ» <br>
            БИК: 044525999 <br>
            Р/с: 40702810702500119345 <br>
            К/с: 30101810845250000999 <br>
          </div>
        </nav>
        <div class="copy">
          Copyright © 2022-2023 PaytoGo
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    set_href: Function
  },
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
        // {
        //   name: 'Порядок оплаты',
        //   path: '/payment-procedure'
        // },
        // {
        //   name: 'Парвила возврата',
        //   path: '/return-policy'
        // },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";


.footer {
  background: $dark;
  padding: 40px 0;

  & .nav {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 40px;
    justify-content: space-between;

    @media(max-width: 768px) {
      flex-direction: column;
    }
  }
  & .logotype {
    max-width: 120px;
    height: auto;
  }
  & .info {
    max-width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    @media(max-width: 768px) {
      max-width: none;
    }
  }
  & .name {
    color: $orange;
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
  }
  & .list {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 12px;
    width: 100%;
  }
  & .item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover {
      & .link {
        color: $orange;
        transform: translateX(10px);
      }
      & .icon {
        stroke: $orange;
      }
    }
  }
  & .icon {
    stroke: #FFFFFF;
    transition: all .3s ease;
  }
  & .link {
    display: block;
    font-size: 16px;
    line-height: 150%;
  }
  & .copy {
    width: 100%;
    padding-top: 20px;
    margin-top: 40px;
    border-top: 1px solid #303030;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>