<template>
	<div id="modal" :class="{ show: modalOpen }">
    <div class="modal-content">
      <button @click="modalOpen = false" class="modal-close">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				modalOpen: false
			}
		},
		methods: {
    	escapeKeyListener: function(evt) {
      	if (evt.keyCode === 27 && this.modalOpen) this.modalOpen = false;
    	}
  	},
  	watch: {
    	modalOpen: function() {
      	this.modalOpen ? document.body.classList.add('modal-open') : 
      		document.body.classList.remove('modal-open');
    	}
  	},
  	created: function() {
    	document.addEventListener('keyup', this.escapeKeyListener);
  	},
  	destroyed: function() {
    	document.removeEventListener('keyup', this.escapeKeyListener);
  	}
	}
</script>

<style>

body.modal-open {
  overflow: hidden;
  position: sticky;
}

#modal {
  display: none;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
}

#modal.show {
  display: block;
}

.modal-content {
  height: 100%;
  max-width: 105vh;
  padding-top: 12vh;
  margin: 0 auto;
  position: relative;
}

.modal-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 28px 28px;
  font-size: 4em;
  width: auto;
  height: auto;
  background: transparent;
  border: 0;
  outline: none;
  color: #fff;
  z-index: 1000;
  font-weight: 100;
  line-height: 1;
}

</style>