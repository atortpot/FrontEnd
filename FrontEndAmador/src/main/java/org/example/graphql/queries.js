import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    query GetBooks($title: String) {
        books(title: $title) {
            id
            titulo
            autorId
            categoriaId
            disponibilidad
        }
    }
`;