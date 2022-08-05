import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTemplate } from "../store/features/globalSlice";

function Home() {
  const templates = useSelector((state) => state.global.paths);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClick = (e) => {
    dispatch(selectTemplate(e));
    navigate("/form");
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="row templateRow g-3">
        {templates.map((template, index) => {
          return (
            <div
              className="col-4 templates p-3"
              key={index}
              onClick={() => handleClick(index)}
            >
              <img src={template} className="tempImg img-fluid" alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
