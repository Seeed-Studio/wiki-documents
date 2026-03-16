---
description: O reTerminal E1004 é um display ePaper colorido de 13,3 polegadas, open-source, alimentado por ESP32-S3, com tecnologia E Ink® Spectra™ 6 e suporte ao SenseCraft HMI.
title: Primeiros passos com o reTerminal E1004
sidebar_position: 4
keywords:
  - reTerminal E1004
  - Display ePaper
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Painel de Controle para Casa Inteligente
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
createdAt: '2026-01-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1004/
---

# Primeiros passos com o reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

## Introdução

O reTerminal E1004 é um display ePaper colorido de 13,3 polegadas, open-source, com autonomia de bateria de até 6 meses. Alimentado por ESP32-S3, ele oferece suporte nativo à nossa plataforma de interface sem código SenseCraft HMI para criação fácil de dashboards, ao mesmo tempo em que é compatível com Home Assistant, Arduino e ESP-IDF para desenvolvimento avançado. Com o display ePaper colorido E Ink® Spectra™ 6, é perfeito como porta-retratos digital e para visualização de dashboards coloridos.

### Recursos

- **Display Colorido de Alta Definição:** Display ePaper colorido E Ink® Spectra™ 6 de 13,3 polegadas com alta resolução de 1200x1600 pixels.
- **Processamento Poderoso:** Alimentado por ESP32-S3 com 8MB de PSRAM e 32MB de Flash para desempenho robusto.
- **Consumo de Energia Ultra Baixo:** Bateria interna de 5000mAh com suporte a até 6 meses de uso com uma única carga (atualização a cada 6 horas).
- **Desenvolvimento de UI sem Código:** Firmware padrão com suporte ao SenseCraft HMI para criação de dashboards via arrastar e soltar e design assistido por IA.
- **Ampla Compatibilidade:** Compatível com Home Assistant (ESPHome), Arduino, PlatformIO e ESP-IDF.
- **Conectividade Rica:** Wi-Fi 2,4GHz (802.11 b/g/n) e Bluetooth 5.0 integrados.
- **Sensores e Áudio Integrados:** Sensores internos de temperatura e umidade e buzzer para alertas
- **Armazenamento Pronto para Uso:** Inclui um cartão Micro SD de 16GB (suporta até 32GB).

## Especificações

| Item | Descrição |
| :--- | :--- |
| **Nome do Produto** | reTerminal E1004 |
| **Processador** | ESP32-S3 com 8MB PSRAM |
| **Armazenamento** | 32MB Flash, suporte a cartão Micro SD (até 32GB, 16GB incluídos) |
| **Display** | ePaper colorido Spectra™ 6 de 13,3" |
| **Resolução** | 1200 x 1600 Pixels |
| **Conectividade Sem Fio** | Wi-Fi 2,4GHz 802.11 b/g/n, Bluetooth 5.0 |
| **Sensores** | Sensores de temperatura e umidade |
| **Áudio** | Buzzer (Alerta sonoro) |
| **Bateria** | 5000mAh |
| **Entrada de Energia** | USB-C 5V/1A |
| **Suporte de Software** | SenseCraft HMI (Padrão), ESPHome, Arduino, PlatformIO, ESP-IDF |
| **Temperatura de Operação** | 0-40°C |
| **Dimensões** | 376mm x 311mm x 40mm |

## Aplicações

- **Porta-retratos Eletrônico de Baixo Consumo:** Exiba fotos de família ou arte em alta resolução com qualidade semelhante a papel sem se preocupar com carregamentos diários.
- **Quadro de Informações Familiar:** Acompanhe calendários, notificações, clima e notícias em um formato elegante e sempre ligado.
- **Dashboard de Automação Residencial:** Visualize dados em tempo real da casa inteligente (temperatura, umidade, qualidade do ar) via Home Assistant.
- **Display para Escritório Inteligente:** Mostre agendas de salas de reunião, disponibilidade ou orientações de direção.
- **Sinalização para Varejo e Ambientes Públicos:** Menus, cronogramas ou indicadores de ocupação com eficiência energética.
- **Educação e Prototipagem:** Uma plataforma ideal para aprender IoT, sistemas embarcados e design de UI.

## Visão Geral de Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **Botão de Página Acima e Abaixo:** Usado para navegação e mudança de páginas.
2. **Botão de Atualização de Tela:** Usado para atualizar manualmente o display de E-ink.
3. **LED Vermelho de Energia:** Indica o status de alimentação do dispositivo.
4. **Porta USB-C para Dados e Carga:** Para carregar o dispositivo e transmissão de dados.
5. **Interruptor de Energia:** Para ligar ou desligar a alimentação do dispositivo.
6. **LED Verde de Status:** Indica o status operacional ou de sistema atual.
7. **Boot:** Usado para iniciar o sistema ou entrar no modo de boot.
8. **Reset:** Para reiniciar os componentes de hardware.
9. **Porta de Expansão:** Para conectar módulos de expansão ou periféricos externos.
10. **Parafusos de Fixação do Suporte:** Usados para fixar o dispositivo em seu suporte.
11. **Suporte Metálico:** Fornece suporte físico e estabilidade para o dispositivo.

## Primeiros Passos com o SenseCraft HMI

O reTerminal E1004 vem pré-carregado com firmware que oferece suporte ao **SenseCraft HMI**, uma plataforma sem código que permite projetar e implantar dashboards personalizados com facilidade.

### Etapa 1. Ligar e Configurar a Rede

1. Ligue o **Botão de Energia** para ligar o reTerminal E1004.
2. Use seu smartphone para se conectar ao hotspot do dispositivo (modo AP) para configurar as credenciais de Wi-Fi.
3. A tela exibirá um código QR de "Configuração de Rede" ou use o navegador para abrir a página 192.168.4.1.
4. Após se conectar à internet, o dispositivo exibirá um **Código do Dispositivo** ou **Código QR de Vinculação**.

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### Etapa 2. Vincular o Dispositivo

1. Visite a [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/) no navegador do seu computador.
2. Faça login na sua conta (ou crie uma se ainda não tiver).
3. Vá até a seção **Gerenciamento de Dispositivos** e clique em **Adicionar Dispositivo**.
4. Digite o **Código do Dispositivo** exibido na tela do seu reTerminal E1004 para concluir o processo de vinculação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### Etapa 3. Criar Conteúdo na Plataforma

1. Vá para a **Home Page**, selecione um modelo desejado ou **Wrokspace** para criar seu trabalho do zero.
2. [Clique neste link para aprender como usar a Plataforma HMI se você tiver alguma dúvida.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Etapa 4. Implantar o Conteúdo no Dispositivo

1. Quando seu design estiver pronto, clique no botão **Preview** para verificar como ele fica.
2. Clique no botão **Save** ou **deploy**.
3. Selecione seu reTerminal E1004 vinculado na lista.
4. A plataforma enviará os dados para o seu dispositivo via Wi-Fi. A tela ePaper será atualizada para exibir seu novo dashboard.

:::note
Devido à natureza da tecnologia E Ink, a atualização da tela pode levar alguns segundos para completar a atualização da imagem e eliminar qualquer efeito de fantasma.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## Recursos

- [Esquemático do reTerminal E1004 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
