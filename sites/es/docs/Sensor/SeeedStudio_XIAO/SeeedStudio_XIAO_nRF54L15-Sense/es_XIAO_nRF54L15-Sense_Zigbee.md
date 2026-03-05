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
createdAt: '2026-01-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/xiao_nrf54l15_zigbee/
---

Este tutorial te guía a través de la implementación de aplicaciones [Zigbee](https://en.wikipedia.org/wiki/Zigbee) en la placa de desarrollo Seeed Studio **XIAO nRF54L15**, esta placa combina conectividad **Wi-Fi**, **Bluetooth Low Energy (BLE)** y **Zigbee**, haciéndola perfecta para **aplicaciones IoT**. Los ejemplos en esta guía utilizan el NCS para dar vida a la funcionalidad Zigbee.



:::note Prerrequisito: Uso del nRFConnect SDK

Si no has preparado tu NCS, consulta la **[Guía de Introducción](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

Si te preocupa que el nRF Connect SDK no se haya descargado completamente o tenga problemas, puedes verificar la integridad y corrección del nRF Connect SDK descargado de la siguiente manera. Selecciona **Manage west workspace**, luego selecciona **West Update**, como se muestra a continuación. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## Tabla de Contenidos
- [Visión General de Zigbee](#visión-general-de-zigbee)
  - [Modelo de Datos Zigbee](#modelo-de-datos-zigbee)
  - [Arquitectura de Red Zigbee](#arquitectura-de-red-zigbee)
    - [Topologías de Red](#topologías-de-red)
- [Comenzando con NCS Zigbee](#comenzando-con-ncs-zigbee)

## Visión General de Zigbee

Zigbee es un protocolo de comunicación inalámbrica de **bajo consumo** y **bajo ancho de banda** basado en el estándar IEEE 802.15.4. Está diseñado para escenarios IoT como **automatización del hogar**, **ciudades inteligentes** y **control industrial**, ofreciendo capacidades robustas de red en malla para comunicación confiable en entornos dinámicos.

- Proporcionaremos una breve explicación del contenido relacionado con Zigbee. Si quieres ir directamente a los ejemplos de aplicación, también puedes saltar adelante.
       - [Comenzando con NCS Zigbee](#comenzando-con-ncs-zigbee)

### Modelo de Datos Zigbee

La comunicación Zigbee se basa en la **Biblioteca de Clústeres Zigbee (ZCL)**, que define cómo los dispositivos organizan su funcionalidad e interactúan. Los componentes clave incluyen:

1. **Tipos de Dispositivos**
    Los dispositivos Zigbee (por ejemplo, interruptores, sensores, luces) están predefinidos con comportamientos específicos, agrupados en **Clústeres** funcionales.

2. **Clústeres**
    Los clústeres son agrupaciones lógicas de:

   - **Atributos**: Representan estados del dispositivo, como brillo o temperatura.
   - **Comandos**: Desencadenan acciones, como encender una luz o establecer el brillo al 50%.

   Ejemplos:

   - **Clúster On/Off**: Controla estados binarios como la energía.
   - **Clúster de Control de Nivel**: Ajusta la intensidad o brillo.
   - **Clúster de Medición de Temperatura**: Envía lecturas de temperatura.
   - **Clúster de Escenas**: Guarda y recupera configuraciones preestablecidas.

3. **Atributos y Comandos**
    Los atributos almacenan datos del dispositivo (por ejemplo, estado, configuración), mientras que los comandos inician acciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Arquitectura de Red Zigbee

Una red Zigbee consiste en tres tipos principales de nodos:

1. **Coordinador Zigbee (ZC)**  
   - Sirve como el centro de la red.  
   - Maneja la creación de la red, autenticación de dispositivos y asignación de direcciones.  
   - Responsable de inicializar y gestionar la red.  
   - Cada red Zigbee puede tener solo **un Coordinador**.  

2. **Enrutador Zigbee (ZR)**  
   - Extiende el alcance de la red retransmitiendo mensajes entre dispositivos.  
   - Soporta que dispositivos adicionales se unan a la red.  
   - Típicamente alimentado por la red eléctrica para asegurar operación constante y retransmisión confiable de mensajes.  
   - Los enrutadores alimentados por batería son posibles pero menos comunes debido a las mayores demandas de energía. 

 :::tip

Por supuesto, los enrutadores no son necesarios. Cuando la distancia es corta, los enrutadores pueden omitirse. Por ejemplo, nuestra próxima demostración no usa un enrutador.

:::

3. **Dispositivo Final Zigbee (ZED)**  
   - Dispositivos ligeros y eficientes en energía que se comunican con un nodo padre (ya sea un Coordinador o Enrutador).  
   - No enrutan mensajes a otros dispositivos.  
   - Optimizados para operación con batería y típicamente entran en modos de suspensión para conservar energía.

:::note

- **Direccionamiento y Enrutamiento**:
  - Zigbee usa un esquema de direccionamiento de 16 bits. Los dispositivos se comunican a través de una mezcla de direccionamiento directo e indirecto.  
  - Las decisiones de enrutamiento son tomadas por los Enrutadores usando algoritmos como AODV (Ad hoc On-demand Distance Vector).  

- **Gestión de Energía**:
  - Los Dispositivos Finales Zigbee están optimizados para bajo consumo de energía. A menudo operan en modo de suspensión y solo despiertan cuando es necesario.  
  - Los Enrutadores y el Coordinador generalmente están alimentados por la red eléctrica para disponibilidad consistente.

:::

#### Topologías de Red

Zigbee soporta tres topologías de red principales, dependiendo de los requisitos de la aplicación y el entorno:

#### 1. Topología de Malla

- Un solo Coordinador y múltiples Enrutadores forman una red robusta y auto-reparable.  
- Los dispositivos pueden reencaminar dinámicamente los mensajes si una ruta de comunicación se interrumpe, asegurando alta confiabilidad.  
- Ideal para redes a gran escala que requieren amplia cobertura y redundancia.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Características Clave**:  
  - El reencaminamiento dinámico asegura alta confiabilidad.  
  - Soporta redes grandes con cobertura escalable.  
  - Los mecanismos de auto-reparación aumentan la tolerancia a fallos.  

#### 2. Topología de Árbol

- El Coordinador actúa como la raíz de una estructura jerárquica, con Enrutadores formando ramas.  
- Cada rama puede tener múltiples Dispositivos Finales o Enrutadores adicionales, creando una estructura similar a un árbol.  
- La comunicación depende de rutas jerárquicas, lo que introduce potenciales puntos únicos de falla.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Características Clave**:  
  - Funciona bien para entornos estructurados.  
  - Más fácil de configurar y gestionar que una red de malla.  
  - Vulnerable a fallas de rama, que pueden desconectar sub-redes completas.  

#### 3. Topología de Estrella

- Todos los dispositivos se comunican directamente con el Coordinador.  
- Simple de implementar, pero el Coordinador es un punto único de falla.  
- Mejor adecuado para redes pequeñas donde los dispositivos están ubicados cerca del Coordinador.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Características Clave**:  
  - Fácil de configurar y gestionar.  
  - Escalabilidad limitada debido a restricciones de alcance y capacidad de dispositivos.  
  - La dependencia del Coordinador para toda la comunicación reduce la tolerancia a fallos.  

:::tip

Nuestra próxima demostración también es de este tipo de topología
:::

## Comenzando con NCS Zigbee

### Preparación del Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**conecta los dispositivos de la manera mostrada en la figura**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### Preparación del Software

**Paso 1.** Instala el plugin Zigbee R23

- Haz clic en el icono del plugin **NCS** -> **Create a new application** y selecciona el modo como **Browse nRF Connect SDK Add-on Index**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- Busca **R23**, ve a **Zigbee R23 nRF Connect** -> **V1.2.1**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- Selecciona la versión más reciente -> Selecciona el directorio del espacio de trabajo y créalo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

Espera a que el plugin Zigbee se instale completamente, y la versión NCS cambiará automáticamente a v2.9.2.
Dado que el plugin es bastante grande (más de 4 GB), el proceso de descarga tomará mucho tiempo. Por favor mantén la conexión de red estable y no interrumpas el proceso a la mitad.

:::

- Aparecerá una ventana emergente al completarse la creación.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**Paso 2.** Preparación del Código

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- Consulta el repositorio oficial de Seeed Studio para obtener ejemplos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- Alternativamente, si tienes un entorno Git configurado, puedes extraer directamente el código al directorio de archivos que especificaste anteriormente.

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

Después de obtener el código de ejemplo, tengamos una comprensión breve del mismo:

1.El directorio boards contiene archivos de configuración a nivel de placa, que se utilizan para adaptarse a las diferencias de hardware entre diferentes placas de desarrollo (como pines y periféricos):
- Los archivos .overlay dentro son "archivos de superposición de árbol de dispositivos", que se utilizan para modificar las configuraciones de hardware predeterminadas del chip/placa de desarrollo;
- Por ejemplo, xiao_nrf54l15_nrf54l15_cpuapp.overlay es una configuración específicamente escrita para XIAO nRF54L15 (por ejemplo, mapear el pin D3 al pin de control LED en el código);

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- Otros archivos (por ejemplo, nrf54l15dk_xxx.overlay) están destinados a los kits de desarrollo oficiales (DKs) de Nordic, por lo que no necesitas preocuparte por ellos—solo enfócate en los archivos con prefijo xiao_xxx.

2. El directorio include es donde se almacenan los archivos de encabezado:
- zb_dimmable_light.h es el archivo de encabezado funcional para luces Zigbee regulables, que define las funciones y parámetros relacionados con el protocolo Zigbee para el nodo de luz (por ejemplo, control de brillo, reporte de estado).

3. El directorio src es donde se almacena el código principal:
 - main.c es el archivo de entrada de todo el proyecto, que contiene la lógica de inicio del programa, inicialización de red Zigbee y lógica de control LED (por ejemplo, controlar el nivel del pin D3 después de recibir un comando de interruptor).

4. Archivos en el directorio raíz Estos son archivos de construcción y configuración del proyecto (archivos estándar del framework NCS/Zephyr):

- CMakeLists.txt: Un script de construcción CMake que define qué archivos necesita compilar el proyecto y de qué librerías depende;
- Kconfig.sysbuild: Configura las opciones de compilación del proyecto (por ejemplo, si habilitar la funcionalidad Zigbee, registros de depuración);
- prj.conf: El archivo de configuración principal del proyecto, que establece parámetros del chip y parámetros del sistema Zephyr (por ejemplo, habilitar funcionalidad GPIO, pila de protocolo Zigbee);
- sample.yaml: Un archivo de configuración de muestra NCS que describe información básica sobre el proyecto (por ejemplo, placas de desarrollo soportadas, descripciones de funciones).

### Compilar y Flashear el Código

Esta guía te muestra cómo agregar una aplicación existente (tomando light_switch como ejemplo) a tu entorno VS Code, y compilarla y flashearla a tu hardware objetivo (tomando xiao_nrf54l15 como ejemplo).

**Paso 1.** Agregar la aplicación al espacio de trabajo

- Localiza el panel APPLICATIONS: En la barra lateral, encuentra el panel llamado "APPLICATIONS".

- Agregar una aplicación existente: Haz clic en el icono "+" (Agregar una aplicación existente) en la esquina superior derecha del panel, como se indica en el cuadro rojo en la figura siguiente.

- Seleccionar la carpeta de aplicación: En la ventana del explorador de archivos emergente, navega a la carpeta donde se encuentra tu proyecto (por ejemplo, D:...\workspace). De la lista, selecciona la carpeta de aplicación que quieres flashear—light_switch en este ejemplo—y luego haz clic en el botón "Open".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**Paso 2.** Crear y Configurar Opciones de Compilación

- Agregar una configuración de construcción: En el panel "APPLICATIONS", verás el proyecto light_switch recién agregado. Haz clic en "+ Add build configuration" debajo de él.

- Configurar parámetros de compilación: En la página "Add Build Configuration" abierta, realiza las siguientes configuraciones: SDK y Toolchain: Tu nRF Connect SDK y toolchain instalados usualmente serán seleccionados automáticamente—por favor verifica que la versión sea correcta. (Si el plugin que descargaste anteriormente está intacto, V2.9 será seleccionado aquí automáticamente.)

- Objetivo de placa: Este es el paso más crítico. Necesitas seleccionar el hardware en el que se ejecutará el código. Haz clic en "Browse" o busca directamente en el cuadro de entrada. Como se muestra en la figura, la placa objetivo que necesitas seleccionar es xiao_nrf54l15/nrf54l15/cpuapp. Puedes marcar "Custom" para filtrar rápidamente o encontrar placas que no están oficialmente soportadas.

- Otras configuraciones: A menos que haya requisitos especiales, deja otras configuraciones como fragmentos Kconfig y superposiciones Devicetree como predeterminadas por ahora.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
Se recomienda primero marcar **"Custom"** para filtrar rápidamente o encontrar placas que no están oficialmente soportadas, y luego localizar la placa objetivo que necesitas seleccionar:**xiao_nrf54l15/nrf54l15/cpuapp**. Si buscas directamente, el proceso de solución de problemas puede tomar demasiado tiempo, y la placa objetivo podría no ser encontrada.

:::


:::note

- Actualizar los archivos a nivel de placa. Si tus archivos no han sido actualizados por mucho tiempo, también se recomienda que los actualices antes del uso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
Para el tutorial detallado, puedes consultar el enlace siguiente.
      **[Guía de Introducción](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

**Paso 3.** Compilación y Flasheo

- Conectar el hardware: Asegúrate de que tu hardware objetivo (por ejemplo, placa de desarrollo XIAO nRF54L15) esté correctamente conectado a tu computadora a través de un cable de datos.

- Abrir la terminal: En el panel WELCOME de la **extensión NRF CONNECT**, localiza y haz clic en la opción "Open terminal" (marcada por el cuadro rojo en la figura).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- Navegar al directorio del proyecto: En la terminal, usa el comando cd para entrar a tu carpeta de proyecto.

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- Por favor reemplaza esta ruta con tu propia ruta de proyecto real.

- Monitorear el proceso de flasheo: La terminal mostrará registros detallados, incluyendo el progreso de compilación, conexión al depurador (por ejemplo, CMSIS-DAP), borrado de flash y procesos de escritura de datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- De manera similar, flashea los dos proyectos de código restantes siguiendo los mismos pasos.
- Si te preocupa si el código ha sido flasheado exitosamente, hay un método para verificarlo:

  -  Conectar a la placa de desarrollo a través de un puerto serie y observar la salida del puerto serie (este método no solo verifica el resultado del flasheo sino que también te permite ver los registros de ejecución del programa de manera intuitiva, haciendo la lógica de verificación más clara).

### Conectar a Zigbee

**Paso 1.** Conectar a Zigbee

1. Enciende e inicia la placa de desarrollo XIAO con el **programa Coordinador** cargado.
2. Observa los registros en el asistente de puerto serie, y espera a que el coordinador complete la inicialización de la pila Zigbee y configuración de parámetros de red hasta que se muestre información del puerto serie.
3. Mantén el coordinador encendido para mantener la red continuamente, lo que proporciona una base para que dispositivos posteriores se unan a la red.

**Paso 2.** Configuración de Unión a Red para el Extremo de Bombilla

1. Después de que la red del coordinador encendido esté lista, enciende e inicia la placa de desarrollo XIAO con el programa de Bombilla cargado.

2. El extremo de bombilla automáticamente inicia el escaneo de red para encontrar redes coordinadoras Zigbee disponibles.
3. Verifica los registros del puerto serie para confirmar que el extremo de la bombilla se ha unido exitosamente a la red del coordinador.
Referencia para los registros principales:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 3.** Unión a la Red y Descubrimiento de Dispositivos para el Extremo del Interruptor de Luz

1. Después de confirmar que el extremo de la bombilla se ha unido exitosamente a la red, enciende e inicia la placa de desarrollo XIAO con el programa Light Switch cargado (activa un restablecimiento de fábrica a través del botón integrado según sea necesario para asegurar el reescaneo de la red).
2.El extremo del interruptor de luz escanea automáticamente y se une a la misma red del coordinador.
Referencia para los registros principales:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. Verifica los registros del puerto serie del extremo de la bombilla para confirmar que el comando es recibido y ejecutado, y el LED completa la acción de encendido/apagado. Referencia para los registros principales:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Procedimiento de Restablecimiento de Red Zigbee

**Paso 1.** Restablecimiento de Red para el Coordinador

Presiona el botón integrado del coordinador de red para completar el restablecimiento de la red Zigbee.

**Paso 2.** Restablecimiento y Reunión de Dispositivos de Control de Luz (Interruptor de Luz/Bombilla)

1. Mantén presionado el botón integrado del dispositivo de control de luz (interruptor de luz/bombilla);
2. Presiona el botón de reinicio del dispositivo;
3. Suelta el botón integrado. El dispositivo completará el restablecimiento y se unirá automáticamente a la nueva red Zigbee.

:::note

> **Importante:** Si el dispositivo es alimentado por batería, el puerto serie debe ser explícitamente deshabilitado; de lo contrario, el programa fallará al iniciar.

:::

## Resultado

Si todo va bien, verás los siguientes resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### Preguntas Frecuentes

1.NO uses un directorio excesivamente largo como directorio raíz de instalación. De lo contrario, al compilar ejemplos en Windows, encontrarás frecuentemente errores de compilación causados por nombres de directorio excesivamente largos.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


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
