function formsInit() {
	//Makes select boxes work with materialze select boxes
    $('select').material_select();

    // to make date picker work with component
	$('.date-picker input').pickadate({
		selectMonths: false, // Creates a dropdown to control month
		selectYears: 100, // Creates a dropdown of 15 years to control year
		format: "mm-dd-yyyy"
	});
};