---
description: Presenta cómo instalar y configurar el entorno IDF.
title: Desarrollo en XIAO usando Espressif ESP-IDF
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_idf
last_update:
  date: 05/09/2024
  author: Citric
---

# Desarrollo en XIAO usando Espressif ESP-IDF

:::tip
Este artículo es el primer tutorial de la serie de desarrollo Matter de Seeed Studio XIAO ESP32. Si quieres comenzar tu viaje de desarrollo de dispositivos Matter con la serie XIAO ESP32, empieza aquí.

Este tutorial se aplica al XIAO ESP32C3, XIAO ESP32S3 y XIAO ESP32C6.
:::

En el mundo del desarrollo de IoT, el ESP-IDF (Espressif IoT Development Framework) ha ganado una popularidad significativa debido a sus potentes características y amplio soporte para microcontroladores de la serie ESP32. Con la aparición del protocolo Matter, que tiene como objetivo proporcionar un estándar unificado para dispositivos de hogar inteligente, los desarrolladores están ansiosos por explorar esta nueva frontera. Sin embargo, el desarrollo de Matter actualmente no soporta el framework de Arduino, dejando a ESP-IDF como la opción principal para el desarrollo. En este tutorial, te guiaremos a través del proceso de instalación de ESP-IDF en un sistema Ubuntu, permitiéndote iniciar tu viaje de desarrollo de Matter en la serie XIAO ESP32.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/matter-sdk.png" style={{width:800, height:'auto'}}/></div>

## Basado en Ubuntu 22.04

