var vue_det=new Vue({
	el:'#vue_det',
	data:{
		firstname:'harish',
		lastname:'rana'	
	},
	methods:{
		mydetail: function(){
			return this.firstname+"sing "+this.lastname;
			
		}
		
	}
	
})