<script>
const {log} = console;
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {

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
</template>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.top {
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    background-image: url('https://b6.3ddd.ru/media/gallery_images/58123d8a6a18c.jpeg');
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    position: relative;
    z-index: 3;
  }
  & .info {
    max-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
    height: 100%;
  }
  & .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;
  }
  & .list {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    list-style: disc;
    padding-left: 20px;
  }
  & .item {
    font-size: 20px;
    color: $orange;
  }
  & .buttons {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    margin-top: 20px;
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
  }
  & .photo {
    max-width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .image {
    max-height: 600px;
    width: auto;
  }
}

</style>
