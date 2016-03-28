;(function($){

	var defaults = {
		question:"Your favourite JS Library?",
		url:"",
		buttonText:"Send!",
		categories: ["jQuery", "YUI", "Dojo", "Zepto"],
		containerClass: "npoll",
		formClass: "npoll-form",
		buttonClass:"npoll-submit"
	}

	function Npoll(element, options){
		var widget = this;
		widget.config = $.extend({}, defaults, options);
		widget.element = element;
		widget.element.on('submit', function(e){
				e.preventDefault();
				console.log('submit');

				$.ajax({
					type: 'POST',
					url: widget.config.url,
					contentType: 'application/json; charset=utf-8',
					data: JSON.stringify( {selected:widget.element.find(':checked').val()} ),
					dataType: 'json'
				}).done(function(data){

				});

				widget.element.trigger('beforeresponse.npoll');
			});

		widget.element.one('change', function(e){
			widget.element.find('button').removeAttr('disabled');
		});

		$.each(widget.config, function(key, value){
			if(typeof value === 'function'){
				widget.element.on(key + '.npoll', function(){
					value(widget.element);
				});
			}
		});

		widget.init();
}

	Npoll.prototype.init = function(){
		this.element.addClass(this.config.containerClass);
			$('<h1/>',{
				text: this.config.question
			}).appendTo(this.element);

			var form = $('<form/>').addClass(this.config.formClass).appendTo(this.element);
			var x,y;
			for(x = 0, y = this.config.categories.length; x < y; x++){
				$('<input/>',{
					type: "radio",
					name: "categories",
					id: this.config.categories[x],
					value: this.config.categories[x]
				}).appendTo(form);

				$('<label/>', {
					text: this.config.categories[x],
					"for": this.config.categories[x]
				}).appendTo(form);

				}

				$('<button/>',{
					text: this.config.buttonText,
					"class": this.config.buttonClass,
					"desabled":"desabled"
				}).appendTo(form);

				this.element.trigger('created.npoll')
		}

	$.fn.npoll = function(options){
			new Npoll(this.first(), options);
			return this.first();
	};
})(jQuery);