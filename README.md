# autogrow

A minimal/pure javascript function that gives the ability for a textarea to automatically grow and shrink dynamically with its content. 

Currently works for new lines only (.\n'). 

## Instructions

Include the script in your page: 

```html
<script src="path/to/autogrow.js"></script>
```

Initialize the script using the textarea id: 

```javascript
var t = Autogrow('mytextarea');
```

You're done! 

PS: You can use multiple variables to initiate multiple textarea's on the same page: 

```javascript
var t1 = Autogrow('mytextarea1');
var t2 = Autogrow('mytextarea2');
...
```

Feel free to do anything you want with this script. 

*Use at your own risk