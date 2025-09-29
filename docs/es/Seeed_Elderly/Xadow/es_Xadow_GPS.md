---
description: Xadow - GPS
title: Xadow - GPS
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_GPS
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Xadow_gps.jpg)

Xadow GPS es un módulo receptor GNSS OEM, que incluye el Fastrax IT530M y una pequeña antena de parche cerámico de 12mm cuadrados. El módulo de bajo consumo emite una serie de datos en formato NMEA estándar que proporciona posición, información de satélites y tiempo, etc. Este módulo se puede conectar fácilmente directamente a la placa principal Xadow para mostrar y registrar la información mencionada anteriormente. Cuenta con capacidad de adquisición y seguimiento de señales débiles, lo que lo convierte en una excelente opción para proyectos de navegación.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-GPS-p-1600.html)

## Especificaciones
---
- Voltaje de funcionamiento: 5.0 VDC
- Canales: 99/33 (búsqueda/seguimiento)
- Sensibilidad de navegación: -165dBm
- Sensibilidad de seguimiento: -148 dBm
- Tiempo hasta la primera fijación (adquisición fría): 23s
- Tiempo hasta la primera fijación (adquisición tibia): 23s
- Tiempo hasta la primera fijación (adquisición caliente): 1s
- Tasa de actualización: 1 Hz (configurable hasta 10 Hz)
- Protocolo de datos: NMEA-0183 rev. 3.01
- Modo de comunicación: UART
- Velocidad de baudios por defecto: 115200 b/s
- Temperatura de funcionamiento: -40°C ~+85°C
- Dimensiones: 25.43mm x 20.35mm

## Demostración
---
Hay un ejemplo que muestra cómo leer datos del GPS usando puerto serie por software y los envía de vuelta por el puerto serie.

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/IMG_4200.JPG)

:::note
Cuando conectes Xadow GPS a la placa principal Xadow, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
:::
```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
}

void loop()
{
    for(;;)
    {
        // copy from virtual serial line to uart and vice versa
   /*
    */
        if (Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if (Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- Abre el monitor serie, puedes ver:

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_serial_monitor.jpg)

Ahí está toda la información sobre el protocolo de comunicación NMEA 0183. De hecho, solo necesitamos extraer los datos de localización, otros pueden ser ignorados. Los datos $GPRMC son útiles para nosotros, ahora analicemos su significado detallado:

$GPRMC,091308.000,A,2235.1683,N,11356.3607,E,0.37,259.79,050813,,,A*6E

- 091308.000－－significa Tiempo Medio de Greenwich (la hora mundial estándar) 09:13:8 am. La hora estándar en Beijing está ocho horas adelante del Tiempo Medio de Greenwich, así que la hora de Beijing es 5:13 pm.
- A－－significa que los datos son válidos, Si la letra es V, significa que los datos $GPRMC son válidos.
- 2235.1683,N－－Latitud 22.351683 grados.
- 11356.3607,E－－longitud este 113.563607 grados.
- 0.37 -- significa velocidad de movimiento.
- 259.79－－significa dirección de movimiento. el norte es 0 grados, este es 90 grados, sur es 180 grados, oeste es 270 grados.
- 050813－－significa 5 de agosto de 2013.

**También podemos observar estos datos usando u-center.**
- Descarga [u-center](https://www.u-blox.com/en/product/u-center-windows) e instálalo en tu computadora.
- Haz clic en Receiver - > Port y selecciona el puerto COM que está usando la placa principal Xadow. Si tienes abierto el monitor serie del IDE de Arduino, por favor ciérralo.
- Haz clic en Receiver -> Baudrate y asegúrate de que 9600 esté seleccionado.
- Haz clic en View -> Text Console y deberías obtener una ventana que transmitirá datos NMEA como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_u-_center.jpg)

- La parte derecha en la imagen de arriba es Posición del Satélite, Posición Mundial, Brújula, Reloj. Puedes hacer clic en View -> Docking Windows y seleccionar las ventanas que quieras ver.


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Xadow GPS](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip)
- [Esquema de Xadow GPS en PDF](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_in_Schematic.pdf)
- [Hoja de datos Fastrax IT530M](https://files.seeedstudio.com/wiki/Xadow_GPS/res/IT530M_DataSheet.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>