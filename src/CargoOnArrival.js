import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  // group: {
  //   padding: theme.spacing(2),
  //   display: "flex",
  //   overflow: "auto",
  //   flexDirection: "column"
  // },
  padLeft: {
    paddingLeft: theme.spacing(2)
  }
}));

export default function CargoOnArrival() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    laden20HazardousUnit: "",
    laden20HazardousWeight: "",
    laden20Unit: "",
    laden20Weight: "",
    empty20Unit: "",
    empty20Weight: "",
    empty40HazardousUnit: "",
    laden40HazardousWeight: "",
    laden40Unit: "",
    laden40Weight: "",
    empty40Unit: "",
    empty40Weight: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Total Cargo Onboard on Arrival
      </Typography>
      <Grid spacing={2}>
        <Typography variant="subtitle1" gutterBottom>
          Containers
        </Typography>
        <Grid container spacing={3}>
          <fieldset>
            <legend>
              <Typography variant="body2">20' Laden (Hazardous)</Typography>
            </legend>
            <Grid
              container
              justify="space-between"
              spacing={4}
              direction="row"
              className={classes.padLeft}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  value={values.laden20HazardousUnit}
                  onChange={handleChange("laden20HazardousUnit")}
                  name="laden20HazardousUnit"
                  variant="outlined"
                  required
                  fullWidth
                  id="laden20HazardousUnit"
                  label="Unit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="laden20HazardousWeight"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Weight in tons (DW)"
                  value={values.laden20HazardousWeight}
                  onChange={handleChange("laden20HazardousWeight")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Tons</InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
