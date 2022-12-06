import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useEffect } from 'react';
import './Slider.sass'



export default function TextMobileStepper({response}) {
  const steps = response.slice(1, response.length);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  useEffect(() => {
    if (activeStep==30) {
      setActiveStep(0);
    } else {
      const timeout = setTimeout(() => setActiveStep(activeStep+1), 3000)

      return () => clearTimeout(timeout);
    }

  }, [activeStep]);
  




  return (
    <div className="slider_wrapper">
      <div className="slider">
        <Button sx={{color: '#3a9b00'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
          ) : (
          <KeyboardArrowLeft />
          )}
        </Button>
        <h2>{response.length>0 && steps[activeStep].name} {response.length>0 && steps[activeStep].currency.toFixed(5)}</h2>  
        <Button
          sx={{color: '#3a9b00'}}
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </div>
        <h6>Курсы валют предсталены в виде отношения: единица выбранной валюты к 1 BYN </h6>
    </div>
  );
}