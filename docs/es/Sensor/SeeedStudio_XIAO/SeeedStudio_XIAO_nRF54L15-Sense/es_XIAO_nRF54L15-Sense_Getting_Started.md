---
title: Seeed Studio XIAO nRF54L15(Sense)
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /es/xiao_nrf54l15_sense_getting_started
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:600, height:'auto'}}/></div>

# Primeros Pasos con Seeed Studio XIAO nRF54L15(Sense)

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introducción

El **Seeed Studio XIAO nRF54L15** es una placa de desarrollo compacta y de alto rendimiento que cuenta con el chip Nordic nRF54L15 de vanguardia. Este SoC de próxima generación integra una radio multi-protocolo de 2.4 GHz de ultra bajo consumo con un MCU que contiene un **procesador Arm® Cortex®-M33 de 128 MHz** y un **Arm® Cortex®-M0**+ para gestión avanzada de energía. Ofrece memoria escalable de hasta **1.5 MB NVM y 256 KB RAM**, y un diseño interno de ultra bajo consumo que extiende significativamente la vida útil de la batería. Su potente radio soporta **Bluetooth® 6.0 (incluyendo Channel Sounding), Matter, Thread, Zigbee**, y modos propietarios de 2.4 GHz de alto rendimiento hasta **4 Mbps**. La placa incluye un conjunto completo de periféricos, un **coprocesador RISC-V de 128 MHz** integrado, y características de seguridad avanzadas como aislamiento **TrustZone®** y protección del motor criptográfico. Con **gestión integrada de batería Li-ion**, el XIAO nRF54L15 es ideal para soluciones IoT compactas, seguras y eficientes energéticamente como wearables inteligentes, sensores industriales y HMIs avanzados.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### Especificaciones

<table align="center">
  <tr>
      <th>Elemento</th>
      <th>XIAO nRF54L15</th>
      <th>XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
      <th>MCU</th>
      <td align="center">Arm Cortex-M33 128 MHz<br/>Coprocesador RISC-V 128 MHz FLPR</td>
      <td align="center">Arm Cortex-M33 128 MHz<br/>Coprocesador RISC-V 128 MHz FLPR</td>
  </tr>
  <tr>
      <th>Conectividad Inalámbrica</th>
      <td align="center">
        Bluetooth LE 6.0（incluye Channel Sounding）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos propietarios de 2.4 GHz<br/>
      </td>
      <td align="center">
        Bluetooth LE 6.0（incluye Channel Sounding）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos propietarios de 2.4 GHz<br/>
      </td>
  </tr>
  <tr>
      <th>Memoria</th>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
  </tr>
  <tr>
      <th>Sensor Integrado</th>
      <td align="center">N/A</td>
      <td align="center">IMU de 6 DOF(LSM6DS3TR-C)<br/>Micrófono (MSM261DGT006)</td>
  </tr>
  <tr>
      <th>Potencia TX</th>
      <td align="center">+8 dBm</td>
      <td align="center">+8 dBm</td>
  </tr>
  <tr>
      <th>Sensibilidad RX</th>
      <td align="center">-96 dBm</td>
      <td align="center">-96 dBm</td>
  </tr>
  <tr>
      <th>Periféricos destacados</th>
      <td align="center">ADC de 14 bits, RTC Global</td>
      <td align="center">ADC de 14 bits, RTC Global</td>
  </tr>
  <tr>
      <th>Alimentación</th>
      <td align="center">
        Alimentación por interfaz USB Type-C<br/>
        PMIC interno soporta alimentación por batería de litio<br/>
        Soporte para recolección de energía de batería de litio
      </td>
      <td align="center">
        Alimentación por interfaz USB Type-C<br/>
        PMIC interno soporta alimentación por batería de litio<br/>
        Soporte para recolección de energía de batería de litio
      </td>
  </tr>
  <tr>
      <th>Temperatura de funcionamiento</th>
      <td align="center">-40 a 105°C</td>
      <td align="center">-40 a 105°C</td>
  </tr>
  <tr>
      <th>Rango de voltaje de alimentación</th>
      <td align="center">3.7 a 5 V</td>
      <td align="center">3.7 a 5 V</td>
  </tr>
  <tr>
      <th>ESB y Protocolos Propietarios de 2.4 GHz</th>
      <td align="center">hasta 4 Mbps</td>
      <td align="center">hasta 4 Mbps</td>
  </tr>
  <tr>
      <th>Detectores de manipulación</th>
      <td align="center">SÍ</td>
      <td align="center">SÍ</td>
  </tr>
  <tr>
      <th>Sondeo de canal Bluetooth</th>
      <td align="center">SÍ</td>
      <td align="center">SÍ</td>
  </tr>
</table>

### Características

