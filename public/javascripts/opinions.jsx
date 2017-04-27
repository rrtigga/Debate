var RepeatModule = React.createClass({
   getInitialState: function() {
      return { items: this.props.items || [] }
   },
   componentWillMount: function() {
     console.log("componentWillMount()")
     $.get("http://localhost:3000/api/1/opinions", function( data ) {
         this.setState({ items : data })
         // console.log(data,"data is here");
      }.bind(this));
   },
   render: function() {
      var listItems = this.state.items.map(function(item) {
         return (
            <ListItem item={item}/>
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
	     	<div className="debate column ">
				  <div style={backgroundImage} className="debateImage"></div>
				  <p>{props.item.question}</p>
			 </div>
		</div>
     );
}
var data = []
ReactDOM.render(<RepeatModule items={data} />, document.getElementById('opinion-content'));