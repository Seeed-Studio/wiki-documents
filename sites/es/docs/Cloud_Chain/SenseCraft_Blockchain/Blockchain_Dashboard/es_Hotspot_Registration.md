---
sidebar_position: 3
description: Registro de Hotspot
title: Registro de Hotspot
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-blockchain/blockchain-dashboard/hotspot-registration
aliases:
  - /sensecraft-blockchain/sensecap-mx-dashboard/hotspot-registration
last_update:
  date: 06/06/2025
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2025-09-04'
url: https://wiki.seeedstudio.com/es/sensecraft-blockchain/blockchain-dashboard/hotspot-registration/
---

# Registro de Hotspot

**Cómo registrar Hotspots con Helium Wallet**
===============================================

-  Inicia sesión en el SenseCAP Dashboard visitando [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_dashboard)
-  Asegúrate de que tu "Helium APP" sea la última versión e inicia sesión en tu Helium wallet.

Puedes descargar la última versión visitando la [**Android Store**](https://play.google.com/store/apps/details?id=com.helium.wallet&hl=en_US) o la [**iOS Store**](https://apps.apple.com/app/id1450463605).

- En el SenseCAP Dashboard, haz clic en "Hotspot" en el menú de la izquierda y luego haz clic en el botón azul que dice "+ Add New Hotspot".

A continuación se te mostrará un código QR para importar tu Hotspot desde Helium Wallet como se indica a continuación:

![SeneseCAP Hotspot Registration](https://www.sensecapmx.com/wp-content/uploads/2022/07/dash-qr.png)

Utiliza "Helium App" para escanear el código QR que se muestra en el Dashboard.

![SenseCAP Hotspot Registration 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-register.png)

Escanea el código QR con tu Helium Wallet y concede permiso en "**Helium App**" cuando se te solicite vincular wallets.

**Nota**: Esto NO le da a nadie acceso a tu frase semilla de tu wallet, solo permite que el dashboard se conecte y agregue tu(s) hotspot(s) al dashboard.

![SenseCAP Hotspot Registration 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2-register.png)

Selecciona y añade el/los Hotspot(s) que deseas agregar al SenseCAP Dashboard y haz clic en el botón.

![SenseCAP Hotspot Registration 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3-register.png)

Si tu wallet se vinculó correctamente, verás el siguiente mensaje. **¡Todo está listo!**

![SenseCAP Hotspot Registration 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4-register.png)

**Registrar Hotspots con información del dispositivo**
=============================================

**Nota**: Puedes registrar tu hotspot en el dashboard ya sea con tu Helium Wallet o con la información de tu dispositivo. Si eliges registrar el hotspot con la información del dispositivo, deberás iniciar sesión en la Consola Local de tu hotspot para obtener la información del dispositivo.

![SenseCAP Hotspot Registration 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-6-1.png)

- Inicia sesión en el dashboard ⇒ [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_dashboard)
- Introduce las credenciales que creaste durante el registro e inicia sesión
- Navega a “Hotspot” en la columna del menú de la izquierda
- Haz clic en "Add new Hotspot"

![SenseCAP Hotspot Registration 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-7-1.png)

- Se te pedirá que introduzcas la dirección "**SN", "ETH MAC**", "**CPU ID**" y "**bind key**", donde "**SN**" se encuentra en la etiqueta inferior de tu SenseCAP M1, y los demás están en la página de la Consola Local.
- Haz clic en “**Confirm**” y el Hotspot se añadirá ahora a tu dashboard.

**Nota**: El CPU ID normalmente comienza con 1 seguido de 7 ceros. es decir, _**10000000**_

**¡Felicidades**! Has añadido correctamente tu Hotspot al dashboard para comenzar a monitorizarlo. Puedes repetir estos pasos para hotspot adicionales que quieras monitorizar.
