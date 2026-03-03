---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title:  Integración con Ubidots (vía Helium)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 8/16/2023
  author: Jessie
---


Este artículo ilustrará el proceso de conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Ubidots a través de Helium LNS.

<div align="right">
Escrito por Juan David Tangarife - Del equipo de Ubidots
</div>

[Fuente](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### Requisitos

Una cuenta activa de Ubidots
Un [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)
Una cuenta activa en la consola de Helium con algunos DC
Un teléfono celular que soporte Google Play Store o AppStore, así como Bluetooth.

### Instalar la aplicación SenseCAP Mate y configurar el rastreador

Escanea el siguiente código QR. Te llevará a la página oficial de descarga de la aplicación SenseCAP Mate de Seeed Studio.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

Una vez instalada, habilita el Bluetooth en tu teléfono celular e inicia la aplicación. Si aún no tienes una cuenta, tendrás que registrarte para usar la aplicación.

Después de eso, mantén presionado el botón del rastreador durante al menos 3 segundos o hasta que el LED comience a parpadear. Luego, de la lista de dispositivos, selecciona **Tracker T1000**

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

Toca en tu dispositivo:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

Ve a la pestaña **configuración** y luego a la pestaña **LoRa**. Allí selecciona como _plataforma_ **Helium** y selecciona el _Plan de frecuencia_ según tus requisitos, además, asegúrate de copiar el **Device EUI, APP EUI** y **APP Key** ya que los necesitarás en pasos posteriores. Una vez terminado, toca el botón **Enviar** para guardar la configuración.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### Registrar el rastreador en Helium LNS

Inicia sesión en tu consola de Helium, luego, ve a la sección **"Devices"** y haz clic en el botón **"Add device"**

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

Completa los campos requeridos como el nombre del dispositivo**,** las credenciales LoRaWAN, etc. Luego haz clic en el botón **Save Device**.
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### Crear la función decodificadora en Helium

El siguiente paso es configurar la función que decodificará los bytes sin procesar en una forma legible para humanos. Dirígete a la pestaña **Function** en el panel del lado izquierdo. Luego haz clic en el botón **Add New Function** y dale un nombre:
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

Seeed Studio proporciona un decodificador específicamente para este dispositivo en el siguiente [repositorio](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js). Pega ese decodificador en el campo de texto y luego guarda los cambios.

### Crear la integración con Ubidots

Ve a la sección **Integrations**, luego haz clic en **Add integration** y busca la integración de Ubidots:
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

Haz clic en **+Add integration**
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

Ingresa tu token de Ubidots en el campo respectivo, luego haz clic en el botón **Continue** y espera el mensaje emergente de confirmación. Después de eso, nombra tu integración y haz clic en el botón **Add Integration**:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

Después de realizar este paso, se creará un nuevo **plugin de Helium** en tu cuenta de Ubidots.

### Crear el flujo para conectar la integración a Ubidots

Dirígete a la sección **Flows**, luego, desde el menú desplegable en la esquina superior izquierda, arrastra y suelta el dispositivo, la función decodificadora y la integración en el área en blanco, luego une los puntos como muestra el GIF a continuación:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

En este ejemplo, tanto el dispositivo como la función decodificadora se llaman "sensecap-lorawan-tracker", y la integración se llama "send data to ubidots".

Dado que el objeto JSON devuelto por el decodificador de Seeed Studio no es compatible con el esquema de Ubidots, se necesita una transformación después de extraer los datos de interés.  
Dirígete a la sección del decodificador de tu plugin de Helium, elimina todo el código allí y reemplázalo con el siguiente:  

```cpp
#Set to true in order to enable hotspot information
HOTSPOT_INFO_ENABLE = False

def format_payload(args):

    messages = args.get("decoded", {}).get("payload", {}).get("data", {}).get("messages", [])
    ubidots_payload = {}

    error = assert_error(messages[0][0])
    if error is not None:
        return error

    if HOTSPOT_INFO_ENABLE:
        hotspot_info = args.get('hotspots', None)
        ubidots_payload['SNR'] = hotspot_info[0].get('snr') if hotspot_info is not None else None
        ubidots_payload['RSSI'] = hotspot_info[0].get('rssi') if hotspot_info is not None else None
        ubidots_payload["port"] = args.get("port", None)
        ubidots_payload['Frame Counter'] = args.get('fcnt', None)

    for msg in messages:
        for sensor in msg:
            message_type = sensor.get("type", None)
            value = sensor.get("measurementValue")
            if message_type == "Latitude" or message_type == "Longitude":
                position = ubidots_payload.setdefault("position", {})
                position.update({message_type.lower(): value})
                continue
            elif message_type == "Timestamp":
                ubidots_payload["timestamp"] = value
                continue
            ubidots_payload[message_type] = value

    print(ubidots_payload)
    return ubidots_payload
    

def assert_error(data : dict):
    if "error" in data:
        return {"ERROR" : { "value" :  data["errorCode"], "context" : { "status" : data["error"]}}}
    return None
```

Si todo se conectó correctamente, deberías ver esto en un dispositivo recién creado en Ubidots
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>
