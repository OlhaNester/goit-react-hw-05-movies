import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const BackLink = () => {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? "/"}>
      <button type="button">
        <FaArrowLeft />
      Go back
      </button>
    </Link>
  );
};
