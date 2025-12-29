---
description: Introducción_al_rastreador_SenseCAP_T1000
title: Inicio Rápido
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 12/24/2025
  author: Janet
---


Este capítulo te guiará para configurar el Rastreador SenseCAP T1000 a través de la APP SenseCAP Mate.

<div class="video-container">
<iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Guía del Usuario </font></span></strong>
    </a>
</div>
<br />

:::caution note
Por favor, asegúrate de tener cobertura de una red LoRaWAN, como Helium, TTN u otras redes LoRaWAN. Sin redes LoRaWAN, el dispositivo no puede enviar datos a la nube. La forma más fácil de usar los rastreadores es con el `SenseCAP LoRaWAN Gateway` y la `SenseCraft app`.
:::

## Funciones del Dispositivo

### Modo de Trabajo

Para aplicar a diferentes escenarios, hay varios modos de trabajo diferentes en el rastreador SenseCAP T1000, que puedes elegir según tus necesidades.

|**Modo de Trabajo**|**Descripción**|**Escenario**|
| - | - | - |
|Modo Standby|<p>Solo se suben paquetes de latido, que incluyen únicamente información de la batería. </p><p>La ubicación se puede obtener usando el comando de enlace descendente LoRa.</p>|Si necesitas localizar el dispositivo durante mucho tiempo y el dispositivo puede funcionar durante mucho tiempo antes de ser cargado, la plataforma en la nube puede emitir un comando de solicitud de ubicación para localizar el dispositivo.|
|Modo Periódico|Establece un intervalo en el que el dispositivo sube periódicamente datos de ubicación y sensores.|Este modo se recomienda para la mayoría de escenarios.|
|Modo Evento|Ajusta el intervalo de subida según el sensor de temperatura, luz y aceleración del rastreador, incluyendo evento de temperatura, evento de luz, evento de movimiento, tiempo de espera sin movimiento y evento de choque.|Se puede usar en escenarios complejos, como monitorear el transporte de artículos importantes. Pero el consumo de energía aumenta mucho.|

### Función del Sensor

El Rastreador SenseCAP T1000 está equipado con 3 sensores: Sensor de temperatura, Sensor de luz y Acelerómetro de 3 ejes.
Puedes elegir habilitar o deshabilitar estos sensores:

- Apagar todos los sensores, pero también puedes elegir una versión sin sensor para reducir costos.
- Solo los sensores de temperatura y luz están habilitados para monitorear datos periódicamente con bajo consumo de energía.
- Cuando la temperatura, iluminación y acelerómetro se usan como condiciones de activación, el sensor siempre estará alimentado, y el dispositivo consume mucha energía.

|**Sensor**|**Descripción**|
| - | - |
|Temperatura|<p>Este es un sensor de temperatura independiente integrado con **una precisión de ±0.5~1℃**. Debe notarse que puede haber algún retraso en la medición de temperatura aquí, porque está separado de la carcasa.</p><p>Rango: -20 a 60℃; Precisión: ± 1℃(mín 0.5℃, máx 1℃); Resolución: 0.1℃</p>|
|Luz|<p>El sensor de luz no es el valor real de lúmenes monitoreado, sino un porcentaje de la luz desde oscuridad hasta cantidad. Principalmente se puede usar para monitoreo anti-desmontaje y algún monitoreo sensible a la luz.</p><p>Rango: 0 a 100%, (0% es oscuro, 100% es más brillante)</p>|
|Acelerómetro de 3 Ejes|Al establecer el valor de aceleración, se activan el evento de movimiento y el evento de choque.|

### Caché de Datos

