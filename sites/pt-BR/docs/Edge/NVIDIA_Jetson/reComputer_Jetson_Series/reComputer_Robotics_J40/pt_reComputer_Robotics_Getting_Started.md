---
description: "Comece com o reComputer Robotics J401: especificações, módulos Orin Nano e NX, gravação do JetPack 7.2, visão geral de hardware e verificações no primeiro boot."
title: Introdução ao reComputer Robotics
tags:
  - Placa carrier J401-Robotics
  - Jetson
  - Robótica
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /recomputer_robotics_j401_getting_started
sku: 100071398, 114110310, 100026552
last_update:
  date: 10/19/2026
  author: Zibo
createdAt: '2025-08-06'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/recomputer_robotics_j401_getting_started/
---
<div style={{ textAlign: "justify" }}>
O reComputer Robotics J401 é uma placa carrier compacta e de alto desempenho para IA de borda, projetada para robótica avançada. Compatível com módulos NVIDIA Jetson Orin Nano/Orin NX nos modos Super/MAXN, oferece até 157 TOPS de desempenho em IA. Equipado com amplas opções de conectividade — incluindo duas portas Gigabit Ethernet, slots M.2 para módulos 5G e Wi‑Fi/BT, 6 portas USB 3.2, CAN, GMSL2 (via expansão opcional), I2C e UART — atua como um poderoso cérebro robótico capaz de processar dados complexos de vários sensores. Pré-instalado com JetPack 6 e Linux BSP, garante uma implantação sem interrupções.​
</div>

<div align="center">
  <img alt="Gabinete do reComputer Robotics J401 com o selo NVIDIA Jetson Orin Nano / Orin NX, portas frontais visíveis" width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Recursos

- **Design de hardware robusto**: Um computador de borda de IA compacto e de alto desempenho com módulo NVIDIA® Jetson™ Orin™ NX 16GB em modo Super/MAXN, fornecendo até 157 TOPS de desempenho em IA.
- **Múltiplas interfaces para robótica**: Inclui duas RJ45, slots M.2 para módulos 5G/Wi‑Fi/BT, 6x USB 3.2, 2x CAN, GMSL2 (compra adicional), I2C e UART, funcionando como um poderoso cérebro robótico.
- **Configuração de software**: Pré-instalado com JetPack 6.2 e Linux BSP para implantação sem interrupções.
- **Aplicações e benefícios**: Ideal para desenvolvimento rápido de robôs autônomos, acelerando o tempo de lançamento no mercado com interfaces prontas para uso e frameworks de IA otimizados.
- **Ampla faixa de operação**: Opera de forma confiável em uma faixa de temperatura de -20°C a 60°C no modo 25W e de -20°C a 50°C no modo 40W

## Especificação

### Especificações da placa carrier

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
      <td>1x M.2 KEY M PCIe (SSD M.2 NVMe 2280 128G incluído)</td>
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
      <td>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Device Mode/Debug)</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td>1x 4 em 1 GMSL2 (mini fakra) (placa opcional)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (conector GH 4 pinos 1.25)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x DP1.4 (Host Type C)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART conector GH 4 pinos 1.25</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C conector GH 4 pinos 1.25</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td>1x conector de ventoinha 4 pinos (PWM 5V);<br />1x conector de ventoinha 4 pinos (PWM 12V)</td>
    </tr>
    <tr>
      <td>Porta de expansão</td>
      <td>1x cabeçalho de expansão de câmera (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 pinos;<br />1x soquete RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT e LED de usuário)</td>
    </tr>
    <tr>
      <td>Botão pinhole</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>Chave DIP</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Furo para antena</td>
      <td>5x furos para antena</td>
    </tr>
    <tr>
      <th rowSpan="1">Alimentação</th>
      <td colSpan="2">19-54V XT30(2+2) (cabo XT30 para conector DC 5525 incluído)</td>
    </tr>
    <tr>
      <th rowSpan="1">Versão do Jetpack</th>
      <td colSpan="2">JetPack 6 pré-instalado; JetPack 7.2 suportado</td>
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
      <td>Mesa, montagem em parede</td>
    </tr>
    <tr>
      <th rowSpan="1">Temperatura de operação</th>
      <td colSpan="2">-20℃~60℃ (modo 25W);<br />-20℃~55℃ (modo 40W);<br />-20℃~50℃ (modo MAXN);<br />(com dissipador de calor reComputer Robotics com ventoinha)</td>
    </tr>
    <tr>
      <th rowSpan="1">Garantia</th>
      <td>2 anos</td>
    </tr>
    <tr>
      <th rowSpan="1">Certificação</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## Visão geral de hardware

