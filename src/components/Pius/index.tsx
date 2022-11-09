/* eslint-disable*/

import * as S from './styles';
import { useState, useEffect } from 'react';
import PiusServices from 'services/PiusServices';
import PiuLike from 'interfaces/PiuLike';

export type FeedComponentProps = {
    name: string;
    content: string;
    img: string;
    id: string;
    likes: PiuLike[];
    setPiuPostado: (x: boolean) => void;
    piuPostado: boolean;
};

const FeedComponent: React.FC<FeedComponentProps> = ({
    content,
    img,
    name,
    id,
    setPiuPostado,
    piuPostado,
    likes
}) => {
    const [likeToggle, setLike] = useState(false);
    const [repostToggle, setRepost] = useState(false);
    useEffect(() => {
        const sustainLikes = async () => {
            const result = likes.find(
                ({ userId }) =>
                    userId === '8304908a-6f6d-4615-8c48-7fd47ea5b4cb'
            );
            if (result) setLike(true);
        };
        sustainLikes();
    }, []);

    async function likeClick() {
        await PiusServices.likePiu(id);
        setLike(!likeToggle);
    }
    function repostClick() {
        setRepost(!repostToggle);
    }
    async function deleteClick() {
        await PiusServices.deletePiu(id);
        setPiuPostado(!piuPostado);
    }

    return (
        <S.Piu>
            <S.PiuUpperDiv>
                <S.PiuProfileDiv>
                    <S.ProfilePic src={img} />
                    <S.PiuTextDiv>
                        <S.ProfileName>{name}</S.ProfileName>
                        <S.ProfileContent>{content}</S.ProfileContent>
                    </S.PiuTextDiv>
                </S.PiuProfileDiv>
                <S.PiuDelete src="/assets/bi_x-lg.svg" onClick={deleteClick} />
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
