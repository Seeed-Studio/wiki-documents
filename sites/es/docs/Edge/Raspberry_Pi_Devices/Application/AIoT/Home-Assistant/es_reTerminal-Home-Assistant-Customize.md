---
description: Cómo personalizar Home Assistant
title: Cómo personalizar Home Assistant
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-Home-Assistant-Customize
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Cómo personalizar Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## Introducción

En wikis anteriores, explicamos cómo instalar Home Assistant en el [reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant), [ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant) y mostrar la interfaz del panel de control en PC, smartphones, tablets y modo Kiosk en la pantalla LCD del reTerminal.

Este wiki te guiará paso a paso sobre cómo construir el panel de control realizando las configuraciones necesarias y también cómo usar algunos de los complementos importantes que vienen con Home Assistant. ¡Así que comencemos!

## Complementos, HACS e Integraciones

Home Assistant ofrece principalmente tres formas de extender sus capacidades:

- Complementos
- Integraciones
- HACS (Tienda de la Comunidad de Home Assistant)

Los [Complementos](https://www.home-assistant.io/addons) te permiten extender la funcionalidad alrededor de Home Assistant instalando aplicaciones adicionales. Por ejemplo, conectar con sensores inteligentes con ESPHome, respaldo automático de Home Assistant a Google Drive y más.

Las [Integraciones](https://www.home-assistant.io/integrations) te permiten conectar Home Assistant con otros servicios. Por ejemplo, conectar con luces inteligentes, cámaras CCTV y más.

[HACS (Tienda de la Comunidad de Home Assistant)](https://hacs.xyz/) te permite agregar componentes para integraciones personalizadas de Front-end dentro de Home Assistant. Por ejemplo, soporte para nuevo hardware/sensores, nuevos temas.

Este wiki profundizará brevemente en las capacidades mencionadas anteriormente. Sin embargo, si quieres aprender más, hay una gran cantidad de recursos en línea que giran en torno a Home Assistant y aquí tienes algunos de los canales de YouTube que pueden guiarte bien.

- [EverythingSmartHome](https://www.youtube.com/c/EverythingSmartHome)
- [TheHookUp](https://www.youtube.com/c/TheHookUp)
- [PaulHibbert](https://www.youtube.com/c/PaulHibbert)
- [MakeItWorkTech](https://www.youtube.com/c/MakeItWorkTech)
- [MarkWattTech](https://www.youtube.com/c/MarkWattTech)
- [SmartHomeSolver](https://www.youtube.com/c/SmartHomeSolver)
- [mostlychris](https://www.youtube.com/c/mostlychris)
- [KPeyanski](https://www.youtube.com/c/KPeyanski)

## Complementos

Por defecto, no todos los Complementos estarán habilitados. Así que para habilitar todos los complementos, necesitas habilitar el "Modo Avanzado"

- **Paso 1.** Haz clic en el **nombre de usuario** y habilita el **Modo Avanzado**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/17.png"/></div>

Ahora necesitamos acceder al panel de Complementos

- **Paso 2.** Navega a **Configuración > Complementos**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/18.png"/></div>

- **Paso 3.** Haz clic en **TIENDA DE COMPLEMENTOS**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/20.png"/></div>

Además de los complementos predeterminados de Home Assistant, puedes agregar **complementos de terceros** desarrollados por la comunidad. Sin embargo, estos no son mantenidos por los desarrolladores de Home Assistant. Más adelante te mostraremos cómo agregar estos complementos de terceros.

### Comenzando con los Complementos

Ahora configuremos algunos de los complementos. Aquí te mostraremos cómo configurar los siguientes complementos.

- Terminal & SSH
- Editor de archivos
- Glances
- Respaldo de Google Drive

También puedes configurar complementos como **Node-RED, ESPHome, Adguard Home, BitWarden, Samba Share, Mosquitto broker, BookStack, Uptime Kuma, Cloudflared Tunnel y más**

#### Instalando un complemento

El proceso de instalar un complemento es común a todos los complementos. Así que lo explicaremos aquí

- **Paso 1.** Visita la **Tienda de Complementos** como se explicó antes

- **Paso 2.** Selecciona un Complemento o escribe en la barra de búsqueda. Por ejemplo, aquí seleccionaremos el complemento **Terminal & SSH**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/21.png"/></div>

- **Paso 3.** Haz clic en **INSTALAR**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/22.png"/></div>

- **Paso 4.** Configura más ajustes como **Iniciar al arrancar, Watchdog, Actualización automática y Mostrar en la barra lateral**. Puedes activarlos todos si prefieres y luego haz clic en **INICIAR**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/23.png"/></div>

Verás este **Punto Verde** si el complemento está iniciado y ejecutándose

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/25.png"/></div>

- **Paso 5.** Después de que el Complemento esté iniciado, haz clic en la pestaña **Registro** y verifica si el Complemento se inició correctamente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/24.png"/></div>

#### Complemento Editor de archivos

Aunque puedes configurar la mayor parte de Home Assistant directamente desde la interfaz de usuario bajo **Configuración**, algunas partes requieren que edites algunos archivos como **configuration.yaml** que contiene integraciones para ser cargadas junto con sus configuraciones. Puedes agregar fragmentos de código a este archivo de configuración para habilitar funcionalidad específica.

Sin embargo, para acceder a estos archivos de configuración, necesitamos un editor de archivos. Ahí es donde el complemento **Editor de archivos** entra en uso.

- **Paso 1.** Busca el complemento **Editor de archivos** dentro de la **Tienda de Complementos**, **INSTÁLALO** e **INÍCIALO**.

- **Paso 2.** Puedes hacer clic en **ABRIR INTERFAZ WEB** o **Editor de archivos** en el panel de navegación izquierdo para acceder a él

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/26.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/27.png"/></div>

#### Complemento Glances

Después de instalar Home Assistant, es posible que desees verificar el uso de recursos de hardware en el dispositivo host. El complemento **Glances** proporciona una visión general de todos los recursos de hardware que se están utilizando.

- **Paso 1.** Busca el complemento **Glances** dentro de **Add-on Store**, **INSTÁLALO** e **INÍCIALO**.

- **Paso 2.** Puedes hacer clic en **OPEN WEB UI** o en **Glances** en el panel de navegación izquierdo para acceder a él

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/28.png"/></div>

**Nota:** Asegúrate de que el **Modo de protección** esté deshabilitado, o de lo contrario Glances no se iniciará

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/29.png"/></div>

#### Complemento Google Drive Backup

Como se mencionó anteriormente, puedes instalar complementos de terceros en Home Asssitant y **Google Drive Backup** es uno de esos complementos. Después de invertir mucho tiempo y esfuerzo en configurar Home Assistant para satisfacer tus necesidades, si el sistema se rompe, todo será en vano. Aquí es donde las copias de seguridad pueden salvarte.

Por defecto, Home Assistant tiene la capacidad de hacer copias de seguridad y guardarlas sin conexión en el dispositivo host que ejecuta Home Assistant. Sin embargo, si el dispositivo host no responde y ni siquiera puedes acceder a él, ¿cómo vas a restaurar desde una copia de seguridad anterior?

El complemento Google Drive Backup te permite configurar copias de seguridad automáticas donde subirá las copias de seguridad a tu Google Drive diariamente. Así que si no puedes acceder al dispositivo host, puedes descargar tu copia de seguridad guardada desde Google Drive y restaurarla en el dispositivo.

- **Paso 1.** Visita **Add-on Store**, haz clic en los **3 puntos** en la esquina superior derecha y haz clic en **Repositories**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/30.png"/></div>

- **Paso 2.** Copia y pega **https://github.com/sabeechen/hassio-google-drive-backup** en la columna vacía y haz clic en **ADD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/31.png"/></div>

Verás lo siguiente si se agrega exitosamente

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/32.png"/></div>

- **Paso 3.** Ve a **Settings > System** y haz clic en **RESTART** para reiniciar Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/33.png"/></div>

- **Paso 4.** Visita **Add-on Store**, busca el complemento **Home Assistant Google Drive Backup**, **INSTÁLALO** e **INÍCIALO**.

- **Paso 5.** Puedes hacer clic en **OPEN WEB UI** o en **Backups** en el panel de navegación izquierdo para acceder a él

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/34.png"/></div>

- **Paso 6.** Haz clic en **AUTHENTICATE WITH GOOGLE DRIVE** y se abrirá una nueva ventana. Inicia sesión con tu cuenta de Google y permite el acceso a ella

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/36.png"/></div>

- **Paso 7.** Haz clic en **COPY** para copiar la cadena de autorización

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/37.png"/></div>

- **Paso 8.** Regresa a la interfaz de Home Assistant y pega la cadena copiada y haz clic en **SAVE**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Home-Assistant/38.png"/></div>

Ahora hemos configurado exitosamente las copias de seguridad de Google Drive.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/39.png"/></div>

Si deseas configurar ajustes adicionales como la frecuencia de copia de seguridad, el número de copias de seguridad a mantener, puedes hacer clic en **Settings** para ingresar a la página de configuración

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/40.png"/></div>

## Integraciones

¡Ahora exploremos las integraciones en Home Assistant! Aquí te mostraremos cómo configurar las siguientes integraciones.

- Control de Luz Inteligente
- Transmisión de Cámara CCTV

También puedes configurar integraciones como **Philips Hue, Shelly, Tuya, Sonos, Z-Wave, HomeKit, WLED y más**.

- **Paso 1.** Navega a **Settings > Devices & Services**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/41.png"/></div>

- **Paso 2.** Haz clic en **+ ADD INTEGRATION**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/42.png"/></div>

¡Aquí encontrarás muchas integraciones!

### Integración de luz inteligente

Agreguemos la **integración de Luz Inteligente Xiaomi** para que podamos encender/apagar luces inteligentes. Antes de continuar, asegúrate de tener acceso a una Luz Inteligente Xiaomi. Si tienes una luz inteligente diferente como **Philips Hue**, puedes agregar la **integración Philips Hue** y los pasos serán casi similares.

- **Paso 1.** Busca **Yeelight** y selecciónalo

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/43.png"/></div>

- **Paso 2.** Escribe la dirección IP de la luz inteligente y haz clic en **SUBMIT**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/44.png"/></div>

- **Paso 3.** Haz clic en **FINISH**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/45.png"/></div>

- **Paso 4.** En la página **Overview**, haz clic en los 3 puntos en la esquina superior izquierda y haz clic en **Edit Dashboard**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/46.png"/></div>

- **Paso 5.** Aquí no necesitamos la tarjeta con el nombre de usuario. Así que elimínala haciendo clic en los **3 puntos** y haciendo clic en **Delete card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/47.png"/></div>

- **Paso 6.** Confirma la eliminación

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/48.png"/></div>

- **Paso 7.** Haz clic en **+ ADD CARD** y haz clic en la tarjeta **Light**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/49.png"/></div>

- **Paso 8.** Cambia el **Name** y haz clic en **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/50.png"/></div>

- **Paso 9.** Haz clic en **DONE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/51.png"/></div>

- **Paso 9.** Ahora puedes encender la luz y controlar el brillo también

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Home-Assistant/52.png"/></div>

- **Paso 10.** Si haces clic en los **3 puntos**, puedes tener más control de la luz como la capacidad de cambiar el color y la temperatura del color.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/53.png"/></div>

### Integración de cámara IP CCTV

Aquí agregaremos una integración de cámara para que podamos ver la transmisión de video en tiempo real desde una cámara CCTV a través del protocolo RTSP. Antes de continuar, asegúrate de tener acceso a una cámara CCTV con función IP y la capacidad de transmitir vía RTSP.

- **Paso 1.** En la página **Integrations**, bajo **Set up a new integration**, busca **generic camera** y selecciónalo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/54.png"/></div>

- **Paso 2.** Agrega la **URL de transmisión RTSP**, ingresa **nombre de usuario, contraseña** si es requerido, cambia la **velocidad de fotogramas** y haz clic en **SUBMIT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/55.png"/></div>

- **Paso 3.** En la página **Overview**, ve a la página **+ ADD CARD** como antes y haz clic en la tarjeta **Picture Entity**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/56.png"/></div>

- **Paso 4.** Escribe **camera** bajo **Entity** y verás la cámara que configuramos antes. Haz clic en ella.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/57.png"/></div>

- **Paso 5.** Cambia **Name**, cambia **Camera View** a **live** y haz clic en **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/58.png"/></div>

¡Ahora verás la transmisión de video en vivo en el panel de control!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/59.png"/></div>

## HACS (Home Assistant Community Store)

¡Ahora exploremos HACS en Home Assistant! HACS proporciona una serie de integraciones y opciones de personalización de interfaz. Aquí te mostraremos cómo configurar lo siguiente

- Cambiar el tema de Home Assistant
- Agregar tarjeta del clima al panel de control

### Instalando HACS

- **Paso 1.** Abre el complemento **Terminal & SSH** que instalamos anteriormente

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/60.png"/></div>

- **Paso 2.** Escribe el siguiente comando dentro de la ventana del terminal para instalar HACS

```sh
wget -O - https://get.hacs.xyz | bash -
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/61.png"/></div>

- **Paso 3.** Una vez que la instalación de HACS haya terminado, reinicia Home Assistant con el siguiente comando

```sh
ha ha restart
```

- **Paso 4.** En la página **Integrations**, bajo **Set up a new integration**, busca **HACS** y selecciónalo.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/62.png"/></div>

- **Paso 5.** Selecciona todas las opciones para aceptar todo y haz clic en **SUBMIT**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/63.png"/></div>

- **Paso 6.** Copia el código de autorización y luego haz clic en el enlace para iniciar sesión en GitHub.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/70.jpg"/></div>

- **Paso 7.** Inicia sesión en GitHub, pega el código copiado y haz clic en **Continue**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/71.jpg"/></div>

- **Paso 8.** Haz clic en **Authorize HACS**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Home-Assistant/72.jpg"/></div>

- **Paso 9.** Haz clic en **FINISH**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/68.png"/></div>

¡HACS ya está instalado!

- **Paso 10.** Es mejor reiniciar el sistema ahora navegando a **Settings > System > Hardware**, haz clic en los **3 puntos** en la esquina superior derecha y haz clic en **Reboot Host**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/69.png"/></div>

- **Paso 11.** Después de que el sistema se reinicie, verás **HACS** en el panel de navegación izquierdo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/73.png"/></div>

### Cambiar el tema de Home Assistant

¡Ahora cambiemos el tema predeterminado usando HACS! De forma predeterminada, Home Assistant solo viene con un único tema de modo oscuro. Sin embargo, si quieres personalizar esto, necesitas seguir los pasos a continuación

- **Paso 1.** Antes de instalar un tema personalizado, necesitamos agregar algunos códigos al archivo **configuration.yaml**. Abre **File editor** y haz clic en el **icono de carpeta** para navegar por el sistema de archivos

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/76.jpg"/></div>

- **Paso 2.** Haz clic en **configuration.yaml**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/77.png"/></div>

- **Paso 3.** Agrega lo siguiente al final de este archivo

```sh
frontend:
  themes: !include_dir_merge_named themes
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/78.jpg"/></div>

- **Paso 4.** Haz clic en el botón guardar

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/79.png"/></div>

- **Paso 5.** Es una buena práctica verificar si la configuración que hicimos es válida. De lo contrario, Home Assistant fallará al iniciar la próxima vez. Ve a **Developer Tools** y haz clic en **CHECK CONFIGURATION**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/80.png"/></div>

Si ves el mensaje **Configuration valid!**, ¡entonces todo está bien!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/81.png"/></div>

- **Paso 6.** Haz clic en **RESTART** para reiniciar Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/82.png"/></div>

- **Paso 7.** Dentro de la ventana **HACS**, haz clic en **Frontend**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/74.png"/></div>

- **Paso 8.** Haz clic en **+ EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/75.jpg"/></div>

- **Paso 9.** Aquí verás muchos temas. Por ejemplo, instalaremos un tema iOS. Busca **iOS** y selecciona **iOS Themes - Dark Mode and Light Mode**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/85.png"/></div>

- **Paso 10.** Haz clic en **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/86.png"/></div>

- **Paso 11.** Haz clic en **DOWNLOAD** nuevamente para la confirmación

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/87.png"/></div>

- **Paso 12.** Una vez terminada la descarga, haz clic en tu nombre de usuario y bajo **Theme**, selecciona **ios-dark-mode-blue-red**. También puedes seleccionar todos los otros colores de este tema si lo prefieres

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/88.jpg"/></div>

¡Ahora la página **Overview** se verá así con el nuevo tema cargado!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/89.png"/></div>

**Nota:** Si no puedes ver el tema cargado correctamente, por favor reinicia Home Assistant.

### Agregar tarjeta del clima al panel de control

¡Ahora instalaremos una tarjeta del clima usando HACS y la agregaremos al panel de control!

Antes de instalar esta tarjeta del clima, necesitamos conectarnos con **openweathermap** para obtener la información del clima. Y antes de conectarnos con openweathermap, necesitamos obtener una clave api de openweathermap.

- **Paso 1.** Visita [este enlace](https://home.openweathermap.org/users/sign_up) para registrarte en una cuenta de openweathermap

- **Paso 2.** Visita [este enlace](https://home.openweathermap.org/users/sign_in) para iniciar sesión en la cuenta recién creada

- **Paso 3.** Bajo el nombre de la cuenta, haz clic en **My API keys**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/97.png"/></div>

- **Paso 4.** Escribe un nombre para la clave API y haz clic en **Generate**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/98.png"/></div>

- **Paso 5.** Copia la clave API generada

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/99.png"/></div>

Ahora agregaremos esta clave API

- **Paso 6.** En Home Assistant, navega a **Settings > Devices & Services > Integrations > + ADD INTEGRATION**, busca **OpenWeathermap** y haz clic en él

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/96.png"/></div>

- **Paso 7.** Pega la **clave API** copiada, cambia la **Latitud y Longitud** según tu ubicación (esto se puede encontrar con una búsqueda simple en google), cambia el Modo a **hourly** y haz clic en **SUBMIT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/101.png"/></div>

- **Paso 8.** Haz clic en **Finish**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Home-Assistant/102.png"/></div>

Ahora instalaremos la tarjeta del clima desde HACS

- **Paso 9.** Navega a **HACS > Frontend > + EXPLORE & DOWNLOAD REPOSITORIES**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/90.jpg"/></div>

- **Paso 10.** Escribe **weather** y haz clic en **Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/91.png"/></div>

- **Paso 11.** Haz clic en **DOWNLOAD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/92.png"/></div>

- **Paso 12.** Haz clic en **DOWNLOAD** nuevamente para la confirmación

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Home-Assistant/93.png"/></div>

- **Paso 13.** En la página **Overview**, ve a la página **+ ADD CARD** como antes y haz clic en **Custom: Weather Card**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/103.png"/></div>

- **Paso 14.** Ingresa el **Nombre de la Ciudad** según la **Latitud y Longitud** que ingresaste antes y haz clic en **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/104.png"/></div>

Ahora el panel de control terminado se verá como se muestra a continuación

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png"/></div>

## Recursos

- [Documentación de Home Assistant](https://www.home-assistant.io/docs)
