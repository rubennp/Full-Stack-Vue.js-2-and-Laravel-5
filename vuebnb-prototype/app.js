var app = new Vue({
  el: '#app',
  data: {
    title: sample.title,
    address: sample.address,
    about: sample.about,
    contracted: true,
    headerImageStyle: {
      'background-image': 'url(sample/header.jpg)'
    },
    amenities: sample.amenities,
    prices: sample.prices,
    modalOpen: false
  },
  methods: {
    escapeKeyListener: function(evt) {
      if (evt.keyCode === 27 && this.modalOpen) this.modalOpen = false;
    }
  },
  watch: {
    modalOpen: function() {
      this.modalOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
    }
  },
  created: function() {
    document.addEventListener('keyup', this.escapeKeyListener);
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
});