---
description: Aprende a conectar tu reComputer R1000 a AWS IoT Core, un servicio que conecta y gestiona dispositivos IoT de forma segura, habilitando la comunicación entre dispositivos y la nube. Esta guía facilita la integración de IoT al ecosistema de AWS, ofreciendo una plataforma confiable y escalable para construir aplicaciones inteligentes.
title: Integración de AWS IoT Core con reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /es/recomputer_r1000_aws
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

AWS IoT Core es un servicio que ayuda a conectar y gestionar de manera segura los dispositivos del Internet de las Cosas (IoT). Permite que los dispositivos se comuniquen entre sí y con la nube, facilitando el desarrollo de aplicaciones inteligentes y conectadas. AWS IoT Core agiliza la integración de dispositivos IoT con el amplio ecosistema de AWS, ofreciendo una plataforma confiable y escalable para construir soluciones de IoT. En esta guía, explicaremos cómo conectar nuestro reComputer R1000 a la nube de AWS IoT.

## Comenzando

Antes de empezar este proyecto, puede que necesites preparar tu hardware y software por adelantado, tal como se describe aquí.

### Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

## Crear Cuenta en AWS

Si no tienes una cuenta de AWS, puedes crearla fácilmente. Sigue [**este enlace**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para obtener instrucciones sobre cómo configurarla.

## Registrar el dispositivo

- **Paso 1**: Busca IoT Core en la barra de búsqueda de AWS y navega hasta él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 2**: En la barra lateral, ve a **Manage** > **All Devices** > **Things**.

:::info
**¿Qué es una Thing?**

AWS IoT se refiere a los dispositivos IoT como "things" en la plataforma de AWS. Cada dispositivo IoT, como el reComputer R1000 en este contexto, se representa como una "thing" en AWS. Una vez creada, el nombre de la "thing" no se puede cambiar.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Paso 3**: Haz clic en **Create things**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthings.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 4**: Crearemos una single "thing" para nuestro reComputer R1000. Haz clic en **Create Single Thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createsinglething.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 5**: Asigna un nombre a la Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingname.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 6**: Asigna también un thing type para referencia futura.

:::info
**¿Qué es un Thing Type?**

Los thing types te permiten almacenar descripciones e información de configuración comunes a todas las cosas asociadas con el mismo tipo. Esto simplifica la administración en el registro. Por ejemplo, puedes definir un thing type "Factory_HMI". En esta demostración utilizamos "edge_controller" como tipo.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingtype.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthingtype.PNG" style={{width:400, height:400}}/></div>

- **Paso 7**: Generar Certificados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/configurecertificate.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 8**: Para adjuntar políticas, necesitas crearlas. Haz clic en **Create policy**.

:::info
Las políticas de AWS IoT Core son documentos JSON que siguen las convenciones de IAM. Soportan políticas con nombre, lo que permite que varias identidades hagan referencia al mismo documento de política. Las políticas con nombre tienen versiones para facilitar la reversión.
Estas políticas controlan el acceso al plano de datos de AWS IoT Core, abarcando operaciones como conectarse al message broker de AWS IoT Core, enviar/recibir mensajes MQTT y acceder/actualizar el Device Shadow de una thing.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createpolicy.png" style={{width:600, height:'auto'}}/></div>

- **Paso 9**: Asigna un nombre apropiado a la política y configura los campos **Effect**, **Action** y **Resource**.

:::info
La política incluye:

**Effect**: Indica si la acción está permitida o denegada.

**Action**: Es la acción específica que la política permite o deniega.

**Resource**: El recurso o los recursos en los que se permite o deniega la acción.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createapolicy.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 10**: Adjunta la política creada y haz clic en **Create thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/policycreatething.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 11**: A continuación puedes descargar certificados y claves. Asegúrate de descargar **Device certificate**, **Private and Public keys** y el **Root CA certificate**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **Paso 12**: Adjuntar los certificados a la thing (reComputer R1000).

Para ello, ve a **Security** >> **Certificates**.

:::info
Cuando creas y registras un certificado independientemente de una thing de AWS IoT, carece de políticas para operaciones de AWS IoT y no está asociado a ninguna thing. Esto explica cómo establecer estas conexiones para un certificado registrado. El certificado autentica el dispositivo con AWS IoT para la conexión. Vincular el certificado a una thing crea la relación entre el dispositivo (a través del certificado) y la thing. Para otorgar permisos de acciones de AWS IoT (conectarse y publicar mensajes), es esencial adjuntar una política adecuada al certificado.
:::

Después de seleccionar la thing creada en el menú desplegable de **Actions**, presiona **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_thing.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 13**: Adjunta también la política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy.PNG" style={{width:600, height:'auto'}}/></div>

## Preparar reComputer R1000

- **Paso 01**: Crear un entorno virtual. Ejecuta estos comandos uno a uno para crear un entorno virtual.

```sh
mkdir AWS_project
cd AWS_project
python -m venv --system-site-packages env
source env/bin/activate
```

- **Paso 02**: Instalar biblioteca MQTT.

```sh
pip3 install "paho-mqtt<2.0.0"
```

## Ejecutar el código

Para hacer esto, descarga nuestro [archivo de prueba en Python](https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWStest.py). Asegúrate de que tus certificados de dispositivo, archivos de claves (pública y privada), archivo raíz CA y este archivo Python estén en la misma carpeta. Además, necesitas modificar la URL de conexión.

- **Paso 01**: Ve a **Settings** en la consola de AWS IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **Paso 02**: Allí encontrarás la **URL**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/weburl.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 03**: Reemplaza los nombres de archivo con los tuyos y ejecuta el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/code.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 04**: Ve a la carpeta y corre el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/cmd.PNG" style={{width:600, height:'auto'}}/></div>

## Probar la Conexión

En **MQTT test Client** bajo la pestaña **Test**, escribe el nombre del tópico al que suscribirte. En este caso es `device/data`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/mqtttest.PNG" style={{width:600, height:'auto'}}/></div>

Verás algo similar a esto. El mensaje desde reComputer-R1000 aparecerá en la consola.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/seeedop.PNG" style={{width:600, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con ellos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>