<template>
  <header class="header">
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
            <a :href="`#${link.path}`" class="button"
                    @click.prevent="scroll_to_ell(link.path)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <div class="buttons">
          <button class="connect">
            Подключить Pay <span>to</span> Go
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data () {
    return {
      links: [
        {
          name: 'Как это работает?',
          path: 'work'
        },
        {
          name: 'Преимущества',
          path: 'advantages'
        },
        // {
        //   name: 'Рестораны',
        //   path: 'restoraunt'
        // },
        {
          name: 'Частые вопросы',
          path: 'faq'
        },
      ]
    }
  },
  methods: {
    scroll_to_ell(ell) {
      const b_class = document.querySelector(`.${ell}`)
      window.scrollTo({
        left: 0,
        top: b_class.offsetTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.header {
  width: 100%;
  background-color: $dark;
  padding: 20px 0;

  & .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  & .logotype {
    max-width: 120px;
    height: auto;
  }
  & .list {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  & .button {
    padding: 10px 0;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;
      transition: width .3s ease;
      background-color: $orange;
    }
    &:hover {
      color: $orange;

      &::before {
        height: 3px;
        width: 100%;
      }
    }
  }
  & .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  & .connect {
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid #FFFFFF;

    & span {
      color: $orange;
    }

    &:hover {
      border-color: $orange;
      background-color: $orange;

      & span {
        color: $red;
      }
    }
  }
}
</style>