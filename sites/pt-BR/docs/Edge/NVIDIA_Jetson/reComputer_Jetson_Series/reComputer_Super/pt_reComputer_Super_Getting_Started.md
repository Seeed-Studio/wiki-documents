---
description: Primeiros Passos para reComputer Super
title: Primeiros Passos com reComputer Super
keywords:
  - reComputer Super
  - reComputer Super Getting Started
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_getting_started
sku: E2025032601,114110314,114110312,114110313,114110311
last_update:
  date: 06/19/2025
  author: Yaohui
createdAt: '2025-03-26'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeiros Passos com reComputer Super

A Série reComputer Super turbina o reComputer Classic, oferecendo até 1,7x mais desempenho de IA com 157 TOPS. Ela inclui modelos com Jetson Orin Nano (11410311, 11410312) e Jetson Orin NX (11410313, 11410314).
Projetada tanto para desenvolvimento quanto para produção, vem com uma rica variedade de interfaces, incluindo M.2 Key E/M, RJ45 Ethernet dupla, Mini-PCIe, 4xUSB 3.2, HDMI 2.1, 4xCSI e CAN. Com Jetpack 6.2 e Linux OS BSP pré-instalados, possibilita entrada imediata no mercado.
Ela também oferece suporte a uma ampla gama de frameworks de LLM e IA Física, como NVIDIA, Hugging Face, ONNX, PyTorch e ROS2/1 na borda de forma contínua, chegando até a combinar essas capacidades multimodais com aplicações de robótica para enriquecer o desenvolvimento de IA Física.

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Principais Recursos  

### 🚀 ​**Impulso de Desempenho**  

- ​**Aumento de 1,7x no desempenho de IA** em relação ao reComputer Classic, oferecendo ​**157 TOPS**  
- Alimentado por ​**Jetson Orin Nano** (Modelos: 11410311, 11410312) e ​**Jetson Orin NX** (Modelos: 11410313, 11410314)  

### 🔌 ​**Conectividade e Interfaces Ricas**  

- ​**M.2 Key E/M** + ​**Mini-PCIe** para expansibilidade  
- ​**RJ45 Ethernet dupla** para rede em alta velocidade  
- ​**4x USB 3.2**, ​**HDMI 2.1**, ​**4x CSI** (Camera Serial Interface)  
- Suporte a ​**barramento CAN** para aplicações industriais/robótica  

### 🛠️ ​**Pronto para Desenvolvimento e Produção**  

- ​**Jetpack 6.2** e ​**Linux OS BSP** pré-instalados para implantação imediata  
- Integração de IA de borda perfeita com frameworks:  
  - ​**NVIDIA**, ​**Hugging Face**, ​**ONNX**, ​**PyTorch**  
  - ​**ROS2/1** para aplicações de robótica  
- Suporta desenvolvimento de ​**IA multimodal** e ​**IA Física**  

### 🤖 ​**Otimizado para IA de Borda e Robótica**  

- Combina capacidades de ​**LLM (Large Language Model)** com ​**IA Física** na borda  
- Ideal para robótica, automação industrial e inferência de IA em tempo real  
- Acelera a ​**entrada no mercado** com uma pilha de software pré-configurada  

:::tip

### ⚠️ Diretrizes de Energia e Acessórios  

#### 1. ​**Adaptador de Energia**  

- ​**Jetson Orin Nano**: 12V 5A (conector barril 5525)  
- ​**Jetson Orin NX**: 19V 4.74A (conector barril 5525)  
- Sempre use ​**adaptadores oficiais** e atenda aos requisitos de energia.  

#### 2. ​**Cabo de Alimentação AC**  

- Use cabos tipo trevo ​**específicos para a região**.  

#### 3. ​**Acessórios**  

- Somente acessórios ​**oficialmente recomendados** (por exemplo, câmeras, módulos sem fio) para desempenho e compatibilidade ideais.

:::

