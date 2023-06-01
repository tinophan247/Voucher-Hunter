import axiosDefault from "axios"

export const apiGetPublicProvinces = () => new Promise(async (resolve,reject) => {
    try {
        const response = await axiosDefault({
            method : 'get',
            url: 'https://vapi.vnappmob.com/api/province/'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicDistricts = (provinceId) => new Promise(async (resolve,reject) => {
    try {
        const response = await axiosDefault({
            method : 'get',
            url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicWards = (distictId) => new Promise(async (resolve,reject) => {
    try {
        const response = await axiosDefault({
            method : 'get',
            url: `https://vapi.vnappmob.com/api/province/ward/${distictId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
