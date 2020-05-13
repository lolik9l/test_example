<template lang="pug">
	div(class="home")
		div(class="progects")
			div(class="progect" v-for="(data, index) in progects" :key="index" )
				img(:src="data.foto" :alt="data.name")
				aside
					h2 {{ data.name }}
					p(class="info") {{ data.shortInformation }}
					div(class="progress" :title="`Собрано ${percent(data.target, data.total)}%`")
						div(class="progress-bar" :style="{ width: `${percent(data.target, data.total)}%`}")
					div(class="state")
						p(class="total") Всего собрано: 
							span {{ data.total }}$
						p(class="target") Нужно: 
							span {{ data.target }}$
						p(class="backers") Поддержало: 
							span {{ data.backers }} 
							| человек
					div(class="bottom")
						p(class="author") Автор проекта: {{ data.boss }}
						p(class="more" @click="openProgect = index") Подробнее
		Modal(v-if="openProgect !== null" @close="openProgect = null")
			Progect(:id="openProgect")
</template>

<script>
import Modal from '@/components/Modal.vue';
import Progect from '@/components/Progect.vue'

export default {
	name: 'Home',
	data: () => ({
		openProgect: null
	}),
	components: {
		Progect,
		Modal
	},
	methods:{
		getProgects(){
			this.$store.dispatch('progects/getProgects');
		},
		percent(target, total){
			return Math.round(total / (target / 100) > 100 ? 100 : total / (target / 100))
		}
	},
	computed:{
		progects() { 
			return this.$store.getters['progects/progects'];
		}
		
	},
	mounted() {
		if(this.progects.length == 0) this.getProgects();
	},
}
</script>

<style scoped lang="scss">
	.home{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		.progects{
			position: relative;
			.progect{
				display: flex;
				justify-content: center;
				align-content: center;
				flex-wrap: wrap;
				margin: 60px 0px;
				border-top: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				padding: 20px 0px;
				img{
					margin-right: 20px;
					max-width: 500px;
				}
				aside{
					position: relative;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					width: 600px;
					h2{
						margin-bottom: 30px;
						width: 100%;
						text-align: center;
					}
					.info{
						text-align: left;
					}
					.progress{
						width: 100%;
						border-radius: 30px;
						background: #ccc;
						margin: 30px 0px;
						div{
							height: 8px;
							border-radius: 30px;
							transition: 1s width;
							background: #83d9e1;
						}
					}
					.state{
						display: flex;
						width: 100%;
						justify-content: space-between;
						flex-wrap: wrap;
						margin-bottom: 30px;
						p{
							font-weight: bold;
							span{
								font-size: 20px;
							}
						}
					}
					.bottom{
						position: absolute;
						width: 100%;
						bottom: 0px;
						left: 0px;
						display: flex;
						justify-content: space-between;
						.author{
							opacity: 0.6;
						}
						.more:hover{
							cursor: pointer;
							text-decoration: underline;
						}
					}
				}
			}
		}	
	}
</style>
