---
description: AWS IoT Core Integrado con EdgeBox RPi 200
title: AWS IoT Core Integrado con EdgeBox RPi 200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- Primeros Pasos
- Cloud
slug: /es/Edgebox-rpi-200-AWS
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

AWS IoT Core es un servicio que ayuda a conectar y gestionar dispositivos del Internet de las Cosas (IoT) de manera segura. Permite que los dispositivos se comuniquen entre sí y con la nube, facilitando el desarrollo de aplicaciones inteligentes y conectadas. AWS IoT Core simplifica la integración de dispositivos IoT en el amplio ecosistema de AWS, ofreciendo una plataforma confiable y escalable para construir soluciones de IoT. En esta guía, hablaremos sobre cómo conectar nuestro Edge Box RPi 200 a la nube de AWS IoT.

## Para Comenzar

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software con anticipación, tal como se describe aquí.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

### Preparación de Software

Edge Box-200 viene con Raspberry Pi OS preinstalado. Si esta es la primera vez que inicias el dispositivo, por favor lee nuestro [Getting Started](https://wiki.seeedstudio.com/Edge_Box_introduction/) Wiki

#### Instalar la biblioteca Mqtt
En tu terminal escribe:

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

## Crear Cuenta de AWS

Si no tienes una cuenta de AWS, puedes crearla fácilmente. Sigue [**este enlace**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para obtener orientación sobre cómo configurar tu cuenta.

## Registrar el Dispositivo

- **Paso 1**: Busca IoT Core y navega hasta él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 2**: En la barra lateral, ve al tema **Manage** y en **All Devices** selecciona **Things**.

:::info
**¿Qué es un Thing (Cosa)?**

AWS IoT se refiere a los dispositivos de Internet de las Cosas (IoT) como "things" en la plataforma de AWS. Cada dispositivo IoT, como Edge Box en este contexto, se representa como una "thing" en AWS. Es importante destacar que, una vez creada, el nombre de una "thing" no puede cambiarse.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Paso 3**: Haz clic en **Create things**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 4**: Crearemos una sola EdgeBox. Haz clic en **Create Single Thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 5**: Asigna un nombre a la Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thing_type.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 6**: También asigna un Thing Type para tu referencia futura

:::info
**¿Qué es un Thing Type (Tipo de Cosa)?**

Los "thing types" te permiten almacenar descripciones e información de configuración comunes a todas las cosas asociadas con el mismo tipo. Esto simplifica la administración de las cosas en el registro. Por ejemplo, puedes definir un thing type "Factory_HMI". Para esta demostración, hemos usado "pi" como thing type.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **Paso 7** : Genera Certificados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 8**: Para Adjuntar políticas (Attach policies), necesitas crearlas. Haz clic en **Create policy**.

:::info
Las políticas de AWS IoT Core son documentos JSON que siguen las convenciones de IAM. Soportan políticas con nombre, permitiendo que múltiples identidades referencien el mismo documento de política. Las políticas con nombre tienen versiones para facilitar la reversión.
Estas políticas proporcionan control sobre el acceso al plano de datos de AWS IoT Core, abarcando operaciones como conectarse al message broker de AWS IoT Core, enviar/recibir mensajes MQTT y acceder o actualizar el Device Shadow de una cosa.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 9**: Asigna un nombre apropiado a la política y configura los campos de effect, action y resource como se indica.

:::info
La política incluye:

**Effect**: Indica si la acción está permitida o denegada.

**Action**: Especifica la acción específica que la política permite o deniega.

**Resource**: Especifica el recurso o recursos en los que se permite o deniega la acción.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 10**: Adjunta la política que creaste y presiona **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_policies.png" style={{width:800, height:'auto'}}/></div>

- **Paso 11**: A continuación puedes descargar los certificados y llaves. Asegúrate de descargar **Device certificate, Private and Public keys y el certificado Root CA**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **Paso 12** : Adjunta todo a la cosa (Edge Box RPi 200)
Para ello, ve a **Security** >> **Certificates**

:::info
Cuando creas y registras un certificado independientemente de una cosa de AWS IoT, este no tiene políticas para operaciones de AWS IoT y no está asociado con ninguna cosa. Esto explica cómo establecer estas conexiones para un certificado registrado. El certificado autentica el dispositivo con AWS IoT para la conexión. Vincular el certificado a un recurso thing crea la relación entre el dispositivo (a través del certificado) y el recurso thing. Para otorgar al dispositivo permiso para acciones de AWS IoT, como conectarse y publicar mensajes, es esencial adjuntar una política adecuada al certificado del dispositivo.
:::

Después de seleccionar la cosa que creaste en el menú **Actions**, luego presiona **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_thing.png" style={{width:600, height:'auto'}}/></div>

**Paso 13**: Adjunta también la política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/policy_certificate.png" style={{width:600, height:'auto'}}/></div>

## Probar MQTT

Para lograr esto, descarga nuestro [archivo de prueba en Python](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py). Asegúrate de que tus certificados de dispositivo, archivos de claves (pública y privada), archivo de raíz CA y este archivo Python estén en la misma carpeta en tu dispositivo. Además, debes modificar la URL de conexión.

Para hacerlo:

- **Paso 01** :Ve a Settings
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **Paso 02** : Encontrarás la URL
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 03** : Reemplaza los nombres de archivo con los tuyos y ejecuta el archivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## Probar la Conexión

Ve a **MQTT test Client** bajo la pestaña **Test** y escribe el nombre del tópico al que suscribirte. En este caso es device/data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

La salida luce algo así. El mensaje desde Edge Box aparece en la consola.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
