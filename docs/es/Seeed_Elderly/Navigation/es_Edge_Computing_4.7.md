---
description: Computación en el Borde
title: Computación en el Borde
keywords:
- edge computing
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeed_Elderly/Navigation/Edge_Computing_4.7
last_update:
  date: 01/20/2023
  author: Matthew
---

Este tema aquí introduce la documentación de productos de Seeed Studio con respecto a la arquitectura de computación en el borde que opera con datos "instantáneos" generados por varios sensores, en aplicaciones donde se requiere procesamiento en tiempo real. Hay múltiples dispositivos con diferente poder de cómputo presentados en esta página.

Puedes descubrir esta página con dos grandes porciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/edge_computing/edge_computing_publish.png" alt="pir" width={1000} height="auto" /></p>

## Cálculo Industrial

<strong><font color={'8DC215'} size={"4"}>Esta porción aquí incluye los dispositivos integrados con arquitectura completa de computación en el borde. Aquí puedes encontrar:</font></strong>

- Dispositivos con computación de nivel industrial
- Aplicaciones basadas en los dispositivos
- Diferentes despliegues de software
- Instalación de SO
- Placa de extensión o placa portadora para los dispositivos
- Tutoriales

### Dispositivo

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/es/reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Comenzando con reTerminal </font></span></a>
            <br/>
            <a href="/es/reTerminal-hardware-interfaces-usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Uso de Hardware e Interfaces </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer</font></div>
            <a href="/es/reComputer_Jetson_Series_Initiation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Comenzando con la Serie reComputer </font></span></a>
            <br/>
            <a href="/es/reComputer_Jetson_Series_Hardware_Layout" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Diseño de Hardware para la Serie reComputer </font></span></a>
            <br/>
            <a href="/es/reComputer_Jetson_Series_GPIO_Grove" target="_blank"><span><font color={'FFFFFF'} size={"2"}> GPIO y Grove para la Serie reComputer </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Serie reServer X86 - Intel® Core™ </font></span></a>
            <br/>
            <a href="//reServer_J2032_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer J2032 - NVIDIA® Jetson NX Xavier </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Mini PC para Industrial</font></div>
            <a href="/es/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 - Jetpack 5.0, Jetson Xavier NX 8GB, RS232 </font></span></a>
            <br/>
            <a href="/es/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E - Jetpack 5.0, Jetson Xavier NX 8GB, 2xGbE</font></span></a>
            <br/>
            <a href="/es/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 - Jetpack 5.0, Jetson AGX Orin 32GB, 10Gps </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Serie Edge</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - Basado en ESP32/ RS485/ Ethernet </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - Basado en Raspberry Pi CM4/ IEC </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - Basado en Raspberry Pi CM4</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Alternativa NVIDIA Jetson</font></div>
            <a href="/es/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 / Kit de Desarrollo NVIDIA Jetson AGX Xavier - Jetpack 4.4 | Jetpack 4.6 | Jetpack 5.0</font></span></a>
            <br/>
    </a>
</div>

### Aplicación / Software

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/es/reTerminal-build-UI-using-LVGL" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LVGL</font></span></a>,
            <a href="/es/reTerminal-build-UI-using-Flutter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Flutter</font></span></a>,
            <a href="/es/reTerminal-build-UI-using-Electron" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Electro</font></span></a>,
            <a href="/es/weather-dashboard-with-Grafana-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grafana</font></span></a>
            <br/>
            <a href="/es/Mender-Client-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mender Client</font></span></a>,
            <a href="/es/reTerminal-build-UI-using-Qt-for-Python" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Qt con Python</font></span></a>
            <br/>
            <a href="/es/reTerminal_ML_MediaPipe" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Google MediaPipe</font></span></a>
            <br/>
            <a href="/es/reTerminal_ML_TFLite" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TensorFlow Lite</font></span></a>
            <br/>
            <a href="/es/reTerminal_Home_Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistant</font></span></a>
            <br/>
            <a href="/es/reTerminal-Home-Assistant-Customize" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Personalizar Home Assistant</font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Serie Edge</font></div>
            <a href="/es/Edgebox-rpi-200-codesys" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Codesys en controlador EdgeBox-RPI-200</font></span></a>
            <br/>
            <a href="/es/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Más Publicaciones Pronto</font></span></a>
            <br/>
    </a>
