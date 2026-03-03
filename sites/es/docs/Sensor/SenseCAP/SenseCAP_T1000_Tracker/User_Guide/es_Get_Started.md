---
description: Get_Started_with_SenseCAP_T1000_tracker
title: Inicio rápido
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 2/14/2026
  author: Janet
---


Este capítulo le guiará para configurar el SenseCAP T1000 Tracker mediante la SenseCAP Mate APP.

<div class="video-container">
<iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Guía de usuario </font></span></strong>
    </a>
</div>
<br />

:::caution note
Asegúrese de que dispone de cobertura de una red LoRaWAN, como Helium, TTN u otras redes LoRaWAN. Sin redes LoRaWAN, el dispositivo no puede enviar datos a la nube. La forma más sencilla de utilizar los rastreadores es con el `SenseCAP LoRaWAN Gateway` y la `SenseCraft app`.
:::

## Funciones del dispositivo

### Modo de trabajo

Para adaptarse a diferentes escenarios, hay varios modos de trabajo en el SenseCAP T1000 tracker, que puede elegir según sus necesidades.

|**Modo de trabajo**|**Descripción**|**Escena**|
| - | - | - |
|Modo de espera|<p>Solo se cargan paquetes de latido, que solo incluyen información de la batería. </p><p>La ubicación se puede obtener utilizando el comando de enlace descendente LoRa.</p>|Si necesita localizar el dispositivo durante mucho tiempo y el dispositivo puede funcionar durante mucho tiempo antes de cargarse, la plataforma en la nube puede emitir un comando de solicitud de ubicación para localizar el dispositivo.|
|Modo periódico|Establezca un intervalo en el que el dispositivo cargue periódicamente datos de ubicación y del sensor.|Este modo se recomienda para la mayoría de los escenarios.|
|Modo de evento|Ajusta el intervalo de carga según la temperatura, la luz y el sensor de aceleración del rastreador, incluidos evento de temperatura, evento de luz, evento de movimiento, tiempo de espera sin movimiento y evento de impacto.|Se puede utilizar en escenarios complejos, como la supervisión del transporte de artículos importantes. Pero el consumo de energía aumenta mucho.|

### Función de los sensores

El SenseCAP T1000 Tracker está equipado con 3 sensores: sensor de temperatura, sensor de luz y acelerómetro de 3 ejes.
Puede elegir habilitar o deshabilitar estos sensores:

- Apague todos los sensores, pero también puede elegir una versión sin sensor para reducir costos.
- Solo se habilitan los sensores de temperatura y luz para supervisar los datos periódicamente con bajo consumo de energía.
- Cuando la temperatura, la iluminación y el acelerómetro se utilizan como condiciones de disparo, el sensor estará siempre alimentado y el dispositivo consume mucha energía.

|**Sensor**|**Descripción**|
| - | - |
|Temperatura|<p>Este es un sensor de temperatura independiente integrado con **una precisión de ±0.5~1℃**. Cabe señalar que puede haber cierto retraso en la medición de la temperatura, porque está separado de la carcasa.</p><p>Rango: -20 a 60℃; Precisión: ± 1℃(mín 0.5℃, máx 1℃); Resolución: 0.1℃</p>|
|Luz|<p>El sensor de luz no es el valor real de lúmenes monitorizado, sino un porcentaje de la luz desde oscuro hasta brillante. Principalmente se puede utilizar para supervisión antidesmontaje y algunas monitorizaciones sensibles a la luz.</p><p>Rango: 0 a 100%, (0% es oscuro, 100% es lo más brillante)</p>|
|Acelerómetro de 3 ejes|Al configurar el valor de la aceleración, se activan el evento de movimiento y el evento de impacto.|

### Caché de datos

