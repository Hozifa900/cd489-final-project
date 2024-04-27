interface ICartItem {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity: number;
}




interface IAction{
    payload?: any,
    type: String
}



interface IState{
    cart:ICartItem[],
    user: IUser,
    productList: IProduct[]

}

interface IProduct{
    name:String,
    img:String,
    price: number,
    productId: number
}

interface IUser{
    name?: string,
    email?: string,
    phone?: string,
    state?: string,
    city?: string,
    zip?: string,
}

export type {ICartItem,IAction, IState, IProduct, IUser};