<template>
	<div class="home-container">
		<listing-summary-group
			v-for="(group, country) in listing_groups"
			:key="country"
			:listings="group"
			:country="country"
		></listing-summary-group>
	</div>
</template>

<script>
	import axios from 'axios';
	import routeMixin from '../js/route-mixin.js';
	import { groupByCountry } from '../js/helpers';

	// components
	import ListingSummaryGroup from './ListingSummaryGroup.vue';

	export default {
		mixins: [ routeMixin ],
		data() {
			return { listing_groups: null }
		},
		components: {
			ListingSummaryGroup
		},
		methods: {
			assignData({ listings }) {
				this.listing_groups = groupByCountry(listings);
			}
		}
	}
</script>