El dispositivo puede almacenar en caché los datos, lo que se puede habilitar mediante la configuración por Bluetooth abriendo "GNSS Data Cache". El dispositivo carga paquetes de confirmación. Cuando la cobertura de la señal LoRaWAN es débil o no hay cobertura de red, el dispositivo no puede recibir un ack al cargar datos. En este caso, los datos se guardarán y entrarán en el siguiente ciclo. Cuando el dispositivo cargue datos correctamente en algún momento, enviará los datos sin conexión. El número máximo de datos que se pueden almacenar en caché es de 1000 registros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Función del botón

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>Acciones</b></th><th colspan="1"><b>Descripción</b></th><th colspan="1"><b>Estado del LED</b></th><th colspan="1"><b>Zumbador</b></th></tr>
<tr><td colspan="1" rowspan="2">Mantenga pulsado el botón durante 3 segundos</td><td colspan="1">Si el rastreador está apagado, mantenga pulsado el botón durante 3 segundos para encenderlo. El emparejamiento por Bluetooth se activará automáticamente y el usuario podrá usar la app para escanear y conectar.</td><td colspan="1">El LED parpadea una vez por segundo.</td><td colspan="1">Melodía ascendente</td></tr>
<tr><td colspan="1">Si el dispositivo está encendido, mantenga pulsado el botón durante 3 segundos para activar el emparejamiento por Bluetooth.</td><td colspan="1">El LED parpadea una vez por segundo.</td><td colspan="1">Ninguno</td></tr>
<tr><td colspan="1">Mantenga pulsado el botón durante 9 segundos</td><td colspan="1">Apagar.</td><td colspan="1">Ninguno</td><td colspan="1">Melodía descendente</td></tr>
<tr><td colspan="1">Unirse a la red LoRa</td><td colspan="1">Después de salir de los ajustes de Bluetooth, intente unirse a la red LoRaWAN.</td><td colspan="1">La luz de respiración parpadea al intentar acceder a la red y parpadea rápidamente si la red se une correctamente</td><td colspan="1">Una melodía rápida y alegre cuando la red se une correctamente</td></tr>
<tr><td colspan="1" rowspan="2">Pulse una vez</td><td colspan="1">Obtener datos de ubicación/sensor, cargar datos y activar inmediatamente el evento "Press once".</td><td colspan="1">El LED permanece encendido durante 2 segundos</td><td colspan="1">Sonará un pitido cuando los datos se carguen correctamente.</td></tr>
<tr><td colspan="1">Si el emparejamiento por Bluetooth está activado, pulsar una vez puede apagar el Bluetooth.</td><td colspan="1">El LED se apagará</td><td colspan="1">Ninguno</td></tr>
<tr><td colspan="1" rowspan="3">Pulse dos veces continuamente</td><td colspan="1">Si el SOS está configurado en modo de disparo único, al pulsar dos veces el botón se activará el modo SOS de disparo único y se cargarán una vez los datos de ubicación/sensor y los eventos SOS.</td><td colspan="1">Parpadea con el sonido</td><td colspan="1">3 segundos de sonido de alarma</td></tr>
<tr><td colspan="1">Si el SOS está configurado en modo continuo, al pulsar dos veces el botón se activará el modo SOS continuo. La ubicación, los datos del sensor y los eventos SOS se cargarán una vez por minuto, y el modo finalizará automáticamente después de 30 veces.</td><td colspan="1">Parpadea con el sonido</td><td colspan="1">Un sonido de alarma constante</td></tr>
<tr><td colspan="1">Pulse dos veces para salir del modo SOS</td><td colspan="1">Ninguno</td><td colspan="1">Ninguno</td></tr>
<tr><td colspan="1">Entrar en modo DFU</td><td colspan="1">Después de un fallo en la actualización del firmware, el dispositivo puede entrar en modo DFU. Puede ver el nombre del dispositivo `SENSECAP_GR_DFU_XXXX` en la SenseCraft app. <br />
En modo DFU, el dispositivo saldrá automáticamente después de 3 minutos de inactividad.
Si desea salir inmediatamente, puede mantener pulsado el botón durante 3 segundos y el dispositivo se reiniciará y volverá al funcionamiento normal.</td><td colspan="1">Las luces LED continúan parpadeando</td><td colspan="1">Ninguno</td></tr>
</table>

:::info Note

- Se recomienda apagar el dispositivo si no se está utilizando.
- Cuando se enciende por primera vez, se recomienda probarlo en exteriores, ya que el GPS necesita actualizar la hora vía satélite.
- Asegúrese de que la banda de frecuencia coincida con la frecuencia de su gateway.
:::

## Empezar

### Conectar a SenseCAP Mate App

- **Paso 1**: Descargar SenseCAP Mate App

SenseCAP Mate App se utiliza para configurar parámetros LoRa, intervalo, vincular dispositivos a su cuenta y comprobar la información básica del dispositivo.

