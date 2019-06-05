/**
 * Ajax
 * Return JSON
 */

const common ={ 

    ajaxRquest: (url, callback = () => {}, callbackError = () => {} ) => {
        fetch(url)
        .then(result => { if (!result.ok) throw Error('Not Exists'); return result.json() } )
        .then( result => {callback(result)} )
        .catch( error => {callbackError(error)} );
    }
};

export default common;