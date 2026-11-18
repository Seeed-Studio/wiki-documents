---
description: "Utiliza el USB KVM Capture Kit con reComputer Jetson: conecta y comparte teclado y ratón, captura vídeo HDMI o DisplayPort y empieza a usar OSRBOT Link."
title: Introducción al USB KVM Capture Kit
keywords:
  - Edge
  - NVIDIA Jetson
  - reComputer
  - USB KVM
  - Captura de vídeo
  - OSRBOT Link
image: https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png
slug: /usb_kvm_capture_kit_getting_start
last_update:
  date: '2026-11-13'
  author: zibo
createdAt: '2026-11-13'
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/es/usb_kvm_capture_kit_getting_start/
---

<div align="center">
  <img alt="Dispositivo OSRBOT Link para compartir teclado y ratón por USB" width="600" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/product.png" />
</div>

El USB KVM Capture Kit combina un **dispositivo OSRBOT Link para compartir teclado y ratón** con accesorios opcionales de captura de vídeo. Utiliza el teclado y el ratón de tu ordenador para manejar un reComputer Jetson y visualiza la salida de vídeo del Jetson en la aplicación OSRBOT Link cuando se conecta una tarjeta de captura. Esto es útil para la configuración y resolución de problemas in situ sin un monitor, teclado y ratón independientes.

En esta guía, el **controlador** es el ordenador que ejecuta OSRBOT Link y el **objetivo** es el reComputer Jetson que se está manejando. El objetivo no necesita tener OSRBOT Link instalado, pero debe admitir entrada de teclado y ratón USB.

## Características

- Control de teclado y ratón USB sin instalar software en el objetivo.
- Software de controlador para Windows, macOS y Ubuntu.
- Captura de vídeo HDMI opcional, con un adaptador DP a HDMI para objetivos con salida DisplayPort.
- Captura de capturas de pantalla, grabación de vídeo, captura de GIF y pegado de comandos ASCII.
- Puertos de expansión USB separados para el controlador y el objetivo.
- Uso compartido de red Ethernet opcional y control del navegador en LAN con OSRBOT Link Pro.

:::info
La entrada de teclado/ratón, la captura de vídeo y el uso compartido de red utilizan conexiones separadas. El dispositivo de compartición por sí solo no captura vídeo y su cable de datos USB no transporta tráfico de red. La resolución de vídeo, la frecuencia de fotogramas y la latencia dependen de la tarjeta de captura y de la ruta de vídeo.
:::

## Especificaciones

### Dispositivo para Compartir Teclado y Ratón

<div class="table-center">

| Elemento | Especificación |
| --- | --- |
| Producto | Dispositivo OSRBOT Link para compartir teclado y ratón |
| Carcasa | Aleación de aluminio y plástico de ingeniería |
| Conexión del controlador | USB 3.0, con un puerto de expansión USB 3.0 en el lado del controlador |
| Conexión del objetivo | USB 2.0, con un puerto de expansión USB 2.0 en el lado del objetivo |
| Cable de datos suministrado | USB-A macho a USB-A macho, 1 m |
| Software del controlador | OSRBOT Link |
| Plataformas del controlador | Windows, macOS, Ubuntu |
| Visualización de vídeo | Requiere una tarjeta de captura externa |

</div>

### Tarjeta de Captura

Las siguientes especificaciones describen la tarjeta de captura indicada en los manuales de OSRBOT Link v1.1. No se aplican a todas las tarjetas de captura de terceros.

<div align="center">
  <img alt="Tarjeta de captura con entrada HDMI y salida USB-A" width="300" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/capture-card.png" />
</div>

<div class="table-center">

| Elemento | Especificación |
| --- | --- |
| Conexión | Entrada HDMI a salida USB-A |
| Captura MJPG | 4K a 60 fps / 2K a 60 fps / 1080p a 144 fps |
| Captura NV12 | 4K a 30 fps / 2K a 60 fps / 1080p a 60 fps |
| Captura YUY2 | 4K a 25 fps / 2K a 50 fps / 1080p a 60 fps |
| XRGB (RGB24), según se indica en el manual | 2K a 30 fps / 1080p a 60 fps |
| Salida de audio | Estéreo por defecto, 48 kHz / 24 bit |
| Captura de audio | Compatibilidad con canales 5.1 / 7.1 |
| Latencia de previsualización | 40–80 ms, normalmente aproximadamente 60 ms |
| Protocolo de vídeo | UVC |

