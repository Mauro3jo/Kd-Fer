import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';

import { ProductList } from '../components/products';
import { useProducts } from '../hooks';

import { FullScreenLoading } from '../components/ui';


const HomePage: NextPage = () => {


  const { products, isLoading } = useProducts('/products');


  return (
    <ShopLayout title={'KD-FER - Home'} pageDescription={''}>

        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

        
    

    </ShopLayout>
  )
}

export default HomePage
