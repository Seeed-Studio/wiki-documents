---
description: reTerminal E1004 es una pantalla de tinta electrónica a color de 13,3 pulgadas, de código abierto, alimentada por ESP32-S3, que incorpora la tecnología E Ink® Spectra™ 6 y compatibilidad con SenseCraft HMI.
title: Primeros pasos con reTerminal E1004
sidebar_position: 5
keywords:
  - reTerminal E1004
  - Pantalla de tinta electrónica
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Panel de control para el hogar inteligente
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 4/24/2026
  author: Citric
createdAt: '2026-01-29'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1004/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

reTerminal E1004 es una pantalla de tinta electrónica a color de 13,3 pulgadas y código abierto, con una duración de batería de hasta 6 meses. Impulsada por ESP32-S3, es compatible de forma nativa con nuestra plataforma de interfaz de usuario sin código SenseCraft HMI para crear paneles de control sin esfuerzo, y además admite Home Assistant, Arduino y ESP-IDF para un desarrollo adicional. Con la pantalla de tinta electrónica a todo color E Ink® Spectra™ 6, es perfecta para marcos digitales y visualización de paneles de control a color.

### Características

- Pantalla de tinta electrónica a color Spectra™6 de alta resolución, bonita y lista para usar
- Diseño y despliegue de interfaz de usuario sin código con SenseCraft HMI
- Presentaciones de imágenes con sincronización de datos en tiempo real y batería que dura meses
- Se adapta a las necesidades de decoración y visualización en diferentes escenarios

## Especificaciones

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Elemento</th>
			<th align="center">Descripción</th>
		</tr>
		<tr>
			<td align="center"><strong>Nombre del producto</strong></td>
			<td align="center">reTerminal E1004</td>
		</tr>
		<tr>
			<td align="center"><strong>Procesador</strong></td>
			<td align="center">ESP32-S3 con 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Almacenamiento</strong></td>
			<td align="center">32MB Flash, compatible con tarjeta Micro SD (hasta 32GB, 16GB incluida)</td>
		</tr>
		<tr>
			<td align="center"><strong>Pantalla</strong></td>
			<td align="center">13.3" Spectra™ 6 de tinta electrónica a todo color</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolución</strong></td>
			<td align="center">1200 x 1600 píxeles</td>
		</tr>
		<tr>
			<td align="center"><strong>Conectividad inalámbrica</strong></td>
			[LINE[75]]			<td align="center">Wi-Fi 2.4GHz 802.11 b/g/n, Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensores</strong></td>
			<td align="center">Sensores de temperatura y humedad</td>
		</tr>
		<tr>
			<td align="center"><strong>Audio</strong></td>
			<td align="center">Zumbador (alerta sonora)</td>
		</tr>
		<tr>
			<td align="center"><strong>Batería</strong></td>
			<td align="center">5000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>Entrada de alimentación</strong></td>
			<td align="center">USB-C 5V / 1A</td>
		</tr>
		<tr>
			<td align="center"><strong>Temperatura de funcionamiento</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensiones</strong></td>
			<td align="center">376mm x 311mm x 40mm</td>
		</tr>
	</table>
</div>

## Aplicaciones

- **Marco de fotos electrónico de bajo consumo:** Muestra fotos familiares o arte en alta resolución con una calidad similar al papel sin preocuparte por cargarlo a diario.
- **Tablón de información familiar:** Lleva el control de calendarios, notificaciones, clima y noticias en un formato elegante y siempre visible.
- **Panel de control para automatización del hogar:** Visualiza datos en tiempo real del hogar inteligente (temperatura, humedad, calidad del aire) mediante Home Assistant.
- **Pantalla inteligente para oficina:** Muestra horarios de salas de reuniones, disponibilidad o indicaciones de dirección.
- **Cartelería para comercios y espacios públicos:** Menús, horarios o indicadores de ocupación de bajo consumo energético.
- **Educación y prototipado:** Una plataforma ideal para aprender IoT, sistemas embebidos y diseño de interfaces de usuario.

## Descripción del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/209.png" style={{width:1000, height:'auto'}}/></div>

