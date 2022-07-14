import Head from 'next/head'
import Header from '../components/header/header'
import { wrapper } from '../store'
import { setProducts, setCurrency } from '../store/shopping/reducer'
import { useSelector } from 'react-redux';
import CardInfo from '../components/cards/card-info';

function Home() {
  const { products } = useSelector((state) => state.data);
  return (
    <>
      <Head>
        <title>AUTOS CANCÚN</title>
        <meta name="description" content="TEST FROM XCARET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="flex flex-col px-32">
          <h1 className="font-bold text-2xl text-center">COMPRAR AUTO</h1>
          <div className="flex flex-row flex-wrap justify-around">
            {products.map(item => 
              <CardInfo data={item} cardWith="w-1/3" />
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
      const response = await fetch(
        'http://localhost:3000/getProducts'
      );
      const data = await response.json();
      console.log("store", store.getState('products'))
      store.dispatch(setProducts(data));
      store.dispatch(setCurrency("MXN"));
      return {
        props: {
          product: data
        }
      }
    }
})

export default Home;