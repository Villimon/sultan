export interface IItems {
    id: number
    image?: string
    title?: string
    sizeType?: string
    size?: string
    barcode?: string
    producer?: string
    brand?: string
    description?: string
    price?: number
    amount?: number
    lable?: string
    typeOfCare?: string[]
}

export interface INavigation {
    id: number
    title: string
}


export interface IList {
    id: number
    title: string
    items: Array<string>
}


export interface IOptions {
    id: number
    value: string
}