import React from "react";
import "./../style/filter.scss";
import Slider from "@material-ui/core/Slider";
function valueText(value) {
  var text = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return `${text + "000"} $`;
}
const Filter = () => {
  // const classes = useStyles();
  const [value, setValue] = React.useState([30, 60]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <>
      <div className="container-filter">
        <form className="container-filter-brand">
          <p className="filter">Filters</p>
          <ul>
            <p>Brand</p>
            <li>
              <input name="brand" type="radio" />
              <label>Apple</label>
            </li>
            <li>
              <input name="brand" type="radio" />
              <label>Gionee (2)</label>
            </li>
            <li>
              <input name="brand" type="radio" />
              <label>HTC (2)</label>
            </li>
            <li>
              <input name="brand" type="radio" />
              <label>LG (2)</label>
            </li>
            <li>
              <input name="brand" type="radio" />
              <label>Micromax (1)</label>
            </li>
            <li>
              <input name="brand" type="radio" />
              <label>Microsoft (2)</label>
            </li>
            <li>
              <input name="brand" type="radio" />
              <label>Samsung (5)</label>
            </li>
            <li>
              <input name="brand" type="radio" />
              <label>Xiaomi (2)</label>
            </li>
          </ul>
          <hr />
          <ul>
            <p>Color</p>
            <li>
              <input name="color" type="radio" />
              <label>Black (4)</label>
            </li>
            <li>
              <input name="color" type="radio" />
              <label>Black Leather (2)</label>
            </li>
            <li>
              <input name="color" type="radio" />
              <label>Gold (4)</label>
            </li>
            <li>
              <input name="color" type="radio" />
              <label>Spacegrey (3)</label>
            </li>
            <li>
              <input name="color" type="radio" />
              <label>Turquoise (2)</label>
            </li>
            <li>
              <input name="color" type="radio" />
              <label>White (4)</label>
            </li>
            <li>
              <input name="color" type="radio" />
              <label>White with Gold (1)</label>
            </li>
          </ul>
          <hr />
          <ul>
            <p>Price</p>
            <li className="slide-price">
              <Slider
                value={value}
                onChange={handleChange}
                // valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valueText}
              />
            </li>
            <li className="label-slide-price">
            Price : <span>{value[0]/2+"00.00 $"}</span>&nbsp;-&nbsp;<span>{value[1]/2+"00.00 $"}</span>
            </li>
          </ul>
          <input type="submit" value="Filter" />
        </form>
      </div>
    </>
  );
};

export default Filter;