</div>

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Aplicación reComputer</font></div>
            <a href="/es/HardHat" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Detección de Cascos de Seguridad </font></span></a>
            <br/>
            <a href="/es/No-code-Edge-AI-Tool" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Herramienta de IA Edge sin código </font></span></a>
            <br/>
            <a href="/es/Jetson-Nano-MaskCam" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MaskCam </font></span></a>
            <br/>
            <a href="/es/DashCamNet-with-Jetson-Xavier-NX-Multicamera" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DashCamNet con Jetson Xavier NX Multicámara </font></span></a>
            <br/>
            <a href="/es/Traffic-Management-DeepStream-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Gestión de Tráfico SDK DeepStream </font></span></a>
            <br/>
            <a href="/es/YOLOv5-Object-Detection-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Detección de Objetos Few-Shot </font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Software para reComputer</font></div>
            <a href="/es/Allxon-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeros pasos con Allxon </font></span></a>
            <br/>
            <a href="/es/jetson-docker-getting-started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeros pasos con Docker</font></span></a>
            <br/>
            <a href="/es/alwaysAI-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeros pasos con alwaysAI </font></span></a>
            <br/>
            <a href="/es/DeciAI-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeros pasos con Deci </font></span></a>
            <br/>
            <a href="/es/Update-Jetson-Linux-OTA-Using-Allxon" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Actualizar Jetson Linux por aire usando Allxon </font></span></a>
            <br/>
            <a href="/es/reComputer_Jetson_Series_Resource" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Recursos Jetson </font></span></a>
            <br/>
    </a>
</div>

### Instalación de SO / Actualización de Firmware

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/es/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalación de SO Original</font></span></a>
            <br/>
            <a href="/es/reTerminal-Buildroot-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Buildroot</font></span></a>,
            <a href="/es/reTerminal-Yocto" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Yocto</font></span></a>
            <br/>
            <a href="/es/Streampi_OBS_On_reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Stream-pi & OBS studio</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Serie reComputer</font></div>
            <a href="/es/reComputer_J1010_J101_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1010 | J101 Instalación de SO Original</font></span></a>
            <br/>
            <a href="/es/reComputer_J2021_J202_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J2021 | J202 Instalación de SO Original</font></span></a>
            <br/>
            <a href="/es/reComputer_J1020_A206_Flash_JetPack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1020 | A206 Instalación de SO Original</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalación de SO Original</font></span></a>
            <br/>
            <a href="//reServer-Update-BIOS-Install-Drivers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Actualización de BIOS e Instalación de Controladores</font></span></a>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Mini PC</font></div>
            <a href="/es/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 Instalación de SO Original</font></span></a>
            <br/>
            <a href="/es/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E Instalación de SO Original</font></span></a>
            <br/>
            <a href="/es/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 Instalación de SO Original</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Serie Edge</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - Instalación de SO </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - Instalación de SO </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - Instalación de SO</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Alternativa NVIDIA Jetson</font></div>
            <a href="/es/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 Instalación de SO Original</font></span></a>
    </a>
</div>

### Extensiones / Placa Portadora

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Extensiones reTerminal</font></div>
            <a href="/es/reTerminalBridge" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 - Expande UPS, Gigabit Ethernet, LTE/4G/5G/LoRaWAN®, RS485/232, CAN, SATA 2.0</font></span></a>
            <br/>
            <a href="/es/reTerminal_Mount_Options" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Opciones de Montaje reTerminal E10-1</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Extensiones NVIDIA Jetson</font></div>
            <a href="/es/reComputer_A203_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203, compatible con Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/es/reComputer_A205_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205, compatible con Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/es/Jetson-Mate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Clúster Jetson Mate, compatible con 4 Jetson Nano/NX </font></span></a>
            <br/>
    </a>
