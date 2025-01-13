
import React, { useState } from "react";
import "./form.css"
import { Row,Col,Form,Button } from "react-bootstrap";
const ListingForm = ({ initialData = {}, onSubmit }) => {
 
  const [formData, setFormData] = useState({
    placeName: initialData.placeName || "",
    pricePerNight: initialData.pricePerNight || "",
    address: initialData.address || "",
    city: initialData.city || "",
    pinCode: initialData.pinCode || "",
    images: [],
    category: initialData.category || "Villa",
  });

 
  const [imagePreviews, setImagePreviews] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input for images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });

    // Generate image previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to parent
  };

  return (
    <div className="main-cont">
    
      <form onSubmit={handleSubmit}>
      
        <Row className="mb-3">
          <Col> <Form.Label>Placename:</Form.Label></Col>
          <Col><Form.Control  type="text"
            name="placeName"
            value={formData.placeName}
            onChange={handleChange}
            required></Form.Control></Col>
        </Row>

        {/* Price per Night */}
        <Row  className="mb-3">
          <Col> <Form.Label>Price per Night:</Form.Label></Col>
          <Col><Form.Control type="number"
            name="pricePerNight"
            value={formData.pricePerNight}
            onChange={handleChange}
            required ></Form.Control></Col>
        </Row>
        <Row  className="mb-3">
          <Col> <Form.Label>Address:</Form.Label></Col>
          <Col><Form.Control  type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required ></Form.Control></Col>
        </Row>
        <Row  className="mb-3">
          <Col> <Form.Label>City:</Form.Label></Col>
          <Col><Form.Control  type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required ></Form.Control></Col>
        </Row>
        <Row  className="mb-3">
          <Col> <Form.Label>PIN code:</Form.Label></Col>
          <Col><Form.Control  type="text"
            name="pincode"
            value={formData.pinCode}
            onChange={handleChange}
            required ></Form.Control></Col>
        </Row>

        <Row  className="mb-3">
          <Col><Form.Label>Upload Images:</Form.Label></Col>
          <Col>
          <Form.Control  type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}></Form.Control>
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
   
        <Row  className="mb-3"> 
          <Col><Form.Label>Category:</Form.Label></Col>
          <Col> <Form.Select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Houseboat">Houseboat</option>
          </Form.Select></Col>
         
        </Row>

        {/* Submit Button */}
        <Button type="submit" className="w-100">Save</Button>
      </form>
    </div>
  );
};

export default ListingForm;
