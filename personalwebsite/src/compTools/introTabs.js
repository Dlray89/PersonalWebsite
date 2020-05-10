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
            label="Hi, Im Dave"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Career Goals" {...a11yProps('two')} />
          <Tab value="three" label="Why Me?" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.panel} value={value} index="one">
        <Typography variant="body1">
           My name is David L. Ray Jr and I am a software developer. 
I create and develop beautiful and dynamic applications for users so they can enhance their day to day life. The applications I develop will help people reach for resources that are hard to get while providing a creative platform for users to express themselves online. Now you might ask what makes me different from other other developers  and that's an easy question to answer. I am BOLD with a curiosity like no other when it comes to life and looking for solutions to help the world or person reach their potential in life. I let my creativity take over and that's what leads my vision for success along with having a lot of zest to getting the job done.


        </Typography>
      </TabPanel>
      <TabPanel value={value} index="two">
       My future goals are simple. I want to become a software developer for an organization that provides growth and has a lot of room to be creative. Soon after that I want to become a leader of that company to teach and show others so they can grow in their respective roles. Long term I want to own my own company or get into the cyber security sector of the technology industry.
      </TabPanel>
      <TabPanel value={value} index="three">
      I would be a great fit for any company due to my ability to show others different resources to get stronger as a person.Not only that but to motivate and inspire people to go after their dreams and passions. People can learn dedication and leadership from me just by watching me show others.. You want to hire me because not only am I a funny guy but very empathetic to people and their situation. This allows me to understand what my managers, co-workers, family, friends, clients, etc want in life and I can provide a solution on how to get there. If self motivation and dedication was a human being walking around, it would be me,
      </TabPanel>
    </div>
  );
}