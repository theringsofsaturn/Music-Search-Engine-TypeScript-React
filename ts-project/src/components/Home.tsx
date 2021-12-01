import { Container, Spinner } from "react-bootstrap";

import { useState } from "react";
import Search from "../components/Search";
import TrackList from "../components/TrackList";
import { ISearch } from "../types";

const Home = () => {
  const [tracks, setTracks] = useState<ISearch[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query: string) => {
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
          <h1>Search Music Engine</h1>
          <Search fetch={fetchData} />
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
