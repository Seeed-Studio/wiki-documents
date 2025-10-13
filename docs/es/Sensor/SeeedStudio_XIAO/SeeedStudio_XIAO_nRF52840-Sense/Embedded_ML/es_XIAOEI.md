---
description: Reconocimiento de Movimiento basado en Edge Impulse
title: Reconocimiento de Movimiento basado en Edge Impulse
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAOEI
last_update:
  date: 04/11/2023
  author: Citric
---

# Seeed Studio XIAO nRF52840 Sense Edge Impulse Guía de Inicio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

¡Bienvenido a esta guía de inicio rápido sobre el uso de Edge Impulse con Seeed Studio XIAO nRF52840 Sense! En esta guía, exploraremos cómo usar el sensor IMU integrado para detectar movimiento humano y clasificar diferentes acciones. Ya seas un desarrollador experimentado o recién estés comenzando, este tutorial te proporcionará el conocimiento y las habilidades que necesitas para empezar con Edge Impulse en la placa XIAO nRF52840 Sense. ¡Así que vamos a sumergirnos y comenzar!

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Comenzando

En esta wiki, te mostraremos cómo utilizar el acelerómetro en Seeed Studio XIAO nRF52840 Sense combinado con Edge Impulse para habilitar el reconocimiento de movimiento. Los códigos que presentamos aquí son compatibles con la última versión de Seeed nRF52 Boards.

> Cuando se trata de aplicaciones de IA embebida, recomendamos encarecidamente usar la "Librería Seeed nrf52 mbed-enabled Boards".

### Hardware