- Para iOS, busque “SenseCAP Mate” en la App Store y descárguela.
- Para Android, busque “SenseCAP Mate” en la Google Store y descárguela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2**: Añadir dispositivo

Inicie sesión en la SenseCAP Mate APP.
Haga clic en la pestaña 'Add Device' en la parte superior derecha y luego escanee el código QR de la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

Mantenga pulsado el botón durante 3 segundos y seleccione el dispositivo por SN.

Hay 2 modos de configuración:

- **Quick Configuration**:Para un inicio rápido, puede seleccionar la configuración rápida de los parámetros básicos
- **Advanced Configuration**: Para configurar más parámetros, consulte los siguientes pasos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### Configuración rápida

Para la Configuración rápida, solo necesita configurar los siguientes parámetros:

- **Frequency**:debe ser la misma que la de su gateway.
- **Uplink interval**: El intervalo de subida del Modo periódico (modo predeterminado), puede configurar otro modo mediante “Device Bluetooth Configuration” en la página “User”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

El rastreador intentará unirse a la red LoRaWAN, la luz de respiración parpadea al intentar unirse a la red y parpadea rápidamente si la red se une correctamente con una melodía rápida y alegre.

### Configuración avanzada

- Mantenga pulsado el botón durante 3 segundos para encenderlo y, a continuación, active automáticamente el emparejamiento por Bluetooth; el usuario puede utilizar la app para escanear y conectar.
- Abra la App y haga clic en “Tracker T1000”. Seleccione “Setup” para configurar el rastreador.
- Seleccione el dispositivo por S/N (el S/N está en la etiqueta del dispositivo). A continuación, se mostrará la información básica del sensor después de entrar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

Haga clic en “Measure” y obtendrá los valores del sensor:

|Temperatura|Rango: -20 a 60℃; Precisión: ± 1℃(mín 0.5℃, máx 1℃); Resolución: 0.1℃|
| - | - |
|Luz|0 a 100%, (0% es oscuro, 100% es lo más brillante)|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### Configuración de parámetros LoRa

Los rastreadores se fabrican para admitir un plan de frecuencias universal de 863MHz~928MHz en un solo SKU. Cada dispositivo individual puede admitir 7 planes de frecuencias.

<table align="center">
  <caption> <h2>Plataforma</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Plataforma</h4></td>
    <td><h4>Descripción</h4></td>
    </tr>
    <tr>
      <td>SenseCAP para The Things Network</td>
    <td>Plataforma predeterminada.
Debe utilizarse con SenseCAP Gateway. SenseCAP crea un servidor TTN propietario que permite que los sensores se utilicen directamente cuando se emparejan con un gateway SenseCAP. <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP para Helium</td>
    <td>Cuando hay cobertura de la red Helium, los datos se pueden cargar a través de Helium. Los dispositivos funcionan en una consola Helium privada de SenseCAP. Los usuarios no necesitan crear dispositivos en la consola Helium, se puede usar directamente con SenseCAP Mate App y Portal. <br /><a href="https://explorer.helium.com/" target="_blank"><span>Cobertura de Helium</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Conecta el dispositivo a tu consola pública de Helium</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Conecta el dispositivo a tu servidor TTN(TTS)</td>
    </tr>
            <tr>
    <td>Otra plataforma</td>
    <td>Otro servidor de red LoRaWAN</td>
    </tr>
  </tbody>
</table>

<table align="center">
  <caption> <h2></h2> </caption>
  <tbody>
    <tr>
    <td><h4>Parámetros</h4></td>
    <td><h4>Descripción</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Plan de frecuencias</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>EU868 predeterminado</td>
    </tr>
        <tr>
    <td>Política de paquetes</td>
    <td>1C</td>
    <td>LoRaWAN usa paquete confirmado</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>Abierto por defecto</td>
    <td>Parámetros LoRaWAN, se recomienda dejarlo abierto por defecto</td>
    </tr>
            <tr>
    <td>Restaurar configuración LoRa</td>
    <td>Cuando “Platform” cambia de otra plataforma de vuelta a SenseCAP, es necesario restaurar los parámetros LoRa (EUI/App EUI/ App Key etc.)</td>
    <td>Puede utilizar esta función cuando necesite restaurar los parámetros LoRa a los valores predeterminados de fábrica</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

El sensor admite dos modos de acceso a la red, OTAA por defecto.

