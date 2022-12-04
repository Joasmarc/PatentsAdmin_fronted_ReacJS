const base_url = 'http://192.168.1.14/restApiTest/api/Person.controller.php';

export const getRequestAPI = async(query) => {
    try {
        const resp = await fetch(
            base_url + '?request=' + query,
            {
                method:'get',
                headers:{
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            }
        );
        const {data} = await resp.json();
        return data;
    } catch (error) {
        console.log('Fetch API Error => ', error);
    }
};

export const postRequestAPI = async(query, requestBody) => {
    try {
        const resp = await fetch(
            base_url + '?request=' + query,
            {
                method:'post',
                headers:{
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: JSON.stringify(requestBody),
            }
        );
        const {data} = await resp.json();
        return data;
    } catch (error) {
        console.log('Fetch API Error => ', error);
    }
};
