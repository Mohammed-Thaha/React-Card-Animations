import "./card.css"
import PropTypes from 'prop-types';

const Card = (props) => {

  const { image, title, description } = props;
  return (
    <div className="card">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="card-view">
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card
