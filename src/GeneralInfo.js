import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

// const useStyles = makeStyles(theme => ({
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//     alignItems: "center",
//     maxWidth: "80%",
//     alignSelf: "center"
//   },
//   flex: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

export default function GeneralInfo() {
  // const classes = useStyles();
  const currentDate = new Date();
  const [values, setValues] = React.useState({
    port: "",
    vesselName: "",
    imoNO: "",
    sen: "",
    arrivalDate: currentDate,
    etd: currentDate,
    nationality: "",
    registryPort: "",
    certRegNo: "",
    loa: "",
    beam: ""
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDateChange = name => date => {
    console.log(date);
    setValues({ ...values, [name]: date });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <FormControl
            variant="outlined"
            // className={classes.formControl}
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
            value={values.imoNO}
            onChange={handleChange("imoNO")}
            required
            fullWidth
            id="imoNO"
            label="IMO Number"
            name="imoNo"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            value={values.sen}
            onChange={handleChange("sen")}
            required
            fullWidth
            id="sen"
            label="S.E.N"
            name="sen"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* <Grid container justify="space-around"> */}
            <KeyboardDatePicker
              disableToolbar
              id="arrivalDate"
              label="Date of Arrival"
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              value={values.arrivalDate}
              onChange={handleDateChange("arrivalDate")}
              KeyboardButtonProps={{
                "aria-label": "sets arrival date"
              }}
            />
            {/* </Grid> */}
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* <Grid container justify="space-around"> */}
            <KeyboardDatePicker
              disableToolbar
              id="etd"
              label="ETD"
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              value={values.etd}
              onChange={handleDateChange("etd")}
              KeyboardButtonProps={{
                "aria-label": "sets ETD"
              }}
            />
            {/* </Grid> */}
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            id="naionality"
            // className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Nationality"
            value={values.nationality}
            onChange={handleChange("nationality")}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            id="registryPort"
            // className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Port of Registry "
            value={values.registryPort}
            onChange={handleChange("registryPort")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={values.certRegNo}
            onChange={handleChange("certRegNo")}
            name="certRegNo"
            variant="outlined"
            required
            fullWidth
            id="certRegNo"
            label="Cert. Of Registry No."
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            fullWidth
            id="loa"
            // className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="LOA"
            value={values.loa}
            onChange={handleChange("loa")}
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            variant="outlined"
            value={values.beam}
            onChange={handleChange("beam")}
            fullWidth
            id="beam"
            label="Beam"
            name="beam"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
