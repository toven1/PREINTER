import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const InterviewReplayPageBlock = styled.div`

`;

const InterviewReplayPage = () => {
    const navigate = useNavigate();

    const handleReplayClick = () => {
        navigate('/interview');
    };

    return (
        <div>
            <InterviewReplayPageBlock>
                인터뷰 리플레이<br/>
                <div onClick={goHomeClick} style={{ cursor: 'pointer', color: 'blue', marginTop: '20px' }}>
                    홈으로 돌아가기
                </div>
            </InterviewReplayPageBlock>
        </div>
    );
};

export default InterviewReplayPage;