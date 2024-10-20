import { ListItem } from './ListItem.tsx';
import { TItemList } from '../types.ts';

export const Listing = ({ items }: TItemList) => {
    return (
        <div className="item-list">
            {items.map((item) => {
                if (item.MainImage === undefined) {
                    return null;
                }

                return (
                    <ListItem
                        key={item.listing_id}
                        listing_id={item.listing_id}
                        url={item.url}
                        MainImage={item.MainImage}
                        title={item.title}
                        currency_code={item.currency_code}
                        price={item.price}
                        quantity={item.quantity}
                    />
                );
            })}
        </div>
    );
}