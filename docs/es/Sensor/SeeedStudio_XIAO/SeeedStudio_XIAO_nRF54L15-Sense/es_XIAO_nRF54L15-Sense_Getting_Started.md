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

El **Seeed Studio XIAO nRF54L15** es una placa de desarrollo compacta y de alto rendimiento que cuenta con el chip Nordic nRF54L15 de vanguardia. Este SoC de próxima generación integra una radio multi-protocolo de 2.4 GHz de ultra bajo consumo con un MCU que contiene un **procesador Arm® Cortex®-M33 de 128 MHz** y un **Arm® Cortex®-M0**+ para gestión avanzada de energía. Ofrece memoria escalable de hasta **1.5 MB NVM y 256 KB RAM**, y un diseño interno de ultra bajo consumo que extiende significativamente la vida útil de la batería. Su potente radio soporta **Bluetooth® 6.0 (incluyendo Channel Sounding), Matter, Thread, Zigbee**, y modos propietarios de 2.4 GHz de alto rendimiento hasta **4 Mbps**. La placa incluye un conjunto completo de periféricos, un **coprocesador RISC-V de 128 MHz** integrado, y características de seguridad avanzadas como aislamiento **TrustZone®** y protección del motor criptográfico. Con **gestión integrada de batería Li-ion**, el XIAO nRF54L15 es ideal para soluciones IoT compactas, seguras y energéticamente eficientes como wearables inteligentes, sensores industriales y HMIs avanzados.

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
        Protocolos propietarios 2.4 GHz<br/>
      </td>
      <td align="center">
        Bluetooth LE 6.0（incluye Channel Sounding）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos propietarios 2.4 GHz<br/>
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
      <td align="center">IMU 6 DOF(LSM6DS3TR-C)<br/>Micrófono (MSM261DGT006)</td>
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
        Soporta recolección de energía de batería de litio
      </td>
      <td align="center">
        Alimentación por interfaz USB Type-C<br/>
        PMIC interno soporta alimentación por batería de litio<br/>
        Soporta recolección de energía de batería de litio
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
      <th>ESB y Protocolos Propietarios 2.4 GHz</th>
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
    <th>Diagrama de indicación frontal XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_front.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación trasera XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>Lista de Pines XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>Diagrama de indicación frontal XIAO nRF54L15 Sense</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_Sense_Font.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación trasera XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>Lista de Pines XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_sensedefinition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## Uso del nRFConnect SDK

El nRF Connect SDK (NCS) es un kit de desarrollo de software extensible y unificado de Nordic Semiconductor diseñado específicamente para construir aplicaciones inalámbricas de bajo consumo para dispositivos inalámbricos basados en las series Nordic nRF52, nRF53, nRF54, nRF70 y nRF91.

NCS proporciona un ecosistema rico de aplicaciones de muestra listas para usar, pilas de protocolos, bibliotecas y controladores de hardware diseñados para simplificar el proceso de desarrollo y acelerar el tiempo de comercialización. Su naturaleza modular y configurable brinda a los desarrolladores la flexibilidad para construir software optimizado en tamaño para dispositivos con restricciones de memoria, así como funcionalidad potente para aplicaciones más avanzadas y complejas. NCS es un proyecto de código abierto alojado en GitHub y ofrece excelente soporte para entornos de desarrollo integrados como Visual Studio Code.

### Usando nRF Connect SDK en VSCode

<details>

<summary>Instalar conocimientos del nRF Connect SDK por adelantado</summary>

Este documento detalla cómo instalar el entorno de desarrollo nRF Connect SDK en una computadora con Windows 11. La siguiente es una descripción general de las herramientas que necesitan ser instaladas

- Instalar VS Studio Code

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

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

<!-- #### Instalación de SEGGER J-Link v8.18
Descarga el instalador para tu plataforma desde https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack. Ejecuta el instalador; cuando aparezca la ventana "Select Optional Components" durante el proceso de instalación, asegúrate de marcar "Install legacy USB driver for J-Link", que es un componente requerido para algunos kits de desarrollo compatibles.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### Instalar los comandos nrfutil y nrfutil device.

