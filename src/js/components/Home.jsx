import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Home() {
  const [color, setColor] = useState("red");

  const lightStyle = (lightColor) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: lightColor,
    opacity: color === lightColor ? 1 : 0.3, //aqui esta como la logica de que si esa condicion se cumple, entonces la opacidad sera 1 haciendo uso de el operador ternario y se vera brillante y si no entonces 0.3 que es igual a una opacidad baja y se veran apagados los demas.
    cursor: "pointer", // para que se vea como una manita cuando se pase sobre los colores.
    boxShadow: color === lightColor ? `0 0 20px 5px ${lightColor}` : "none", // esto es similar pero ahora con sombra-brillo, si color green es igual a green entonces se aplica la sombra con brillo por ejemplo.
    transition: "opacity 0.3s, box-shadow 0.3s",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "120px", backgroundColor: "black", padding: "20px", borderRadius: "20px" }}>
      <div
        style={lightStyle("red")}
        onClick={() => setColor("red")}
      ></div>
      <div
        style={lightStyle("yellow")}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        style={lightStyle("green")}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
}

export default Home;