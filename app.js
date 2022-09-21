const app = Vue.createApp({
  data() {
    return {
      name: 'Tedo',
      age: 26,
      imgPreview:
        'https://www.kindpng.com/picc/m/452-4529223_vue-js-logo-png-transparent-png.png',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },

    favNum() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
