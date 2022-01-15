import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@mui/material';
import { StateProvider } from './context/StateProvider';
import { initialState, reducer } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        TransitionComponent={Slide}
        maxSnack={3}
      >
        <App />
      </SnackbarProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
