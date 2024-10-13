<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'

import axios from 'axios';
import Utils from '../../../../utils/Util';



/**
 * Dashboard-1 Component
 */
export default {
	page: {
		title: 'Dashboard',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
	},
	data() {
		return {
		api: Utils.Host(),
		dataprofile:[],
		}
	},
	mounted() {
	console.log("alamat", Utils.Host())
      this.GetBanner()
    },
	methods: {
		async GetBanner() {
		try {
			let response = await axios.get(this.api+"/halaman/profile", Utils.authHeader());
			this.dataprofile = response.data.data;
		} catch (err) {
			console.error(err);
		}
		},
	},
}
</script>

<template>
	<Layout>
		<div class="row page-title align-items-center">
			<div class="col-sm-4 col-xl-6">
				<h4 class="mb-1 mt-0">Profile</h4>
			</div>
		</div>

		<div class="row" >
			<div class="col-sm-3" v-for="(tampil,index) in dataprofile" :key="tampil.banner_name">
				<b>{{tampil.banner_name}}</b><br>
				<img :src="tampil.banner_image" width="100%">
			</div>
		</div>
	

	</Layout>
</template>
