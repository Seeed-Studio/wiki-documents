---
description: Get_Started_with_SenseCAP_Combo
title: Primeros pasos con SenseCAP Combo
keywords:
  - SenseCAP Combo
  - Registrador de datos
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /get_started_with_sensecap_combo
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/es/get_started_with_sensecap_combo/
---

# Primeros pasos con SenseCAP Combo

Este capítulo te muestra cómo configurar rápidamente tu sensor SenseCAP Combo 5 en 1 con 4G y conectarlo a la plataforma en la nube SenseCAP.

:::tip note
SenseCAP Combo 5-in-1 Sensor with 4G utiliza conectividad 4G Cat.1 y el protocolo MQTT para cargar datos a la plataforma en la nube SenseCAP o a tu propio servidor MQTT de terceros. Asegúrate de tener una tarjeta Micro SIM (3FF) válida con cobertura de datos móviles en tu área de despliegue.
:::

### Entorno de funcionamiento

SenseCAP Combo está diseñado para funcionar de forma fiable dentro de un rango de temperatura específico para garantizar un rendimiento estable y la seguridad de la batería. Asegúrate de que el dispositivo se utilice y se cargue dentro de estos rangos de temperatura para evitar degradación del rendimiento o problemas con la batería.

| Parámetro | Especificación |
|---------|---------------|
| Temperatura de funcionamiento | 0°C ~ 40°C |
| Temperatura de carga | 0°C ~ 40°C |
| Humedad de funcionamiento | 0 ~ 100% HR (sin condensación) |

:::caution note
La temperatura de funcionamiento del dispositivo está limitada por el adaptador de corriente incluido, que admite un rango de temperatura de funcionamiento de 0°C a 40°C.

El adaptador de corriente está diseñado solo para uso en interiores. No expongas el adaptador de corriente directamente a entornos exteriores. El adaptador de corriente debe instalarse dentro de una caja estanca o un cuadro eléctrico para garantizar una protección adecuada.
:::
<br />

## Instalar la tarjeta SIM

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/14.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

1. Abre la tapa de goma etiquetada como “SIM” y levanta el soporte metálico.
2. Inserta la tarjeta SIM en la ranura, fíjala con el soporte metálico y cierra bien la tapa de goma.


:::caution note
Después de instalar la tarjeta SIM, asegúrate de que la tapa de goma esté completamente sellada. De lo contrario, el rendimiento de impermeabilidad del dispositivo puede verse afectado.
:::

<br />

## Conexión del sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/15.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

El dispositivo proporciona un puerto RS-485 para conectar sensores Modbus-RTU externos.

1. Desenrosca la tapa protectora de la interfaz y conecta el sensor al puerto RS-485.
2. Después de conectar el sensor, asegúrate de que el conector de aviación esté completamente apretado. Si el conector no está en uso, también debe estar apretado para evitar la entrada de agua y daños al dispositivo.

:::caution note
1. Conecta los sensores **antes** de encender el dispositivo. De lo contrario, puede que no se detecten. En este caso, reinicia el dispositivo.
2. Al usar un divisor, no conectes sensores con la misma dirección Modbus a la interfaz RS-485.
3. Si conectas un sensor de 12V, el dispositivo debe alimentarse con una fuente de alimentación de CC externa.
:::

<br />

## Configurar en la plataforma en la nube SenseCAP

Antes del despliegue, asegúrate de que el dispositivo pueda funcionar con normalidad y cargar datos.

### Paso 1. Descargar la app SenseCraft

Descarga la app SenseCraft desde la App Store o Google Play para gestionar tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Paso 2. Crear una cuenta nueva