- 2.1. Descarga un archivo binario compatible con tu sistema operativo desde https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs y guárdalo en tu unidad de disco (ej. Windows). Para Windows, guárdalo como C:\nordic_tools\nrfutil.exe. 
Si estás usando macOS o Linux, guárdalo en un directorio que haya sido agregado al PATH de tu sistema (ej., /usr/bin/), y puedes omitir el paso 2.2.

- 2.2. (Windows) Actualiza el PATH de tu sistema para incluir donde está almacenado nrfutil. Abre "Edit account environment variables" y agrega la ruta donde están almacenados los binarios de nrfutil (C:\nordic_tools\). 

- 2.3. Los binarios de nrfutil que acabas de descargar no contienen ningún comando preinstalado. En este paso, actualizaremos el núcleo de nrfutil y descargaremos los comandos del dispositivo.

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

Abre VS Code y busca nRF Connect for VS Code Extension Pack en el Centro de Plugins. Este paquete de plugins instalará automáticamente otros plugins de VS Code requeridos para nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
La extensión nRF Connect for VS Code permite a los desarrolladores utilizar el popular Entorno de Desarrollo Integrado Visual Studio Code (VS Code IDE) para desarrollar, construir, depurar e implementar aplicaciones embebidas basadas en el nRF Connect SDK (Kit de Desarrollo de Software) de Nordic. La extensión incluye herramientas de desarrollo útiles como una interfaz de compilador, enlazador, sistema de construcción completo, depurador habilitado para RTOS, interfaz perfecta con el nRF Connect SDK, editor de visualización del árbol de dispositivos y un terminal serie integrado.
El paquete de extensión nRF Connect para VS Code incluye los siguientes componentes:

- nRF Connect for VS Code: La extensión principal contiene la interfaz entre el sistema de construcción y el nRF Connect SDK, así como una interfaz para gestionar la versión del nRF Connect SDK y la cadena de herramientas.
- nRF DeviceTree: Proporciona soporte para el lenguaje del árbol de dispositivos y un editor de visualización del árbol de dispositivos.
- nRF Kconfig: Proporciona soporte para el lenguaje Kconfig.
- nRF Terminal: Terminales serie y RTT.
- Microsoft C/C++: Agrega soporte de lenguaje para C/C++, incluyendo características de IntelliSense.
- CMake: Soporte para el lenguaje CMake.
- GNU Linker Mapping Files: Soporte para archivos de mapeo del enlazador.
Podemos descargar cualquier versión preferida del nRF Connect SDK y su cadena de herramientas a través de la extensión. La documentación completa de nRF Connect for VS Code está disponible en https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

#### Instalando la cadena de herramientas

La cadena de herramientas es una colección de herramientas que trabajan juntas para construir aplicaciones del nRF Connect SDK, incluyendo ensamblador, compilador, enlazador y componentes CMake.
La primera vez que abras nRF Connect for VS Code, se te pedirá que instales la cadena de herramientas. Esto generalmente sucede si la extensión no detecta ninguna cadena de herramientas instalada en tu computadora.
Haz clic en Install Toolchain y se listará una lista de versiones de cadenas de herramientas que pueden ser descargadas e instaladas en tu computadora. Selecciona la versión de la cadena de herramientas que coincida con la versión del nRF Connect SDK que planeas usar. Siempre recomendamos usar la última versión etiquetada del nRF Connect SDK.

Por defecto, nRF Connect for VS Code solo muestra la pestaña Released (es decir, la versión estable) de la cadena de herramientas. Si estás evaluando una nueva característica y te gustaría usar la pestaña Preview u otro tipo de pestaña (ej. Customer Sampling -cs), haz clic en "Show all toolchain versions" como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/toolchain2.png" style={{width:800, height:'auto'}}/></div>

:::note
**El ToolChain aquí es 3.0.1 o superior**
:::

#### Instalando el nRF Connect SDK

En la extensión nRF Connect para VS Code, haz clic en Manage SDK. desde el menú Manage SDK, podemos instalar o desinstalar la versión del nRF Connect SDK. Como esta es la primera vez que usamos la extensión, la interfaz solo mostrará dos opciones.

Hacer clic en Install SDK listará todas las versiones disponibles del nRF Connect SDK que pueden ser descargadas e instaladas localmente. Selecciona la versión del nRF Connect SDK que se requiere para el desarrollo de tu proyecto.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

