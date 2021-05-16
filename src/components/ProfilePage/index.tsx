import React from 'react';

import Feed from '../Feed';

import {
    Container, 
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
    return(
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Vitor Hugo</h1>
                <h2>@vitor_4ntunes</h2>

                <p>Amante de JavaScript, fã da <a href="https://rocketseat.com.br">@Rocketseat</a></p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 10 de Novembro de 2001
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>14</strong>
                    </span>
                    <span>
                        <strong>20 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
}

export default ProfilePage;