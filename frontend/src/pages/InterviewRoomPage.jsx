import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import jbImg from '../assets/jb.png';

const InterviewRoomPageBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`;


const InterviewRoomPage = () => {
    const navigate = useNavigate();
    const { sessionId } = useParams(); 
    return (
        <InterviewRoomPageBlock>
            <h2>면접방</h2>
            <p>세션 ID: <strong>{sessionId}</strong></p>
            <img src={jbImg} alt="면접관" style={{ width: '200px', margin: '20px 0' }} />
            <p>저희회사에 왜 지원하셧죠?</p>
            <button
                onClick={() => navigate(`/interview/${sessionId}/result`)}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
            >
                면접 종료
            </button>
        </InterviewRoomPageBlock>
    );
};

export default InterviewRoomPage;