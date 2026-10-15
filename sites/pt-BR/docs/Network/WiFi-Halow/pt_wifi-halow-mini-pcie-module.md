---
description: Introdução ao módulo Wi-Fi HaLow Mini PCIe
title: Introdução ao módulo Wi-Fi HaLow Mini PCIe
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /getting_started_with_wifi_halow_mini_pcie_module
sku: 109990565
last_update:
  date: 02/12/2025
  author: Citric
createdAt: '2025-02-13'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_wifi_halow_mini_pcie_module/
---

# Introdução ao módulo Wi-Fi HaLow Mini PCIe

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

Este guia o acompanhará na configuração e uso do módulo Wi-Fi HaLow Mini PCIe para construir um gateway Wi-Fi HaLow. O formato Mini PCIe facilita a integração da conectividade Wi-Fi HaLow em sistemas existentes e a criação de gateways IoT que podem conectar inúmeros dispositivos de baixo consumo de energia a longas distâncias.

## Visão geral

O módulo Wi-Fi HaLow Mini PCIe foi projetado para permitir conectividade sem fio de longo alcance para aplicações de IoT. Ele oferece:

- Interface Mini PCIe padrão para fácil integração
- Suporte ao protocolo Wi-Fi HaLow IEEE 802.11ah
- Alcance de até 1 km em linha de visada
- Baixo consumo de energia
- Capacidade de conectar milhares de dispositivos IoT

## O que é Wi-Fi HaLow?

Wi-Fi HaLow (IEEE 802.11ah) é uma tecnologia de rede sem fio projetada especificamente para aplicações de Internet das Coisas (IoT). Operando na faixa de frequência abaixo de 1 GHz, ela oferece várias vantagens importantes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### Principais benefícios

- **Alcance estendido**: Pode alcançar até 1 quilômetro em condições de linha de visada, superando em muito o Wi-Fi tradicional
- **Melhor penetração**: Sinais de frequência mais baixa podem penetrar paredes e obstáculos de forma mais eficaz
- **Eficiência energética**: Otimizado para dispositivos IoT alimentados por bateria
- **Alta escalabilidade**: Suporta milhares de dispositivos conectados por ponto de acesso
- **Suporte IP nativo**: Integração perfeita com redes IP existentes

### Aplicações

Wi-Fi HaLow é ideal para:

- Agricultura inteligente
- IoT industrial
- Cidades inteligentes
- Automação predial
- Monitoramento ambiental
- Rastreamento de ativos

### Por que isso é importante

Wi-Fi HaLow aborda desafios críticos em implantações de IoT:

1. **Lacuna de cobertura**: Preenche a lacuna entre o Wi-Fi de curto alcance e as redes celulares
2. **Vida útil da bateria**: Permite anos de operação com alimentação por bateria
3. **Custo de implantação**: Reduz os custos de infraestrutura em comparação com soluções celulares
4. **Padronização**: Baseado em padrões Wi-Fi conhecidos para facilitar a adoção
5. **Segurança**: Incorpora segurança corporativa WPA3

Ao combinar longo alcance, baixo consumo de energia e alta densidade de dispositivos, o Wi-Fi HaLow está posicionado para se tornar uma tecnologia chave para implantações de IoT em larga escala em vários setores.

## Visão geral do OpenWrt

O módulo Wi-Fi HaLow Mini PCIe roda em OpenWrt, um sistema operacional Linux altamente extensível, projetado principalmente para dispositivos embarcados como roteadores. Veja o que torna o OpenWrt uma excelente plataforma para gateways Wi-Fi HaLow:

### O que é OpenWrt?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrt é um sistema operacional baseado em Linux que oferece:

- Um sistema de arquivos totalmente gravável com gerenciamento de pacotes
- Alta modularidade, permitindo personalizar funcionalidades
- Suporte para uma ampla variedade de dispositivos embarcados
- Comunidade de desenvolvimento ativa e atualizações regulares
- Amplos recursos de rede

### Benefícios para implantações de Wi-Fi HaLow

OpenWrt fornece uma plataforma ideal para gateways Wi-Fi HaLow porque:

- **Estabilidade**: Base Linux extremamente estável para operação 24/7
- **Flexibilidade**: Personalização fácil para requisitos específicos de IoT
- **Desempenho**: Pilha de rede otimizada para tratamento eficiente de dados
- **Segurança**: Recursos de segurança em nível corporativo integrados
- **Comunidade**: Grande ecossistema de desenvolvedores e usuários

A combinação de OpenWrt e Wi-Fi HaLow cria uma base poderosa para construir redes IoT robustas que podem escalar desde pequenas implantações até grandes instalações industriais.

## Materiais necessários

Aqui estão os materiais necessários para executar este tutorial.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>Módulo WiFi HaLow Mini PCIe</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Além disso, você precisará dos seguintes itens:

