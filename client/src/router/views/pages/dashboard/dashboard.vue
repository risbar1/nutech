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
		databanner:[],
		dataservices:[]
		}
	},
	mounted() {
	console.log("alamat", Utils.Host())
      this.GetBanner()
    },
	methods: {
		async GetBanner() {
		try {
			let response = await axios.get(this.api+"/halaman/banner", Utils.authHeader());
			this.databanner = response.data.data;
			let response_services = await axios.get(this.api+"/halaman/services", Utils.authHeader());
			this.dataservices = response_services.data.data;
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
				<h4 class="mb-1 mt-0">Dashboard</h4>
			</div>
		</div>

		<div class="row page-title align-items-center">
			<div class="col-sm-4 col-xl-6">
				<h4 class="mb-1 mt-0">Services</h4>
			</div>
		</div>
		<div class="row" >
			<div class="col-sm-2" v-for="(tampil,index) in dataservices" :key="tampil.service_code">
				<center><b>{{tampil.service_code}}</b><br>
				{{tampil.service_name}}
				<br>
				<img :src="tampil.service_icon" width="100%">
				<b>{{ tampil.service_tarif }}</b>
				</center>
			</div>
		</div><br><br><br>
		<div class="row" >
			<div class="col-sm-3" v-for="(tampil,index) in databanner" :key="tampil.banner_name">
				<b>{{tampil.banner_name}}</b><br>
				<img :src="tampil.banner_image" width="100%">
			</div>
		</div>
	

	</Layout>
</template>
