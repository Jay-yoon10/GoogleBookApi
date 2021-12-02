const bookList = document.getElementById("book");
const createBookGrid = (bookArray) => {
    return bookArray.map((book) => {
        const divElement = document.createElement("div");
        bookList.appendChild(divElement);
        divElement.className = "book--container__cards";

        const imgElement = document.createElement("img");
        const bookImgURL = `https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api`;
        imgElement.src = bookImgURL;
        divElement.appendChild(imgElement);

        const titleElement = document.createElement("h3");
        divElement.appendChild(titleElement);
        titleElement.innerHTML = `${book.volumeInfo.title}`;

        const authorElement = document.createElement("p");
        authorElement.className = "book--container__authors";
        divElement.appendChild(authorElement);
        authorElement.innerHTML = `by ${book.volumeInfo.publisher}`;

        // Modal button----------------------------------

        const btnElement = document.createElement("button");
        btnElement.type = "submit";
        btnElement.innerText = "More Info";
        btnElement.className = `trigger b${book.id}`;
        divElement.appendChild(btnElement);

        const modalDivWindow = document.createElement("div");
        modalDivWindow.className = `c${book.id} modal`;
        divElement.appendChild(modalDivWindow);

        const modalWrap = document.createElement("div");
        modalWrap.className = "modal-content";
        modalDivWindow.appendChild(modalWrap);

        const modalClose = document.createElement("span");
        modalClose.className = "close-button";
        modalClose.innerText = "x";
        modalWrap.appendChild(modalClose);

        const modalContent = document.createElement("div");
        modalContent.innerText = "More Information";
        modalWrap.appendChild(modalContent);

        const desElement = document.createElement("p");
        modalWrap.appendChild(desElement);
        const bookDescription = `${book.volumeInfo.description}`;
        desElement.id = "modal--para";
        desElement.innerHTML = bookDescription;

        const modalMoreInfoDiv = document.createElement("div");
        modalWrap.appendChild(modalMoreInfoDiv);

        const modalMoreInfoLink = document.createElement("a");
        modalMoreInfoLink.href = `${book.volumeInfo.infoLink}`;
        modalMoreInfoLink.innerHTML = "Please Click me for More Info!";
        modalMoreInfoDiv.appendChild(modalMoreInfoLink);

        const modalContentPara = document.createElement("p");
        const bookPubDate = `${book.volumeInfo.publishedDate}`;
        modalContentPara.innerHTML = `Published Date: ${bookPubDate}`;
        modalContent.appendChild(modalContentPara);

        const modal = document.querySelector(`.c${book.id}`);
        const trigger = document.querySelector(".trigger");
        const closeButton = document.querySelector(".close-button");

        trigger.addEventListener("click", toggleModal);
        closeButton.addEventListener("click", removeToggleModal);
        window.addEventListener("click", windowOnClick);

        function toggleModal() {
            console.log(book);
            // return modal.forEach((modal) => modal.classList.toggle("show"));
            return modal.classList.toggle("modal--show");
        }
        function removeToggleModal(event) {
            return modal.classList.remove("modal--show");
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                removeToggleModal();
            }
        }

        return bookList;
        // Create one div
        // Inside each div
        // Create an heading for title
        // Create a para for desciption
        // Create a para for authors
        // Create an image
        // Create a button for more
        // This button should have everything it needs to open and close a modal
    });
};

export { createBookGrid };
