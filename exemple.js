import CookieManager from "./components/CookieManager.js";

/**
 * Exemple function to create a cookie
 * @param e
 */
function createCookie(e){
    e.preventDefault();

    CookieManager.set(
        'demoCookie',
        'i am the cookie content',
        60
    );
}
document.querySelector('.createCookie').addEventListener('click', createCookie);

/**
 * Exemple function to delete a cookie
 * @param e
 */
function deleteCookie(e){
    e.preventDefault();

    CookieManager.delete( 'demoCookie' );

}
document.querySelector('.deleteCookie').addEventListener('click', deleteCookie);

/**
 * Exemple function to update a cookie
 * @param e
 */
function updateCookie(e){
    e.preventDefault();

    CookieManager.set( 'demoCookie', 'cookie modified', 60 );
}
document.querySelector('.updateCookie').addEventListener('click', updateCookie);

/**
 * Exemple function to show a cookie
 * @param e
 */
function showCookie(e){
    e.preventDefault();

    let cookie = CookieManager.get('demoCookie');
    if( cookie === null ){
        alert('Cookie does not exist');
    }
    else{
        alert('Cookie content is : '+cookie);
    }
}
document.querySelector('.showCookie').addEventListener('click', showCookie);