- **CPU Potente**: Procesador Arm® Cortex®-M33 de 128 MHz con soporte para instrucciones DSP y operaciones de punto flotante FPU, arquitectura RISC de 32 bits, y coprocesador RISC-V de 128 MHz integrado.
- **Ultra Bajo Consumo**: Diseñado para un consumo de energía ultra bajo superior, extiende significativamente la vida útil de la batería e incluye gestión avanzada de energía.
- **Transmisión Inalámbrica Multi-Modo**: Transceptor inalámbrico multi-protocolo de 2.4 GHz integrado que soporta Bluetooth Low Energy (incluyendo Channel Sounding), 802.15.4-2020, Matter, Thread, Zigbee, y modos propietarios de 2.4 GHz (hasta 4 Mbps).
- **Seguridad Robusta**: Características de seguridad avanzadas incluyendo aislamiento TrustZone®, detección de manipulación, y protección contra fugas de canal en el lado del motor de cifrado.
- **Recursos en chip abundantes**: Configuraciones de memoria escalables de hasta 1.5 MB NVM y 256 KB RAM proporcionan amplio espacio de almacenamiento.
- **Interfaces Ricas**: Conjunto completo de periféricos incluyendo el nuevo RTC Global (disponible en modo System OFF), ADC de 14 bits, e interfaces serie de alta velocidad. Gestión integrada de batería de litio.

## Descripción General del Hardware

<Tabs>
<TabItem  value="54l15" label="XIAO nRF54L15" default>

<table align="center">
  <tr>
    <th>Lista de Pines XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/definition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación frontal XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación trasera XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/newback8.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>Lista de Pines XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sensedefinition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación frontal XIAO nRF54L15 Sense</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Sense_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación trasera XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/newback8.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## Uso del nRFConnect SDK

El nRF Connect SDK (NCS) es un kit de desarrollo de software extensible y unificado de Nordic Semiconductor diseñado específicamente para construir aplicaciones inalámbricas de bajo consumo para dispositivos inalámbricos basados en las series Nordic nRF52, nRF53, nRF54, nRF70 y nRF91.

NCS proporciona un ecosistema rico de aplicaciones de muestra listas para usar, pilas de protocolos, bibliotecas y controladores de hardware diseñados para simplificar el proceso de desarrollo y acelerar el tiempo de comercialización. Su naturaleza modular y configurable brinda a los desarrolladores la flexibilidad para construir software optimizado en tamaño para dispositivos con restricciones de memoria, así como funcionalidad potente para aplicaciones más avanzadas y complejas. NCS es un proyecto de código abierto alojado en GitHub y ofrece excelente soporte para entornos de desarrollo integrados como Visual Studio Code.

### Instalar con Vscode

<details>

<summary>Instalar conocimiento del nRF Connect SDK por adelantado</summary>

Este documento detalla cómo instalar el entorno de desarrollo nRF Connect SDK en una computadora con Windows 11. Lo siguiente es una descripción general de las herramientas que necesitan ser instaladas

- Visual Studio Code
- nRF Command Line Tools
- nRF Connect for Desktop
- Git

```cpp
git --version
```

- Python

```cpp
python --version
```

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- Plugin nRF Connect para VSCode

***Si ya lo tienes preinstalado en tu computadora, puedes verificar el número de versión de tu herramienta siguiendo el comando a continuación***

</details>

<Steppers>

<!-- #### Installation of SEGGER J-Link v8.18

Descarga el instalador para tu plataforma desde https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack. Ejecuta el instalador; cuando aparezca la ventana "Select Optional Components" durante el proceso de instalación, asegúrate de marcar "Install legacy USB driver for J-Link", que es un componente requerido para algunos kits de desarrollo compatibles.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### Instalar los comandos nrfutil y nrfutil device.

- 2.1. Descarga un archivo binario compatible con tu sistema operativo desde https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs y guárdalo en tu unidad de disco (ej. Windows). Para Windows, guárdalo como C:\nordic_tools\nrfutil.exe. 
Si estás usando macOS o Linux, guárdalo en un directorio que haya sido añadido al PATH de tu sistema (ej., /usr/bin/), y puedes omitir el paso 2.2.

- 2.2. (Windows) Actualiza el PATH de tu sistema para incluir donde está almacenado nrfutil. Abre "Edit account environment variables" y añade la ruta donde están almacenados los binarios de nrfutil (C:\nordic_tools\). 

- 2.3. Los binarios de nrfutil que acabas de descargar no contienen ningún comando preinstalado. En este paso, actualizaremos el núcleo de nrfutil y descargaremos los comandos device.

- 2.3.1 Para asegurarnos de que tenemos la última versión de nrfutil, ejecuta el siguiente comando en una terminal (símbolo del sistema o PowerShell). No importa qué terminal uses, ya que nrfutil se configuró globalmente en el paso 2.2.
```cpp
nrfutil self-upgrade
```

- 2.3.2 Instalando el comando nrfutil device 
Necesitamos grabar el binario en el kit de desarrollo usando el comando device.
En tu terminal actualmente activa, escribe: nrfutil install device 
Deberías ver la siguiente salida:
```cpp
[00:00:02] ###### 100% [Install packages] Install packages
``` -->

#### VScode configura la placa y construye el archivo de grabación

