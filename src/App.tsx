import { Listing } from './components/Listing.tsx';
import etsy from './data/etsy.tsx';
import { TItem } from './types.ts';

import './App.css';

const dataList: TItem[] = [];

etsy.forEach((item) => {
  if (item.MainImage === undefined) {
    return;
  }
  const data: TItem = {
    listing_id: item.listing_id,
    url: item.url,
    MainImage: item.MainImage,
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  };

  dataList.push(data);
})

function App() { 
  return (
    <div className="wrapper">
      <Listing items={dataList} />
    </div>
  )
};

export default App;
