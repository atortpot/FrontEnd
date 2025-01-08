import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
    mutation CreateReservation($usuarioId: String!, $libroId: String!) {
        createReservation(usuarioId: $usuarioId, libroId: $libroId) {
            id
            estado
            fechaReserva
        }
    }
`;