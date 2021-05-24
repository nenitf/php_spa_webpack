# php_vue_webpack

## Setup

```sh
npm i
```

## Run for development

- Com dois terminais abertos:

```sh
php -S localhost:8888

npm start
```

## Build for production

```sh
npm run build
```

## Explicações

> TL;DR: A cada save ou no build final o webpack: 1) interpreta cada *entrypoint* especificado e converte para um *output* com *hash*; 2) Cria uma classe php que conhece o nome dos arquivos sem o *hash*. Ao final o php importa cada script usando a classe gerada.

## Thanks

- [Webpack workflow](https://stackoverflow.com/a/43476629/9881278)
- [Assets management](https://stackoverflow.com/a/57810590/9881278)
