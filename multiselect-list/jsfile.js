$("#branchChoicesForm").change(function (){
	const isUndefined = $("input:checked").val() == undefined ? true : false;
	const isBrazil = $("input:checked").val() == "brazil" ? true : false;

	if(isUndefined){
		$(this).find('input').prop('disabled', false);
	} else if (isBrazil) {
		$(this).find('input:not([value="brazil"])').prop('disabled', true);
	} else {
		$(this).find('input[value="brazil"]').prop('disabled', true);
	}

});