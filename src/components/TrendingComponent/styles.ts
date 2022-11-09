import styled from 'styled-components';

export const TrendingDiv = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
    padding-right: 14px;
    padding-top: 24px;
    padding-bottom: 24px;
    gap: 16px;
    border: 1px solid #55596b;
    @media only screen and (min-width: 950px) {
        height: 140px;
    }
    @media only screen and (min-width: 1050px) {
        height: 150px;
    }
    @media only screen and (min-width: 1150px) {
        height: 160px;
    }
    @media only screen and (min-width: 1250px) {
        height: 170px;
    }
    @media only screen and (min-width: 1350px) {
        height: 180px;
    }
`;
export const TrendTextDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 18px;
`;
export const TrendTitle = styled.span`
    font-size: 12px;
    color: #e1e7ff;
    @media only screen and (min-width: 950px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1150px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 1150px) {
        font-size: 18px;
    }
    @media only screen and (min-width: 1350px) {
        font-size: 24px;
    }
`;
export const TrendContent = styled.span`
    font-size: 8px;
    color: #e1e7ff;
    @media only screen and (min-width: 900px) {
        font-size: 10px;
    }
    @media only screen and (min-width: 1050px) {
        font-size: 12px;
    }
    @media only screen and (min-width: 1150px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1350px) {
        font-size: 16px;
    }
`;
export const TrendImg = styled.img`
    width: 44%;
    height: width;
    border-radius: 16px;
    background-color: white;
`;
