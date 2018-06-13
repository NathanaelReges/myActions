# myActions
A tool to help you respond to clicks in a easy way.  
  
**Example:** 
```html
<body>
	<h1>Title</h1>
	<button data-act="turn">Turn me red</button>
	<button data-act="show" data-secret="42">
		Show my secret
	</button>
</body>
```
```js
myActions.add({
	'turn' (dataset, target) {
		target.style.color = "red"
	},
	'show' (dataset) {
		alert(dataset.secret)
	}
})
```  
<br/>  

**`myActions.add(args)`** A method for adding actions. It accepts a single key-function pair or an object with several pairs.   
&ensp;&ensp;**args:**&ensp;`(key, function)`  
&ensp;&ensp;&ensp;&ensp;The key is a string representing the `data-act="key"` attribute and function is the function to be executed for that action.   
&ensp;&ensp;**args:** &ensp;`({key: function})`  
&ensp;&ensp;&ensp;&ensp;An object where the property names must be the keys and the property values must be the functions. 

<br/>  

**`myActions.remove(args)`** A method for removing actions. It accepts a single key or an object with several keys.   
&ensp;&ensp;**args:**&ensp;`(key)`   
&ensp;&ensp;&ensp;&ensp;The key for the action that you want to remove.  
&ensp;&ensp;**args:**&ensp;`({key})`  
&ensp;&ensp;&ensp;&ensp;An object with all the keys that you want to remove. Tip: you can use the same object provided to `myActions.add(actionsObj)`
