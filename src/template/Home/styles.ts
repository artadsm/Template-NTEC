import styled from 'styled-components';

interface ContainerProps {
    selected: boolean;
}
export const ScreenDiv = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #3e4347;
`;
export const Divide = styled.div`
    width: 10px;
    height: 100%;
    background-color: #55596b;
`;
export const SideBardiv = styled.div`
    display: flex;
    height: 100vh;
    width: 16%;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 32px;
    border: 1px solid #55596b;
    position: sticky;
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
    width: 22%;
    height: 40px;
    @media only screen and (min-width: 1225px) {
        height: 56px;
    }
`;
export const SideBarIconTitle = styled.span`
    font-size: 16px;
    font-family: 'Nunito';
    color: #7b93ff;
    @media only screen and (min-width: 825px) {
        font-size: 18px;
    }
    @media only screen and (min-width: 925px) {
        font-size: 22px;
    }
    @media only screen and (min-width: 1125px) {
        font-size: 24px;
    }
    @media only screen and (min-width: 1225px) {
        font-size: 28px;
    }
`;
export const SideBarOptionsDiv = styled.div`
    display: flex;
    width: 100%;
    height: 336px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    //  padding-right: 56px;
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
    width: 40px;
    height: 40px;
    border-radius: 40px;
    @media only screen and (min-width: 950px) {
        width: 48px;
        height: 48px;
        border-radius: 48px;
    }
    @media only screen and (min-width: 1350px) {
        width: 64px;
        height: 64px;
        border-radius: 64px;
    }
`;
export const ProfileName = styled.span`
    font-size: 10px;
    color: #e1e7ff;
    font-weight: bold;
    font-family: 'Nunito';
    @media only screen and (min-width: 950px) {
        font-size: 12px;
    }
    @media only screen and (min-width: 1050px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1250px) {
        font-size: 16px;
    }
`;
export const SideBarText = styled.span`
    font-size: 18px;
    color: #e1e7ff;
    font-style: bold;
    font-family: 'Nunito Sans', sans-serif;
`;
export const FeedDiv = styled.div`
    display: flex;
    min-height: 100vh;
    height: fit-content;
    width: 60%;
    flex-direction: column;
    align-items: center;
    border: 1px solid #55596b;
    overflow-y: scroll;
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
    align-items: center;
    padding: 32px;
    width: 100%;
    height: 64px;
    background-color: #9198b4;
    border-radius: 16px;
    margin-top: 32px;
    margin-bottom: 40px;
`;
export const SerachBar = styled.input`
    width: 500px;
    height: 64px;
    font-family: 'Nunito';
    color: #e1e7ff;
    font-size: 18px;
    font-weight: bold;
    background-color: #9198b4;
    border: 0;
    outline: 0;
`;
export const SerachBarIcon = styled.img`
    width: 26px;
    height: 26px;
    @media only screen and (min-width: 950px) {
        width: 32px;
        height: 32px;
    }
    @media only screen and (min-width: 1150px) {
        width: 51px;
        height: 51px;
    }
`;
export const FeedInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
    width: 100%;
    border-radius: 16px;
    background-color: #9198b4;
    padding-left: 40px;
    padding-bottom: 24px;
    padding-right: 32px;
    padding-top: 32px;
`;
export const FeedInput = styled.input<ContainerProps>`
    width: 100%;
    height: fit-content;
    font-family: 'Nunito';
    color: #e1e7ff;
    font-size: 18px;
    font-weight: bold;
    border: 0;
    outline: 0;
    background-color: ${(props) => (props.selected ? '#FF6868' : '#9198b4')};
`;
export const FeedInputIconsDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 24px;
    @media only screen and (min-width: 1150px) {
        gap: 42px;
    }
`;
export const FeedInputIconsSendDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 42px;
    width: 100%;
    height: 24px;
    @media only screen and (min-width: 1150px) {
        gap: 42px;
    }
`;
export const FeedIcons = styled.img`
    width: 12px;
    height: 12px;
    @media only screen and (min-width: 950px) {
        width: 16px;
        height: 16px;
    }
    @media only screen and (min-width: 1150px) {
        width: 24px;
        height: 24px;
    }
`;
export const FeedSendDiv = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: center;
    gap: 32px;
`;
export const FeedChatacterCounter = styled.span`
    font-family: 'Nunito';
    font-size: 16px;
    font-weight: bold;
    color: #e1e7ff;
    width: fit-content;
    height: fit-content;
`;
export const FeedSend = styled.img`
    width: 12px;
    height: 12px;
    @media only screen and (min-width: 950px) {
        width: 16px;
        height: 16px;
    }
    @media only screen and (min-width: 1150px) {
        width: 24px;
        height: 24px;
    }
`;

export const BottomFeedDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
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
    border: 1px solid #55596b;
`;
export const TrendingTopDiv = styled.div`
    height: 118px;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 32px;
    padding-left: 24px;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #55596b;
    @media only screen and (min-width: 1150px) {
        height: 118px;
        width: 100%;
        padding-top: 60px;
        padding-bottom: 32px;
        padding-left: 24px;
        align-items: flex-start;
        justify-content: flex-start;
        border: 1px solid #55596b;
    }
    @media only screen and (min-width: 1600px) {
        height: 118px;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 32px;
        padding-left: 24px;
        align-items: flex-start;
        justify-content: flex-start;
        border: 1px solid #55596b;
    }
`;
export const TrendTitleText = styled.h1`
    font-size: 26px;
    font-family: 'Nunito';
    font-weight: bold;
    color: #e1e7ff;
    @media only screen and (min-width: 1150px) {
        font-size: 30px;
    }
    @media only screen and (min-width: 1600px) {
        font-size: 36px;
    }
`;
export const TrendingBottomDiv = styled.div`
    height: 100%;
    width: 100%;
`;
