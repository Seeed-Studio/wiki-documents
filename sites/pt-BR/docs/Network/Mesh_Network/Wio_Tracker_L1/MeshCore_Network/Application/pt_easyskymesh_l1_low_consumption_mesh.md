---

description: Este guia explica como usar o EasySkyMesh com o Wio Tracker L1 para construir redes de sensores IoT de baixo consumo de energia baseadas em MeshCore.
title: Firmware IoT EasySkyMesh
keywords:
   - EasySkyMesh
   - MeshCore
   - Wio Tracker L1
   - LoRa Mesh
   - MeshCore Sensor
   - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_MeshCore_Device_Low_Power_Consumption_L1_Pro.png
slug: /easyskymesh_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
   date: 9/17/2026
   author: Michelle Huang
createdAt: 2026-09-17
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/easyskymesh_wio_tracker_l1/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) é um projeto da comunidade baseado em [MeshCore](https://meshcore.io/) que se concentra na criação de firmware de baixo consumo de energia. Este firmware permite que o L1 Pro atinja uma vida útil de bateria de **18 dias** enquanto mantém a função de comunicação MeshCore.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshProject.png" style={{width:900, height:'auto'}}/></div>

EasySkyMesh adiciona recursos para **economia de energia e coleta de dados de sensores**. Os dados dos sensores podem ser coletados pelos nós MeshCore e transmitidos por meio de uma rede MeshCore existente. É particularmente útil para:

* Redes de sensores de baixo consumo de energia
* Monitoramento remoto
* Implantações alimentadas por energia solar
* Monitoramento ambiental
* Monitoramento de infraestrutura
* Prototipagem de IoT

## Recursos do EasySkyMesh

### Economia de energia

O projeto fornece versões de firmware PowerSaving com otimizações para diferentes placas MeshCore. As versões do EasySkyMesh introduziram recursos de economia de energia para dispositivos baseados em ESP32 e nRF52, bem como funções adicionais de gerenciamento de energia para diferentes funções MeshCore.

Você pode ativar o PowerSaving por meio da CLI do MeshCore quando for suportado pelo firmware:

```text
powersaving on
```

Para verificar o status atual do PowerSaving:

```text
powersaving
```

### Suporte a sensores

EasySkyMesh estende o MeshCore com suporte a sensores, permitindo que leituras de sensores sejam coletadas e transmitidas pela rede MeshCore existente. O projeto atualmente documenta suporte para vários sensores I2C comuns, incluindo:

| Sensor        | Medição                                 | Endereço I2C |
| ------------- | --------------------------------------- | ------------ |
| AHT10 / AHT20 | Temperatura / Umidade                   | `0x38`       |
| BME280        | Temperatura / Umidade / Pressão         | `0x76`       |
| BME680        | Temperatura / Umidade / Pressão / Gás   | `0x76`       |
| BMP280        | Temperatura / Pressão                   | `0x76`       |
| SHTC3         | Temperatura / Umidade                   | `0x70`       |
| SHT4X         | Temperatura / Umidade                   | `0x44`       |
| LPS22HB       | Temperatura / Pressão                   | `0x5C`       |
| INA3221       | Tensão / Corrente / Potência            | `0x42`       |
| INA219        | Tensão / Corrente / Potência            | `0x40`       |
| INA260        | Tensão / Corrente / Potência            | `0x41`       |
| INA226        | Tensão / Corrente / Potência            | `0x44`       |
| MLX90614      | Temperatura sem contato                 | `0x5A`       |
| VL53L0X       | Distância                               | `0x29`       |

 Algumas versões de firmware podem selecionar automaticamente o endereço I2C para sensores como BME280, BME680 e BMP280. Para versões do EasySkyMesh compatíveis, o comando CLI `sensor` pode ser usado para verificar os pinos I2C e os pinos seriais do GPS:

```text
sensor
```

## Introdução

### Preparação de hardware

Antes de gravar o firmware, prepare:

* Wio Tracker L1. [Clique aqui](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) para obter um.
* Cabo USB Tipo-C
* Computador

Conecte o Wio Tracker L1 ao seu computador usando a porta USB Tipo-C.

### Baixar o firmware EasySkyMesh

Acesse a página de [Releases do EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/releases). Selecione uma release que seja compatível com sua placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshFirmwareDownload.png" style={{width:600, height:'auto'}}/></div>




As releases do EasySkyMesh podem fornecer diferentes arquivos de firmware para diferentes hardwares e diferentes cenários de atualização. Para uma nova instalação, o projeto geralmente fornece uma imagem de firmware de instalação limpa. Para uma instalação existente, use o firmware de atualização quando quiser preservar a configuração existente.


### Gravar o firmware

O projeto EasySkyMesh recomenda usar o MeshCore Web Flasher para dispositivos compatíveis.

**Passo 1:** Abra o [MeshCore Web Flasher](https://meshcore.io/flasher)

**Passo 2:** Selecione **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Passo 3:** Selecione o arquivo de firmware EasySkyMesh.


**Passo 4:** Entre no modo DFU, se necessário.

**Passo 5:** Inicie a gravação. Aguarde até que o processo de gravação seja concluído. 

**Passo 6:** Reinicie o dispositivo.


## Solução de problemas

### O dispositivo não aparece no Flasher

1. Certifique-se de que o cabo USB suporta transferência de dados.
2. Reconecte o Wio Tracker L1.
3. Entre novamente no modo DFU.
4. Atualize o Web Flasher.
5. Tente outra porta ou cabo USB.

### O sensor não é detectado

Verifique:
1. Fiação de VCC e GND.
2. Fiação de SDA e SCL.
3. Tensão de operação do sensor.
4. Endereço I2C.
5. Versão do firmware EasySkyMesh.
6. Se o sensor está listado como compatível.


Se o problema persistir, consulte o [repositório EasySkyMesh no GitHub](https://github.com/IoTThinks/EasySkyMesh) para a documentação e issues mais recentes.

## Recursos úteis

* [Repositório EasySkyMesh no GitHub](https://github.com/IoTThinks/EasySkyMesh)
* [Instruções de gravação do EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [Instruções de sensores do EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

## Suporte técnico e discussão sobre o produto
<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>