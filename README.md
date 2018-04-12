# myActions
A tool to help you respond to clicks in a easy way.  
<br/>
**Example:** 
```
//html
<body>
	<p>Title</p>
	<button data-act="turn">Turn me red</button>
	<button data-act="show" data-secret="42">
		Show my secret
	</button>
<body>


//js
myActions.add({
	'turn' (dataset, target) {
		target.style.color = "red"
	},
	'show' (dataset) {
		alert(dataset.secret)
	}
})

```

<br/><br/>**myActions.add(args)**  
&ensp;&ensp;A method for adding actions. It accepts a single key - function pair or an object with several pairs.
<br/>&ensp;&ensp;**args1** (key, function)  
&ensp;&ensp;&ensp;&ensp;The key is a string representing the data-act="key" attribute and function is the function to be executed for that action.
<br/>&ensp;&ensp;**args2** ({key: function})  
&ensp;&ensp;&ensp;&ensp;An object where the property names must be the keys and the property values must be the functions.
<br/><br/>**myActions.remove(args)**  
&ensp;&ensp;A method for removing actions. It accepts a single key or an object with several keys.
<br/>&ensp;&ensp;**args1** (key)  
&ensp;&ensp;&ensp;&ensp;The key for the action that you want to remove.
<br/>&ensp;&ensp;**args2** ({key})  
&ensp;&ensp;&ensp;&ensp;An object with all the keys that you want to remove. Tip: you can use the same object passed to myActions.add()
<br/>