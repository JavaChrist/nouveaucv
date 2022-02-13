//Get #pagecontnent element
let pageContent = document.getElementById("pageContent");
//get #pictInfo div
let pictInfo = document.getElementById("pictInfo");
//Define the images array
let rawImages =
  '[{"filename":"image-1.jpg"},{"filename":"image-2.jpg"},{"filename":"image-3.jpg"},{"filename":"image-4.jpg"},{"filename":"image-5.jpg"},{"filename":"image-6.jpg"}]';
let images = JSON.parse(rawImages);

//Choose a random image
let randomImg = images[Math.floor(Math.random() * images.length)];

//apply the image as the background of pageContent
pageContent.style.backgroundImage = `url(images/${randomImg.filename})`;

if (pictInfo) {
  //Empty the pictInfo div
  while (pictInfo.firstChild) {
    pictInfo.removeChild(pictInfo.firstChild);
  }
  //Create pictInfo title and add it to the Div
  let pictTitle = document.createElement("h1");
  let pictTitleContent = document.createTextNode(randomImg.name);
  pictTitle.appendChild(pictTitleContent);
  pictInfo.appendChild(pictTitle);
  //Create author and exposure P  and add them to pictInfo
  let pictauthor = document.createElement("p");
  let pictData = document.createElement("p");
  let pictAuthorContent = document.createTextNode(randomImg.author);
  let pictDataContent = document.createTextNode(randomImg.exposure);
  pictauthor.appendChild(pictAuthorContent);
  pictData.appendChild(pictDataContent);
  pictInfo.appendChild(pictauthor);
  pictInfo.appendChild(pictData);
}
