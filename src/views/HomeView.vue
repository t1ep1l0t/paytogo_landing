<script>
const {log} = console;
import step_1 from '@/assets/images/step_1.jpg';
import step_2 from '@/assets/images/step_2.jpg';
import step_3 from '@/assets/images/step_3.jpg';
export default {
  name: 'Home',
  data () {
    return {
      steps: [
        {
          image: step_1,
          title: 'Скан qr-кода',
          desc: 'С любого смартфона гости сканируют QR-код на своем столе, чтобы получить доступ к странице заказа '
        },
        {
          image: step_2,
          title: 'Разделение счета',
          desc: 'На странице заказа можно выбрать только свои позиции, либо разделить счет поровну'
        },
        {
          image: step_3,
          title: 'Оплата',
          desc: 'Не дожидаясь официанта со счетом, гости могут быстро и безопасно оплатить заказ через Kleek любым удобным для них способом'
        },
        // {
        //   image: '',
        //   title: 'Чаевые',
        //   desc: 'После оплаты счета гости смогут оставить чаевые за считанные секунды'
        // },
      ],
      current_image: '/src/assets/images/step_1.jpg'
    }
  },
  methods: {
    scroll_to_ell(ell) {
      log(ell.getBoundingClientRect().y);
      window.scrollTo({
        left: 0,
        top: ell.offsetTop,
        behavior: 'smooth'
      })
      log(window.pageYOffset)
    }
  }
}

</script>

<template>
  <section class="section top" ref="top">
    <div class="container">
      <div class="inner">
        <div class="head">
          <h1 class="title">
            ОПЛАТА
            В РЕСТОРАНАХ БЫСТРЕЕ
            С PayToGo
          </h1>
        </div>
        <div class="body">
          <div class="content">
            <img src="../assets/images/iphone.png" alt="" class="iphone">
            <video src="../assets/images/video.MP4"
                   class="video"
                   autoplay
                   muted
            ></video>
          </div>
        </div>
        <button class="scroll"
                @click="scroll_to_ell(this.$refs.work)"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="inherit">
              </path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </section>
  <section class="section work" ref="work">
    <div class="container">
      <div class="inner">
        <div class="head">
          <h2 class="title">Как это работает?</h2>
        </div>
        <div class="body">
          <div class="content">
            <ul class="list">
              <li class="item"
                  v-for="(step, idx) of steps"
                  :key="idx"
              >
                <div class="step"
                     @mouseenter="() => current_image = step.image"
                >
                  <h3 class="name">{{ step.title }}</h3>

                  <p class="desc">{{ step.desc }}</p>
                </div>
              </li>
            </ul>
            <div class="preview">
              <img src="../assets/images/iphone.png"
                   alt=""
                   class="iphone"
                   v-if="current_image !== '/src/assets/images/step_1.jpg'"
              >
              <img :src="current_image" alt=""
                   v-if="current_image"
                   class="step_image"
              >
            </div>
          </div>
          <button class="scroll"
                  @click="scroll_to_ell(this.$refs.advantages)"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="inherit">
                </path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="section advantages" ref="advantages">
    <div class="container">
      <h1 @click="scroll_to_ell(this.$refs.restoraunt)">advantages</h1>
    </div>
  </section>
  <section class="section restoraunt" ref="restoraunt">
    <div class="container">
      <h1 @click="scroll_to_ell(this.$refs.faq)">restoraunt</h1>
    </div>
  </section>
  <section class="section faq" ref="faq">
    <div class="container">
      <h1>faq</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.section {
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 80px 0;
}

.top {

  & .inner {
    gap: 30px;
  }
  & .content {
    position: relative;
    max-height: 800px;
    height: 800px;
    width: 440px;
  }
  & .iphone {
    height: 100%;
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  & .video {
    position: absolute;
    top: 87px;
    left: 69px;
    height: 646px;
    width: auto;
    z-index: 1;
    border-radius: 33px;
  }
}
.work {

  & .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  & .content {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: space-between;
  }
  & .list {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
    width: 50%;
  }
  & .step {
    border-radius: 20px;
    padding: 24px;
    background-color: $grey;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    transition: all .3s ease;

    &:hover {
      background-color: $orange;

      & .name {
        color: $dark;
      }
      & .desc {
        color: $dark;
      }
    }
  }
  & .name {
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
    transition: all .3s ease;
  }
  & .desc {
    color: #FFF;
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    transition: all .3s ease;
  }
  & .preview {
    width: 50%;
    max-height: 800px;
    height: 800px;
    position: relative;
  }
  & .iphone {
    height: 100%;
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  & .step_image {
    position: absolute;
    top: 87px;
    left: 69px;
    height: 646px;
    width: auto;
    z-index: 1;
    border-radius: 33px;
  }

  
}
</style>
