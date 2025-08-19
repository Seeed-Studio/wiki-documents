---
description: Primeros pasos con Ignition Edge
title: Primeros pasos con Ignition Edge
keywords:
  - Edge
  - Edgebox RPI 200
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edgebox-rpi-200-ignition-edge
last_update:
  date: 02/11/2025
  author: Erick González
---

# Edgebox RPI 200 - Primeros Pasos con Ignition Edge

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" />
</p>

> Capturar, procesar y visualizar datos críticos en el extremo de la red puede ser difícil y costoso. Ignition Edge de Inductive Automation® es una línea de soluciones de software Ignition® limitadas y ligeras, diseñadas específicamente para dispositivos de campo y dispositivos OEM en el extremo de la red. Con Ignition Edge, la computación en el borde es más fácil y asequible que nunca, permitiéndote extender la recopilación de datos, visualización y gestión del sistema hasta el extremo de tu red.
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge ofrece varios productos que pueden combinarse en un dispositivo Edge para crear soluciones potentes:
- **Ignition Edge IIoT**: Publica datos de dispositivos de campo a través de MQTT.
- **Ignition Edge Panel**: Crea HMI locales para dispositivos de campo.
- **Ignition Edge Compute**: Agrega computación en el borde a tu red.
- **Ignition Edge Sync Services**: Sincroniza datos desde el extremo de la red.
- **Ignition Edge EAM**: Se combina con otros productos Edge para una gestión centralizada.

Al integrar Ignition Edge en dispositivos de campo y OEM en el extremo de la red, las capacidades de Ignition pueden funcionar incluso en tus dispositivos más remotos. El Edgebox RPI 200 cuenta con fiabilidad industrial y conectividad híbrida, incluyendo I/O digital, RS485, RS232 y potentes capacidades de comunicación inalámbrica como WiFi, BLE, *4G y *LoRa®, lo que lo convierte en una excelente opción para alojar combinaciones de las potentes aplicaciones de la colección Ignition Edge.

> *Los módulos 4G y LoRa® no están incluidos por defecto, deben adquirirse por separado.*

## Requisitos de Hardware
- PC / Mac con capacidad de terminal SSH
- PC / Mac con espacio disponible en el disco duro para instalar las aplicaciones Designer de Ignition.
- Fuente de alimentación de 12-24V DC
- Cable Ethernet
- Edgebox RPI 200 x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*Esta guía asume que tu Edgebox tiene instalada la versión de fábrica de SenseCraft Edge OS con acceso por terminal SSH desde otro dispositivo.*
:::

## Instalación de Ignition Edge

Para instalar Ignition Edge en tu dispositivo es simple.

:::tip
El sistema operativo SenseCraft Edge OS predeterminado es una instalación de 32 bits, asegúrate de descargar el instalador adecuado.
:::

1. Visita [la página de descargas de Ignition](https://inductiveautomation.com/downloads/)
2. Descarga la versión de la aplicación que deseas utilizar (se te pedirá ingresar información antes de descargar el paquete).
3. Copia el paquete comprimido a tu dispositivo Edge, donde deseas instalarlo (por ejemplo, en /opt/).
4. Extrae el paquete en la ubicación actual.
5. Elimina el paquete original sobrante.
6. Modifica los permisos para ejecutar el script de inicio de Ignition.
7. Ejecuta el script de inicio de Ignition.

Un script de conveniencia ha sido escrito para automatizar estos pasos. Para usarlo, simplemente necesitas obtener el script de descarga/instalación de Ignition Edge. Una vez descargado, márcalo como ejecutable y ejecútalo. Puede que necesites credenciales de superusuario para crear los directorios necesarios. Puedes aprovechar este tiempo para tomar un café, ya que la instalación tardará unos minutos.

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### Desinstalación

Si deseas desinstalar el paquete, simplemente descarga y ejecuta el script de desinstalación.

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## Iniciando Ignition Edge Gateway por Primera Vez

### Configurar el gateway para que inicie al arrancar {#launch-ignition-edge-gateway-on-boot}
Puedes configurar el gateway para que se inicie automáticamente al arrancar el dispositivo siguiendo las instrucciones del sistema operativo.

Cuando la instalación esté completa, debes iniciar el servicio. Puedes [configurar el gateway para que inicie al arrancar](#launch-ignition-edge-gateway-on-boot) y reiniciar el dispositivo, o puedes elegir iniciar el servicio manualmente.

```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
Puedes verificar si el servicio está en ejecución cargando la página de inicio del Gateway de Ignition Edge.
:::

Para cargar la página de inicio del gateway, abre un navegador web en el Edgebox en `localhost:8088` o desde otro dispositivo en la red en `{edgeboxhostname}:8088` o con la dirección IP del Edgebox en `{edgeboxip}:8088`.

## Configuración de Ignition Edge

Configurar el gateway es un proceso sencillo. Acepta el EULA y luego crea un usuario y contraseña predeterminados para Ignition. Recuerda esta información, ya que será creada con credenciales de administrador y utilizada para la configuración del sistema.

Después, se te preguntará si deseas cambiar alguna de las configuraciones predeterminadas de los puertos de instalación. Si no hay conflictos en tu red, puedes aceptar los valores predeterminados.

## Soporte Técnico y Discusión del Producto

Gracias por elegir nuestros productos. Ofrecemos diferentes canales de soporte para garantizar que tu experiencia sea lo más fluida posible.

- [Foro de soporte](https://forum.seeedstudio.com/)
- [Contacto por correo electrónico](https://www.seeedstudio.com/contacts)
- [Servidor de Discord](https://discord.gg/eWkprNDMU7)
- [Discusión en GitHub](https://github.com/Seeed-Studio/wiki-documents/discussions/69)
