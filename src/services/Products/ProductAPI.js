const API_ENDPOINT = "https://shoppingproducts.herokuapp.com";

class ProductAPI {
    //Promesas async await
    async getCatalogAwait(){
        try{
            const query = await fetch(`${API_ENDPOINT}/products`);
            const data = await query.json();
            console.log('getCatalogAwait');
            console.log(data);
            return data;
        }catch(error){
            console.log(error);
        }

    }
    async getProductAwait(id){
        try{
            await console.log('getProductAwait');
            await console.log(id);

            const query = await fetch(`${API_ENDPOINT}/products/${id}`);
            const data = await query.json();
            await console.log('getProductAwait');
            await console.log(data);
            return data;
        }catch(error){
            console.log(error);
        }

    }

}
//Esto no es react-native por tanto se instancia la clase.
export default new ProductAPI();