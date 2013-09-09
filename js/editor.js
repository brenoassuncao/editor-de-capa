var items = new Array();

items = getItems();

for (var i = 0; i < items.length; i++) {
	jQuery("#editor-main #conteudo #NewsItems").append("<div id='post_" + items[i].id + "' class='news_draggable newsItem'><h2>" + items[i].title + "</h2></div>");
};



jQuery(document).ready(function($) {

/* For each component listed in config.js file, the system will append in the panel of the editor.
 *
 */

	jQuery(components).each(function(i, n){
		one_component = eval('new ' + n);
		//console.log(one_component);
		jQuery("#editor-main #formatos #componentes").append(one_component.getHtml());
	});


	$( ".region_sortable" ).sortable({
		revert: true,
		connectWith: ".region_sortable",
	});

  $( ".region_droppable" ).droppable({
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      accept: ".component",
      scope: "component",
      revert: "invalid",
      drop: function( event, ui ) {
				$( ".region_droppable .component" ).droppable({
						scope: "news",
						drop: function( event, ui ) {
								$( this )
								.addClass( "breno" );
								return false;
						}
					});
      }
  });

	$("#editor-main #formatos #componentes .component" ).draggable({
			helper:'clone',
      scope: "component",
			connectToSortable: ".region_sortable",
			cursor: "crosshair",
			containment:"#pagina",
	});


	$( ".component" ).droppable({
		scope: "news",
		drop: function( event, ui ) {
				$( this )
				.addClass( "ui-state-highlight" );
				console.log(ui);
				return false;
		}
	});


	$(".news_draggable" ).draggable(
		{	helper:'original',
			scope: "news",
			cursor: "crosshair",
		//	containment:"#pagina",
			revert: "invalid",
			stop: function( event, ui ) {
				console.log(event);
				console.log(ui);
				console.log(this);
		}
	});


});
