const imageGrid = document.getElementById("imageGrid");
const imageURL =
  "https://cdn2.vectorstock.com/i/1000x1000/55/81/square-blank-picture-frame-template-vector-20905581.jpg";

const imageData = [
  {
    src: "images/New_York_10_27_2023.jpeg",
    caption: "16:15 EST" + "\n" + "10.27.23 " + "\n" + " New York",
  },
  {
    src: "images/img_1.png",
    caption: "22:18 CET" + "\n" + "10.28.23 " + "\n" + " Bonn",
  },
  {
    src: "images/img-2.jpeg",
    caption: "18:02 PST" + "\n" + "10.28.23 " + "\n" + " Malibu",
  },
  {
    src: "images/Amsterdam_10_29_2023.jpeg",
    caption: "15:15 CET" + "\n" + "10.29.23 " + "\n" + " Amsterdam",
  },
  {
    src: "images/Amsterdam_10_30_2023.jpeg",
    caption: "21:13 CET" + "\n" + "10.30.23 " + "\n" + " Amsterdam",
  },
  {
    src: "images/British_Columbia_10_30_2023.jpeg",
    caption: "20:00 PDT" + "\n" + "10.30.23 " + "\n" + " British Columbia",
  },
  {
    src: "images/Delhi_10_30_2023.jpeg",
    caption: "09:42 IST" + "\n" + "10.30.23 " + "\n" + " Delhi",
  },
  {
    src: "images/British_Columbia_10_31_2023.jpeg",
    caption: "23:20 PDT" + "\n" + "10.31.23" + "\n" + "  British Columbia",
  },
  {
    src: "images/Delhi_10_31_2023.jpeg",
    caption: "15:15 IST" + "\n" + "10.31.23 " + "\n" + " Delhi",
  },
  {
    src: "images/img-3.png",
    caption: "07:10 EST" + "\n" + "10.31.23 " + "\n" + " New York",
  },
  {
    src: "images/img-4.jpg",
    caption: "08:20 CET" + "\n" + "10.31.23 " + "\n" + " Verona",
  },
  {
    src: "images/img-5.JPG",
    caption: "09:12 CET" + "\n" + "11.01.23 " + "\n" + " Verona",
  },
  {
    src: "images/img-6.jpeg",
    caption: "22:10 CET" + "\n" + "11.02.23 " + "\n" + " Bern",
  },
  {
    src: "images/img-7.JPG",
    caption: "09:57 CET" + "\n" + "11.02.23 " + "\n" + " Verona",
  },
  {
    src: "images/img-8.JPG",
    caption: "15:21 CET" + "\n" + "11.02.23 " + "\n" + " Bern",
  },
  {
    src: "images/img-9.JPG",
    caption: "23:28 CET" + "\n" + "11.03.23 " + "\n" + " Zurich",
  },
  {
    src: "images/img-10.jpg",
    caption: "02:42 CET" + "\n" + "11.03.23 " + "\n" + " Amsterdam",
  },
  {
    src: "images/img-11.JPG",
    caption: "15:02 GMT" + "\n" + "11.04.23 " + "\n" + " London",
  },
  {
    src: "images/img-12.JPG",
    caption: "20:28 CET" + "\n" + "11.04.23 " + "\n" + " Amsterdam",
  },
  {
    src: "images/img-13.JPG",
    caption: "11:53 CET" + "\n" + "11.04.23 " + "\n" + " Amsterdam",
  },
  {
    src: "images/img-14.JPG",
    caption: "09:11 EST" + "\n" + "11.04.23 " + "\n" + " New York",
  },
];

imageData.forEach((data) => {
  const imageItem = document.createElement("div");
  imageItem.classList.add("image-item");

  const image = document.createElement("img");
  image.src = data.src;

  const caption = document.createElement("div");
  caption.classList.add("image-caption");
  caption.innerText = data.caption;

  imageItem.appendChild(image);
  imageItem.appendChild(caption);
  imageGrid.appendChild(imageItem);
});

document.addEventListener("DOMContentLoaded", function () {
  const backgroundContainer = document.getElementById("background-container");

  setTimeout(function () {
    backgroundContainer.remove();
  }, 10000);

  const buttonTwo = document.querySelector(".upload-button-two");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  buttonTwo.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  const buttonOne = document.querySelector(".upload-button-one");
  const uploadPopup = document.getElementById("uploadPopup");
  const closeUploadPopup = document.getElementById("closeUploadPopup");

  buttonOne.addEventListener("click", () => {
    uploadPopup.style.display = "block";
  });

  closeUploadPopup.addEventListener("click", () => {
    uploadPopup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === uploadPopup) {
      uploadPopup.style.display = "none";
    }
  });

  const imageUpload = document.getElementById("imageUpload");
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const text3 = document.getElementById("text3");
  const submitUpload = document.getElementById("submitUpload");

  buttonOne.addEventListener("click", () => {
    uploadPopup.style.display = "block";
  });

  closeUploadPopup.addEventListener("click", () => {
    uploadPopup.style.display = "none";
  });

  submitUpload.addEventListener("click", () => {
    const imageFile = imageUpload.files[0];
    const userText1 = text1.value;
    const userText2 = text2.value;
    const userText3 = text3.value;

    if (imageFile) {
      const newImageData = {
        src: `images/${imageFile.name}`,
        caption: `${userText1}\n${userText2}\n${userText3}`,
      };
      imageData.push(newImageData);

      uploadPopup.style.display = "none";

      imageUpload.value = "";
      text1.value = "";
      text2.value = "";
      text3.value = "";

      const imageItem = document.createElement("div");
      imageItem.classList.add("image-item");

      const image = document.createElement("img");
      image.src = newImageData.src;

      const caption = document.createElement("div");
      caption.classList.add("image-caption");
      caption.innerText = newImageData.caption;

      imageItem.appendChild(image);
      imageItem.appendChild(caption);
      imageGrid.appendChild(imageItem);
    } else {
      alert("Please select an image to upload.");
    }
  });
});
