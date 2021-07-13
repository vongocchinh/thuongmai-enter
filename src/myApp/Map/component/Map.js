import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./styles/style.scss";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
const Map = () => {

    const arr=[{
        lat:15.799442,
        lng:108.351661
    },{
        lat:16.063132,
        lng:108.154730
    }]

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: 15.799442, lng: 108.351661 }}
      >
        {arr.map((value,key)=>{
            return (
                <Marker key={key} position={{ lat: value.lat, lng:value.lng  }} />
            )
        })}

      </GoogleMap>
    ))
    
  );
  return (
    <>
      <div className="container">
        <div
          className="container-map"
          style={{ height: "auto", width: "100%" }}
        >
          <div className="container-map-left">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgoChdC7SAai4Ib7A-XcvRd5aN8a6pzdw&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <div className="container-map-right">
            <div>
              <span>
                <LocationOnIcon className="LocationOnIcon" />
              </span>
              <span>
                <p>Address Shop </p>
                <span>Đà nẵng city - Cẩm Lệ, Hòa khánh, 124 Phạm Như Xương</span>
              </span>
            </div>
            <div>
              <span>
                <LocationOnIcon className="LocationOnIcon" />
              </span>
              <span>
                <p>Address Shop 2</p>
                <span>Đà nẵng city - Cẩm Lệ, Hòa khánh, 569 Phạm Như Xương</span>
              </span>
            </div>
            <div>
              <span>
                <QueryBuilderIcon className="LocationOnIcon" />
              </span>
              <span>
                <p>Open Time</p>
                <span>7h Am - 9h PM </span>
              </span>
            </div>
            <div>
              <span>
                <PhoneAndroidIcon className="LocationOnIcon" />
              </span>
              <span>
                <p>Phone shop</p>
                <span>0763717084 </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
