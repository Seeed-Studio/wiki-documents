---
description: Lendo as informações do Raspberry Pi usando o Wio Terminal
title: Lendo as informações do Raspberry Pi usando o Wio Terminal
keywords:
  - Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Reading-Raspberry-Pi
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Reading-Raspberry-Pi/
---

# Lendo o status do sistema do Raspberry Pi usando o Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-rasp.gif)

Este wiki apresenta como ler o status do sistema do Raspberry Pi via comunicação serial USB usando o Wio Terminal. Nesta demonstração, o Raspberry Pi será o computador host e enviará suas informações de sistema para a porta serial via USB. O Wio Terminal será o escravo e receberá os dados de entrada e os exibirá em sua tela LCD.

## Lista de componentes

- [Raspberry Pi](https://www.seeedstudio.com/Boards-c-17.html) (3B+ usado aqui)

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Cabo USB Type-C

## Recursos

- Leitura do status do sistema do Raspberry Pi

- Exibição na tela do Wio Terminal

## Programa host no Raspberry Pi

Execute o seguinte código Python no Raspberry para enviar as informações do sistema para o Wio Terminal via Serial USB.

**Nota:** Certifique-se de que a porta serial esteja correta no código Python; altere-a de acordo com o seu dispositivo.

### Código Python no Raspberry Pi

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

### Bibliotecas Arduino necessárias

- Instale a biblioteca da tela LCD `Seeed_Arduino_LCD`; visite [Wio Terminal LCD](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/) para mais informações.

- Baixe o arquivo de cabeçalho [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) para poder usar abreviações para as fontes gratuitas incluídas na biblioteca LCD. Certifique-se de colocar esse arquivo de cabeçalho no mesmo local do Sketch Arduino.

### Código completo

Baixe o código completo [aqui](https://files.seeedstudio.com/wiki/Wio-Terminal/res/readRasp.ino).

## Instruções

1. Faça o upload do código Arduino para o Wio Terminal. Depois de enviado, ele deverá estar em uma tela inicial.

2. Conecte o Wio Terminal ao Raspberry Pi via cabo USB Type-C.

3. Execute o código Python no Raspberry Pi.

4. Agora, você deverá conseguir ver as informações do sistema do Raspberry Pi na tela LCD do Wio Terminal.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
