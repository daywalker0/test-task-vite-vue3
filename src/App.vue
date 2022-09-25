<template>
	<component :is="$route.meta.layout || 'div'">
	</component>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import 'reset-css/reset.css';
@import 'styles/main.scss';
</style>