import React from 'react';
import Sticky from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles'

const SideBar: React.FC = () => {
    return(
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter"/>
                <SearchIcon />
            </SearchWrapper>

            <Sticky>
                <Body>
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion 
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSuggestion 
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSuggestion 
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />
                        ]}
                    />
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                </Body>
            </Sticky>
        </Container>
    )
}

export default SideBar;