import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        this.fetchMovieReviews();
    }

    fetchMovieReviews = () => {
        fetch(URL)
        .then(response => response.json())
        .then(reviewsList => {
            this.setState({
                reviews: reviewsList.results
            })
        })
    }


    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default LatestMovieReviewsContainer;