/* eslint-disable jsx-a11y/alt-text */
import NavComponent from 'components/NavComponent';
import TrendingComponent from 'components/TrendingComponent';
import FeedComponent from 'components/Pius';
import PiusServices from 'services/PiusServices';
// import UserService from 'services/UserService';
import { useEffect, useState } from 'react';
import Piu from 'interfaces/Piu';
import * as S from './styles';

const HomeTemplate = () => {
    const [name, setName] = useState('Página Inicial');
    const [counter, setCounter] = useState(0);
    const [valorInputContent, setValorInputContent] = useState('');
    const [piusArray, setPiusArray] = useState<Piu[]>([]);
    const [piuPostado, setPiuPostado] = useState(false);

    useEffect(() => {
        const getPius = async () => {
            const response = await PiusServices.getPius();
            setPiusArray(
                response.sort((a, b) =>
                    new Date(a.created_at).getTime() >
                    new Date(b.created_at).getTime()
                        ? 1
                        : -1
                )
            );
        };
        getPius();
    }, [piuPostado]);

    async function handleClick() {
        if (valorInputContent === '') return;
        if (valorInputContent.length > 140) return;
        await PiusServices.postPiu(valorInputContent);
        setPiuPostado(!piuPostado);
    }
    return (
        <>
            <S.ScreenDiv>
                <S.SideBardiv>
                    <S.SideBarUpperDiv>
                        <S.SideBarIconDiv>
                            <S.SideBarIcon src="/assets/Logo.svg" />
                            <S.SideBarIconTitle>PiuPiuwer</S.SideBarIconTitle>
                        </S.SideBarIconDiv>
                        <S.SideBarOptionsDiv>
                            <NavComponent
                                link="/"
                                title="Página Inicial"
                                img="/assets/Home.png"
                                setName={setName}
                                selected={name === 'Página Inicial'}
                            />
                            <NavComponent
                                link="/404"
                                title="Notificações"
                                img="/assets/ic_outline-notifications.svg"
                                setName={setName}
                                selected={name === 'Notificações'}
                            />
                            <NavComponent
                                link="/404"
                                title="Mensagens"
                                img="/assets/jam_messages-alt.svg"
                                setName={setName}
                                selected={name === 'Mensagens'}
                            />
                            <NavComponent
                                link="/404"
                                title="Salvos"
                                img="/assets/dashicons_cloud-saved.svg"
                                setName={setName}
                                selected={name === 'Salvos'}
                            />
                            <NavComponent
                                link="/404"
                                title="Perfil"
                                img="/assets/pajamas_profile.svg"
                                setName={setName}
                                selected={name === 'Perfil'}
                            />
                            <NavComponent
                                link="/404"
                                title="Configurações"
                                img="/assets/akar-icons_gear.svg"
                                setName={setName}
                                selected={name === 'Configurações'}
                            />
                        </S.SideBarOptionsDiv>
                    </S.SideBarUpperDiv>
                    <S.ProfileDiv>
                        <S.ProfileImg src="/assets/image 6.png" />
                        <S.ProfileName>Artur Anacleto</S.ProfileName>
                    </S.ProfileDiv>
                </S.SideBardiv>
                <S.FeedDiv>
                    <S.TopFeedDiv>
                        <S.SearchBarDiv>
                            <S.SerachBar
                                placeholder="Quero ouvir um piu..."
                                type="text"
                            />
                            <S.SerachBarIcon src="/assets/ci_search.svg" />
                        </S.SearchBarDiv>
                        <S.FeedInputDiv>
                            <S.FeedInput
                                selected={valorInputContent.length > 140}
                                placeholder="Quero dar um piu..."
                                type="text"
                                value={valorInputContent}
                                onChange={(e) => {
                                    setValorInputContent(e.target.value);
                                    setCounter(e.target.value.length);
                                }}
                            />
                            <S.FeedInputIconsSendDiv>
                                <S.FeedInputIconsDiv>
                                    <S.FeedIcons src="/assets/Group.svg" />
                                    <S.FeedIcons src="/assets/bi_camera-video-fill.svg" />
                                    <S.FeedIcons src="/assets/heroicons_gif-solid.svg" />
                                    <S.FeedIcons src="/assets/fluent_emoji-28-regular.svg" />
                                    <S.FeedIcons src="/assets/fa6-solid_user-tag.svg" />
                                </S.FeedInputIconsDiv>
                                <S.FeedSendDiv>
                                    <S.FeedChatacterCounter>
                                        {counter}
                                    </S.FeedChatacterCounter>
                                    <S.FeedSend
                                        onClick={handleClick}
                                        src="/assets/bi_send.svg"
                                    />
                                </S.FeedSendDiv>
                            </S.FeedInputIconsSendDiv>
                        </S.FeedInputDiv>
                    </S.TopFeedDiv>
                    <S.BottomFeedDiv>
                        {piusArray.map((piu) => (
                            <FeedComponent
                                id={piu.id}
                                name={piu.user.username}
                                img={piu.user.avatar}
                                content={piu.text}
                                setPiuPostado={setPiuPostado}
                                piuPostado={piuPostado}
                                likes={piu.likes}
                            />
                        ))}
                    </S.BottomFeedDiv>
                </S.FeedDiv>
                <S.TrendingDiv>
                    <S.TrendingTopDiv>
                        <S.TrendTitleText>Pius em Alta</S.TrendTitleText>
                    </S.TrendingTopDiv>
                    <S.TrendingBottomDiv>
                        <TrendingComponent
                            img="/assets/image 8.png"
                            title="Eleições 2022"
                            content="Eleição em São Paulo: veja Tweets sobre a disputa de 2º turno entre Tarcísio e Haddad"
                        />
                        <TrendingComponent
                            img="/assets/image 10.png"
                            title="#AppleTeacher"
                            content="Na semana do Dia do Professor, agradecemos sua paixão e dedicação! "
                        />
                        <TrendingComponent
                            img="/assets/image 11.png"
                            title="A Fazenda"
                            content="'A Fazenda 14': Veja os Pius sobre o programa 🤠"
                        />
                        <TrendingComponent
                            img="/assets/Frame 191.png"
                            title="Vôlei"
                            content="Sérvia derrota o Brasil e é campeã mundial de vôlei feminino"
                        />
                        <TrendingComponent
                            img="/assets/volei.png"
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
