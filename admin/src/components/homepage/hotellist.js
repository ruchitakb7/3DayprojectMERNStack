import React, { useState, useEffect, useContext, useMemo } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Datacontext } from "../ContextApi/context";
import ImageCarousel from "../UPI/slideimage";
import Loading from "../UPI/spinner";
import EditModal from "./editModal";
import "./hotel-list.css";

const HotelList = () => {
  const ctx = useContext(Datacontext);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [search, setSearch] = useState("");
  const [hotels, setHotels] = useState([]); 

  useEffect(() => {
    ctx.fetchData().then(() => {
      setLoading(false);
      setHotels(ctx.data); 
    });
  }, [ctx]); 

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

 
  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) =>
      hotel.placename.toLowerCase().includes(search.toLowerCase()) ||
      hotel.category.toLowerCase().includes(search.toLowerCase()) ||
      hotel.address.toLowerCase().includes(search.toLowerCase()) ||
      hotel.city.toLowerCase().includes(search.toLowerCase())
    );
  }, [hotels, search]); 

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedHotel(null);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {ctx.error ? (
        <p style={{ color: "red" }}>{ctx.error}</p>
      ) : (
        <div className="hotel-list">
          <input
            placeholder="search..."
            style={{ borderRadius: "30px", width: "300px", marginLeft: "30px",height:"30px",padding:"20px" }}
            value={search}
            onChange={searchHandler}
          />
          <Row xl={3} className="g-5 p-5">
            {filteredHotels.map((hotel) => (
              <Col key={hotel._id}>
                <div className="hotel-item">
                  <div style={{ padding: "0px", margin: "0px" }}>
                    <ImageCarousel images={hotel.images} />
                  </div>
                  <div className="hotel-details">
                    <h4 className="hotel-title">{hotel.placename}</h4>
                    <p className="hotel-subtitle">
                      {hotel.address}, {hotel.city} - {hotel.pincode}
                    </p>
                    <p className="hotel-price">
                      Price Per Night: ${hotel.pricePerNight}
                    </p>
                    <p className="hotel-category">{hotel.category}</p>
                    <div className="hotel-actions">
                      <Button size="sm" onClick={() => handleEdit(hotel)}>
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        style={{ marginLeft: "10px" }}
                        onClick={() => ctx.deleteData(hotel._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {show && (
            <EditModal hotel={selectedHotel} show={show} onHide={handleClose} />
          )}
        </div>
      )}
    </div>
  );
};

export default HotelList;
