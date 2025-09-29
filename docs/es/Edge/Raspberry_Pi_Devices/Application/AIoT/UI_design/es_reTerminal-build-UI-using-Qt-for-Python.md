---
description: Qt para reTerminal con Python
title: Qt para reTerminal con Python
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-Qt-for-Python
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

## Introducción

Este wiki explica cómo construir tu propia interfaz de usuario usando Qt para Python en el reTerminal. Aquí hemos usado PySide2 para el desarrollo. PySide2 es el módulo oficial de Python del proyecto Qt para Python, que proporciona acceso al framework completo de Qt5. Qt para Python te permite construir interfaces de usuario interactivas de una manera más amigable para el usuario. También es muy flexible de usar y tiene una curva de aprendizaje corta.

Siguiendo la guía a continuación, podrás crear una aplicación para controlar los LEDs STA y USR en el reTerminal simplemente haciendo clic en botones en la LCD. ¡Así que comencemos!

## Preparar el Entorno de Desarrollo

### En reTerminal

- **Paso 1.** Accede al reTerminal usando la **LCD integrada, pantalla externa o SSH** como se explica [aquí](https://wiki.seeedstudio.com/es/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) y escribe lo siguiente en una ventana de terminal

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **Paso 2.** Instalar herramientas de compilación para instalar el componente **QtQuick.Studio** manualmente

```sh
sudo apt install qt5-qmake
```

**Nota:** Tenemos que instalar QtQuick.Studio manualmente porque los sistemas operativos Debian y Ubuntu por defecto no tienen este módulo

- **Paso 3.** Instalar el módulo **QtQuick.Studio**

```sh
git clone https://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake
make
sudo make install
```

**Nota:** Debido a que el módulo QtQuick.Studio más reciente no puede funcionar en el Raspberry Pi OS actual, lo hemos portado a Debian GNU/Linux 10 (buster)

Podemos ignorar el siguiente error de prompt.

```txt
Some of the required modules (qtHaveModule(quick)) are not available.
Skipped.
```

Ahora hemos terminado de instalar los paquetes necesarios en el reTerminal

### En la PC Host

- **Paso 1.** Descarga e instala [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Nota:** Descarga el instalador que sea adecuado para tu sistema operativo

- **Paso 2.** Haz clic en la pestaña **Extensions** en el menú de navegación izquierdo y escribe **remote development** en el cuadro de búsqueda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Selecciona **Remote Development** y haz clic en **Install**

- **Paso 4.** Presiona **F1** en el teclado, escribe **ssh** y selecciona **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **Paso 5.** Ingresa lo siguiente

```sh
pi@192.xxx.xx.xx
```

**Nota:** **pi** es el nombre de usuario y **192.xxx.xx.xx** es la dirección IP del reTerminal

- **Paso 6.** Introduce la contraseña para el usuario

Ahora has iniciado sesión exitosamente en reTerminal usando SSH

- **Paso 7.** Instala la extensión de **Python** como en el **paso 2** anterior

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 8.** Instala la extensión **Qt for Python**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 9.** Navega a `File > Open Folder...` y selecciona cualquier carpeta que desees abrir

**Nota:** Más adelante usaremos Visual Studio Code para crear archivos dentro del reTerminal y construir nuestro proyecto

Ahora hemos terminado exitosamente de preparar el entorno de desarrollo

## Construir el Proyecto

A continuación, pasemos a construir el proyecto. El flujo de trabajo es el siguiente:

1. Diseñar la UI en un **software de diseño gráfico**
2. Crear un archivo **.qml** y construir la UI basándose en las posiciones de los elementos de UI obtenidas del software de diseño gráfico
3. Crear otro **.qml** para la aplicación UI de pantalla completa
4. Crear un archivo **python** y escribir las funciones que se usarán para controlar los LEDs
5. Crear un archivo **Python** para ejecutar la aplicación
6. Crear un **script** para ejecutar el archivo python
7. Crear un **acceso directo de Escritorio** para abrir la aplicación creada haciendo doble clic en un icono

Los archivos que necesitamos crear son los siguientes:

- LedGui.qml - UI con elementos gráficos
- App.qml - Aplicación UI de pantalla completa
- ledControl.py - Funciones de control de LEDs
- main.py - Ejecutar la aplicación
- led_start.sh - Ejecutar el archivo Python
- led.desktop - Abrir la aplicación

### Diseñar la UI

Primero necesitamos diseñar la UI. Para hacer esto, usaremos un software de diseño gráfico en línea gratuito llamado **Gravit Designer**

- **Paso 1.** Haz clic en [este enlace](https://www.designer.io/) para abrir Gravit Designer

- **Paso 2.** Haz clic en **Get Started**, crea una cuenta gratuita o inicia sesión directamente con Facebook o Google

- **Paso 3.** Establece el tamaño del lienzo como **1280 x 720px** y haz clic en **Create!**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Lo establecemos en 1280x720px porque esa es la resolución de la LCD del reTerminal

- **Paso 4.** Selecciona la forma **Rectangle**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"/></p>

- **Paso 5.** Dibuja un rectángulo para la **barra de título de la UI** manteniendo presionado el botón izquierdo del ratón, arrastra el ratón y suelta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"/></p>

- **Paso 6.** Dibuja un rectángulo para la **barra de título de la UI** manteniendo presionado el botón izquierdo del ratón, arrastra el ratón y suelta

- **Paso 7.** Dibuja las siguientes formas para los **botones de la UI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"/></p>

- **Paso 8.** Selecciona la forma y bajo la pestaña **INSPECTOR**, selecciona **Fills**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"/></p>

- **Paso 9.** Haz clic en un color para rellenar la forma seleccionada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"/></p>

- **Paso 10.** Rellena las formas restantes como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"/></p>

- **Paso 11.** Añade un botón de cerrar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"/></p>

- **Paso 12.** Haz clic en la **herramienta Text**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"/></p>

- **Paso 13.** Coloca un bloque de texto y escribe "LED TEST"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"/></p>

- **Paso 14.** Haz clic en el bloque de texto, cambia el tamaño y color

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"/></p>

- **Paso 15.** Repite lo mismo para obtener lo siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"/></p>

Ahora hemos terminado de diseñar la UI

### Construir la UI en qml

Ahora transferiremos el diseño de Gravit Designer a qml y construiremos la UI

- **Paso 1.** Conéctate al reTerminal usando SSH a través de Microsoft Visual Code, abre una carpeta como se mencionó antes.

- **Paso 2.** Haz clic derecho y selecciona **New Folder**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"/></p>

- **Paso 3.** Escribe un nombre para la carpeta y entra en la carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"/></p>

- **Paso 4.** Haz clic derecho en la carpeta y selecciona **New File**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"/></p>

- **Paso 4.** Escribe un nombre para el archivo con extensión **.qml** como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"/></p>

**Nota:** Asegúrate de que la primera letra esté en **Mayúscula**

- **Paso 5.** Ingresa al **archivo .qml** y copia los siguientes códigos

```qml
// import libraries
import QtQuick 2.8
import QtQuick.Controls 2.1

/* The Item type is the base type for all visual items in Qt Quick. Here 1280 and 720 are chosen
for the dimensions because the resolution of reTerminal LCD is 1280x720 */
Item {
    // identify the qml
    id: ledControl
    // define width and height of the app
    width: 1280
    height: 720

    // Rectangle block for the heading
    Rectangle {
        id: titleBlock
        x: 0 // Rectangle block position in x-axis
        y: 0 // Rectangle block position in y-axis
        width: 1280 // Rectangle block width
        height: 175 // Rectangle block height
        color: "green" // Rectangle block color
        /* You can also enter **hexadecimal values** for the color field */
    }

    // left top button (ON)
    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON" // text inside the button
        font.pointSize: 28 // text font
        palette.button: "green" // button color
        palette.buttonText: "white" // text color
        // Used to access the button control class in the Python file and turn on the LED
        onClicked:
        {
            _Setting.staGreenOn()
        }
    }

    // left bottom button (OFF)
    Button {
        id: staGreenOff
        x: 159
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staGreenOff()
        }
    }

    // middle top button (ON)
    Button {
        id: staRedOn
        x: 540
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOn()
        }
    }

    // middle bottom button (OFF)
    Button {
        id: staRedOff
        x: 540
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOff()
        }
    }

    // right top button (ON)
    Button {
        id: usrGreenOn
        x: 918
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOn()
        }
    }

    // right bottom button (OFF)
    Button {
        id: usrGreenOff
        x: 918
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOff()
        }
    }

    // close button
    Button {
        id: close
        x: 1200
        y: 0
        width: 80
        height: 31
        palette.button: "red"
        palette.buttonText: "white"
        text: "X"
        onClicked:
        {
            _Setting.closeWindow()
        }
    }

    // heading
    Text {
        id: title
        x: 500
        y: 37
        color: "white"
        text: "LED TEST"
        font.pixelSize: 60
    }

    // STA GREEN text
    Text {
        id: staGreen
        x: 135
        y: 400
        text: "STA GREEN"
        font.pixelSize: 45
    }

    // STA RED text
    Text {
        id: staRed
        x: 547
        y: 400
        text: "STA RED"
        font.pixelSize: 45
    }

    // USR GREEN text
    Text {
        id: usrGreen
        x: 891
        y: 400
        text: "USR GREEN"
        font.pixelSize: 45
    }
}
```

#### Obtener Ubicación y Tamaño de Formas

Dentro de **Gravit Designer**, selecciona un bloque de forma y obtén la **posición y tamaño** desde la pestaña **INSPECTOR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"/></p>

#### Obtener Ubicación y Tamaño de Texto

Dentro de **Gravit Designer**, selecciona un bloque de texto y obtén la **posición y tamaño** desde la pestaña **INSPECTOR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"/></p>

### Construir la Interfaz de Usuario en Pantalla Completa

A continuación, construyamos la interfaz de usuario en pantalla completa

- **Paso 1.** Abre la carpeta Root que creamos anteriormente y crea un nuevo **archivo .qml** dentro de esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abre el **archivo .qml** y copia los siguientes códigos

```qml
// import library
import QtQuick.Controls 2.1

// properties of the application window containing UI elements
ApplicationWindow {
    id: application
    width: 1280
    height: 720
    visible: true
    visibility: "FullScreen"

    // initialize the first window of the application
    property var iniITEM: "LedGui.qml"

    // stack-based navigation model
    StackView {
        id: stackview
        initialItem: iniITEM
    }
}
```

Ahora hemos terminado de construir la aplicación de pantalla completa

### Métodos para Controlar los LEDs

A continuación crearemos un archivo python para obtener los métodos para controlar los LEDs en el reTerminal

- **Paso 1.** Abre la carpeta raíz que creamos antes y crea un nuevo archivo python **.py** bajo esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Ingresa al archivo **.py** y copia los siguientes códigos

```py
# import libraries
import sys
import os
from PySide2.QtCore import *

# class to handle button controls
class Setting(QObject):

    # staGreen ON/OFF
    @Slot()
    def staGreenOn(self):
        # turn ON
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'")
    @Slot()
    def staGreenOff(self):
        # turn OFF
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'")

    # staRed
    @Slot()
    def staRedOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'")
    @Slot()
    def staRedOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'")

    # usrGreen
    @Slot()
    def usrGreenOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'")
    @Slot()
    def usrGreenOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'")

    # close
    @Slot()
    def closeWindow(self):
        sys.exit()
```

Ahora hemos completado el archivo de Python utilizado para controlar los LEDs

### Preparar el Archivo de Python para Ejecutar la APP

Ahora necesitamos crear un archivo de Python que se pueda usar para ejecutar la aplicación que hemos construido

- **Paso 1.** Abrir la carpeta raíz que creamos antes y crear un nuevo **archivo .py** bajo esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Ingresar al archivo creado y copiar los siguientes códigos

```py
# import libraries
from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtWidgets import *
from PySide2.QtCore import *
from ledControl import Setting

# launch the app
if __name__ == '__main__':
    app = QApplication([])
    engine = QQmlApplicationEngine()
    # location of the fullscreen app that we created before
    url = QUrl("./App.qml")
    context = engine.rootContext()
    seting = Setting()
    context.setContextProperty("_Setting", seting)
    engine.load(url)
    app.exec_()
```

### Preparar un Script para Ejecutar el archivo Python

- **Paso 1.** Abrir la carpeta Root que creamos antes y crear un nuevo **archivo .sh** bajo esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abrir el archivo creado e introducir lo siguiente

```sh
#!/bin/bash
cd $HOME/ledApp
DISPLAY=:0 python3 main.py
```

**Nota:** Aquí **$HOME/ledApp** es la ubicación del archivo **main.py**

- **Paso 3.** Abre una ventana de terminal dentro del reTerminal y navega al directorio raíz de la aplicación

```sh
example:
cd /ledApp
```

- **Paso 4.** Hacer que led_start.sh sea un archivo ejecutable

```sh
chmod +x led_start.sh
```

### Preparar un Archivo Desktop para Lanzar la Aplicación

- **Paso 1.** Abrir la carpeta Root que creamos antes y crear un nuevo **archivo .desktop** bajo esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"/></p>

- **Paso 2.** Abrir el archivo creado e introducir lo siguiente

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/ledApp/led_start.sh
Type=Application
Categories=Application;Development;
```

**Nota:** **Exec** es la ubicación del script que creamos anteriormente

- **Paso 3.** Abre una ventana de terminal dentro del reTerminal y navega al directorio raíz de la aplicación

```sh
example:
cd /ledApp
```

- **Paso 4.** Hacer que led_start.sh sea un archivo ejecutable

```sh
chmod +x led.desktop
```

### Ejecutar la Aplicación

- **Paso 1.** Navega a la **carpeta ledApp** usando la pantalla LCD del reTerminal

- **Paso 2.** Haz doble clic en el archivo **LED Test**

Verás la salida como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

¡Ahora puedes hacer clic en los botones y verás los LEDs encenderse!

### Depurar la Aplicación

Repasemos el proceso de depuración de tu aplicación durante el desarrollo

- **Paso 1.** Inicia sesión en reTerminal vía **SSH** usando **Microsoft Visual Studio Code** como se mencionó anteriormente

- **Paso 2.** Inicia sesión en reTerminal vía SSH usando una aplicación SSH como [MobaXterm](https://mobaxterm.mobatek.net/) con **función de servidor X11**

**Nota:** X11 es necesario para reenviar la pantalla del reTerminal y que aparezca en la PC

- **Paso 3.** Después de escribir todos los códigos en Microsoft Visual Studio Code al reTerminal, ejecuta el **archivo main.py** usando MobaXterm

```sh
python3 main.py
```

## Prueba Directa

Sigue los pasos anteriores para configurar tu entorno, copia el código directamente y ejecútalo.

```bash
git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI
cd Python_ReTerminalQt5_LED_UI
python3 main.py
```

Finalmente verás la salida mostrada en una nueva ventana. Si hay algún error en el código, se mostrarán en la ventana del terminal de MobaXterm.

## Demo Adicional

Si quieres experimentar una demo más interesante con Qt para Python, puedes revisar [este repositorio de GitHub](https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[Página web]** [Documentación de Qt](https://doc.qt.io/qt-5/index.html)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
