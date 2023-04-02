import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./store";

import aos from '../assets/images/aos.png'
import arial from '../assets/images/arial.png'
import bimax from '../assets/images/bimax.png'
import { IItems } from "../types/types";

let initialState = {
    products: [
        {
            id: 1,
            image: aos,
            title: 'Aos',
            sizeType: 'мл',
            size: '450',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Aos',
            lable: 'средство для мытья посуды Crystal',
            price: 148.76,
            typeOfCare: ["Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 2,
            image: arial,
            title: 'Arial',
            sizeType: 'г',
            size: '15X28.8',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Arial',
            lable: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
            price: 248.76,
            typeOfCare: ['Уход за руками'],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 3,
            image: bimax,
            title: 'Bimax',
            sizeType: 'г',
            size: '1500',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Bimax',
            lable: 'Порошок стиральный Автомат 100 пятен COMPACT',
            price: 348.76,
            typeOfCare: ["Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 4,
            image: aos,
            title: 'Aos',
            sizeType: 'мл',
            size: '450',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Aos',
            lable: 'средство для мытья посуды Crystal',
            price: 48.76,
            typeOfCare: ['Уход за руками'],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 5,
            image: arial,
            title: 'Arial',
            sizeType: 'г',
            size: '15X28.8',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Arial',
            lable: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
            price: 448.76,
            typeOfCare: ["Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 6,
            image: bimax,
            title: 'Bimax',
            sizeType: 'г',
            size: '1500',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Bimax',
            lable: 'Порошок стиральный Автомат 100 пятен COMPACT',
            price: 548.76,
            typeOfCare: ['Уход за руками'],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 7,
            image: aos,
            title: 'Aos',
            sizeType: 'мл',
            size: '450',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Aos',
            lable: 'средство для мытья посуды Crystal',
            price: 648.76,
            typeOfCare: ["Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 8,
            image: arial,
            title: 'Arial',
            sizeType: 'г',
            size: '15X28.8',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Arial',
            lable: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
            price: 748.76,
            typeOfCare: ['Уход за руками'],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 9,
            image: bimax,
            title: 'Bimax',
            sizeType: 'г',
            size: '1500',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Bimax',
            lable: 'Порошок стиральный Автомат 100 пятен COMPACT',
            price: 848.76,
            typeOfCare: ["Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 10,
            image: aos,
            title: 'Aos',
            sizeType: 'мл',
            size: '450',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Aos',
            lable: 'средство для мытья посуды Crystal',
            price: 948.76,
            typeOfCare: ['Уход за руками'],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 11,
            image: arial,
            title: 'Arial',
            sizeType: 'г',
            size: '15X28.8',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Arial',
            lable: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
            price: 1048.76,
            typeOfCare: ["Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 12,
            image: bimax,
            title: 'Bimax',
            sizeType: 'г',
            size: '1500',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Bimax',
            lable: 'Порошок стиральный Автомат 100 пятен COMPACT',
            price: 1148.76,
            typeOfCare: ['Уход за руками'],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 13,
            image: aos,
            title: 'Aos',
            sizeType: 'мл',
            size: '450',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Aos',
            lable: 'средство для мытья посуды Crystal',
            price: 1248.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 14,
            image: arial,
            title: 'Arial',
            sizeType: 'г',
            size: '15X28.8',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Arial',
            lable: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
            price: 1348.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 15,
            image: bimax,
            title: 'Bimax',
            sizeType: 'г',
            size: '1500',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Bimax',
            lable: 'Порошок стиральный Автомат 100 пятен COMPACT',
            price: 1448.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 16,
            image: aos,
            title: 'Aos',
            sizeType: 'мл',
            size: '450',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Aos',
            lable: 'средство для мытья посуды Crystal',
            price: 1548.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 17,
            image: arial,
            title: 'Arial',
            sizeType: 'г',
            size: '15X28.8',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Arial',
            lable: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
            price: 1648.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 18,
            image: bimax,
            title: 'Bimax',
            sizeType: 'г',
            size: '1500',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Bimax',
            lable: 'Порошок стиральный Автомат 100 пятен COMPACT',
            price: 1748.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 19,
            image: aos,
            title: 'Aos',
            sizeType: 'мл',
            size: '450',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Aos',
            lable: 'средство для мытья посуды Crystal',
            price: 1848.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 20,
            image: arial,
            title: 'Arial',
            sizeType: 'г',
            size: '15X28.8',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Arial',
            lable: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
            price: 1948.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        },
        {
            id: 21,
            image: bimax,
            title: 'Bimax',
            sizeType: 'г',
            size: '1500',
            barcode: '4604049097548',
            producer: 'Нэфис',
            brand: 'Bimax',
            lable: 'Порошок стиральный Автомат 100 пятен COMPACT',
            price: 2048.76,
            typeOfCare: ['Уход за руками', "Уход за лицом"],
            amount: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
        }
    ] as IItems[],
    basket: [] as IItems[],
    totalPrice: 0
}


const productsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SET_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'DELETE_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        case 'ADD_NEW_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'EDIT_PRODUCT':
            const newObj = action.obj
            return {
                ...state,
                products: state.products.map((product) => (
                    product.id === action.payload
                        ? { ...product, ...newObj }
                        : product
                ))
            }
        case 'RESET_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'SET_TOTAL_PRICE':
            let result = 0
            for (let i = 0; i < state.basket.length; i++) {
                const element = state.basket[i];
                if (element.price) {
                    result += element.price
                }
            }
            return {
                ...state,
                totalPrice: +result.toFixed(2)
            }
        case 'UPDATE_TOTAL_PRICE':
            let obj = state.products.find(p => p.id === action.id)
            return {
                ...state,
                basket: state.basket.map((bas) => (
                    bas.id === action.id
                        ? { ...bas, price: obj?.price && +(obj.price * action.payload).toFixed(2) }
                        : bas
                ))
            }
        default:
            return state;
    }
}


export const actions = {
    setBasket: (data: IItems) => ({ type: 'SET_BASKET', payload: data } as const),
    deleteBasket: (id: number) => ({ type: 'DELETE_BASKET', payload: id } as const),
    deleteProduct: (id: number) => ({ type: 'DELETE_PRODUCT', payload: id } as const),
    addNewProduct: (obj: IItems) => ({ type: 'ADD_NEW_PRODUCT', payload: obj } as const),
    editProduct: (id: number, state: any) => ({ type: 'EDIT_PRODUCT', payload: id, obj: state } as const),
    updateTotalPrice: (id: number, amount: number) => ({ type: 'UPDATE_TOTAL_PRICE', payload: amount, id: id } as const),
    resetBasket: () => ({ type: 'RESET_BASKET' } as const),
    setTotalPrice: () => ({ type: 'SET_TOTAL_PRICE' } as const)
}


export default productsReducer;



type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
