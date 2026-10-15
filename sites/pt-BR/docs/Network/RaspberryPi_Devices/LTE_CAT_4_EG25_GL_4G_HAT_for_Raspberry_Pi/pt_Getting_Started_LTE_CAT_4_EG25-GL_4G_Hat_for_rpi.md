---
description: O HAT 4G LTE para Raspberry Pi, com Quectel EG25-GL, oferece conectividade em alta velocidade e posicionamento GNSS preciso, tornando-o perfeito para aplicações de IoT e M2M. Compatível com Raspberry Pi e PCs, ele suporta bandas de frequência globais, rastreamento em tempo real e comunicação confiável para uso versátil em diversos setores.
title: Primeiros passos com o Raspberry Pi 4G LTE HAT
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - M2M
  - 4G LTE
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /getting_started_raspberry_pi_4g_lte_hat
sku: 114993408
last_update:
  date: 12/10/2024
  author: Kasun Thushara
createdAt: '2024-12-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/
---

## Visão geral

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/7-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" style={{width:600}}/></div>

O 4G Raspberry Pi HAT é um complemento poderoso e versátil projetado para integração perfeita com modelos Raspberry Pi, incluindo A+, B+, Pi 2, Pi 3, Pi 4, Pi 5 e Zero, bem como PCs. Equipado com um conector GPIO de 40 pinos, garante compatibilidade plug-and-play. O HAT apresenta o módulo LTE CAT4 Quectel EG25-GL, fornecendo comunicação 4G em alta velocidade, funcionalidade SMS e integração com plataformas em nuvem para aplicações de IoT e M2M. Além disso, oferece posicionamento GNSS preciso com tecnologia Qualcomm® IZat, tornando-o ideal para roteadores industriais, tablets robustos, transmissão de vídeo e sinalização digital. O HAT suporta comunicação por UART e USB, com ferramentas de software incluídas para fácil configuração e depuração via comandos AT.

Em seu núcleo, o módulo EG25-GL garante desempenho robusto com suporte a bandas de frequência globais, oferecendo conectividade confiável em redes LTE, UMTS/HSPA+ e GSM/GPRS/EDGE. Retrocompatível com 4G, 3G e 2G, ele suporta vários protocolos de comunicação, como MIMO, DFOTA e DTMF. Seu receptor GNSS multiconstelação garante posicionamento rápido e preciso.

## Conteúdo da embalagem

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/9-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg"
    style={{ width: 600}}
  />
</div>

O kit do 4G LTE HAT inclui tudo o que é necessário para instalação e operação:  

- **Parafusos e pinos metálicos** Todo o hardware necessário para montar e fixar o HAT com segurança.  
- **Chave de fenda** Uma ferramenta para instalação fácil.  
- **2x Antena 4G** Garante conectividade LTE confiável.  
- **Adaptador USB-A para USB-C** Permite a conexão entre o HAT e a porta USB 3.0 do Raspberry Pi.  
- **Cabeçalho empilhável 2x20 pinos** Fornece a altura necessária para o alinhamento adequado e espaço livre durante a instalação.  
- **Cabo de dados Type-C de 0,3 m** Suporta tanto alimentação quanto transmissão de dados.  

## Preparação de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>Antena GPS</th>
        <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Recursos

- Suporta bandas de frequência globais sem restrições regionais.
- Plug-and-play com Raspberry Pi, sem necessidade de instalação de driver.
- Inclui 2x antenas LTE e todos os acessórios de montagem necessários, sem necessidade de compras adicionais.
- Comunicação LTE CAT4 em alta velocidade, suportando Máx. 150 Mbps (DL) e Máx. 50 Mbps (UL).
- Suporta discagem, SMS, TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE.
- Suporta GNSS: GPS, GLONASS, BDS, Galileo, QZSS.
- Permite comunicação 4G em alta velocidade com Raspberry Pi/PC via interface USB 2.0.
- Interface de alimentação USB-C adicional que suporta protocolo PD pode fornecer até 27 W de potência separadamente para o 4G hat e o Raspberry Pi, oferecendo maior capacidade de carga.
- LEDs de status PWR/NET integrados para fácil monitoramento do status da rede e operação do módulo.
- Botão RST PWR integrado para reinicialização manual rápida e controle ligar/desligar do módulo.
- Pinos RST/PWR/RX/TX conectados ao Raspberry Pi via GPIO de 40 pinos, permitindo controle de Reset, ligar/desligar do módulo e comunicação UART quando habilitados pelo DIP Switch.

## Especificação

### Especificações do módulo 4G EG25-GL

