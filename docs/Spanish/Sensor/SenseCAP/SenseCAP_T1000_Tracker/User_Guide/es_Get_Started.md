---
description: Get_Started_with_SenseCAP_T1000_tracker
title: Inicio Rápido
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 07/24/2025
  author: Guillermo
---

Este capítulo te guiará para preperar tu via SenseCAP Mate APP.

<center><iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Guía de Usuario </font></span></strong>
    </a>
</div>

## Funciones del Dispositivo

### Modo de Trabajo

Para adaptarse a distintos escenarios, el rastreador SenseCAP T1000 ofrece varios modos de trabajo que puedes elegir según tus necesidades.

|**Modo de Trabajo**|**Descripción**|**Escenario**|
| - | - | - |
|Modo en Espera|<p>Solo se suben paquetes de latido, que incluyen únicamente información de batería.</p><p>La ubicación puede obtenerse mediante un comando de bajada LoRa.</p>|Si necesitas ubicar el dispositivo durante un largo periodo y este puede funcionar por mucho tiempo antes de cargarse, la plataforma en la nube puede enviar un comando para solicitar su localización.|
|Modo Periódico|Establece un intervalo para que el dispositivo suba periódicamente los datos de ubicación y sensores.|Este modo se recomienda para la mayoría de los escenarios.|
|Modo por Evento|Ajusta el intervalo de carga en función de los sensores de temperatura, luz y aceleración del rastreador, incluyendo eventos de temperatura, luz, movimiento, inactividad y sacudida.|Puede usarse en escenarios complejos, como el monitoreo del transporte de objetos valiosos. Pero el consumo de energía aumenta considerablemente.|

### Función de Sensores

El rastreador SenseCAP T1000 está equipado con 3 sensores: Sensor de temperatura, sensor de luz y acelerómetro de 3 ejes. Puedes habilitar o deshabilitar estos sensores:

* Apaga todos los sensores, o elige una versión sin sensores para reducir costos.
* Solo se habilitan los sensores de temperatura y luz para monitorear datos periódicamente con bajo consumo.
* Cuando se usan temperatura, luz y acelerómetro como condiciones de activación, el sensor estará siempre encendido, lo que implica un mayor consumo energético.

|**Sensor**|**Descripción**|
| - | - |
|Temperatura|<p>Este es un sensor de temperatura independiente integrado con **una precisión de ±0.5~1℃**. Puede haber cierto retraso en la medición ya que está separado del chasis.</p><p>Rango: -20 a 60℃; Precisión: ± 1℃ (mín 0.5℃, máx 1℃); Resolución: 0.1℃</p>|
|Luz|<p>El sensor de luz no mide el valor lumínico real, sino un porcentaje de intensidad desde la oscuridad hasta la máxima iluminación. Se usa principalmente para monitoreo anti-manipulación y detección de luz ambiental.</p><p>Rango: 0 a 100% (0% es oscuro, 100% es muy brillante)</p>|
|Acelerómetro de 3 ejes|Mediante un valor de aceleración configurado, se activan eventos de movimiento o sacudida.|

### Caché de Datos

El dispositivo puede almacenar datos en caché, función que puede activarse mediante configuración por Bluetooth habilitando "GNSS Data Cache". El dispositivo envía paquetes de confirmación. Cuando la cobertura LoRaWAN es débil o inexistente, el dispositivo no puede recibir el acuse de recibo. En tal caso, los datos se guardan y se suben en el siguiente ciclo. Cuando logra subir los datos correctamente, enviará también los datos almacenados. El número máximo de registros en caché es de 1000.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Función del Botón

