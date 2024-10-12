<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'

import StatChart from '@components/widget-stat-chart'
import Overview from '@components/overview'
import Member from '@components/member'
import Task from '@components/task'
import Chat from '@components/chat'



/**
 * Dashboard-1 Component
 */
export default {
	page: {
		title: 'Dashboard',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		VuePerfectScrollbar,
		Layout,
		StatChart,
		Overview,
		Member,
		Task,
		Chat,
	},
	data() {
		return {

		}
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

		<div class="row">
			<div
				v-for="stat of statChart"
				:key="stat.mainTitle"
				class="col-md-6 col-xl-3"
			>
				<StatChart
					:main-title="stat.mainTitle"
					:value="stat.value"
					:sub-value="stat.subValue"
					:chart-color="stat.chartColor"
				/>
			</div>
		</div>



	

	</Layout>
</template>
