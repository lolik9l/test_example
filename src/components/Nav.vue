<template lang="pug">
	div(id="nav")
		img(alt="Vue logo" src="@/assets/logo.png")
		router-link(to="/") Главная 
		router-link(to="/list") Список всех пользователей
		div
			span(v-if="!isLogin" @click="openComponent = 'Login'") Войти 
			b(v-if="!isLogin") / 
			span(v-if="isLogin" @click="logout") Выйти
			span(v-if="!isLogin" @click="openComponent = 'Registration'") Зарегистрироватся
		Modal(v-if="openComponent" @close="openComponent = ''")
			component(:is="openComponent" @login="openComponent = ''")
</template>

<script>

import Modal from '@/components/Modal.vue';
import Login from '@/components/Login.vue';
import Registration from '@/components/Registration.vue';

export default {
	data: () => ({
		openComponent: ''
	}),
	computed:{
		isLogin() { 
			return this.$store.getters['hasToken'];
		} 
	},
	methods:{
		logout(){
			this.$store.dispatch('logout');
		}
	},
	components:{
		Modal,
		Login,
		Registration,
	}

}
</script>

<style scoped lang="scss">
#nav {
	display: flex;
    justify-content: space-around;
    align-items: center;
	border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
	span {
		&:hover{
			cursor: pointer;
			text-decoration: underline;
		}
	}
	img {
		width: 80px;
	}
}
</style>
