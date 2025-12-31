---
description: Get_Started_with_SenseCAP_T2000_tracker
title: Inicio Rápido
keywords:
- SenseCAP_T2000_tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /es/Get_Started_with_SenseCAP_T2000_tracker
last_update:
  date: 12/23/2025
  author: Janet
---

# Comenzar con SenseCAP T2000 Tracker

Este capítulo te muestra cómo configurar rápidamente tu SenseCAP T2000 Tracker con la App SenseCraft.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Por favor asegúrate de tener cobertura de una red LoRaWAN, como Helium, TTN u otras redes LoRaWAN. Sin redes LoRaWAN, el dispositivo no puede enviar datos a la nube. La forma más fácil de usar los rastreadores es con el `SenseCAP LoRaWAN Gateway` y la `SenseCraft app`.
:::

## Descripción del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Hardware_Overview.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000AB_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">Vista Explosiva T2000-A/B</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">Vista Explosiva T2000-C con Panel Solar</div>  
<br />

## Funciones del Dispositivo

### Modo de Trabajo

Para aplicar a diferentes escenarios, hay varios modos de trabajo diferentes en el rastreador SenseCAP T2000, que puedes elegir según tus necesidades.

| **Modo de Trabajo** | **Descripción** | **Escenario** |
| - | - | - |
| Modo Standby | <ul><li>Solo se suben paquetes de latido, que incluyen únicamente información de la batería.</li><li>La ubicación se puede obtener usando el comando downlink LoRa.</li></ul> | Si necesitas localizar el dispositivo durante mucho tiempo y el dispositivo puede funcionar durante mucho tiempo antes de ser cargado, la plataforma en la nube puede emitir un comando de solicitud de ubicación para localizar el dispositivo. |
| Modo Periódico | Establece un intervalo en el que el dispositivo sube periódicamente ubicación, datos del acelerómetro de 3 ejes e información de la batería. | Recomendado para la mayoría de escenarios<ul><li>Seguimiento de activos</li><li>Monitoreo de ganado</li></ul> |
| Modo Evento | Ajusta el intervalo de subida basado en los sensores del acelerómetro de 3 ejes, incluyendo eventos de movimiento, tiempo de espera sin movimiento y eventos de choque. El dispositivo subirá ubicación, datos del acelerómetro de 3 ejes e información de la batería cada vez que se active un evento. | Se recomienda cuando necesitas monitorear el estado de movimiento del objeto rastreado. |

### Función del Sensor

El SenseCAP T2000 Tracker está equipado con un Acelerómetro de 3 Ejes.

- Puedes elegir habilitar o deshabilitar el sensor en la App SenseCraft (deshabilitado por defecto).
- Puedes configurar los umbrales correspondientes para el acelerómetro de 3 ejes según las necesidades de tu aplicación, se activan eventos de movimiento/sin movimiento y eventos de choque.

### Caché de Datos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache2.png" alt="pir" width={800} height="auto" /></p>

El dispositivo puede almacenar datos en caché, lo cual se puede habilitar a través de la configuración Bluetooth abriendo `Location Data Cache`. El dispositivo sube paquetes de confirmación. Cuando la cobertura de señal LoRaWAN es débil o no hay cobertura de red, el dispositivo no puede recibir un ACK al subir datos. En este caso, los datos se guardarán y entrarán al siguiente ciclo. Cuando el dispositivo suba datos exitosamente en algún momento, enviará datos offline.

El dispositivo sube primero los datos de ubicación en tiempo real. Una vez que la plataforma devuelve un ACK para ese uplink, el rastreador comienza a subir los datos en caché almacenados localmente, comenzando desde las entradas más antiguas para evitar sobrescribir datos más nuevos.

El intervalo de uplink de caché se ha establecido en 40s. Los datos en caché se enviarán continuamente en este intervalo hasta que se active un nuevo uplink de ubicación en tiempo real o la plataforma deje de devolver ACKs durante el proceso.

El número máximo de datos que se pueden almacenar en caché es de 1000 registros.

