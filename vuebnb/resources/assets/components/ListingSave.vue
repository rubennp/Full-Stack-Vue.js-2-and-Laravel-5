<template>
	<div class="listing-save" @click.stop="toogleSaved()">
		<i :class="classes"></i>
	</div>
</template>

<script>
	export default {
		props: [ 'id' ],
		methods: {
			toogleSaved() {
				this.$store.commit('toogleSaved', this.id);
			}
		},
		computed: {
			islistingSaved() {
				return this.$store.state.saved.find(saved => saved === this.id);
			},
			classes() {
				let saved = this.islistingSaved;
				return {
					'fa': true,
					'fa-lg': true,
					'fa-heart': saved,
					'fa-heart-o': !saved
				}
			}
		}
	}
</script>

<style>
	.listing-save {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
	}

	.listing-save .fa-heart {
		color: #ff5a5f;
	}

	.listing-save .fa-heart-o {
		color: #fff;
	}

</style>