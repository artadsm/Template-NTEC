import styled from 'styled-components';

export const ScreenDiv = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #3e4347;
`;
export const SideBardiv = styled.div`
    display: flex;
    height: 100vh;
    width: 16%;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 32px;
`;
export const SideBarUpperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 416;
    gap: 24px;
`;

export const SideBarIconDiv = styled.div`
    display: flex;
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;
export const SideBarIcon = styled.img`
    width: 56px;
    height: 56px;
`;
export const SideBarIconTitle = styled.span`
    font-size: 36px;
    font-family: 'Nunito';
    color: #7b93ff;
`;
export const SideBarOptionsDiv = styled.div`
    display: flex;
    width: 100%;
    height: 336px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-right: 56px;
`;

export const ProfileDiv = styled.div`
    display: flex;
    height: 48px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;
export const ProfileImg = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 64px;
`;
export const ProfileName = styled.span`
    font-size: 16px;
    color: #e1e7ff;
    font-weight: bold;
    font-family: 'Nunito';
`;
export const SideBarText = styled.span`
    font-size: 18px;
    color: #e1e7ff;
    font-style: bold;
    font-family: 'Nunito Sans', sans-serif;
`;
export const FeedDiv = styled.div`
    display: flex;
    height: 100vh;
    width: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TopFeedDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 276px;
    padding-right: 64px;
    padding-left: 64px;
    margin: 0px;
`;
export const SearchBarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px;
    width: 1004px;
    height: 64px;
    background-color: #9198b4;
    border-radius: 16px;
    margin-top: 32px;
    margin-bottom: 40px;
`;
export const SerachBar = styled.input`
    width: 500px;
    height: 64px;
`;
export const FeedInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
    width: 1004px;
    border-radius: 16px;
    background-color: #9198b4;
    padding-left: 40px;
`;

export const BottomFeedDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 32px;
    height: 100%;
    width: 100%;
    padding-left: 64px;
    padding-right: 64px;
`;
export const TrendingDiv = styled.div`
    display: flex;
    width: 24%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
`;
export const TrendingTopDiv = styled.div`
    height: 118px;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 32px;
    padding-left: 24px;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const TrendTitleText = styled.h1`
    font-size: 36;
    font-family: 'Nunito';
    font-weight: bold;
    color: #e1e7ff;
`;
export const TrendingBottomDiv = styled.div`
    height: 100%;
    width: 100%;
`;
