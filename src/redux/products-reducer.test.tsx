import productsReducer from "./products-reducer";



describe('test reducers', () => {

    test('test reducers reset basket', () => {
        let state = {
            basket: [{
                id: 1,
                image: '',
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
            },]
        }
        // @ts-ignore
        state = productsReducer(state, { type: "RESET_BASKET" })
        expect(state).toEqual({ basket: [] })
    })

    test('test reducers delete from basket', () => {
        let state = {
            basket: [{
                id: 1,
                image: '',
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
                image: '',
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
            }, {
                id: 3,
                image: '',
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
            },]
        }
        // @ts-ignore
        state = productsReducer(state, { type: "DELETE_BASKET", payload: 1 })
        expect(state).toEqual({
            basket: [{
                id: 2,
                image: '',
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
            }, {
                id: 3,
                image: '',
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
            },]
        })
    })

    test('test reducers add new product', () => {
        let obj = {
            id: 1,
            image: '',
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
        }
        let state = {
            products: []
        }
        // @ts-ignore
        state = productsReducer(state, { type: "ADD_NEW_PRODUCT", payload: obj })
        expect(state).toEqual({
            products: [{
                id: 1,
                image: '',
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
            }]
        })
    })

    test('test reducers delete product from products', () => {
        let state = {
            products: [{
                id: 1,
                image: '',
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
                image: '',
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
            }, {
                id: 3,
                image: '',
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
            },]
        }
        // @ts-ignore
        state = productsReducer(state, { type: "DELETE_PRODUCT", payload: 1 })
        expect(state).toEqual({
            products: [{
                id: 2,
                image: '',
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
            }, {
                id: 3,
                image: '',
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
            },]
        })
    })

    test('test reducers update total price', () => {
        let state = {
            products: [{
                id: 1,
                image: '',
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
            }],
            basket: [{
                id: 1,
                image: '',
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
            }]
        }
        // @ts-ignore
        state = productsReducer(state, { type: 'UPDATE_TOTAL_PRICE', payload: 2, id: 1 })
        expect(state).toEqual({
            products: [{
                id: 1,
                image: '',
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
            }],
            basket: [{
                id: 1,
                image: '',
                title: 'Aos',
                sizeType: 'мл',
                size: '450',
                barcode: '4604049097548',
                producer: 'Нэфис',
                brand: 'Aos',
                lable: 'средство для мытья посуды Crystal',
                price: 297.52,
                typeOfCare: ["Уход за лицом"],
                amount: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.'
            }]
        })
    })


    test('test reducers add product in basket', () => {
        const product = {
            id: 2,
            image: '',
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
        }
        let state = {
            basket: [{
                id: 1,
                image: '',
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
            }]
        }
        // @ts-ignore
        state = productsReducer(state, { type: "SET_BASKET", payload: product })
        expect(state).toEqual({
            basket: [
                {
                    id: 1,
                    image: '',
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
                }, {
                    id: 2,
                    image: '',
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
                }]
        })
    })

})
