<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__info-block">
				<div class="logo-block">
					<RouterLink class="footer__logo logo" to="/">logo</RouterLink>
				</div>
				<div class="info-blocks">
					<div class="info-block"
						v-for="(menu, index) in menus"
						:key="index"
					>
						<h3 class="info-block__title">{{ menu.title }}</h3>
						<ul class="info-block__list">
							<li class="info-block__item">
								<a href="#">{{ menu.link1 }}</a>
							</li>
							<li class="info-block__item">
								<a href="#">{{ menu.link2 }}</a>
							</li>
							<li class="info-block__item">
								<a href="#">{{ menu.link3 }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer__copyright-block">
				<div class="footer__copyright">© Company 2022. All rights reserved.</div>
				<a href="#" class="footer__privacy">Политика конфиденциальноcти</a>
			</div>
			<div class="footer__soc">
				<a class="tg" target="_blank" href="https://vk.com/im"></a>
				<a class="wa" target="_blank" href="https://web.whatsapp.com/"></a>
			</div>
		</div>
		
	</footer>
</template>

<script>
export default {
	data() {
		return {
			menus: [
				{
					title: 'Услуги',
					link1: 'Support and development',
					link2: 'UI/UX and product design',
					link3: 'Progressive Web Applications (PWA)',
				},
				{
					title: 'Компания',
					link1: 'О компании',
					link2: 'Проекты',
					link3: 'Контакты',
				},
				{
					title: 'Контакты',
					link1: 'Скачать презентацию',
					link2: '+7 (499) 999-99-99',
					link3: 'info@site.com',
				},
			]
		}
	}
}
</script>

<style lang="scss">
.footer {
	background: linear-gradient(93.29deg, #388AF3 21.04%, #A483E2 88.77%);
	margin-top: 160px;
	&__container {
		position: relative;
		padding: 42px 50px 20px;
		position: relative;
	}
	&__logo {
		color: #FFFFFF;
	}
	&__copyright-block {
		display: flex;
		justify-content: space-between;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: #FFFFFF;
		padding-top: 65px;
	}
	&__copyright {
	}
	&__privacy {
		padding-right: 116px;
		color: #fff;
	}
	&__info-block {
		display: flex;
	}
	&__soc {
		position: absolute;
		top: 33%;
		right: 100px;
	}
}
.logo-block {
	margin-right: 196px;
}
.tg {
	background: url(/tg.svg);
	background-size: 31px;
	display: block;
	width: 31px;
	height: 31px;
	margin-bottom: 20px;
	a {
		width: 31px;
		height: 31px;
	}
}
.wa {
	background: url(/wa.svg);
	background-size: 31px;
	display: block;
	width: 31px;
	height: 31px;
	a {
		width: 31px;
		height: 31px;
	}
}
.info-blocks {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 149px;
}
.info-block {
	&:nth-child(1) {
		align-items: flex-start;
	}
	&__list {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
	}
	&__title {
		font-weight: 700;
		font-size: 25px;
		line-height: 31px;
		color: #FFFFFF;
		align-self: flex-start;
		&::after {
			content: '';
			display: inline-block;
			width: 9px;
			height: 9px;
			background: #fff;
			background-size: 9px;
			margin-left: 10px;
			border-radius: 50%;
			vertical-align: middle;
		}
	}
	&__item {
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		align-self: flex-end;
		a {
			color: #FFFFFF;
		}
		&:nth-child(1) {
			padding-top: 25px;
		}
	}
}
#app > div > footer > div > div.footer__info-block > div:nth-child(4) > ul > li:nth-child(1)::after {
	content: '';
	display: inline-block;
	background: url(/arrow-up.svg);
	background-size: 9px;
	width: 9px;
	height: 9px;
	margin-left: 15px;
}
#app > div > footer > div > div.footer__info-block > div:nth-child(4) > ul > li:nth-child(2) {
	font-size: 20px;
	line-height: 24px;
}
#app > div > footer > div > div.footer__info-block > div.info-blocks > div:nth-child(1) > ul > li:nth-child(3) {
	max-width: 186px;
	margin-bottom: -15px;
}
#app > div > footer > div > div.footer__info-block > div:nth-child(1) > a {
	color: #fff;
}


@media all and (max-width: 1350px) {
	.logo-block {
		margin-right: 60px;
	}
}
@media all and (max-width: 1250px) {
	.info-blocks {
		gap: 60px;
	}
	.footer {
		margin-top: 100px;
		&__container {
			padding: 42px 42px 20px;
		}
		&__info-block {
			display: block;
		}
		&__soc {
			top: 36%;
			right: 50px;
		}
		&__privacy {
			padding-right: 7px;
		}
		&__copyright-block {
			padding-top: 126px;
		}
	}
	.info-blocks {
		gap: 20px;
	}
	.logo-block {
		padding-bottom: 50px;
	}
}
@media all and (max-width: 650px) {
	.info-blocks {
		grid-template-columns: repeat(2, 1fr);
		gap: 70px 20px;
	}
	.footer{
		&__soc {
			top: 23%;
		}
	}
}
@media all and (max-width: 425px) {
	.info-blocks {
		grid-template-columns: repeat(1, 1fr);
		gap: 70px 20px;
	}
	.footer{
		&__soc {
			top: 17%;
		}
	}
}
@media all and (max-width: 375px) {
	.footer{
		&__container {
			padding: 42px 30px 20px;
		}
		&__soc {
			top: 71%;
			right: 100px;
		}
		&__copyright-block {
			display: block;
			padding-top: 77px;
			margin-bottom: 21px;
		}
		&__copyright {
			margin-bottom: -40px;
		}
	}
}
</style>