---
description: Um monitor de GPIO em tempo real baseado em MicroPython para o Seeed Studio XIAO ESP32-S3 (Sense). Exibe em tempo real os estados dos pinos digitais (HIGH/LOW/TOUCH) por meio de uma interface web local usando o Thonny.
title: Visualizador de GPIO do Seeed Studio XIAO ESP32-S3 (Sense)
keywords:
  - GPIO Viewer
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_10.webp
slug: /XIAO_ESP32S3_GPIO_Viewer
last_update:
  date: 01/06/2026
  author: Utkarsh Bhor Patil, Garla Guo
createdAt: '2026-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO_ESP32S3_GPIO_Viewer/
---

# Visualizador de GPIO do XIAO ESP32-S3 (Sense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_1.png" style={{width:1000, height:'auto'}}/></div>


> [XIAO ESP32-S3 (Sense) GPIO Viewer](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer) é um monitor de GPIO em tempo real baseado em MicroPython para o Seeed Studio XIAO ESP32-S3 (Sense). Exibe em tempo real os estados dos pinos digitais (HIGH/LOW/TOUCH) por meio de uma interface web local usando o Thonny.

## Informações exibidas na página web
- **Monitoramento de GPIO e E/S**: Exibe em tempo real os estados digitais dos GPIOs, leituras ADC em tempo real e mapeamentos claros dos números dos pinos GPIO.
- **Informações de execução**: Informa a frequência atual da CPU e o tempo de atividade do sistema para refletir o status operacional em tempo real.
- **Memória e armazenamento**: Mostra o uso da memória heap, porcentagem de uso do sistema de arquivos, tamanho da flash e disponibilidade de PSRAM quando suportado.
- **Informações de rede**: Fornece diagnósticos de rede incluindo endereço IP, SSID do Wi-Fi conectado, intensidade do sinal (RSSI), endereço MAC, gateway e servidor DNS.
- **Firmware e sistema**: Identifica o modelo do chip, número de núcleos da CPU, versão do MicroPython e informações da compilação do firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

## Recursos
- Exibe em tempo real os estados digitais dos GPIOs e leituras ADC, permitindo depuração visual durante prototipagem e desenvolvimento
- Funciona como um servidor web embarcado leve rodando inteiramente no XIAO ESP32-S3 (Sense), sem necessidade de software externo ou serviços em nuvem após a implantação
- Fornece uma interface baseada em navegador acessível a partir de qualquer dispositivo na mesma rede local para monitoramento em tempo real
- Simplifica a validação de entradas de sensores, relés e módulos periféricos sem ferramentas adicionais de depuração
- Construído com MicroPython para legibilidade e iteração rápida, mantendo uso mínimo de recursos adequado para sistemas embarcados com restrições

## Processo de construção
Este é um fluxo de trabalho amigável para iniciantes usando MicroPython e o Thonny IDE; ele irá guiá-lo passo a passo desde o início, começando pelo download das ferramentas necessárias até a execução do projeto GPIOViewer no seu XIAO ESP32-S3 (Sense).

### Prepare seu computador
Antes de mexermos na placa XIAO, vamos baixar e instalar o Thonny IDE (seu editor Python).

1. Abra seu navegador (como Chrome ou Safari).
2. Vá para https://thonny.org – este é o site oficial. 
3. Clique no link de download para o seu computador (Windows, macOS ou Linux).
4. Depois de baixar, execute o instalador e siga as instruções na tela (clique em “Next” → “Install” → “Finish”).

> Thonny é o programa que você usará para escrever e enviar código Python para sua placa.

### Instale as ferramentas Python necessárias (Esptool)

Para preparar a placa para o MicroPython, precisamos de uma pequena ferramenta chamada **esptool**. 

1. No seu computador, encontre e abra o Terminal (Mac/Linux) ou Prompt de Comando (Windows).
2. Digite isto e pressione Enter:
```
pip install esptool
```
Isto instala a ferramenta que nos permitirá colocar o firmware MicroPython na sua placa XIAO. 

### Baixe o firmware MicroPython

Precisamos de um arquivo binário especial que permita à sua placa XIAO rodar MicroPython.

1. Abra seu navegador em https://micropython.org/download/ESP32_GENERIC_S3/
2. Clique para baixar o arquivo .bin mais recente (exemplo: ESP32_GENERIC_S3-xxxxx.bin).
3. Salve-o em algum lugar fácil de encontrar, como a sua Área de Trabalho.

### Conecte seu XIAO ESP32-S3 (Sense) ao computador

1. Pegue um cabo USB-C e conecte o XIAO ao seu computador.

