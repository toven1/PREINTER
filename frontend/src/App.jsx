import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NotFoundErrorPage from './pages/NotFoundErrorPage';
import IntroPage from './pages/IntroPage';
import InterviewSetupPage from './pages/InterviewSetupPage';
import InterviewRoomPage from './pages/InterviewRoomPage';
import InterviewResultPage from './pages/InterviewResultPage';
import InterviewReplayPage from './pages/InterviewReplayPage';
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<IntroPage />} />
          <Route path="/interview">
          <Route path="setup" element={<InterviewSetupPage />} />
          <Route path=":sessionId" element={<InterviewRoomPage />} />
          <Route path=":sessionId/result" element={<InterviewResultPage />} />
          <Route path=":sessionId/replay" element={<InterviewReplayPage />} />
        </Route>
        <Route path="/*" element={<NotFoundErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