***1.instalar VS Studio Code***
[Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

2.Abre VS Code y busca nRF Connect for VS Code Extension Pack en el Centro de Plugins. Este paquete de plugins instalará automáticamente otros plugins de VS Code requeridos para nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>

La extensión nRF Connect for VS Code permite a los desarrolladores utilizar el popular Entorno de Desarrollo Integrado Visual Studio Code (VS Code IDE) para desarrollar, construir, depurar y desplegar aplicaciones embebidas basadas en el nRF Connect SDK (Kit de Desarrollo de Software) de Nordic. La extensión incluye herramientas de desarrollo útiles como una interfaz de compilador, enlazador, sistema de construcción completo, depurador habilitado para RTOS, interfaz perfecta con el nRF Connect SDK, editor de visualización del árbol de dispositivos y un terminal serie integrado.
El paquete de extensión nRF Connect para VS Code incluye los siguientes componentes:

- nRF Connect for VS Code: La extensión principal contiene la interfaz entre el sistema de construcción y el nRF Connect SDK, así como una interfaz para gestionar la versión del nRF Connect SDK y la cadena de herramientas.
- nRF DeviceTree: Proporciona soporte para el lenguaje del árbol de dispositivos y un editor de visualización del árbol de dispositivos.
- nRF Kconfig: Proporciona soporte para el lenguaje Kconfig.
- nRF Terminal: Terminales serie y RTT.
- Microsoft C/C++: Añade soporte de lenguaje para C/C++, incluyendo características de IntelliSense.
- CMake: Soporte para el lenguaje CMake.
- GNU Linker Mapping Files: Soporte para archivos de mapeo del enlazador.
Podemos descargar cualquier versión preferida del nRF Connect SDK y su cadena de herramientas a través de la extensión. La documentación completa de nRF Connect for VS Code está disponible en https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

#### Instalando la cadena de herramientas

La cadena de herramientas es una colección de herramientas que trabajan juntas para construir aplicaciones del nRF Connect SDK, incluyendo ensamblador, compilador, enlazador y componentes CMake.
La primera vez que abras nRF Connect for VS Code, se te pedirá que instales la cadena de herramientas. Esto usualmente sucede si la extensión no detecta ninguna cadena de herramientas instalada en tu computadora.
Haz clic en Install Toolchain y se listará una lista de versiones de cadenas de herramientas que pueden ser descargadas e instaladas en tu computadora. Selecciona la versión de la cadena de herramientas que coincida con la versión del nRF Connect SDK que planeas usar. Siempre recomendamos usar la última versión etiquetada del nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown1.png" style={{width:600, height:'auto'}}/></div>

Por defecto, nRF Connect for VS Code solo muestra la pestaña Released (es decir, la versión estable) de la cadena de herramientas. Si estás evaluando una nueva característica y te gustaría usar la pestaña Preview u otro tipo de pestaña (ej. Customer Sampling -cs), haz clic en "Show all toolchain versions" como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown2.png" style={{width:600, height:'auto'}}/></div>

:::note
**El ToolChain aquí es 3.0.1 o superior**
:::

#### Instalando el nRF Connect SDK

En la extensión nRF Connect para VS Code, haz clic en Manage SDK. desde el menú Manage SDK, podemos instalar o desinstalar la versión del nRF Connect SDK. Como esta es la primera vez que usamos la extensión, la interfaz solo mostrará dos opciones.

Hacer clic en Install SDK listará todas las versiones disponibles del nRF Connect SDK que pueden ser descargadas e instaladas localmente. Selecciona la versión del nRF Connect SDK que se requiere para el desarrollo de tu proyecto.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown3.png" style={{width:600, height:'auto'}}/></div>

Si has abierto la carpeta SDK en VS Code, en lugar de la opción del menú Manage SDK, verás Manage west workspace. Para resolver este problema, abre otra ventana o carpeta en VS Code.

:::note
**El nRF Connect SDK aquí es 3.0.1 o superior**
:::

:::tip
Si no ves ninguna de estas opciones, asegúrate de tener la última versión del paquete de extensión nRF Connect for VS Code instalado.
Es importante notar que el nRF Connect SDK es independiente del IDE, lo que significa que puedes elegir usar cualquier IDE o ninguno en absoluto. El nRF Connect SDK está disponible a través de la interfaz de línea de comandos (CLI) https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) que descargará e instalará nRF Connect. Sin embargo, recomendamos encarecidamente usar nuestra extensión nRF Connect for VS Code con VS Code, ya que integra no solo una interfaz gráfica de usuario (GUI) conveniente y una interfaz de línea de comandos (CLI) eficiente, sino que también incluye una serie de características que simplificarán enormemente el desarrollo de firmware. Configurar otros IDEs para trabajar con el nRF Connect SDK requiere pasos manuales adicionales más allá del alcance de este curso.
:::

#### Creando Programas de Usuario

En este ejercicio escribiremos una aplicación simple basada en el ejemplo blinky para controlar LEDs parpadeantes en una placa de desarrollo. Lo mismo se aplica a todas las placas de desarrollo de NordicSemiconductor compatibles (series nRF54, nRF53, nRF52, nRF70 o nRF91). El objetivo es asegurarse de que todas las herramientas necesarias para construir y grabar el ejemplo estén configuradas correctamente. ¡El enfoque está en aprender cómo crear una aplicación, construirla y grabarla en una placa de desarrollo de chip Nordic usando la plantilla "Copy Example"!

- En VS Code, haz clic en el icono de la extensión nRF Connect. En la vista Welcome, haz clic en Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky.png" style={{width:600, height:'auto'}}/></div>

- Escribe blinky en la barra de búsqueda y selecciona el segundo ejemplo Blinky (ruta zephyr/samples/basic/blinky), como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky2.png" style={{width:600, height:'auto'}}/></div>