<table>
  <thead>
    <tr>
      <th><b>Acciones</b></th>
      <th><b>Descripción</b></th>
      <th><b>Estado del LED</b></th>
      <th><b>Buzzer</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Presionar botón durante 3 segundos</td>
      <td>Si el rastreador está apagado, mantener presionado 3 segundos para encender. El emparejamiento Bluetooth se activa automáticamente y se puede usar la app para conectarse.</td>
      <td>El LED parpadea una vez por segundo.</td>
      <td>Melodía ascendente</td>
    </tr>
    <tr>
      <td>Si el dispositivo ya está encendido, mantener 3 segundos activa el emparejamiento Bluetooth.</td>
      <td>El LED parpadea una vez por segundo.</td>
      <td>Ninguno</td>
    </tr>
    <tr>
      <td>Presionar botón durante 9 segundos</td>
      <td>Apaga el dispositivo.</td>
      <td>Ninguno</td>
      <td>Melodía descendente</td>
    </tr>
    <tr>
      <td>Unirse a red LoRa</td>
      <td>Al salir de configuración Bluetooth, intenta unirse a red LoRaWAN.</td>
      <td>Luz de respiración parpadea al intentar unirse; parpadeo rápido si tiene éxito</td>
      <td>Melodía rápida y alegre al conectarse</td>
    </tr>
    <tr>
      <td rowSpan={2}>Presionar una vez</td>
      <td>Obtiene ubicación y datos de sensores, sube datos y activa el evento “Presionar una vez”.</td>
      <td>LED se enciende por 2 segundos</td>
      <td>Beep cuando los datos se suben correctamente</td>
    </tr>
    <tr>
      <td>Si el Bluetooth está encendido, un solo clic lo apaga.</td>
      <td>LED se apaga</td>
      <td>Ninguno</td>
    </tr>
    <tr>
      <td rowSpan={3}>Presionar dos veces seguidas</td>
      <td>Si el SOS está en modo de disparo único, activa ese modo y sube datos una sola vez.</td>
      <td>Parpadea con sonido</td>
      <td>3 segundos de alarma</td>
    </tr>
    <tr>
      <td>Si el SOS está en modo continuo, activa el envío continuo (cada minuto por 30 veces).</td>
      <td>Parpadea con sonido</td>
      <td>Sonido de alarma constante</td>
    </tr>
    <tr>
      <td>Presionar doble clic dos veces para salir de modo SOS</td>
      <td>Ninguno</td>
      <td>Ninguno</td>
    </tr>
  </tbody>
</table>

:::info Nota
* Se recomienda apagar el dispositivo si no se usa.
* Al encender por primera vez, se recomienda probar al aire libre para que el GPS sincronice el tiempo.
* Asegúrate de que la frecuencia coincide con la del gateway.
:::

## Primeros Pasos

### Conexión con la App SenseCAP Mate

* **Paso 1**: Descarga la App SenseCAP Mate

La App SenseCAP Mate sirve para configurar parámetros LoRa, intervalos, vincular dispositivos a tu cuenta y consultar información básica.

* Para iOS: busca “SenseCAP Mate” en la App Store.
* Para Android: busca “SenseCAP Mate” en Google Play Store.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2**: Añadir dispositivo

Inicia sesión en la App SenseCAP Mate.  
Haz clic en "Add Device" (Agregar Dispositivo) en la esquina superior derecha y escanea el código QR de la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

Presiona el botón durante 3 segundos y selecciona el dispositivo por número de serie (SN).

Hay dos modos de configuración:

* **Configuración Rápida**: Para comenzar rápidamente, configura solo los parámetros básicos.
* **Configuración Avanzada**: Para opciones adicionales, sigue los siguientes pasos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### Configuración Rápida

En la Configuración Rápida, solo necesitas establecer los siguientes parámetros:

* **Frecuencia**: debe coincidir con la de tu gateway.
* **Intervalo de subida**: El intervalo de subida del Modo Periódico (modo predeterminado). Puedes cambiarlo a otro modo desde “Configuración Bluetooth del Dispositivo” en la página de “Usuario”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

El rastreador intentará unirse a la red LoRaWAN. La luz de respiración parpadea durante el intento y parpadea rápidamente si la unión es exitosa, acompañado de una melodía alegre.

### Configuración Avanzada

* Mantén presionado el botón por 3 segundos para encender y activar automáticamente el emparejamiento Bluetooth.
* Abre la app y selecciona “Tracker T1000”. Pulsa “Setup” para configurarlo.
* Selecciona el dispositivo por número de serie (S/N, visible en la etiqueta). Luego se mostrará la información básica del sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

Haz clic en “Measure” (Medir) para obtener los valores de los sensores:

