var Movies = React.createClass({

  getInitialState: function(){
    return{
      moviesToShow: []
    }
  },
  render: function(){
    return(
      <div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<div className="th-wrapper">
							<button className="btn btn-primary">Reset Search</button>
						</div>
						<div className="movie-rows">
							{/* Movies go here! */}
							{this.state.moviesToShow.map(function(movie, index){
								var fullImagePath = imagePath + movie.poster_path
								return <Poster key={index} poster={fullImagePath} />
							})}
						</div>
					</div>
				</div>
			</div>
    )
  }
})


ReactDOM.render(
  <Movies />
  document.getElementById('movieGallery')
)
