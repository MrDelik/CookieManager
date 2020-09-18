# CookieManager
CookieManager is a simple static ES6 component to deal with cookie that are accessible with javascript

## Instanciation
Like every javascript component you just need to import it. Since it's a static component no instanciation is needed
```javascript
import CookieManager from "./components/CookieManager.js";
```

## Methods
* set : return `void`
    * Parameters : name `string` value `string` maxAge `integer`
    * Create a cookie with the specified name/value and the max age in minutes
* get : return `string`|`null`
    * Parameters : name `string`
    * Get the value of a cookie by its name if it exists or it's accessible
* delete : return `void`
    * Parameters : name `string`
    * Delete a cookie by its name if it's accessible or if it exists
* getAll : return `object`
    * Paremeters : 
    * Get an object with all the cookies that are accessible
    
### Author
**Kevin Goyvaerts**
+ [http://github.com/MrDeliK](http://github.com/MrDeliK)