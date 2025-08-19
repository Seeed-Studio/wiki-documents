---
description: AWS IoT Core Integración con reTerminal DM
title: Integrar reTerminal DM con AWS IoT Core
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /es/reTerminal-DM_AWS_first
last_update:
  date: 04/03/2025
  author: Erick González
---

## Introducción

AWS IoT Core es un servicio que ayuda a conectar y administrar dispositivos de Internet de las Cosas (IoT) de forma segura. Permite que los dispositivos se comuniquen entre sí y con la nube, facilitando la creación de aplicaciones inteligentes y conectadas. AWS IoT Core simplifica la integración de dispositivos IoT en el ecosistema de AWS, ofreciendo una plataforma confiable y escalable para desarrollar soluciones de IoT. En esta guía, explicaremos cómo conectar nuestro reTerminal DM a la nube de AWS IoT.

## Comenzar

Antes de iniciar este proyecto, debes preparar tu hardware y software según lo descrito a continuación.

### Preparación de hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> ¡Cómpralo Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de software

Recomendamos instalar la versión **Bullseye** de Raspberry Pi OS 64 bits desde su sitio oficial. Si prefieres instalar un nuevo Raspbian OS, sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/)

#### Instalar librería Mqtt
En tu terminal, teclea:

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

:::note
Si intentas usar Bookworm OS, la última versión al momento de redactar esta wiki, quizás debas usar un entorno virtual (virtual environment) para instalar librerías de Python. Por favor, revisa [**este enlace**](https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi) para más actualizaciones.
:::

## Crear Cuenta AWS

Si no dispones de una cuenta en AWS, puedes crearla fácilmente. Sigue [**este enlace**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) para ver cómo configurarla.

## Registrar el dispositivo

- **Paso 1**: En el buscador de servicios, busca **IoT Core** y entra.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 2**: En la barra lateral, ve a **Manage** > **All Devices** > **Things**.

:::info
**¿Qué es un Thing?**

AWS IoT denomina "things" (cosas) a los dispositivos IoT en la plataforma AWS. Cada dispositivo IoT, como en este caso el reTerminal DM, se representa como un "thing". Es importante destacar que, una vez creado, el nombre de un "thing" no se puede cambiar.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Paso 3**: Pulsa **Create things**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 4**: Elegiremos crear para un único dispositivo reTerminal. Haz clic en **Create Single Thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 5**: Asigna un nombre a tu "thing".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingname.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 6**: También puedes definir un "thing type" para referencia futura.

:::info
**¿Qué es un Thing Type?**

Los thing types permiten almacenar descripciones e información de configuración comunes para todos los "things" asociados a un mismo tipo. Facilita la gestión de cosas en el registro. Por ejemplo, puedes definir un tipo "Factory_HMI". En este demo usamos "pi" como thing type.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **Paso 7**: Generar certificados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 8**: Para vincular políticas, hay que crearlas. Clic en **Create policy**.

:::info
Las políticas de AWS IoT Core son documentos JSON que siguen las convenciones de IAM policy. Soportan políticas con nombre, lo que permite que múltiples identidades utilicen el mismo documento. Las políticas poseen versiones para retroceder fácilmente.

Estas políticas controlan el acceso al "data plane" de AWS IoT Core, incluyendo operaciones para conectarse al message broker, enviar/recibir mensajes MQTT y acceder o actualizar el Device Shadow de un "thing".
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 9**: Pon un nombre apropiado a la política y configura effect, action y resource como se muestra.

:::info
La política incluye:

**Effect**: Indica si la acción está permitida o denegada.

**Action**: Acción específica que la política autoriza o deniega.

**Resource**: Recurso(s) donde se autoriza/deniega la acción.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 10**: Adjunta la política que creaste y presiona **Create thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/policycreatething.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 11**: Podrás descargar los certificados y claves. Asegúrate de descargar **Device certificate**, **Private y Public keys** y **Root CA certificate**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/certicates.PNG" style={{width:600, height:450}}/></div>

- **Paso 12**: Vincularlos al "thing" (reTerminal DM).

Ve a **Security** >> **Certificates**.

:::info
Al crear y registrar un certificado de forma independiente a un "thing" AWS IoT, no tiene políticas para las operaciones de AWS IoT ni está asociado a ningún "thing". Esto explica cómo asociar dichos objetos. El certificado autentica el dispositivo en AWS IoT para la conexión. Al vincular el certificado a un "thing" se crea la relación entre el dispositivo (vía el certificado) y el recurso "thing". Para permitir al dispositivo realizar acciones en AWS IoT (conectarse, publicar mensajes, etc.), se necesita una política adecuada en su certificado.
:::

Tras seleccionar el "thing" que creaste en el menú **Actions**, presiona **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachtothing.PNG" style={{width:600, height:'auto'}}/></div>

**Paso 13**: Adjunta también la política.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachpolicy.PNG" style={{width:600, height:'auto'}}/></div>

## Probar MQTT

Descarga nuestro [archivo Python de prueba](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py). Asegúrate de que tus certificados de dispositivo, archivos de claves (pública y privada), el archivo root CA y este script Python estén en la misma carpeta en tu reTerminal. Además, debes modificar la URL de conexión.

Para ello:

- **Paso 01**: Ve a **Settings**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/settings.PNG" style={{width:200, height:300}}/></div>

- **Paso 02**: Allí verás la **URL**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 03**: Sustituye los nombres de archivo por los tuyos y ejecuta el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## Probar la Conexión

En la consola de AWS IoT, ve a la pestaña **Test** en el MQTT test Client. Suscríbete al tópico que uses, por ejemplo `device/data`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

El output será algo así. El mensaje proveniente del reTerminal DM aparecerá en la consola.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico & Discusión

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos soportes y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
