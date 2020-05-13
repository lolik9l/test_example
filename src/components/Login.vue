<template lang="pug">
	div(class="login")
		span {{ error }}
		form( @submit.prevent="submit")
			input(v-model.trim="login" name="login" placeholder="Логин") 
			input(v-model.trim="pass" name="pass" type="password" placeholder="Пароль") 
			button( type="submit" name="csrf" :value="csrf" :disabled="login && pass ? false : true") Войти
</template>
<script>


export default {
	data: () => ({
		login: '',
		pass: '',
		csrf: '',
		error: ''
	}),
	methods:{
		submit(e){
			const data = {};
			console.log(e.target);
			
			for(let element of e.target){
				data[element.name] = element.value;
			}
			this.$store.dispatch('login', data)
				.then(()=>{
					this.$emit('login');
					this.login = '';
					this.pass = '';
				}).catch((e) =>{
					this.error = 'Ошибка авторизации.';
				});
		}
	},
	mounted(){
		this.csrf = this.$store.getters['csrf'];
	}
}
</script>

<style scoped lang="scss">
.login{
	position: relative;
	span{
		position: absolute;
		width: 100%;
		color: red;
		left: 0px;
		top: 25%;
	}
	form{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		input{
			width: 315px;
			height: 30px;
			padding: 9px;
			margin-bottom: 5px;
			font-size: 18px;
			border: 1px solid;
		}
		button{
			width: 335px;
    		height: 50px;
			cursor: pointer;
		}
	}
}
</style>