var ActivitiesController = function(view, model) {
	
	// Drag to dayActivies and restore if else were
	/*this.dragActivity = function() {
		view.activity.draggable({
			//helper: 'clone',
			revert: "invalid",
			connectToSortable: ".dayActivity"
		}).css("width","225px");
	}*/


	//this.popupActivity = function() {
		$("#popup").hide();

		view.newActivity.click(
			function(){
				$("#name").val("");
				$("#length").val("");
				$("#typeid").val("");
				$("#description").val("");
				$("#activities").hide();
				$("#popup").show();

			}
		);
	//}
	
	model.addObserver(this);
	this.update = function(arg){
	//	this.dragActivity();
		//this.popupActivity();
	}
}