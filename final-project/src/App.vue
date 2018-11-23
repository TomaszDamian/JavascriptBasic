<template>
	
	<div id="app">
		<ConcertDisplay></ConcertDisplay>
	</div>
</template>

<script>
	import ConcertDisplay from './components/ConcertDisplay.vue'

	export default {
		name: 'app',
		components: {
			ConcertDisplay
		}
	}
	</script>

<style>
	body{
		margin: 0px;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
</style>
