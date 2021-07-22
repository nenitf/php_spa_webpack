# poc_php_spa_webpack

Estudo da implementação de uma SPA em páginas PHP.

## Estudo guiado

1. Clone o projeto ``git clone git@github.com:nenitf/poc_php_spa_webpack.git``
1. Acesse a pasta criada ``cd poc_php_spa_webpack``
1. Acesse o projeto pretendido ``cd app_???``
1. Instale as dependências de javascript ``npm i``
1. Inicie o servidor ``php -S localhost:8888``
1. Em outro terminal, inicie o ambiente de desenvolvimento frontend ``npm start``
1. Acesse `localhost:8888` ou `localhost:8888/router`
1. Modifique os arquivos dentro de `resources/js`
1. Recarregue a página e veja a modificação

## O que usar desse projeto

- Copie `package.json` por inteiro
- Copie `webpack.config.js` e mude os arquivos lidos em `entry` conforme sua necessidade
    - Caso queira, mude a convenção do *output*, cujo salva como `public/bundles/[entryName].[hashBuild].js`
- Copie o `.gitignore` cujo não versiona os *outputs*
- Crie uma estratégia de chamar os *outputs*, como feito em `assetJs()` no arquivo `bootstrap.php`
    - ``<script src="<?=assetJs('homeApp')?>"></script>``

## Explicações

1) *Resources* são transpilados para javascript que o browser entenda (com `npm start` ou `npm run build`)
    > Interpreta cada *entrypoint* especificado e converte para um *output* com *hash*
2) Após a transpilação, é criada a classe `WebpackBuiltFiles` em `assets-manifest.php` que conhece o nome dos arquivos sem o *hash*
3) Quando for feita uma requisição, `index.php` importa o arquivo javascript pelo nome sem o *hash*, cujo é traduzido pela classe `WebpackBuiltFiles`

## Conclusões

- PROS:
    - Processo de build de assets permite transpilação para compatibilidade de browsers e minificação
    - Utilização de spa, cujo facilita a manutenção de grandes páginas com muita interação
    - Resolve o [problema](https://www.keycdn.com/support/what-is-cache-busting) de quando e como atualizar o cache do browser: atualizando os nomes dos arquivos com novos hashes a cada *build*

- CONS:
    - Adiciona um processo a mais de build no deploy, juntamente com suas dependências (node, npm, webpack e plugins)

## Thanks

- [Webpack workflow](https://stackoverflow.com/a/43476629/9881278)
- [Assets management](https://stackoverflow.com/a/57810590/9881278)
- [React + Typescript + Webpack](https://www.carlrippon.com/creating-react-and-typescript-apps-with-webpack/)