| **Atributo**                  | **Detalhes**                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| **Região/Operadora**           | Global                                                                      |
| **Dimensões (mm)**             | 29.0 × 32.0 × 2.4                                                          |
| **Peso (g)**                   | Aprox. 4.9                                                                 |
| **Temperatura de operação**    | -35°C a +75°C                                                              |
| **Temperatura estendida**      | -40°C a +85°C                                                              |
| **Bandas de frequência**       |                                                                             |
| - LTE-FDD                      | B1/2/3/4/5/7/8/12/13/18/19/20/25/26/28/66                                   |
| - LTE-TDD                      | B34/38/39/40/41                                                            |
| - WCDMA                        | B1/2/4/5/6/8/19                                                            |
| - TD-SCDMA                     | Não suportado                                                              |
| - GSM/EDGE                     | B2/3/5/8                                                                   |
| **GNSS**            | GPS/GLONASS/BDS/Galileo/QZSS                                               |
| **Recursos aprimorados**       |                                                                             |
| - DTMF                         | Suportado                                                                  |
| - DFOTA                        | Suportado                                                                  |
| - QMI/RmNet                    | Suportado                                                                  |
| - QuecFile®                    | Suportado                                                                  |
| - Detecção de cartão (U)SIM    | Suportado                                                                  |
| **Taxas máximas de dados**     |                                                                             |
| - LTE-FDD (Mbps)               | 150 (DL)/50 (UL)                                                           |
| - LTE-TDD (Mbps)               | 130 (DL)/30 (UL)                                                           |
| - DC-HSPA+ (Mbps)              | 42 (DL)/5.76 (UL)                                                          |
| - WCDMA (kbps)                 | 384 (DL)/384 (UL)                                                          |
| - EDGE (kbps)                  | 296 (DL)/236.8 (UL)                                                        |
| - GPRS (kbps)                  | 107 (DL)/85.6 (UL)                                                         |
| **Protocolos suportados**      | TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE |
| **Características elétricas**  |                                                                             |
| - Faixa de tensão de alimentação | 3.3–4.3 V, típico 3.8 V                                                   |
| - Consumo de energia (Desligado)| 7 µA                                                                      |
| - Consumo de energia (Sleep)   | 1.3 mA                                                                     |
| - Consumo de energia (Idle)    | 15.7 mA                                                                    |

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/overview.jpg" style={{width:800}}/></div>

### Conexão do 4G LTE HAT com o GPIO do Raspberry Pi

O 4G LTE HAT se conecta ao Raspberry Pi por meio de sua interface GPIO padrão de 40 pinos, permitindo integração perfeita. As principais conexões GPIO e suas funções são as seguintes:

- **Alimentação (5V)**: O HAT recebe energia do Raspberry Pi através dos pinos de 5 V no cabeçalho GPIO. Após conectar o jumper do PowerMode Switch, o Raspberry Pi pode ser alimentado através desses pinos em sentido inverso

- **Comunicação UART (RX/TX)**: Os pinos GPIO 8 (TXD) e 10 (RXD) do Raspberry Pi estão conectados ao HAT, servindo como a interface UART primária para comunicação com o módulo 4G. É importante observar que os DIP switches na PCB precisam ser ajustados. As configurações futuras serão discutidas em detalhes na seção de DIP switches mais adiante.

- **Reset (RST)**: O pino GPIO 29 está conectado ao pino de reset do módulo 4G, permitindo que o Raspberry Pi reinicie o módulo 4G alternando o sinal (o padrão é baixo, alto aciona o reset). É importante notar que os DIP switches na placa precisam ser ajustados. As configurações futuras serão discutidas em detalhes na seção de DIP switches mais adiante.

- **Power Control (PWR)**: O pino GPIO 31 se conecta ao pino de controle de energia do módulo 4G, permitindo que o Raspberry Pi ligue o módulo com um sinal alto ou o desligue com um sinal baixo.
Essas conexões garantem que o Raspberry Pi possa alimentar, se comunicar e controlar o 4G LTE HAT de forma eficaz. É importante notar que os DIP switches na placa precisam ser ajustados. As configurações futuras serão discutidas em detalhes na seção de DIP switches mais adiante.

### Fonte de Alimentação

O 4G LTE HAT suporta múltiplos modos de alimentação para garantir flexibilidade e compatibilidade:

