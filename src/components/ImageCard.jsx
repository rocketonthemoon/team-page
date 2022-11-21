import PropTypes from "prop-types";

function ImageCard({ img, name, position }) {
  return (
    <div className="sub-body">
      <div className="main-body">
        <img src={img} />
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default ImageCard;
