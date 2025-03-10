---
description: Introducción de cómo implementar servicios de Amazon Sidewalk en el XIAO nRF52840.
title: Seeed Studio XIAO nRF52840 en Amazon Sidewalk
keywords:
- sidewalk
- XIAO BLE
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao-ble-sidewalk
last_update:
  date: 02/16/2025
  author: Guillermo
---

# Seeed Studio XIAO nRF52840 en Amazon Sidewalk

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/19.jpg" style={{width:1000, height:'auto'}}/></div>

## Introducción

Seeed Studio se enorgullece de ser parte de los socios del ecosistema Amazon Sidewalk, proporcionando productos y soluciones habilitados para Sidewalk que permiten diversos casos de uso de IoT en la red Sidewalk.

Amazon Sidewalk es una red comunitaria inalámbrica segura que utiliza Amazon Sidewalk Gateways (también llamados puentes Sidewalk), como dispositivos compatibles con Amazon Echo y Ring, para proporcionar conectividad en la nube para dispositivos finales IoT.

Amazon Sidewalk permite conectividad de bajo ancho de banda y largo alcance en el hogar y más allá utilizando Bluetooth Low Energy para comunicación a corta distancia y protocolos de radio LoRa y FSK en frecuencias de 900 MHz para cubrir distancias más largas. Los Sidewalk Gateways comparten una pequeña porción del ancho de banda de internet del usuario, que luego se usa para conectar los puntos finales a la red. La fuerza de la red Amazon Sidewalk aumenta con el número de gateways. Aprende más sobre [Amazon Sidewalk](https://www.aboutamazon.com/news/devices/everything-you-need-to-know-about-amazon-sidewalk).

:::note
Amazon Sidewalk está actualmente disponible en los EE. UU. Los desarrolladores pueden utilizar la funcionalidad de gateway de Sidewalk fuera de los EE. UU. exclusivamente para el desarrollo y pruebas de sus puntos finales habilitados para Sidewalk. Además, recomendamos que consultes con las autoridades regulatorias locales y verifiques si el gateway está autorizado para operar su radio en tu localidad, ya que los dispositivos de banda libre de EE. UU. solo están destinados a fines de desarrollo.
:::

### Diferenciación de Amazon Sidewalk

Lo que hace que Sidewalk se diferencie de otras redes disponibles hoy en día:

- **Conectividad persistente**

    La red Amazon Sidewalk es impulsada por millones de dispositivos Amazon Echo y Ring participantes como puentes Sidewalk, para proporcionar conectividad en la nube a los dispositivos IoT. Esto garantiza conectividad persistente para dispositivos que están fuera del alcance de una red Wi-Fi doméstica o que dependen de una aplicación móvil o gateway propietario para la conexión a la nube.

- **Versatilidad en la conexión**

    Amazon Sidewalk permite que los dispositivos inteligentes se comuniquen a través de protocolos inalámbricos como Bluetooth Low Energy (BLE) y ondas de 900MHz/sub-GHz. Esto ofrece una conexión segura, confiable y versátil para soportar una amplia gama de casos de uso de IoT.

- **Registro automático de dispositivos**

    El proceso de registro sin contacto de Amazon Sidewalk comienza automáticamente cuando el gateway Sidewalk y un dispositivo no registrado están cerca uno del otro. Los clientes pueden conectar sus dispositivos habilitados para Sidewalk a la red Amazon Sidewalk sin necesidad de una configuración compleja. Esta facilidad de configuración mejora la experiencia general del usuario.

- **Costo**

    Amazon Sidewalk es una red gratuita para conectarse que ofrece cobertura a más del 90% de la población de EE. UU. No es necesario construir o gestionar una infraestructura de red separada, lo que ayuda a reducir la inversión de capital y los costos operativos.

- **Experiencia de desarrollo simple**

    Los dispositivos habilitados para Sidewalk vienen pre-configurados con los certificados de seguridad necesarios para establecer una conexión cifrada con AWS IoT Core. Esto te permite crear soluciones IoT que conectan rápidamente tus dispositivos de borde a AWS, facilitando una experiencia de configuración plug-and-play para los clientes.

- **Privacidad y seguridad**

    Amazon Sidewalk está diseñado con múltiples características de privacidad y seguridad para proteger los datos que viajan por la red, garantizando la protección de los datos y la privacidad del cliente.

## Seeed Studio XIAO nRF52840 para Amazon Sidewalk

El XIAO nRF52840 es un módulo inalámbrico calificado para Amazon Sidewalk, proporcionando conectividad de dispositivos IoT a través de la tecnología de radio Bluetooth Low Energy en la red Amazon Sidewalk.

El modelo cuenta con un diseño compacto y potente SoM (System-on-Module) para la integración con Amazon Sidewalk. Con su chip nRF52840 incorporado, este módulo ofrece capacidades BLE, permitiendo conectividad sin interrupciones para aplicaciones IoT. El Seeed Studio XIAO tiene un tamaño pequeño, lo que lo hace ideal para implementaciones en espacios limitados. Con su rendimiento confiable y soporte para Amazon Sidewalk, simplifica y acelera el desarrollo de soluciones IoT seguras y confiables.

Para más detalles sobre las especificaciones técnicas del módulo, haz clic [aquí](https://wiki.seeedstudio.com/XIAO_BLE/).

La documentación te guiará a través de:

1. Instalar y configurar el entorno de desarrollo de Amazon Sidewalk.
2. Configurar tus servicios en la nube y gestionar tu XIAO nRF52840.
3. Ejecutar el programa de ejemplo BLE de Amazon Sidewalk.

Una vez completado, podrás ejecutar una aplicación de ejemplo y probarla con Amazon Sidewalk.

## Preparación del hardware

El contenido de este tutorial minimizará la necesidad de soldar o realizar cableado adicional. Por lo tanto, utilizaremos dos placas de expansión que están disponibles actualmente para ayudarnos a completar el proyecto lo más rápido posible. Por supuesto, si no deseas el gasto adicional, también puedes optar por conectar el dispositivo directamente al XIAO a través de una placa de pruebas o cable dúplex. Dicho esto, los dispositivos en **Esenciales** son el hardware básico que debes tener, y los **Opcionales** no son esenciales.

### Esenciales

Para completar el contenido de este tutorial de ejemplo, será necesario preparar lo siguiente.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO nRF52840 Sense</th>
			<th>Gateway Amazon Sidewalk (Echo Gen4)</th>
            <th>Grove - Botón LED Rojo</th>
            <th>J-Link</th>
            <th>USB a UART</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/20.jpeg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/21.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/22.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Button.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
            <td></td>
		</tr>
	</table>
</div>

:::tip
Para facilitar las pruebas de Amazon Sidewalk y el desarrollo de puntos finales para desarrolladores fuera de EE. UU. que trabajen fuera de la región **US-East-1** (Virginia del Norte), es necesario configurar una VPN. Esto permite un acceso sin interrupciones y asegura una participación eficiente en el proceso de desarrollo.
:::


### Opcional

Para facilitar el cableado y la expansión Grove, o para una conexión sencilla al XIAO a través de JLink, es posible que necesites las siguientes placas de expansión.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio Expansion board para XIAO</th>
			<th>Seeed Studio Grove Base para XIAO</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Configurar el entorno de desarrollo de Amazon Sidewalk

:::tip
El tutorial original para la instalación rápida del nRF Connect SDK se puede leer [aquí](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/assistant.html#installing-automatically).
:::

La solución de Amazon Sidewalk de Nordic Semiconductor se basa en el nRF Connect SDK v2.3.0. Puedes configurar tu entorno de desarrollo siguiendo uno de los métodos de instalación a continuación:

- Instalación automática (Toolchain Manager)
- [Instalación manual](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/gs_installing.html#install-the-required-tools)

Esta sección se centrará en cómo instalar el nRF Connect SDK a través del Toolchain Manager, el método de instalación automática. El sistema se basa en Windows 11.

Sigue los pasos a continuación para instalar el nRF Connect SDK automáticamente usando la aplicación Toolchain Manager. Esta aplicación instala todo el conjunto de herramientas del nRF Connect SDK, incluida la extensión nRF Connect para VS Code y el código fuente del nRF Connect SDK.

### Instalar los requisitos previos

Antes de comenzar a configurar el conjunto de herramientas, instala las actualizaciones disponibles para tu sistema operativo. Consulta [Requisitos](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/recommended_versions.html#gs-recommended-versions) para obtener información sobre los sistemas operativos compatibles y las características de Zephyr.

Además, asegúrate de instalar la versión Universal de SEGGER J-Link. Esto es necesario para que SEGGER J-Link funcione correctamente tanto con ensamblados Intel como ARM.

### Instalar Toolchain Manager

Toolchain Manager está disponible desde nRF Connect for Desktop, una herramienta multiplataforma que ofrece diferentes aplicaciones que facilitan la instalación del nRF Connect SDK. Tanto la herramienta como la aplicación están disponibles para Windows, Linux y macOS.

**Paso 1**. Descarga [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop) para tu sistema operativo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/1.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2**. Instala y ejecuta la herramienta en tu máquina.

**Paso 3**. En la sección **APPS**, haz clic en **Instalar** junto a **Toolchain Manager**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/2.png" style={{width:600, height:'auto'}}/></div>

**Paso 4**. La aplicación está instalada en tu máquina, y el botón **Instalar** cambia a **Abrir**.

**Paso 5**. Abre Toolchain Manager en nRF Connect for Desktop.

Haz clic en **SDK ENVIRONMENTS** en la barra de navegación para especificar dónde deseas instalar el nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/3.png" style={{width:600, height:'auto'}}/></div>

**Paso 6**. En **SDK ENVIRONMENTS**, haz clic en el botón **Instalar** junto a la versión de **nRF Connect SDK** que deseas instalar.

La versión de nRF Connect SDK seleccionada se instala en tu máquina. El botón de instalación cambia a **Abrir VS Code**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/30.png" style={{width:600, height:'auto'}}/></div>

:::tip
El tiempo de instalación está relacionado con la red en tu entorno y se espera que la instalación tarde aproximadamente **una hora**. Durante este tiempo, el software puede no mostrar actividad, así que no asumas que hay un problema. Puedes verificar el progreso de la instalación a través del registro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/4.png" style={{width:600, height:'auto'}}/></div>
:::

### Descargando el repositorio de Amazon Sidewalk

Después de la instalación, hay dos formas de construir una aplicación:

- Usando Visual Studio Code y la extensión nRF Connect para VS Code
- Usando la línea de comandos

**Paso 7**. Para nuestro proyecto, el uso de la línea de comandos es suficiente. Haz clic en la flecha hacia abajo junto a la versión que instalaste y selecciona **Open bash**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/23.png" style={{width:600, height:'auto'}}/></div>

La estructura de tu directorio debería verse de la siguiente manera:

```
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

**Paso 8**. Clona el [repositorio de la aplicación Amazon Sidewalk](https://github.com/nrfconnect/sdk-sidewalk) desde el repositorio sdk-sidewalk a la carpeta del nRF Connect SDK, y nómbralo `sidewalk` ejecutando el siguiente comando:

```
git clone https://github.com/nrfconnect/sdk-sidewalk.git sidewalk
```

**Paso 9**. Instala los requisitos de Python para Amazon Sidewalk.

```
pip install -r sidewalk/requirements.txt
```

:::note
Si tu computadora no tiene un entorno de Python instalado, por favor lee el tutorial [aquí](https://www.digitalocean.com/community/tutorials/install-python-windows-10) para instalar la última versión de Python 3 en tu computadora.
:::

**Paso 10**. Configura el manifiesto de la aplicación Amazon Sidewalk y actualiza.

Verifica la ruta actual del manifiesto:

```
west manifest --path
```

La ruta devuelta debería ser similar al siguiente formato.

```
> /path-to-ncs-folder/nrf/west.yml
```

Configura la ruta del manifiesto al repositorio de Amazon Sidewalk:

```
west config manifest.path sidewalk
```

Actualizar todos los repositorios:

```
west update
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/32.png" style={{width:800, height:'auto'}}/></div>

Dependiendo de tu conexión, la actualización podría tardar un poco.

Verifica la nueva ruta del manifiesto:

```
west manifest --path
```

La ruta devuelta debería ser similar al siguiente formato.

```
> /path-to-ncs-folder/sidewalk/west.yml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/31.png" style={{width:600, height:'auto'}}/></div>

Por favor, mantén la ventana de Bash abierta, volveremos en unos minutos.

## Configura tus servicios en la nube de AWS

:::tip
El tutorial original para la configuración de tu producto Amazon Sidewalk se puede leer [aquí](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html).
:::

A continuación, necesitamos configurar los servicios en la nube de AWS para que el dispositivo esté conectado a tu cuenta de AWS a través de una clave.

**Paso 1**. Descarga el repositorio de la aplicación de ejemplo Amazon Sidewalk IoT a tu máquina local. Abre una nueva terminal (si estás usando Windows, abre un nuevo Powershell) e ingresa el siguiente comando para clonar el repositorio.

```
git clone https://github.com/aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git
```

**Paso 2**. Si estás utilizando Amazon IoT Core por primera vez, es posible que necesites registrarte para obtener una cuenta raíz, o si ya tienes una cuenta raíz o IAM, inicia sesión en la [consola de Amazon IoT Core](https://console.aws.amazon.com/iam).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/6.png" style={{width:800, height:'auto'}}/></div>

**Paso 3**. Obtén la clave de la cuenta.

Una vez hayas iniciado sesión, en la esquina superior derecha de la consola, haz clic en tu nombre de usuario y selecciona Credenciales de seguridad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/33.png" style={{width:400, height:'auto'}}/></div>

Luego, por favor, crea una nueva credencial y guarda tu **Access Key ID** y **Secret Access Key**. Los utilizaremos en los pasos siguientes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/34.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4**. Configura el archivo *credentials* en tu máquina local.

:::note
Si aún no has instalado la [AWS CLI](https://aws.amazon.com/cli/), es posible que necesites instalarla.
:::

Si tienes la AWS CLI instalada, puedes usar el comando `aws configure` para configurar tu archivo de credenciales. Si estás utilizando un sistema Windows, necesitarás ejecutar el comando en una **ventana de CMD** con privilegios de administrador.

```
aws configure
```

La ventana te pedirá que ingreses tus claves, por favor ingrésalas por separado y presiona Enter para confirmar.

```
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

A continuación, se te pedirá que elijas el país y la región. Aquí necesitamos seleccionar **us-east-1**.

```
region=us-east-1
```

Para el resto, simplemente presionamos Enter y dejamos los valores predeterminados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/35.png" style={{width:800, height:'auto'}}/></div>

**Paso 5**. Agrega permisos de usuario para crear recursos.

Si tu usuario tiene permisos de administrador, el requisito previo ya está cumplido, puedes omitir este paso.

:::note
Este tutorial utiliza una cuenta con derechos de administrador de forma predeterminada. Si estás utilizando una cuenta IAM, por favor contacta a tu administrador para habilitar permisos específicos para tu cuenta.

- Ejecuta el script `python aws-iot-core-for-amazon-sidewalk-sample-app/ApplicationServerDeployment/policies/generate_policy.py`, el cual generará documentos de política personalizados en el directorio *ApplicationServerDeployment/policies/*
- Ve a la consola de IAM, crea la política utilizando el contenido de *DeployStackPolicy.json*
- Asigna la política creada a tu usuario
Consulta el [tutorial de IAM: Crear y adjuntar tu primera política gestionada por el cliente](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_managed-policies.html) para más detalles.

Asegúrate de que *Simplicity Commander* (para SiLabs) esté presente en la variable de entorno PATH de tu sistema.

Intenta ejecutar `commander --version` en la terminal para verificar que Simplicity Commander esté disponible.
:::

## Ejecuta el ejemplo BLE de Amazon Sidewalk

:::tip
El tutorial original para la plantilla Bluetooth LE se puede leer [aquí](https://nrfconnect.github.io/sdk-sidewalk/testing_samples/sidewalk_application_samples/template_ble.html#template-ble).
:::

### Generación de aprovisionamiento

**Paso 1**. Ve a las herramientas de AWS IoT Core para Amazon Sidewalk.

Abre la carpeta **aws-iot-core-for-amazon-sidewalk-sample-app** que clonamos anteriormente.

**Paso 2**. Rellena el archivo de configuración `config.yaml`. Establece la plataforma de hardware **NORDIC**.

Abre el archivo llamado **config.yaml** en la carpeta (utiliza un editor adecuado, como VS Code). Pega lo siguiente y guárdalo.

```
Config:
AWS_PROFILE: default  # Name of your AWS profile from .aws/credentials
DESTINATION_NAME: SensorAppDestination  # Sidewalk destination used for uplink traffic routing
HARDWARE_PLATFORM: NORDIC  # Available values: NORDIC, TI, SILABS or ALL
USERNAME: null
PASSWORD: null
INTERACTIVE_MODE: True
Outputs:
    DEVICE_PROFILE_ID: null
    WEB_APP_URL: null
_Paths:
    PROVISION_SCRIPT_DIR: tools/provision
    SILABS_COMMANDER_TOOLS_DIR: null  # Not needed if Silabs Commander is already in system Path. Only needed for SILABS.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/36.png" style={{width:1000, height:'auto'}}/></div>


**Paso 3**. Configura el entorno virtual de Python para las herramientas de aprovisionamiento:

```
cd aws-iot-core-for-amazon-sidewalk-sample-app
python -m pip install --user virtualenv
python -m venv sample-app-env
sample-app-env\Scripts\activate.bat
pip install pip==22.3.1
python -m pip install -r requirements.txt
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

**Paso 4**. En este punto, puede que quieras ejecutar el script `helper env_check.py` para verificar tu entorno y detectar los errores más comunes.

```
python env_check.py
```

Si el mensaje aparece como se muestra, entonces la instalación de tu entorno se ha realizado correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/37.png" style={{width:900, height:'auto'}}/></div>

**Paso 5**. Ejecuta los scripts de aprovisionamiento del dispositivo:

```
python EdgeDeviceProvisioning/provision_sidewalk_end_device.py
```

Deberías ver la siguiente salida:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/9.png" style={{width:800, height:'auto'}}/></div>

Necesitamos el archivo `Nordic_MFG.hex` que se ha generado aquí, el cual será cargado eventualmente en el XIAO nRF52840.

:::note
**Nordic_MFG.hex** es la única credencial para que un dispositivo establezca un enlace de comunicación con tu Amazon IoT Core, y es diferente para cada dispositivo o cuenta.
:::

Tu archivo de aprovisionamiento se encuentra en el directorio `EdgeDeviceProvisioning`. Los dispositivos están agrupados en el subdirectorio del perfil del dispositivo, como se muestra en la siguiente estructura:

```
EdgeDeviceProvisioning \
- DeviceProfile_<profile-id> \
- DeviceProfile.json
- WirelessDevice_<device-id>\
    --  Nordic_MFG.bin
    --  Nordic_MFG.hex
    --  WirelessDevice.json
```

Por favor, copia los archivos **Nordic_MFG.hex** y guárdalos en un lugar donde puedas encontrarlos fácilmente.

**Paso 6**. Sal del entorno virtual de Python:

```
deactivate
```

### Agrega MQTT a destino

:::tip
Para esta parte del tutorial puedes leer los [tutoriales oficiales](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html#add-mqtt-to-destination) provided by Sidewalk.
:::

### Resumen de los ejemplos

El ejemplo muestra una plantilla para la aplicación Amazon Sidewalk End Node. Está optimizado para Bluetooth LE.

El ejemplo es compatible con los siguientes kits de desarrollo:

| Plataformas de hardware | PCA | Nombre de la placa | Objetivo de compilación |
| ------------------------ | --- | ------------------ | ----------------------- |
| nRF52840 DK              | PCA10056 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

Dado que Amazon Sidewalk aún no ha fusionado nuestra solicitud de PR, actualmente vamos a soportar el XIAO nRF52840 modificando la plataforma nRF52840 DK soportada.

| Plataformas de hardware | Nombre de la placa | Objetivo de compilación |
| ------------------------ | ------------------ | ----------------------- |
| Seeed Studio XIAO nRF52840 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

El ejemplo muestra la implementación de la API de Amazon Sidewalk para el protocolo de transporte Bluetooth LE. Es un ejemplo optimizado en memoria de la configuración de Amazon Sidewalk donde solo se soporta el protocolo de transporte Bluetooth LE. Debido al tamaño reducido, ambas particiones del bootloader para la aplicación se colocan en la memoria flash interna del SoC soportado (nRF52840).

#### Interfaz de usuario

Una acción de botón se activa cuando se suelta el botón. Para usar una acción de presión prolongada, mantén presionado un botón durante 2 segundos o más y suéltalo.

La asignación de botones es la siguiente:

- **Botón 1 (presión prolongada) -- D1**:

    Restablecimiento de fábrica: La aplicación informa al stack de Amazon Sidewalk sobre el evento de restablecimiento de fábrica. La biblioteca de Amazon Sidewalk borra su configuración del almacenamiento no volátil. Después de un restablecimiento exitoso, el dispositivo debe registrarse nuevamente en los servicios en la nube.

- **Botón 2 -- D3**:

    Alternar solicitud de conexión: El dispositivo solicita a la puerta de enlace de Amazon Sidewalk que inicie una conexión mientras el dispositivo está haciendo publicidad a través de Bluetooth LE. Después de que la conexión se interrumpe, el usuario debe restablecer el estado del beacon. Las puertas de enlace no siempre pueden procesar esta solicitud, ya que depende del número de dispositivos conectados.

- **Botón 3 -- D4**:

    Enviar Hello: Esta acción pondrá un mensaje en la cola para enviarlo a la nube. Si Amazon Sidewalk no está listo, simplemente mostrará un error sin enviar el mensaje. La cola se procesará eventualmente, y todos los mensajes en la cola se enviarán.

- **Botón 4 (presión corta) -- D9**:

    Establecer nivel de batería falso: La acción establece un nivel de batería simulado.

- **Botón 4 (presión larga) -- D9**:

    Entrar en estado DFU: Esta acción desactiva el stack de Amazon Sidewalk y comienza el servidor SMP Bluetooth LE. Puedes actualizar la imagen del firmware usando la aplicación nRF Connect para dispositivos móviles. Para salir del estado DFU, realiza un ciclo de encendido en tu dispositivo.

Los LEDs representan el estado actual de la aplicación (Aún no logrado):

- **LED 1 -- D0**:

    Aplicación conectada correctamente.

- **LED 2 -- D2**:

    Aplicación registrada correctamente.

- **LED 3 -- D5**:

    Sincronización de tiempo de la aplicación exitosa.

- **LED 4 -- D8**:

    El enlace de la aplicación está activo.

### Preparación del firmware de ejemplo

Este ejemplo usa el programa de ejemplo BLE proporcionado por Amazon Sidewalk. El firmware del controlador de hardware es común para todos los XIAO nRF52840. Si no deseas pasar por los pasos de esta sección, también puedes descargar directamente el archivo **merged.hex** proporcionado por nosotros.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/merged.hex">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download file</font></span></strong>
    </a>
</div><br />

Aquí están los pasos exactos a seguir.

**Paso 1**. Descarga el programa escrito para el XIAO nRF52840 desde Github.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-nRF52840-sidewalk/releases/tag/v1.0.0">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga los lanzamientos</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

**Paso 2**. Una vez descargado, por favor descomprime la carpeta en el directorio ncs. La ruta por defecto es la siguiente:

```
C:\ncs\v2.3.0\zephyr\boards\arm\nrf52840dk_nrf52840
```

:::caution
El directorio de archivos originalmente contenía los archivos de desarrollo para el nRF52840 DK. Para simplificar, hemos sobrescrito la placa de desarrollo renombrando el programa del XIAO nRF52840.

Así que lo único que tienes que hacer es sobrescribir todos los archivos en el directorio original **nrf52840dk_nrf52840** con todos los archivos del archivo comprimido.
:::

**Paso 3**. Volvamos a la ventana de Bash del nRF Connect SDK. Ingresa el siguiente comando para realizar la generación del firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/38.png" style={{width:600, height:'auto'}}/></div>

```
cd sidewalk/samples/template_ble/
west build -b nrf52840dk_nrf52840
```

Si la ejecución es exitosa, verás la siguiente salida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/10.png" style={{width:800, height:'auto'}}/></div>

En este punto, tenemos el firmware de muestra, que se llama: `merged.hex` y se almacena en la ubicación predeterminada de:

```
C:\ncs\v2.3.0\sidewalk\samples\template_ble\build\zephyr
```

Puedes comenzar colocando este archivo junto con el archivo **Nordic_MFG.hex** que preparamos anteriormente, y los usaremos juntos más adelante.

### Flashear el firmware para XIAO nRF52840

**Paso 1**. Abre **nRF Connect for Desktop**, busca **Programmer** en las aplicaciones y instálalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/11.png" style={{width:600, height:'auto'}}/></div>

**Paso 2**. Conecta el XIAO nRF52840 a través de JLink.

Por favor, conecta el XIAO nRF52840 al JLink mediante la interfaz SWD.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF52840</th>
			<th>JLink (Versión no educativa)</th>
		</tr>
		<tr>
			<td align="center">3V3</td>
			<td align="center">Vterf</td>
		</tr>
		<tr>
			<td align="center">GND</td>
			<td align="center">GND</td>
		</tr>
        <tr>
			<td align="center">SWDIO</td>
			<td align="center">SWIO</td>
		</tr>
        <tr>
			<td align="center">SWCLK</td>
			<td align="center">SWCK</td>
		</tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/24.jpg" style={{width:600, height:'auto'}}/></div><br />

Si no tienes la intención de usar la placa de expansión XIAO, puedes consultar el [Wiki de XIAO nRF52840](https://wiki.seeedstudio.com/XIAO_BLE#access-the-swd-pins-for-debugging-and-reflashing-bootloader) sobre el uso de la interfaz SWD para soldar adicionalmente un cable dúplex al JLink.

**Paso 3**. Abre Programmer y graba ambos firmwares en el XIAO nRF52840.

Haz clic en el botón **Agregar archivo** en la esquina superior izquierda del software y agrega los archivos **merged.hex** y **Nordic_MFG.hex** preparados en este artículo respectivamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/12.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/13.png" style={{width:800, height:'auto'}}/></div>

Luego, conecta el JLink a tu computadora y haz clic en la esquina superior izquierda para seleccionar tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/14.png" style={{width:800, height:'auto'}}/></div>

Una vez conectado, haz clic en el botón **Read** en la parte izquierda para obtener la partición de memoria del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/15.png" style={{width:800, height:'auto'}}/></div>

Luego, haz clic en **Erase & write** para flashear el firmware en el XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/16.png" style={{width:800, height:'auto'}}/></div>

Cuando hayas terminado, puedes hacer clic en **Read** para verificar si la estructura de la memoria es aproximada. Esto te permitirá comprobar si el flasheo de la memoria fue exitoso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/17.png" style={{width:800, height:'auto'}}/></div>

**Paso 4**. Ensambla el dispositivo Amazon Sidewalk y hazlo funcionar.

En la vista previa del ejemplo, hemos marcado las posiciones de los pines a los que están conectados los LEDs y el botón. A continuación, necesitaremos usar los cuatro botones Grove LED, los cuales no solo nos permiten controlar el funcionamiento del XIAO, sino que también muestran los diferentes estados de trabajo mediante los LEDs en los botones.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF52840</th>
			<th>LED</th>
            <th>Button</th>
            <th>USB to UART</th>
		</tr>
		<tr>
			<td align="center">D0</td>
			<td align="center">LED1</td>
            <td align="center"></td>
            <td align="center"></td>
		</tr>
		<tr>
			<td align="center">D1</td>
			<td align="center"></td>
            <td align="center">Button1</td>
            <td align="center"></td>
		</tr>
        <tr>
			<td align="center">D2</td>
			<td align="center">LED2</td>
            <td align="center"></td>
            <td align="center"></td>
		</tr>
        <tr>
			<td align="center">D3</td>
			<td align="center"></td>
            <td align="center">Button2</td>
            <td align="center"></td>
		</tr>
        <tr>
            <td align="center">D4</td>
            <td align="center">LED3</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D5</td>
            <td align="center"></td>
            <td align="center">Button3</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">LED4</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center"></td>
            <td align="center">Button4</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">RX (D7)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">TX</td>
        </tr>
        <tr>
            <td align="center">TX (D6)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">RX</td>
        </tr>
    </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/25.jpg" style={{width:600, height:'auto'}}/></div>

El XIAO se alimenta a través de USB y luego el XIAO nRF52840 se controla utilizando los botones, mientras que el registro de operaciones del XIAO está disponible a través de UART.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/18.png" style={{width:600, height:'auto'}}/></div>

## Recursos

- [Especificación de Amazon Sidewalk](https://docs.sidewalk.amazon/specifications/)
- [Documento técnico sobre privacidad y seguridad de Amazon Sidewalk](https://m.media-amazon.com/images/G/01/sidewalk/final_privacy_security_whitepaper.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el apoyo necesario y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


