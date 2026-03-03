---
description: 5 Minutos para Desarrollar un Sensor LoRaWAN Industrial
title: 5 Minutos para Desarrollar un Sensor LoRaWAN Industrial
keywords:
- LoRaWAN
- Sensor
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/develop_an_industrial_lorawan_sensor
last_update:
  date: 9/15/2023
  author: Jessie
---

Construyamos rápidamente un sensor inalámbrico LoRaWAN de grado industrial para uso comercial directo en 5 minutos.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

Al crear prototipos para un proyecto comercial de adquisición de datos, se requiere mucho tiempo y costo para el prototipado. Por ejemplo, necesitamos hacer un sensor de pH inalámbrico para un proyecto agrícola. Necesitamos 1) Encontrar la placa de desarrollo y la sonda del sensor. 2) Escribir código. 3) Imprimir en 3D la carcasa. 4) Prueba de ensamblaje final. Para cuando completemos el prototipo, puede tomar días o incluso semanas.

Hoy, podemos usar un recolector LoRa inalámbrico, configurar sensores para conectar a una aplicación vía Bluetooth y construir un producto en cinco minutos, directamente en un proyecto comercial.

### Preparación

Preparar registrador de datos, sonda del sensor, gateway y herramientas.

1) [Registrador de datos](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html): Es un convertidor LoRaWAN que convierte sensores MODBUS RS485/Analógicos/GPIO en sensores habilitados para LoRa y por lo tanto transfiere datos a través del protocolo LoRaWAN.

2) Sonda del sensor: preparar una sonda del sensor con un cable y salida de una de las señales de RS485 / 4-20mA /0-10V / pulso/nivel. El tutorial usa un sensor ultrasónico RS485 para medición de nivel de líquido.

3) Destornillador de cruz: Usado para ensamblar la sonda del sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

4) Gateway: El sensor LoRaWAN transmite datos a un gateway LoRaWAN, que luego los transmite al servidor en la nube. Si no tienes un gateway, hay dos opciones:

**Opción 1**: Los sensores funcionan en áreas cubiertas por Helium Network (Verificar en [Helium Explorer](https://explorer.helium.com/)). Donde sea que la red helium esté disponible, puedes usar sensores para transferir datos sin comprar un gateway.
**Opción 2**: Comprar un [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).
5) Descargar la App SenseCAP Mate para configuración:

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={500} height="auto" /></p>

La preparación está completa. ¡Comencemos!

### Arquitectura de Red

Comencemos con la red LoRaWAN.

El registrador de datos convierte los datos del sensor en datos LoRa y sube los datos al gateway. El gateway sube los datos al servidor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Conectar el Sensor

1) Desarmar el Registrador de Datos.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

2) Conectar el sensor al terminal, y alimentar el sensor vía una batería incorporada.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

:::info Consejo
Si estás usando otro protocolo, como 4-20mA, por favor consulta la tabla de pines:
:::

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) Ensamblar el sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Configurar el sensor vía App

1) Abrir e iniciar sesión en la App SenseCAP.

2) Seleccionar "S2100 Data Logger" y hacer clic en "Setup" en la página de configuración.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) Presionar el botón y mantener por 3 segundos, el LED verde parpadeará a frecuencia de 1s. Luego hacer clic en "Scan" para comenzar a escanear el Bluetooth del registrador de datos.

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

4) Configurar los parámetros de lorawan y sensor (incluye comando RS485 Modbus-RTU).

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

```cpp
#########Basic Setting#############
Platform: 
    -SenseCAP for helium (use helium network)
    -SenseCAP for The Things Network (use SenseCAP gateway)
Frequency Plan: EU868 (Select this based on the frequency or region of the gateway)
Uplink Interval: 5 min
Packet Policy: 2C+1N (use the default parameter)

#########Sensor Setting#############
Protocol: RS485 Modbus RTU
Baud Rate: 9600
Modbus Address: 128 (Sensor's modbus address)
Power Type: Periodic power (Power the sensor before data collection, and power off the sensor after data collection)
Power Voltage: 5V
Sensor Warm-up Time: 100ms
Response Timeout: 100ms
Startup Time: 100ms
Measurement Number: 2 (distance and temperature)

#########Measurement1#############
Register Address: 256 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 1 (Y=Ax+B, “Y”: It is the value of Data Logger will upload.
“x”: It is the original current value.If only raw values are uploaded, set A=1 and B=0.)
FactoryB: 0
Write Strategy: None

#########Measurement2#############
Register Address: 258 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 0.1 (The final value is divided by 10)
FactoryB: 0
Write Strategy: None
```

5) Haz clic en Enviar y Prueba el sensor haciendo clic en "Measure"

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

¡La distancia y temperatura del sensor se obtienen exitosamente!

### Subir los datos al Portal SenseCAP y la App Mate

Antes de subir datos, asegúrate de que la puerta de enlace esté funcionando correctamente o tenga cobertura de red helium.

1) La App regresa a la página de inicio y desconecta la conexión Bluetooth. El registrador de datos intentará unirse a la red LoRaWAN.

Esperando unirse a la red LoRa: luz roja parpadeando de forma respiratoria
Unión exitosa a la red LoRa: LED verde parpadea rápidamente por 2s

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

2) Vincula el registrador de datos escaneando el código QR.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3) Verifica los datos en la App y el Portal (https://sensecap.seeed.cc/).

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Prueba el sensor en un entorno real

Aplicación rápida al escenario real exterior para monitoreo a largo plazo.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

En la actualidad, se ha desarrollado un sensor LoRaWAN.

¡Ven y prueba nuevas soluciones para tu proyecto!

### Recursos

[5 Minutos para Desarrollar un Sensor LoRaWAN Industrial](https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc)

[Guía de Usuario del Registrador de Datos SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)
