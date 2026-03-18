---
description: Computação de Borda
title: Computação de Borda
keywords:
  - edge computing
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeed_Elderly/Navigation/Edge_Computing_4.7
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeed_Elderly/Navigation/Edge_Computing_4.7/
---

Este tópico apresenta a documentação de produtos da Seeed Studio sobre a arquitetura de computação de borda que opera com dados "instantâneos" gerados por vários sensores, em aplicações que exigem processamento em tempo real. Há vários dispositivos com diferentes capacidades de computação apresentados nesta página.

Você pode explorar esta página em duas grandes partes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/edge_computing/edge_computing_publish.png" alt="pir" width={1000} height="auto" /></p>

## Cálculo Industrial

<strong><font color={'8DC215'} size={"4"}>Esta parte inclui os dispositivos integrados que completam a arquitetura de computação de borda. Aqui você pode encontrar:</font></strong>

- Dispositivos com capacidade de computação em nível industrial
- Aplicações baseadas nesses dispositivos
- Diferentes formas de implantação de software
- Instalação de SO
- Placa de expansão ou Carrier board para os dispositivos
- Tutoriais

### Dispositivo

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/pt-br/reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeiros Passos com o reTerminal </font></span></a>
            <br/>
            <a href="/pt-br/reTerminal-hardware-interfaces-usage" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Uso de Hardware e Interfaces </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer</font></div>
            <a href="/pt-br/reComputer_Jetson_Series_Initiation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeiros Passos com a Série reComputer </font></span></a>
            <br/>
            <a href="/pt-br/reComputer_Jetson_Series_Hardware_Layout" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Layout de Hardware para a Série reComputer </font></span></a>
            <br/>
            <a href="/pt-br/reComputer_Jetson_Series_GPIO_Grove" target="_blank"><span><font color={'FFFFFF'} size={"2"}> GPIO e Grove para a Série reComputer </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="/pt-br//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer Série X86 - Intel® Core™ </font></span></a>
            <br/>
            <a href="/pt-br//reServer_J2032_Getting_Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reServer J2032 - NVIDIA® Jetson NX Xavier </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Mini PC para Industrial</font></div>
            <a href="/pt-br/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 - Jetpack 5.0, Jetson Xavier NX 8GB, RS232 </font></span></a>
            <br/>
            <a href="/pt-br/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E - Jetpack 5.0, Jetson Xavier NX 8GB, 2xGbE</font></span></a>
            <br/>
            <a href="/pt-br/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 - Jetpack 5.0, Jetson AGX Orin 32GB, 10Gps </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Série Edge</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - baseado em ESP32/ RS485/ Ethernet </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - baseado em Raspberry Pi CM4/ IEC </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - baseado em Raspberry Pi CM4</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Alternativa NVIDIA Jetson</font></div>
            <a href="/pt-br/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 / Kit de Desenvolvimento NVIDIA Jetson AGX Xavier - Jetpack 4.4 | Jetpack 4.6 | Jetpack 5.0</font></span></a>
            <br/>
    </a>
</div>

### Aplicação / Software

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/pt-br/reTerminal-build-UI-using-LVGL" target="_blank"><span><font color={'FFFFFF'} size={"2"}> LVGL</font></span></a>,
            <a href="/pt-br/reTerminal-build-UI-using-Flutter" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Flutter</font></span></a>,
            <a href="/pt-br/reTerminal-build-UI-using-Electron" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Electro</font></span></a>,
            <a href="/pt-br/weather-dashboard-with-Grafana-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grafana</font></span></a>
            <br/>
            <a href="/pt-br/Mender-Client-reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mender Client</font></span></a>,
            <a href="/pt-br/reTerminal-build-UI-using-Qt-for-Python" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Qt com Python</font></span></a>
            <br/>
            <a href="/pt-br/reTerminal_ML_MediaPipe" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Google MediaPipe</font></span></a>
            <br/>
            <a href="/pt-br/reTerminal_ML_TFLite" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TensorFlow Lite</font></span></a>
            <br/>
            <a href="/pt-br/reTerminal_Home_Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistant</font></span></a>
            <br/>
            <a href="/pt-br/reTerminal-Home-Assistant-Customize" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Personalizar Home Assistant</font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Série Edge</font></div>
            <a href="/pt-br/Edgebox-rpi-200-codesys" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Codesys no controlador EdgeBox-RPI-200</font></span></a>
            <br/>
            <a href="/pt-br/Contributor" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Mais publicações em breve</font></span></a>
            <br/>
    </a>
</div>

