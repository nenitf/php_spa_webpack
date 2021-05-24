<!--<link rel="manifest" href="/public/js/bundles/manifest.json">-->
<?php
require 'app.php';

echo "Está no index";
?>

<div id="app"></div>
<!-- https://stackoverflow.com/a/43476629/9881278 -->
<!-- https://stackoverflow.com/a/57810590/9881278 -->
<!-- https://www.npmjs.com/package/webpack-php-manifest -->
<!--<script src="/public/js/bundles/homeApp.js"></script>-->

<script src="<?=assetJs('homeApp')?>"></script>
