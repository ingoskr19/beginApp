import {API_BASE, HTTP_USER, HTTP_PRODUCT, OFFLINE} from '../config';
import httpBase from '../http-base';


class HttpProduct {
    async getProducts (){
        try{
            const url = `${ API_BASE }${HTTP_PRODUCT.getCatalog}`;
            if(OFFLINE == "S"){
                return [
                    {'_id':'5b2e5cddb610750014703b55','updatedAt':'2018-06-23T14:44:45.646Z','createdAt':'2018-06-23T14:44:45.646Z','name':'Pan Tajado','description':'Pan tajado fresco','quantity':0,'price':2300000000,'avatar':'https://i0.wp.com/marcaporhombro.com/wp-content/uploads/2012/11/392539_280059478753786_1026359137_n.jpeg','image':'https://www.carulla.com/images/productsCarulla/532/0000368495367532/0000368496564164_lrg_a.jpg','brand':'Marca: Bimbo','__v':0},{'_id':'5b2e5ca9b610750014703b54','updatedAt':'2018-06-23T14:43:53.453Z','createdAt':'2018-06-23T14:43:53.453Z','name':'Huevos Tiple A','description':'Caja de 30 unidades','quantity':0,'price':18900,'avatar':'http://avinal.com.co/wp-content/uploads/2018/01/huevo.png','image':'http://www.laranitadelapaz.com.mx/content/images/thumbs/0003075_huevo-fresco-caja-360pzas-aprox-22-kg-san-juan_550.png','brand':'Marca: AVINAL','__v':0},{'_id':'5b2e5c6bb610750014703b53','updatedAt':'2018-06-23T14:42:51.952Z','createdAt':'2018-06-23T14:42:51.952Z','name':'Leche en Caja','description':'Leche en Caja','quantity':0,'price':2500,'avatar':'https://c1.staticflickr.com/4/3158/2624522377_ba1773e6cf.jpg','image':'http://www.colanta.com.co/wp-content/uploads/2014/07/bod-uht-entera1.png','brand':'Marca: Colanta','__v':0}
                ];
            } else {
                const data = await httpBase.baseGet(url,{});
                return data;
            }
        } catch (error) {
            console.log(error);//TODO
        }
    }

    async getProductById(_id){
        try{
            const url = `${ API_BASE }${HTTP_PRODUCT.getProduct}/${_id}`;
            const data = await httpBase.baseGet(url,{});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpProduct;