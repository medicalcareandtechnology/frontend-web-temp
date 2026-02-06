import neoarmImage from '../assets/neoarm_1.jpeg';
import modelPath from '../assets/model/neoarm.glb?url';

export const products = [

    // Add more products here in the future
    // {
    //     id: 'product-2',
    //     name: 'Product Name',
    //     tagline: 'Product tagline',
    //     image: productImage,
    //     modelPath: null,
    //     description: ['Description paragraph 1', 'Description paragraph 2']
    // }
];

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};
