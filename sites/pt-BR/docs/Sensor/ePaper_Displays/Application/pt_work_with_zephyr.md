---
description: Use o Zephyr RTOS com dispositivos ePaper reTerminal E Series da Seeed Studio, com links oficiais da documentação de placas Zephyr para reTerminal E1001, E1002 e E1003.
title: Trabalhar com Zephyr
keywords:
  - Display ePaper
  - Zephyr
  - RTOS
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /epaper_work_with_zephyr
sidebar_position: 11
last_update:
  date: 06/30/2026
  author: Citric
createdAt: '2026-06-30'
url: https://wiki.seeedstudio.com/pt-br/epaper_work_with_zephyr/
updatedAt: '2026-06-30'
---

# Trabalhar com Zephyr

[Zephyr](https://www.zephyrproject.org/) é um sistema operacional de tempo real de código aberto para dispositivos embarcados. Ele é útil quando você quer uma pilha de firmware orientada à produção com um sistema de build, descrição de hardware baseada em device tree, serviços de kernel, drivers e definições de placas upstream.

O Zephyr já inclui documentação oficial de placas para **reTerminal E1001**, **reTerminal E1002** e **reTerminal E1003**. Esta página da Wiki é um ponto de entrada para ePaper da Seeed: use-a para escolher o alvo de placa correto e, em seguida, siga a documentação oficial do Zephyr para instalação, build, gravação de firmware (flashing) e depuração.

## Quando usar o Zephyr

Use o Zephyr quando seu projeto precisar de:

- um fluxo de trabalho estruturado de desenvolvimento com RTOS;
- suporte de placa upstream e firmware sustentável a longo prazo;
- recursos de kernel como threads, temporizadores, filas e drivers de dispositivo;
- um fluxo de trabalho consistente de build e gravação em várias placas embarcadas;
- acesso direto aos periféricos do ESP32-S3 por meio das APIs do Zephyr.

Se o seu objetivo é um dashboard para Home Assistant, design de página sem código ou uma API de desenho ao estilo Arduino, comece pela página de aplicação correspondente em [Visão geral dos displays ePaper da Seeed](/pt-br/seeed_epaper_displays). O Zephyr é mais adequado para desenvolvedores que desejam criar firmware personalizado no nível de RTOS.

## Dispositivos compatíveis

Prepare um dos seguintes dispositivos reTerminal E Series antes de iniciar o desenvolvimento com Zephyr.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></a></div></td>
    </tr>
    <tr>
      <td align="center">ePaper monocromático de 7,5"<br/>800 x 480</td>
      <td align="center">ePaper colorido de 7,3"<br/>800 x 480</td>
      <td align="center">ePaper monocromático de 10,3"<br/>1404 x 1872, toque</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
    <tr>
      <td align="center"><code>reterminal_e1001/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1002/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1003/esp32s3/procpu</code></td>
    </tr>
  </table>
</div>

Os exemplos de comandos de início rápido abaixo usam o alvo `procpu`. Para detalhes de dual-core, tabelas de recursos de hardware, runners compatíveis e opções de depuração, use a página oficial da placa para o seu dispositivo.

## Caminho de leitura recomendado

Siga este caminho ao configurar o Zephyr pela primeira vez:

1. Abra o [Guia de Introdução ao Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) e instale a toolchain do Zephyr, dependências Python, west e SDK para o seu sistema operacional.
2. Abra a página oficial da placa para o seu dispositivo na seção [Documentação oficial do Zephyr](#documentação-oficial-do-zephyr).
3. Leia a visão geral da página da placa para confirmar o tamanho do display, SoC, sensores onboard, teclas, LEDs, RTC e hardware relacionado à bateria descritos pelo Zephyr.
4. Use a seção **Supported Features** da página da placa para verificar quais periféricos já estão descritos no Zephyr.
5. Use a seção **Programming and Debugging** da página da placa para comandos de build, gravação, reset e depuração.

:::tip
Mantenha a página oficial da placa Zephyr aberta durante o desenvolvimento. Ela é a fonte de verdade para os alvos de placa atuais, recursos compatíveis, runners e opções de build.
:::

## Padrão de comandos rápidos

Depois que o seu workspace do Zephyr estiver pronto, faça o build do exemplo `hello_world` com o alvo de placa que corresponde ao seu dispositivo.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Dispositivo</th>
      <th>Comando de build</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>west build -b reterminal_e1001/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>west build -b reterminal_e1002/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>west build -b reterminal_e1003/esp32s3/procpu samples/hello_world</code></td>
    </tr>
  </table>
</div>

Em seguida, grave a imagem gerada:

```shell
west flash
```

Se a placa permanecer em modo de download após a gravação, use a opção de reset documentada pelo Zephyr:

```shell
west flash --reset-type watchdog-reset
```

Para MCUboot, sysbuild, gravação mais rápida, depuração com OpenOCD e opções avançadas de runner, siga a seção **Programming and Debugging** na página oficial da placa para o seu dispositivo.

## Documentação oficial do Zephyr

Use os links abaixo como referências principais para configuração específica do Zephyr e detalhes das placas:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Tópico</th>
      <th>Use isto quando você precisar</th>
      <th>Link</th>
    </tr>
    <tr>
      <td>Introdução ao Zephyr</td>
      <td>Instalar o Zephyr, west, dependências Python e o Zephyr SDK.</td>
      <td><a href="https://docs.zephyrproject.org/latest/develop/getting_started/index.html" target="_blank" rel="noopener noreferrer">Abrir Getting Started</a></td>
    </tr>
    <tr>
      <td>Placas Zephyr</td>
      <td>Pesquisar todas as placas compatíveis com Zephyr e confirmar os nomes de alvos atuais.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/index.html" target="_blank" rel="noopener noreferrer">Abrir índice de Boards</a></td>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td>Fazer build, gravar e depurar aplicações Zephyr para o reTerminal E1001.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1001/doc/index.html" target="_blank" rel="noopener noreferrer">Abrir docs do E1001</a></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td>Fazer build, gravar e depurar aplicações Zephyr para o reTerminal E1002.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1002/doc/index.html" target="_blank" rel="noopener noreferrer">Abrir docs do E1002</a></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td>Fazer build, gravar e depurar aplicações Zephyr para o reTerminal E1003.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1003/doc/index.html" target="_blank" rel="noopener noreferrer">Abrir docs do E1003</a></td>
    </tr>
  </table>
</div>

## Páginas relacionadas da Wiki da Seeed

- [Visão geral dos displays ePaper da Seeed](/pt-br/seeed_epaper_displays)
- [Introdução ao reTerminal E1001](/pt-br/getting_started_with_reterminal_e1001)
- [Introdução ao reTerminal E1002](/pt-br/getting_started_with_reterminal_e1002)
- [Introdução ao reTerminal E1003](/pt-br/getting_started_with_reterminal_e1003)

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
