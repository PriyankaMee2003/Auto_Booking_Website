import React from "react";

const PlacesForm = ({ handleSubmit, value, setValue }) => {
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="container d-flex">
          <div className="mb-3 mt-4  me-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new Place"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success mb-3 mt-4  me-5">
            Add Place
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlacesForm;
