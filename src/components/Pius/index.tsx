import * as S from './styles';
import { useState } from 'react';

export type FeedComponentProps = {
    name: string;
    content: string;
    img: string;
};

const FeedComponent: React.FC<FeedComponentProps> = ({
    content,
    img,
    name,
}) => {
      const [likeToggle, setLike] = useState(false);
      const [repostToggle, setRepost] = useState(false);
      const [deleteToggle, setDelete] = useState(false);


    function likeClick() {
        setLike(true);
    }
    function repostClick() {
        setRepost(true);
    }
    function deleteClick(){
        setDelete(true);
    }

    return (
        <S.Piu deleted = {deleteToggle}>
            <S.PiuUpperDiv>
                <S.PiuProfileDiv>
                    <S.ProfilePic src={img} />
                    <S.PiuTextDiv>
                        <S.ProfileName>{name}</S.ProfileName>
                        <S.ProfileContent>{content}</S.ProfileContent>
                    </S.PiuTextDiv>
                </S.PiuProfileDiv>
                <S.PiuDelete  src="/assets/bi_x-lg.svg"  onClick = {deleteClick}/>
            </S.PiuUpperDiv>
            <S.PiuLowerDiv>
                <S.PiuIcons src="/assets/fa-regular_comment.svg" />
                <S.PiuIcons
                    onClick={repostClick}
                    src={
                        repostToggle
                            ? '/assets/zondicons_repost_green.svg'
                            : '/assets/zondicons_repost.svg'
                    }
                />
                <S.PiuIcons
                    onClick={likeClick}
                    src={
                        likeToggle
                            ? '/assets/emojione_red-heart.svg'
                            : '/assets/icon-park-outline_like.svg'
                    }
                />
            </S.PiuLowerDiv>
        </S.Piu>
    );
};

export default FeedComponent;
