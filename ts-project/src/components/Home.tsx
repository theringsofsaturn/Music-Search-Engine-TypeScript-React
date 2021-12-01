import { Container, Spinner } from "react-bootstrap";

import { useState } from "react";
import Search from "../components/Search";
import TrackList from "../components/TrackList";
import { ISearch } from "../types";

const Home = () => {
  const [tracks, setTracks] = useState<ISearch[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = async (query: string) => {
    try {
      setLoading(true);
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      const { data } = await resp.json();
      console.log(data);
      setTracks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Container>
          <h1>Search Music - Deezer Api</h1>
          <Search fetch={fetch} />
        </Container>
      </div>
      <Container>
        {(loading && <Spinner animation="grow" />) || (
          <TrackList tracks={tracks} />
        )}
      </Container>
    </>
  );
};

export default Home;
