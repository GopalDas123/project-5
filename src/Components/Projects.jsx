import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbarr from "../Components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3%",
    overflowX:"hidden"
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    height: "220px",
    padding: "22%",
    backgroundColor: '#dc3545',
    color:'white',
    cursor:'pointer',
    marginBottom:'13px'

  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbarr style={{ width: "100%" }} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid data-aos="fade-right" item xs={12} sm={4}>
            <Paper className={classes.paper}><h3>
                PROJECT 1
                </h3>
                </Paper>
          </Grid>
          <Grid data-aos="fade-right" item xs={12} sm={4}>
            <Paper className={classes.paper}><h3>
                PROJECT 2
                </h3>
                </Paper>
          </Grid>
          <Grid data-aos="fade-right" item xs={12} sm={4}>
            <Paper className={classes.paper}><h3>
                PROJECT 3
                </h3>
                </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid data-aos="fade-left" item xs={12} sm={4}>
            <Paper className={classes.paper}><h3>
                PROJECT 4
                </h3>
                </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper data-aos="fade-left" className={classes.paper}><h3>
                PROJECT 5
                </h3>
                </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper data-aos="fade-left" className={classes.paper}><h3>
                PROJECT 6
                </h3>
                </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
