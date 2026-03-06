---
description: Aprende cómo configurar y establecer FlowFuse en un reComputer. Esta guía cubre la creación de una cuenta, instalación de Node.js, agregar y configurar dispositivos, crear flujos de Node-RED, y desplegar instantáneas a dispositivos desde la nube para una integración y gestión sin problemas.
title: reComputer R1000 con FlowFuse
keywords:
  - Flow Fuse
  - reComputer R1000
  - Node-Red
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_flow_fuse
last_update:
  date: 07/30/2024
  author: Kasun Thushara
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/recomputer_r1000_flow_fuse/
---
## Introducción

[FlowFuse](https://flowfuse.com/) mejora Node-RED agregando características para desarrollo colaborativo, gestión de despliegues remotos, soporte para pipelines de entrega DevOps, y alojamiento de aplicaciones Node-RED. Sirve como una plataforma DevOps específicamente diseñada para el desarrollo y entrega de aplicaciones Node-RED, facilitando que los equipos trabajen juntos y desplieguen sus proyectos de manera eficiente.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtén Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## Preparación del Software

### Instalación de Node.js para FlowFuse en un reComputer

Para preparar tu reComputer para FlowFuse, necesitas instalar Node.js. Sigue estos pasos para instalar Node.js versión 20:

1. **Preparación para el Repositorio de Node.js**

Primero, actualiza tu lista de paquetes e instala los certificados y herramientas necesarios:

```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
```

2. **Configuración del Repositorio NodeSource**

A continuación, configura el repositorio NodeSource en tu reComputer:

```sh
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
```

3. **Agregando el Repositorio de Node.js**

Según la documentación de FlowFuse, se recomienda instalar Node.js versión 20. Establece la variable `NODE_MAJOR` a 20:

```sh
NODE_MAJOR=20
```

Añade el repositorio de Node.js a la lista de fuentes de tu reComputer:

```sh
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

Actualiza tu lista de paquetes nuevamente para incluir el repositorio de Node.js:

```sh
sudo apt update
```

4. **Instalando Node.js**

Finalmente, instala Node.js:

```sh
sudo apt install nodejs
```

Ahora tienes Node.js versión 20 instalado en tu dispositivo.

Para comenzar a usar FlowFuse, necesitarás crear una cuenta y verificar tu correo electrónico. Sigue estos sencillos pasos:

## Crear una Cuenta

1. **Visita la Página de Registro**:
   - Ve a [Creación de Cuenta FlowFuse](https://app.flowfuse.com/account/create).

2. **Completa el Formulario de Registro**:
   - **Nombre de usuario**: Elige un nombre de usuario único.
   - **Nombre completo**: Ingresa tu nombre completo.
   - **Correo electrónico**: Proporciona una dirección de correo electrónico válida.
   - **Contraseña**: Crea una contraseña segura.

3. **Envía el Formulario**:
   - Después de completar todos los campos requeridos, haz clic en el botón 'Crear Cuenta'.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/signinpage.PNG" /></center>

4. **Revisa tu Correo Electrónico**:
   - Ve a tu bandeja de entrada de correo electrónico y busca un correo de verificación de FlowFuse.

5. **Abre el Correo de Verificación**:
   - Abre el correo electrónico y usando el código verifica el correo.

6. **Regresa a la Página de Inicio de Sesión de FlowFuse**:
   - Ve a la página de inicio de sesión de FlowFuse.

7. **Ingresa tus Credenciales**:
   - Nombre de usuario/Correo electrónico: Ingresa el nombre de usuario o correo electrónico con el que te registraste.
   - Contraseña: Ingresa tu contraseña.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/email.PNG" /></center>

8. **Iniciar Sesión**:
   - Haz clic en el botón `Iniciar Sesión` para acceder a tu cuenta de FlowFuse. y es posible que te pidan crear un equipo.

## Crear una Aplicación en FlowFuse

Para organizar tus instancias de Node-RED, se agrupan dentro de Aplicaciones. Dentro de tu Aplicación, puedes tener una o más Instancias de Node-RED. La Instancia es una versión personalizada de Node-RED que incluye varios plugins de FlowFuse para integrarlo con la plataforma.

1. **Navega a la Sección de Aplicación**:
   - En el panel de FlowFuse, haz clic en `Crear Aplicación`.
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application.PNG" /></center>

2. **Completa los Detalles de la Aplicación**:
   - **Nombre**: Ingresa un nombre para tu aplicación.
   - **Descripción**: Proporciona una breve descripción de tu aplicación.
   - **Nombre de Instancia**: Elige un nombre para tu instancia de Node-RED.
   - **Blueprint: Selecciona** `Espacio de Trabajo en Blanco` como el blueprint.
   - **Versión de Node-RED**: Elige la última versión de Node-RED del menú desplegable.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application2.PNG" /></center>

3. **Crear la Aplicación**:
   - Después de completar todos los detalles, haz clic en el botón `Crear`.

## Crear un Flujo en FlowFuse

Vamos a crear un flujo en Node-RED para generar un número aleatorio y mostrarlo en un panel de control. Si eres nuevo en Node-RED, puedes visitar nuestra [guía de Introducción a Node-RED](https://wiki.seeedstudio.com/es/recomputer_r1000_getting_started_node_red/). Pasos para Crear un Flujo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/selectin.PNG" /></center>

1. **Abrir el Editor de Node-RED**:
   - Ve a tu instancia y selecciona la instancia que acabas de crear.
   - Haz clic en `Abrir Editor` para lanzar el editor de Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/openeditor.png" /></center>

2. **Instalar Nodos Requeridos**:
   - Es posible que no veas el nodo `random` y el nodo `gauge` por defecto. Para instalar estos:
   - Ve al menú superior derecho, selecciona `Administrar paleta`.
   - Ve a la pestaña `Instalar`.
   - Busca los nodos `Random` y `Dashboard` e instálalos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/noderedflow.PNG" /></center>

3. **Crear el Flujo**:
   - Copia el siguiente flujo e impórtalo en tu editor de Node-RED para ahorrar tiempo:
  
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

4. **Desplegar el Flujo**:
   -Haz clic en el botón `Deploy` en la esquina superior derecha para desplegar tu flujo.

## Agregar y Configurar un Dispositivo en FlowFuse

1. **Para agregar y configurar un dispositivo en FlowFuse, sigue estos pasos**:

- En el panel de FlowFuse, navega a la sección `Devices`.
- Haz clic en el botón `Add Device`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device.PNG" /></center>

- Completa los Detalles del Dispositivo
- Haz clic en el botón `Add` para crear tu dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device.PNG" /></center>

2. **Copiar la Configuración del Dispositivo**

- Después de agregar el dispositivo, se te presentará una Configuración del Dispositivo.
- Bajo las instrucciones manuales, copia el fragmento de código proporcionado. Necesitarás estas credenciales para conectar el dispositivo con la nube de FlowFuse.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device2.PNG" /></center>

## Instalación del Agente del Dispositivo

En tu terminal de reComputer, ejecuta el siguiente comando para instalar el agente de dispositivo de FlowFuse:

```sh
sudo npm install -g @flowfuse/device-agent
```

### Configurando el Agente del Dispositivo

1. **Crear Directorio de Configuración**:  - Ejecuta los siguientes comandos uno por uno para crear el directorio de configuración y establecer los permisos apropiados:

```sh
   sudo mkdir /opt/flowfuse-device
   sudo chown -R $USER /opt/flowfuse-device
   sudo su
   cd /
   cd opt/flowfuse-device
```

2. Crear y Editar Archivo de Configuración:**  - Abrir un nuevo archivo de configuración llamado `device.yml`:

```sh
nano device.yml
```

- Pega la configuración del dispositivo copiada en este archivo y guárdalo presionando `Ctrl + X`, luego `Y`, y `Enter`.

3. Ejecuta el Agente del Dispositivo:  - Ejecuta el siguiente comando para iniciar el agente de dispositivo FlowFuse:

```sh
flowfuse-device-agent --port=1881
```

Tu dispositivo ahora está configurado y conectado a la nube de FlowFuse, listo para usar.

## Desplegando el Flujo a un Dispositivo

Para desplegar el flujo a tu dispositivo, necesitas crear una instantánea de tu instancia de Node-RED y enviarla al terminal reComputer. Sigue estos pasos:

### Crear una Instantánea

1. **Navegar a la Aplicación**:
   - Ve a tu aplicación FlowFuse y selecciona la instancia que creaste.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot1.PNG" /></center>

2. **Seleccionar 'Snapshot'**:
   - Haz clic en la opción `Snapshot` en el menú de la instancia.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot2.PNG" /></center>

3. **Crear una Nueva Instantánea**:
   - Como no hay instantáneas aún, necesitas crear una.
   - Haz clic en `Create Snapshot`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot3.PNG" /></center>

4. **Completar los Detalles de la Instantánea**:
   - `Name`: Ingresa un nombre para tu instantánea.
   - `Description`: Proporciona una breve descripción de la instantánea.
   - `Set as Target`: Marca la casilla para establecer esta instantánea como objetivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot4.PNG" /></center>

5. **Crear la Instantánea**:
   - Haz clic en el botón `Create` para crear la instantánea. Esto capturará el estado actual de tu instancia de Node-RED, incluyendo flujos, credenciales, variables de entorno, paquetes NPM (con versiones bloqueadas) y configuraciones de tiempo de ejecución.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot5.PNG" /></center>

## Enviando la Instantánea al Dispositivo

Para desplegar la instantánea a tu dispositivo, sigue estos pasos:

1. **Ir a la Sección de Dispositivos**

- En el panel de FlowFuse, ve a la sección `Devices`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device_add_sanp.PNG" /></center>

2. **Seleccionar el Dispositivo**

- Encuentra el dispositivo que creaste y configuraste anteriormente.
- Toca los tres puntos junto al nombre del dispositivo.
- Haz clic en `Add Instance`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance.PNG" /></center>

3. **Agregar la Instancia al Dispositivo**

- Elige la aplicación e instancia que creaste anteriormente.
- Haz clic en el botón `Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance2.PNG" /></center>

4. **Desplegar el Flujo**

- Tu flujo será desplegado al dispositivo en unos pocos segundos. Se ejecutará con las configuraciones y ajustes capturados en la instantánea.

5. **Acceder al Dispositivo**

- Ve a tu dispositivo navegando a `<ip_address_recomputer>:1881/ui` en tu navegador web.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/gauge.PNG" /></center>

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
