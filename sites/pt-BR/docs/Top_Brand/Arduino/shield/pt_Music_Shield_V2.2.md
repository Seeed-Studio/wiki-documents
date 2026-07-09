---
description: Music_Shield_V2.2
title: Music Shield V2.2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Music_Shield_V2.2
sku: 107020003
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Music_Shield_V2.2/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_Shield_Picture.jpg" alt="pir" width={600} height="auto" /></p>

Hora de construir seu instrumento MIDI em tempo real / reprodutor de música! Ele pode reproduzir muitos formatos, incluindo MP3, WMA, WAV, AAC, MIDI, Ogg Vorbis. O Music Shield é um codificador/decodificador de áudio compatível com Arduino, Seeeduino, Seeeduino Mega e Arduino Mega. Ele é baseado no chip VC1053B, que permite reproduzir arquivos de som a partir de um cartão SD e também fazer gravações de curta duração. Você também pode usá-lo para tocar notas MIDI alterando levemente suas instalações de hardware. Devido ao modo de comunicação SPI, ele mantém um número mínimo de portas de E/S, o que facilita o desenvolvimento próprio dos usuários com este dispositivo. Além disso, o novo botão multifunção oferece maior conveniência para o controle pelos usuários.

:::note
A função de gravação funciona apenas com Seeeduino Mega e Arduino Mega. E o tamanho máximo do cartão SD que você pode usar é 2 GB.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/Music-Shield-V20-p-1372.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

Visão Geral de Hardware
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_frame.jpg" alt="pir" width={600} height="auto" /></p>

**Botão multifunção:** Altera o volume e seleciona músicas.

**LED indicador de Play/Pause (VERDE)：**Pisca enquanto está reproduzindo.

**Interface para fones de ouvido:** Pode acionar fones de 16 ohms ou 32 ohms e pode servir como uma porta de entrada de áudio externa.

**Cartão Micro SD**: Pode ser FAT16 ou FAT32, o tamanho máximo do cartão SD que você pode usar é 2 GB.

**U2:** VS1053B IC, codec de áudio Ogg Vorbis/MP3/AAC/WMA/FLAC/MIDI.

**U3,U7:** 74VHC125 IC, buffer quádruplo

**I2S:** Para entrada/saída de áudio digital.

**Interface ISP**: para trazer a porta SPI ao usar com produtos da série Mega.

***Uso de pinos no Arduino***

**Pinos usados para controle de reprodução:**

D3 - Recebe sinal do botão para Aumentar Volume.

D4 - Recebe sinal da chave para a função Próxima Música.

D5 - Recebe sinal da chave para as funções Reproduzir & Parar e Gravar.

D6 - Recebe sinal da chave para a função Música Anterior.

D7 - Recebe sinal do botão para Diminuir Volume.

D8 - Instruções do LED verde.

**Pinos usados para interface SPI:**

D10 - Chip Select SPI

D11 - SPI MOSI

D12 - SPI MISO

D13 - SPI SCK

**Pinos usados para interface VS1053:**

A0 - Reset do VS1053

A1 - Requisição de Dados do VS1053

A2 - Seleção de Dados do VS1053

A3 - Chip Select do VS1053

Primeiros Passos
---------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield4.jpg" alt="pir" width={600} height="auto" /></p>

:::note
<ol><li>Se você quiser usar a função MIDI, precisa alterar a instalação de hardware.</li>
<li>Se você alterou a instalação de hardware para usar a função MIDI, você não poderá usar as funções de reprodução e gravação até restaurá-la à condição original.</li></ol>
:::

### **Reproduzir música**