|Temperatura|Rango: -20 a 60℃; Precisión: ± 1℃ (mín 0.5℃, máx 1℃); Resolución: 0.1℃|
| - | - |
|Luz|0 a 100% (0% es oscuro, 100% es muy brillante)|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### Configuración de Parámetros LoRa

Los rastreadores están diseñados para admitir un plan de frecuencia universal de 863 MHz a 928 MHz en un solo SKU. Cada dispositivo puede admitir 7 planes de frecuencia.

<table align="center">
  <caption><p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Plataforma</p></caption>
  <thead>
    <tr>
      <th><strong>Plataforma</strong></th>
      <th><strong>Descripción</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SenseCAP para The Things Network</td>
      <td>
        Plataforma predeterminada. Debe utilizarse con una puerta de enlace SenseCAP. SenseCAP construye un servidor TTN propio que permite el uso de sensores listos para funcionar cuando se emparejan con una puerta de enlace SenseCAP.
        <br />
        <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank">SenseCAP Gateway Exterior</a>
        <br />
        <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank">SenseCAP Gateway Interior</a>
      </td>
    </tr>
    <tr>
      <td>SenseCAP para Helium</td>
      <td>
        Cuando hay cobertura de red Helium, los datos pueden subirse mediante Helium. Los dispositivos se ejecutan en una consola privada de Helium de SenseCAP. Los usuarios no necesitan crear dispositivos en la consola Helium, funciona directamente con la app SenseCAP Mate y el portal.
        <br />
        <a href="https://explorer.helium.com/" target="_blank">Helium Coverage</a>
      </td>
    </tr>
    <tr>
      <td>Helium</td>
      <td>Conecta el dispositivo a tu consola pública de Helium</td>
    </tr>
    <tr>
      <td>The Things Network</td>
      <td>Conecta el dispositivo a tu servidor TTN (TTS)</td>
    </tr>
    <tr>
      <td>Otra Plataforma</td>
      <td>Otro servidor de red LoRaWAN</td>
    </tr>
  </tbody>
</table>

<table align="center">
  <tbody>
    <tr>
      <td><h4>Parámetro</h4></td>
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
      <td>LoRaWAN utiliza paquetes confirmados</td>
    </tr>
    <tr>
      <td>ADR de LoRaWAN</td>
      <td>Abierto por defecto</td>
      <td>Parámetros LoRaWAN, se recomienda dejar abierto por defecto</td>
    </tr>
    <tr>
      <td>Restaurar Configuración LoRa</td>
      <td>Cuando la “Plataforma” cambia de otra a SenseCAP, los parámetros LoRa (EUI/App EUI/App Key, etc.) deben restaurarse</td>
      <td>Usa esta función para restaurar parámetros LoRa a valores de fábrica</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

El sensor admite dos modos de acceso a red, siendo **OTAA** el predeterminado.

|**Parámetro**|**Descripción**|
| - | - |
|OTAA (predeterminado)|Activación por aire. Se une a la red usando Device EUI, App EUI y App Key.|
|ABP|Activación por personalización. Se une a la red usando DevAddr, NwkSkey y AppSkey.|

El dispositivo utiliza OTAA por defecto para conectarse a la red LoRaWAN, por lo tanto, se deben establecer los valores de Device EUI, App EUI y App Key.

|**Parámetro**|**Tipo**|
| - | - |
|Device EUI|16 caracteres hexadecimales (0 ~ F)|
|App EUI|16 caracteres hexadecimales (0 ~ F)|
|App Key|32 caracteres hexadecimales (0 ~ F)|

:::info Nota
Cuando se usa la plataforma SenseCAP, los valores de EUI, APP EUI y APP Key están fijos y coinciden con la etiqueta del sensor.  
Si el sensor se configura para usarse en una plataforma pública como Helium o TTN, el EUI no cambia, pero el sensor generará un nuevo App EUI y App Key fijos para el acceso a red.  
Para obtener información de EUI en lote, contacta al equipo de ventas.
:::

