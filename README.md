# Social Links
This is a library that automagically generates social sharing links and appends them to a wrapper, to have a look at which services are currently available, have a look through the [service](src/service) folder

---

## Installation
This is available as a package on npm so you can add this to your project by using npm or yarn

**npm**
```bash
npm install z-social-links
```

**yarn**
```bash
yarn add z-social-links
```

## Usage
In your main JavaScript file, import the class and then configure the builder

```javascript
import SocialLinks from 'z-social-links';

// The following params are the defaults
let social = new SocialLinks('.wrapper', {
    url: window.location.href,
    title: SocialLinks.getTitle(),
    text: SocialLinks.getFirstParagraph(),
    telephone: null,
    email: null
});

// To reorder the services, make use of their order property as follows
social.services.gplus.order = 5;

// To enable/disable services, used the enabled property
social.services.gplus.enabled = false;

// After it's been configured, call the renderLinks method
social.renderLinks();
```

### Email & Telephone
Because email and telephone use different syntax for the link, utilize the below to enable and use them

```javascript
import SocialLinks from 'z-social-links';

let social = new SocialLinks('.wrapper', {
    email: 'example@example.example',
    telephone: '01234567890'
});

// They are turned off by default
social.services.email.enabled = true;
social.services.telephone.enabled = true;

social.renderLinks();
```

---

## Building
If for some reason, you want to build the files for this library yourself (instead of using the `dist` folder), you can run the following commands to work locally with it

*Note: Don't forget to install the dev dependencies*

**Running `gulp`
```bash
gulp # This command builds the files, then watches for any changes in the src directory
gulp build # This command only builds the files
gulp watch # This command only watches the files
```
