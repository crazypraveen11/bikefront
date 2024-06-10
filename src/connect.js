import axios from 'axios';

export let Loginprocess= async (object) =>{
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

        if(temp){
            sessionStorage.setItem("bikesecurity",object.bikeBrand);
            sessionStorage.setItem("loginuser",totalvalue);
        }
        
    } catch (er) {
        alert(er)
    }


}