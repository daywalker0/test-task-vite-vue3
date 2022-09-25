<template>
	<section class="s-contacts">
		<div class="s-contacts__container">
			<div class="breadcrumbs">Главная - <span>Контакты</span></div>
			<h1 class="s-contacts__title title">Мы рядом</h1>
			<p class="s-contacts__subtitle subtitle">Заполните форму ниже и мы свяжемся с вами. Не любите<br>формы? Напишите нам на почту
				<a href="mailto:info@site.com">info@site.com</a>
			</p>
			<ContactForm />
		</div>
	</section>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
	components: {
		ContactForm
	}
}
</script>

<style lang="scss" scoped>
.s-contacts {
	&__container {
		padding: 85px 50px 0 50px;
	}
	&__subtitle {
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
		color: #343434;
		padding-bottom: 97px;
		a {
			color: #388AF3;
			font-weight: 700;
			padding-left: 5px;
		}
	}
	&__title {
		padding: 55px 0 15px;
	}
}
.breadcrumbs {
	color: #303030;
	font-weight: 300;
	font-size: 18px;
	line-height: 21px;
	span {
		font-weight: 700;
	}
}

@media all and (max-width: 768px) {
	.s-contacts {
		&__container {
			padding: 85px 42px 0 42px;
		}
		&__title {
			font-size: 60px;
		}
		&__subtitle {
			font-size: 16px;
		}
	}
	.breadcrumbs {
		font-size: 16px;
		line-height: 19px;
	}
}


@media all and (max-width: 375px) {
	.s-contacts {
		&__container {
			padding: 85px 30px 0 30px;
		}
	}
}
</style>