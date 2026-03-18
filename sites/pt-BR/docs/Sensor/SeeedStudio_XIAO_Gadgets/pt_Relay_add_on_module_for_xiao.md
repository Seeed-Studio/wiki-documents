---
title: Módulo Relay Adicional para XIAO
description: O Relay Add On Module For XIAO é um módulo inteligente da Seeed Studio projetado para controlar aparelhos alimentados por CA.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.webp
slug: /relay_add_on_module_for_xiao
sku: 114993555
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 3
last_update:
  author: Allen
  date: 12/02/2024
createdAt: '2024-12-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/relay_add_on_module_for_xiao/
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.jpg" /></div>

## Visão Geral

O Relay Add On Module For XIAO é um módulo inteligente da Seeed Studio projetado para controlar aparelhos alimentados por CA. Ele é caracterizado pela combinação com o XIAO, acessando o Home Assistant por meio do ESPHome para controlar uma variedade de aparelhos, deixando sua casa mais inteligente!

### Principais Recursos e Especificações

| Parâmetro               | Valor           |
|-------------------------|----------------|
| Pino do Relay           | D1            |
| Tensão de Operação      | 5V             |
| Corrente de Operação    | 1A           |
| Vida Útil do Relay      | 100.000 ciclos   |
| Tensão Máx. de Comutação | 250VAC       |
| Corrente Máx. de Comutação | 10A             |
| Durabilidade elétrica    | 1,5x10^4 OPS (10A 250VAC, carga resistiva, a 85°C, 1s ligado 9s desligado)|

Para mais informações, [clique aqui para baixar o arquivo PDF](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.pdf).

## Primeiros Passos

Se você quiser seguir este tutorial até o fim, precisará preparar o seguinte. Além do XIAO ESP32 C3, você também pode usar outros produtos da série ESP32, como o XIAO ESP32 C6 e o XIAO ESP32 S3. O objetivo final deste projeto é controlar o módulo relay no Home Assistant.

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
     <th>Relay Module</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
     <td align="center"><div align="center"><img width ="260" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/13.jpg"/></div></td>
 </tr>
 <tr>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Relay-add-on-module-for-XIAO-p-6310.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
 </tr>
</table>

O conteúdo deste tutorial irá, de forma geral, passar pelas etapas a seguir.

1. [Selecione seu ambiente Home Assistant](#selecione-seu-ambiente-home-assistant)
2. Instalar e configurar ESPHome no Home Assistant
3. [Configurar a conexão entre o XIAO ESP32C3 e o ESPHome](#configurar-a-conexão-entre-o-xiao-esp32c3-e-o-esphome)
4. [Adicionar o Relay Module ao Dashboard do Home Assistant](#adicionar-o-relay-module-ao-dashboard-do-home-assistant)

### Firmware de Gravação Rápida

Nós criamos uma página de firmware de gravação rápida para o XIAO. Você pode usar diretamente o site abaixo para gravar o firmware do Relay no XIAO que você possui, sem programação. O site detectará automaticamente o chip do XIAO ao qual você está conectando, sem precisar escolher, e gravará diretamente a versão de firmware do XIAO que corresponde ao chip ESP32.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Firmware Flasher 🖱️</font></span></strong>
    </a>
</div>

## Selecione seu ambiente Home Assistant

Nesta rotina, não vamos detalhar como instalar o ambiente do Home Assistant, vamos supor que você já tenha um dispositivo Home Assistant funcionando.

Se você deseja aprender como instalar o Home Assistant, pode consultar o [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos fortemente que você instale o Home Assistant usando um dispositivo x86, pois esta é a maneira mais amigável para você instalar o Home Assistant com Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

De acordo com a tabela acima, é mais apropriado instalar o **Home Assistant OS** e o **Home Assistant Supervised**, o que tirará muito trabalho das suas mãos. Se você estiver executando o Home Assistant em Docker com OpenWRT (por exemplo, usando o LinkStar H68K), não se preocupe, também forneceremos uma referência detalhada de como fazer isso.

Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte-os.

- [Primeiros Passos com Home Assistant no ODYSSEY-X86](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant/)
- [Primeiros Passos com Home Assistant no reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/)
- [Primeiros Passos com Home Assistant no LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/)

## Etapa 1. Instalar ESPHome

Se você tiver o Home Assistant OS instalado, ele possui uma Add-on Store, o que torna muito mais fácil instalar o ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

Na Add-on Store, você pode pesquisar e instalar o ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

## Etapa 2. Enviar firmware para o XIAO ESP32C3

Nós criamos uma página de firmware de gravação rápida para o XIAO. Você pode usar diretamente o site abaixo para gravar o firmware do Relay no XIAO que você possui, sem programação. O site detectará automaticamente o chip do XIAO ao qual você está conectando, sem precisar escolher, e gravará diretamente a versão de firmware do XIAO que corresponde ao chip ESP32.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Firmware Flasher 🖱️</font></span></strong>
    </a>
</div>

## Etapa 3. Adicionar o Relay Module ao Dashboard do Home Assistant

Depois de gravar o firmware, você verá que há uma rede sem fio chamada **seedstudio-relay-module**. Conecte-se a essa rede e digite `192.168.4.1` no seu navegador para configurar a rede do seu dispositivo. Use a mesma rede do seu Home Assistant.

Vá em **setting**, e **Devices & services**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/5.png" /></div>

Na área **Discovered**, você encontrará o XIAO, clique em **CONGFIUGE**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/2.png" /></div>

Selecione uma área ou deixe o padrão e clique em **FINISH**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/4.png" /></div>

Depois disso, clique em **Devices**, encontre **xiao_esp32c3** (o nome que você deu antes) e clique nele

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/6.png" /></div>

Aqui está a página do dispositivo ESPHome, você pode adicionar algumas automações e assim por diante. Agora precisamos adicioná-lo ao dashboard, então clique nele.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/7.png" /></div>

Clique em **NEXT** e clique em **ADD TO DASHBOARD**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/8.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/9.png" /></div>

Agora, clique em **Overview** no lado esquerdo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/10.png" /></div>

Você verá o controle do Relay aparecer aqui

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/11.png" /></div>

### Etapa 7. Usar o relay module para controlar um abajur

Podemos clicar no interruptor para ver se o relay está funcionando bem. Se você vir a pequena luz verde na placa quando clicar no interruptor, significa que está funcionando bem!

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<br></br>
Eu reformei meu pequeno abajur com este relay module. Cortei o fio positivo e conectei cada extremidade em uma das duas portas do relay module. Você pode ver o efeito no vídeo abaixo. Este relay module não consegue alimentar o XIAO, portanto lembre-se de usar uma bateria ou cabo USB para alimentar o XIAO.

:::warning
Por favor, preste atenção à segurança elétrica e não toque nos relés enquanto estiverem energizados.
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/light.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

Parabéns por concluir com sucesso sua jornada com o Relay Module For XIAO! Vamos fazer reformas ainda mais interessantes!

## Recursos

[PDF] **[Relay Add On Module For XIAO Relay_SCH](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_SCH.pdf)**

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
