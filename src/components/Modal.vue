<template lang="pug">
	div(class="modal")
		span(class="close" @click="$emit('close')") Закрыть
		slot
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
	.modal{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: #fff;
		display: flex;
		justify-content: center;
		z-index: 10;
		.close{
			position: absolute;
			top: 30px;
			right: 30px;
			&:hover{
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}
</style>