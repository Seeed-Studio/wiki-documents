---
description: Qt para reTerminal com Python
title: Qt para reTerminal com Python
keywords:
  - Edge
  - Aplicação reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-build-UI-using-Qt-for-Python
sku: 102110638, 110070048
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-build-UI-using-Qt-for-Python/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

## Introdução

Este wiki explica como criar sua própria interface de usuário usando Qt para Python no reTerminal. Aqui usamos PySide2 para o desenvolvimento. PySide2 é o módulo oficial de Python do projeto Qt for Python, que fornece acesso ao framework Qt5 completo. Qt for Python permite que você crie interfaces de usuário interativas de uma forma mais amigável! Também é muito flexível de usar e possui uma curva de aprendizado curta.

Seguindo o guia abaixo, você será capaz de criar um aplicativo para controlar os LEDs STA e USR no reTerminal apenas clicando em botões no LCD. Então vamos começar!

## Preparar o Ambiente de Desenvolvimento

### No reTerminal

- **Passo 1.** Acesse o reTerminal usando o **LCD onboard, monitor externo ou SSH** conforme explicado [aqui](https://wiki.seeedstudio.com/pt-br/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) e digite o seguinte em uma janela de terminal

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **Passo 2.** Instale as ferramentas de compilação para instalar o componente **QtQuick.Studio** manualmente

```sh
sudo apt install qt5-qmake
```

**Nota:** Precisamos instalar o QtQuick.Studio manualmente porque os sistemas Debian e Ubuntu padrão não possuem este módulo

- **Passo 3.** Instale o módulo **QtQuick.Studio**

```sh
git clone https://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake
make
sudo make install
```

**Nota:** Como o módulo mais recente do QtQuick.Studio não funciona no Raspberry Pi OS atual, nós o portamos para Debian GNU/Linux 10 (buster)

Podemos ignorar o seguinte erro de prompt.

```txt
Some of the required modules (qtHaveModule(quick)) are not available.
Skipped.
```

Agora terminamos de instalar os pacotes necessários no reTerminal

### No PC Host

- **Passo 1.** Baixe e instale o [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Nota:** Baixe o instalador que seja adequado para o seu sistema operacional

- **Passo 2.** Clique na aba **Extensions** no menu de navegação à esquerda e digite **remote development** na caixa de busca

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **Passo 3.** Selecione **Remote Development** e clique em **Install**

- **Passo 4.** Pressione **F1** no teclado, digite **ssh** e selecione **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **Passo 5.** Digite o seguinte

```sh
pi@192.xxx.xx.xx
```

**Nota:** **pi** é o nome de usuário e **192.xxx.xx.xx** é o endereço IP do reTerminal

- **Passo 6.** Insira a senha para o usuário

Agora você fez login com sucesso no reTerminal usando SSH

- **Passo 7.** Instale a extensão **Python** como no **passo 2** anterior

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Passo 8.** Instale a extensão **Qt for Python**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Passo 9.** Navegue até `File > Open Folder...` e selecione qualquer pasta que você queira abrir

**Nota:** Mais tarde usaremos o Visual Studio Code para criar arquivos dentro do reTerminal e construir nosso projeto

Agora concluímos com sucesso a preparação do ambiente de desenvolvimento

## Construir o Projeto

Em seguida, vamos prosseguir para construir o projeto. O fluxo de trabalho é o seguinte:

1. Projetar a UI em um **software de design gráfico**
2. Criar um arquivo **.qml** e construir a UI com base nas posições dos elementos da UI obtidas do software de design gráfico
3. Criar outro **.qml** para o aplicativo de UI em tela cheia
4. Criar um arquivo **python** e escrever as funções que serão usadas para controlar os LEDs
5. Criar um arquivo **Python** para executar o app
6. Criar um **script** para executar o arquivo python
7. Criar um **atalho na Área de Trabalho** para abrir o app criado clicando duas vezes em um ícone

Os arquivos que precisamos criar são os seguintes:

- LedGui.qml - UI com elementos gráficos
- App.qml - Aplicativo de UI em tela cheia
- ledControl.py - Funções de controle dos LEDs
- main.py - Executar o app
- led_start.sh - Executar o arquivo Python
- led.desktop - Abrir o app

### Projetar a UI

Primeiro precisamos projetar a UI. Para isso, usaremos um software de design gráfico online gratuito chamado **Gravit Designer**

- **Passo 1.** Clique [neste link](https://www.designer.io/) para abrir o Gravit Designer

- **Passo 2.** Clique em **Get Started**, crie uma conta gratuita ou faça login diretamente com Facebook ou Google

- **Passo 3.** Defina o tamanho da tela como **1280 x 720px** e clique em **Create!**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Definimos como 1280x720px porque essa é a resolução do LCD do reTerminal

- **Passo 4.** Selecione a forma **Rectangle**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"/></p>

- **Passo 5.** Desenhe um retângulo para a **barra de título da UI** segurando o botão esquerdo do mouse, arrastando o mouse e soltando

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"/></p>

- **Passo 6.** Desenhe um retângulo para a **barra de título da UI** segurando o botão esquerdo do mouse, arrastando o mouse e soltando

- **Passo 7.** Desenhe as seguintes formas para os **botões da UI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"/></p>

- **Passo 8.** Selecione a forma e, na aba **INSPECTOR**, selecione **Fills**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"/></p>

- **Passo 9.** Clique em uma cor para preencher a forma selecionada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"/></p>

- **Passo 10.** Preencha as formas restantes da seguinte maneira

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"/></p>

- **Passo 11.** Adicione um botão de fechar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"/></p>

- **Passo 12.** Clique na **Text tool**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"/></p>

- **Passo 13.** Coloque um bloco de texto e digite "LED TEST"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"/></p>

- **Passo 14.** Clique no bloco de texto, altere o tamanho e a cor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"/></p>

- **Passo 15.** Repita o mesmo para obter o seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"/></p>

Agora terminamos de projetar a UI

### Construir a UI em qml

Agora vamos transferir o design do Gravit Designer para qml e construir a UI

- **Passo 1.** Conecte-se ao reTerminal usando SSH via Microsoft Visual Code, abra uma pasta conforme mencionado antes.

- **Passo 2.** Clique com o botão direito e selecione **New Folder**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"/></p>

- **Passo 3.** Digite um nome para a pasta e entre na pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"/></p>

- **Passo 4.** Clique com o botão direito na pasta e selecione **New File**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"/></p>

- **Passo 4.** Digite um nome para o arquivo com extensão **.qml** conforme a seguir

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"/></p>

**Nota:** Certifique-se de que a primeira letra seja **maiúscula**

- **Passo 5.** Entre no **arquivo .qml** e copie os seguintes códigos

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

#### Obter localização e tamanho das formas

Dentro do **Gravit Designer**, selecione um bloco de forma e obtenha a **posição e o tamanho** na guia **INSPECTOR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"/></p>

#### Obter localização e tamanho do texto

Dentro do **Gravit Designer**, selecione um bloco de texto e obtenha a **posição e o tamanho** na guia **INSPECTOR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"/></p>

### Criar a interface de usuário em tela cheia

Em seguida, vamos criar a interface de usuário em tela cheia

- **Passo 1.** Abra a pasta Root que criamos antes e crie um novo **arquivo .qml** dentro dessa pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"/></p>

- **Passo 2.** Abra o **arquivo .qml** e copie os seguintes códigos

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

Agora terminamos de criar o aplicativo em tela cheia

### Métodos para controlar os LEDs

Em seguida, criaremos um arquivo Python para obter os métodos para controlar os LEDs no reTerminal

- **Passo 1.** Abra a pasta root que criamos antes e crie um novo arquivo **.py** Python dentro dessa pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"/></p>

- **Passo 2.** Entre no arquivo **.py** e copie os seguintes códigos

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

Agora concluímos o arquivo Python usado para controlar os LEDs

### Preparar arquivo Python para executar o aplicativo

Agora precisamos criar um arquivo Python que possa ser usado para executar o aplicativo que criamos

- **Passo 1.** Abra a pasta Root que criamos antes e crie um novo **arquivo .py** dentro dessa pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"/></p>

- **Passo 2.** Entre no arquivo criado e copie os seguintes códigos

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

### Preparar um script para executar o arquivo Python

- **Passo 1.** Abra a pasta Root que criamos antes e crie um novo **arquivo .sh** dentro dessa pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"/></p>

- **Passo 2.** Abra o arquivo criado e insira o seguinte

```sh
#!/bin/bash
cd $HOME/ledApp
DISPLAY=:0 python3 main.py
```

**Nota:** Aqui **$HOME/ledApp** é o local do arquivo **main.py**

- **Passo 3.** Abra uma janela de terminal dentro do reTerminal e navegue até o diretório raiz do aplicativo

```sh
example:
cd /ledApp
```

- **Passo 4.** Torne o led_start.sh um arquivo executável

```sh
chmod +x led_start.sh
```

### Preparar um arquivo Desktop para lançar o aplicativo

- **Passo 1.** Abra a pasta Root que criamos antes e crie um novo **arquivo .desktop** dentro dessa pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"/></p>

- **Passo 2.** Abra o arquivo criado e insira o seguinte

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/ledApp/led_start.sh
Type=Application
Categories=Application;Development;
```

**Nota:** **Exec** é o local do script que criamos antes

- **Passo 3.** Abra uma janela de terminal dentro do reTerminal e navegue até o diretório raiz do aplicativo

```sh
example:
cd /ledApp
```

- **Passo 4.** Torne o led_start.sh um arquivo executável

```sh
chmod +x led.desktop
```

### Iniciar o aplicativo

- **Passo 1.** Navegue até a **pasta ledApp** usando o LCD do reTerminal

- **Passo 2.** Clique duas vezes no arquivo **LED Test**

Você verá a saída da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

Agora você pode clicar nos botões e verá os LEDs acenderem!

### Depurando o aplicativo

Vamos passar pelo processo de depuração do seu aplicativo durante o desenvolvimento

- **Passo 1.** Faça login no reTerminal via **SSH** usando o **Microsoft Visual Studio Code** como mencionado antes

- **Passo 2.** Faça login no reTerminal via SSH usando um aplicativo SSH como o [MobaXterm](https://mobaxterm.mobatek.net/) com **recurso de servidor X11**

**Nota:** X11 é necessário para encaminhar a tela do reTerminal e exibí-la no PC

- **Passo 3.** Depois de escrever todos os códigos no Microsoft Visual Studio Code para o reTerminal, execute o **arquivo main.py** usando o MobaXterm

```sh
python3 main.py
```

## Teste direto

Siga os passos acima para configurar seu ambiente, copie o código diretamente e execute-o.

```bash
git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI
cd Python_ReTerminalQt5_LED_UI
python3 main.py
```

Por fim, você verá a saída exibida em uma nova janela. Se houver quaisquer erros no código, eles serão exibidos na janela de terminal do MobaXterm.

## Demo bônus

Se você quiser experimentar uma demo mais interessante com Qt para Python, pode conferir [este repositório GitHub](https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[Página da Web]** [Documentação Qt](https://doc.qt.io/qt-5/index.html)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