Hacer clic en el botón `Clear Cache` borrará todos los datos en caché.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache.png" alt="pir" width={800} height="auto" /></p>

### Función del Botón

#### Instrucciones de Conexión Magnética

| **Estado**        | **Operación** |
|-------------------|--------------|
| Encender          | Acerca el imán al área del sensor y toca 4 veces rápidamente. El encendido es exitoso cuando la luz verde se enciende. |
| Apagar            | Acerca el imán al área del sensor y toca 4 veces rápidamente. El apagado es exitoso cuando la luz verde se enciende. |
| Bluetooth Encendido | Acerca el imán al área del sensor y toca 2 veces rápidamente. El escaneo Bluetooth se habilita cuando la luz azul parpadea. |
| Bluetooth Apagado   | Acerca el imán al área del sensor y toca 2 veces rápidamente. |

#### Indicador de Estado LED

| Estado              | Color LED | Patrón del Indicador     |
|---------------------|-----------|--------------------------|
| Encendido           | Verde     | Encendido fijo por 1s    |
| Apagado             | Verde     | Encendido fijo por 1s    |
| Uniéndose a la Red  | Verde     | Luz respiratoria         |
| Unión Exitosa       | Verde     | Parpadeo rápido 5 veces  |
| Fallo de Unión      | Rojo      | Parpadeo rápido 5 veces  |
| Búsqueda Bluetooth  | Azul      | Parpadeo lento continuo  |
| Bluetooth Conectado | Azul      | Encendido fijo           |
| Alarma de Manipulación | Rojo   | Parpadeo rápido continuo |
| Actualizando Firmware | Verde   | Parpadeo lento continuo  |
| Entrar Modo DFU     | Verde     | Encendido fijo           |

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_PowerOn.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Encender/Apagar</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_GreenBreathingLight.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Después del encendido, la luz verde respiratoria</div>
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Bluetooth.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Entrar/Salir del modo Bluetooth</div>  

<br />

:::info Note

- Se recomienda apagar el dispositivo si no está en uso.
- Cuando se enciende por primera vez, se recomienda probarlo al aire libre, ya que el GPS necesita actualizar la hora vía satélite.
- Por favor asegúrate de que la banda de frecuencia coincida con la frecuencia de tu gateway.
:::

## Comenzar

### Conectar a la App SenseCraft

- **Paso 1**: Descargar la App SenseCraft

La App SenseCraft se usa para configurar parámetros LoRa, intervalo, vincular dispositivos a tu cuenta y verificar información básica del dispositivo.

- Para iOS, por favor busca "SenseCraft" en el App Store y descárgala.
- Para Android, por favor busca "SenseCraft" en Google Store y descárgala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2**: Agregar Dispositivo

Inicia sesión en la APP SenseCraft.
Haz clic en la pestaña '+' en la parte superior derecha, luego escanea el código QR en la etiqueta del dispositivo.
Haz clic en 'Add to account' luego puedes 'Configure' el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AddDevice.png" alt="pir" width={800} height="auto" /></p>

Acerca el imán al área del sensor y toca 4 veces rápidamente para encenderlo, luego el rastreador entrará automáticamente al emparejamiento Bluetooth (si el rastreador ya está encendido, toca 2 veces rápidamente para entrar manualmente al emparejamiento Bluetooth), y selecciona el dispositivo por SN.

Hay 2 modos de configuración:

- **Configuración Rápida**: Para inicio rápido, puedes seleccionar configuración rápida de los parámetros básicos
- **Configuración Avanzada**: Para establecer más parámetros por favor revisa los siguientes pasos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationMode.png" alt="pir" width={800} height="auto" /></p>

### Configuración Rápida

Para la Configuración Rápida, solo necesitas configurar los siguientes parámetros:

- **Frecuencia**: debe ser la misma que tu gateway.
- **Intervalo de uplink**: El intervalo de uplink del Modo Periódico (modo por defecto), puedes establecer otro modo vía "Device Bluetooth Configuration" en la página "User".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickConfiguration.png" alt="pir" width={800} height="auto" /></p>

