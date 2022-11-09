import styled from 'styled-components';

export const Piu = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    gap: 32px;
    background-color: #7b93ff;
    border-radius: 16px;
`;
export const PiuTextDiv = styled.div`
    display: flex;
    width: 200px;
    height: fit-content;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    @media only screen and (min-width: 950px) {
        width: 300px;
    }
    @media only screen and (min-width: 1150px) {
        width: 400px;
    }
    @media only screen and (min-width: 1350px) {
        width: 500px;
    }
    @media only screen and (min-width: 1500px) {
        width: 100%;
    }
`;
export const PiuUpperDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    padding-left: 16px;
    padding-right: 48px;
    padding-top: 16px;
`;
export const PiuProfileDiv = styled.div`
    display: flex;
    gap: 22px;
    align-items: flex-start;
    @media only screen and (min-width: 950px) {
        gap: 32px;
    }
`;
export const PiuDelete = styled.img`
    width: 12px;
    height: 12px;
    cursor: pointer;
    @media only screen and (min-width: 950px) {
        width: 16px;
        height: 16px;
    }
    @media only screen and (min-width: 1150px) {
        width: 24px;
        height: 24px;
    }
`;
export const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    @media only screen and (min-width: 950px) {
        width: 48px;
        height: 48px;
        border-radius: 48px;
    }
    @media only screen and (min-width: 1150px) {
        width: 64px;
        height: 64px;
        border-radius: 64px;
    }
`;
export const ProfileName = styled.h1`
    font-family: 'Nunito';
    font-size: 16px;
    font-weight: bold;
    @media only screen and (min-width: 950px) {
        font-size: 18px;
    }
`;
export const ProfileContent = styled.p`
    font-family: 'Nunito';
    font-size: 12px;
    width: 600px;
    overflow-wrap: break-word;
    @media only screen and (min-width: 950px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1150px) {
        font-size: 16px;
    }
`;
export const PiuLowerDiv = styled.div`
    display: flex;
    width: 100%;
    height: 32px;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 56px;
    padding-right: 56px;
`;
export const PiuIcons = styled.img`
    width: 10px;
    height: 10px;
    cursor: pointer;
    @media only screen and (min-width: 950px) {
        width: 16px;
        height: 16px;
    }
    @media only screen and (min-width: 1150px) {
        width: 24px;
        height: 24px;
    }
`;
export const PiuWholeHeart = styled.img`
    width: 16px;
    height: 16px;
    background-image: '';
    @media only screen and (min-width: 1150px) {
        width: 24px;
        height: 24px;
    }
`;
