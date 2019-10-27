import React from 'react';

export const OpenButton = ({ isOpen, onClick }) => (
  <button type="button" onClick={onClick}>{isOpen ? '-' : '+'}</button>
);
