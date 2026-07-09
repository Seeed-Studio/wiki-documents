---
description: reTerminal E1003 es una pantalla de papel electrónico monocromática de código abierto de 10,3 pulgadas que ofrece 16 niveles de escala de grises y una alta resolución de 1404×1872 píxeles, con compatibilidad con interacción táctil en el firmware HMI v1.1.2.
title: Introducción a reTerminal E1003
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
sku: 100090602
last_update:
  date: 05/09/2026
  author: dimo
createdAt: '2026-03-18'
updatedAt: '2026-06-03'
url: https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1003/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducción a reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

:::tip Prueba demos sin configurar un entorno de desarrollo
Si quieres previsualizar rápidamente los resultados de un proyecto o probar el firmware demo básico antes de configurar un entorno de desarrollo, abre el **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Puedes elegir un dispositivo compatible de la reTerminal E Serie y flashear el firmware de demostración directamente desde un navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

## Introducción

reTerminal E1003 es una pantalla de papel electrónico monocromática de código abierto de 10,3 pulgadas con soporte táctil, que ofrece 16 niveles de escala de grises y una alta resolución de 1404×1872 píxeles, con una duración de batería de hasta 6 meses (basado en una actualización por día). Impulsada por ESP32-S3, es compatible de forma nativa con nuestra plataforma de interfaz de usuario sin código [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) para una creación de paneles de control sin esfuerzo. Ya sea para visualización y control de paneles de hogar inteligente, pantallas de información de oficina o proyectos educativos, este dispositivo listo para usar con capacidad táctil ofrece imágenes impresionantes y una personalización flexible para satisfacer todas tus necesidades.