1. Certifique-se de que há músicas no cartão micro SD.
2. Baixe a [biblioteca Music shield V2.0](https://github.com/Seeed-Studio/Music_Shield)
3. Descompacte e copie a pasta para o caminho de bibliotecas do Arduino: ..\arduino-1.0\libraries.

:::note

1. Altere o nome da pasta da biblioteca extraída se o Arduino apresentar um erro ao carregar.<br />
2. Altere o cabeçalho incluído (para Arduino.h) no arquivo de exemplo se houver um erro `arduino.h: No such file or directory` durante a compilação.
:::

**Demo 1: Reproduzir músicas (por exemplo, em modo aleatório)**

Para usar a função de reprodução, você precisa criar uma lista de reprodução primeiro.

1. Reinicie a IDE do Arduino. Abra o exemplo “creatList” pelo caminho: File --> Examples --> MusicPlayer --> creatList como abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/OpenCreatListCode.jpg" alt="pir" width={600} height="auto" /></p>

2. Defina o modo de reprodução. Em “creatList”, a função que usamos é descrita a seguir.

    **Nome:** setPlayMode(unsigned char playmode);

    **Função:** Define o modo de reprodução. Há quatro modos que você pode definir: MODE_NORMAL, MODE_SHUFFLE, MODE_REPEAT_LIST, MODE_REPEAT_ONE. Cada modo representa diferentes ordens de reprodução.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_Mode.jpg" alt="pir" width={600} height="auto" /></p>

3. Selecione o tipo de placa Arduino que você está usando pelo caminho: Tools --> Board --> por exemplo Arduino UNO.
4. Selecione a porta serial correta que você está usando pelo caminho: Tools --> Serial Port --> por exemplo COM3.
5. Envie o código. Clique em Serial Monitor quando “Done uploading” aparecer; você verá que a ordem das músicas é randomizada na lista.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_List.jpg" alt="pir" width={600} height="auto" /></p>

Quando o botão multifunção é pressionado para cima ou para baixo, o volume será alterado. Claro, você pode experimentar outros modos de reprodução.

**Demo 2: Reproduzir músicas selecionadas**

1. Esta demo mostrará como reproduzir parte das músicas dentre todas as músicas no cartão SD. Abra o exemplo “addToList” pelo caminho: File --> Examples --> MusicPlayer --> addToList.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Select_play.jpg" alt="pir" width={600} height="auto" /></p>

2. Selecione músicas da lista de reprodução. Você só precisa listar corretamente, pelo nome, as músicas que deseja reproduzir na função addToPlayList(char *songName) .
Mas você deve garantir que a música foi armazenada no cartão SD e que o formato dessas músicas seja um dentre MP3,WMA,WAV,AAC,MIDI,Ogg Vorbis.

3. Envie o código. Quando você concluir o envio, as novas músicas adicionadas serão reproduzidas.

**Demo 3: Controlar volume pela porta analógica**

1. Conecte o Grove-Base Shield ao Music shield, conecte o soquete Grove do Rotary à porta analógica 4 do Base Shield com um cabo Grove. Você também pode mudar para a porta digital. Mas não se esqueça de alterar o número da porta na definição do código de demonstração ao mesmo tempo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_5.jpg" alt="pir" width={600} height="auto" /></p>

2. Abra o exemplo “analogInputControl” e envie-o para sua placa Arduino.

3. Gire o botão para alterar o volume da música.

**Demo 4: Gravar música: (Suporta apenas placas baseadas em ATmega1280 e ATmega2560)**

1. Envie qualquer sketch da biblioteca Music Shield, por exemplo o sketch "creatList". Abra o Serial Monitor e ele reproduzirá arquivos de áudio no cartão SD.
2. Pressione o botão multifunção por 5 segundos; então o LED indicador apagará.
3. Pressione o botão multifunção por 5 segundos novamente; então o music shield começará a gravar, o LED indicador verde piscará.
4. Pressione rapidamente o botão multifunção novamente; a gravação será interrompida.
5. A gravação será reproduzida no último lugar.

**Demo 5: Usando MIDI**

1. Esta demo mostrará como tocar notas a partir de 3,5 mm usando MIDI. Abra o exemplo "MidiDemoPlayer" pelo caminho: File --> Examples --> MusicPlayer --> MidiDemoPlayer.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_midi_demo.jpeg" alt="pir" width={600} height="auto" /></p>

2. Envie o código para o seu Arduino UNO.

Referência
---------

**Lista de referência de número MIDI para nota**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/MIDIlist.gif" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivos Eagle do Music Shield V2.2](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip)
- [Music Shield V2.2 Schematic.pdf](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2_pdf.pdf)
- [VS1053 Datasheet](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/VS1053.pdf)
- [Bibliotecas do Music Shield](https://github.com/Seeed-Studio/Music_Shield)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Music_Shield_V2.2 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
