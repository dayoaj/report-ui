import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  padLeft: {
    paddingLeft: theme.spacing(2)
  },
  fieldSet: {
    marginBottom: theme.spacing(2),
    borderRadius: 6
  }
}));

export default function TotalCargoDischarged() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    laden20HazardousUnit: "",
    laden20HazardousWeight: "",
    laden20Unit: "",
    laden20Weight: "",
    empty20Unit: "",
    empty20Weight: "",
    laden40HazardousUnit: "",
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
        Total Cargo Discharged
      </Typography>
      <Grid spacing={2}>
        <Typography variant="body1" gutterBottom>
          Containers
        </Typography>
        <Grid spacing={3}>
          <fieldset className={classes.fieldSet}>
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

          <fieldset className={classes.fieldSet}>
            <legend>
              <Typography variant="body2">20' Laden</Typography>
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
                  value={values.laden20Unit}
                  onChange={handleChange("laden20Unit")}
                  name="laden20Unit"
                  variant="outlined"
                  required
                  fullWidth
                  id="laden20Unit"
                  label="Unit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="laden20Weight"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Weight in tons (DW)"
                  value={values.laden20Weight}
                  onChange={handleChange("laden20Weight")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Tons</InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>

          <fieldset className={classes.fieldSet}>
            <legend>
              <Typography variant="body2">20' Empty</Typography>
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
                  value={values.empty20Unit}
                  onChange={handleChange("empty20Unit")}
                  name="empty20Unit"
                  variant="outlined"
                  required
                  fullWidth
                  id="empty20Unit"
                  label="Unit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="empty20Weight"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Weight in tons (DW)"
                  value={values.empty20Weight}
                  onChange={handleChange("empty20Weight")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Tons</InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>

          <fieldset className={classes.fieldSet}>
            <legend>
              <Typography variant="body2">40' Laden (Hazardous)</Typography>
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
                  onChange={handleChange("laden40HazardousUnit")}
                  name="laden40HazardousUnit"
                  variant="outlined"
                  required
                  fullWidth
                  id="laden40HazardousUnit"
                  label="Unit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="laden40HazardousWeight"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Weight in tons (DW)"
                  value={values.laden40HazardousWeight}
                  onChange={handleChange("laden40HazardousWeight")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Tons</InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>

          <fieldset className={classes.fieldSet}>
            <legend>
              <Typography variant="body2">40' Laden</Typography>
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
                  onChange={handleChange("laden40Unit")}
                  name="laden40Unit"
                  variant="outlined"
                  required
                  fullWidth
                  id="laden40Unit"
                  label="Unit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="laden40Weight"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Weight in tons (DW)"
                  value={values.laden40Weight}
                  onChange={handleChange("laden40Weight")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Tons</InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>

          <fieldset className={classes.fieldSet}>
            <legend>
              <Typography variant="body2">40' Empty</Typography>
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
                  value={values.empty40Unit}
                  onChange={handleChange("empty40Unit")}
                  name="empty40Unit"
                  variant="outlined"
                  required
                  fullWidth
                  id="empty40Unit"
                  label="Unit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="empty40Weight"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Weight in tons (DW)"
                  value={values.empty40Weight}
                  onChange={handleChange("empty40Weight")}
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
