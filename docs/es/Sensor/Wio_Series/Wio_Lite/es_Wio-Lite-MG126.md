---
title: Wio Lite MG126
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Lite-MG126/
slug: /es/Wio-Lite-MG126
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Wio-Lite-MG126-wiki.jpg)

Wio Lite MG126 es una placa de desarrollo rentable basada en SAMD21 con el módulo Bluetooth MG126 integrado. SAM D21 es un microcontrolador basado en ARM Cortex-M0+ y el MG126 es un módulo transceptor Bluetooth de modo único de 2.4GHz. Al igual que el Wio Lite W600, esta placa también es compatible con Arduino zero (utiliza el mismo Arduino Core SAM D21) y tiene el mismo factor de forma compatible con la serie Adafruit Feather.

Exponemos los pines de E/S de 3.3V del SAM D21, el chip SAM D21 tiene ricos recursos de E/S, incluyendo 14 pines digitales, 6 pines analógicos, 1 puerto UART, 1 puerto I2C y 1 puerto ICSP. Cada vez más placas en Seeed utilizan interfaces tipo C para suministrar energía y transmitir datos, y lo mismo ocurre con el Wio Lite MG126. Además, hay un puerto de batería Li-Po JST2.0, puedes usar una batería Li-Po de 3.5V o 4.2V para alimentar esta placa.

Ahora, hablemos del núcleo Bluetooth, el MG126. MG126 es un transceptor RF BLE de 2.4GHz con registros configurables por software, motor de manejo de paquetes integrado. Puede funcionar con ultra bajo consumo. La velocidad de datos por aire Bluetooth del MG126 es de 1Mbps y el MG126 puede comunicarse con el núcleo Arduino a una velocidad de 4Mbps a través de la interfaz SPI.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Compatible con Arduino Zero/ Compatible con Adafruit Feather
- Operación en banda ISM de 2.4GHz con espaciado de canal de 2MHz
- Velocidad de datos por aire de 1Mbps
- Ultra bajo consumo

## Especificaciones

|Parámetro|Valor|
|---|--------|
|**Controlador Principal**||
|Microcontrolador|SAM D21|
|Pines de E/S Digitales|14|
|Canales de Entrada Analógica|6|
|Corriente DC por Pin de E/S|40 mA|
|Voltaje de Entrada de E/S|3.3 V|
|SRAM|32 KB|
|Flash|256 KB|
|Frecuencia Máxima de CPU|48 MHz|
|**Bluetooth**||
|Núcleo Bluetooth|MG126|
|Banda de Frecuencia|2.4GHz ISM|
|Velocidad de Datos|Velocidad de datos por aire de 1Mbps|
|Comunicación con MCU|SPI (Máx. 4Mbps)|
|Transmisor|Potencia de salida programable: -28 ~ +4 dBm sin un PA RF externo 20mA a potencia de salida de 0dBm|
|Receptor|Filtros de canal integrados -85 dBm de sensibilidad Ganancia LNA programable|
|Antena|Antena PCB integrada|
|Distancia Máxima de Conexión Bluetooth|10 m|
|**Otros**||
|Puerto de Entrada de Energía|USB Tipo C Batería Lipo JST2.0|
|Voltaje de Operación|USB 5V Batería 4.2 V|
|Fusible recuperable|Corriente de protección 1A|
|Corriente de Carga de Batería|400 mA|

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Hardware-overview.jpg)

:::tip
    - La antena PCB no debe estar blindada por metal cuando esté montada, de lo contrario causará la atenuación de la señal Bluetooth;
    - Los terminales positivo y negativo de la batería están indicados en la parte posterior del módulo. Está estrictamente prohibido invertir los terminales positivo y negativo de la batería.
:::

## Primeros Pasos

Antes de comenzar, por favor descarga la aplicación **nRF Connect** desde Google/Apple Store. **nRF Connect** es compatible con las funciones estándar del protocolo Bluetooth, todos los ejemplos están probados basándose en esta aplicación.

## Hardware

**Materiales requeridos**

- Wio Lite Mg126 x1
- Computadora x1
- Cable USB tipo C x1
- Jumper x1

