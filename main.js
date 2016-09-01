var MyReactComponent = React.createClass({
	render: function(){
		var coloredHeadlines = this.props.colors.map(function(color,idx){ //props shows what objects it has to work with, in this case it's colors.
			return React.createElement('h1', {style: {color: color}, key: idx}, color + ' headline') //this creates an element with the attributes, colors, and children
		})
		return React.createElement('div', null, coloredHeadlines);//this returns a div element with the coloredHeadlines variable as the child to show in the html div
	} //end of function
})

var actualDOMNode = document.getElementById('app'); //this variable locates which id will show this code in the HTML page

ReactDOM.render(React.createElement(MyReactComponent, {colors: ['Blue', 'Silver', 'Green']}), actualDOMNode); //render makes all the above code happen and where