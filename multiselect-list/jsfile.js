$("#branch").change(function (){
	
	if(!checkSelectedItem("brazil"))
		adjustFields(true, false);
	else if(!checkSelectedItem("notBrazil"))
		adjustFields(false, true);
	else
		adjustFields(false, false);
});

function checkSelectedItem(branch){
	var selectedItem = $("#branch option:selected").prop("class");
	return selectedItem == branch || selectedItem == null ? true : false;
};

function adjustFields(brazilStatus, notBrazilStatus){
	$(".brazil").prop("disabled", brazilStatus)
	$(".notBrazil").prop("disabled", notBrazilStatus)
}