---
description: Apresenta como baixar o repositório open source do Watcher e configurar um ambiente IDF.
title: Configurar o ambiente de desenvolvimento do Watcher
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.webp
slug: /build_watcher_development_environment
sidebar_position: 1
last_update:
  date: 11/5/2024
  author: Citric
createdAt: '2024-11-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/build_watcher_development_environment/
---

# Configurar o ambiente de desenvolvimento do Watcher

## Instalação do ESP-IDF

Consulte o [guia de instalação oficial](https://docs.espressif.com/projects/esp-idf/en/v5.2.1/esp32s3/get-started/index.html) da espressif.

Observe que o exemplo `factory_fw` é baseado exatamente na versão v5.2.1 do IDF.

```
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
```

Recomendamos fortemente que você crie o alias `get_idf` para a inicialização do ambiente IDF se estiver usando macOS ou Linux.

## Primeiro build

### Obter o ambiente IDF

```
get_idf
idf.py
```

Se você instalou o IDF corretamente, após o comando `idf.py` você verá a saída de ajuda da ferramenta idf.py.

```
$ idf.py
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build system target will be
  made. Selected target: esp32s3

...

```

Defina o chip alvo como `esp32s3`.

```
idf.py set-target esp32s3
```

### Fazer o build do projeto

```
idf.py build
```

O código para o firmware de fábrica mais recente está em `example/factory_firmware`.

```
cd example/factory_firmware
idf.py build
```

### Gravação (Flash)

Conecte o SenseCAP Watcher ao seu PC ou notebook com um **cabo de dados USB**.

**ATENÇÃO!!! **

**APENAS a porta USB na parte de baixo (na lateral) possui transmissão de dados**

**A porta USB na parte de trás fornece apenas alimentação para o dispositivo.**

Quando você conecta o Watcher com um cabo de dados adequado e na porta USB C correta, verá 1 dispositivo USB no seu PC e também 2 dispositivos UART. Eles são a UART conectada ao ESP32S3 e a UART conectada ao SoC Himax. Não há um padrão observado sobre qual SoC usará qual UART. Portanto, tente o seguinte comando com cada dispositivo UART até ver os logs sendo impressos. 

```
idf.py --port /dev/ttyACM0 monitor
```

Substitua `/dev/ttyACM0` pelo nome correto do dispositivo UART no seu sistema operacional. Por exemplo, no macOS ele se parece com `/dev/tty.wchusbserial56F3067xxxx`, e no Windows se parece com `COMx`. E, novamente, se você não vir o progresso da impressão de logs, tente a próxima UART.

**ATENÇÃO!!!**

A partição chamada `nvsfactory` contém dados de fábrica críticos para o funcionamento do dispositivo; tenha muito cuidado para não apagar essa partição. Portanto, é altamente recomendável fazer backup dessa partição antes de executar qualquer operação de gravação.

Vamos usar o esptool.py para fazer o backup. Esta ferramenta faz parte da instalação do IDF, então ela já deve estar disponível se você concluiu a instalação do IDF.

```
# Linux / MacOS
which esptool.py

# Windows
where esptool.py
```

Agora vamos fazer o backup da nossa partição `nvsfactory`.

```
esptool.py --port /dev/tty.wchusbserial56F3067xxxx --baud 2000000 --chip esp32s3 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
```

Após concluir o backup, é hora de gravar o nosso firmware.

```
idf.py --port /dev/ttyACM0 -b 2000000 app-flash
```

Use o subcomando `app-flash` para gravar apenas a partição da aplicação; isso protegerá sua partição `nvsfactory` e, o mais importante, economizará seu tempo.

### Monitorar a saída de log

```
idf.py monitor
```

Use `ctrl + ]` para sair da monitoração.

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
