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
            <button class="button"
                    @click="scroll_to_ell(link.path)"
            >
              {{ link.name }}
            </button>
          </li>
        </ul>
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
        {
          name: 'Рестораны',
          path: 'restoraunt'
        },
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
  //background-color: $grey;
  padding: 20px 0;
  border-radius: 0 0 20px 20px;


  & .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  & .logotype {
    max-width: 172px;
    height: auto;
  }
  & .list {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  & .button {
    padding: 10px 5px;
    font-weight: 700;
    font-size: 20px;
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
        height: 5px;
        width: 100%;
      }
    }
  }
}
</style>