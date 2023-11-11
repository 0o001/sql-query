const sql = new Proxy({ queryMap: {} }, {
    get(target, prop, receiver) {
        if (prop === 'toString') {
            return () => {
                let queryString = '';
                for (const [key, value] of Object.entries(target.queryMap)) {
                    queryString += key.toUpperCase() + ' ';
                    if (Object.prototype.toString.call(...value) === '[object Object]') {
                        queryString += Object.entries(...value).map(([k, v]) => `${k}=${typeof v === 'string' ? `'${v}'` : v}`).join(',');
                    } else {
                        queryString += value.join(',');
                    }
                    queryString += ' ';
                }
                return queryString.trim();
            }
        }
        return (...args) => {
            target.queryMap[prop] = args;
            return receiver;
        };
    }
});