El ejemplo Blinky hará que el LED1 en la placa de desarrollo parpadee continuamente.
Nuestra primera aplicación estará basada en el ejemplo Blinky. El ejemplo Blinky se deriva del bloque molde Zephyr en el nRF Connect SDK, por lo que verás el nombre zephyr en la ruta del ejemplo: zephyr\samples\basic\blinky.

#### Añadir Placa XIAO nRF54L15

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Para comenzar, **clona el repositorio desde el enlace de GitHub**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` en tu carpeta local preferida. Una vez clonado, navega al directorio `platform-seeedboards/zephyr/`. **Recuerda esta ruta de la carpeta `zephyr`**;

Para configurar tu placa para nRF Connect en VS Code, puedes seguir estos pasos:

- Abre VS Code y ve a Settings.

- Escribe nRF Connect en la caja de búsqueda.


- Encuentra el elemento de configuración Board Roots y haz clic en Edit en settings.json.

- Agrega la ruta `zephyr` del archivo de placa XIAO nRF54L15 descargado al array boardRoots.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config_new.jpg" style={{width:600, height:'auto'}}/></div>

- En la vista de aplicación, haz clic en Add Build Configuration debajo del nombre de la aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config3.png" style={{width:600, height:'auto'}}/></div>

- Podemos seleccionar el modelo de XIAO nRF54L15 en Board target, y seleccionar el archivo prj.config predeterminado en Base configuration files, y finalmente hacer clic en `Generate and Build` para construir el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config2.jpg" style={{width:600, height:'auto'}}/></div>

#### Descargar Plugin de Grabación

<Tabs>
<TabItem  value="window" label="Window" default>

**Plugins Adicionales:**

En Windows, usaremos el gestor de paquetes Chocolatey para instalar OpenOCD.

**1.Abrir PowerShell (Ejecutar como Administrador):**

- En la barra de búsqueda de Windows, escribe "PowerShell".
- Haz clic derecho en "Windows PowerShell" y selecciona "Ejecutar como administrador".

**2.Verificar la Política de Ejecución de PowerShell:**

- Escribe `Get-ExecutionPolicy` y presiona Enter.
- Escribe `Get-ExecutionPolicy -List` y presiona Enter.

**3.Instalar Chocolatey:**

- Pega y ejecuta el siguiente comando:

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Este comando omite la política de ejecución para la sesión actual de PowerShell e instala Chocolatey. Después de la instalación, cierra y vuelve a abrir la ventana de PowerShell (aún ejecutar como administrador).

**4.Instalar OpenOCD:**

- En la nueva ventana de PowerShell (como administrador), escribe:

```cpp
choco install openocd
```

**5.Verificar la Instalación de OpenOCD:**

- Escribe `Get-Command openocd` y presiona Enter.

- Si la instalación es exitosa, este comando mostrará la ruta a openocd.exe.

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**Plugins Adicionales:**

En macOS, usaremos el gestor de paquetes Homebrew para instalar las herramientas necesarias.

**1.Instalar Homebrew (si no está ya instalado):**

- Abre Terminal.app.

- Ejecuta el siguiente comando:

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Sigue las indicaciones en pantalla; es posible que necesites ingresar tu contraseña de usuario de macOS. Después de la instalación, ejecuta los comandos indicados por la terminal para agregar Homebrew a tu variable de entorno PATH `(por ejemplo, eval "$(/opt/homebrew/bin/brew shellenv)")`. Luego cierra y vuelve a abrir la terminal.

**2.Instalar Ccache:**

En la terminal, escribe:

```cpp
brew install ccache
```

**3.Instalar OpenOCD:**

En la terminal, escribe:

```cpp
brew install openocd
```

**4.Verificar la Instalación de OpenOCD::**

- Escribe `which openocd` y presiona Enter.

- Si la instalación es exitosa, este comando mostrará la ruta al ejecutable `openocd`.

</TabItem>

</Tabs>

#### Programa de grabación West Flash

- Abre la terminal nRF

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn12.png" style={{width:600, height:'auto'}}/></div>

- Simplemente ingresa el comando `west flash`. Para flashear tu dispositivo, simplemente ingresa el comando west flash. La ruta resaltada en rojo indica la ubicación de tu archivo .elf compilado. Puedes usar esta misma ruta para encontrar el archivo .hex correspondiente, que es adecuado para programar con un depurador J-Link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn13.png" style={{width:600, height:'auto'}}/></div>

:::tip
Si ocurre el error west flash, significa que hay un conflicto con el plugin CMake en VS Code, y necesitas remover el plugin CMake.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:600, height:'auto'}}/></div>
:::

#### Encender el LED

Cuando grabamos exitosamente el programa en el Seeed Studio XIAO nRF54L15 Sense, puedes ver la placa con el indicador de usuario parpadeando continuamente en luz verde. Si tu placa también tiene el mismo efecto visual, significa que lo has logrado exitosamente!🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### Profundizar en los Componentes Internos del nRF Connect SDK

Para dominar verdaderamente el nRF Connect SDK, necesitas entender sus componentes básicos desde adentro hacia afuera. Sumérgete en estos cursos para elevar tu conocimiento:

- [**nRF Connect SDK Fundamentals**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK Intermediate**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>

## Placa Alimentada por Batería

El XIAO nRF54L15 tiene un chip de gestión de energía integrado que permite que el XIAO nRF54L15 sea alimentado independientemente usando una batería o cargar la batería a través del puerto USB del XIAO nRF54L15.

Si quieres conectar la batería para XIAO, te recomendamos que compres una batería de litio recargable de 3.7V calificada. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquema de Conexión de Batería</em></p>
</div>

**Instrucciones sobre el uso de baterías:**

1. Por favor usa baterías calificadas que cumplan con las especificaciones.
2. XIAO puede conectarse a tu dispositivo de computadora a través de cable de datos mientras usa la batería, ten la seguridad de que XIAO tiene un chip de protección de circuito integrado, que es seguro.
3. El XIAO nRF54L15 no tendrá ningún LED encendido cuando esté alimentado por batería (a menos que hayas escrito un programa específico), por favor no juzgues si el XIAO nRF54L15 está funcionando o no por la condición del LED, por favor júzgalo razonablemente por tu programa.

Al mismo tiempo, diseñamos una luz indicadora roja para la carga de la batería, a través de la pantalla de la luz indicadora para informar al usuario del estado actual de la batería en la carga.

<!-- 1. When XIAO nRF54L15 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off. -->

:::caution
Por favor ten cuidado de no hacer cortocircuito en los terminales positivo y negativo y quemar la batería y el equipo al soldar.
:::

### Detección de Voltaje de Batería

El XIAO nRF54L15 integra una función de detección de voltaje de batería que se centra en gestionar eficientemente las mediciones de energía de la batería usando el interruptor de carga TPS22916CYFPR. Esta guía se enfocará en analizar la implementación de software de la detección de batería **(especialmente el código main.c)** y te guiará sobre cómo desplegar y usar fácilmente esta función en un entorno PlatformIO, evitando la complejidad del Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquema de Detección de Batería</em></p>
</div>

Lo que hace el chip TPS22916CYFPR:

- Es un interruptor de energía inteligente que controla el encendido y apagado del voltaje de la batería bajo demanda. Cuando se necesita medir el voltaje de la batería, se encenderá, conectando la batería al circuito divisor de voltaje; cuando no necesita ser medido, se apagará, desconectando la conexión.

- ¿Qué nos ayuda a hacer esta función?
A través de este mecanismo de conmutación bajo demanda, el chip reduce enormemente el consumo de corriente innecesario y extiende efectivamente la vida de la batería. Combinado con el circuito divisor de voltaje posterior y el ADC (convertidor analógico-digital) del nRF54L15, el XIAO nRF54L15 es capaz de monitorear con precisión la carga restante de la batería, proporcionando optimización de rango importante para aplicaciones de baja potencia alimentadas por batería como dispositivos IoT.

:::note
El siguiente código de ejemplo está diseñado para PlatformIO, pero también es compatible con el nRF Connect SDK.

Usando XIAO nRF54L15 en PlatformIO
Si quieres usar XIAO nRF54L15 en PlatformIO, por favor consulta este tutorial para configurarlo: [XIAO nRF54L15 PlatformIO Configuration](https://wiki.seeedstudio.com/es/xiao_nrf54l15_with_platform_io/).

Usando el XIAO nRF54L15 en el nRF Connect SDK
Para usar este código en el nRF Connect SDK, necesitas portar los siguientes tres archivos `main.c`,`prj.conf`,`app.overlay`
[XIAO nRF54L15 PlatformIO Configuration](http://localhost:3000/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
:::
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">

    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Código Principal

```cpp
#include <inttypes.h>
#include <stddef.h>
#include <stdint.h>
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/kernel.h>


