import { getBookList } from "./js.modules/bookList.js";
import { createBookGrid } from "./js.modules/bookGrid.js";
const searchBtn = document.getElementById("search-btn");

// const searchResult = document.getElementById("book-result");
// const bookContent = document.getElementsByClassName("book-details-content");
// const bookSearchDiv = document.getElementsByClassName("book-search");
// const bookImgURL = `https://books.google.com/books/content?${book.id}&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api`;

// function searchMode() {
//     return bookSearchDiv.classList.add("--mode");
// }
// searchBtn.addEventListener("click", searchMode);

// separated the function to api fetch + calls api fetch & render to screen
searchBtn.addEventListener("click", async () => {
    // e.preventDefault;
    const bookArray = await getBookList(
        document.getElementById("search-input").value,
    );

    createBookGrid(bookArray);

    // getBookList();
});
