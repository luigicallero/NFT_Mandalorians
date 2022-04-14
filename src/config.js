const { MODE } = require("./blendMode.js");
const description =
  "Every Helmet tells a different story and represents the story of a Mandalorian. This is the way";
const baseUri = "ipfs://QmPgzZPxsHn4igYXbZFG6K3NMtW4dqAgdUmkbRdmPGdESY";

const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "00-background" },
      { name: "01-base_shadow" },
      { name: "02-under" },
      { name: "03-cape" },
      { name: "04-base_suits" },
      { name: "05-rifle" },
      { name: "06-globes" },
      { name: "07-armour"},
      { name: "08-suits" },
      { name: "09-shine" },
      { name: "10-shadow" },
      { name: "11-lens" },
      { name: "12-tatoo" },
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
