<template lang="pug">
	div(class="users")
		div(class="filter")
			p Отфильтровать по должности: 
				select(v-model="selectFilter")
					option(disabled value="") Выберите один из вариантов
					option тренер
					option участник
					option наставник
					option инвестор	 
				span(class="reset" v-show="selectFilter" @click="selectFilter = ''") Сбросить фильтр
		div(class="list")
			div(
				class="cart"  
				v-for="(data, index) in users"
				:key="index"
				@click="openUser = data.index"
				v-show="selectFilter ? data.position === selectFilter : true"
				)
				div(class="foto" :style="{ backgroundImage: `url(${data.foto})` }")
				aside
					h2 {{ data.name }}
					p(class="age") Возраст: 
						span {{ data.age }}лет
					p(class="region") Город: 
						span {{ data.region }}
					p(class="position") Должность: 
						b {{ data.position }}
					p(class="about") Немного о себе: 
						br 
						span {{ data.about }}
</template>

<script>
export default {
	data: () => ({
		startId: 0,
		openUser: null,
		selectFilter: ""
	}),
	// components: {
	// 	Progect
	// },
	methods:{
		getUsers(){
			this.$store.dispatch('users/getUsers', this.startId);
		}
	},
	computed:{
		users() { 
			return this.$store.getters['users/users'];
		}
	},
	mounted() {
		if(this.users.length == 0) this.getUsers();
	},
}
</script>

<style scoped lang="scss">
	.users{
		position: relative;
		margin: 30px;
		margin-top: 50px;
		.filter{
			display: flex;
			justify-content: space-between;
			margin-left: 20px;
			.reset{
				margin-left: 10px;
				&:hover{
					cursor: pointer;
					text-decoration: underline;
				}
			}
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			.cart{
				display: flex;
				border: 1px solid; 
				border-color: #222;
				transition: .4s border-color;
				border-radius: 0px 30px 0px 30px;
				padding: 10px;
				margin: 20px;
				width: 100%;
    			max-width: 500px;
				&:hover{
					cursor: pointer;
					border-color: #83d9e1;
				}
				.foto{
					background-position: center;
					background-size: contain;
					min-width: 200px;
					background-repeat: no-repeat;
					min-height: 200px;
				}
				aside{
					width: 100%;
					h2{
						margin-bottom: 15px;
					}
					p{
						margin-bottom: 5px;
						font-size: 18px;
					}
					span{
						opacity: 0.7;
					}
					.about{
						span{
							font-size: 16px;
						}
					}
				}
			}
		}
	}
</style>
