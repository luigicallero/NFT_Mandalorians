# Art Engine

Create generative art by using the canvas api and node js. Before you use the generation engine, make sure you have node.js and yarn installed.

## Installation

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://github.com/luigicallero/NFT_Mandalorian_Helmets.git
```

Go to the root of your folder and run this command if you have yarn installed.

```sh
yarn install
```

Alternatively you can run this command if you have node installed.

```sh
npm install
```

## Configuration

Create your different layers as folders in the 'layers' directory, and add all the layer assets in these directories. You can name the assets anything as long as it has a rarity weight attached in the file name like so: `example element#70.png`. You can optionally change the delimiter `#` to anything you would like to use in the variable `rarityDelimiter` in the `src/config.js` file.

Once you have all your layers, go into `src/config.js` and update the `layerConfigurations` objects `layersOrder` array to be your layer folders name in order of the back layer to the front layer.

_Example:_ If you were creating a portrait design, you might have a background, then a head, a mouth, eyes, eyewear, and then headwear, so your `layersOrder` would look something like this:

```js
const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Head" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Eyeswear" },
      { name: "Headwear" },
    ],
  },
];
```

The `name` of each layer object represents the name of the folder (in `/layers/`) that the images reside in.

Optionally you can now add multiple different `layerConfigurations` to your collection. Each configuration can be unique and have different layer orders, use the same layers or introduce new ones. This gives the artist flexibility when it comes to fine tuning their collections to their needs.

_Example:_ If you were creating a portrait design, you might have a background, then a head, a mouth, eyes, eyewear, and then headwear and you want to create a new race or just simple re-order the layers or even introduce new layers, then you're `layerConfigurations` and `layersOrder` would look something like this:

```js
const layerConfigurations = [
  {
    // Creates up to 50 artworks
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Eyeswear" },
      { name: "Headwear" },
    ],
  },
  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Eyeswear" },
      { name: "Headwear" },
      { name: "AlienHeadwear" },
    ],
  },
];
```

Then optionally, update your `format` size, ie the outputted image size, and the `growEditionSizeTo` on each `layerConfigurations` object, which is the amount of variation outputted.

If you want to play around with different blending modes, you can add a `blend: MODE.colorBurn` field to the layersOrder object. If you need a layers to have a different opacity then you can add the `opacity: 0.7` field to the layersOrder object as well. Both the `blend: MODE.colorBurn` and `opacity: 0.7` can be addes on the same layer if you want to.

Here is an example on how you can play around with both filter fields:

```js
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color", blend: MODE.colorBurn },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid", blend: MODE.overlay, opacity: 0.7 },
      { name: "Top lid", opacity: 0.7 },
    ],
  },
];
```

Here is a list of the different blending modes that you can optionally use.

```js
const MODE = {
  sourceOver: "source-over",
  sourceIn: "source-in",
  sourceOut: "source-out",
  sourceAtop: "source-out",
  destinationOver: "destination-over",
  destinationIn: "destination-in",
  destinationOut: "destination-out",
  destinationAtop: "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  colorDodge: "color-dodge",
  colorBurn: "color-burn",
  hardLight: "hard-light",
  softLight: "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity",
};
```
## Generate the images
When you are all ready, run the following command and your outputted art will be in the `build/images` directory and the json in the `build/json` directory:

```sh
npm run build
```

or

```sh
node index.js
```

The program will output all the images in the `build/images` directory along with the metadata files in the `build/json` directory. Each collection will have a `_metadata.json` file that consists of all the metadata in the collection inside the `build/json` directory. The `build/json` folder also will contain all the single json files that represent each image file. The single json file of a image will look something like this:

```json
{
  "dna": "d956cdf4e460508b5ff90c21974124f68d6edc34",
  "name": "#1",
  "description": "This is the description of your NFT project",
  "image": "https://hashlips/nft/1.png",
  "edition": 1,
  "date": 1731990799975,
  "attributes": [
    { "trait_type": "Background", "value": "Black" },
    { "trait_type": "Eyeball", "value": "Red" },
    { "trait_type": "Eye color", "value": "Yellow" },
    { "trait_type": "Iris", "value": "Small" },
    { "trait_type": "Shine", "value": "Shapes" },
    { "trait_type": "Bottom lid", "value": "Low" },
    { "trait_type": "Top lid", "value": "Middle" }
  ],
  "compiler": "HashLips Art Engine"
}
```

