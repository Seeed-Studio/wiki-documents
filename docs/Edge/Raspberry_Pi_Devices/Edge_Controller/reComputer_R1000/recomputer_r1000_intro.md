---
description: The reComputer R1000 edge IoT controller, powered by Raspberry Pi CM4, features a quad-core A72 processor, dual Ethernet, and multiple RS485 channels supporting BACnet, Modbus RTU, and Modbus TCP/IP. With versatile wireless options including 4G, LoRa®, and Wi-Fi/BLE, it is ideal for remote device and energy management in smart building applications.
title: reComputer R1000 Walk Through
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1000
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_r1000_intro
last_update:
  date: 10/08/2024
  author: Kasun Thushara
---

The reComputer R1000 edge IoT controller, powered by Raspberry Pi CM4, features a quad-core A72 processor, dual Ethernet, and multiple RS485 channels supporting BACnet, Modbus RTU, and Modbus TCP/IP. With versatile wireless options including 4G, LoRa®, and Wi-Fi/BLE, it ensures robust IoT network communication. Ideal for remote device and energy management, the R1000 is perfect for smart building applications.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:800, height:'auto'}}/></div>

## reComputer R1000 Application

### Guides for First Look

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Getting Started</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Raspbian OS to eMMC</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This article focuses on providing an overview of the reComputer R1000, detailing its hardware interfaces and optional hardware components. It highlights the features and capabilities that make the R1000 suitable for various IoT applications.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> The reComputer R1000 comes with a preloaded image of Raspbian. If you need to reinstall it, this guide will show you how to install Raspbian again.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_flash_OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Assembly Guide</font></th>
      <th class="table-trnobg"><font size={"4"}>How to use rs485 and modbus rtu with reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 use bacnet MS/TP</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This Wiki will show you how to Assemble and Disassemble the unit to install peripherals components, as well as the option for mounting</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article mainly introduces how to use the RS485 communication function of reComputer R1000, and tests the RS485 and Modbus communication functions.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.We simulated a bacnet MS/TP server on reComputer R1000, and then used YABE on the W10 PC to check whether the device is present. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_assembly_guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_use_bacnet_mstp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Industrial Edge

