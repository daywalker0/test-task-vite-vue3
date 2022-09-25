<template>
	<div class="contact__form">
		<form @submit.prevent="onSubmit">

			<div class="contact__form_top">
				<div>
					<input class="form__name form__input" id="name" v-model="name">
					<label @click="labelPos" class="label-form label-for-name" for="name">Ваше имя <span>*</span></label>
				</div>
				<div>
					<input class="form__email form__input" id="email" v-model="email">
					<label @click="labelPos2" class="label-form label-for-email" for="email">Ваш E-Mail <span>*</span></label>
				</div>
			</div>

			<br>

			<div class="contact__form_bottom">
				<input class="form__comment form__input" id="review" v-model="review">
				<label @click="labelPos3" class="label-form label-for-review" for="review">Комментарий <span>*</span></label>
			</div>

			<br>

			<input type="checkbox" class="custom-radio" id="happy" name="happy" value="yes" checked>
			<label for="happy"><span class="form__agreement">Согласен с <a href="#">Политикой конфиденциальности</a></span></label>

		</form>
		<BtnSubmitForm />
	</div>
</template>

<script>
import BtnSubmitForm from './BtnSubmitForm.vue';
export default {
	components: { BtnSubmitForm },
	methods: {
		labelPos: function() {
			const input = document.querySelector('.form__name');
			const label = document.querySelector('.label-for-name');
			input.addEventListener('focus', function() {
				label.style.fontSize = '16px';
				label.style.transform = 'translateY(-40px)';
			})
		},
		labelPos2: function() {
			const input = document.querySelector('.form__email');
			const label = document.querySelector('.label-for-email');
			input.addEventListener('focus', function() {
				label.style.fontSize = '16px';
				label.style.transform = 'translateY(-40px)';
			})
		},
		labelPos3: function() {
			const input = document.querySelector('.form__comment');
			const label = document.querySelector('.label-for-review');
			input.addEventListener('focus', function() {
				label.style.fontSize = '16px';
				label.style.transform = 'translateY(-40px)';
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.contact {
	&__form {
		display: flex;
		&_top {
			display: flex;
			position: relative;
		}
	}
}
form {
	margin-right: 184px;
}
.label-form {
	color: #CCCCCC;
	font-family: Gilroy;
	margin: 0 30px 60px 0;
	font-weight: 300;
	line-height: 31px;
	font-size: 26px;
	top: 0;
	transition: 0.3s ease;
	position: absolute;
	cursor: text;
	span {
		color: red;
	}
}
.label-for-name {
}
.label-for-review {
	padding-top: 60px;
}
.label-for-email {
	margin-bottom: 30px;
}

.form {
	&__input {
		border: none;
		border-bottom: 1px solid #E2E2E2;
		display: block;
		z-index: 101;
		font-size: 26px;
		font-family: Gilroy;
		font-weight: 300;
	}
	&__agreement {
		font-family: Circe;
		font-weight: 400;
		font-size: 18px;
		line-height: 27px;
		color: #6D6D6D;
		a {
			color: #388AF3;
			padding-left: 5px;
		}
	}
	&__name {
		margin: 0 30px 0 0;
		line-height: 31px;
		width: 433px;
	}
	&__email {
		width: 278px;
	}
	&__comment {
		overflow: hidden;
		margin-bottom: 30px;
		width: 741px;
	}
}

.custom-radio {
	position: absolute;
	z-index: -1;
	opacity: 0;
	padding-right: 20px;
}
.custom-radio+label {
	display: inline-flex;
	align-items: center;
	user-select: none;
}
.custom-radio+label::before {
	content: '';
	display: inline-block;
	width: 23px;
	height: 23px;
	flex-shrink: 0;
	flex-grow: 0;
	border: 1px solid #adb5bd;
	border-radius: 50%;
	margin-right: 20px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 50% 50%;
}
.custom-radio:not(:disabled):not(:checked)+label:hover::before {
	border-color: #b3d7ff;
}
.custom-radio:not(:disabled):active+label::before {
	background-color: #b3d7ff;
	border-color: #b3d7ff;
}
.custom-radio:focus:not(:checked)+label::before {
	border-color: #80bdff;
}
.custom-radio:checked+label::before {
	border-color: #e9e9e9;
	background-color: #0b76ef;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.custom-radio:disabled+label::before {
	background-color: #e9ecef;
}
#app > div > main > section > div > div.contact__form > form > div.contact__form_bottom {
	position: relative;
	padding-top: 60px;
}

@media all and (max-width: 1250px) {
	.contact__form {
		display: block;
	}
	.form-btn-submit {
		margin-top: 60px;
	}
}

@media all and (max-width: 768px) {
form {
	margin-right: 0;
}
	.contact {
		&__form {
			form {
				margin-bottom: 60px;
			}
			display: block;
		}
	}
	.form {
		&__name {
			width: 300px;
		}
		&__comment {
			width: 615px;
		}
	}
}

@media all and (max-width: 650px) {
	.contact {
		&__form_top {
			flex-wrap: wrap;
		}
		&__form_bottom {
			padding-top: 60px;
		}
	}
	#app > div > main > section > div > div.contact__form > form > div.contact__form_top > div:nth-child(2) {
		padding-top: 60px;
	}
	.label-for-email {
		top: 90px;
	}
	.form__email {
		width: 400px;
	}
	.form__name {
		width: 400px;
	}
	.form__comment {
		width: 400px;
	}
}



@media all and (max-width: 375px) {
	.form {
		&__input {
			width: 310px;
		}
		&__agreement {
			white-space: white space;
			span {
				max-width: 50px;
			}
		}
	}
}
</style>