That's it, you're done.

### Printing rarity data

To see the percentages of each attribute across your collection, run:

```sh
node utils/rarityData.js
```

The output will look something like this:

```sh
Trait type: Bottom lid
{ trait: 'High', chance: '20', occurrence: '40' }
{ trait: 'Low', chance: '40', occurrence: '60' }
{ trait: 'Middle', chance: '40', occurrence: '0' }

Trait type: Top lid
{ trait: 'High', chance: '30', occurrence: '20' }
{ trait: 'Low', chance: '20', occurrence: '40' }
{ trait: 'Middle', chance: '50', occurrence: '40' }
```


### Generate a preview image

Create a preview image collage of your collection, run:

```sh
node utils/createPreviewCollage.js
```

#
## NFT Section

### IPFS upload of images via Pinata

Log into Pinata (https://app.pinata.cloud/signin)

Upload folder "build/images" and name it "100_images" or something similar (up to 1GB is free)

Pin folder (usually is done by default) and copy CID for the folder

### Updating baseUri for IPFS

Paste CID in this line of the "src/config.js" file:
```sh
const baseUri = "ipfs://QmPgzZPxsHn4igYXbZFG6K3NMtW4dqAgdUmkbRdmPGdESY";
```

To update the baseUri simply run:

```sh
node utils/updateBaseUri.js
```

### IPFS upload of metadata via Pinata

Log into Pinata (https://app.pinata.cloud/signin)

Upload folder "build/json" and name it "100_metadata" or something similar (up to 1GB is free)

Pin folder (usually is done by default) and copy CID for the folder

This CID is the one that goes to the blockchain.

### Deploy NFT collection in Testnet (mumbai)

Copy metadata CID in this line of "migrations/2_NFT_migration.js" file:
```sh
const TokenBaseURI = 'ipfs://QmcZ3rmu2WTwdSkXQbShU3AcCsezJtSosP7SHTiCq9RryX/';
```

Update the amount of NFTs you want to mint from your collection during deployment :
```sh
const InitialMint = 50;
```

Deploy NFT contract to mumbai tesnet and copy the resulted contract address:
```sh
truffle migrate --reset --network mumbai -f 2
```
Where "--reset" forces to compile again and "-f 2" points to the migration file we just updated

If you face any error like:
```sh 
Error: PollingBlockTracker - encountered an error while attempting to update latest block 
```
try with a different RPC on "truffle-config.js" file.


Sample NFT contract deployed in Mumbai: 0x004029f3f7B677AbC32913372f0dc307B7E8f7B4

### Check NFT collection in Opensea Testnet

Log into Opensea Testnet (https://testnets.opensea.io/) and connect with your metamask using the account used to deploy the NFT smart contract

On the Search bar paste the contract address generated on previous step and select your collection.

Opensea will automatically show your NFTs with all the images and metadata stored in IPFS.


### Deploy NFT collection in Production (Polygon)

Update the amount of NFTs you want to mint from your collection during deployment :
```sh
const InitialMint = 10;
```

Deploy NFT contract to mumbai tesnet and copy the resulted contract address:
```sh
truffle migrate --reset --network polygon -f 2
```
Where "--reset" forces to compile again and "-f 2" points to the migration file we just updated

If you face any error like:
```sh 
Error: PollingBlockTracker - encountered an error while attempting to update latest block 
```
try with a different RPC on "truffle-config.js" file.


Sample NFT contract deployed in Mumbai: 0x004029f3f7B677AbC32913372f0dc307B7E8f7B4

### Check NFT collection in Opensea Testnet

Log into Opensea Testnet (https://testnets.opensea.io/) and connect with your metamask using the account used to deploy the NFT smart contract

On the Search bar paste the contract address generated on previous step and select your collection.

Opensea will automatically show your NFTs with all the images and metadata stored in IPFS.