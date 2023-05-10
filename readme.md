#Notas 1
-Se inicializa el proyecto instalando node para empezar
-Seguido abrir CMD npm init vite@latest
-Abrir la carpeta donde se encuentra el proyecto con CMD y luego escribir NPM install
-NPM run DEV para abrir servidor
-Los componentes se colocan en SRC, modulos de CSS y funciones HELPERS, ETC

#Notas 2
-No es necesario hacer el import de React from "react" en el app.jsx
-import React from 'react' es la API de react y se coloca dentro del main.jsx
-import ReactDOM from 'react-dom/client' importa todos los eventos del DOM
-import App from './App.jsx' importar app.jsx a main.jsx

#Notas 3
-Todos los componentes al finalizar deben tener un return y /> cierre al final en las etiquetas
-Siempre retornar un elemento en el nivel más alto, quiere decir que se retornara un unico elemento ejemplo un div que rodee todos los demas elementos hijos, aunque lo más recomendado es retornar un fragment <></>
-No se pueden definir funciones dentro del codigo HTML del return, pero podemos colocar {} y dentro poner codigo JS y lo tomara como codigo JS

#Notas 4
-Un componente es una función
-Extensiones utiles para desarrollar con React y automatizar
*Auto Close Tag
*Auto Complete Tag
*Auto Rename Tag
*Code snippets - React/React Native/React Hook/Styled Componentes
*Simple React Snippets
*ES7 React/Redux/GraphQl/React-Native Snippets
*CSS Peek - Para trabajar con CSS
*Tailwind CSS Intelisense
*DotENV --> Para trabajar con Node.js
*Habilitar la fuente JET Brains Mono al descargarla o to Preferences/Settings → Editor → Font
*React DevTools para trabajar con React desde Chrome o Firefox

#Notas 5
-Para trabajar con CSS se puede hacer de la manera clasica o utilizando librerias como Tailwind o Bootstrap
-npm i -D tailwindcss postcss autoprefixer (Trabajar con Tailwind como dev dependencies)
-Crear archivos de configuración de tailwind y postcss (npx tailwindcss init -p)
-Llamar @tailwind base; @tailwind components; @tailwind utility
-Instalar _Tailwind CSS IntelliSense
-Dentro de tailwind.config.js en el apartado de content ["./index.html,"./src/\*\*/_.jsx"] esto va a buscar todos los archivos en las diferentes carpetas y aplicarle estilos a todos
-Para agregar una clase de CSS dentro de los componentes de react unicamente con la palabra de className=""

#Notas 6
-Agregar dentro del HTML dentro del body la propiedad de h-screen crece toda la pantalla de arriba hasta abajo, bastante conveniente ya que todo va dentro de un div

-Propiedades de ClassName CSS:
* text-#xl: -Tamaño de letra *
* text-center: -Centro *
* mr,ml,mt,mb: Margin *
* w1-2: -Dividir 1 entre 2, 1 entre 3, para centrar
* shadow-md: -sombreado
* bg-white Color: color de background
* rounded-lg: Esquinas redondeadas
* py,px,pt,pb: Padding
* block: Display Block -> Toma todo el espacio de izquierda a derecha
* placeholder-gray-600 / placeholder-bg-red-200 --> Place Holder    

- Para aplicar media queries es por medio de el ClassName md: ejemplo = md:w-1/2=50% lg-2/5=40%  / lg=1024px
-Para poder aplicar for a un archivo HTML hay que aplicar dentro de la etiqueta forHTML="" en este caso <label forHTML="mascota"></label> <input id="mascota"> esto seleccionara el input si se da click dentro del contenido del LABEL

#Notas 7
-El State, es el estado actual de nuestra aplicación, el estado es una variable con información reelevante de app 

-import {useState} from "react"
const [total,setTotal] = useState({})
*total= Contiene el valor de la variable
*setTotal= Modificador, es la funcion que va a modificar la variable de cliente
*useState({})= Es el valor inicial de la variable, este caso como no tiene nada inicia como un objeto vacio 

-No se deben colocar despues de condicionales, ni tampoco despues de algun return
-onChange es igual a un addEventListener en JavaScript, ejemplo: onChange= 
{(e)=>{console.log(e.target.value)}} para ver que se escribe en el input en consola
{(e)=>{setNombre(e.target.value)}} para setearle el valor del input al nombre y cambie el estado
-Los eventos de React son muy similares a los de JavaScript unicamente que son cammelCase como onChange o onClick
-preventDefault, previene de las acciones por defecto como del formulario, para que no se envie cuando estamos haciendo una validación
-el estado no modifica otras variables, unicamente modifica su función asociada

#Notas 8
-Se pueden pueden usar Props para conectar los estasdos o variables de un componente a otro 
-Se puede pasar un como una prop la palabra reservada children 
<Error>Aqui va el contenido del children</Error> y se pasa al componente hijo como ({children})

#Notas 9
-useEffect siempre es un callback y se ejecuta cuando el state cambia o cuando el componente esta listo, por lo que es excelente a la hora de consultar un API o LocalStorage
-useEffect le podemos pasar una dependencia y escuchar por cambios dentro de una variable y actualizar el componente cuando el cambio suceda