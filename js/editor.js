var items = new Array();

items = getItems();

for (var i = 0; i < items.length; i++) {
	jQuery("#editor-main #conteudo #NewsItems").append("<div class='draggable newsItem'><h2>" + items[i].title + "</h2></div>");
};



jQuery(document).ready(function($) {
	//$("#editor-main #pagina #page-layout .page-region").sortable();
	$(".draggable" ).draggable({containment:"#page-layout"});
	$(".draggable").droppable({accept:"#page-layout"});
});