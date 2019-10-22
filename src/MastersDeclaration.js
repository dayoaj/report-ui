import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import GeneralInfo from "./GeneralInfo";
import CargoOnArrival from "./CargoOnArrival";
import TotalCargoDischarged from "./TotalCargoDischarged";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  main: {
    maxWidth: "75%",
    alignSelf: "center"
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2)
  }
}));

const steps = [
  "General",
  "Total Cargo Onboard on Arrival (IN)",
  "Total Cargo Discharged"
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralInfo />;
    case 1:
      return <CargoOnArrival />;
    case 2:
      return <TotalCargoDischarged />;
    default:
      throw new Error("Unknown step");
  }
}

export default function MastersDeclaration() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.flex}>
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Masters Declaration
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Form Saved Successfully
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Update Form" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </Grid>
    </Grid>
  );
}
