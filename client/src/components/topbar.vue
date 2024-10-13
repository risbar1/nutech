<script>
import { authComputed } from '@state/helpers'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
	components: {
		VuePerfectScrollbar,
	},
	props: {
		user: {
			type: Object,
			required: false,
			default: () => ({}),
		},
		isMenuOpened: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {}
	},
	computed: {
		...authComputed,
	},
	methods: {
		toggleMenu() {
			this.$parent.toggleMenu()
		},
		toggleRightSidebar() {
			this.$parent.toggleRightSidebar()
		},
	},
}
</script>

<template>
	<!-- Topbar Start -->
	<div class="navbar navbar-expand flex-column flex-md-row navbar-custom">
		<div class="container-fluid">
			<!-- LOGO -->
			<a href="/dashboard" class="navbar-brand mr-0 mr-md-2 logo">
				<span class="logo-lg">
					<img src="https://nutech-integrasi.com/wp-content/uploads/2019/09/Logo-Nutech-ok.png" alt height="24" />
					<span class="d-inline h5 ml-2 text-logo">Nutech Contract SIMS PPOB</span>
				</span>
				<span class="logo-sm">
					<img src="https://nutech-integrasi.com/wp-content/uploads/2019/09/Logo-Nutech-ok.png" alt height="24" />
				</span>
			</a>

		
			<ul
				class="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0"
			>
				<li class="d-none d-sm-block">
					<a href="dashboard">Dashboard</a>
				</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<li class="d-none d-sm-block">
					<a href="profile">Profile</a>
				</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<li class="d-none d-sm-block">
					<a href="/">Keluar</a>
				</li>

			</ul>
		</div>
	</div>
	<!-- end Topbar -->
</template>

<style lang="scss">
.noti-scroll {
	height: 220px;
}
.ps > .ps__scrollbar-y-rail {
	width: 8px !important;
	background-color: transparent !important;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
	width: 6px !important;
}
.button-menu-mobile {
	outline: none !important;
}
</style>
