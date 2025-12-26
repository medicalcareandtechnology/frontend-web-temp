import neoarmImage from '../assets/neoarm_1.jpeg';
import modelPath from '../assets/model/neoarm.glb?url';

export const products = [
    {
        id: 'neoarm',
        name: 'NEOARM',
        tagline: 'An Affordable and Adaptive solution for human kind.',
        image: neoarmImage,
        modelPath: modelPath,
        description: [
            'NeoArm is an assistive prosthetic arm, built with the core ideology of MCT, i.e., affordability, accessibility, and adaptability. It integrates intelligent sensing, lightweight design, and user-centered mechanics to give the user natural, intuitive movement.',
            'The primary objective is not only to restore basic hand functions but to restore confidence, self-reliance, and dignity. NeoArm reflects the cutting-edge technology which is made accessible for the needy.'
        ]
    }
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