</div>

:::note
Estas especificaciones y cifras de latencia de la tarjeta de captura son proporcionadas por el proveedor, no resultados de pruebas con Jetson. Las condiciones de latencia indicadas son USB 3.0, 1080p a 60 fps y previsualización RGB24 en un ordenador. Los modos disponibles dependen de la tarjeta de captura real, la salida de origen, la conexión USB y el software. Las capacidades de audio de la tarjeta no establecen por sí solas compatibilidad de audio en todos los flujos de trabajo de las aplicaciones.
:::

## Contenido del Paquete

<div class="table-center">

| Accesorio | Básico | HDMI | HDMI + DP |
| --- | --- | --- | --- |
| Dispositivo para compartir teclado y ratón | Incluido | Incluido | Incluido |
| Cable de datos USB-A a USB-A | Incluido | Incluido | Incluido |
| Tarjeta de captura | — | Incluida | Incluida |
| Cable HDMI | — | Incluido | Incluido |
| Adaptador DP a HDMI | — | — | Incluido |

</div>

<div align="center">
  <img alt="Cable de datos USB-A, cable HDMI y adaptador DP a HDMI" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/accessories.png" />
</div>

El manual indica un cable de datos USB-A de 1 m, un cable HDMI macho a macho de 0,6 m (HDMI 2.0, 19+1) y un adaptador DP macho a HDMI hembra. El contenido del paquete y las especificaciones de los accesorios pueden cambiar; confirma los elementos suministrados al hacer el pedido.

## Dispositivos Compatibles y Requisitos

Prepara lo siguiente:

- **Controlador:** un ordenador con Windows, macOS o Ubuntu con conectividad USB. Para el rendimiento indicado de la tarjeta de captura, utiliza USB 3.0. Tanto el dispositivo de compartición como la tarjeta de captura deben conectarse al controlador cuando se use vídeo.
- **Objetivo:** un reComputer Jetson alimentado con un puerto host USB que admita entrada de teclado/ratón. Para vídeo, también necesita una salida HDMI o DisplayPort funcional.
- **Software:** un paquete OSRBOT Link que coincida con el sistema operativo y la arquitectura del procesador del controlador.
- **Accesorios:** el cable de datos USB-A suministrado y, para vídeo, una tarjeta de captura, un cable HDMI y un adaptador DP a HDMI si es necesario.
- **Red opcional:** un cable Ethernet y adaptadores de red adecuados para el uso compartido de red; una LAN de confianza accesible para el acceso mediante navegador.

Esta guía describe los requisitos de conexión en lugar de una lista de compatibilidad probada para cada modelo de reComputer o versión de JetPack. Consulta la documentación de hardware de tu dispositivo para conocer sus puertos host USB y su conector de pantalla. El Jetson es el objetivo aquí; no instales un paquete de controlador en él solo porque ejecute Ubuntu.

## Conexión de Hardware

### Identificar los Puertos

<div align="center">
  <img alt="Lado del controlador: el puerto 1 es el conector USB-A integrado y el puerto 2 es el puerto de expansión USB 3.0 azul" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/controller-ports.png" />
  <img alt="Lado del objetivo: el puerto 3 es el puerto de expansión USB 2.0 superior y el puerto 4 es el puerto de conexión inferior del objetivo" width="400" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/target-ports.png" />
</div>

| Puerto | Propósito | Conexión |
| --- | --- | --- |
| 1 | Conexión del controlador | Inserta el conector USB-A integrado en el ordenador que ejecuta OSRBOT Link. |
| 2 | Expansión USB 3.0 del lado del controlador | Conecta un periférico perteneciente al controlador, como una unidad USB o un receptor de teclado. |
| 3 | Expansión USB 2.0 del lado del objetivo | Conecta un periférico USB perteneciente al Jetson. |
| 4 | Conexión del objetivo | Utiliza el cable de datos USB-A a USB-A suministrado para conectar este puerto inferior a un puerto host USB del Jetson. |