<table>
  <tr>
    <th><b>Frecuencia</b></th>
    <th><b>Nombre Común</b></th>
    <th><b>Sub-banda</b></th>
  </tr>
  <tr>
    <td>EU863-870</td><td>EU868</td><td>--------</td>
  </tr>
  <tr>
    <td>US902-928</td><td>US915</td><td>Sub-banda de 1 a 8 (por defecto: 2)</td>
  </tr>
  <tr>
    <td>AU915-928</td><td>AU915</td><td>Sub-banda de 1 a 8 (por defecto: 2)</td>
  </tr>
  <tr>
    <td>KR920-923</td><td>KR920</td><td>--------</td>
  </tr>
  <tr>
    <td>IN865-867</td><td>IN865</td><td>--------</td>
  </tr>
  <tr>
    <td>AS923-1-TTN</td><td>AS1</td><td>Plan de frecuencia para TTN</td>
  </tr>
  <tr>
    <td>AS923-2-TTN</td><td>AS2</td><td>Plan de frecuencia para TTN</td>
  </tr>
  <tr>
    <td rowspan="4">AS923</td><td>AS923-1</td><td rowspan="4">Plan de frecuencia para Helium</td>
  </tr>
  <tr><td>AS923-2</td></tr>
  <tr><td>AS923-3</td></tr>
  <tr><td>AS923-4</td></tr>
</table>

