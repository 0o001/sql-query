const sql = new Proxy({ queryMap: {} }, {
    get(target, prop, receiver) {
        if (prop === 'toString') {
            return () => {
                let queryString = '';
                for (const [key, value] of Object.entries(target.queryMap)) {
                    queryString += key.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase() + ' ';

                    const getType = Object.prototype.toString.call(...value);
                    if ( getType === '[object Object]') {
                        queryString += '(' + Object.entries(...value).map(([k, v]) => `${k}=${typeof v === 'string' ? `'${v}'` : v}`).join(',') + ')';
                    } else if(getType === '[object Array]') {
                        queryString += '(' + Object.values(...value).join(',') + ')';
                    }else {
                        queryString += value.join(',');
                    }
                    
                    if(value.length) {
                        queryString += ' ';
                    }
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