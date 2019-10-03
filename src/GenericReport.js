import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 1,
    overflow: "hidden",
    display: "flex",
    width: "100%",
    minHeight: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  progress: {
    margin: "0 auto",
    alignSelf: "center",
    color: "yellow"
  }
}));

export default function App() {
  const classes = useStyles();
  const [pdfURL, setPdfURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);

      const headers = {
        "Content-Type": "application/json"
      };

      const res = await axios.get("http://127.0.0.1:8080/reports", {
        headers: headers,
        responseType: "blob"
      });

      const file = new Blob([res.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      setIsLoading(false);

      setIsLoading(false);
      return setPdfURL(fileURL);
    };

    fetchData();
  }, []);

  if (isLoading) {
    console.log(hasError);
    return (
      <div className={classes.root}>
        <CircularProgress className={classes.progress} color="secondary" />
      </div>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>View Report</Title>
          <object
            type="application/pdf"
            data={pdfURL}
            width="100%"
            height="500"
            style={{ overflow: "auto" }}
          >
            <Typography variant="body1">Display Pdf</Typography>
          </object>
        </Paper>
      </Grid>
    </Grid>
  );
}
