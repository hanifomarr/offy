import {
  Bath,
  HandCoins,
  LampDesk,
  MapPin,
  PawPrint,
  PencilRuler,
  Scaling,
} from "lucide-react";
import { singlePostData, userData } from "../../dummy";

import "./officeDetails.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";

const OfficeDetails = () => {
  return (
    <div className="office-details">
      <div className="details">
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1 className="title">{singlePostData.title}</h1>
                <div className="address">
                  <MapPin />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">RM {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt={userData.name} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              <p>{singlePostData.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <h1>General</h1>
          <div className="general-container">
            <div className="item">
              <PencilRuler />
              <div className="info">
                <h2>Utilities</h2>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="item">
              <PawPrint />
              <div className="info">
                <h2>Utilities</h2>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="item">
              <HandCoins />
              <div className="info">
                <h2>Utilities</h2>
                <p>Renter is responsible</p>
              </div>
            </div>
          </div>
          <h1>Sizes</h1>
          <div className="size-container">
            <div className="size-container">
              <div className="item">
                <Scaling />
                <div className="info">
                  <h2>80 sqft</h2>
                </div>
              </div>
              <div className="item">
                <LampDesk />
                <div className="info">
                  <h2>80 sqft</h2>
                </div>
              </div>
              <div className="item">
                <Bath />
                <div className="info">
                  <h2>80 sqft</h2>
                </div>
              </div>
            </div>
          </div>
          <h1>Nearby Places</h1>
          <div className="nearby-container">
            <div className="size-container">
              <div className="item">
                <Scaling />
                <div className="info">
                  <h2>80 sqft</h2>
                </div>
              </div>
              <div className="item">
                <LampDesk />
                <div className="info">
                  <h2>80 sqft</h2>
                </div>
              </div>
              <div className="item">
                <Bath />
                <div className="info">
                  <h2>80 sqft</h2>
                </div>
              </div>
            </div>
          </div>
          <h1>Location</h1>
          <div className="location-container">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeDetails;
