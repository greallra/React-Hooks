import React, { useState, useEffect, useReducer } from 'react';
import { render } from 'react-dom';
import NoteApp from './Components/NoteApp';



const rootElement = document.getElementById('react-app');
render(<NoteApp />, rootElement);

module.hot.accept();