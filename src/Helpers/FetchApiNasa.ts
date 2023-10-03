const API_KEY = "8sKdvJkxHUtpjh20sU2GLa313Fc8bSPjlgeMfKtd"
const BaseURL = "https://api.nasa.gov/planetary/apod?api_key="
const TraerDatos = async()=> {
    try {
        const response = await fetch(BaseURL + API_KEY)
        const data = await response.json()

        // Promise. signfica que devolveremso como resultado resolve(si sale bien) o reject(si sale mal ) y dentro del parentesis el valor
        return Promise.resolve(data)
    } catch (error) {
        console.log(error);
        return Promise.reject("Error")
    }
}


export default TraerDatos