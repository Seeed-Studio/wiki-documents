---
description: ODYSSEY-FAQ
title: Solución de Problemas Relacionados con BIOS (WiFi/Bluetooth/Ventilador/Encendido Automático/Boot Guard/GPIO)
#keywords:
slug: /es/Troubleshooting_BIOS-Related_Issues
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
---

# Solución de Problemas Relacionados con BIOS

Algunos problemas con Odyssey pueden resolverse configurando los ajustes del BIOS. A continuación se presentan algunos problemas que pueden solucionarse usando la configuración del BIOS. Primero, describiremos cómo acceder a la configuración del BIOS.

### Cómo acceder a la configuración del BIOS

Presiona el Botón de Encendido y mantén presionada la tecla `DEL` hasta que veas la Configuración del BIOS.

### Cómo resolver el problema de no poder conectarse a Wi-Fi y Bluetooth

Verifica la configuración del BIOS y habilita Wi-Fi y Bluetooth desde el BIOS.

### ¿Es controlable el ventilador integrado?

Actualmente el ventilador es controlado por el BIOS, y no es controlado por el usuario. La velocidad del ventilador se establece según la temperatura de la CPU. Consulta `Chipset` -> `FAN Contorl` en la pantalla de configuración del BIOS para más información.

### Cómo configurar el ODYSSEY - X86J41x5 para que se encienda automáticamente cuando se conecte la alimentación

Esto también necesita configurarse en el BIOS. Ingresa a la configuración del BIOS presionando la tecla `DEL`. Navega a `Chipset` -> `Restore on AC Power Loss` y cambia la configuración a `Last State`.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" alt="pir" width={600} height="auto" /></p>

### ¿Tiene la placa ODYSSEY Boot Guard para Arranque Seguro?

Sí, puedes habilitar la opción `Security Boot` en el BIOS. Cuando esto está habilitado, el BIOS deshabilitará el arranque desde dispositivos no autenticados.

### ¿Por qué GPIO sigue funcionando después de que Odyssey se apaga?

Para configurar esto, necesitas actualizar al último BIOS que proporcionamos. En el último BIOS, puedes cambiar habilitar a deshabilitar aquí para apagar tanto GPIO como ODYSSEY.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png" alt="pir" width={600} height="auto" /></p>