1. **Fonte de Alimentação de 5V pelo conector de 40 pinos do Raspberry Pi**: O HAT pode obter energia diretamente dos pinos de 5V no cabeçalho GPIO de 40 pinos do Raspberry Pi. Este método é adequado para aplicações de pequena escala, mas pode ser insuficiente para maiores demandas de energia, exigindo testes de confiabilidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power4.jpg" style={{width:600}}/></div>

2. **Fonte de Alimentação USB-A ou USB-C do Raspberry Pi**: O HAT pode ser alimentado pela porta USB-A ou USB-C integrada do Raspberry Pi. Um adaptador incluído no kit simplifica essa configuração, permitindo uma conexão direta ao HAT.

`Powered by Raspberry PI.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power1.jpg" style={{width:600}}/></div>

`Powered by PC`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.jpg" style={{width:600}}/></div>

3. **Fonte de Alimentação USB-C Externa**: Uma fonte de alimentação USB-C independente, que pode fornecer uma alimentação PD de 5–15 V e entregar até 27 W de potência, pode ser conectada ao HAT para aplicações de alta potência. Utilizando um fio jumper, o HAT também pode fornecer energia diretamente ao Raspberry Pi através do cabeçalho GPIO de 40 pinos.
Essas opções fornecem flexibilidade para acomodar diferentes requisitos de aplicação e necessidades de energia. É importante notar que os DIP switches na placa precisam ser ajustados. As configurações futuras serão discutidas em detalhes na seção de DIP switches mais adiante.

`Power the 4G HAT separately`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power5.jpg" style={{width:600}}/></div>

`Power both the 4G HAT and the Raspberry Pi.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power3.jpg" style={{width:600}}/></div>

### Slot para Cartão SIM

O 4G LTE HAT inclui um slot para cartão SIM para o módulo CAT4, suportando cartões Nano SIM com tensão de 3 V ou 1,8 V. Para uma instalação adequada, o slot do cartão SIM deve estar alinhado verticalmente com a porta de rede do Raspberry Pi localizada abaixo dele. Isso garante uma conexão segura e desempenho ideal.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/nano_sim_small.png"
    style={{ width: 200}}
  />
</div>

### Conectividade da Antena

O 4G LTE HAT suporta três conexões de antena, cada uma utilizando conectores IPEX 1:

1. **Conector de Antena LTE MAIN**: Usado para conectividade LTE primária.
2. **Conector de Antena LTE AUX**: Fornece suporte LTE auxiliar para desempenho aprimorado.
3. **Conector de Antena GPS/GNSS**: Dedicado à funcionalidade GPS e GNSS, garantindo posicionamento preciso.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/antenna_small.png"
    style={{ width: 200}}
  />
</div>

Essas opções de antena garantem conectividade robusta e confiável para aplicações LTE e baseadas em localização.

### Indicadores LED

O 4G LTE HAT possui dois indicadores LED para monitoramento de status:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/LED.PNG"
    style={{ width: 200}}
  />
</div>

- **LED PWR (Vermelho)**: Acende para indicar o status de alimentação do HAT.
- **LED NET (Azul)**: Indica o status da conexão de rede. Pisca em intervalos específicos durante conexões ativas e transferência de dados, permanecendo apagado se nenhuma conexão estiver estabelecida.

**Estados do Indicador de Rede e Status de Rede Correspondente**

| **Indicador**   | **Estado do Indicador**                 | **Status de Rede Correspondente**     |
|------------------|-------------------------------------|---------------------------------------|
| **NET_STATUS**   | Piscando (200 ms ligado / 1800 ms desligado)  | Registrado na rede 2G             |
|                  | Piscando (1800 ms ligado / 200 ms desligado)  | Registrado na rede 4G             |
|                  | Sempre ligado                          | Transmissão de dados em andamento        |
|                  | Desligado                                | Sem conexão de rede                |

Esses LEDs fornecem um retorno visual rápido sobre a alimentação e a atividade de rede do HAT.

### Interfaces USB-C

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbcin.jpg"
    style={{ width: 600}}
  />
</div>

O 4G LTE HAT inclui duas interfaces USB-C com funções distintas:

1. **Interface USB-C 1**

- Integrada ao módulo EC25, suporta funcionalidade USB 2.0.
- Permite comunicação por comandos AT, transmissão de dados, saída GNSS NMEA, depuração de software e atualizações de firmware.

2. **Interface USB-C 2**

- Usada para fornecer uma alimentação de alta potência de até 5–15 V ao LTE HAT.
- A fonte de alimentação pode ser alternada utilizando o DIP switch.
- Após conectar o PowerMode Switch Jumper, esta interface pode ser usada para alimentar diretamente o Raspberry Pi.

