import React from 'react';
import { ThemeProvider } from './ThemeContext'; //最底層
import ThemeButton from './ThemeButton';

function them_index() {
  return (


// 最底層
    <ThemeProvider>
      <div>
        <h1>使用 useContext 的簡單例子</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
// 最底層
  );
}

export default them_index;
