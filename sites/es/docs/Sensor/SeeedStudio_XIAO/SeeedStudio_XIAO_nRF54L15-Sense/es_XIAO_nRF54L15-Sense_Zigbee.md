---
title: Seeed Studio XIAO nRF54L15 Sense Zigbee
description: ''
keywords:
  - xiao
  - nrf54l15
  - zigbee
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_nrf54l15_zigbee
sku: 101991422
last_update:
  date: 1/27/2026
  author: Brandy
createdAt: '2026-01-27'
updatedAt: '2026-01-27'
url: https://wiki.seeedstudio.com/es/xiao_nrf54l15_zigbee/
---

Este tutorial te guía en la implementación de aplicaciones [Zigbee](https://en.wikipedia.org/wiki/Zigbee) en la placa de desarrollo Seeed Studio **XIAO nRF54L15**, esta placa combina conectividad **Wi-Fi**, **Bluetooth Low Energy (BLE)** y **Zigbee**, lo que la hace perfecta para **aplicaciones IoT**. Los ejemplos de esta guía usan el NCS para dar vida a la funcionalidad Zigbee.



:::note Requisito previo: uso de nRFConnect SDK

Si aún no has preparado tu NCS, consulta la **[Guía de inicio](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#uso-de-nrfconnect-sdk)**. 

Si te preocupa que el nRF Connect SDK no se haya descargado completamente o tenga problemas, puedes verificar la integridad y corrección del nRF Connect SDK descargado de la siguiente manera. Selecciona **Manage west workspace**, luego selecciona **West Update**, como se muestra a continuación. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## Tabla de contenidos
- [Descripción general de Zigbee](#descripción-general-de-zigbee)
  - [Modelo de datos Zigbee](#modelo-de-datos-zigbee)
  - [Arquitectura de red Zigbee](#arquitectura-de-red-zigbee)
    - [Topologías de red](#topologías-de-red)
- [Comenzar con NCS Zigbee](#comenzar-con-ncs-zigbee)

## Descripción general de Zigbee

Zigbee es un protocolo de comunicación inalámbrica de **bajo consumo** y **bajo ancho de banda** basado en el estándar IEEE 802.15.4. Está diseñado para escenarios IoT como **automatización del hogar**, **ciudades inteligentes** y **control industrial**, y ofrece sólidas capacidades de red mallada para una comunicación fiable en entornos dinámicos.

- Proporcionaremos una breve explicación del contenido relacionado con Zigbee. Si quieres ir directamente a los ejemplos de aplicación, también puedes saltar hacia adelante.
       - [Comenzar con NCS Zigbee](#comenzar-con-ncs-zigbee)

### Modelo de datos Zigbee

La comunicación Zigbee se basa en la **Zigbee Cluster Library (ZCL)**, que define cómo los dispositivos organizan su funcionalidad e interactúan. Los componentes clave incluyen:

1. **Tipos de dispositivo**
    Los dispositivos Zigbee (por ejemplo, interruptores, sensores, luces) están predefinidos con comportamientos específicos, agrupados en **Clusters** funcionales.

2. **Clusters**
    Los clusters son agrupaciones lógicas de:

   - **Atributos**: Representan estados del dispositivo, como brillo o temperatura.
   - **Comandos**: Desencadenan acciones, como encender una luz o ajustar el brillo al 50%.

   Ejemplos:

   - **On/Off Cluster**: Controla estados binarios como la alimentación.
   - **Level Control Cluster**: Ajusta la intensidad o el brillo.
   - **Temperature Measurement Cluster**: Envía lecturas de temperatura.
   - **Scenes Cluster**: Guarda y recupera configuraciones preestablecidas.

3. **Atributos y comandos**
    Los atributos almacenan datos del dispositivo (por ejemplo, estado, configuración), mientras que los comandos inician acciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Arquitectura de red Zigbee

Una red Zigbee consta de tres tipos principales de nodos:

1. **Zigbee Coordinator (ZC)**  
   - Sirve como el concentrador central de la red.  
   - Gestiona la creación de la red, la autenticación de dispositivos y la asignación de direcciones.  
   - Es responsable de inicializar y gestionar la red.  
   - Cada red Zigbee solo puede tener **un Coordinator**.  

2. **Zigbee Router (ZR)**  
   - Amplía el alcance de la red reenviando mensajes entre dispositivos.  
   - Admite que se unan dispositivos adicionales a la red.  
   - Normalmente está alimentado por la red eléctrica para garantizar un funcionamiento constante y un reenvío fiable de mensajes.  
   - Los Routers alimentados por batería son posibles pero menos comunes debido a mayores demandas de energía. 

 :::tip

Por supuesto, los routers no son necesarios. Cuando la distancia es corta, se pueden omitir los routers. Por ejemplo, nuestra próxima demostración no utiliza un router.

:::

3. **Zigbee End Device (ZED)**  
   - Dispositivos ligeros y de bajo consumo que se comunican con un nodo padre (ya sea un Coordinator o un Router).  
   - No enrutan mensajes a otros dispositivos.  
   - Optimizados para funcionamiento con batería y normalmente entran en modos de suspensión para ahorrar energía.

:::note

- **Direccionamiento y enrutamiento**:
  - Zigbee utiliza un esquema de direccionamiento de 16 bits. Los dispositivos se comunican mediante una combinación de direccionamiento directo e indirecto.  
  - Las decisiones de enrutamiento las toman los Routers usando algoritmos como AODV (Ad hoc On-demand Distance Vector).  

- **Gestión de energía**:
  - Los Zigbee End Devices están optimizados para un bajo consumo de energía. A menudo funcionan en modo de suspensión y solo se activan cuando es necesario.  
  - Los Routers y el Coordinator generalmente están alimentados por la red eléctrica para una disponibilidad constante.

:::

#### Topologías de red

Zigbee admite tres topologías de red principales, según los requisitos de la aplicación y el entorno:

#### 1. Topología en malla

- Un único Coordinator y múltiples Routers forman una red robusta y auto-reparable.  
- Los dispositivos pueden redirigir dinámicamente los mensajes si se interrumpe una ruta de comunicación, lo que garantiza una alta fiabilidad.  
- Ideal para redes a gran escala que requieren amplia cobertura y redundancia.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Características clave**:  
  - El redireccionamiento dinámico garantiza una alta fiabilidad.  
  - Admite redes grandes con cobertura escalable.  
  - Los mecanismos de auto-reparación aumentan la tolerancia a fallos.  

#### 2. Topología en árbol

- El Coordinator actúa como la raíz de una estructura jerárquica, con Routers que forman las ramas.  
- Cada rama puede tener múltiples End Devices o Routers adicionales, creando una estructura en forma de árbol.  
- La comunicación depende de rutas jerárquicas, lo que introduce posibles puntos únicos de fallo.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Características clave**:  
  - Funciona bien en entornos estructurados.  
  - Más fácil de configurar y gestionar que una red en malla.  
  - Vulnerable a fallos en las ramas, que pueden desconectar subredes completas.  

#### 3. Topología en estrella

- Todos los dispositivos se comunican directamente con el Coordinator.  
- Fácil de desplegar, pero el Coordinator es un único punto de fallo.  
- Más adecuada para redes pequeñas donde los dispositivos están cerca del Coordinator.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Características clave**:  
  - Fácil de configurar y gestionar.  
  - Escalabilidad limitada debido a restricciones de alcance y capacidad de dispositivos.  
  - La dependencia del Coordinator para toda la comunicación reduce la tolerancia a fallos.  

:::tip

Nuestra próxima demostración también utiliza este tipo de topología
:::

## Comenzar con NCS Zigbee

### Preparación de hardware

Necesitas preparar 3 placas XIAO nRF54L15.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-114993697-xiao-nrf54l15-sense_pre-soldered_.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54L15-Sense-Pre-Soldered-p-6500.html
        " target="_blank">
    <strong><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**conecta los dispositivos de la forma que se muestra en la figura**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### Preparación de software

**Paso 1.** Instalar el plugin Zigbee R23

- Haz clic en el icono del plugin **NCS** -> **Create a new application** y selecciona el modo **Browse nRF Connect SDK Add-on Index**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- Busca **R23**, ve a **Zigbee R23 nRF Connect** -> **V1.2.1**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- Selecciona la última versión -> Selecciona el directorio del espacio de trabajo y créalo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

Espera a que el plugin Zigbee se instale completamente, y la versión de NCS se cambiará automáticamente a la v2.9.2.
Dado que el plugin es bastante grande (más de 4 GB), el proceso de descarga tomará mucho tiempo. Mantén la conexión de red estable y no interrumpas el proceso a mitad de camino.

:::

- Aparecerá un mensaje emergente cuando se complete la creación.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**Paso 2.** Preparación del código

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- Consulta el repositorio oficial de Seeed Studio para obtener ejemplos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><font color={'FFFFFF'} size={"4"}> Descargar las librerías</font></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- Alternativamente, si ya tienes un entorno Git configurado, puedes extraer directamente el código en el directorio de archivos que especificaste hace un momento.

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

Después de obtener el código de ejemplo, tengamos una breve comprensión de él:

1.El directorio boards contiene archivos de configuración a nivel de placa, que se utilizan para adaptarse a las diferencias de hardware entre distintas placas de desarrollo (como pines y periféricos):
- Los archivos .overlay que contiene son "archivos Device Tree Overlay", que se utilizan para modificar las configuraciones de hardware predeterminadas del chip/placa de desarrollo;
- Por ejemplo, xiao_nrf54l15_nrf54l15_cpuapp.overlay es una configuración escrita específicamente para XIAO nRF54L15 (por ejemplo, asignar el pin D3 al pin de control del LED en el código);

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- Otros archivos (por ejemplo, nrf54l15dk_xxx.overlay) están destinados a los kits de desarrollo (DK) oficiales de Nordic, por lo que no necesitas preocuparte por ellos: solo céntrate en los archivos con el prefijo xiao_xxx.

2. El directorio include es donde se almacenan los archivos de cabecera:
- zb_dimmable_light.h es el archivo de cabecera funcional para luces regulables Zigbee, que define las funciones y parámetros relacionados con el protocolo Zigbee para el nodo de la luz (por ejemplo, control de brillo, reporte de estado).

3. El directorio src es donde se almacena el código principal:
 - main.c es el archivo de entrada de todo el proyecto, que contiene la lógica de inicio del programa, la inicialización de la red Zigbee y la lógica de control del LED (por ejemplo, controlar el nivel del pin D3 después de recibir un comando de interruptor).

4. Archivos en el directorio raíz Estos son archivos de compilación y configuración del proyecto (archivos estándar del framework NCS/Zephyr):

- CMakeLists.txt: Un script de compilación de CMake que define qué archivos necesita compilar el proyecto y de qué bibliotecas depende;
- Kconfig.sysbuild: Configura las opciones de compilación del proyecto (por ejemplo, si se habilita la funcionalidad Zigbee, registros de depuración);
- prj.conf: El archivo de configuración principal del proyecto, que establece parámetros del chip y parámetros del sistema Zephyr (por ejemplo, habilitar la funcionalidad GPIO, pila de protocolo Zigbee);
- sample.yaml: Un archivo de configuración de ejemplo de NCS que describe la información básica del proyecto (por ejemplo, placas de desarrollo compatibles, descripciones de funciones).

### Compilar y grabar el código

Esta guía te muestra cómo añadir una aplicación existente (tomando light_switch como ejemplo) a tu entorno de VS Code, y compilarla y grabarla en tu hardware de destino (tomando xiao_nrf54l15 como ejemplo).

**Paso 1.** Añadir la aplicación al espacio de trabajo

- Localiza el panel APPLICATIONS: En la barra lateral, encuentra el panel llamado "APPLICATIONS".

- Añadir una aplicación existente: Haz clic en el icono "+" (Add an existing application) en la esquina superior derecha del panel, como se indica con el recuadro rojo en la figura siguiente.

- Seleccionar la carpeta de la aplicación: En la ventana emergente del explorador de archivos, navega hasta la carpeta donde se encuentra tu proyecto (por ejemplo, D:...\workspace). De la lista, selecciona la carpeta de la aplicación que quieres grabar—light_switch en este ejemplo—y luego haz clic en el botón "Open".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**Paso 2.** Crear y configurar las opciones de compilación

- Añadir una configuración de compilación: En el panel "APPLICATIONS", verás el proyecto light_switch recién añadido. Haz clic en "+ Add build configuration" debajo de él.

- Configurar los parámetros de compilación: En la página "Add Build Configuration" que se abre, realiza los siguientes ajustes: SDK y Toolchain: Tu nRF Connect SDK y toolchain instalados normalmente se seleccionarán automáticamente; verifica que la versión sea correcta. (Si el plugin que descargaste antes está intacto, aquí se seleccionará automáticamente la versión V2.9).

- Board target: Este es el paso más crítico. Necesitas seleccionar el hardware en el que se ejecutará el código. Haz clic en "Browse" o busca directamente en el cuadro de entrada. Como se muestra en la figura, la placa de destino que necesitas seleccionar es xiao_nrf54l15/nrf54l15/cpuapp. Puedes marcar "Custom" para filtrar rápidamente o encontrar placas que no estén soportadas oficialmente.

- Otras configuraciones: A menos que haya requisitos especiales, deja por ahora con los valores predeterminados otros ajustes como Kconfig fragments y Devicetree overlays.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
Se recomienda primero marcar **"Custom"** para filtrar rápidamente o encontrar placas que no estén soportadas oficialmente, y luego localizar la placa de destino que necesitas seleccionar:**xiao_nrf54l15/nrf54l15/cpuapp**. Si buscas directamente, el proceso de resolución de problemas puede llevar demasiado tiempo y es posible que no se encuentre la placa de destino.

:::


:::note

- Actualiza los archivos a nivel de placa. Si tus archivos no se han actualizado durante mucho tiempo, también se recomienda que los actualices antes de usarlos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
Para el tutorial detallado, puedes consultar el siguiente enlace.
      **[Getting Started Guide](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

**Paso 3.** Compilación y grabación

- Conecta el hardware: Asegúrate de que tu hardware de destino (por ejemplo, la placa de desarrollo XIAO nRF54L15) esté correctamente conectado a tu ordenador mediante un cable de datos.

- Abre la terminal: En el panel WELCOME de la **extensión NRF CONNECT**, localiza y haz clic en la opción "Open terminal" (marcada con el recuadro rojo en la figura).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- Navega al directorio del proyecto: En la terminal, usa el comando cd para entrar en la carpeta de tu proyecto.

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- Sustituye esta ruta por la ruta real de tu propio proyecto.

- Supervisa el proceso de grabación: La terminal mostrará registros detallados, incluido el progreso de compilación, la conexión con el depurador (por ejemplo, CMSIS-DAP), el borrado de la memoria flash y los procesos de escritura de datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- Del mismo modo, graba los otros dos proyectos de código siguiendo los mismos pasos.
- Si te preocupa si el código se ha grabado correctamente, hay métodos para verificarlo:

  -  Conéctate a la placa de desarrollo a través de un puerto serie y observa la salida del puerto serie (este método no solo verifica el resultado de la grabación, sino que también te permite ver de forma intuitiva los registros de ejecución del programa, haciendo más clara la lógica de verificación).

### Conectarse a Zigbee

**Paso 1.** Conectarse a Zigbee

1. Enciende y arranca la placa de desarrollo XIAO con el **programa Coordinator** cargado.
2. Observa los registros en el asistente de puerto serie y espera a que el coordinador complete la inicialización de la pila Zigbee y la configuración de los parámetros de red hasta que se muestre información por el puerto serie.
3. Mantén el coordinador encendido para mantener la red de forma continua, lo que proporciona la base para que los dispositivos posteriores se unan a la red.

**Paso 2.** Configuración de unión a la red para el extremo de la bombilla

1. Después de que la red del coordinador encendido esté lista, enciende y arranca la placa de desarrollo XIAO con el programa Light Bulb cargado.

2. El extremo de la bombilla inicia automáticamente el escaneo de red para encontrar redes de coordinador Zigbee disponibles.
3. Verifica los registros del puerto serie para confirmar que el extremo de la bombilla se ha unido correctamente a la red del coordinador.
Referencia de registros principales:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 3.** Unión a la red y descubrimiento de dispositivos para el extremo del interruptor de luz

1. Después de confirmar que el extremo de la bombilla se ha unido correctamente a la red, enciende y arranca la placa de desarrollo XIAO con el programa de Interruptor de Luz cargado (activa un restablecimiento de fábrica mediante el botón integrado según sea necesario para garantizar el reescaneo de la red).
2.El extremo del interruptor de luz escanea automáticamente y se une a la misma red del coordinador.
Referencia de registros principales:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. Verifica los registros del puerto serie del extremo de la bombilla para confirmar que el comando se recibe y ejecuta, y que el LED completa la acción de encendido/apagado. Referencia de registros principales:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Procedimiento de restablecimiento de la red Zigbee

**Paso 1.** Restablecimiento de red para el coordinador

Pulsa el botón integrado del coordinador de red para completar el restablecimiento de la red Zigbee.

**Paso 2.** Restablecimiento y reincorporación de los dispositivos de control de luz (Interruptor de Luz/Bombilla)

1. Mantén pulsado el botón integrado del dispositivo de control de luz (interruptor de luz/bombilla);
2. Pulsa el botón de reinicio del dispositivo;
3. Suelta el botón integrado. El dispositivo completará el restablecimiento y se unirá automáticamente a la nueva red Zigbee.

:::note

> <strong>Importante:</strong> En la revisión de hardware anterior, puede ser necesario desactivar el UART USB-a-serie integrado para el arranque en frío solo con BAT porque sus señales pueden alimentar de forma inversa al SAMD11 sin alimentación. La versión V1.2 añade aislamiento de señal por hardware y no requiere esta solución alternativa de UART únicamente para ese problema histórico. Esto afecta solo al UART USB-a-serie/de depuración integrado, no a los pines UART de usuario laterales <code>D6/TX</code> y <code>D7/RX</code>. Consulta la [sección de Placa Alimentada por Batería en la Introducción](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#detección-del-voltaje-de-la-batería) para la configuración específica de cada versión.

:::

## Resultado

Si todo va bien, verás los siguientes resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### FQA

1.NO utilices un directorio excesivamente largo como directorio raíz de instalación. De lo contrario, al compilar ejemplos en Windows, encontrarás con frecuencia errores de compilación causados por nombres de directorio demasiado largos.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