<div class="independent_container">
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Aplicações para reComputer</font></div>
            <a href="/pt-br/HardHat" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Detecção de Capacete de Segurança </font></span></a>
            <br/>
            <a href="/pt-br/No-code-Edge-AI-Tool" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Ferramenta de IA de Borda sem Código </font></span></a>
            <br/>
            <a href="/pt-br/Jetson-Nano-MaskCam" target="_blank"><span><font color={'FFFFFF'} size={"2"}> MaskCam </font></span></a>
            <br/>
            <a href="/pt-br/DashCamNet-with-Jetson-Xavier-NX-Multicamera" target="_blank"><span><font color={'FFFFFF'} size={"2"}> DashCamNet com Jetson Xavier NX Multicamera </font></span></a>
            <br/>
            <a href="/pt-br/Traffic-Management-DeepStream-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Gerenciamento de Tráfego DeepStream SDK </font></span></a>
            <br/>
            <a href="/pt-br/YOLOv5-Object-Detection-Jetson" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Detecção de Objetos com Poucos Exemplos </font></span></a>
            <br/>
    </a>
    <a class="independent_item" style={{textAlign: 'center'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Software para reComputer</font></div>
            <a href="/pt-br/Allxon-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeiros Passos com Allxon </font></span></a>
            <br/>
            <a href="/pt-br/jetson-docker-getting-started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeiros Passos com Docker</font></span></a>
            <br/>
            <a href="/pt-br/alwaysAI-Jetson-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeiros Passos com alwaysAI </font></span></a>
            <br/>
            <a href="/pt-br/DeciAI-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Primeiros Passos com Deci </font></span></a>
            <br/>
            <a href="/pt-br/Update-Jetson-Linux-OTA-Using-Allxon" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Atualizar Jetson Linux Over-the-Air Usando Allxon </font></span></a>
            <br/>
            <a href="/pt-br/reComputer_Jetson_Series_Resource" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Recursos Jetson </font></span></a>
            <br/>
    </a>
</div>

### Instalação do OS / Atualização de Firmware

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/pt-br/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalação do OS original</font></span></a>
            <br/>
            <a href="/pt-br/reTerminal-Buildroot-SDK" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Buildroot</font></span></a>,
            <a href="/pt-br/reTerminal-Yocto" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Yocto</font></span></a>
            <br/>
            <a href="/pt-br/Streampi_OBS_On_reTerminal" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Stream-pi & OBS studio</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer Série</font></div>
            <a href="/pt-br/reComputer_J1010_J101_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1010 | J101 Instalação do OS original</font></span></a>
            <br/>
            <a href="/pt-br/reComputer_J2021_J202_Flash_Jetpack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J2021 | J202 Instalação do OS original</font></span></a>
            <br/>
            <a href="/pt-br/reComputer_J1020_A206_Flash_JetPack" target="_blank"><span><font color={'FFFFFF'} size={"2"}> J1020 | A206 Instalação do OS original</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reServer</font></div>
            <a href="/pt-br//reServer-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalação do OS original</font></span></a>
            <br/>
            <a href="/pt-br//reServer-Update-BIOS-Install-Drivers" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Atualizando a BIOS e instalando drivers</font></span></a>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Mini PC</font></div>
            <a href="/pt-br/reComputer_A203E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203 Instalação do OS original</font></span></a>
            <br/>
            <a href="/pt-br/reComputer_A205E_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205E Instalação do OS original</font></span></a>
            <br/>
            <a href="/pt-br/Mini_AI_Computer_T906" target="_blank"><span><font color={'FFFFFF'} size={"2"}> T906 Instalação do OS original</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Edge Série</font></div>
            <a href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-ESP-100 - Instalação do OS </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeBox-RPI-200 - Instalação do OS </font></span></a>
            <br/>
            <a href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank"><span><font color={'FFFFFF'} size={"2"}> EdgeLogix-RPI-1000 - Instalação do OS</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Alternativa NVIDIA Jetson</font></div>
            <a href="/pt-br/Jetson_Xavier_AGX_H01_Driver_Installation" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jetson Xavier AGX H01 Instalação do OS original</font></span></a>
    </a>
</div>

### Extensões / Placa Carrier

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Extensões reTerminal</font></div>
            <a href="/pt-br/reTerminalBridge" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reTerminal E10-1 -  Expande UPS, Ethernet Gigabit, LTE/4G/5G/LoRaWAN®, RS485/232, CAN, SATA 2.0</font></span></a>
            <br/>
            <a href="/pt-br/reTerminal_Mount_Options" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Opções de montagem do reTerminal E10-1</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Extensões NVIDIA Jetson</font></div>
            <a href="/pt-br/reComputer_A203_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A203, suporta Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/pt-br/reComputer_A205_Flash_System" target="_blank"><span><font color={'FFFFFF'} size={"2"}> A205, suporta Jetson Nano / Xavier NX/TX2 NX</font></span></a>
            <br/>
            <a href="/pt-br/Jetson-Mate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Cluster Jetson Mate, suporta 4 Jetson Nano/NX </font></span></a>
            <br/>
    </a>
</div>

### Tutorial / FAQ

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reTerminal</font></div>
            <a href="/pt-br/reTerminal-FAQ" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FAQs para uso do reTerminal</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reComputer / NVIDIA Jetson</font></div>
            <a href="/pt-br/reComputer_Jetson_Memory_Expansion" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Expansão de memória para placas NVIDIA Jetson</font></span></a>
            <br/>
            <a href="/pt-br/J1010_Boot_From_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Inicializar a partir do cartão SD no reComputer J1010</font></span></a>
            <br/>
            <a href="/pt-br/J101_Enable_SD_Card" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Ativar cartão SD na placa carrier J101</font></span></a>
            <br/>
    </a>
</div>

## Desenvolvimento Básico

<strong><font color={'8DC215'} size={"4"}>Esta parte inclui o Computador de Placa Única para desenvolvimento fundamental. Aqui você pode encontrar:</font></strong>

- Computador de Placa Única para desenvolvimento
- Aplicação baseada no SBC
- Diferentes implantações de software
- Instalação do OS
- Placa de extensão ou placa Carrier para o SBC
- Acessórios para o SBC
- Kit com cursos baseados no SBC
- Tutoriais

### Computador de Placa Única 

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><a href="/pt-br/BeagleBone" target="_blank"><span><font color={'8DC215'} size={"5"}> BeagleBone® </font></span></a></div>
            <a href="/pt-br/BeagleBone_Blue" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Blue </font></span></a>
            <br/>
            <a href="/pt-br/BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green </font></span></a>
            <br/>
            <a href="/pt-br/BeagleBone_Green_Wireless" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Seeed Studio BeagleBone® Green Wireless </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY</font></div>
            <a href="/pt-br/ODYSSEY-X86J4105" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/pt-br/ODYSSEY-X86J4105-GPIO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Hardware para ODYSSEY X86J4105 </font></span></a>
            <br/>
            <a href="/pt-br/ODYSSEY-STM32MP157C" target="_blank"><span><font color={'FFFFFF'} size={"2"}> ODYSSEY STM32MP157C </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Placa de Desenvolvimento Quantum</font></div>
            <a href="/pt-br/Quantum-Mini-Linux-Development-Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}>  Quantum Mini Linux Development Kit </font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi®</font></div>
            <a href="/pt-br/Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Introdução ao Raspberry Pi </font></span></a>
            <br/>
            <a href="/pt-br/Raspberry_Pi_3_Model_B" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Raspberry Pi 3 Modelo B </font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'808080'} size={"5"}>Dispositivos Descontinuados</font></div>
            <a href="/pt-br/ReSpeaker" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Série reSpeaker </font></span></a>
            <br/>
            <a href="/pt-br/NPi-i.MX6ULL-Dev-Board-Linux-SBC" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Série NPi</font></span></a>
     </a>
</div>

### Aplicações / Software 

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Aplicações ODYSSY</font></div>
            <a href="/pt-br/ODYSSEY-X86J4105-AzureIOT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Conectar ODYSSEY ao Azure IoT</font></span></a>
            <br/>
            <a href="/pt-br/ODYSSEY-X86J4105-Intel-OpenVINO" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Visão computacional com Intel OpenVINO Toolkit</font></span></a>
            <br/>
            <a href="/pt-br/ODYSSEY-X86J4105-Frigate" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Visão computacional com Frigate</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Software ODYSSEY</font></div>
            <a href="/pt-br/ODYSSEY-X86-Home-Assistant" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Home Assistant no ODYSSEY</font></span></a>
            <br/>
            <a href="/pt-br/Connect-Grove-to-Home-Assistant-ESPHome" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Conectar módulos Grove usando ESPHome</font></span></a>
            <br/>
            Mender
            <a href="/pt-br/Mender-Client-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Cliente</font></span></a>,
            <a href="/pt-br/Mender-Server-ODYSSEY-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Servidor</font></span></a>
            <br/>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/pt-br/BeagleBone_Solutions" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Soluções BeagleBone®</font></span></a>
    </a>
</div>

### Instalação de SO / Atualização de Firmware 

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/pt-br/ODYSSEY-X86J4105-Installing-OS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalação do SO original</font></span></a>,
            <a href="/pt-br/ODYSSEY-X86J4105-Updating-Firmware" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Atualização de firmware</font></span></a>
            <br/>
            <a href="/pt-br/ODYSSEY-X86J4105-Installing-openwrt" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OpenWRT</font></span></a>,
            <a href="/pt-br/ODYSSEY-X86-OPNsense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> OPNsense</font></span></a>,
            <a href="/pt-br/ODYSSEY-X86J4105-pfSense" target="_blank"><span><font color={'FFFFFF'} size={"2"}> pfSense</font></span></a>,
            <a href="/pt-br/Jellyfin-on-Docker-Ubuntu-X86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Jellyfin</font></span></a>
            <br/>
            <a href="/pt-br/ODYSSEY-X86-TrueNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> TrueNAS</font></span></a>,
            <a href="/pt-br/ODYSSEY-X86J4105-Installing-FreeNAS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> FreeNAS</font></span></a>,
            <a href="/pt-br/ODYSSEY-X86J4105-Installing-Android" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Android-x86</font></span></a>,
            <a href="/pt-br/BalenaOS-X86-Getting-Started" target="_blank"><span><font color={'FFFFFF'} size={"2"}> balenaOS</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/pt-br/Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Instalação do SO original</font></span></a>
    </a>
</div>

### Extensões / Placa Carrier

<div class="title_container">
    <a class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi - Pi HAT</font></div>
            <a href="/pt-br/Grove_Base_Hat_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Base HAT </font></span></a>,
            <a href="/pt-br/Grove_AI_HAT_for_Edge_Computing" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove AI HAT</font></span></a>,
            <a href="/pt-br/RS-485_Shield_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> RS-485 Pi HAT</font></span></a>,
            <a href="/pt-br/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030" target="_blank"><span><font color={'FFFFFF'} size={"2"}> HAT ADC de 8 canais e 12 bits</font></span></a>,
            <a href="/pt-br//ReSpeaker_4_Mic_Array_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> reSpeaker Pi HAT</font></span></a>
            <br/>
            <a href="/pt-br/Grove_Base_HAT" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Saiba mais</font></span></a>
    </a>
</div>

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/pt-br/BeagleBone_Green_HDMI_Cape" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green HDMI Cape</font></span></a>
            <br/>
            <a href="/pt-br/Motor_Bridge_Cape_v1.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Motor Bridge Cape v1.0 para BeagleBone®</font></span></a>
            <br/>
            <a href="/pt-br/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch" target="_blank"><span><font color={'FFFFFF'} size={"2"}> BeagleBone® Green LCD Cape com toque resistivo</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>reSpeaker</font></div>
            <a href="/pt-br//ReSpeaker_Drive_Unit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Unidade de acionamento para série reSpeaker</font></span></a>
            <br/>
            <a href="/pt-br//ReSpeaker_Mic_Array_v2.0" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Matriz de microfones para série reSpeaker</font></span></a>
            <br/>
    </a>
</div>

### Acessórios

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/pt-br/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Caixa tipo esqueleto para Raspberry Pi</font></span></a>
            <br/>
            <a href="/pt-br/Raspberry_PI_Bplus_Case" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Case Raspberry PI B Plus</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>ODYSSEY X86J4105</font></div>
            <a href="/pt-br/Coral-Mini-PCIe-Accelerator-x86" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Acelerador Coral Mini PCIe</font></span></a>
            <br/>
            <a href="/pt-br/ODYSSEY-X86J4105-LTE-Module" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Módulos LTE</font></span></a>
            <br/>
    </a>
</div>

### Kits com Cursos

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/pt-br/Grove_Base_Kit_for_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Base Kit para Raspberry Pi</font></span></a>
            <br/>
            <a href="/pt-br/LoRa_LoRaWan_Gateway_Kit" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Kit de gateway LoRa®/LoRaWAN®</font></span></a>
            <br/>
            <a href="/pt-br/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Starter Kit para IoT baseado em Raspberry Pi</font></span></a>
            <br/>
    </a>
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>BeagleBone®</font></div>
            <a href="/pt-br/Grove_Starter_Kit_for_BeagleBone_Green" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove Starter Kit para Seeed Studio BeagleBone® Green</font></span></a>
            <br/>
            <a href="/pt-br/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Grove IoT Starter Kit AWS IoT para BeagleBone Green </font></span></a>
            <br/>
    </a>
</div>

### Tutoriais / FAQ

<div class="intro_container">
    <a class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>Raspberry Pi</font></div>
            <a href="/pt-br/remote_connect" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Conectar remotamente ao Raspberry Pi/reComputer</font></span></a>
            <br/>
            <a href="/pt-br/Raspberry_pi_CM4_update_eeprom" target="_blank"><span><font color={'FFFFFF'} size={"2"}> Atualizar eeprom no Raspberry Pi CM4</font></span></a>
    </a>
</div>
