import React, { Component } from 'react';
import { Container } from './styles';

export default class Item extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}