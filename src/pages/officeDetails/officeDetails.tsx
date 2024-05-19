import { MapPin } from "lucide-react";
import { singlePostData, userData } from "../../dummy";

import "./officeDetails.scss";
import Slider from "../../components/slider/Slider";

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

      <div className="features">Fetures</div>
    </div>
  );
};

export default OfficeDetails;
