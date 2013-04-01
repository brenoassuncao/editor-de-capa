var items = new Array();

items = getItems();

for (var i = 0; i < items.length; i++) {
	jQuery("#editor-main #conteudo #NewsItems").append("<div class='draggable newsItem'><h2>" + items[i].title + "</h2></div>");
};



jQuery(document).ready(function($) {


	 
	jQuery(components).each(function(i, n){ 
		one_component = eval('new ' + n);
		//console.log(one_component);
		jQuery("#editor-main #formatos #componentes").append(one_component.getHtml());
	});	


	$( ".sortable" ).sortable({
		revert: true,
		connectWith: ".sortable"
	});
	/*$( ".draggable" ).draggable({
		connectToSortable: ".sortable",
		revert: "valid"
	});
	   */
    $( ".droppable" ).droppable({
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
    });

	$("#editor-main #conteudo #NewsItems .sortable").sortable();
	$(".draggable" ).draggable({helper:'clone', connectToSortable: ".sortable",cursor: "crosshair",containment:"#pagina" });

});