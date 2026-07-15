---
description: MicroPython para XIAO ESP32S3 Sense
title: Projeto MicroPython com XIAO ESP32S3
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_ESP32S3_Micropython
last_update:
  date: 08/30/2023
  author: Hendra
createdAt: '2023-08-30'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO_ESP32S3_Micropython/
---

# Micropython para XIAO ESP32S3 Sense(Camera, Wi-Fi)

MicroPython é uma implementação enxuta e eficiente da linguagem de programação Python 3, que inclui um pequeno subconjunto da biblioteca padrão do Python e é otimizada para rodar em microcontroladores e em ambientes com recursos limitados.

Desde o seu início em 2014, o micropython já oferece suporte a muitos microcontroladores, incluindo o ESP32S3, que é o cérebro principal na placa de desenvolvimento Xiao ESP32S3 Sense.

Nesta página vou orientar como usar os recursos do Xiao ESP32S3 Sense utilizando a sintaxe simples e fácil do micropython

## Preparação de Hardware

Estou usando aqui a placa Seeed Studio XIAO ESPS3 Sense.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Preparação de Software

Neste guia utilizarei **Windows 10** juntamente com o Thonny IDE e o esptool. Para usar o esptool, certifique-se de instalar o ambiente Python 3 no seu sistema Windows. Antes de começar, baixe o firmware e instale o Thonny

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
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 Muito Obrigado

<strong><font color={'8DC215'} size={"3"}>O firmware projetado para a placa XIAO ESP32S3 Sense, utilizado neste wiki, foi feito por nosso amigo: shariltumin, a quem somos muito gratos.</font></strong>

## Primeiros Passos

O firmware é projetado apenas para programação MicroPython no XIAO ESP32S3. Primeiro vamos gravar o firmware e depois usar o exemplo nele.

### Etapa 1. Gravando o firmware

Localize o endereço da porta USB para serial abrindo o Gerenciador de Dispositivos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extraia o arquivo zip baixado e navegue até a pasta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

clique na caixa de caminho e depois digite "CMD" e pressione Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

Você será direcionado para o terminal cmd.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

Instale o esptool usando o comando pip (certifique-se de que o Python 3 já está instalado)

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

Apague a memória flash no Xiao ESP32S3 usando este comando

```cpp
esptool.py --port COMXX erase_flash
```

Agora prossiga para instalar o firmware micropython usando este comando

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
substitua o COMXX pelo número da porta COM no seu PC
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

### Etapa 2. Enviar o código de exemplo

Agora vamos enviar o código de exemplo para a memória flash interna do Xiao ESP32S3 Sense.

Para esta parte estou usando o Thonny IDE; primeiro eu configuro a porta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

depois, no menu View, marque a opção de arquivos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

Navegue até a pasta onde o código de exemplo foi extraído e então envie os arquivos clicando com o botão direito no arquivo e escolhendo a opção como na figura abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

depois que todo o código de exemplo for enviado para a placa xiao esp32s3, altere as credenciais de Wi‑Fi tanto no arquivo streamin_server.py quanto no arquivo Wifi.py de acordo com a configuração da sua rede Wi‑Fi local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>

### Etapa 3. Testando o exemplo de streaming

Antes de testar o streaming, certifique-se de instalar a biblioteca Python opencv usando pip

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

depois que a biblioteca Python opencv for instalada com sucesso, volto ao Thonny, executo o streamin_server.py e copio o endereço IP da placa xiao ESP32S3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

depois volto para a pasta zip extraída e abro o steamin_client.py usando o IDLE do Python e altero a parte do endereço IP para ser a mesma da placa xiao ESP32S3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

Em seguida, tente executar o arquivo e você deverá ver uma nova janela exibindo a imagem de streaming da placa Xiao ESP32S3 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
Ao iniciar o exemplo de streaming, a placa Xiao ESP32S3 Sense pode esquentar bastante.
:::

## E Mais

Usando estes exemplos, você pode fazer um projeto de CCTV rápido e simples e, como o Xiao ESP32S3 Sense é pequeno em tamanho, o projeto pode ser bastante discreto

## Solução de Problemas

Se a câmera não for inicializada com sucesso (exibir um quadro e depois travar) ou não conseguir reconectar ao Wi‑Fi, tente desconectar a placa e reiniciar o Thonny IDE.

## ✨ Projeto de Colaborador

- Este projeto é suportado pelo [Projeto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Agradecemos aos [esforços de Hendra e shariltumin](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545), e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
