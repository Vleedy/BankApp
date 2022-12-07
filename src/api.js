
export const currencyInfo = {               /*запрос курса валют от сервера */
    getCurrentCurrency() {
        return fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
        .then(resp=>resp.json())
        .catch(err=>alert(err))
    }
}



export const newsInfo = {               /*запрос новостей от сервера */
    getNewsInfo() {
        return fetch('https://6390727d65ff41831113db83.mockapi.io/news')
        .then(resp=>resp.json())
        .catch(err=>alert(err))
    }
}


export const departmentsInfo = {               /*запрос информации об отделениях от сервера */
    getDepartmentsInfo() {
        return fetch('https://6390727d65ff41831113db83.mockapi.io/departments')
        .then(resp=>resp.json())
        .catch(err=>alert(err))
    }
}


export const atmsInfo = {
    getAtmsInfo() {
        return fetch('https://6390727d65ff41831113db83.mockapi.io/atms')
        .then(resp=>resp.json())
        .catch(err=>alert(err))
    }
}

export const userInfo = {
    postUserInfo(name, phone) {
        return fetch('https://6374a19f48dfab73a4e42878.mockapi.io/BBS', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({'name': name, 'phone':phone})
        } )
    }
}