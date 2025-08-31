import React, { useState, type FC } from 'react'
import './main.css';

const LightDarkMode: FC = () => {

  type Mode = 'light' | 'dark';
  const [mode, setMode] = useState<Mode>('light');

  const handleMode = (): void => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`main-wrap ${mode === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className="main-content">
        <h3>Toggle the mode by clicking on the following button.</h3><br/>
        <button onClick={handleMode}>Light/Dark</button>
      </div>
    </div>
  )
}
export default LightDarkMode;