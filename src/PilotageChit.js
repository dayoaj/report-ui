import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "70%",
    alignSelf: "center"
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function PilotageChit() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    port: "",
    vesselName: "",
    flag: "",
    dwt: "",
    grt: "",
    nrt: "",
    loa: "",
    vesselLocation: "",
    rtnNo: "",
    agent: "",
    address: ""
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      {/* Create PilotageChit for manually filled data*/}
      <Grid item xs={12} className={classes.flex}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Pilotage Chit
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel ref={inputLabel} htmlFor="port-name">
                    Port
                  </InputLabel>
                  <Select
                    native
                    value={values.port}
                    required
                    onChange={handleChange("port")}
                    input={
                      <OutlinedInput
                        name="port-name"
                        labelWidth={labelWidth}
                        id="port-name"
                      />
                    }
                  >
                    <option value="" />
                    <option value={"calabar"}>Calabar Port</option>
                    <option value={"delta"}>Delta Port</option>
                    <option value={"lagos"}>Lagos Port</option>
                    <option value={"onne"}>Onne Port</option>
                    <option value={"rivers"}>Rivers Port</option>
                    <option value={"tincan"}>Tin-Can Island</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={9}>
                <TextField
                  value={values.vesselName}
                  onChange={handleChange("vesselName")}
                  name="vesselName"
                  variant="outlined"
                  required
                  fullWidth
                  id="vesselName"
                  label="Name of Vessel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  value={values.agent}
                  onChange={handleChange("agent")}
                  required
                  fullWidth
                  id="agent"
                  label="Agent/Master"
                  name="agent"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  value={values.flag}
                  onChange={handleChange("flag")}
                  required
                  fullWidth
                  id="flag"
                  label="Flag"
                  name="flag"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  fullWidth
                  id="dwt"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="DWT"
                  value={values.dwt}
                  onChange={handleChange("dwt")}
                  helperText="DWT"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  fullWidth
                  id="grt"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="GRT"
                  value={values.grt}
                  onChange={handleChange("grt")}
                  helperText="GRT"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  fullWidth
                  id="nrt"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="NRT"
                  value={values.nrt}
                  onChange={handleChange("nrt")}
                  helperText="NRT"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  fullWidth
                  id="loa"
                  // className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  label="LOA"
                  value={values.loa}
                  onChange={handleChange("loa")}
                  helperText="LOA"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={values.vesselLocation}
                  onChange={handleChange("vesselLocation")}
                  name="vesselLocation"
                  variant="outlined"
                  required
                  fullWidth
                  id="vesselLocation"
                  label="Location of Vessel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  value={values.rtnNo}
                  onChange={handleChange("rtnNo")}
                  required
                  fullWidth
                  id="rtnNo"
                  label="Rotation Number"
                  name="rtnNo"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit Form
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
