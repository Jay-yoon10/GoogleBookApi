const bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
const getBookList = async (searchInputTxt) => {
    const response = await fetch(`${bookURL}${searchInputTxt}`);
    const data = await response.json();
    const bookArray = await data.items;
    return bookArray;
};

export { bookURL, getBookList };
