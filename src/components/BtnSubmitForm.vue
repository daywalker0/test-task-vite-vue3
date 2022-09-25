<template>
	<button @click="editMessage" class="form-btn-submit"><span>Отправить</span></button>
</template>

<script>
export default {
	methods: {
		editMessage: function() {
			let btnSubmit = document.querySelector('.form-btn-submit');
			btnSubmit.textContent = 'Ваше сообщение отправлено!'
		}
	}
}
</script>

<style lang="scss">
.form-btn-submit {
	outline-color: transparent;
	border: 5px solid #388AF3;
	background: none;
	border-radius: 1.23123e+06px;
	width: 227px;
	height: 227px;
	font-family: Gilroy;
	font-weight: 800;
	font-size: 20px;
	line-height: 20px;
	text-align: center;
	letter-spacing: 0.02em;
	color: #388AF3;
	padding-top: 50px;
	cursor: pointer;
	position: relative;
	transition: .7s;
	&::before {
		content: '';
		display: inline-block;
		background: url('/submit.png');
		background-size: cover;
		background-repeat: no-repeat;
		width: 57px;
		height: 42px;
		position: absolute;
		top: 26%;
		left: 38%;
		z-index: 99;
	}
	&:hover{
		transition: .7s ease;
		color: #fff;
		background-color: #388AF3;
		padding-top: 0;
	}
	&:hover::before {
		animation-name: rotation;
    animation-duration: 0.6s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
		animation-fill-mode: forwards;
	}
	@keyframes rotation {
    0% {
			transform:translate(0px) scale(1.1);
    }
    15% {
			transform:translate(10px, -10px) scale(1.3);
    }
    35% {
			transform:translate(20px, -20px) scale(1.4);
    }
    60% {
			transform:translate(30px, -30px) scale(1.5);
    }
  	80% {
			transform:translate(35px, -35px) scale(1.6);
    }
		100% {
			transform:translate(40px, -40px) scale(1.7);
		}
	}
	&:focus {
		background-color: #388AF3;
		color:#fff;
		padding-top: 0;
	}
	&:focus::before {
		animation-name: submit;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
		animation-fill-mode: forwards;
	}
	@keyframes submit {
    0% {
			transform:translate(40px, -40px) scale(1.7);
		}
    30% {
			transform:translate(60px, -50px) scale(1.3);
		}
    60% {
			transform:translate(70px, -60px) scale(1);
		}
    80% {
			transform:translate(70px, -70px) scale(0.5);
		}
    100% {
			transform:translate(250px, -250px) scale(0);
		}
	}
}
</style>