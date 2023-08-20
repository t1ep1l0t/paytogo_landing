<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/">
          <img src="../assets/images/logotype.png"
               alt="PayToGo"
               class="logotype"
               @click="set_href('')"
          >
        </router-link>
        <ul class="list"
            v-if="!href"
        >
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
          <button class="connect"
                  @click="set_modal"
          >
            Подключить Pay <span>to</span> Go
          </button>
          <button class="burger"
                  @click="set_menu"
          >
            <svg  width="24" height="24" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                  :class="menu ? 'rotated' : ''"
                  :style="menu ? {stroke: '#E28800'} : {stroke: '#FFFFFF'}"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
  <section :class="menu ? 'menu menu--active' : 'menu'">
    <div class="inner">
      <ul class="list">
        <li class="item"
            v-for="(link, idx) of links"
            :key="idx"
        >
          <a :href="`#${link.path}`" class="link"
             @click.prevent="scroll_to_ell(link.path)"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
      <button class="button" @click="set_modal">
        Подключить Pay <span>to</span> Go
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    menu: Boolean,
    set_menu: Function,
    href: String | Boolean | Number,
    set_href: Function,
    set_modal: Function
  },
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
        // {
        //   name: 'Частые вопросы',
        //   path: 'faq'
        // },
      ],
    }
  },
  methods: {
    scroll_to_ell(ell) {

      if(this.menu) {
        this.set_menu()
      }

      const b_class = document.querySelector(`.${ell}`)
      window.scrollTo({
        left: 0,
        top: b_class.offsetTop,
        behavior: 'smooth'
      })
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.header {
  width: 100%;
  background-color: $dark;
  padding: 20px 0;
  border-bottom: 1px solid #454545;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;

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

    @media (max-width: 930px) {
      display: none;
    }
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

    @media (max-width: 576px) {
      display: none;
    }

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
  & .burger {
    display: none;
    
    @media (max-width: 930px) {
      display: block;
    }

    svg {
      stroke: #FFFFFF;
      transition: all .3s ease;
    }
  }
  & .rotated {
    transform: rotate(45deg);
  }
}

.menu {
  position: fixed;
  z-index: 998;
  top: 86.19px;
  right: 0;
  bottom: 0;
  width: 0%;
  background-color: $dark;
  transition: all .3s ease;
  overflow: hidden;
  display: none;

  
  @media(max-width: 930px) {
    display: block;
  }
  @media(max-width: 576px) {
    top: 70.19px;
  }

  &--active {
    width: 40%;
    transition: all .3s ease;

    @media (max-width: 768px) {
      width: 60%;
    }
    @media (max-width: 576px) {
      width: 80%;
    }
  }

  & .inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 24px;
  }
  & .list {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  & .link {
    color: $orange;
    text-transform: uppercase;
    font-size: 20px;
  }
  & .button {
    width: 100%;
    text-align: center;
    padding: 20px 20px;
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