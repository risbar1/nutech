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
		dataupdate:false,
		databiodata:true,
		dataimage:false,
		alert_berhasil:false,
		message:"",
		file:""
		}
	},
	mounted() {
	console.log("alamat", Utils.Host())
      this.GetBanner()
    },
	methods: {
		async Gantifoto() {
		try {
			this.dataupdate = false
			this.databiodata = false
			this.dataimage = true
		} catch (err) {
			console.error(err);
		}
		},
		async Gantibiodata() {
		try {
			this.dataupdate = true
			this.databiodata = false
			this.dataimage = false
		} catch (err) {
			console.error(err);
		}
		},
		async GetBanner() {
		try {
			let response = await axios.get(this.api+"/halaman/profile", Utils.authHeader());
			this.dataprofile = response.data.data[0];
		} catch (err) {
			console.error(err);
		}
		},
		async Updatebiodata() {
		try {
			const dataisi = new URLSearchParams();
			dataisi.append("first_name", this.dataprofile.first_name);
			dataisi.append("last_name", this.dataprofile.last_name);
			dataisi.append("hp", this.dataprofile.hp);
			dataisi.append("alamat", this.dataprofile.alamat);
			let response = await axios.put(this.api+"/halaman/profile", dataisi, Utils.authHeader());
			if (response.data.status === '0'){
				this.alert_berhasil = true
				this.message =  response.data.message
			} 
		} catch (err) {
			this.alert = true
			this.message =  err.response.data.message
		}
		},
		async Updatefoto() {
		try {
			let rawImg;
			const file = document.querySelector('input[name=gambar]').files[0];
			const reader = new FileReader();
		
			reader.onloadend = async () => {
			rawImg = reader.result;
			//
			const dataisi = new URLSearchParams();	
			dataisi.append("profile_image", rawImg);

			let response = await axios.put(this.api+"/halaman/image", dataisi, Utils.authHeader());
			if (response.data.status === '0'){
				this.alert_berhasil = true
				this.message =  response.data.message
			} 
			}
			reader.readAsDataURL(file);
		} catch (err) {
			this.alert = true
			this.message =  err.response.data.message
		}
		},
	},
}
</script>

<template>
	<Layout>
		<div class="row page-title align-items-center">
			<div class="col-sm-4 col-xl-6">
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4"></div>
			<div class="col-lg-5">
				<div class="card">
		<div class="card-body">
			<div class="text-center mt-3">
				<img
					:src="dataprofile.profile_image"
					alt
					class="avatar-lg rounded-circle"
				/>
				<h5 class="mt-2 mb-0">{{ dataprofile.first_name }} {{ dataprofile.last_name }}</h5><br>

				<button type="button" class="btn btn-primary btn-sm mr-1" @click="Gantifoto">Ganti Foto</button
				>
				<button type="button" class="btn btn-white btn-sm ml-1" @click="Gantibiodata">Ganti Biodata</button>
			</div>

				<br>
			<b-alert
			v-model="alert_berhasil"
			variant="success"
			dismissible
			>{{ message }}</b-alert
		>

			<!-- profile  -->
			<div class="mt-3 pt-2 border-top">
				<h4 class="mb-3 font-size-15">Contact Information</h4>
				<div class="table-responsive">
					<table class="table table-borderless mb-0 text-muted">
						<tbody v-if="databiodata === true">
							<tr>
								<th scope="row">Email</th>
								<td>{{ dataprofile.email }}</td>
							</tr>
							<tr>
								<th scope="row">Phone</th>
								<td>{{ dataprofile.hp }}</td>
							</tr>
							<tr>
								<th scope="row">Address</th>
								<td>
									{{ dataprofile.alamat }}
								</td>
							</tr>
						</tbody>
						<tbody v-if="dataupdate === true">
							<tr>
								<th scope="row">Email</th>
								<td>{{ dataprofile.email }}
								</td>
							</tr>
							<tr>
								<th scope="row">Phone</th>
								<td>
									<b-form-input
									id="input-1"
									v-model="dataprofile.hp"
									type="text"
									required
									placeholder="Enter hp"
								></b-form-input>
								</td>
							</tr>
							<tr>
								<th scope="row">Address</th>
								<td>
									<b-form-input
									id="input-1"
									v-model="dataprofile.alamat"
									type="text"
									required
									placeholder="Enter alamat"
								></b-form-input>
								</td>
							</tr>
							<tr>
								<th scope="row">Nama Awal</th>
								<td>
									<b-form-input
									id="input-1"
									v-model="dataprofile.first_name"
									type="text"
									required
									placeholder="Enter Nama Awal"
								></b-form-input>
								</td>
							</tr>
							<tr>
								<th scope="row">Nama Akhir</th>
								<td>
									<b-form-input
									id="input-1"
									v-model="dataprofile.last_name"
									type="text"
									required
									placeholder="Enter Nama Akhir"
								></b-form-input>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<button class="btn btn-primary btn-block" @click="Updatebiodata"
										>Update Biodata</button
									>
								</td>
							</tr>
						</tbody>

						<tbody v-if="dataimage === true">
							<tr>
								<th scope="row">Foto</th>
								<td>
									<input type="file" name="gambar"  accept="application/jpg">
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<button class="btn btn-primary btn-block" @click="Updatefoto"
										>Update Foto</button
									>
								</td>
							</tr>
						</tbody>
						
					</table>
				</div>
			</div>
		</div>
	</div>
			</div>

			
		</div>
	

	</Layout>
</template>
