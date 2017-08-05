var Tabs = React.createClass({
	_tabChange: function(index, e) {
		e.preventDefault();
		this.setState({selected: index});
	},
	_compileLabels: function() {
		function labels(item, index)
		{
			var className = this.state.selected == index ? 'active' : '';
			return (
				<li
					onClick={this._tabChange.bind(this, index)} 
					className={className} key={index}>
					{item.label}
				</li>
			)			
		}
		return (
			<ul className="tab_names">
				{this.props.data.map(labels.bind(this))}
			</ul>
		);
	},
	render: function(){
	var data = this.props.data;
		return (
			<div className="tabs_wrap">
				{this._compileLabels()}
				
				<div className="tabs_content_wrapper">
					<div dangerouslySetInnerHTML={{__html: this.props.data[this.state.selected].content}}></div>
				</div>
			</div>
		);
	},
	componentDidMount: function() {

	},
	getInitialState: function() {
		return {selected: this.props.selected}
	}
});

var tabs_items = [
	{
		label: "React Dom",
		content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dapibus dui. Aenean sed libero eget ante malesuada sagittis eget ut mi. Donec ut velit diam. Fusce neque metus, pulvinar quis orci in, volutpat hendrerit nulla. Integer elementum ut felis eget dictum. Nulla non leo id augue consequat cursus. Sed sed ornare est, interdum semper ante. Vivamus suscipit mi nulla, vel lacinia elit ornare in. Nullam sed justo et lectus imperdiet elementum vel nec erat. Ut ultricies, velit sit amet efficitur malesuada, purus quam rutrum tortor, vel varius ex ex eget mi. Donec id nibh sit amet nisl rhoncus dictum. Vestibulum accumsan, lectus sit amet vulputate ornare, nibh nulla sagittis dui, at dignissim dui orci vel lorem. Mauris semper dictum sem ac malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eget mauris nunc. Pellentesque placerat nibh ut neque ultricies egestas.</p>"
	},
	{
		label: "Render",
		content: "<p>Duis a ante ut massa lobortis rutrum ut vel diam. Nunc dapibus, sem ut cursus consequat, neque velit porttitor mauris, ut interdum sem augue facilisis nisl. Cras posuere augue vitae nisl convallis, ut posuere sapien ornare. Aliquam erat volutpat. Sed pulvinar euismod laoreet. Ut neque mauris, placerat a porta non, egestas imperdiet ex. Proin dapibus enim erat, sed sodales felis tempor nec. Aliquam vel risus molestie leo tempus dictum nec sit amet arcu. Nunc fermentum nunc ut volutpat rhoncus. Curabitur consequat magna sed arcu consectetur, tempus blandit leo molestie. Nam hendrerit orci sit amet nibh dignissim egestas.</p><p>Nulla facilisi. Ut luctus tincidunt urna non aliquet. Aenean hendrerit et quam ac tempor. Aenean venenatis eu velit ut imperdiet. Vivamus ac ligula nec sapien molestie consectetur vestibulum ac quam. Morbi sit amet purus a massa consectetur accumsan at ac risus. Nulla feugiat ultricies risus, non facilisis nunc. Fusce vel ultrices orci. Nam quis augue eget velit pulvinar vehicula. Proin congue nisi ut eros condimentum, in ullamcorper mi tempus. Vivamus imperdiet urna orci.</p>"
	},
	{
		label: "Events",
		content: '<p>Proin consectetur a nunc quis vestibulum. Nulla eget enim faucibus, dapibus ex ut, imperdiet dui. Sed nec ligula eget eros aliquam convallis. Pellentesque accumsan neque sit amet nibh venenatis, non hendrerit tortor tincidunt. Cras imperdiet tellus sed massa maximus tristique at sit amet metus. Praesent at odio diam. Nulla vel ultrices erat. Morbi nec leo posuere, tempor odio nec, accumsan elit. Aliquam auctor enim tellus. Vivamus lacus metus, ultrices in tellus sed, tristique luctus sem. Maecenas cursus leo et augue tincidunt ultrices.</p><p>Mauris et est elit. Aenean tristique ultricies cursus. Sed non scelerisque dolor. Donec consequat in erat quis rutrum. Nulla imperdiet mi euismod rutrum sodales. Vivamus hendrerit, nunc ac malesuada fringilla, arcu elit ultrices leo, at faucibus odio enim nec augue. Sed luctus luctus nunc eu finibus. Cras vitae nisl et sem semper bibendum. Aenean bibendum malesuada odio, dictum luctus magna semper ut. Nulla dapibus nisi ut rutrum gravida. Nullam sit amet ligula varius, vulputate sapien eget, semper augue. Sed sed gravida libero. Nunc ut purus vel ante eleifend mattis quis et metus. Donec blandit leo in convallis posuere. Ut lorem lorem, porttitor eu dolor vel, aliquam vehicula sapien.</p>'
	}
];
ReactDOM.render(
	<Tabs selected={0} data={tabs_items}/>,
	document.getElementById('app')
);