---
description: Nodo LoRa con GPS AIoTs
title: Nodo LoRa con GPS AIoTs
keywords:
- Wio_terminal 
- Embedded_ML 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/AIoTs_GPS_state_tester
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Nodo LoRa con GPS AIoTs en Wio Terminal

## Introducción

El probador de estado y GPS AIoTs está basado en el desarrollo con Wio Terminal Chassis-LoRa-E5 y GNSS. Comparado con los IoTs tradicionales, tiene más concisión e inteligencia. El tradicional básicamente solo recibe algunos datos y luego ejecuta una acción de comando sin importar si los datos son correctos. Sin embargo, los AIoTs que utilizan algoritmos de redes neuronales son capaces de filtrar los datos inútiles para obtener los correctos.

En este proyecto, se utilizará un sensor acelerómetro de 3 ejes incorporado y el algoritmo de red neuronal para construir un sistema de reconocimiento inteligente. Basado en el movimiento del Wio Terminal, puede mostrarle su estado en tiempo real. Generalmente, el proyecto de ejemplo aquí incluye tres estados entrenados que son Stop (estado inactivo de WT), Turn (voltear el dispositivo WT), y Wave (tomar WT para agitar la mano). Se recomienda que vaya al sitio web de [Edge Impulse](https://www.edgeimpulse.com/) para agregar más acciones de entrenamiento.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## Características

- El dispositivo LoRa puede mostrar el DevEui, APPEui y Appkey en la primera página.
- Algoritmo de red neuronal para corregir datos
- Detecta con alta precisión el estado del Wio Terminal
- Muestra longitud, latitud y número de satélites.
- Muestra el estado de conexión del dispositivo y TTN.

## Comenzando

### Hardware

**Hardware Requerido**

En esta demostración necesitará los dispositivos listados a continuación:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal Chassis - LoRa-E5 and GNSS](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)
- [Wio Terminal Chassis - Battery (Opcional)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**Conexión de Hardware**

Se conecta a una computadora a través del cable Type-C.

![](https://files.seeedstudio.com/wiki/Alots/connectpc.jpg)

### Aprendizaje Automático con Wio Terminal

Aquí vamos a mostrarle cómo usar Wio Terminal para entrenar un modelo de Aprendizaje Automático y usarlo. El proyecto está basado en la plataforma Arduino, lo que significa que se requieren Arduino IDE y varias librerías de Arduino. Si esta es su primera vez usando el Wio terminal, recomendamos una guía para [Comenzar rápidamente con Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/).

Descargue e instálelo en su librería de Arduino:

- [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)

#### Comenzando el Entrenamiento en Edge Impulse

Primero, necesita tener su propia cuenta de Edge Impulse y luego crear un proyecto.

- **Paso 1**. Abra el [sitio web de Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), y luego registre una cuenta.

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **Paso 2**. Cree un nuevo proyecto.

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Conectando el Sitio Web con Wio Terminal

- **Paso 3**. Descargue el firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) para la preparación de la conexión.

Como sugieren las pautas de [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/):

 Haciendo doble clic hacia abajo en la parte inferior izquierda del Wio Terminal (ya conectado a su PC), verá una unidad (como `Arduino (F:)` abajo) aparecer en la computadora. Luego puede arrastrar el firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) a la unidad. Y cuando vea que la unidad desaparece, significa que el firmware ha sido programado. Ahora puede ir al sitio web para conectar Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **Paso 4**. Una vez que el firmware esté configurado, haga clic en `connect using WebUSB` para conectar el Wio Terminal al sitio web.

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

Cuando `Device`, `Label` y `Sensor` como se muestra abajo aparezcan, significa que la conexión está hecha y la adquisición de datos puede ser activada.

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### Adquisición de Datos

Ahora puede recopilar datos en Edge Impulse.

- **Paso 5**. Ingrese `Label`, `Sample length (ms.)` y haga clic en `Start sampling`

  - `Label` significa las categorías que desea clasificar.
  - `Sample length` significa el tiempo durante su muestreo.

