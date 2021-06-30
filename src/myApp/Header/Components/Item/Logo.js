import React from "react";
import Logo from "./../../asset/log.jpg";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Drawer } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#333E48",
    marginBottom: -1,
    minHeight: 36,
    "&$expanded": {
      minHeight: 36,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Logos = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [ expanded,setExpanded] = React.useState("panel1");
  console.log(expanded);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const list = (anchor) => (
    <div className="bg-draw" style={{ width: 250,height:'100%' }} role="presentation">
      <List className="bg-draw" style={{ width: 250 }}>
        <Accordion className="bg-draw">
          <div className="draw-none">
            <Typography className="heading">
              Accordion Accordion
            </Typography>
          </div>
        </Accordion>
        <Accordion>
          <div className="draw-none">
            <Typography className="heading">
              Accordion Accordion
            </Typography>
          </div>
        </Accordion>
        <Accordion>
          <div className="draw-none">
            <Typography className="heading">
              Accordion Accordion
            </Typography>
          </div>
        </Accordion>
        <Accordion
          square
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              Accordion Accordion
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-draw-detail">
            <Link to="/" class="menu-detail-draw">
              Value of the Day
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              Accordion Accordion
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-draw-detail">
            <Link to="/" class="menu-detail-draw">
              Value of the Day
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
            <Link to="/" class="menu-detail-draw">
              Top 100 Offers{" "}
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <div className="draw-none">
            <Typography className="heading">
              Accordion Accordion
            </Typography>
          </div>
        </Accordion>
      </List>
    </div>
  );

  return (
    <>
      <Drawer
      
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      <div className="header-logo">
        <div className="button-draw">
          <MenuIcon
            className="size-icon"
            onClick={toggleDrawer("left", true)}
          />
        </div>
        <Link className="link-logo" to="/"><img alt={Logo} src={Logo} /></Link>
        <div className="cart-header-logo"></div>
      </div>
    </>
  );
};

export default Logos;
