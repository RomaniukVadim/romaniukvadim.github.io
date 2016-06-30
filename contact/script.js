$(document).ready(function(){

	var list=["about","link"];
	var opened="none";
	var container=$("#textdiv");
	$.each(list,function(){
		$("#"+this).click(function(e){
			var id=e.target.id;
			container.toggle(100,function(){
				if(opened==id){
					container.hide();
					opened="none";
				}else{
					if(opened!="none"){
						container.hide();
					}
					container.html($("#"+id+"div").html()).show();
					opened=id;
				}
			});
		});
	});
});