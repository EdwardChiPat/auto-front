import Header from '../components/header/header'
import { wrapper } from '../store'
import { setProducts, setCurrency } from '../store/shopping/reducer'
import { useSelector } from 'react-redux';
import CardInfo from '../components/cards/card-info';
import { get } from '../services/api';
import Meta from '../components/seo/meta';
import { nanoid } from '@reduxjs/toolkit';

function Home() {
  const { products } = useSelector((state) => state.data);
  console.log("products", products)
  return (
    <>
      <Meta title="INICIO | AUTOS CANCÚN"  description="ENCUENTRA LOS MEJORES AUTOS" />
      <main>
        <Header />
        <div className="flex flex-col sm:px-32 px-2 pb-10">
          <h1 className="font-bold text-4xl text-center py-10">COMPRAR AUTO</h1>
          <div className="flex flex-row flex-wrap justify-around">
            {products.length > 0 && products.map(item => 
              <CardInfo data={item} cardWith="sm:w-full md:w-1/2" key={nanoid()} />
            )}
          </div>
        </div>
      </main>
    </>
  )
}



export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { data } = store.getState('products')
    if(data?.products.length === 0){
      const dataCars = await get('car/getProducts');
      store.dispatch(setProducts(dataCars));
      store.dispatch(setCurrency("MXN"));
      return {
        props: {
          product: dataCars
        }
      }
    }
})

export default Home;