Si has abierto la carpeta SDK en VS Code, en lugar de la opción del menú Manage SDK, verás Manage west workspace. Para resolver este problema, abre otra ventana o carpeta en VS Code.

:::note
**El nRF Connect SDK aquí es 3.0.1 o superior**
:::

:::tip
Si no ves ninguna de estas opciones, asegúrate de tener la última versión del paquete de extensión nRF Connect for VS Code instalado.
Es importante notar que el nRF Connect SDK es independiente del IDE, lo que significa que puedes elegir usar cualquier IDE o ninguno en absoluto. El nRF Connect SDK está disponible a través de la interfaz de línea de comandos (CLI) https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) que descargará e instalará nRF Connect. Sin embargo, recomendamos encarecidamente usar nuestra extensión nRF Connect for VS Code con VS Code, ya que integra no solo una interfaz gráfica de usuario (GUI) conveniente y una interfaz de línea de comandos (CLI) eficiente, sino que también incluye una serie de características que simplificarán enormemente el desarrollo de firmware. Configurar otros IDEs para trabajar con el nRF Connect SDK requiere pasos manuales adicionales más allá del alcance de este curso.
:::

#### Creando Programas de Usuario

En este ejercicio escribiremos una aplicación simple basada en el ejemplo blinky para controlar LEDs parpadeantes en una placa de desarrollo. Lo mismo se aplica a todas las placas de desarrollo de NordicSemiconductor compatibles (series nRF54, nRF53, nRF52, nRF70 o nRF91). El objetivo es asegurarse de que todas las herramientas necesarias para construir y grabar el ejemplo estén configuradas correctamente. El enfoque está en aprender cómo crear una aplicación, construirla y grabarla en una placa de desarrollo de chip Nordic usando la plantilla "Copy Example"!

- En VS Code, haz clic en el icono de la extensión nRF Connect. En la vista Welcome, haz clic en Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- Escribe blinky en la barra de búsqueda y selecciona el segundo ejemplo Blinky (ruta zephyr/samples/basic/blinky), como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

El ejemplo Blinky hará que el LED1 en la placa de desarrollo parpadee continuamente.
Nuestra primera aplicación estará basada en el ejemplo Blinky. El ejemplo Blinky se deriva del bloque molde Zephyr en el nRF Connect SDK, por lo que verás el nombre zephyr en la ruta del ejemplo: zephyr\samples\basic\blinky.

#### Agregar Placa XIAO nRF54L15

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Para comenzar, **clona el repositorio desde el enlace de GitHub**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` en tu carpeta local preferida. Una vez clonado, navega al directorio `platform-seeedboards/zephyr/`. **Recuerda esta ruta de la carpeta `zephyr`**;

Para configurar tu placa para nRF Connect en VS Code, puedes seguir estos pasos:

- Abre VS Code y ve a Settings.

- Escribe nRF Connect en el cuadro de búsqueda.
- Encuentra el elemento de configuración Board Roots y haz clic en Edit en settings.json.

- Agrega la ruta `zephyr` del archivo de placa XIAO nRF54L15 descargado al array boardRoots.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board1.png" style={{width:800, height:'auto'}}/></div>

- En la vista de aplicación, haz clic en Add Build Configuration debajo del nombre de la aplicación.

- Podemos seleccionar el modelo de XIAO nRF54L15 en Board target, y seleccionar el archivo prj.config predeterminado en Base configuration files, y finalmente hacer clic en `Generate and Build` para construir el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board2.png" style={{width:800, height:'auto'}}/></div>

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

- Sigue las indicaciones en pantalla; es posible que necesites ingresar tu contraseña de usuario de macOS. Después de la instalación, ejecuta los comandos indicados por la terminal para agregar Homebrew a tu variable de entorno PATH `(ej., eval "$(/opt/homebrew/bin/brew shellenv)")`. Luego cierra y vuelve a abrir la terminal.

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

- Simplemente ingresa el comando `west flash`. Para flashear tu dispositivo, simplemente ingresa el comando west flash. La ruta resaltada en rojo indica la ubicación de tu archivo .elf compilado. Puedes usar esta misma ruta para encontrar el archivo .hex correspondiente, que es adecuado para programar con un depurador J-Link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/west_flash_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Si ocurre el error west flash, significa que hay un conflicto con el plugin CMake en VS Code, y necesitas remover el plugin CMake.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
:::

Cuando hayamos grabado exitosamente el programa en el Seeed Studio XIAO nRF54L15 Sense, puedes ver la placa con el indicador de usuario parpadeando continuamente en luz verde, si tus manos también tienen el mismo efecto de renderizado, ¡significa que lo has logrado exitosamente!🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### Explicación del programa Blinky

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <stdio.h>
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

/* 1000 msec = 1 sec */
#define SLEEP_TIME_MS   1000

/* The devicetree node identifier for the "led0" alias. */
#define LED0_NODE DT_ALIAS(led0)

/*
 * A build error on this line means your board is unsupported.
 * See the sample documentation for information on how to fix this.
 */
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
int ret;
bool led_state = true;

if (!gpio_is_ready_dt(&led)) {
  return 0;
}

ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
if (ret < 0) {
  return 0;
}

while (1) {
  ret = gpio_pin_toggle_dt(&led);
  if (ret < 0) {
    return 0;
  }

  led_state = !led_state;
  printf("LED state: %s\n", led_state ? "ON" : "OFF");
  k_msleep(SLEEP_TIME_MS);
}
return 0;
}
```