:::caution
Conecta el cable de datos suministrado entre **el puerto 4 del dispositivo de compartición** y el Jetson. No lo utilices para conectar directamente el puerto USB del controlador al puerto host USB del Jetson. Los puertos 2 y 3 son puertos de expansión, no sustitutos del puerto 4.
:::

### Descripción General de la Conexión con reComputer

<div align="center">
  <img alt="Diagrama de conexión de reComputer Jetson: el teclado y el ratón viajan desde el controlador a través del dispositivo de compartición OSRBOT hasta un puerto host USB del Jetson; el vídeo HDMI o DP del Jetson regresa a través de una tarjeta de captura al controlador; el uso compartido de red opcional utiliza un cable Ethernet independiente" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/recomputer-connection.svg" />
</div>

El diagrama es una guía lógica de cableado; la posición de los conectores depende de tu modelo de reComputer. Alimenta el Jetson utilizando su fuente de alimentación normal. Elige una de las tres configuraciones siguientes.

### Opción 1: Solo Teclado y Ratón

1. Inserta el **puerto 1** del dispositivo de compartición en el controlador.
2. Conecta el **puerto 4** al puerto host USB del Jetson utilizando el cable de datos suministrado.
3. Utiliza la pantalla existente del objetivo si es necesario. Sin una tarjeta de captura, OSRBOT Link proporciona control de entrada pero no previsualización de vídeo del objetivo.

<div align="center">
  <img alt="Solo teclado y ratón: USB del controlador al dispositivo de compartición, luego el puerto 4 y el cable de datos al puerto USB del objetivo" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/keyboard-mouse-connection.png" />
</div>

### Opción 2: Teclado y Ratón con Vídeo HDMI

1. Completa las conexiones de teclado/ratón indicadas arriba.
2. Conecta la **salida HDMI** del Jetson a la **entrada HDMI** de la tarjeta de captura utilizando el cable HDMI.
3. Conecta la **salida USB** de la tarjeta de captura al controlador.

<div align="center">
  <img alt="Configuración HDMI con rutas separadas de control de entrada USB y captura de vídeo HDMI a USB" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/hdmi-connection.png" />
</div>

### Opción 3: Teclado y Ratón con Vídeo DisplayPort

1. Completa las conexiones de teclado/ratón de la Opción 1.
2. Conecta el adaptador DP a HDMI a la **salida DisplayPort** del Jetson.
3. Conecta un cable HDMI desde el adaptador a la **entrada HDMI** de la tarjeta de captura.
4. Conecta la **salida USB** de la tarjeta de captura al controlador.

<div align="center">
  <img alt="Configuración DisplayPort: salida DP del objetivo a través de un adaptador DP a HDMI y un cable HDMI hasta la tarjeta de captura, con el USB de la tarjeta de captura conectado al controlador" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/dp-connection.png" />
</div>

La dirección del adaptador es **fuente DP a entrada de captura HDMI**. El dispositivo de compartición permanece conectado en ambas configuraciones de vídeo.

## Instalación de Software

### Descargar OSRBOT Link