<div align="center">
  <img alt="Painel frontal do reComputer Robotics J401 com CAN0 e CAN1 destacados" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114110308_1.jpeg"/>  
</div>

<div align="center">
  <img alt="Vista traseira da placa carrier J401 identificando o módulo Orin, 2x XT30, cabeçalhos CAN, UART, IIC e os conectores de ventoinha PWM 5V/12V" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img alt="Vista superior da placa carrier J401 identificando USB, RTC, slots M.2 Key B/E/M, RJ45, cabeçalho de expansão de câmera e chave DIP" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## Gravar o sistema JetPack

### Módulo compatível

- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Pré-requisitos

- PC host com Ubuntu
- reComputer Robotics
- Módulo NVIDIA® Jetson Orin™ Nano/NX
- Cabo USB Type-C para transmissão de dados

:::info

Recomendamos que você use dispositivos host físicos com Ubuntu em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="4"> Versão do Ubuntu (computador host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Nota:</strong> Para o JetPack 7.2, o Ubuntu 24.04 é suportado apenas para gravação e instalação de componentes no dispositivo de destino. Use Ubuntu 20.04 ou 22.04 se você precisar de componentes de desenvolvimento no host.</p>

:::

### Preparar a imagem do Jetpack

Aqui, precisamos baixar a imagem do sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Link de download1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBwi3AQXJiaTZiPQaKocDSkAciLsok9znKGnAPczuZ_IfY?e=S2v5QV">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>c63d1219531245abecc7bbdcafc73d34<br />f75547454c7af85de40f08396a87e5ee</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB8NF028_DESZJ9WwSg2Q34AVCNXeZFkwJi8pbvCOcX4cI?e=Zahpfm">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>5d1f3cd28eb44ca60132c87ccce5acaf<br />806ee945b486df9061a34de73fbb582b</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAakIBc6l2wS7qKAy-1ZeHPAbTtT8XLYaIgITvBGy8vezo?e=mPygXS">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>e7f0c8e6b578d411f81122879f92c766<br />6adfada5ed493a4cc458dc169ca8c1b7</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBnWlTaU6nIQLDOcM2KRQM6AQ6A-ODC8DnWFKRSfW8vRmc?e=1AAVH8">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>b08cbdad8ab6e50222146d3175a9d262<br />7d499bf1d67cfaf69cc737b5bfa9e33a</td>
    </tr>
    <tr>
      <td rowSpan={4}>7.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCXU7mPG_OyR7z-VhF3E5j8AcmgsCPAZAuXSdKduZUKtHQ">Download</a></td>
      <td>6c499899d6c00a1661a48974d4dfc734<br />e9cbfefc06fc9c5c02ac7040dd1f2eb8</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxz11HG6naSak2wIytiRbXAaqxhsgIWFaVR9H9GfGWqus">Download</a></td>
      <td>23b68b43e630d166e5079f72509c71ea<br />0e13f76e372ddd06fe22df5494ad3f41</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBw84cKdsnuRYQLA1pkfg3mAY1x0HW0UMppZbnaDBaV6XI">Download</a></td>
      <td>2712fe373afb3dff8202cdd9288b266f<br />080b76837eb13161918efd80111d9035</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQA9PyE77GhDQLTpgDmAZ8kzAU2JC-fRK_GfqDy8ureIs1o?e=hYSAit">Download</a></td>
      <td>f09b3465e7de1032f625ae0f816a2f3c<br />fa2a470ee5fdd215840375529a8771db</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do JetPack é grande e pode levar cerca de 60 minutos para ser baixado. Aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

### Entrar no modo Force Recovery

:::info
Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.
:::

<details>

<summary> Passo a passo </summary>

**Passo 1.** Coloque a chave na posição RESET.

<div align="center">
  <img alt="Placa carrier J401 com a chave ajustada para o modo RESET e a porta USB Type-C de gravação marcada" width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Passo 2.** Ligue a placa carrier conectando o cabo de alimentação.

**Passo 3.** Conecte a placa ao PC host Ubuntu com um cabo USB Type-C de transmissão de dados.

**Passo 4.** No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

A imagem abaixo é para Orin Nano 8GB

<div align="center">
  <img alt="Saída do lsusb com o dispositivo NVIDIA Corp. APX destacado, confirmando que a placa está em modo de recuperação" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
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

<div align="center"><img alt="Log do terminal do script de gravação terminando com a mensagem de que a gravação foi concluída" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos.
:::

**Passo 3:** Conecte o Robotics J401 a um monitor usando o adaptador PD para HDMI para conectar a um monitor que suporte entrada HDMI, ou conecte diretamente a um monitor que suporte entrada PD usando o cabo PD, e conclua a configuração inicial:

<div align="center">
  <img alt="Assistente de configuração de primeira inicialização do JetPack 6 em um monitor conectado via HDMI" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

## Uso das interfaces de hardware

:::info
Se você quiser saber mais sobre as especificações detalhadas e o uso da interface de hardware, consulte [este wiki](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_robotics_j401_getting_started/#uso-das-interfaces-de-hardware).
:::

## FAQ

**O que vem pré-instalado no dispositivo?**
JetPack 6.2 com o Seeed Linux BSP vem pré-instalado, portanto a unidade inicializa na área de trabalho do Ubuntu sem necessidade de gravação. O JetPack 7.2 é suportado, mas precisa ser gravado a partir de um PC host.

**Quais variantes de módulo posso pedir?**
Orin Nano 4GB, Orin Nano 8GB, Orin NX 8GB e Orin NX 16GB. Unidades construídas com uma placa de expansão de câmera GMSL usam uma imagem JetPack 6.2 separada que inclui o driver GMSL.

**Qual Ubuntu host devo usar para gravar o JetPack 7.2?**
Ubuntu 20.04, 22.04 e 24.04 funcionam para gravação e componentes do lado do alvo. O Ubuntu 24.04 é limitado a essas duas etapas — use 20.04 ou 22.04 se o host também precisar de componentes de desenvolvimento.

**Preciso de uma etapa de recuperação separada antes da gravação?**
Sim. Mova a chave para o modo RESET, conecte o cabo de dados USB Type-C ao host e confirme que o módulo aparece no `lsusb` antes de executar o script de gravação.

**Onde estão os pinouts das interfaces e os comandos de teste?**
Eles estão na página de interfaces de hardware, vinculada em Recursos Relacionados. Ela abrange M.2 Key M/B/E, CAN e CAN FD, UART, I2C, USB, Ethernet e o conector de 40 pinos.

## Recursos relacionados

- [Uso das interfaces de hardware do reComputer Robotics J401](/pt-br/recomputer_robotics_j401_getting_started/)
- [Executar múltiplas câmeras GMSL no Jetson com a placa de expansão GMSL](/pt-br/multiple_cameras_with_jetson/)
- [Implementar comunicação EtherCAT no reComputer](/pt-br/recomputer_ethercat_communication/)
- [Página do produto reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)
- [Repositório wiki-documents e discussões](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## Recursos

- [Esquemático da placa carrier reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [Datasheet da placa carrier reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [Arquivo 3D do reComputer Robotics](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Documento mecânico - reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Catálogo de produtos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparação Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de sucesso Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
