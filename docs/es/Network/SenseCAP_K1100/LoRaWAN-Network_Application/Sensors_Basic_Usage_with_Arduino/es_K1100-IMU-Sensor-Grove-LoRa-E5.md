---
description: Wio Terminal Sensor IMU
title: Wio Terminal Sensor IMU
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100-IMU-Sensor-Grove-LoRa-E5
last_update:
  date: 1/12/2023
  author: shuxu hu
---
# Wio Terminal Sensor IMU

En esta sección, detallaremos cómo funcionan los sensores, cómo obtener datos del sensor usando Wio Terminal y cómo enviar los datos usando Wio Terminal & Grove - Wio-E5.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Datos</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y Humedad del Aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y Temp. del Suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Principio de Funcionamiento de los Sensores

En esta sección necesitamos aprender a usar el sensor IMU integrado en el Wio Terminal.

El sensor de aceleración LIS3DHTR es un sensor piezoeléctrico, que convierte la aceleración del objeto a medir en el cambio del voltaje de la unidad sensora, y luego convierte el valor del cambio de la unidad sensora en un valor de voltaje a través de un circuito de conversión, seguido de la amplificación correspondiente de la señal y el proceso de filtrado para procesar la cantidad analógica en una señal de salida adecuada y estable, en cuyo momento la señal de salida es un valor de voltaje, y finalmente se convierte en una señal digital a través de un convertidor ADC.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" /></div>

Para más información sobre el uso de sensores IMU su referencia [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-IMU-Overview/).

## Materiales Requeridos

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Conexión

En esta rutina, necesitamos conectarnos a una puerta de enlace LoRa® cercana con la ayuda del Grove LoRa® E5. Necesitamos configurar el puerto Grove en el lado derecho del Wio Terminal como un puerto serie suave para recibir comandos AT.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

:::note
¿Por qué no usar el puerto Grove de la izquierda?
> La interfaz Grove de la izquierda es capaz de IIC, y usamos la interfaz IIC para la mayoría de sensores, por lo que mantenerla es una mejor solución.
:::

### Preparación del software

**Paso 1.** Necesitas instalar un software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Inicia la aplicación Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Añade Wio Terminal al IDE de Arduino.

Abre tu IDE de Arduino, haz clic en `File > Preferences`, y copia la siguiente url a Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Haz clic en `Tools > Board > Board Manager` y busca **Wio Terminal** en el Administrador de Placas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto

