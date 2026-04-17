---
description: >-
  O reComputer Robotics J401 é uma placa-carrier de IA de borda de alto desempenho projetada para aplicações avançadas de robótica. Ele suporta módulos NVIDIA Jetson Orin Nano e Orin NX nos modos Super/MAXN, oferecendo até 157 TOPS de potência de computação de IA. A placa oferece amplas opções de conectividade, incluindo Ethernet Gigabit dupla, múltiplas portas USB 3.2, CAN, slots M.2 para módulos 5G/Wi-Fi/BT e suporte opcional para câmera GMSL2. Pré-instalado com JetPack 6, garante uma implantação perfeita para desenvolvimento em robótica. O design robusto suporta ampla faixa de temperatura de operação e inclui um dissipador de calor com ventoinha pré-instalado. A configuração envolve gravar o sistema operacional JetPack em um SSD NVMe usando um PC host Ubuntu compatível, seguida de configuração de hardware e uso das interfaces. Especificações detalhadas de hardware, desenhos mecânicos e recursos técnicos são fornecidos para desenvolvedores, juntamente com canais de suporte técnico e
  comunidade para solução de problemas e discussão.
title: Primeiros Passos com o reComputer Robotics
tags:
  - Placa-carrier de robótica J401
  - Jetson
  - Robótica
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /recomputer_robotics_j401_getting_started
sku: 100071398, 114110310, 100026552
last_update:
  date: 08/06/2025
  author: Zibo
createdAt: '2025-08-06'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/pt-br/recomputer_robotics_j401_getting_started/
---
<div style={{ textAlign: "justify" }}>
O reComputer Robotics J401 é uma placa-carrier de IA de borda compacta e de alto desempenho, projetada para robótica avançada. Compatível com módulos NVIDIA Jetson Orin Nano/Orin NX nos modos Super/MAXN, oferece até 157 TOPS de desempenho de IA. Equipada com amplas opções de conectividade — incluindo portas Ethernet Gigabit duplas, slots M.2 para módulos 5G e Wi-Fi/BT, 6 portas USB 3.2, CAN, GMSL2 (via expansão opcional), I2C e UART — ela atua como um poderoso cérebro robótico capaz de processar dados complexos de vários sensores. Pré-instalada com JetPack 6 e Linux BSP, garante uma implantação perfeita.​
</div>

<div align="center">
  <img width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Recursos

- **Design de Hardware Robusto**: Um computador de IA de borda compacto e de alto desempenho com módulo NVIDIA® Jetson™ Orin™ NX 16GB no modo Super/MAXN, fornecendo até 157 TOPS de desempenho de IA.
- **Múltiplas Interfaces para robótica**: Incluindo dupla RJ45, slots M.2 para módulos 5G/Wi-Fi/BT, 6x USB 3.2, 2x CAN, GMSL2 (compra adicional), I2C e UART, funcionando como um poderoso cérebro robótico.
- **Configuração de Software**: Pré-instalado com JetPack 6.2 e Linux BSP para implantação perfeita.
- **Aplicação e Benefícios**: Ideal para desenvolvimento rápido de robôs autônomos, acelerando o tempo de chegada ao mercado com interfaces prontas para uso e frameworks de IA otimizados.
- **Ampla Faixa de Operação**: Opera de forma confiável em uma faixa de temperatura de -20°C a 60°C no modo 25W e de -20°C a 50°C no modo 40W

## Especificação

