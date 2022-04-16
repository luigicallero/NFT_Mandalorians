const { MODE } = require("./blendMode.js");
const description = "Every Helmet tells a different story and represents the story of a Mandalorian. This is the way";
const baseUri = "ipfs://QmeCtrSrbdLXUvSiwBRVxrHud3h3oqwA8ow4UriePqnkZU";

const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "background" },
      { name: "base_shadow" },
      { name: "under" },
      { name: "cape" },
      { name: "base_suits" },
      { name: "rifle" },
      { name: "globes" },
      { name: "armour"},
      { name: "suits" },
      { name: "shine" },
      { name: "shadow" },
      { name: "lens" },
      { name: "tatoo" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
};
