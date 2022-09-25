<template>
	<ul class="header__menu" id="menu">
		<li class="menu__item" :class="{active: item == currentlyActiveItem}">
			<RouterLink class="menu__link" to="/projects">Проекты</RouterLink>
		</li>
		<li class="menu__item" :class="{active: item == currentlyActiveItem}">
			<RouterLink class="menu__link" to="/about">О компании</RouterLink>
		</li>
		<li class="menu__item" :class="{active: item == currentlyActiveItem}">
			<RouterLink class="menu__link" to="/contacts">Контакты</RouterLink>
		</li>
	</ul>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
	data() {
			return {
		}
	}
}
</script>

<style lang="scss">
.header {
	&__menu {
		display: flex;
		margin: 0 auto;
		gap: 50px;
		padding-left: 100px;
	}
}
.menu__item {
	white-space: nowrap;
}
#menu > li > a{
	position: relative;
	
}
#menu > li:nth-child(3) > a::after {

}
a.router-link-active, li.router-link-active>a {
	color: #388AF3;
	&::after {
		content: '';
		position: absolute;
		bottom: -12px;
		right: 35px;
		background-color: #388AF3;
		height: 7px;
		width: 7px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 10px;
		transition: 0.5s ease;
	}
}

.menu__link {
	color: #343434;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	transition: 0.3s ease;
}
.menu__link:hover {
	transition: 0.3s ease;
	color: #388AF3;
}
</style>