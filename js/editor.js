var items = new Array();

items = getItems();

for (var i = 0; i < items.length; i++) {
	jQuery("#editor-main #conteudo #NewsItems").append("<div class='draggable newsItem'><h2>" + items[i].title + "</h2></div>");
};



jQuery(document).ready(function($) {
	$( ".sortable" ).sortable({
		revert: true
	});
	$( ".draggable" ).draggable({
		connectToSortable: ".sortable",
		helper: "clone",
		revert: "valid"
	});
	   
    $( ".droppable" ).droppable({
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
    });

	$("#editor-main #conteudo #NewsItems .page-region").sortable();
	$(".draggable" ).draggable({helper:'clone', connectToSortable: ".page-region",cursor: "crosshair" });
});