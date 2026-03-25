---
description: LinkIt Smart 7688
title: LinkIt Smart 7688
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_Smart_7688
sku: 102110018
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_Smart_7688/
---

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Linkit_Smart_product.jpg)

:::danger
Devido ao encerramento do MediaTek Labs, todos os links relacionados se tornaram inválidos. Se você precisar baixar arquivos relevantes, pesquise por eles no seguinte link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

LinkIt Smart 7688 (uma placa controladora compacta) é uma placa de desenvolvimento aberta, baseada na distribuição Linux OpenWrt e MT7688 ([datasheet](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/MT7688_datasheet.pdf)). A placa é projetada especialmente para a prototipagem de dispositivos IoT com aplicações avançadas para casas inteligentes. A placa oferece memória e armazenamento suficientes para permitir um processamento robusto de vídeo. A plataforma também oferece opções para criar aplicações de dispositivo nas linguagens de programação Python, Node.js e C.
Esta placa é apenas uma parte da plataforma MediaTek LinkIt Smart 7688, que inclui outras placas de desenvolvimento.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-p-2573.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

---
- Wi‑Fi 802.11 b/g/n de entrada e saída única (1T1R).
- Pinos para GPIO, I<sup>2</sup>C, I<sup>2</sup>S, SPI, UART, PWM e porta Ethernet.
- CPU MIPS de 580 MHz.
- 32MB Flash e 128MB DDR2 RAM.
- USB host.
- Slot para Micro SD.

## Ideias de aplicação

---
- Dispositivos IoT com aplicações avançadas para casas inteligentes
- Robótica

## Especificação

---
<table>
  <tr>
    <th>Categoria</th>
    <th>Recurso</th>
    <th>Especificação</th>
  </tr>
<tr>
<td rowspan="4"> MPU </td>
<td> Chipset </td>
<td> MT7688AN </td>
</tr>
<tr>
<td> Núcleo </td>
<td> MIPS24KEc </td>
</tr>
<tr>
<td> Velocidade de clock</td>
<td> 580MHz </td>
</tr>
<tr>
<td> Tensão de trabalho </td>
<td> 3.3V </td>
</tr>
<tr>
<td> Tamanho da PCB </td>
<td> Dimensões </td>
<td> 55.7 x 26 mm </td>
</tr>
<tr>
<td rowspan="2"> Memória </td>
<td> Flash </td>
<td> 32MB </td>
</tr>
<tr>
<td> RAM</td>
<td> 128MB DDR2 </td>
</tr>
<tr>
<td rowspan="2"> Fonte de alimentação </td>
<td> Alimentação via USB </td>
<td> 5V (USB micro-B) </td>
</tr>
<tr>
<td> VCC </td>
<td> 3.3V (pino de breakout) </td>
</tr>
<tr>
<td rowspan="2"> GPIO </td>
<td> Quantidade de pinos </td>
<td> 22 (MT7688AN) </td>
</tr>
<tr>
<td> Tensão </td>
<td> 3.3V </td>
</tr>
<tr>
<td rowspan="5"> PWM </td>
<td> Quantidade de pinos</td>
<td> 4 (MT7688AN) </td>
</tr>
<tr>
<td> Tensão </td>
<td> 3.3V </td>
</tr>
<tr>
<td> Resolução máx. </td>
<td> 7 bits (personalizável) </td>
</tr>
<tr>
<td rowspan="2">Frequência máxima@Resolução </td>
<td>

100kHz@1-bit,
50kHz@2-bit,
25kHz@3-bit,
12.5kHz@4-bit,
6.25kHz@5-bit,
3.125kHz@6-bit,
1.5625kHz@7-bit (Modo padrão)

</td>
</tr>
<tr>
<td>

40MHz@1-bit,
20MHz@2-bit,
10MHz@3-bit,
5MHz@4-bit,
2.5MHz@5-bit,
1.25Mhz@6-bit,
625kHz@7-bit
(Modo rápido)

