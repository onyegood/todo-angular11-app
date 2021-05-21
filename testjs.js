// ### JAVASCRIPT ###

const products = [{
	id: 'p1',
	name: 'iphone x',
	brandId: 'br1',
	supplierId: 'sp1',
}, {
	id: 'p2',
	name: 'iphone xs',
	brandId: 'br1',
	supplierId: 'sp2',
}, {
	id: 'p3',
	name: 'galaxy note 8',
	brandId: 'br2',
	supplierId: 'sp1',
}] // 10K products (P)

const brands = [{
	id: 'br1',
	name: 'apple'
}, {
	id: 'br2',
	name: 'samsung'
}] // 1K brands (B)

const suppliers = [{
	id: 'sp1',
	name: 'x logistics'
}, {
	id: 'sp2',
	name: 'y logicstics'
}] //1K suppliers (S)


/*

assume that we need to export a csv that contains productname brandname and supplier name
csv export function needs array of objects in the format of the result array given as an example below

you are given products, brands, and suppliers arrays
you need to merge them to have a result array with exact same element count with products array
only difference is to augment brandName and supplierName fields to product object

data explanation:
ids are unique object ids, the example input is not the real format
products belong to brands or suppliers so there are 1-to-many relationship from product to brands,and from products to suppliers
any brandId or supplierId you see on the product object has a match in brands and suppliers collections accordingly.

time complexity is the key here
*/
//O(?)
const mergeArrays = (products, brands, suppliers) => {
	let result = [];

    products.map(product => {
        let newProduct = {...product};

        brands.map(brand => {
            if (product.brandId === brand.id) {
                newProduct.brandName = brand.name;
            }
        });

        suppliers.map(s => {
            if (product.supplierId === s.id) {
                newProduct.supplierName = s.name;
            }
        });

        result.push(newProduct);
    })

	// you can do whatever pure JS operation you want here
    console.log(result);
	return result;
}

mergeArrays(products, brands, suppliers);

const result = [{
	id: 'p1',
	name: 'iphone x',
	brandId: 'br1',
	supplierId: 'sp1',
	brandName: 'apple',
	supplierName: 'x logistics'
}, //...
] // 10K products