<strong><span><font color={'4ec354'} size={"5"}> Node-RED</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 Getting Started with Node-Red</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and Modbus TCP</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-recomp.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Discover how to install and configure Node-RED on reComputer R1000, transforming it into a versatile tool for connecting hardware, APIs, and online services. Utilize the intuitive browser-based flow editor to seamlessly integrate various components using a rich palette of nodes.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Explore the installation of the Mosquitto broker and learn how to work with Node-RED to subscribe and publish MQTT topics in this wiki. Ideal for IoT applications, MQTT enables efficient, real-time data exchange with low bandwidth over unreliable networks.</font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Learn how to work with Modbus TCP on reComputer R1000 using Node-RED in this wiki. Discover how Modbus TCP extends the protocol to Ethernet networks, enabling faster communication speeds and seamless integration with modern IT infrastructure.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_getting_started_node_red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and BACnet TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and InfluxDB</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Grafana</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/bacnet-recomp.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Discover the advantages of BACnet IP in Building Management Systems (BMS) with this wiki, focusing on Node-RED integration. Learn how to achieve improved scalability, easier installation and maintenance, and leverage existing network infrastructure using Node-RED and BACnet IP.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Deploy InfluxDB on an reComputer R1000, a Raspberry Pi-powered edge controller, for robust time-series data collection and analysis at the network edge. This guide details the steps to install, configure, and use InfluxDB, enabling efficient management and real-time insights for IoT applications.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Learn how to install Grafana on a Raspberry Pi-powered reComputer R1000 in this wiki, transforming your data into insightful visualizations. Connect Grafana to an existing InfluxDB database and create an illustrative dashboard to enhance system performance, streamline troubleshooting, and make informed decisions with powerful monitoring tools.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_node_red_bacnet_ip/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with Node Red and OPC UA server with Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>Connecting Siemens PLCs Using the S7 Protocol with reComputer R1000</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FlowFuse</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-S7.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/flowfuse.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki will guide you through creating an OPC UA server in the Node-RED environment, integrating various protocols for improved interoperability across the automation hierarchy. </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This article explains how to use Node-RED, a flow-based development tool, on a Raspberry Pi-powered reComputer to communicate with Siemens PLCs via the S7 Protocol. </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>FlowFuse extends Node-RED with tools for collaborative development, remote deployments, and DevOps pipelines, making it easier to manage and deliver Node-RED applications. This wiki will explore how FlowFuse streamlines these processes for development teams.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_nodered_opcua_server/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_nodered_s7/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_flow_fuse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>N3uron</font></span></strong>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 with N3uron</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 Connect AWS IoT Core with N3uron</font></th>
    </tr>
      <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWS_recomputer_n3uron.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
      <tr class="table-trnobg"></tr>
      <tr class="table-trnobg">
        <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Easily create bidirectional data pipelines between OT and IT systems with N3uron, consolidating and visualizing operational data in a single source. Learn to install and access N3uron using reComputer R1000</font></td>
        <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  In this tutorial, we will delve into the intricacies of interfacing between the N3uron Edge IIoT platform and AWS IoT Core.</font></td>
      </tr>
      <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
    <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
  </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Connect N3uron with BACnet on reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Publishing Industrial Data to AWS Cloud Using N3uron, MQTT, and Modbus</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/modbus-bacnet-n3uron.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/recomputer-n3uron-aws.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Discover the power of BACnet in Building Management Systems with N3uron, enhancing data acquisition and management for seamless interoperability. Utilize BACnet TCP with the YABE Room Simulator to visualize and test BACnet devices, ensuring robust and flexible BMS solutions.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Enhance plant management with reComputer R1000 and N3uron Duo, leveraging robust connectivity and data manipulation capabilities. This Wiki guides you through connecting with Modbus TCP and MQTT for seamless industrial integration.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron_bacnet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_n3uron_modbus_mqtt_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FUXA</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use Modbus RTU/TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use MQTT client</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use OPC-UA</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This article primarily explains how to use FUXA for Modbus RTU/TCP communication. It covers the basics of Modbus and demonstrates its applications in various scenarios.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article mainly introduces how to use FUXA for mqtt communication on reComputerR1000. This article uses mosquitto as the MQTT server agent, FUXA and node-red as the MQTT client, and introduces a ModbusTCP slave as the source of data published by FUXA. </font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This article mainly introduces how to use FUXA for OPC-UA communication.We run Prosys OPC UA Simulation Server on W10 PC, and then read the data of the simulator on reComputer R1000.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_modbus_rtu_and_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_mqtt_client/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_opc_ua/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to use WebAPI</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FUXA to achieve SCADA</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This article mainly introduces how to use FUXA for WebAPI communication.At this stage, FUXA only supports the GET function, and the data packet is in Json format.We will use FUXA's GET function to obtain the datagram of postman.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article mainly introduces how to use FUXA to achieve SCADA. In the article, FUXA receives data from node-red and OPC UA Simulator, and displays it using chart and Circular Gauge; at the same time, it draws a series of patterns to simulate industrial processes.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_web_api/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fuxa_achieve_scada/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>CODESYS</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>How to install CODESYS for reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>How to use CODESYS to configure the Modbus RTU function of R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> CODESYS, developed by 3S-Smart Software Solutions, is a widely used automation software platform for industrial control systems. This article focuses on how to download, install CODESYS, and deploy a project to the reComputer R1000.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article mainly introduces how to use the modbus rtu function of reComputer R1000 based on CODESYS. We will use the two rs485 ports of reComputer R1000, one port is used for Modbus master and the other port is used for Modbus slave.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_install_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_use_modbus_rtu_with_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FIN</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 install FIN</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN to use modbus TCP/RTU</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN Logic Builder</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> FIN Framework (FIN) is a software framework with application suites that can integrate, control, manage, analyze, visualize and connect. Its capabilities can be integrated by OEMs into a range of products and services.This article mainly introduces how to install Fin on reComputer R1000.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article introduces how to use the Modbus Connector of FIN Framwork, the use of Modbus TCP/RTU in FIN Framwork was explained in detail.</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article will show you how to use the Logic Builder of FIN Framwork, and to implement an alarm using the Logic Builder.We monitor the value of a Modbus device. When the value exceeds the critical value, FIN will alarm.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_install_fin/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_logic_builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN to create a Top Level Graphic</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN to create a Site Graphic</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 with FIN to create a Floor Graphic</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article will show you how to use the Graphics Builder of FIN Framwork, and to create a Top Level Graphic using the Graphics Builder.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article will show you how to use the Graphics Builder of FIN Framwork, and to create a Site Graphic using the Graphics Builder.</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This article will show you how to use the Graphics Builder of FIN Framwork, and to create a Floor Graphic using the Graphics Builder.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_top_level_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_site_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_fin_floor_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>ThingsBoard</font></span></strong>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Getting Started ThingsBoard With reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>Create Dynamic IoT Dashboards with ThingsBoard and reComputer R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This guide covers the installation of ThingsBoard Community Edition on a reComputer for edge deployment. It provides a step-by-step approach to setting up a robust IoT infrastructure, enabling device provisioning, data collection, visualization, and telemetry analysis.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This tutorial explains how to add an MQTT device to ThingsBoard Community Edition and visualize its data on an interactive dashboard. It covers the steps to connect the device, send telemetry data, and use ThingsBoard’s graphical tools for real-time monitoring and analysis.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_thingsboard_ce/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_thingsboard_dashboard/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Fleet Management  

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 balena OS Setup</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Balena: IoT platform for developers to deploy and manage applications across device fleets. Supports diverse architectures, enabling easy updates and secure, reliable device operation in the field.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_r1000_balena/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

