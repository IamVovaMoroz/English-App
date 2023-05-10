import React from 'react';
import Checkbox from '@mui/material/Checkbox';

import "./WordList.css"

export const WordList = ({ words }) => {
  return (
    <div className="word-list">
      {words.map((item, index) => (
        <li key={item.id} className="list-item">
          <Checkbox className="checkbox" />
          <p className="numberWord">{index + 1}</p>
          <p className="ukrWord">{item.uaWord}</p>
          <p className="enWord">{item.enWord}</p>
          <button className="button delete">Delete</button>
          <button className="button edit">Edit</button>
        </li>
      ))}
    </div>
  );
};

 