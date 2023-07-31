init()

function init() {

  console.log("1234")

  renderGalleryPain()
}

function renderGalleryPain() {
let gallery = ""  

fetch('./assets/json/images.json')
  .then((response) => response.json())
  .then((json) => {

    let images = json

    images.data.images.forEach((image, index) => {
      gallery += `<a href="#img` + index + `"><img src="` + image.url + `"></a><a href="#" class="lightbox" id="img` + index + `"><span style="background-image: url('` + image.url + `')"></span></a>`
    })

  document.getElementById('gallery').innerHTML = gallery

  })

}
