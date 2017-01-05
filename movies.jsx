
function Poster(props){
    return(
        <div className="con-sm-6 col-md-4 col-lg-3">
            <img src={props.poster} />
        </div>
        )
}

class Movies extends React.Component{
    constructor(props){
        super()
        this.state = {
            moviesToShow: []
        }
    }
    // getInitialState() {
    //     return{
    //         moviesToShow: []
    //     };
    // }
    // we dont want to make our AJAX request until our component has mounted
    // componentDidMount() will run as soon as it has been, which is the perfect time!
    componentDidMount() {
        var self = this;
        console.log(this.state)

        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=769f37b74792adb89844056fce140755"
        $.getJSON(url, function(movieData){
            console.log(movieData);
            var nowPlayingArray = [];
            for(let i = 0; i < movieData.results.length; i++){
                nowPlayingArray.push(movieData.results[i]);
            }
            self.setState({moviesToShow: nowPlayingArray})
        });
    }
    render(){
		var imagePath = "http://image.tmdb.org/t/p/w300"
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

}



ReactDOM.render(
    <Movies />,
    document.getElementById('movieGallery')
    )