### Cloud Solutions

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>AWS IoT Core Intergate With reComputer R1000</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWSrecomputer.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Learn how to connect your reComputer R1000 to the AWS IoT cloud in this comprehensive guide. Leverage AWS IoT Core for secure device management and seamless communication, enabling the development of smart, connected applications within the AWS ecosystem.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/recomputer_r1000_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

### Computer Vision

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>YOLOv8 Object Detection on reComputer R1000 with Hailo-8L</font></th>
      <th class="table-trnobg"><font size={"4"}>YOLOv8 Pose Estimation on reComputer R1000 with Hailo-8L</font></th>
      <th class="table-trnobg"><font size={"4"}>Benchmark on RPi5 and CM4 running yolov8s with rpi ai kit</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This wiki demonstrates object detection using YOLOv8 on reComputer R1000 with and without Raspberry-pi-AI-kit acceleration. The Raspberry Pi AI Kit enhances the performance of the Raspberry Pi and unlock its potential in artificial intelligence and machine learning applications</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This wiki demonstrates pose estimation using YOLOv8 on reComputer R1000 with and without Raspberry-pi-AI-kit acceleration. The Raspberry Pi AI Kit enhances the performance of the Raspberry Pi and unlock its potential in artificial intelligence and machine learning applications</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This wiki showcases benchmarking of YOLOv8s for pose estimation and object detection on Raspberry Pi 5 and Raspberry Pi Compute Module 4. All tests utilize the same model (YOLOv8s), quantized to int8, with an input size of 640x640 resolution, batch size set to 1, and input from the same video at 240 FPS.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>
<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Pose-Based Light Control with Node-Red and Raspberry Pi with AI kit</font></th>
      <th class="table-trnobg"><font size={"4"}>Clip Application on reComputer</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI-Box/CLIP.PNG" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  This wiki will guide you on how to run YOLOv8 using an AI kit, use YOLOv8 to monitor your posture, and ultimately control your lights based on your posture.</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This tutorial guides you through installing CLIP on a reComputer. CLIP enables zero-shot image recognition by matching images with text without traditional labels.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pose_based_light_control_with_nodered_and_rpi_with_aikit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/clip_application_on_rpi5_with_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
