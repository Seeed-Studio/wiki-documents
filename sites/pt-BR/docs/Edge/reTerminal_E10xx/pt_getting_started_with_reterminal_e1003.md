---
description: O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com suporte a interação por toque no firmware HMI v1.1.2.
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com até 6 meses de duração de bateria. A interação por toque é atualmente suportada no firmware SenseCraft HMI v1.1.2. Alimentado por ESP32-S3, ele oferece suporte nativo à nossa plataforma de interface sem código SenseCraft HMI para criação fácil de dashboards, além de suportar Arduino e PlatformIO para desenvolvimento adicional. O suporte para Home Assistant (via ESPHome & Open Display) está planejado para uma versão futura. Seja para visualização e controle de dashboards de casa inteligente, displays de informações em escritórios ou projetos educacionais, este dispositivo pronto para uso oferece visuais impressionantes e personalização flexível para atender a todas as suas necessidades.

:::tip
A interação por toque para o reTerminal E1003 é suportada a partir do firmware SenseCraft HMI v1.1.2.
O suporte de biblioteca relacionado a toque está planejado para uma futura versão open-source, proporcionando maior flexibilidade para personalizar painéis. Mais atualizações serão compartilhadas em breve.


O suporte ESPHome para o reTerminal E1003 está em desenvolvimento e estará disponível em uma versão futura.
:::
### Recursos

- **Clareza de escala de cinza de até 16 níveis:** Com 16 níveis de escala de cinza refinada, cada detalhe de texto e gráficos é renderizado com nitidez e clareza excepcionais.
- **Consumo de energia ultrabaixo:** O ePaper consome energia apenas durante as atualizações, resultando em maior duração de bateria e maior eficiência energética.
- **Suporte SenseCraft HMI:** O display reTerminal E Series oferece suporte ao SenseCraft HMI pelo firmware padrão.
- **Ampla gama de aplicações:** Suporta atualização em alta velocidade para atualizações de baixa latência com uma interface paralela TTL (multilinha, alta taxa de transferência) — tornando-o uma escolha ideal para painéis de controle de casa inteligente.
- **Display ePaper de toque de alta resolução:** O display ePaper monocromático de 10,3 polegadas e 1404×1872 é combinado com uma tela sensível ao toque integrada e responsiva, com interação por toque atualmente suportada no firmware SenseCraft HMI v1.1.2.
- **Adaptando-se às necessidades de decoração:** Sem fios para maior liberdade; suporta montagem na parede e colocação em mesa, com alternância flexível entre orientação retrato e paisagem.



### Especificação