1. **Pantalla de tinta electrónica:** Área de visualización de tinta electrónica a todo color E Ink® Spectra™ 6 de 13,3". 
2. **Botones táctiles:** Botones táctiles capacitivos en el bisel frontal para refrescar la pantalla y navegar entre páginas (anterior / siguiente).
3. **Botones de página arriba / abajo / refrescar:** Botones físicos en la parte trasera para pasar página y refrescar manualmente la pantalla de tinta electrónica.
4. **LED rojo de carga:** Indica el estado de carga de la batería.
5. **Puerto USB-C de datos y carga:** Para cargar el dispositivo y la transmisión de datos.
6. **Interruptor de encendido:** Para encender o apagar el dispositivo.
7. **LED verde de estado:** Indica el estado operativo o del sistema actual.
8. **Botón de reinicio:** Para reiniciar el dispositivo.
9. **Botón de arranque (Boot):** Se utiliza para entrar en el modo de arranque / descarga de firmware.
10. **Puerto de expansión:** Cabecera de 2 × 4 pines que proporciona conexiones VDD, GND, UART, I2C, GPIO y ADC para sensores, módulos o periféricos externos.
11. **Inserciones para montaje del soporte:** Inserciones roscadas en la parte trasera para fijar el dispositivo a su soporte.

## Primeros pasos

El reTerminal E1004 viene con firmware preinstalado que es compatible con **SenseCraft HMI**, una plataforma sin código que te permite diseñar y desplegar paneles personalizados sin esfuerzo.

### Preparativos

**Paso 1.** Desempaqueta tu reTerminal E1004 y asegúrate de que se incluyen todos los componentes:

- Dispositivo reTerminal E1004
- Cable USB-C
- Guía de inicio rápido
- Destornillador
- Tornillos
- Soporte metálico (compatible con orientación vertical y horizontal)

**Paso 2.** (Opcional) Coloca el soporte metálico para situar el dispositivo en orientación vertical u horizontal:

Localiza el soporte metálico incluido en el paquete. El soporte utiliza las inserciones roscadas en la parte trasera del reTerminal E1004: puedes montarlo verticalmente para orientación vertical o girarlo 90° y montarlo en el otro juego de inserciones para orientación horizontal. Usa el destornillador y los tornillos incluidos para fijar el soporte. Una vez colocado, pon el reTerminal E1004 sobre una superficie plana; el soporte lo mantendrá en la orientación elegida.

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Paso 3.** (Opcional) Sustituye o retira la tarjeta microSD.

El reTerminal E1004 viene con una tarjeta microSD de 16GB preinstalada, por lo que en la mayoría de los casos no necesitas insertar una tú mismo. Si quieres cambiarla por otra tarjeta o sacar la tarjeta, consulta el siguiente vídeo como guía.

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/214.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
La pantalla de tinta electrónica reTerminal E Serie solo admite tarjetas MicroSD de hasta 32GB en formato Fat32.  
La tarjeta SD de 32GB está formateada como exFAT por defecto. Después de formatearla a FAT32, se puede montar correctamente y utilizar para almacenar imágenes.
:::

**Paso 4.** (Opcional) Instala los controladores USB si es necesario:

