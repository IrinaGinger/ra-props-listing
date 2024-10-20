export type TItem = {
    listing_id: number,
    url: string,
    MainImage: TMainImage,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
};

export type TItemList = {
    items: TItem[]
}

type TMainImage = { 
    listing_image_id: number,     
    listing_id: number, 
    url_75x75: string, 
    url_170x135: string, 
    url_570xN: string, 
    url_fullxfull: string,
};