| Item | Descrição |
| :--- | :--- |
| **Nome do Produto** | reTerminal E1003 |
| **Processador** | ESP32-S3 com 8MB PSRAM |
| **Armazenamento** | Flash de 32MB, suporta cartão Micro SD |
| **Display** | 10,3" Monocromático/ 16 níveis de escala de cinza |
| **Resolução** | 1404x1872 Pixels |
| **Cartão Micro SD** | Suporta no máximo cartão SD de 32GB, formato FAT32 |
| **Conectividade sem fio** | Wi-Fi 2,4GHz 802.11 b/g/n, Bluetooth 5.0 |
| **Sensores** | Sensores de temperatura e umidade |
| **Microfone** | Reservado para aplicação de interação por voz |
| **Áudio** | Buzzer para alerta sonoro |
| **Bateria** | 3000mAh |
| **Entrada de energia** | USB-C 5V/1A |
| **Suporte de software** | Firmware padrão com suporte a SenseCraft HMI(https://sensecraft.seeed.cc/hmi/)<br />Suporta plataforma de desenvolvimento Arduino/PlatformIO |
| **Temperatura de trabalho** | 0-40°C |
| **Dimensões** | 224mm*187mm*18.6mm |

### Visão geral do hardware

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

### Aplicações

- **Dashboards de automação residencial:** Exiba dados em tempo real da casa inteligente, como temperatura, umidade e qualidade do ar via Home Assistant (o suporte ao driver ESPHome para o E1003 está planejado para uma versão futura).
- **Porta-retratos eletrônico monocromático de baixo consumo:** Com o SenseCraft HMI ou o App, você pode facilmente enviar uma série de fotos do seu álbum remotamente online. Combinado com uma grande tela e-ink monocromática de alta resolução, ele alcança exibição de imagens com consumo ultrabaixo de energia, sem mais se preocupar com a duração da bateria.
- **Displays inteligentes para escritório:** Mostre disponibilidade de salas de reunião, agendas de escritório ou orientações de direção em displays ePaper de baixo consumo e sempre ligados.
- **Displays de varejo e informações públicas:** Placas ePaper de baixo consumo para menus, horários ou indicadores de ocupação com longa duração de bateria.

## Introdução ao SenseCraft HMI

O reTerminal E1003 vem pré-carregado com firmware que suporta o **SenseCraft HMI**, uma plataforma sem código que permite projetar e implantar dashboards personalizados com facilidade.

### Etapa 1. Ligar e configurar a rede

1. Ligue o **Botão de Energia** para ligar o reTerminal E1003.
2. Use seu smartphone para se conectar ao hotspot do dispositivo (modo AP) para configurar as credenciais de Wi-Fi.
3. A tela exibirá um código QR de "Network Configuration" ou use o navegador para abrir a página 192.168.4.1.
4. Depois de conectado à internet, o dispositivo exibirá um **Device Code** ou **Binding QR Code**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### Etapa 2. Vincular o dispositivo

1. Acesse a [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/) no navegador do seu computador.
2. Faça login na sua conta (ou crie uma se ainda não tiver).
3. Navegue até a seção **Device Management** e clique em **Add Device**.
4. Insira o **Device Code** exibido na tela do seu reTerminal E1003 para concluir o processo de vinculação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### Etapa 3. Criar conteúdo na plataforma

1. Vá para a **Home Page** selecione um modelo desejado ou **Workspace** para criar seu trabalho do zero.
2. [Clique neste link para aprender como usar a plataforma HMI se você tiver dúvidas.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Etapa 4. Implantar conteúdo no dispositivo

1. Quando o seu design estiver pronto, clique no botão **Preview** para verificar como ele fica.
2. Clique no botão **Save** ou **deploy**.
3. Selecione o seu reTerminal E1003 vinculado na lista.
4. A plataforma enviará os dados para o seu dispositivo via Wi-Fi. A tela ePaper será atualizada para exibir seu novo dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## Solução de problemas

### P1: O dispositivo não liga

- Certifique-se de que o interruptor de energia está na posição ON
- Conecte o cabo USB-C para carregar o dispositivo
- Verifique se o LED vermelho está sempre aceso (indicando carregamento)
- Se estiver usando energia da bateria, certifique-se de que a bateria está devidamente conectada e carregada

### P2: Não é possível conectar ao Wi-Fi

- Verifique se você está digitando a senha de Wi-Fi correta
- Certifique-se de que sua rede Wi-Fi está operacional
- Verifique se o seu roteador Wi-Fi suporta redes de 2,4GHz (5GHz não é suportado)
- Tente posicionar o dispositivo mais perto do seu roteador Wi-Fi

### P3: Display não atualiza

- Pressione o botão de atualização para acionar uma atualização manualmente
- Verifique se o dispositivo está conectado ao Wi-Fi (sem ícone de desconexão no canto)
- Verifique sua conta SenseCraft para garantir que o dashboard foi implantado corretamente
- Se o problema persistir, tente reiniciar o dispositivo
- Se o dispositivo ainda não responder após a reinicialização, regrave o firmware correspondente na plataforma SenseCraft HMI e verifique se o dispositivo consegue atualizar normalmente

### P4: Conexão de rede perdida

- O dispositivo tentará automaticamente reconectar-se a redes conhecidas
- Quando reconectado, o ícone de desconexão de Wi-Fi desaparecerá
- Se não for possível reconectar, siga o procedimento de redefinição de rede acima

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