:::info Nota
Diferentes países y servidores de red LoRaWAN usan distintos planes de frecuencia.  
Para Helium, consulta: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)  
Para The Things Network, consulta: [TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### Configuración del Modo de Trabajo

Configura el modo de trabajo según tus necesidades.

<table>
  <tr>
    <th><b>Parámetro</b></th>
    <th><b>Descripción</b></th>
    <th></th>
  </tr>
  <tr>
    <td>Intervalo de Latido</td>
    <td>Cuando no se suben datos en este intervalo, se enviará un paquete de latido (solo incluye info de batería).</td>
    <td>Predeterminado: 720 minutos.</td>
  </tr>
  <tr>
    <td>Activar Temp&Light</td>
    <td>Si está habilitado, se recogerán y enviarán datos de temperatura y luz. Aumenta el consumo de energía.</td>
    <td>Desactivado por defecto.</td>
  </tr>
  <tr>
    <td rowspan="2">Modo de Reporte SOS</td>
    <td>Único</td>
    <td>Si está en modo único, un doble clic activará SOS una vez y enviará ubicación/datos/evento SOS.</td>
  </tr>
  <tr>
    <td>Continuo</td>
    <td><p>Modo predeterminado.</p><p>Un doble clic activará el modo continuo SOS, enviando datos cada minuto por 30 veces.</p></td>
  </tr>
  <tr>
    <td rowspan="3">Modo de Trabajo</td>
    <td>Modo en Espera</td>
    <td>Envía paquetes de latido (nivel de batería) según el intervalo de latido.</td>
  </tr>
  <tr>
    <td>Modo Periódico</td>
    <td>Sube datos de ubicación y sensores según el intervalo configurado.</td>
  </tr>
  <tr>
    <td>Modo por Evento</td>
    <td>Activa la subida de datos al superar umbrales de temperatura, luz o movimiento.</td>
  </tr>
  <tr>
    <td>Intervalo de Subida (min) – Modo Periódico</td>
    <td>Ubicación y datos subidos periódicamente.</td>
    <td><p>Predeterminado: 60 minutos.</p><p>A mayor frecuencia, mayor consumo.</p></td>
  </tr>
  <tr>
    <td>Restaurar Configuración</td>
    <td>Restaura todos los parámetros (LoRa, modo de trabajo, geolocalización) a valores de fábrica.</td>
    <td></td>
  </tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

### Modo de Evento

Para el modo de evento, existen cinco tipos de eventos:

<table>
  <thead>
    <tr>
      <th><b>Modo de Evento</b></th>
      <th><b>Descripción</b></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Intervalo de Envío – Sin evento (min)</td>
      <td>Este es el intervalo de carga cuando no se activan eventos.</td>
      <td>Por defecto: 60 minutos.<br />Rango: 1~10080 min.</td>
    </tr>
    <tr>
      <td rowspan="2">Evento de Impacto</td>
      <td>Cuando el evento de impacto está habilitado, un impacto en el rastreador activará un informe de datos, que incluye el evento de impacto, la ubicación y los datos del sensor.</td>
      <td>Desactivado por defecto.</td>
    </tr>
    <tr>
      <td>Umbral de Movimiento 3 Ejes (mg)</td>
      <td>Por defecto es 300. Cuando la aceleración excede los 300 mg, se activa el evento de impacto.</td>
    </tr>
    <tr>
      <td rowspan="3">Evento de Movimiento</td>
      <td>Cuando la aceleración supera el valor establecido, el dispositivo empieza a moverse, y cuando no hay movimiento durante 2 minutos, el dispositivo deja de moverse. Configura el intervalo de carga según el inicio y detención del movimiento.</td>
      <td>Desactivado por defecto.</td>
    </tr>
    <tr>
      <td>Umbral de Movimiento 3 Ejes (mg)</td>
      <td>Por defecto: 30. Cuando la aceleración supera los 30 mg, se determina que el dispositivo está en movimiento; si permanece 2 minutos por debajo de ese valor, se determina que está en reposo.</td>
    </tr>
    <tr>
      <td>Intervalo de Envío en Movimiento (min)</td>
      <td>Configura el intervalo de carga mientras el dispositivo está en movimiento.</td>
    </tr>
    <tr>
      <td rowspan="2">Evento de Reposo</td>
      <td>Cuando el dispositivo permanece inmóvil en una ubicación durante más de cierto tiempo, se activa un evento de tiempo de espera por inmovilidad.</td>
      <td></td>
    </tr>
    <tr>
      <td>Tiempo de Espera por Reposo (min)</td>
      <td>Por defecto: 360 minutos.</td>
    </tr>
    <tr>
      <td rowspan="4">Evento de Temperatura</td>
      <td>Si el evento de temperatura está habilitado, puedes configurar el intervalo de carga basado en la temperatura.</td>
      <td>Por ejemplo: Intervalo de Envío=10, Valor≥30. Si la temperatura supera los 30 °C, el dispositivo cargará la ubicación cada 10 minutos.</td>
    </tr>
    <tr>
      <td>Intervalo de Muestreo (s)</td>
      <td>Por defecto: 30 segundos.<br />La temperatura se detecta cada 30 s. Cuando se activa el umbral, se cargan la ubicación y los datos del sensor.</td>
    </tr>
    <tr>
      <td>Intervalo de Envío (min)</td>
      <td>Cuando la temperatura supera el umbral, se cargan la ubicación y los datos del sensor según este intervalo.</td>
    </tr>
    <tr>
      <td>Regla de Valor</td>
      <td>Se puede configurar una de las cuatro reglas de umbral.</td>
    </tr>
    <tr>
      <td rowspan="3">Evento de Luz</td>
      <td>Si el evento de luz está habilitado, puedes configurar el intervalo de carga basado en la luz.</td>
      <td>Por ejemplo: Intervalo de Envío=10, Valor≥30. Si la luz es mayor al 30 %, el dispositivo cargará la ubicación cada 10 minutos.</td>
    </tr>
    <tr>
      <td>Intervalo de Envío (min)</td>
      <td>Cuando la luz excede el umbral, se cargan la ubicación y los datos del sensor según este intervalo.</td>
    </tr>
    <tr>
      <td>Regla de Valor</td>
      <td>Se puede configurar una de las cuatro reglas de umbral.</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

### Configuración del Modo de Geolocalización

El rastreador admite posicionamiento vía GNSS, Wi-Fi y Bluetooth.

- **GNSS**: Obtiene directamente la latitud y longitud a través de GPS u otros satélites, y luego carga los datos vía LoRa.
- **Wi-Fi**: Escaneo pasivo, carga las 4 direcciones MAC escaneadas vía LoRa.
- **BLE**: Carga las 3 mejores señales MAC de Beacon vía LoRa.

<table>
  <thead>
    <tr>
      <th><b>Geolocalización</b></th>
      <th><b>Descripción</b></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="8">Estrategia de Geolocalización</td>
      <td>Solo GNSS</td>
      <td>Usa GNSS por defecto.<br />Solo se usa GNSS para la posición.</td>
    </tr>
    <tr>
      <td>Solo Wi-Fi</td>
      <td>Solo se usan escaneos Wi-Fi para la posición.</td>
    </tr>
    <tr>
      <td>Wi-Fi + GNSS</td>
      <td>Usa Wi-Fi antes que GNSS. Si Wi-Fi falla, usa GNSS en un mismo ciclo.</td>
    </tr>
    <tr>
      <td>GNSS + Wi-Fi</td>
      <td>Usa GNSS antes que Wi-Fi. Si GNSS falla, usa Wi-Fi en un mismo ciclo.</td>
    </tr>
    <tr>
      <td>Solo Bluetooth</td>
      <td>Solo se usan escaneos Bluetooth para la posición.</td>
    </tr>
    <tr>
      <td>Bluetooth + Wi-Fi</td>
      <td>Usa Bluetooth antes que Wi-Fi. Si Bluetooth falla, usa Wi-Fi.</td>
    </tr>
    <tr>
      <td>Bluetooth + GNSS</td>
      <td>Usa Bluetooth antes que GNSS. Si Bluetooth falla, usa GNSS.</td>
    </tr>
    <tr>
      <td>Bluetooth + Wi-Fi + GNSS</td>
      <td>Usa Bluetooth, Wi-Fi y GNSS secuencialmente (cambia al siguiente si falla el anterior).</td>
    </tr>
    <tr>
      <td>Tiempo de Espera GNSS</td>
      <td>Tiempo máximo esperando que el GNSS obtenga una posición aproximada.</td>
      <td>Por defecto: 60 s.<br />No se recomienda modificar. A mayor tiempo, mayor consumo energético.</td>
    </tr>
    <tr>
      <td>Cache de Datos GNSS</td>
      <td>Si no se puede subir la información vía LoRa, se guarda localmente y se sube cuando se recupere la señal LoRa.</td>
      <td>Desactivado por defecto.</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

Después de configurar todos los parámetros, haz clic en “Send”.  
Si no necesitas modificar ningún parámetro, sal de la configuración por Bluetooth y regresa a la página principal.  
En este punto, el dispositivo inicia una solicitud de acceso a la red LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### Vista de Datos del Dispositivo

#### App SenseCAP Mate

Consulta la ubicación en la aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### Portal SenseCAP

La función principal del portal SenseCAP es gestionar dispositivos y almacenar datos. Está construido sobre Azure, una plataforma segura y confiable de Microsoft.  
Los usuarios pueden crear una cuenta y asociar todos sus dispositivos. El portal proporciona una interfaz web y una API:

- **Dashboard:** Vista general, avisos, datos de escena y gráficos.
- **Gestión de Dispositivos:** Administración de dispositivos SenseCAP.
- **Gestión de Datos:** Incluye tabla de datos y gráficos, con funciones de búsqueda.
- **Sistema de Subcuentas:** Registro de subcuentas con permisos diferenciados.
- **Gestión de Claves de Acceso:** Crear, actualizar y verificar claves para acceder a la API.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Vista de Datos del Dispositivo

Ingresa al [Portal SenseCAP](http://sensecap.seeed.cc)  
Si ya creaste una cuenta desde la app, puedes iniciar sesión directamente.

1. Selecciona “registrar cuenta”, ingresa tu email y haz clic en "registrar".  
2. Abre el correo "SenseCAP…" y haz clic en el enlace de confirmación para completar el registro.  
3. Regresa a la interfaz de login e inicia sesión.

Consulta la [Guía de Usuario del Portal SenseCAP](https://sensecap-docs.seeed.cc/quickstart.html) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## API de SenseCAP

La API SenseCAP permite a los usuarios gestionar dispositivos y datos IoT. Incluye tres tipos de métodos:

- **HTTP API**: Para gestionar dispositivos LoRa y obtener datos históricos o en crudo.
- **MQTT API**: Suscribirse a los datos de medición en tiempo real del sensor.
- **Websocket API**: Recibir datos en tiempo real mediante protocolo WebSocket.

Consulta la [Guía de Usuario de la API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
