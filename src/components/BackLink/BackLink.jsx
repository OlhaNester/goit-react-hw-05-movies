import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const BackLink = () => {
  const location = useLocation();
  console.log(location);
  return (
    //   <Link to={location?.state?.from ?? '/'}>
    <Link to={location.state.from}>
      <FaArrowLeft />
      Go back
    </Link>
  );
};
