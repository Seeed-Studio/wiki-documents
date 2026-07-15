---
description: reComputer para Série Jetson
title: Layout de Hardware para Série reComputer
keywords:
  - Borda
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Hardware_Layout/
---

# Layout de Hardware para reComputer

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

Aqui você terá uma noção básica do layout de hardware do reComputer para Série Jetson. Ao mesmo tempo, você saberá como remover e instalar a placa central da placa carrier, como instalar a câmera, o módulo M.2 Wi-Fi ou o disco rígido, etc.

## Posicionamento da Série reComputer

Ao ficar de frente para o backplane da interface do reComputer, há 4 almofadas antiderrapantes no lado direito do chassi para facilitar que ele fique em pé, como mostrado na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

A parte inferior do chassi do reComputer é uma estrutura suspensa, e o chassi pode ser fixado em algumas estruturas inconvenientes com fitas de amarração. A placa inferior do chassi possui 4 furos de fixação para facilitar a fixação na fachada ou em declives.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## Tampa Superior da Série reComputer

Ao ficar de frente para o backplane da interface do reComputer, há 4 almofadas antiderrapantes no lado direito do chassi, onde pode ser visto um botão metálico, como mostrado na figura a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

Empurre o botão para cima para levantar a tampa superior do gabinete e, em seguida, você pode levantá-la para remover a tampa superior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## Remover a Placa Central da Placa Carrier

Depois de abrir o chassi, você poderá ver o módulo inserido na placa carrier, como mostrado na figura a seguir. O módulo pode ser removido da placa carrier seguindo os passos abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 1**: Antes de remover a versão central, primeiro você deve confirmar se a alimentação do ventilador está conectada. Se estiver, é necessário desconectar a alimentação do ventilador do conector (para Jetson Nano pode não haver ventilador e você pode pular esta etapa).

- **Passo 2**. Remova os parafusos que fixam a placa central com uma chave Philips.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **Passo 3**. Abra a presilha na placa carrier para fora, e a placa central saltará para cima automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **Passo 4**. Remova a placa central na diagonal para cima.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

## Montar o Módulo na Placa Carrier

- **Passo 1**. Encontre os pinos correspondentes do conector Jetson SODIMM na placa carrier e o conector no módulo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **Passo 2**. Insira o módulo diagonalmente em cerca de 20 graus no slot da placa carrier. Pressione para baixo e ele será fixado na placa carrier.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

!!! Note
    Você pode notar que, sob a instalação correta, há alguns pinos do conector visíveis na interface. Ele ficará instável se muitos pinos do conector estiverem expostos.
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 3**. Use uma chave Philips para apertar os parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **Passo 4**. Se o módulo incluir um ventilador de resfriamento, conecte o plugue de alimentação do ventilador ao soquete de alimentação na placa carrier.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## Remover a Placa Carrier do Chassi do reComputer

Quando quisermos instalar o módulo M.2 ou a câmera CSI e realizar outras operações, precisaremos remover a placa carrier do chassi do reComputer para facilitar a operação. A placa carrier é fixada à base do chassi com 4 parafusos, como mostrado na figura a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

Remova os 4 parafusos de fixação como mostrado abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

Retire a placa carrier juntamente com o módulo de dentro do chassi:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## Equipar o reComputer com um Módulo de Câmera

Ambas as placas carrier do reComputer possuem duas interfaces CSI. As interfaces são geralmente usadas para conectar uma câmera para alguns projetos de identificação. Aqui tomamos a placa carrier J1010 como exemplo para guiá-lo a equipar e usar o [Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html) no reComputer.

- **Passo 1**. Monte o módulo de câmera na placa carrier

!!!Note
    Antes da instalação, desligue o reComputer, desconecte a fonte de alimentação e abra a tampa superior do chassi.
    Para conveniência da demonstração abaixo, removemos a placa carrier do chassi e o módulo. Na operação real, basta abrir a tampa superior.

Selecione o conector CSI que você deseja usar e, em seguida, levante suavemente as travas de retenção pretas em ambos os lados.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

Certifique-se de afastar o slot preto antes de inserir o cabo no slot.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

