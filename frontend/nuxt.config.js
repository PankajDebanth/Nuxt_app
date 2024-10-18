// frontend/nuxt.config.js
export default {
 head: {
   title: 'Nuxt App',
   htmlAttrs: {
     lang: 'en'
   },
   meta: [
     { charset: 'utf-8' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     { hid: 'description', name: 'description', content: 'A Nuxt.js application' }
   ],
   link: [
     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
   ]
 },
 // Enable server-side rendering
 ssr: true,
 // Global CSS
 css: [],
 // Plugins
 plugins: [],
 // Modules
 modules: [
   '@nuxtjs/axios'
 ],
 // Axios configuration
 axios: {
   baseURL: 'http://localhost:3001/users' // Adjust based on your API server
 },
}
