import React from 'react';
import { Container, Header, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';

import BreweryCard from './BreweryCard';

const App = () => {
  return (
    <Container>
      <BreweryCard />
    </Container>
  );
}

export default App;
