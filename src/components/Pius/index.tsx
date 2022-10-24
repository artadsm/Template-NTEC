import * as S from './styles';

export type FeedComponentProps = {
    name: string;
    content: string;
    img: string;
    // like: boolean;
    // repost: boolean;
};

const FeedComponent: React.FC<FeedComponentProps> = ({
    content,
    img,
    // like,
    // repost,
    name
}) => (
    <>
        <S.Piu>
            <S.PiuUpperDiv>
                <S.ProfilePic src={img} />
                <S.PiuTextDiv>
                    <S.ProfileName>{name}</S.ProfileName>
                    <S.ProfileContent>{content}</S.ProfileContent>
                </S.PiuTextDiv>
            </S.PiuUpperDiv>
            <S.PiuLowerDiv>
                <S.PiuIcons src="" />
                <S.PiuIcons /* repost*= {repost} */ src="" />
                <S.PiuIcons /* like = {like} */ src="" />
            </S.PiuLowerDiv>
        </S.Piu>
    </>
);

export default FeedComponent;
