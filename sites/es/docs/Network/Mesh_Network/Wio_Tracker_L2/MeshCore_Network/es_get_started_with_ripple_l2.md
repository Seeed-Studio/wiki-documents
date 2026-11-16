---
description: Comienza con Ripple UI en el Wio Tracker L2 Pro. Aprende cómo flashear firmware, configurar redes MeshCore, enviar mensajes, usar mapas y rutas GPS, y desbloquear funciones premium.
title: Primeros pasos con Ripple
keywords:
  - Ripple
  - Ripple UI
  - MeshCore
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png
slug: /get_started_with_ripple_l2_pro
sidebar_position: 2
last_update:
  date: 11/10/2026
  author: Michelle Huang
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

## ¿Qué es Ripple?

Ripple UI es un firmware con pantalla táctil para el L2 Pro. Te permite añadir contactos, enviar y recibir mensajes, ver mapas y registrar tus rutas GPS directamente en el dispositivo, sin usar un teléfono para estas tareas.

### ¿Cómo se relaciona Ripple con MeshCore?

MeshCore se encarga de la comunicación mesh. Ripple UI te permite usarlo directamente en la pantalla táctil del L2 Pro.

| Nombre | Propósito |
| --- | --- |
| MeshCore | Comunicación mesh LoRa |
| Firmware Ripple UI | Funcionamiento autónomo con pantalla táctil |
| Firmware MeshCore Companion | Funcionamiento a través de un teléfono u otro cliente |

Flashea Ripple UI directamente; no es necesaria la instalación previa de Companion.

:::note

El firmware actualizado usa perfiles MeshCore y ya no ofrece Ripple en la pantalla de New Network.

:::

### ¿Para quién es Ripple?

- Usuarios que quieren chatear directamente en el dispositivo sin mantener un teléfono conectado.

- Usuarios al aire libre que quieren mapas sin conexión y un registro de su propia ruta.

- Usuarios que quieren cambiar entre diferentes perfiles de red MeshCore.

- Usuarios avanzados que necesitan gestionar repetidores MeshCore, Room Servers o nodos de sensores. Algunas funciones de gestión requieren un código de desbloqueo de pago.

## Funciones

- **Mensajería autónoma:** Envía mensajes directos y de grupo desde la pantalla táctil.

- **Múltiples perfiles de red:** Mantén separados los ajustes de radio, identidades, contactos y preferencias.

- **Pantalla de inicio personalizable:** Añade accesos directos a contactos, canales y ajustes.

- **Mapas:** Carga mapas desde una microSD, arrastra para desplazarte y toca los botones para hacer zoom.

- **Rutas GPS:** Registra tu posición y marcas de tiempo, y luego ve tu ruta en el mapa.

- **Capturas de pantalla:** Mantén pulsada la esquina superior izquierda de la pantalla para capturar la vista actual.

- **Administración remota:** Desbloquea funciones de gestión de nodos con la autorización del nodo de destino.

## Flashear el firmware

Si tu dispositivo ya tiene la versión de Ripple UI descrita aquí, salta a **Configuración inicial**.

Hay dos variantes de firmware disponibles:

- **Ripple GUI: datos en tarjeta SD (-SD):** Almacena la configuración y los datos en una tarjeta microSD. Inserta una tarjeta formateada en FAT32 de 32 GB o menos antes de usarla.

- **Ripple GUI (Interno):** Almacena la configuración y los datos en la memoria flash interna del dispositivo.

**Paso 1: Abre el flasher web**

