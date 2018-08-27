import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (

      <div className="library-full">
        <h1 className="bloc-banner">Bloc Jams Library</h1>
        <section className="library">
        {
          this.state.albums.map( (album, index) =>
            <Link className="link-text" to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} className="covers" alt={album.cover} />
              <div className="title">{album.title}</div>
              <div className="artist">{album.artist}</div>
              <div className="song">{album.songs.length} songs</div>
            </Link>

          )
        }
        </section>
      </div>
    );
  }
}

export default Library;
