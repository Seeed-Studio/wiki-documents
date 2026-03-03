---
description: AWS IoT Core Integración Con EdgeBox RPi 200 
title: AWS IoT Core Integración Con EdgeBox RPi 200 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /es/Edgebox-rpi-200-AWS
last_update:
  date: 3/11/2024
  author: Kasun Thushara
---

## Introducción

AWS IoT Core es un servicio que ayuda a conectar y gestionar de forma segura dispositivos de Internet de las Cosas (IoT). Permite que los dispositivos se comuniquen entre sí y con la nube, facilitando el desarrollo de aplicaciones inteligentes y conectadas. AWS IoT Core simplifica la integración de dispositivos IoT en el ecosistema más amplio de AWS, ofreciendo una plataforma confiable y escalable para construir soluciones IoT. En esta guía, discutiremos cómo conectar nuestro Edge Box RPi 200 a la nube IoT de AWS.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Edge Box-200 llega a tus manos con Raspberry Pi OS preinstalado. Si estás iniciando este dispositivo por primera vez, por favor lee nuestro Wiki de [Comenzando](https://wiki.seeedstudio.com/es/Edge_Box_introduction/)

#### Instalar librería Mqtt

En tu terminal escribe:

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

## Crear cuenta de AWS

Si no tienes una cuenta de AWS, puedes crear una fácilmente. Por favor sigue [**este enlace**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para obtener orientación sobre cómo configurar tu cuenta.

## Registrar el dispositivo

- **Paso 1**: Busca IoT core y navega hacia él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 2**: A continuación, en la barra lateral navega al tema **Manage** y bajo **All Devices** ve a **Things**.

:::info
**¿Qué es una Thing?**
AWS IoT se refiere a los dispositivos de Internet de las Cosas (IoT) como "things" en la plataforma AWS. Cada dispositivo IoT, como el dispositivo Edge Box en este contexto, está representado como una "thing" en AWS. Es importante destacar que una vez creado, el nombre de una "thing" no se puede cambiar.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Paso 3**: A continuación presiona en **Create things**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 4**: Vamos a crear para un solo dispositivo EdgeBox. Así que haz clic en **Create Single Thing.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 5**: Asigna un nombre de Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thing_type.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 6**: También un tipo de thing para tu referencia en el futuro

:::info
**¿Qué es un Thing Type?**

Los tipos de thing te permiten almacenar descripciones e información de configuración que son comunes a todas las things asociadas con el mismo tipo de thing. Esto simplifica la gestión de things en el registro. Por ejemplo, puedes definir un tipo de thing 'Factory_HMI'. Para esta demostración usamos pi como tipo de thing.

:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **Paso 7** : Generar certificados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 8**:  Para adjuntar políticas necesitas crear. haz clic en **Create policy**

:::info
Las políticas de AWS IoT Core son documentos JSON que siguen las convenciones de políticas IAM. Soportan políticas con nombre, permitiendo que múltiples identidades referencien el mismo documento de política. Las políticas con nombre tienen versiones para facilitar la reversión.
Estas políticas proporcionan control sobre el acceso al plano de datos de AWS IoT Core, abarcando operaciones como conectarse al broker de mensajes de AWS IoT Core, enviar/recibir mensajes MQTT, y acceder o actualizar el Device Shadow de una thing.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 9**:  Asigna un nombre apropiado a la política y establece el efecto de política, acción de política y recursos de política como sigue.

:::info
La política incluye:

**Effect**: Especifica si la acción está permitida o denegada.

**Action**: Especifica la acción específica que la política permite o deniega.

**Resource**: Especifica el recurso o recursos sobre los cuales la acción está permitida o denegada.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 10**: Adjunta la política por la política que creaste y presiona **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_policies.png" style={{width:800, height:'auto'}}/></div>

- **Paso 11**:A continuación puedes descargar certificados y claves. Asegúrate de descargar **certificado del dispositivo, claves privada y pública y certificado CA raíz.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **Paso 12** : Adjuntar a la thing (Edge Box RPi 200 )
Para eso ve a **Security** >> **Certificates**

:::info
Cuando creas y registras un certificado independientemente de una thing de AWS IoT, carece de políticas para operaciones de AWS IoT y no está asociado con ningún objeto thing. Esto explica cómo establecer estas conexiones para un certificado registrado. El certificado autentica el dispositivo con AWS IoT para la conexión. Vincular el certificado a un recurso thing crea la relación entre el dispositivo (a través del certificado) y el recurso thing. Para otorgar al dispositivo permiso para acciones de AWS IoT, como conectarse y publicar mensajes, es esencial adjuntar una política adecuada al certificado del dispositivo.

:::

Después de seleccionar la thing que creaste desde el menú desplegable **Actions** luego presiona **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_thing.png" style={{width:600, height:'auto'}}/></div>

**Paso 13**: Adjunta también la política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/policy_certificate.png" style={{width:600, height:'auto'}}/></div>

## Prueba MQTT

Para lograr esto, descarga nuestro [archivo de prueba Python](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py). Asegúrate de que los certificados de tu dispositivo, archivos de clave (claves públicas y privadas), archivo de acceso raíz, y este archivo Python estén en la misma carpeta en tu Dispositivo. Además, necesitas modificar la URL de conexión.

Para hacer eso:

- **Paso 01**: Ve a Configuración

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **Paso 02**: Entonces encontrarás la URL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 03**: Reemplaza esos nombres de archivo con los tuyos y ejecuta el archivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## Probar la Conexión

Ve al Cliente de prueba MQTT bajo la pestaña **Prueba** y escribe el nombre del tema para suscribirse. En este caso es device/data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

La salida es algo como esto. El mensaje del Edge Box aparece en la consola.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
