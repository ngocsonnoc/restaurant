import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Map, {
  FullscreenControl, Marker,
  Popup
} from "react-map-gl";
import Pin from "./pin";

const access_token =
  "pk.eyJ1IjoibmdvY3NvbnBoYW05NDIiLCJhIjoiY2wzNzRpY2ZtMDBycDNibWY4aXU3Ymh3dCJ9.Qzm5ENH8i4SiV94D0vxyow";

const store_location = {
  name: "Appetizer",
  distance: 0,
  image:
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  state: "Appetizer - Nguyễn Văn Lượng, phường 10, Gò Vấp, HCM",
  latitude: 10.837871,
  longitude: 106.671275,
};
const MapBox = () => {
  const [markers, setMarkers] = useState([{ ...store_location }]);

  const [locate, setLocate] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    if (markers?.length > 1) {
      checkDistance(
        { longitude: markers[0]?.longitude, latitude: markers[0]?.latitude },
        { longitude: markers[1]?.longitude, latitude: markers[1]?.latitude }
      );
    }
  }, [markers.length]);
  async function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  async function showPosition(position) {
    console.log(position);
    await getAddress(position.coords.latitude, position.coords.longitude);
  }
  const getAddress = async (latitude, longitude) => {
    await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${access_token}`
      )
      .then((res) => {
        setMarkers([
          {
            name: "Địa chỉ của bạn",
            distance: 0,
            image: "",
            state: res.data.features[0].place_name,
            latitude: latitude,
            longitude: longitude,
          },
          ...markers,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getLocate = async (address) => {
    await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/address/"${address}".json?access_token=${access_token}`
      )
      .then((res) => {
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkDistance = async (firstAddress, lastAddress) => {
    await axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${firstAddress.longitude},${firstAddress.latitude};${lastAddress.longitude},${lastAddress.latitude}?annotations=maxspeed&overview=full&geometries=geojson&access_token=pk.eyJ1IjoibmdvY3NvbnBoYW05NDIiLCJhIjoiY2wzNzRpY2ZtMDBycDNibWY4aXU3Ymh3dCJ9.Qzm5ENH8i4SiV94D0vxyow`
      )
      .then((res) => {
        console.log(res);
        const distance = res.data.routes[0].distance / 1000;
        console.log("distance>>", distance);
        let copyMarker = [...markers];
        copyMarker.map((marker) => (marker.distance = distance));
        setMarkers(copyMarker);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pins = useMemo(
    () =>
      markers.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    [markers]
  );
  return (
    <Map
      initialViewState={{
        latitude: 10.837871,
        longitude: 106.671275,
        zoom: 13,
      }}
      style={{ width: "100%", height: 500 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={access_token}
    >
      <FullscreenControl />

      {pins}

      {popupInfo && (
        <Popup
          anchor="bottom"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            {popupInfo.city}, {popupInfo.state} |{" "}
            <a
              target="_new"
              href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
            >
              Wikipedia
            </a>
          </div>
          <span>Khoảng cách:{popupInfo.distance}km</span>
          <img width="100%" src={popupInfo.image} />
        </Popup>
      )}
    </Map>
  );
};

export default MapBox;