</div>

### Tutorial / FAQ

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/es/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Preguntas Frecuentes para el Uso de reTerminal</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer / NVIDIA Jetson</font></div>
            <a href="/es/reComputer_Jetson_Memory_Expansion" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Expansión de Memoria para placas NVIDIA Jetson</font></span></a>
            <br/>
            <a href="/es/J1010_Boot_From_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Arrancar desde Tarjeta SD en reComputer J1010</font></span></a>
            <br/>
            <a href="/es/J101_Enable_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Habilitar tarjeta SD en placa portadora J101</font></span></a>
            <br/>
    </a>
</div>

## Desarrollo Básico

<strong><font color={'8DC215'} size={"4"}>Esta sección incluye las Computadoras de Placa Única para desarrollo fundamental. Aquí puedes encontrar:</font></strong>

- Computadora de Placa Única para Desarrollo
- Aplicaciones basadas en SBC
- Diferentes despliegues de software
- Instalación de SO
- Placa de extensión o Placa portadora para la SBC
- Accesorios para la SBC
- Kit con cursos basados en la SBC
- Tutoriales

### Computadora de Placa Única

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><a href="/es/BeagleBone" target="_blank"><span><font color={'8DC215'} size={"5"}> BeagleBone® </font></span></a></div>
            <a href="/es/BeagleBone_Blue" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Blue </font></span></a>
            <br/>
            <a href="/es/BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green </font></span></a>
            <br/>
            <a href="/es/BeagleBone_Green_Wireless" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green Wireless </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY</font></div>
            <a href="/es/ODYSSEY-X86J4105" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/es/ODYSSEY-X86J4105-GPIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Hardware para ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/es/ODYSSEY-STM32MP157C" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY STM32MP157C </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Placa de Desarrollo Quantum</font></div>
            <a href="/es/Quantum-Mini-Linux-Development-Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  Kit de Desarrollo Quantum Mini Linux </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi®</font></div>
            <a href="/es/Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Introducción a Raspberry Pi </font></span></a>
            <br/>
            <a href="/es/Raspberry_Pi_3_Model_B" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 3 Model B </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'808080'} size={"5"}>Dispositivos Retirados</font></div>
            <a href="/es/ReSpeaker" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Serie reSpeaker </font></span></a>
            <br/>
            <a href="/es/NPi-i.MX6ULL-Dev-Board-Linux-SBC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Serie NPi</font></span></a>
     </a>
</div>

### Aplicación / Software

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Aplicación ODYSSY</font></div>
            <a href="/es/ODYSSEY-X86J4105-AzureIOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Conectar ODYSSEY a Azure IoT</font></span></a>
            <br/>
            <a href="/es/ODYSSEY-X86J4105-Intel-OpenVINO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Versión de Computadora con Intel OpenVINO Toolkit</font></span></a>
            <br/>
            <a href="/es/ODYSSEY-X86J4105-Frigate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Versión de Computadora con Frigate</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Software ODYSSEY</font></div>
            <a href="/es/ODYSSEY-X86-Home-Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistant en ODYSSEY</font></span></a>
            <br/>
            <a href="/es/Connect-Grove-to-Home-Assistant-ESPHome" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Conectar Módulos Grove usando ESPHome</font></span></a>
            <br/>
            Mender
            <a href="/es/Mender-Client-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Cliente</font></span></a>,
            <a href="/es/Mender-Server-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Servidor</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/es/BeagleBone_Solutions" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Soluciones BeagleBone®</font></span></a>
    </a>
</div>

