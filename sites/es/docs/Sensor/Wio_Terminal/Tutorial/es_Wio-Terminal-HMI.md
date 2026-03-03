---
description: Construye una pantalla HMI para Raspberry Pi usando Wio Terminal
title: Construye una pantalla HMI para Raspberry Pi
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-HMI
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Construye una pantalla HMI para Raspberry Pi usando Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif"/></div>

En este wiki, presentaremos cómo usar [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como una **pantalla USB HMI (Interfaz Humano-Máquina)** para [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html), [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html), [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) e incluso [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)! Esto convierte a Wio Terminal en una pantalla USB HMI que lo hace mucho más potente y puede ser usado en más escenarios industriales!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

Puede soportar **múltiples Wio Terminals conectados al dispositivo host**. En teoría, puedes conectar tantos como quieras siempre que tengas suficientes puertos USB! En Raspberry Pi, puede soportar hasta 4 Wio Terminals (RPI tiene 4 puertos USB) conectados a él actuando como pantallas HMI en **modo Extendido** así como **modo Espejo**, revisa lo siguiente para más información!

## Hardware Requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html) / [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) / [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) / [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)

## Firmware de Wio Terminal

Primero, necesitarás subir un programa de Arduino a tu Wio Terminal a través de tu PC.

- Descarga la librería [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) aquí.

Hay dos **ejemplos**, `NullFunctional` y `USBDisplayAndMouseControl`:

1. Si quieres **mayor tasa de refresco de pantalla en Wio Terminal**, sube **`NullFunctional`** a Wio Terminal.
2. Si quieres que **Wio Terminal también actúe como un ratón USB**, sube **`USBDisplayAndMouseControl`** a Wio Terminal.

### Método `uf2`

Por conveniencia, también proporcionamos métodos `uf2` para subir el firmware de Wio Terminal. Simplemente descarga los archivos `uf2` de abajo.

- Descarga los archivos `uf2` de [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/NullFunctional.uf2).

- Descarga los archivos `uf2` de [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/USBDisplayAndMouseControl.uf2).

Entra al modo bootloader deslizando el interruptor de encendido dos veces rápidamente. Para más referencia, por favor también ve [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#faq).

Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra los archivos uf2 descargados a la unidad `Arduino`.

## Firmware del Dispositivo Host

Ahora configuremos el controlador de pantalla en el dispositivo host y esto puede ser Raspberry Pi, Jetson Nano o incluso Odyssey X86J4105:

### Raspberry Pi

Para Raspberry Pi, primero necesitas descargar información de paquetes de todas las fuentes configuradas:

```sh
sudo apt-get update
```

- Instala los paquetes necesarios como **kernel headers, kernels, build-essential, dkms** ejecutando el siguiente comando en la terminal:

```sh
sudo apt-get install raspberrypi-kernel-headers raspberrypi-kernel build-essential dkms
```

- Reinicia la Raspberry Pi:

```sh
sudo reboot
```

- Descarga el controlador de pantalla en Raspberry Pi:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- Compilar y construir el controlador:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- Mover los **archivos de configuración a la ubicación del sistema**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

!!!Nota
        Hay diferentes configuraciones de pantalla que puedes elegir, la predeterminada es un Wio Terminal como una pantalla.

- Reinicia el servicio:

```sh
sudo service lightdm restart
```

- Ejecuta el siguiente comando en la terminal para la configuración de pantalla:

```sh
sudo raspi-config
```

- Una vez que se abra la Herramienta de Configuración de Software de Raspberry Pi, navega a la siguiente ubicación:

```sh
Display Options > Resolution
```

- Selecciona una resolución diferente excepto "default"

```sh
Ex: DMT Mode 82 1920x1080 60Hz 16:9  
```

- Apagar la Raspberry Pi:

```sh
sudo poweroff
```

- Conecta el Wio Terminal al puerto USB de la Raspberry Pi

- Enciende la Raspberry Pi

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-new.png"/></div>

¡Ahora deberías ver que tu Wio Terminal muestra el escritorio de la Raspberry Pi! Si cargaste el firmware `USBDisplayAndMouseControl` en el Wio Terminal, ¡incluso puedes usar los botones y los interruptores de 5 direcciones para controlar el ratón de la Raspberry Pi!

!!!Note
    Esta versión del controlador de pantalla USB no admite intercambio en caliente.

### Jetson Nano, Beaglebone y Odyssey X86

Para Nvidia Jetson Nano y Odyssey X86J4105 (Ubuntu), instala el **controlador de linux** como se indica a continuación, ejecuta lo siguiente en la terminal:

**Nota:** Para Odyssey X86J4105, solo hemos probado para los sistemas operativos ubuntu y debian. Otros sistemas operativos Linux pueden no funcionar.

```sh
sudo apt install --reinstall linux-headers-$(uname -r)
```

- Descargar el controlador de pantalla:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- Compilar y construir el controlador:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- Mover los **archivos de configuración a la ubicación del sistema**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

- Reinicia el servicio:

```sh
sudo service lightdm restart
```

- ¡Conecta Wio Terminal al puerto USB del dispositivo!

## Configuraciones de Pantalla

Como se mencionó, puedes tener **múltiples** Wio Terminals conectados a una Raspberry Pi y por lo tanto puedes organizar la configuración de pantalla (ubicaciones de pantalla) editando el archivo `10-disp.conf`. Hemos proporcionado 3 otras configuraciones de expansión de pantalla como se muestra a continuación.

### Configuración de pantalla 1

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-1-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  
#        : 3  4
```

Este es el `10-disp-1.conf` bajo `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`, simplemente copia este archivo a `/usr/share/X11/xorg.conf.d/` y nómbralo `10-disp.conf`:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp-1.conf /usr/share/X11/xorg.conf.d/10-disp.conf
```

### Configuración de pantalla 2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-2-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1
#        : 2  3  4
```

Este es el `10-disp-2.conf` bajo `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

### Configuración de pantalla 3

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-3-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  3  4
```

Este es el `10-disp-3.conf` bajo `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

### Configuración de pantalla 4

Modo Espejo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-4.png"/></div>

```py
# Four-screen clone display
```

Este es el `10-disp-4.conf` bajo `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

## Ejemplo de PtQtGraph

Para más, puedes usar el gráfico [**PyQtGraph**](http://www.pyqtgraph.org/) para simplemente dibujar tu GUI con Wio Terminal con facilidad!

- Primero instalemos las dependencias para PyQtGraph:

```sh
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install pyqtgraph
```

- Exportar macros para la pantalla:

```sh
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1
```

**Nota:** Donde `fb1` es la primera pantalla, `fb2` es la segunda, `fb3` `fb3` y así sucesivamente. Puedes usar `echo $QT_QPA_PLATFORM` para verificar las macros.

- Copia los siguientes archivos python de ejemplo de PyQtGraph y nómbralo `test.py`:

```py
# -*- coding: utf-8 -*-
"""
Demonstrates common image analysis tools.
Many of the features demonstrated here are already provided by the ImageView
widget, but here we present a lower-level approach that provides finer control
over the user interface.
"""
import pyqtgraph as pg
from pyqtgraph.Qt import QtCore, QtGui
import numpy as np


# Interpret image data as row-major instead of col-major
pg.setConfigOptions(imageAxisOrder='row-major')

pg.mkQApp()
win = pg.GraphicsLayoutWidget()
win.setWindowTitle('pyqtgraph example: Image Analysis')

# A plot area (ViewBox + axes) for displaying the image
p1 = win.addPlot(title="")

# Item for displaying image data
img = pg.ImageItem()
p1.addItem(img)

# Custom ROI for selecting an image region
roi = pg.ROI([-8, 14], [6, 5])
roi.addScaleHandle([0.5, 1], [0.5, 0.5])
roi.addScaleHandle([0, 0.5], [0.5, 0.5])
p1.addItem(roi)
roi.setZValue(10)  # make sure ROI is drawn above image

# Isocurve drawing
iso = pg.IsocurveItem(level=0.8, pen='g')
iso.setParentItem(img)
iso.setZValue(5)

# Contrast/color control
hist = pg.HistogramLUTItem()
hist.setImageItem(img)
win.addItem(hist)

# Draggable line for setting isocurve level
isoLine = pg.InfiniteLine(angle=0, movable=True, pen='g')
hist.vb.addItem(isoLine)
hist.vb.setMouseEnabled(y=False) # makes user interaction a little easier
isoLine.setValue(0.8)
isoLine.setZValue(1000) # bring iso line above contrast controls

# Another plot area for displaying ROI data
win.nextRow()
p2 = win.addPlot(colspan=2)
p2.setMaximumHeight(250)
win.resize(800, 800)
win.show()


# Generate image data
data = np.random.normal(size=(200, 100))
data[20:80, 20:80] += 2.
data = pg.gaussianFilter(data, (3, 3))
data += np.random.normal(size=(200, 100)) * 0.1
img.setImage(data)
hist.setLevels(data.min(), data.max())

# build isocurves from smoothed data
iso.setData(pg.gaussianFilter(data, (2, 2)))

# set position and scale of image
img.scale(0.2, 0.2)
img.translate(-50, 0)

# zoom to fit imageo
p1.autoRange()  


# Callbacks for handling user interaction
def updatePlot():
    global img, roi, data, p2
    selected = roi.getArrayRegion(data, img)
    p2.plot(selected.mean(axis=0), clear=True)

roi.sigRegionChanged.connect(updatePlot)
updatePlot()

def updateIsocurve():
    global isoLine, iso
    iso.setLevel(isoLine.value())

isoLine.sigDragged.connect(updateIsocurve)

def imageHoverEvent(event):
    """Show the position, pixel, and value under the mouse cursor.
    """
    if event.isExit():
        p1.setTitle("")
        return
    pos = event.pos()
    i, j = pos.y(), pos.x()
    i = int(np.clip(i, 0, data.shape[0] - 1))
    j = int(np.clip(j, 0, data.shape[1] - 1))
    val = data[i, j]
    ppos = img.mapToParent(pos)
    x, y = ppos.x(), ppos.y()
    p1.setTitle("pos: (%0.1f, %0.1f)  pixel: (%d, %d)  value: %g" % (x, y, i, j, val))

# Monkey-patch the image to use our custom hover function. 
# This is generally discouraged (you should subclass ImageItem instead),
# but it works for a very simple use like this. 
img.hoverEvent = imageHoverEvent


## Start Qt event loop unless running in interactive mode or using pyside.
if __name__ == '__main__':
    import sys
    if (sys.flags.interactive != 1) or not hasattr(QtCore, 'PYQT_VERSION'):
        QtGui.QApplication.instance().exec_()
```

- Run the example:

```sh
python3 test.py
```

- Es posible que experimentes que el Mouse se bloquee con el script de PyQtGraph, puedes simplemente deshabilitar el escritorio de raspberry pi usando `sudo raspi-config` -> `Boot options` -> `Desktop/CLI` -> `Console Autologin`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/raspi.png"/></div>

¡Ahora cuando ejecutes el script de PyQtGraph, funcionará perfectamente!

<div align="center"><img width = "600" src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

Puedes ejecutar diferentes scripts de PyQtGraph en diferentes pantallas como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/4qt.jpg"/></div>

## SDK de Usermod

Este controlador de pantalla USB también funciona en tu PC. Por favor revisa **[esta wiki](https://wiki.seeedstudio.com/es/Wio-Terminal-HMI-Usermode-SDK/)** para más información.

## Desarrollo Adicional

¿Necesitas una pantalla más grande? ¿Necesitas una resolución más alta? ¿Mayor frecuencia de actualización? Por favor contacta a produce@seeed.cc para más información.

## Recursos

- [Documentos oficiales de PyQtGraph](https://pyqtgraph.readthedocs.io/en/latest/)
- [Documento de configuración xorg.conf de pantalla](https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml)

## FAQ

**P.** Cuando conecto el Wio Terminal a la Raspberry Pi y enciendo la Raspberry Pi, la LCD del Wio Terminal está completamente blanca.

**R.** Mientras el Wio Terminal aún esté conectado a la Raspberry Pi, navega a: `seeed-linux-usbdisp/drivers/linux-driver` y ejecuta el comando: `make & sudo make install`. Después de eso ejecuta: `sudo reboot`

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
