//const usuarios
const storedUsuarios = localStorage.getItem("usuarios");
const usuarios = storedUsuarios ? JSON.parse(storedUsuarios) : [];
const dolar = 1200;
const euro = 1293.55;
const yen = 1.91;
const libra = 342.90;
const real = 54.86;

// Constructora define clase Usuario
class Usuario {
    constructor(nombre, apellido, contrasena, dinero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasena = contrasena;
        this.dinero = dinero;
    }
}

// Función para registrar un usuario
document.getElementById("registrarBtn").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const contrasena = document.getElementById("contrasena").value;
    const dinero = parseFloat(document.getElementById("dinero").value);
    const usuario = new Usuario(nombre, apellido, contrasena, dinero);
    usuarios.unshift(usuario);
    console.log(usuarios);
    alert('El usuario se registró correctamente:\nNombre: ' + usuario.nombre + '\nApellido: ' + usuario.apellido + '\nDinero Disponible para conversión: $' + usuario.dinero);
});

// Función para convertir moneda
document.getElementById("convertirBtn").addEventListener("click", function () {
    const monedaIngresada = document.getElementById("moneda").value;
    const montoIngresado = parseFloat(document.getElementById("monto").value);

    if (isNaN(montoIngresado) || montoIngresado < 0) {
        alert('Ingrese un monto válido.');
        return;
    }

    let valorFinal;

    switch (monedaIngresada) {
        case 'dolar':
            valorFinal = montoIngresado / dolar;
            break;
        case 'euro':
            valorFinal = montoIngresado / euro;
            break;
        case 'yen':
            valorFinal = montoIngresado / yen;
            break;
        case 'libra':
            valorFinal = montoIngresado / libra;
            break;
        case 'real':
            valorFinal = montoIngresado / real;
            break;
        default:
            alert('Seleccione una de las opciones correctas');
            return;
    }

    document.getElementById("resultado").innerHTML = 'Monto ingresado: ' + montoIngresado + '\nValor en ' + monedaIngresada.charAt(0).toUpperCase() + monedaIngresada.slice(1) + ': ' + valorFinal.toFixed(2);
});

