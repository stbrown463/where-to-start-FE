import React from 'react'

const ArtistListDisplayModal = (props) => {

	const allArtistLists = props.lists.map((list) => {
		//console.log(list);
		return (
			<li key={list._id}>
				<span>{list.name}
					<button onClick={props.addToList.bind(null, list._id)}>Add To List</button>
					<button onClick={props.deleteList.bind(null, list._id)}>Delete List</button>
				</span>
				{list.artists.map((artist) => <p key={artist.mbid}>{artist.artistName}<button onClick={props.removeFromList.bind(null, artist.mbid, list._id)}>X</button></p>)}		
			</li>


		)
	})
	





	return (
		<div>
			<button onClick={props.closeModal.bind(null)}>X</button>
			<ul>
				{allArtistLists}
			</ul> 
		</div>

	)
}

export default ArtistListDisplayModal

	// const movieList = props.movies.map((movie) => {
	// 	return (
	// 		<li key={movie._id}>
	// 			<span>{movie.title}</span><br />
	// 			<small>{movie.description}</small><br />
	// 			<button onClick={props.deleteMovie.bind(null, movie._id)}>Delete</button>				
	// 			<button onClick={props.showModal.bind(null, movie)}>Edit</button>
	// 		</li>
	// 	)
	// })