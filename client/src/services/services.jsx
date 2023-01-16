import axios from "axios"
import { TOKEN_KEY } from "../constant/constant";



<<<<<<< HEAD
export const apiGet = async(_url) => {
        try {
            let resp = await axios.get(_url, {
                headers: {
                    "x-api-key": localStorage[TOKEN_KEY],
                    'Content-Type': "application/json"
                }
            })
            return resp;
        } catch (err) {
            throw err;
        }
 }
export const apiPost = async(_url, _body = {}) => {
=======
export const apiGet = async (_url) => {
    try {
        let resp = await axios.get(_url, {
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}
export const apiPost = async (_url, _body = {}) => {
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
    console.log(JSON.stringify(_body));

    try {
        let resp = await axios({
            url: _url,
            method: 'POST',
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json"

            }
        })
        return resp;
<<<<<<< HEAD
    } catch (err) {
        throw err;
    }
}
export const apiPut = async(_url, _body = {}) => {
=======
    } 
    catch (err) {
        throw err;
    }
}
export const apiPut = async (_url, _body = {}) => {
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
    try {
        let resp = await axios({
            url: _url,
            method: 'PUT',
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}
<<<<<<< HEAD
export const apiDelete = async(_url, _body = {}) => {
=======
export const apiDelete = async (_url, _body = {}) => {
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
    try {
        let resp = await axios({
            url: _url,
            method: 'DELETE',
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_KEY],
                'Content-Type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}