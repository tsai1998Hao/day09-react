import React from 'react';
import { useTheme } from './ThemeContext'; // 引入剛才創建的上下文

function ThemeButton() {
  const { theme, toggleTheme } = useTheme(); // 使用 useContext 獲取上下文

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      切換到 {theme === 'light' ? '暗' : '亮'} 主題
    </button>
  );
}

export default ThemeButton;
