---
description: Introduces how to install and configure the ESP-Matter environment.
title: Desarrollo de Matter con la serie XIAO ESP32
keywords:
- ESP-IDF
- matter
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32_matter_env
last_update:
  date: 01/29/2025
  author: Guillermo
---

# Desarrollo de Matter con la serie XIAO ESP32

:::tip
Este artículo es el tercer tutorial de la serie de desarrollo Matter con Seeed Studio XIAO ESP32. Si no has leído los tutoriales anteriores, te recomendamos revisarlos primero para asegurarte de que tu dispositivo ha sido configurado correctamente según los requisitos.

- **[Utilizando ESP-IDF de Espressif con XIAO](https://wiki.seeedstudio.com/xiao_idf_spanish)**
- **[Comenzando con Matter en XIAO ESP32](https://wiki.seeedstudio.com/getting_started_with_matter_spanish)**
:::

En el panorama en constante evolución del Internet de las Cosas (IoT), ha surgido un nuevo protagonista que promete revolucionar la forma en que los dispositivos inteligentes del hogar se comunican e interactúan entre sí. Conoce Matter, el protocolo unificador que busca cerrar la brecha entre diversos ecosistemas de hogar inteligente y crear una experiencia fluida e interoperable para usuarios de todo el mundo.  

Entonces, ¿qué es exactamente Matter y por qué está generando tanta expectación en la comunidad de IoT? Matter es un protocolo de código abierto y estándar que permite que dispositivos inteligentes de distintos fabricantes trabajen juntos sin complicaciones. Su objetivo es simplificar el desarrollo y la implementación de dispositivos IoT al proporcionar un lenguaje y un marco de comunicación común.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- Protocolo de comunicación para dispositivos de hogar inteligente.
- La versión 1.0 fue lanzada el 4 de octubre de 2022, después de haber sido pospuesta dos veces.
- Conjunto estandarizado de comandos, lo que permite que dispositivos de diferentes fabricantes se comuniquen entre sí.
- Funciona sobre redes IP, utilizando Thread, Wi-Fi o Ethernet.
- Incorpora principios de Seguridad por Diseño y Confianza Cero (Zero-Trust).
- Se ejecuta localmente y, por lo general, se conecta a la nube a través de un hub Matter.
- Convive con otros estándares de hogar inteligente, como Zigbee, Z-Wave y 433 MHz.
- La duración de la batería y el alcance dependen de la tecnología de red inalámbrica utilizada.
- Coordinado por un hub Matter.

La propuesta de valor de Matter es clara: ofrece un camino hacia una experiencia de hogar inteligente **más conectada, accesible y segura. Al adoptar Matter, los fabricantes de dispositivos pueden garantizar que sus productos sean compatibles con diversas plataformas y asistentes de hogar inteligente, como Amazon Alexa, Google Home y Apple HomeKit. Esta interoperabilidad no solo beneficia a los consumidores, sino que también abre nuevas oportunidades para desarrolladores y empresas en el ecosistema de IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

Como desarrollador, adoptar Matter significa acceder a un amplio ecosistema de dispositivos y servicios, lo que te permitirá crear soluciones innovadoras que se integren sin problemas con configuraciones de hogar inteligente ya existentes. Al aprovechar el potencial de Matter, podrás enfocarte en mejorar la experiencia del usuario y las funcionalidades, en lugar de preocuparte por los detalles de comunicación y compatibilidad entre dispositivos.

Para comenzar con el desarrollo en Matter, es fundamental contar con las herramientas y el entorno adecuados. En este tutorial, te guiaremos a través del proceso de configuración de un entorno de desarrollo Matter utilizando la Seeed Studio XIAO ESP32C6, una placa compacta y potente diseñada específicamente para aplicaciones de IoT. Con su microcontrolador ESP32-C6 y una amplia variedad de interfaces periféricas, la XIAO ESP32C6 es una opción ideal para el desarrollo de dispositivos compatibles con Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

En las siguientes secciones, te guiaremos a través de los pasos para configurar tu entorno de desarrollo Matter, incluyendo la instalación del software necesario, la configuración de la placa XIAO ESP32C6 y la ejecución de tu primer programa de ejemplo en Matter. Al finalizar este tutorial, tendrás una base sólida para comenzar a desarrollar tus propios dispositivos Matter y contribuir al creciente ecosistema de soluciones interoperables para hogares inteligentes.

¡Así que vamos a sumergirnos en el desarrollo con Matter y desbloquear todo el potencial de la XIAO ESP32C6!

## Preparación del Software

A continuación, se detallan la versión del sistema, la versión de ESP-IDF y la versión de ESP-Matter utilizadas en este artículo como referencia. Estas versiones han sido probadas y verificadas para garantizar un funcionamiento estable.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/).
- **ESP-IDF**: Tags [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1).
- **ESP-Matter**: rama principal, 10 Mayo 2024, commit [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5).
- **connectedhomeip**: funciona acutalmente con el commit [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10), (10 May 2024).
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## Preparación de Hardware

En esta sección, detallaremos cómo configurar ESP-IDF en el entorno de Ubuntu y ejecutar el ejemplo de iluminación proporcionado por ESP-IDF.Para seguir este artículo, solo necesitas contar con cualquiera de las siguientes placas de la serie XIAO ESP32:

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue una ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue una ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue una ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Además del XIAO, también necesitaremos una tira de luces o un anillo WS281x. Actualmente, el ejemplo de iluminación proporcionado por Espressif solo admite una sola, por lo que, ya sea que uses una tira o un anillo, solo se encenderá una luz. 

Recomendamos también que utilices la **Grove Base para XIAO**, ya que facilita el cableado y la conexión de los componentes.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Base for XIAO</th>
			<th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue una ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue una ahora 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

Para unificar la interfaz, usaremos el pin **D9** como ejemplo en este caso. Por favor, conecta tu tira de LED o perla al pin **D9** del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

## Video Tutoriales

<div class="table-center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/g9hBp84xs1E?si=fzE--HA7v8H8R090?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalación de ESP-Matter Paso a Paso

:::tip
Antes de comenzar con la instalación del entorno para Matter, asegúrate de haber [instalado y accedido al entorno de programación ESP-IDF](https://wiki.seeedstudio.com/xiao_idf/#step-5-set-up-environment-variables).
:::

### Paso 1. Instalar dependencias

Primero, necesitas instalar los paquetes requeridos usando `apt-get`. Abre tu terminal y ejecuta el siguiente comando:

```bash
sudo apt-get install git gcc g++ pkg-config libssl-dev libdbus-1-dev \
     libglib2.0-dev libavahi-client-dev ninja-build python3-venv python3-dev \
     python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev
```

Este comando instala varios paquetes como `git`, compiladores (`gcc`, `g++`), y bibliotecas necesarias para construir y ejecutar el SDK de Matter.

### Paso 2. Clonar el repositorio de ESP-Matter

Clona el repositorio `esp-matter` desde GitHub usando el comando `git clone` con una profundidad de 1 para obtener solo la última instantánea:

```bash
cd ~/esp
git clone --depth 1 https://github.com/espressif/esp-matter.git
```

Cambia al directorio `esp-matter` e inicializa los submódulos necesarios de Git:

```bash
cd esp-matter
git submodule update --init --depth 1
```

Navega al directorio `connectedhomeip` y ejecuta un script de Python para gestionar los submódulos de plataformas específicas:

```bash
cd ./connectedhomeip/connectedhomeip
./scripts/checkout_submodules.py --platform esp32 linux --shallow
```

Este script actualiza los submódulos para las plataformas ESP32 y Linux de manera superficial (solo el último commit).

### Paso 3. Instalar ESP-Matter

Vuelve al directorio raíz de `esp-matter` y luego ejecuta el script de instalación:

```bash
cd ../..
./install.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/1.png" style={{width:1000, height:'auto'}}/></div>

Este script instalará dependencias adicionales específicas para el SDK de ESP-Matter.

### Paso 4. Establecer las Variables de Entorno

Ejecuta el script `export.sh` para configurar las variables de entorno necesarias para el desarrollo:

```bash
source ./export.sh
```

Este comando configura tu terminal con las rutas y variables de entorno necesarias.

### Paso 5 (Opcional). Acceso rápido al entorno de desarrollo de ESP-Matter

Para agregar los alias proporcionados y la configuración de las variables de entorno a tu archivo `.bashrc`, sigue estos pasos. Esto configurará tu entorno de shell para cambiar fácilmente entre los entornos de desarrollo de IDF y Matter, y habilitará ccache para compilaciones más rápidas.

Abre tu terminal y usa un editor de texto para abrir el archivo `.bashrc` que se encuentra en tu directorio de inicio. Puedes usar `nano` o cualquier editor que prefieras. Por ejemplo:

```bash
nano ~/.bashrc
```

Desplázate hacia la parte inferior del archivo `.bashrc` y agrega las siguientes líneas:

```bash
# Alias para configurar el entorno de ESP-Matter
alias get_matter='. ~/esp/esp-matter/export.sh'

# Habilitar ccache para acelerar la compilación
alias set_cache='export IDF_CCACHE_ENABLE=1'
```

Después de agregar las líneas, guarda el archivo y cierra el editor de texto. Si estás usando `nano`, puedes guardar presionando `Ctrl+O`, luego `Enter` para confirmar, y luego `Ctrl+X` para salir.

Para que los cambios tengan efecto, debes recargar el archivo `.bashrc`. Puedes hacer esto ejecutando el siguiente comando:

```bash
source ~/.bashrc
```

Ahora puedes ejecutar `get_matter` y `set_cache` para configurar o actualizar el entorno de ESP-Matter en cualquier sesión de terminal.

```bash
get_matter
set_cache
```

## Ejecutando el Ejemplo de luz (light)

Una vez que el entorno de Matter esté configurado, podemos compilar y cargar la aplicación de ejemplo para la luz y comprobar cómo funciona.

### Paso 1. Configurar los parámetros del proyecto

Navega al directorio `examples/light`.

```bash
cd examples/light                # Navegar al directorio del ejemplo de luz(light)
```

Realiza una operación de limpieza para eliminar los archivos de compilación previos.

```bash
rm -rf build/                     # Limpiar los archivos de compilación anteriores
```

Establece el objetivo de compilación a ESP32-C6.

```bash
idf.py set-target esp32c6        # Establecer el objetivo de compilación a ESP32-C6
```

Ingresa al menú de configuración y realiza las configuraciones necesarias.

```bash
idf.py menuconfig                # Entrar al menú de configuración
```

Dentro de `menuconfig`, necesitas ubicar y habilitar la opción `Channel for console output`. Típicamente, esta opción se encuentra en **Component config** -> **ESP System Settings**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/7.png" style={{width:1000, height:'auto'}}/></div>

1. Usa las teclas de flecha para navegar hasta la opción.
2. Presiona Espacio o Enter para seleccionar la opción: `USB Serial/JTAG Controller`.

Para un XIAO diferente, también necesitamos actualizar el número del pin GPIO. Esta opción se encuentra en **Component config -> Board Support Package (generic) -> LEDs**.

- Para XIAO ESP32C3, el GPIO de D9 es el 9.
- Para XIAO ESP32S3, el GPIO de D9 es el 8.
- Para XIAO ESP32C6, el GPIO de D9 es el 20.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/33.png" style={{width:1000, height:'auto'}}/></div>

1. Usa las teclas de flecha para navegar hasta la opción.
2. Presiona Espacio o Enter para ingresar el número GPIO.
3. Después de habilitar las opciones necesarias, sal de `menuconfig` presionando `q` y luego presiona `y`.

### Paso 2. Compilar y cargar la aplicación de ejemplo

Continúa con el proceso de compilación y carga:

```bash
idf.py build                      # Compilar el proyecto
```

Si la compilación se realiza correctamente, verás el siguiente resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/2.png" style={{width:1000, height:'auto'}}/></div>

Luego, puedes cargar el programa.

```bash
idf.py -p /dev/ttyACM0 flash monitor  # Cargar el firmware y monitorear la salida
```

Asegúrate de reemplazar `/dev/ttyACM0` con el archivo del dispositivo USB real que corresponda a tu XIAO ESP32 si es diferente.

Recuerda seguir cuidadosamente todas las instrucciones y asegurarte de que cada paso se complete correctamente antes de pasar al siguiente. Si encuentras errores, deberás resolverlos antes de continuar.

:::tip
Durante el proceso de carga del firmware de Matter, es posible que te encuentres con una situación en la que no tienes permisos. En este caso, puedes usar el siguiente comando para otorgar permisos a los puertos del dispositivo y volver a cargar el programa. Dado que el dispositivo se conecta o reinicia, puede ser necesario otorgar permisos nuevamente.

```
sudo chmod 666 /dev/ttyACM0       # Otorgar permisos al archivo del dispositivo USB
```

Asegúrate de reemplazar `/dev/ttyACM0` con el archivo del dispositivo USB real que corresponda a tu XIAO ESP32 si es diferente.
:::

¡Felicidades! Si has cargado correctamente el firmware, verás el registro de depuración en la terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/3.png" style={{width:1000, height:'auto'}}/></div>

A continuación, aprenderemos cómo usar el comando `matter` y `chip-tool` para configurar el dispositivo Matter y completar la depuración y verificación del dispositivo Matter.

## Control del host y puesta en marcha del equipo

Configuramos el Canal para `console oputput to USB Serial` (salida de consola a USB Serial) en `menuconfig`, con el propósito de que podamos usar la interfaz USB para controlar el XIAO, configurarlo para unirse a la red o realizar otras tareas de depuración. Este paso es crucial y determina si podemos usar la herramienta serial para emitir comandos al dispositivo.

Estos son los comandos que se utilizan al conectar el dispositivo mediante un cable para controlarlo directamente, generalmente comenzando con `matter`.

### Comandos comunes

- Comandos BLE: Iniciar y detener la publicidad BLE:

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

- Códigos de incorporación: Volcar los códigos de emparejamiento de incorporación:

	```
	matter onboardingcodes
	```

- Obtener atributo: (Los ID están en hexadecimal):

	```
	matter esp attribute get <endpoint_id> <cluster_id> <attribute_id>
	```

	- Ejemplo: on_off::on_off:

		```
		matter esp attribute get 0x1 0x6 0x0
		```

- Establecer atributo: (Los ID están en hexadecimal):

	```
	matter esp attribute set <endpoint_id> <cluster_id> <attribute_id> <valor del atributo>
	```

	- Ejemplo: on_off::on_off:

		```
		matter esp attribute set 0x1 0x6 0x0 1
		```

- Diagnósticos:

	```
	matter esp diagnostics mem-dump
	```

- Wi-Fi:

	```
	matter esp wifi connect <ssid> <contraseña>
	```

### Uso

#### Paso 1. Instalar Minicom

Minicom es un programa de control de módem basado en texto y emulación de terminal para sistemas operativos tipo Unix. Al instalar Minicom, podemos enviar fácilmente comandos de control de Matter a XIAO. Para instalar Minicom en Ubuntu, abre una terminal e ingresa el siguiente comando:

```bash
sudo apt update
sudo apt install minicom
```

Este comando actualiza la lista de paquetes e instala Minicom.

#### Paso 2. Configurar permisos de usuario

Para permitir que los usuarios que no son root accedan a los puertos seriales como `ttyACM0`, necesitas agregar tu usuario al grupo `dialout`. Puedes hacerlo con el siguiente comando:

```bash
sudo usermod -a -G dialout $USER
```

Reemplaza `$USER` con tu nombre de usuario o omítelo para aplicarlo al usuario actual. Después de ejecutar este comando, **debes cerrar sesión y volver a iniciarla** para que el cambio de grupo surta efecto.

#### Paso 3. Configurar Minicom

Ahora necesitas configurar Minicom para usar el puerto `ttyACM0`. Ejecuta Minicom en modo de configuración con el siguiente comando:

```bash
sudo minicom -s
```

En el menú de configuración, sigue estos pasos:

1. Selecciona **Serial port setup**.
2. Presiona 'A' para cambiar el dispositivo serial a `/dev/ttyACM0`.
3. Ajusta otras configuraciones según sea necesario. Los valores predeterminados generalmente son 9600 8N1 (9600 Baud, sin emparejamiento, 8 bits de datos, 1 bit de parada). Solo necesitamos cambiar la tasa de baudios a **115200**.
4. Presiona 'Enter' para salir de esta pantalla.

#### Paso 4. Guardar la configuración

Después de configurar el puerto serial:

1. Selecciona **Save setup as dfl** para hacer de esta la configuración predeterminada.
2. Sal de la configuración de Minicom seleccionando **Exit from Minicom**.

#### Paso 5: Ejecutar Minicom

Para iniciar Minicom con la configuración predeterminada, simplemente escribe:

```bash
minicom
```

Si necesitas ejecutarlo con privilegios de superusuario (por ejemplo, si encuentras problemas de permisos), puedes usar:

```bash
sudo minicom
```

Para salir de Minicom, presiona `Ctrl-A` y luego presiona `Z` para abrir el menú de ayuda, y luego presiona `X` para salir del programa.

#### Paso 6. Configuración de la red de distribución XIAO

Usa el siguiente comando para conectar XIAO a tu red. Al seleccionar una red, debes tener en cuenta que XIAO solo es compatible con redes de 2.4G, no con redes de 5G.

```
matter esp wifi connect <ssid> <password>
```

Después de una conexión exitosa, puedes usar los siguientes comandos para consultar información muy importante sobre el dispositivo Matter: **VendorID**, **ProductId**, **Discriminator** y **PinCode**. Esta información te ayudará a emparejar dispositivos para su uso al depurar con la herramienta Chip-tool.

```
matter config
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/8.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, usa el siguiente comando para mostrar la carga útil del código de emparejamiento de la fase de incorporación.

```
matter onboardingcodes onnetwork
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/9.png" style={{width:1000, height:'auto'}}/></div>

Lo último que se muestra aquí es el enlace al código QR de emparejamiento del dispositivo. Con el código QR, puedes escanearlo en tu teléfono móvil para vincular el dispositivo Matter de la misma manera que se indica en los [Pasos para empezar](https://wiki.seeedstudio.com/getting_started_with_matter_spanish/#Paso-2.-Agregar-un-dispositivo-escaneando-el-código-con-la-app-Home-en-iPhone).

## Depuración remota de dispositivos Matter usando Chip-tool

Los dispositivos Matter son una parte importante del hogar inteligente, y es poco práctico usar cables de datos todo el tiempo para la depuración y configuración. Entre las herramientas de depuración de Matter, la más comúnmente utilizada es Chip-tool, que nos ayuda a depurar nuestros dispositivos de forma remota cuando están conectados.

Los comandos de Chip-tool generalmente requieren un script de Chip-tool, por lo que suelen comenzar con `chip-tool`.

### Emparejar un dispositivo a por medio de IP

El siguiente comando descubrirá dispositivos e intentará emparejarse con el primero que descubra utilizando el código de configuración proporcionado:

```
chip-tool pairing onnetwork ${NODE_ID_TO_ASSIGN} 20202021
```

El siguiente comando descubrirá dispositivos con un discriminador largo 3840 e intentará emparejarse con el primero que descubra utilizando el código de configuración proporcionado:

```
chip-tool pairing onnetwork-long ${NODE_ID_TO_ASSIGN} 20202021 3840
```

El siguiente comando descubrirá dispositivos en función del código QR proporcionado (que los dispositivos registran cuando se inician) e intentará emparejarse con el primero que descubra:

```
chip-tool pairing code ${NODE_ID_TO_ASSIGN} MT:#######
```

En todos estos casos, se asignará al dispositivo el ID de nodo `${NODE_ID_TO_ASSIGN}` (que debe ser un número decimal o un número hexadecimal con prefijo 0x).

### Olvidar el dispositivo actualmente comisionado

```
chip-tool pairing unpair
```

### Usar el Cliente para Enviar Comandos Matter

Para usar el Cliente y enviar comandos Matter, ejecuta el archivo ejecutable y pásale el nombre del clúster de destino, el nombre del comando de destino, así como un ID de endpoint.

El ID del endpoint debe estar entre 1 y 240.

```
chip-tool onoff on 1
```

El cliente enviará un paquete de comando único y luego saldrá.

### Uso

Cuando estés listo para depurar con Chip-tool, puedes desconectar el XIAO de la computadora y conectarlo a una fuente de energía.

Como primer paso, necesitamos emparejar el dispositivo, lo cual se puede hacer utilizando cualquiera de los métodos en la sección [Emparejar un dispositivo sobre IP](#pair-a-device-over-ip) anterior.

Por ejemplo, utilizo el siguiente comando:

```
chip-tool pairing onnetwork-long 0x12 20202021 3840
```

En este caso, al dispositivo se le asignará el ID de nodo `0x12` (que debe ser un número decimal o un número hexadecimal con prefijo 0x). `20202021` es el PinCode y `3840` es el Discriminador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/5.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, verifica que puedas controlar el encendido y apagado de las luces con el siguiente comando.

Encender la luz:

```
chip-tool onoff on 0x12 0x1
```

Apagar la luz:

```
chip-tool onoff off 0x12 0x1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/6.png" style={{width:1000, height:'auto'}}/></div>

`0x12` es el ID del nodo asignado al dispositivo cuando lo emparejamos.

¡Felicidades! Al haber seguido los pasos del tutorial, creo que ahora tienes una comprensión preliminar de los pasos generales del marco de desarrollo de ESP-Matter y el uso de las herramientas de depuración. Si aún hay algo que no entiendes o no estás familiarizado, continuaremos usándolas y guiándote en los siguientes tutoriales, ¡así que mantente atento!

## Solución de problemas

### P1: ¿Por qué obtengo todo tipo de errores durante la instalación del entorno?

El entorno de ESP-Matter es un poco más exigente, y si estás utilizando un host de Ubuntu que comúnmente se usa para desarrollo, es probable que ocurran errores debido a las diferentes versiones de algunas dependencias de Python. Dado que el marco de Matter no está desarrollado por Seeed, probablemente no podamos hacer mucho sobre este problema, por lo que te recomendamos que envíes un problema al **[repositorio oficial de ESP-Matter](https://github.com/espressif/esp-matter)** para obtener ayuda si encuentras problemas durante la instalación.

### P2: ¿Cómo desinstalo el entorno de Matter?

Si estás ejecutando el script `./install.sh` y te atascas en el paso de configurar tu entorno Python, es posible que debas verificar que tu [versión](#prepare-the-software) de Matter coincida con la versión de connectedhomeip.

La forma más sencilla de restablecerlo es ejecutar el siguiente comando:

```
rm -r connectedhomeip/connectedhomeip/.environment
```

Luego, vuelve a obtener la versión correcta de la rama de connectedhomeip:

```
git submodule update --init --depth 1
```

Si aún no funciona, elimina la carpeta completa de esp-matter y vuelve a ejecutar todo siguiendo el contenido del Wiki.


## Recursos

- **[ESPRESSIF Matter - Desarrollando con SDK](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

