# wc-pwa

Build-less web component based PWA App Shell with router example, works in Chrome

```
npm install
node index.js && open http://localhost:9080/
```

  - index.js - node.js web server to serve static assets and incept the app shell when needed
  - index.html - basic app shell with app-router component that switches pages
  - scripts
    - shadow-render.js - a shim(ish) for common rendering across shadow DOM and non-shadow DOM browsers
    - router.js - the app-router and app-route web components
    - ps-anchor.js - an upgrading web component to make local router calls for <a/> tags
    - product-name.js - a simple web component that outputs the productName attribute given
  - css
    - main.css - only colors the header, body and footer to show the app shell concept
  - pages
    - home-page.html - <template> based home page body content
    - not-found-page.html - default page for when the router doesn't know what to do
      - TODO - just have the router execute the request back to the server instead of serving this
    - page-2.html - another template page
    - product-name.html - shim html page to define the <product-name> component via <script> tag
