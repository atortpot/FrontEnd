import React from "react";
import BookList from "./components/BookList";
import ReservationForm from "./components/ReservationForm";

const App = () => {
    return (
        <div>
            <h1>Biblioteca Online</h1>
            <BookList />
            <ReservationForm />
        </div>
    );
};

export default App;