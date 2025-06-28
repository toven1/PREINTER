import React from 'react';

import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
const IntroPageBlock = styled.div`

`;

const IntroPage = () => {
	const navigate = useNavigate();

	const goInterviewClick = () => {
		navigate('/interview/setup');
	};
	return (
		<div>
			<IntroPageBlock>
				인트로<br/>
				<div onClick={goInterviewClick}>면접보기</div>
			</IntroPageBlock>
		</div>
	);
};

export default IntroPage;
