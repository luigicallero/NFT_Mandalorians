const { MODE } = require("./blendMode.js");
const description =
  "Every Helmet tells a different story and represents the story of a Mandalorian. This is the way";
const baseUri = "ipfs://TBD";

const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "00-background" },
      { name: "01-base_shadow" },
      { name: "02-cape" },
      { name: "03-base_suits" },
      { name: "04-rifle" },
      { name: "05-globes" },
      { name: "06-armour" },
      { name: "07-suits" },
      { name: "08-shine" },
      { name: "09-shadow" },
      { name: "10-lens" },
      { name: "11-tatoo" },
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

const uniqueDnaTorrance = 10000;

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
