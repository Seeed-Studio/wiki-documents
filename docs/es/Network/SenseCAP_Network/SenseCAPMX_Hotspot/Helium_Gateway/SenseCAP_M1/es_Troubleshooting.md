---
description: SenseCAP M1 Trouble Shooting
title: Solución de Problemas
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/Troubleshooting
last_update:
  date: 02/14/2023
  author: Matthew
---


Solución de Problemas SenseCAP M1
==================================

Relacionado con Hardware
========================

* * *

**No parpadea el LED azul**
---------------------------

![SenseCAP M1 Blue LED](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 Blue LED Not Good](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**Pasos de Solución de Problemas**

1.  Verifique si el LED ETH está parpadeando. Si las luces verde y amarilla de ETH están encendidas y el LED azul está apagado, **[por favor flashee primero una nueva tarjeta SD](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**. Si la luz azul sigue apagada, sería un problema de defecto de hardware.
2.  Si los LED verde y amarillo están apagados, trate de asegurarse de que el adaptador de corriente esté bien. Puede verificar reemplazándolo con un cargador de teléfono de 5V-3A con un cable tipo-C y un nuevo cable de red para ver si el problema se resuelve.
3.  Si el hotspot se conecta a internet vía Wi-Fi, por favor verifique si la luz roja está encendida a través del panel frontal, si no, sería un problema de defecto de hardware.

* * *

Relacionado con Red
===================

* * *

**¿No puede conectarse a Internet?**
------------------------------------

Tener su configuración de red configurada correctamente juega un papel importante. Por favor asegúrese de leer todos los detalles a continuación para garantizar una configuración adecuada.

Los Hotspots de Helium pueden no funcionar si el Hotspot está detrás de un firewall o usa un tipo de NAT incompatible como se describe a continuación. En otros casos, puede ser debido a una configuración del router/configuración de red o su conexión simplemente está desconectada (sin Internet).

**Nota**: Si no puede configurar adecuadamente la configuración de red o los pasos a continuación no funcionan para usted, por favor visite nuestro >> Canal Oficial de Discord para mayor orientación.

**Pasos de Solución de Problemas - Conexión Ethernet**

**Por favor verifique sus cables Ethernet si no está usando Wi-Fi**: Asegúrese de que su cable Ethernet esté conectado de forma segura al Hotspot desde su router/módem.

*   **Luces ámbar parpadeando junto al puerto Ethernet en el Hotspot**: Conexión sólida establecida.
*   Si no ve luces ámbar parpadeando en el puerto Ethernet, por favor pruebe un cable diferente ya que los cables con el tiempo tienden a fallar.

**Verifique su conexión a Internet**: Por favor asegúrese de que pueda conectarse a Internet desde su ubicación usando su computadora/laptop/teléfono doméstico, en la misma red. Si no puede conectarse a Internet, necesitará contactar a su Proveedor de Servicios de Internet (ISP) para asistencia adicional con respecto a su conexión.

**Pasos de Solución de Problemas - Conexión Wi-Fi**

*   **Si está usando Wi-Fi**: Por favor confirme que puede conectarse a su red inalámbrica con su contraseña de seguridad WEP o WPA (es decir, contraseña Wi-Fi). Si no sabe cómo conectarse o acceder a su módem inalámbrico, necesitará contactar directamente al fabricante del equipo.
*   Si no puede conectarse a internet, reinicie su router. Desconecte su Hotspot y router de la pared o regleta de corriente por 2 minutos. Luego, conéctelos de nuevo para ver si puede conectarse a Internet.

* * *

**¿Cómo conectar el Hotspot al WiFi de mi Teléfono?**
-----------------------------------------------------

**Este ejemplo se muestra para dispositivos Apple iOS a continuación.**

*   Encuentre "**Configuración**" en su teléfono.
*   Haga clic en "**Zona** **WiFi**".

![iOS Personal Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

*   Habilite para permitir que otros se unan.
*   Empareje su Hotspot.
*   Conecte su Hotspot al nombre de Zona WiFi de su teléfono Apple iOS.

![iOS Hotspot Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

Ahora puede emparejar su SenseCAP Gateway a la zona wifi personal de su teléfono vía Wi-Fi para solucionar problemas de actualizaciones de firmware y conectividad de red.

* * *

Relacionado con Tarjeta SD
==========================

* * *

**Cómo Reemplazar El Archivo 'config.json'**
--------------------------------------------

**PROCEDA CON PRECAUCIÓN**: Los siguientes pasos deben usarse SOLO si ha sido aconsejado por nuestro Equipo de Soporte Técnico. No necesita replicar estos pasos si **NO** ha sido aconsejado.

**NOTA:** **NO** use los mismos archivos '**config.json**' para otros Hotspots. Cada Hotspot tiene un archivo '**config.json**' único adjunto a su número de serie.

* * *

**Instrucciones**

Las instrucciones a continuación le ayudarán a reemplazar el archivo 'config.json' en la tarjeta Micro SD. Si encuentra que el dispositivo está atascado en firmware/versión antigua y considera que puede ser un error potencial causando la falla, por favor siga las instrucciones para resolver el problema.

**NOTA**: Por favor verifique su conexión a Internet primero para asegurarse de que el problema no esté relacionado con Internet antes de seguir los pasos a continuación para reemplazar la tarjeta micro SD.

* * *

**Requisitos**

1.  Tarjeta Micro SD en su SenseCAP M1 Hotspot
2.  Lector de tarjetas Micro SD
3.  Destornillador
4.  El archivo '**config.json**' copiado de la tarjeta original

**Nota**: Por favor pida a nuestros Agentes de Soporte Técnico que le proporcionen uno si no puede recuperar el original.

![Swap Config.json File Requirements](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_Elementos Requeridos_

* * *

**Pasos**

*   **Paso 1**: Apague su Hotspot
*   **Paso 2**: Retire la antena
*   **Paso 3**: gire hacia el lado frontal del panel

![Config.json File Swap 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

*   **Paso 4**: Use el destornillador para aflojar los dos tornillos en el frente del panel

![Config.json File Swap 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

*   **Paso 5**: Mueva el panel frontal y póngalo a un lado

![Config.json File Swap 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

*   **Paso 6**: Retire el adhesivo amarillo de la parte superior de la tarjeta Micro SD usando pinzas y extraiga la tarjeta Micro SD

![Config.json File Swap 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)

![Config.json File Swap 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)

![Config.json File Swap 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

*   **Paso 7**: Conecte la tarjeta Micro SD a un lector de tarjetas y conéctelo a su computadora

![Config.json File Swap 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)

![Config.json File Swap 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**NOTA**: Si está usando un sistema operativo Windows y se le pregunta "**Necesita formatear el disco en la unidad** "**X**" antes de poder usarlo", haga clic en "**Cancelar**" de lo contrario los datos de su tarjeta Micro SD se borrarán.

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_Mensaje de Windows al insertar la tarjeta Micro SD_

*   **Paso 8**: Ahora encontrará que hay un archivo '**config.json'** en la carpeta '**resin-boot**', por favor ábralo usando el bloc de notas para confirmar que está vacío.

Si **NO** está vacío, hay un problema de OTA (actualización por aire) causado por el archivo de configuración, es un problema de conexión de red. Por favor verifique su red y configuraciones de seguridad/firewall.

Si **ESTÁ** vacío, por favor reemplácelo usando el nuevo archivo 'config.json' que le proporcionamos para reemplazarlo.

![Empty config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

*   **Paso 9**: Si el archivo '**config.json**' está vacío, necesitará reemplazarlo con el que proporcionamos. Arrastre el nuevo archivo al disco y haga clic en 'Reemplazar'.

**NOTA**: Por favor NO elimine ningún otro archivo, de lo contrario, causará problemas inesperados con su SenseCAP M1.

**NOTA**: Cada dispositivo tiene un archivo 'config.json' diferente registrado para él, por favor no comparta su archivo 'config.json' con otros o use archivos de otros.

**Para MacOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar archivo_ 'config.json'

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Para Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - Copiar archivo "config.json"_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**Nota**: Se recomienda verificar dos veces que hay contenido dentro del archivo '**config.json**' después de copiarlo simplemente abriéndolo en el Bloc de notas.

*   **Paso 10**: Vuelva a colocar la tarjeta Micro SD dentro del Hotspot

**CONSEJO**: Ensamble el panel frontal después de confirmar que su Hotspot está funcionando.

![Put Together SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)

![Put Together SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)

![Put Together SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)

![Put Together SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

*   **Paso 11**: Ensamble la antena y encienda su Hotspot

Encienda el SenseCAP M1, conéctelo a internet (mejor con cable ethernet), espere ~20 minutos para las actualizaciones OTA, y verifique el estado en el Panel de Control ([**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)) o ejecute diagnósticos dentro de la APP de Helium.

Si tiene más problemas o preguntas, por favor abra un ticket aquí: [**https://support.sensecapmx.com**](https://support.sensecapmx.com)

* * *

**Cómo Flashear una Nueva Imagen a una Nueva Tarjeta Micro SD**
----------------------------------------------------------------

**PROCEDA CON PRECAUCIÓN**: Los siguientes pasos deben usarse SOLO si ha sido aconsejado por nuestro Equipo de Soporte Técnico. No necesita replicar estos pasos si NO ha sido aconsejado.

Debido al mal uso de los Hotspots por parte de los usuarios, hemos encontrado que el ciclo frecuente de encendido y apagado, conectar y desconectar la tarjeta micro SD, puede resultar en errores desconocidos de la tarjeta micro SD, como la alineación del sistema de archivos.

**Si ha sido aconsejado reemplazar la tarjeta micro SD para depurar el problema, por favor siga las instrucciones a continuación cuidadosamente.**

* * *

**Instrucciones**

Las instrucciones proporcionadas a continuación le ayudarán a flashear imágenes a una nueva tarjeta micro SD y a reemplazar la original en el SenseCAP M1 para solucionar el problema causado por posibles errores de la tarjeta micro SD.

**NOTA**: Por favor verifique su conexión a Internet primero para asegurarse de que el problema no esté relacionado con Internet antes de seguir los pasos a continuación para reemplazar la tarjeta micro SD.

* * *

**Requisitos**

**Nota**: Ahora tenemos disponible el kit de reemplazo de tarjeta SD, que puede comprar haciendo clic [**aquí**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html) .

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_El kit viene con un destornillador, un lector de tarjetas MicroSD, una tarjeta MicroSD de 64GB, y una instrucción sobre cómo reemplazar la MicroSD._

1.  Nueva tarjeta Micro SD (SanDisk High Endurance 64GB)
2.  Lector de tarjetas Micro SD
3.  Destornillador
4.  El archivo '**config.json**' copiado de la tarjeta original  
    1.  **Nota**: Por favor pida a nuestros Agentes de Soporte Técnico que le proporcionen uno si no puede recuperar el original.

* * *

**Pasos**

1.  Apague el dispositivo, abra el panel frontal, retire la etiqueta amarilla en la parte superior de la tarjeta micro SD (puede usar pinzas), y desconecte y saque la tarjeta micro SD original.
2.  Conecte la tarjeta micro SD original a su computadora con un lector de tarjetas micro SD y copie el archivo 'config.json' de la partición "resin-boot" de la tarjeta SD original, guárdelo en su computadora  
    1.  **Nota**: Por favor pida a nuestros Agentes de Soporte Técnico que le proporcionen uno si no puede recuperar el original.
3.  Descargue la **Imagen SenseCap M1** desde aquí: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4.  Descargue la **herramienta Balena Etcher** desde aquí: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)
5.  Flashee la **Imagen SenseCap M1** a la nueva tarjeta micro SD con Balena Etcher.
6.  Copie el archivo "**config.json**" que proporcionamos desde su computadora a la partición "**resin-boot**" de la nueva tarjeta micro SD después de flashear.
7.  Desconecte la nueva tarjeta micro SD de su computadora, y conéctela al SenseCap M1.
8.  Encienda el SenseCap M1, conéctelo a internet (mejor con cable ethernet), espere 20 minutos para las actualizaciones, y verifique el estado en el Panel de Control ([**https://status.sensecapmx.cloud**](https://status.sensecapmx.cloud/)/) o ejecute diagnósticos en la App de Helium.

**Nota**: Solo debes ensamblar el panel frontal del Hotspot después de confirmar que tu Hotspot está funcionando correctamente.

* * *

**Cómo Abrir el SenseCAP M1 y Reemplazar la Tarjeta Micro SD**

*   **Paso 1:** Apaga tu Hotspot, luego retira la antena.

![SenseCAP M1 SD Card Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **Paso 2**:  Usa el destornillador para aflojar los dos tornillos del panel frontal.

![SenseCAP M1 SD Card Step 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **Paso 3**:  Mueve el panel frontal y ponlo a un lado.

![SenseCAP M1 SD Card Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **Paso 4**:  Retira la etiqueta amarilla de la parte superior de la tarjeta Micro SD (puedes usar pinzas).

![SenseCAP M1 SD Card Step 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Step 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Cómo Leer la Micro SD y Grabar la Imagen**

*   **Paso 1**: Conecta una nueva tarjeta Micro SD al lector de tarjetas Micro SD.

![SenseCAP M1 SD Card Image Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_Nueva Tarjeta Micro SD en el Lector de Tarjetas Micro SD_

![SenseCAP M1 SD Card Image Step 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_Asegúrate de que Esté Completamente Conectada_

*   **Paso 2**: Graba la imagen del SenseCAP M1 en la nueva tarjeta Micro SD con Balena Etcher.
    *   Descarga la **Imagen del SenseCap M1** desde aquí: [**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    *   Descarga la **herramienta Balena Etcher** desde aquí: [**balenaEtcher - Flash OS images to SD cards & USB drives ​**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_Selecciona Según Tu Sistema Operativo_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Arrastra el Archivo Image.ZIP a Balena Etcher_

*   **Paso 3**:  Después de haber grabado exitosamente la imagen en la tarjeta MicroSD, copia el archivo "config.json" que proporcionamos/o que copiaste originalmente, desde tu computadora a una partición llamada "resin-boot".

**Para MacOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar Archivo '_config.json'_

**Para Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

*   **Paso 4**: Desconecta la nueva tarjeta Micro SD de tu computadora.
*   **Paso 5**: Conecta la nueva tarjeta Micro SD a tu SenseCAP M1.

![SenseCAP M1 SD Card Step 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **Paso 6**: Enciende el SenseCAP M1, y conéctalo de nuevo a Internet (preferiblemente con cable Ethernet).
*   **Paso 7**: Espera aproximadamente ~20 minutos para aplicar las actualizaciones y verifica el Panel de Control (**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/))** o ejecuta diagnósticos en la aplicación Helium después de que esto se complete.

![SenseCAP M1 SD Card Step 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Nota**: Solo debes ensamblar el panel frontal del Hotspot después de confirmar que tu Hotspot está funcionando correctamente.

Si tienes más problemas o preguntas, por favor abre un ticket aquí: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

**Cómo Formatear la Tarjeta Micro SD y Grabar la Imagen**
-------------------------------------------------------

**PROCEDE CON PRECAUCIÓN**: Los siguientes pasos deben usarse SOLO si has sido aconsejado por nuestro Equipo de Soporte Técnico. No necesitas replicar estos pasos si **NO** has sido aconsejado.

Debido al mal uso de los Hotspots por parte de los usuarios, hemos encontrado que el encendido y apagado frecuente, conectar y desconectar la tarjeta micro SD, puede resultar en errores desconocidos de la tarjeta micro SD, como la alineación del sistema de archivos.

**Si has sido aconsejado de reemplazar la tarjeta micro SD para depurar el problema, por favor sigue las instrucciones a continuación cuidadosamente.**

* * *

**Instrucciones**

Las instrucciones proporcionadas a continuación te ayudarán a grabar imágenes en una nueva tarjeta micro SD y a reemplazar la original en el SenseCAP M1 para solucionar el problema causado por posibles errores de la tarjeta micro SD.

**NOTA**: Por favor verifica tu conexión a Internet primero para asegurarte de que el problema no esté relacionado con Internet antes de seguir los pasos a continuación para reemplazar la tarjeta micro SD.

* * *

**Requisitos**

1.  Tarjeta Micro SD en tu Hotspot SenseCAP M1
2.  Lector de tarjetas Micro SD
3.  Destornillador
4.  El archivo '**config.json**' copiado de la tarjeta original  
    1.  **Nota**: Por favor pide a nuestros Agentes de Soporte Técnico que te proporcionen uno si no puedes recuperar el original.
5.  SD Card Formatter 5.0.1
6.  Para **Windows** => [**Haz clic aquí**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing) para descargar e instalar
7.  Para **Mac OS** => [**Haz clic aquí**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing) para descargar e instalar
8.  Imagen del SenseCAP M1 => [**Haz clic aquí**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0) para descargar
9.  Balena Etcher => [**Haz clic aquí**](https://www.balena.io/etcher/) para descargar

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_El kit viene con un destornillador, un lector de tarjetas MicroSD, una tarjeta MicroSD de 64GB, y una instrucción sobre cómo reemplazar la MicroSD._

* * *

**Pasos**

1.  Apaga el dispositivo, abre el panel frontal, retira la etiqueta amarilla de la parte superior de la tarjeta Micro SD, desconecta la tarjeta Micro SD.
2.  Conecta la tarjeta Micro SD a tu computadora con un lector de tarjetas Micro SD y copia el archivo '**config.json'** de la partición "resin-boot", guárdalo en tu computadora.  
    1.  **Nota**: Por favor pide a nuestros Agentes de Soporte Técnico que te proporcionen uno si no puedes recuperar el original.
3.  Formatea la tarjeta MicroSD usando "**SD Card Formatter 5.0.1**"
4.  Graba la **Imagen del SenseCap M1** en la tarjeta MicroSD con **Balena Etcher**.
5.  Copia el archivo '**config.json**' desde tu computadora a la partición "**resin-boot**" de la tarjeta Micro SD.
6.  Conecta de nuevo la tarjeta Micro SD desde tu computadora al Hotspot SenseCap M1.
7.  Enciende el SenseCap M1, conéctalo a internet (mejor con cable ethernet), espera ~20 minutos para las actualizaciones OTA, y verifica el estado en el [**Panel de Control**](https://docs.sensecapmx.com/home/sensecap-dashboard) o ejecuta diagnósticos dentro de la aplicación Helium.

**Nota**: Debes ensamblar el panel frontal del Hotspot solo después de confirmar que tu Hotspot está funcionando correctamente.

* * *

**Cómo Abrir el SenseCAP M1 y Reemplazar la Tarjeta Micro SD**

*   **Paso 1:** Apaga tu Hotspot, luego retira la antena.

![SenseCAP M1 SD Card Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **Paso 2**:  Usa el destornillador para aflojar los dos tornillos del panel frontal.

![SenseCAP M1 SD Card Step 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **Paso 3**:  Mueve el panel frontal y ponlo a un lado.

![SenseCAP M1 SD Card Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **Paso 4**:  Retira la etiqueta amarilla de la parte superior de la tarjeta Micro SD (puedes usar pinzas).

![SenseCAP M1 SD Card Step 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Step 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Cómo Formatear la Tarjeta Micro SD (Windows)**

*   **Paso 1****:** Conecta una nueva tarjeta Micro SD al lector de tarjetas Micro SD.  
    

![SenseCAP M1 SD Card Image Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_Nueva Tarjeta Micro SD en el Lector de Tarjetas Micro SD_

![SenseCAP M1 SD Card Image Step 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_Asegúrate de que Esté Completamente Conectada_

*   **Paso 2****:** Instala y ejecuta SD Card Formatter

![SD Card Formatter](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

*   **Paso 3****:**  Selecciona la tarjeta Micro SD que conectaste a la computadora, elige "Overwrite format", escribe "resin-boot" en la etiqueta de volumen, y haz clic en el botón "Format"  
    

![SD Card Formatter Resin-Boot Folder](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

*   **Paso 4****:**  Selecciona "Yes" en la ventana de diálogo  
    

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

*   **Paso 5**: Espera aproximadamente 30-45 minutos y el proceso de formateo se completará

![SD Card Formatter Screen](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

**Cómo Formatear la Tarjeta Micro SD (MacOS)**

Los pasos son similares, por favor consulta las imágenes a continuación:

![SD Card Formatter MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)

![SD Card Formatter MacOS Complete](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**Cómo Grabar la Imagen en la Tarjeta Micro SD**

*   Descarga la **Imagen SenseCap M1** desde aquí: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
*   Descarga la **herramienta Balena Etcher** desde aquí: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_Selecciona Según Tu Sistema Operativo_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Arrastra el Archivo Image.ZIP a Balena Etcher_

* * *

**Cómo Agregar el Archivo 'config.json' a la Tarjeta Micro SD**
------------------------------------------------------

Después de haber grabado exitosamente la imagen en la tarjeta MicroSD, copia el archivo "**config.json**" que proporcionamos/o que copiaste originalmente, desde tu computadora a una partición llamada "resin-boot".

**NOTA**: Por favor NO elimines ningún otro archivo, de lo contrario, causará problemas inesperados con tu SenseCAP M1.

**NOTA**: Cada dispositivo tiene un archivo '**config.json**' diferente registrado para él, por favor no compartas tu archivo '**config.json**' con otros o uses archivos de otros.

**Para macOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar Archivo_ 'config.json'

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Para Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - Copiar Archivo 'config.json'_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**Después de Formatear la Tarjeta Micro SD y Grabar la Imagen**
-------------------------------------------------------------

*   **Paso 1**: Desconecta la nueva tarjeta Micro SD de tu computadora.
*   **Paso 2**: Conecta la nueva tarjeta Micro SD a tu SenseCAP M1.

![SenseCAP M1 SD Card Step 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **Paso 6**: Enciende el SenseCAP M1, y conéctalo de nuevo a Internet (preferiblemente con cable Ethernet).
*   **Paso 7**: Espera aproximadamente 20 minutos para aplicar actualizaciones y verifica el Panel de Control (**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/))** o ejecuta diagnósticos en la App Helium después de que esto se complete.

![SenseCAP M1 SD Card Step 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Nota**: Debes ensamblar el panel frontal del Hotspot solo después de confirmar que tu Hotspot está funcionando correctamente.

Si tienes más problemas o preguntas, por favor abre un ticket aquí: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

Error de la App Helium
================

**No Onboarding Key Found**
---------------------------

Por favor abre un ticket de soporte aquí: [**https://support.sensecapmx.com**](https://support.sensecapmx.com) y envía el SN (número de serie) de tu hotspot para que podamos resolver tu problema.

![Helium App - No Onboarding Key Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)

* * *

**No Hotspot Found**
--------------------

"No Hotspots Found" mostrado en la App Helium

**Pasos de Solución de Problemas**

1.  Verifica primero el LED azul, debería estar en modo de parpadeo lento.
2.  Si no es así, eso indica que tu SenseCAP M1 no ha habilitado el modo de configuración Bluetooth. Verifica con tu hotspot y teléfono móvil para asegurarte de que el Bluetooth esté activado.
3.  Presiona el botón en la parte trasera del SenseCAP M1 durante 6-10 segundos para habilitar el modo de configuración del SenseCAP M1, encontrarás que el LED azul cambia a modo de parpadeo lento (parpadeando 1 vez cada 2 segundos), luego escanea el hotspot nuevamente.

![Errores de la App Helium - No se Encontraron Hotspots](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**Dispositivo Desconectado**
-----------------------

El dispositivo se desconectó al emparejarse vía Bluetooth

**Pasos de Solución de Problemas**

Ocurre un problema de compatibilidad cuando estás usando un teléfono Samsung más nuevo que el S9.

Por favor [**Flashea la tarjeta SD con la nueva imagen**](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card).

![Errores de la App Helium - Dispositivo Desconectado](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**Fallo en Escritura de Característica**
-------------------------------

No se puede registrar el Hotspot dentro de la App Helium

**Pasos de Solución de Problemas**

1.  Si registras tu hotspot justo después de conectarte vía Ethernet o Wi-Fi, verás este error ya que las actualizaciones OTA (over-the-air) están ejecutándose.
2.  Por favor deja tu Hotspot conectado vía Ethernet o Wi-Fi por otros 10+ minutos. Esto permitirá que las actualizaciones OTA terminen.
3.  Mantén presionado el botón por 6-10s para entrar al modo de configuración y luego intenta registrar nuevamente.

![Errores de la App Helium - Fallo en Escritura de Característica](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**Fallo en Lectura de Característica**
------------------------------

Error al emparejarse con Bluetooth o conectarse a Wi-Fi

Si recibes el siguiente mensaje de error al intentar emparejar tu Hotspot para conectarte vía Bluetooth o conectarte a Wi-Fi, esto significa que el SSID de tu red Wi-Fi contiene caracteres inválidos que no son reconocidos.

Por favor evita usar caracteres no alfanuméricos (ej. caracteres distintos a a - z, 0 - 9) y símbolos.

**Solución**: Renombra tu red Wi-Fi sin símbolos y caracteres no alfanuméricos.

![Errores de la App Helium - Fallo en Lectura de Característica](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**Construyendo Transacción de Agregar Hotspot**
----------------------------------------

La App Helium muestra un error construyendo la transacción de agregar hotspot al registrar el Hotspot

**Pasos de Solución de Problemas**

1.  Si registras tu hotspot justo después de conectar Ethernet o Wi-Fi, verás este error ya que las actualizaciones OTA (over-the-air) están ejecutándose o los bloques aún no se han sincronizado completamente.
2.  Por favor deja tu hotspot conectado a Ethernet o Wifi por al menos 30 minutos para esperar a que termine el OTA del firmware y el proceso de sincronización de bloques. Después de eso, por favor mantén presionado el botón por 6-10s para entrar al modo de configuración y luego intenta registrar nuevamente.
3.  Verifica la versión del firmware después de completado usando diagnósticos o el Panel de SenseCAP para asegurarte de que esté actualizado.  
    1.  **Nota**: Si el firmware de tu hotspot no puede actualizarse a la versión más nueva, entonces se sugiere cambiar la red que tu dispositivo está usando a otra red, como el hotspot de tu teléfono móvil, y luego seguir el segundo paso mencionado arriba.
    2.  **Nota**: Si los bloques no pueden ser completamente sincronizados por el dispositivo mismo después de que el OTA del firmware esté terminado, entonces se sugiere resetear bloques en la consola local.

![Errores de la App Helium - Construyendo Transacción de Agregar Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

* * *

**Afirmando Ubicación/Antena**
------------------------------

Al intentar actualizar los Detalles de Antena o Afirmar Ubicación, ves el siguiente error

**Pasos de Solución de Problemas**

El problema está relacionado con la conexión de red o la App. Intenta reiniciar tu APP o inténtalo nuevamente más tarde.

![Errores de la App Helium - Afirmando Ubicación/Antena](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)