:::tip
Se a placa não aparecer, mantenha pressionado o botão BOOT enquanto conecta o cabo.
:::

2. Após conectar, seu computador atribuirá à placa uma porta COM (Windows) ou um dispositivo tty no Mac/Linux.

### Grave (instale) o MicroPython na placa

Agora vamos colocar o firmware MicroPython no seu XIAO.

**1. Apague a memória flash antiga**

Encontre a porta da sua placa e então, no Terminal / Prompt de Comando, digite:
```
esptool --chip esp32s3 --port COMX erase-flash
```

:::tip
Substitua COMX pela porta que seu sistema mostrar; no Mac pode ser /dev/tty.usbmodemXXXX ou /dev/tty.usbserialXXXX, enquanto no Linux pode ser /dev/ttyUSB0 ou /dev/ttyACM0.
:::

**2. Grave o firmware**

Ainda no Terminal, primeiro navegue até o local onde o arquivo bin está armazenado e então grave na flash.

```
cd Desktop
esptool.py --chip esp32s3 --port COMX write_flash -z 0x0 ESP32_GENERIC_S3-xxxx.bin
```

Certifique-se de que o nome do arquivo corresponde ao arquivo `.bin` que você baixou. Este comando instala o MicroPython na sua placa.

### Abra o Thonny e conecte à placa

Feche o terminal, desconecte o cabo USB do XIAO, espere 5 segundos e, em seguida, conecte o XIAO novamente (apenas conecte, sem pressionar nenhum botão). Agora você verá o MicroPython em execução!

1. Abra o **Thonny** no seu computador.
2. Vá em **Run → Configure Interpreter**.
3. Defina o **Interpreter** como “MicroPython (ESP32)”.
4. Escolha a **porta** que corresponde ao seu XIAO.
5. Clique em OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_3.png" style={{width:800, height:'auto'}}/></div>

Agora você deverá ver um prompt do MicroPython na parte inferior do Thonny, onde pode digitar comandos Python.
Tente digitar:
```
print("Hello from XIAO!")
```
e pressione Enter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_4.png" style={{width:600, height:'auto'}}/></div>

### Baixe os arquivos do projeto GPIOViewer

Agora que sua placa roda MicroPython:

1. Abra um navegador e vá para o projeto no GitHub: https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer/tree/main
2. Clique em **Code → Download ZIP** para salvar o projeto no seu computador.
3. Extraia o ZIP baixado para uma pasta que você vá lembrar.

### Envie o projeto para sua placa

No Thonny:

1. Abra a barra lateral **Files** (View → Files).
2. Navegue até a pasta do projeto que você extraiu. Você deverá ver boot.py e main.py.
3. Clique com o botão direito em `boot.py` → **Upload to / (root)**.
4. Repita para `main.py`.

Isso coloca o código do GPIOViewer no seu XIAO e o configura para ser executado quando a placa iniciar.

### Configure seu Wi-Fi (dentro de boot.py)

Antes de iniciar o projeto:

1. No Thonny, abra o arquivo `boot.py` que você enviou.
2. Encontre as linhas para o SSID e a senha do Wi-Fi.
3. Substitua `"Your_WiFi_SSID"` e `"Your_WiFi_Password"` pelo nome e senha do seu Wi-Fi doméstico.
4. Salve o arquivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_5.png" style={{width:600, height:'auto'}}/></div>

### Execute e visualize o monitor de GPIO

1. Com sua placa ainda conectada, pressione **Run** (botão verde) no Thonny.
2. Depois de alguns segundos, sua placa se conectará ao Wi-Fi.
3. Observe a saída do Thonny — ela mostrará o **endereço IP** que a placa recebeu.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_6.png" style={{width:800, height:'auto'}}/></div>

4. No seu computador, abra um **navegador web** e digite esse IP (por exemplo http://192.168.6.80:8080).
5. Você verá o **dashboard de GPIO em tempo real** mostrando os estados dos pinos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

:::tip
1. Antes de **Run**, conecte a antena ao XIAO ESP32-S3 (Sense).
2. Se você não conseguir abrir a página web e a seguinte situação ocorrer após o Thonny reconectar à placa:
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_7.png" style={{width:800, height:'auto'}}/></div>
  Não se preocupe, este é um comportamento normal na configuração MicroPython + Thonny + Web Server. Basta pressionar uma vez o botão Reset na placa ou fechar o Thonny.
:::


## ✨ Projeto de contribuidores

- Este projeto é apoiado pelo [Contributor Project](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer).
- Um agradecimento especial a [Utkarsh Bhor Patil](https://github.com/TuzaaBap) por seus esforços dedicados. 

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>