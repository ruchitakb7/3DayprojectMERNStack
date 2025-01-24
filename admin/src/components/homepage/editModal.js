import React, { useState, useContext, useEffect } from "react";
import "./form.css";
import { Row, Col, Form, Button,Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Datacontext } from "../ContextApi/context";

const EditModal = ({ hotel,show, onHide }) => {
  const [formData, setFormData] = useState({});
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const ctx = useContext(Datacontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (hotel) {
      setFormData({
        placename: hotel.placename,
        pricePerNight: hotel.pricePerNight,
        address: hotel.address,
        city: hotel.city,
        pincode: hotel.pincode,
        category: hotel.category,
      });
      setImagePreviews(hotel.images || []);
      console.log(hotel.images)
    }
  }, [hotel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    console.log(e.target.value)
    const files = Array.from(e.target.files);
    setSelectedFiles((prev)=> [...prev,...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    
    setImagePreviews((prev) => [...prev, ...previews]);
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("placename", formData.placename);
    data.append("pricePerNight", formData.pricePerNight);
    data.append("address", formData.address);
    data.append("city", formData.city);
    data.append("pincode", formData.pincode);
    data.append("category", formData.category);
    data.append("_id", hotel._id); 

    if (selectedFiles.length > 0) {
   
      selectedFiles.forEach((file) => {
        data.append("images", file);
      });
    } else {
    
      hotel.images.forEach((image) => {
        data.append("existingImages", image); 
      });
    }

     ctx.editData(data);
     onHide()
    navigate('/home/hotels');
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Make Changes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
                            <form onSubmit={handleSubmit}>
                                   <Row className="mb-3">
                                     <Col>
                                       <Form.Label>Place Name:</Form.Label>
                                     </Col>
                                     <Col>
                                       <Form.Control
                                         type="text"
                                         name="placename"
                                         value={formData.placename || ""}
                                         onChange={handleChange}
                                         required
                                       />
                                     </Col>
                                   </Row>
                           
                                   <Row className="mb-3">
                                     <Col>
                                       <Form.Label>Price per Night:</Form.Label>
                                     </Col>
                                     <Col>
                                       <Form.Control
                                         type="number"
                                         name="pricePerNight"
                                         value={formData.pricePerNight || ""}
                                         onChange={handleChange}
                                         required
                                       />
                                     </Col>
                                   </Row>
                           
                                   <Row className="mb-3">
                                     <Col>
                                       <Form.Label>Address:</Form.Label>
                                     </Col>
                                     <Col>
                                       <Form.Control
                                         type="text"
                                         name="address"
                                         value={formData.address || ""}
                                         onChange={handleChange}
                                         required
                                       />
                                     </Col>
                                   </Row>
                           
                                   <Row className="mb-3">
                                     <Col>
                                       <Form.Label>City:</Form.Label>
                                     </Col>
                                     <Col>
                                       <Form.Control
                                         type="text"
                                         name="city"
                                         value={formData.city || ""}
                                         onChange={handleChange}
                                         required
                                       />
                                     </Col>
                                   </Row>
                           
                                   <Row className="mb-3">
                                     <Col>
                                       <Form.Label>PIN Code:</Form.Label>
                                     </Col>
                                     <Col>
                                       <Form.Control
                                         type="number"
                                         name="pincode"
                                         value={formData.pincode || ""}
                                         onChange={handleChange}
                                         required
                                       />
                                     </Col>
                                   </Row>
                           
                                   <Row className="mb-3">
                                     <Col>
                                       <Form.Label>Upload Images:</Form.Label>
                                     </Col>
                                     <Col>
                                       <Form.Control
                                         type="file"
                                         name="images"
                                         multiple
                                         accept="image/*"
                                         onChange={handleImageChange}
                                       />
                                     </Col>
                                     {imagePreviews.length > 0 && (
                                       <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                         {imagePreviews.map((preview, index) => (
                                           <img
                                             key={index}
                                             src={preview}
                                             alt={`Preview ${index + 1}`}
                                             style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                           />
                                         ))}
                                       </div>
                                     )}
                                   </Row>
                           
                                   <Row className="mb-3">
                                     <Col>
                                       <Form.Label>Category:</Form.Label>
                                     </Col>
                                     <Col>
                                       <Form.Select
                                         name="category"
                                         value={formData.category || ""}
                                         onChange={handleChange}
                                         required
                                       >
                                         <option value="">Select Category</option>
                                         <option value="Villa">Villa</option>
                                         <option value="Apartment">Apartment</option>
                                         <option value="Houseboat">Houseboat</option>
                                       </Form.Select>
                                     </Col>
                                   </Row>
                           
                                   <Button type="submit" className="w-100">
                                     update
                                   </Button>
                                 </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
