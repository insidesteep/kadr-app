import {users } from '../allData'

export default class StoreService {

    getPassportData(){
        return fetch("http://www.mocky.io/v2/5d85d2bb320000f94207b2de")
            .then(resolve => resolve.json())

       /* return new Promise((resolve) => {
            setTimeout(() => {
                resolve(users.passportInfo)
            }, 700)
        })*/
    }

    getSWAPI(){
        return fetch('https://swapi.co/api/people/1')
    }
}