Según tu sistema operativo, puede que necesites instalar controladores USB para garantizar una comunicación adecuada con tu reTerminal E1004:

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Los sistemas Windows 11 suelen incluir el controlador por defecto
- Para Windows 10 y versiones anteriores, puede que necesites descargar e instalar el controlador CH341 desde la [página oficial de WCH](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

</TabItem>

<TabItem value="MacOS" label="MacOS">

Descarga e instala el controlador CH34X desde la [página oficial de WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

</TabItem>

<TabItem value="Linux" label="Linux">

La mayoría de las distribuciones modernas de Linux incluyen los controladores necesarios por defecto

</TabItem>
</Tabs>

### Encendido

**Paso 1.** Enciende el dispositivo deslizando el interruptor de encendido a la posición **ON**. El interruptor de encendido se encuentra en la parte trasera de la unidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/215.gif" style={{width:600, height:'auto'}}/></div>

**Paso 2.** En el primer arranque, el dispositivo mostrará información del producto e instrucciones para la configuración de red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/212.png" style={{width:400, height:'auto'}}/></div><br />

**Paso 3.** El LED verde de usuario se encenderá durante aproximadamente 3 segundos, indicando que el dispositivo está encendido e inicializándose. Tras 30 segundos sin operar el dispositivo, para garantizar la energía, el dispositivo entrará automáticamente en modo de suspensión y el LED se apagará automáticamente.

:::tip
Por lo tanto, necesitamos completar los siguientes pasos de configuración de red durante este tiempo. Cuando el dispositivo entra en suspensión, no podrás encontrar el punto de acceso del dispositivo. Si esto ocurre, puedes despertar el dispositivo pulsando el botón táctil **Refresh** en el bisel frontal, o el botón físico **Refresh** en la parte trasera de la unidad.
:::

### Configuración de red

<Tabs>
<TabItem value="Network Setup via PC" label="Configuración de red mediante PC" default>

**Paso 1.** Conéctate al punto de acceso Wi-Fi del dispositivo desde tu smartphone u ordenador. El nombre del AP aparecerá en la pantalla (no se requiere contraseña). Las credenciales de red son `reTerminal E1004-{MAC Address}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Paso 2.** Una vez conectado, tu teléfono debería redirigirte automáticamente a la página de configuración Wi-Fi. Si no es así, abre un navegador y navega a `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Paso 3.** Selecciona tu red Wi-Fi local e introduce la contraseña, luego haz clic en "Connect".

:::note
La pantalla de tinta electrónica reTerminal E Serie solo admite redes WiFi de 2,4GHz, no 5GHz ni otras bandas.
:::

**Paso 4.** Tras una conexión correcta, el dispositivo emitirá un pitido de confirmación y mostrará una pantalla con el código de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.png" style={{width:400, height:'auto'}}/></div>

### Conexión a la plataforma SenseCraft

**Paso 1.** Visita [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) en tu navegador web y crea una cuenta o inicia sesión.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**Paso 2.** En la barra lateral izquierda, haz clic en **Device** para entrar en la página del dispositivo y luego haz clic en el botón **+ New Device** en la esquina superior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**Paso 3.** Ponle un nombre a tu dispositivo, introduce el código de emparejamiento que aparece en la pantalla de tu dispositivo y haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 4.** Una vez emparejado, el dispositivo mostrará un mensaje que te pedirá crear tu primer panel de control.

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Configuración de red mediante SenseCraft APP">

Este método utiliza la aplicación móvil SenseCraft para configurar la red del dispositivo y añadirlo a tu cuenta de SenseCraft mediante Bluetooth.

Primero, descarga la aplicación SenseCraft. Puedes encontrarla buscando "SenseCraft" en Google Play Store o Apple App Store. Alternativamente, puedes descargarla desde este sitio web.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Paso 1.** Abre la aplicación SenseCraft, inicia sesión en tu cuenta y ve a la pestaña **User**. Toca **Device Bluetooth Configuration** para comenzar el proceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 2.** En la pantalla "Please select the device type", elige **reTerminal E1004**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 3.** Sigue las instrucciones en pantalla para poner tu dispositivo en modo de difusión Bluetooth. Asegúrate de que el Bluetooth de tu teléfono esté activado. Toca **Scan**, y la aplicación detectará los dispositivos cercanos. Selecciona tu dispositivo de la lista para conectarte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 4.** Una vez conectado por Bluetooth, la aplicación te pedirá que configures la conexión Wi‑Fi. Selecciona tu red Wi‑Fi local de 2,4 GHz de la lista desplegable, introduce la contraseña y toca **Next**.

:::note
El dispositivo solo se puede configurar mediante una red Wi‑Fi de 2,4G.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 5.** La aplicación enviará las credenciales de Wi‑Fi al dispositivo y lo añadirá a tu cuenta de SenseCraft. Aparecerá un mensaje de "Device added successfully" al finalizar. Ahora puedes tocar **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 6.** Tu reTerminal aparecerá ahora en tu lista de dispositivos en la pestaña principal **Device** de la aplicación, conectado correctamente a tu cuenta de SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 7.** Puedes tocar el dispositivo en la lista para ver su página de **Device Detail**. Desde aquí, puedes gestionar el dispositivo y subir fotos. Para un diseño de panel de control y lienzo más complejo, se te pedirá que uses la versión de SenseCraft para navegador web.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### Actualización de firmware

Después de que el dispositivo se haya añadido correctamente a tu cuenta de SenseCraft, la plataforma comprobará automáticamente la versión del firmware. Si hay un firmware más reciente disponible, se te pedirá que lo actualices.

También puedes comprobar manualmente la versión del firmware en cualquier momento:

**Paso 1.** En la página **Device**, busca tu reTerminal E1004 para ver sus detalles y toma nota de la **versión actual del firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**Paso 2.** En la barra lateral izquierda, haz clic en **Tools** y abre la pestaña **Firmware Flasher** para ver la **última versión de firmware** disponible para este dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Si la versión actual es más antigua que la última, sigue el flujo de 3 pasos en la página Firmware Flasher para actualizar:

1. **Select your device** — conecta el reTerminal E1004 a tu ordenador mediante el cable USB‑C, asegúrate de que el interruptor de encendido esté en **ON**, luego haz clic en **Select** y elige tu dispositivo de la lista.

2. **Select firmware** — elige el firmware más reciente en el menú desplegable de versiones publicadas.

3. **Flash** — haz clic en **Flash** y espera a que la actualización se complete. Activa **Full Flash** solo si quieres restablecer el dispositivo al estado de fábrica (todos los datos, ajustes y diseños se borrarán).

:::note

1. Actualizar el firmware garantiza un rendimiento óptimo y acceso a las funciones más recientes.

2. No es posible grabar el firmware correctamente cuando el dispositivo está apagado o en estado de suspensión. Si seleccionas el puerto correcto para tu dispositivo pero nunca ves el progreso de la grabación del firmware, puede que necesites activar el dispositivo pulsando el botón **Refresh** de la unidad e intentarlo de nuevo.

3. **Haz un Flash estándar** para mantener tu configuración: se conservan el Wi‑Fi, los diseños desplegados y las imágenes. **Haz un Full Flash para empezar desde cero**: se borran todos los datos, ajustes y diseños (estado de fábrica).

:::

## Muestra contenido en tu reTerminal E1004

Una vez que tu dispositivo esté emparejado, puedes empezar a usarlo para mostrar lo que quieras. Recomendamos **SenseCraft HMI**, una plataforma en la nube sin código que te permite diseñar y desplegar contenido en tu reTerminal E1004 con solo unos pocos clics.

SenseCraft HMI tiene su propio Wiki dedicado con tutoriales completos y documentación de funciones. Para guías detalladas (configuración de cuenta, grabación de firmware, uso avanzado del editor, despliegue, etc.), consulta:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Dado que este artículo es una **Guía de inicio** del producto, no repetiremos el mismo contenido aquí; a continuación solo se muestra cómo visualizar rápidamente algo en tu reTerminal E1004.

### Home — Comienza desde una plantilla de la comunidad

La forma más rápida de mostrar algo en tu pantalla es comenzar desde una plantilla ya preparada. En la página **Home** de SenseCraft HMI encontrarás una colección grande y en continuo crecimiento de plantillas aportadas por la comunidad: paneles de control, relojes, paneles meteorológicos, muros de citas, calendarios, marcos de fotos y más. Explora la galería, elige el diseño que más te guste y desplíegalo en tu reTerminal E1004 con un solo clic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Gestiona y diseña tu propio contenido

La página **Workspace** es donde gestionas todas las páginas y el contenido que se muestran en el dispositivo actualmente vinculado. Desde aquí puedes:

- Crear y organizar tus propias páginas de diseño desde cero
- Subir imágenes y organizarlas en presentaciones de diapositivas
- Combinar texto, widgets, formas, datos, fuentes RSS, contenido web y más en un único editor de arrastrar y soltar
- Desplegar el diseño final de forma inalámbrica en tu reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

Una vez que tu diseño esté guardado, haz clic en **Deploy to Device**, selecciona tu reTerminal E1004 emparejado y el contenido se transmitirá de forma inalámbrica al dispositivo. La pantalla de papel electrónico se actualizará para mostrar tu diseño.

:::note
Debido a la naturaleza de la tecnología E Ink, la actualización de la pantalla puede tardar unos segundos en actualizar completamente la imagen y eliminar cualquier efecto fantasma.
:::

Para todo lo demás — operaciones detalladas del editor, consejos y notas de versión — consulta el [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Manejo del dispositivo

### Botón de actualización

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/216.jpg" style={{width:700, height:'auto'}}/></div>

El botón de actualización se encuentra como el botón más a la izquierda en la parte frontal inferior del dispositivo, o en la parte trasera del dispositivo en la posición que se muestra en la imagen anterior. Cumple varias funciones:

- **Pulsación corta**: Actualiza manualmente la pantalla y comprueba si hay contenido nuevo desde la plataforma SenseCraft. El zumbador emitirá un pitido para confirmar la acción. Este botón también se utiliza habitualmente para activar el dispositivo. Puedes usar este botón para activar un dispositivo cuando se ha puesto en reposo y normalmente no hay disponible de inmediato un comando de actualización del panel de control para el dispositivo.

- **Pulsación larga** (funcionalidad futura): Activará el modo de entrada de voz.

### Botones de navegación

Los botones izquierdo y derecho te permiten navegar entre varias páginas si tu panel de control contiene más de una página:

- **Botón izquierdo**: Navegar a la página anterior

- **Botón derecho**: Navegar a la página siguiente

### Restablecimiento de red

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.jpg" style={{width:700, height:'auto'}}/></div>

Si necesitas conectarte a una red Wi‑Fi diferente:

**Paso 1.** Mantén presionados ambos botones de navegación (izquierdo y derecho) simultáneamente durante 2 segundos.

**Paso 2.** El dispositivo entrará en modo de configuración Wi‑Fi y podrás seguir de nuevo los pasos de [Configuración de red](#configuración-de-red) para conectarte a una nueva red.

### Indicadores LED

- **LED rojo**:
  - Apagado: Completamente cargado o sin cargar
  - Siempre encendido: cargando

- **LED verde**:
  - Encendido durante 3 segundos al arrancar: El dispositivo se está encendiendo

### Funcionamiento con batería

Cuando funciona con alimentación por batería:

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones

- La duración de la batería depende de la frecuencia de actualización (normalmente 3 meses con una carga completa y la configuración predeterminada)

- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería sea inferior al 20%

:::tip
Si quieres escribir algo de código por tu cuenta para leer el voltaje de la batería, será más preciso añadir un retardo de 10 ms antes de la función analogRead().
:::

### Pines de expansión

El reTerminal E1004 incorpora un conector de expansión de 8 pines (J2) que proporciona opciones de conectividad para añadir sensores externos, módulos u otro hardware para ampliar la funcionalidad de tu dispositivo. Este conector de expansión expone varios pines GPIO y interfaces de comunicación del ESP32-S3, lo que lo convierte en un punto de conexión versátil para tus proyectos DIY.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.png" style={{width:700, height:'auto'}}/></div>

#### Distribución de pines del conector de expansión

El conector de expansión (J2) es un encabezado 2×4 (número de parte **ST-FH-254-0148-2×4P**) que proporciona 8 pines dispuestos en dos columnas. La notación de posición de pines que se muestra a continuación usa `Lx` para la columna izquierda y `Rx` para la columna derecha (numerados de arriba hacia abajo, como se muestra en la imagen anterior):

<div class="table-center">
	<table align="center">
		<tr>
			<th>Pin</th>
			<th>Etiqueta</th>
			<th>Pin ESP32-S3</th>
			<th>Tipo</th>
			<th>Descripción</th>
		</tr>
		<tr>
			<td>L1</td>
			<td>I2C2_SCL</td>
			<td>GPIO40</td>
			<td>GPIO / I2C SCL</td>
			<td>GPIO o señal de reloj I2C</td>
		</tr>
		<tr>
			<td>L2</td>
			<td>I2C1_SDA</td>
			<td>GPIO39</td>
			<td>GPIO / I2C SDA</td>
			<td>GPIO o señal de datos I2C</td>
		</tr>
		<tr>
			<td>L3</td>
			<td>GND</td>
			<td>-</td>
			<td>Tierra</td>
			<td>Referencia de tierra común</td>
		</tr>
		<tr>
			<td>L4</td>
			<td>3V3</td>
			<td>-</td>
			<td>Alimentación</td>
			<td>Fuente de alimentación de 3,3 V para dispositivos externos</td>
		</tr>
		<tr>
			<td>R1</td>
			<td>RX1</td>
			<td>GPIO42</td>
			<td>GPIO / UART RX</td>
			<td>GPIO o señal de recepción (RX) UART</td>
		</tr>
		<tr>
			<td>R2</td>
			<td>TX1</td>
			<td>GPIO41</td>
			<td>GPIO / UART TX</td>
			<td>GPIO o señal de transmisión (TX) UART</td>
		</tr>
		<tr>
			<td>R3</td>
			<td>ADC</td>
			<td>GPIO6</td>
			<td>GPIO / ADC</td>
			<td>Entrada/salida de propósito general con capacidad de entrada analógica</td>
		</tr>
		<tr>
			<td>R4</td>
			<td>GND</td>
			<td>-</td>
			<td>Tierra</td>
			<td>Referencia de tierra común</td>
		</tr>
	</table>
</div>

## Solución de problemas

### P1: El dispositivo no enciende

- Asegúrate de que el interruptor de encendido esté en la posición ON
- Conecta el cable USB‑C para cargar el dispositivo
- Comprueba si el LED rojo está siempre encendido (indicando que está cargando)
- Si utilizas alimentación por batería, asegúrate de que la batería esté correctamente conectada y cargada

### P2: No se puede conectar a la red Wi‑Fi

- Verifica que estés introduciendo la contraseña Wi‑Fi correcta
- Asegúrate de que tu red Wi‑Fi esté operativa
- Comprueba si tu router Wi‑Fi es compatible con redes de 2,4 GHz (5 GHz no es compatible)
- Intenta colocar el dispositivo más cerca de tu router Wi‑Fi

### P3: La pantalla no se actualiza

- Pulsa el botón de actualización para activar una actualización manualmente
- Verifica que el dispositivo esté conectado a la red Wi‑Fi (sin icono de desconexión en la esquina)
- Comprueba tu cuenta de SenseCraft para asegurarte de que el panel de control esté desplegado correctamente
- Si el problema persiste, intenta reiniciar el dispositivo
- Si el dispositivo sigue sin responder después de reiniciarlo, vuelve a grabar el firmware correspondiente en la plataforma SenseCraft HMI y comprueba si el dispositivo puede actualizarse con normalidad

### P4: Conexión de red perdida

- El dispositivo intentará reconectarse automáticamente a las redes conocidas
- Cuando se vuelva a conectar, el icono de desconexión de Wi‑Fi desaparecerá
- Si no puede reconectarse, sigue el procedimiento de Restablecimiento de red anterior

### P5: No se puede encontrar el puerto serie (COM) en macOS

Si tu Mac no reconoce el reTerminal a través de USB, sigue esta guía compacta para instalar el controlador CH340/CH340K:

**Paso 1. Descarga e instala el controlador**
Descarga el controlador desde la [página oficial de WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) y ejecuta `CH34xVCPDriver.pkg`. 
:::tip
Si macOS bloquea la instalación, ve a **System Settings → Privacy & Security**, desplázate para encontrar el software WCH bloqueado y haz clic en **Allow**.
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Paso 2. Habilita la extensión del controlador (crítico)**
Abre la app **CH34xVCPDriver** desde Launchpad, haz clic en **Install**, luego ve a **System Settings → General → Login Items & Extensions → Driver Extensions**. Activa **CH34xVCPDriver Extensions** a **ON** (azul).
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Paso 3. Conecta y verifica**
Asegúrate de que el **interruptor de encendido del dispositivo esté en ON** y utiliza un **cable USB‑C de datos** (no solo de carga). Abre Terminal y ejecuta:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

Si ves la ruta del dispositivo en la salida, el controlador está instalado correctamente y tu reTerminal está listo para usarse.

## Recursos

- [Esquemático del reTerminal E1004 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
