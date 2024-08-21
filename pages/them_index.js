import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeButton from './ThemeButton';

function them_index() {
  return (
    <ThemeProvider>
      <div>
        <h1>使用 useContext 的簡單例子</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default them_index;