El Tracker intentará unirse a la red LoRaWAN después de salir del modo de emparejamiento Bluetooth, la luz verde respiratoria parpadea cuando intenta unirse a la red, y parpadea 5 veces rápidamente si la red se une exitosamente.

### Configuración Avanzada

- Abre la APP y haz clic en `Device Bluetooth Configuration` en la página `User`. Luego selecciona `SenseCAP Asset Tracker T2000` para entrar a `Setup` para configurar el rastreador.
- Sigue los pasos anteriores para entrar al modo de emparejamiento Bluetooth.
- Selecciona el dispositivo por S/N (S/N está en la etiqueta del dispositivo) y elige `Advanced Configuration`. Luego, la información básica del rastreador se mostrará después de entrar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AdvancedConfiguration.png" alt="pir" width={800} height="auto" /></p>

Hay cuatro páginas de configuración en total.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationPage.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Measure` en la página `Information` - `Basic`, luego obtendrás los valores del sensor:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Measure.png" alt="pir" width={800} height="auto" /></p>

<br />

#### Configuración de Parámetros LoRa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Platform.png" alt="pir" width={800} height="auto" /></p>

**Plataforma**

<table align="center">
  <tbody>
    <tr>
    <td><h4>Plataforma</h4></td>
    <td><h4>Descripción</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>Plataforma predeterminada.
Debe usarse con SenseCAP Gateway. SenseCAP construye un servidor TTN propietario que permite que los sensores se usen listos para usar cuando se emparejan con un gateway SenseCAP. <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>Cuando hay cobertura de la red Helium, los datos pueden subirse vía Helium. Los dispositivos funcionan en una consola privada de Helium de SenseCAP. Los usuarios no necesitan crear dispositivos en la consola de Helium, listo para usar con SenseCraft App y Portal. <br /><a href="https://explorer.helium.com/" target="_blank"><span>Cobertura de Helium</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Conectar dispositivo a tu [consola pública de Helium](https://console.helium.com)</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Conectar dispositivo a tu [servidor TTN(TTS)](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)</td>
    </tr>
            <tr>
    <td>Otra Plataforma</td>
    <td>Otro Servidor de Red LoRaWAN</td>
    </tr>
  </tbody>
</table>

**Plan de Frecuencia**

Los rastreadores están fabricados para soportar un plan de frecuencia universal de 863MHz~928MHz. Cada dispositivo individual puede soportar 8 planes de frecuencia, incluyendo EU868, US915, AU915, AS923-1-TTN, AS923-2-TTN, IN865, KR920 y RU864.

<table align="center">
  <tbody>
    <tr>
    <td><h4>Parámetros</h4></td>
    <td><h4>Descripción</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Plan de Frecuencia</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / RU864</td>
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

:::info Nota
Diferentes países y servidores de red LoRaWAN usan diferentes planes de frecuencia.<br />
Para la red Helium, consulta: [Planes de frecuencia de Helium](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
Para The Things Network, consulta:[Planes de frecuencia de TTN](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
Si no estás seguro de qué banda de frecuencia se requiere en tu área, consulta a nuestro equipo de soporte técnico o consulta [RP002-1.0.0 LoRaWAN® Regional Parameters](https://lora-alliance.org/wp-content/uploads/2019/11/rp_2-1.0.0_final_release.pdf) para información detallada de frecuencias regionales.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_FrequencyPlan.jpg" alt="pir" width={400} height="auto" /></p>

**Tipo de Activación**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_LoRaSetup.png" alt="pir" width={800} height="auto" /></p>

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
Cuando el sensor se selecciona para usarse con una plataforma pública como Helium o TTN, el EUI no cambiará, y el sensor generará un nuevo App EUI y App Key fijos para el acceso a la red.<br />
Para obtener información EUI en lotes, contacta a nuestro equipo de ventas.
:::

<br />

#### Configuración del Modo de Trabajo

Configura el modo de trabajo según tus necesidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_WorkMode.png" alt="pir" width={800} height="auto" /></p>

<table>
<tr><th colspan="1"><b>Parámetros</b></th><th colspan="1"><b>Descripción</b></th><th colspan="1"><b>Predeterminado / Nota</b></th></tr> <tr><td colspan="1">Intervalo de Latido</td><td colspan="1">Cuando no se suben datos por el dispositivo dentro del intervalo de latido, se activará un paquete de latido. Este paquete solo contiene información de la batería.</td><td colspan="1">Predeterminado 720 minutos.</td></tr> <tr><td colspan="1">Habilitar Sensor de 3 Ejes</td><td colspan="1">Si este interruptor está activado, el sensor de 3 ejes será recolectado y subido, pero aumentará el consumo de energía.</td><td colspan="1">Desactivado por defecto.</td></tr> <tr><td colspan="1">Habilitar Alarma de Desmontaje</td><td colspan="1">Si este interruptor está activado, el dispositivo activa una alarma cuando el dispositivo es removido después de la instalación.</td><td colspan="1">Habilitado por defecto.</td></tr> <tr><td colspan="1">Duración de Alarma de Desmontaje(min)</td><td colspan="1">Este parámetro especifica cuánto tiempo el dispositivo sigue reportando después de que se activa una Alarma de Desmontaje, enviando un paquete de posición en tiempo real con el evento de alarma cada minuto.</td><td colspan="1">Esta configuración solo es visible cuando Habilitar Alarma de Desmontaje está activado. Predeterminado 3 minutos.</td></tr> <tr><td colspan="1" rowspan="3">Modo de Trabajo</td><td colspan="1"><b>Modo de Espera</b></td><td colspan="1">Sube paquetes de latido (solo nivel de batería) basado en el intervalo de latido.</td></tr> <tr><td colspan="1"><b>Modo Periódico</b></td><td colspan="1">Los datos de ubicación y sensor se suben según el intervalo de subida.</td></tr> <tr><td colspan="1"><b>Modo de Evento</b></td><td colspan="1">Establece condiciones de activación de umbral basadas en valores medidos como movimiento y choque, y ajusta el intervalo de subida cuando no se activa ningún evento.</td></tr> <tr><td colspan="1">Intervalo de Subida (min)</td> <td colspan="1"><b>Modo Periódico</b></td> <td colspan="1">Localiza periódicamente y sube datos. Predeterminado 60 minutos. Mayor frecuencia aumenta el consumo de energía.</td></tr> <tr><td colspan="1">Restaurar Todas las Configuraciones</td><td colspan="2">Restaura todos los parámetros de configuración a los ajustes de fábrica, incluyendo LoRa, Modo de Trabajo, y Geolocalización.</td></tr>
</table>

<br />

Para el Modo de Evento, hay tres eventos:

<table>
<tr><th><b>Modo de Evento</b></th><th colspan="2"><b>Descripción</b></th></tr>
<tr><td>Intervalo de Subida – Sin evento (min)</td><td>Este es el intervalo de subida cuando no se activan eventos.</td><td><p>Predeterminado 60 minutos.</p><p>Rango: 1~10080 min.</p></td></tr>
<tr><td rowspan="2">Evento de Choque</td><td>Cuando el evento de choque está habilitado, el choque del rastreador activará un reporte de datos, incluyendo el evento de choque, ubicación, y datos del sensor.</td><td>Desactivado por defecto.</td></tr>
<tr><td>Umbral de Movimiento de 3 Ejes (mg)</td><td>Predeterminado es 300. Cuando la aceleración excede 300mg, se activa el evento de choque.</td></tr>
<tr><td rowspan="3">Evento de Movimiento</td><td>Cuando la aceleración excede el valor establecido, el dispositivo comienza a moverse, y cuando no hay movimiento por 2 minutos, el movimiento del dispositivo se detiene. Establece el intervalo de subida según el inicio del movimiento y la detención del movimiento.</td><td>Desactivado por defecto.</td></tr>
<tr><td>Umbral de Movimiento de 3 Ejes (mg)</td><td>Predeterminado es 30. Cuando la aceleración excede 30mg, determina que el dispositivo está en movimiento, cuando está 2 minutos por debajo de este valor, determina que el dispositivo está inmóvil.</td></tr>
<tr><td>Intervalo de Subida en Movimiento(min)</td><td>Establece el intervalo de subida para el estado actual cuando el dispositivo está en movimiento.</td></tr>
<tr><td rowspan="2">Evento de Inmovilidad</td><td colspan="2">Cuando el dispositivo está estacionario en una ubicación por más de cierta cantidad de tiempo, se activa un evento de tiempo de espera de inmovilidad. </td></tr>
<tr><td>Tiempo de Espera de Inmovilidad(min)</td><td>Predeterminado es 360 minutos.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_EventMode.png" alt="pir" width={800} height="auto" /></p>

<br />

#### Configuración del Modo de Geolocalización

El rastreador soporta posicionamiento vía GNSS, Wi-Fi (Solo T2000-B soporta), y Bluetooth.

- **GNSS**: La longitud y latitud pueden obtenerse directamente a través de GPS y otro posicionamiento satelital, luego subir datos vía LoRa.
- **Wi-Fi**: Escaneo pasivo, sube las 5 direcciones MAC escaneadas vía LoRa.
- **BLE**: Sube las 5 direcciones MAC escaneadas de Beacon vía LoRa.

<table>
<tr><th><b>Estrategia de Geolocalización</b></th><th colspan="2"><b>Descripción</b></th></tr>
<tr><td rowspan="9"><b>Estrategia de Geolocalización</b></td><td>Solo GNSS</td><td>Uso predeterminado de GNSS. Solo se usa GNSS para posición.</td></tr>
<tr><td>Solo Wi-Fi</td><td>Solo se utilizan escaneos Wi-Fi para la posición.</td></tr>
<tr><td>Solo Bluetooth</td><td>Solo se utilizan escaneos Bluetooth para la posición.</td></tr>
<tr><td>GNSS + Wi-Fi</td><td>Usar GNSS antes que Wi-Fi. Si GNSS falla, entonces usar Wi-Fi en un ciclo de geolocalización.</td></tr>
<tr><td>GNSS + Bluetooth</td><td>Usar GNSS antes que Bluetooth. Si GNSS falla, entonces usar Bluetooth en un ciclo de geolocalización.</td></tr>
<tr><td>Wi-Fi + GNSS</td><td>Usar Wi-Fi antes que GNSS. Si Wi-Fi falla, entonces usar GNSS en un ciclo de geolocalización.</td></tr>
<tr><td>Bluetooth + GNSS</td><td>Usar Bluetooth antes que GNSS. Si Bluetooth falla, entonces usar GNSS en un ciclo de geolocalización.</td></tr>
<tr><td>Bluetooth + Wi-Fi</td><td>Usar Bluetooth antes que Wi-Fi. Si Bluetooth falla, entonces usar Wi-Fi en un ciclo de geolocalización.</td></tr>
<tr><td>Bluetooth + Wi-Fi + GNSS</td><td>Usar Bluetooth, Wi-Fi y GNSS para posicionamiento por turnos (cambiar al siguiente tipo de posicionamiento después de que un tipo de posicionamiento falle). </td></tr>
<tr><td><b>Tiempo Máximo de Escaneo GNSS(s)</b></td><td>El tiempo máximo para esperar a que el GNSS obtenga una posición aproximada.</td><td><p>Por defecto es 60s.</p><p>No se recomienda modificar, cuanto mayor sea el tiempo, mayor será el consumo de energía.</p></td></tr>
<tr><td><b>Tiempo de Espera de Escaneo iBeacon(s)</b></td><td>Bajo posicionamiento Bluetooth, el tiempo máximo para que el dispositivo escanee balizas Bluetooth circundantes para obtener una posición aproximada.</td><td><p>Por defecto es 3s.</p><p>Rango 1~10s.</p></td></tr>
<tr><td><b>UUID de Grupo (Hex)</b></td><td>Permite al rastreador escanear y reportar solo balizas Bluetooth cuyos UUIDs coincidan con el patrón especificado, ayudando a filtrar balizas irrelevantes.</td><td><p>Establecer Filtro UUID, hasta 16 bytes. Por ejemplo, si se establece como '01 02 03 04' filtrará balizas con el patrón '01 02 03 04 xx xx ...'</p></td></tr>
<tr><td><b>Caché de Datos de Ubicación</b></td><td>Cuando no puede cargar datos vía LoRa, los datos se guardan localmente (hasta 1000 registros) y se cargan cuando se recupera la cobertura LoRa.</td><td><p>Desactivado por defecto.</p></td></tr>
<tr><td><b>Limpiar Caché</b></td><td colspan="2">Limpiar todos los datos de caché históricos.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ScanTime.png" alt="pir" width={800} height="auto" /></p>

Después de configurar todos los parámetros, haz clic en "Send".
Si no es necesario modificar ningún parámetro, sal de la configuración Bluetooth y regresa a la página principal.
En este punto, el dispositivo inicia una solicitud de acceso a la red LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_SendButton.png" alt="pir" width={400} height="auto" /></p>

### Vista de Datos del Dispositivo

#### App SenseCraft

Verifica la Ubicación en la APP.
Después de vincular el dispositivo, ingresa a la página del dispositivo y haz clic en el botón en la esquina superior derecha para ver los datos históricos de ubicación del dispositivo.
Haz clic en el filtro para elegir ver datos de ubicación bajo modos de posicionamiento como 'All/GNSS/BLE/Wi-Fi'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataView.png" alt="pir" width={800} height="auto" /></p>

Si el dispositivo activa una Alarma de Desmontaje, se mostrará un icono de alarma rojo junto a cada paquete de datos durante el período de activación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm1.png" alt="pir" width={800} height="auto" /></p>

La Alarma de Desmontaje aparecerá tanto en las páginas `Device` como `Details` en la APP, junto con una ventana de notificación, lo que ayuda a los usuarios a verificar rápidamente el estado del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm2.png" alt="pir" width={800} height="auto" /></p>

#### Portal SenseCAP

La función principal del [Portal SenseCAP](https://sensecap.seeed.cc/portal/#/dashboard) es gestionar dispositivos SenseCAP y almacenar datos. Está construido sobre Azure, un servicio en la nube seguro y confiable de Microsoft. Los usuarios pueden solicitar una cuenta y vincular todos los dispositivos a esta cuenta. El Portal SenseCAP proporciona un portal web y API. El portal web incluye Dashboard, Gestión de Dispositivos, Gestión de Datos y Gestión de Claves de Acceso. La API está abierta a los usuarios para desarrollo adicional.

- **Dashboard:** Incluye Resumen de Dispositivos, Anuncios, Datos de Escena y Gráfico de Datos, etc.
- **Gestión de Dispositivos:** Gestionar dispositivos SenseCAP.
- **Gestión de Datos:** Gestionar datos, incluyendo sección de Tabla de Datos y Gráfico, proporcionando métodos para buscar datos.
- **Sistema de Subcuentas:** Registrar subcuentas con diferentes permisos.
- **Gestión de Claves de Acceso:** Gestionar Clave de Acceso (para acceder al servicio API), incluyendo Crear Clave, Actualizar Clave y Verificar Clave.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Vista de Datos del Dispositivo

Inicia sesión en [Portal SenseCAP](http://sensecap.seeed.cc)

Si has creado una cuenta a través de la APP, puedes iniciar sesión directamente.

1) Selecciona registrar cuenta, ingresa información de email y haz clic en "register", el email de registro será enviado al buzón del usuario

2) Abre el Email "SenseCAP…", haz clic en el enlace de salto, completa la información relevante y completa el registro

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
