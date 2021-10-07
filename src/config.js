const { MODE } = require("./blendMode.js");
const description =
  "Every Helmet tells a different story and represents the story of a Mandalorian. This is the way";
const baseUri = "ipfs://TBD";

const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Helmet Frame" },
      { name: "Helmet Eye" },
      { name: "Helmet Nose" },
      { name: "Helmet Accessory" },
      { name: "Helmet Shine" },
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