#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
 !DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No suitable devicetree overlay specified"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
 ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

/* Data of ADC io-channels specified in devicetree. */
static const struct adc_dt_spec adc_channels[] = {
 DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels,
       DT_SPEC_AND_COMMA)};

static const struct device *const vbat_reg = DEVICE_DT_GET(DT_NODELABEL(vbat_pwr));

int main(void)
{
 int err;
 uint16_t buf;
 int32_t val_mv;
 struct adc_sequence sequence = {
  .buffer = &buf,
  /* buffer size in bytes, not number of samples */
  .buffer_size = sizeof(buf),
 };

 regulator_enable(vbat_reg);
 k_sleep(K_MSEC(100));

 /* Configure channels individually prior to sampling. */
 if (!adc_is_ready_dt(&adc_channels[7]))
 {
  printf("ADC controller device %s not ready\n", adc_channels[7].dev->name);
  return 0;
 }

 err = adc_channel_setup_dt(&adc_channels[7]);
 if (err < 0)
 {
  printf("Could not setup channel #7 (%d)\n", err);
  return 0;
 }

 (void)adc_sequence_init_dt(&adc_channels[7], &sequence);

 err = adc_read_dt(&adc_channels[7], &sequence);
 if (err < 0)
 {
  printf("Could not read (%d)\n", err);
  return 0;
 }

 /*
  * If using differential mode, the 16 bit value
  * in the ADC sample buffer should be a signed 2's
  * complement value.
  */
 if (adc_channels[7].channel_cfg.differential)
 {
  val_mv = (int32_t)((int16_t)buf);
 }
 else
 {
  val_mv = (int32_t)buf;
 }
 err = adc_raw_to_millivolts_dt(&adc_channels[7],
           &val_mv);
 /* conversion to mV may not be supported, skip if not */
 if (err < 0)
 {
  printf(" value in mV not available\n");
 }
 else
 {
  printf("bat vol = %" PRId32 " mV\n", val_mv * 2);
 }

 regulator_disable(vbat_reg);
 return 0;
}
```

## Acceder a los Pines J-Link para Grabar un Programa

**Hardware Requerido**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
Necesitas descargar la versión más reciente de J-Link para tener soporte para la placa modelo nRF54L15.
:::

**Software Requerido**

Es necesario descargar el software [Segger](https://www.segger.com/downloads/jlink/) desde el sitio web.

- **Paso 1.** Usa Jlink para conectar los pines siguientes:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **Paso 2.** Inicia J-Flash y busca nRF54L15_M33, creando un nuevo proyecto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>

- **Paso 3.** Haz clic en "Target" y luego selecciona "Connect".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **Paso 4.** Arrastra el archivo bin o [hex](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex) al software. Luego presiona F4 y F5 en ese orden. La reprogramación está completa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>

## Botones Integrados

XIAO nRF54L15(Sense) viene equipado con dos botones físicos importantes que desempeñan roles cruciales en la operación del dispositivo y la programación del firmware: el **Botón de Reset** y el **Botón de Usuario**. Entender sus funciones es esencial para el uso diario y las actualizaciones de firmware.

---

### Botón de Reset

El botón de Reset se usa para realizar una operación de reinicio forzado en el dispositivo.

- **Funcionalidad:**
  - **Reinicio Forzado:** Presionar este botón interrumpe inmediatamente todas las operaciones actuales del dispositivo y hace que se reinicie, similar a un ciclo de energía.
  - **Resolver Programas Bloqueados:** Cuando el programa en ejecución del dispositivo se bloquea, entra en un bucle infinito, o deja de responder, presionar el botón de Reset es la forma más rápida de forzarlo de vuelta a un estado operativo normal.
  - **Sin Impacto en el Firmware:** Una operación de reset no borra ni altera el firmware ya programado en el dispositivo. Simplemente reinicia la aplicación que se está ejecutando actualmente.
- **Casos de Uso:**
  - Ejecutar rápidamente un programa durante el desarrollo/depuración.
  - Cuando el dispositivo exhibe comportamiento inesperado o se bloquea.

---

### Botón de Usuario

El botón de Usuario es una entrada versátil y programable que ofrece control flexible dentro de tus aplicaciones.

**Funcionalidad:**

- Entrada Personalizable：A diferencia de la función fija del botón de Reset, la acción del botón de Usuario está completamente definida por tu firmware programado.

- Activación de Eventos： Puede ser programado para activar eventos específicos, controlar diferentes funcionalidades, o actuar como una entrada de propósito general para tus aplicaciones.

**Casos de Uso:**

- Activar características específicas o modos dentro de tu aplicación personalizada.

:::note
El siguiente código de ejemplo está diseñado para PlatformIO, pero también es compatible con el nRF Connect SDK.

Usando XIAO nRF54L15 en PlatformIO
Si quieres usar XIAO nRF54L15 en PlatformIO, por favor consulta este tutorial para configurarlo: [Configuración de XIAO nRF54L15 PlatformIO](https://wiki.seeedstudio.com/es/xiao_nrf54l15_with_platform_io/).

Usando el XIAO nRF54L15 en el nRF Connect SDK
Para usar este código en el nRF Connect SDK, necesitas portar los siguientes tres archivos `main.c`,`prj.conf`,`app.overlay`
[Configuración de XIAO nRF54L15 PlatformIO](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-button" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

La luz se enciende una vez cada vez que presionas una tecla
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/button.gif" style={{width:400, height:'auto'}}/></div>

## Ejemplo de Código de Consumo de Energía para XIAO nRF54L15 (PlatformIO)

El siguiente código de ejemplo está diseñado para PlatformIO, pero también es compatible con el nRF Connect SDK.

Usando XIAO nRF54L15 en PlatformIO
Si quieres usar XIAO nRF54L15 en PlatformIO, por favor consulta este tutorial para configurarlo: [Configuración de XIAO nRF54L15 PlatformIO](https://wiki.seeedstudio.com/es/xiao_nrf54l15_with_platform_io/).

Usando el XIAO nRF54L15 en el nRF Connect SDK
Para usar este código en el nRF Connect SDK, necesitas portar los siguientes tres archivos `main.c`,`prj.conf`,`app.overlay`

**Portando main.c**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/d1.jpg" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/f1.jpg" style={{width:600, height:'auto'}}/></div>

**Portando prj.conf/app.overlay, Puedes ver los siguientes archivos al hacer la configuración del proyecto:**

- prj.conf: este archivo se usa para establecer las opciones de configuración Kconfig del proyecto, como habilitar periféricos o características específicas.

- app.overlay: Este archivo se usa para modificar la configuración del Device Tree, como cambiar funciones de pines o ajustar configuraciones de hardware.

Si el ejemplo de código a continuación contiene estos archivos individuales, necesitarás fusionar sus contenidos en tu proyecto nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/h1.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/g1.jpg" style={{width:600, height:'auto'}}/></div>

**Posición de reemplazo**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/replace.jpg" style={{width:600, height:'auto'}}/></div>


- `archivo app.overlay:` colócalo en tu carpeta de placa.

- `archivo prj.conf:` colócalo en tu carpeta raíz del proyecto.

- `archivo main.c:` colócalo en tu carpeta src.

### Bluetooth Conectado

Esta sección detalla las características de consumo de energía del dispositivo mientras está anunciándose activamente como un periférico Bluetooth Low Energy (BLE). El dispositivo implementa un servicio BLE personalizado, permitiendo que otros dispositivos centrales se conecten e interactúen con él.

El siguiente gráfico ilustra el perfil típico de consumo de energía cuando el dispositivo está anunciándose continuamente:

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/7.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Consumo de Energía del Dispositivo durante el Anuncio BLE</em></p>
</div>

Como se muestra en el gráfico, el dispositivo exhibe picos de corriente periódicos correspondientes a cada evento de anuncio, seguidos de períodos de menor consumo de corriente. El consumo promedio de energía durante el anuncio es mayor que en el modo System Off, reflejando las operaciones activas de radio requeridas para la transmisión.

---

#### Ejemplo de Código de Anuncio BLE

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-ble" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

A continuación se muestra el código utilizado para probar el consumo de energía durante el anuncio BLE:

```c
#include <stdio.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/bluetooth/gatt.h>

