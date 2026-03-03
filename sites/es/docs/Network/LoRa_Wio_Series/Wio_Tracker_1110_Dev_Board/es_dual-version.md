---
description: Wio Tracker Dual Stack Version
title:  Seguimiento Continuo de Activos con Redes Amazon Sidewalk y LoRaWAN
keywords:
- Tracker
- AWS
- Sidewalk
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/wio_tracker_dual_stack
sidebar_position: 8
sidebar_class_name: hidden
last_update:
  date: 3/4/2024
  author: Jessie
---


## Introducción

Experimenta la integración perfecta de redes con esta demostración de dispositivo dual. La configuración incluye la versátil Placa de Desarrollo Seeed Studio Wio Tracker y el robusto dispositivo Rastreador Seeed Studio SenseCAP T1000-S, ambos mostrando transiciones fluidas entre redes LoRaWAN y Sidewalk para una cobertura óptima.

- **Soporte de Red Dual**: Con una sola pulsación de botón, cambia entre LoRaWAN y Sidewalk para mantener conectividad persistente.
- **Conectado a la Nube**: Observa la transferencia de datos en tiempo real a AWS IoT Core, visualizada a través de una aplicación web AWS en una pantalla/monitor de laptop.
- **Eficiencia Alimentada por Batería**: Los dispositivos aseguran operación consistente, sin cables para una experiencia verdaderamente móvil.

El proceso se divide en estos pasos principales:

