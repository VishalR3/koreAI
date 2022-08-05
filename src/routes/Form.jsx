import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../store/features/globalSlice";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [heading, setHeading] = useState("New Year Sale");
  const [discount, setDiscount] = useState("50% off on all Products");
  const paths = useSelector((state) => state.global.paths);
  const templateIndex = useSelector((state) => state.global.selectedTemplate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      id: uuidv4(),
      heading: heading,
      discount: discount,
      path: paths[templateIndex],
      templateNo: templateIndex,
    };
    dispatch(createPost(post));
    console.log(heading, discount);
    navigate("/posts");
  };
  return (
    <div className="container">
      <h1>Form</h1>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card mb-3 p-3 detailsCard">
            <div className="card-body">
              <div className="formDesc mb-4 text-center">
                <h3>Template Details</h3>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group mb-3">
                  <label htmlFor="offerHeading">Offer Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    id="offerHeading"
                    placeholder="e.g. New Year Sale"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="offerDiscount">Offer Discount</label>
                  <input
                    type="text"
                    className="form-control"
                    id="offerDiscount"
                    placeholder="e.g. 50% off on all Products"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn submitBtn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