// Custom 128-bit UUID for the ONOFF Service
#define BT_UUID_ONOFF_VAL BT_UUID_128_ENCODE(0x8e7f1a23, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF     BT_UUID_DECLARE_128(BT_UUID_ONOFF_VAL)

// Custom 128-bit UUID for the ONOFF Action Characteristic (Write)
#define BT_UUID_ONOFF_ACTION_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a24, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF_ACTION BT_UUID_DECLARE_128(BT_UUID_ONOFF_ACTION_VAL)

// Custom 128-bit UUID for the ONOFF Read Characteristic (Read)
#define BT_UUID_ONOFF_READ_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a25, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120003)
#define BT_UUID_ONOFF_READ BT_UUID_DECLARE_128(BT_UUID_ONOFF_READ_VAL)

// Static flag to hold the on/off state, initialized to 0 (off)
static uint8_t onoff_flag = 0;

// Advertising data: flags and complete device name
static const struct bt_data ad[] = {
 BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)), // General Discoverable, No BR/EDR
 BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME, sizeof(CONFIG_BT_DEVICE_NAME) - 1), // Device Name
};

// Scan response data: include the 128-bit UUID of our custom service
static const struct bt_data sd[] = {
 BT_DATA_BYTES(BT_DATA_UUID128_ALL, BT_UUID_ONOFF_VAL), // Service UUID
};

