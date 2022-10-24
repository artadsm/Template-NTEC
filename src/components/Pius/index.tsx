import * as S from './styles';

export type FeedComponentProps = {
    content: string;
    img: string;
    like: boolean;
    repost: boolean;
};

const FeedComponent: React.FC<FeedComponentProps> = ({
    content,
    img,
    like,
    repost
}) => (
    <>
        content = {content}; img = {img}; like = {like}; repost = {repost};
        <S.Piu />
    </>
);

export default FeedComponent;