Essas interfaces garantem comunicação, depuração e fornecimento de energia eficientes para o HAT.
Essas interfaces facilitam a comunicação e a depuração eficientes para o HAT, com a interface USB-C 2 dedicada exclusivamente ao fornecimento de energia.

### Pads de Boot

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/bootpads.PNG"
    style={{ width: 500}}
  />
</div>

- Fornecem acesso ao pino **USB_BOOT** do módulo LTE e ao **VDD de 1,8 V**.
- Curto-circuitar o pino USB_BOOT força o módulo LTE ao modo de boot, permitindo gravação de firmware via interface **USB-C 1**.

### Botões RST/PWR

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rstpwr.PNG"
    style={{ width: 300}}
  />
</div>

- **Botão RST**: Executa um reset com um clique no módulo LTE. O botão é montado horizontalmente e projetado para operação fácil.
- **Botão PWR**: No estado desligado, pressionar o botão liga o HAT.
○Enquanto estiver ligado, pressionar e manter o botão pressionado o desliga.

### DIP Switches

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/dipswitches.PNG"
    style={{ width: 150}}
  />
</div>

- **Chave de Auto-Inicialização ao Ligar**:
  - **0 (Off)**: Desativada.
  - **1 (On)**: Habilita a ligação automática do LTE HAT após a alimentação ser aplicada.
- **Chave de Alimentação Externa**:
  - **0 (Off)**: Desativada.
  - **1 (On)**: Permite alimentação externa pela interface USB-C 2.
- **Chave de Conexão RX**:
  - **0 (Off)**: Desativada.
  - **1 (On)**: Habilita a comunicação com o UART-RX do Raspberry Pi.
- **Chave de Conexão TX**:
  - **0 (Off)**: Desativada.
  - **1 (On)**: Habilita a comunicação com o UART-TX do Raspberry Pi.
- **Chave de Conexão RST**:
  - **0 (Off)**: Desativada.
  - **1 (On)**: Permite que o Raspberry Pi controle os resets do módulo LTE via GPIO.
- **Chave de Conexão PWR**:
  - **0 (Off)**: Desativada.
  - **1 (On)**: Habilita o Raspberry Pi a controlar o estado de alimentação do módulo LTE via GPIO.

### Layout

O 4G LTE HAT é projetado com alinhamento e posicionamento cuidadosos para integração perfeita com o Raspberry Pi 5:

- **Conector USB-C 1**: Após a instalação, fica alinhado verticalmente com a interface USB 3.0 do Raspberry Pi 5.
- **Conector USB-C 2**: Fica alinhado verticalmente com a porta de alimentação USB-C do Raspberry Pi 5.
- **Slot para Cartão Nano SIM**: Posicionado para se alinhar verticalmente com a porta Ethernet do Raspberry Pi 5.
- **Luzes de Status (PWR/NET)**: Essas luzes estão alinhadas verticalmente com os LEDs de status do Raspberry Pi 5 para visibilidade clara.
- **Conectores de Antena**: Três conectores de antena igualmente espaçados estão localizados na parte traseira da placa para fácil fixação.
- **Pads de Boot**: Convenientemente localizados na borda externa da placa, permitindo que os usuários os curto-circuitem facilmente para operações de modo de boot.

Esse layout bem planejado garante compatibilidade, facilidade de uso e uma configuração organizada quando emparelhado com o Raspberry Pi 5.

## Estrutura do HAT e Compatibilidade com o Raspberry Pi

O 4G LTE HAT é projetado para corresponder ao tamanho do Raspberry Pi, garantindo integração perfeita. Os principais recursos estruturais e de compatibilidade incluem:

- **Alinhamento do GPIO de 40 Pinos**: O HAT se conecta através do cabeçalho GPIO de 40 pinos e se alinha perfeitamente com o Raspberry Pi. Um conector de empilhamento é adicionado para manter a compatibilidade com o dissipador de calor oficial do Raspberry Pi.

- **Suporte a Adaptador USB-A para USB-C**: Após instalar o conector de empilhamento, a porta USB-C 1 é posicionada em uma altura apropriada, permitindo conexão direta com um adaptador USB-A para USB-C.

- **Acesso ao Conector da Câmera**: O layout da PCB reserva espaço ao redor do conector de câmera do Raspberry Pi 5, com furos fornecidos para permitir que o cabo da câmera passe facilmente.

- **Furos de Fixação**: O HAT inclui quatro furos de montagem que se alinham com os pontos de fixação do Raspberry Pi 5, garantindo uma fixação segura usando colunas de cobre e parafusos.

