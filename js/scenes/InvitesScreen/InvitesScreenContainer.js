import React, { Component } from 'react';

import InvitesScreen from './InvitesScreen';

class InvitesScreenContainer extends Component {
  static navigationOptions = {
    title: 'Invites',
  };
  render() {
    return (
      <InvitesScreen  />
    );
  }
}

export default InvitesScreenContainer;