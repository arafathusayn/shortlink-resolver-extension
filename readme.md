# Shortlink Resolver - Web Extension

It navigates to the redirected URL without requesting the URL-shortener service directly from the browser.

## Motivation

It can unblock any URL-shortener service (eg. Bit.ly) without using VPN or Proxy.

## Installation

- Edit 2 lines in [config.js](./config.js) file for adding URL-shortener services & the resolver API endpoint like this:

```js
const services = ["https://bit.ly/*"]; // eg. all Bit.ly links

const resolverUrl = "https://<your own api>.workers.dev/"; // Resolver API Endpoint
```

- You can use any API endpoint for the resolver. [This example](https://gist.github.com/arafathusayn/c4bc491319489d734093fab651c69139) shows how to do it with [Cloudflare Workers](https://workers.cloudflare.com/).

- Finally, to install the extension in your browser, use Developer Mode ([Guide](https://stackoverflow.com/questions/24577024/install-chrome-extension-form-outside-the-chrome-web-store))