:::tip
La interacción táctil para reTerminal E1003 es compatible a partir del firmware v1.1.2 de [SenseCraft HMI](https://sensecraft.seeed.cc/hmi). La versión más reciente actualmente es la v1.1.4.3 — recomendamos actualizar a ella para obtener la mejor experiencia.
El soporte de biblioteca relacionado con el tacto está previsto para una futura publicación de código abierto, proporcionando mayor flexibilidad para personalizar paneles. Se compartirán más actualizaciones pronto.

El soporte de ESPHome para reTerminal E1003 está en desarrollo y estará disponible en una versión futura.
:::

### Características

- Actualización completa de 3 segundos para paneles de control ePaper más receptivos
- Crea interfaces interactivas fácilmente con [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) y soporte táctil
- Imágenes nítidas con pantalla de papel electrónico de 16 niveles de escala de grises y alta resolución
- Hasta 6 meses de duración de batería (basado en una actualización por día)
- Personalización flexible de hardware y software


## Especificaciones

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Ítem</th>
			<th align="center">Descripción</th>
		</tr>
		<tr>
			<td align="center"><strong>Nombre del producto</strong></td>
			<td align="center">reTerminal E1003</td>
		</tr>
		<tr>
			<td align="center"><strong>Procesador</strong></td>
			<td align="center">ESP32-S3 con 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Almacenamiento</strong></td>
			<td align="center">Flash de 32 MB; admite una tarjeta microSD</td>
		</tr>
		<tr>
			<td align="center"><strong>Pantalla</strong></td>
			<td align="center">10,3" Monocromática / 16 niveles de escala de grises</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolución</strong></td>
			<td align="center">1404 x 1872 píxeles</td>
		</tr>
		<tr>
			<td align="center"><strong>Tarjeta Micro SD</strong></td>
			<td align="center">Admite tarjetas microSD de hasta 32 GB (FAT32)</td>
		</tr>
		<tr>
			<td align="center"><strong>Conectividad inalámbrica</strong></td>
			<td align="center">Wi-Fi 2.4GHz 802.11 b/g/n, Bluetooth 5.0</td>
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
			<td align="center"><strong>Audio</strong></td>
			<td align="center">Zumbador para alertas sonoras</td>
		</tr>
		<tr>
			<td align="center"><strong>Batería</strong></td>
			<td align="center">3000mAh</td>
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
			<td align="center">224mm x 187mm x 18.6mm</td>
		</tr>
	</table>
</div>


## Aplicaciones

- **Paneles de automatización del hogar:** Muestra datos en tiempo real del hogar inteligente como temperatura, humedad y calidad del aire a través de Home Assistant.
- **Marco de fotos electrónico monocromático de bajo consumo:** Con [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) o la app, puedes subir fácilmente una serie de fotos desde tu álbum de forma remota. Combinado con una gran pantalla de tinta electrónica monocromática de alta resolución, ofrece una visualización de imágenes de ultra bajo consumo, por lo que ya no tendrás que preocuparte por la duración de la batería.
- **Pantallas inteligentes para oficina:** Muestra la disponibilidad de salas de reuniones, horarios de oficina o indicaciones direccionales en pantallas de papel electrónico de bajo consumo y siempre encendidas.
- **Pantallas de información para comercios y espacios públicos:** Señalización de papel electrónico de bajo consumo para menús, horarios o indicadores de ocupación con larga duración de batería.


## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/208.png" style={{width:1000, height:'auto'}}/></div>

1. **Botón de actualización de pantalla:** Situado en la parte superior del dispositivo para la actualización manual de la pantalla.
2. **Botones de avance y retroceso de página:** Situados en la parte superior del dispositivo para navegar entre páginas.
3. **Área de la antena Wi-Fi:** Situada en la parte inferior del dispositivo para la conectividad Wi-Fi.
4. **Ranura para tarjeta MicroSD / TF:** Para almacenamiento ampliable (FAT32, hasta 32GB).
5. **Interruptor de encendido:** Para encender o apagar el dispositivo.
6. **LED de alimentación rojo:** Indica el estado de carga de la batería.
7. **LED de estado verde:** Indica el estado operativo o del sistema actual.
8. **Puerto USB-C de datos y carga:** Para cargar el dispositivo y la transmisión de datos.
9. **Puerto de expansión:** Cabecera de pines que proporciona conexiones VDD, GND, I2C y GPIO para sensores, módulos o periféricos externos.
10. **Orificios roscados para montaje del soporte:** Orificios roscados en la parte posterior del dispositivo para fijar el soporte.
11. **Soporte de apoyo impreso en 3D:** El soporte incluido como accesorio para mantener el dispositivo en posición vertical sobre una superficie plana.
12. **Tornillos de montaje del soporte:** Tornillos utilizados para fijar el soporte al dispositivo.

## Primeros pasos

El reTerminal E1003 viene preinstalado con firmware que es compatible con **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)**, una plataforma sin código que te permite diseñar y desplegar paneles de control personalizados sin esfuerzo.

### Preparativos

**Paso 1.** Desempaqueta tu reTerminal E1003 y asegúrate de que todos los componentes estén incluidos:

- Pantalla de papel electrónico reTerminal E1003
- Cable USB Tipo-C
- Guía de inicio rápido
- Destornillador
- Tornillos
- Soporte de apoyo impreso en 3D

**Paso 2.** (Opcional) Instala el soporte de apoyo impreso en 3D para colocar el dispositivo en posición vertical:

Localiza el soporte de apoyo impreso en 3D incluido en el paquete. Coloca el soporte contra el área de montaje designada en la parte posterior del reTerminal E1003 donde se encuentran las tuercas incrustadas. Usa un destornillador para fijar el soporte al dispositivo apretando los tornillos en las tuercas incrustadas en la parte posterior del reTerminal E1003. Una vez fijado de forma segura, coloca el reTerminal E1003 sobre una superficie plana donde el soporte lo mantendrá en posición vertical.

:::note
El soporte proporciona un ángulo de visión fijo y no se puede ajustar. Esta posición fija está diseñada para ofrecer una visibilidad óptima en la mayoría de los escenarios de uso.
:::

**Paso 3.** (Opcional) Inserta una tarjeta microSD si planeas usar el dispositivo como marco de fotos digital o necesitas almacenamiento adicional.

:::note
La pantalla de papel electrónico reTerminal E Serie solo admite tarjetas MicroSD de hasta 32GB en formato FAT32.  
La tarjeta SD de 32GB viene formateada como exFAT por defecto. Después de formatearla a FAT32, se puede montar correctamente y usar para almacenar imágenes.
:::

