import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_RESERVATION } from "../graphql/mutations";

const ReservationForm = () => {
    const [usuarioId, setUsuarioId] = useState("");
    const [libroId, setLibroId] = useState("");
    const [createReservation] = useMutation(CREATE_RESERVATION);

    const handleReserve = async () => {
        try {
            const { data } = await createReservation({
                variables: { usuarioId, libroId },
            });
            alert(`Reserva creada con éxito: ${data.createReservation.id}`);
        } catch (err) {
            console.error(err);
            alert("Error al crear la reserva");
        }
    };

    return (
        <div>
            <h2>Reservar un Libro</h2>
            <input
                type="text"
                placeholder="ID de Usuario"
                value={usuarioId}
                onChange={(e) => setUsuarioId(e.target.value)}
            />
            <input
                type="text"
                placeholder="ID del Libro"
                value={libroId}
                onChange={(e) => setLibroId(e.target.value)}
            />
            <button onClick={handleReserve}>Reservar</button>
        </div>
    );
};

export default ReservationForm;