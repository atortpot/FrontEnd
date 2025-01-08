import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries";

const BookList = () => {
    const [title, setTitle] = useState("");
    const { data, loading, error } = useQuery(GET_BOOKS, {
        variables: { title },
    });

    if (loading) return <p>Cargando libros...</p>;
    if (error) return <p>Error al cargar libros</p>;

    return (
        <div>
            <h2>Lista de Libros</h2>
            <input
                type="text"
                placeholder="Buscar libros por título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => setTitle(title)}>Buscar</button>
            <ul>
                {data.books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.titulo}</strong> - Disponibilidad:{" "}
                        {book.disponibilidad ? "Disponible" : "No Disponible"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;