</td>
</tr>
<tr>
<td> Interrupções externas </td>
<td> Quantidade de pinos </td>
<td> 22 (MT7688AN) </td>
</tr>
<tr>
<td rowspan="3"> SPI </td>
<td> Quantidade de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pinos </td>
<td> P22, P23, P24 (compartilhados com a flash onboard), P25 </td>
</tr>
<tr>
<td> Velocidade máx. </td>
<td> 25 MHz </td>
</tr>
<tr>
<td rowspan="3"> SPI Slave </td>
<td> Quantidade de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pinos </td>
<td> P28, P29, P30, P31 </td>
</tr>
<tr>
<td> Velocidade máx. </td>
<td> 25 MHz </td>
</tr>
<tr>
<td rowspan="2"> I<sup>2</sup>S </td>
<td> Quantidade de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pinos </td>
<td> P10, P11, P12, P13 </td>
</tr>
<tr>
<td rowspan="3"> I<sup>2</sup>C </td>
<td> Quantidade de conjuntos </td>
<td> 1 </td>
</tr>
<tr>
<td> Números de pinos </td>
<td> P20, P21 </td>
</tr>
<tr>
<td> Velocidade </td>
<td> 120K/400K </td>
</tr>
<tr>
<td rowspan="3"> UART Lite </td>
<td> Quantidade de conjuntos </td>
<td> 3 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pinos </td>
<td> P8, P9, P16, P17, P18, P19 </td>
</tr>
<tr>
<td> Velocidade máx. </td>
<td> 0.5Mbps </td>
</tr>
<tr>
<td rowspan="3"> USB Host </td>
<td> Quantidade de conjuntos </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> Números de pinos </td>
<td> P6, P7 </td>
</tr>
<tr>
<td> Tipo de conector </td>
<td> Micro-AB </td>
</tr>
<tr>
<td rowspan="3"> Comunicação </td>
<td> Wi‑Fi </td>
<td> 1T1R 802.11 b/g/n (2.4G) </td>
</tr>
<tr>
<td> Ethernet </td>
<td> PHY FE 10/100 de 1 porta </td>
</tr>
<tr>
<td> Números de pinos </td>
<td> P2, P3, P4, P5 </td>
</tr>
<tr>
<td> Armazenamento do usuário </td>
<td> Cartão SD </td>
<td> Micro SD SDXC </td>
</tr>
</table>

## Visão geral do hardware

----
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Component_intro_with_text_1200.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Back_hardware_view_with_text_1200_s.jpg)

:::note
    * Para proteger o produto de operação inadequada, preste atenção às observações abaixo. Escolha um adaptador de energia mais confiável com saída estável. Condições recomendadas da fonte de entrada de energia para o 7688:
      * - A sobretensão da entrada de energia não deve ultrapassar 5,5.
      * - A ondulação de tensão deve estar dentro de ±100mV da tensão nominal.
:::

### Lista de peças

<table>
<tr>
<th>Nome das peças</th>
<th>Quantidade</th>
</tr>
<tr>
<td> LinkIt<sup>TM</sup> Smart 7688 </td>
<td> 1PC </td>
</tr>
<tr>
<td> Manual </td>
<td> 1PC </td>
</tr>
</table>

## Primeiros passos

----

### Conectar ao sistema operacional embarcado

:::note
    Existem duas maneiras descritas no manual. Aqui, mostramos apenas a maneira avançada (usando um adaptador USB para Serial), que parece um pouco mais difícil. Porém, você se beneficiará muito disso a longo prazo.
:::

#### Materiais necessários

- LinkIt Smart 7688 × 1
- Cabo USB (tipo A para micro tipo-B) × 2
- Adaptador USB para Serial × 1
- Jumpers × 3

### No Windows

**1.** Instale o [PuTTy](http://www.putty.org/). PuTTY fornece um ambiente de console do sistema usando SSH (Secure Socket Shell) para acessar o sistema operacional da placa de desenvolvimento.

**2.** Instale o serviço de impressão [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US) (para Windows 7, Windows 8, Windows 10).

**3.** Instale o driver. Se você estiver usando um cabo USB baseado no chip FTDI, faça o download e instale o driver a partir de [aqui](https://www.ftdichip.com/Drivers/VCP.htm). Se você estiver tendo problemas com o driver mais recente, tente instalar uma [versão mais antiga](https://www.ftdichip.com/Support/Documents/InstallGuides.htm).

**4.** Em seguida, você precisa conectar o cabo Serial‑para‑USB aos pinos UART do LinkIt Smart 7688, como mostrado na tabela a seguir:

| Pino no adaptador USB | Pino correspondente a ser conectado no LinkIt Smart 7688 |
|-----------------------------------|--------------------------------------------------------|
| Pino RX | Pino 8 |
| Pino TX | Pino 9 |
| Pino GND | Pino GND |

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/LinkIt_Smart_7688_demo_connection_1200_s.jpg)

**5.** Depois de conectar o cabo Serial para USB, abra o Gerenciador de Dispositivos e observe o número da porta COM, como mostrado abaixo. Esse número pode variar em computadores diferentes.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/COM_port.jpg)