- [Instalación y Configuración del SDK](https://wiki.seeedstudio.com/es/wio_tracker_dual_stack#setup-toolchain)
- [Flasheo de Firmware](https://wiki.seeedstudio.com/es/wio_tracker_dual_stack#build-and-flash-the-demo)
- Configuración de AWS IoT Core
- Configuración de Amazon Location
- [Configuración de Aplicación Web](https://wiki.seeedstudio.com/es/wio_tracker_dual_stack#building-web-app)

## Prerrequisitos

### Instalación del nRF Connect SDK

Hay diferentes formas de instalar el nRF Connect SDK, dependiendo de tu entorno de desarrollo preferido y la [herramienta de gestión de toolchain](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#toolchain-management-tools):

- Usando Visual Studio Code y la extensión nRF Connect para VS Code (recomendado)

- Usando línea de comandos y nRF Util

**Paso 1: Actualizar sistema operativo**

Antes de comenzar a configurar el toolchain, instala las actualizaciones disponibles para tu sistema operativo. Consulta [Requisitos](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements) para información sobre los sistemas operativos soportados.

**Paso 2: Instalar prerrequisitos**

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="VSc" label="Visual Studio Code">

- La versión más reciente del paquete <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>. Descárgalo desde la página <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a>.<br/>

- La versión más reciente de Visual Studio Code para tu sistema operativo desde la <a href="https://code.visualstudio.com/download">página de descarga de Visual Studio Code</a>.<br/>

- En Visual Studio Code, la versión más reciente del <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">nRF Connect for VS Code Extension Pack</a>.

</TabItem>
<TabItem value="CLine" label="Command Line">

- La versión más reciente de <a href="https://www.nordicsemi.com/Products/Development-tools/nrf-util">nRF Util development tool</a>, una utilidad de línea de comandos unificada para productos Nordic.<br/>

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
  <p style={{marginBottom: '0.5em'}}>
    <strong>Nota:</strong>
  </p>
  <p style={{marginTop: '0'}}>
      Después de descargar el ejecutable nRF Util, muévelo a un directorio que esté en el <code>PATH</code> del sistema. En macOS y Linux, el archivo descargado también necesita permisos de ejecución escribiendo <code>chmod +x nrfutil</code> o marcando la casilla en las propiedades del archivo.
  </p>
</div>

- La versión más reciente del paquete <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>, descárgalo desde la página <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a>.

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>Nota:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      Después de descargar e instalar las herramientas, añade nrfjprog al <code>PATH</code> del sistema en las variables de entorno.
    </p>
  </div>

</TabItem>
</Tabs>

**Paso 3: Instalar el toolchain del nRF Connect SDK**

<Tabs>
<TabItem value="VScode" label="nRF Connect for Visual Studio Code">
  
- Abre la extensión nRF Connect en Visual Studio Code haciendo clic en su icono en la <code>Barra de Actividad</code>.<br/><br/>
- En la <code>Vista de Bienvenida</code> de la extensión, haz clic en <code>Install Toolchain</code>.<br/><br/>
- Selecciona la versión del toolchain a instalar. La versión del toolchain debe coincidir con la versión del nRF Connect SDK con la que vas a trabajar. Usamos la <code>V2.5.0</code>(recomendada).<br/><br/>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/bar2.png"/></div>
Después de instalar el toolchain, puedes acceder a la opción <code>Install Toolchain</code> haciendo clic en <code>Manage toolchains</code>.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-toolchain.png"/></div>

</TabItem>
<TabItem value="CL" label="Command Line">

- Abre una ventana de terminal.

- Ejecuta el siguiente comando para instalar el comando toolchain-manager de nRF Util:

 ```cpp
 nrfutil install toolchain-manager
 ```

- Ejecuta el siguiente comando para listar las instalaciones disponibles:

 ```cpp
 nrfutil toolchain-manager search
 ```

Las versiones de esta lista corresponden a las versiones del nRF Connect SDK y serán versionadas en el siguiente paso.

- Ejecuta el siguiente comando para instalar la versión del toolchain para la versión del SDK de tu elección:

 ```cpp
 nrfutil toolchain-manager install --ncs-version version
 ```

 Parece que no has proporcionado el contenido del documento técnico en Markdown para traducir. Por favor, comparte el texto que necesitas traducir al español y procederé con la traducción siguiendo todas las reglas especificadas.

 ```cpp
 nrfutil toolchain-manager install --ncs-version v2.5.0
 ```

Este comando de ejemplo instala la cadena de herramientas requerida para el nRF Connect SDK v2.5.0 (recomendado).

:::tip
La cadena de herramientas se instala por defecto en C:/ncs/toolchains en Windows, ~/ncs/toolchains en Linux, y /opt/nordic/ncs/toolchains en macOS.
:::

Para verificar la configuración actual, usa el comando <code>nrfutil toolchain-manager config --show</code>. <br/>Para leer más sobre estos comandos, usa el comando <code>nrfutil toolchain-manager --help</code>.
  </TabItem>
</Tabs>

**Paso 4: Obtener el código del nRF Connect SDK**

  <Tabs>
  <TabItem value="VScode4" label="nRF Connect for Visual Studio Code">

Para clonar el código del nRF Connect SDK, completa los siguientes pasos:

- Abre la extensión nRF Connect en Visual Studio Code haciendo clic en su icono en la <code>Barra de Actividad</code>.

- En la <code>Vista de Bienvenida</code> de la extensión, haz clic en <code>Manage SDKs</code>. La lista de acciones aparece en la selección rápida de Visual Studio Code.

- Haz clic en <code>Install SDK</code>. La lista de versiones de SDK disponibles aparece en la selección rápida de Visual Studio Code.

- Selecciona la versión del SDK a instalar, usamos `V2.5.0`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-sdk2.png"/></div>

La instalación del SDK comienza y puede tomar varios minutos.

  </TabItem>
  <TabItem value="CLine4" label="Command Line">

Para clonar los repositorios, completa los siguientes pasos:

- En la línea de comandos, abre el directorio `ncs`. Por defecto, este está un nivel arriba de la ubicación donde instalaste la cadena de herramientas. Este directorio contendrá todos los repositorios del nRF Connect SDK.

- Inicia el entorno de la cadena de herramientas para tu sistema operativo usando el siguiente comando:

  Windows

  ```cpp
  nrfutil toolchain-manager launch --terminal
  ```

  Linux/macOS

  ```cpp
  nrfutil toolchain-manager launch --shell
  ```

- Determina el identificador de la revisión del nRF Connect SDK con la que quieres trabajar. Consulta la tabla anterior para más información. Cuando instales por primera vez el nRF Connect SDK, se recomienda instalar las últimas versiones lanzadas del SDK y la cadena de herramientas.

- Inicializa west con la revisión del nRF Connect SDK que quieres descargar, reemplazando nRFConnectSDK_revision con el identificador:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr nRFConnectSDK_revision
  ```

Por ejemplo:

  **Versión específica**: Para obtener la versión v2.5.0, ingresa el siguiente comando:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.5.0
  ```

  **Etiqueta de desarrollo**: Para revisar la etiqueta v1.9.2-dev1, ingresa el siguiente comando:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.9.2-dev1
  ```

  **Rama**: Para revisar la rama principal que incluye el estado más reciente del desarrollo, ingresa el siguiente comando:

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr main
  ```

Esto clonará el repositorio de manifiesto sdk-nrf en nrf.

Inicializar west con una revisión específica del archivo de manifiesto no bloquea tus repositorios a esta versión. Cambiar a una rama o etiqueta diferente en el repositorio sdk-nrf y ejecutar west update cambia la versión del nRF Connect SDK con la que trabajas.

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>Nota:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      Si obtienes un mensaje de error al ejecutar west, actualiza west a la última versión. Consulta <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/develop/west/troubleshooting.html#west-troubleshooting">Solución de problemas de West</a> en la documentación de Zephyr para más información.
    </p>
  </div>
  
- Ingresa el siguiente comando para clonar los repositorios del proyecto:

  ```cpp
  west update
  ```

Dependiendo de tu conexión, esto podría tomar algo de tiempo.

- Exportar un paquete CMake de Zephyr. Esto permite que CMake cargue automáticamente el código repetitivo requerido para construir aplicaciones del nRF Connect SDK:

  ```cpp
  west zephyr-export
  ```

Consulta [Instalación del nRF Connect SDK](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/install_ncs.html#id9) para más detalles.

</TabItem>
</Tabs>

### Configuración del entorno Sidewalk

Sigue estos pasos para descargar la aplicación Sidewalk para el nRF Connect SDK:

- Abre una ventana de terminal. Tu estructura de directorios debería verse de la siguiente manera:

```cpp
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

- Asegúrate de que la ruta del manifiesto apunte a west.yml dentro del directorio nrf:

```cpp
west manifest --path
/path-to-ncs-folder/nrf/west.yml
```

En caso de que la ruta de tu manifiesto apunte a un archivo diferente, usa el siguiente comando:

```cpp
west config manifest.path nrf
```

- Habilita el filtro de grupo Sidewalk para west.

```cpp
west config manifest.group-filter "+sidewalk"
```

Verificar la presencia de acera en el oeste:

```cpp
west list sidewalk
sidewalk     sidewalk                     <sidewalk_revision> https://github.com/nrfconnect/sdk-sidewalk
```

- Actualizar todos los repositorios:

```cpp
west update
```

Dependiendo de tu conexión, la actualización podría tomar algo de tiempo.

- Instala los requisitos de Python para Sidewalk.

```cpp
pip install -r sidewalk/requirements.txt
```

### Agregar LR11xx a la Extensión Sidewalk del nRF Connect SDK

Este repositorio contiene el controlador de software que permite a la [familia LR11xx](https://www.semtech.com/products/wireless-rf/lora-edge) de silicio soportar el protocolo Sidewalk cuando se empareja con el [MCU Nordic nRF52840](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk) y el nRF Connect SDK. El controlador se ofrece en forma binaria, como una biblioteca estática que implementa las interfaces de "Capa de Abstracción de Plataforma" necesarias para soportar conectividad LoRa o FSK. La biblioteca estática contiene dentro de sí una implementación completa del SWDR001 de Semtech (Controlador LR11xx), que puede ser usado para acceder a otras características del silicio LR11xx, como escaneo WIFI y GNSS y medición de distancias.

- Descarga el [SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

- Con tu directorio de trabajo en el repositorio nordic clonado, en el directorio de nivel superior, es decir, ``~/ncs/<version>/sidewalk``:

 ```cpp
 patch -p1 < ../nRF52840_LR11xx_driver_v010000.diff
 ```

la ruta del directorio padre `..` asume que pusiste el archivo diff ahí, de lo contrario puedes especificar la ruta completa a su ubicación.

- Copia las librerías del controlador de radio ``lib*.a`` al proyecto sidewalk en ``~/ncs/<version>/sidewalk/lib/lora_fsk/``  
Se proporcionan dos librerías, una con ``LOG_RUNTIME_FILTERING`` habilitado y otra sin él.

- Copia la carpeta ``~/template_lbm_wio_tracker/boards/arm/wio_tracker_1110`` a ``~/ncs/v2.5.0/zephyr/boards/arm``.

```cpp
·
├─── .west/
├─── modules/
├─── nrf/
├─── ...
└─── zephyr/
     └─── Boards/
          └─── arm/
               └─── wio_tracker_1110/
```

### Crear Recursos

**Paso 1: Desplegar Entorno Cloud9**

En esta sección crearás todos los recursos que necesitamos antes de comenzar. Como primer paso crearás un Espacio de Trabajo Cloud9 que usarás para construir y desplegar otros recursos. Luego desplegarás un Stack CDK que contiene todos los recursos backend para la aplicación Asset Tracker. Finalmente, instalarás todas las dependencias frontend y configurarás la aplicación.

- Abre la [Consola de AWS Cloud9](https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1), haz clic en `Create Environment`

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/cloud-9-environment.png"/></div>

- Deja todas las demás configuraciones como predeterminadas excepto el **Tipo de instancia**. Selecciona `m5.large`.

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/001/002/c9.3.png"/></div>

**Paso 2: Configurar Prerrequisitos**

- Abre el IDE de Cloud9.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-cloud9.png"/></div>

- Clona el repositorio de github en tu terminal del entorno Cloud9 ingresando el siguiente comando:

 ```cpp
 git clone --recurse-submodules https://github.com/aws-samples/aws-iot-asset-tracker-demo.git /home/ec2-user/environment/asset-tracking-workshop
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-could9.png"/></div>

- Navega al directorio de la aplicación de ejemplo:

 ```cpp
 cd ~/environment/asset-tracking-workshop
 ```

- Redimensiona el volumen EBS de la instancia EC2 subyacente.

 ```cpp
 npm run utils:resizeC9EBS
 ```

- Instala las dependencias del proyecto:

 ```cpp
 npm ci
 ```

- Despliega la infraestructura del backend:

 ```cpp
 # Prepare the AWS account for CDK
 npm run infra:bootstrap
 # Deploy the backend resources
 npm run infra:deploy
 ```

- Crear un archivo de configuración:

 ```cpp
 npm run utils:createConfig
 ```

## Configuración LoRaWAN

### Agregar Gateway LoRaWAN en AWS

Consulta esta [Guía de Inicio](https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/#add-gateway) para agregar el [gateway SenseCAP M2 Multi-Platform](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html) a AWS IoT Core.

### Agregar Dispositivo LoRaWAN en AWS

**Paso 1: Definir las claves**

Define el `DevEUI/JoinEUI/APPkey` y la `REGION` en `src/lorawan_v4/example_options.h`.

:::tip
JoinEUI también conocido como AppEUI
:::

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/3-params.png"/></div>

**Paso 2: Crear perfiles**

Inicia sesión en [AWS IoT Console](https://console.aws.amazon.com/iot/home), navega a `Devices`, haz clic en `Profiles`.

- Perfil de dispositivo

Los perfiles de dispositivo definen las capacidades del dispositivo y los parámetros de arranque que el servidor de red utiliza para configurar el servicio de acceso de radio LoRaWAN. Incluye la selección de parámetros como la banda de frecuencia LoRa, la versión de parámetros regionales LoRa y la versión MAC del dispositivo.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/device-profiles.png"/></div>

Para conocer las diferentes bandas de frecuencia, consulta [Considera la selección de bandas de frecuencia LoRa para tus gateways y conexión de dispositivos](https://docs.aws.amazon.com/iot-wireless/latest/developerguide/lorawan-rfregion-permissions.html#lorawan-frequency-bands).

- Perfil de servicio

Recomendamos que dejes habilitada la configuración `AddGWMetaData` para que recibas metadatos adicionales del gateway para cada carga útil, como RSSI y SNR para la transmisión de datos.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/service-profiles.png"/></div>

**Paso 3: Agregar dispositivo**

Navega a `LPWAN devices` > `Devices`, haz clic en `Add wireless device`.

`Wireless device specification`: OTAAv1.0x

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

Selecciona el perfil de dispositivo y destino que creaste en el paso anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

Navega a la página de Dispositivos y elige el dispositivo que agregaste anteriormente.

## Configuración Sidewalk

### Configurar un gateway Sidewalk (Opcional)

Puedes configurar un gateway Sidewalk, configurarlo y asociar tu gateway con tu cuenta de Amazon. Tu endpoint Sidewalk se conectará y comunicará con el gateway Sidewalk después de que esté registrado con Amazon Sidewalk.

Consulta [Configurar un gateway Sidewalk](https://docs.sidewalk.amazon/getting-started/sidewalk-onboard-prereq-gateway.html) para más detalles.

### Configurar tu dispositivo Sidewalk

#### Agregar tu dispositivo Sidewalk

**Paso 1: Agregar tu perfil de dispositivo y dispositivo final Sidewalk**

Antes de crear un dispositivo inalámbrico, primero crea un perfil de dispositivo.

Navega a la [pestaña Sidewalk del hub de Dispositivos](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk), elige `Provision device`, y luego realiza los siguientes pasos.

**Paso 2: Obtener archivo JSON del dispositivo**

Para obtener el archivo JSON para aprovisionar tu dispositivo Sidewalk:

- Ve al [hub de dispositivos Sidewalk](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk).

- Elige el dispositivo que agregaste a AWS IoT Core para Amazon Sidewalk para ver sus detalles.

- Obtén el archivo JSON eligiendo `Download device JSON file` en la página de detalles del dispositivo que agregaste.

 Se descargará un archivo `certificate.json` que contiene la información requerida para aprovisionar tu dispositivo final.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/dual/download-json.png" alt="pir" width={800} height="auto" /></p>

**Paso 3: Aprovisionar tu endpoint Sidewalk**

**Generar imagen binaria**

- Instalar el archivo de requisitos

 Ve a la carpeta del SDK de Sidewalk `$[Amazon Sidewalk repository]/tools/scripts/public/provision/`, y luego ejecuta el siguiente comando para instalar el archivo de `requirements`.

 ```cpp
 pip3 install -r requirements.txt
 ```

- Generar la imagen binaria de fabricación

 Ejecuta el script `provision.py` para generar el archivo de imagen binaria de fabricación que se utilizará para aprovisionar la placa de desarrollo que estás usando como punto final de Sidewalk.

- Si estás usando el archivo JSON de dispositivo combinado que obtuviste de la consola de AWS IoT, usa el parámetro certificate_json para especificar este archivo como entrada al ejecutar el script de aprovisionamiento.

 ```cpp
 python3 provision.py aws --output_bin mfg.bin --certificate_json certificate.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

 Si estás usando los archivos JSON de dispositivo separados que obtuviste como respuestas de las operaciones de API GetDeviceProfile y GetWirelessDevice, usa los parámetros wireless_device_json y device_profile_json para especificar estos archivos como entrada al ejecutar el script de aprovisionamiento.

 ```cpp
 python3 provision.py aws --output_bin mfg.bin \  
    --wireless_device_json wireless_device.json \
    --device_profile_json device_profile.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

Deberías ver la siguiente salida:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/gen-files.png"/></div>

- Flashea el archivo mfg.hex

 Tu archivo de aprovisionamiento estará típicamente ubicado en el directorio `EdgeDeviceProvisioning`.

 Para flashear la imagen binaria, usa la dirección `0xFD000` para cargar la imagen binaria en el Nordic Semiconductor HDK. Para información sobre cómo flashear la imagen binaria, consulta la documentación de Nordic Semiconductor.

**Paso 4: Construir y flashear la demo**

- Abre una ventana de terminal.

- Ve al directorio `template_lbm_wio_tracker`.

 Por ejemplo:

  ```cpp
  cd /opt/nordic/ncs/v2.5.0/sidewalk/samples/template_lbm_wio_tracker
  ```

- Construye la aplicación usando el siguiente comando west:

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110_SRC
 ```

o con biblioteca de controlador de radio precompilada:

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/comparing.png"/></div>

- Flashea la aplicación usando el siguiente comando west:

 ```cpp
 west flash
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/flash-suc.png"/></div>

### Registro de Sidewalk

Después de haber aprovisionado el endpoint de Sidewalk, el endpoint debe registrarse para que pueda comunicarse a través de la red Sidewalk.

Para registrar su endpoint de Sidewalk, use el registro automático sin contacto con Sidewalk Frustration Free Networking (FFN), o registre manualmente su dispositivo usando una máquina Mac o Ubuntu nativa que ejecute el script de registro.

|Criterios Registro automático| (usando Sidewalk FFN)|Registro manual|
 |--|--|--|
 |Asociación de usuario y endpoint| Este método de registro no requiere ninguna asociación entre el endpoint de Sidewalk y un usuario. El endpoint puede unirse a la red Sidewalk sin estar asociado con ningún usuario. |Este método de registro requiere una asociación entre el endpoint de Sidewalk y la cuenta de Amazon de un usuario.|
 |LWA (Login with Amazon)| LWA no es requerido.| LWA es requerido para vincular la cuenta de Amazon del usuario y la cuenta de AWS que es usada por el desarrollador del endpoint de Sidewalk.|

**Para realizar el registro usando Sidewalk FFN:**

- Su gateway y endpoint de Sidewalk deben estar encendidos.
- Su gateway debe estar habilitado para Sidewalk, y en rango cercano a su endpoint. Recomendamos que mantenga los dispositivos dentro de 10 metros uno del otro.

 Para `Registro manual de Sidewalk` y otros detalles por favor consulte [aquí](https://docs.sidewalk.amazon/provisioning/iot-sidewalk-register-endpoint.html).

### Cambio de Red

 El predeterminado es la red LoRaWAN, haga clic en el `Botón de Usuario` para cambiar de red.

 <div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/click-button.png"/></div>

### Ver Mensaje

#### Agregar Destino

En la [consola de IoT Core](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/home), seleccione `LPWAN devices` del menú izquierdo y luego `Destinations`.

Seleccione `Edit` y seleccione `Publish to AWS IoT Core message broker`. En el cuadro de texto del tema, ingrese assets como el Tema MQTT.

Bajo `Permissions` seleccione `Create a new service role` y deje el `Role name` en blanco.

- **ExpressionType**: `MqttTopic`
- **Expression**: `EmbeddedWorldTrackerDemo`

#### Agregar Regla de Decodificador

Navegue a la pestaña `Message routing` → `Rules`, y haga clic en el botón `Create Rule`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png"/></div>

Nombre su regla y envíela.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png"/></div>

Desde la Regla de IoT Core, seleccione la Función `Lambda`. luego haga clic en `Create a Lambda function`.

Author from scratch<br/>
`Function name`: Nombre su función.<br/>
`Runtime`: Node.js 14.x<br/>
`Architexture`: x86_64<br/>

Haga clic en el botón `Create function` para crear una nueva función

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png"/></div>

En la siguiente página de configuración de función, elimine todo el código y reemplácelo con el siguiente script, luego haga clic en el botón `Deploy`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png"/></div>

<details>
<summary>Código Lambda</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const {IoTWirelessClient, GetWirelessDeviceCommand} = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

function decodeUplink(input) {
    const originMessage = input.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: input,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return {data: decoded}
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return {data: decoded}
}

function messageAnalyzed(messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack(messageValue) {
    return [{dataId: 0, dataValue: messageValue}]
}

function deserialize(dataId, dataValue) {
    let measurementArray = null
    measurementArray = [
        {
            measurementId: '4198',
            type: 'Latitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(0, 8), 1000000))
        },
        {
            measurementId: '4197',
            type: 'Longitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(8, 16), 1000000))
        },
        {
            measurementId: '4097',
            type: 'Air Temperature',
            measurementValue: getSensorValue(dataValue.substring(16, 20), 10)
        },
        {
            measurementId: '4098',
            type: 'Air Humidity',
            measurementValue: getSensorValue(dataValue.substring(20, 22))
        }
    ]
    return measurementArray
}

function getSensorValue(str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString(arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}

function loraWANV2DataFormat(str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform(data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary(arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        let device_id = event['WirelessDeviceId'];
        let lorawan_info = null;
        let sidewalk_info = null;
        let payload = null
        let timestamp = null

        let queryDeviceRequest = {
            Identifier: device_id,
            IdentifierType: "WirelessDeviceId"
        }
        let deviceInfo = await wireless_client.send(new GetWirelessDeviceCommand(queryDeviceRequest))
        console.log("device_info：" + JSON.stringify(deviceInfo))
        if (!deviceInfo || deviceInfo.name) {
            return {
                statusCode: 500,
                body: 'can not find this wirelessDeviceId: ' + device_id
            };
        }
        let device_name = deviceInfo.Name

        if (event["WirelessMetadata"]["LoRaWAN"]) {
            lorawan_info = event["WirelessMetadata"]["LoRaWAN"]
            timestamp = lorawan_info["Timestamp"]
            let bytes = Buffer.from(event["PayloadData"], 'base64');
            payload = bytes2HexString(bytes)
        } else if (event["WirelessMetadata"]["Sidewalk"]) {
            timestamp = new Date().getTime()
            let origin = new Buffer(event["PayloadData"], 'base64')
            payload = origin.toString('utf8')
        }

        console.log(`event.PayloadData: ${payload}`)
        const resolved_data = decodeUplink(payload);
        
        // publish all measurement data
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/sensor/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                DeviceName: "assettracker",
                timestamp: timestamp,
                data: resolved_data.data,
                WirelessDeviceId: device_id,
                PayloadData: event['PayloadData'],
                WirelessMetadata: event["WirelessMetadata"]
            })
        };

        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```

</details>

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/004/001/lambda.1.png"/></div>

Ahora regresa al `Device Destination`, selecciona Enter a rule name e ingresa el nombre que acabamos de crear.

Navega a la `AWS IoT Core Console` y selecciona `MQTT Test Client` y suscríbete al tema.

#### Agregar Regla de Rastreador

Repite los pasos anteriores para crear una nueva regla, y copia el siguiente código Lambda:

<details>
<summary>Código Lambda</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");

const {LocationClient, BatchUpdateDevicePositionCommand} = require("@aws-sdk/client-location")

const {IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

exports.handler = async (event) => {
    console.log(`message received: ${JSON.stringify(event)}`)
    let device_id = event['WirelessDeviceId']
    let device_name = event['DeviceName']
    let measurements = event['data']['messages']
    let resolver_time = event['timestamp']
    let network = 1; // 1: lorawan 2: sidewalk
    if (event["WirelessMetadata"] && event["WirelessMetadata"]["Sidewalk"]) {
        network = 2
    }

    let longitude;
    let latitude;
    let gps_data = null
    let sensor_map = {}
    if (measurements && measurements.length > 0) {
        for (let i = 0; i < measurements.length; i++) {
            for (let j = 0; j < measurements[i].length; j++) {
                if (measurements[i][j].measurementId === "4097") {
                    sensor_map["Temperature"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4098") {
                    sensor_map["Humidity"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4197") {
                    longitude = measurements[i][j]["measurementValue"];
                }
                if (measurements[i][j].measurementId === "4198") {
                    latitude = measurements[i][j]["measurementValue"];
                }

                if (latitude && longitude) {
                    try {
                        gps_data = {
                            "type": "Point",
                            "coordinates": [longitude, latitude]
                            // "coordinates": [33.3318, -22.2155, 13.123]
                        }
                    } catch (e) {
                        console.log(`===>error`, e)
                    }
                }
            }
        }
    }

    if (gps_data) {
        console.log(`update device location : ${JSON.stringify(gps_data)}`)
        await updateDevicePosition(gps_data, device_id);
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/location/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                timestamp: resolver_time,
                deviceId: device_id,
                deviceName: device_name,
                latitude: gps_data.coordinates[1],
                longitude: gps_data.coordinates[0],
                positionProperties: {'batteryLevel': 90, "sensor:": 60}
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("mqtt push response: " + JSON.stringify(response));

        let locationClient = new LocationClient()
        let location_info = {
            TrackerName: 'AssetTracker',
            Updates: [
                {
                    DeviceId: 'assettracker',
                    SampleTime: new Date(resolver_time),
                    Position: [
                        gps_data.coordinates[0], gps_data.coordinates[1]
                    ],
                    Accuracy: {
                        Horizontal: 1,
                    },
                    PositionProperties: {
                        "context": JSON.stringify({net: network}),
                        "sensor": JSON.stringify(sensor_map)
                    }
                }
            ]
        }
        let loc_response = await locationClient.send(new BatchUpdateDevicePositionCommand(location_info))
        console.log("loc update response: " + JSON.stringify(loc_response));

    }
}

async function updateDevicePosition(gps_data, device_id) {
    const input = { // UpdateResourcePositionRequest
        ResourceIdentifier: device_id, // required
        ResourceType: "WirelessDevice", // required
        GeoJsonPayload: JSON.stringify(gps_data),
    };
    const command = new UpdateResourcePositionCommand(input);
    const wireless_response = await wireless_client.send(command);
    console.log(wireless_response)
}
```

</details>

## Construyendo la Aplicación Web

Desplegaremos los recursos necesarios de Amazon Location Service requeridos para mostrar nuestro dispositivo en un mapa.

### Creando el Mapa

Como primer paso necesitarás crear un nuevo recurso de Mapa de Amazon Location Service. Lo harás usando la Consola de AWS.

- Abre la [Consola de Amazon Location Service](https://console.aws.amazon.com/location/home).

- Luego expande la barra de navegación en el lado izquierdo de la pantalla, y selecciona Maps.

- En esta pantalla, crea un nuevo mapa:

- Ingresa el nombre del mapa y selecciona el estilo de mapa `HERE Explore`, luego haz clic en `Create map`.

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/003/create-map.2.png"/></div>

### Creando el Calculador de Rutas

- Abre la [Consola de Amazon Location Service](https://console.aws.amazon.com/location/home).

- Luego expande la barra de navegación en el lado izquierdo de la pantalla, y selecciona `Route calculators`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/router-cal.png"/></div>

Continúa seleccionando `HERE` como Proveedor de Datos, haz clic en el botón `Create route calculator`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/create-router.png"/></div>

### Creando el Rastreador

Navega a `Trackers` -> `Create tracker`:

Ingresa el nombre del rastreador y selecciona `Time-based filtering` bajo filtrado de posición.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/time-based.png"/></div>

Luego desplázate hacia abajo y marca la configuración `Enable EventBridge events` bajo la configuración de EventBridge, luego haz clic en `Create tracker`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/enable-bridge.png"/></div>

### Creando la Colección de Geocercas

Navega a `Geofence collections`, y haz clic en `create geofence collection`.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/geolocate.png"/></div>

## Mostrar la Aplicación Web

### Desplegar la Aplicación a Cloudfront

- En tu Terminal de Cloud9, navega a `/home/ec2-user/environment/asset-tracking-workshop`:

 ```cpp
 cd /home/ec2-user/environment/asset-tracking-workshop
 ```

- Ejecuta el siguiente comando:

 ```cpp
 npm run frontend:publish
 ```

- Una vez completado, recibirás la URL del sitio web.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/web-url.png"/></div>

- Navega a esta URL en tu navegador para ver tu aplicación de seguimiento.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/s3-map.png"/></div>

## Recursos

[SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

[template_lbm_wio_tracker](https://drive.google.com/drive/folders/1UVte1UbfFor1remgAcpfmCHSKXvOGyYn)