## Especificações

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin Super System on Module</th>
    </tr>
    <tr>
      <th>Especificações</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>Módulo</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>Desempenho de IA</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>GPU NVIDIA Ampere de 512 núcleos com 16 Tensor Cores</td>
      <td colSpan={3}>GPU NVIDIA Ampere de 1024 núcleos com 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>CPU Arm® Cortex®-A78AE v8.2 64 bits de 6 núcleos<br />1,5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 64 bits de 6 núcleos 1,5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 64 bits de 8 núcleos 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frequência Máxima da CPU</td>
      <td colSpan={2}>1,7 GHz (MAXN_SUPER)</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102,4GB/s</td>
      <td>16GB 128-bit LPDDR5 102,4GB/s</td>
    </tr>
    <tr>
      <td>Acelerador DL</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Codificador de Vídeo</td>
      <td colSpan={2}>1080p30 suportado por 1–2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Vídeo</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>Até 4 câmeras<br />(8 via canais virtuais)<br />8 pistas MIPI CSI-2<br />D-PHY 2.1 (até 20Gbps)</td>
    </tr>
    <tr>
      <td>Mecânico</td>
      <td colSpan={5}>69,6mm x 45mm<br />Conector SO-DIMM de 260 pinos</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa Carrier</th>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td colSpan={4}>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD 128G incluído)</td>
    </tr>
    <tr>
      <td rowSpan={3}>Rede</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe para módulo LTE 4G</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td colSpan={3}>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <td rowSpan={11}>E/S</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5Gbps); <br />1x USB 2.0 Type-C (Modo Dispositivo/Depuração);</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td colSpan={3}>4x mipi CSI(2-lane 15-Pin)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN(Conector de 4 pinos)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan={3}>1x Conector de Ventoinha de 4 pinos (5V PWM); <br />1x Conector de Ventoinha de 4 pinos (12V PWM);</td>
    </tr>
    <tr>
      <td>Porta de Extensão</td>
      <td colSpan={3}>1x conector de extensão de 40 pinos;<br />1x conector de controle e UART de 12 pinos;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2 pinos;<br />1x Soquete RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(PWR e ACT)</td>
    </tr>
    <tr>
      <td>Botão Pinhole</td>
      <td colSpan={3}>1x PWR;<br />1x RESET;</td>
    </tr>
    <tr>
      <td>Chave DIP</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>Furo para Antena</td>
      <td colSpan={3}>4x Furo para Antena</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td colSpan={4}>Conector DC Barril 5525 12–19V </td>
    </tr>
    <tr>
      <td>Versão do Jetpack</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>Dimensões Mecânicas</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td colSpan={4}>Mesa, Montagem em parede</td>
    </tr>
    <tr>
      <td>Temperatura de Operação</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Garantia</td>
      <td colSpan={4}>2 Anos</td>
    </tr>
    <tr>
      <td>Certificação</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, Teste de Vibração(GB/T 2423)</td>
    </tr>
  </tbody>
</table>
</div>

## Gravar o Sistema Operacional JetPack

### Módulo Suportado

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Pré-requisitos

- PC host com Ubuntu
- reComputer Super
- Cabo de transmissão de dados USB Tipo-C

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
      <th>Link para Download1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC_1-Pv5_FDR4n5j9gQV5KQAZ_mvUQAiacz_5QTE0xdeQ8?e=LkQBPH">Download</a></td>
      <td>7a1f2085f50d77e5d86d3f01ccdc1255<br />c90a7c7d22a6ab7e4c4e3263e3148670</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCkqeSMa1GUQ57Y0K-pz0GtAYgobLanXDHP_d-rJIAzkcY?e=VqEnca">Baixar</a></td>
      <td>d26cbf4e16b9d5879e4b737754f65bb0<br />ea485b98760a1aa0657e07054efd8877</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAuSOue4x97QKJGLUkBabdzAamlCy6twJd68P69GlaTzws?e=hw82Sw">Baixar</a></td>
      <td>55a559dc6736650d45c2d787265c7e2c<br />36cd2d7f233ae58b00364aec7d82455c</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAdI1ka4kNkRb8wipNloxXOAUAyCwTYci47z_eLpjvh1iQ?e=9YQ5nm">Baixar</a></td>
      <td>51f816d57dedd6e2305acd0ae8e0ffdc<br />19aec7319e351b7a70489f7eab8d69c6</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem Jetpack6 tem aproximadamente **14,1GB** de tamanho e deve levar cerca de 60 minutos para ser baixado. Aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

### Entrar no Modo de Recuperação Forçada

:::info
Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que a placa esteja no modo de recuperação forçada.
:::

<details>

<summary> Passo a passo </summary>

**Passo 1.** Coloque a chave na posição RESET.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**Passo 2.** Ligue o reComputer Super conectando o cabo de alimentação.

**Passo 3.** Conecte o Super ao PC host Ubuntu com um cabo USB Tipo-C de transmissão de dados.

**Passo 4.** No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está no modo de recuperação forçada.

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
# For example: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2026-02-05.tar.gz
```

**Passo 2:** Execute o seguinte comando para gravar o sistema jetpack no SSD NVMe:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos.
:::

**Passo 3:** Conecte o monitor usando um cabo HDMI e conclua a configuração de inicialização do sistema do reComputer Super:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::


## Recursos

[Folha de Dados da Placa Carrier reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
[Esquemático](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
[Arquivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
[Documento Mecânico - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
[Documento Mecânico - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)
[Casos de Sucesso Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
[Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Solicitar orçamento personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