### Especificações da Placa-Carrier

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>Categoria</th>
      <th>Item</th>
      <th>Detalhes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">Armazenamento</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD 128G incluído)</td>
    </tr>
    <tr>
      <th rowSpan="3">Rede</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B para módulo 5G</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 Ethernet Gigabit</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Modo Device/Debug)</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td>1x 4 em 1 GMSL2 (mini fakra) (placa opcional)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (Conector GH 4 pinos 1.25)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x DP1.4 (Host Type C)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART Conector GH 4 pinos 1.25</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C Conector GH 4 pinos 1.25</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td>1x Conector de Ventoinha 4 pinos (5V PWM);<br />1x Conector de Ventoinha 4 pinos (12V PWM)</td>
    </tr>
    <tr>
      <td>Porta de Expansão</td>
      <td>1x Conector de Expansão de Câmera (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 pinos;<br />1x Soquete RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT e LED de Usuário)</td>
    </tr>
    <tr>
      <td>Botão Pinhole</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>Chave DIP</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Orifício para Antena</td>
      <td>5x Orifício para Antena</td>
    </tr>
    <tr>
      <th rowSpan="1">Alimentação</th>
      <td colSpan="2">19-54V XT30(2+2) (Cabo XT30 para Conector DC 5525 incluído)</td>
    </tr>
    <tr>
      <th rowSpan="1">Versão do Jetpack</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">Mecânico</th>
      <td>Dimensões (L x P x A)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>1100g</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td>Mesa, Montagem em parede</td>
    </tr>
    <tr>
      <th rowSpan="1">Temperatura de Operação</th>
      <td colSpan="2">-20℃~55℃ (Modo 25W);<br />-20℃~50℃ (Modo MAXN);<br />(com dissipador de calor reComputer Robotics com ventoinha)</td>
    </tr>
    <tr>
      <th rowSpan="1">Garantia</th>
      <td>2 Anos</td>
    </tr>
    <tr>
      <th rowSpan="1">Certificação</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## Visão Geral de Hardware

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114110308_1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## Gravar o Sistema Operacional JetPack

### Módulo Compatível

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Pré-requisitos

- PC host com Ubuntu
- reComputer Robotics
- Módulo NVIDIA® Jetson Orin™ Nano/NX
- Cabo de transmissão de dados USB Type-C

:::info

Recomendamos que você use dispositivos host físicos com Ubuntu em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="3"> Versão do Ubuntu (Computador Host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Preparar a Imagem do Jetpack

Aqui, precisamos baixar a imagem do sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Link de Download1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBwi3AQXJiaTZiPQaKocDSkAciLsok9znKGnAPczuZ_IfY?e=S2v5QV">Download</a></td>
      <td>3dc9d5b27e01f223e6d75b50a8cd5fa3<br />3b0fb259018011418f0692ff0eb91a54</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB8NF028_DESZJ9WwSg2Q34AVCNXeZFkwJi8pbvCOcX4cI?e=Zahpfm">Download</a></td>
      <td>9b8a11bfb335fd159bbc2f29ef47f3d0<br />0d94a88c190a58ea94762954c476c176</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAakIBc6l2wS7qKAy-1ZeHPAbTtT8XLYaIgITvBGy8vezo?e=mPygXS">Download</a></td>
      <td>dade14539ef525506dba4f59a2e99254<br />48621d89db52b8a94417f438c0cf8024</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBnWlTaU6nIQLDOcM2KRQM6AQ6A-ODC8DnWFKRSfW8vRmc?e=1AAVH8">Download</a></td>
      <td>2ed5792564202430c1550183158d2f4a<br />6c47d65af248a634cf1d4d13ee465bf4</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do Jetpack6 tem aproximadamente **14,2GB** de tamanho e deve levar cerca de 60 minutos para ser baixado. Aguarde gentilmente até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware baixado está completo e íntegro.
:::

### Entrar no Modo de Recuperação Forçada

:::info
Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que a placa esteja em modo de recuperação forçada.
:::

<details>

<summary> Passo a Passo </summary>

**Passo 1.** Mova a chave para o modo RESET.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Passo 2.** Ligue a placa-carrier conectando o cabo de alimentação.

**Passo 3.** Conecte a placa ao PC host Ubuntu com um cabo de transmissão de dados USB Type-C.

**Passo 4.** No PC host Linux, abra uma janela de Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo de recuperação forçada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

A imagem abaixo é para Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Gravar no Jetson

**Passo 1:** Extraia o arquivo de imagem baixado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-gmsl-6.2-36.4.3-2026-02-06.tar.gz
```

**Passo 2:** Execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos.
:::

**Passo 3:** Conecte o Robotics J401 a um monitor usando o adaptador PD para HDMI para conectar a um monitor que suporte entrada HDMI, ou conecte diretamente a um monitor que suporte entrada PD usando o cabo PD, e finalize a configuração inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

## Uso das Interfaces de Hardware

:::info
Se você quiser saber mais sobre as especificações detalhadas e o uso da interface de hardware, consulte [este wiki](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_robotics_j401_getting_started/#uso-das-interfaces).
:::

## Recursos

- [Esquemático da Placa Carrier reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [Folha de Dados da Placa Carrier reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [Arquivo 3D do reComputer Robotics](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Documento Mecânico - reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Catálogo de Produtos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparação Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de Sucesso Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Resumo Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
