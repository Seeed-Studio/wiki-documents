---
description: The Things Indoor Gateway
title: The Things Indoor Gateway
keywords:
  - Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /The-Things-Indoor-Gateway
sku: 114992464,114992469,114992468
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/The-Things-Indoor-Gateway/
---


![TTIG](https://files.seeedstudio.com/products/113990896/wiki/113990894_All-22.png)


<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/The-Things-Indoor-Gateway-US-p-4710.html">
            <strong><span style={{color: '#FFFFFF', fontSize: '1.2em'}}> Consigue Uno Ahora 🖱️</span></strong>
    </a>
</div>

## Introducción del Producto

[The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/) es un producto de [The Things Network](https://www.thethingsnetwork.org/) que presenta alta confiabilidad, alto rendimiento y rentabilidad. Es un gateway LoRaWAN de 8 canales basado en SX1308 con conectividad WiFi ESP8266 integrada. Con múltiples versiones y varias tomas de corriente disponibles, satisface una amplia gama de aplicaciones que requieren cobertura dinámica. Como un gateway IoT diseñado por The Things Network, disfruta de todas las funciones superiores que TTN proporciona a sus clientes. Y por supuesto, este gateway es capaz de conectarse con la Red de Internet de las Cosas segura y colaborativa que está construida y se extiende a través de muchos países alrededor del mundo para proporcionar cobertura a millones de personas. La herramienta que mucha gente aplica en su comunidad es [TTN Mapper](https://ttnmapper.org/). Por lo tanto, puedes usar este gateway para convertirte en uno de los contribuyentes de esta red cargándolo en [The Network Console](https://console.thethingsnetwork.org/), ¡o disfrutar de la red comunitaria pública construida por los otros gateways TTN!

The Things Indoor gateway soporta LoRaWAN 1.0.3 y por lo tanto es compatible con otros sensores LoRaWAN. Seeed Studio suministra muchos sensores enfocados en varios tipos de aplicaciones de detección ambiental inalámbrica. Si también necesitas algunos sensores para escenarios exteriores que midan CO2, humedad del suelo y temperatura, solo por nombrar algunos, [los sensores SenseCAP](https://www.seeedstudio.com/SenseCAP-c-1339.html) son tu mejor opción.

Con el uso de The Things Indoor LoRaWAN WiFi Gateway, The Things Network Console, y SenseCAP LoRaWAN Sensors, puedes construir fácilmente tu propio sistema IoT en casa, en tu jardín, en la oficina, cadena de suministro y fábricas. Siguiendo la [instrucción de instalación paso a paso](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf) proporcionada a continuación, ¡puedes configurar el gateway LoRaWAN para el tuyo propio en menos de 5 minutos y comenzar tu viaje IoT!

![spec](https://files.seeedstudio.com/products/113990896/wiki/TTN%20gateway%20specification%20picture_page-0001.jpg)

## Características

* **Instalación fácil**: enlace de retorno sobre WiFi 802.11 b/g/n vía ESP8266; Configuración simple en menos de 5 minutos
* **Uso Global**: EU868, US915, y AU915 disponibles; soporte LBT (Listen-Before-Talk)
* **Software Avanzado**: Soporta el protocolo BasicStation de última generación
* **Gran Confiabilidad**: Certificado por CE/FCC/IC/RCM/WPC/RoHS
* **Conveniente**: Diseño compacto para transportar; puede ser alimentado a través de múltiples opciones de energía: tanto enchufes de pared como USB tipo C en 900mA funcionan. Antena omnidireccional integrada para uso doméstico
* **Capacidad Poderosa**: Gateway LoRaWAN interior de 8 canales basado en SX1308

## Especificaciones

### LoRa

| Parámetro | Valor |
|-----------|-------|
| Chipset | Semtech SX1308 |
| Canales | 8 Canales |
| Sensibilidad de Recepción | -140/-135 dBm (EU/US) |
| Potencia de Transmisión | Hasta +27 dBM |
| Versión de Especificación LoRaWAN® | V.1.0.3 |
| Reenviador de Paquetes | Protocolo basic station |

### Wi-Fi

| Parámetro | Valor |
|-----------|-------|
| SoC | ESP9266 |
| Modo | 802.11 b/g/n, Modo Cliente |
| Potencia Tx | +20 dBm |
| Bandas de Frecuencia | 2.4 GHz |
| Puertos WAN/LAN | - |
| Puerto USB | USB Tipo-C (900 mA) |
| Seguridad | WPA/WPA2 |
| Dimensiones | 90*80*40 mm |
| Temperatura de Operación | 0-40℃ |
| Certificación | CE/FC/IC/RCM/WPC/RoHS |


### Otras Especificaciones

| Parámetro | Valor |
|-----------|-------|
| Interfaces | Indicadores LED |
| Tipo de Antena | Integrada |
| Banda de Frecuencia | AU915 |

## Fuentes

* [Get Started The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)
* [The Things Indoor Gateway Datasheet](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/TTIG_datasheet.pdf)
* [Getting started in for AWS](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG_AWS.pdf)

## The Things Indoor Gateway Primeros Pasos con SenseCAP

![combo](https://files.seeedstudio.com/products/113990896/wiki/connection%20diagram.png)

NOTA: Si no conoces SenseCAP, aquí tienes una breve introducción:
> Entre el primer lanzamiento de la serie de productos IoT industriales (IIoT) de Seeed, SenseCAP se enfoca en aplicaciones de detección ambiental inalámbrica: agricultura inteligente, agricultura de precisión y ciudad inteligente, por nombrar algunas. Consiste en productos de hardware (sensores, registradores de datos y gateways, etc.), servicios de software (portal SenseCAP, aplicación móvil, panel abierto) y API para gestión de dispositivos y datos. SenseCAP soporta diferentes protocolos de comunicación, como LoRa, 2G, 4G, NB-IoT y más.

Para obtener más información, haz clic en [Introducción a SenseCAP](https://wiki.seeedstudio.com/es/Industrial-IoT-SenseCAP-Introduction/)

### Paso 1: Activar tu Gateway TTIG

* Presiona el botón de reinicio (botón pequeño en la parte posterior del gateway junto al puerto USB-C) durante 5 segundos hasta que el LED parpadee rápidamente VERDE-ROJO un par de veces.
* Mantén presionado SETUP (botón en la parte superior del gateway, junto al LED) durante 10 segundos hasta que el LED parpadee rápidamente en ROJO.
* El gateway ahora expone un AP WiFi cuyo SSID es MINIHUB-xxxxxx donde xxxxxx son los últimos 6 dígitos del ID del gateway.
* La contraseña para esta red está impresa en el panel posterior del dispositivo bajo WiFi PW.
* Después, accede a 192.168.4.1 en tu navegador para ingresar a la página de configuración WiFi.

![192](https://files.seeedstudio.com/products/113990896/wiki/192.168.4.1.png)

* Selecciona la red WiFi e ingresa la contraseña si es una red cerrada.
* Selecciona la opción "Save and Reboot".
* Si tu configuración es correcta:
  * El gateway parpadeará VERDE durante unos segundos mientras se conecta a esta red.
  * Luego, parpadeará VERDE-ROJO durante unos segundos mientras se conecta al endpoint CUPS y obtiene la información necesaria para conectarse al endpoint de tráfico LNS.
* Si tu configuración fue exitosa, el LED estará VERDE sólido, lo que significa que el gateway está conectado a la red LoRaWAN y está listo para manejar paquetes.

### Paso 2: Registro del Gateway en la Consola TTN

Carga el sitio web de TTN: [https://www.thethingsnetwork.org](https://www.thethingsnetwork.org) y crea tu cuenta, luego accede a "Console" y primero haz clic en "Gateway".

![2.1](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

Registra tu gateway:

![2.2](https://files.seeedstudio.com/products/113990896/wiki/s2.2.png)

1. Gateway EUI: se muestra en la página "Add Network" 192.168.4.1

![2.3](https://files.seeedstudio.com/products/113990896/wiki/s2.3.png)

2. Frequency Plan: Ve las etiquetas en el gateway.
3. Router: Selecciona el router que sea adecuado para ti.
4. Register: El estado del Gateway muestra conectado, indicando registro exitoso

![2.4](https://files.seeedstudio.com/products/113990896/wiki/s2.4.png)

### Paso 3: Agregar sensores SenseCAP a la Consola TTN

#### 1. Obtener Device EUI, Device Code, App Key y App EUI

* Device EUI y Device Code están en la etiqueta del producto SenseCAP.

![3.1](https://files.seeedstudio.com/products/113990896/wiki/s3.1.png)

* El AppEUI y AppKey del dispositivo sensor SenseCAP han sido grabados en el dispositivo por Seeed. Usa la API HTTP para recuperar App EUI y App Key. Puedes usar el navegador para emitir una solicitud HTTP GET.

![3.2](https://files.seeedstudio.com/products/113990896/wiki/s3.2.png)

En la API, reemplaza el Device EUI y Device Code con tu propio Device EUI y Device Code respectivamente. Y obtendrás la siguiente respuesta en la página web que indica tu App EUI y App Key:

![3.3](https://files.seeedstudio.com/products/113990896/wiki/s3.3.png)

#### 2. Agregar Application y AppEUI

![3.4](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

1. Ingresa a la página "add application"

![3.5](https://files.seeedstudio.com/products/113990896/wiki/s3.5.png)

* Application ID: Ingresa un nombre único.
* Description: Ingresa una descripción.
* Handler registration: selecciona el mismo handler que el router del gateway.
* Selecciona Add Application para continuar.

![3.6](https://files.seeedstudio.com/products/113990896/wiki/s3.6.png)

![3.7](https://files.seeedstudio.com/products/113990896/wiki/s3.7.png)

* Application → Application EUIS → Manage EUIs.
* Add EUI
* Ingresa el AppEui del nodo que obtuviste en el paso anterior (paso 3.1).
* Add EUI

![3.8](https://files.seeedstudio.com/products/113990896/wiki/s3.8.png)

2. Agregar Nodo Sensor como Dispositivos en la Consola TTN

* Application → Device → register device

![3.9](https://files.seeedstudio.com/products/113990896/wiki/s3.9.png)

![3.10](https://files.seeedstudio.com/products/113990896/wiki/s3.10.png)

* Device ID: Ingresa un nombre único.
* Device EUI: Ingresa el Device EUI del nodo que obtuviste en el paso anterior (Paso 3.1).
* App Key: Ingresa el App Key del nodo que obtuviste en el paso anterior.
* App EUI: Selecciona el App EUI del nodo.
* Register

### Paso 4: Activar tus Sensores SenseCAP

#### Encendido

El interruptor de encendido está oculto dentro del dispositivo. Abre el dispositivo y enciende la alimentación antes de instalar los sensores. Aquí están las instrucciones paso a paso:

* Afloja la Sonda del Sensor girando la tapa en sentido antihorario. Usa el abridor de tapa blanco para hacer este proceso más fácil. La imagen de abajo usa el Sensor TH como ejemplo y se aplica a todos los demás sensores SenseCAP.

![4.1](https://files.seeedstudio.com/products/113990896/wiki/s4.1.png)

* Después de abrir el dispositivo, gira el interruptor a "ON", y el LED en la esquina inferior derecha parpadeará, indicando que la alimentación está encendida. Espera aproximadamente 10 segundos, luego el LED parpadeará rápidamente durante 2 segundos, indicando que el dispositivo está conectado a la red.

![4.2](https://files.seeedstudio.com/products/113990896/wiki/s4.2.png)

* Después de que el dispositivo esté conectado a la red, conecte la Sonda del Sensor de vuelta con el Controlador del Nodo Sensor girándola en sentido horario. Tenga en cuenta que las etiquetas en ambas partes deben estar alineadas como se muestra en la imagen a continuación, de lo contrario las dos partes no se acoplarán para funcionar correctamente y los datos no se cargarán.

* Verifique el estado de Conexión del Nodo Sensor en la Consola de TTN: cuando el estado se vuelva verde, está conectado exitosamente.

![4.3](https://files.seeedstudio.com/products/113990896/wiki/s4.3.png)

### Paso 5: Verificación de Datos

En la página de Datos, se cargan paquetes de datos. Para el formato de la carga útil, consulte la sección de Decodificación.
Aquí se muestran los datos obtenidos exitosamente por el Sensor de Humedad del Suelo y Temperatura SenseCAP LoRaWAN y el Sensor de CO2 SenseCAP LoRaWAN:

![4.4](https://files.seeedstudio.com/products/113990896/wiki/soil%20data%20board.png)

![4.5](https://files.seeedstudio.com/products/113990896/wiki/co2%20data%20board.png)
