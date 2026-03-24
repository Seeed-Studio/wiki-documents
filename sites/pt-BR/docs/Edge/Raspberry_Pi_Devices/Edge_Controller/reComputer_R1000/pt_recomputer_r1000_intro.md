---
description: O controlador de borda IoT reComputer R1000, com tecnologia Raspberry Pi CM4, possui um processador A72 quad-core, Ethernet dupla e vários canais RS485 com suporte a BACnet, Modbus RTU e Modbus TCP/IP. Com opções sem fio versáteis, incluindo 4G, LoRa® e Wi-Fi/BLE, é ideal para gerenciamento remoto de dispositivos e energia em aplicações de edifícios inteligentes.
title: Apresentação do reComputer R1000
keywords:
  - Raspberry pi
  - Controlador de Borda
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_r1000_intro
last_update:
  date: 10/08/2024
  author: Kasun Thushara
createdAt: '2024-07-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_intro/
---

O controlador de borda IoT reComputer R1000, com tecnologia Raspberry Pi CM4, possui um processador A72 quad-core, Ethernet dupla e vários canais RS485 com suporte a BACnet, Modbus RTU e Modbus TCP/IP. Com opções sem fio versáteis, incluindo 4G, LoRa® e Wi-Fi/BLE, garante uma comunicação robusta para redes IoT. Ideal para gerenciamento remoto de dispositivos e energia, o R1000 é perfeito para aplicações de edifícios inteligentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:800, height:'auto'}}/></div>

## Aplicações do reComputer R1000

### Guias para o Primeiro Contato

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeiros Passos com o reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Raspbian OS no eMMC do reComputer R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este artigo se concentra em fornecer uma visão geral do reComputer R1000, detalhando suas interfaces de hardware e componentes de hardware opcionais. Ele destaca os recursos e capacidades que tornam o R1000 adequado para diversas aplicações de IoT.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> O reComputer R1000 vem com uma imagem pré-carregada do Raspbian. Se você precisar reinstalá-la, este guia mostrará como instalar o Raspbian novamente.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_flash_OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Guia de Montagem do reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Como usar RS485 e Modbus RTU com o reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 usando BACnet MS/TP</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este Wiki mostrará como montar e desmontar a unidade para instalar componentes periféricos, bem como as opções de fixação.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo apresenta principalmente como usar a função de comunicação RS485 do reComputer R1000 e testa as funções de comunicação RS485 e Modbus.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo apresenta principalmente como realizar testes funcionais do protocolo BACnet MS/TP no reComputer R1000. Simulamos um servidor BACnet MS/TP no reComputer R1000 e, em seguida, usamos o YABE em um PC com W10 para verificar se o dispositivo está presente. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_assembly_guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_rs485_modbus_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_bacnet_mstp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Borda Industrial

