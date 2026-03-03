---
description: Asistente de introducción
title: Asistente de introducción
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Getting_started_wizard
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Construye un Modelo de ML en 5 Minutos y Despliégalo en el Wio Terminal con Edge Impulse

## **Introducción**

Edge Impulse ha lanzado un nuevo **Asistente de Introducción** que es muy amigable para principiantes en Aprendizaje Automático. Utiliza el modelo de detección de palabras clave de pocos ejemplos que te permite grabar una oración corta, mejorando automáticamente tu conjunto de datos para darte un modelo de código abierto en menos de 5 minutos. El modelo puede ser aplicado en el Wio Terminal. En esta wiki, te mostraremos cómo usar el "asistente" y luego desplegar el modelo del asistente en el Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## **Comenzando con Edge Impulse**

Ahora vamos a introducirte a cómo lanzar el Asistente de Introducción y luego mostrarte las instrucciones.

### **Hardware**

**Hardware Requerido**

En esta demostración necesitarás los dispositivos listados a continuación:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- PC
- Micrófono para la PC
- Cable Type-C

**Conexión de Hardware**

Se conecta a una computadora a través del cable Type-C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"/></div>

### **Software**

**Hardware Requerido**

- [Arduino IDE](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/)

El proyecto está basado en la plataforma Arduino lo que significa que se requieren Arduino IDE y varias librerías de Arduino. Si esta es tu primera vez usando el Wio terminal, recomendamos una guía para rápidamente [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/).

### Inicio del Entrenamiento en Edge Impulse

Primero, necesitas tener tu propia cuenta de Edge Impulse y luego crear un proyecto.

- **Paso 1**. Abre el [sitio web de Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), y luego registra una cuenta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots1.png"/></div>

- **Paso 2**. Crea un nuevo proyecto.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png"/></div>

- **Paso 3**. Haz clic en el botón **"Launch getting started wizard"** en la parte inferior de la página "Dashboard" e inicia el asistente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"/></div>

- **Paso 4**. Sigue las instrucciones haciendo clic en el botón.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"/></div>

- **Paso 5**. Ingresa una palabra o una oración corta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"/></div>

- **Paso 6**. Grábate diciendo palabras durante 38 segundos a través del micrófono de la computadora.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"/></div>

Asegúrate de grabar claramente y recopilar suficientes datos, de lo contrario se te pedirá recopilar más.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"/></div>

Una vez que recopiles suficiente, aparecerá el bloque.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"/></div>

- **Paso 7**. Haz clic en "Next" y Edge Impulse te ayudará a mezclar otras palabras junto con ruido de fondo en tu conjunto de datos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"/></div>

Y luego el modelo puede aprender a distinguir entre tus palabras y otros sonidos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"/></div>

- **Paso 8**. Sigue las instrucciones y crea "el impulso".

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"/></div>

Puede extraer las características que pueden ser usadas para aprendizaje automático.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"/></div>

Está funcionando automáticamente, y haz clic en "Next" cuando se complete

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"/></div>

- **Paso 9**. Sigue las instrucciones y entrena una red neuronal para tu modelo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"/></div>

Continúa hasta que el modelo haya sido entrenado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"/></div>

Puedes usar el micrófono nuevamente y verificar tus resultados.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"/></div>

¡Felicitaciones por tu nuevo modelo de clasificación de palabras! Ahora podemos desplegar el modelo en nuestro Wio Terminal.

### Desplegar el Modelo de Aprendizaje Automático en el Wio Terminal

Aquí vamos a desplegar nuestro modelo en el Wio Terminal.

- **Paso 10**. Selecciona y haz clic en la columna "Deployment" a la izquierda. Luego elige "Arduino Library", en la parte inferior selecciona "build" para crear la librería necesaria en tu Arduino. Automáticamente descargará un archivo zip que incluye la librería de terceros.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Alots/Alots19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"/></div>

El nombre de la biblioteca deseada se refiere al nombre del proyecto, lo que significa que cualquier nombre que hayas escrito en el proyecto en el **paso 2** se mostrará aquí. Puede ayudarte a encontrar el archivo correcto que necesitas.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"/></div>

- **Paso 11**. Descarga el código de reconocimiento de audio [aquí](https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino) y ábrelo con Arduino IDE. Mientras tanto, es necesario agregar el archivo .zip descargado para que puedas aplicar la biblioteca de terceros.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"/></div>

Cambia el nombre de la biblioteca de terceros por el tuyo propio y las palabras que dijiste en primer lugar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"/></div>

Finalmente, puedes decir las palabras y observar si el Wio Terminal las muestra.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"/></div>
