
module.exports = {
    resolver: {
      assetExts: ["png", "jpg", "jpeg", "gif", "svg"], // Bloquea los archivos .webp
      sourceExts: ["js", "jsx", "ts", "tsx"], // Mantén esto si usas TypeScript
    },
    transformer: {
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
  };
  