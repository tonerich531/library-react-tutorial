import React, { useState } from "react";
import Book from "../components/ui/Book.jsx";



const Books = ({ books: initialBooks }) => {
    const [books, setBooks] = useState(initialBooks)




    function filterBooks() {
        console.log('filte');
    }



    return (

        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title book__header--title">All Books</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={filterBooks}>
                                    <option value="DEFAULT" disabled >Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATINGS">Ratings</option>
                                </select>
                            </div>
                            <div className="books">
                                {books.map((book) => (
                                    <Book book={book} key={book.id} />
                                    ))
                                }
                            </div>
                        </div>                    
                    </div>
                </section>
            </main>
        </div>

    )

}


export default Books;