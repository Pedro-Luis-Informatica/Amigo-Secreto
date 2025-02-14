# Sorteo de Amigo Secreto

Este es un programa en JavaScript que permite registrar nombres de amigos y realizar un sorteo aleatorio para elegir un Amigo Secreto.

## Funcionalidad

### 1. Agregar Amigos

- Los nombres ingresados se almacenan en una lista.
- No se permiten nombres vacíos.
- Se evita registrar el mismo amigo más de una vez.
- Los nombres se convierten automáticamente a mayúsculas.

### 2. Mostrar Lista de Amigos

- Se genera una lista dinámica con los amigos registrados.
- La lista se actualiza en tiempo real cada vez que se agrega un amigo.

### 3. Sortear Amigo Secreto

- Se selecciona aleatoriamente un nombre de la lista.
- Si la lista está vacía, muestra un mensaje de error.
- El nombre sorteado se muestra en pantalla.

## Estructura del Código

### Variables Principales

- `amigos`: Array que almacena la lista de nombres.
- `inputAmigo`: Campo de entrada para escribir el nombre.
- `listaAmigos`: Contenedor donde se muestra la lista de amigos registrados.
- `amigoSorteado`: Contenedor donde se muestra el resultado del sorteo.

### Funciones

- **`agregarAmigo()`**: Agrega un nombre a la lista, valida duplicados y actualiza la vista.
- **`mostrarAmigos()`**: Muestra la lista de amigos en pantalla.
- **`sortearAmigo()`**: Realiza el sorteo y muestra el resultado.

## Cómo Usarlo

1. Ingresa un nombre en el campo de texto.
2. Presiona el botón "Agregar" para registrarlo.
3. Una vez agregados todos los amigos, presiona "Sortear" para elegir un Amigo Secreto.
4. El nombre sorteado se mostrará en pantalla.
