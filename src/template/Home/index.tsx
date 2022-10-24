/* eslint-disable jsx-a11y/alt-text */
import NavComponent from 'components/NavComponent';
import TrendingComponent from 'components/TrendingComponent';
import { useState } from 'react';
import * as S from './styles';

const HomeTemplate = () => {
    const [name, setName] = useState('Página Inicial');
    // console.log(name);

    return (
        <>
            <S.ScreenDiv>
                <S.SideBardiv>
                    <S.SideBarUpperDiv>
                        <S.SideBarIconDiv>
                            <S.SideBarIcon src="public/assets/Logo.svg" />
                            <S.SideBarIconTitle>PiuPiwer</S.SideBarIconTitle>
                        </S.SideBarIconDiv>
                        <S.SideBarOptionsDiv>
                            <NavComponent
                                link="/"
                                title="Página Inicial"
                                img="src\public\assets\Home.png"
                                setName={setName}
                                selected={name === 'Página Inicial'}
                            />
                            <NavComponent
                                link="/404"
                                title="Notificações"
                                img="/../public/assets/ic_outline-notifications.svg"
                                setName={setName}
                                selected={name === 'Notificações'}
                            />
                            <NavComponent
                                link="/404"
                                title="Mensagens"
                                img="/../public/assets/jam_messages-alt.svg"
                                setName={setName}
                                selected={name === 'Mensagens'}
                            />
                            <NavComponent
                                link="/404"
                                title="Salvos"
                                img="../assets/Logo.svg"
                                setName={setName}
                                selected={name === 'Salvos'}
                            />
                            <NavComponent
                                link="/404"
                                title="Perfil"
                                img="/assets/Logo.svg"
                                setName={setName}
                                selected={name === 'Perfil'}
                            />
                            <NavComponent
                                link="/404"
                                title="Configurações"
                                img="/assets/Logo.svg"
                                setName={setName}
                                selected={name === 'Configurações'}
                            />
                        </S.SideBarOptionsDiv>
                    </S.SideBarUpperDiv>
                    <S.ProfileDiv>
                        <S.ProfileImg src="\public\assets\quadrados 1.png" />
                        <S.ProfileName>Artur Anacleto</S.ProfileName>
                    </S.ProfileDiv>
                </S.SideBardiv>
                <S.FeedDiv>
                    <S.TopFeedDiv>
                        <S.SearchBarDiv />
                        <S.FeedInputDiv />
                    </S.TopFeedDiv>
                    <S.BottomFeedDiv />
                </S.FeedDiv>
                <S.TrendingDiv>
                    <S.TrendingTopDiv>
                        <S.TrendTitleText>Pius em Alta</S.TrendTitleText>
                    </S.TrendingTopDiv>
                    <S.TrendingBottomDiv>
                        <TrendingComponent
                            img=""
                            title="Eleições 2022"
                            content="Eleição em São Paulo: veja Tweets sobre a disputa de 2º turno entre Tarcísio e Haddad"
                        />
                        <TrendingComponent
                            img=""
                            title="#AppleTeacher"
                            content="Na semana do Dia do Professor, agradecemos sua paixão e dedicação! "
                        />
                        <TrendingComponent
                            img=""
                            title="A Fazenda"
                            content="'A Fazenda 14': Veja os Pius sobre o programa 🤠"
                        />
                        <TrendingComponent
                            img="../../public/assets/volei.png"
                            title="Vôlei"
                            content="Sérvia derrota o Brasil e é campeã mundial de vôlei feminino"
                        />
                        <TrendingComponent
                            img=""
                            title="Clima tenso no NTec"
                            content="Gomes é apelidado de Campos e se  irrita com companheiros"
                        />
                    </S.TrendingBottomDiv>
                </S.TrendingDiv>
            </S.ScreenDiv>
        </>
    );
};
export default HomeTemplate;