El dispositivo puede almacenar datos en caché, lo cual se puede habilitar a través de la configuración Bluetooth abriendo "GNSS Data Cache". El dispositivo sube paquetes de confirmación. Cuando la cobertura de señal LoRaWAN es débil o no hay cobertura de red, el dispositivo no puede recibir un ack al subir datos. En este caso, los datos se guardarán y entrarán al siguiente ciclo. Cuando el dispositivo suba datos exitosamente en algún momento, enviará datos offline. El número máximo de datos que se pueden almacenar en caché es 1000 registros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Función del Botón

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>Acciones</b></th><th colspan="1"><b>Descripción</b></th><th colspan="1"><b>Estado del LED</b></th><th colspan="1"><b>Zumbador</b></th></tr>
<tr><td colspan="1" rowspan="2">Presionar botón y mantener por 3 segundos</td><td colspan="1">Si el rastreador está apagado, presiona y mantén el botón por 3 segundos para encenderlo. El emparejamiento Bluetooth se activará automáticamente, y el usuario puede usar la app para escanear y conectar.</td><td colspan="1">El LED parpadea una vez por segundo.</td><td colspan="1">Melodía ascendente</td></tr>
<tr><td colspan="1">Si el dispositivo está encendido, presiona y mantén el botón por 3 segundos para activar el emparejamiento Bluetooth.</td><td colspan="1">El LED parpadea una vez por segundo.</td><td colspan="1">Ninguno</td></tr>
<tr><td colspan="1">Presionar botón y mantener por 9 segundos</td><td colspan="1">Apagar.</td><td colspan="1">Ninguno</td><td colspan="1">Melodía descendente</td></tr>
<tr><td colspan="1">Unirse a la red LoRa</td><td colspan="1">Después de salir de la configuración Bluetooth, intenta unirse a la red LoRaWAN.</td><td colspan="1">La luz de respiración parpadea cuando intenta acceder a la red, y parpadea rápidamente si la red se une exitosamente</td><td colspan="1">Una melodía rápida y alegre cuando la red se une exitosamente</td></tr>
<tr><td colspan="1" rowspan="2">Presionar una vez</td><td colspan="1">Obtener datos de ubicación/sensor, subir datos, y activar el evento "Presionar una vez" inmediatamente.</td><td colspan="1">El LED se enciende por 2 segundos</td><td colspan="1">Un sonido pitará cuando los datos se suban exitosamente.</td></tr>
<tr><td colspan="1">Si el emparejamiento Bluetooth está activado, presionar una vez puede apagar el Bluetooth.</td><td colspan="1">El LED se apagará</td><td colspan="1">Ninguno</td></tr>
<tr><td colspan="1" rowspan="3">Presionar dos veces continuamente</td><td colspan="1">Si el SOS está configurado en modo de disparo único, hacer doble clic en el botón activará el modo SOS de disparo único y subirá los datos de ubicación/sensor y eventos SOS una vez.</td><td colspan="1">Parpadea con el sonido</td><td colspan="1">3 segundos de sonido de alarma</td></tr>
<tr><td colspan="1">Si el SOS está configurado en modo continuo, hacer doble clic en el botón para activar el modo SOS continuo. La ubicación, datos del sensor y eventos SOS se subirán una vez cada minuto, y el modo terminará automáticamente después de 30 veces.</td><td colspan="1">Parpadea con el sonido</td><td colspan="1">Un sonido de alarma constante</td></tr>
<tr><td colspan="1">Hacer doble clic dos veces para salir del modo SOS</td><td colspan="1">Ninguno</td><td colspan="1">Ninguno</td></tr>
</table>

:::info Nota

- Se recomienda apagar el dispositivo si no está en uso.
- Cuando se enciende por primera vez, se recomienda probarlo al aire libre, ya que el GPS necesita actualizar la hora vía satélite.
- Por favor, asegúrate de que la banda de frecuencia coincida con la frecuencia de tu gateway.
:::

## Introducción

### Conectar a la App SenseCAP Mate

- **Paso 1**: Descargar la App SenseCAP Mate

La App SenseCAP Mate se usa para configurar parámetros LoRa, intervalo, vincular dispositivos a tu cuenta y verificar información básica del dispositivo.

- Para iOS, por favor busca "SenseCAP Mate" en el App Store y descárgala.
- Para Android, por favor busca "SenseCAP Mate" en Google Store y descárgala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2**: Agregar Dispositivo

Inicia sesión en la APP SenseCAP Mate.
Haz clic en la pestaña 'Add Device' en la parte superior derecha, luego escanea el código QR en la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

Presiona el botón por 3 segundos, y selecciona el dispositivo por SN.

Hay 2 modos de configuración:

