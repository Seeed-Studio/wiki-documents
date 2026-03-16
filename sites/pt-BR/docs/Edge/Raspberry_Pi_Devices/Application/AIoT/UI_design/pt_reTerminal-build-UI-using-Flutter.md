---
description: Flutter para reTerminal
title: Flutter para reTerminal
keywords:
  - Borda
  - Aplicativo reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-build-UI-using-Flutter
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-build-UI-using-Flutter/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## Introdução

Este wiki explica como criar sua própria interface de usuário usando Flutter. Flutter é um kit de desenvolvimento de software de interface de usuário de código aberto criado pelo Google. Ele é usado para desenvolver aplicativos multiplataforma para Android, iOS, Linux, Mac, Windows, Google Fuchsia e web a partir de uma única base de código. Isso significa que você pode usar uma linguagem de programação e uma base de código para criar aplicativos diferentes (para iOS, Android e mais).

Para desenvolver com Flutter, você precisa de uma linguagem de programação chamada Dart. Dart é uma linguagem de programação de código aberto, de uso geral, orientada a objetos, com sintaxe de estilo C desenvolvida pelo Google.

Aqui usaremos Flutter para desenvolver um aplicativo no PC e depois executar o aplicativo no reTerminal usando flutter-pi. flutter-pi é um incorporador leve do Flutter Engine para Raspberry Pi que roda sem X. Isso significa que você não precisa inicializar na área de trabalho do Raspberry Pi OS e carregar X11 e LXDE. Você só precisa inicializar na linha de comando e executar seu aplicativo.

Seguindo o guia abaixo, você conseguirá criar um aplicativo para controlar os pinos GPIO no reTerminal apenas clicando em botões no LCD. Então vamos começar!

## Preparar Ambiente de Desenvolvimento

### No reTerminal

Primeiro precisamos instalar o **flutter-pi** no reTerminal.

