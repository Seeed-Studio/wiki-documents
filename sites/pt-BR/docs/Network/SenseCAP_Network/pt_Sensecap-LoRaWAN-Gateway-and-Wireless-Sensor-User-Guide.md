---
description: Guia do Usuário Sensecap LoRaWAN
title: Guia do Usuário Sensecap LoRaWAN
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/
---


## 1.Introdução ao Produto

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-1.jpg)

SenseCAP é uma rede de sensores sem fio industrial que integra hardware fácil de implantar e serviços de API de dados, possibilitando a coleta de dados ambientais de baixo consumo de energia e longa distância. SenseCAP inclui várias versões, como LoRaWAN, NB-IoT, etc.  

Os produtos da versão SenseCAP LoRaWAN incluem Gateways LoRaWAN e Nós de Sensor. Com base no protocolo LoRaWAN, pode realizar rede um-para-muitos, de longa distância e comunicação bidirecional. O Gateway LoRaWAN suporta Ethernet e 4G. O Nó de Sensor é alimentado por uma bateria de alta capacidade que dura até 3 anos (se enviar dados uma vez por hora). Ele também suporta troca a quente, facilitando a manutenção e a atualização.  

SenseCAP fornece uma plataforma em nuvem fácil de usar. Os usuários podem escanear o código QR com o App SenseCAP para vincular o dispositivo à respectiva conta para gerenciar os dispositivos e verificar os dados do Nó de Sensor no Portal SenseCAP. O Portal SenseCAP oferece API para que os usuários desenvolvam ainda mais com base nos dados do Portal.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-c-1339.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

**Principais Recursos**

- Gateway: processador Cortex A8 1GHz de alto desempenho
- Sensores com suporte ao protocolo LoRaWAN, consumo de energia ultrabaixo, bateria dura 3 anos (se enviar dados uma vez por hora)
- O Gateway usa múltiplos métodos para se conectar à rede: 4G e Ethernet para suportar diferentes cenários
- Comunicação de super longa distância: 10km em cenário de linha de visada, 2km em cenário urbano
- Plataforma em nuvem e API fáceis de usar
- Classificação de proteção industrial, gabinete com classificação IP66, adequado para ambiente externo de -40℃~70℃
- Fácil de implantar, permitindo que pessoas sem formação em engenharia instalem os dispositivos rapidamente
- Design modular para os Nós de Sensor, incluindo um Controlador de Nó de Sensor e uma Sonda de Sensor, com um suporte especialmente projetado para fácil instalação em postes ou paredes.

**Gateway LoRaWAN:**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-2.png)

Na parte inferior do gateway estão a porta Ethernet e o conector de energia, todos atendendo aos requisitos de à prova d'água. O LED indicador mostra o status de conexão de rede. A parte superior do gateway é o conector para instalar a antena 4G/LoRa, e os outros conectores são reservados.

**Nó de Sensor LoRaWAN:**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-3.png)

Abra o dispositivo por encaixe e você verá duas partes. O circuito do Controlador de Nó de Sensor mostra uma chave de energia, um botão RESET e um LED indicador, bem como um botão de modo e portas seriais, que serão usados para atualização de firmware. As duas partes se conectam e se comunicam por meio de dois conectores de mola.

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-4.png)

Cada Nó de Sensor vem com um suporte para fácil instalação em um poste ou parede.

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-11.jpg)

**Portal SenseCAP：**

O Portal SenseCAP fornece múltiplos serviços, incluindo portal de gerenciamento baseado na web e API para chamada de dados. Os usuários podem desenvolver ainda mais a integração de sistemas com a API, sem se preocupar com tecnologias de hardware embarcado, reduzindo assim o ciclo de desenvolvimento.

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-7.png)

## 2.Início Rápido

Para este guia de início rápido, consulte o [SenseCAP Product User Guide(LoRaWAN Series)-V1.1](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/res/SenseCAP%20Product%20User%20Guide(LoRaWAN%20Series)-V1.1.docx)
