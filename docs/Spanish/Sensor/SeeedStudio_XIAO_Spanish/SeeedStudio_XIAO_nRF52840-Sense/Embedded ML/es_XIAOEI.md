---
description: Motion Recognition based on Edge Impulse
title: Reconocimiento de Movimiento basado en Edge Impusle
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAOEI
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Introducción a Edge Impulse con XIAO nRF52840 Sense de Seeed Studio 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

¡Bienvenido a este wiki de inicio rápido sobre el uso de Edge Impulse con el Seeed Studio XIAO nRF52840 Sense! En esta guía, exploraremos cómo utilizar el sensor IMU integrado para detectar el movimiento humano y clasificar diferentes acciones. Ya seas un desarrollador experimentado o estés comenzando, este tutorial te proporcionará los conocimientos y habilidades necesarios para empezar a trabajar con Edge Impulse en la placa XIAO nRF52840 Sense. ¡Así que, vamos a comenzar!

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Comenzando

En este wiki, te mostraremos cómo utilizar el acelerómetro del Seeed Studio XIAO nRF52840 Sense junto con Edge Impulse para habilitar el reconocimiento de movimiento. Los códigos que presentamos aquí son compatibles con la última versión de las placas Seeed nRF52.

> En aplicaciones de IA embebida, recomendamos encarecidamente utilizar la "Biblioteca de Placas Seeed nrf52 habilitada para mbed".

### Hardware

