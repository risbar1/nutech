<script>
import Layout from '@layouts/default'
import appConfig from '@src/app.config'
import axios from 'axios';
import Utils from '../../../../utils/Util';

/**
 * Register component
 */
export default {
	page: {
		title: 'Register',
		meta: [{ name: 'description', content: `Register to ${appConfig.title}` }],
	},
	components: { Layout },
	data() {
		return {
			api: Utils.Host(),
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			regError: null,
			tryingToRegister: false,
			isRegisterError: false,
			alert:false,
			alert_berhasil:false
		}
	},
	computed: {},
	methods: {
		async Daftar() {
		try {
			const dataisi = new URLSearchParams();
			dataisi.append("email", this.email);
			dataisi.append("password", this.password);
			dataisi.append("first_name", this.first_name);
			dataisi.append("last_name", this.last_name);
			let response = await axios.post(this.api+"/registration", dataisi);
			if (response.data.status === '200'){
				this.alert_berhasil = true
				this.message =  response.data.message
			} 
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
		<div class="account-pages my-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-10">
						<div class="card">
							<div class="card-body p-0">
								<div class="row">
									<div class="col-lg-6 p-5">
										<div class="mx-auto mb-5">
											<a href="/">
												<img src="https://nutech-integrasi.com/wp-content/uploads/2019/09/Logo-Nutech-ok.png" alt height="24" />
												<h3 class="d-inline align-middle ml-1 text-logo"
													>Contract SIMS PPOB</h3
												>
											</a>
										</div>

										<h6 class="h5 mb-0 mt-4">Daftar</h6>
										<p class="text-muted mt-0 mb-4"
											>Buat akun gratis dan mulai gunakan Contract SIMS PPOB</p
										>

										<b-alert
											v-model="alert"
											variant="danger"
											dismissible
											>{{ message }}</b-alert
										>

										
										<b-alert
											v-model="alert_berhasil"
											variant="success"
											dismissible
											>{{ message }}</b-alert
										>

										
											<div class="form-group">
												<label class="form-control-label">Nama Awal</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather type="user" class="icon-dual"></feather>
														</span>
													</div>
													<input
														id="name"
														type="text"
														class="form-control"
														placeholder="Nama Awal"
														v-model="first_name"
														required
													/>
												</div>
											</div>

											<div class="form-group">
												<label class="form-control-label">Nama Akhir</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather type="user" class="icon-dual"></feather>
														</span>
													</div>
													<input
														id="name"
														type="text"
														class="form-control"
														placeholder="Nama Akhir"
														v-model="last_name"
														required
													/>
												</div>
											</div>

											<div class="form-group">
												<label class="form-control-label">Email Address</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather type="mail" class="icon-dual"></feather>
														</span>
													</div>
													<input
														id="email"
														type="email"
														class="form-control"
														placeholder="hello@nutech-integrasi.com"
														v-model="email"
													/>
												</div>
											</div>

											<div class="form-group">
												<label class="form-control-label">Password</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather type="lock" class="icon-dual"></feather>
														</span>
													</div>
													<input
														id="password"
														type="password"
														class="form-control"
														placeholder="Enter your password"
														v-model="password"
													/>
												</div>
											</div>

											<div class="form-group mb-4">
												<div class="custom-control custom-checkbox">
													<input
														id="checkbox-signup"
														type="checkbox"
														class="custom-control-input"
														checked
													/>
												</div>
											</div>

											<div class="form-group mb-0 text-center">
												<button class="btn btn-primary btn-block" @click="Daftar"
													>Daftar</button
												>
											</div>
									</div>

									<div class="col-lg-6 d-none d-md-inline-block">
										<div class="auth-page-sidebar">
											<div class="overlay"></div>
											<div class="auth-user-testimonial">
												<p class="font-size-24 font-weight-bold text-white mb-1"
													>Management Office</p
												>
												<p class="lead"
													>Gedung Nutech, Jl. Buncit Raya No.Kav. 99, RT.1/RW.7, Pejaten Barat, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510
													T : +6221 27808111</p
												>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- end card-body -->
						</div>
						<!-- end card -->

						<div class="row mt-3">
							<div class="col-12 text-center">
								<p class="text-muted">
									Sudah punya akun ?
									<router-link
										tag="a"
										to="/login"
										class="text-primary font-weight-bold ml-1"
										>Log In</router-link
									>
								</p>
							</div>
							<!-- end col -->
						</div>
						<!-- end row -->
					</div>
					<!-- end col -->
				</div>
				<!-- end row -->
			</div>
			<!-- end container -->
		</div>
	</Layout>
</template>

<style lang="scss" module></style>