### Instalación de SO / Actualización de Firmware 

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/es/ODYSSEY-X86J4105-Installing-OS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalación de SO Original</font></span></a>,
            <a href="/es/ODYSSEY-X86J4105-Updating-Firmware" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Actualización de Firmware</font></span></a>
            <br/>
            <a href="/es/ODYSSEY-X86J4105-Installing-openwrt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OpenWRT</font></span></a>,
            <a href="/es/ODYSSEY-X86-OPNsense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OPNsense</font></span></a>,
            <a href="/es/ODYSSEY-X86J4105-pfSense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> pfSense</font></span></a>,
            <a href="/es/Jellyfin-on-Docker-Ubuntu-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jellyfin</font></span></a>
            <br/>
            <a href="/es/ODYSSEY-X86-TrueNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TrueNAS</font></span></a>,
            <a href="/es/ODYSSEY-X86J4105-Installing-FreeNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FreeNAS</font></span></a>,
            <a href="/es/ODYSSEY-X86J4105-Installing-Android" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Android-x86</font></span></a>,
            <a href="/es/BalenaOS-X86-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> balenaOS</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/es/Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalación de SO Original</font></span></a>
    </a>
</div>

### Extensiones / Placa Portadora

<div class="title_container">
    <a class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi - Pi HAT</font></div>
            <a href="/es/Grove_Base_Hat_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> HAT Base Grove </font></span></a>,
            <a href="/es/Grove_AI_HAT_for_Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> HAT AI Grove</font></span></a>,
            <a href="/es/RS-485_Shield_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Pi HAT RS-485</font></span></a>,
            <a href="/es/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030" target="_blank"><span><font color={'FFFFFF'} size={"2"}> HAT ADC de 8 Canales 12-Bit</font></span></a>,
            <a href="//ReSpeaker_4_Mic_Array_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Pi HAT reSpeaker</font></span></a>
            <br/>
            <a href="/es/Grove_Base_HAT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Descubre más</font></span></a>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/es/BeagleBone_Green_HDMI_Cape" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green HDMI Cape</font></span></a>
            <br/>
            <a href="/es/Motor_Bridge_Cape_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Motor Bridge Cape v1.0 para BeagleBone®</font></span></a>
            <br/>
            <a href="/es/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green LCD Cape con Touch Resistivo</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reSpeaker</font></div>
            <a href="//ReSpeaker_Drive_Unit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Unidad de Control para Serie reSpeaker</font></span></a>
            <br/>
            <a href="//ReSpeaker_Mic_Array_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Array de Micrófonos para Serie reSpeaker</font></span></a>
            <br/>
    </a>
</div>

### Accesorios

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/es/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Caja esqueleto para Raspberry Pi</font></span></a>
            <br/>
            <a href="/es/Raspberry_PI_Bplus_Case" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Carcasa Raspberry PI B Plus</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/es/Coral-Mini-PCIe-Accelerator-x86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Acelerador Coral Mini PCIe</font></span></a>
            <br/>
            <a href="/es/ODYSSEY-X86J4105-LTE-Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Módulos LTE</font></span></a>
            <br/>
    </a>
</div>

### Kit con Cursos

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/es/Grove_Base_Kit_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Kit Base Grove para Raspberry Pi</font></span></a>
            <br/>
            <a href="/es/LoRa_LoRaWan_Gateway_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Kit Gateway LoRa®/LoRaWAN®</font></span></a>
            <br/>
            <a href="/es/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Kit de Inicio Grove para IoT basado en Raspberry Pi</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/es/Grove_Starter_Kit_for_BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Kit de Inicio Grove para Seeed Studio BeagleBone® Green</font></span></a>
            <br/>
            <a href="/es/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Kit IoT de Inicio Grove AWS IoT para BeagleBone Green </font></span></a>
            <br/>
    </a>
</div>

### Tutoriales / FAQ

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/es/remote_connect" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Conectar remotamente a Raspberry Pi/reComputer</font></span></a>
            <br/>
            <a href="/es/Raspberry_pi_CM4_update_eeprom" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Actualizar eeprom en Raspberry pi CM4</font></span></a>
    </a>
</div>
