
export const currencyInfo = {               /*запрос курса валют от сервера */
    getCurrentCurrency() {
        return fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
        .then(resp=>resp.json())
        .catch(err=>alert(err))
    }
}



export const newsInfo = {               /*запрос новостей от сервера */
    getNewsInfo() {
        return fetch('https://belarusbank.by/api/news_info?lang=ru')
        .then(resp=>resp.json())
        .catch(err=>alert(err))
    }
}


export const departmentsInfo = {               /*запрос информации об отделениях от сервера */
    getDepartmentsInfo() {
        return fetch('https://belarusbank.by/api/filials_info')
        .then(resp=>resp.json())
        .catch(err=>alert(err))
    }
}


export const atmsInfo = {
    getAtmsInfo() {
        return fetch('https://belarusbank.by/open-banking/v1.0/atms')
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