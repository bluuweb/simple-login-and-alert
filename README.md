# Simple Form

## Requerimientos

1. Crea dos componentes Login y Alert, estos componentes deben ser utilizados en App.jsx.
2. El componente Login:
   - debe tener un formulario con un campo de email y otro para la contraseña. (utiliza dos state (email y password) para guardar los valores de los campos y relacionalos con el evento onChange)
   - debe tener un botón para procesar el formulario, este botón debe estar deshabilitado mientras los campos email y contraseña estén vacíos. (puedes utilizar disabled y validar los campos con trim()).
   - utiliza el evento onSubmit para procesar el formulario.
3. El componente Alert:
   - utiliza los props para mostrar un mensaje de error o de éxito.
   - opcionalmente puedes utilizar otro props para cambiar el color de la alerta (success o danger) según corresponda.
4. Lleva tus conocimientos al siguiente nivel:
   - Al procesar el formulario, debes mostrar el componente Alert con su mensaje de error o de éxito (opcionalmente con su color correspondiente).
   - Como recordatorio, debes tener un state en el componente App que almacene el mensaje de error o de éxito. y pasar mediante props al componente Alert y Login.
