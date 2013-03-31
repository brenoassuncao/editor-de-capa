
function getItems () {
	var items = new Array();

	var item = new NewsItem();
	item.title = "Meu Título"
	item.subtitle = "Subtítulo da noticia"
	item.id = "0"
	item.text = "Even though Vagrant allows for a vast amount of configuration through its commands and the Vagrantfile, nothing beats the power of the command line. Sometimes you just have to get into the files and play around to get things working just right or to debug an application."
	item.created_at = 1364737789
	item.url = "http://ebc.com.br"
	item.author = "Breno Assunção"
	item.img = "http://www.epochconverter.com/img/epochconverter.png"
	item.audio_url = ""
	item.audio_title = ""
	item.video_url = ""
	item.video_title = ""
	item.source = "EBC"
	item.header = ""
	items.push(item);


	var item = new NewsItem();
	item.title = "Meu Título 2"
	item.subtitle = "Subtítulo da noticia 2"
	item.id = "2"
	item.text = " 2 Even though Vagrant allows for a vast amount of configuration through its commands and the Vagrantfile, nothing beats the power of the command line. Sometimes you just have to get into the files and play around to get things working just right or to debug an application."
	item.created_at = 1364737789
	item.url = "http://ebc.com.br2"
	item.author = "Breno Assunção 2"
	item.img = "http://www.epochconverter.com/img/epochconverter.png"
	item.audio_url = ""
	item.audio_title = ""
	item.video_url = ""
	item.video_title = ""
	item.source = "EBC 2"
	item.header = ""
	items.push(item);


	var item = new NewsItem();
	item.title = "Meu Título 3 "
	item.subtitle = "Subtítulo da noticia 3"
	item.id = "3"
	item.text = "3 Even though Vagrant allows for a vast amount of configuration through its commands and the Vagrantfile, nothing beats the power of the command line. Sometimes you just have to get into the files and play around to get things working just right or to debug an application."
	item.created_at = 1364737789
	item.url = "http://ebc.com.br"
	item.author = "Breno Assunção3"
	item.img = "http://www.epochconverter.com/img/epochconverter.png"
	item.audio_url = ""
	item.audio_title = ""
	item.video_url = ""
	item.video_title = ""
	item.source = "EBC 3"
	item.header = ""
	items.push(item);

	return items;
}	