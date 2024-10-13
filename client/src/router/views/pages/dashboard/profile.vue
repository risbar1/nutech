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
			this.dataprofile = response.data.data[0];
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
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4"></div>
			<div class="col-lg-5">
				<div class="card">
		<div class="card-body">
			<div class="text-center mt-3">
				<img
					src="@assets/images/users/avatar-7.jpg"
					alt
					class="avatar-lg rounded-circle"
				/>
				<h5 class="mt-2 mb-0">{{ dataprofile.first_name }} {{ dataprofile.last_name }}</h5><br>

				<button type="button" class="btn btn-primary btn-sm mr-1"
					>Ganti Foto</button
				>
				<button type="button" class="btn btn-white btn-sm ml-1">Ganti Biodata</button>
			</div>

			<!-- profile  -->
			<div class="mt-3 pt-2 border-top">
				<h4 class="mb-3 font-size-15">Contact Information</h4>
				<div class="table-responsive">
					<table class="table table-borderless mb-0 text-muted">
						<tbody>
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
					</table>
				</div>
			</div>
		</div>
	</div>
			</div>

			
		</div>
	

	</Layout>
</template>
