import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../images/profile_image.png'

function ClickSurfing() {
    alert('pado');
}

function Profile() {
    return(
        <ProfileBox>
            <section>
                <img className='profileImage' src={ProfileImage} alt='프로필사진' style={{ width: '100%' }}/>
            </section>
            <section>
                <DottedLine />
                <TodayIs>
                    <span className='fontText' style={{ color: 'var(--dark-blue)' }}>TODAY IS...</span>&nbsp;&nbsp;최대여섯글자
                </TodayIs>
            </section>
            <section className='bodyText' style={{ display: 'flex', alignItems: 'center' }}>
                <span>안녕하세요<br/><br/>최대다섯줄<br/><br/>test</span>
            </section>
            <section>
                <History className='fontText'>
                    <span style={{ color: 'var(--dark-blue)' }}>▶</span>History
                </History>
                <div className='bodyText' style={{ marginTop: '5px' }}>
                    <span>이건무</span>
                    <span style={{ color: 'var(--dark-gray)', fontSize: 10 }}> 2004.03.09</span><br/>
                    <span style={{ color: 'var(--orange)' }}> 소프트웨어학부</span>
                    <span style={{ color: 'var(--light-orange)', fontSize: 10  }}> 23학번</span>
                </div>
            </section>
            <section>
                <button onClick={ClickSurfing}style={{ width: '100%', height: '100%' }}>파도타기 🌊</button>
            </section>
        </ProfileBox>
    );
}

export default Profile;

const ProfileBox = styled.div`
    background-color: white;

    border-radius: 12px;
    border: 2px solid var(--dark-gray);
    box-shadow: inset 0 0 0 6px hsl(0, 0%, 90%);

    padding: 25px 30px;

    display: grid;
    grid-template-rows: 155px 45px 95px 70px 40px;
    row-gap: 2px;
`;

const TodayIs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;

    height: 30px;
    font-size: 1rem;
    background-color: white;
    border-radius: 6px;
    border: 2px solid var(--gray);
`;

const History = styled.div`
    margin-top: 4px;
    height: 15px;
    border-bottom: 2px dotted var(--dark-gray);
    font-size: 0.8rem;
    font-weight: 600;
`;

const DottedLine = styled.div`
    border: none;
    border-top: 2px dotted var(--dark-gray);
    height: 1px;
`;