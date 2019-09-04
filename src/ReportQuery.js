import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Title from "./Title";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  const [selectedDateStart, setSelectedDateStart] = React.useState(
    new Date("2017-11-28T21:11:54")
  );
  const [selectedDateEnd, setSelectedDateEnd] = React.useState(
    new Date("2017-12-28T21:11:54")
  );

  function handleStartDateChange(date) {
    setSelectedDateStart(date);
  }

  function handleEndDateChange(date) {
    setSelectedDateEnd(date);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("/api/report/pdf", {
      method: "POST",
      body: data
    });
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
    </Grid>
  );
}
