// allocation of the name from the text box

var vm=new Vue({
	el:"#cProp",
	data:{
		firstname:"",
		lastname:""
		
	},
	computed:{
		getFullName:function(){
			
			return this.firstname +" "+this.lastname
		}
		
	}
	
	
})


// diffrence between the methods and the compute


var vm_2=new Vue({
el:"#cFmethod",
data:{
	name:'harish'
	
},
computed:{
	getNum:function(){
		
		return Math.random();
		
	}
	
},
methods:{
	getNum1:function(){
		
		return Math.random();
	}
	
}	
	
	
})

// using the get and the set method
// get method
var vm_3=new Vue({
	el:"#gMethod",
	data:{
		firstname:"harish",
		lastname:"rana"
		
	},
	computed:{
		pName:function(){
			
			return this.firstname+" "+this.lastname;
			
		}
		
		
	}
	
	
})


// set method

var vm_4=new Vue({
	el:'#sMethod',
	data:{
		firstname:'Raghuvar',
		lastname:'Das'
		
	},
	computed:{
		pName:{
			
			get:function(){
			
			return this.firstname+" "+this.lastname
		},
		set:function(name){
			var fname=name.split(" ");
			this.firstname=fname[0];
			this.lastname=fname[1]	
			
		}
		
		}
		
	}
	
})