/**
 * @brief GATT read callback for the ONOFF Read characteristic.
 *
 * This function is called when a connected central device attempts to read
 * the ONOFF Read characteristic. It returns the current value of onoff_flag.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being read.
 * @param buf Buffer to store the read value.
 * @param len Maximum length of the buffer.
 * @param offset Offset from which to read the attribute value.
 * @return Number of bytes read, or a negative error code.
 */
static ssize_t read_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
                  void *buf, uint16_t len, uint16_t offset)
{
    // The user_data field of the attribute points to onoff_flag
    const uint8_t *value = attr->user_data;
    // Perform the GATT attribute read operation
    return bt_gatt_attr_read(conn, attr, buf, len, offset, value, sizeof(*value));
}

/**
 * @brief GATT write callback for the ONOFF Action characteristic.
 *
 * This function is called when a connected central device attempts to write
 * to the ONOFF Action characteristic. It updates the onoff_flag based on
 * the received value.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being written.
 * @param buf Buffer containing the value to be written.
 * @param len Length of the value in the buffer.
 * @param offset Offset at which to write the attribute value.
 * @param flags Flags for the write operation.
 * @return Number of bytes written, or a negative error code.
 */
static ssize_t write_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
          const void *buf, uint16_t len, uint16_t offset, uint8_t flags)
{
 uint8_t val;

 // Ensure the length of the written data is 1 byte
 if (len != 1U) {
  return BT_GATT_ERR(BT_ATT_ERR_INVALID_ATTRIBUTE_LEN);
 }

 // Ensure the write operation starts from offset 0
 if (offset != 0) {
  return BT_GATT_ERR(BT_ATT_ERR_INVALID_OFFSET);
 }

 // Get the value from the buffer
 val = *((uint8_t *)buf);

 // Update onoff_flag based on the received value
 if (val == 0x00U) {
  printf("Write: 0\n");
  onoff_flag = 0; // Set to off
 } else if (val == 0x01U) {
  printf("Write: 1\n");
  onoff_flag = 1; // Set to on
 } else {
  // Return error if value is not 0 or 1
  return BT_GATT_ERR(BT_ATT_ERR_VALUE_NOT_ALLOWED);
 }

 return len; // Return number of bytes successfully written
}

// Define the custom GATT service and its characteristics
BT_GATT_SERVICE_DEFINE(lbs_svc, 
    BT_GATT_PRIMARY_SERVICE(BT_UUID_ONOFF), // Primary Service: ONOFF Service
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_ACTION, BT_GATT_CHRC_WRITE, // Characteristic: ONOFF Action (Write)
        BT_GATT_PERM_WRITE, NULL, write_onoff_val, NULL), // Permissions, callbacks
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_READ, BT_GATT_CHRC_READ, // Characteristic: ONOFF Read (Read)
        BT_GATT_PERM_READ, read_onoff_val, NULL, &onoff_flag), // Permissions, callbacks, user_data (onoff_flag)
);

