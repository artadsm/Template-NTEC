import styled from 'styled-components';

export const Piu = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 1004px;
    height: 190px;
    justify-content: space-between;
    background-color: #7b93ff;
`;
export const PiuTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
`;
export const PiuUpperDiv = styled.div`
    display: flex;
    gap: 32px;
    align-items: flex-start;
`;

export const ProfilePic = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 64px;
`;
export const ProfileName = styled.h1`
    font-family: 'Nunito';
    font-size: 18px;
    font-weight: bold;
`;
export const ProfileContent = styled.p`
    font-family: 'Nunito';
    font-size: 12px;
`;
