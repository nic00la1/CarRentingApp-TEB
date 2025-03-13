import React, { useState } from "react";
import "./CarRental.css";

const cars = [
  { id: 1, name: "Tesla Model 3", location: "Łódź", price: "250 zł/dzień", image: "audi-a6.jpg" },
  { id: 2, name: "BMW 5 Series", location: "Warszawa", price: "350 zł/dzień", image: "bmw5.jpg" },
  { id: 3, name: "Audi A6", location: "Kraków", price: "400 zł/dzień", image: "tesla3.webp" }
];

export default function CarRental() {
  const [reservedCar, setReservedCar] = useState(null);

  const handleReservation = (car) => {
    setReservedCar(car);
    alert(`Zarezerwowałeś: ${car.name} w ${car.location} za ${car.price}`);
  };

  return (
    <div className="container">
      <h1>Wypożyczalnia Samochodów</h1>
      <div className="grid">
        {cars.map((car) => (
          <div key={car.id} className={`card ${reservedCar?.id === car.id ? "reserved" : ""}`}>
            <img src={require(`./photos/${car.image}`)} alt={car.name} className="car-image" />
            <h2>{car.name}</h2>
            <p>📍 {car.location}</p>
            <p>💰 {car.price}</p>
            <button onClick={() => handleReservation(car)}>Zarezerwuj</button>
          </div>
        ))}
      </div>
      {reservedCar && (
        <div className="reservation-info">
          <h2>✅ Twoja rezerwacja:</h2>
          <p><strong>{reservedCar.name}</strong> w <strong>{reservedCar.location}</strong></p>
          <p><strong>Cena: {reservedCar.price}</strong></p>
        </div>
      )}
    </div>
  );
}
