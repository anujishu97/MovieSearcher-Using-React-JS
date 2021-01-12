import React, {Component} from 'react';
import TextTruncate from "react-text-truncate";
import FontAwesome from 'react-fontawesome';
import './movierow.css' ;

class MovieRow extends Component {
    movie;
    constructor()
    {
        super();
       
// 
    }
    likeClick(e)  
      {   
          alert("Added favorite")
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(function(favorite) {
          document.getElementById(favorite).className = 'fav';
        });
            
          
            localStorage.setItem('favorites', JSON.stringify(favorites));
        
    }

    render() {
        let movie = this.props.movie;
        return (
            <div className="row py-4">
                <div className="col-3 pr-0">
                    <img src={movie.poster} className="movie-poster" alt={movie.title}/>
                </div>
                <div className="col-9">
                    <h2 className="movie-title">{movie.title}</h2>
                    <div className="movie-overview">
                        <TextTruncate
                            line={3}
                            text={movie.overview}
                        />
                    </div>
                    <ul class="list">
                        <li onClick={this.likeClick}>Add favorite</li>
                    </ul>
                </div>
                <hr/>
            </div>
        )
    }
}

export default MovieRow
