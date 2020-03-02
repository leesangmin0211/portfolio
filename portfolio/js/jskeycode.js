focusInput = function()
	{
		document.getElementById("input").focus();
	};
	
	clear = function()
	{
		var eventTypes = ["onkeydown", "onkeypress", "onkeyup"];
		var codeTypes = ["keycode", "charcode", "which"];
		for(var event = 0; event < eventTypes.length; event++)
		{
			for(var code = 0; code < codeTypes.length; code++)
			{
				var element = document.getElementById(eventTypes[event] + "_" + codeTypes[code]);
				while (element.firstChild != null)
				{
					element.removeChild(element.firstChild);
				}
			}
		}
	};
	
	processKeyEvent = function(eventType, event)
	{
		// MSIE hack
		if (window.event)
		{
			event = window.event;
		}
		
		var element = document.getElementById(eventType + "_keycode");
		var text = document.createTextNode("'" + event.keyCode + "'");
		element.appendChild(text);
		
		element = document.getElementById(eventType + "_charcode");
		text = document.createTextNode("'" + event.charCode + "'");
		element.appendChild(text);
	
		element = document.getElementById(eventType + "_which");
		text = document.createTextNode("'" + event.which + "'");
		element.appendChild(text);
	};
	
	processKeyDown = function(event)
	{
		clear();
		processKeyEvent("onkeydown", event);
	};

	processKeyPress = function(event)
	{
		processKeyEvent("onkeypress", event);
	};

	processKeyUp = function(event)
	{
		processKeyEvent("onkeyup", event);
	};