**Paso 4.** (Opcional) Instala los controladores USB si es necesario:

Según tu sistema operativo, puede que necesites instalar controladores USB para garantizar una comunicación adecuada con tu reTerminal E1003:

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Los sistemas Windows 11 normalmente incluyen el controlador por defecto
- Para Windows 10 y versiones anteriores, puede que necesites descargar e instalar el controlador CH341 desde el [sitio web oficial de WCH](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

</TabItem>

<TabItem value="MacOS" label="MacOS">

Si estás usando un Mac y no has instalado manualmente el controlador CH34X antes, sigue los pasos a continuación para completar la instalación:

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
Abre la app **CH34xVCPDriver** desde Launchpad, haz clic en **Install**, luego ve a **System Settings → General → Login Items & Extensions → Driver Extensions**. Cambia **CH34xVCPDriver Extensions** a **ON** (azul).
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Paso 3. Conectar y verificar**
Asegúrate de que el **interruptor de encendido del dispositivo esté en ON** y utiliza un **cable USB-C de datos** (no solo de carga). Abre la Terminal y ejecuta:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

Si ves la ruta del dispositivo en la salida, el controlador está instalado correctamente y tu reTerminal está listo para usarse.

</TabItem>

<TabItem value="Linux" label="Linux">

Ubuntu 22.04 y versiones posteriores incluyen los controladores necesarios por defecto.
Para distribuciones más antiguas, si el dispositivo no se reconoce, es posible que tengas que cargar el controlador manualmente.


</TabItem>
</Tabs>

### Encendido

**Paso 1.** Enciende el dispositivo deslizando el interruptor de encendido a la posición **ON**. El interruptor de encendido se encuentra en la parte posterior de la unidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/235.gif" style={{width:700, height:'auto'}}/></div>

**Paso 2.** En el primer arranque, el dispositivo mostrará información del producto e instrucciones de configuración de red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/229.png" style={{width:600, height:'auto'}}/></div><br />

**Paso 3.** El LED de estado verde se enciende durante aproximadamente 3 segundos y luego se apaga, lo que indica que el dispositivo está encendido e inicializándose. Si no se realiza ninguna acción en 30 segundos, el dispositivo entra automáticamente en modo de suspensión para ahorrar energía.

:::tip
Por lo tanto, debemos completar los siguientes pasos de configuración de red durante este tiempo. Cuando el dispositivo entra en suspensión, no podrás encontrar el punto de acceso del dispositivo. Si esto ocurre, puedes despertar el dispositivo presionando el botón **Refresh** en la parte superior de la unidad.
:::

### Configuración de red

<Tabs>
<TabItem value="Network Setup via PC" label="Configuración de red mediante PC" default>

**Paso 1.** Conéctate al punto de acceso Wi‑Fi del dispositivo desde tu teléfono inteligente u ordenador. El nombre del AP aparecerá en la pantalla (no se requiere contraseña). Las credenciales de red son `reTerminal E1003-{MAC Address}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/228.png" style={{width:400, height:'auto'}}/></div><br />

**Paso 2.** Una vez conectado, tu teléfono debería redirigirte automáticamente a la página de configuración Wi‑Fi. Si no lo hace, puedes escanear el código QR que se muestra en la pantalla del reTerminal E1003 con tu teléfono, o abrir manualmente un navegador e ir a `192.168.4.1`.

Si introduces una contraseña incorrecta, simplemente vuelve a introducirla y envíala de nuevo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/222.png" style={{width:700, height:'auto'}}/></div><br />

**Paso 3.** Selecciona tu red Wi‑Fi local e introduce la contraseña, luego haz clic en "Connect".

:::note
La pantalla ePaper de la reTerminal E Serie solo admite redes Wi‑Fi de 2,4 GHz, no de 5 GHz ni otras bandas.
:::

**Paso 4.** Una vez que la conexión sea correcta, el dispositivo emitirá un pitido de confirmación y mostrará una pantalla con el código de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/230.png" style={{width:600, height:'auto'}}/></div>

### Conexión a la plataforma SenseCraft

**Paso 1.** Visita [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) en tu navegador web y crea una cuenta o inicia sesión.



**Paso 2.** En la barra lateral izquierda, haz clic en **Device** para entrar en la página de Dispositivos y luego haz clic en el botón **+ New Device** en la esquina superior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:600, height:'auto'}}/></div>

**Paso 3.** Nombra tu dispositivo e introduce el código de emparejamiento que se muestra en la pantalla de tu dispositivo y haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Paso 4.** Una vez emparejado, el dispositivo mostrará un mensaje invitándote a crear tu primer panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/231.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Configuración de red mediante SenseCraft APP">

Este método utiliza la aplicación móvil SenseCraft para configurar la red del dispositivo y añadirlo a tu cuenta SenseCraft mediante Bluetooth.

Primero, descarga la aplicación SenseCraft. Puedes encontrarla buscando "SenseCraft" en Google Play Store o Apple App Store. Alternativamente, puedes descargarla desde este sitio web.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar APP 🖱️</font></span></strong>
    </a>
</div><br />

**Paso 1.** Abre la aplicación SenseCraft, inicia sesión en tu cuenta y ve a la pestaña **User**. Toca **Device Bluetooth Configuration** para comenzar el proceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 2.** En la pantalla "Please select the device type", elige **reTerminal E1003**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 3.** Sigue las instrucciones en pantalla para poner tu dispositivo en modo de difusión Bluetooth. Asegúrate de que el Bluetooth de tu teléfono esté activado. Toca **Scan** y la aplicación detectará los dispositivos cercanos. Selecciona tu dispositivo de la lista para conectarte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 4.** Una vez conectado por Bluetooth, la aplicación te pedirá que configures la conexión Wi‑Fi. Selecciona tu red Wi‑Fi local de 2,4 GHz de la lista desplegable, introduce la contraseña y toca **Next**.

:::note
El dispositivo solo puede configurarse mediante una red Wi‑Fi de 2,4 GHz.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 5.** La aplicación enviará las credenciales Wi‑Fi al dispositivo y lo añadirá a tu cuenta SenseCraft. Aparecerá un mensaje de "Device added successfully" al finalizar. Ahora puedes tocar **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 6.** Tu reTerminal aparecerá ahora en tu lista de dispositivos en la pestaña principal **Device** de la aplicación, conectado correctamente a tu cuenta SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 7.** Puedes tocar el dispositivo en la lista para ver su página de **Device Detail**. Desde aquí, puedes gestionar el dispositivo y subir fotos. Para un diseño de panel de control y lienzo más complejo, se te pedirá que utilices la versión web de SenseCraft en el navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### Actualización de firmware

Después de que el dispositivo se añada correctamente a tu cuenta SenseCraft, la plataforma comprobará automáticamente la versión del firmware. Si hay un firmware más reciente disponible, se te pedirá que lo actualices.

También puedes comprobar la versión del firmware manualmente en cualquier momento:

**Paso 1.** En la página **Device**, busca tu reTerminal E1003 para ver sus detalles y toma nota de la **versión actual del firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/227.png" style={{width:350, height:'auto'}}/></div>

**Paso 2.** En la barra lateral izquierda, haz clic en **Tools** y abre la pestaña **Firmware Flasher** para ver la **última versión de firmware** disponible para este dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Si la versión actual es más antigua que la última, sigue el flujo de 3 pasos en la página Firmware Flasher para actualizar:

1. **Selecciona tu dispositivo** — conecta el reTerminal E1003 a tu ordenador mediante el cable USB‑C, asegúrate de que el interruptor de encendido esté en **ON** y luego haz clic en **Select** y elige tu dispositivo de la lista.

2. **Selecciona el firmware** — elige el firmware más reciente de las opciones de lanzamiento del menú desplegable.

3. **Flashear** — haz clic en **Flash** y espera a que la actualización se complete. Activa **Full Flash** solo si quieres restablecer el dispositivo al estado de fábrica (todos los datos, ajustes y diseños se borrarán).

:::note

1. Actualizar el firmware garantiza un rendimiento óptimo y acceso a las funciones más recientes. La interacción táctil para reTerminal E1003 requiere firmware **v1.1.2 o posterior**. La versión más reciente actualmente es v1.1.4.3 — recomendamos actualizar a ella para obtener la mejor experiencia.

2. No es posible flashear el firmware correctamente cuando el dispositivo está apagado o en modo de suspensión. Si seleccionas el puerto correcto para tu dispositivo pero nunca ves el progreso de flasheo del firmware, puede que necesites despertar el dispositivo presionando el botón **Refresh** en la parte superior de la unidad e intentarlo de nuevo.

3. **Realiza un Flash estándar** para mantener tu configuración: se conservan el Wi‑Fi, los diseños desplegados y las imágenes. **Realiza un Flash completo para empezar desde cero**: se borran todos los datos, ajustes y diseños (estado de fábrica).

:::

## Muestra contenido en tu reTerminal E1003

Una vez que tu dispositivo esté emparejado, puedes empezar a usarlo para mostrar lo que quieras. Recomendamos **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)**, una plataforma en la nube sin código que te permite diseñar y desplegar contenido en tu reTerminal E1003 en solo unos pocos clics.

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) tiene su propia Wiki dedicada con tutoriales completos y documentación de funciones. Para guías detalladas (configuración de cuenta, flasheo de firmware, uso avanzado del editor, despliegue, etc.), consulta:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Dado que este artículo es una **Guía de inicio rápido** del producto, no repetiremos el mismo contenido aquí; a continuación solo se muestra cómo visualizar rápidamente algo en tu reTerminal E1003.

### Home — Comienza desde una plantilla de la comunidad

La forma más rápida de mostrar algo en tu pantalla es comenzar desde una plantilla ya preparada. En la página **Home** de [SenseCraft HMI](https://sensecraft.seeed.cc/hmi), encontrarás una colección grande y en continuo crecimiento de plantillas aportadas por la comunidad: paneles de control, relojes, paneles meteorológicos, muros de frases, calendarios, marcos de fotos y más. Explora la galería, elige el diseño que más te guste y despliega en tu reTerminal E1003 con un solo clic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Gestiona y diseña tu propio contenido

La página **Workspace** es donde gestionas todas las páginas y el contenido que se muestra en el dispositivo actualmente vinculado. Desde aquí puedes:

- Crear y organizar tus propias páginas de diseño desde cero
- Subir imágenes y organizarlas en presentaciones de diapositivas
- Combinar texto, widgets, formas, datos, fuentes RSS, contenido web y más en un único editor de arrastrar y soltar
- Desplegar el diseño final de forma inalámbrica en tu reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/226.png" style={{width:1000, height:'auto'}}/></div>

Una vez que tu diseño esté guardado, haz clic en **Deploy to Device**, selecciona tu reTerminal E1003 emparejado y el contenido se transmitirá de forma inalámbrica al dispositivo. La pantalla de tinta electrónica se actualizará para mostrar tu diseño. La interacción táctil requiere firmware **v1.1.2 o posterior**; la versión más reciente actualmente es **v1.1.4.3**, y recomendamos actualizar a ella para obtener la mejor experiencia.

Para todo lo demás —operaciones detalladas del editor, consejos y notas de la versión— consulta la [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Controles manuales del dispositivo

### Botón de actualización

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/233.png" style={{width:700, height:'auto'}}/></div>

El botón de actualización en la parte superior del dispositivo cumple varias funciones:

- **Pulsación corta**: Actualiza manualmente la pantalla y comprueba si hay contenido nuevo desde la plataforma SenseCraft. El zumbador emitirá un pitido para confirmar la acción. Este botón también se usa habitualmente para activar el dispositivo cuando ha entrado en reposo y una actualización del panel no está disponible de inmediato.

- **Pulsación larga** (funcionalidad futura): Activará el modo de entrada de voz.

### Botones de navegación

Los botones izquierdo y derecho te permiten navegar entre varias páginas si tu panel de control contiene más de una página:

- **Botón izquierdo**: Navega a la página anterior

- **Botón derecho**: Navega a la página siguiente

### Restablecimiento de red

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/234.png" style={{width:700, height:'auto'}}/></div>

Si necesitas conectarte a una red Wi‑Fi diferente:

**Paso 1.** Mantén pulsados ambos botones de navegación (izquierdo y derecho) simultáneamente durante 2 segundos.

**Paso 2.** El dispositivo entrará en modo de configuración Wi‑Fi y podrás seguir de nuevo los pasos de [Network Setup](#network-setup) para conectarte a una nueva red.

### Indicadores LED

- **Todos los LED apagados:**
  - No hay cable USB conectado

- **LED rojo:**
  - Encendido fijo cuando el cable USB está conectado y la carga está en curso

- **LED verde:**
  - Se enciende durante aproximadamente 3 segundos en cada encendido y luego se apaga
  - Encendido fijo cuando el cable USB está conectado y la batería está completamente cargada


### Funcionamiento con batería

Cuando funciona con alimentación por batería:

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones

- La duración de la batería depende de la frecuencia de actualización (normalmente 6 meses con una carga completa y una actualización al día)

- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería sea inferior al 20%

:::tip
Si quieres escribir algo de código por tu cuenta para leer el voltaje de la batería, será más preciso añadir un retardo de 10 ms antes de la función analogRead().
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/232.png" style={{width:300, height:'auto'}}/></div>


### Pines de expansión

El reTerminal E1003 incorpora un conector de expansión de 6 pines (J2) que proporciona opciones de conectividad para añadir sensores externos, módulos u otro hardware para ampliar la funcionalidad de tu dispositivo. Este conector de expansión expone varios pines GPIO del ESP32-S3 e interfaces de comunicación, lo que lo convierte en un punto de conexión versátil para tus proyectos DIY.

#### Distribución de pines del conector de expansión

El conector de expansión de 6 pines (J2) tiene la siguiente distribución de pines:

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
			<td>ESP_IO47</td>
			<td>GPIO47</td>
			<td>GPIO/ADC</td>
			<td>Entrada/salida de propósito general con capacidad de entrada analógica</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO6/ADC1_CH</td>
			<td>GPIO6</td>
			<td>GPIO/ADC</td>
			<td>Entrada/salida de propósito general con capacidad de entrada analógica</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO o señal de reloj I2C</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIO o señal de datos I2C</td>
		</tr>
	</table>
</div>

## Solución de problemas

### P1: El dispositivo no enciende

- Asegúrate de que el interruptor de encendido esté en la posición ON
- Conecta el cable USB‑C para cargar el dispositivo
- Comprueba si el LED rojo está siempre encendido (indicando que está cargando)
- Si usas alimentación por batería, asegúrate de que la batería esté correctamente conectada y cargada

### P2: No se puede conectar a la red Wi‑Fi

- Verifica que estés introduciendo la contraseña Wi‑Fi correcta
- Asegúrate de que tu red Wi‑Fi esté operativa
- Comprueba si tu router Wi‑Fi es compatible con redes de 2,4 GHz (5 GHz no es compatible)
- Intenta colocar el dispositivo más cerca de tu router Wi‑Fi

### P3: La pantalla no se actualiza

- Pulsa el botón de actualización para forzar una actualización manual
- Verifica que el dispositivo esté conectado a la red Wi‑Fi (sin icono de desconexión en la esquina)
- Comprueba en tu cuenta de SenseCraft que el panel de control esté correctamente desplegado
- Si el problema persiste, intenta reiniciar el dispositivo
- Si el dispositivo sigue sin responder después de reiniciarlo, vuelve a flashear el firmware correspondiente en la plataforma [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) y comprueba si se restaura la actualización normal

### P4: Conexión de red perdida

- El dispositivo intentará reconectarse automáticamente a las redes conocidas
- Cuando se reconecte, el icono de desconexión de Wi‑Fi desaparecerá
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
Asegúrate de que el **interruptor de encendido del dispositivo esté en ON** y usa un **cable USB‑C de datos** (no solo de carga). Abre Terminal y ejecuta:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

Si ves la ruta del dispositivo en la salida, el controlador está instalado correctamente y tu reTerminal está listo para usarse.

## Recursos

- [Esquemático de reTerminal E1003 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
