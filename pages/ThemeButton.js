import React from 'react';
import { useTheme } from './ThemeContext'; // 引入剛才創建的上下文

function ThemeButton() {
  const { theme, toggleTheme } = useTheme(); // 使用 useContext 獲取上下文

  return (
    <button onClick={toggleTheme} style={
      { background: theme === 'now_is_bright' ? 'white' : 'black',
       color: theme === 'now_is_bright' ? '#000' : '#fff' }}>
       
      切換到 {theme === 'now_is_bright' ? '暗' : '亮'} 主題
    </button>
  );
}

export default ThemeButton;