:::tip
        Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [Seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecta el Wio Lite MG126 a tu computadora a través del cable USB.

## Software

### Paso 1. Necesitas Instalar un Software de Arduino

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
    Si el Software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

### Paso 2. Agregar la Placa Wio Lite MG126 al IDE de Arduino

Abre tu IDE de Arduino, haz clic en **File > Preferences**, y copia la siguiente URL a Additional Boards Manager URLs

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

Haz clic en **Tools > Board > Board Manager**. Busca la placa por nombre, simplemente busca la palabra clave `Seeeduino_Wio_Lite_MG126` e instala la placa correspondiente.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-2.jpg)

### Paso 3. Selecciona tu placa y puerto

Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponda a tu Arduino.
Seleccionando el **Wio Lite MG126**.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-4.jpg)

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

:::caution
        Puede que no encuentres los ejemplos del MG126 en la pestaña **File > Examples** antes de seleccionar la placa Wio Lite MG126. Cuando selecciones la placa, los ejemplos aparecerán aquí.
:::

### Paso 4. Abre la demostración

Descarga la [Librería MG126](https://github.com/Seeed-Studio/Seeed_Arduino_MG126) desde Seeed Github. Luego consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
Haz clic en **File > Examples >Seeeduino Wio Lite MG126 >analog_output**.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-5.png)

Puedes encontrar 7 demostraciones en esta carpeta. Las demostraciones `button`/`get_bat_vol` no usan la librería bluetooth, y el resto sí.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-6.jpg)

|Nombre de Demo|Función|DeviceInfo|
|-----|-----|----|
|analog_output|El valor analógico en la placa de desarrollo se obtiene vía Bluetooth y se muestra en la aplicación móvil.|Wio_BLE_Analog|
|button|Presiona el botón de usuario integrado e imprime en el monitor serie.||
|echo_ble|Servidor de eco Bluetooth, es decir, el teléfono móvil recibe los datos enviados por la placa de desarrollo.|Wio_Lite_BLE|
|get_bat_vol|Obtiene el voltaje de la batería externa||
|rgb_led_matrix_control|Controla la [Grove - RGB LED Matrix](https://www.seeedstudio.com/Grove-RGB-LED-Matrix-w-Driver.html) para mostrar|Wio_Led_matrix|
|serial_transparent_transmission|Los datos del puerto serie se transmiten de forma transparente, es decir, los datos enviados por el teléfono móvil se enviarán desde el puerto serie de la placa de desarrollo, y los datos enviados al puerto serie de la placa de desarrollo se enviarán al teléfono móvil.|Wio_Lite_Serial|
|temp_humidity|obtiene la información del [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html), y la envía a tu teléfono.|Wio_BLE_T&H|

### Paso 5. Cargar el programa

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la carga es exitosa, aparecerá el mensaje "Done uploading." en la barra de estado.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
  </figure>
</div>

Cuando termine, la información **Done Uploading** aparecerá en la esquina inferior izquierda del IDE de Arduino.

### Paso 6. Usar el teléfono para conectar MG126**  

Abre la aplicación [nRF Connect](#getting-started), haz clic en **SCANNER** y busca el nombre del DeviceInfo en la página. Diferentes demos tienen diferentes DeviceInfo, y el DeviceInfo correspondiente de analog_output es `Wio_BLE_Analog`.

Por lo tanto, por favor elige `Wio_BLE_Analog` en la lista de dispositivos bluetooth. Toca **CONNECT**, luego haz clic en **Automation IO > Analog**, y se mostrará el valor del pin A0.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/ana-0.jpg)

:::caution
        Debido a la función de caché de Bluetooth, cada vez que modifiques el valor de característica de Bluetooth (es decir, descargar el ejemplo usando diferentes funciones de Bluetooth), necesitas limpiar la caché de la aplicación una vez, también necesitas reiniciar el teléfono.
:::

## Interfaz de funciones

### Interfaz de función WiFi

- 1. Clase de paquete Bluetooth

```
MG126_Ble  
```

- 2. Inicializar la pila de protocolos Bluetooth y encender Bluetooth

```
MG126_Ble .ble_init();
```

- 3. Reportar mensajes vía Bluetooth

```
sconn_notifydata();
```

Solo se listan aquí algunas interfaces comunes, y otras interfaces pueden ver el ejemplo.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivos esquemáticos Wio lite MG126](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip)

- **[PDF]** [DS-MG126-BLE-Datasheet](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/DS-MG126-BLE.pdf)

## Soporte Técnico y Discusión del Producto

si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
