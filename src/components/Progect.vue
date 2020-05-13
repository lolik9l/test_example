<template lang="pug">
	div(class="progect")
		img(:src="data.foto" :alt="data.name")
		aside
			h2 {{ data.name }}
			p(class="info") {{ data.information }}
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
				button(class="support") Поддержать этот проект
</template>

<script>

export default {
	name: 'Progect',
	props: ['id'],
	methods:{
		getProgect(){
			this.$store.dispatch('progects/getProgect', this.id);
		},
		percent(target, total){
			return Math.round(total / (target / 100) > 100 ? 100 : total / (target / 100))
		}
	},
	computed:{
		data() { 
			return this.$store.getters['progects/dataProgect'];
		}
	},
	mounted(){
		this.getProgect();
	},
	destroyed(){
		this.$store.dispatch('progects/resetCurrentData');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.progect{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		max-width: 1200px;
		width: 100%;	
		padding-top: 10px;
		img{
			margin-bottom: 20px;
			max-height: 50%;
			max-width: 600px;
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
				margin-bottom: 40px;
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
				align-items: center;
				justify-content: space-between;
				.author{
					opacity: 0.6;
				}
				.support{
					width: 200px;
					height: 25px;
					border: 1px solid #83d9e1;
					background: #83d9e1;
					cursor: pointer;
				}
			}
		}
	}
</style>
