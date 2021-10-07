const { MODE } = require("./blendMode.js");
const description =
  "Every Helmet tells a different story and represents the story of a Mandalorian. This is the way";
const baseUri = "ipfs://TBD";

const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "1-background" },
      { name: "2-left-arm" },
      { name: "3-chest" },
      { name: "4-right-arm" },
      { name: "5-neck" },
      { name: "6-brest" },
      { name: "7-helmet" },
      { name: "8-glass" },
      { name: "9-eyes" },
      { name: "10-det-ext" },
      { name: "11-det-int" },
      { name: "12-ears" },
      { name: "13-shoulder-logo" },
      { name: "14-helmet-logo" },
      { name: "15-antena" },
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
