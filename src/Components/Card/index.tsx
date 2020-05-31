import React, { FunctionComponent } from "react";

import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardText,
  StyledCardActions
} from "./styles";

interface CardProps {
  className?: string
  h?: number
  /**
   * Test property, sometimes you can't reliably select an element by any of the other queries. For those, it's recommended to use data-testid
   */
  ['data-testid']?: string
}

const Card: FunctionComponent<CardProps> = props => {
  return (
    <StyledCard
      className={props.className}
      h={props.h}
      data-testid={props['data-testid']}
    >
      {props.children}
    </StyledCard>
  )
}

const CardHeader: FunctionComponent<{ ['data-testid']?: string }> = props => {
  return (
    <StyledCardHeader data-testid={props['data-testid']}>
      {props.children}
    </StyledCardHeader>
  )
}

const CardTitle: FunctionComponent<{ ['data-testid']?: string }> = props => {
  return (
    <StyledCardTitle data-testid={props['data-testid']}>
      {props.children}
    </StyledCardTitle>
  )
}

const CardText: FunctionComponent<{ ['data-testid']?: string }> = props => {
  return (
    <StyledCardText data-testid={props['data-testid']}>
      {props.children}
    </StyledCardText>
  )
}

const CardActions: FunctionComponent<{ ['data-testid']?: string }> = props => {
  return (
    <StyledCardActions data-testid={props['data-testid']}>
      {props.children}
    </StyledCardActions>
  )
}

export { Card, CardHeader, CardTitle, CardText, CardActions }
