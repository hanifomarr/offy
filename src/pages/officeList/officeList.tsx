import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../dummy";

import "./officeList.scss";

const OfficeList = () => {
  return (
    <div className="office-list">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {listData.map((list) => (
            <Card key={list.id} {...list} />
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default OfficeList;
