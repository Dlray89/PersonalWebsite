import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  navbar:{
    background: "linear-gradient(to bottom, #333333, #dd1818);",
  },
  panel:{
    background: "white",

  }
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="The Journey"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="The Dream" {...a11yProps('two')} />
          <Tab value="three" label="The experience" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.panel} value={value} index="one">
        <Typography variant="body1">
            The journey that lead me to this day have been simply wonderful. The pass few months
            I have pulled up my pants up, tucked in my shoe laces and got straight to business. Six months
            ago I start looking at Web development due to me developing my own modeling portfolio. I must admit
            that I was highly curious and very interested in learning more. So I taught myself HTML5 and CSS3 to start off, 
            then when I got to Javascript that when I realized that I need help if I wanted to be successful. So I enrolled into Lambda's
            9 month extensive fullstack web development course and my life changed forever!

        </Typography>
      </TabPanel>
      <TabPanel value={value} index="two">
        Programming is definiely a dream that has came true for me.I now have the ability to create beauitful and
        dynamic web applications both front and backend. I honestly couldn't be more proud of myself on how far I've came with pursuiting my education
        in the tech field. Lambda is a group of elite tech warriors and they have helped me progressed so much on new and exisising
        skills. They have a great abundance of resoruces, mentors, and career coaches.
      </TabPanel>
      <TabPanel value={value} index="three">
        The experience has been wonderful and very challenging for the most part. There were times that I wanted to give up because of how hard the program was.
        Then my passion kicked in and slapped me upside my head and said "YOU GOT THIS"! No matter how hard the projects was my passion got even stronger and stronger
        by the day. I WILL BECOME A WEB DEVELOPER and nothing will get in my was from achieving this dream.
      </TabPanel>
    </div>
  );
}