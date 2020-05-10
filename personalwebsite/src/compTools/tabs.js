import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#333333",
    color: "white",
    display: "flex",
    height: 224,
    border: "solid 1px #333333"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    border: "solid 1px #333333",
    background: "linear-gradient(to left, #333333, #dd1818)"
  }
}));

export default function TechTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Front-End" {...a11yProps(0)} />
        <Tab label="Back-End" {...a11yProps(1)} />

        <Tab label="Tools" {...a11yProps(2)} />
        <Tab label="Terminal's" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        -HTML3 <br />
        -CSS3 <br />
        -React <br />
        -Javascript <br />
        -Redux <br />
        -Context API <br />
        -AJAX/HTTP Requests
      </TabPanel>
      <TabPanel value={value} index={1}>
        -Node.js <br />
        -Express.js
        <br />
       
        -Back-end Middlewear
        <br />
        -GraphQL
        <br />
        -Apollo
        <br />
        -Prisma
      </TabPanel>
      <TabPanel value={value} index={2}>
        Styling Tools:
        <br />
        Material-UI <br />
        Styled Componets <br />
        Programming Tools:
        <br />
        Visual Studio Code
        <br />
        Gitpod
      </TabPanel>
      <TabPanel value={value} index={3}>
        Linux <br />
        Ubuntu <br />
        Docker <br />
        Git Bash <br />
        Windows powershell
      </TabPanel>
    </div>
  );
}
