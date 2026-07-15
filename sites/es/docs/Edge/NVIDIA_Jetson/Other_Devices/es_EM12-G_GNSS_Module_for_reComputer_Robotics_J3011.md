---
description: Este wiki explica cómo instalar y configurar el módulo de posicionamiento GNSS EM12-G en reComputer Robotics J3011.
title: Módulo GNSS EM12-G para reComputer Robotics J3011
keywords:
  - Jetson
  - reComputer Robotics
  - J3011
  - GNSS
  - EM12-G
image: https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png
slug: /em12_g_gnss_module_for_recomputer_robotics_j3011
sku: 100001302
last_update:
  date: 07/01/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/es/em12_g_gnss_module_for_recomputer_robotics_j3011/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'

---

# Guía de configuración del módulo GNSS EM12-G para reComputer Robotics J3011

El EM12-G es un módulo receptor GNSS multiconstelación diseñado para aplicaciones de posicionamiento. Utiliza un factor de forma estándar M.2 Key B y es compatible con plataformas de computación embebida como NVIDIA Jetson y Raspberry Pi. Puede proporcionar servicios de posicionamiento en tiempo real estables y fiables en entornos urbanos complejos y en escenarios al aire libre abiertos.

Esta guía utiliza la placa carrier J401 en reComputer Robotics J3011 como ejemplo para mostrar cómo instalar, encender y configurar el módulo de posicionamiento GNSS EM12-G.

## Notas

- **Los nombres de los dispositivos serie pueden cambiar**: Este wiki utiliza `/dev/ttyUSB1` como puerto de datos NMEA predeterminado y `/dev/ttyUSB2` como puerto de comandos AT predeterminado. Los nodos serie USB reales dependen del orden de enumeración del kernel, por lo que los puertos también pueden aparecer como `ttyUSB0`, `ttyUSB3` u otros nodos. Si un comando informa que el archivo no existe, ejecuta primero `ls /dev/ttyUSB* /dev/ttyACM*`, confirma el nodo de dispositivo real y reemplaza el nombre del puerto en los comandos siguientes.
- **Se requiere posicionamiento en exteriores**: Es muy poco probable que un primer fix GNSS tenga éxito en interiores. Realiza la prueba completa en un área abierta al aire libre.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/1.png"/></div>

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png"/></div>

## Instalación de hardware

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/3.jpg"/></div>

Después de instalar el módulo en el dispositivo, conecta una **antena pasiva** al contacto marcado con `G` en el módulo. Coloca el dispositivo en un área abierta al aire libre. La primera búsqueda de satélites puede tardar entre 3 y 5 minutos.

## Borrar procesos GPIO existentes

Para evitar fallos de encendido causados por procesos antiguos de control GPIO que aún ocupan los pines, borra primero los procesos `gpioset` existentes:

```bash
sudo pkill -f gpioset || true
```

:::note
`|| true` garantiza que las siguientes operaciones continúen incluso si no se encuentra ningún proceso `gpioset` existente.
:::

## Encender el módulo mediante GPIO

:::danger
Los comandos GPIO de esta sección son solo para la placa carrier J401. Son la secuencia de encendido dedicada para el módulo EM12-G en la J401. Si estás utilizando otra placa carrier, revisa primero el esquema de hardware de esa placa. No ejecutes estos comandos GPIO en otras placas carrier, de lo contrario el módulo puede no encenderse o puede producirse daño de hardware.
:::

En la placa carrier J401, los pines de habilitación de alimentación y de activación (wake-up) del EM12-G son controlados por los GPIO de Jetson. Ejecuta los siguientes tres comandos en secuencia y mantenlos ejecutándose en segundo plano:

```bash
sudo gpioset --mode=time --sec=200000 2 14=0 &
sudo gpioset --mode=time --sec=200000 2 12=0 &
sudo gpioset --mode=time --sec=200000 1 13=1 &
```

:::note
Se deben ejecutar los tres comandos. Controlan respectivamente los pines de habilitación de alimentación del módulo, de reinicio y `W_DISABLE#`, formando la secuencia de encendido J401 requerida.
:::

## Esperar al dispositivo serie

Después de encender el módulo, la enumeración serie USB puede tardar desde varios segundos hasta decenas de segundos. Sondea manualmente el puerto de datos NMEA:

```bash
for i in $(seq 1 60); do
    [ -e /dev/ttyUSB1 ] && echo "/dev/ttyUSB1 detected." && break
    echo "Waiting... ($i/60)"
    sleep 1
done
```

Si `/dev/ttyUSB1` aún no se detecta después de 60 segundos, ejecuta el siguiente comando para comprobar los puertos serie reales. Confirma también que la antena esté conectada correctamente y que el módulo esté correctamente insertado en la ranura M.2.

```bash
ls /dev/ttyUSB* /dev/ttyACM*
```

Después de confirmar que el nodo de dispositivo existe, ejecuta el siguiente comando. La salida NMEA GNSS debería aparecer en la terminal.

```bash
sudo stdbuf -oL cat /dev/ttyUSB1
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/4.png"/></div>

## Configurar comandos AT

Abre otra ventana de terminal y conéctate al puerto de comandos AT. El puerto predeterminado en esta guía es `/dev/ttyUSB2`.

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/5.png"/></div>

Después de entrar en `minicom`, configura la salida NMEA y habilita GNSS:

```bash
# Set NMEA output
AT+QGPSCFG="outport","usbnmea"
AT+QCFG="gpsdrx",0

# Enable GNSS
AT+QGPS=1
```

Después de habilitar GNSS, se debería devolver `OK` en la terminal de comandos AT, y la terminal anterior debería comenzar a imprimir mensajes NMEA. La primera búsqueda de satélites puede tardar de 3 a 5 minutos. Prueba el módulo en un área abierta al aire libre.

- Si las sentencias `$GPGGA`, `$GPRMC` y similares se siguen actualizando, la comunicación del módulo está funcionando correctamente.
- En una sentencia GGA, el sexto campo indica la calidad del fix. `1` significa que el módulo ha obtenido un fix válido, mientras que `0` significa que aún no ha obtenido un fix. Continúa esperando al aire libre durante 1 a 5 minutos.
- Pulsa `Ctrl+C` para detener la salida.

El siguiente ejemplo muestra información de posicionamiento que contiene datos válidos de latitud y longitud:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/6.png"/></div>

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
