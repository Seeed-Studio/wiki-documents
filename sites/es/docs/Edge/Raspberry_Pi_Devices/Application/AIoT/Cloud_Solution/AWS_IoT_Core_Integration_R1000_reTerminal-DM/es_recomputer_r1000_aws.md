---
description: Aprende cómo conectar tu Computer R1000 a AWS IoT Core, un servicio que conecta y gestiona de forma segura dispositivos IoT, habilitando la comunicación dispositivo-a-nube. Esta guía simplifica la integración IoT en el ecosistema AWS, proporcionando una plataforma escalable para construir aplicaciones inteligentes.
title: Integración de AWS IoT Core con reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
keywords:
  - AWS
  - Getting Start
  - Cloud
slug: /recomputer_r1000_aws
last_update:
  date: 7/10/2024
  author: Kasun Thushara
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/recomputer_r1000_aws/
---

## Introducción

AWS IoT Core es un servicio que ayuda a conectar y gestionar de forma segura dispositivos de Internet de las Cosas (IoT). Permite que los dispositivos se comuniquen entre sí y con la nube, facilitando el desarrollo de aplicaciones inteligentes y conectadas. AWS IoT Core simplifica la integración de dispositivos IoT en el ecosistema más amplio de AWS, ofreciendo una plataforma confiable y escalable para construir soluciones IoT. En esta guía, discutiremos cómo conectar nuestro reComputer R1000 a la nube IoT de AWS.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## Crear cuenta de AWS

Si no tienes una cuenta de AWS, puedes crear una fácilmente. Por favor sigue [**este enlace**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para obtener orientación sobre cómo configurar tu cuenta.

## Registrar el dispositivo

- **Paso 1**: Busca IoT core y navega hacia él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 2**: A continuación, en la barra lateral navega al tema **Manage** y bajo **All Devices** ve a **Things**.

:::info
**¿Qué es un Thing?**  
AWS IoT se refiere a los dispositivos del Internet de las Cosas (IoT) como "things" en la plataforma AWS. Cada dispositivo IoT, como el dispositivo reComputer R1000 en este contexto, se representa como un "thing" en AWS. Es importante destacar que, una vez creado, el nombre de un "thing" no puede cambiarse.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Paso 3**: A continuación, presiona en **Create things**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthings.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 4**: Vamos a crear para un solo dispositivo reComputer R1000. Así que haz clic en **Create Single Thing.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createsinglething.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 5**: Asigna un nombre al Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingname.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 6**: También un tipo de thing para tu referencia en el futuro

:::info
**¿Qué es un Tipo de Thing?**

Los tipos de Thing te permiten almacenar descripciones e información de configuración que son comunes a todos los things asociados con el mismo tipo. Esto simplifica la gestión de los things en el registro. Por ejemplo, puedes definir un tipo de thing 'Factory_HMI'. Para esta demostración usamos edge_controller como un tipo de thing.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingtype.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthingtype.PNG" style={{width:400, height:400}}/></div>

- **Paso 7** : Generar Certificados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/configurecertificate.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 8**:  Para adjuntar políticas necesitas crear una. haz clic en **Create policy**

:::info
Las políticas de AWS IoT Core son documentos JSON que siguen las convenciones de políticas IAM. Admiten políticas con nombre, lo que permite que múltiples identidades hagan referencia al mismo documento de política. Las políticas con nombre tienen versiones para facilitar la reversión.  
Estas políticas brindan control sobre el acceso al plano de datos de AWS IoT Core, abarcando operaciones como conectarse al broker de mensajes de AWS IoT Core, enviar/recibir mensajes MQTT y acceder o actualizar el Device Shadow de un thing.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createpolicy.png" style={{width:600, height:'auto'}}/></div>

- **Paso 9**: Asigna un nombre apropiado a la política y configura el efecto de la política, la acción de la política y los recursos de la política como se muestra a continuación.

:::info
La política incluye:

**Effect**: Especifica si la acción está permitida o denegada.

**Action**: Especifica la acción específica que la política permite o deniega.

**Resource**: Especifica el recurso o los recursos sobre los que la acción está permitida o denegada.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createapolicy.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 10**: Adjunta la política que creaste y presiona **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/policycreatething.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 11**: A continuación puedes descargar certificados y claves. Asegúrate de descargar **Certificado del dispositivo, Claves privada y pública y Certificado de CA raíz.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **Paso 12**: Adjuntar al objeto (reComputer R1000)
Para eso ve a **Security** >> **Certificates**

:::info
Cuando creas e inscribes un certificado de forma independiente de un thing de AWS IoT, este carece de políticas para las operaciones de AWS IoT y no está asociado a ningún objeto thing. Aquí se explica cómo establecer estas conexiones para un certificado registrado. El certificado autentica el dispositivo con AWS IoT para la conexión. Vincular el certificado a un recurso thing crea la relación entre el dispositivo (a través del certificado) y el recurso thing. Para otorgar al dispositivo permiso para realizar acciones en AWS IoT, como conectarse y publicar mensajes, es esencial adjuntar una política adecuada al certificado del dispositivo.
:::

Después de seleccionar lo que creaste desde el menú desplegable **Actions**, presiona **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_thing.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 13**: Adjunta también la política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy.PNG" style={{width:600, height:'auto'}}/></div>

## Preparar reComputer R1000

- **Paso 01**: Crear un Entorno Virtual. Ejecuta estos comandos uno por uno, y terminarás con un entorno virtual.

```sh
mkdir AWS_project
cd AWS_project
python -m venv --system-site-packages env
source env/bin/activate
```

- **Paso 02**: Instalar la biblioteca Mqtt

```sh
pip3 install "paho-mqtt<2.0.0"
```

## Ejecutar el código
  
Para lograr esto, descarga nuestro [archivo de prueba de Python](https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWStest.py). Asegúrate de que los certificados de tu dispositivo, archivos de clave (claves públicas y privadas), archivo de acceso raíz, y este archivo de Python estén en la misma carpeta en tu Dispositivo. Además, necesitas modificar la URL de conexión.

Para hacer eso:

- **Paso 01**: Ve a Configuración

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **Paso 02**: Entonces encontrarás la URL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/weburl.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 03**: Reemplaza esos nombres de archivo con los tuyos y ejecuta el archivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/code.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 04**: Dirígete a la carpeta y Ejecuta el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/cmd.PNG" style={{width:600, height:'auto'}}/></div>

## Probar la Conexión

Ve al Cliente de prueba MQTT bajo la pestaña **Test** y escribe el nombre del tema para suscribirte. En este caso es device/data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/mqtttest.PNG" style={{width:600, height:'auto'}}/></div>

La salida es algo como esto. El mensaje del reComputer-R1000 aparece en la consola.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/seeedop.PNG" style={{width:600, height:'auto'}}/></div>

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
