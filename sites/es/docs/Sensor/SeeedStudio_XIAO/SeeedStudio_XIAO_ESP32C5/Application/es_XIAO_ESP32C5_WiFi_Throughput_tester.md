---
title: Herramienta de Prueba de Rendimiento Wi-Fi del Seeed Studio XIAO ESP32-C5
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xaio_esp32c5_wifi_throughput_tester
last_update:
  date: 1/16/2026
  author: Zeller
createdAt: '2026-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/xaio_esp32c5_wifi_throughput_tester/
---


El Seeed Studio XIAO ESP32-C5 cuenta con el ESP32-C5 como su procesador principal. El ESP32-C5 es el primer microcontrolador RISC-V de la industria que soporta Wi-Fi 6 de banda dual (802.11ax) tanto en las bandas de 2.4GHz como de 5GHz. Con un rendimiento inalámbrico excepcional, tiene un potencial significativo para aplicaciones en hogares inteligentes, Internet de las Cosas (IoT) y varios otros escenarios.

En el uso práctico, el rendimiento real de datos de Wi-Fi es una de las métricas más importantes para medir la capacidad de transmisión.
A continuación, utilizaremos una herramienta de prueba de rendimiento Wi-Fi para demostrar visualmente las poderosas capacidades de rendimiento de datos del XIAO ESP32-C5 basado en Wi-Fi 6, ¡en ambas bandas de frecuencia de 2.4GHz y 5GHz!

