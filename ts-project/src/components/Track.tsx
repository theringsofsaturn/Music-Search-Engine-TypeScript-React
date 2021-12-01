import { ISearch } from "../types";
import { Image, ListGroup, Button } from "react-bootstrap";
// import { useHistory } from "react-router";
import { useNavigate } from 'react-router-dom';

interface TrackProps {
  track: ISearch;
}

const Track = ({ track }: TrackProps) => {
  let navigate = useNavigate();

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <Image
        roundedCircle
        alt="artistPic"
        style={{ height: "40px", width: "40px" }}
        src={track.artist.picture_medium}
      />{" "}
      <span className="mx-2">Artist: </span>
      <span className="mx-2">{track.artist.name} </span> <span>🎵</span>
      <span className="mx-2">{track.title}</span>
      <div className="ms-auto">
        <Button
          onClick={() => navigate(`/details/${track.id}`)}
          variant="info"
          className="mx-2 badge rounded-pill"
        >
          Song Details
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default Track;
