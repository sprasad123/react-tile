import React, { Component } from 'react';
import { Container } from './styles';

export default class MainBox extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}