<strong><span><font color={'4ec354'} size={"5"}> Node-RED</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeiros Passos com Node-RED no reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com Node-RED e MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com Node-RED e Modbus TCP</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-recomp.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Descubra como instalar e configurar o Node-RED no reComputer R1000, transformando-o em uma ferramenta versátil para conectar hardware, APIs e serviços online. Utilize o editor de fluxos baseado em navegador e intuitivo para integrar diversos componentes perfeitamente usando uma rica paleta de nós.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Explore a instalação do broker Mosquitto e aprenda a trabalhar com o Node-RED para assinar e publicar tópicos MQTT neste wiki. Ideal para aplicações de IoT, o MQTT possibilita a troca de dados em tempo real de forma eficiente, com baixa largura de banda em redes não confiáveis.</font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Aprenda a trabalhar com Modbus TCP no reComputer R1000 usando Node-RED neste wiki. Descubra como o Modbus TCP estende o protocolo para redes Ethernet, permitindo velocidades de comunicação mais rápidas e integração perfeita com a infraestrutura moderna de TI.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_getting_started_node_red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com Node-RED e BACnet TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com Node-RED e InfluxDB</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 com Grafana</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/bacnet-recomp.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubra as vantagens do BACnet IP em Sistemas de Gerenciamento Predial (BMS) com este wiki, com foco na integração com Node-RED. Aprenda como alcançar melhor escalabilidade, instalação e manutenção mais simples e aproveitar a infraestrutura de rede existente usando Node-RED e BACnet IP.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Implemente o InfluxDB em um reComputer R1000, um controlador de borda alimentado por Raspberry Pi, para coleta e análise robustas de dados de séries temporais na borda da rede. Este guia detalha as etapas para instalar, configurar e usar o InfluxDB, possibilitando o gerenciamento eficiente e insights em tempo real para aplicações de IoT.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Aprenda como instalar o Grafana em um reComputer R1000 alimentado por Raspberry Pi neste wiki, transformando seus dados em visualizações esclarecedoras. Conecte o Grafana a um banco de dados InfluxDB existente e crie um dashboard ilustrativo para melhorar o desempenho do sistema, simplificar a solução de problemas e tomar decisões embasadas com poderosas ferramentas de monitoramento.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_node_red_bacnet_ip/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com Node Red e servidor OPC UA com Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>Conectando CLPs Siemens usando o protocolo S7 com reComputer R1000</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FlowFuse</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-S7.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/flowfuse.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki irá guiá-lo na criação de um servidor OPC UA no ambiente Node-RED, integrando vários protocolos para melhorar a interoperabilidade em toda a hierarquia de automação. </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este artigo explica como usar o Node-RED, uma ferramenta de desenvolvimento baseada em fluxos, em um reComputer alimentado por Raspberry Pi para se comunicar com CLPs Siemens via protocolo S7. </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>O FlowFuse estende o Node-RED com ferramentas para desenvolvimento colaborativo, implantações remotas e pipelines de DevOps, facilitando o gerenciamento e a entrega de aplicações Node-RED. Este wiki irá explorar como o FlowFuse simplifica esses processos para equipes de desenvolvimento.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_opcua_server/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_s7/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_flow_fuse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>N3uron</font></span></strong>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 com N3uron</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 conectando o AWS IoT Core com N3uron</font></th>
    </tr>
      <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWS_recomputer_n3uron.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
      <tr class="table-trnobg"></tr>
      <tr class="table-trnobg">
        <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Crie facilmente pipelines de dados bidirecionais entre sistemas OT e IT com o N3uron, consolidando e visualizando dados operacionais em uma única fonte. Aprenda a instalar e acessar o N3uron usando o reComputer R1000</font></td>
        <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Neste tutorial, vamos nos aprofundar nas complexidades da interface entre a plataforma N3uron Edge IIoT e o AWS IoT Core.</font></td>
      </tr>
      <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
    <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
    <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
    </tr>
  </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Conecte o N3uron com BACnet no reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Publicando dados industriais na nuvem AWS usando N3uron, MQTT e Modbus</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/modbus-bacnet-n3uron.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/recomputer-n3uron-aws.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Descubra o poder do BACnet em Sistemas de Gerenciamento Predial com o N3uron, aprimorando a aquisição e o gerenciamento de dados para uma interoperabilidade perfeita. Utilize BACnet TCP com o YABE Room Simulator para visualizar e testar dispositivos BACnet, garantindo soluções BMS robustas e flexíveis.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Melhore o gerenciamento de plantas com o reComputer R1000 e o N3uron Duo, aproveitando conectividade robusta e recursos de manipulação de dados. Este wiki orienta você a se conectar com Modbus TCP e MQTT para uma integração industrial perfeita.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron_bacnet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_n3uron_modbus_mqtt_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FUXA</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FUXA para usar Modbus RTU/TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FUXA para usar cliente MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FUXA para usar OPC-UA</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este artigo explica principalmente como usar o FUXA para comunicação Modbus RTU/TCP. Ele aborda os fundamentos do Modbus e demonstra suas aplicações em vários cenários.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo apresenta principalmente como usar o FUXA para comunicação MQTT no reComputer R1000. Este artigo usa mosquitto como agente do servidor MQTT, FUXA e node-red como clientes MQTT, e apresenta um escravo ModbusTCP como a fonte dos dados publicados pelo FUXA. </font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este artigo apresenta principalmente como usar o FUXA para comunicação OPC-UA. Executamos o Prosys OPC UA Simulation Server em um PC com W10 e, em seguida, lemos os dados do simulador no reComputer R1000.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_modbus_rtu_and_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_mqtt_client/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_opc_ua/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FUXA para usar WebAPI</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FUXA para implementar SCADA</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este artigo apresenta principalmente como usar o FUXA para comunicação WebAPI. Nesta fase, o FUXA suporta apenas a função GET e o pacote de dados está em formato Json. Usaremos a função GET do FUXA para obter o datagrama do postman.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo apresenta principalmente como usar o FUXA para implementar SCADA. No artigo, o FUXA recebe dados do node-red e do OPC UA Simulator, e os exibe usando gráfico e Circular Gauge; ao mesmo tempo, desenha uma série de formas para simular processos industriais.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_web_api/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_achieve_scada/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>CODESYS</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Como instalar o CODESYS para reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Como usar o CODESYS para configurar a função Modbus RTU do R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> CODESYS, desenvolvido pela 3S-Smart Software Solutions, é uma plataforma de software de automação amplamente utilizada para sistemas de controle industrial. Este artigo foca em como baixar, instalar o CODESYS e implantar um projeto no reComputer R1000.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo apresenta principalmente como usar a função Modbus RTU do reComputer R1000 baseada em CODESYS. Usaremos as duas portas RS485 do reComputer R1000: uma porta é usada para o mestre Modbus e a outra para o escravo Modbus.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_use_modbus_rtu_with_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FIN</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 instalar FIN</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FIN para usar Modbus TCP/RTU</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FIN Logic Builder</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> O FIN Framework (FIN) é um framework de software com suítes de aplicativos que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma gama de produtos e serviços. Este artigo apresenta principalmente como instalar o FIN no reComputer R1000.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo apresenta como usar o Modbus Connector do FIN Framework; o uso de Modbus TCP/RTU no FIN Framework é explicado em detalhe.</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo mostrará como usar o Logic Builder do FIN Framework e implementar um alarme usando o Logic Builder. Monitoramos o valor de um dispositivo Modbus. Quando o valor excede o valor crítico, o FIN disparará um alarme.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_fin/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_modbus_tcp_and_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_logic_builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FIN para criar um Gráfico de Nível Superior</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FIN para criar um Gráfico de Site</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 com FIN para criar um Gráfico de Andar</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo mostrará como usar o Graphics Builder do FIN Framwork e como criar um Gráfico de Nível Superior usando o Graphics Builder.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo mostrará como usar o Graphics Builder do FIN Framwork e como criar um Gráfico de Site usando o Graphics Builder.</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo mostrará como usar o Graphics Builder do FIN Framwork e como criar um Gráfico de Andar usando o Graphics Builder.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_top_level_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_site_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_floor_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>ThingsBoard</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeiros Passos com ThingsBoard e reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Crie Dashboards Dinâmicos de IoT com ThingsBoard e reComputer R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este guia aborda a instalação do ThingsBoard Community Edition em um reComputer para implantação na borda. Ele fornece uma abordagem passo a passo para configurar uma infraestrutura robusta de IoT, permitindo provisionamento de dispositivos, coleta de dados, visualização e análise de telemetria.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este tutorial explica como adicionar um dispositivo MQTT ao ThingsBoard Community Edition e visualizar seus dados em um dashboard interativo. Ele cobre as etapas para conectar o dispositivo, enviar dados de telemetria e usar as ferramentas gráficas do ThingsBoard para monitoramento e análise em tempo real.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_thingsboard_ce/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_thingsboard_dashboard/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Gerenciamento de Frotas  

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Configuração do balena OS no reComputer R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Balena: plataforma de IoT para desenvolvedores implantarem e gerenciarem aplicações em frotas de dispositivos. Oferece suporte a arquiteturas diversas, permitindo atualizações fáceis e operação segura e confiável dos dispositivos em campo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_r1000_balena/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

