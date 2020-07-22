import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import nature from '../../img/gallery/_DSC6149.jpg';
import nature_0 from '../../img/gallery/_DSC6150.jpg';
import nature_1 from '../../img/gallery/_DSC6153.jpg';
import nature_2 from '../../img/gallery/_DSC6155.jpg';
import nature_3 from '../../img/gallery/_DSC6156.jpg';
import nature_4 from '../../img/gallery/_DSC6157.jpg';
import nature_5 from '../../img/gallery/_DSC6158.jpg';

const items = [
  nature,
  nature_0,
  nature_1,
  nature_2,
  nature_3,
  nature_4,
  nature_5,
];

export const PlaceholderItem = styled.div`
  height: 200px;
  background: #EEE;
`;

export const SlideItem = styled.div`
  height: 200px;
  width: 100%;
  background: url('${props => props.src}');
  background-size: cover;
  background-position: center;
`;

const SlideItemIndex = styled.div`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  background: #333;
  border: 2px solid #000;
  border-left: 0;
  border-top: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const createImageChildren = n => range(n).map((i) => (
  <SlideItem key={i} src={items[i%items.length]}>
    <SlideItemIndex>{i}</SlideItemIndex>
  </SlideItem>
));