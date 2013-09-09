function title(){
	this.getHtml = function  () {
		html = "<div class='component '><h2> Título do componente Title </h2><div class='component_content'></div></div>";
		return html;
	}

  this.build = function  (data) {
    html = "<div class='component'><h2> Título do componente Title </h2><div class='component_content'>componente com conteudo</div></div>";
    return html;
  }

}

var componenteTitle = {
	init: function(){
		this.getHtml();
	},
	getHtml: function(){
		var html = "<div id='componenteTitle'>Title</div>";
		return html;
	},
	renderIt: function(){

	}
} 

