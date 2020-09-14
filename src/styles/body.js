import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// import { Link as RouterLink } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';
// import { MemoryRouter as Router } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router';
// import CreateGIFVideo from "../components/createGIFVideo";
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
export default function Hook() {
  const classes = useStyles();
  // let [mycollection, setMycollection] = useState(0);
  
  // if (mycollection) {
  //   console.log("hook");

  //   return (
  //     <div>
  //       lol
  //           {/* <img src  = {"../../"+this.state.images[0]}/>
  //           <img src  = {"../../"+this.state.images[1]}/> */}
            
  //     </div>
  //   )
  // }
  // return (
  //   // <Router>
  //   // <Box mx="auto" bgcolor="background.paper" pt={40} pl={75}>
  //   //   <Button className={classes.root} onClick={() => setMycollection(mycollection = true)}>My Collection  </Button><br /><br />
  //   //   <Button className={classes.root} onClick={newGifVideo}> Create a new GIF/video</Button>
  //   // </Box>
  //   // </Router>
  // )
}