Necesitarás seleccionar la entrada en el menú `Tools > Board` que corresponda a tu Arduino. Selecciona el **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serie de la placa Wio Terminal desde el menú `Tools -> Port`. Es probable que sea COM3 o superior (COM1 y COM2 generalmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Wio Terminal y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

:::tip
 Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`.

 Si no puedes subir el sketch, principalmente es porque Arduino IDE no pudo poner el Wio Terminal en modo bootloader. (Porque el MCU se detuvo o tu programa está manejando USB) La solución es poner tu Wio Terminal en modo bootloader manualmente.
:::
 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Paso 5.** Descarga la biblioteca Grove - Wio-E5

Visita los repositorios de [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) y descarga todo el repositorio a tu unidad local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 6.** Añadir bibliotecas al Arduino IDE

Ahora, la biblioteca del Acelerómetro Digital de 3 Ejes puede instalarse en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch -> Include Library -> Add .ZIP Library`, y elige el archivo `Disk91_LoRaE5` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obtener el valor del sensor IMU integrado del Wio Terminal

**Paso 1.** Descarga la biblioteca de código IMU

Visita los repositorios de [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master) y descarga todo el repositorio a tu unidad local.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Añadir bibliotecas al Arduino IDE

Ahora, la biblioteca del Acelerómetro Digital de 3 Ejes puede instalarse en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch -> Include Library -> Add .ZIP Library`, y elige el archivo `Seeed_Arduino_LIS3DHTR` que acabas de descargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Paso 3.** Obtener datos de 3 ejes del sensor IMU

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositorio demuestra cómo usar el sensor IMU integrado como un componente en Wio Terminal. Usando las funciones **getAccelerationX()**, **getAccelerationY()**, y **getAccelerationZ()** de la biblioteca, puedes obtener directamente los desplazamientos del eje X, eje Y y eje Z del sensor IMU. Estos tres valores pueden ser números flotantes positivos o negativos.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;
 
void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);
 
  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
}
 
void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();
 
  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

Abre el monitor serie del IDE de Arduino y selecciona la velocidad de baudios como 115200 y observa el resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/138.png" /></div>

## Enviar datos a través de Grove - Wio-E5

Combinamos el código anterior de Grove - Wio-E5 para conectar a la red LoRa®. Usando el comando AT es posible enviar el valor del sensor IMU a la red LoRa®.

Como sabemos del código en la sección anterior para obtener el valor del sensor IMU, los valores del sensor IMU son tres números flotantes separados que pueden tener valores tanto positivos como negativos, y son precisos hasta dos decimales.

Debido a las limitaciones del envío de datos, primero necesitamos resolver el problema de convertir números flotantes a enteros en el lado del envío para asegurar que los datos enviados sean un entero, por lo que multiplicamos todos los datos de los tres ejes por 100.

De esta manera, determinamos el contenido, tamaño y formato de los datos a enviar a través del comando AT. Podríamos también configurar un arreglo lo suficientemente grande, almacenar las cadenas que necesitamos enviar en el arreglo, y finalmente usar la función **send_sync()** para enviar el arreglo.

El pseudocódigo para la idea anterior es aproximadamente el siguiente.

```c
  ......
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  int x = x_values*100;
  int y = y_values*100;
  int z = z_values*100;

  static uint8_t data[6] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(x, y, z, data);

  if ( lorae5.send_sync(              //Sending the sensor values out
        8,                            // LoRaWan Port
        data,                         // data array
        sizeof(data),                 // size of the data
        false,                        // we are not expecting a ack
        7,                            // Spread Factor
        14                            // Tx Power in dBm
       ) 
  )
  ......
```

El resto de lo que necesitamos hacer es usar la función `begin()` para inicializar Grove - Wio-E5 y la función `setup()` para configurar la información del triplete de Grove - Wio-E5. Cuando enviamos un mensaje de datos usando la función `send_sync()`, intentaremos unirnos a LoRaWAN® al mismo tiempo, y una vez que tenga éxito, los datos se enviarán y se devolverá información como la intensidad de la señal y la dirección.

El ejemplo de código completo se puede encontrar [aquí](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
No recomendamos que subas el código ahora para ver los resultados, porque en este punto aún no has configurado Helium/TTN y obtendrás un resultado de "Join failed". Recomendamos que subas este código después de haber completado el capítulo [Conectando a Helium](https://wiki.seeedstudio.com/es/Connecting-to-Helium/) o [Conectando a TTN](https://wiki.seeedstudio.com/es/Connecting-to-TTN/) para completar el proceso completo de envío de datos.
:::
Una vez que hayas experimentado y entendido cómo funciona el sensor IMU y el formato de datos, por favor continúa con el siguiente paso del tutorial para unirte a LoRaWAN®.

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Sección Helium</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introducción a Helium</strong><br /><br />En este capítulo, presentaremos los controles de la consola de Helium que usamos para obtener una primera impresión de la consola de Helium.<br /><br /><a href="https://wiki.seeedstudio.com/es/Helium-Introduction">Ir al capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando a Helium</strong><br /><br />Esta sección describe cómo configurar Helium para que los datos del sensor puedan ser subidos exitosamente y mostrados en Helium.<br /><br /><a href="https://wiki.seeedstudio.com/es/Connecting-to-Helium">Ir al capítulo &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Sección TTN</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introducción a TTN</strong><br /><br />En este capítulo, presentaremos los controles de la consola de TTN que usamos para obtener una primera impresión de la consola de TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/es/TTN-Introduction">Ir al capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando a TTN</strong><br /><br />Esta sección describe cómo configurar TTN para que los datos del sensor puedan ser subidos exitosamente y mostrados en TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/es/Connecting-to-TTN">Ir al capítulo &gt;</a></td>
    </tr>
  </tbody></table>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaración

- La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.
- LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