/**
 * @brief Callback function for successful Bluetooth connection.
 *
 * @param conn Pointer to the connection object.
 * @param err Error code (0 if successful).
 */
static void connected(struct bt_conn *conn, uint8_t err)
{
 if (err != 0U) {
  printf("Connection failed (%02x, %s)\n", err, bt_hci_err_to_str(err));
  return;
 }

 printf("Connected\n");
}

/**
 * @brief Callback function for Bluetooth disconnection.
 *
 * @param conn Pointer to the connection object.
 * @param reason Reason for disconnection.
 */
static void disconnected(struct bt_conn *conn, uint8_t reason)
{
 printf("Disconnected (%02x, %s)\n", reason, bt_hci_err_to_str(reason));
}

// Define connection callbacks
BT_CONN_CB_DEFINE(conn_callbacks) = {
 .connected = connected,
 .disconnected = disconnected,
};

/**
 * @brief Main function of the application.
 *
 * Initializes the Bluetooth stack, starts advertising, and enters the main loop.
 * @return 0 on success, negative error code on failure.
 */
int main(void)
{
 int err;

 // Enable the Bluetooth stack
 err = bt_enable(NULL);
 if (err < 0) {
  printf("Bluetooth enable failed (err %d)", err);
  return err;
 }

 // Start BLE advertising
 err = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
 if (err < 0) {
  printf("Advertising failed to start (err %d)", err);
  return err;
 }

 printf("Bluetooth enabled");
 return 0;
}
```

### Estado de Ultra-bajo Consumo

Para lograr un consumo de energía extremadamente bajo para el dispositivo, realizamos pruebas de consumo de energía en modo **System Off**. El modo System Off es un modo de sueño profundo proporcionado por Zephyr OS, donde la mayoría de los periféricos y la CPU se apagan, manteniendo solo las fuentes de activación esenciales (como interrupciones GPIO) para minimizar el consumo de energía.

El siguiente gráfico ilustra la curva típica de consumo de energía después de que el dispositivo entra en modo System Off:

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/6.png" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Consumo de Energía del Dispositivo en Modo System Off</em></p>
</div>

Como se muestra en el gráfico, después de entrar en modo System Off, el consumo de energía se reduce significativamente, manteniendo solo niveles de microamperios, lo que extiende enormemente la vida útil de la batería. Cuando se presiona el botón `sw0`, el dispositivo se despertará del modo System Off y se reiniciará.

---

#### Ejemplo de Código de Consumo de Energía

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-lowpower" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


A continuación se muestra el código utilizado para probar el consumo de energía en el modo System Off descrito anteriormente:

```c
/*
 * Copyright (c) 2019 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */
#include <inttypes.h>
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/drivers/comparator.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>
#include <zephyr/sys/util.h>

static const struct gpio_dt_spec sw0 = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);

void print_reset_cause(void)
{
 uint32_t reset_cause;

 hwinfo_get_reset_cause(&reset_cause);
 if (reset_cause & RESET_DEBUG) {
  printf("Reset by debugger.\n");
 } else if (reset_cause & RESET_CLOCK) {
  printf("Wakeup from System OFF by GRTC.\n");
 } else  {
  printf("Other wake up cause 0x%08X.\n", reset_cause);
 }
}

int main(void)
{
 int rc;
 const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));

 if (!device_is_ready(cons)) {
  printf("%s: device not ready.\n", cons->name);
  return 0;
 }

 printf("\n%s system off demo\n", CONFIG_BOARD);
 print_reset_cause();


 /* configure sw0 as input, interrupt as level active to allow wake-up */
 rc = gpio_pin_configure_dt(&sw0, GPIO_INPUT);
 if (rc < 0) {
  printf("Could not configure sw0 GPIO (%d)\n", rc);
  return 0;
 }

 rc = gpio_pin_interrupt_configure_dt(&sw0, GPIO_INT_LEVEL_LOW);
 if (rc < 0) {
  printf("Could not configure sw0 GPIO interrupt (%d)\n", rc);
  return 0;
 }

 printf("Entering system off; press sw0 to restart\n");


 rc = pm_device_action_run(cons, PM_DEVICE_ACTION_SUSPEND);
 if (rc < 0) {
  printf("Could not suspend console (%d)\n", rc);
  return 0;
 }

 hwinfo_clear_reset_cause();
 sys_poweroff();

 return 0;
}
```

## Recursos

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Esquemático del Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Librerías KiCAD del Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Dimensiones del Seeed Studio XIAO nRF54L15 en DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Hoja de pines del Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

### Seeed Studio XIAO nRF54L15 Sense

- **[PDF]** [Esquemático del Seeed Studio XIAO nRF54L15 Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_Schematic.pdf)

- **[ZIP]** [Librerías KiCAD del Seeed Studio XIAO nRF54L15 Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_KICAD.zip)

- **[DXF]** [Dimensiones del Seeed Studio XIAO nRF54L15 Sense en DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Hoja de pines del Seeed Studio XIAO nRF54L15 Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

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
