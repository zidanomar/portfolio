import React from 'react';
import Card from './Card';

function HeroCard({ children, ...props }) {
  return (
    <Card
      padding='4'
      position='absolute'
      width='max-content'
      {...props}
      textAlign='center'
    >
      {children}
    </Card>
  );
}

export default HeroCard;