Preste atenção à orientação do cabo. Você pode ver que o lado dos pinos do cabo está voltado para a placa carrier, e o lado azul está voltado para fora.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **Passo 2**. Ligue e inicialize o reComputer.

Depois de conectar o cabo da câmera, certifique-se de que o módulo, a placa carrier e os periféricos estejam todos instalados corretamente. Em seguida, ligue.

- **Passo 3**. Verifique se a câmera foi reconhecida.

Digite o seguinte comando na janela da linha de comando para verificar se há um dispositivo de câmera disponível no momento.

```shell
ls /dev/video0 
```

Se a saída aparecer como abaixo, isso significa que a câmera foi detectada com sucesso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

Se você não vir o arquivo de dispositivo, verifique se o cabo flat está orientado corretamente e certifique-se de que sua câmera Raspberry Pi seja a versão V2, pois a versão V1 não é reconhecida.

- **Passo 4**. Aplicar a Câmera

Você pode usar o atributo `sensor_mode` com o elemento GStreamer nvarguscamerasrc para especificar qual câmera. Os valores válidos são 0 ou 1 (o padrão é 0 se não for especificado), ou seja:

```shell
# Simple Test
# Ctrl^C to exit
# sensor_id selects the camera: 0 or 1 on Jetson Nano B01
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

Você pode usar os seguintes comandos na janela de linha de comando para testar o uso da câmera.

Após executar este comando, o reComputer exibirá em tela cheia a imagem capturada pela câmera até que você pressione `Ctrl+C`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

Se você tiver mais necessidades de uso de câmera, pode consultar o [projeto CSI-Camera](https://github.com/JetsonHacksNano/CSI-Camera) para explorar e aprender por conta própria.

## Equipar o Módulo Sem Fio para o reComputer

Aqui mostraremos como instalar um módulo sem fio M.2 Key E no reComputer.

Equipamentos e acessórios necessários:

- reComputer
- [Módulo sem fio Intel® Dual Band Wireless-AC 8265](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- 2 x Adaptador de Antena Externa IPEX para SMA Fêmea e Antena SMA Macho para Módulo WIFI
- Chave de fenda Philips e parafusos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

!!!Note
    A instalação do módulo sem fio M.2 Key E requer antenas adicionais. Como o módulo fica dentro do chassi, ele pode até ficar pressionado entre o módulo e a placa carrier. Sem antenas, a intensidade do sinal será bastante afetada.

- **Passo 1**. Desencaixe a placa carrier do chassi do reComputer

Antes de instalar o módulo sem fio, desencaixe a placa carrier do chassi do reComputer como mostrado abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 2**. Remova o tampão de silicone do gabinete

Há 4 aberturas de antena reservadas no chassi, que estão tampadas com tampões de silicone, como mostrado na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

Selecione os dois furos externos, aperte o tampão de silicone de fora do chassi para dentro do chassi e, em seguida, puxe o tampão de silicone por dentro para expor o furo da antena.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 3**. Instale o conector SAM

Conforme mostrado na figura abaixo, instale a porca e o conector da cabeça SAM no furo do Wi‑Fi, tendo atenção para posicionar a extremidade do cabo dentro do chassi.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 4**. Insira o módulo sem fio na porta M.2 Key E

!!!Note
    A interface M.2 Key E está na parte inferior ou superior da placa portadora. Para placas portadoras diferentes, consulte o Layout de Hardware da Placa Portadora. Antes da instalação, talvez você queira remover a placa central da placa portadora.

Conforme mostrado na figura abaixo, encontre a interface M.2 Key E na placa portadora e insira o módulo sem fio no slot da interface.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

Depois que o módulo sem fio estiver firmemente inserido, fixe-o com parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5**. Insira 2 conectores IPEX nos soquetes correspondentes do módulo sem fio, a conexão é do tipo de encaixe, como mostrado na figura abaixo. Basta pressionar e nenhuma outra operação é necessária.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

A instalação deve ficar como na figura abaixo. Neste momento, tome cuidado para não quebrar o fio entre o módulo sem fio e a base da antena SAM.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 6**. Instale o módulo no chassi

Coloque cuidadosamente a placa portadora dentro do chassi do reComputer e, em seguida, instale os parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 7**. Instale as antenas

Instale duas antenas macho SAM nos soquetes fêmea SAM e aperte. Isso será toda a instalação de hardware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 8**. Ligue o reComputer e conecte-se à rede sem fio

Conecte os periféricos ao reComputer e então ligue-o. Entre no sistema e abra a opção de rede no canto superior direito da tela. Após marcar a opção **Enable Wi-Fi**, você verá a rede sem fio próxima. Selecione a rede sem fio disponível para se conectar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

Parabéns, você instalou com sucesso o módulo sem fio e se conectou à rede.

## Layout de Hardware

### **Placa portadora J101**

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **Placa portadora J202**

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**Vista Inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Placa portadora Jetson A206 (equipada com Jetson Nano)**

*Clique [aqui](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) para conferir os pinos da placa portadora Jetson A206 (equipada com Jetson Nano) para as interfaces de operação.*

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**Vista Inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Placa portadora Jetson A206 (equipada com Jetson Xavier NX)**

*Clique [aqui](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf) para conferir os pinos da placa portadora Jetson A206 (equipada com Jetson Nano) para as interfaces de operação.*

**Vista Superior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**Vista Inferior**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## Comparação Detalhada

|        Produto       |                                                    reComputer J1010                                                   |                         reComputer J1020                        |                                                    reComputer J2011                                                   |                                                    reComputer J2012                                                   |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|        Módulo        |                                                    Nano                                                    |                         Nano                         |                                                 Xavier NX                                                  |                                               Xavier NX 16GB                                               |
|     Desempenho de IA     |                                                           472 GFLOPS                                                           |                                472 GFLOPS                                | 21 TOPS                                                                                                                        | 21 TOPS                                                                                                                        |
|          GPU         |                                                    128-core NVIDIA Maxwell™                                                    |                         128-core NVIDIA Maxwell™                         | 384-core NVIDIA Volta™ GPU                                                                                                     | 384-core NVIDIA Volta™ GPU                                                                                                     |
|          CPU         |                                                  Quad-core ARM A57 @ 1.43 GHz                                                  |                       Quad-core ARM A57 @ 1.43 GHz                       | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     |
|        Memória        |                                                   4GB 64-bit LPDDR4 25.6GB/s                                                   |                        4GB 64-bit LPDDR4 25.6GB/s                        | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  |
|        Armazenamento       |                                                           16 GB eMMC                                                           |                                16 GB eMMC                                | 16 GB eMMC                                                                                                                     | 16 GB eMMC                                                                                                                     |
|     ENCODER DE VÍDEO    |                             4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264)                            |  4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264) |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |
|     DECODER DE VÍDEO    |                            4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264)                            | 4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) |
|   Ethernet Gigabit   |                                         1x Conector Ethernet Gigabit RJ45 (10/100/1000)                                        |              1x Conector Ethernet Gigabit RJ45 (10/100/1000)             | 1x Conector Ethernet Gigabit RJ45 (10/100/1000)                                                                                | 1x Conector Ethernet Gigabit RJ45 (10/100/1000)                                                                                |
|          USB         | 1 x  Conector USB 3.0 Tipo A;  2 x  Conector USB 2.0 Tipo A; 1 x  USB Tipo C para modo Device; 1 x  USB Tipo C para entrada de alimentação 5V |    4 x  Conector USB 3.0 Tipo A； 1 x  porta Micro-USB para modo Device;    |                               4 x  Conector USB 3.0 Tipo A； 1 x  porta Micro-USB para modo Device;                               |                               4 x  Conector USB 3.0 Tipo A； 1 x  porta Micro-USB para modo Device;                               |
|  Conexão de Câmera CSI  |                                          2x Câmera CSI (15 pos, passo 1mm, MIPI CSI-2 )                                         |               2x Câmera CSI (15 pos, passo 1mm, MIPI CSI-2 )              | 2x Câmera CSI (15 pos, passo 1mm, MIPI CSI-2 )                                                                                  | 2x Câmera CSI (15 pos, passo 1mm, MIPI CSI-2 )                                                                                  |
|        Display       |                                                          1x HDMI Tipo A                                                         |                            1xHDMI Tipo A; 1xDP                           | 1xHDMI Tipo A; 1xDP                                                                                                            | 1xHDMI Tipo A; 1xDP                                                                                                            |
|          FAN         |                                                         1x  FAN(5V PWM)                                                         |                              1x  FAN(5V PWM)                              | 1x  FAN(5V PWM)                                                                                                                 | 1x  FAN(5V PWM)                                                                                                                 |
|       M.2 KEY E      |                                                           1x M.2 Key E                                                          |                          1x M.2 Key E（Desativado）                         |                                                           1x M.2 Key E                                                          |                                                           1x M.2 Key E                                                          |
|       M.2 KEY M      |                                                                -                                                               |                                1x M.2 Key M                               | 1x M.2 Key M                                                                                                                    | 1x M.2 Key M                                                                                                                    |
|          RTC         |                                                          1x Soquete RTC                                                          |                               1x soquete RTC                               |                                                          1x Soquete RTC                                                          |                                                          1x Soquete RTC                                                          |
| Porta multifuncional |                                                        1x  conector de 40 pinos                                                        |                             1x  conector de 40 pinos                             | 1x  conector de 40 pinos                                                                                                               | 1x  conector de 40 pinos                                                                                                               |
|  Alimentação  |                                                       USB-Type C 5V⎓3A；                                                       |                              DC Jack 12V/2A                              | DC Jack 19V/4.74A (MÁX 90W) MÁX                                                                                                      | DC Jack 19V/4.74A (MÁX 90W) MÁX                                                                                                      |
|      Mecânico      |                                                     130 mm x 120 mm x 50 mm                                                    |                            130mm x120mm x 50mm                           |                                                       130mm x120mm x 50mm                                                      |                                                       130mm x120mm x 50mm                                                      |
|                      |                                                                                                                                |                                                                          |                                                                                                                                |                                                                                                                                |

## Especificações Técnicas da Placa Carrier

|  Conector               |  Placa Carrier J1010                   |  Placa Carrier Jetson A206                                |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
|  Conector do módulo Jetson |  1x conector Jetson SODIMM, 260 pinos              |  1x conector Jetson SODIMM, 260 pinos              |
|  USB Tipo A              |  1x conector USB 3.0 Tipo A 2x conectores USB 2.0 Tipo A                      |  4x conectores USB 3.0 Tipo A                      |
|  USB Micro Tipo B        |  -                                               |  1x USB Micro B, fêmea RA                        |
|  USB Tipo C              |  2x conectores Tipo C                             |  -                                               |
|   Porta Ethernet          |  1x conector Ethernet Gigabit RJ45 (10/100/1000) |  1x conector Ethernet Gigabit RJ45 (10/100/1000) |
|  Display Port            |  1x HDMI tipo A                          |  1x HDMI tipo A e 1x DP                          |
|  Conector de Câmera CSI    |  2x Câmera CSI (15 posições, passo de 1 mm, MIPI CSI-2 )   |  2x Câmera CSI (15 posições, passo de 1 mm, MIPI CSI-2 )   |
|  M.2 Chave E               |  1x slot M.2 Chave E (75 pinos) 2230                                     |  1x slot M.2 Chave E (75 pinos) 2230                  |
|  M.2 Chave M               |  -                                               |  1x slot M.2 Chave M (75 pinos) NVME 2280             |
|  Porta Multifuncional    |  Passo 2,0, 40 PIN                                |  Passo 2,0, 40 PIN                                |
|  Header de Botão           |  1x Header de Botão (1x12, passo de 2,54 mm, RA)        |  1x Header de Botão (1x12, passo de 2,54 mm, RA)        |
|  Conector de FAN           |  1x Header Picoblade                              |  1x Header Picoblade                              |
|  CAN                     |  Desativado                                       |  1x Header de Barramento CAN (1x4, passo de 2,54 mm, RA)        |
|  RTC                     |  1x soquete de bateria tipo moeda de backup RTC (CR1220)         |  1x soquete de bateria tipo moeda de backup RTC (CR1225)         |
|   Alimentação                  |  1x conector Tipo C                            |  1x conector de alimentação de entrada DC TE                   |

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