En esta wiki, necesitamos preparar los siguientes materiales:

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Batería Li-po (702025)
- [Grove - OLED Display 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- Cables Dupont o cables Grove
- Carcasa impresa en 3D
- Fibra plástica guía de luz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**Configuración del Hardware**

- **Paso 1**. Remueve la base Grove en Grove - OLED Display 0.66" con un soldador
- **Paso 2**. Usa cortadores de alambre para procesar los cables DuPont a una longitud de aproximadamente 3 cm y expone los cables internos de aproximadamente 2 mm en ambos extremos
- **Paso 3**. Pasa la fibra a través del pequeño agujero en el frente y coloca el extremo en el LED

- **Paso 4**. Solda Seeed Studio XIAO nRF52840 Sense con otros elementos según el diagrama a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::note
    Será mejor si usas adhesivo termofusible para reforzar las soldaduras.
:::

- **Paso 5**. Ensambla todos los componentes:

  1. Pasa la fibra a través del pequeño agujero en el frente de la carcasa
  2. Monta la pantalla en la ubicación fija
  3. Coloca la batería entre Seeed Studio XIAO nRF52840 y la pantalla
  4. Maneja los cables cuidadosamente
  5. Coloca el extremo de la fibra plástica guía de luz en la luz RGB de Seeed Studio XIAO nRF52840 y corta el exceso
  6. Ensambla la carcasa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

El ensamblado:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### Software

Las librerías requeridas se listan a continuación. Es altamente recomendado que uses los códigos aquí para verificar si el hardware está funcionando bien. Si tienes problemas instalando la librería, por favor consulta [aquí](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

Para configurar Seeed Studio XIAO nRF52840 Sense en Edge Impulse, necesitarás instalar el siguiente software:

1. [Node.js v12](https://nodejs.org/en/) o superior.
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. El CLI de Edge Impulse y un monitor serial. Instala abriendo el símbolo del sistema o terminal y ejecuta:

```sh
npm install -g edge-impulse-cli 
```

:::note
¿Problemas con la instalación del CLI? Por favor consulta [Instalación y solución de problemas](https://docs.edgeimpulse.com/docs/cli-installation) para más referencia.
:::

## Conectando a Edge Impulse

Con todo el software en su lugar es hora de conectar la placa de desarrollo a Edge Impulse.

- **Paso 1.** Conecta el Seeed Studio XIAO nRF52840 Sense a tu computadora mediante un cable USB Type-C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Crea un nuevo proyecto en [Edge Impulse](https://studio.edgeimpulse.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Elige "Accelerometer data" y haz clic en "Let's get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>


## Adquisición de Datos y Entrenamiento

:::note
En este paso estamos tratando de recopilar los "datos del acelerómetro" del IMU integrado del Seeed Studio XIAO nRF52840 Sense para construir un conjunto de datos y luego entrenar el modelo con la plataforma EdgeImpulse.
:::

- **Paso 4.** Sube el sketch "Accelerometer Raw Data" al Seeed Studio XIAO nRF52840 Sense.

[Descargar la Librería Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como un archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


Abre Arduino IDE, navega a `Sketch > Include Library > Add .ZIP Library...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

Sube el código de abajo y abre el **Monitor Serie**

```
// XIAO BLE Sense LSM6DS3 Accelerometer Raw Data 

#include "LSM6DS3.h"
#include "Wire.h"

//Create a instance of class LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);  //I2C device address 0x6A

#define CONVERT_G_TO_MS2 9.80665f
#define FREQUENCY_HZ 50
#define INTERVAL_MS (1000 / (FREQUENCY_HZ + 1))

static unsigned long last_interval_ms = 0;


void setup() {
  Serial.begin(115200);
  while (!Serial)
    ;

  if (myIMU.begin() != 0) {
    Serial.println("Device error");
  } else {
    Serial.println("Device OK!");
  }
}


void loop() {
  if (millis() > last_interval_ms + INTERVAL_MS) {
    last_interval_ms = millis();
    Serial.print(myIMU.readFloatAccelX() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.print(myIMU.readFloatAccelY() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.println(myIMU.readFloatAccelZ() * CONVERT_G_TO_MS2, 4);
  }
}


```

¡Ahora verás los datos del acelerómetro y giroscopio mostrados uno tras otro en el monitor serie como se muestra a continuación!

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU Raw" width={800} height="auto" /></p>


- **Paso 5.** Ejecuta el comando en tu `terminal` o `cmd` o `powershell` para iniciarlo.

```
edge-impulse-data-forwarder
```

- **Paso 6.** Necesitamos usar la CLI para conectar el Seeed Studio XIAO nRF52840 Sense con Edge Impulse. Primero, inicia sesión en tu cuenta y elige tu proyecto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

Nombra el acelerómetro y el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **Paso 7.** Conecta el XIAO nRF52840 Sense a Edge Impulse

Ve a la página "Data acquisition" de Edge Impulse, el resultado debería verse así si la conexión es exitosa. Puedes encontrar el dispositivo "Seeed Studio XIAO nRF52840 Sense" mostrado en el lado derecho de la página.


- **Paso 8.** Selecciona el sensor como "3 axes". Nombra tu etiqueta como `up` y `down`, modifica Sample length (ms.) a 20000 y haz clic en start sampling.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 9.** Balancea el Seeed Studio XIAO nRF52840 Sense hacia arriba y hacia abajo y mantén el movimiento durante 20 segundos. Puedes encontrar que la adquisición se muestra así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 10.** Divide los datos haciendo clic en la parte superior derecha de los datos sin procesar y elige "Split Sample". Haz clic en +Add Segment y luego haz clic en el gráfico. Repítelo más de 20 veces para agregar segmentos. Haz clic en Split y verás los datos de muestra cada uno por 1 segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **Paso 11.** Repite el **Paso 8.** y el **Paso 9.** y etiqueta los datos con diferentes nombres para hacer clic en diferentes datos de movimiento, como `left` y `right`, `clockwise`, `anticlockwise` y así sucesivamente. El ejemplo proporcionado está clasificando arriba y abajo, izquierda y derecha, y círculo. Puedes cambiarlo como quieras cambiarlo aquí.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::note
En el Paso 9. el tiempo de división es 1 segundo, lo que significa que al menos debes hacer un balanceo de arriba y abajo en un segundo en el Paso 8. De lo contrario, los resultados no serán precisos. Mientras tanto, puedes ajustar el tiempo de división según tu propia velocidad de movimiento.
:::

## Construyendo un modelo de aprendizaje automático

- **Paso 12.** Reequilibra el conjunto de datos, Haz clic en **Dashboard** y desplázate hacia abajo en la página para encontrar **Perform train** / **test split**

Haz clic en Perform train / test split y elige Yes y confírmalo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **Paso 13.** Crear Impulse

Haz clic en **Create impulse** -> Add a processing block -> Elige **Spectral Analysis** -> Add a learning block -> Elige **Classification (Keras)** -> Save Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **Paso 14.** Características espectrales

Haz clic y Set up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en **Spectral features** -> Desplázate hacia abajo en la página para hacer clic en Save parameters -> Haz clic en **Generate features**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

La página de salida debería verse así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **Paso 15.** Entrenando tu modelo

Haz clic en NN Classifier -> Haz clic en Start training -> Elige Unoptimized (float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::note
La precisión del modelo de entrenamiento es muy importante para el resultado final. Si tus resultados de entrenamiento de salida son tan bajos como menos del 65%, te recomendamos encarecidamente que entrenes más veces.
:::

## Desplegando en Seeed Studio XIAO nRF52840 Sense

- **Paso 16.** Prueba del modelo

Haz clic en Model testing -> Haz clic en Classify all

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::note
Si tu precisión es baja, puedes verificar tu conjunto de datos aumentando el conjunto de entrenamiento y extendiendo el tiempo de muestra
:::

- **Paso 17.** Construir biblioteca de Arduino

Haz clic en Deployment -> Haz clic en Arduino Library -> Haz clic en **Build** -> Descarga el archivo .ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **Paso 18.** El nombre del archivo .ZIP es muy importante, se configura como el nombre de tu proyecto de Edge Impulse por defecto. Como aquí el nombre del proyecto es "XIAO-BLE-gestures_inferencing". Selecciona el archivo como "Añade el archivo .ZIP" a tus bibliotecas de Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **Paso 19.** Descarga el código [aquí](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino). Cambia el nombre de tu archivo de cabecera por el nombre del tuyo propio y súbelo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **Paso 20.** Mueve o sostén el Seeed Studio XIAO nRF52840 Sense y verifica los resultados:

Haz clic en el monitor en la esquina superior derecha de Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

Cuando muevas el Seeed Studio XIAO nRF52840 Sense en la dirección **izquierda y derecha**:

El monitor mostrará algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

Y la pantalla de salida es como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

Cuando muevas el Seeed Studio XIAO nRF52840 Sense en la dirección **arriba y abajo**:

El monitor mostrará algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

Y la pantalla de salida es como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

Cuando **sostengas** el Seeed Studio XIAO nRF52840 Sense en estado inactivo:

El monitor mostrará algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

Y la pantalla de salida es como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

¡Felicitaciones! Has llegado al final del proyecto. Se te anima a que pruebes más direcciones y verifiques cuál tendrá el mejor rendimiento de salida.

## Recursos

- [Archivo de Carcasa para Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

## Soporte Técnico y Discusión de Productos

.

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