Cuando se trata del desarrollo de Matter, la elección del sistema operativo es una consideración importante. Aunque Windows no proporciona soporte nativo para el desarrollo de Matter, los desarrolladores aún pueden usar el Subsistema de Windows para Linux (WSL) para **[crear un entorno compatible](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#windows-10)**. **[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)** permite ejecutar una distribución de Linux, como Ubuntu, directamente en Windows, proporcionando acceso a las herramientas y bibliotecas necesarias para el desarrollo de Matter.

Por otro lado, macOS es una opción popular entre los desarrolladores debido a su base Unix y herramientas de desarrollo integrales.

En última instancia, la elección del sistema operativo depende de tus preferencias personales y los requisitos específicos de tu proyecto Matter. Ubuntu, siendo una distribución de Linux, ofrece una experiencia nativa y optimizada para el desarrollo de Matter. Sin embargo, si te sientes más cómodo con Windows o macOS, aún puedes configurar un entorno de desarrollo adecuado usando herramientas como WSL en Windows o la terminal integrada en macOS.

:::caution
No recomendamos desarrollar ESP-Matter para Windows, incluso con WSL. Windows no soporta exponer puertos COM a distribuciones WSL. Puede que necesites cambiar terminales frecuentemente o instalar [usbipd-win](https://github.com/dorssel/usbipd-win) para problemas de puertos, incluyendo el uso de [chip-tool que también es un punto crítico](https://github.com/espressif/esp-matter/blob/main/docs/en/using_chip_tool.rst).
:::

**En resumen, usaremos Ubuntu para los siguientes pasos de desarrollo, y usaremos el último Ubuntu 22.04 actualmente soportado por Matter**. Si quieres usar un sistema operativo diferente al de este artículo para el desarrollo de Matter, puedes consultar la documentación oficial de Lexin. Este artículo no lo repetirá.

- **[ESPRESSIF IDF - Comenzar](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## Preparar el Software

A continuación listaré la versión del sistema y la versión de ESP-IDF utilizadas en este artículo como referencia. Esta es una versión estable que ha sido probada para funcionar correctamente.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/).
- **ESP-IDF**: Tags [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1).
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## Preparar el Hardware

En esta sección, detallaremos cómo configurar el uso de ESP-IDF en el entorno de Ubuntu y ejecutar el ejemplo de iluminación proporcionado por ESP-IDF. Así que para este artículo, solo necesitas preparar cualquiera de la siguiente serie XIAO ESP32.

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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::caution
El XIAO ESP32C3 no tiene un LED integrado, por lo que si estás usando el XIAO ESP32C3, es posible que necesites un LED adicional.
:::

## Tutoriales en Video

Dado que el framework de desarrollo ESP-IDF está dirigido a desarrolladores de software más profesionales, el umbral para usarlo es más alto que el de Arduino. Los documentos e información relacionados serán menores que los de Arduino. Para permitir que los usuarios de XIAO comiencen a usar ESP-IDF lo antes posible, y reducir la posibilidad de encontrar problemas en la configuración del entorno de desarrollo, presentaremos la configuración del entorno en forma de video y gráficos. Esta sección es la parte del video, si quieres seguir junto con el video, puedes referirte a este video para instalar y configurar el entorno ESP-IDF y finalmente encender los LEDs integrados del XIAO ESP32C6.

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/QdPmsGDd7zs?si=5r_OO2EwZMX8D_HM?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalación de ESP-IDF Paso a Paso

Esta sección es la parte del tutorial gráfico de la configuración del entorno ESP-IDF.

### Paso 1. Instalar Prerrequisitos

Comienza actualizando y mejorando tu sistema Ubuntu para asegurar que tienes los paquetes y dependencias más recientes. Abre una terminal y ejecuta los siguientes comandos:

```
sudo apt update
sudo apt upgrade
```

Instala los prerrequisitos necesarios para ESP-IDF ejecutando el siguiente comando, si estás seguro de que los siguientes paquetes ya han sido instalados, puedes omitir este paso, pero aún recomendamos que ejecutes este comando para verificarlo nuevamente.

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

:::note
Se requiere CMake versión 3.16 o más reciente para usar con ESP-IDF. Ejecuta "[tools/idf_tools.py](https://github.com/espressif/esp-idf/blob/v5.2.1/tools/idf_tools.py) install cmake" para instalar una versión adecuada si las versiones de tu SO no tienen una.
:::

### Paso 2. Instalación de Python3

Típicamente, la versión completa de Ubuntu 22.04 LTS instala Python 3.12 por defecto. Si no estás seguro, puedes verificar como sigue. Si no está instalado o si alguna vez lo desinstalaste, también puedes reinstalarlo como se muestra a continuación. Si estás bastante seguro de que tienes Python 3 instalado, puedes omitir este paso.

Verifica qué Python tienes actualmente:

```
python --version
```

Si la salida es como `Python 2.7.17`, tu intérprete predeterminado es `Python 2.7`. Si es así, también verifica si Python 3 no está ya instalado en tu computadora:

```
python3 --version
```

Si el comando anterior devuelve un error, significa que Python 3 no está instalado.

A continuación se presenta una descripción general de los pasos para instalar Python 3.

- La instalación con HomeBrew se puede hacer de la siguiente manera:
    ```
    brew install python3
    ```

- Si tienes MacPorts, puedes ejecutar:
    ```
    sudo port install python38
    ```

### Paso 3. Obtener ESP-IDF

Para obtener ESP-IDF, navega a tu directorio de instalación y clona el repositorio con `git clone`, siguiendo las instrucciones a continuación específicas para tu sistema operativo. Abre Terminal y ejecuta los siguientes comandos:

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

Al ejecutar el comando anterior, ESP-IDF se descargará en `~/esp/esp-idf`.

### Paso 4. Configurar las Herramientas

Además del ESP-IDF, también necesitas instalar las herramientas utilizadas por ESP-IDF, como el compilador, depurador, paquetes de Python, etc., para proyectos que soporten ESP32.

```
cd esp-idf/
./install.sh
```

### Paso 5. Configurar Variables de Entorno

Las herramientas instaladas aún no se han añadido a la variable de entorno PATH. Para hacer que las herramientas sean utilizables desde la línea de comandos, se deben configurar algunas variables de entorno. ESP-IDF proporciona otro script que hace eso.

En la terminal donde vas a usar ESP-IDF, ejecuta:

```
source ./export.sh
cd ..
```

En este punto, todo el entorno ESP-IDF está realmente configurado. Para verificar que ESP-IDF está instalado correctamente, ejecuta el siguiente comando:

```
idf.py --version
```

Si la instalación es exitosa, deberías ver la información de versión de ESP-IDF.

### Paso 6 (Opcional). Acceso rápido al entorno de desarrollo ESP-IDF

Como se describe en los pasos anteriores, cada vez que iniciamos la terminal o reiniciamos la computadora, necesitamos importar las variables de entorno de ESP-IDF en la nueva terminal, lo cual nos trae una gran inconveniencia, especialmente si necesitamos desarrollar ESP32 frecuentemente. Podemos modificar el archivo de configuración de Shell mediante los siguientes pasos para iniciar el entorno de ESP-IDF con el comando `get_idf`.

Abre el archivo `.bashrc` escribiendo el siguiente comando en la terminal.

```
nano ~/.bashrc
```

Añade lo siguiente al final del archivo `.bashrc`.

```
alias get_idf='. ~/esp/esp-idf/export.sh'
```

Actualiza la configuración reiniciando la sesión del terminal o ejecutando `source [ruta al perfil]`, por ejemplo, `source ~/.bashrc`.

Ahora puedes ejecutar `get_idf` para configurar o actualizar el entorno esp-idf en cualquier sesión de terminal.

:::caution
Técnicamente, puedes añadir `export.sh` directamente al perfil de tu shell; sin embargo, no se recomienda. Hacerlo activa el entorno virtual IDF en cada sesión de terminal (incluyendo aquellas donde IDF no es necesario), anulando el propósito del entorno virtual y probablemente afectando otro software.
:::

## Ejecutando el Programa de Ejemplo LED

Para asegurar que tu entorno ESP-IDF esté configurado correctamente, ejecutemos un programa de ejemplo LED simple.

### Paso 1. Conectar XIAO ESP32C6 a PC

Ahora conecta tu placa XIAO ESP32 Series al ordenador y verifica bajo qué puerto serie la placa es visible. Usaremos el XIAO ESP32C6 como ejemplo.

Los puertos serie tienen los siguientes patrones de nomenclatura: `/dev/tty`. En general, tu ordenador puede tener muchos puertos que comienzan con `tty`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

Determinar los puertos también es fácil, puedes usar el comando de consulta para ver qué puertos están presentes por defecto cuando no estás conectado a XIAO.

```
ls /dev/tty*
```

Luego, después de conectar el XIAO a la computadora y consultarlo nuevamente, el nombre del puerto serie adicional es el número de puerto del XIAO.

Mantén a mano el nombre del puerto ya que se necesita en los siguientes pasos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/12.png" style={{width:800, height:'auto'}}/></div>

Como puedes ver arriba, mi número de puerto XIAO en mi computadora debería ser **ttyACM0**.

### Paso 2. Iniciar un Proyecto

Navega al directorio de ejemplos

```
cd ~/esp/esp-idf/examples/get-started/blink
```

Establece el dispositivo objetivo.

```
idf.py set-target esp32c6
```

:::tip
- Si estás usando **XIAO ESP32C3**, entonces el comando que necesitas usar es `idf.py set-target esp32c3`.
- Si estás usando **XIAO ESP32S3**, entonces el comando que necesitas usar es `idf.py set-target esp32s3`.
:::

Dado que el efecto principal de este proyecto de ejemplo es hacer parpadear los LEDs integrados, necesitamos configurar el GPIO donde están ubicados los LEDs y el tiempo de parpadeo y otros parámetros. ESP-IDF proporciona el comando menuconfig para establecer algunos parámetros ajustables del proyecto.

```
idf.py menuconfig
```

Este comando abre un menú de configuración donde puedes modificar varios ajustes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/14.png" style={{width:800, height:'auto'}}/></div>

Tomando el proyecto blink como ejemplo, hay tres parámetros que se pueden ajustar.

1. Blink LED type: Establece el tipo de LED a usar, en este caso lo configuramos como **GPIO**.

2. Blink GPIO number: El número de pin GPIO donde se encuentra el LED se establece en **15** aquí. El LED del XIAO ESP32C6 está conectado al GPIO15.

3. Blink period in ms: El intervalo de tiempo entre destellos de luz. El valor predeterminado es **1000** milisegundos, o 1 segundo.

Una vez que la configuración esté completa, presiona **q** para salir del menú de configuración y luego **y** para confirmar los cambios.

### Paso 3. Compilar y Flashear el Ejemplo

Compila el proyecto ejecutando:

```
idf.py build
```

Este comando compila la aplicación y todos los componentes de ESP-IDF, luego genera el bootloader, la tabla de particiones y los binarios de la aplicación. Si no hay errores, la compilación termina generando los archivos binarios de firmware .bin.

Para flashear los binarios que acabas de compilar para el ESP32 en el paso anterior, necesitas ejecutar el siguiente comando:

```
idf.py -p PORT flash
```

Reemplaza `PORT` con el nombre del puerto USB de tu placa XIAO ESP32. Si el **PORT** no está definido, el `idf.py` intentará conectarse automáticamente usando los puertos USB disponibles. Según el número de puerto del dispositivo que consultamos en el primer paso, para mí, debería ingresar el siguiente comando para flashear el programa.

```
idf.py -p /dev/ttyACM0 flash
```


Si no hay problemas al final del proceso de flasheo, el XIAO se reiniciará e iniciará la aplicación "blink".

Para ver la salida del programa de ejemplo del LED, ejecuta el siguiente comando

```
idf.py monitor
```

Deberías ver el LED de tu XIAO parpadeando, indicando que el programa de ejemplo se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/13.png" style={{width:800, height:'auto'}}/></div>

Si deseas salir del monitor serie, puedes usar el atajo `Ctrl+]`.

:::tip
Aquí tienes algunos comandos comúnmente utilizados en el entorno ESP-IDF:

- `idf.py menuconfig`: Abre el menú de configuración del proyecto.
- `idf.py build`: Construye el proyecto.
- `idf.py flash`: Graba el firmware construido en el dispositivo conectado.
- `idf.py monitor`: Inicia el monitor serie para ver la salida del dispositivo.
- `idf.py clean`: Limpia el directorio de construcción.
- `idf.py fullclean`: Realiza una limpieza completa, incluyendo las dependencias descargadas.
- `idf.py set-target`: Establece el chip objetivo para el proyecto.
- `idf.py size`: Muestra la información de tamaño del firmware construido.
- `idf.py app`: Gestiona aplicaciones en el proyecto.
- `idf.py component`: Gestiona componentes en el proyecto.
:::


¡Felicidades! Has instalado exitosamente ESP-IDF en tu sistema Ubuntu, sentando las bases para tu viaje de desarrollo con Matter. Seeed Studio continuará mejorando y expandiendo la documentación de desarrollo para la serie XIAO ESP32 en el contexto de Matter. Con la finalización de la configuración y configuración de ESP-IDF, ahora estás listo para proceder con la parte de desarrollo de Matter de tu viaje.

Seeed Studio está comprometido a proporcionar recursos integrales y soporte para facilitar tu experiencia de desarrollo con Matter. Mantente atento a la próxima documentación específica de Matter y tutoriales adaptados a la serie XIAO ESP32. Estos recursos te guiarán a través del proceso de utilizar el framework ESP-IDF para construir dispositivos de hogar inteligente de vanguardia que se adhieran al protocolo Matter.

Mientras profundizas en el desarrollo de Matter, asegúrate de consultar la documentación oficial de ESP-IDF para obtener información detallada sobre las capacidades del framework y las mejores prácticas. Interactúa con la vibrante comunidad de desarrolladores y entusiastas para intercambiar conocimientos, buscar orientación y colaborar en proyectos innovadores.

Con el poder de ESP-IDF y los próximos recursos de desarrollo de Matter de Seeed Studio, estás bien equipado para crear soluciones de hogar inteligente extraordinarias que empujen los límites de la interoperabilidad y la experiencia del usuario. Abraza las emocionantes posibilidades que se avecinan y embárcate en tu viaje de desarrollo de Matter con confianza. ¡Feliz programación!

## Solución de problemas

### ¿Por qué obtengo todo tipo de errores durante la instalación del entorno?

El entorno de ESP-IDF es un poco más exigente, y si estás usando un host Ubuntu que se usa frecuentemente para desarrollo, es probable que ocurran errores debido a diferentes versiones de algunas dependencias de Python. Dado que el framework Matter no es desarrollado por Seeed, probablemente no hay nada que podamos hacer sobre esta parte del problema, por lo que recomendamos que envíes un issue al **[repositorio oficial de ESP-IDF](https://github.com/espressif/esp-idf)** para obtener ayuda si encuentras problemas con la instalación.

## Recursos

- **[ESPRESSIF IDF - Comenzar](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


