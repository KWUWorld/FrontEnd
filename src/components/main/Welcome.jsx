import styled from 'styled-components';
import ProfileImage from '../../images/profile_image.png'

function Welcome() {
    return (
        <>
            <span className='fontText headText' style={{ fontSize: 24 }}>이건무님 반갑습니다!</span>
            <Grid>
                <div style={{ textAlign: 'center', gridRowStart: 1, gridRowEnd: 4 }} >
                    <img className='profileImage' src={ProfileImage} alt='프로필사진' style={{ width: '100%' }}/>
                </div>
                <button>프로필 편집 ⚙️</button>
                <button>도토리 충전 🌰</button>
                <button>파도타기 🌊</button>
                <button className='primaryButton'>내 미니홈피 바로가기</button>
                <button>로그아웃 🚪</button>
            </Grid>
        </>
    );
}

export default Welcome;

const Grid = styled.div`
    margin: 30px auto;
    display: grid;
    grid-template-columns: 180px 135px;
    grid-template-rows: repeat(4, 40px);
    column-gap: 40px;
    row-gap: 10px
`;