---
description: Conectar a Datacake vía TTN
title: Conectar a Datacake vía TTN
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp
slug: /es/how_to_connect_sensecap_s210x_to_datacake_via_ttn
last_update:
  date: 6/10/2025
  author: Zeno
---

# Conectar a Datacake vía TTN

## Datacake
Datacake es una plataforma IoT versátil de bajo código. Permite a cualquier persona construir aplicaciones IoT personalizadas rápidamente, sin codificación, y convertirlas instantáneamente en soluciones de marca blanca con un solo clic.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp)

## Paso 1: Conectar a TTN
Por favor consulte "[Cómo conectar sensores S210X a The Things Network](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)"

**Nota:** Por favor seleccione **"Other Platform"** para la configuración de plataforma.

## Paso 2: Subir datos desde TTN a Datacake

(1)Crear una nueva cuenta, sitio web: `https://datacake.co/`  
(2)Hacer clic en **"Devices" -> "Add Device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image2.png)

(3)Seleccionar **"LoranWAN"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image3.png)

(4)Seleccionar **"New Product from template"** y buscar **"Seeed"**, luego seleccionar producto

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image4.png)

(5)Seleccionar **"The Things Stack V3"**, luego hacer clic en **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image5.png)

(6)Ingresar **"DEVEUI"** y **"NAME"**, luego hacer clic en **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image6.png)

-   Seleccionar **"Free"**  
-   Hacer clic en **"Add 1 device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image7.png)

(7)Crear claves API para la autenticación posterior de Webhook
-   Navegar a su espacio de trabajo de Datacake y seleccionar "Members" desde la barra lateral.  
-   Seleccionar "API Users" desde la barra de pestañas y cambiar a la pestaña API Users. 
-   Hacer clic en el botón superior derecho "Add API User"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image8.png)

-   Ingresar un nombre para su usuario API
-   Luego seleccionar "Devices" desde la lista de permisos del espacio de trabajo
-   Hacer clic en "Add Permission for all Devices in Workspace"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image9.png)

-   Seleccionar "Can record measurements"
-   Presionar "Save" para crear el token

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image10.png)

-   Hacer clic en "Copy"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image11.png)

Este token API ahora es válido para todos los dispositivos en su espacio de trabajo. Cada vez que cree un nuevo dispositivo, este token funcionará automáticamente para ese dispositivo.

Si está interesado en crear un token solo para dispositivos seleccionados, puede navegar al dispositivo y seleccionar el token desde allí. Pero debe omitir el permiso "All devices in workspace" aquí.

(8)Crear integración en TTN
-   Seleccionar "Webhooks" en la barra lateral de la aplicación TTN
-   Seleccionar "Add webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image12.png)

-   Seleccionar "Datacake"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image13.png)

-   Ingresar un nombre para su ID de Webhook
-   Ingresar el token copiado desde Datacake
-   Seleccionar "Create Datacake webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image14.png)

(9)Configurar Downlinks  
Para poder poner en cola Downlinks en su aplicación TTI, necesita proporcionar detalles adicionales en su dispositivo Datacake. Para establecer la configuración, por favor vaya a la configuración LoRaWAN en el dispositivo correspondiente.
-   Cambiar de vuelta a Datacake
-   Seleccionar "configuration" y desplazarse hacia abajo un poco

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image15.png)

-   Seleccionar "Change"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image16.png)

-   Aquí necesita llenar las 4 cajas de texto con información que encuentra en la consola TTN.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image17.png)

-   Para TTS Device ID, este es el ID de su dispositivo en su aplicación TTN. Lo encuentra aquí:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image18.png)

-   Para TTI Server URL, esta es la URL de su instancia TTN como está disponible al público. Para TTNv3 público: `eu1.cloud.thethings.network`

-   Para TTI App ID, este es el ID de su aplicación en TTN:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image19.png)

-   Crear clave API TTI
-   Seleccionar "API keys" y luego hacer clic en "Add APIkey"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image20.png)

-   Ingresar el nombre
-   Establecer los derechos correspondientes para permitir poner en cola downlinks
-   Hacer clic en "Create API key"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image21.png)

-   Después de crear su clave API verá la notificación
-   ¡Por favor copie su clave al portapapeles ya que solo se mostrará una vez!
-   Pegue esta clave en la configuración del dispositivo en Datacake

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image22.png)

-   Configuración final:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image23.png)

**Nota: No olvide hacer clic en "Update"**

-   Configurar exitosamente Downlinks

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image24.png)

(10)Agregar decodificador de carga útil  
Copie su decodificador de carga útil aquí:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image25.png)

También puede encontrar [SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main) en GitHub.