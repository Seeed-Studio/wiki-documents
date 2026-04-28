---
description: Este artículo te guiará para comenzar rápidamente con reTerminal E1001.
title: Introducción a reTerminal E1001
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.webp
slug: /getting_started_with_reterminal_e1001
sidebar_position: 2
sku: 100073581
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1001/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducción a reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

:::caution Consejos para actualizar el firmware
Recomendamos que **[completes la actualización del firmware de tu producto](#preliminary)** tan pronto como lo recibas para obtener la mejor experiencia.
:::

## Introducción

reTerminal E1001 es una pantalla ePaper monocroma de código abierto de 7,5 pulgadas con una excepcional duración de batería de 3 meses. Impulsada por ESP32-S3, es compatible de forma nativa con nuestra plataforma de interfaz HMI SenseCraft sin código para una creación de paneles sencilla, y al mismo tiempo es compatible con Home Assistant, TRMNL E-ink dashboard, Arduino y ESP-IDF para un desarrollo adicional. Ya sea para visualización de paneles de hogar inteligente, pantallas de oficina o proyectos educativos, este dispositivo HMI listo para usar ofrece imágenes atractivas y una personalización flexible en un diseño elegante.

### Características

- **Hermosa pantalla ePaper lista para usar**
- **Ultrabajo consumo con batería de 3 meses de duración**
- **Diseño y despliegue de UI sin código con SenseCraft HMI**
- **Funciona con plataformas de software populares**
- **Personalización flexible de hardware y software**

## Especificación

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Elemento</th>
			<th align="center">Descripción</th>
		</tr>
		<tr>
			<td align="center"><strong>Nombre del producto</strong></td>
			<td align="center">reTerminal E1001</td>
		</tr>
		<tr>
			<td align="center"><strong>Procesador</strong></td>
			<td align="center">ESP32-S3 con 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Almacenamiento</strong></td>
			<td align="center">32MB Flash, compatible con tarjeta Micro SD</td>
		</tr>
		<tr>
			<td align="center"><strong>Pantalla</strong></td>
			<td align="center">7,5" Monocroma</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolución</strong></td>
			<td align="center">800 x 480 píxeles</td>
		</tr>
		<tr>
			<td align="center"><strong>Tarjeta Micro SD</strong></td>
			<td align="center">Soporta como máximo tarjeta SD de 32GB, formato FAT32</td>
		</tr>
		<tr>
			<td align="center"><strong>Conectividad inalámbrica</strong></td>
			<td align="center">Wi-Fi 2,4GHz 802.11 b/g/n, Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensores</strong></td>
			<td align="center">Sensores de temperatura y humedad</td>
		</tr>
		<tr>
			<td align="center"><strong>Micrófono</strong></td>
			<td align="center">Reservado para aplicaciones de interacción por voz</td>
		</tr>
		<tr>
			<td align="center"><strong>Zumbador</strong></td>
			<td align="center">Zumbador para alertas sonoras</td>
		</tr>
		<tr>
			<td align="center"><strong>Batería</strong></td>
			<td align="center">2000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>Entrada de alimentación</strong></td>
			<td align="center">USB-C 5V/1A</td>
		</tr>
		<tr>
			<td align="center"><strong>Temperatura de trabajo</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensiones</strong></td>
			<td align="center">176mm x 120mm x 53mm (con soporte) / 17mm (sin soporte)</td>
		</tr>
	</table>
</div>

## Descripción del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

El hardware de reTerminal E1001 incluye:

1. **Pantalla ePaper de 7,5 pulgadas**: Pantalla monocroma con resolución de 800×480
2. **Botones**: Situados en la parte superior del dispositivo para uso manual de la pantalla
3. **Micrófono**
4. **Ranura para tarjeta MicroSD**: Para almacenamiento ampliable
5. **Interruptor de encendido**: Situado en la parte trasera para encender/apagar el dispositivo
6. **LED de estado**: Indicador de usuario (verde)
7. **LED de alimentación**: Indicador de carga (rojo)
8. **Puerto USB-C**: Para carga y actualizaciones de firmware
9. **Puerto de expansión**: Cabecera de expansión de 8 pines que proporciona conexiones VDD, GND, UART, I2C y GPIO
10. **Inserciones de montaje para el soporte**: Tuercas incrustadas (orificios para tornillos) en la parte trasera inferior del dispositivo para fijar el soporte impreso en 3D

## Primeros pasos

### Preparativos

**Paso 1.** Desempaqueta tu reTerminal E1001 y asegúrate de que todos los componentes estén incluidos:

- Dispositivo reTerminal E1001
- Cable de datos de carga
- Guía de inicio rápido
- Destornillador largo
- Tornillos
- Soporte impreso en 3D

**Paso 2.** (Opcional) Instala el soporte impreso en 3D para colocar el dispositivo en posición vertical:

Localiza el soporte impreso en 3D incluido en el paquete. Coloca el soporte contra la zona de montaje designada en la parte trasera inferior del reTerminal E1001 donde se encuentran las tuercas incrustadas. Utiliza un destornillador largo para fijar el soporte al dispositivo apretando los tornillos en las tuercas incrustadas en la parte trasera del reTerminal E1001. Una vez fijado de forma segura, coloca el reTerminal E1001 sobre una superficie plana donde el soporte lo mantenga en posición vertical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

::::note
El soporte proporciona un ángulo de visión fijo y no se puede ajustar. Esta posición fija está diseñada para ofrecer una visibilidad óptima en la mayoría de los escenarios de uso.
::::

**Paso 3.** (Opcional) Inserta una tarjeta microSD si planeas usar el dispositivo como un marco de fotos digital o necesitas almacenamiento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
La pantalla ePaper reTerminal E Serie solo admite tarjetas MicroSD de hasta 32GB en formato Fat32.  
La tarjeta SD de 32GB viene formateada como exFAT por defecto. Después de formatearla a FAT32, se puede montar correctamente y utilizar para almacenar imágenes.
:::

**Paso 4.** (Opcional) Instala los controladores USB si es necesario:

Según tu sistema operativo, es posible que necesites instalar controladores USB para garantizar una comunicación adecuada con tu reTerminal E1001:

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Los sistemas Windows 11 suelen incluir el controlador por defecto
- Para Windows 10 y versiones anteriores, es posible que necesites descargar e instalar el controlador CH341 desde el [sitio web oficial de WCH](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

</TabItem>

<TabItem value="MacOS" label="MacOS">

Descarga e instala el controlador CH34X desde el [sitio web oficial de WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

</TabItem>

<TabItem value="Linux" label="Linux">

La mayoría de las distribuciones modernas de Linux incluyen los controladores necesarios por defecto

</TabItem>
</Tabs>

### Encendido

**Paso 1.** Enciende el dispositivo deslizando el interruptor de encendido a la posición **ON**. El interruptor de encendido se encuentra en la parte trasera de la unidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>

**Paso 2.** En el primer arranque, el dispositivo mostrará información del producto e instrucciones de configuración de red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/1.png" style={{width:600, height:'auto'}}/></div><br />

**Paso 3.** El LED verde de usuario se encenderá durante aproximadamente 30 segundos, indicando que el dispositivo está encendido e inicializándose. Tras 30 segundos sin operar el dispositivo, para garantizar la energía, el dispositivo entrará automáticamente en modo de suspensión y el LED se apagará automáticamente.

:::tip
Por lo tanto, necesitamos completar los siguientes pasos de configuración de red durante este tiempo. Cuando el dispositivo entra en suspensión, no podrás encontrar el punto de acceso del dispositivo. Si esto ocurre, puedes despertar el dispositivo haciendo clic una vez en el botón verde de Wake del dispositivo.
:::

### Configuración de red

<Tabs>
<TabItem value="Network Setup vis PC" label="Configuración de red vía PC" default>

**Paso 1.** Conéctate al punto de acceso Wi-Fi del dispositivo desde tu smartphone u ordenador. El nombre del AP aparecerá en la pantalla (no se requiere contraseña). Las credenciales de red son `reTerminal E1001-{MAC Adress}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Paso 2.** Una vez conectado, tu teléfono debería redirigirte automáticamente a la página de configuración Wi-Fi. Si no es así, abre un navegador y navega a `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Paso 3.** Selecciona tu red Wi-Fi local e introduce la contraseña, luego haz clic en "Connect".

:::note
La pantalla ePaper reTerminal E Serie solo admite redes WiFi de 2,4GHz, no de 5GHz ni otras bandas.
:::

**Paso 4.** Tras una conexión correcta, el dispositivo emitirá un pitido de confirmación y mostrará una pantalla con el código de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### Conexión a la plataforma SenseCraft

**Paso 1.** Visita [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) en tu navegador web y crea una cuenta o inicia sesión.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

**Paso 2.** En la barra lateral izquierda, haz clic en **Device** para entrar en la página de dispositivos y luego haz clic en el botón **+ New Device** en la esquina superior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**Paso 3.** Nombra tu dispositivo e introduce el código de emparejamiento que aparece en la pantalla de tu dispositivo y haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Paso 4.** Una vez emparejado, el dispositivo mostrará un mensaje invitándote a crear tu primer panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/3.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Configuración de red mediante SenseCraft APP">

Este método utiliza la aplicación móvil SenseCraft para configurar la red del dispositivo y añadirlo a tu cuenta de SenseCraft mediante Bluetooth.

Primero, descarga la App SenseCraft. Puedes encontrarla buscando "SenseCraft" en Google Play Store o Apple App Store. Alternativamente, puedes descargarla desde este sitio web.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Paso 1.** Abre la App SenseCraft, inicia sesión en tu cuenta y ve a la pestaña **User**. Toca **Device Bluetooth Configuration** para comenzar el proceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 2.** En la pantalla "Please select the device type", elige tu modelo de reTerminal (por ejemplo, **reTerminal E1001** o **reTerminal E1002**).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 3.** Sigue las instrucciones en pantalla para poner tu dispositivo en modo de difusión Bluetooth. Normalmente se hace pulsando simultáneamente los botones de página **Up** y **Down**. Asegúrate de que el Bluetooth de tu teléfono esté activado. Toca **Scan**, y la app detectará los dispositivos cercanos. Selecciona tu dispositivo de la lista para conectarte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 4.** Una vez conectado por Bluetooth, la app te pedirá que configures la conexión Wi‑Fi. Selecciona tu red Wi‑Fi local de 2,4 GHz de la lista desplegable, introduce la contraseña y toca **Next**.

:::note
El dispositivo solo se puede configurar a través de una red Wi‑Fi de 2,4G.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 5.** La app enviará las credenciales Wi‑Fi al dispositivo y lo añadirá a tu cuenta de SenseCraft. Aparecerá un mensaje de "Device added successfully" al finalizar. Ahora puedes tocar **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 6.** Tu reTerminal ahora aparecerá en tu lista de dispositivos en la pestaña principal **Device** de la app, conectado correctamente a tu cuenta de SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 7.** Puedes tocar el dispositivo en la lista para ver su página de **Device Detail**. Desde aquí, puedes gestionar el dispositivo y subir fotos. Para un diseño de panel de control y lienzo más complejo, se te pedirá que uses la versión web de SenseCraft en el navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### Actualización de firmware

Después de que el dispositivo se haya añadido correctamente a tu cuenta de SenseCraft, la plataforma comprobará automáticamente la versión del firmware. Si hay un firmware más reciente disponible, se te pedirá que lo actualices.

También puedes comprobar manualmente la versión del firmware en cualquier momento:

**Paso 1.** En la página **Device**, busca tu reTerminal E1001 para ver sus detalles y toma nota de la **versión actual del firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**Paso 2.** En la barra lateral izquierda, haz clic en **Tools** y abre la pestaña **Firmware Flasher** para ver la **última versión de firmware** disponible para este dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Si la versión actual es más antigua que la última, sigue el flujo de 3 pasos en la página Firmware Flasher para actualizar:

1. **Select your device** — conecta el reTerminal E1001 a tu ordenador mediante el cable USB‑C, asegúrate de que el interruptor de encendido esté en **ON**, luego haz clic en **Select** y elige tu dispositivo de la lista.

2. **Select firmware** — elige el firmware más reciente en el desplegable de opciones de lanzamiento.

3. **Flash** — haz clic en **Flash** y espera a que la actualización se complete. Activa **Full Flash** solo si quieres restablecer el dispositivo al estado de fábrica (se borrarán todos los datos, ajustes y diseños).

:::note

1. Actualizar el firmware garantiza un rendimiento óptimo y acceso a las funciones más recientes.

2. No es posible grabar el firmware correctamente cuando el dispositivo está apagado o en estado de suspensión. Si seleccionas el puerto correcto para tu dispositivo pero nunca ves el progreso de la grabación del firmware, puede que necesites activar el dispositivo pulsando el botón verde en la parte superior de la unidad e intentarlo de nuevo.

3. **Haz un Flash estándar** para mantener tu configuración: se conservan el Wi‑Fi, los diseños desplegados y las imágenes. **Haz un Full Flash para empezar de cero**: se borran todos los datos, ajustes y diseños (estado de fábrica).

:::

## Muestra contenido en tu reTerminal E1001

Una vez que tu dispositivo esté emparejado, puedes empezar a usarlo para mostrar lo que quieras. Recomendamos **SenseCraft HMI**, una plataforma en la nube sin código que te permite diseñar y desplegar contenido en tu reTerminal E1001 con solo unos clics.

SenseCraft HMI tiene su propio Wiki dedicado con tutoriales completos y documentación de funciones. Para guías detalladas (configuración de cuenta, grabación de firmware, uso avanzado del editor, despliegue, etc.), consulta:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Dado que este artículo es una **Guía de inicio rápido** del producto, no repetiremos el mismo contenido aquí; a continuación solo se muestra cómo visualizar rápidamente algo en tu reTerminal E1001.

### Home — Empieza desde una plantilla de la comunidad

La forma más rápida de mostrar algo en tu pantalla es empezar desde una plantilla ya preparada. En la página **Home** de SenseCraft HMI, encontrarás una colección grande y en continuo crecimiento de plantillas aportadas por la comunidad: paneles de control, relojes, paneles meteorológicos, muros de citas, calendarios, marcos de fotos y más. Explora la galería, elige el diseño que más te guste y desplíegalo en tu reTerminal E1001 con un solo clic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Gestiona y diseña tu propio contenido

La página **Workspace** es donde gestionas todas las páginas y el contenido que se muestran en el dispositivo actualmente vinculado. Desde aquí puedes:

- Crear y organizar tus propias páginas de diseño desde cero
- Subir imágenes y organizarlas en presentaciones de diapositivas
- Combinar texto, widgets, formas, datos, fuentes RSS, contenido web y más en un único editor de arrastrar y soltar
- Desplegar el diseño final de forma inalámbrica en tu reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

Una vez que tu diseño esté guardado, haz clic en **Deploy to Device**, selecciona tu reTerminal E1001 emparejado y el contenido se transmitirá de forma inalámbrica al dispositivo. La pantalla de tinta electrónica se actualizará para mostrar tu diseño, y podrás usar los botones de navegación izquierda/derecha del dispositivo para cambiar entre varias páginas si las has creado.

Para todo lo demás — operaciones detalladas del editor, consejos y notas de lanzamiento — consulta el [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Manejo del dispositivo

### Botón de refresco

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

El botón de refresco en la parte superior del dispositivo cumple varias funciones:

- **Pulsación corta**: Actualiza manualmente la pantalla y comprueba si hay contenido nuevo desde la plataforma SenseCraft. El zumbador emitirá un pitido para confirmar la acción. Este botón también se usa habitualmente para activar el dispositivo. Puedes usar este botón para activar un dispositivo cuando se ha puesto en reposo y normalmente un comando de actualización del panel de control no está disponible de inmediato para el dispositivo.

- **Pulsación larga** (funcionalidad futura): Activará el modo de entrada de voz.

### Botones de navegación

Los botones izquierdo y derecho te permiten navegar entre varias páginas si tu panel de control contiene más de una página:

- **Botón izquierdo**: Navega a la página anterior

- **Botón derecho**: Navega a la página siguiente

### Restablecimiento de red

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

Si necesitas conectarte a una red Wi‑Fi diferente:

**Paso 1.** Mantén pulsados ambos botones de navegación (izquierdo y derecho) simultáneamente durante 2 segundos.

**Paso 2.** El dispositivo entrará en modo de configuración Wi‑Fi y podrás seguir de nuevo los pasos de [Network Setup](#Network-Setup) para conectarte a una nueva red.

### Indicadores LED

- **LED rojo**:
  - Apagado: Completamente cargado o sin cargar
  - Siempre encendido: cargando

- **LED verde**:
  - Encendido durante 30 segundos al arrancar: el dispositivo se está encendiendo

### Funcionamiento con batería

Cuando funcione con alimentación por batería:

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones

- La duración de la batería depende de la frecuencia de actualización (normalmente 3 meses con una carga completa y la configuración predeterminada)

- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería sea inferior al 20%

:::tip
Si quieres escribir algo de código por tu cuenta para leer el voltaje de la batería, será más preciso añadir un retardo de 10 ms antes de la función analogRead().
:::

### Pines de expansión

El reTerminal E1001 incorpora un conector de expansión de 8 pines (J2) que proporciona opciones de conectividad para añadir sensores externos, módulos u otro hardware para ampliar la funcionalidad de tu dispositivo. Este conector de expansión expone varios pines GPIO y interfaces de comunicación del ESP32-S3, lo que lo convierte en un punto de conexión versátil para tus proyectos DIY.

#### Distribución de pines del conector de expansión

El conector de expansión de 8 pines (J2) tiene la siguiente distribución de pines:

<div class="table-center">
 <table align="center">
  <tr>
   <th>Pin (de arriba a abajo)</th>
   <th>Etiqueta</th>
   <th>Pin ESP32-S3</th>
   <th>Función</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>1</td>
   <td>HEADER_3V3</td>
   <td>-</td>
   <td>Alimentación</td>
   <td>Fuente de alimentación de 3,3 V para dispositivos externos</td>
  </tr>
  <tr>
   <td>2</td>
   <td>GND</td>
   <td>-</td>
   <td>Tierra</td>
   <td>Referencia de tierra común</td>
  </tr>
  <tr>
   <td>3</td>
   <td>ESP_IO46</td>
   <td>GPIO46</td>
   <td>GPIO/ADC</td>
   <td>Entrada/salida de propósito general con capacidad de entrada analógica</td>
  </tr>
  <tr>
   <td>4</td>
   <td>ESP_IO2/ADC1_CH4</td>
   <td>GPIO2</td>
   <td>GPIO/ADC</td>
   <td>Entrada/salida de propósito general con capacidad de entrada analógica (canal 4 de ADC1)</td>
  </tr>
  <tr>
   <td>5</td>
   <td>ESP_IO17/TX1</td>
   <td>GPIO17</td>
   <td>GPIO/UART TX</td>
   <td>GPIO o señal de transmisión (TX) UART</td>
  </tr>
  <tr>
   <td>6</td>
   <td>ESP_IO18/RX1</td>
   <td>GPIO18</td>
   <td>GPIO/UART RX</td>
   <td>GPIO o señal de recepción (RX) UART</td>
  </tr>
  <tr>
   <td>7</td>
   <td>ESP_IO20/I2C0_SCL</td>
   <td>GPIO20</td>
   <td>GPIO/I2C SCL</td>
   <td>GPIO o señal de reloj I2C</td>
  </tr>
  <tr>
   <td>8</td>
   <td>ESP_IO19/I2C0_SDA</td>
   <td>GPIO19</td>
   <td>GPIO/I2C SDA</td>
   <td>GPIO o señal de datos I2C</td>
  </tr>
 </table>
</div>

<!-- ## Device Placement -->
<!--

The reTerminal E1001 comes with a 3D-printed support stand accessory that allows you to position the device upright for optimal viewing:

**Step 1.** Locate the 3D-printed support stand included in the package.

**Step 2.** Position the support stand against the designated mounting area on the bottom back of the reTerminal E1001 where the embedded nuts are located.

**Step 3.** Use a long screwdriver to secure the stand to the device by tightening the screws into the embedded nuts on the back of the reTerminal E1001.

**Step 4.** Once securely attached, place the reTerminal E1001 on a flat surface where the stand will support it in an upright position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
The stand provides a fixed viewing angle and cannot be adjusted. This fixed positioning is designed to offer optimal visibility in most usage scenarios.

The stand allows the device to be placed on desks, countertops, or shelves, making it ideal for use as an information display, control panel, or digital photo frame in various environments.
:::

-->

## Solución de problemas

### P1: El dispositivo no enciende

- Asegúrate de que el interruptor de encendido esté en la posición ON
- Conecta el cable USB-C para cargar el dispositivo
- Comprueba si el LED rojo está siempre encendido (indicando que está cargando)
- Si utilizas alimentación por batería, asegúrate de que la batería esté correctamente conectada y cargada

### P2: No se puede conectar a la Wi‑Fi

- Verifica que estés introduciendo la contraseña Wi‑Fi correcta
- Asegúrate de que tu red Wi‑Fi esté operativa
- Comprueba si tu router Wi‑Fi es compatible con redes de 2,4 GHz (5 GHz no es compatible)
- Intenta colocar el dispositivo más cerca de tu router Wi‑Fi

### P3: La pantalla no se actualiza

- Pulsa el botón de actualización para activar una actualización manualmente
- Verifica que el dispositivo esté conectado a la Wi‑Fi (sin icono de desconexión en la esquina)
- Comprueba tu cuenta de SenseCraft para asegurarte de que el panel de control esté correctamente implementado
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

### P6: El dispositivo no carga

Si ves que el dispositivo no se está cargando, intenta sustituir el cabezal de carga por un adaptador de alimentación de una marca que no sea Apple.

## Recursos

- [Esquemático del reTerminal E1001 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004307_reTerminal_E1001_V1_2_SCH_251120.pdf)
- [Hoja de datos del ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Documentación de la plataforma SenseCraft HMI](https://wiki.seeedstudio.com/es/sensecraft_hmi_overview)
- [Archivo STP del modelo 3D exterior completo](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/es/getting_started_with_reterminal_e1001) -->

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
