export default function getImgUrl(imageName) {
  var images = require.context("../assets/", false, /\.png$/);
  return images("./" + imageName + ".png");
}
