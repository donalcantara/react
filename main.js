var myReactComponent = React.createClass({
	render: function(){
		console.log(this.props)

		var coloredHeadlines = this.props.colors.map(function(color,idx){
			return React.createElement('h1', {style: {color: color}}, color + ' headline')
		})
		return React.createElement('div', null, coloredHeadlines);
	}
})

var actualDOMNode = document.getElementById('app');

ReactDOM.render(React.createElement(myReactComponent, {colors: ['blue', 'gray', 'green']}), actualDOMNode);