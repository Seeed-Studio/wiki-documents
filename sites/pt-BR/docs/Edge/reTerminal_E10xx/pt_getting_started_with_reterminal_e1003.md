---
description: O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com suporte a toque, apresentando 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com até 6 meses de duração de bateria.
sku: 100090602
title: Introdução ao reTerminal E1003
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
last_update:
  date: 3/19/2026
  author: Jackson.Li
---

# Introdução ao reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com suporte a toque, apresentando 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com até 6 meses de duração de bateria. Alimentado por ESP32-S3, ele suporta nativamente nossa plataforma de UI sem código SenseCraft HMI para criação fácil de dashboards, além de suportar Home Assistant (via ESPHome & Open Display), Arduino e PlatformIO para desenvolvimento adicional. Seja para visualização e controle de dashboards de casa inteligente, displays de informações em escritórios ou projetos educacionais, este dispositivo pronto para uso com tela sensível ao toque oferece visuais impressionantes e personalização flexível para atender a todas as suas necessidades.

## Recursos

- **Clareza de escala de cinza de até 16 níveis:** Com 16 níveis de escala de cinza refinada, cada detalhe de texto e gráficos é renderizado com nitidez e clareza excepcionais.
- **Consumo de energia ultrabaixo:** O ePaper consome energia apenas durante as atualizações, resultando em maior duração de bateria e maior eficiência energética.
- **Suporte a SenseCraft HMI:** O reTerminal E Series Display suporta SenseCraft HMI pelo firmware padrão.
- **Ampla gama de aplicações:** Suporta atualização em alta velocidade para atualizações de baixa latência com uma interface paralela TTL (multilinha, alta taxa de transferência) — tornando-o uma escolha ideal para painéis de controle de casa inteligente.
- **Display ePaper touch de alta resolução:** O display ePaper monocromático de 10,3 polegadas e 1404×1872 é combinado com uma tela sensível ao toque responsiva integrada para interação intuitiva em tela cheia.
- **Adaptando-se às necessidades de decoração:** Sem fios para maior liberdade; suporta montagem na parede e colocação em mesa, com comutação flexível entre orientação retrato e paisagem.

:::note
A plataforma SenseCraft HMI está agora em fase de teste beta, e as funções serão continuamente aprimoradas. No momento, há um limite para o número de gerações de IA e gerações de UI. A tela de trabalho do SenseCraft HMI gradualmente suportará configurações de interação por toque no futuro. Fique atento.
:::

## Especificação

| Item | Descrição |
| :--- | :--- |
| **Nome do Produto** | reTerminal E1003 |
| **Processador** | ESP32-S3 com 8MB PSRAM |
| **Armazenamento** | Flash de 32MB, suporta cartão Micro SD |
| **Display** | 10,3" Monocromático/ 16 níveis de escala de cinza |
| **Resolução** | 1404x1872 Pixels |
| **Cartão Micro SD** | Suporte máximo a cartão SD de 32GB, formato FAT32 |
| **Conectividade sem fio** | Wi-Fi 2,4GHz 802.11 b/g/n, Bluetooth 5.0 |
| **Sensores** | Sensores de temperatura e umidade |
| **Microfone** | Reservado para aplicação de interação por voz |
| **Áudio** | Buzzer para alerta sonoro |
| **Bateria** | 3000mAh |
| **Entrada de energia** | USB-C 5V/1A |
| **Suporte de software** | Firmware padrão suporta SenseCraft HMI(https://sensecraft.seeed.cc/hmi/)<br />Suporta plataforma de desenvolvimento Arduino/PlatformIO |
| **Temperatura de trabalho** | 0-40°C |
| **Dimensões** | 224mm*187mm*18.6mm |

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **Botão de atualização de tela**
2. **Botão de página para cima e para baixo**
3. **Área da antena Wi-Fi**
4. **Porta para cartão MicroSD/TF**
5. **Interruptor de energia**
6. **LED vermelho de energia**
7. **LED verde de status**
8. **Porta USB-C de dados e carregamento**
9. **Porta de expansão**
10. **Furo de parafuso para montagem do suporte**
11. **Suporte**
12. **Parafuso de montagem do suporte**

## Aplicações

- **Dashboards de automação residencial:** Exiba dados em tempo real da casa inteligente, como temperatura, umidade e qualidade do ar via Home Assistant.
- **Porta-retratos eletrônico monocromático de baixo consumo:** Com SenseCraft HMI ou o App, você pode facilmente enviar uma série de fotos do seu álbum remotamente online. Combinado com uma grande tela e-ink monocromática de alta resolução, ele alcança exibição de imagens com consumo ultrabaixo de energia, sem mais se preocupar com a duração da bateria.
- **Displays de escritório inteligentes:** Mostre disponibilidade de salas de reunião, agendas de escritório ou orientação direcional em displays ePaper de baixo consumo e sempre ligados.
- **Displays de informação para varejo e espaços públicos:** Placas ePaper de baixo consumo para menus, horários ou indicadores de ocupação com longa duração de bateria.

## Introdução ao SenseCraft HMI

O reTerminal E1003 vem pré-carregado com firmware que suporta **SenseCraft HMI**, uma plataforma sem código que permite projetar e implantar dashboards personalizados com facilidade.

### Etapa 1. Ligar e configurar a rede

1. Ligue o **Botão de energia** para ligar o reTerminal E1003.
2. Use seu smartphone para conectar ao hotspot do dispositivo (modo AP) para configurar as credenciais de Wi-Fi.
3. A tela exibirá um QR code de "Network Configuration" ou use o navegador para abrir a página 192.168.4.1.
4. Depois de conectado à internet, o dispositivo exibirá um **Device Code** ou **Binding QR Code**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### Etapa 2. Vincular o dispositivo

1. Acesse a [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/) no navegador do seu computador.
2. Faça login na sua conta (ou crie uma se ainda não tiver).
3. Navegue até a seção **Device Management** e clique em **Add Device**.
4. Insira o **Device Code** exibido na tela do seu reTerminal E1003 para concluir o processo de vinculação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### Etapa 3. Criar conteúdo na plataforma

1. Vá para a **Home Page** selecione um modelo que você deseja ou **Workspace** para criar seu trabalho do zero.
2. [Clique neste link para aprender como usar a HMI Platform se você tiver dúvidas.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Etapa 4. Implantar conteúdo no dispositivo

1. Quando seu design estiver pronto, clique no botão **Preview** para verificar como ele fica.
2. Clique no botão **Save** ou **deploy**.
3. Selecione seu reTerminal E1003 vinculado na lista.
4. A plataforma enviará os dados para o seu dispositivo via Wi-Fi. A tela ePaper será atualizada para exibir seu novo dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## Recursos

- [Esquemático do reTerminal E1003 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

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
