import * as S from './styles';

export type TrendProps = {
    title: string;
    img: string;
    content: string;
};

const TrendingComponent: React.FC<TrendProps> = ({ content, title, img }) => (
    <>
        <S.TrendingDiv>
            <S.TrendImg src={img} />
            <S.TrendTextDiv>
                <S.TrendTitle>{title}</S.TrendTitle>
                <S.TrendContent>{content}</S.TrendContent>
            </S.TrendTextDiv>
        </S.TrendingDiv>
    </>
);

export default TrendingComponent;
