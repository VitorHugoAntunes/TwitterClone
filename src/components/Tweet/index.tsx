import React from 'react';

import {
    Container,
    Retweeted,
    RetweetIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    LikeIcon
} from './styles';

export const Tweet: React.FC = () => {
    return(
        <Container>
            <Retweeted>
                <RetweetIcon className="retweeted" />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Rocketseat</strong>
                        <span>@rocketseat</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>

                    <Description>Foguete não tem ré</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            19
                        </Status>
                        <Status>
                            <RetweetIcon />
                            5
                        </Status>
                        <Status>
                            <LikeIcon />
                            45
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;