---
description: Introduces how to install and configure the IDF environment.
title: Utilizando ESP-IDF de Espressif con XIAO
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_idf
last_update:
  date: 01/29/2025
  author: Guillermo
---

# Utilizando ESP-IDF de Espressif con XIAO

:::tip
Este artículo es el primer tutorial en la serie de desarrollo de Matter con la serie XIAO ESP32 de Seeed Studio. Si deseas comenzar tu viaje de desarrollo de dispositivos Matter con la serie XIAO ESP32, empieza aquí.

Este tutorial es aplicable a los modelos XIAO ESP32C3, XIAO ESP32S3 y XIAO ESP32C6.
:::

En el mundo del desarrollo de IoT, el ESP-IDF (Espressif IoT Development Framework) ha ganado una gran popularidad debido a sus potentes características y el amplio soporte para los microcontroladores de la serie ESP32. Con la aparición del protocolo Matter, que tiene como objetivo proporcionar un estándar unificado para dispositivos de hogar inteligente, los desarrolladores están ansiosos por explorar esta nueva frontera. Sin embargo, el desarrollo de Matter actualmente no es compatible con el marco de Arduino, lo que deja a ESP-IDF como la opción principal para el desarrollo. En este tutorial, te guiaremos a través del proceso de instalación de ESP-IDF en un sistema Ubuntu, lo que te permitirá comenzar tu viaje de desarrollo de Matter en la serie XIAO ESP32.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/matter-sdk.png" style={{width:800, height:'auto'}}/></div>

## Basado en Ubuntu 22.04

