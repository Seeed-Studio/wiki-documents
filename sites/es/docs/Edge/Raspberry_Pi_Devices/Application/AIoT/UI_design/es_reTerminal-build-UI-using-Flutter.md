---
description: Flutter para reTerminal
title: Flutter para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-Flutter
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## Introducción

Este wiki explica cómo construir tu propia interfaz de usuario usando Flutter. Flutter es un kit de desarrollo de software de interfaz de usuario de código abierto creado por Google. Se utiliza para desarrollar aplicaciones multiplataforma para Android, iOS, Linux, Mac, Windows, Google Fuchsia y la web desde una sola base de código. Esto significa que puedes usar un lenguaje de programación y una base de código para crear dos aplicaciones diferentes (para iOS, Android y más).

Para desarrollar con Flutter, necesitas un lenguaje de programación llamado Dart. Dart es un lenguaje de programación de código abierto, de propósito general, orientado a objetos con sintaxis estilo C desarrollado por Google.

Aquí usaremos Flutter para desarrollar una aplicación en la PC y luego ejecutar la aplicación en reTerminal usando flutter-pi. flutter-pi es un Embedder ligero del Motor de Flutter para Raspberry Pi que se ejecuta sin X. Eso significa que no necesitas arrancar en el Escritorio de Raspberry Pi OS y tener X11 y LXDE cargándose. Solo necesitas arrancar en la línea de comandos y ejecutar tu aplicación.

Siguiendo la guía a continuación, podrás crear una aplicación para controlar los pines GPIO en el reTerminal simplemente haciendo clic en botones en la LCD. ¡Así que comencemos!

## Preparar el Entorno de Desarrollo

### En reTerminal

Primero necesitamos instalar **flutter-pi** en el reTerminal.

