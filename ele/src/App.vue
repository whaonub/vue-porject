<template>
  <div id="app">
  	<!--<transition mode="out-in" enter-active-class="animated bounceInLeft"  leave-active-class="animated bounceOutRight">-->
  		<router-view></router-view>
  	<!--</transition>-->
    
    <nav-tab></nav-tab>
  </div>
</template>

<script>
	import NavTab from './components/NavTab'
	console.log(NavTab)
export default {
  name: 'app',
  components:{
  	NavTab
  }
}
</script>

<style lang='scss'>
	
	@import './styles/virtual.scss';
	@import './styles/reset.scss';
	
	html{
		font-size: 10vw;
	}
	html,body,#app{
		height: 100%;
		margin: 0;padding: 0;
		position: relative;
	}
	
	body{
		font-size: 16px;
	}

	[v-cloak]{
		visibility: hidden;
	}
</style>
