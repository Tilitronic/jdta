import React from 'react';

import { useQuery } from '@apollo/client';
import { categories } from '../../api/gql';

import styles from './ShowcasePage.css';



export function ShowcasePage() {
  const { loading, error, data } = useQuery(categories) 
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const  categoriesAr = data.categories.map(el=>el.name)
  console.log("categories", categoriesAr);
  console.log("products", data);
  return 
}
