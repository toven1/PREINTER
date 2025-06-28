import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const InterviewResultPageBlock = styled.div`

`;

const InterviewResultPage = () => {
    const navigate = useNavigate();
    const { sessionId } = useParams(); 
    const goHomeClick = () => {
        navigate('/');
    };
    const goReplayClick = () => {
        navigate(`/interview/${sessionId}/replay`)
    };

    return (
        <div>
            <InterviewResultPageBlock>
                <h2>면접 결과</h2>
                <p>면접이 종료되었습니다. 결과를 확인해주세요.</p>
                <p>면접관의 피드백: "전반적으로 좋은 답변이었습니다. 다음에는 좀 더 구체적인 예시를 들어주시면 좋을 것 같습니다."</p>
                <p>면접 점수: 85점</p>
                <div style={{ width: 300, height: 300, margin: '30px auto' }}>
                    <svg width="100%" height="100%" viewBox="0 0 300 300">

                        {[1, 0.8, 0.6, 0.4, 0.2].map((r, idx) => {
                            const points = Array.from({ length: 6 }).map((_, i) => {
                                const angle = (Math.PI / 3) * i - Math.PI / 2;
                                const x = 150 + Math.cos(angle) * 120 * r;
                                const y = 150 + Math.sin(angle) * 120 * r;
                                return `${x},${y}`;
                            }).join(' ');
                            return (
                                <polygon
                                    key={idx}
                                    points={points}
                                    fill={idx === 0 ? '#e3f2fd' : 'none'}
                                    stroke="#90caf9"
                                    strokeWidth={1}
                                />
                            );
                        })}
                        {(() => {
                            const scores = [80, 90, 70, 85, 75, 95];
                            const points = scores.map((score, i) => {
                                const angle = (Math.PI / 3) * i - Math.PI / 2;
                                const r = (score / 100) * 120;
                                const x = 150 + Math.cos(angle) * r;
                                const y = 150 + Math.sin(angle) * r;
                                return `${x},${y}`;
                            }).join(' ');
                            return (
                                <polygon
                                    points={points}
                                    fill="rgba(33, 150, 243, 0.4)"
                                    stroke="#1976d2"
                                    strokeWidth={2}
                                />
                            );
                        })()}
                        {['논리성', '명확성', '전문성', '태도', '창의성', '소통력'].map((label, i) => {
                            const angle = (Math.PI / 3) * i - Math.PI / 2;
                            const x = 150 + Math.cos(angle) * 140;
                            const y = 150 + Math.sin(angle) * 140;
                            return (
                                <text
                                    key={label}
                                    x={x}
                                    y={y}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="14"
                                    fill="#1976d2"
                                >
                                    {label}
                                </text>
                            );
                        })}
                    </svg>
                </div>
                <div onClick={goHomeClick} style={{ cursor: 'pointer', color: 'blue', marginTop: '20px' }}>
                    홈으로 돌아가기
                </div>
                <div onClick={goReplayClick} style={{ cursor: 'pointer', color: 'blue', marginTop: '20px' }}>
                    리플레이
                </div>
            </InterviewResultPageBlock>
        </div>
    );
};

export default InterviewResultPage;