- **Ajuste de Altura**: O cabeçalho de empilhamento eleva o HAT a uma altura adequada acima do Raspberry Pi, proporcionando espaço para os componentes e garantindo que a porta USB-C 1 esteja acessível.

Essas considerações de design tornam o HAT totalmente compatível com o Raspberry Pi 5, mantendo a facilidade de instalação e funcionalidade.

## Guia de Montagem

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/steps.jpg"
    style={{ width: 900}}
  />
</div>

## Preparação de Software

### Para Windows

**Passo 1: Instalar Drivers**

Para usuários do Windows, [baixe e instale](https://www.quectel.com/download/quectel_lte5g_windows_usb_driver_v2-7/) o driver necessário para o seu módulo.
Isso é obrigatório para a comunicação adequada com o módulo.

**Passo 2: Conectar o Módulo**
Conecte o módulo ao seu PC usando o cabo USB.
Certifique-se de que o cartão SIM esteja corretamente inserido no módulo.

**Passo 3: Ligar o Módulo**
Pressione o botão de energia no módulo para ligá-lo.

**Passo 4: Acessar as Portas de Comunicação**
Depois que o driver for instalado, você verá três portas COM separadas disponíveis para comunicação com o módulo.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/drivers.PNG"
    style={{ width: 400}}
  />
</div>

**Passo 5: Instalar Ferramenta GUI (QCOM v1.6)**

[Baixe e instale](https://www.quectel.com/download/qcom_v1-6/ ) o QCOM v1.6, uma interface gráfica para interagir com o módulo.
Abra a ferramenta para começar a enviar comandos AT.

**Passo 6: Configurar e Testar a Porta COM**

Abra a ferramenta GUI e selecione a porta COM apropriada para o módulo.
Ajuste as configurações de comunicação conforme necessário (por exemplo, taxa de baud).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG"
    style={{ width: 600}}
  />
</div>

Na caixa de digitação de comando, digite o seguinte comando de teste:

```bash
AT
```

**Passo 7: Verificar Saída**

O módulo responderá com a seguinte saída se a configuração estiver bem-sucedida:

```bash
OK
```

### Raspberry Pi

**Passo 1: Instalar Drivers**

- **1.1. Verificar Compatibilidade do Kernel**
Certifique-se de que o seu Raspberry Pi tenha o kernel mais recente instalado. Use o seguinte comando para verificar a versão do kernel:

```bash
uname -r
```

Para este guia, a versão do kernel é 6.6.xx (Bookworm). Instale o driver USB Quectel correspondente.

- **1.2. Atualizar e Instalar Ferramentas Necessárias**
Execute os seguintes comandos para atualizar o sistema e instalar as ferramentas necessárias:

```bash
sudo apt upgrade
sudo apt install git make gcc
```

- **1.3. Baixar e Instalar o Driver USB Quectel**
Clone o repositório do driver e compile o driver:

```bash
git clone https://github.com/QuecPython/Quectel_Linux_USB_Serial_Option_Driver.git
cd Quectel_Linux_USB_Serial_Option_Driver/src/v6.4.11
sudo make install
```

- **1.4. Conectar e Verificar**

Conecte o módulo ao Raspberry Pi via USB.
Pressione o botão de energia no módulo.
Verifique se o módulo foi detectado corretamente:

```bash
lsusb
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-rpi-small.PNG"
    style={{ width: 600}}
  />
</div>

```bash
ls /dev/ttyUSB*
```

Para comandos AT, use /dev/ttyUSB2 como porta de comunicação.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-list.PNG"
    style={{ width: 600}}
  />
</div>

**Passo 2: Instalar Minicom**

- **2.1. Instalar Minicom**
Instale a ferramenta Minicom para enviar comandos AT:

```bash
sudo apt install minicom
```

- **2.2. Configurar Minicom**
Execute o Minicom no modo de configuração:

```bash
sudo minicom -s
```

Configure ajustes como:

```bash
Port: /dev/ttyUSB2
Baud Rate: 9600
Parity: N
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-settings.PNG"
    style={{ width: 600}}
  />
</div>

**Passo 3: Testar com Comandos AT**

- **3.1 Abrir o Minicom na porta configurada**

```bash
sudo minicom -D /dev/ttyUSB2
```

Digite o seguinte comando para testar a comunicação:

```bash
AT
```

O módulo deverá responder com:

```bash
OK
```

## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[DOC ]** [Manual de Comandos AT V2.0](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_EC2xEG9xEG2x-GEM05_Series_AT_Commands_Manual_V2.0.pdf)

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
