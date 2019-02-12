import React, {Component} from 'react';
import Movies from './Movies';

class Dashboard extends Component {
	render() {
      const {usersByMovie, users, movies} = this.props;
      
      const movieCards = Object.keys(movies).map(id => (
      <Movies
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));
      
      return(
        <ul>{movieCards}</ul>
      );
    }
}


export default Dashboard;