También puede querer elegir diferentes `Sensor` o `Frequency` para ver qué sucede.

![](https://files.seeedstudio.com/wiki/Alots/Alots8.png)

Se recomienda encarecidamente que muestree los datos más de 10 veces.

![](https://files.seeedstudio.com/wiki/Alots/Alots9.png)

#### Generación del Modelo de Aprendizaje Automático

Una vez que los datos han sido recopilados, puede usarlos para entrenar su modelo ML.

- **Paso 6**. Después de muestrear los datos, haga clic en `create impulse` para procesar los datos.

![](https://files.seeedstudio.com/wiki/Alots/Alots10.png)

El bloque de procesamiento y el bloque de aprendizaje aquí seleccionados son los mismos que recomienda el sitio web. Por otro lado, sugerimos encarecidamente que elija otros para ver qué diferencia se puede hacer. Una vez que los bloques fueron configurados, haga clic en `Save Impulse` para almacenar el impulso.

![](https://files.seeedstudio.com/wiki/Alots/Alots11.png)

- **Paso 7**. Vaya a la página `Spectral features`, y luego en la parte inferior haga clic en `Save parameters`, se moverá automáticamente al lado `Generate feature`.

![](https://files.seeedstudio.com/wiki/Alots/Alots12.png)

Aquí está el lado `Generate feature`, puede ayudar a traducir sus datos a las características necesarias en Aprendizaje Automático.

![](https://files.seeedstudio.com/wiki/Alots/Alots13.png)

Haga clic en `Generate feature` y el resultado debería aparecer a la derecha:

![](https://files.seeedstudio.com/wiki/Alots/Alots15.png)

- **Paso 8**. Ve a la página `NN Classifier` para usar tus características entrenando un modelo de Machine Learning. En la parte inferior de la página, haz clic en `Start training`.

![](https://files.seeedstudio.com/wiki/Alots/Alots16.png)

La salida del entrenamiento está en el lado derecho de la página. Cuando veas la salida, significa que el modelo ha sido generado.

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

#### Despliegue del Modelo de Machine Learning

Ahora puedes desplegar tu modelo de Machine Learning en tu Wio Terminal.

- **Paso 9**. Selecciona y haz clic en la columna `Deployment` en el lado izquierdo.

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

Luego elige `Arduino Library`, en la parte inferior selecciona `build` para crear la biblioteca necesaria en tu Arduino. Automáticamente descargará un archivo zip que incluye la biblioteca de terceros.

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

El nombre de la biblioteca deseada es sobre el nombre del proyecto, lo que significa que cualquier nombre que hayas escrito para el proyecto en el **paso 2** se mostrará aquí. Puede ayudarte a encontrar el archivo correcto que necesitas.

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **Paso 10**. Descarga el archivo de [código](https://github.com/0hotpotman0/AIoTs_GPS_state_tester) desde Github y ábrelo con Arduino IDE. Cambia la biblioteca de terceros por la tuya propia como se muestra arriba y luego ejecuta el código.

![](https://files.seeedstudio.com/wiki/Alots/Alots22.png)

:::note
Debido a las diferencias entre las áreas globales, el código en el archivo debe cambiarse un poco:
:::

![](https://files.seeedstudio.com/wiki/Alots/Alots35.png)

Si conectaste el 'servidor de América', entonces no hay preocupaciones sobre el código de ejemplo, pero otros lugares deben configurarse como se muestra a continuación ('CN_470_510' significa que en China el valor debe estar en el rango de 470 a 510):

![](https://files.seeedstudio.com/wiki/Alots/Alots36.png)

Finalmente, el resultado debería ser algo como:

![](https://files.seeedstudio.com/wiki/Alots/connect1.jpg)

:::note
Si quieres saber más sobre Edge Impulse o hay algo que aún no está claro, por favor ve a [Wio Terminal Edge Impulse Getting Started](https://wiki.seeedstudio.com/es/Wio-Terminal-TinyML-EI-1/) para obtener más información.
:::

### Mostrando Datos en TheThingsNetwork a través de LoRa

Después de que entrenamos un modelo de Machine Learning y recolectamos datos, será más divertido si podemos transportar nuestros datos a las nubes. En este proyecto, podremos mostrar los datos en la plataforma [TheThingsNetwork](https://www.thethingsnetwork.org/) (nube) a través de LoRa.

**Hardware Requerido**

- Gateway

Necesitas configurar un gateway primero, permitiéndote conectar Wio Terminal y la nube TTN(TheThingsNetwork).

#### Inicio de Mostrar Datos en TheThingsNetwork

**Paso 1** Carga en el [sitio web de TTN](https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w) y crea tu cuenta, luego haz clic en `go to gateways` para configurar el dispositivo.

![](https://files.seeedstudio.com/wiki/Alots/Alots24a.png)

**Paso 2** Haz clic en `Add gateway` en la página de Gateways.

![](https://files.seeedstudio.com/wiki/Alots/Alots25.png)

Añade tu propia información del gateway:

- Owner (tu nombre)
- Gateway ID (depende del gateway)
- Gateway EUI(depende del gateway, a veces igual que gateway ID)
- Gateway name(tu elección)

![](https://files.seeedstudio.com/wiki/Alots/Alots26.png)

`Frequence plan` en las opciones de LoRaWAN depende del lugar donde vives. Antes de `Add gateway`, puedes encontrar una página que incluye algunos clusters. La elección del `Frequence Plan` y cluster debe ser la misma, lo que significa que debes elegir el área que encuentres más cercana a tu lugar.

![](https://files.seeedstudio.com/wiki/Alots/Alots27.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots27a.png)

**Paso 3** Una vez que el gateway esté configurado, ahora puedes añadir tu nodo Wio Terminal conectándolo con él en la página de Applications. Haz clic en `Add application`:

![](https://files.seeedstudio.com/wiki/Alots/Alots28.png)

Llena esta información según tu voluntad:

- Owner
- Application ID
- Application name

![](https://files.seeedstudio.com/wiki/Alots/Alots29.png)

**Paso 4** Una vez que hayas creado una aplicación, puedes ver en la parte inferior a la derecha que hay un `Add end device` que puede ayudarte a añadir el dispositivo Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots30.png)

- Selecciona **`Brand`** como **`Select Sense CAP`**
- elige **`Model`** como **`LoRa-E5`**
- Hardware Ver y Firmware Ver están configurados por defecto
- Profile(Region) es según tu ubicación(misma región que `Frequncy plan`)
- Frequency plan es el mismo que tu elección en el **Paso 2**
- AppEUI, DevEUI, y AppKey son únicos en diferentes dispositivos LoRa-E5. Puedes encontrarlos fácilmente programando un firmware [Gateway_Tester.uf2](https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2) en tu dispositivo. Como el tutorial en Edge Impulse, programar un firmware simplemente arrastra el archivo uf2 a la unidad después de que tires hacia abajo el botón izquierdo del Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots37.png)

- End Device ID se llenará automáticamente después de que ingreses el DevEUI.

![](https://files.seeedstudio.com/wiki/Alots/Alots31.png)

**Paso 5** Después de que hayas conectado el dispositivo, hay una selección de `Payload formatters` y necesitas añadir algo de código para decodificar datos(Eligiendo Formatter type como 'Javascript'):

![](https://files.seeedstudio.com/wiki/Alots/Alots32.png)

``` c++
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.Stop   = bytes[1];
    decoded.Turn   = bytes[3];
    decoded.Wave   = bytes[5];
  }
 
  return decoded;
}
```

**Paso 6** Finalmente, ve al gateway, luego haz clic en `Live data`. Puedes ver los resultados:

![](https://files.seeedstudio.com/wiki/Alots/Alots33a.png)