Crea una cuenta a través de la app SenseCraft o en PC en la plataforma en la nube SenseCAP: [https://sensecap.seeed.cc/portal](https://sensecap.seeed.cc/portal)

1. Haz clic en "Register", introduce tu correo electrónico y envía. Se enviará un correo de verificación.
2. Abre el correo de "SenseCAP", haz clic en el enlace y completa el registro.
3. Abre la app, selecciona "Global Server", introduce tu cuenta y contraseña e inicia sesión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

### Paso 3. Vincular el dispositivo

1. Ve a la página "Devices". Haz clic en el icono "+" en la esquina superior derecha.
2. Escanea el código QR de la etiqueta del dispositivo para vincularlo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

<br />

## Encender el dispositivo (estado del indicador)

Antes de encender, asegúrate de que los sensores y la tarjeta SIM estén instalados.

:::caution note
Al instalar sensores, asegúrate de que el dispositivo esté apagado. De lo contrario, es posible que los sensores externos no se detecten.
:::

Pulsa el botón metálico en la parte inferior del dispositivo. El indicador rojo se encenderá. Espera unos 3 minutos para que el dispositivo se conecte en línea. (El tiempo depende del número y tipo de sensores. Cuantos más sensores, más tiempo se requiere.)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/1.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

:::note
1. El dispositivo incluye un panel solar integrado para la carga.
2. Al usar sensores de 12V, se requiere un adaptador externo. Asegura una protección adecuada contra el agua cuando uses un adaptador.
:::

<br />

## Ver datos y estado

Puedes ver los datos y el estado del dispositivo mediante la app o el PC.

### A través de la app SenseCraft

Consulta los datos directamente en la app después de que el dispositivo esté vinculado y en línea.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/2.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### A través del portal SenseCAP

Ve a [https://sensecap.seeed.cc](https://sensecap.seeed.cc) e inicia sesión. Haz clic en "Data" para comprobar si los datos se cargan correctamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/3.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## SenseCAP API

SenseCAP API está pensada para que los usuarios gestionen dispositivos IoT y datos. Incluye 3 tipos de métodos API: protocolo HTTP, protocolo MQTT y protocolo Websocket.

- Con la API HTTP, los usuarios pueden gestionar dispositivos LoRa para obtener datos en bruto o datos históricos.
- Con la API MQTT, los usuarios pueden suscribirse a los datos de medición en tiempo real del sensor a través del protocolo MQTT.
- Con la API Websocket, los usuarios pueden obtener datos de medición en tiempo real de los sensores a través del protocolo Websocket.

Consulta la [Guía de usuario de la API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/16.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## Configuración general

Para configurar la dirección del servidor, añadir sensores o cambiar los intervalos de reporte, utiliza la herramienta de configuración para PC:

- Descargar herramienta: [SenseCAP Sensor Hub Configuration Tool NG](https://github.com/Seeed-Solution/SenseCAP-Sensor-Hub-Configuration-Tool-NG/releases)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/4.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

- Controlador (primer uso): [CH341 USB Driver](https://wch-ic.com/downloads/CH341SER_EXE.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/5.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Configuración del servidor MQTT

1. Conecta el dispositivo a un PC usando un cable USB Type-C.
2. Abre la herramienta, selecciona el puerto COM, habilita "Enter configuration mode automatically on device's booted", haz clic en "Connect" y luego pulsa el botón metálico. (Los botones "General Settings" y "Sensor Settings" se volverán azul oscuro.)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/6.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

3. Haz clic en "General Settings". Los mensajes de depuración aparecerán en el panel derecho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/7.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

4. Haz clic en el área de entrada y escribe: **b**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/8.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

5. Después de introducir el comando: **2**, pulsa Enter. Indica que has cambiado a la nueva plataforma en la nube 2.

:::note
- **1** es la plataforma en la nube SenseCAP (predeterminada)
- **2** es el servidor MQTT de terceros del usuario
- **3** es el despliegue privado de SenseCAP
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/9.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

6. Haz clic en "General Settings". Introduce la dirección del servidor MQTT, el puerto, el nombre de usuario y la contraseña. Haz clic en "Write".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/10.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Intervalo de reporte de datos e intervalo de reporte de CO₂

- **Reporting interval:** para todos los sensores excepto CO₂
- **CO₂ interval:** múltiplo del intervalo de reporte

Haz clic en "Write" después de la configuración.

:::note
Los intervalos cortos pueden hacer que la tasa de carga solar sea inferior a la tasa de descarga, lo que provoca que el dispositivo no pueda cargarse.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/11.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Configuración de APN

Introduce APN, nombre de usuario y contraseña si es necesario. De forma predeterminada es automático.

### Exportar datos en caché

Haz clic en "Export Cache Data" para exportar todos los datos históricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/12.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Verificar la carga de datos al servidor

Después de configurar el servidor:

1. Cierra la herramienta
2. Desconecta el cable USB
3. Pulsa el botón metálico para reiniciar el dispositivo

Espera unos minutos y luego suscríbete a los mensajes según el formato del tema usando la herramienta de suscripción MQTT para comprobar si puedes recibir los datos del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/13.png" alt="Comenzar con SenseCAP Combo" width={800} height="auto" /></p>


<br />

## Solución de problemas

### Estado anómalo del canal del sensor en la plataforma en la nube

- Generalmente causado por la desconexión de un sensor durante el funcionamiento.

### [ERROR] No se encontró ningún sensor. ¿Está conectado el sensor?

Por favor, comprueba lo siguiente:

- Verifica que la secuencia de cableado del sensor (positivo/negativo/RS485 A, B) sea correcta;
- Asegúrate de que la dirección Modbus del sensor coincida con la dirección configurada en "Sensor Settings";
- Verifica que el tipo de fuente de alimentación del sensor esté configurado correctamente;
- Asegúrate de que el tiempo de calentamiento, el tiempo de arranque y el tiempo de espera de respuesta cumplan con los requisitos del sensor;
- Comprueba que el código de función y los registros de los valores medidos estén configurados correctamente;

### [ERROR] Código de error RS485: XX

Algunos sensores requieren un tiempo de calentamiento. Si la comunicación se inicia antes de que se alcance este tiempo de calentamiento, el sensor devolverá un error de código de función.

Al probar un sensor, el primer paso es comprobar si el sensor existe. Esta comprobación solo requiere esperar el tiempo de arranque, no el tiempo de calentamiento. Por ejemplo, si el tiempo de arranque del sensor es de 1 segundo y el tiempo de calentamiento es de 5 minutos, y la unidad de adquisición de datos intenta comunicarse después de encender el sensor pero solo espera 1 segundo, se recibirá un error de código de función. La ventana mostrará "[ERROR] rs485 err code". Al adquirir datos, se esperará el tiempo de calentamiento antes de la comunicación para garantizar la adquisición de datos.

<br />

## Instalación y notas

### Uso de la batería integrada en entornos de baja temperatura

- Rango de descarga: 0°C ~ 50°C
- Rango de carga: 0°C ~ 40°C

Ten en cuenta que, debido a que el dispositivo tiene una batería de litio integrada, cuando se utiliza energía solar o un adaptador:

1. Si la temperatura ambiente se mantiene por debajo de 0 °C, la batería permanecerá sin cargarse hasta que la temperatura ambiente suba por encima de 0 °C.
2. Durante el período en que la carga está detenida, si la batería se agota por completo, el dispositivo no puede funcionar utilizando energía solar o un adaptador. Será necesario esperar a que la temperatura ambiente suba por encima de 0 °C y a que la batería de iones de litio se cargue hasta un nivel seguro antes de que el dispositivo pueda funcionar con normalidad.
<br />

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>