Cuando se trata del desarrollo de Matter, la elección del sistema operativo es una consideración importante. Aunque Windows no proporciona soporte nativo para el desarrollo de Matter, los desarrolladores aún pueden usar Windows Subsystem for Linux (WSL) para **[crear un entorno compatible](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#windows-10)**. **[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)** permite ejecutar una distribución de Linux, como Ubuntu, directamente en Windows, proporcionando acceso a las herramientas y bibliotecas necesarias para el desarrollo de Matter.

Por otro lado, macOS es una opción popular entre los desarrolladores debido a su base en Unix y las completas herramientas de desarrollo que ofrece.

En última instancia, la elección del sistema operativo depende de tus preferencias personales y los requisitos específicos de tu proyecto Matter. Ubuntu, al ser una distribución de Linux, ofrece una experiencia nativa y optimizada para el desarrollo de Matter. Sin embargo, si te sientes más cómodo con Windows o macOS, aún puedes configurar un entorno de desarrollo adecuado usando herramientas como WSL en Windows o la terminal integrada en macOS.

:::caution
No recomendamos desarrollar ESP-Matter para Windows, ni siquiera con WSL. Windows no admite exponer puertos COM a las distribuciones de WSL. Es posible que necesites cambiar de terminal con frecuencia o instalar [usbipd-win](https://github.com/dorssel/usbipd-win) para problemas relacionados con puertos, incluyendo el uso de [chip-tool, que también es un punto problemático](https://github.com/espressif/esp-matter/blob/main/docs/en/using_chip_tool.rst).
:::

**En resumen, utilizaremos Ubuntu para los siguientes pasos de desarrollo, y utilizaremos la última versión de Ubuntu 22.04 actualmente soportada por Matter**. Si deseas usar un sistema operativo diferente al mencionado en este artículo para el desarrollo de Matter, puedes consultar la documentación oficial de Lexin. Este artículo no lo repetirá.

- **[ESPRESSIF IDF - Comenzando](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## Preparar el Software

A continuación, enumeraremos la versión del sistema y la versión de ESP-IDF utilizadas en este artículo como referencia. Esta es una versión estable que ha sido probada y funciona correctamente.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/).
- **ESP-IDF**: Etiquetas [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1).
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## Preparar el Hardware

En esta sección, detallaremos cómo configurar el uso de ESP-IDF en el entorno de Ubuntu y ejecutar el ejemplo de iluminación proporcionado por ESP-IDF. Así que, para este artículo, solo necesitas cualquiera de las siguientes XIAO ESP32.

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consígue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::caution
El XIAO ESP32C3 no tiene un LED integrado, por lo que si estás utilizando el XIAO ESP32C3, es posible que necesites tener un LED adicional.
:::

## Video Tutoriales

Dado que el marco de desarrollo ESP-IDF está dirigido a desarrolladores de software más profesionales, el umbral para usarlo es más alto que el de Arduino. Los documentos e información relacionados serán menos accesibles que los de Arduino. Para permitir que los usuarios de XIAO comiencen a usar ESP-IDF lo antes posible y reducir la posibilidad de encontrar problemas en la configuración del entorno de desarrollo, presentaremos la configuración del entorno en forma de video e imágenes. Esta sección es la parte en video, si deseas seguir el video, puedes consultarlo para instalar y configurar el entorno ESP-IDF y finalmente encender los LEDs integrados del XIAO ESP32C6.

<div class="table-center">
<iframe width="900" height="450" src="https://www.youtube.com/embed/QdPmsGDd7zs?si=5r_OO2EwZMX8D_HM?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalación de ESP-IDF Paso a Paso

Esta sección es la parte tutorial gráfica de la configuración del entorno ESP-IDF.

### Paso 1. Instalar los Pre-requisitos

Comienza actualizando y mejorando tu sistema Ubuntu para asegurarte de tener los paquetes y dependencias más recientes. Abre una terminal y ejecuta los siguientes comandos:

```
sudo apt update
sudo apt upgrade
```

Instala los prerequisitos necesarios para ESP-IDF ejecutando el siguiente comando. Si estás seguro de que los siguientes paquetes ya están instalados, puedes omitir este paso, pero aún así te recomendamos ejecutar este comando para verificarlo nuevamente.

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

:::note

La versión 3.16 o posterior de CMake son requeridas para usar ESP-IDF. Usa el comando "[tools/idf_tools.py](https://github.com/espressif/esp-idf/blob/v5.2.1/tools/idf_tools.py) install cmake" para instalar una versión adecuada si tu sistema operativo no la tiene.

:::

Paso 2. Instalación de Python3

Por lo general, la versión completa de Ubuntu 22.04 LTS instala Python 3.12 de forma predeterminada. Si no estás seguro, puedes comprobarlo de la siguiente manera. Si no está instalado o lo desinstalaste, también puedes reinstalarlo de la siguiente forma. Si estás bastante seguro de que ya tienes Python 3 instalado, puedes omitir este paso.

Para comprobar qué versión de Python tienes instalada, usa el siguiente comando:

```
python --version
```

Si la salida es algo como Python 2.7.17, tu intérprete predeterminado es Python 2.7. En ese caso, también debes comprobar si Python 3 no está ya instalado en tu computadora:

```
python3 --version
```

Si el comando anterior devuelve un error, significa que Python 3 no está instalado.

A continuación se muestra un resumen de los pasos para instalar Python 3:

- Si estás utilizando Homebrew, puedes instalar Python 3 con el siguiente comando:
    ```
    brew install python3
    ```

- Si tienes MacPorts, puedes ejecutar:
    ```
    sudo port install python38
    ```

### Paso 3. Obtener ESP-IDF

Para obtener ESP-IDF, navega al directorio de instalación y clona el repositorio con `git clone`, siguiendo las instrucciones a continuación específicas para tu sistema operativo. Abre una terminal y ejecuta los siguientes comandos:

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

Al ejecutar el comando anterior, ESP-IDF se descargará en `~/esp/esp-idf`.

### Paso 4. Configurar las herramientas

Además del ESP-IDF, también necesitas instalar las herramientas utilizadas por ESP-IDF, como el compilador, el depurador, los paquetes de Python, etc., para los proyectos que son compatibles con ESP32.

```
cd esp-idf/
./install.sh
```

### Step 5. Set up Environment Variables

Las herramientas instaladas aún no se han agregado a la variable de entorno PATH. Para que las herramientas sean utilizables desde la línea de comandos, deben configurarse algunas variables de entorno. ESP-IDF proporciona otro script que realiza esta tarea.

En la terminal donde vayas a utilizar ESP-IDF, ejecuta:

```
source ./export.sh
cd ..
```

En este punto, el entorno de ESP-IDF ya está configurado. Para verificar que ESP-IDF se haya instalado correctamente, ejecuta el siguiente comando:

```
idf.py --version
```

Si la instalación es exitosa, deberías ver la información de la versión de ESP-IDF.

### Paso 6 (Opcional). Acceso rápido al entorno de desarrollo de ESP-IDF

Como se describe en los pasos anteriores, cada vez que iniciamos la terminal o reiniciamos el computador, necesitamos importar las variables de entorno de ESP-IDF en la nueva terminal, lo que puede resultar muy inconveniente, especialmente si necesitamos desarrollar con ESP32 con frecuencia. Podemos modificar el archivo de configuración del Shell mediante los siguientes pasos para iniciar el entorno de ESP-IDF con el comando `get_idf`.

Abre el archivo `.bashrc` escribiendo el siguiente comando en la terminal.

```
nano ~/.bashrc
```

Añade lo siguiente al final del archivo `.bashrc`.

```
alias get_idf='. ~/esp/esp-idf/export.sh'
```

Refresca la configuración reiniciando la sesión de la terminal o ejecutando `source [ruta al perfil]`, por ejemplo, `source ~/.bashrc`.

Ahora puedes ejecutar `get_idf` para configurar o actualizar el entorno de ESP-IDF en cualquier sesión de terminal.

:::caution
Técnicamente, puedes añadir `export.sh` directamente al perfil de tu shell; sin embargo, no se recomienda. Hacerlo activará el entorno virtual de IDF en cada sesión de terminal (incluyendo aquellas en las que no se necesita IDF), lo que va en contra del propósito del entorno virtual y probablemente afectará a otros software.
:::

## Ejecutando el programa de ejemplo para un LED

Para asegurarte de que tu entorno ESP-IDF está configurado correctamente, ejecutemos un programa simple de ejemplo para un LED.

### Paso 1. Conectar el XIAO ESP32C6 al PC

Conecta tu placa XIAO ESP32 al computador y verifica en qué puerto serial es visible la placa. Usaremos el XIAO ESP32C6 como ejemplo.

Los puertos seriales siguen estos patrones de nombres: `/dev/tty`. En general, tu computadora puede tener varios puertos que comienzan con `tty`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

Determinar los puertos también es fácil, puedes usar el comando de consulta para ver qué puertos están presentes por defecto cuando no estás conectado al XIAO.

```
ls /dev/tty*
```

Luego, después de conectar el XIAO al computador y volver a consultarlo, el nombre del puerto serial adicional será el número de puerto del XIAO.

Mantén el nombre del puerto a la mano, ya que será necesario en los siguientes pasos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/12.png" style={{width:800, height:'auto'}}/></div>

Como puedes ver arriba, el número de puerto de mi XIAO en mi computadora debería ser **ttyACM0**.

### Paso 2. Iniciar un Proyecto

Navega al directorio de ejemplos

```
cd ~/esp/esp-idf/examples/get-started/blink
```

Establece el dispositivo de destino.

```
idf.py set-target esp32c6
```

:::tip
- Si estás utilizando **XIAO ESP32C3**, el comando que necesitas usar es `idf.py set-target esp32c3`.
- Si estás utilizando **XIAO ESP32S3**, el comando que necesitas usar es `idf.py set-target esp32s3`.
:::

Dado que el efecto principal de este proyecto de ejemplo es hacer que los LEDs integrados parpadeen, necesitamos configurar el GPIO donde se encuentran los LEDs, el tiempo de parpadeo y otros parámetros. ESP-IDF proporciona el comando `menuconfig` para ajustar algunos parámetros configurables del proyecto.

```
idf.py menuconfig
```

Este comando abre un menú de configuración donde puedes modificar varios ajustes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/14.png" style={{width:800, height:'auto'}}/></div>

Tomando el proyecto de parpadeo como ejemplo, hay tres parámetros que se pueden ajustar:

1. Tipo de LED de parpadeo: Establecer el tipo de LED a usar, en este caso lo configuramos como **GPIO**.

2. Número de GPIO de parpadeo: Se establece el número de pin GPIO donde se encuentra el LED, en este caso es **15**. El LED del XIAO ESP32C6 está conectado al GPIO15.

3. Período de parpadeo en ms: El intervalo de tiempo entre los destellos de luz. El valor predeterminado es **1000** milisegundos, o 1 segundo.

Una vez que hayas completado la configuración, presiona **q** para salir del menú de configuración y luego **y** para confirmar los cambios.

### Paso 3. Compilar y Flashear el Ejemplo

Compila el proyecto ejecutando:

```
idf.py build
```

Este comando compila la aplicación y todos los componentes de ESP-IDF, luego genera el bootloader, la tabla de particiones y los binarios de la aplicación. Si no hay errores, la compilación finalizará generando los archivos binarios de firmware `.bin`.

Para flashear los binarios que acabas de compilar para el ESP32 en el paso anterior, necesitas ejecutar el siguiente comando:

```
idf.py -p PORT flash
```

Sustituye `PORT` por el nombre del puerto USB de tu placa XIAO ESP32. Si no se define **PUERTO**, `idf.py` intentará conectarse automáticamente utilizando los puertos USB disponibles. Según el número de puerto del dispositivo que consultamos en el primer paso, en mi caso, debería ingresar el siguiente comando para flashear el programa.

```
idf.py -p /dev/ttyACM0 flash
```

Si no hay problemas al final del proceso de flasheo, el XIAO se reiniciará y comenzará a ejecutar la aplicación de "parpadeo".

Para ver la salida del programa de ejemplo del LED, ejecuta el siguiente comando:

```
idf.py monitor
```

Deberías ver el LED en tu XIAO parpadeando, lo que indica que el programa de ejemplo se está ejecutando con éxito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/13.png" style={{width:800, height:'auto'}}/></div>

Si deseas salir del monitor serial, puedes usar el comando `Ctrl+]`.

:::tip
Aquí tienes algunos comandos comúnmente utilizados en el entorno ESP-IDF:

- `idf.py menuconfig`: Abre el menú de configuración del proyecto.
- `idf.py build`: Compila el proyecto.
- `idf.py flash`: Flashea el firmware compilado al dispositivo conectado.
- `idf.py monitor`: Inicia el monitor serial para ver la salida del dispositivo.
- `idf.py clean`: Limpia el directorio de construcción.
- `idf.py fullclean`: Realiza una limpieza completa, incluyendo las dependencias descargadas.
- `idf.py set-target`: Establece el chip objetivo para el proyecto.
- `idf.py size`: Muestra la información de tamaño del firmware compilado.
- `idf.py app`: Administra las aplicaciones en el proyecto.
- `idf.py component`: Administra los componentes en el proyecto.
:::


¡Felicidades! Has instalado con éxito ESP-IDF en tu sistema Ubuntu, sentando las bases para tu desarrollo con Matter. Seeed Studio continuará mejorando y ampliando la documentación de desarrollo para la serie XIAO ESP32 en el contexto de Matter.

Con la configuración de ESP-IDF completada, ahora estás listo para avanzar en la parte de desarrollo con Matter. Seeed Studio está comprometido en proporcionar recursos y soporte integral para facilitar tu experiencia en Matter. Estate atento a la próxima documentación y tutoriales específicos de Matter para la serie XIAO ESP32. Estos recursos te guiarán en la utilización del framework ESP-IDF para construir dispositivos inteligentes para el hogar que cumplan con el protocolo Matter.

A medida que profundices en el desarrollo con Matter, asegúrate de consultar la documentación oficial de ESP-IDF para obtener información detallada sobre las capacidades del framework y mejores prácticas. Además, interactúa con la comunidad de desarrolladores y entusiastas para intercambiar conocimientos, obtener ayuda y colaborar en proyectos innovadores.

Con el poder de ESP-IDF y los próximos recursos de desarrollo de Matter de Seeed Studio, estás bien equipado para crear soluciones inteligentes para el hogar que lleven la interoperabilidad y la experiencia del usuario a un nuevo nivel. ¡Explora las emocionantes posibilidades que tienes por delante y comienza tu desarrollo con Matter con confianza! ¡Feliz programación! 

## Solución de Problemas

### ¿Por qué obtengo todo tipo de errores durante la instalación del entorno?

El entorno de ESP-IDF es un poco más exigente, y si estás utilizando un sistema Ubuntu que se usa con frecuencia para desarrollo, es probable que ocurran errores debido a diferentes versiones de algunas dependencias de Python. Dado que el framework Matter no es desarrollado por Seeed, es posible que no podamos hacer mucho al respecto en este aspecto. 

Por lo tanto, te recomendamos que, si encuentras problemas durante la instalación, envíes un **issue** al repositorio oficial de **[ESP-IDF](https://github.com/espressif/esp-idf)** para obtener ayuda.

## Recursos

- **[ESPRESSIF IDF - Primeros pasos](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

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