En este wiki, necesitamos preparar los siguientes materiales:

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Batería Li-po (702025)
- [Grove - Pantalla OLED 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- Cables Dupont o cables Grove
- Carcasa impresa en 3D
- Fibra plástica guía de luz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**Configuración del Hardware**

- **Paso 1**. Retira la base Grove de la Grove - Pantalla OLED 0.66" con un soldador.
- **Paso 2**. Usa unas cortadoras de cables para procesar los cables DuPont a una longitud de aproximadamente 3 cm y expón los cables internos unos 2 mm en ambos extremos.
- **Paso 3**. Pasa la fibra a través del pequeño agujero en la parte frontal y coloca el extremo en el LED.

- **Paso 4**. Solda el Seeed Studio XIAO nRF52840 Sense con los demás elementos de acuerdo con el diagrama a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::note
    Será mejor si usas adhesivo termofusible para reforzar las soldaduras.
:::

- **Paso 5**. Ensambla todos los componentes:

  1. Pasa la fibra a través del pequeño agujero en la parte frontal de la carcasa.
  2. Monta la pantalla en la ubicación fija.
  3. Coloca la batería entre el Seeed Studio XIAO nRF52840 y la pantalla.
  4. Maneja los cables con cuidado.
  5. Coloca el extremo de la fibra plástica guía de luz en la luz RGB del Seeed Studio XIAO nRF52840 y corta el exceso.
  6. Ensambla la carcasa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

Ensamblado:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### Software

Las bibliotecas requeridas se enumeran a continuación. Se recomienda encarecidamente usar los códigos aquí para verificar si el hardware está funcionando correctamente. Si tienes problemas para instalar la biblioteca, consulta [aquí](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

Para configurar el Seeed Studio XIAO nRF52840 Sense en Edge Impulse, necesitarás instalar el siguiente software:

1. [Node.js v12](https://nodejs.org/en/) o superior.
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. La CLI de Edge Impulse y un monitor serie. Instálalos abriendo el símbolo del sistema o la terminal y ejecutando:

```sh
npm install -g edge-impulse-cli 
```

:::note
¿Problemas con la instalación de CLI? Por favor consulta [Instalación y Solución de Problemas](https://docs.edgeimpulse.com/docs/cli-installation) para mayor referencia.
:::

## Conectando a Edge Impulse

Con todo el software listo, es hora de conectar la placa de desarrollo a Edge Impulse.

- **Paso 1.** Conecta el Seeed Studio XIAO nRF52840 Sense a tu computadora mediante un cable USB Tipo-C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Crea un nuevo proyecto en [Edge Impulse](https://studio.edgeimpulse.com/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Elige "Datos del acelerómetro" y haz clic en "¡Empecemos!".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>


## Adqusición de Datos y Entrenamiento

:::note
En este paso, estamos tratando de recopilar los "datos del acelerómetro" del sensor IMU integrado en el Seeed Studio XIAO nRF52840 Sense para construir un conjunto de datos y luego entrenar el modelo con la plataforma Edge Impulse. 
:::

- **Paso 4.** Sube el sketch de "Datos en crudo del acelerómetro" al Seeed Studio XIAO nRF52840 Sense.

[Descargar la biblioteca Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

Abre el Arduino IDE, navega a `Sketch > Include Library > Add .ZIP Library...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

Sube los códigos a continuación y abre el **Monitor Serie**.

```cpp
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

¡Ahora verás los datos del acelerómetro y el giroscopio mostrados uno tras otro en el monitor serie como se muestra a continuación!

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU Raw" width={800} height="auto" /></p>


- **Paso 5.** Ejecuta el comando en tu `terminal`, `cmd` o `powershell` para iniciarlo.

```
edge-impulse-data-forwarder
```

- **Paso 6.** Necesitamos usar la CLI para conectar el Seeed Studio XIAO nRF52840 Sense con Edge Impulse. Primero, inicia sesión en tu cuenta y elige tu proyecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

Nombra el acelerómetro y el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **Paso 7.** Conecta el XIAO nRF52840 Sense a Edge Impulse

Ve a la página de "Adquisición de datos" en Edge Impulse, el resultado debe ser similar a esto si la conexión es exitosa. Puedes ver el dispositivo "Seeed Studio XIAO nRF52840 Sense" mostrado a la derecha de la página.

- **Paso 8.** Selecciona el sensor como "3 ejes". Nombra tus etiquetas como `arriba` y `abajo`, modifica la longitud de la muestra (ms.) a 20000 y haz clic en comenzar a muestrear.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 9.** Balancea el Seeed Studio XIAO nRF52840 Sense hacia arriba y hacia abajo y mantiene el movimiento durante 20 segundos. Puedes ver que la adquisición aparece de esta manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 10.** Divide los datos haciendo clic en los datos en crudo en la esquina superior derecha y elige "Dividir muestra". Haz clic en +Agregar segmento y luego haz clic en el gráfico. Repite esto más de 20 veces para agregar segmentos. Haz clic en "Dividir" y verás los datos de la muestra, cada uno de 1 segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **Paso 11.** Repite **el Paso 8** y **el Paso 9** y etiqueta los datos con un nombre diferente para hacer clic en diferentes datos de movimiento, como `izquierda` y `derecha`, `horario`, `antihorario`, y así sucesivamente. El ejemplo proporcionado está clasificando arriba y abajo, izquierda y derecha, y círculo. Puedes cambiarlo según lo que desees.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::note
En el Paso 9, el tiempo de división es de 1 segundo, lo que significa que debes realizar al menos un movimiento de arriba y abajo en un segundo en el Paso 8. De lo contrario, los resultados no serán precisos. Mientras tanto, puedes ajustar el tiempo de división según tu propia velocidad de movimiento.
:::

## Construcción de un modelo de aprendizaje automático

- **Paso 12.** Rebalancea el conjunto de datos. Haz clic en **Dashboard** y desplázate hacia abajo para encontrar **Realizar división de entrenamiento/prueba**.

Haz clic en "Realizar división de entrenamiento/prueba", selecciona Sí y confirma.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **Paso 13.** Crear Impulse

Haz clic en **Crear impulse** -> Agregar un bloque de procesamiento -> Elige **Análisis espectral** -> Agregar un bloque de aprendizaje -> Elige **Clasificación (Keras)** -> Guardar Impulse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **Paso 14.** Características espectrales

Haz clic y configura.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en **Características espectrales** -> Desplázate hacia abajo para hacer clic en **Guardar parámetros** -> Haz clic en **Generar características**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

La página de salida debería ser así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **Paso 15.** Entrenando tu modelo

Haz clic en **Clasificador NN** -> Haz clic en **Iniciar entrenamiento** -> Elige **No optimizado (float32)**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::note
La precisión del modelo de entrenamiento es muy importante para el resultado final. Si los resultados de salida de tu entrenamiento son tan bajos como menos del 65%, te recomendamos entrenar más veces.
:::

## Desplegar en Seeed Studio XIAO nRF52840 Sense

- **Paso 16.** Prueba del modelo

Haz clic en **Prueba del modelo** -> Haz clic en **Clasificar todo**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::note
Si tu precisión es baja, puedes revisar tu conjunto de datos aumentando el conjunto de entrenamiento y extendiendo el tiempo de muestra.
:::

- **Paso 17.** Construir la biblioteca de Arduino

Haz clic en **Despliegue** -> Haz clic en **Biblioteca de Arduino** -> Haz clic en **Construir** -> Descarga el archivo .ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **Paso 18.** El nombre del archivo .ZIP es muy importante, se configura por defecto con el nombre de tu proyecto de Edge Impulse. Como en este caso, el nombre del proyecto es "XIAO-BLE-gestures_inferencing". Selecciona el archivo y **agrega el archivo ".ZIP" a tus bibliotecas de Arduino**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **Paso 19.** Descarga el código [aquí](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino). Cambia el nombre de tu archivo de encabezado por el nombre del tuyo y súbelo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **Paso 20.** Mueve o sostén el Seeed Studio XIAO nRF52840 Sense y verifica los resultados:

Haz clic en el monitor en la esquina superior derecha de Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

Cuando mueves el Seeed Studio XIAO nRF52840 Sense en la dirección **izquierda y derecha**:

El monitor mostrará algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

Y en el display algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

Cuando mueves el Seeed Studio XIAO nRF52840 Sense en la dirección **arriba y abajo**:

El monitor mostrará algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

Y en el display:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

Cuando **sostienes** el Seeed Studio XIAO nRF52840 Sense en el estado de reposo:

El monitor mostrará algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

Y en el display:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

¡Felicidades! Has llegado al final del proyecto. Se te anima a probar más direcciones y verificar cuál ofrece el mejor resultado.

## Recursos

- [Archivo del estuche Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

## Soporte técnico y discusión de productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