### Soluções em Nuvem

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Integração do AWS IoT Core com reComputer R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWSrecomputer.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Aprenda como conectar seu reComputer R1000 à nuvem AWS IoT neste guia abrangente. Aproveite o AWS IoT Core para gerenciamento seguro de dispositivos e comunicação contínua, permitindo o desenvolvimento de aplicações inteligentes e conectadas dentro do ecossistema AWS.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/recomputer_r1000_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

### Visão Computacional

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Detecção de Objetos com YOLOv8 no reComputer R1000 com Hailo-8L</font></th>
      <th class="table-trnobg"><font size={"4"}>Estimativa de Pose com YOLOv8 no reComputer R1000 com Hailo-8L</font></th>
      <th class="table-trnobg"><font size={"4"}>Benchmark no RPi5 e CM4 executando yolov8s com rpi ai kit</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este wiki demonstra a detecção de objetos usando YOLOv8 no reComputer R1000 com e sem aceleração do Raspberry-pi-AI-kit. O Raspberry Pi AI Kit melhora o desempenho do Raspberry Pi e libera seu potencial em aplicações de inteligência artificial e aprendizado de máquina</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este wiki demonstra a estimativa de pose usando YOLOv8 no reComputer R1000 com e sem aceleração do Raspberry-pi-AI-kit. O Raspberry Pi AI Kit melhora o desempenho do Raspberry Pi e libera seu potencial em aplicações de inteligência artificial e aprendizado de máquina</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este wiki apresenta benchmarks do YOLOv8s para estimativa de pose e detecção de objetos no Raspberry Pi 5 e Raspberry Pi Compute Module 4. Todos os testes utilizam o mesmo modelo (YOLOv8s), quantizado para int8, com tamanho de entrada de resolução 640x640, tamanho de lote configurado para 1 e entrada do mesmo vídeo a 240 FPS.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>
<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Controle de Luz Baseado em Pose com Node-Red e Raspberry Pi com AI kit</font></th>
      <th class="table-trnobg"><font size={"4"}>Aplicação CLIP no reComputer</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI-Box/CLIP.PNG" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Este wiki irá guiá-lo sobre como executar YOLOv8 usando um AI kit, usar YOLOv8 para monitorar sua postura e, por fim, controlar suas luzes com base na sua postura.</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este tutorial orienta você na instalação do CLIP em um reComputer. O CLIP permite o reconhecimento de imagens zero-shot, correspondendo imagens com texto sem rótulos tradicionais.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/pose_based_light_control_with_nodered_and_rpi_with_aikit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/clip_application_on_rpi5_with_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
