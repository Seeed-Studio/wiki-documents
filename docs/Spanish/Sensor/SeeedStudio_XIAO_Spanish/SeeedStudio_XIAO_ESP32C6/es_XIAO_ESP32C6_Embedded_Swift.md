---
description: utilize Embedded swift to work with XIAO ESP32C6
title: XIAO ESP32C6 con Swift (Embebido)
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png
slug: /es/xiao-esp32-swift
last_update:
  date: 02/08/2025
  author: Guillermo
---
# Guía para Swift embebido con XIAO-C6 de Seeed Studio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png" alt="pir" width={600} height="auto" /></p>

## Introducción  

La Seeed Studio XIAO ESP32C6 es una potente y versátil placa de desarrollo basada en el SoC ESP32-C6, que cuenta con dos procesadores **RISC-V** de 32 bits. El procesador de alto rendimiento opera hasta 160 MHz, mientras que el de bajo consumo funciona hasta 20 MHz. Con 512 KB de SRAM y 4 MB de Flash, la XIAO ESP32C6 ofrece un amplio espacio de programación, lo que la hace ideal para diversas aplicaciones de IoT. Esta placa sobresale en conectividad inalámbrica, ya que admite Wi-Fi 6 de 2.4 GHz, Bluetooth® 5.3, Zigbee y Thread (802.15.4), además de ser compatible de forma nativa con Matter, lo que es fundamental para la interoperabilidad en hogares inteligentes.

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
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

