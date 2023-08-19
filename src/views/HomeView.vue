<script>
const {log} = console;
export default {
  name: 'Home',
  data () {
    return {
      scroll_top: false,
    }
  },
  methods: {
    to_top () {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > (window.innerHeight / 2)) {
        this.scroll_top = true;
      } else {
        this.scroll_top = false;
      }
    })
  }
}

</script>

<template>
<section class="section top">
  <div class="container">
    <div class="inner">
      <div class="info">
        <h1 class="title">
          Сервис для быстрой <br>
          оплаты счета и чаевых <br>
          в ресторанах
        </h1>
        <ul class="list">
          <li class="item">
            Выручка ресторана болше на 7-10%
          </li>
          <li class="item">
            Больше чаевых для официантов
          </li>
          <li class="item">
            Сокращает время на обработку заказов
          </li>
        </ul>
        <div class="mobil__photo">
          <img src="../assets/images/top-image.png" alt="" class="image">
        </div>
        <div class="buttons">
          <button class="connect">
            Подключить Pay <span>to</span> Go
          </button>
          <a href="../assets/files/PayToGo_Presentation.pdf" download class="link">
            Узнать больше
          </a>
        </div>
      </div>
      <div class="photo">
        <img src="../assets/images/top-image.png" alt="" class="image">
      </div>
    </div>
  </div>
</section>
<section class="section work" ref="work">
    <div class="container">
      <div class="inner">
        <div class="info">

        </div>
        <div class="previews">

        </div>
      </div>
    </div>
  </section>
<button class="scroll_top"
        v-if="scroll_top"
        @click="to_top"
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#E28800"></path> </g></svg>
</button>
</template>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.top {
  width: 100%;
  min-height: calc(100vh - 85px);
  display: flex;
  align-items: center;
  position: relative;
  padding: 60px 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    background-image: url('../assets/images/top_bg.jpeg');
    background-position: 0 0;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(20, 20, 20, .8);
  }

  @media(max-width: 576px) {
    min-height: calc(100vh - 69px);
  }


  & .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 3;
  }
  & .info {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
    height: 100%;

    @media(max-width: 768px) {
      width: 100%;
      align-items: center;
    }
    @media(max-width: 576px) {
      align-items: start;
    }
  }
  & .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;

    @media(max-width: 992px) {
      font-size: 36px;
    }
    @media(max-width: 768px) {
      text-align: center;
    }
    @media(max-width: 576px) {
      font-size: 30px;
      text-align: start;
    }
  }
  & .list {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    list-style: disc;
    padding-left: 20px;
  }
  & .mobil__photo {
    display: none;

    @media(max-width: 768px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    @media(max-width: 576px) {
      justify-content: center;
    }

    & .image {
      max-height: 250px;
      width: auto;
    }
  }
  & .item {
    font-size: 20px;
    color: $orange;

    @media(max-width: 992px) {
      font-size: 16px;
    }
  }
  & .buttons {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    margin-top: 20px;

    @media(max-width: 576px) {
      width: 100%;
    }
  }
  & .connect {
    width: 300px;
    padding: 16px 20px;
    text-align: center;
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

    @media(max-width: 576px) {
      width: 100%;
    }
  }
  & .link {
    width: 300px;
    padding: 16px 20px;
    text-align: center;
    border-radius: 8px;
    font-size: 16px;
    background-color: #FFFFFF;
    color: $dark;

    & span {
      color: $orange;
    }
    &:hover {
      background-color: $orange;

      & span {
        color: $red;
      }
    }

    @media(max-width: 576px) {
      width: 100%;
    }
  }
  & .photo {
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
      display: none;
    }
  }
  & .image {
    max-height: 600px;
    width: auto;

    @media(max-width: 992px) {
      max-height: 400px;
    }
  }
}

.work {
  min-height: 100vh;
  padding: 60px 0;
  position: relative;
  background: #FFFFFF;

  & .inner {
    display: flex;
    align-items: center;
  }
  & .info {

  }
}


.scroll_top {
  position: fixed;
  bottom: 60px;
  right: 60px;
  border: 1px solid $orange;
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    bottom: 20px;
    right: 20px;
  }
}
</style>
