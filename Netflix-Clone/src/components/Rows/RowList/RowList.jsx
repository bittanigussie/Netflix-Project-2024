import React from 'react'
import Row from '../Row/Row'
import requests from "../../../utilis/requests"

function RowList() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
    </div>
  );
}

export default RowList