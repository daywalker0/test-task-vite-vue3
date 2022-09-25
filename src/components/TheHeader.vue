<template>
	<header class="header">
		<div class="header__container-fluid">
			<nav class="header__navbar">
				<RouterLink class="header__logo logo" to="/">logo</RouterLink>
				<HeaderNavigation />
				<div class="lang-switch"><a href="#" class="lang-switch-ru">ru</a><a href="#" class="lang-switch-en">en</a></div>
				<a href="#" class="header__btn-start">Начать проект<span></span></a>
				<div class="hamb">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
import HeaderNavigation from './HeaderNavigation.vue';
export default {
		components: { HeaderNavigation },
}
</script>

<style lang="scss" scoped>
.header {
	z-index: 50;
	&__container {
	}
	&__logo {
		color: #303030;
	}
	&__navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 146px;	
	}
	&__btn-start {
		font-family: Gilroy;
		font-weight: 800;
		font-size: 16px;
		line-height: 20px;
		text-align: right;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: #388AF3;
		margin-top: 5px;
		position: relative;
		&::after {
			content: '';
			background: url('/arrow.svg');
			background-size: cover;
			height: 12px;
			width: 12px;
			display: inline-block;
			margin-left: 21px;
			vertical-align: middle;
		}
		span {
			position: absolute;
			border: 1px solid #E2E2E2;
			border-radius: 70px;
			padding: 30px;
			top: -20px;
			right: -18px;
		}
	}
}
.hamb {
	display: none;
}
.lang-switch {
	font-size: 16px;
	font-weight: 600;
	line-height: 19px;
	color: #979BAD;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	padding-right: 49px;
}
.lang-switch-ru:hover {
	transition: all 0.5s ease 0s;
	font-weight: 600;
	color: #388AF3;
}
.lang-switch-en:hover {
	transition: all 0.5s ease 0s;
	font-weight: 600;
	color: #388AF3;
}
.lang-switch-ru {
	color: #388AF3;
	position: relative;
}
.lang-switch-ru::after {
	content: '';
	position: absolute;
	bottom: -12px;
	right: 7px;
	background-color: #388AF3;
	height: 4px;
	width: 4px;
	display: inline-block;
	vertical-align: middle;
	border-radius: 10px;
}
.lang-switch-en {
	color: #979BAD;
	margin-left: 15px;
}
@media all and (max-width: 1200px) {
	.header {
		&__menu {
			display: none;
		}
	}
	.lang-switch {
		padding-left: 200px;
	}
	.hamb {
		width: 31px;
		height: 7px;
		display: flex;
		align-items: center;
		gap: 5px;
		justify-self: flex-end;
		padding-left: 25px;
	}
	.bar {
		border-radius: 50%;
		width: 7px;
		height: 7px;
		background-color: #388AF3;
		background-size: 7px;
	}
}
@media all and (max-width: 768px) {
	.header{
		&__container-fluid {
			padding: 0 42px;
		}
		&__navbar {
			justify-content: space-between;
		}
		&__menu {
			display: none;
		}
	}
	.breadcrumbs {
		font-size: 16px;
		line-height: 19px;
	}
}
@media all and (max-width: 650px) {
	.lang-switch {
		display: none;
	}
	.header {
		&__btn-start {
			display: none;
		}
	}
}
@media all and (max-width: 375px) {
	.header {
		&__container-fluid {
			padding: 0 30px;
		}
	}
}


</style>