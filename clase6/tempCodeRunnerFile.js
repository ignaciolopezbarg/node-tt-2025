mismo ejemplo usando axios:
// import axios from "axios"; para usar en la consola del navegador traje axios con un cdn
// Node.js sabe resolver módulos desde node_modules.
// Navegador no sabe. Para usar axios en navegador hay que:
// Usar un bundler (Vite, Webpack, Parcel, etc.) que empaquete los módulos.
// O usar la versión CDN de axios (<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>).
// Por eso, en Node.js funciona, pero en navegador da error.