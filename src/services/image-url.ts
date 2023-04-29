"https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg";
const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
