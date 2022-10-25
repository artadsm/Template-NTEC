import styled from 'styled-components';
interface ContainerProps {
    deleted: boolean;
}
export const Piu = styled.div<ContainerProps>`
    display: ${(props) => (props.deleted ? 'none' : 'flex')};
    flex-direction: column;
    padding: 16px;
    width: 1004px;
    height: fit-content;
    justify-content: space-between;
    gap:32px;
    background-color: #7b93ff;
    border-radius: 16px;
`;
export const PiuTextDiv = styled.div`
    display: flex;
    width:100%;
    height: fit-content;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
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
    gap: 32px;
    align-items: flex-start;
`;
export const PiuDelete = styled.img`
    width: 24px;
    height: 24px;
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
    font-size: 16px;
    width:600px;
    overflow-wrap: break-word;
`;
export const PiuLowerDiv = styled.div`
    display: flex;
    width: 972px;
    height: 32px;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 56px;
    padding-right: 56px;
`;
export const PiuIcons = styled.img`
    width: 24px;
    height: 24px;
    
`;
export const PiuWholeHeart = styled.img`
    width: 24px;
    height: 24px;
    background-image: '';
`;
