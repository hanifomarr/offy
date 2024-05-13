import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
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
      <div className="map-container">Maps</div>
    </div>
  );
};

export default OfficeList;
