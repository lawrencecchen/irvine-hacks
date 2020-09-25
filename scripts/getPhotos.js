const fs = require("fs");
const sizeOf = require("image-size")
const { calculate } = require("image-aspect-ratio");

const directory = "../src/media/event"

const photos = [];

fs.readdirSync(directory).forEach((file, index) => {
  console.log(`import Photo${index} from "../media/event/${file}"`)
  // const { width, height } = sizeOf(`${directory}/${file}`);
  // const aspectRatio = calculate(width, height, 6, 6)
  // console.log(file, aspectRatio.width, aspectRatio.height);

  // const photo = {
  //   src: `Photo${index}`,
  //   width: aspectRatio.width,
  //   height: aspectRatio.height
  // }

  // photos.push(photo)
})

// console.log(photos)
