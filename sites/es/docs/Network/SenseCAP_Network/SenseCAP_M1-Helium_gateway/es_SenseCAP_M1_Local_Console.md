---
description: SenseCAP M1 Local Console
title: SenseCAP M1 Local Console
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---


**Descripción General**
=======================

**La última característica actualizada el 14 de enero de 2022:** Para mejorar el nivel de seguridad de SenseCAP Local Console, se ha añadido una contraseña adicional para iniciar sesión en la Consola Local además del CPUID, la contraseña predeterminada es el Número de Serie del hotspot. Se recomienda encarecidamente cambiar la contraseña después del primer inicio de sesión.

**Nota**: Su computadora y su Hotspot deben estar conectados al mismo router/red para poder usar la Consola Local. Si su Hotspot está remoto, actualmente NO podrá ejecutar ninguna de las características de la Consola Local.

![Local Console](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**Inicio de Sesión**
====================

**1. Obtenga el CPU ID y S/N de su Hotspot**

- Si no tiene una cuenta del Panel de Control SenseCAP M1, o no ha añadido su Hotspot al Panel de Control, por favor encuentre la etiqueta del dispositivo de su SenseCAP M1, y obtenga el S/N y CPU ID

![Local Console Login Details](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

- Si ya se ha registrado una cuenta del Panel de Control SenseCAP M1 y añadido su Hotspot, puede copiar el CPU ID y S/N de su Hotspot desde el panel de control.

![Local Console Login Details 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2. Obtenga la Dirección IP de su hotspot**

- Si no tiene una cuenta del Panel de Control SenseCAP M1, o no ha añadido su Hotspot al Panel de Control, por favor encuentre la Dirección IP de su hotspot en la página de administración de su router, o ejecute un diagnóstico en su APP Helium para obtener la Dirección IP. Luego escriba la Dirección IP en un navegador para ingresar a la página de la Consola Local.
- Si ya se ha registrado una cuenta del Panel de Control SenseCAP M1 y añadido su Hotspot, puede encontrar la Dirección IP de su Hotspot desde el panel de control:
  - Haga clic en el enlace "**Dirección IP Wi-Fi**" o "**Dirección IP LAN**" que dirige a la página de la Consola Local Turbo Sync.
  - Si está conectado vía Wi-Fi, verá la dirección IP Wi-Fi del Hotspot para hacer clic.
  - Si está conectado vía cable Ethernet o LAN local, verá la dirección LAN del Hotspot para hacer clic.

![Local Console Login Details 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3. Use el CPU ID del hotspot y la contraseña predeterminada (Número de Serie, también conocido como S/N) para iniciar sesión**

![Local Console Login Details 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![Local Console Login Details 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4. Cambie la contraseña predeterminada**

![Local Console Change Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

Después del primer inicio de sesión, por favor haga clic en el botón "**Cambiar Contraseña**" para modificar su contraseña predeterminada. La nueva contraseña debe contener 8~32 dígitos con al menos dos combinaciones de números, letras y símbolos. La contraseña será encriptada y almacenada solo en su SenseCAP M1 localmente.

Por motivos de seguridad, aún no proporcionamos una función de "**Olvidé la Contraseña**", así que por favor recuerde bien su contraseña, y necesitará volver a flashear la tarjeta MicroSD para restaurar la contraseña predeterminada si la pierde.

Para los usuarios de CLI, por favor note que cada vez que se cambie la contraseña, el token del dispositivo de la Consola Local también se actualizará automáticamente. Actualice la página web de la Consola Local y verá el nuevo token del dispositivo. Por favor mantenga su token del dispositivo seguro y no lo comparta con terceros bajo ninguna circunstancia.

**5. Obtenga la bind-key y añada su Hotspot al Panel de Control SenseCAP**

![Local Console Bind Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

Obtenga el CPU ID del dispositivo, MAC ETH del dispositivo y la bind key del dispositivo en la página de la Consola Local anterior.

* * *

**Información Importante**

**Nota**: Turbo Sync puede llevar a borrado y escritura frecuente en la tarjeta micro SD y solo se sugiere hacerlo cuando sea necesario.

Si la altura del bloque sincronizado de su dispositivo está muy cerca de la blockchain (menos de 200 bloques), Turbo Sync no es necesario para su dispositivo y no podrá ejecutarlo.

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

El proceso de Turbo Sync puede tomar un tiempo en completarse y depende de la velocidad de la red. Por favor mantenga una conexión a Internet sólida y sea paciente con el proceso de sincronización.

**IMPORTANTE**: Por favor no apague el dispositivo durante el proceso de Turbo Sync, de lo contrario su dispositivo tendrá un ledger corrupto durante el siguiente arranque y comenzará a sincronizar nuevamente desde la última instantánea bendecida. En ese caso, tendrá que repetir el proceso de Turbo Sync.

* * *

**Reiniciar**
=============

**Nota**: Necesitará iniciar sesión en la Consola Local.

Haga clic en el botón naranja "Reiniciar" para comenzar el proceso de reinicio.

- Cuando vea \[reboot\] request sent + \[reboot going\], el proceso ha comenzado.
- Cuando vea "----log stream disconnected from the host----" y "----log stream connected to the host----", ha terminado el proceso de reinicio.

![Reboot SenseCAP Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**Nota**: El ledger de Helium Blockchain a veces se daña por errores inesperados en la tarjeta micro SD resultando en que el proceso de sincronización de blockchain se detenga en un bloque y falle en la sincronización.

Reiniciar el hotspot en la Consola Local puede ayudar a resolver los errores potenciales en la tarjeta micro SD.

**IMPORTANTE**: Por favor no reinicie el hotspot frecuentemente, solo reinícielo cuando sea necesario.

Cuando la altura del bloque esté atascada y no aumente, la altura permanezca en -1 o 1, por favor haga un reinicio de bloque. Después de seguir estos pasos, el hotspot estará completamente sincronizado nuevamente.

* * *

**Apagar**
==========

La función de apagado se sugiere usar antes de desconectar el dispositivo para evitar que el dispositivo se dañe por un apagado repentino.

**Cómo Usar La Función De Apagado**

Haz clic en el botón "**Shutdown**" y acepta la confirmación.

- El apagado tomará unos minutos.
- Verás que el LED azul y los LEDs del puerto Ethernet están apagados cuando el apagado haya terminado.

![SenseCAP Shutdown Feature](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**ATENCIÓN**: Por favor confirma que estás cerca del SenseCAP M1 cuando lo apagues ya que necesitarás volver a conectar el adaptador si quieres encender el dispositivo nuevamente.

* * *

**Restablecer Bloques**
=======================

**Nota**: Necesitarás iniciar sesión en la Consola Local.

Haz clic en el botón rojo "**Reset Blocks**" para iniciar el proceso de restablecimiento de bloques.

![Reset Blocks SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**Nota**: SenseCAP M1 comenzará a cargar la última instantánea bendecida. El estado en el panel de control puede tener retraso y es normal ver temporalmente el estado de sincronización "**Unknown**".

Si necesitas ejecutar Turbo Sync, por favor espera hasta que la última instantánea bendecida se cargue (alrededor de 30 minutos).
