import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";



export default function GeneralInfo() {

  const [values, setValues] = React.useState({
    vesselName: "",
    imoNO: "",
    sen:"",
    arrivalDate:"",
    nationality: "",
    registryPort: "",
    certRegNo: "",
    loa: "",
    beam:"",
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
                  autoComplete
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
                  autoComplete
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
                  autoComplete
                />
              </Grid>
            </Grid>
    </React.Fragment>
  );
}
