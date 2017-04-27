var RepeatModule = React.createClass({
	getInitialState: function() {
    	return { items: this.props.items || [] }
   },
   componentWillMount: function() {
     console.log("componentWillMount()")
     this.setState({ items : data })
    },
   render: function() {
      var listItems = this.state.items.map((item, index) => {
         return (
            <ListItem key={index} handleClick={this.handleClick} item={item} />
         );
      });
      return (
        	<div className="row">
              {listItems}
          </div>
      );
   }
});
/* make the items stateless */
var ListItem = function(props) {
    var backgroundImage = {
      backgroundImage: 'url(' + props.item.imageURL + ')'
    };
     return (
     	<div className="">
	     	<div className="debate column _33">
				  <div style={backgroundImage} className="debateImage"></div>
				  <p>{props.item.title}</p>
			 </div>
		</div>
     );
}
var data = [
	{
		"title": "Did Trump’s refugee ban make us safer?",
		"imageURL":"../images/debates/trump.png"
	},
	{
		"title": "Did Trump’s refugee ban make us safer?",
		"imageURL":"../images/debates/trump.png"
	},
	{
		"title": "Did Trump’s refugee ban make us safer?",
		"imageURL":"../images/debates/trump.png"
	},
  {
    "title": "Did Trump’s refugee ban make us safer?",
    "imageURL":"../images/debates/trump.png"
  },
  {
    "title": "Did Trump’s refugee ban make us safer?",
    "imageURL":"../images/debates/trump.png"
  }
];
ReactDOM.render(<RepeatModule items={data} />, document.getElementById('trending-content'));
