// Lista de componentes habilitados
components = ["title", "title_text"];
componentes_inst = new Array();

for (var i = 0; i < components.length; i++) {	
	document.write('<scr'+'ipt type="text/javascript" src="components/'+components[i]+'/component.js">'+'</scr'+'ipt>');

}  