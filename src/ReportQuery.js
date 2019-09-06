import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Title from "./Title";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  root: {
    zIndex: 1,
    overflow: "hidden",
    display: "flex",
    width: "100%",
    minHeight: "100vh"
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  const [selectedDateStart, setSelectedDateStart] = useState(
    new Date("2017-11-28T21:11:54")
  );
  const [selectedDateEnd, setSelectedDateEnd] = useState(
    new Date("2017-12-28T21:11:54")
  );

  const [pdfURL, setPdfURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleStartDateChange(date) {
    setSelectedDateStart(date);
  }

  function handleEndDateChange(date) {
    setSelectedDateEnd(date);
  }

  function parseDate(date) {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const fmData = new FormData(form);

    // eslint-disable-next-line
    for (let name of fmData.keys()) {
      const parsedValue = parseDate(fmData.get(name));
      fmData.set(name, parsedValue);
      console.log(fmData.get(name));
    }

    const jsonData = JSON.stringify(Object.fromEntries(fmData));
    console.log(jsonData);
    const headers = {
      "Content-Type": "application/json"
    };

    let res = await axios.post(
      "http://127.0.0.1:8080/api/report/pdf",
      jsonData,
      {
        headers: headers,
        responseType: "blob"
      }
    );

    const file = new Blob([res.data], { type: "application/pdf" });

    const fileURL = URL.createObjectURL(file);
    setIsLoading(false);
    return setPdfURL(fileURL);

    // fetch("http://127.0.0.1:8080/api/report/pdf", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Accept": "application/json"
    //     // "Content-Type": "multipart/form-data"
    //   },
    //   mode: "no-cors",
    //   // body: data
    //   body: jsonData
    // });
  }

  return (
    <Grid container spacing={3}>
      {/* Create Report fromQuery */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Query</Title>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleSubmit}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  // variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="start-date"
                  name="startDate"
                  label="Start Date"
                  value={selectedDateStart}
                  onChange={handleStartDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardDatePicker
                  // variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="end-date"
                  name="endDate"
                  label=" End Date"
                  value={selectedDateEnd}
                  onChange={handleEndDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  type="submit"
                >
                  Submit Query
                </Button>
              </Grid>
            </form>
          </MuiPickersUtilsProvider>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>View Report</Title>
          {isLoading ? (
            <div className={classes.root}>
              <CircularProgress
                className={classes.progress}
                color="secondary"
                size="60"
              />
            </div>
          ) : (
            <object
              type="application/pdf"
              data={pdfURL}
              width="100%"
              height="820"
              style={{ overflow: "auto" }}
            >
              <Typography variant="h4" component="h4">
                Display Pdf
              </Typography>
            </object>
          )}
          ;
        </Paper>
      </Grid>
    </Grid>
  );
}
