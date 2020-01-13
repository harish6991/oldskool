// binding the Links

var vm_1=new Vue({
	el:'#linker',
	data:{
		title:"Binding The Link",
		connecter:'http://www.google.com'
		
	}
	
	
})

// binding the class
var vm_2=new Vue({
	el:'#classer',
	data:{
		title:'binding the class',
		isActive:true
		
	}
	
	
})

// binding the property Checker


var vm_3=new Vue({
	el:'#propChecker',
	data:{
		title:'this is the prop Checker',
		isActive:true,
		hasError:false
		
	}
	
})

// bindig the property via the array method
var vm_4=new Vue({
	el:"#arrayChecker",
	data:{
		title:"this is the checking via the Array Method",
		error:'displayError',
		info:'info'
		
		
	}	
	
	
})
// checking the ternary Operator and via the Array method

var vm_5=new Vue({
	el:"#tChecker",
	data:{
		title:"checking the data via the tearnay Operator",
		error:'displayError',
		info:'info',
		isActive:true,
		hasError:false
		
	}
	
	
	
})

// binding the class in the Component

var  vm_6=new Vue({
	el:'#cCompt',
	data:{
		
		title:"checking via the componenet in The Class binding"
		
	},
	components:{
		oldmonk:{
			template:"<div class='info'>Old monk is in the Town</div>"
			
		}
		
	}
	
	
})
// binding the component in the template
var vm_7=new Vue({
	el:"#vCompt",
	data:{
		
		title:'Checking via the template Method',
		info:'info',
		error:'displayError',
		isActive:true,
		hasError:false
		
		
	},
	components:{
		buma:{
			template:'<div class="info">this is the Method Of the Test</div>'
			
		}
		
	}
	
	
})
// bindibng the inline css
var vm_8=new Vue({

el:'#iStyler',
data:{
	title:'binding via the inline style',
	color:'yellow',
	size:'30'
	
	
}
	
	
})

var vm_8=new Vue({
	el:'#oStyler',
	data:{
		title:"Passing Style Via the data ",
		styler:{
			color:'green',
			backgroundColor:'#b3b32a',
			fontSize:'30px'	
			
			
		}
		
	}
	
	
	
	
})

var vm_9=new Vue({
	el:'#fElementer',
	data:{
		title:'Forms Element Binding',
		inputer:'',
		texter:'',
		checker:false
		
	}
	
	
	
	
})

var vm_10=new Vue({
	el:'#binder',
	data:{
		title:"this is the Checker model 123",
		picked:'white',
		language:'java'
		
		
	}
	
	
})

var vm_11=new Vue({
	el:'#tMethod',
	data:{
		age:0,
		msg:"",
		message:''
		
		
	}
	
})
