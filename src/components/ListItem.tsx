import { TItem } from '../types.ts';

export const ListItem = (props: TItem) => {
    const { url, MainImage, title, currency_code, price, quantity } = props;

    let quantityClassName = 'item-quantity';
    if (quantity <= 10) {
        quantityClassName += ' level-low';
    } else if (quantity > 10 && quantity <= 20) {
        quantityClassName += ' level-medium';
    } else {
        quantityClassName += ' level-high';
    }

    const titleLength: number = 50;
    let titleView: string;
    if (title.length > titleLength) {
        titleView = `${title.slice(0, titleLength + 1)}…`;
    } else {
        titleView = title;
    }

    let currencyView: string;
    if (currency_code === 'USD') {
        currencyView = `$`;
    } else if (currency_code === 'EUR') {
        currencyView = `€`;
    } else {
        currencyView = `${currency_code} `;
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{titleView}</p>
                <p className="item-price">{currencyView + price}</p>    
                <p className={quantityClassName}>{quantity} left</p>
            </div>
        </div>
    );
}