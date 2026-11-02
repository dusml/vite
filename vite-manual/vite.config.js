
/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import { resolve } from 'node:path';

const env = process.env.NODE_ENV;
console.log(env);


export default defineConfig({
  server:{
    host:'localhost',
    port:3000,
    cors:true,
  },
  build:{
    outDir:'docs'
  },
  css:{
    modules:{
      generateScopedName:
      env === 'development' ? "css__[local]___[hash:base64:5]" : "[hash:base64:3]"
    }
  },
  resolve:{
    alias:{"@":resolve(import.meta.dirname, "src")}
  }
})