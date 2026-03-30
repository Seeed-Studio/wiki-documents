---
description: Guia para gravar firmware no seu SenseCAP Watcher Agent
title: Por favor, ignore este wiki
sidebar_position: 10
keywords:
  - SenseCAP
  - Watcher
  - Agent
  - Firmware
  - Flash
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /flash_watcher_agent_firmware
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2026-03-04'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/flash_watcher_agent_firmware/
---

# Versão beta. Por favor, ignore este wiki.

```tips
Please don't follow this wiki, otherwise your watcher will get stuck.
```

## Visão Geral

Agradecimentos especiais ao [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por suas contribuições de código aberto que tornaram este projeto possível.

Este guia fornece instruções para gravar o firmware do Watcher Agent no seu dispositivo SenseCAP Watcher usando a ferramenta Flash Download Tool da Espressif.

:::danger Nota
O firmware fornecido neste guia pode exigir informações de autenticação. Se necessário, entre em contato pelo e-mail [sensecap@seeed.cc](mailto:sensecap@seeed.cc).
:::

## Pré-requisitos

### Hardware Necessário

- Dispositivo SenseCAP Watcher
- Cabo de dados USB Tipo-C
- PC com Windows

### Software Necessário

- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 ou superior)
- [Arquivo binário de firmware do Watcher Agent](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

:::note
Se você já possui um dispositivo Watcher e o modelo dele **não é -EN**, será necessário gravar manualmente as informações de autenticação após gravar o firmware.  
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
Para mais detalhes, consulte [Gravando Informações de Autenticação](#Gravando-Informações-de-Autenticação).
:::

## Processo de Gravação

### Etapa 1. Baixar e instalar o Flash Download Tool

1. Baixe o Flash Download Tool no site oficial da Espressif:
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. Extraia o arquivo zip baixado para um diretório de sua preferência
3. Não é necessária instalação — basta dar um clique duplo no arquivo executável para iniciar a ferramenta

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### Etapa 2. Preparar o Arquivo de Firmware

1. Baixe o [arquivo binário](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin) do firmware Watcher Agent
:::caution Nota
Certifique-se de que todos os caminhos não contenham símbolos especiais.
:::

### Etapa 3. Conectar o Dispositivo

1. Conecte o seu Watcher ao computador usando a porta Tipo-C na parte inferior do dispositivo
2. Dê um clique duplo em `flash_download_tool_3.9.7.exe` para abrir a ferramenta
3. Configure as seguintes opções:
   - ChipType: Selecione `ESP32-S3`
   - WorkMode: Selecione `Develop`
   - LoadMode: Selecione `UART`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### Etapa 4. Configurar as Definições de Firmware

1. Clique no botão "..." na primeira linha para procurar e selecionar o arquivo binário de firmware que você baixou
2. Certifique-se de que a caixa de seleção ao lado do arquivo de firmware esteja marcada
3. Insira `0x0` no campo de endereço após a seleção do arquivo de firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### Etapa 5. Selecionar Porta COM e Configurações de Gravação

Configure as seguintes opções:

- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: No Gerenciador de Dispositivos, encontre a porta COM cujo nome termina com “B” — selecione esta para a gravação.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

:::note
Se a gravação não iniciar após clicar em START, clique em STOP e confirme se você selecionou a porta COM terminada em “B”.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
:::

### Etapa 6. Apagar a Flash

1. Clique no botão `ERASE` para limpar o firmware existente
2. Aguarde a conclusão do processo de apagamento

### Etapa 7. Gravar o Firmware

1. Clique no botão `START` para iniciar a gravação
2. Você deverá ver informações de progresso na janela de log
3. Se nenhum progresso aparecer ou ocorrer falha, tente a outra porta COM

### Etapa 8. Verificar Sucesso

O processo de gravação estará completo quando você vir a mensagem de sucesso na janela de log.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### Etapa 9. Reiniciar o Dispositivo

1. Localize o orifício de reset no seu dispositivo Watcher
2. Use um pino para pressionar suavemente o botão de reset
3. O dispositivo irá reiniciar com o novo firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## Solução de Problemas

### Problemas Comuns

1. **Nenhuma Porta COM Detectada**
   - Certifique-se de que você está usando a porta Tipo-C inferior
   - Tente usar outro cabo USB
   - Verifique se os drivers USB estão instalados corretamente

2. **Falha na Gravação**
   - Tente a outra porta COM
   - Verifique se o endereço (0x0) foi inserido corretamente

3. **Dispositivo Não Responde**
   - Use um pino para pressionar suavemente o botão de reset
   - Tente apagar antes de gravar

### Gravando Informações de Autenticação

Se o modelo do seu Watcher **não é -EN**, você deve gravar manualmente as informações de autenticação após gravar o firmware.  

**Etapas:**

1. Verifique o **endereço MAC** do seu dispositivo.  
   - Você pode encontrá-lo na etiqueta do produto ou via porta serial.  
   - Se estiver usando o firmware nativo, você também pode encontrá-lo em **Settings->About Device->WI-FI Mac** do dispositivo.  

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/mac.jpg" style={{width:600, height:'auto'}}/></div>

:::danger nota
Certifique-se de que o endereço STA MAC que você fornecer está correto.  
O arquivo de autenticação só pode ser gravado **uma vez**, e usar um endereço incorreto impedirá que o dispositivo seja vinculado corretamente.  
Observe também que o arquivo de autenticação precisa ser gravado apenas uma vez.
:::

2. Envie um e-mail para **sensecap@seeed.cc** com o seu endereço STA MAC e solicite o arquivo de autenticação e a ferramenta de gravação. Este script será fornecido no pacote que enviaremos a você.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools.jpg" style={{width:500, height:'auto'}}/></div>
3. Acesse o terminal do esp-idf, navegue até a pasta que enviamos para você e execute o **script de gravação em Python**.
:::note
Se você ainda não instalou o esp-idf, acesse o [Site do ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html) e siga o guia oficial para baixá-lo e instalá-lo.
:::
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash1.jpg" style={{width:500, height:'auto'}}/></div>
4. Siga as instruções do programa, insira a porta serial correspondente, serialB e digite ""BURN"" para gravar.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash5.jpg" style={{width:800, height:'auto'}}/></div>
5. Quando o processo for concluído, pressione o botão de reset no dispositivo.  
6. Após as etapas acima, você poderá se registrar na [plataforma SenseCraft AI-Watcher Agent](https://sensecraft.seeed.cc/ai/watcher-agent)

:::note
Se você encontrar o problema a seguir, então vá para o terminal do esp-idf, navegue até a pasta e insira manualmente os dois comandos a seguir:
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash4.jpg" style={{width:800, height:'auto'}}/></div>

```bash
espefuse.py -p <your_correct_serial_port> burn_block_data BLOCK_USR_DATA serial_number
espefuse.py -p <your_correct_serial_port> burn_key BLOCK_KEY0 license_key HMAC_UP
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash2.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash3.jpg" style={{width:800, height:'auto'}}/></div>
:::

## Suporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
