---
description: Aprende a configurar y usar FlowFuse en un reComputer, creando cuentas, instalando Node.js, agregando y configurando dispositivos, creando flujos de Node-RED y desplegando snapshots desde la nube.
title: reComputer R1000 con FlowFuse
keywords:
  - Flow Fuse
  - reComputer R1000
  - Node-Red
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_flow_fuse
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

[FlowFuse](https://flowfuse.com/) expande las capacidades de Node-RED agregando características para desarrollo colaborativo, despliegues remotos, soporte de pipelines DevOps y hosting de aplicaciones Node-RED. Es una plataforma DevOps diseñada para el desarrollo y la entrega de aplicaciones Node-RED, facilitando la colaboración y el despliegue eficiente.

## Antes de Comenzar

Antes de iniciar, asegúrate de tener listos tu hardware y software, tal como se describe a continuación.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## Preparación de Software

### Instalando Node.js para FlowFuse en reComputer

Necesitarás Node.js en tu reComputer para usar FlowFuse. Sigue estos pasos para instalar Node.js versión 20:

1. **Preparar el repositorio de Node.js**

   Actualiza la lista de paquetes e instala certificados y herramientas:

```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
```

2. **Configurar el repositorio de NodeSource**

```sh
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
```

3. **Agregar el repositorio de Node.js**

Recomendado por FlowFuse, instala Node.js 20:

```sh
NODE_MAJOR=20
```

Agrega el repositorio Node.js a la lista de fuentes en tu reComputer:

```sh
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt update
```

4. **Instalar Node.js**

```sh
sudo apt install nodejs
```

Ahora tu dispositivo tiene Node.js versión 20.

Para usar FlowFuse, crea una cuenta y verifica tu email.

## Crear una Cuenta en FlowFuse

1. **Visita la página de registro**:
   - Ve a [FlowFuse Account Creation](https://app.flowfuse.com/account/create).
2. **Completa el formulario**:
   - **Username**: elige un nombre único.
   - **Full Name**: ingresa tu nombre completo.
   - **Email**: email válido.
   - **Password**: contraseña segura.
3. **Envía el formulario**:
   - Haz clic en `Create Account`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/signinpage.PNG" /></center>

4. **Revisa tu email**:
   - Busca un correo de verificación de FlowFuse.
5. **Abre el correo y verifica**:
   - Usa el código para verificar tu email.
6. **Regresa a FlowFuse**:
   - Ve a la página de inicio de sesión.
7. **Ingresa tus credenciales**:
   - Username/Email y contraseña.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/email.PNG" /></center>

8. **Inicia sesión**:
   - Haz clic en `Login`. Probablemente te pida crear un equipo (Team).

## Creación de una Aplicación en FlowFuse

Organiza tus instancias de Node-RED dentro de Aplicaciones. Cada Aplicación puede tener una o más Instancias de Node-RED, que incluyen plugins FlowFuse.

1. **Ir a la sección de Aplicaciones**:
   - En el dashboard de FlowFuse, haz clic en `Create Application`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application.PNG" /></center>

2. **Completa detalles de la Aplicación**:
   - **Name**: nombre de tu app.
   - **Description**: descripción.
   - **Instance Name**: nombre para tu instancia Node-RED.
   - **Blueprint**: elige `Blank Workspace`.
   - **Node-RED Version**: elige la última versión.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application2.PNG" /></center>

3. **Crear la Aplicación**:
   - Haz clic en `Create`.

## Creando un Flujo en FlowFuse

Vamos a crear un flujo en Node-RED que genere un número aleatorio y lo muestre en un dashboard. Si eres nuevo en Node-RED, consulta [esta guía](https://wiki.seeedstudio.com/recomputer_r1000_getting_started_node_red/).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/selectin.PNG" /></center>

1. **Abrir el editor de Node-RED**:
   - Ve a tu instancia, selecciónala.
   - Haz clic en `Open Editor`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/openeditor.png" /></center>

2. **Instalar nodos requeridos**:
   - Puede que falten `random` y `gauge`.
   - Ve al menú superior derecho, `Manage palette`.
   - En `Install`, busca `Random` y `Dashboard` e instálalos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/noderedflow.PNG" /></center>

3. **Crear el flujo**:
   - Copia e importa el siguiente flujo en Node-RED:
```sh
[
    {
        "id": "fd017c5f719054f5",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "45888468a69bbabb",
        "type": "random",
        "z": "fd017c5f719054f5",
        "name": "Random",
        "low": 1,
        "high": "100",
        "inte": "true",
        "property": "payload",
        "x": 340,
        "y": 160,
        "wires": [
            [
                "ce3820147521aaa6"
            ]
        ]
    },
    {
        "id": "5e571c440b2340e9",
        "type": "inject",
        "z": "fd017c5f719054f5",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "45888468a69bbabb"
            ]
        ]
    },
    {
        "id": "ce3820147521aaa6",
        "type": "ui_gauge",
        "z": "fd017c5f719054f5",
        "name": "",
        "group": "7ac87662e9cf0550",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Random Number",
        "label": "units",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "diff": false,
        "className": "",
        "x": 670,
        "y": 160,
        "wires": []
    },
    {
        "id": "7ac87662e9cf0550",
        "type": "ui_group",
        "name": "Default",
        "tab": "0dc7fe4a8add5b68",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0dc7fe4a8add5b68",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```
4. **Desplegar el flujo**:
   - Haz clic en `Deploy` arriba a la derecha.

## Agregando y configurando un Dispositivo en FlowFuse

1. **Agregar dispositivo**:
   - En el dashboard de FlowFuse, ve a la sección `Devices`.
   - Haz clic en `Add Device`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device.PNG" /></center>

   - Llena los detalles y haz clic en `Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device.PNG" /></center>

2. **Copiar configuración del dispositivo**:
   - Tras crear el dispositivo, obtendrás la configuración.
   - Copia el snippet de código bajo "manual instructions".

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device2.PNG" /></center>

## Instalar el Device Agent

En la terminal de reComputer, ejecuta:
```sh
sudo npm install -g @flowfuse/device-agent
```

### Configurar el Device Agent

1. **Crear directorio de configuración**:

```sh
sudo mkdir /opt/flowfuse-device
sudo chown -R $USER /opt/flowfuse-device
sudo su
cd /
cd opt/flowfuse-device
```

2. **Crear y editar archivo de configuración**:

```sh
nano device.yml
```

Pega la configuración copiada y guarda (Ctrl+X, luego Y, Enter).

3. **Ejecutar el agente**:

```sh
flowfuse-device-agent --port=1881
```

El dispositivo queda configurado y conectado a FlowFuse.

## Desplegando el Flujo en un Dispositivo

Para desplegar el flujo, creamos un snapshot de la instancia de Node-RED y lo enviamos al reComputer.

### Crear un Snapshot

1. **Ir a la Aplicación**:
   - En FlowFuse, selecciona la instancia creada.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot1.PNG" /></center>

2. **Seleccionar 'Snapshot'**:
   - Haz clic en `Snapshot`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot2.PNG" /></center>

3. **Crear un nuevo Snapshot**:
   - Como no hay snapshots, crea uno.
   - Haz clic en `Create Snapshot`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot3.PNG" /></center>

4. **Completar detalles del Snapshot**:
   - `Name`: nombre.
   - `Description`: breve descripción.
   - `Set as Target`: márcalo para establecer este snapshot como objetivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot4.PNG" /></center>

5. **Crear Snapshot**:
   - Haz clic en `Create`. Captura el estado de la instancia (flows, credenciales, variables de entorno, paquetes NPM, settings).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot5.PNG" /></center>

## Enviando el Snapshot al Dispositivo

1. **Ir a la sección Devices**:
   - En FlowFuse, ve a `Devices`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device_add_sanp.PNG" /></center>

2. **Seleccionar el Dispositivo**:
   - Encuentra el dispositivo creado.
   - Haz clic en los tres puntos junto al nombre.
   - Selecciona `Add Instance`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance.PNG" /></center>

3. **Agregar la Instancia al Dispositivo**:
   - Elige la aplicación y la instancia que creaste.
   - Haz clic en `Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance2.PNG" /></center>

4. **Desplegar el Flujo**:
   - En segundos, tu flujo se desplegará con la configuración del snapshot.

5. **Acceder al Dispositivo**:
   - Ve a `<ip_address_recomputer>:1881/ui` en tu navegador.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/gauge.PNG" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos distintos canales de soporte para cubrir diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
