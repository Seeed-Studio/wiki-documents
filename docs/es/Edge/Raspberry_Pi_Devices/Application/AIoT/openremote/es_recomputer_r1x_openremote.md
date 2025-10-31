---
description: OpenRemote es una plataforma IoT completamente de código abierto que simplifica la conexión de dispositivos en red a aplicaciones móviles y web. Con la capacidad de implementarse en dispositivos alimentados por Raspberry Pi como Recomputer R1000 y R1100, OpenRemote proporciona una solución edge flexible para gestionar y controlar dispositivos IoT en su entorno
title: Implementando OpenRemote en reComputer R1x Gestionar Dispositivos IoT en el Edge
keywords:
- IIoT
- OpenRemote
- Raspberry-Pi 
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /es/openremote_r1x00
last_update:
  date: 9/30/2025
  author: Kasun Thushara
---

## Introducción

[OpenRemote](https://openremote.io/) es una plataforma IoT de código abierto diseñada para simplificar la conexión y gestión de dispositivos en red. En el corazón del sistema está el Manager, una aplicación Java sin interfaz gráfica que actúa como un broker de contexto IoT, capturando y gestionando los estados de los activos en tiempo real. A través del modelado dinámico de activos, puede representar varios componentes de su entorno—como edificios, habitaciones y sensores—adaptándolo a sus necesidades específicas. Las reglas escritas en Groovy, JavaScript o JSON desencadenan acciones basadas en cambios de estado de activos o secuencias de eventos. Estas reglas pueden, por ejemplo, notificar a los usuarios cuando se cumplen ciertos umbrales, como cuando la humedad aumenta en una habitación. La plataforma soporta dispositivos en red a través de Agents, que interfaz con APIs de terceros y protocolos de servicio, y pueden estar co-ubicados con el manager o instalados en gateways edge. Al implementar OpenRemote en dispositivos Recomputer R1000 y R1100 alimentados por Raspberry Pi, puede gestionar su ecosistema IoT en el edge, proporcionando control eficiente y localizado sobre sus dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Instalando Docker y Docker-Compose

Siga estos pasos para instalar Docker y Docker-Compose en su sistema Ubuntu:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremoter11.jpg" alt="pir" width={600} height="auto" /></p>

**1. Actualizar Paquetes del Sistema**

Primero, actualice la lista de paquetes y actualice los paquetes instalados para asegurar que su sistema esté actualizado.

```bash
sudo apt update
sudo apt upgrade
```

**2. Instalar Docker**

A continuación, descargue e instale Docker usando el script de instalación oficial. Esto instalará automáticamente Docker y todas sus dependencias.

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. Agregar su Usuario al Grupo Docker**

Por defecto, Docker requiere privilegios de root. Para ejecutar comandos Docker sin `sudo`, agregue su usuario al grupo Docker:

```bash
sudo usermod -aG docker ${USER}
```

Después de ejecutar este comando, cierre sesión y vuelva a iniciar sesión, o reinicie su sistema para que los cambios surtan efecto.

**4. Reiniciar Sistema**

Reinicie su sistema para asegurar que los cambios surtan efecto y su usuario sea agregado al grupo Docker.

```bash
sudo reboot
```

**5. Probar Instalación de Docker**

Después de reiniciar, verifique la instalación de Docker ejecutando la imagen `hello-world`, que confirmará que Docker está funcionando correctamente.

```bash
docker run hello-world
```

**6. Instalar Docker-Compose**

Finalmente, instale Docker-Compose, que es una herramienta para definir y ejecutar aplicaciones Docker multi-contenedor. Para instalarlo, ejecute:

```bash
sudo apt install docker-compose
```

## Instalando OpenRemote en Recomputer R1000 / R1100

**1. Descargar el Archivo Docker Compose**

Obtenga el archivo oficial `docker-compose.yml` directamente del repositorio de OpenRemote:

```bash
wget https://raw.githubusercontent.com/openremote/openremote/master/docker-compose.yml
```

**2. Navegar al Directorio**

Cambie al directorio donde se encuentra el archivo YAML:

```bash
cd /path/to/yaml
```

**3. Descargar Imágenes Docker**

Descargue las imágenes Docker requeridas:

```bash
docker-compose pull
```

**4. Iniciar OpenRemote**

Ejecute OpenRemote usando Docker Compose:

```bash
docker-compose -p openremote up
```

Esto lanzará el OpenRemote Manager y los servicios de soporte.

**5. Acceder a OpenRemote**

Una vez iniciado, puede iniciar sesión en el OpenRemote Manager con las credenciales predeterminadas:

- **Username:** `admin`
- **Password:** `secret`

Ahora tiene OpenRemote ejecutándose en su Recomputer R1000 / R1100 como una **plataforma IoT edge** para gestionar y controlar sus dispositivos conectados.

## Trabajando con Protocolo HTTP

Siga estos pasos para integrar la API de OpenWeatherMap con OpenRemote en su Recomputer R1000 / R1100. Esta guía cubre cómo crear un Agent para los datos meteorológicos, vincularlo a un activo y configurar la configuración.

### Obtener Clave API de OpenWeatherMap

Para usar la API de OpenWeatherMap, necesita una clave API gratuita. Regístrese para una cuenta gratuita en [OpenWeatherMap](https://openweathermap.org/) y obtenga su clave API.

### Crear el Agent

**Crear el HTTP API Agent**  

- Navegue a la página **Assets**.
- Haga clic en el icono **+** en la parte superior de la lista de activos a la izquierda para agregar un nuevo **Agent** o **Asset**.
- En el diálogo que aparece, seleccione **HTTP Agent** de la lista.
- **Name:** `HTTP API Agent`
- Haga clic en **Add**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote2.png" alt="pir" width={800} height="auto" /></p>

El agent ahora está creado con atributos preconfigurados. Necesitará configurarlo para conectarse a la API de OpenWeatherMap.

### Configurar el HTTP API Agent

Ahora que el HTTP API Agent está creado, configúrelo con los siguientes detalles:

- **Base URI:** `https://api.openweathermap.org/data/2.5/`  
  *(No olvide enviar el valor haciendo clic en el botón send a la derecha o presionando Enter.)*

- **Request Query Parameters:**  
  Ingrese la clave API de su cuenta de OpenWeatherMap y configure los parámetros como sigue:

```json
{
   "appid": ["YOUR_API_KEY"],
   "q": ["Rotterdam,nl"],
   "units": ["metric"]
}
```

Haga clic en **Save** para confirmar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote3.png" alt="pir" width={800} height="auto" /></p>

### Crear el Weather Asset

**Agregar un Nuevo Weather Asset**

- Haga clic en el icono **+** para agregar un activo.
- Seleccione **Weather Asset** de la lista.
- **Name:** `Weather Rotterdam`
- Haga clic en **Add**.

El weather asset ahora aparecerá en la lista como hijo del HTTP API Agent. Puede cambiar su padre si lo desea.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote4.png" alt="pir" width={800} height="auto" /></p>

### Agregar los Agent Links

**Modificar Configuración del Asset**
Vaya al **Modify Mode** haciendo clic en el interruptor en la parte superior de la página del activo. En este modo, puede alterar los atributos de un activo y configurar sus ajustes.

### Configurar el Atributo Humidity

- Expanda el atributo **humidity**.
- Haga clic en **Add configuration item** y seleccione **Agent link**.
- Seleccione el **HTTP API Agent**.
- Agregue los siguientes parámetros:

  - **Polling millis:** `60000` (sondear cada minuto)
  - **Path:** `weather`
  - **Value filters:** `JsonPathFilter-2`
  - **Path (JSON):** `$.main.humidity`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote5.png" alt="pir" width={800} height="auto" /></p>

### Configurar el Atributo Temperature

- Expanda el atributo **temperature**.
- Haga clic en **Add configuration item** y seleccione **Agent link**.
- Seleccione el **HTTP API Agent**.
- Agregue los siguientes parámetros:

  - **Polling millis:** `60000` (sondear cada minuto)
  - **Path:** `weather`
  - **Value filters:** `JsonPathFilter-2`
  - **Path (JSON):** `$.main.temp`

Haga clic en **Save** en la parte superior derecha para aplicar estos cambios.

### Ver Datos Meteorológicos en Vivo

Una vez que haya agregado los atributos, cambie al **View Mode** para ver los datos meteorológicos en vivo. Ahora tiene la temperatura y humedad actual para Rotterdam vinculadas al weather asset.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote1.png" alt="pir" width={800} height="auto" /></p>

## MQTT Agent con Integración de ChirpStack LoRaWAN Gateway

Este tutorial le guiará a través del proceso de integrar un MQTT Agent con ChirpStack y configurarlo en su manager OpenRemote para uso con dispositivos como el Dragino LHT65 y sensores SenseCap S210x. Antes de proceder, asegúrese de haber instalado ChirpStack en su dispositivo ReComputer R1X y emparejado un dispositivo (ej., SenseCap S210X). Para detalles de instalación de ChirpStack, consulte la guía oficial [ChirpStack LoRa Gateway on ReComputer R1X](https://wiki.seeedstudio.com/es/chirpstack_lora_gateway_r1x00/).

### Prerrequisitos

- OpenRemote Manager UI ejecutándose.
- ChirpStack LoRaWAN Gateway instalado en su dispositivo ReComputer R1X.
- Un dispositivo LoRaWAN SenseCap S210X.

### Crear el OpenRemote MQTT Agent

1. **Iniciar sesión en el OpenRemote Manager UI**:  
   Abra su navegador y vaya al OpenRemote Manager UI

2. **Navegar a la Página Assets**:  
   En el lado izquierdo de la página, haga clic en la pestaña **Assets**.

3. **Crear un nuevo MQTT Agent**:  
   - Haga clic en el botón **+** en el árbol de activos a la izquierda.
   - En el diálogo **Add asset**, seleccione **MQTT Agent** de la lista de tipos de activos.
   - Nombre el activo **ChirpStack MQTT Agent**.
   - Haga clic en **ADD** para crear el activo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote6.png" alt="pir" width={800} height="auto" /></p>

4. **Configurar el MQTT Agent**:
   - Haga clic en **Modify** para editar la configuración del activo.
   - Configure los siguientes atributos:
     - **Host**: La dirección IP de su servidor ChirpStack (ej., `10.0.0.208`).
     - **Port**: `1883` (puerto MQTT predeterminado).
   - Haga clic en **SAVE** para guardar sus cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote7.png" alt="pir" width={800} height="auto" /></p>

### Crear el OpenRemote LoRaWAN Device Asset

1. **Agregar un nuevo LoRaWAN Device**:
   - En la página **Assets**, haga clic en **+** en el árbol de activos a la izquierda.
   - En el diálogo **Add asset**, seleccione **Thing Asset**.
   - Nombre el activo **S2101** (o el nombre específico de su dispositivo).
   - Haga clic en **ADD** para crear el activo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote8.png" alt="pir" width={800} height="auto" /></p>

2. **Modificar el Asset del Dispositivo**:
   - Haz clic en **Modify** para editar la configuración del asset.

3. **Agregar un Atributo Personalizado para Temperatura**:
   - Haz clic en **ADD ATTRIBUTE** para agregar un nuevo atributo.
   - En el diálogo **Add attribute**, configura lo siguiente:
     - **Type**: **Custom attribute**
     - **Name**: **Temperature**
     - **Value type**: **Number**
   - Haz clic en **ADD** para guardar el atributo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote9.png" alt="pir" width={800} height="auto" /></p>

4. **Agregar Elementos de Configuración para MQTT Agent**:
   - Expande el atributo **Temperature** y haz clic en **ADD CONFIGURATION ITEMS**.
   - En el diálogo **Add configuration items**, configura como sigue:
     - **Select**: **Agent link**
   - Haz clic en **ADD** para crear el enlace al MQTT Agent.
   - Expande el elemento de configuración **Agent link** y establece el **Agent ID**:
     - **Agent ID**: **ChirpStack MQTT Agent**.
   - Haz clic en **ADD** para guardar el enlace del Agent.

### Configurar Suscripción MQTT para Datos del Sensor

1. **Agregar un Parámetro para el Tópico MQTT**:
   - Haz clic en **ADD PARAMETER** para agregar un nuevo elemento de configuración.
   - En el diálogo **Add parameter**, selecciona **Subscription Topic** y haz clic en **ADD**.

2. **Configurar el Tópico de Suscripción MQTT**:
   - Edita el campo **Subscription Topic** con el siguiente formato de tópico MQTT de ChirpStack:

     ```
     application/+/device/+/event/up
     ```

   - Este tópico se suscribirá a los datos entrantes del sensor desde el dispositivo LoRaWAN.

3. **Agregar Filtros de Valor**:
   - Haz clic en **ADD** para agregar un nuevo parámetro **Value Filters**.
   - Expande la sección **Value Filters** y haz clic en **ADD ITEM**.
   - En el diálogo **Add item**, selecciona **JSON Path** y haz clic en **ADD**.

4. **Configurar la Ruta JSON para Datos del Sensor**:
   - Expande el elemento **JSON Path** recién creado y establece el **Path** a:

     ```
     $.object.messages[?(@.measurementId==4097)].measurementValue
     ```

   - Este es un ejemplo para el decodificador de datos SenseCap S2101. Ajusta la ruta según sea necesario para tu dispositivo específico.
   - Habilita la opción **Return First**.

5. **Guardar Configuración**:
   - Una vez que todas las configuraciones estén establecidas, haz clic en **SAVE** para finalizar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote10.png" alt="pir" width={800} height="auto" /></p>

### Probar la Integración

1. **Verificar la Comunicación MQTT**:  
   Asegúrate de que el MQTT Agent esté conectado al servidor ChirpStack y que el tópico `application/+/device/+/event/up` esté recibiendo datos.

2. **Monitorear la Temperatura**:  
   El **SenseCap S2101** (o tu dispositivo configurado) ahora debería enviar lecturas de temperatura, y el administrador de OpenRemote mostrará estos valores bajo el atributo **Temperature**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote11.png" alt="pir" width={800} height="auto" /></p>

### Demostración

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/vYmtEf-7j2I"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
