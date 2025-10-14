---
description: utilizar Embedded Swift para trabajar con XIAO ESP32C6
title: XIAO ESP32C6 con (Embedded) Swift
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png
slug: /es/xiao-esp32-swift
last_update:
  date: 2024-07-12T02:50:00.462Z
  author: Spencer
---
# Guía de Embedded Swift con Seeed Studio XIAO-C6

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png" alt="pir" width={600} height="auto" /></p>

## Introducción

El Seeed Studio XIAO ESP32C6 es una placa de desarrollo potente y versátil construida alrededor del SoC ESP32-C6, que cuenta con procesadores duales **RISC-V** de 32 bits. El procesador de alto rendimiento opera hasta 160 MHz, mientras que el procesador de bajo consumo funciona hasta 20 MHz. Con 512KB SRAM y 4MB Flash, el XIAO ESP32C6 ofrece un espacio de programación significativo, haciéndolo ideal para diversas aplicaciones IoT. Esta placa sobresale en conectividad inalámbrica, soportando Wi-Fi 6 de 2.4 GHz, Bluetooth® 5.3, Zigbee, y Thread (802.15.4), y es nativo de Matter, lo cual es crucial para la interoperabilidad de hogares inteligentes.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

[Swift](https://www.swift.org/) es un lenguaje de programación poderoso e intuitivo desarrollado por Apple Inc. para desarrollar software para iOS, macOS, watchOS, tvOS y más. En [WWDC2024](https://developer.apple.com/wwdc24/), Apple anunció Embedded Swift, un proyecto de código abierto que tiene como objetivo llevar Swift al mundo de los sistemas embebidos e IoT. Permite usar Swift en microcontroladores sin sistema operativo y con recursos mínimos disponibles. Actualmente, los swift-embedded-examples oficiales soportan plataformas de hardware de STM32, Raspberry Pi Pico, Nordic Semiconductor, e incluso RISC-V ESP32 (ESP32C6).

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://user-images.githubusercontent.com/1186214/264192528-ec5673ba-eec5-422a-b28c-8c0a1e814d1c.png" alt="Vision of Embedded Swfit " />

<div style={{ marginTop: '-8px' }}><em>Lenguaje Swift</em></div>

</div>  

<br></br>

Embedded Swift proporciona varias ventajas:

- **Rendimiento y Facilidad de Uso**: Ofrece rendimiento a nivel de C/C++ mientras mantiene la sintaxis y características amigables de Swift ([Swift Forums](https://forums.swift.org/t/accepted-a-vision-for-embedded-swift/68067)).
- **Integración de Bibliotecas y Frameworks**: La capacidad de Swift para enlazarse directamente con bibliotecas de C/C++ permite a los desarrolladores utilizar frameworks existentes sin problemas ([GitHub](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)).
- **Familiaridad del Desarrollador**: Los desarrolladores ya competentes en Swift pueden adoptar rápidamente Embedded Swift para sus proyectos, aprovechando APIs y herramientas familiares ([Swift.org](https://www.swift.org/getting-started/embedded-swift/)).

:::tip Objetivos de Esta Guía

En esta página, vamos a cubrir lo siguiente:

- Cómo configurar el entorno de desarrollo necesario.
- Ejecutar un ejemplo de Blink basado en GPIO.

:::

## Prerrequisitos

Para comenzar con Embedded Swift en el Seeed Studio XIAO-C6, necesitarás las siguientes habilidades y configuración:

- **Seeed Studio XIAO-C6**: El hardware principal para esta guía.
- **Cable USB-C**: Para conectar el XIAO-C6 a tu computadora.
- **Una computadora**: que ejecute *Linux*, *macOS*, o Windows (usando **WSL2**).
- **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/index.html)**: Se requiere la versión 5.2(*recomendada*) para desarrollar con ESP32-C6. Puedes descargarla e instalarla desde el [sitio web de Espressif](https://github.com/espressif/esp-idf).
- **[Swift Toolchain](https://www.swift.org/getting-started/embedded-swift/)**: Asegúrate de que Swift 6.0 esté instalado en tu computadora. Esto se puede obtener del sitio web oficial de Swift o a través del gestor de paquetes de tu sistema operativo.

:::info Guía de Instalación

**Instalación de ESP-IDF:**

- Sigue la página de [Linux y macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/linux-macos-setup.html) para instalar ESP-IDF
- Sigue la [guía de Desarrollo en XIAO usando Espressif ESP-IDF](/es/xiao_idf) para pasos detallados.

**Instalación de Swift Toolchain:**

- Instala el toolchain de Swift `release/6.0` desde el [sitio oficial](https://www.swift.org/install/).

Si prefieres una solución con docker, por favor consulta el [Dockerfile](https://github.com/apple/swift-matter-examples/blob/main/Dockerfile) de `apple/swift-matter-examples/`
:::

Antes de proceder, asegúrate de tener todos los prerrequisitos necesarios para un proceso de configuración y desarrollo sin problemas.

:::caution atención

En esta página, repasaremos la configuración y uso de Embedded Swift en Ubuntu 22.04 Jammy Linux (WSL2).

:::

### Instalar ESP-IDF

```shell
#!/bin/bash
# Update and install required packages
sudo apt-get update
sudo apt-get install -y git wget flex bison gperf python3 python3-pip python3-venv python3.10-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0

# Clone the ESP-IDF repository
cd ~
git clone --recursive https://github.com/espressif/esp-idf.git --jobs 10
cd esp-idf
git checkout v5.2.1; git submodule update --init --recursive

# Run the install script for ESP-IDF
cd ~/esp-idf && ./install.sh

# Set up alias for ESP-IDF environment
echo 'alias get_idf=". ~/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc

echo "Installation complete. Use 'get_idf' to set up the ESP-IDF environment."
```

### Instalar Swift 6.0

puedes ejecutar directamente este script para instalar swift 6.0.

```shell
#!/bin/bash
# Download the Swift 6.0 Snapshot
wget https://download.swift.org/swift-6.0-branch/ubuntu2204/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# Extract the Tarball
tar -xvzf swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

sudo mv swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04 $HOME/swift-6.0

# Update PATH
echo 'export PATH=$HOME/swift-6.0/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Verify Installation
swift --version

echo "Swift 6.0 installation complete."
```

## Ejecuta tu primer programa Blink con Swift

### Paso 1. Obtén el ejemplo

```shell showLineNumbers
get_idf #get idf enviorment
cd ~ && git clone https://github.com/apple/swift-embedded-examples.git #get GitHub repo
cd ~/swift-embedded-examples/esp32-led-blink-sdk
```

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/apple/swift-embedded-examples" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Paso 2. Construir el ejemplo

Como el LED del usuario está conectado al GPIO15, necesitarás modificar el código a `let led = Led(gpioPin: 15)`:

```swift
@_cdecl("app_main")
func app_main() {
    print("Hello from Swift on ESP32-C6!")

    var ledValue: Bool = false
    let blinkDelayMs: UInt32 = 500
    let led = Led(gpioPin: 15)

    while true {
        led.setLed(value: ledValue)
        ledValue.toggle() // Toggle the boolean value
        vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
    }
}
```

Luego podrías compilar el firmware:

```shell
idf.py set-target esp32c6
idf.py build
```

:::info ¿problema?
Si encuentras el problema `/bin/sh: 1: -target: not found`, puedes resolverlo editando el archivo `build.ninja` ubicado en la carpeta build.

Busca la palabra clave `-target` y añade la palabra clave `swiftc` antes de ella, para que se lea `swiftc -target ...`. Este ajuste debería ayudar a resolver el problema.
:::

Ahora podemos tener el firmware en nuestro XIAO C6, una vez que obtengas el mensaje `Project build complete.`

### Paso 3. Flashear el firmware

<details>
<summary>usbipd es necesario si usas WSL2</summary>

Si estás trabajando con WSL2, necesitarás tener [usbipd](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/WSL.md#usbipd) instalado.

Para instalar, usa el Administrador de Paquetes de Windows con el comando:

```shell
winget install usbipd
```

Después de la instalación, comparte el dispositivo USB usando:

```shell
usbipd list #Check BUSID
usbipd bind -b '<BUSID>'
```

Para conectar el dispositivo desde WSL2:

```shell
usbipd attach --wsl --busid=<BUSID>
```

Para ver qué puerto está compartido:

```shell
dmesg | tail
# dmesg | tail -n 100 | sed -n 's/.*\(ttyACM[0-9]*\).*/\1/p'
```

</details>

Asumiendo que tienes `ttyACM0` detectado, el comando sería:

```shell
idf.py -p /dev/ttyACM0 flash monitor
```

*Este comando:*

1. Flashea el firmware al dispositivo conectado a ttyACM0.
2. Inicia el monitoreo de la salida serie del dispositivo, mostrando cualquier declaración de impresión o registros.

### Demostración

<div class="video-container">
<iframe width="407" height="724" src="https://www.youtube.com/embed/byqY2bYfVjA" title="Embedded Swift on XIAO ESP32C6 #Swift #Embedded #ESP32C6 #iot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencia

- [Blog de Embedded Swift](https://www.swift.org/blog/embedded-swift-examples/)
- [Una Visión para Embedded Swift](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)
- [swift-embedded-examples](https://github.com/apple/swift-embedded-examples)
- [esp32-led-blink-sdk - GitHub](https://github.com/apple/swift-embedded-examples/tree/main/esp32-led-blink-sdk)

## Recursos

- [WWDC24: Go small with Embedded Swift - Apple YouTube](https://www.youtube.com/watch?v=LqxbsADqDI4&t)
- [Añade soporte para Matter en tu aplicación de hogar inteligente](https://developer.apple.com/videos/play/wwdc2021/10298)
- [Embedde Swift - Foro de Apple](https://forums.swift.org/c/development/embedded/107)
- [Use C, C++ and Objective C Libraries in a Swift Project - Cecilia Humlelu - YouTube](https://www.youtube.com/watch?v=jcNxtM_yTfk)
- [Mezclando Swift y C++](https://www.swift.org/documentation/cxx-interop/)
- [awesome-embedded-swift](https://github.com/Cosmo/awesome-embedded-swift)

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