**6.** Inicie o terminal PuTTY e insira o número da porta COM do dispositivo USB encontrado no Gerenciador de Dispositivos, clique no botão de opção Serial, digite 57600 na caixa Speed e clique em Open, como mostrado abaixo.
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Putty_configuration.jpg)

**7.** Agora você verá textos sendo impressos como em um console Linux.

### No Mac

**1.** Instale o driver se necessário. Verifique no site do fabricante do cabo os requisitos de driver para Mac e as instruções de instalação.

**2.** Conecte o cabo ao PC/notebook e conecte o cabo ao LinkIt Smart 7688.

**3.** Abra uma sessão do Terminal.

**4.** Digite **ls /dev/cu*** no Terminal. Você deverá ver uma lista de dispositivos. Procure algo como cu.usbserial-XXXXXXXX, onde XXXXXXXX é geralmente um identificador aleatório. Este é o dispositivo serial usado para acessar o console do sistema. Por exemplo:

```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR

```

**5.** Use o utilitário screen para conectar à porta serial e definir o baud rate para 57600. Isso porque o baud rate do console do sistema é 57600 por padrão. Por exemplo:

```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```

**6.** Agora você deverá estar conectado ao console do sistema. Pressione ENTER no Terminal para exibir o prompt. Você notará que o prompt ficou diferente do seu aplicativo Terminal do OS X; é o prompt do LinkIt Smart 7688 e se parece com o seguinte:

```
  root@myLinkIt:/#
```

**7.** Você está pronto para fazer alterações no sistema do LinkIt Smart 7688 através deste console.

### No Linux

**1.** Instale o driver se necessário. Verifique no site do fabricante do cabo os requisitos de driver para Linux e as instruções de instalação.

**2.** Conecte o cabo e conecte o cabo ao LinkIt Smart 7688.

**3.** Abra uma sessão do Terminal.

**4.** Digite **ls /dev/ttyUSB*** no Terminal. Você deverá ver uma lista de dispositivos. Procure algo como cu.usbserial-XXXXXXXX, onde XXXXXXXX é geralmente um identificador aleatório. Este é o dispositivo serial usado para acessar o console do sistema. Por exemplo:

```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```

**5.** Use o utilitário **screen** para conectar à porta serial e definir o baud rate para **57600**. Isso porque o baud rate do console do sistema é 57600 por padrão. Por exemplo:

```
$sudo screen /dev/ttyUSB0 57600
```

**6.** Agora você deverá estar conectado ao console do sistema. Pressione ENTER no Terminal para exibir o prompt. Você notará que o prompt se tornou um aplicativo diferente do regular; é o prompt do LinkIt Smart 7688 e se parece com o seguinte:

```
  root@myLinkIt:/#
```

**7.** Agora você está pronto para fazer alterações no sistema LinkIt Smart 7688 através deste console.

### Executando o exemplo Blink

#### Materiais necessários

- LinkIt Smart 7688 x 1
- Cabo USB (tipo A para micro tipo-B) x 1
- Adaptador USB para Serial x 1
- Jumpers x 3

#### Fazer o Blink RODAR

**1.** Ligue sua placa com um cabo micro-USB (conecte apenas a interface USB Power, e não a interface USB Host).
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Power_up.jpg)

**2.** Inicie o PuTTy e conecte-se ao sistema com o adaptador USB para Serial, como mostrado nas seções anteriores.

**3.** Digite **python /IoT/examples/blink-gpio44.py** e pressione **Enter** para executar o exemplo Blink.

:::note
    Observe que há 1 espaço em branco após a primeira palavra "python", caso contrário o exemplo não será encontrado.
:::
**4.** Após cerca de 2 segundos, você notará que o LED do Wi-Fi pisca de forma constante.

**5.** No console do sistema, digite **CTRL + C**, isso encerrará o exemplo.

### Conectar à Internet (Mudar para o modo Station)

Existem dois tipos de modos Wi-Fi: modo AP e modo Station. Consulte [isto](https://answers.yahoo.com/question/index?qid=20061207225409AANCN17) para ver as diferenças entre eles.

**1.** Ligue a placa com um cabo micro-USB.

**2.** Abra o utilitário de conexão Wi-Fi no seu computador e conecte-se ao ponto de acesso chamado LinkIt_Smart_7688_XXXXXX. XXXXXX é um tipo de identificador de hardware que varia de placa para placa.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Connect_wifi.jpg)

