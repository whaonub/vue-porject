<template>
  <div class="outmain">
  	<out-mai-header :position="position"></out-mai-header>
  	
  	
  	
  </div>
</template>
<script>
	
	import OutMaiHeader from './OutMai_components/OutMaiHeader'
	
export default {
  name: 'outmain',
  data () {
   	return {    	
     	position:{
     		latitude:40.11722,
     		longitude:116.25003,
     		address:"北京科技职业学院"
     	}
    }
  },
  components:{
  	OutMaiHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