> Clique [aqui](https://github.com/ardera/flutter-pi) para acessar o repositório GitHub do flutter-pi

- **Passo 1.** Faça login no reTerminal conforme explicado [neste wiki](https://wiki.seeedstudio.com/pt-br/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) e instale os **binários do flutter engine** no reTerminal

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **Passo 2.** Instale cmake, bibliotecas gráficas, de sistema e fontes

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **Passo 3.** Atualize as fontes do sistema

```sh
sudo fc-cache
```

- **Passo 4.** Faça o clone do flutter-pi e entre no diretório clonado

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **Passo 5.** Compile o flutter-pi

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **Passo 6.** Instale o flutter-pi

```sh
sudo make install
```

- **Passo 7.** Abra o raspi-config

```sh
sudo raspi-config
```

- **Passo 8.** Altere para o modo console navegando até `System Options > Boot / Auto Login` e selecione **Console ou Console (Autologin)**

- **Passo 9.** Habilite o driver gráfico V3D navegando até `Advanced Options > GL Driver > GL (Fake KMS)`

- **Passo 10.** Configure a memória da GPU navegando até `Performance Options -> GPU Memory` e insira **64**

- **Passo 11.** Pressione **ESC** no teclado para sair da janela **rasp-config**

- **Passo 12.** Dê ao reTerminal permissão para usar aceleração 3D. (NOTA: risco potencial de segurança. Se você não quiser fazer isso, inicie o flutter-pi usando **sudo** em vez disso.)

```sh
usermod -a -G render pi
```

- **Passo 13.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora terminamos de instalar as ferramentas necessárias no reTerminal

### No PC Host

Em seguida, precisamos preparar nosso PC host para o desenvolvimento. Aqui iremos instalar o **Flutter SDK**, que contém os pacotes necessários para o desenvolvimento com Flutter, o **Android Studio** para edição de código e o **Android Emulator** para executar e testar os códigos.

- **Passo 1.** Baixe e instale o [Flutter SDK](https://flutter.dev/docs/get-started/install) de acordo com o seu sistema operacional

- **Passo 2.** Digite o seguinte em uma janela de terminal para verificar se o Flutter SDK foi instalado com sucesso

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **Passo 3.** Baixe e instale o [Android Studio](https://developer.android.com/studio) de acordo com o seu sistema operacional

- **Passo 4.** Abra o Android Studio e navegue até `Configure > Plugins`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **Passo 5.** Em **Marketplace**, digite **flutter** na caixa de pesquisa e clique em **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **Passo 6.** Clique em **Install** na janela de prompt para instalar também o plugin **Dart**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **Passo 7.** Clique em **Restart IDE** para reiniciar a IDE com os plugins instalados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **Passo 8.** Quando a IDE abrir novamente, navegue até `Configure > AVD Manager`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **Passo 9.** Clique em **Create Virtual Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **Passo 10.** Clique em **New Hardware Profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **Passo 11.** Configure as definições da seguinte forma

  - Device Name: reTerminal
  - Device Type: Phone/ Tablet
  - Screen:

    - Screen size: 5inch
    - Resolution: 1280 x 720
  - Memory: RAM: 2048MB
  - Input: [✓] Has Hardware Buttons (Back/Home/Menu)
  - Supported device states: [✓] Landscape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **Passo 12.** Clique em **Finish** e depois clique em **Next**

- **Passo 13.** Selecione a imagem Android mais recente e clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **Passo 14.** Em **Emulated Performance**, selecione **Hardware - GLES 2.0** para desempenho acelerado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **Passo 15.** Finalmente clique em **Finish**

Agora concluímos com sucesso a preparação do ambiente de desenvolvimento

## Aplicativo Flutter de Lâmpada Inteligente

### Conexões de Hardware

Conectaremos um LED ao GPIO 24 do reTerminal para fins de teste. Depois você pode adicionar um relé e controlar eletrodomésticos usando o GPIO!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**Nota:** É necessário um resistor entre o pino GPIO e o LED, caso contrário o LED queimará.

### Criar e Inicializar o Aplicativo

- **Passo 1.** Abra o Android Studio e clique em **Create New Flutter Project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **Passo 2.** O **caminho do Flutter SDK** será configurado automaticamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Se o caminho do Flutter SDK não estiver listado nesta janela, você pode apontar manualmente para o local do Flutter SDK

- **Passo 3.** Preencha os detalhes do projeto conforme indicado e clique em **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

Agora seu projeto de exemplo será aberto com **main.dart**

### Criar o main.dart (aplicativo principal)

Usaremos o arquivo **main.dart** dentro da pasta **lib** para criar o aplicativo Flutter

Abra o arquivo **main.dart** e copie os códigos a seguir

```dart
//library imports
import 'package:flutter/material.dart';
import 'package:flutter_gpiod/flutter_gpiod.dart';

//entry point for the app
void main() {
  runApp(MyApp());
}

// This is the main application widget.
class MyApp extends StatelessWidget {
  // Function for GPIO control
  void ledState(state) {
    // Retrieve the list of GPIO chips.
    final chips = FlutterGpiod.instance.chips;

    // Retrieve the line with index 24 of the first chip.
    // This is BCM pin 24 for the Raspberry Pi.
    final chip = chips.singleWhere(
          (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );

    final line2 = chip.lines[24];

    // Request BCM 24 as output.
    line2.requestOutput(consumer: "flutter_gpiod test", initialValue: false);
    line2.setValue(state);
    line2.release();
  }

  @override
  Widget build(BuildContext context) {
    // MaterialApp widget
    return MaterialApp(
      // Hide the debug banner at the top right corner
      debugShowCheckedModeBanner: false,
      // Scaffold widget
      home: Scaffold(
        // background color of the app.
        // Here after you type "Colors.", Android Studio will recommend the available colors. 
        // Also you can hover the mouse over to check the different color variations assigned 
        // by numbers enclosed by [ ].
        backgroundColor: Colors.grey[700],
        // AppBar widget
        appBar: AppBar(
          // background color of the appbar
          backgroundColor: Colors.black,
          // center align text inside appbar widget
          title: Center(
            child: Text(
              'LIVING ROOM',
            ),
          ),
        ),
        body: Center(
          // Row widge
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // ON Button function
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('ON');
                  ledState(true);
                },
                // ON Button styling
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              // Google Material Icon of a Light Bulb
              Icon(
                Icons.lightbulb_outline,
                color: Colors.white,
                size: 200,
              ),
              // OFF Button function
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                  print('OFF');
                  ledState(false);
                },
                // OFF Button styling
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[300],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

#### Widgets Flutter Utilizados

Os widgets do Flutter são construídos usando um framework moderno que se inspira no React. A ideia central é que você constrói sua interface de usuário a partir de widgets. Os widgets descrevem como a visualização deve parecer dada sua configuração e estado atuais.

**StatelessWidget:** Stateless widgets são úteis quando a parte da interface de usuário que você está descrevendo não depende de nada além das informações de configuração no próprio objeto e do BuildContext no qual o widget é inflado.

**MaterialApp:** O widget MaterialApp é um widget que encapsula vários widgets que são comumente necessários para aplicativos com Material Design.

**Scaffold:** Um widget Scaffold fornece uma estrutura que implementa o layout visual básico de Material Design do app Flutter. Ele fornece APIs para mostrar drawers, snack bars e bottom sheets

**Appbar:** Appbar é um widget que contém a barra de ferramentas em um aplicativo Flutter.

**Row:** O widget Row é usado para exibir seus filhos em um array horizontal. Usaremos os elementos de UI dentro deste widget

**ElevatedButton:** O widget ElevatedButton consiste em um botão que pode ser pressionado e reagir de forma correspondente

#### Ícones Google Material

Nós usamos um ícone de **lightbuilb** dentro do app a partir dos **Google Material Icons**. Para explorar mais Google Material Icons, siga [este link](https://fonts.google.com/icons), pesquise por um botão, escolha o botão e veja o código Flutter para o botão

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### Instalar a Biblioteca GPIO

Em seguida, vamos prosseguir para instalar a biblioteca de controle GPIO em nosso aplicativo Flutter. Aqui usaremos uma biblioteca GPIO chamada [flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety)

- **Passo 1.** Para instalar a biblioteca GPIO, vá para o arquivo **pubspec.yaml** dentro do seu projeto Flutter e adicione o seguinte em **dependencies:**

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **Passo 2.** Salve o arquivo e clique em **Pub get**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### Testar o App

- **Passo 1.** Abra o arquivo **main.dart**

- **Passo 2.** clique no botão **no device selected** e selecione o dispositivo Android que criamos antes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

Agora você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **Passo 3.** Clique no **play button** para executar o aplicativo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

Agora você verá o seguinte aplicativo em execução no Emulador Android

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### Criar o Aplicativo e Transferir para o reTerminal

Em seguida, vamos criar nosso aplicativo Flutter e transferi-lo para o reTerminal

- **Passo 1.** Abra uma janela de terminal dentro do Android Studio navegando até `View > Tool Windows > Terminal`

- **Passo 2.** Digite o seguinte para preparar a compilação

```sh
flutter clean
```

- **Passo 3.** Compile o projeto

```sh
flutter build bundle
```

- **Passo 4.** Ligue o reTerminal

**Nota:** Você notará que o reTerminal é inicializado em modo de linha de comando

- **Passo 5.** Transfira o projeto compilado para o reTerminal

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## Iniciar o Aplicativo no reTerminal

- **Passo 1.** Digite o seguinte na linha de comando do reTerminal

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

Quando você pressionar os botões **ON** e **OFF**, você notará que o LED conectado ao GPIO 24 começará a reagir de acordo!

Você também pode estender isso adicionando um relé aos pinos GPIO e controlar eletrodomésticos e construir uma solução completa de casa inteligente no reTerminal!

## Demo Bônus

Se você quiser experimentar uma demo mais interessante com Flutter, você pode conferir [este repositório GitHub](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## Recursos

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[Webpage]** [Documentação Oficial do Flutter](https://flutter.dev/docs)
- **[GitHub]** [Código-fonte da Demo Flutter](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