Este wiki será desarrollado usando [ESP-IDF](https://github.com/espressif/esp-idf).

*Referencia*: [Guía de Programación ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/index.html)

## Preparación del Hardware

Necesitarás preparar una placa XIAO ESP32-C5.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Instalación de la Antena

Dentro del empaque del Seeed Studio XIAO ESP32-C5, hay un **conector de antena Wi-Fi/BT** dedicado. Para obtener una intensidad de señal WiFi/Bluetooth óptima, necesitas sacar la antena incluida en el paquete y conectarla al conector.<br/>
:::tip
Si quieres lograr un efecto de ganancia de señal más fuerte, puedes comprar e instalar una **Antena Externa 2.4G/5G con Conector Macho RP-SMA** — ¡ofrece una ganancia mucho mayor que la Antena FPC incorporada incluida en el paquete!
:::
<div class="table-center">
 <table>
  <tr>
   <th>Antena Externa 2.4G/5G con Conector Macho RP-SMA</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparación del Software

### Instalar ESP-IDF

:::tip
Este wiki está desarrollado en un entorno de desarrollo Windows. Para operaciones ESP-IDF en Linux / Mac, consulta [Desarrollado en XIAO usando Espressif ESP-IDF](https://wiki.seeedstudio.com/es/xiao_idf/)
:::

**Para Windows**

**Paso 1.** Haz clic en [ESP32-IDF Tools Installer](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/windows-setup.html#esp-idf-tools-installer)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 2.** Elige una versión apropiada para descargar.

:::tip
El XIAO ESP32-C5 requiere ESP-IDF v5.5 o posterior.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 3.** Instalar

1. En los archivos descargados, localiza `esp-idf-tools-setup-offline-5.5.2.exe` y haz doble clic para iniciar la instalación. Selecciona tu idioma de instalación preferido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_3.png" style={{width:800, height:'auto'}}/></div><br/>

2. Elige I accept the agreement, luego haz clic en Next.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_4.png" style={{width:800, height:'auto'}}/></div><br/>

3. Haz clic en Next.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_5.png" style={{width:800, height:'auto'}}/></div><br/>

4. Elige la ruta de instalación. La instalación requiere una cantidad significativa de espacio de almacenamiento, así que selecciona una ubicación adecuada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_6.png" style={{width:800, height:'auto'}}/></div><br/>

5. Mantén la configuración predeterminada; no se necesitan cambios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_7.png" style={{width:800, height:'auto'}}/></div><br/>

6. Haz clic en Install y espera a que se complete la instalación. Esto puede tomar algún tiempo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_8.png" style={{width:800, height:'auto'}}/></div><br/>

7. Después de que se complete la instalación, los siguientes dos accesos directos se mostrarán en el escritorio de Windows.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_9.png" style={{width:400, height:'auto'}}/></div><br/>

**Para Linux(Ubuntu/Debian) y macOS**

**Paso 1.** Instalar dependencias

```bash
# Linux
sudo apt update && sudo apt install \
    git wget flex bison gperf python3 python3-pip python3-venv \
    cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

```bash
#macOS
brew install git wget cmake ninja dfu-util ccache python3
pip3 install pyserial
```

**Paso 2.** Clonar la versión especificada del repositorio.

```bash
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git -b v5.5.1 esp-idf-v5.5.1
```

**Paso 3.** Instalar la cadena de herramientas

```bash
cd ~/esp/esp-idf-v5.5.1
./install.sh esp32c5
```

**Paso 4.** Agregar variables de entorno

```bash
. $HOME/esp/esp-idf-v5.5.1/export.sh
```

### Instalar iperf

**Para Windows**

**Paso 1.** Haz clic en [iperf](https://sourceforge.net/projects/iperf2/), luego descarga

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 2.** Colócalo en una carpeta adecuada, luego haz clic derecho y abre una terminal allí. Este paso se usará más tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n2.png" style={{width:800, height:'auto'}}/></div><br/>

**Para Linux(Ubuntu/Debian) y macOS**

```bash
# Ubuntu/Debian
sudo apt install iperf

# macOS
brew install iperf
```

### Clonar el proyecto de prueba.

- Clona el proyecto de prueba en la carpeta de tu elección.

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32C5_iperf_test" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
    </div><br />

```bash
git clone https://github.com/limengdu/XIAO-ESP32C5_iperf_test.git
```

**Para Windows**

**Paso 1.** Haz clic en `ESP-IDF 5.5 PowerShell` en el escritorio; luego se realizará una verificación del entorno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n3.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Abrir el proyecto de prueba clonado

```bash
cd C:\User\yourname\XIAO-ESP32C5_iperf_test
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n4.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Establecer el chip objetivo a `esp32c5`

```bash
idf.py --preview set-target esp32c5
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5_1.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Construir el proyecto

```bash
idf.py build
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5.png" style={{width:800, height:'auto'}}/></div>

Construcción completada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n6.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Flashear el código al XIAO ESP32-C5 y abrir el monitor serie

Puedes elegir flashear usando `idf.py flash`; la herramienta de flasheo de IDF detectará automáticamente tu puerto para el flasheo, y también especificar el puerto usando `idf.py -p PORT flash`. En Windows, puedes abrir el Administrador de dispositivos para verificar el puerto.

```bash
 idf.py flash monitor
or
 idf.py -p PORT flash monitor
or
```

Especifica el puerto para el flasheo (El número de puerto específico depende del puerto de tu dispositivo.)

```bash
idf.py -p COM69 flash monitor
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n7.png" style={{width:800, height:'auto'}}/></div><br/>

Después del flasheo exitoso, la terminal mostrará el prompt **`iperf>`**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Si el prompt `iperf>` no aparece, por favor apaga el XIAO ESP32-C5 y luego presiona el botón Reset integrado para despertarlo y reconectarlo.
:::

**Para Linux(Ubuntu/Debian) & macOS**

```bash
# Navigate to the project directory
cd esp32c5_iperf_test

# Set the target chip
idf.py --preview set-target esp32c5

# Compile the project
idf.py build

# Flash the firmware and open the serial monitor
idf.py flash monitor
```

## Prueba de rendimiento de datos Wi-Fi

Probaremos el rendimiento de datos Wi-Fi del XIAO ESP32-C5 en las bandas de 2.4 GHz y 5 GHz usando los protocolos TCP y UDP.

¿Por qué necesitamos probar tanto TCP como UDP?<br/>
Al evaluar el rendimiento RF Wi-Fi del XIAO ESP32-C5, TCP y UDP proporcionan dos perspectivas completamente diferentes:

- **Prueba TCP (Mide la Experiencia de Aplicación):** TCP es un protocolo orientado a conexión y confiable que incluye mecanismos de handshaking, retransmisión y control de congestión.  
  - **Propósito:** Simula aplicaciones del mundo real con requisitos estrictos de integridad de datos, como navegación web, actualizaciones OTA y control MQTT. Refleja la capacidad general del chip para manejar pilas de protocolos complejas mientras asegura cero pérdida de datos (es decir, **estabilidad**).

- **Prueba UDP (Mide los Límites del Hardware):** UDP es un protocolo sin conexión que se enfoca únicamente en enviar datos sin garantía de entrega.  
  - **Propósito:** Elimina la sobrecarga de confirmación de la capa de protocolo para maximizar los límites de ancho de banda físico de la radio Wi-Fi. Comúnmente usado para pruebas de streaming de audio/video, revela el potencial máximo de rendimiento "limpio" del chip en las bandas de 2.4GHz y 5GHz (es decir, **velocidad**).

### Verificar la Dirección IP

Verifica la dirección IP de la red a la que está conectada tu computadora, ya que se usará en los pasos siguientes.

```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

### Prueba de rendimiento de banda de 2.4GHz

Medición real del rendimiento de datos Wi-Fi del XIAO ESP32-C5 en la banda de 2.4GHz.

- Conecta el XIAO ESP32-C5 a una red WiFi de 2.4G

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

La terminal entonces imprimirá la información de conexión Wi-Fi. Necesitas anotar la dirección IP del XIAO ESP32-C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### Prueba de Rendimiento TCP

:::tip
Por favor asegúrate de que tu computadora y el XIAO ESP32-C5 estén conectados a la misma red WiFi o router.
:::

1. Prueba de Descarga (XIAO ESP32-C5 Recibiendo Datos)

    1.1. **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -s -i 1
      ```

    1.2. **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de descarga TCP del XIAO ESP32-C5 en WiFi 2.4G es de 15 Mbps

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x2.png" style={{width:800, height:'auto'}}/></div>

2. Prueba (XIAO ESP32-C5 Enviando Datos)

    2.1 **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -i 1
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de subida TCP del XIAO ESP32-C5 en WiFi 2.4G es de 17 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x3.png" style={{width:800, height:'auto'}}/></div>

#### Prueba de Rendimiento UDP

:::tip
Por favor asegúrate de que tu computadora y el XIAO ESP32-C5 estén conectados a la misma red WiFi o router.
:::

1. Prueba de Descarga (XIAO ESP32-C5 Recibiendo Datos)

    1.1. **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de descarga UDP del XIAO ESP32-C5 en WiFi 2.4G es de 18 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x4.png" style={{width:800, height:'auto'}}/></div>

2. Prueba (XIAO ESP32-C5 Enviando Datos)

    2.1 **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -u -i 1
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de subida UDP del XIAO ESP32-C5 en WiFi 2.4G es de 27 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x5.png" style={{width:800, height:'auto'}}/></div>

:::tip
Los resultados de las pruebas anteriores son solo para referencia. Por favor consulta las condiciones reales.
:::

### Prueba de rendimiento de banda de 5GHz

Medición real del rendimiento de datos Wi-Fi del XIAO ESP32-C5 en la banda de 5GHz.

- Conecta el XIAO ESP32-C5 a una red WiFi de 5G

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

La terminal entonces imprimirá la información de conexión Wi-Fi. Necesitas anotar la dirección IP del XIAO ESP32-C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### Prueba de Rendimiento TCP

:::tip
Por favor asegúrate de que tu computadora y el XIAO ESP32-C5 estén conectados a la misma red WiFi o router.
:::

1. Prueba de Descarga (XIAO ESP32-C5 Recibiendo Datos)

    1.1. **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -s -i 1
      ```

    1.2. **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de descarga UDP del XIAO ESP32-C5 en WiFi 5G es de 27 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x6.png" style={{width:800, height:'auto'}}/></div>

2. Prueba (XIAO ESP32-C5 Enviando Datos)

    2.1 **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -i 1
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de subida UDP del XIAO ESP32-C5 en WiFi 5G es de 29 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x7.png" style={{width:800, height:'auto'}}/></div>

#### Prueba de Rendimiento UDP

:::tip
Por favor asegúrate de que tu computadora y el XIAO ESP32-C5 estén conectados a la misma red WiFi o router.
:::

1. Prueba de Descarga (XIAO ESP32-C5 Recibiendo Datos)

    1.1. **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de subida TCP del XIAO ESP32-C5 en WiFi 5G es de 50 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x8.png" style={{width:800, height:'auto'}}/></div>

2. Prueba (XIAO ESP32-C5 Enviando Datos)

    2.1 **Ejecuta el comando en el lado del XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **Ejecuta el comando en el lado de la PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -u -i 1
      ```

- Resultados de la Prueba

De los resultados de la prueba, podemos ver que la velocidad promedio de subida TCP del XIAO ESP32-C5 en WiFi 5G es de 50 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x9.png" style={{width:800, height:'auto'}}/></div>

## Conclusión

Los resultados de las pruebas muestran que el XIAO ESP32-C5 exhibe un excelente rendimiento de transmisión de datos en entornos Wi-Fi 6 de banda dual tanto de 2.4 GHz como de 5 GHz, lo que lo hace ideal para aplicaciones inalámbricas de alto ancho de banda y baja latencia.

Además, los métodos de prueba en este tutorial son aplicables a toda la serie de placas de desarrollo XIAO ESP. Puedes realizar la misma evaluación de rendimiento en otras placas simplemente siguiendo las pautas de este Wiki y ajustando el chip objetivo durante la compilación. ¡Esperamos que explores su potencial y compartas tus hallazgos con la comunidad!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
