// using the content globally
Vue.component('container',{
	template:"<h3>this is testing Module 123</h3>"
	
})

var vue_1=new Vue({
	el:"#one"
})

var vue_2=new Vue({
	el:"#two"
	
})
// assignment to local 

var vm=new Vue({
	el:'#local',
	components:{
		content1:{
			template:'<h3 style="color:rgba(123,223,12,0.8)">This is the Local assignment</h3>'
			
		}
		
	}
	
})

// dynamic allocation of the content
Vue.component('dyna',{
	
	template:'<div v-on:mouseover="changer()" v-on:mouseout="orignal()">The name is {{name}}</div>',
	data:function(){
		return{
		name:'harish'
		}
	},
	methods:{
		changer:function(){
			this.name="Himashu"
			
		},
		orignal:function(){
			this.name="harish"
			
		}
		
		
	}
	
	
})

var tester=new Vue({
	el:"#tester"
	
})

// dynamic allocation of the Content using the content method
var vm=new Vue({
	el:'#databinding',
	data:{
		view:"component1",
		name:'harihs'
		
	},
	components:{
		component1:{
			template:"<div style='color:rgba(123,123,122,0.6)'>This is test</div>"
			
		}
		
	}
	
})

