import { BsMoon, BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries, switchColorMode } from "../redux/countries/action";

function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const onChange = () => {
    dispatch(switchColorMode());
  };

  const { darkMode } = useSelector((state) => state.darkModeReducer);

  return (
    <div className={darkMode ? "headerDarkMode" : "header"}>
      <nav>
        <h2>Where in the world?</h2>
        <p onClick={onChange}>
          {darkMode ? <BsSun /> : <BsMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </nav>
    </div>
  );
}

export default Header;
