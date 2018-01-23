/**
 * Social Links
 *
 * This is a class that automagically generates the social sharing links based
 * on what's on the page via svgs
 *
 * @license MIT
 * @version 2.0.0
 * @author Izzy Skye
 */
// Helper
import Helper from './dependencies/Helper';

// Social Services
import ServiceFacebook from './service/Facebook';
import ServiceTwitter from './service/Twitter';
import ServiceLinkedIn from './service/LinkedIn';
import ServiceGooglePlus from './service/GooglePlus';
import ServicePrint from './service/Print';
import ServiceEmail from './service/Email';
import ServiceTelephone from './service/Telephone';

export default class SocialLinks {
    constructor(wrapper, opts = {}){
        if(wrapper instanceof HTMLElement){
            this.wrapper = wrapper;
        } else {
            this.wrapper = document.querySelector(wrapper);
        }
        
        this.params = {
            url: window.location.href,
            title: opts.title || this.constructor.getTitle(),
            text: opts.text || this.constructor.getFirstParagraph(),
            telephone: opts.telephone || null,
            email: opts.email || null
        };
        
        this.getServices();
        
        this.linkPopup = this.linkPopup.bind(this);
    }
    
    /**
     * Get the services and format them
     *
     * @returns {*|{}}
     */
    getServices(){
        let services = [
            ServiceFacebook.serviceMap,
            ServiceTwitter.serviceMap,
            ServiceLinkedIn.serviceMap,
            ServiceGooglePlus.serviceMap,
            ServicePrint.serviceMap,
            ServiceEmail.serviceMap,
            ServiceTelephone.serviceMap
        ];
        
        let formatted = services.reduce((total, currentItem) => {
            total[currentItem.name] = currentItem;
            
            return total;
        }, {});
        
        this.services = Object.assign(formatted);
    }
    
    /**
     * Reorder the services after an order property has been changed
     */
    reorderServices(){
        this.services = Object.keys(this.services)
            .sort((a, b) => this.services[a].order - this.services[b].order)
            .reduce((total, key) => {
                total[key] = this.services[key];
                
                return total;
            }, {});
    }
    
    /**
     * Render the links inside the wrapper
     */
    renderLinks(){
        this.reorderServices();
        
        for(let service in this.services){
            if(this.services.hasOwnProperty(service)){
                if(!this.services[service].enabled){
                    continue;
                }
                
                let link = this.buildLink(this.services[service].class);
                
                this.wrapper.appendChild(link);
                
                if(this.services[service].name === 'print'){
                    link.addEventListener('click', e => {
                        e.preventDefault();
                        
                        window.print();
                        
                        return false;
                    });
                }
    
                if(['print', 'email', 'telephone'].indexOf(this.services[service].name) === -1){
                    link.addEventListener('click', this.linkPopup, true);
                }
            }
        }
    }
    
    /**
     * Build the link
     *
     * @param opts
     * @returns {HTMLAnchorElement}
     */
    buildLink(opts){
        let link = document.createElement('a');
        
        let url = opts.base_url;
        
        if(opts.serviceMap.name === 'email'){
            url += this.params.email;
        } else if(opts.serviceMap.name === 'telephone') {
            url += this.params.telephone;
        } else {
            url += Helper.transform_params(opts.shareParams(this.params))
        }
        
        // Attributes
        link.className = opts.serviceMap.name;
        link.setAttribute('rel', 'external nofollow');
        link.setAttribute('href', url);
    
        if(['print', 'email', 'telephone'].indexOf(opts.serviceMap.name) === -1){
            link.setAttribute('target', '_blank');
        }
        
        // Add the svg as html
        link.innerHTML = opts.svg;
        
        return link;
    }
    
    /**
     * The event to make a popup window instead of navigating away
     *
     * @param e
     * @returns {boolean}
     */
    linkPopup(e){
        e.stopPropagation();
        e.preventDefault();
        
        let popupConfig = {
            width: 550,
            height: 420,
            top: (screen.availHeight - 500) / 2,
            left: (screen.availWidth - 500) / 2,
            location: 0,
            menubar: 0,
            toolbar: 0,
            status: 0,
            scrollbars: 1,
            resizable: 1
        };
        
        let reduced = Object.keys(popupConfig).reduce((total, key, i) => {
            total += `${key}=${popupConfig[key]}`;
            
            if(i < popupConfig.length - 1){
                total += ',';
            }
            
            return total;
        });
        
        let popup = window.open(
            e.currentTarget.getAttribute('href'),
            'social sharing',
            reduced
        );
        
        return false;
    }
    
    /**
     * Get the h1 of the page falling back on the title
     *
     * @returns {string}
     */
    static getTitle(){
        let element = document.querySelector('h1');
        
        if(!(element instanceof HTMLElement)){
            let title = document.querySelector('title');
            
            if(!(title instanceof HTMLElement)){
                return '';
            }
            
            element = title;
        }
        
        return Helper.excerptify(element.innerText);
    }
    
    /**
     * Get the first paragraph of text
     *
     * @returns {string}
     */
    static getFirstParagraph(){
        let firstParagraph = document.querySelector('p');
        
        if(!(firstParagraph instanceof HTMLElement)){
            return '';
        }
        
        return Helper.excerptify(firstParagraph.innerText);
    }
}
