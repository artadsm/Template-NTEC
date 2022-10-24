import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import * as S from './styles';

export type NavComponentProps = {
    title: string;
    img: string;
    setName: Dispatch<SetStateAction<string>>;
    selected: boolean;
    link: string;
};
const NavComponent: React.FC<NavComponentProps> = ({
    title,
    img,
    setName,
    selected,
    link
}) => {
    function handleClick() {
        setName(title);
    }
    // console.log({ title, img, setName, selected });

    return (
        <Link href={link}>
            <S.Container selected={selected} onClick={handleClick}>
                <S.Icon src={img} />
                <S.Title>{title}</S.Title>
            </S.Container>
        </Link>
    );
};

export default NavComponent;
