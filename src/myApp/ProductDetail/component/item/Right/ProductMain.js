import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Description from "./TabMenu/Description";
import ReviewForm from "./TabMenu/ReviewForm";
import Reviews from "./TabMenu/Reviewss";
import Product from './Product';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const ProductMain = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="product-detail-right-des">
      <div className="product-detail-right-des-tab">
        <AppBar position="static" color="#FFF">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="#FFF"
            textColor="#000"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Specification" {...a11yProps(0)} />
            <Tab label="Description" {...a11yProps(1)} />
            <Tab label="Reviews" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </div>
      <div>
        <SwipeableViews
          style={{ with: "100%" }}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            className="TabPanel-des"
            value={value}
            index={0}
            dir={theme.direction}
          >
            <Description />
          </TabPanel>
          <TabPanel
            className="TabPanel-des"
            value={value}
            index={1}
            dir={theme.direction}
          >
            <div className="des-detail-product"></div>
          </TabPanel>
          <TabPanel
            className="TabPanel-des"
            value={value}
            index={2}
            dir={theme.direction}
          >
            <ReviewForm />
            <Reviews />
          </TabPanel>
        </SwipeableViews>
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};
export default ProductMain;