**3.** Abra um navegador com a URL mylinkit.local/ ou 192.168.100.1, defina a senha para root e faça login. Clique em Network na parte superior direita.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Network_conf.jpg)

**4.** Selecione o modo Station e clique em Refresh ou na seta para baixo à direita para encontrar o AP ao qual se conectar. Depois de selecionar o AP, digite a senha, se necessário. Clique em Configure & Restart para finalizar, como mostrado abaixo. Em seguida, aguarde cerca de 30 segundos para alternar o modo.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Station_mode.jpg)

**5.** Inicie o PuTTy e conecte-se ao sistema com o adaptador USB para Serial, como mostrado na seção anterior.

**6.** Digite ifconfig e encontre o endereço IP de inet addr, como mostrado abaixo:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/IFCONFIG.jpg)

:::note
    Ele ainda entrará no modo Station após reiniciar o sistema. Pressione o botão wi-fi por pelo menos 5 segundos para voltar ao modo AP. Nota: Será necessário reiniciar o sistema operacional embarcado usando o comando reboot.
:::
**7.** Digite o IP em uma nova aba do navegador e você poderá fazer login na interface Web do usuário para configurar o sistema.

**8.** Agora tanto o computador host quanto o LinkIt Smart 7688 estão conectados à internet. Digite ping **www.mediatek.com** no console e você obterá:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Ping_result.jpg)

**9.** Agora você pode usar a internet para configurar seu sistema na placa de desenvolvimento.

## Demo: Um exemplo Hello world

---

:::note
    Para evitar ficar sem memória durante o desenvolvimento de aplicações nativas, você deve configurar o ambiente de desenvolvimento de aplicações nativas em um ambiente host mais poderoso que permita fazer a compilação cruzada do formato executável do alvo LinkIt Smart 7688. A tabela a seguir mostra uma visão geral das linguagens de programação do LinkIt Smart 7688 e os ambientes de desenvolvimento relacionados no computador host.
:::

| Linguagem de programação | Ferramentas e bibliotecas             | Aplicações                                | Plataformas host suportadas |
|----------------------|--------------------------------------|-------------------------------------------|-----------------------------|
| C/C++                | Toolchain de compilação cruzada      | Programação de sistema                    | OS X Linux                  |
| Python               | Runtime Python no LinkIt Smart 7688  | Prototipagem Biblioteca de bridge de rede Arduino | OS X Linux Windows          |
| Node.js              | Runtime Node.js no LinkIt Smart 7688 | Prototipagem de rede                      | OS X Linux  Windows         |

### Um exemplo Hello world em Python

**1.** Use o FileZilla e consulte este [tutorial](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29), o IP do servidor (substitua o **host name**) é o endereço inet addr encontrado na seção anterior [Switch to Station mode](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch-to-Station-mode), o nome de usuário é root e a senha é a senha que você definiu naquela seção.

**2.** Abra um editor de texto, copie e cole o código de exemplo abaixo e salve-o como **helloworld.py**.

```
print "Hello World!"
```

**3.** Copie o arquivo **helloworld.py** para o sistema no ambiente de desenvolvimento de destino (LinkIt Smart 7688) com o FileZilla, colocando-o na pasta **root**.

**4.** Inicie o PuTTy e conecte-se ao sistema com o adaptador USB para Serial.

**5.** Defina o diretório de trabalho como **/root** e digite **python helloworld.py** para executar.

**6.** Agora você pode ver **Hello World**! impresso no console.

## FAQs

[Aqui](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq) está o FAQ da Mediatek.

## Visualizador online de esquemáticos

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

----
- **[Eagle]** [LinkIt_Smart_7688](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip)
- **[PDF]** [LinkIt_Smart_7688 PCB](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688%20Layout.pdf)
- **[PDF]** [LinkIt_Smart_7688 Schematic](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688.pdf)
- **[Document]** [Manual](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Manual.zip)
- **[Document]** [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
- **[Document]** [MediaTek LinkIt? Smart 7688 Resources:](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
- **[Document]** [Firmware_upgrade_Instruction](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688_Firmware_upgrade.zip)
- **[Document]** [Certificates](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688-Certificate.zip)
- **[Document]** [Mediatek](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## Projetos

**myva-Home (Voice controlled home automation)**: Minha casa ativada/controlada por voz, usando o Linkit Smart e um Android com exemplos e bibliotecas fáceis de usar

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/smerkousdavid/myva-home-voice-controlled-home-automation-f4cfe3/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
