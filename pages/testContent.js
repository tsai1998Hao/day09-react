import React from 'react';
import { useTheme } from './ThemeContext';
// 要先了解物件react?
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      切换到 {theme === 'light' ? '深色' : '浅色'} 模式
    </button>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>当前主题: {theme}</h1>
      <ThemeToggleButton />
    </div>
  );
}

export default App;
