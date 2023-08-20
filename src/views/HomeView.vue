<script>
import step_1 from '@/assets/images/step_1.jpg';
import step_2 from '@/assets/images/step_2.jpg';
import step_3 from '@/assets/images/step_3.jpg';

const {log} = console;
export default {
  name: 'Home',
  props: {
    set_modal: Function
  },
  data () {
    return {
      scroll_top: false,
      current_image: step_1,
      steps: [
        {
          title: 'QR-код или NFC метка',
          desc: 'С любого смартфона гости сканируют QR-код или NFC метку на своем столе, чтобы получить доступ к странице заказа',
          image: step_1
        },
        {
          title: 'Разделение счета',
          desc: 'На странице заказа можно выбрать только свои позиции, либо разделить счет поровну',
          image: step_2
        },
        {
          title: 'Опата',
          desc: 'Не дожидаясь официанта со счетом, гости могут быстро и безопасно оплатить заказ через PayToGo любым удобным для них способом',
          image: step_3
        },
      ],
      advantages: [
        {
          name: 'Экономия времени',
          desc: 'До 15 мин экономии времени на стол'
        },
        {
          name: 'Больше гостей',
          desc: '1 официант обслуживает больше гостей'
        },
        {
          name: 'Скорость',
          desc: 'Быстрее сервис — лояльнее гости'
        },
        {
          name: 'Все просто',
          desc: 'Все в браузере, без скачивания приложения'
        },
        {
          name: 'Выгода',
          desc: 'Увеличение выручки на 7-10% за счёт быстрой скорости обслуживания гостей'
        },
        {
          name: 'Официанты',
          desc: 'Увеличение дохода официантов в 2 раза за счёт чаевых в приложении'
        },
        {
          name: 'Технологии',
          desc: 'Мы даём ресторанам доступ к технологиям в которые вложено более 100 млн. рублей'
        },
      ]
    }
  },
  methods: {
    to_top () {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })
    },
    set_current_image (i) {
      this.current_image = i.image
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
          <button class="connect"
                  @click="set_modal"
          >
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
      <h2 class="title">
        Как работает PayToGo
      </h2>
      <div class="inner">
        <div class="info">
          <div class="step"
               v-for="(step, idx) of steps"
               :key="idx"
               @mouseenter="set_current_image(step)"
          >
            <div class="step__inner">
              <h3 class="name">
                {{ step.title }}
              </h3>
              <p class="desc">
                {{ step.desc }}
              </p>
              <div class="step__previews">
                <img src="../assets/images/iphone.png"
                     alt=""
                     class="step__iphone"
                     v-if="idx !== 0"
                >
                <img :src="step.image" alt="" class="step__image">
              </div>
            </div>
          </div>
        </div>
        <div class="previews">
          <img src="../assets/images/iphone.png"
               alt=""
               class="iphone"
               v-if="current_image !== steps[0].image"
          >
          <img :src="current_image" alt="" class="image">
        </div>
      </div>
    </div>
  </section>
<section class="section advantages">
  <div class="container">
    <div class="inner">
      <div class="head">
        <h2 class="title">
          Почему с
          Pay <span>to</span> Go
          выгодно
        </h2>
      </div>
      <div class="body">
        <div class="advantage"
             v-for="(advantage, idx) of advantages"
             :key="idx"
        >
          <h4 class="advantage__name">
            {{ advantage.name }}
          </h4>
          <span class="advantage__desc">
            {{ advantage.desc }}
          </span>
        </div>
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
  padding: 60px 0;
  position: relative;
  background: #383838;

  & .title {
    font-size: 36px;
    color: $orange;
    line-height: 150%;
    font-weight: 700;
    margin-bottom: 40px;
  }
  & .inner {
    display: flex;
    align-items: center;
  }
  & .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  & .step {
    width: 100%;

    &__inner {
      background-color: $dark;
      border-radius: 20px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      max-width: 400px;
      align-items: start;
      gap: 20px;
      transition: all .3s ease;

      &:hover {
        background-color: $orange;

        @media (max-width: 768px) {
          background-color: $dark;
        }
      }

      @media (max-width: 768px) {
        max-width: none;
        padding: 24px;
      }
    }
    &__previews {
      display: none;
      position: relative;
      height: 400px;
      width: 220px;

      @media (max-width: 768px) {
        display: block;
      }
      @media(max-width: 576px) {
        align-self: center;
      }
    }
    &__image {
      position: absolute;
      top: 43px;
      left: 32px;
      width: auto;
      height: 331px;
      z-index: 1;
      border-radius: 20px;
    }
    &__iphone {
      position: absolute;
      top: 0;
      left: 0;
      width: auto;
      height: 400px;
      z-index: 2;
      border-radius: 20px;
    }
  }
  & .name {
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
    
    @media(max-width: 768px) {
      color: $orange;
      display: block;
      padding-bottom: 10px;
      border-bottom: 4px solid $orange;
    }
  }
  & .desc {
    line-height: 150%;
    font-size: 16px;
    font-weight: 600;
  }
  & .previews {
    width: 50%;
    height: 700px;
    position: relative;

    @media (max-width: 768px) {
      display: none;
    }
  }
  & .iphone {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 700px;
    width: auto;
    z-index: 2;
  }
  & .image {
    position: absolute;
    top: 76px;
    left: 60px;
    max-height: 567px;
    width: auto;
    border-radius: 20px;
    z-index: 1;
  }
}

.advantages {
  width: 100%;
  min-height: 100vh;
  padding: 60px 0;
  position: relative;
  display: flex;
  align-items: center;

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
  
  & .inner {
    height: 100%;
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
    justify-content: space-between;
  }
  & .head {
    width: 100%;
    text-align: center;
  }
  & .title {
    font-size: 66px;
    line-height: 150%;
    font-weight: 700;
    display: inline-block;


    @media(max-width: 768px) {
      font-size: 36px;
    }
    
    & span {
      color: $orange;
    }
  }
  & .body {
    width: 100%;
    display: flex;
    gap: 40px;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
  }
  & .advantage {
    max-width: 360px;
    width: 100%;
    padding: 24px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    background-color: $orange;

    &__title {
      font-size: 24px;
      font-weight: 700;
      line-height: 140%;
    }
    &__desc {
      font-size: 18px;
      font-weight: 600;
      line-height: 150%;
    }
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
