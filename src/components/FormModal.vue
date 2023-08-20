<template>
  <section class="modal">
    <div class="container">
      <div class="modal__inner">
        <button class="close" @click="set_modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#FFFFFF"></path></g></svg>
        </button>
        <h2 class="title">Заполние форму</h2>
        <v-form class="form"
                v-model="valid"
        >
          <v-text-field class="input"
                        v-model="name"
                        variant="outlined"
                        rounded="lg"
                        label="Имя *"
                        :rules="[required]"
          >

          </v-text-field>
          <v-text-field class="input"
                        v-model="mail"
                        variant="outlined"
                        rounded="lg"
                        label="E-mail *"
                        :rules="[required, mail_rules]"
          >

          </v-text-field>
          <v-textarea class="input"
                      v-model="message"
                      variant="outlined"
                      rounded="lg"
                      no-resize
                      rows="5"
                      label="Коментарий"
          >

          </v-textarea>
          <button class="button"
                  :disabled="!valid"
                  @click.prevent="send"
          >
            Отправить
          </button>
        </v-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FormModal",
  props: {
    set_modal: Function
  },
  data () {
    return {
      valid: false,
      name: '',
      required: value => {
        if (value) return true

        return 'Обязательное поле'
      },
      mail: '',
      mail_rules: value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'Введите корректный E-mail'
      },
      message: '',
    }
  },
  methods: {
    async send () {
      const data = {
        name: this.name,
        mail: this.mail,
        comment: this.message
      }

      const res = await fetch('/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log(await res.json())
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  align-items: center;

  animation: fade_in .3s ease;

  @keyframes fade_in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & .container {
    display: flex;
    justify-content: center;
    height: auto;
  }

  &__inner {
    background-color: $dark;
    position: relative;
    border-radius: 20px;
    padding: 24px;
    max-width: 800px;
    width: 100%;
  }
  & .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  & .title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 22px;
    font-weight: 700;
    color: $orange;
  }
  & .form {
    width: 100%;
    display:  flex;
    flex-direction: column;
    align-items: start;
  }
  & .input {
    width: 100%;
    margin-bottom: 10px;
  }
  & .button {
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    text-align: center;

    background-color: $orange;

    &:disabled {
      background-color: $grey;
    }
  }
}
</style>