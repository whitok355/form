<template>
  <form class="popup-form" v-if="isVisible" @submit.prevent="submitForm" novalidate>
    <close @click="changeVisibleA" />
    <div class="popup-row grey-border">
      <h2 class="popup-margin">Название поля в форме</h2>
      <h2>Название ключа в запросе</h2>
    </div>
    <div class="popup-row" :class="form.name.valid ? 'red-border' : 'grey-border'">
      <label class="popup-label popup-margin" name="name">Имя</label>
      <input
        v-model="form.name.value"
        class="popup-input"
        type="text"
        name="name"
        placeholder="name"
      />
    </div>
    <div class="popup-row" :class="form.tel.valid ? 'red-border' : 'grey-border'">
      <label class="popup-label popup-margin" name="tel">Телефон </label
      ><input
        v-model="form.tel.value"
        class="popup-input"
        type="tel"
        name="tel"
        placeholder="+7(000)000-00-00"
      />
    </div>
    <div class="popup-row" :class="form.mail.valid ? 'red-border' : 'grey-border'">
      <label class="popup-label popup-margin" name="email">Email</label
      ><input
        v-model="form.mail.value"
        class="popup-input"
        type="email "
        name="email"
        placeholder="email"
      />
    </div>
    <div class="popup-row" :class="form.city.valid ? 'red-border' : 'grey-border'">
      <label class="popup-label popup-margin" name="city">Выбор города</label
      ><input
        class="popup-input"
        type="text"
        name="city"
        :placeholder="cityState"
        v-model="form.city.value"
      />
    </div>
    <btn :text="'Send data'" />
    <btn :text="'get data'" @click="getData" />
    <ul>
      <li v-if="form.name.valid">{{ form.name.errMsg }}</li>
      <li v-if="form.tel.valid">{{ form.tel.errMsg }}</li>
      <li v-if="form.mail.valid">{{ form.mail.errMsg }}</li>
      <li v-if="form.city.valid">{{ form.city.errMsg }}</li>
      <li v-if="servErr.valid">{{ servErr.mess }}</li>
    </ul>
  </form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import close from "./close";
import btn from "./btn";
import axios from "axios";

export default {
  name: "popup",
  data() {
    return {
      form: {
        name: {
          value: "",
          valid: false,
          regExp: /^\D+$/,
          errMsg: "Please enter your name correctly",
        },
        tel: {
          value: "",
          valid: false,
          regExp: /^\+7\([\d]{3}\)[\d]{3}[-][\d]{2}[-][\d]{2}$/,
          errMsg: "Please enter your number correctly",
        },
        mail: {
          value: "",
          valid: false,
          regExp: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
          errMsg: "Please enter your mail correctly",
        },
        city: {
          value: this.cityState,
          valid: false,
          regExp: /^\D+$/i,
          errMsg: "Please enter your city correctly",
        },
      },
      servErr: {
        mess: "",
        valid: false,
      },
    };
  },
  components: { close, btn },
  computed: {
    ...mapState({
      isVisible: (state) => state.isVisiblePopup,
      cityState: (state) => state.city,
    }),
    nameValid() {
      return this.form.name.regExp.test(this.form.name.value);
    },
    telValid() {
      return this.form.tel.regExp.test(this.form.tel.value);
    },
    mailValid() {
      return this.form.mail.regExp.test(this.form.mail.value);
    },
    cityValid() {
      return this.form.city.regExp.test(this.form.city.value);
    },
  },
  methods: {
    ...mapActions(["changeVisibleA"]),
    submitForm() {
      if (this.nameValid && this.telValid && this.mailValid && this.cityValid) {
        axios
          .post("/form", {
            body: JSON.stringify(this.form),
          })
          .then((responce) => {
            if (responce.data.result == 1) {
              this.changeVisibleA();
              this.clearForm();
            }
          })
          .catch((e) => {
            this.servErr.mess = e;
            this.servErr.valid = true;
          });
      } else {
        this.choiceBorder();
      }
    },
    getData() {
      axios
        .get("/form")
        .then((responce) => responce)
        .then((data) => console.log(data.data));
    },
    choiceBorder() {
      for (let el in this.form) {
        if (this[`${el}Valid`]) {
          this.changeBorder(el, false);
        } else {
          this.changeBorder(el, true);
        }
      }
    },
    changeBorder(el, value) {
      this.form[el].valid = value;
    },
    clearForm() {
      for (let el in this.form) {
        if (el === "city") {
          this.form.city === this.cityState;
        } else {
          this.form[el].value = "";
        }
      }
    },
  },
};
</script>
<style scoped>
.popup-form {
  display: grid;
  grid-template-rows: repeat(6, 40px);
  gap: 5px;
  max-width: 720px;
  margin: 0 auto;
  border-radius: 3px;
  padding: 25px;
  background: #8497ff;
  position: absolute;
  top: 15%;
  left: 15%;
}
.popup-row {
  display: grid;
  grid-template-columns: repeat(2, 360px);
  align-items: center;
  position: relative;
}
.popup-row-flex {
  display: flex;
}
.popup-row > h2 {
  margin-top: 0;
  margin-bottom: 0;
}
.grey-border {
  border-top: 1px solid grey;
}
.popup-input {
  border: none;
  height: 90%;
  background: #a6b3ff;
  padding-left: 25px;
}
.red-border {
  border: 1px solid red;
}
.popup-margin {
  margin-left: 25px;
}
.popup-err {
  border-radius: 10px;
  background: white;
  font-size: 12px;
  padding: 5px;
  position: absolute;
  top: -5px;
  right: -20px;
  color: red;
  text-transform: uppercase;
}
.hidden {
  display: none;
}
</style>
