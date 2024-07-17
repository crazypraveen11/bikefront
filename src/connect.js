import axios from 'axios';

export let Loginprocess = async (object) => {
    try {

        const twovalues = object.bikeBrand + ":" + object.password;
        const totalvalue = btoa(twovalues);

        const temp = await axios.get(`http://localhost:8081/indianbank/`,
            { 
                headers:
                {
                    "Authorization": `Basic ${totalvalue}`
                }
            } 
        )
        

        if (temp) {
            sessionStorage.setItem("bikesecurity", object.bikeBrand);
            sessionStorage.setItem("loginuser", totalvalue);
        }

    } catch (er) {
        alert(er)
    }
}


export const Createnewbike = async (obj) => {
    const t = await axios.post(`http://localhost:8081/indianbank/addbikes`, obj)

    return t;
}

export const Findbyonebrand = async () => {
    const t = await axios.get(`http://localhost:8081/indianbank/${sessionStorage.getItem('bikesecurity')}`,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('loginuser')}`
            }
        });

    return t;
}

export const Createcustomerdetails = async (obj) => {
    const t = await axios.post(`http://localhost:8081/indianbank/createcustomer`, obj,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('loginuser')}`
            }
        }
    )
}

export const Listallcustomerdetails = async () => {
    const t = await axios.get(`http://localhost:8081/indianbank/listallcustomer`,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('loginuser')}`
            }
        }
    )
    return t;
}

export const DeleteoneBike = async (brand) => {
    const t = await axios.delete(`http://localhost:8081/indianbank/deletebybrand/${brand}`,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('loginuser')}`
            }
        }
    )
    return t;
}