- **Configuración Rápida**: Para inicio rápido, puedes seleccionar configuración rápida de los parámetros básicos
- **Configuración Avanzada**: Para establecer más parámetros por favor revisa los siguientes pasos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### Configuración Rápida

Para Configuración Rápida, solo necesitas configurar los siguientes parámetros:

- **Frecuencia**: debe ser la misma que tu gateway.
- **Intervalo de enlace ascendente**: El intervalo de enlace ascendente del Modo Periódico (modo predeterminado), puedes establecer otro modo vía "Device Bluetooth Configuration" en la página "User".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

El Rastreador intentará unirse a la red LoRaWAN, la luz de respiración parpadea cuando intenta unirse a la red, y parpadea rápidamente si la red se une exitosamente con una melodía rápida y alegre.

### Configuración Avanzada

- Presiona el botón y mantén por 3 segundos para encenderlo, luego activa el emparejamiento Bluetooth automáticamente, el usuario puede usar la app para escanear y conectar.
- Abre la App y haz clic en "Tracker T1000". Selecciona "Setup" para configurar el rastreador.
- Selecciona el dispositivo por S/N (S/N está en la etiqueta del dispositivo). Luego, la información básica del sensor se mostrará después de ingresar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

Haz clic en "Measure", luego obtendrás los valores del sensor:

|Temperatura|Rango: -20 a 60℃; Precisión: ± 1℃(mín 0.5℃, máx 1℃); Resolución: 0.1℃|
| - | - |
|Luz|0 a 100%, (0% es oscuro, 100% es más brillante)|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### Configuración de Parámetros LoRa

Los rastreadores están fabricados para soportar un plan de frecuencia universal de 863MHz~928MHz en un SKU. Cada dispositivo individual puede soportar 7 planes de frecuencia.

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
Debe usarse con SenseCAP Gateway. SenseCAP construye un servidor TTN propietario que permite que los sensores se usen listos para usar cuando se emparejan con un gateway SenseCAP. <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP para Helium</td>
    <td>Cuando hay cobertura de la red Helium, los datos pueden subirse a través de Helium. Los dispositivos funcionan en una consola privada de Helium de SenseCAP. Los usuarios no necesitan crear dispositivos en la consola de Helium, listos para usar con SenseCAP Mate App y Portal. <br /><a href="https://explorer.helium.com/" target="_blank"><span>Cobertura de Helium</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Conectar dispositivo a tu consola pública de Helium</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Conectar dispositivo a tu servidor TTN(TTS)</td>
    </tr>
            <tr>
    <td>Otra Plataforma</td>
    <td>Otro Servidor de Red LoRaWAN</td>
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
    <td>Plan de Frecuencia</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>Predeterminado EU868</td>
    </tr>
        <tr>
    <td>Política de Paquetes</td>
    <td>1C</td>
    <td>LoRaWAN usa paquete de confirmación</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>Abierto por defecto</td>
    <td>Parámetros LoRaWAN, se recomienda abierto por defecto</td>
    </tr>
            <tr>
    <td>Restaurar Configuración LoRa</td>
    <td>Cuando "Platform" cambia de vuelta a SenseCAP desde otra plataforma, los parámetros LoRa (EUI/App EUI/ App Key etc.) necesitan ser restaurados</td>
    <td>Puedes usar esta función cuando necesites restaurar los parámetros LoRa a los valores predeterminados de fábrica</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

El sensor soporta dos modos de acceso a la red, OTAA por defecto.

|**Parámetro**|**Descripción**|
| - | - |
|OTAA (predeterminado)|Over The Air Activation, se une a la red a través de Device EUI, App EUI, y App Key.|
|ABP|Activation By Personalization, se une a la red a través de DevAddr, NwkSkey, y AppSkey.|

El dispositivo usa OTAA para unirse a la red LoRaWAN por defecto. Así, puede configurar el device EUI, App EUI y App Key.

|**Parámetro**|**Tipo**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16, hexadecimal de 0 ~ F|
|App EUI|16, hexadecimal de 0 ~ F|
|App Key|32, hexadecimal de 0 ~ F|

