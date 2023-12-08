import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/assets/i18n/en.json';

Vue.use(VueI18n);

const messages = {
  en: en,
};

const i18n = new VueI18n({
  locale: 'en', // 默认语言
  messages,
});

export default i18n;