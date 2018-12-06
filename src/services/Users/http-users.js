import { API_BASE, HTTP_USER, OFFLINE } from './../config';
import httpBase from '../http-base';
class HttpUser {

    async getLogin(config) {
        try {
            const url = `${API_BASE}${HTTP_USER.getLogin}`;
            if (OFFLINE == "S") {
                return "5ad216b98d1cc40014157147";
            } else {
                const data = await httpBase.baseGet(url, config);
                return data.token;
            }
        } catch (error) {
            console.warn(error);//TODO
        }
    }
    async getUsers() {
        try {
            const url = `${API_BASE}${HTTP_USER.getUsers}`;
            if (OFFLINE == "S") {
                return [
                    { "_id": "5ad174181e9cb7001456c336", "name": "leidy", "username": "lzulu", "email": "lzulu@gmail.com", "password": "123456", "followings": 10, "followers": 100, "likes": 201, "photo": "https://previews.123rf.com/images/alexutemov/alexutemov1605/alexutemov160500104/56445241-Beautiful-happy-woman-face-character-vector-illustration-Happy-woman-beauty-portrait-female-face-and-Stock-Vector.jpg", "token": "csEu82q6zPxwCJewWHZ9", "__v": 0 }, { "_id": "5ad216b98d1cc40014157147", "name": "alejandro", "username": "agiraldo", "email": "agiraldo@gmail.com", "password": "654321", "followings": 20, "followers": 500, "likes": 20, "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg", "token": "csEu82q6HgtdRdewWHS1", "__v": 0 }, { "_id": "5ad217238d1cc40014157148", "name": "jorge", "username": "jmosquera", "email": "jmosquera@gmail.com", "password": "123456", "followings": 30, "followers": 540, "likes": 23, "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg", "token": "csEu83WdssW4dRdewWHS1", "__v": 0 }, { "_id": "5ad2179a8d1cc40014157149", "name": "luis", "username": "lpalacio", "email": "lpalacio@gmail.com", "password": "567890", "followings": 10, "followers": 340, "likes": 233, "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg", "token": "xsd3Wd6sW4dRdewWfS1", "__v": 0 }, { "_id": "5ad217e18d1cc4001415714a", "name": "andres", "username": "apulgarin", "email": "apulgarin@gmail.com", "password": "345678", "followings": 50, "followers": 348, "likes": 2343, "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg", "token": "dftg3Wd6sW2zxl6dewWfS1", "__v": 0 }, { "_id": "5ad218668d1cc4001415714b", "name": "juan", "username": "jsalazar", "email": "jsalazar@gmail.com", "password": "135790", "followings": 20, "followers": 548, "likes": 23, "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg", "token": "dftg3Wdwlm1QpA06dewWfS1", "__v": 0 }, { "_id": "5ad2189f8d1cc4001415714c", "name": "john", "username": "jvelez", "email": "jvelez@gmail.com", "password": "246802", "followings": 60, "followers": 748, "likes": 2300, "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg", "token": "qxL4dpoDwlm1QpA06dewWfS1", "__v": 0 }, { "_id": "5ae48aafa9ab8a00149a198a", "name": "john", "username": "jvelez", "email": "jvelez@gmail.com", "password": "246802", "followings": 60, "followers": 748, "likes": 2300, "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg", "token": "qxL4dpoDwlm1QpA06dewWfS1", "__v": 0 }, { "_id": "5b8f1ab8ff90d70014cebb23", "__v": 0 }
                ];
            } else {
                const data = await httpBase.baseGet(url, {});
                return data;
            }
        } catch (error) {
            console.warn(error);//TODO
        }
    }

    async getUserByToken(token) {
        try {
            const url = `${API_BASE}${HTTP_USER.getUser}`;
            const config = {
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            }
            if (OFFLINE == "S") {
                return [
                    {
                        "_id": "5ad216b98d1cc40014157147",
                        "name": "alejandro",
                        "username": "agiraldo",
                        "email": "agiraldo@gmail.com",
                        "password": "654321",
                        "followings": 20,
                        "followers": 500,
                        "likes": 20,
                        "photo": "https://st3.depositphotos.com/1007566/13942/v/450/depositphotos_139428304-stock-illustration-businessman-character-avatar-isolated.jpg",
                        "token": "csEu82q6HgtdRdewWHS1",
                        "__v": 0
                    }
                ];
            } else {
                const data = await httpBase.baseGet(url, config);
                return data;
            }
        } catch (error) {
            console.warn(error);
        }
    }
}

export default new HttpUser;