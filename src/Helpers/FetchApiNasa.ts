const API_KEY = "8sKdvJkxHUtpjh20sU2GLa313Fc8bSPjlgeMfKtd"
const BaseURL = "https://api.nasa.gov/planetary/apod"
const TraerDatos = async(urlParams?:string)=> {
    console.log(urlParams);
    
    try {
        const response = await fetch(`${BaseURL}?api_key=${API_KEY}${typeof urlParams !== `undefined` && urlParams?.length > 0? urlParams : ""}`)
        const data = await response.json()

        // Promise. signfica que devolveremso como resultado resolve(si sale bien) o reject(si sale mal ) y dentro del parentesis el valor
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject("Error:" + error)
    }
}


export default TraerDatos