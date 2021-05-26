# php_vue_webpack

Estudo da implementação do [vue](https://vuejs.org/) em páginas php.

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

## Estudo guiado

1. Clone o projeto ``git clone git@github.com:nenitf/php_vue_webpack.git``
1. Acesse a pasta criada ``cd php_vue_webpack``
1. Instale as dependências de javascript ``npm i``
1. Inicie o servidor php ``php -S localhost:8888``
1. Em outro terminal, inicie o ambiente de desenvolvimento frontend ``npm start``
1. Acesse `localhost:8888` ou `localhost:8888/profissionais.php`
1. Modifique o conteúdo entre `<div></div>` do arquivo `resources/js/home/App.vue` ou `resources/js/profissionais/App.vue`
1. Recarregue a página e veja a modificação

> bônus: em `localhost:8888/rota` e `localhost:8888/rota/profissionais.php` é implementado o router

## O que usar desse projeto

- Copie `package.json` por inteiro
- Copie `webpack.config.js` e mude os arquivos lidos em `entry` conforme sua necessidade
    - Caso queira, mude a convenção do *output*, cujo salva como `public/bundles/[entryName].[hashBuild].js`
- Copie o `.gitignore` cujo não versiona os *outputs*
- Crie uma estratégia de chamar os *outputs*, como feito em `assetJs()` no arquivo `app.php`
    - ``<script src="<?=assetJs('homeApp')?>"></script>``

## Explicações

> TL;DR: A cada save ou no build final o webpack: 1) interpreta cada *entrypoint* especificado e converte para um *output* com *hash*; 2) Cria uma classe php que conhece o nome dos arquivos sem o *hash*. Ao final o php importa cada script usando a classe gerada.

## Conclusões

- PROS:
    - Processo de build de assets permite transpilação para compatibilidade de browsers e minificação
    - Utilização do vue, cujo facilita a manutenção de grandes páginas com muita interação
    - Resolve o [problema](https://www.keycdn.com/support/what-is-cache-busting) de quando e como atualizar o cache do browser: atualizando os nomes dos arquivos com novos hashes a cada *build*

- CONS:
    - Adiciona um processo a mais de build no deploy, juntamente com suas dependências (node, npm, vue, webpack e plugins)

## Thanks

- [Webpack workflow](https://stackoverflow.com/a/43476629/9881278)
- [Assets management](https://stackoverflow.com/a/57810590/9881278)
