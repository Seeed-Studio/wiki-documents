---
description: aprenda a como configurar CLPs Siemens usando o protocolo S7 e integrá-los com o Node-RED em um reComputer com Raspberry Pi para computação de borda eficiente. Descubra um guia passo a passo para configurar nós S7, criar fluxos e monitorar variáveis do CLP.
title: Conectando CLPs Siemens usando o protocolo S7 com o reComputer R1000
keywords:
  - Controlador de Borda
  - reComputer R1000
  - Node-Red
  - Siemens
  - S7
  - PLC
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_nodered_s7
last_update:
  date: 08/30/2024
  author: Kasun Thushara
createdAt: '2024-08-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_s7/
---

## Introdução

O **Protocolo S7** é um padrão de comunicação desenvolvido pela Siemens para sua família de controladores lógicos programáveis (CLPs). Ele é essencial para permitir uma troca de dados suave e confiável entre CLPs Siemens. Esse protocolo opera sobre Ethernet usando um método chamado ISO TCP, que é estruturado em blocos de dados conhecidos como Protocol Data Units (PDUs). Cada PDU é um segmento de informação cujo tamanho e estrutura são definidos quando a conexão é inicialmente estabelecida.

Neste artigo, vamos explorar como usar o Node-RED, uma popular ferramenta de desenvolvimento baseada em fluxos, em um reComputer com Raspberry Pi para interagir com CLPs Siemens usando o Protocolo S7. Essa configuração permite uma integração eficiente e flexível de sistemas de automação industrial com plataformas modernas de IoT.

## Configurando seu CLP para o Protocolo S7

Depois de projetar seu Ladder ou Diagrama de Blocos de Função, o próximo passo é configurar seu CLP Siemens para habilitar o protocolo S7. As etapas exatas podem variar dependendo do modelo de CLP que você está usando. Por exemplo, se você estiver usando um [Siemens LOGO PLC](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/logo.html), você fará essa configuração no software de programação LOGO Soft.

**Configuração de Rede**: Nas configurações de Ethernet, você precisará inserir o endereço IP do CLP, máscara de sub-rede e gateway padrão.

**Habilitar o Protocolo S7**: Há uma opção para permitir a comunicação S7 — certifique-se de marcar essa caixa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo1.PNG" /></center>

**Configurar a Comunicação S7**: Adicione uma conexão Ethernet configurada como um servidor S7. Você também precisará configurar o TSAP (Transport Service Access Point) do Cliente e do Servidor.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo2.PNG" /></center>

:::note
Se você estiver usando um modelo diferente de CLP Siemens, certifique-se de consultar a documentação relevante para as etapas específicas de configuração.
:::

## Configurando Nós S7 no Node-RED

Para integrar CLPs Siemens com o Node-RED, você precisará usar o nó `node-red-contrib-s7`. Siga estas etapas para configurá-lo:

### Instale o Nó S7

- Vá para a opção **Manage Palette** no Node-RED.
- Navegue até a aba **Install** e procure por `node-red-contrib-s7`.
- Instale o nó para adicionar capacidades S7 ao seu ambiente Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered_s7.PNG" /></center>

### Crie um Fluxo

- Arraste e solte o nó **S7 out** na sua área de trabalho, junto com dois nós **inject**.
- Conecte os nós inject ao nó S7 out para iniciar a comunicação com o CLP.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_out.PNG" /></center>

### Configure o Nó S7 Out

- Primeiro, configure o endpoint clicando no ícone `+ (plus)`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/editS7.PNG" /></center>

- Insira o `IP address` do seu CLP.
- Defina o Mode como `TSAP`.
- Insira o `Local TSAP` e `Remote TSAP` conforme configurados nas definições de servidor do seu CLP.
- Dê ao seu CLP um nome fácil de reconhecer para simplificar a identificação.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/LOGO_endpoint.PNG" /></center>

### Adicione Variáveis

- Defina cada variável com um **Name** e **Address**.
- Utilize os espaços de endereçamento apropriados correspondentes a diferentes tipos de blocos (por exemplo, bobinas, entradas). Você pode consultar a [Documentação de Endereços Siemens S7](https://www.winccoa.com/documentation/WinCCOA/3.18/en_US/S7_Driver/topics/s7_address.html) para mais detalhes.
- Certifique-se de que cada nome de variável corresponda corretamente ao seu tipo de bloco.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo_variables.PNG" /></center>

### Configure o Nó Inject

- Edite o payload do nó inject para definir um valor booleano. Use um nó inject para `true` e outro para `false`.

<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/true.PNG" /></center>
<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/false.PNG" /></center>

### Adicione o Nó S7 In para Monitoramento

- Arraste e solte o nó **S7 in** para monitorar os valores das variáveis.
- Você pode configurar esse nó para visualizar uma única variável ou todas as variáveis.
- Selecione o `PLC, Mode` e a `Variable` correspondentes que você deseja monitorar.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_in.PNG" /></center>

### Faça o Deploy do Seu Fluxo

- Quando tudo estiver configurado, faça o deploy do seu fluxo para iniciar a comunicação com o seu CLP Siemens.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/final.PNG" /></center>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