**Definición del Dispositivo LED**:

- `#define LED0_NODE DT_ALIAS(led0)`: Recupera el identificador del nodo del árbol de dispositivos para el alias "led0", permitiendo una referencia independiente del hardware al LED.
- `static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios)`: Crea una estructura de especificación GPIO (`led`) usando el nodo del árbol de dispositivos, conteniendo detalles del hardware (pin, puerto) para el LED. Un error de compilación aquí indica hardware no soportado.

**Inicialización de la función main()**：

- **Configuración de Variables**:
  - `int ret`: Almacena valores de retorno de funciones para verificar el éxito de la operación.
  - `bool led_state = true`: Rastrea el estado del LED (inicializado a "ON").

- **Verificación de Preparación GPIO**:
  - `if (!gpio_is_ready_dt(&led)) { return 0; }`: Verifica si el hardware GPIO del LED está listo (ej., controlador cargado). Sale si no está listo.

- **Configuración GPIO**:
  - `ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE)`: Configura el pin GPIO del LED como una salida activa-alta.
  - Sale en caso de falla (`ret < 0`) para prevenir operaciones inválidas.

**Bucle Principal**:
Se ejecuta en un bucle infinito `while (1)` para alternar el LED periódicamente:

- **Alternar Estado del LED**:
  - `ret = gpio_pin_toggle_dt(&led)`: Cambia la salida GPIO del LED (ON ↔ OFF). Sale en caso de falla.

- **Actualizar Seguimiento de Estado**:
  - `led_state = !led_state`: Sincroniza la bandera de estado del software con el estado del hardware.

- **Registro y Retraso**:
  - `printf("LED state: %s\n", led_state ? "ON" : "OFF")`: Imprime el estado actual del LED a través de la salida serie.
  - `k_msleep(SLEEP_TIME_MS)`: Pausa por 1000ms (1 segundo) usando la función de retraso RTOS de Zephyr, controlando la frecuencia de parpadeo.

#### Profundización en los Internos del nRF Connect SDK

Si quieres tener una comprensión más profunda de los principios internos del nRF Connect SDK, puedes consultar los siguientes cursos:

