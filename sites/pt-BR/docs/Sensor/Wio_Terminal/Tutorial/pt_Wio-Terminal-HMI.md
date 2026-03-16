---
description: Construa um display IHM para Raspberry Pi usando Wio Terminal
title: Construa um display IHM para Raspberry Pi
keywords:
  - Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-HMI
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-08-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-HMI/
---

# Construa um display IHM para Raspberry Pi usando Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif"/></div>

Neste wiki, vamos apresentar como usar o [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como um **display USB de IHM (Interface Homem‑Máquina)** para [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html), [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html), [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) e até mesmo [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)! Isso transforma o Wio Terminal em um display USB de IHM, o que o torna muito mais poderoso e pode ser usado em mais cenários industriais!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

Ele pode suportar **múltiplos Wio Terminals conectados ao dispositivo host**. Em teoria, você pode conectar quantos quiser, desde que tenha portas USB suficientes! No Raspberry Pi, ele pode suportar até 4 Wio Terminals (o RPI tem 4 portas USB) conectados atuando como displays de IHM em **modo Estendido** assim como em **Modo Espelho**; confira o que segue para mais informações!

## Hardware Necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html) / [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) / [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) / [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)

## Firmware do Wio Terminal

Primeiro, você precisará enviar um programa Arduino para o seu Wio Terminal via PC.

- Baixe a biblioteca [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) aqui.

Existem dois **exemplos**, `NullFunctional` e `USBDisplayAndMouseControl`:

1. Se você quiser **taxa de atualização de tela mais alta no Wio Terminal**, envie **`NullFunctional`** para o Wio Terminal.
2. Se você quiser que o **Wio Terminal também atue como um mouse USB**, envie **`USBDisplayAndMouseControl`** para o Wio Terminal.

### Método `uf2`

Para conveniência, também fornecemos métodos `uf2` para enviar o firmware do Wio Terminal. Simplesmente baixe os arquivos `uf2` abaixo.

- Baixe os arquivos `uf2` [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/NullFunctional.uf2).

- Baixe os arquivos `uf2` [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/USBDisplayAndMouseControl.uf2).

Entre no modo bootloader deslizando o botão de energia duas vezes rapidamente. Para mais referências, consulte também [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#faq).

Uma unidade externa chamada `Arduino` deve aparecer no seu PC. Arraste os arquivos uf2 baixados para a unidade `Arduino`.

## Firmware do Dispositivo Host

Agora vamos configurar o driver de display no dispositivo host, que pode ser Raspberry Pi, Jetson Nano ou até Odyssey X86J4105:

### Raspberry Pi

Para Raspberry Pi, você primeiro precisa baixar as informações de pacotes de todas as fontes configuradas:

```sh
sudo apt-get update
```

- Instale os pacotes necessários, como **kernel headers, kernels, build-essential, dkms**, executando o seguinte comando no terminal:

```sh
sudo apt-get install raspberrypi-kernel-headers raspberrypi-kernel build-essential dkms
```

- Reinicie o Raspberry Pi:

```sh
sudo reboot
```

- Baixe o driver de display no Raspberry Pi:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- Compile e construa o driver:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- Mova os **arquivos de configuração para o local do sistema**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

!!!Note
        Existem diferentes configurações de tela que você pode escolher; o padrão é um Wio Terminal como uma tela.

- Reinicie o serviço:

```sh
sudo service lightdm restart
```

- Execute o seguinte comando no terminal para configuração de display:

```sh
sudo raspi-config
```

- Quando a Raspberry Pi Software Configuration Tool abrir, navegue até o seguinte local:

```sh
Display Options > Resolution
```

- Selecione uma resolução diferente de "default"

```sh
Ex: DMT Mode 82 1920x1080 60Hz 16:9  
```

- Desligue o Raspberry Pi:

```sh
sudo poweroff
```

- Conecte o Wio Terminal à porta USB do Raspberry Pi

- Ligue o Raspberry Pi

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-new.png"/></div>

Agora você deve ver o seu Wio Terminal exibindo a área de trabalho do Raspberry Pi! Se você carregou o firmware `USBDisplayAndMouseControl` no Wio Terminal, você pode até usar os botões e os seletores de 5 direções para controlar o mouse do Raspberry Pi!


!!!Note
    Esta versão do driver de display USB não suporta hot swapping.

### Jetson Nano, Beaglebone e Odyssey X86

Para Nvidia Jetson Nano e Odyssey X86J4105 (Ubuntu), instale o **driver linux** como a seguir, executando o seguinte no terminal:

**Nota:** Para Odyssey X86J4105, nós somente testamos ubuntu e debian OS. Outros sistemas Linux podem não funcionar.

```sh
sudo apt install --reinstall linux-headers-$(uname -r)
```

- Baixe o driver de display:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- Compile e construa o driver:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- Mova os **arquivos de configuração para o local do sistema**:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

- Reinicie o serviço:

```sh
sudo service lightdm restart
```

- Conecte o Wio Terminal à porta USB do dispositivo!

## Configurações de Exibição da Tela

Como mencionado, você pode ter **múltiplos** Wio Terminals conectados a um Raspberry Pi e, portanto, pode organizar a configuração de tela (posições das telas) editando o arquivo `10-disp.conf`. Fornecemos 3 outras configurações de expansão de tela, conforme a seguir.

### Configuração de tela 1

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-1-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  
#        : 3  4
```

Este é o `10-disp-1.conf` em `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`; simplesmente copie este arquivo para `/usr/share/X11/xorg.conf.d/` e nomeie-o como `10-disp.conf`:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp-1.conf /usr/share/X11/xorg.conf.d/10-disp.conf
```

### Configuração de tela 2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-2-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1
#        : 2  3  4
```

Este é o `10-disp-2.conf` em `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

### Configuração de tela 3

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-3-removebg.png"/></div>

```py
# Four-screen expansion
# pattern: 1  2  3  4
```

Este é o `10-disp-3.conf` em `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

### Configuração de tela 4

Modo Espelho:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-4.png"/></div>


```py
# Four-screen clone display
```

Este é o `10-disp-4.conf` em `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`.

## Exemplo PtQtGraph

Além disso, você pode usar o gráfico [**PyQtGraph**](http://www.pyqtgraph.org/) para simplesmente desenhar sua GUI com o Wio Terminal com facilidade!

- Vamos instalar primeiro as dependências para PyQtGraph:

```sh
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install pyqtgraph
```

- Exporte macros para a tela:

```sh
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1
```

**Nota:** Onde `fb1` é a primeira tela, `fb2` é a segunda, `fb3` `fb3` e assim por diante. Você pode usar `echo $QT_QPA_PLATFORM` para verificar as macros.

- Copie os seguintes arquivos de exemplo em PyQtGraph em python e nomeie-o como `test.py`:

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

- Execute o exemplo:

```sh
python3 test.py
```

- Você pode ter percebido que o Mouse está travando com o script do PyQtGraph; você pode simplesmente desativar a área de trabalho do Raspberry Pi usando `sudo raspi-config` -> `Boot options` -> `Desktop/CLI` -> `Console Autologin`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/raspi.png"/></div>

Agora, quando você executar o script PyQtGraph, ele funcionará perfeitamente!

<div align="center"><img width = "600" src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

Você pode executar diferentes scripts PyQtGraph em diferentes telas, como a seguir:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/4qt.jpg"/></div>

## Usermod SDK

Este driver de display USB também funciona no seu PC. Consulte **[este wiki](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-HMI-Usermode-SDK/)** para mais informações.

## Desenvolvimento Futuro

Precisa de uma tela maior? Precisa de uma resolução mais alta? Taxa de atualização mais alta? Entre em contato com produce@seeed.cc para mais informações.

## Recursos

- [Documentação oficial do PyQtGraph](https://pyqtgraph.readthedocs.io/en/latest/)
- [Documento de configuração de tela xorg.conf](https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml)

## FAQ

**P.** Quando conecto o Wio Terminal ao Raspberry Pi e ligo o Raspberry Pi, o LCD do Wio Terminal fica completamente branco.

**R.** Enquanto o Wio Terminal ainda estiver conectado ao Raspberry Pi, navegue até: `seeed-linux-usbdisp/drivers/linux-driver` e execute o comando: `make & sudo make install`. Depois disso, execute: `sudo reboot`


## Suporte Técnico & Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
