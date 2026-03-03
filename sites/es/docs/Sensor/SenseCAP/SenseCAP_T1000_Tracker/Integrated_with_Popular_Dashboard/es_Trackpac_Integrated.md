---
description: SenseCAP_T1000_tracker_and_Trackpac_Integrated
title: Integración con Trackpac
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_trackpac
last_update:
  date: 10/26/2023
  author: Jessie
---

[Trackpac](https://trackpac.io/) es un sistema innovador de gestión de Dashboard IoT (Internet de las Cosas) diseñado para optimizar los procesos de supervisión, control y notificación para una amplia gama de dispositivos IoT. Estos dispositivos abarcan una variedad de funcionalidades, incluyendo rastreadores, sensores de temperatura, sensores de humedad, indicadores de nivel y otras herramientas de medición de datos basadas en sensores.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Trackpac.


## Configurar el Dispositivo

Por favor revisa la [Guía de Inicio Rápido](https://wiki.seeedstudio.com/es/Get_Started_with_SenseCAP_T1000_tracker/) para configurar tu dispositivo correctamente.

Selecciona la plataforma como `Other Platform`, configura el `APP EUI` al valor recomendado: 
```cpp 
545241434B504143
```

:::tip
Si alguna vez quieres cambiarlo de vuelta, un `reset` restaurará las claves originales.
:::

Luego copia el `Device EUI`, `APP EUI` y `APP key`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png" alt="pir" width={300} height="auto" /></p>


## Configurar el portal de Trackpac


Inicia sesión en el [portal de Trackpac](https://v2.trackpac.io).

### Agregar Dispositivo

Navega a `Devices`, haz clic en el ícono `+` para agregar un nuevo dispositivo.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png" alt="pir" width={800} height="auto" /></p>

Elige `Enter Keys Manually`, nombra tu dispositivo y configura el `Device EUI`, `APP EUI`,`APP key`.

**Red LoRaWAN**: Helium

:::note
Verifica la [Cobertura de la Red Helium](https://explorer.helium.com/).
:::

**Tipo de Dispositivo**: SenseCAP T1000

Luego haz clic en `Add Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png" alt="pir" width={800} height="auto" /></p>


## Rastreo

Entonces tu SenseCAP T1000 ahora está integrado exitosamente con Trackpac, puedes verificar los datos ahora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png" alt="pir" width={800} height="auto" /></p>


## Agregar Geocerca (opcional)


Antes de agregar una geocerca, necesitas agregar contactos primero.

Navega a la sección `Contacts`, y haz clic en el botón `+` en la parte superior derecha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png" alt="pir" width={800} height="auto" /></p>

Ingresa `Name` y `Select Contact Type`: En los campos proporcionados, ingresa el nombre del contacto. Selecciona el tipo de contacto que estás agregando—si recibirán alertas vía SMS, Email, o Ambos.

Ingresa el email y/o número de teléfono del contacto en los campos respectivos.

Después de ingresar toda la información necesaria, haz clic en el botón `Add` para finalizar y agregar el contacto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png" alt="pir" width={800} height="auto" /></p>

Navega a la opción `Geofences`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png" alt="pir" width={800} height="auto" /></p>


Haz clic en la flecha `+`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png" alt="pir" width={800} height="auto" /></p>


Ingresa el Nombre de la Geocerca y establece el Radio: Usa el deslizador o campo de entrada para establecer el radio de la geocerca en metros.

**Configurar Alertas**: Activa o desactiva si quieres recibir alertas cuando se cruce el límite de la geocerca.

* Fuera de Horario: Especifica si quieres recibir alertas solo fuera de ciertas horas.

* Hora de Inicio y Fin: Si "Fuera de Horario" está seleccionado, ingresa el rango de tiempo durante el cual no quieres recibir alertas.

**Seleccionar Contactos para Alertas**: 

Elige cuáles de tus contactos guardados deben recibir alertas de geocerca ingresando sus nombres, o haciendo clic en la caja y seleccionándolos de la lista.

**Establecer Centro de Geocerca**:

* Hacer Clic en el Mapa: Usa tu mouse para hacer clic en la ubicación donde quieres que esté el centro de la geocerca.

* Usar Geolocalización: Alternativamente, puedes usar la función de geolocalización (usualmente representada como un ícono de brújula o ubicación) para hacer zoom a tu ubicación actual y establecerla como el centro de la geocerca.

Haz clic en `Add Geofence` para guardar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png" alt="pir" width={800} height="auto" /></p>


Entonces recibirás alertas cuando un rastreador entre o salga de la geocerca.