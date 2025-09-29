---
description: Lectura de información de Raspberry Pi usando Wio Terminal
title: Lectura de información de Raspberry Pi usando Wio Terminal
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Reading-Raspberry-Pi
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Lectura del Estado del Sistema de Raspberry Pi usando Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-rasp.gif)

Esta wiki introduce cómo leer el estado del sistema de Raspberry Pi a través de comunicación serie USB usando Wio Terminal. En esta demostración, la Raspberry Pi será la computadora anfitriona y enviará su información del sistema al puerto serie a través de USB. Wio Terminal será el esclavo y recibirá los datos entrantes y los mostrará en su pantalla LCD.

## Lista de Componentes

- [Raspberry Pi](https://www.seeedstudio.com/Boards-c-17.html) (3B+ usado aquí)

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Cable USB Type-C

## Características

- Lectura del estado del sistema de Raspberry Pi

- Visualización en la pantalla de Wio Terminal

## Programa Anfitrión de Raspberry Pi

Ejecuta el siguiente código Python en Raspberry para enviar la información del sistema a Wio Terminal a través de USB Serial.

**Nota:** Por favor asegúrate de que el puerto Serie sea correcto en el código Python, cámbialo según tu dispositivo.

### Código Python en Raspberry Pi

```py
import os
import time 
import serial

# Settings for reading from Arduino Serial
serialPort= "/dev/ttyACM0" #Change it to your Serial Port, Check in Arudino IDE
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)
time.sleep(2)

# Return CPU temperature as a character string
def getCPUtemperature():
    res = os.popen('vcgencmd measure_temp').readline()
    return(res.replace("temp=","").replace("'C\n",""))

# Return RAM information (unit=kb) in a list
# Index 0: total RAM
# Index 1: used RAM
# Index 2: free RAM
def getRAMinfo():
    p = os.popen('free')
    i = 0
    while 1:
        i = i + 1
        line = p.readline()
        if i==2:
            return(line.split()[1:4])

# Return % of CPU used by user as a character string
def getCPUuse():
    return(str(os.popen("top -n1 | awk '/Cpu\(s\):/ {print $2}'").readline().strip()))

# Return information about disk space as a list (unit included)
# Index 0: total disk space
# Index 1: used disk space
# Index 2: remaining disk space
# Index 3: percentage of disk used
def getDiskSpace():
    p = os.popen("df -h /")
    i = 0
    while 1:
        i = i +1
        line = p.readline()
        if i==2:
            return(line.split()[1:5])
 
def main():
    while True:
        # CPU informatiom
        CPU_temp = getCPUtemperature()
        CPU_usage = getCPUuse()

        # RAM information
        # Output is in kb, here I convert it in Mb for readability
        RAM_stats = getRAMinfo()
        RAM_total = str(round(int(RAM_stats[0]) / 1000,1))
        RAM_used = str(round(int(RAM_stats[1]) / 1000,1))
        RAM_free = str(round(int(RAM_stats[2]) / 1000,1))

        # Disk information
        DISK_stats = getDiskSpace()
        DISK_total = DISK_stats[0]
        DISK_used = DISK_stats[1]
        DISK_perc = DISK_stats[3]

        temp=ser.write(str.encode(CPU_temp+' '+CPU_usage))

        data=ser.write(str.encode(CPU_temp+':'+CPU_usage+':'+RAM_total+':'+RAM_used+':'+RAM_free+':'+DISK_total+':'+DISK_used+':'+DISK_perc))
        ser.flush()
        time.sleep(2)

        print('')
        print('CPU Temperature = '+CPU_temp)
        print('CPU Use = '+CPU_usage)
        print('')
        print('RAM Total = '+str(RAM_total)+' MB')
        print('RAM Used = '+str(RAM_used)+' MB')
        print('RAM Free = '+str(RAM_free)+' MB')
        print('')  
        print('DISK Total Space = '+str(DISK_total)+'B')
        print('DISK Used Space = '+str(DISK_used)+'B')
        print('DISK Used Percentage = '+str(DISK_perc)) 


if __name__ == '__main__':
    try:    
        main()
    except KeyboardInterrupt:    
        if ser != None:    
            ser.close()
```

## Código Arduino

### Librerías Arduino necesarias

- Instala la librería de pantalla LCD `Seeed_Arduino_LCD`, por favor visita [Wio Terminal LCD](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/) para más información.

- Descarga el archivo de cabecera [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) para poder usar abreviaciones para las fuentes gratuitas incluidas en la librería LCD. Por favor asegúrate de poner este archivo de cabecera en la misma ubicación que el Sketch de Arduino.

### Código Completo

Descarga el código completo [aquí](https://files.seeedstudio.com/wiki/Wio-Terminal/res/readRasp.ino).

## Instrucciones

1. Sube el Código Arduino a Wio Terminal. Una vez subido debería estar en una pantalla de inicio.

2. Conecta Wio Terminal a la Raspberry Pi a través del Cable USB Type-C.

3. Ejecuta el código Python en Raspberry Pi.

4. Ahora, deberías poder ver la información del sistema de Raspberry Pi en la pantalla LCD de Wio Terminal.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>