> Haz clic [aquí](https://github.com/ardera/flutter-pi) para acceder al repositorio de GitHub de flutter-pi

- **Paso 1.** Inicia sesión en reTerminal como se explica en [este wiki](https://wiki.seeedstudio.com/es/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) e instala los **binarios del motor de flutter** en el reTerminal

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **Paso 2.** Instalar cmake, gráficos, bibliotecas del sistema y fuentes

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **Paso 3.** Actualizar las fuentes del sistema

```sh
sudo fc-cache
```

- **Paso 4.** Clona flutter-pi y navega al directorio clonado

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **Paso 5.** Compilar flutter-pi

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **Paso 6.** Instalar flutter-pi

```sh
sudo make install
```

- **Paso 7.** Abrir raspi-config

```sh
sudo raspi-config
```

- **Paso 8.** Cambia al modo consola navegando a `System Options > Boot / Auto Login` y selecciona **Console o Console (Autologin)**

- **Paso 9.** Habilita el controlador de gráficos V3D navegando a `Advanced Options > GL Driver > GL (Fake KMS)`

- **Paso 10.** Configura la memoria de la GPU navegando a `Performance Options -> GPU Memory` e ingresa **64**

- **Paso 11.** Presiona **ESC** en el teclado para salir de la ventana **rasp-config**

- **Paso 12.** Dale al reTerminal permiso para usar aceleración 3D. (NOTA: riesgo potencial de seguridad. Si no quieres hacer esto, ejecuta flutter-pi usando **sudo** en su lugar.)

```sh
usermod -a -G render pi
```

- **Paso 13.** Reinicia reTerminal

```sh
sudo reboot
```

Ahora hemos terminado de instalar las herramientas necesarias en el reTerminal

### En la PC Host

A continuación necesitamos preparar nuestra PC host para el desarrollo. Aquí instalaremos **Flutter SDK** que contiene los paquetes necesarios para el desarrollo de Flutter, **Android Studio** para la edición de código y **Android Emulator** para ejecutar y probar los códigos.

- **Paso 1.** Descarga e instala [Flutter SDK](https://flutter.dev/docs/get-started/install) según tu sistema operativo

- **Paso 2.** Escribe lo siguiente en una ventana de terminal para verificar si Flutter SDK se instaló correctamente

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Descarga e instala [Android Studio](https://developer.android.com/studio) según tu sistema operativo

- **Paso 4.** Abre Android Studio y navega a `Configure > Plugins`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** En **Marketplace**, escribe **flutter** en el cuadro de búsqueda y haz clic en **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **Paso 6.** Haz clic en **Install** en la ventana emergente para instalar también el plugin de **Dart**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **Paso 7.** Haz clic en **Restart IDE** para reiniciar el IDE con los plugins instalados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **Paso 8.** Una vez que el IDE se abra nuevamente, navega a `Configure > AVD Manager`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **Paso 9.** Haz clic en **Create Virtual Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **Paso 10.** Haz clic en **New Hardware Profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **Paso 11.** Configura los ajustes de la siguiente manera

  - Device Name: reTerminal
  - Device Type: Phone/ Tablet
  - Screen:

    - Screen size: 5inch
    - Resolution: 1280 x 720
  - Memory: RAM: 2048MB
  - Input: [✓] Has Hardware Buttons (Back/Home/Menu)
  - Supported device states: [✓] Landscape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **Paso 12.** Haz clic en **Finish** y luego haz clic en **Next**

- **Paso 13.** Selecciona la imagen de Android más reciente y haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **Paso 14.** En **Emulated Performance**, selecciona **Hardware - GLES 2.0** para un rendimiento acelerado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **Paso 15.** Finalmente haz clic en **Finish**

Ahora hemos terminado exitosamente de preparar el entorno de desarrollo

## Aplicación de Lámpara Inteligente Flutter

### Conexiones de Hardware

Conectaremos un LED al GPIO 24 del reTerminal para propósitos de prueba. ¡Más tarde puedes agregar un relé y controlar electrodomésticos usando el GPIO!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Se necesita una resistencia entre el pin GPIO y el LED o de lo contrario el LED se quemará.

### Crear e Inicializar la Aplicación

- **Paso 1.** Abre Android Studio y haz clic en **Create New Flutter Project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **Paso 2.** La **ruta del SDK de Flutter** se configurará automáticamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Si la ruta del SDK de Flutter no aparece en esta ventana, puedes apuntar manualmente a la ubicación del SDK de Flutter

- **Paso 3.** Completa los detalles del proyecto de la siguiente manera y haz clic en **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

Ahora tu proyecto de ejemplo se abrirá con **main.dart**

### Crear el main.dart (aplicación principal)

Usaremos el archivo **main.dart** dentro de la carpeta **lib** para crear la aplicación Flutter

Abre el archivo **main.dart** y copia los siguientes códigos

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

#### Widgets de Flutter Utilizados

Los widgets de Flutter se construyen utilizando un framework moderno que se inspira en React. La idea central es que construyes tu interfaz de usuario a partir de widgets. Los widgets describen cómo debería verse su vista dada su configuración y estado actuales.

**StatelessWidget:** Los widgets sin estado son útiles cuando la parte de la interfaz de usuario que estás describiendo no depende de nada más que la información de configuración en el objeto mismo y el BuildContext en el que se infla el widget.

**MaterialApp:** El widget MaterialApp es un widget que envuelve una serie de widgets que son comúnmente requeridos para aplicaciones de diseño material.

**Scaffold:** Un Widget Scaffold proporciona un framework que implementa la estructura básica de diseño visual de material design de la aplicación flutter. Proporciona APIs para mostrar cajones, barras de snack y hojas inferiores

**Appbar:** Appbar es un widget que contiene la barra de herramientas en la aplicación flutter.

**Row:** El widget Row se utiliza para mostrar sus hijos en un arreglo horizontal. Utilizaremos los elementos de UI dentro de este widget

**ElevatedButton:** El widget ElevatedButton consiste en un botón que puede ser usado para presionar y reaccionar en consecuencia

#### Iconos de Google Material

Hemos usado un icono de **bombilla** dentro de la aplicación de **Google Material Icons**. Para profundizar en más Iconos de Google Material, sigue [este enlace](https://fonts.google.com/icons), busca un botón, elige el botón y ve el código flutter para el botón

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### Instalar la Librería GPIO

A continuación procederemos a instalar la librería de control GPIO en nuestra aplicación Flutter. Aquí utilizaremos una librería GPIO llamada [flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety)

- **Paso 1.** Para instalar la librería GPIO, ve al archivo **pubspec.yaml** dentro de tu proyecto Flutter y añade lo siguiente bajo **dependencies:**

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **Paso 2.** Guarda el archivo y haz clic en **Pub get**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### Probar la Aplicación

- **Paso 1.** Abre el archivo **main.dart**

- **Paso 2.** haz clic en el botón **no device selected** y selecciona el Dispositivo Android que creamos anteriormente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

Ahora verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Haz clic en el **botón de reproducir** para ejecutar la aplicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

Ahora verás la siguiente aplicación ejecutándose en el Emulador de Android

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### Compilar la Aplicación y Transferir al reTerminal

A continuación compilaremos nuestra aplicación Flutter y la transferiremos al reTerminal

- **Paso 1.** Abre una ventana de terminal dentro de Android Studio navegando a `View > Tool Windows > Terminal`

- **Paso 2.** Escribe lo siguiente para preparar la compilación

```sh
flutter clean
```

- **Paso 3.** Construir el proyecto

```sh
flutter build bundle
```

- **Paso 4.** Enciende el reTerminal

**Nota:** Notarás que el reTerminal arranca en modo línea de comandos

- **Paso 5.** Transfiere el proyecto compilado al reTerminal

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## Ejecutar la Aplicación en reTerminal

- **Paso 1.** Escribe lo siguiente en la línea de comandos de reTerminal

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

Cuando presiones los botones **ON** y **OFF**, notarás que el LED que está conectado al GPIO 24 comenzará a reaccionar en consecuencia!

También puedes extender esto agregando un relé a los pines GPIO y controlar electrodomésticos para construir una solución completa de hogar inteligente en el reTerminal!

## Demo Adicional

Si quieres experimentar una demostración más interesante con Flutter, puedes revisar [este repositorio de GitHub](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## Recursos

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[Página Web]** [Documentación Oficial de Flutter](https://flutter.dev/docs)
- **[GitHub]** [Código Fuente del Demo de Flutter](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

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