Abre las [versiones oficiales de OSRBOT Link](https://github.com/osrbot/osrbot-link/releases) en el controlador y selecciona un paquete para su plataforma.

| Plataforma del controlador | Paquete |
| --- | --- |
| Windows | Instalador o paquete portable que coincida con la versión y arquitectura de Windows admitidas |
| macOS | Paquete para Apple Silicon o Intel, según el Mac |
| Ubuntu | DEB o AppImage para una arquitectura compatible; consulta los requisitos de la versión |

**OSRBOT Link Pro** incluye los flujos de trabajo de uso compartido de red y control del navegador en LAN descritos a continuación. **Lite** está pensado para control USB local y herramientas de captura. Utiliza Pro para seguir la guía completa y consulta las notas de la versión seleccionada para conocer los sistemas compatibles y los detalles de instalación.

### Permitir los permisos requeridos

- **Windows y macOS:** permite el acceso a la cámara para la tarjeta de captura.
- **macOS:** permite el acceso a Accesibilidad al reenviar atajos del sistema. Configura el uso compartido de Internet manualmente en Configuración del sistema si utilizas esa función opcional.
- **Ubuntu:** si falla el acceso HID, abre **Settings → Input and Shortcuts → Fix Linux HID Permissions**, autoriza la acción y vuelve a escanear. Vuelve a conectar el dispositivo de compartición si es necesario.

Las etiquetas de la interfaz pueden variar entre versiones. Las capturas de pantalla y los límites de funcionamiento de esta guía proceden de los manuales de producto v1.1.

## Iniciar el control

<div align="center">
  <img alt="Ventana principal de OSRBOT Link que muestra la secuencia: conectar HID, iniciar vídeo opcional y luego hacer clic en el área de trabajo" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/start-control.png" />
</div>

1. **Conecta HID.** Abre OSRBOT Link, actualiza la lista de **Keyboard/Mouse Sharing**, selecciona **OSRBOT HID** y haz clic en **Connect**. Confirma que el estado sea **Connected**.
2. **Inicia el vídeo, si está conectado.** Selecciona la tarjeta de captura en **Video Capture** (aparece como **Video Input** en algunas interfaces), elige una resolución y frecuencia de fotogramas compatibles en **Capture Settings** y haz clic en **Start Video**. Omite este paso para funcionamiento solo con teclado/ratón.
3. **Elige el modo de ratón.** Usa **Computer** para objetivos de ordenador como un escritorio Jetson. El modo **Android** utiliza movimiento relativo para objetivos Android.
4. **Inicia la entrada.** Haz clic en el vídeo o en el área de trabajo en blanco. El teclado y el ratón del controlador ahora operan el objetivo.
5. **Verifica el funcionamiento.** Con el vídeo activado, confirma que aparezca el escritorio Jetson esperado. Mueve el puntero y escribe una cadena de prueba inofensiva en un campo de texto del objetivo.

:::tip
Pulsa **Shift + Esc** para liberar la entrada y salir de pantalla completa. Haz clic de nuevo en el área de trabajo para reanudar. Abrir la configuración, cambiar modos o cambiar de ventana pausa el control. Se puede habilitar en Settings un atajo opcional de liberación con **Right Ctrl**.
:::

Cuando termines, haz clic en **Disconnect** en Keyboard/Mouse Sharing. Usa el menú Control para enviar **Ctrl+Alt+Del** cuando corresponda; el reenvío de atajos de sistema reservados depende de la plataforma del controlador.

## Funciones adicionales

### Configuración de pantalla y captura

| Modo de pantalla | Comportamiento |
| --- | --- |
| Fit | Conserva la relación de aspecto y muestra la imagen completa. |
| Fill | Conserva la relación de aspecto; los bordes pueden recortarse. |
| Original | Muestra las dimensiones de píxeles originales. |
| Stretch | Rellena el área de trabajo; la relación de aspecto puede cambiar. |

Usa el menú Display para entrar en pantalla completa o mostrar/ocultar la barra lateral y la barra de herramientas. Detén el vídeo antes de cambiar la tarjeta de captura o la configuración de captura. La barra de estado muestra la resolución y frecuencia de fotogramas reales; introducir una resolución personalizada no añade capacidades a la tarjeta de captura.

### Capturas de pantalla, grabación y GIF

Inicia el vídeo y luego usa el menú Capture o la barra de herramientas de pantalla completa:

- **Screenshot:** guarda el fotograma capturado actual en una ubicación elegida.
- **Recording:** haz clic en Record y luego en Stop Recording para guardar. Cada grabación se detiene y guarda automáticamente en **256 MiB**; inicia otro segmento para continuar.
- **GIF:** graba un clip corto y luego detente para guardar. Cada clip está limitado a aproximadamente **10 seconds**.

Detener el vídeo también finaliza la grabación. Espera a que termine el guardado antes de cerrar la aplicación o desconectar dispositivos. En **Settings → Capture and Watermark**, se puede añadir un nombre personalizado a la marca de agua de OSRBOT Link.

### Comandos de pegado

<div align="center">
  <img alt="Paste Helper con vista previa del comando, velocidad de envío y opción Enter después de enviar" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/paste-helper.png" />
</div>

1. Mantén HID conectado y enfoca un terminal o campo de texto en el Jetson.
2. Abre **Control → Paste Helper**. Revisa el texto del portapapeles o introduce el comando.
3. Elige **Fast**, **Standard** o **Slow**, y comprueba si **Press Enter after sending** está habilitado.
4. Haz clic en **Send Paste** y espera a que termine. Usa **Stop Sending** para interrumpir.

Durante el control local, **Ctrl + Alt + V** envía una sola línea de hasta **256 printable ASCII characters**, sin pulsar Enter. El texto más largo o multilínea abre una vista previa. Paste Helper acepta hasta **1,200 ASCII characters** y no admite texto en chino ni transferencia de archivos.

:::caution
Paste Helper genera entrada de teclado en el campo enfocado del objetivo. Comprueba el foco del objetivo y el comando antes de enviar, especialmente cuando la opción de pulsar Enter está habilitada.
:::

### Configuración y diagnósticos

<div align="center">
  <img alt="Pestañas de configuración de OSRBOT Link para preferencias generales, entrada y atajos, captura y marca de agua, e información de la aplicación" width="800" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/settings.png" />
</div>

La configuración incluye idioma inglés/chino, apariencia clara/oscura/sistema, dirección de desplazamiento, atajos de liberación, indicaciones del puntero y pegado rápido. Las preferencias se guardan en el controlador; cambiarlas no conecta los dispositivos automáticamente.

Para la resolución de problemas, habilita los registros de diagnóstico en **Settings → General**, reproduce el problema y selecciona **Export**. Según el manual, los registros registran el estado de la sesión en lugar de pulsaciones de teclas, contenido del portapapeles o vídeo, y no se cargan automáticamente.

## Opcional: uso compartido de red

En OSRBOT Link Pro, abre **Network and Remote**. El uso compartido de red da al Jetson acceso a la conexión ascendente del controlador; es independiente del control de teclado/ratón y de la captura de vídeo.

<div align="center">
  <img alt="Ejemplo de uso compartido de red en Windows con selecciones separadas de adaptador ascendente y adaptador de destino" width="650" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/network-sharing.png" />
</div>

1. Conecta los puertos Ethernet del controlador y del Jetson con un cable Ethernet.
2. Conecta el controlador a la red ascendente mediante Wi‑Fi o un segundo adaptador Ethernet.
3. Selecciona el **Upstream Adapter** y el **Target Adapter**, haz clic en **Enable Sharing** y concede los permisos de sistema solicitados.
4. Comprueba el estado y la información IP mostrados y luego verifica desde el Jetson el servicio LAN requerido o el acceso a internet.
5. Haz clic en **Disable Sharing** cuando termines.

Windows requiere acceso de administrador. Linux requiere NetworkManager, autorización del sistema y una ruta predeterminada en el adaptador ascendente. En macOS, habilita el uso compartido de Internet manualmente en Configuración del sistema.

:::note
El cable USB de teclado/ratón no proporciona esta conexión de red. Para un enlace Ethernet directo sin conexión, usa direcciones IP mutuamente alcanzables; el acceso a internet y el uso compartido de red no son necesarios. Cerrar OSRBOT Link **no** deshabilita el uso compartido de red del sistema. Los nombres de adaptador y direcciones de la captura de pantalla son ejemplos.
:::

## Opcional: control del navegador en LAN

Mantén OSRBOT Link Pro en ejecución en el controlador. Otros ordenadores en una LAN de confianza alcanzable pueden ver la pantalla capturada del Jetson y, cuando estén autorizados, operarlo a través de un navegador. No es necesario habilitar el uso compartido de red para esta función.

<div align="center">
  <img alt="Configuración de control LAN en el controlador, con IP LAN, puerto, emparejamiento y permisos de control" width="450" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/lan-control.png" />
</div>

1. En el controlador, selecciona su IP LAN y puerto, luego haz clic en **Enable LAN**.
2. En otro ordenador, abre la dirección real que muestra la aplicación, introduce el código de emparejamiento y haz clic en **Connect**. Cada código se usa una sola vez y caduca después de **2 minutes**.
3. Para ver, asegúrate de que el vídeo se esté ejecutando en el controlador.
4. Para la entrada, conecta también HID, habilita **Allow Control** y concede permiso de control a ese navegador. El usuario del navegador puede hacer clic en **Request Control**.

<div align="center">
  <img alt="Página de emparejamiento del navegador y barra de herramientas de control con escalado de pantalla, calidad de streaming y controles de pantalla completa" width="900" src="https://files.seeedstudio.com/wiki/reComputer/usb-kvm-capture-kit/browser-control.png" />
</div>

Hasta **4 browsers** pueden ver al mismo tiempo, con solo **1 browser** con entrada remota concedida. El controlador y el navegador autorizado pueden enviar entrada, así que coordina la operación. **Disable Control** revoca la entrada remota mientras permite la visualización; deshabilitar el control LAN finaliza todas las sesiones.

Usa una LAN de confianza, permite el acceso del cortafuegos a la red privada según sea necesario y no reenvíes el puerto a internet pública. La reconexión requiere un nuevo código de emparejamiento. Si cambia la IP del controlador, reinicia el control LAN y usa la nueva dirección.

## Solución de problemas

| Síntoma | Qué comprobar |
| --- | --- |
| Falta el dispositivo de compartición o HID no puede conectar | Comprueba la conexión USB del controlador, actualiza la lista y vuelve a seleccionar el dispositivo HID. Si es necesario, usa Reset HID o corrige los permisos HID de Linux y luego vuelve a conectar. |
| El vídeo funciona pero la entrada no | Confirma que HID esté en estado Connected, que el cable del objetivo use el puerto 4 y que se haya hecho clic en el área de trabajo. Para la entrada desde el navegador, comprueba también la autorización de control. |
| Sin vídeo o pantalla en negro | Comprueba la salida de vídeo del objetivo, la dirección HDMI/DP, la conexión USB de la tarjeta de captura y el permiso de cámara. Cierra otras aplicaciones que usen la tarjeta de captura. |
| No se puede iniciar una resolución o frecuencia de fotogramas | Detén el vídeo y selecciona un modo compatible con la tarjeta de captura y la fuente. Comprueba la conexión USB; la configuración personalizada no puede superar las capacidades del hardware. |
| La entrada se detiene tras abrir la configuración o cambiar de ventana | Haz clic de nuevo en el área de trabajo para reanudar el control. Si sigue sin responder, usa Reset HID, actualiza y vuelve a conectar. |
| El uso compartido de red está habilitado pero el acceso falla | Comprueba ambas selecciones de adaptador, el cableado Ethernet y la dirección, puerta de enlace y DNS del objetivo. Verifica el servicio requerido desde el objetivo; un ping correcto por sí solo es insuficiente. |
| El emparejamiento del navegador falla | Genera un nuevo código de emparejamiento y comprueba la accesibilidad en la LAN y el acceso a través del cortafuegos. Usa la dirección actual del controlador. |
| El navegador puede ver pero no puede controlar | Comprueba HID, Allow Control y el permiso de control concedido al navegador. Solo un navegador puede tener permiso de entrada remota. |

**Restablecer HID** no reanuda automáticamente el control ni detiene el video/la grabación. Vuelve a conectar y haz clic en el espacio de trabajo después.

Para una solicitud de soporte, incluye el sistema operativo del controlador, el modelo de destino, fotos del cableado, mensaje de error, pasos de reproducción y registros de diagnóstico exportados si es necesario.

## Recursos relacionados

- [Lanzamientos de software de OSRBOT Link y notas de instalación](https://github.com/osrbot/osrbot-link/releases)
- [Uso del hardware e interfaces de reComputer Super](/es/recomputer_jetson_super_hardware_interfaces_usage/)
- [Interfaces y pinouts de reComputer Robotics J401](/es/recomputer_jetson_robotics_j401_getting_started/)
- [Repositorio y debates de Seeed Wiki](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

La información del producto, los límites de funcionamiento y las ilustraciones del manual se basan en el **Manual de producto OSRBOT Link v1.1 (inglés y chino, noviembre de 2026)**. La vista general de la conexión de reComputer es un esquema para esta guía, no una fotografía de una configuración probada. Para soporte de hardware y software de OSRBOT, contacta con [winter@osrbot.com](mailto:winter@osrbot.com).

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
