import React, { useState } from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Container, Paper, Typography, Button, Switch, FormControlLabel } from '@material-ui/core';
import { flexCenter, flexColumn, flexItem } from './flexUtils'; // Import Flexbox utilities

const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    ...flexColumn, // Apply flexColumn utility
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const AppM = () => {
  const classes = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div style={flexCenter}> {/* Apply flexCenter utility */}
        <Container maxWidth="sm">
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h4" gutterBottom>
              Welcome to My React Page
            </Typography>
            <Typography variant="body1" paragraph>
              This is an example React page using Material-UI components and Flexbox for layout.
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              Click Me
            </Button>
            <FormControlLabel
              control={<Switch checked={isDarkMode} onChange={handleThemeChange} />}
              label="Dark Mode"
            />
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default AppM;