[Swift](https://www.swift.org/) es un lenguaje de programación potente e intuitivo desarrollado por Apple Inc. para crear software en iOS, macOS, watchOS, tvOS y más. En la [WWDC2024](https://developer.apple.com/wwdc24/), Apple anunció Embedded Swift, un proyecto de código abierto que busca llevar Swift al mundo de los sistemas embebidos y el IoT. Esto permite usar Swift en microcontroladores sin sistema operativo y con recursos mínimos disponibles. Actualmente, los ejemplos oficiales de swift-embedded-examples son compatibles con plataformas de hardware como STM32, Raspberry Pi Pico, Nordic Semiconductor e incluso RISC-V ESP32 (ESP32C6).

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://user-images.githubusercontent.com/1186214/264192528-ec5673ba-eec5-422a-b28c-8c0a1e814d1c.png" alt="Vision of Embedded Swfit " />

<div style={{ marginTop: '-8px' }}><em>Swift Language</em></div>

</div>  

<br></br>

Embedded Swift ofrece varias ventajas:  

- **Rendimiento y facilidad de uso**: Proporciona un rendimiento similar al de C/C++, manteniendo la sintaxis intuitiva y las características avanzadas de Swift ([Swift Forums](https://forums.swift.org/t/accepted-a-vision-for-embedded-swift/68067)).  
- **Integración con bibliotecas y frameworks**: La capacidad de Swift para vincularse directamente con bibliotecas C/C++ permite a los desarrolladores utilizar frameworks existentes sin problemas ([GitHub](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)).  
- **Familiaridad para desarrolladores**: Aquellos con experiencia en Swift pueden adoptar Embedded Swift rápidamente en sus proyectos, aprovechando APIs y herramientas conocidas ([Swift.org](https://www.swift.org/getting-started/embedded-swift/)).

:::tip ### Objetivos de esta guía  

En esta página, cubriremos lo siguiente:  

- Cómo configurar el entorno de desarrollo necesario.  
- Ejecución de un ejemplo de parpadeo (Blink) basado en GPIO.

:::

## Requisitos previos  

Para comenzar con Embedded Swift en la Seeed Studio XIAO-C6, necesitarás los siguientes conocimientos y configuraciones:  

- **Seeed Studio XIAO-C6**: El hardware principal para esta guía.  
- **Cable USB-C**: Para conectar la XIAO-C6 a tu computadora.  
- **Una computadora**: Que ejecute *Linux*, *macOS* o *Windows* (usando **WSL2**).  
- **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/index.html)**: Se requiere la versión 5.2 (*recomendada*) para el desarrollo con ESP32-C6. Puedes descargar e instalarla desde el [sitio web de Espressif](https://github.com/espressif/esp-idf).  
- **[Swift Toolchain](https://www.swift.org/getting-started/embedded-swift/)**: Asegúrate de que Swift 6.0 esté instalado en tu computadora. Puedes obtenerlo desde el sitio web oficial de Swift o a través del gestor de paquetes de tu sistema operativo.

:::info ## Guía de instalación  

### **Instalación de ESP-IDF:**  

- Sigue la guía para [Linux y macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/linux-macos-setup.html) para instalar ESP-IDF.  
- Consulta la guía [Desarrollo en XIAO con Espressif ESP-IDF](/xiao_idf) para pasos detallados.  

### **Instalación de Swift Toolchain:**  

- Instala la versión `release/6.0` de Swift Toolchain desde el [sitio oficial](https://www.swift.org/install/).  

Si prefieres una solución basada en Docker, revisa el [Dockerfile](https://github.com/apple/swift-matter-examples/blob/main/Dockerfile) del repositorio `apple/swift-matter-examples/`.
:::

Antes de continuar, asegúrate de tener todos los requisitos previos necesarios para una configuración y desarrollo sin problemas.

:::caution attention

En esta página, revisaremos la configuración y el uso de Embedded Swift en Ubuntu 22.04 Jammy Linux (WSL2).

:::

### Instalar ESP-IDF

```shell
#!/bin/bash
# Actualiza e instala los paquetes requeridos
sudo apt-get update
sudo apt-get install -y git wget flex bison gperf python3 python3-pip python3-venv python3.10-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0

# Clona el repositorio de ESP-IDF
cd ~
git clone --recursive https://github.com/espressif/esp-idf.git --jobs 10
cd esp-idf
git checkout v5.2.1; git submodule update --init --recursive

# Ejecuta el script de instalación de ESP-IDF
cd ~/esp-idf && ./install.sh

# Configura un alias para el entorno de ESP-IDF
echo 'alias get_idf=". ~/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc

echo "Installation complete. Use 'get_idf' to set up the ESP-IDF environment."
```

### Instalar Swift 6.0

Puedes correr directamente este srcipt para instala swift 6.0

```shell
#!/bin/bash
# Descarga la versión preliminar de Swift 6.0
wget https://download.swift.org/swift-6.0-branch/ubuntu2204/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# Extrae el archivo tar.gz
tar -xvzf swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# Mueve la carpeta de Swift al directorio de inicio
sudo mv swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04 $HOME/swift-6.0

# Actualiza la variable PATH
echo 'export PATH=$HOME/swift-6.0/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Verifica la instalación
swift --version

echo "Installation complete. Use 'get_idf' to set up the ESP-IDF environment."
```

## Ejecuta tu primer programa Blink con Swift

### Paso 1. Obtén el ejemplo

```shell showLineNumbers
get_idf #get idf enviorment
cd ~ && git clone https://github.com/apple/swift-embedded-examples.git #get GitHub repo
cd ~/swift-embedded-examples/esp32-led-blink-sdk
```

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/apple/swift-embedded-examples">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub Repository</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Paso 2. Compila el ejemplo

Como el LED de usuario está conectado al GPIO15, necesitarás modificar el código a `let led = Led(gpioPin: 15)`  

```swift
@_cdecl("app_main")
func app_main() {
    print("Hello from Swift on ESP32-C6!")

    var ledValue: Bool = false
    let blinkDelayMs: UInt32 = 500
    let led = Led(gpioPin: 15)

    while true {
        led.setLed(value: ledValue)
        ledValue.toggle() // Cambia el valor booleano.
        vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
    }
}
```

Luego puedes construir el firmware:

```shell
idf.py set-target esp32c6
idf.py build
```

:::info issue?
Si encuentras el problema `/bin/sh: 1: -target: no encontrado`, puedes resolverlo editando el archivo `build.ninja` ubicado en la carpeta de compilación.

Busca la palabra clave `-target` y agrega la palabra clave `swiftc` antes de ella, de modo que se lea `swiftc -target ...`. Este ajuste debería ayudar a resolver el problema.
:::

Now we can have the firmware into out XIAO C6, once you got prompt `Project build complete.`

### Paso 3. Flashear el firmware

<details><summary>usbipd es necesario si usas WSL2</summary>

Si estás trabajando con WSL2, necesitarás tener instalado [usbipd](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/WSL.md#usbipd).

Para instalarlo, usa el Windows Package Manager con el siguiente comando:

```shell
winget install usbipd
```

After installation, share the USB device using:
```shell
usbipd list #Revisar BUSID
usbipd bind -b '<BUSID>'
```

Para conectar el dispositivo WSL2 desde adentro:
```shell
usbipd attach --wsl --busid=<BUSID>
```

Para ver qué puerto se comparte:
```shell
dmesg | tail
# dmesg | tail -n 100 | sed -n 's/.*\(ttyACM[0-9]*\).*/\1/p'
```
</details>

Suponiendo que haya detactado `ttyacm0`, el comando sería:

```shell
idf.py -p /dev/ttyACM0 flash monitor
```

*Este comando va a:*
1. Flashear el firmware al dispositivo conectado a ttyACM0.
2. Comience a monitorear la salida en serie desde el dispositivo, mostrando cualquier declaración de print o registro.

### Demostración

<center>
<iframe width="407" height="724" src="https://www.youtube.com/embed/byqY2bYfVjA" title="Embedded Swift on XIAO ESP32C6 #Swift #Embedded #ESP32C6 #iot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

## Referencias

- [Blog de Embedded Swift](https://www.swift.org/blog/embedded-swift-examples/)
- [Una visión para Embedded Swift](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)
- [swift-embedded-examples](https://github.com/apple/swift-embedded-examples)
- [esp32-led-blink-sdk - GitHub](https://github.com/apple/swift-embedded-examples/tree/main/esp32-led-blink-sdk)

## Recursos

- [WWDC24: Go small with Embedded Swift - Apple YouTube](https://www.youtube.com/watch?v=LqxbsADqDI4&t)
- [Agregar soporte para Matter en tu aplicación de hogar inteligente](https://developer.apple.com/videos/play/wwdc2021/10298)
- [Embedded Swift - Apple Forum](https://forums.swift.org/c/development/embedded/107)
- [Usar bibliotecas C, C++ y Objective C en un proyecto Swift - Cecilia Humlelu - YouTube](https://www.youtube.com/watch?v=jcNxtM_yTfk)
- [Mezclando Swift y C++](https://www.swift.org/documentation/cxx-interop/)
- [awesome-embedded-swift](https://github.com/Cosmo/awesome-embedded-swift)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

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