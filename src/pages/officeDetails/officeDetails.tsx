import { MapPin } from "lucide-react";
import { singlePostData, userData } from "../../dummy";

import "./officeDetails.scss";

const OfficeDetails = () => {
  return (
    <div className="office-details">
      <div className="details">
        <div className="wrapper">
          <div className="slider">Slider</div>
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
