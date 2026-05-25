---
description: MicroPython para XIAO ESP32C6
title: XIAO ESP32C6 com MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_micropython
last_update:
  date: 08/30/2023
  author: Hendra
createdAt: '2023-08-30'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_micropython/
---

# Micropython para XIAO ESP32C6

MicroPython é uma implementação enxuta e eficiente da linguagem de programação Python 3 que inclui um pequeno subconjunto da biblioteca padrão do Python e é otimizada para rodar em microcontroladores e em ambientes com recursos limitados.

Nesta página, iremos orientar como usar os recursos do XIAO ESP32C6 utilizando a sintaxe simples e fácil do micropython.

## Preparação de Hardware

Estou usando aqui a placa Seeed Studio XIAO ESP32C6.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991254-seeedxiao-esp32c6-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Preparação de Software

Neste guia estarei usando **Windows 10** juntamente com o Thonny IDE e o esptool. Para usar o esptool, certifique-se de instalar o ambiente Python 3 no seu sistema Windows. Antes de começar, certifique-se de baixar o firmware e instalar o Thonny.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Firmware e Código de Exemplo</th>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/ESP32C6-MicroPy/XIAO_ESP32C6_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 Agradecimentos Especiais

<strong><font color={'8DC215'} size={"3"}>O firmware projetado para a placa XIAO ESP32C6, utilizado neste wiki, foi feito pelo nosso amigo: Zhishuo Song, a quem somos realmente muito gratos.</font></strong>

## Primeiros Passos

O firmware é projetado apenas para programação em MicroPython no XIAO ESP32C6. Primeiro iremos gravar o firmware e depois usar o exemplo incluído.

### Etapa 1. Gravando o firmware

Localize o endereço da porta USB para serial abrindo o Gerenciador de Dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extraia o arquivo zip baixado e navegue até a pasta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

clique na caixa de caminho e digite "CMD" e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

Você será direcionado para o terminal cmd.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

Instale o esptool usando o comando pip (certifique-se de que o Python 3 já está instalado)

```bash
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

:::caution Coloque a placa em modo Bootloader
Antes de gravar, você **deve** colocar o XIAO ESP32C6 em modo bootloader (download). Para isso:
1. Pressione e **segure** o botão **BOOT**.
2. Enquanto mantém o BOOT pressionado, pressione e solte o botão **RESET**.
3. Solte o botão **BOOT**.

Se a placa não estiver em modo bootloader, a gravação falhará com um erro de **"Write timeout"** e pode danificar o módulo.
:::

Apague a memória flash no XIAO ESP32C6 usando este comando

```bash
esptool --port COMXX --chip esp32c6 erase-flash
```

Agora prossiga para instalar o firmware micropython usando este comando

```bash
esptool --port COMXX --baud 460800 --before default-reset --after hard-reset --chip esp32c6 write-flash --flash-mode dio --flash-size detect --flash-freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
Altere o COMXX para o número da porta COM no seu PC. Se a gravação falhar com um erro de timeout, tente reduzir a taxa de transmissão para `115200`.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### Etapa 2. Enviar o código de exemplo

Agora iremos enviar o código de exemplo para a memória flash interna do XIAO ESP32C6.

Para esta parte estou usando o Thonny IDE; primeiro configuro a porta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

execute o programa de exemplo `blinker.py`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## NTP obtém a hora atual via Wi-Fi

### passo1: Abra o arquivo `wifi_Ntp.py` no Thonny

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### passo2: altere o SSID e a senha do seu roteador Wi-Fi na linha 8

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### passo3: execute o código

Ao executar o programa, você pode ver na janela do shell que o XIAO está conectado ao Wi-Fi especificado e obtém a hora de rede NTP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## Solução de Problemas

- **Erro "Write timeout" ou exceção serial**: Certifique-se de que a placa está em **modo bootloader** antes de gravar. Segure o botão **BOOT**, pressione e solte **RESET**, depois solte **BOOT**. Você também deve tentar reduzir a taxa de transmissão (por exemplo, use `--baud 115200` em vez de `460800`).
- **Comando não encontrado (`esptool.py`)**: Use `esptool` (sem `.py`) quando instalado via `pip install esptool`. Em alguns sistemas, pode ser necessário usar `python -m esptool` em vez disso.
- **Módulo brickado**: Se o módulo parecer brickado, tente entrar em modo bootloader e apagar a flash com `esptool --port COMXX --chip esp32c6 erase-flash`, depois grave o firmware novamente.

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Agradecimentos aos [esforços de Hendra e shariltumin](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117) e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

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