|**Parámetro**|**Descripción**|
| - | - |
|OTAA (default)|Over The Air Activation, se une a la red mediante Device EUI, App EUI y App Key.|
|ABP|Activation By Personalization, se une a la red mediante DevAddr, NwkSkey y AppSkey.|

El dispositivo utiliza OTAA para unirse a la red LoRaWAN por defecto. Por lo tanto, se pueden configurar el Device EUI, App EUI y App Key.

|**Parámetro**|**Tipo**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16, hexadecimal de 0 ~ F|
|App EUI|16, hexadecimal de 0 ~ F|
|App Key|32, hexadecimal de 0 ~ F|

:::info Note
When using the SenseCAP platform, the EUI, APP EUI and APP Key are fixed and are the same as the sensor label.<br />
When the sensor is selected to be used with a public platform such as Helium or TTN, the EUI will not change, and the sensor will generate a new fixed App EUI and App Key for network access.<br />
To obtain EUI information in batches, please contact our sales team.
:::

<table>
<tr><th colspan="1" valign="top"><b>Frecuencia</b></th><th colspan="1" valign="top"><b>Nombre común</b></th><th colspan="2" valign="top"><b>Sub-banda</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">Sub-banda de 1 a 8 (sub-banda predeterminada 2)</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">Sub-banda de 1 a 8 (sub-banda predeterminada 2)</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">Plan de frecuencias para TTN</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">Plan de frecuencias para TTN</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Plan de frecuencias para Helium</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info Note
Diferentes países y servidores de red LoRaWAN utilizan diferentes planes de frecuencias.<br />
Para la red Helium, consulte: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
Para The Things Network, consulte:[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### Configuración del modo de trabajo

Configure el modo de trabajo según sus necesidades.

<table>
<tr><th colspan="1"><b>Parámetros</b></th><th colspan="1"><b>Descripción</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">Intervalo de latido</td><td colspan="1">Cuando no se cargan datos por parte del dispositivo dentro del intervalo de latido, se activará un paquete de latido. Este paquete solo contiene información de la batería.</td><td colspan="1">Predeterminado 720 minutos.</td></tr>
<tr><td colspan="1">Enable Temp&Light</td><td colspan="1">Si este interruptor está activado, la temperatura y la luz se recopilarán y cargarán, pero aumentará el consumo de energía.</td><td colspan="1">Desactivado por defecto.</td></tr>
<tr><td colspan="1" rowspan="2">Modo de informe SOS</td><td colspan="1">Single</td><td colspan="1"><a name="ole_link7"></a>Si SOS está configurado en modo single, al hacer doble clic en el botón se activará el modo SOS de disparo único y se cargarán una vez la ubicación/datos del sensor y los eventos SOS</td></tr>
<tr><td colspan="1">Continuous</td><td colspan="1"><p>Por defecto se utiliza continuous.</p><p>Si SOS está configurado en modo continuous, haga doble clic en el botón para abrir el modo continuo de SOS, y cargue la ubicación, los datos del sensor y los eventos SOS una vez cada 1 minuto, y finalice automáticamente después de 30 veces</p></td></tr>
<tr><td colspan="1" rowspan="3">Modo de trabajo</td><td colspan="1">Modo de espera</td><td colspan="1">Cargar paquetes de latido (solo nivel de batería) según el intervalo de latido.</td></tr>
<tr><td colspan="1">Modo periódico</td><td colspan="1">La ubicación y los datos del sensor se cargan de acuerdo con el intervalo de carga.</td></tr>
<tr><td colspan="1">Modo de evento</td><td colspan="1"><a name="ole_link15"></a>Establezca condiciones de activación de umbral según valores medidos como temperatura, luz y movimiento, y ajuste el intervalo de carga después de la activación.</td></tr>
<tr><td colspan="1">Intervalo de subida (min) – Modo periódico</td><td colspan="1">Localizar y cargar datos periódicamente.</td><td colspan="1"><p>Predeterminado 60 minutos. </p><p>Cuanto mayor sea la frecuencia, mayor será el consumo de energía.</p></td></tr>
<tr><td colspan="1">Restaurar todos los ajustes</td><td colspan="1">Restaurar todos los parámetros de configuración a los ajustes de fábrica, incluidos LoRa, modo de trabajo y geolocalización.</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

Para el modo de evento, hay cinco eventos:

<table>
<tr><th><b>Modo de evento</b></th><th><b>Descripción</b></th><th></th></tr>
<tr><td>Intervalo de subida – Sin evento (min)</td><td><a name="ole_link16"></a>Este es el intervalo de carga cuando no se activan eventos.</td><td><p>Predeterminado 60 minutos. </p><p>Rango: 1~10080 min.</p></td></tr>
<tr><td rowspan="2">Evento de impacto</td><td>Cuando el evento de impacto está habilitado, el impacto del rastreador activará un informe de datos, que incluye el evento de impacto, la ubicación y los datos del sensor.</td><td>Desactivado por defecto.</td></tr>
<tr><td>Umbral de movimiento de 3 ejes (mg)</td><td>El valor predeterminado es 300. Cuando la aceleración supera los 300mg, se activa el evento de impacto.</td></tr>
<tr><td rowspan="3">Evento de movimiento</td><td>Cuando la aceleración supera el valor establecido, el dispositivo comienza a moverse, y cuando no hay movimiento durante 2 minutos, el movimiento del dispositivo se detiene. Establezca el intervalo de carga según el inicio del movimiento y la detención del movimiento.</td><td>Desactivado por defecto.</td></tr>
<tr><td>Umbral de movimiento de 3 ejes (mg)</td><td>El valor predeterminado es 30. Cuando la aceleración supera los 30mg, se determina que el dispositivo está en movimiento, cuando está 2 minutos por debajo de este valor, se determina que el dispositivo está inmóvil.</td></tr>
<tr><td>Intervalo de subida en movimiento(min)</td><td>Establezca el intervalo de carga para el estado actual cuando el dispositivo esté en movimiento.</td></tr>
<tr><td rowspan="2">Evento de inmovilidad</td><td>Cuando el dispositivo está estacionario en una ubicación durante más de una cierta cantidad de tiempo, se activa un evento de tiempo de espera de inmovilidad.</td><td></td></tr>
<tr><td>Tiempo de espera de inmovilidad(min)</td><td>El valor predeterminado es 360 minutos.</td></tr>
<tr><td rowspan="4">Evento de temperatura</td><td>Si el evento de temperatura está habilitado, puede configurar el intervalo de carga en función de la temperatura. </td><td>Por ejemplo, Uplink Interval=10, Value≥30, si la temperatura es superior a 30 ° C, el dispositivo cargará la ubicación a intervalos de 10 minutos.</td></tr>
<tr><td>Intervalo de muestreo (s)</td><td><p>Predeterminado 30 segundos.</p><p>La temperatura se detecta cada 30 segundos. Cuando se activa el umbral, se cargan la ubicación y los datos del sensor.</p></td></tr>
<tr><td>Intervalo de subida (min)</td><td>Cuando la temperatura supera el umbral, la ubicación y los datos del sensor se suben de acuerdo con este intervalo.</td></tr>
<tr><td>Regla de valor</td><td>Se puede configurar una de las cuatro reglas de umbral.</td></tr>
<tr><td rowspan="3">Evento de luz</td><td>Si el evento de luz está habilitado, puedes configurar el intervalo de subida en función de la temperatura.</td><td>Por ejemplo, Intervalo de subida=10, Valor≥30, si la temperatura es superior al 30 %, el dispositivo subirá la ubicación a intervalos de 10 minutos.</td></tr>
<tr><td>Intervalo de subida (min)</td><td>Cuando la luz supera el umbral, la ubicación y los datos del sensor se suben de acuerdo con este intervalo.</td></tr>
<tr><td>Regla de valor</td><td>Se puede configurar una de las cuatro reglas de umbral.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### Configuración del modo de geolocalización

El rastreador admite posicionamiento mediante GNSS, Wi-Fi y Bluetooth.

- **GNSS**: La longitud y la latitud se pueden obtener directamente a través de GPS y otros sistemas de posicionamiento por satélite, y luego subir los datos vía LoRa.
- **Wi-Fi**: Escaneo pasivo, sube las 4 direcciones MAC escaneadas vía LoRa.
- **BLE**: Sube las 3 mejores direcciones MAC de Beacon escaneadas vía LoRa.

<table>
<tr><th colspan="1"><b>Geolocalización</b></th><th colspan="1"><b>Descripción</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">Estrategia de geolocalización</td><td colspan="1">Solo GNSS</td><td colspan="1"><p>Usar GNSS por defecto. </p><p>Solo se utiliza GNSS para el posicionamiento.</p></td></tr>
<tr><td colspan="1">Solo Wi-Fi</td><td colspan="1">Solo se utilizan escaneos Wi-Fi para el posicionamiento.</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">Usar Wi-Fi antes que GNSS. Si Wi-Fi falla, entonces usar GNSS en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">Usar GNSS antes que Wi-Fi. Si GNSS falla, entonces usar Wi-Fi en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">Solo Bluetooth</td><td colspan="1">Solo se utilizan escaneos Bluetooth para el posicionamiento.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">Usar Bluetooth antes que Wi-Fi. Si Bluetooth falla, entonces usar Wi-Fi en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">Usar Bluetooth antes que GNSS. Si Bluetooth falla, entonces usar GNSS en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">Usar Bluetooth, Wi-Fi y GNSS para el posicionamiento por turno (cambiar al siguiente tipo de posicionamiento después de que falle un tipo de posicionamiento)</td></tr>
<tr><td colspan="1">Tiempo de espera de GNSS</td><td colspan="1"><p>El tiempo máximo que se dedicará a esperar a que </p><p>GNSS obtenga una fijación de posición aproximada</p></td><td colspan="1"><p>El valor predeterminado es 60 s. </p><p>No se recomienda modificarlo; cuanto mayor sea el tiempo, mayor será el consumo de energía.</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>Caché de datos GNSS</td><td colspan="1">Cuando no es posible subir datos a través de LoRa, los datos se guardan localmente y se suben cuando se recupera la señal LoRa.</td><td colspan="1">Desactivado por defecto.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

Después de configurar todos los parámetros, haz clic en “Send”.
Si no es necesario modificar ningún parámetro, sal de la configuración Bluetooth y vuelve a la página de inicio. En este punto, el dispositivo inicia una solicitud de acceso a la red LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### Vista de datos del dispositivo

#### SenseCAP Mate App

Comprueba la ubicación en la APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

La función principal de SenseCAP Portal es gestionar los dispositivos SenseCAP y almacenar datos. Está construido sobre Azure, un servicio en la nube seguro y fiable de Microsoft. Los usuarios pueden solicitar una cuenta y vincular todos los dispositivos a esta cuenta. SenseCAP Portal proporciona un portal web y API. El portal web incluye Panel, Gestión de dispositivos, Gestión de datos y Gestión de claves de acceso. El API está abierto a los usuarios para un desarrollo posterior.

- **Dashboard:** Incluye resumen de dispositivos, anuncios, datos de escena y gráfico de datos, etc.
- **Device Management:** Gestionar dispositivos SenseCAP.
- **Data Management:** Gestionar datos, incluyendo la sección de tabla de datos y gráficos, proporcionando métodos para buscar datos.
- **Subaccount System:** Registrar subcuentas con diferentes permisos.
- **Access Key Management:** Gestionar Access Key (para acceder al servicio API), incluyendo creación de claves, actualización de claves y comprobación de claves.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Vista de datos del dispositivo

Inicia sesión en [SenseCAP Portal](http://sensecap.seeed.cc)

Si has creado una cuenta a través de la APP, puedes iniciar sesión directamente.

1) Selecciona registrar cuenta, introduce la información de correo electrónico y haz clic en "register", el correo electrónico de registro se enviará al buzón del usuario

2) Abre el correo electrónico "SenseCAP…" y haz clic en el enlace de salto, rellena la información correspondiente y completa el registro

3) Vuelve a la interfaz de inicio de sesión y completa el inicio de sesión

Consulta la [Guía de usuario de SenseCAP Portal](https://sensecap-docs.seeed.cc/quickstart.html) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API es para que los usuarios gestionen dispositivos y datos de IoT. Incluye 3 tipos de métodos API: protocolo HTTP, protocolo MQTT y protocolo Websocket.

- Con HTTP API, los usuarios pueden gestionar dispositivos LoRa, para obtener datos en bruto o datos históricos.
- Con MQTT API, los usuarios pueden suscribirse a los datos de medición en tiempo real del sensor a través del protocolo MQTT.
- Con Websocket API, los usuarios pueden obtener datos de medición en tiempo real de los sensores a través del protocolo Websocket.

Consulta la [Guía de usuario de API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
