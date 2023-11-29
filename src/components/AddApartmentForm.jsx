import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addApartment } from "../feature/Apartment/apartmentSlice";

const initialValue = {
  image: "",
  price1db: "",
  price2dbs: "",
  price3dbs: "",
  address: "",
};

const AddApartmentForm = ({ isOpen }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { image, price1db, price2dbs, price3dbs, address } = formData;

    if (!image || !price1db || !price2dbs || !price3dbs || !address) {
      alert("Please fill all the Values");
      return;
    }

    e.preventDefault();
    dispatch(addApartment(formData));
    isOpen(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price1db"
          >
            Price for 1 Bedroom
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
            type="number"
            id="price1db"
            name="price1db"
            value={formData.price1db}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price2dbs"
          >
            Price for 2 Bedrooms
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
            type="number"
            id="price2dbs"
            name="price2dbs"
            value={formData.price2dbs}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price3dbs"
          >
            Price for 3 Bedrooms
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
            type="number"
            id="price3dbs"
            name="price3dbs"
            value={formData.price3dbs}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-[#B1872F] text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddApartmentForm;
