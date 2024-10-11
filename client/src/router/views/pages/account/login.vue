<script>
import Layout from '@layouts/default'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

/**
 * Login component
 */
export default {
	page: {
		title: 'Log in',
		meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
	},
	components: { Layout },
	data() {
		return {
			email: '',
			password: '',
			authError: null,
			tryingToLogIn: false,
			isAuthError: false,
		}
	},
	computed: {
		placeholders() {
			return process.env.NODE_ENV === 'production'
				? {}
				: {
						email: 'Use "admin" to log in with the mock API',
						password: 'Use "password" to log in with the mock API',
				  }
		},
	},
	methods: {
		...authMethods,
		// Try to log the user in with the username
		// and password they provided.
		tryToLogIn() {
			this.tryingToLogIn = true
			// Reset the authError if it existed.
			this.authError = null
			return this.logIn({
				username: this.username,
				password: this.password,
			})
				.then((token) => {
					this.tryingToLogIn = false
					this.isAuthError = false
					// Redirect to the originally requested page, or to the home page
					this.$router.push(
						this.$route.query.redirectFrom || { name: 'Dashboard' }
					)
				})
				.catch((error) => {
					this.tryingToLogIn = false
					this.authError = error.response ? error.response.data.message : ''
					this.isAuthError = true
				})
		},
	},
}
</script>

<template>
	<Layout>
		<!-- end row -->
		<div class="account-pages my-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-10">
						<div class="card">
							<div class="card-body p-0">
								<div class="row">
									<div class="col-md-6 p-5">
										<div class="mx-auto mb-5">
											<a routerLink="/">
												<img src="https://nutech-integrasi.com/wp-content/uploads/2019/09/Logo-Nutech-ok.png" alt height="24" />
												<h3 class="d-inline align-middle ml-1 text-logo"
													>Contract SIMS PPOB</h3
												>
											</a>
										</div>


										<b-alert
											v-model="isAuthError"
											variant="danger"
											dismissible
											>{{ authError }}</b-alert
										>

										<b-form
											class="authentication-form"
											@submit.prevent="tryToLogIn"
										>
											<div class="form-group">
												<label class="form-control-label">Email</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather
																type="mail"
																class="align-middle icon-dual"
															></feather>
														</span>
													</div>
													<b-form-input
														id="input-1"
														v-model="email"
														type="text"
														required
														placeholder="Enter email"
													></b-form-input>
												</div>
											</div>
											<div class="form-group mt-4">
												<label class="form-control-label">Password</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather
																type="lock"
																class="align-middle icon-dual"
															></feather>
														</span>
													</div>
													<b-form-input
														id="password"
														v-model="password"
														type="password"
														required
														placeholder="Enter your password"
													></b-form-input>
												</div>
											</div>
											<b-form-group id="button-group" class="mt-4 mb-1">
												<b-button
													type="submit"
													variant="primary"
													class="btn-block"
													>Log In</b-button
												>
											</b-form-group>
										</b-form><br><br><br>
									</div>
									<div class="col-lg-6 d-none d-md-inline-block">
										<div class="auth-page-sidebar">
											<div class="overlay"></div>
											<div class="auth-user-testimonial">
												<p class="font-size-24 font-weight-bold text-white mb-1"
													>Introduction</p
												>
												<p class="lead"
													>PT. Nutech Integrasi merupakan bagian dari TelkomGroup, berkomitmen menjadikan Indonesia sebagai pusat inovasi digital terbaik di Asia Tenggara serta secara efisien menghasilkan kualitas terbaik berdasarkan pengalaman pelanggan.</p
												>
												<p>- Management Office</p>
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
									Apakah Anda Memiliki Akun ?
									<router-link
										tag="a"
										to="/register"
										class="text-primary font-weight-bold ml-1"
									>
										<b>Daftar</b>
									</router-link>
									<!-- <a
                    routerLink="/account/signup"
                    class="text-primary font-weight-bold ml-1"
                  >Sign Up</a>-->
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
