/**
 * CookieManager is a small component to create edit and delete cookie that are accessible in JavaScript
 */
class CookieManager{
    /**
     * Check if a cookie exist. If it does return its value. return null if it does not
     * @param name
     * @returns {string|null}
     */
    static get(name){
        let regex = new RegExp(name+'=([\\w.-_%]*);');
        let result = regex.exec(document.cookie);

        if( result !== null ){
            return result[1];
        }
        else{
            return null;
        }
    }

    /**
     * Check if a cookie a exist and replace its value if it's exist. Create it if it does not;
     * @param name Cookie's name as a string
     * @param value Cookie's value as a string
     * @param maxAge Max age of the cookie in minutes
     */
    static set(name, value, maxAge = 0){
        let cookieStr = name+'='+encodeURIComponent(value);
        if( Number.isInteger(maxAge) ){
            cookieStr += '; max-age='+maxAge*60
        }
        document.cookie = cookieStr;
    }

    /**
     * Return an object containing each cookie with their name and value as key/value pair
     * @returns {string[]}
     */
    static getAll(){
        let cookies = document.cookie.split(' ');
        let result = {};
        cookies.forEach(cookieStr => {
            let arr = cookieStr.split('=');
            result[arr[0]] = arr[1].indexOf(';') !== -1 ? arr[1].substr(0, arr[1].length-1) : arr[1];
        });
        return result;
    }

    /**
     * Delete a cookie with it's name
     * @param name
     */
    static delete( name ){
        let date = new Date();
        date.setYear( date.getFullYear() - 1 );
        document.cookie = name+'= ; expires='+date.toGMTString();
    }
}

export default CookieManager;