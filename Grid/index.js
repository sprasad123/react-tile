import React, { Component } from 'react';
import { Container , Header} from './styles';

export const HeaderGrid = ()=><Header>header</Header>

export default class Grid extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}