:::info Nota
Cuando se usa la plataforma SenseCAP, el EUI, APP EUI y APP Key son fijos y son los mismos que la etiqueta del sensor.<br />
Cuando el sensor se selecciona para ser usado con una plataforma pública como Helium o TTN, el EUI no cambiará, y el sensor generará un nuevo App EUI y App Key fijos para el acceso a la red.<br />
Para obtener información EUI en lotes, por favor contacta a nuestro equipo de ventas.
:::

<table>
<tr><th colspan="1" valign="top"><b>Frecuencia</b></th><th colspan="1" valign="top"><b>Nombre Común</b></th><th colspan="2" valign="top"><b>Sub-banda</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">Sub banda de 1 a 8 (sub-banda 2 por defecto)</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">Sub banda de 1 a 8 (sub-banda 2 por defecto)</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">Plan de frecuencia para TTN</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">Plan de frecuencia para TTN</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Plan de frecuencia para Helium</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info Nota
Diferentes países y servidores de red LoRaWAN usan diferentes planes de frecuencia.<br />
Para la red Helium, por favor consulta: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
Para The Things Network, por favor consulta:[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### Configuración del Modo de Trabajo

Por favor configura el modo de trabajo según tus necesidades.

<table>
<tr><th colspan="1"><b>Parámetros</b></th><th colspan="1"><b>Descripción</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">Intervalo de Latido</td><td colspan="1">Cuando no se suben datos por el dispositivo dentro del intervalo de latido, se activará un paquete de latido. Este paquete solo contiene información de la batería.</td><td colspan="1">Predeterminado 720 minutos.</td></tr>
<tr><td colspan="1">Habilitar Temp&Luz</td><td colspan="1">Si este interruptor está activado, la temperatura y la luz serán recolectadas y subidas, pero aumentará el consumo de energía.</td><td colspan="1">Desactivado por defecto.</td></tr>
<tr><td colspan="1" rowspan="2">Modo de Reporte SOS</td><td colspan="1">Único</td><td colspan="1"><a name="ole_link7"></a>Si SOS se configura en modo único, hacer doble clic en el botón habilitará el modo SOS de disparo único y subirá la ubicación/datos del sensor y eventos SOS una vez</td></tr>
<tr><td colspan="1">Continuo</td><td colspan="1"><p>Usar continuo por defecto.</p><p>Si SOS se configura en modo continuo, hacer doble clic en el botón para abrir el modo continuo de SOS, y subir ubicación, datos del sensor y eventos SOS una vez en 1 minuto, y terminar automáticamente después de 30 veces</p></td></tr>
<tr><td colspan="1" rowspan="3">Modo de Trabajo</td><td colspan="1">Modo de Espera</td><td colspan="1">Subir paquetes de latido (solo nivel de batería) basado en el intervalo de latido.</td></tr>
<tr><td colspan="1">Modo Periódico</td><td colspan="1">La ubicación y los datos del sensor se suben según el intervalo de subida.</td></tr>
<tr><td colspan="1">Modo de Evento</td><td colspan="1"><a name="ole_link15"></a>Configurar condiciones de activación de umbral según valores medidos como temperatura, luz y movimiento, y ajustar el intervalo de subida después del activador.</td></tr>
<tr><td colspan="1">Intervalo de Subida (min) – Modo Periódico</td><td colspan="1">Localizar periódicamente y subir datos.</td><td colspan="1"><p>Predeterminado 60 minutos. </p><p>Cuanto mayor sea la frecuencia, mayor será el consumo de energía.</p></td></tr>
<tr><td colspan="1">Restaurar Todas las Configuraciones</td><td colspan="1">Restaurar todos los parámetros de configuración a las configuraciones de fábrica, incluye LoRa, Modo de Trabajo y Geolocalización.</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

Para el Modo de Evento, hay cinco eventos:

<table>
<tr><th><b>Modo de Evento</b></th><th><b>Descripción</b></th><th></th></tr>
<tr><td>Intervalo de Subida – Sin evento (min)</td><td><a name="ole_link16"></a>Este es el intervalo de subida cuando no se activan eventos.</td><td><p>Predeterminado 60 minutos. </p><p>Rango: 1~10080 min.</p></td></tr>
<tr><td rowspan="2">Evento de Choque</td><td>Cuando el evento de choque está habilitado, el choque del rastreador activará un reporte de datos, incluyendo el evento de choque, ubicación y datos del sensor.</td><td>Desactivado por defecto.</td></tr>
<tr><td>Umbral de Movimiento de 3 Ejes (mg)</td><td>El predeterminado es 300. Cuando la aceleración excede 300mg, se activa el evento de choque.</td></tr>
<tr><td rowspan="3">Evento de Movimiento</td><td>Cuando la aceleración excede el valor configurado, el dispositivo comienza a moverse, y cuando no hay movimiento por 2 minutos, el movimiento del dispositivo se detiene. Configurar el intervalo de subida según el inicio del movimiento y la detención del movimiento.</td><td>Desactivado por defecto.</td></tr>
<tr><td>Umbral de Movimiento de 3 Ejes (mg)</td><td>El predeterminado es 30. Cuando la aceleración excede 30mg, determinar que el dispositivo está en movimiento, cuando está 2 minutos por debajo de este valor, determinar que el dispositivo está inmóvil.</td></tr>
<tr><td>Intervalo de Subida en Movimiento(min)</td><td>Configurar el intervalo de subida para el estado actual cuando el dispositivo está en movimiento.</td></tr>
<tr><td rowspan="2">Evento de Inmovilidad</td><td>Cuando el dispositivo está estacionario en una ubicación por más de cierta cantidad de tiempo, se activa un evento de tiempo de espera de inmovilidad.</td><td></td></tr>
<tr><td>Tiempo de Espera de Inmovilidad(min)</td><td>El predeterminado es 360 minutos.</td></tr>
<tr><td rowspan="4">Evento de Temperatura</td><td>Si el evento de temperatura está habilitado, puedes configurar el intervalo de subida basado en la temperatura. </td><td>Por ejemplo, Intervalo de Subida=10, Valor≥30, si la temperatura es mayor a 30 ° C, el dispositivo subirá la ubicación en intervalos de 10 minutos.</td></tr>
<tr><td>Intervalo de Muestra (s)</td><td><p>Predeterminado 30 segundos.</p><p>La temperatura se detecta cada 30 segundos. Cuando se activa el umbral, subir ubicación y datos del sensor.</p></td></tr>
<tr><td>Intervalo de Subida (min)</td><td>Cuando la temperatura excede el umbral, la ubicación y los datos del sensor se suben según este intervalo.</td></tr>
<tr><td>Regla de Valor</td><td>Se puede configurar una de las cuatro reglas de umbral.</td></tr>
<tr><td rowspan="3">Evento de Luz</td><td>Si el evento de luz está habilitado, puedes configurar el intervalo de subida basado en la temperatura.</td><td>Por ejemplo, Intervalo de Subida=10, Valor≥30, si la temperatura es mayor a 30 %, el dispositivo subirá la ubicación en intervalos de 10 minutos.</td></tr>
<tr><td>Intervalo de Enlace Ascendente (min)</td><td>Cuando la luz excede el umbral, la ubicación y los datos del sensor se cargan según este intervalo.</td></tr>
<tr><td>Regla de Valor</td><td>Se puede establecer una de las cuatro reglas de umbral.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### Configuración del Modo de Geolocalización

El rastreador soporta posicionamiento vía GNSS, Wi-Fi y Bluetooth.

- **GNSS**: La longitud y latitud se pueden obtener directamente a través de GPS y otro posicionamiento satelital, luego cargar datos vía LoRa.
- **Wi-Fi**: Escaneo pasivo, carga las 4 direcciones MAC escaneadas vía LoRa.
- **BLE**: Carga las 3 mejores direcciones MAC de señal de Beacon escaneadas vía LoRa.

<table>
<tr><th colspan="1"><b>Geolocalización</b></th><th colspan="1"><b>Descripción</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">Estrategia de Geolocalización</td><td colspan="1">Solo GNSS</td><td colspan="1"><p>Usar GNSS por defecto. </p><p>Solo se usa GNSS para posición.</p></td></tr>
<tr><td colspan="1">Solo Wi-Fi</td><td colspan="1">Solo se usan escaneos Wi-Fi para posición.</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">Usar Wi-Fi antes que GNSS. Si Wi-Fi falla, entonces usar GNSS en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">Usar GNSS antes que Wi-Fi. Si GNSS falla, entonces usar Wi-Fi en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">Solo Bluetooth</td><td colspan="1">Solo se usan escaneos Bluetooth para posición.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">Usar Bluetooth antes que Wi-Fi. Si Bluetooth falla, entonces usar Wi-Fi en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">Usar Bluetooth antes que GNSS. Si Bluetooth falla, entonces usar GNSS en un ciclo de geolocalización.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">Usar Bluetooth, Wi-Fi y GNSS para posicionamiento por turnos (cambiar al siguiente tipo de posicionamiento después de que un tipo de posicionamiento falle)</td></tr>
<tr><td colspan="1">Tiempo de Espera GNSS</td><td colspan="1"><p>El tiempo máximo a esperar para que el </p><p>GNSS obtenga una posición aproximada</p></td><td colspan="1"><p>Por defecto es 60s. </p><p>No se recomienda modificar, a mayor tiempo, mayor consumo de energía.</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>Caché de Datos GNSS</td><td colspan="1">Cuando no es posible cargar datos a través de LoRa, los datos se guardan localmente y se cargan cuando se recupera la señal LoRa.</td><td colspan="1">Desactivado por defecto.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

Después de configurar todos los parámetros, haz clic en "Send".
Si no es necesario modificar ningún parámetro, sal de la configuración Bluetooth y regresa a la página principal. En este punto, el dispositivo inicia una solicitud de acceso a la red LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### Vista de Datos del Dispositivo

#### App SenseCAP Mate

Verifica la Ubicación en la APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### Portal SenseCAP

La función principal del Portal SenseCAP es gestionar dispositivos SenseCAP y almacenar datos. Está construido en Azure, un servicio en la nube seguro y confiable de Microsoft. Los usuarios pueden solicitar una cuenta y vincular todos los dispositivos a esta cuenta. El Portal SenseCAP proporciona un portal web y API. El portal web incluye Panel de Control, Gestión de Dispositivos, Gestión de Datos y Gestión de Claves de Acceso. La API está abierta a los usuarios para desarrollo adicional.

- **Panel de Control:** Incluye Resumen de Dispositivos, Anuncios, Datos de Escena y Gráfico de Datos, etc.
- **Gestión de Dispositivos:** Gestionar dispositivos SenseCAP.
- **Gestión de Datos:** Gestionar datos, incluyendo sección de Tabla de Datos y Gráfico, proporcionando métodos para buscar datos.
- **Sistema de Subcuentas:** Registrar subcuentas con diferentes permisos.
- **Gestión de Claves de Acceso:** Gestionar Clave de Acceso (para acceder al servicio API), incluyendo Crear Clave, Actualizar Clave y Verificar Clave.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Vista de Datos del Dispositivo

Inicia sesión en [Portal SenseCAP](http://sensecap.seeed.cc)

Si has creado una cuenta a través de la APP, puedes iniciar sesión directamente.

1) Selecciona registrar cuenta, ingresa información de email y haz clic en "register", el email de registro será enviado al buzón del usuario

2) Abre el email "SenseCAP…", haz clic en el enlace de salto, completa la información relevante y completa el registro

3) Regresa a la interfaz de inicio de sesión y completa el inicio de sesión

Consulta [Guía de Usuario del Portal SenseCAP](https://sensecap-docs.seeed.cc/quickstart.html) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## API SenseCAP

La API SenseCAP es para que los usuarios gestionen dispositivos IoT y datos. Incluye 3 tipos de métodos API: protocolo HTTP, protocolo MQTT y protocolo Websocket.

- Con la API HTTP, los usuarios pueden gestionar dispositivos LoRa, para obtener datos en bruto o datos históricos.
- Con la API MQTT, los usuarios pueden suscribirse a los datos de medición en tiempo real del sensor a través del protocolo MQTT.
- Con la API Websocket, los usuarios pueden obtener datos de medición en tiempo real de sensores a través del protocolo Websocket.

Por favor consulta [Guía de Usuario de API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
