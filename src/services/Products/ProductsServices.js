import ProductAPI from '../products/ProductAPI';
class ProductServices {
    //Promesas async await
    async getCatalogAwait(){
        try{
            let data = ProductAPI.getCatalogAwait();
            var products = new Array(); 
            
            data.forEach(element => {
                element.favorite = true;
                element.category = 1;
                products.push(element);
            });

            return products;
        }catch(error){
            console.log(error);
        }

    }
    async getProductAwait(id){
        try{
            const product = ProductAPI.getProductAwait(id);
            await console.log('getProductAwait');
            await console.log(data);
            product.category=1;
            product.favorite = true;
            return product;
        }catch(error){
            console.log(error);
        }

    }

}
//Esto no es react-native por tanto se instancia la clase.
export default new ProductServices();