Visita el [Wio Tracker L2 Web Flasher](https://flasher.meshcore.io/wio-tracker-l2/) y selecciona el firmware Ripple UI y la variante de almacenamiento para el L2. Usa un navegador de escritorio que admita acceso serie, como Chrome o Edge.

Selecciona `Seeed Studio Wio Tracker L2 Pro`, elige una variante de Ripple GUI y selecciona la versión de firmware. La captura de pantalla de abajo muestra la v12.3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_flasher.png" alt="Selecciona el L2 Pro, la variante Ripple GUI y la versión de firmware en el flasher web" width={1000} height="auto" /></p>

**Paso 2: Entra en modo de descarga manualmente**

Mantén pulsado el botón `U/B` mientras conectas el cable de datos USB y luego pulsa `RST` para entrar en modo de descarga de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_enterdfu.gif" alt="Entrar en modo de descarga usando los botones U/B y RST" width={400} height="auto" /></p>

**Paso 3: Selecciona el puerto y flashea**

Haz clic en `Flash!`, selecciona tu dispositivo en el cuadro de diálogo de puerto serie y conéctate. Sigue las instrucciones en pantalla para completar el flasheo.

:::warning

La opción `Erase device` mostrada arriba borra los datos y ajustes en la memoria flash interna, incluido el estado de desbloqueo. Haz copia de seguridad de los datos importantes y conserva tu Unlock Code antes de borrar.

:::

**Paso 4: Reinicia**

Cuando termine el flasheo, pulsa `RST` para iniciar Ripple UI.

:::tip

Si no puedes continuar después de hacer clic en `Flash`, confirma que el dispositivo está en modo de descarga. Comprueba también el cable de datos USB, los permisos de serie del navegador y si otra aplicación está usando el puerto.

:::

## Configuración inicial

Sigue los tutoriales de pantalla táctil y botones en el primer arranque.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png" alt="Pantallas de inicio de Seeed Studio y MeshCore Ripple UI" width={700} height="auto" /></p>

### Botones de hardware

Ripple UI combina la entrada táctil con dos botones de hardware:

- **Encendido/apagado de pantalla (botón superior):** Pulsa para activar la pantalla o apagarla. Apagar la pantalla no apaga el dispositivo.
- **ENTER (botón lateral U/B):** Pulsa para confirmar una selección, guardar cambios o enviar una entrada cuando se te solicite.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_Button_Indication.webp" alt="Botones de hardware del L2 Pro: botón superior para encender/apagar la pantalla y botón lateral U/B para ENTER" width={700} height="auto" /></p>

### Crear un perfil de red

1. Completa los tutoriales de pantalla táctil y del botón Select que se muestran en el primer arranque.

2. Elige un preset de radio apropiado para tu región o introduce la frecuencia, el factor de dispersión (SF) y otros parámetros usados por tu red local.

3. Nombra el perfil usando letras y números, sin espacios.

4. Guarda el perfil. Si se te solicita, reinicia el dispositivo para aplicar los ajustes.

Para una prueba con dos dispositivos, usa ajustes de radio coincidentes en ambos dispositivos. Seleccionar el mismo preset es la opción más sencilla. Con ajustes personalizados, comprueba también el ancho de banda, la tasa de codificación y otros parámetros, en lugar de hacer coincidir solo la frecuencia y el SF.

### Configura tu nombre

1. Toca `L` en la izquierda, abre el perfil de red actual y selecciona `Identity`.

2. Cambia el nombre predeterminado por algo reconocible, como `micha` o `michb`. Los nombres pueden contener hasta 31 caracteres.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ChangeDeviceName.png" alt="Abre el perfil de red, selecciona Identity y cambia el nombre del dispositivo" width={1000} height="auto" /></p>

## Explora la interfaz

Toca `G`, `L` o `M` en el lado izquierdo de la pantalla para cambiar entre las tres páginas de inicio.

<Tabs>

<TabItem value="grid" label="G: Grid" default>

`G` es una pantalla de inicio personalizable con una cuadrícula de 3 × 4.

- Mantén pulsada una celda vacía para añadir un acceso directo a un contacto, canal de grupo o ajuste.

- Mantén pulsado un acceso directo existente para eliminarlo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_G.jpg" alt="Página de inicio Grid de Ripple UI" width={500} height="auto" /></p>

</TabItem>

<TabItem value="list" label="L: List">

`L` muestra tus perfiles de red, contactos, canales de grupo y `Discover`. Usa esta página para añadir contactos, editar tu Identity y abrir conversaciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_L.png" alt="Página List de Ripple UI" width={500} height="auto" /></p>

La captura de pantalla muestra nombres usados durante las pruebas. Tu lista dependerá de tus perfiles y contactos.

</TabItem>

<TabItem value="map" label="M: Map">

`M` muestra el mapa, las posiciones y cualquier ruta GPS cargada.

- Arrastra la pantalla para desplazarte.

- Toca `+` o `−` para hacer zoom. El gesto de pellizcar para hacer zoom no es compatible.

- Toca el botón de seguimiento de ubicación para mantener el mapa centrado en tu posición. El botón se vuelve naranja cuando está activado y la pantalla permanece encendida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_M.jpg" alt="Mapa de Ripple UI y controles de zoom" width={500} height="auto" /></p>

</TabItem>

<TabItem value="extra" label="Extra">

Abre el menú de la pantalla de inicio en la esquina inferior izquierda para acceder a `Extra`, que contiene ajustes y herramientas del dispositivo.

- **Display:** Ajusta el tamaño de fuente, tema, animaciones y color de acento.

- **Wi-Fi:** Configura tu conexión y las descargas de mapas. La descarga de mapas requiere un código de desbloqueo.

- **Networks:** Crea y gestiona perfiles de red.

- **GPS Config:** Configura los ajustes de comunicación GPS; los valores predeterminados normalmente funcionan para el L2 Pro.

- **Timezone:** Establece el desfase UTC local.

- **SX1262:** Comprueba el estado de inicialización de la radio LoRa. `code=0` significa éxito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_Extra.jpg" alt="Ajustes del sistema Extra de Ripple UI" width={500} height="auto" /></p>

</TabItem>

</Tabs>

### Barra de título y menú del sistema

| Área | Función |
| --- | --- |
| Tocar el lado izquierdo de la barra de título | Abre `Switch To` para cambiar perfiles de red |
| Mantener pulsada la esquina superior izquierda | Captura una captura de pantalla |
| Centro de la barra de título | Abre los interruptores rápidos |
| Lado derecho de la barra de título | Abre la información de GPS |
| Menú inferior izquierdo en la pantalla de inicio | Abre los ajustes del sistema, incluidos Display, Wi-Fi, Networks y Timezone |

### Tomar una captura de pantalla

**Mantén pulsada la esquina superior izquierda de la pantalla** para capturar la vista actual. Puedes usar las capturas de pantalla para compartir ajustes o informar de un problema.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_screenshot.gif" alt="Mantener pulsada la esquina superior izquierda para tomar una captura de pantalla" width={500} height="auto" /></p>

Las capturas de pantalla se guardan como archivos BMP con nombres de archivo de fecha y hora, como se muestra a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_bmp_screenshot.png" alt="Capturas de pantalla BMP guardadas con nombres de archivo de fecha y hora" width={800} height="auto" /></p>

## Envía tu primer mensaje

### Haz que tus dispositivos sean detectables

1. Configura ambos dispositivos con ajustes de radio MeshCore coincidentes.

2. Asigna a cada dispositivo un nombre de `Identity` diferente.

3. Ajusta `Advert` a `On` para permitir anuncios de identidad.

4. Abre `Discover` desde la página `L` y espera a que aparezcan los nodos cercanos.

Para enviar un anuncio de identidad inmediatamente, abre el menú `Discover`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_discover.bmp" alt="Menú Discover con Scan Local, Send ID Local y Send ID Broadcast" width={400} height="auto" /></p>

| Opción | Función |
| --- | --- |
| `Send ID Local` | Envía un anuncio de identidad de cero saltos a los dispositivos cercanos |
| `Send ID Broadcast` | Difunde tu identidad a la malla |
| `Scan Local` | Solicita respuestas de nodos cercanos que admiten respuestas de descubrimiento; se usa comúnmente para descubrir repetidores |

`Scan Local` no muestra todos los dispositivos. Un nodo debe estar dentro del alcance y configurado para responder.

### Añadir contactos

1. Selecciona el nodo de destino en `Discover`.

2. Abre el menú de la esquina superior derecha y selecciona `Add to Contacts`.

3. Vuelve a `L` y confirma que el contacto aparece en la lista.

4. Repite en el otro dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_contact.png" alt="Descubre nodos cercanos, añade un nodo a contactos y míralo en la lista de contactos" width={1100} height="auto" /></p>

### Enviar un mensaje directo

1. Abre el contacto.

2. Toca el campo de entrada y escribe un mensaje.

3. Pulsa `ENTER` para enviar y espera la confirmación.

4. Abre la conversación en el otro dispositivo y responde.

Los mensajes directos esperan un acuse de recibo (ACK) del destinatario. Si el envío falla, comprueba la configuración de radio y la distancia, y vuelve a intentarlo. Si la ruta anterior ya no es utilizable, selecciona `Flood (reset)` en `Path` para encontrar una nueva ruta.

## Mapas y rutas GPS

### Preparar mapas sin conexión

1. Prepara una tarjeta microSD con formato FAT32 de 32 GB o menos.

2. Guarda mosaicos de mapa ráster usando esta estructura de carpetas en la tarjeta:

```text

/tiles/{zoom}/{x}/{y}.png

```

3. Inserta la tarjeta, enciende el dispositivo y abre `M`. El dispositivo necesitará un reinicio si la tarjeta SD se monta o desmonta.

4. Desplázate hasta un área cubierta por tus mosaicos y selecciona un nivel de zoom disponible.

`zoom` es el nivel de zoom; `x` e `y` son las coordenadas del mosaico. Los dispositivos bloqueados solo representan **niveles de zoom 1–9**. Los niveles de zoom más detallados requieren un código de desbloqueo.

### Descargar mapas por Wi‑Fi (requiere desbloqueo)

1. Desbloquea el dispositivo usando las instrucciones siguientes.

2. Abre `Wi-Fi` desde el menú del sistema en la pantalla de inicio.

3. Introduce el nombre y la contraseña de tu red y habilita la descarga de mapas.

4. Pulsa `ENTER` para guardar y reinicia cuando se te indique.

5. Confirma que el menú de Wi‑Fi muestra un indicador de conexión naranja.

6. Abre el mapa y desplázate o haz zoom hasta el área requerida. Los mosaicos se descargan bajo demanda y se almacenan en caché en la tarjeta SD.

### Establecer la ubicación usada en los anuncios

| Ajuste de ubicación de anuncio | Ubicación utilizada |
| --- | --- |
| `GPS` | La posición obtenida por el GPS del dispositivo |
| `Manual` | Una posición fija seleccionada con `Advert Loc` en el mapa |

Para usar un punto seleccionado en el mapa, primero establece `Advert Location` en `Manual`. En modo GPS, los anuncios siguen usando la posición del GPS.

## Desbloquear funciones premium

Puedes probar la mensajería básica antes de comprar un código de desbloqueo. Desbloquea el dispositivo cuando necesites mapas detallados, descargas de mapas por Wi‑Fi, rutas más largas o funciones avanzadas de administración.

### Encontrar el número de serie de tu dispositivo

Busca y abre `Unlock` en los menús del dispositivo. Anota el **número de serie** que se muestra en esa pantalla. Usa este número de serie completo para tu compra, en lugar de los últimos caracteres de una dirección MAC o un PIN de Pair Device.

### Obtener un código de desbloqueo

Abre la [página de código de desbloqueo de Ripple Ultra de Scott](https://buymeacoffee.com/ripplebiz/e/249834), sigue las instrucciones de compra y proporciona el número de serie que se muestra en tu dispositivo. Las licencias se emiten por dispositivo; introduce solo un número de serie de dispositivo por cada licencia.

Si tu dispositivo venía con un código de desbloqueo aplicable, continúa con el siguiente paso.

### Introducir el código en tu dispositivo

1. Una vez que recibas el código de desbloqueo para tu número de serie, abre `Unlock` de nuevo.

2. Introduce el código completo y envíalo.

3. Tras la activación correcta, la opción `Unlock` desaparece.

4. Abre la función premium que quieras usar y confirma que está disponible.

Guarda el código junto con el número de serie de su dispositivo. En nuestra prueba, borrar la flash con `erase_flash` y reinstalar el firmware requirió introducir de nuevo el código de desbloqueo del dispositivo.

### Funciones premium

- **Telemetría automática:** Solicita telemetría cuando abres una conversación con una ruta directa. Muestra ubicación, dirección y distancia si el otro nodo permite telemetría GPS.

- **CLI de administración de sala:** Accede a la línea de comandos del Room Server con su contraseña de administrador.

- **Administrador de repetidor:** Comprueba el estado del repetidor y gestiona el nodo de forma remota.

- **Administrador de sensor:** Accede a comandos de sensor, telemetría y gestión de permisos.

- **Zoom de mapa más detallado:** Muestra mosaicos de mapa por encima del nivel de zoom 9.

- **Descarga por Wi‑Fi:** Descarga mosaicos de mapa bajo demanda y guárdalos en caché en la tarjeta SD.

- **Rutas GPS más largas:** Registra más de los 64 puntos GPS permitidos en dispositivos bloqueados.

## Uso avanzado

### Crear y cambiar perfiles de red

1. Abre el menú del sistema en la pantalla de inicio y selecciona `Networks`.

2. Selecciona `New Network`, configura los ajustes de radio y nombra el perfil.

3. Guarda y reinicia si se te indica.

4. Toca el lado izquierdo de la barra de título y selecciona un perfil en `Switch To`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_new_network.jpg" alt="Creación de un perfil de red MeshCore en Networks" width={500} height="auto" /></p>

Cada perfil tiene su propia identidad, contactos y preferencias. Abrir un contacto que pertenezca a otro perfil puede pedirte que cambies de perfil. Este aviso no indica que el dispositivo haya detectado qué red está usando actualmente el otro nodo.

## Preguntas frecuentes

### Código de estado SX1262

Esta pantalla muestra el código de retorno de RadioLib de la inicialización de la radio LoRa. `0` significa que la inicialización se realizó correctamente. La pantalla está pensada para diagnósticos de radio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_lora_normal.jpg" alt="El código de inicialización SX1262=0 indica éxito" width={500} height="auto" /></p>

### Descubrir otro dispositivo

- Confirma que ambos dispositivos usan perfiles MeshCore compatibles con ajustes de radio coincidentes.

- Habilita Advert en el otro dispositivo o pídele que envíe `Send ID Local`.

- Empieza con una prueba a corta distancia en un área abierta.

- `Scan Local` solo muestra los nodos que responden a las solicitudes de descubrimiento; no sustituye los anuncios de identidad de todos los dispositivos.

### Por qué el mapa está en blanco

Comprueba el formato de la tarjeta SD, las rutas de los mosaicos y si existen mosaicos para el área mostrada. En un dispositivo bloqueado, comprueba también que el nivel de zoom esté entre 1 y 9. Una posición GPS válida no significa que se hayan descargado mosaicos de mapa.

## Recursos

- [Actualizaciones del proyecto Ripple y para desarrolladores](https://buymeacoffee.com/ripplebiz)

- [Código de desbloqueo de Ripple Ultra](https://buymeacoffee.com/ripplebiz/e/249834)

- [Proyecto MeshCore y documentación](https://github.com/meshcore-dev/MeshCore)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
