import React from 'react';

import { useQuery } from '@apollo/client';
import { categories } from '../../api/gql';

import styles from './HomePage.css';



export function HomePage() {
  const products = useQuery(categories) 
  console.log("products", products.data);
  return 
}