- [**nRF Connect SDK Fundamentals**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK Intermediate**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>

## Acceder a los Pines J-Link Para Grabar un Programa

Si quieres usar JLink para programar, puedes seguir los pasos a continuación. Sin embargo, sugerimos que uses el puerto serie integrado en la placa Seeed Studio XIAO nRF54L15 para programar, lo cual será mucho más conveniente.

**Hardware Requerido**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
Necesitas descargar la versión más reciente de J-Link para tener soporte para la placa modelo nRF54L15.
:::

**Software Requerido**

Es necesario descargar el software [Segger](https://www.segger.com/downloads/jlink/) del sitio web.

- **Paso 1.** Usa Jlink para conectar los pines a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **Paso 2.** Inicia J-Flash y busca nRF54L15_M33, creando un nuevo proyecto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>

- **Paso 3.** Haz clic en "Target" y luego selecciona "Connect".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **Paso 4.** Arrastra el archivo bin o [hex](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex) al software. Luego presiona F4 y F5 en ese orden. La regrabación está completa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>

## Placa Alimentada por Batería

El XIAO nRF54L15 tiene un chip de gestión de energía integrado que permite que el XIAO nRF54L15 sea alimentado independientemente usando una batería o cargar la batería a través del puerto USB del XIAO nRF54L15.

Si quieres conectar la batería para XIAO, te recomendamos que compres una batería de litio recargable de 3.7V calificada. Al soldar la batería, por favor ten cuidado de distinguir entre los terminales positivo y negativo.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquema de Conexión de Batería</em></p>
</div>
**Instrucciones sobre el uso de baterías:**

1. Por favor, use baterías calificadas que cumplan con las especificaciones.
2. XIAO puede conectarse a su dispositivo informático a través de cable de datos mientras usa la batería, tenga la seguridad de que XIAO tiene un chip de protección de circuito integrado, que es seguro.
3. El XIAO nRF54L15 no tendrá ningún LED encendido cuando esté alimentado por batería (a menos que haya escrito un programa específico), por favor no juzgue si el XIAO nRF54L15 está funcionando o no por la condición del LED, por favor juzgue razonablemente por su programa.

Al mismo tiempo, diseñamos una luz indicadora roja para la carga de la batería, a través de la pantalla de la luz indicadora para informar al usuario del estado actual de la batería en la carga.

<!-- 1. When XIAO nRF54L15 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off. -->

:::caution
Por favor, tenga cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar.
:::

### Detección de Voltaje de Batería

El XIAO nRF54L15 integra una función de detección de voltaje de batería que se centra en gestionar eficientemente las mediciones de energía de la batería utilizando el interruptor de carga TPS22916CYFPR. Esta guía se enfocará en analizar la implementación de software de la detección de batería **(especialmente el código main.c)** y le guiará sobre cómo desplegar y usar fácilmente esta función en un entorno PlatformIO, evitando la complejidad del SDK Zephyr NCS.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquema de Detección de Batería</em></p>
</div>

Lo que hace el chip TPS22916CYFPR:

- Es un interruptor de alimentación inteligente que controla el encendido y apagado del voltaje de la batería bajo demanda. Cuando se necesita medir el voltaje de la batería, se encenderá, conectando la batería al circuito divisor de voltaje; cuando no necesita ser medido, se apagará, desconectando la conexión.

- ¿Qué nos ayuda a hacer esta función?
A través de este mecanismo de conmutación bajo demanda, el chip reduce enormemente el consumo de corriente innecesario y extiende efectivamente la vida útil de la batería. Combinado con el circuito divisor de voltaje posterior y el ADC (convertidor analógico-digital) del nRF54L15, el XIAO nRF54L15 es capaz de monitorear con precisión la carga restante de la batería, proporcionando una optimización de rango importante para aplicaciones alimentadas por batería y de bajo consumo como dispositivos IoT.

:::note
El siguiente código de ejemplo está diseñado para PlatformIO, pero también es compatible con el nRF Connect SDK.

Usando XIAO nRF54L15 en PlatformIO
Si desea usar XIAO nRF54L15 en PlatformIO, por favor consulte este tutorial para configurarlo: [Configuración de XIAO nRF54L15 PlatformIO](https://wiki.seeedstudio.com/es/xiao_nrf54l15_with_platform_io/).

:::
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Agregar overlay y modificar el archivo conf

Si desea usar esta rutina de batería en el nRF Connect SDK, necesita agregar app.overlay y modificar el archivo prj.conf.

- Cree un nuevo archivo llamado `app.overlay` bajo el directorio del proyecto. Luego pegue el siguiente código en él, y finalmente presione Ctrl + S para guardar.

  - El archivo overlay extiende la capa de descripción de hardware y personaliza las conexiones de hardware físico a través del árbol de dispositivos. No modifica la lógica del código, sino que declara los detalles reales del hardware para asegurar que el controlador pueda inicializar correctamente el dispositivo físico.
<br />
  <details>

  <summary>código app.overlay</summary>

  ```cpp
  / {
  /*
    * @brief Device Tree Overlay for XIAO nRF54L15
    *
    * This file customizes the base board device tree to configure
    * peripherals for a specific application, including:
    * - User-defined ADC channels
    * - PWM-controlled LED
    * - Buttons and a relay
    * - E-paper display (UC8179) via SPI
    * - OLED display (SSD1306) via I2C
    *
    * To switch between the two displays, simply uncomment one and comment
    * out the other in the "chosen" node below.
    */

  /************************************************************
    * Aliases for easy access to devices in application code
    ************************************************************/
  aliases {
    pwm-led = &pwm0_led0;
    sw1 = &xiao_button0;
    relay0 = &xiao_relay0;
  };

  /************************************************************
    * Display selection (choose one if multiple)
    ************************************************************/
  chosen {
    zephyr,display = &uc8179_7inch5_epaper_gdew075t7;
    zephyr,display = &ssd1306_128x64;
  };

  /************************************************************
    * PWM LED, Button, and Relay configuration
    ************************************************************/
  pwm_leds {
    compatible = "pwm-leds";
    pwm0_led0: my_pwm_led {
      // PWM channel 0 on PWM instance 20
      // PWM_MSEC(20) sets a period of 20ms
      pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
      status = "okay";
    };
  };

  buttons {
    compatible = "gpio-keys";
    xiao_button0: button_0 {
      // Connect to the XIAO nRF54L15 pin D1
      // GPIO_PULL_UP ensures the pin is high when the button is not pressed
      // GPIO_ACTIVE_LOW means the button press drives the pin low
      gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
      zephyr,code = <INPUT_KEY_0>;
    };
  };

  relay {
    compatible = "gpio-leds";
    xiao_relay0: relay_0 {
      // Connect to the XIAO nRF54L15 pin D0
      gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
    };
  };

  /************************************************************
    * Local nodes that don't modify existing ones
    ************************************************************/
  zephyr,user {
    io-channels = <&adc 0>, <&adc 1>, <&adc 2>, <&adc 3>,
            <&adc 4>, <&adc 5>, <&adc 6>, <&adc 7>;
  };

  // MIPI-DBI SPI interface for the E-paper display
  mipi_dbi_xiao_epaper {
    compatible = "zephyr,mipi-dbi-spi";
    spi-dev = <&xiao_spi>;
    // D3 pin for Data/Command control
    dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
    // D0 pin for Reset
    reset-gpios = <&xiao_d 0 GPIO_ACTIVE_LOW>;
    write-only;
    #address-cells = <1>;
    #size-cells = <0>;

    uc8179_7inch5_epaper_gdew075t7: uc8179@0 {
      compatible = "gooddisplay,gdew075t7", "ultrachip,uc8179";
      // Max SPI frequency for the display
      mipi-max-frequency = <4000000>;
      reg = <0>;
      width = <800>;
      height = <480>;
      // D2 pin for Busy signal from the display
      busy-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;
      softstart = [17 17 17 17];
      full {
        pwr = [07 07 3f 3f];
        cdi = <07>;
        tcon = <0x22>;
      };
    };
  };
  };

  /************************************************************
  * Device fragments (modifying nodes from the base board DTS)
  ************************************************************/
  // PWM instance 20
  &pwm20 {
  status = "okay";
  pinctrl-0 = <&pwm20_default>;
  pinctrl-1 = <&pwm20_sleep>;
  pinctrl-names = "default", "sleep";
  };

  // GPIO pin control
  &pinctrl {
  pwm20_default: pwm20_default {
    group1 {
      // Configure PWM channel 0 on P1.04 pin (Pin D0)
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
    };
  };

  pwm20_sleep: pwm20_sleep {
    group1 {
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
      low-power-enable;
    };
  };
  };

  // PDM instance 20 for DMIC
  dmic_dev: &pdm20 {
  status = "okay";
  };

  // Power configuration
  &pdm_imu_pwr {
  /delete-property/ regulator-boot-on;
  };

  // UART instance 20
  &uart20 {
  current-speed = <921600>;
  };

  // SPI peripheral
  &xiao_spi {
  status = "okay";
  // D1 pin for Chip Select
  cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
  };

  // I2C peripheral
  &xiao_i2c {
  status = "okay";
  zephyr,concat-buf-size = <2048>;

  ssd1306_128x64: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
  };
  ```

  </details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_overlay1.png" style={{width:800, height:'auto'}}/></div>

- Agregue el siguiente contenido bajo el archivo prj.conf
  - prj.conf es el archivo de configuración principal del proyecto Zephyr. Es gestionado por el sistema Kconfig para la selección de funciones de software durante la compilación. Determina qué controladores (como ADC, pantalla, Bluetooth), middleware (como LVGL) y servicios del sistema (como logging, gestión de memoria) se incluyen en el firmware, y establece sus parámetros de comportamiento (como nivel de log, tamaño del heap), finalmente presiona Ctrl + S para guardar.
<br />
  <details>

  <summary>código prj.conf</summary>

    ```python
    # =========================================================
    # Basic system configuration
    # =========================================================
    CONFIG_GPIO=y
    CONFIG_I2C=y
    CONFIG_ADC=y
    CONFIG_ADC_ASYNC=y
    CONFIG_PWM=y
    CONFIG_SENSOR=y
    CONFIG_INPUT=y

    # =========================================================
    # Power management
    # =========================================================
    CONFIG_PM_DEVICE=y
    CONFIG_NRFX_POWER=y
    CONFIG_POWEROFF=y
    CONFIG_HWINFO=y
    CONFIG_CRC=y

    # =========================================================
    # Serial port and console configuration
    # =========================================================
    CONFIG_SERIAL=y
    CONFIG_CONSOLE=y
    CONFIG_STDOUT_CONSOLE=y
    CONFIG_UART_CONSOLE=y
    CONFIG_UART_ASYNC_API=y
    CONFIG_UART_INTERRUPT_DRIVEN=y
    CONFIG_UART_NRFX_UARTE_ENHANCED_RX=y
    CONFIG_CBPRINTF_FP_SUPPORT=y

    # =========================================================
    # Log and Debugging
    # =========================================================
    CONFIG_LOG=y
    CONFIG_LOG_PRINTK=y
    CONFIG_LOG_MODE_IMMEDIATE=y
    CONFIG_LOG_DEFAULT_LEVEL=3
    CONFIG_PWM_LOG_LEVEL_DBG=y
    CONFIG_PRINTK=y

    # =========================================================
    #  Memory and Stack
    # =========================================================
    CONFIG_MAIN_STACK_SIZE=4096
    CONFIG_HEAP_MEM_POOL_SIZE=16384
    CONFIG_NEWLIB_LIBC=y
    CONFIG_NEWLIB_LIBC_FLOAT_PRINTF=y

    # =========================================================
    # Bluetooth configuration
    # =========================================================
    CONFIG_BT=y
    CONFIG_BT_PERIPHERAL=y
    CONFIG_BT_DEVICE_NAME="zephyr-ble"

    # =========================================================
    # Audio configuration
    # =========================================================
    CONFIG_AUDIO=y
    CONFIG_AUDIO_DMIC=y

    # =========================================================
    # Display and Graphics
    # =========================================================
    CONFIG_DISPLAY=y
    CONFIG_MIPI_DBI_SPI=y
    CONFIG_SSD1306=y
    CONFIG_CHARACTER_FRAMEBUFFER=y

    # LVGL Graphics Library
    CONFIG_LVGL=y
    CONFIG_LV_Z_MEM_POOL_SIZE=49152
    CONFIG_LV_Z_SHELL=y
    CONFIG_LV_USE_MONKEY=y
    CONFIG_LV_USE_LABEL=y
    CONFIG_LV_COLOR_DEPTH_1=y
    CONFIG_LV_FONT_MONTSERRAT_12=y
    CONFIG_LV_FONT_MONTSERRAT_14=y
    CONFIG_LV_FONT_MONTSERRAT_16=y
    CONFIG_LV_FONT_MONTSERRAT_18=y
    CONFIG_LV_FONT_MONTSERRAT_24=y
    CONFIG_LV_USE_FONT_COMPRESSED=y

    # =========================================================
    # Shell configuration
    # =========================================================
    CONFIG_SHELL=y
    CONFIG_SHELL_BACKEND_DUMMY=y
    ```

  </details>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_prj1.png" style={{width:800, height:'auto'}}/></div>

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

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