- **[Adaptador Mini PCIe para PCIe](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** - Para conectar o módulo Wi-Fi HaLow Mini PCIe ao Raspberry Pi.
- **Dissipador de calor para Raspberry Pi** - Recomendado para gerenciamento térmico durante a operação contínua.
- **Cartão MicroSD (8GB ou maior)** - Para armazenar o firmware OpenWrt.
- **Leitor de cartão MicroSD** - Para ler o cartão MicroSD.
- **Cabo Ethernet** - Usado para conectar ao computador host e configurar o WiFi-Halow do Raspberry Pi.
- **Fonte de alimentação para Raspberry Pi**
- **Computador** - para gravar o firmware e configurar o WiFi-Halow do Raspberry Pi.
- **Antena** - Para estender o alcance do módulo Wi-Fi HaLow Mini PCIe. Aqui estão os modelos de antena recomendados e verificados.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Kit de antena interna de longo alcance</th>
            <th>Antena de longo alcance 2,6dBi</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Para conectar a antena ao módulo WiFi-Halow, você também pode precisar comprar o **Cabo de Antena SMA para I-PEX**.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Cabo de Antena SMA para I-PEX</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Se você estiver usando-o pela primeira vez, pode consultar o vídeo a seguir para a instalação da antena.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalando o WiFi Halow com OpenWrt no Raspberry Pi

Esta seção irá guiá-lo na configuração de um Raspberry Pi 4 como um gateway Wi-Fi HaLow usando uma imagem de firmware OpenWrt pré-compilada.

### Baixar firmware

Baixe a imagem OpenWrt pré-compilada com suporte a Wi-Fi HaLow em:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a imagem</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Gravar o firmware no cartão MicroSD

1. Baixe e instale o **[balenaEtcher](https://www.balena.io/etcher/)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. Insira o cartão MicroSD no computador.
3. Inicie o balenaEtcher.
4. Clique em "Flash from file" e selecione o firmware OpenWrt baixado.
5. Selecione o cartão MicroSD como destino.
6. Clique em "Flash!" e aguarde a conclusão do processo.

### Configuração e primeira inicialização

1. Insira o cartão MicroSD gravado no seu Raspberry Pi 4
2. Conecte um cabo Ethernet entre o computador e o Raspberry Pi
3. Ligue o Raspberry Pi
4. Aguarde aproximadamente 2–3 minutos para o sistema iniciar

### Acessando a interface do gateway

1. Configure a interface Ethernet do computador para usar DHCP ou defina um IP estático na faixa 10.42.0.x
2. Abra um navegador web
3. Acesse: http://10.42.0.1/
4. Você deverá ver a página de login da Morse Micro

:::note
As credenciais de login padrão são:

- Nome de usuário: root
- Não é necessário inserir senha

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se você não conseguir acessar a interface:

- Verifique a conexão Ethernet
- Verifique se o computador está recebendo um endereço IP
- Tente executar ping em 10.42.0.1 para verificar a conectividade

:::

## Configurar o Raspberry Pi como ponto de acesso

Faça login na interface Morse Micro. Na página de boas-vindas, siga o exemplo da imagem abaixo para configurar o seu país.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Atualmente, este dispositivo oferece suporte apenas aos EUA e não oferece suporte a outros países ou regiões.
:::

Depois de configurar o país, você pode definir o **Hostname** e a **Password** de acordo com a sua situação real. Mantenha essas informações em segurança, pois você precisará usar essa senha para acessar o dispositivo (ssh) mais tarde. Em seguida, clique no botão **Next** no canto inferior direito.

Selecione a opção **Access Point** na nova página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique no botão **Next** e, na nova página, defina as credenciais da rede Wi-Fi HaLow. Lembre-se delas, pois seus dispositivos clientes precisarão dessas informações para se conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

Clique no botão **Next**, depois selecione **Ethernet** na nova página e escolha **Bridge**. Configurar a rede dessa forma permite uma comunicação contínua entre dispositivos nas redes Ethernet e Wi‑Fi, proporcionando uma experiência de rede unificada para os dispositivos conectados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, aguarde a aplicação da configuração de rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

Quando a seguinte interface aparecer, você pode desconectar o Raspberry Pi do computador e conectar o cabo Ethernet entre o roteador e o Raspberry Pi. Em seguida, verifique o endereço IP do Raspberry Pi pela página de administração do roteador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

No meu dispositivo, o endereço IP é: <strong>192.168.1.168</strong>. Inserindo esse endereço no navegador, você poderá acessar a página de backend do gateway Wi‑Fi HaLow.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [UG MM6108 Eval Kit User Guide 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [WiFi-Halow Mini PCIe Module SCH PDF](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [WiFi-Halow Mini PCIe Module KiCAD PCB File](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
