<?php

require_once 'public/bundles/assets-manifest.php';

function assetFromManifest($manifestPath, $assetName)
{
    $manifestFile = file_get_contents($manifestPath);
    $manifestFile = json_decode($manifestFile, true);
    if (!isset($manifestFile[$assetName])) return $assetName;
    return $manifestFile[$assetName];
}

function bundleAsset($assetName)
{
    assetFromManifest("public/bundles/manifest.json", $assetName);
}

function asset($assetName)
{
    $filePath = assetFromManifest("public/bundles/manifest.json", $assetName) ?? $assetName;
    return $filePath;
}

function assetFromWebpackBundleClass($assetName){
    return WebpackBuiltFiles::$jsFiles[$assetName];
}

function assetJs($assetName)
{

    $filePath = assetFromWebpackBundleClass($assetName) ?? $assetName;
    return $filePath;
}
