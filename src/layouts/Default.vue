<template>
	<div class="wrapper">
		<TheHeader />
		<main class="main">
			<router-view />
		</main>
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
	components: {
    TheHeader,
    TheFooter,
	},
}
</script>

<style lang="scss">

</style>