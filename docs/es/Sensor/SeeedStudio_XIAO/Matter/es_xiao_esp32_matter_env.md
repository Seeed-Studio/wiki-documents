---
description: Introduce cómo instalar y configurar el entorno ESP-Matter.
title: Desarrollo de Matter con XIAO ESP32 Serie
keywords:
- ESP-IDF
- matter
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32_matter_env
last_update:
  date: 05/15/2024
  author: Citric
---

# Desarrollo de Matter con XIAO ESP32 Serie

:::tip
Este artículo es el tercer tutorial en la serie de Desarrollo de Matter de Seeed Studio XIAO ESP32. Si no has leído los tutoriales anteriores, te recomendamos que los leas primero para verificar que tu dispositivo esté configurado según los requisitos.

- **[Desarrollado en XIAO usando Espressif ESP-IDF](https://wiki.seeedstudio.com/es/xiao_idf)**
- **[Introducción Rápida a Matter con XIAO ESP32 Serie](https://wiki.seeedstudio.com/es/getting_started_with_matter)**

:::

En el panorama en rápida evolución del Internet de las Cosas (IoT), ha surgido un nuevo actor para revolucionar la forma en que los dispositivos domésticos inteligentes se comunican e interactúan entre sí. Conoce Matter, el protocolo unificador que promete cerrar la brecha entre varios ecosistemas de hogares inteligentes y crear una experiencia perfecta e interoperable para usuarios de todo el mundo.

Entonces, ¿qué es exactamente Matter y por qué está generando tanto entusiasmo en la comunidad IoT? Matter es un protocolo estandarizado de código abierto que permite que los dispositivos domésticos inteligentes de diferentes fabricantes trabajen juntos sin esfuerzo. Su objetivo es simplificar el desarrollo e implementación de dispositivos IoT proporcionando un lenguaje común y un marco para la comunicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- Protocolo de comunicación para dispositivos domésticos inteligentes.
- Versión 1.0 lanzada el 4 de octubre de 2022, después de ser pospuesta dos veces.
- Conjunto estandarizado de comandos, para que dispositivos de diferentes fabricantes puedan comunicarse entre sí.
- Funciona sobre redes IP, usando Thread, Wi-Fi o Ethernet.
- Utiliza Seguridad por Diseño y Confianza Cero.
- Funciona localmente: típicamente se conecta a la nube a través de un hub Matter.
- Existe junto con otros estándares de hogar inteligente como Zigbee, Z-Wave y 433MHz.
- Duración de batería y alcance dependientes de la tecnología de red inalámbrica.
- Coordinado por un hub Matter.

La propuesta de valor de Matter es clara: ofrece un camino hacia una experiencia de hogar inteligente más conectada, fácil de usar y segura. Al adoptar Matter, los fabricantes de dispositivos pueden asegurar que sus productos sean compatibles con una amplia gama de plataformas y asistentes de hogar inteligente, como Amazon Alexa, Google Home y Apple HomeKit. Esta interoperabilidad no solo beneficia a los consumidores, sino que también abre nuevas oportunidades para desarrolladores y empresas en el espacio IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

Como desarrollador, adoptar Matter significa aprovechar un vasto ecosistema de dispositivos y servicios, permitiéndote crear soluciones innovadoras que pueden integrarse perfectamente con configuraciones de hogar inteligente existentes. Al aprovechar el poder de Matter, puedes enfocarte en construir experiencias de usuario y funcionalidades convincentes, en lugar de preocuparte por las complejidades de la comunicación y compatibilidad de dispositivos.

Para embarcarte en tu viaje de desarrollo de Matter, necesitarás las herramientas y el entorno adecuados. En este tutorial, te guiaremos a través del proceso de configurar un entorno de desarrollo de Matter usando el Seeed Studio XIAO ESP32C6, una placa compacta y potente específicamente diseñada para aplicaciones IoT. Con su microcontrolador ESP32-C6 e interfaces periféricas extensas, el XIAO ESP32C6 es una opción ideal para desarrollar dispositivos compatibles con Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

En las siguientes secciones, te guiaremos a través de los pasos para configurar tu entorno de desarrollo de Matter, incluyendo la instalación del software necesario, configurar la placa Seeed Studio XIAO ESP32C6 y ejecutar tu primer programa de ejemplo de Matter. Al final de este tutorial, tendrás una base sólida para comenzar a construir tus propios dispositivos Matter y contribuir al creciente ecosistema de soluciones de hogar inteligente interoperables.

¡Así que vamos a sumergirnos y desbloquear el potencial del desarrollo de Matter con el Seeed Studio XIAO ESP32C6!

## Preparar el Software

A continuación listaré la versión del sistema, versión de ESP-IDF y versión de ESP-Matter utilizadas en este artículo como referencia. Esta es una versión estable que ha sido probada para funcionar correctamente.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/).
- **ESP-IDF**: Tags [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1).
- **ESP-Matter**: rama main, al 10 de mayo de 2024, commit [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5).
- **connectedhomeip**: actualmente funciona con commit [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10), al 10 de mayo de 2024.
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## Preparar el Hardware

En esta sección, detallaremos cómo configurar el uso de ESP-IDF en el entorno de Ubuntu y ejecutar el ejemplo de iluminación proporcionado por ESP-IDF. Así que para este artículo, solo necesitas preparar cualquiera de las siguientes series XIAO ESP32.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32-C3</th>
   <th>XIAO ESP32-S3</th>
   <th>XIAO ESP32-C5</th>
    <th>XIAO ESP32-C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Además del XIAO, también necesitamos la barra de luces o perla de luz modelo WS281x. Actualmente el ejemplo de luz proporcionado por Espressif solo soporta una sola perla, así que ya sea que uses una tira o una perla, solo se encenderá una luz. También recomendaríamos que obtengas Grove Base para XIAO para facilitar el cableado.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Base para XIAO</th>
   <th>Grove - Anillo LED RGB (20 - WS2813 Mini)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

Para unificar la interfaz, usaremos el pin **D9** como ejemplo en este caso, por favor conecta tu tira LED o perla al pin **D9** del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

## Tutoriales en Video

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/g9hBp84xs1E?si=fzE--HA7v8H8R090?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalación de ESP-Matter Paso a Paso

:::tip
Antes de comenzar la instalación del entorno para Matter, asegúrate de haber [instalado y accedido al entorno de programación ESP-IDF](https://wiki.seeedstudio.com/es/xiao_idf/#step-5-set-up-environment-variables).
:::

:::tip
Al configurar el entorno ESP-IDF, necesitas asegurar que la placa XIAO que estás usando sea compatible con el entorno Matter actual. Por ejemplo, al usar el XIAO ESP32-C5 y XIAO ESP32-C6, la versión más reciente soportada al momento de escribir este wiki es ESP-IDF v5.5.1. Para más detalles, por favor visita [Versiones soportadas de ESP-IDF y connectedhomeip](https://github.com/espressif/esp-matter)
:::

### Paso 1. Instalar Dependencias

Primero, necesitas instalar los paquetes requeridos usando `apt-get`. Abre tu terminal y ejecuta el siguiente comando:

```bash
sudo apt-get install git gcc g++ pkg-config libssl-dev libdbus-1-dev \
     libglib2.0-dev libavahi-client-dev ninja-build python3-venv python3-dev \
     python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev
```

Este comando instala varios paquetes como `git`, compiladores (`gcc`, `g++`), y librerías necesarias para construir y ejecutar el SDK de Matter.

### Paso 2. Clonar el Repositorio ESP-Matter

Clona el repositorio `esp-matter` desde GitHub usando el comando `git clone` con una profundidad de 1 para obtener solo la instantánea más reciente:

```bash
cd ~/esp
git clone --depth 1 https://github.com/espressif/esp-matter.git
```

Cambia al directorio `esp-matter` e inicializa los submódulos Git requeridos:

```bash
cd esp-matter
git submodule update --init --depth 1
```

Navega al directorio `connectedhomeip` y ejecuta un script de Python para gestionar submódulos para plataformas específicas:

```bash
cd ./connectedhomeip/connectedhomeip
./scripts/checkout_submodules.py --platform esp32 linux --shallow
```

Este script actualiza submódulos tanto para plataformas ESP32 como Linux de manera superficial (solo el último commit).

### Paso 3. Instalar ESP-Matter

Regresa al directorio raíz de `esp-matter`, luego ejecuta el script de instalación:

```bash
cd ../..
./install.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/1.png" style={{width:1000, height:'auto'}}/></div>

Este script instalará dependencias adicionales específicas para el SDK ESP-Matter.

### Paso 4. Configurar Variables de Entorno

Ejecuta el script `export.sh` para configurar las variables de entorno necesarias para el desarrollo:

```bash
source ./export.sh
```

Este comando configura tu shell con las rutas de entorno y variables necesarias.

### Paso 5 (Opcional). Acceso rápido al entorno de desarrollo ESP-Matter

Para agregar los alias proporcionados y configuraciones de variables de entorno a tu archivo `.bashrc`, sigue estos pasos. Esto configurará tu entorno de shell para cambiar fácilmente entre configuraciones de desarrollo IDF y Matter, y habilitará ccache para compilaciones más rápidas.

Abre tu terminal y usa un editor de texto para abrir el archivo `.bashrc` ubicado en tu directorio home. Puedes usar `nano` o cualquier editor que prefieras. Por ejemplo:

```bash
nano ~/.bashrc
```

Desplázate hasta el final del archivo `.bashrc` y agrega las siguientes líneas:

```bash
# Alias for setting up the ESP-Matter environment
alias get_matter='. ~/esp/esp-matter/export.sh'

# Enable ccache to speed up compilation
alias set_cache='export IDF_CCACHE_ENABLE=1'
```

Después de agregar las líneas, guarda el archivo y sal del editor de texto. Si estás usando `nano`, puedes guardar presionando `Ctrl+O`, presiona `Enter` para confirmar, y luego `Ctrl+X` para salir.

Para que los cambios surtan efecto, necesitas recargar el archivo `.bashrc`. Puedes hacer esto ejecutando el archivo `.bashrc` o cerrando y reabriendo tu terminal. Para ejecutar el archivo `.bashrc`, usa el siguiente comando:

```bash
source ~/.bashrc
```

Ahora puedes ejecutar `get_matter` y `set_cache` para configurar o actualizar el entorno esp-matter en cualquier sesión de terminal.

```bash
get_matter
set_cache
```

## Ejecutando el Ejemplo de Luz

Una vez que el entorno Matter esté configurado, podemos compilar y cargar la aplicación de muestra light para verificarla.

### Paso 1. Configurar los parámetros del proyecto

Navega al directorio `examples/light`.

```bash
cd examples/light                # Navigate to the light example directory
```

Realiza una operación de limpieza para eliminar archivos de compilación anteriores.

```bash
rm -rf build/                     # Clean previous build files
```

Establece el objetivo a ESP32-C6.

```bash
idf.py set-target esp32c6        # Set the build target to ESP32-C6
```

Entra al menú de configuración y realiza las configuraciones necesarias.

```bash
idf.py menuconfig                # Enter the configuration menu
```

Dentro de `menuconfig`, necesitas localizar y habilitar la opción `Channel for console oputput`. Típicamente, esta opción se puede encontrar bajo **Component config** -> **ESP System Settings**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/7.png" style={{width:1000, height:'auto'}}/></div>

1. Usa las teclas de flecha para navegar a la opción.
2. Presiona Espacio o Enter para seleccionar la opción: `USB Serial/JTAG Controller`.

Para un XIAO diferente, también necesitamos actualizar su número de pin GPIO. Esta opción se puede encontrar bajo **Component config -> Board Support Package (generic) -> LEDs**.

- Para XIAO ESP32-C3, el GPIO de D9 es 9.
- Para XIAO ESP32-S3, el GPIO de D9 es 8.
- Para XIAO ESP32-C5, el GPIO de D9 es 9.
- Para XIAO ESP32C6, el GPIO de D9 es 20.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/33.png" style={{width:1000, height:'auto'}}/></div>

1. Usa las teclas de flecha para navegar a la opción.
2. Presiona Espacio o Enter para ingresar el número GPIO.
3. Después de habilitar las opciones necesarias, sal de `menuconfig` presionando `q` y luego presiona `y`.

### Paso 2. Compilar y cargar la aplicación de muestra

Continúa con el proceso de compilación y flasheo:

```bash
idf.py build                      # Build the project
```

Si la compilación va bien, verás el siguiente resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/2.png" style={{width:1000, height:'auto'}}/></div>

Luego puedes cargar el programa.

```bash
idf.py -p /dev/ttyACM0 flash monitor  # Flash the firmware and monitor the output
```

Por favor reemplaza `/dev/ttyACM0` con el archivo de dispositivo USB real que corresponde a tu XIAO ESP32 si es diferente.

Recuerda seguir todas las instrucciones cuidadosamente, y asegúrate de que cada paso se complete exitosamente antes de pasar al siguiente. Si encuentras algún error, necesitará ser resuelto antes de que puedas proceder.

:::tip
Durante el proceso de flasheo del firmware de Matter, puedes encontrar una situación donde no tienes permisos, en este momento puedes usar el siguiente comando para dar permisos a los puertos del dispositivo y volver a cargar el programa. Como el dispositivo se conecta o reinicia, los permisos pueden necesitar ser dados nuevamente.

```
sudo chmod 666 /dev/ttyACM0       # Grant permissions to the USB device file
```

Por favor reemplaza `/dev/ttyACM0` con el archivo de dispositivo USB real que corresponde a tu XIAO ESP32 si es diferente.
:::

Entonces felicidades, si has flasheado exitosamente el firmware, entonces en el monitor verás la salida del log de depuración en el terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/3.png" style={{width:1000, height:'auto'}}/></div>

A continuación, vamos a aprender cómo usar el comando matter y chip-tool para configurar el dispositivo Matter con el fin de completar la depuración y verificación del dispositivo Matter.

## Control del host y comisionado del equipo

Configuramos Channel for `console oputput to USB Serial` en `menuconfig`, el propósito es que podamos usar la interfaz USB para controlar el XIAO, configurar para unirse a la red o hacer otra depuración. Este paso es crucial y determina si podemos o no usar la herramienta serial para enviar comandos al dispositivo.

Estos son comandos que se conectan vía cable para controlar directamente un dispositivo, usualmente comenzando con `matter`.

### Comandos comunes

- Comandos BLE: Iniciar y detener anuncio BLE:

 ```
 matter ble [start|stop|state]
 ```

- Comandos Wi-Fi: Configurar y obtener el modo Wi-Fi:

 ```
 matter wifi mode [disable|ap|sta]
 ```

- Configuración del dispositivo: Volcar la configuración estática del dispositivo:

 ```
 matter config
 ```

- Restablecimiento de fábrica:

 ```
 matter device factoryreset
 ```

- Códigos de incorporación: Volcar las cargas útiles del código de emparejamiento de incorporación:

 ```
 matter onboardingcodes
 ```

- Obtener atributo: (Los IDs están en hexadecimal):

 ```
 matter esp attribute get <endpoint_id> <cluster_id> <attribute_id>
 ```

  - Ejemplo: on_off::on_off:

  ```
  matter esp attribute get 0x1 0x6 0x0
  ```

- Configurar atributo: (Los IDs están en hexadecimal):

 ```
 matter esp attribute set <endpoint_id> <cluster_id> <attribute_id> <attribute value>
 ```

  - Ejemplo: on_off::on_off:

  ```
  matter esp attribute set 0x1 0x6 0x0 1
  ```

- Diagnósticos:

 ```
 matter esp diagnostics mem-dump
 ```

- Wi-Fi

 ```
 matter esp wifi connect <ssid> <password>
 ```

### Uso

#### Paso 1. Instalar Minicom

Minicom es un programa de control de módem basado en texto y emulación de terminal para sistemas operativos tipo Unix. Al instalar Minicom, podemos enviar fácilmente comandos de control Matter a XIAO. Para instalar Minicom en Ubuntu, abre un terminal e ingresa el siguiente comando:

```bash
sudo apt update
sudo apt install minicom
```

Este comando actualiza tu lista de paquetes e instala Minicom.

#### Paso 2. Configurar Permisos de Usuario

Para permitir que usuarios no root accedan a puertos seriales como `ttyACM0`, necesitas agregar tu usuario al grupo `dialout`. Puedes hacer esto con el siguiente comando:

```bash
sudo usermod -a -G dialout $USER
```

Reemplaza `$USER` con tu nombre de usuario u omítelo para aplicar al usuario actualmente conectado. Después de ejecutar este comando, **debes cerrar sesión y volver a iniciar sesión** para que el cambio de grupo surta efecto.

#### Paso 3. Configurar Minicom

Ahora necesitas configurar Minicom para usar el puerto `ttyACM0`. Ejecuta Minicom en modo de configuración con el siguiente comando:

```bash
sudo minicom -s
```

En el menú de configuración, sigue estos pasos:

1. Selecciona **Serial port setup**.
2. Presiona 'A' para cambiar el Dispositivo Serial a `/dev/ttyACM0`.
3. Ajusta otras configuraciones según sea necesario. Las configuraciones predeterminadas son usualmente 9600 8N1 (9600 Baudios, Sin Paridad, 8 Bits de Datos, 1 Bit de Parada). Solo necesitamos cambiar la velocidad de baudios a **115200**.
4. Presiona 'Enter' para salir de esta pantalla.

#### Paso 4. Guardar Configuración

Después de configurar el puerto serial:

1. Selecciona **Save setup as dfl** para hacer esta la configuración predeterminada.
2. Sal de la configuración de Minicom seleccionando **Exit from Minicom**.

#### Paso 5: Ejecutar Minicom

Para iniciar Minicom con la configuración predeterminada, simplemente escribe:

```bash
minicom
```

Si necesitas ejecutarlo con privilegios sudo (por ejemplo, si encuentras problemas de permisos), puedes usar:

```bash
sudo minicom
```

Para salir de Minicom, presiona `Ctrl-A` luego presiona `Z` para mostrar el menú de ayuda, y después presiona `X` para salir del programa.

#### Paso 6. Configuración de la red de distribución XIAO

Usa el siguiente comando para conectar XIAO a tu red. Al seleccionar una red, puedes optar por la conexión de red 2.4G.

:::tip
En el tutorial, todas las placas de la serie XIAO solo soportan WiFi 2.4G excepto XIAO ESP32-C5, que soporta WiFi de banda dual 2.4G y 5G.
:::

```
matter esp wifi connect <ssid> <password>
```

Después del emparejamiento exitoso, puedes usar los siguientes comandos para consultar información muy importante sobre el dispositivo Matter: **VendorID**, **ProductId**, **Discriminator**, y **PinCode**. Esta información te ayuda a emparejar dispositivos para usar al depurar con la herramienta Chip-tool.

```
matter config
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/8.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, usa el siguiente comando para volcar las cargas útiles del código de emparejamiento de incorporación.

```
matter onboardingcodes onnetwork
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/9.png" style={{width:1000, height:'auto'}}/></div>

Lo último que se muestra aquí es el enlace al código QR de emparejamiento del dispositivo. Con el código QR, puedes escanear el código en tu teléfono móvil para vincular el dispositivo Matter tal como en los pasos de [Introducción](https://wiki.seeedstudio.com/es/getting_started_with_matter/#step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app).

## Depuración remota de dispositivos Matter usando Chip-tool

Los dispositivos Matter son una parte importante del hogar inteligente, y no es práctico usar cables de datos todo el tiempo para depuración y configuración. Entre las herramientas de depuración de Matter, la más comúnmente usada es Chip-tool, que nos ayuda a depurar remotamente nuestros dispositivos cuando están conectados.

Los comandos de Chip-tool usualmente requieren un script de Chip-tool, por lo que generalmente comienzan con `chip-tool`.

### Emparejar un dispositivo por IP

El comando a continuación descubrirá dispositivos e intentará emparejar con el primero que descubra usando el código de configuración proporcionado:

```
chip-tool pairing onnetwork ${NODE_ID_TO_ASSIGN} 20202021
```

El comando a continuación descubrirá dispositivos con discriminador largo 3840 e intentará emparejar con el primero que descubra usando el código de configuración proporcionado:

```
chip-tool pairing onnetwork-long ${NODE_ID_TO_ASSIGN} 20202021 3840
```

El comando a continuación descubrirá dispositivos basándose en el código QR dado (que los dispositivos registran cuando se inician) e intentará emparejar con el primero que descubra.

```
chip-tool pairing code ${NODE_ID_TO_ASSIGN} MT:#######
```

En todos estos casos, al dispositivo se le asignará el ID de nodo `${NODE_ID_TO_ASSIGN}` (que debe ser un número decimal o un número hexadecimal con prefijo 0x).

### Olvidar el dispositivo actualmente comisionado

```
chip-tool pairing unpair
```

### Usar el Cliente para Enviar Comandos Matter

Para usar el Cliente para enviar comandos Matter, ejecuta el ejecutable construido y pásale el nombre del clúster objetivo, el nombre del comando objetivo así como un ID de endpoint.

El ID de endpoint debe estar entre 1 y 240.

```
chip-tool onoff on 1
```

El cliente enviará un solo paquete de comando y luego saldrá.

### Uso

Cuando estés listo para depurar con Chip-tool, puedes desconectar el XIAO de la computadora y conectarlo a una fuente de alimentación.

Como primer paso, necesitamos emparejar el dispositivo, lo cual se puede hacer usando cualquiera de los métodos en la sección [Emparejar un dispositivo por IP](#emparejar-un-dispositivo-por-IP) anterior.

Por ejemplo, uso el siguiente comando.

```
chip-tool pairing onnetwork-long 0x12 20202021 3840
```

En este caso, al dispositivo se le asignará el ID de nodo `0x12` (que debe ser un número decimal o un número hexadecimal con prefijo 0x). 20202021 es PinCode y 3840 es Discriminator.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/5.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, verifica que puedes controlar el encendido y apagado de las luces con el siguiente comando.

Encender la luz:

```
chip-tool onoff on 0x12 0x1
```

Apagar la luz:

```
chip-tool onoff off 0x12 0x1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/6.png" style={{width:1000, height:'auto'}}/></div>

0x12 es el ID de nodo asignado al dispositivo cuando emparejamos.

Felicitaciones a todos, con los pasos del tutorial realizados aquí, creo que tienen una comprensión preliminar de los pasos generales del marco de desarrollo de ESP-Matter y el uso de herramientas de depuración. Si aún hay algo que no entienden o no les es familiar, continuaremos usándolo y guiándolos en los siguientes tutoriales, ¡así que manténganse atentos!

## Solución de Problemas

### P1: ¿Por qué obtengo todo tipo de errores durante la instalación del entorno?

El entorno de ESP-Matter es un poco más exigente, y si estás usando un host Ubuntu que se usa frecuentemente para desarrollo, es probable que ocurran errores debido a diferentes versiones de algunas dependencias de Python. Dado que el marco Matter no es desarrollado por Seeed, probablemente no hay nada que podamos hacer sobre esta parte del problema, por lo que recomendamos que envíes un issue al **[repositorio oficial de ESP-Matter](https://github.com/espressif/esp-matter)** para obtener ayuda si encuentras problemas con la instalación.

### P2: Error al resolver componente

Después de actualizar de v4.x a v5.0+, muchos módulos funcionales (como mqtt, json, esp_https_server, etc.) han sido removidos del marco central y convertidos en componentes independientes. En consecuencia, pueden ocurrir errores de dependencias de componentes faltantes durante la compilación. Puedes agregar los componentes faltantes según los mensajes de error.<br/>
Referencia: [El Registro de Componentes ESP](https://components.espressif.com/)

### P3: ¿Cómo desinstalo el entorno de Matter?

Si estás ejecutando el script `./install.sh` y te quedas atascado en el paso de configurar tu entorno Python, entonces puede que necesites verificar que tu [versión](#preparar-el-software) de Matter coincida con la versión de connectedhomeip.

La forma simple de restablecerlo, es ejecutar el siguiente comando.

```
rm -r connectedhomeip/connectedhomeip/.environment
```

Luego vuelve a descargar la rama apropiada de connectedhomeip nuevamente.

```
git submodule update --init --depth 1
```

Si aún no funciona, elimina toda la carpeta esp-matter y vuelve a ejecutarla siguiendo el contenido del Wiki.

## Recursos

- **[ESPRESSIF Matter - Desarrollando con el SDK](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

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
