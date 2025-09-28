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
  date: 9/24/2025
  author: Kasun Thushara
---

## Introducción

OpenRemote es una plataforma IoT de código abierto diseñada para simplificar la conexión y gestión de dispositivos en red. En el corazón del sistema está el Manager, una aplicación Java sin interfaz gráfica que actúa como un broker de contexto IoT, capturando y gestionando los estados de los activos en tiempo real. A través del modelado dinámico de activos, puede representar varios componentes de su entorno—como edificios, habitaciones y sensores—adaptándolo a sus necesidades específicas. Las reglas escritas en Groovy, JavaScript o JSON desencadenan acciones basadas en cambios de estado de activos o secuencias de eventos. Estas reglas pueden, por ejemplo, notificar a los usuarios cuando se cumplen ciertos umbrales, como cuando la humedad aumenta en una habitación. La plataforma soporta dispositivos en red a través de Agentes, que interfaz con APIs de terceros y protocolos de servicio, y pueden estar co-ubicados con el manager o instalados en gateways edge. Al implementar OpenRemote en dispositivos Recomputer R1000 y R1100 alimentados por Raspberry Pi, puede gestionar su ecosistema IoT en el edge, proporcionando control eficiente y localizado sobre sus dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Instalando Docker y Docker-Compose

Siga estos pasos para instalar Docker y Docker-Compose en su sistema Ubuntu:

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

- **Nombre de usuario:** `admin`
- **Contraseña:** `secret`

Ahora tiene OpenRemote ejecutándose en su Recomputer R1000 / R1100 como una **plataforma IoT edge** para gestionar y controlar sus dispositivos conectados.

## Trabajando con Protocolo HTTP

Siga estos pasos para integrar la API de OpenWeatherMap con OpenRemote en su Recomputer R1000 / R1100. Esta guía cubre cómo crear un Agente para los datos meteorológicos, vincularlo a un activo y configurar la configuración.

### Obtener Clave API de OpenWeatherMap

Para usar la API de OpenWeatherMap, necesita una clave API gratuita. Regístrese para una cuenta gratuita en [OpenWeatherMap](https://openweathermap.org/) y obtenga su clave API.

### Crear el Agente

**Crear el Agente HTTP API**  

- Navegue a la página **Assets**.
- Haga clic en el icono **+** en la parte superior de la lista de activos a la izquierda para agregar un nuevo **Agent** o **Asset**.
- En el diálogo que aparece, seleccione **HTTP Agent** de la lista.
- **Nombre:** `HTTP API Agent`
- Haga clic en **Add**.

El agente ahora está creado con atributos preconfigurados. Necesitará configurarlo para conectarse a la API de OpenWeatherMap.

### Configurar el Agente HTTP API

Ahora que el Agente HTTP API está creado, configúrelo con los siguientes detalles:

- **Base URI:** `https://api.openweathermap.org/data/2.5/`  
  *(No olvide enviar el valor haciendo clic en el botón enviar a la derecha o presionando Enter.)*

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

### Crear el Activo Meteorológico

**Agregar un Nuevo Activo Meteorológico**

- Haga clic en el icono **+** para agregar un activo.
- Seleccione **Weather Asset** de la lista.
- **Nombre:** `Weather Rotterdam`
- Haga clic en **Add**.

El activo meteorológico ahora aparecerá en la lista como un hijo del Agente HTTP API. Puede cambiar su padre si lo desea.

### Agregar los Enlaces del Agente

**Modificar Configuración del Activo**
Vaya al **Modo Modificar** haciendo clic en el interruptor en la parte superior de la página del activo. En este modo, puede alterar los atributos de un activo y configurar sus ajustes.

### Configurar el Atributo de Humedad

- Expanda el atributo **humidity**.
- Haga clic en **Add configuration item** y seleccione **Agent link**.
- Seleccione el **HTTP API Agent**.
- Agregue los siguientes parámetros:

  - **Polling millis:** `60000` (sondear cada minuto)
  - **Path:** `weather`
  - **Value filters:** `JsonPathFilter-2`
  - **Path (JSON):** `$.main.humidity`

### Configurar el Atributo de Temperatura

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

Una vez que haya agregado los atributos, cambie al **Modo Ver** para ver los datos meteorológicos en vivo. Ahora tiene la temperatura y humedad actuales para Rotterdam vinculadas al activo meteorológico.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote1.png" alt="pir" width={800} height="auto" /></p>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
