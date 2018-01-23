export default class Helper {
    /**
     * Transform an object of parameters into a query string
     *
     * @returns {string}
     */
    static transform_params(params){
        if(!Object.keys(params).length){
            return '';
        }
        
        return '?' + Object.keys(params).reduce(
            (a, currentParam) => {
                a.push(`${currentParam}=${encodeURIComponent(params[currentParam])}`);
                return a;
            }, []
        ).join('&');
    }
    
    /**
     * Trim text to maximum of 140 characters
     *
     * @param text {string}
     * @param length {number}
     * @returns {string}
     */
    static excerptify(text, length = 140){
        let punc = ['.','!','?',',',';',':'];
        
        if(text.length > length) {
            let spaceAt = length;
            
            if(text.indexOf(' ') > -1){
                while(spaceAt--){
                    if(text.charAt(spaceAt) === ' '){
                        break;
                    }
                }
            }
            
            let excerpt = text.substring(0, spaceAt);
            
            for (let i = punc.length - 1; i >= 0; i--) {
                if(excerpt.slice(-1) === punc[i]){
                    excerpt = excerpt.slice(0, -1);
                }
            }
            
            return excerpt.trim();
        } else {
            return text;
        }
    }
}
