class Utils {};

Utils.Host = (page = '') => { 
        var HOST = 'http://localhost:3055'
        return HOST
}

Utils.authHeader = () => {
    return {
        headers: {
			Authorization:
				"Bearer " + localStorage.getItem('jwt'),
				"Content-Type": "application/x-www-form-urlencoded",
			},
    };
}


export default Utils;
