import {
  Bath,
  BedSingle,
  Heart,
  LampDesk,
  MapPin,
  MessageCircle,
  Projector,
} from "lucide-react";
import "./card.scss";
import { Link } from "react-router-dom";

interface CardProps {
  img: string;
  title: string;
  price: number;
  bedroom: number;
  bathroom: number;
  address: string;
  id: number;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  price,
  bedroom,
  bathroom,
  address,
  id,
}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
      <div className="text-container">
        <Link to={`${id}`}>
          <h1>{title}</h1>
        </Link>
        <div className="address">
          <MapPin />
          <span>{address}</span>
        </div>
        <p className="price">RM {price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <LampDesk />
              <span>{bedroom} Desk</span>
            </div>
            <div className="feature">
              <Projector />
              <span>{bathroom} Private Room</span>
            </div>
          </div>
          <div className="icons">
            <Heart size={30} className="icon" />
            <MessageCircle size={30} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
