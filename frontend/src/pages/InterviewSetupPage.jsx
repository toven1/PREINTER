import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // axios 설치: npm install axios

const InterviewSetupPageBlock = styled.div`
  /* 스타일 생략 */
`;

const InterviewSetupPage = () => {
  const navigate = useNavigate();
  const [jobRole, setJobRole] = useState('developer');
  const [difficulty, setDifficulty] = useState('medium');

//   const [loading, setLoading] = useState(false);
//   const handleStartInterview = async () => {
//     setLoading(true);
//     try {

//       const response = await axios.post('/api/interviews', {
//         role: jobRole,
//         difficulty,
//       });
//       const sessionId = response.data.sessionId;
//       navigate(`/interview/${sessionId}/lobby`);
//     } catch (error) {
//       console.error(error);
//       alert('세션 생성에 실패했습니다. 다시 시도해주세요.');
//     } finally {
//       setLoading(false);
//     }
//   };
    const handleStartInterview = () => {
        const sessionId = Math.random().toString(36).substring(2, 15); // 임시 세션 ID 생성
        navigate(`/interview/${sessionId}`);
    }

  return (
    <InterviewSetupPageBlock>
      <h1>인터뷰 세팅</h1>
      <div>
        <label>
          직무:
          <select value={jobRole} onChange={e => setJobRole(e.target.value)}>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          난이도:
          <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>
      {/* <button onClick={handleStartInterview} disabled={loading}>
        {loading ? '세션 생성 중…' : '면접 시작하기'}
      </button> */}
      <button onClick={handleStartInterview} >
        면접 시작하기
      </button>
    </InterviewSetupPageBlock>
  );
};

export default InterviewSetupPage;