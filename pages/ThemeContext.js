import React, { createContext, useContext, useState } from 'react';

// 創建一個 ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('now_is_bright'); // 初始主題為 'now_is_bright'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'now_is_bright' ? 'dark' : 'now_is_bright'));
  };



  // Provider是關鍵
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
//將 要傳遞的東西 const 咚咚=createContext()
//return 出 咚咚.Provider value{{某個值, function}}


// return useContext(咚咚)


export function useTheme() {
  return useContext(ThemeContext);
}
