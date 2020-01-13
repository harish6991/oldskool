// adding the Click event
var vue_1=new Vue({
	el:"#aTester",
	data:{
		num_1:100,
		num_2:200,
		total:""
	},
	methods:{
		adder:function(){
			return this.total=this.num_1+this.num_2
			
		}	
		
		
	}
	
	
});


// testing the Style object via mouse event
var vue_2=new Vue({
	el:"#sTester",
	data:{
		title:"this is Style Object",
		styleObj:{
			height:"100px",
			width:"100px",
			backgroundColor:"green"
			
			
		}
		
	},
	methods:{
		changeColor:function(a){
			console.log(a)
			this.styleObj.backgroundColor="red"		
		},
		orignalColor:function(a){
			console.log(a)
			this.styleObj.backgroundColor="green"
			
			
		}
		
		
	}
	
	
})
// testing the Event Clicking the once

var vue_3=new Vue({
	el:"#sEventer",
	data:{
		click_1:0,
		click_2:0,
		styleObj:{
			  backgroundColor: '#2196F3!important',
              cursor: 'pointer',
              padding: '8px 16px',
              verticalAlign: 'middle',
			
		}
		
	},
	methods:{
		clickedOnce:function(){
			return this.click_1++
			
		},
		clicked:function(){
			return this.click_2++;
			
		}
		
	}
	
})

// Testing the Events the preventer

var vue_4=new Vue({
	el:"#preventer",
	data:{
		title:"click me",
		linker:"http:/www.google.com"
			
	},
	methods:{
		tester:function(){
			alert("the Link has been Clicked")
			
		}
		
	}
	
	
})


// testing the Key Event

var vue_5=new Vue({
	el:"#eTester",
	data:{
	title:"Press the enter Key",
	tester:""
	},
	methods:{
		printer:function(event){
		this.tester=event.target.value
			
		}
		
	}
	
	
})

// finally testing the Events Various Component
Vue.component('button-content',{
	template:"<button v-on:click='dispEvent(item)'>{{item}}</button>",
	data:function(){
		return{
			counter: 0
		}
		
	},
	props:['item'],
	methods:{
		dispEvent:function(lan){
			console.log(lan)
			 this.$emit('showlanguage', lan);
		}
		
	}
	
})

var vue_6=new Vue({
	el:"#buttoner",
	data:{
		langClicked:"",
		 languages : ["Java", "PHP", "C++", "C", "Javascript", "C#", "Python", "HTML"]
		 
	},
	methods:{
		displanger:function(a){
			this.langClicked=a
			
		}
		
	}
	
	
})
