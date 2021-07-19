import React from "react";
import {
  Button,
  Container,
  Box,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core";

import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles(() => ({
  paper: {
    textAlign: "center",
    padding: "10px",
  },

  icon: {
    float: "both",
    color: "red",
  },
}));

const MaterialUI = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "60px",
        padding: 0,
        maxWidth: "780px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="space-between"
        alignContent="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Paper elevation={4} className={classes.paper}>
            <div>
              <AcUnitIcon className={classes.icon} />
            </div>
            <div>Paper 1</div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <AcUnitIcon className={classes.icon} />
            </div>
            <div>Paper 2</div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <AcUnitIcon className={classes.icon} />
            </div>
            <div>Paper 3</div>
          </Paper>
        </Grid>

        <Grid xs={6}>
          <Box style={{ marginTop: "20px" }}>
            <Button color="primary" variant="contained">
              Hello
            </Button>

            <Box border={1} marginTop={3}>
              Testing
            </Box>
            <Box marginTop={1}> Margin Top </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
