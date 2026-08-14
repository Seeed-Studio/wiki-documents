---
description: Introdução ao uso do Atom-X.
title: Introdução ao uso do Atom-X
keywords:
  - Humanoid
  - Robotics
  - Atom X
  - XIAO ESP32-S3
  - Servo
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp
slug: /atom_x
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/pt-br/atom_x/
createdAt: '2026-05-25'
updatedAt: '2026-05-25'
---

import Link from '@docusaurus/Link';

# Introdução ao uso do Atom-X
## Introdução
Atom X é um kit de robô humanóide bípedo open-source com 17 graus de liberdade (DOF), projetado para desenvolvedores de robótica, makers e instituições educacionais. O robô é acionado por 17 servomotores de barramento Fashionstar RA8-U25H-M, apresentando uma estrutura totalmente impressa em 3D e de código aberto. Ele é equipado com um controlador principal Seeed Studio XIAO ESP32-S3 e uma placa de expansão Grove, com firmware de controle completo pré-instalado de fábrica. Seu editor visual de movimentos baseado na Web oferece depuração em tempo real via navegador, programação por ensino e exportação em JSON, facilitando o desenvolvimento secundário multiplataforma. A placa adaptadora RUC-01 incluída fornece alimentação regulada e interfaces UART, além de suportar controle remoto via Bluetooth/Web. Pronto para uso assim que sai da caixa, é uma plataforma ideal para verificação de algoritmos de movimento e desenvolvimento de robôs de mesa.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Atom-X-17-DOF-Open-Source-Robot-Kit-p-6712.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## 1. Introdução ao produto

- **Configuração de DOF**: 17 DOF no total, cobrindo juntas de braços, tronco e pernas.
- **Estrutura e aparência**: Estrutura totalmente impressa em 3D com arquivos de modelo STP/STL oficialmente open-source, facilitando a substituição de peças, o reforço estrutural e o redesenho externo.
- **Atuadores das juntas**: Servomotores de barramento Fashionstar RA8-U25H-M × 17 (suportam comunicação em barramento com fiação simplificada).
- **Editor visual de movimentos via Web**: Fornece uma plataforma de controle baseada em navegador que não requer instalação, suportando depuração em tempo real dos servos e programação em modo de ensino. Grupos de movimento concluídos podem ser exportados como arquivos no formato padrão `.json` para fácil análise e integração por vários controladores principais (como Arduino, STM32, Raspberry Pi).
- **Pronto para uso assim que sai da caixa**: Pré-configurado com o Seeed Studio XIAO ESP32-S3 como controlador principal, com programas de demonstração de fábrica fornecidos.
- **Expansão multi-módulo**: Emparelhado com a placa de expansão Seeed Studio XIAO com interfaces Grove onboard para conexão de sensores/módulos controladores da série Seeed Grove.
- **Expansibilidade do ecossistema**: Por meio das interfaces Grove na placa de expansão Seeed Studio XIAO, sensores e módulos de controle do ecossistema Grove, como visão e percepção ambiental, podem ser integrados rapidamente.
- **Compatibilidade multiplataforma**: Para reduzir a barreira de desenvolvimento, fornecemos a placa adaptadora RUC-01 com saída de alimentação de 5V/3,3V onboard e interfaces UART. Qualquer controlador com funcionalidade de porta serial pode se comunicar com ela!

## 2. Especificações

| Parâmetro | Valor |
|---|---|
| Graus de liberdade (DOF) | 17 |
| Chassi | Impresso em 3D |
| Servomotores | Servomotores de barramento RA8-U25H-M |
| Placa de interface de alimentação dos servos | RUC-01 fornece 4 interfaces de servo, alimentação de 5V/3,3V para a placa de controle, interface de comunicação serial (interface Grove) |
| Controlador principal | Seeedstudio XIAO ESP32-S3 + Placa de expansão Seeed Studio XIAO |
| Protocolo de comunicação | Comunicação serial assíncrona (UART) |
| Dimensões | 200×122×389 mm |

## 3. Lista de peças

| Item | Qtde |
| ---------------------- | ---- |
| Conjunto de robô 17-DOF | 1 |
| Parafusos KM M2*7mm | 10 |
| Parafusos KB M2*7mm | 10 |
| Parafusos PM M3*6mm | 2 |
| Cabo de servo 200mm 3 pinos | 2 |

:::tip
**O conjunto de robô 17-DOF inclui**

- RA8-U25H-M × 17
- Peças estruturais do robô (conjunto) × 1
- Placa adaptadora RUC-01 × 1
- Seeed XIAO ESP32-S3 × 1
- Placa de expansão Seeed XIAO × 1
  :::

## 4. Dimensões

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/dimensions.png" />
</div>




## 5. Arquitetura de hardware

### Acionamento e gerenciamento de energia (Placa de interface RUC-01)

Servindo como o hub de energia do robô, o módulo de acionamento e gerenciamento de energia (Placa de interface RUC-01) é responsável pelo gerenciamento da comunicação em barramento e pela distribuição de energia:

- **Comunicação dos servos**: 4 interfaces de servos de barramento onboard (suportam expansão em cadeia) responsáveis pela entrega de sinal e energia para os 17 servomotores de barramento.
- **Interface de depuração para PC**: Porta USB Type-C integrada para conexão direta a um host PC para edição e depuração de grupos de movimento.
- **Alimentação do sistema**: Lida com a conversão de tensão e fornece entrada de energia estável para a placa controladora principal.
- **Interface de comunicação**: Fornece uma porta serial UART padrão para receber comandos de controle da placa controladora principal de nível superior.

### Controlador lógico principal e expansão (MCU + Grove Shield)

Servindo como o "cérebro" do robô, o controlador lógico principal e expansão (MCU + Grove Shield) é responsável por executar algoritmos de controle e processar dados de sensores:

- **Controlador central**: Utiliza a placa de desenvolvimento da série Seeed Studio XIAO, compacta em tamanho, mas com desempenho poderoso.
- **Expansão do ecossistema**: Emparelhado com uma placa de expansão com interface Grove que fornece interfaces de uso geral abundantes.
- **Funções principais**: Executa programas de cinemática do robô e se conecta perfeitamente a vários sensores (como ultrassom, visão, módulos de voz etc.) por meio das interfaces Grove para alcançar funções interativas complexas.

### Descrição do fluxo de dados

**Modo de depuração/edição (Debug Mode)**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

Descrição: Ajuste diretamente os ângulos dos servos e salve grupos de movimento via software de PC, ignorando o controlador principal XIAO.

**Modo autônomo (Autonomous Mode)**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

Descrição: O controlador principal XIAO controla autonomamente as ações do robô com base no feedback dos sensores ou em código pré-armazenado.



## 6. Estrutura mecânica

- Exibição da estrutura do robô e numeração padrão de ID dos servos

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/servo_id_layout.webp" />
</div>

- Postura do robô quando todos os servomotores estão em zero grau
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/zero_degree_pose.png" />
</div>


## 7. Desenhos e download de modelos

Para obter os dados completos de impressão 3D, visite: [MakerWorld - Atom X](https://makerworld.com/zh/models/2534886-atom-x-robot#profileId-2790112)

:::tip
Forneceremos gradualmente vídeos de montagem mais completos e instruções ilustradas posteriormente. Fique atento às atualizações nesta página.
:::


## 8. Guia de conexão

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/board_connection_diagram.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/internal_wiring.webp" />
</div>


## 9. Instruções de uso
:::tip
Consulte o manual do usuário do Atom-S para o uso do Atom-X. Todas as operações são idênticas às do Atom-S.
:::

<div style={{textAlign: 'center', marginBottom: '24px'}}>
    <Link to="/atom_s#8-iniciando-seu-primeiro-demo" style={{display: 'inline-block', width: '200px', height: '40px', lineHeight: '40px', backgroundColor: '#007bff', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ Iniciar uma demonstração
    </Link>
</div>

Link do Motion Editor:

<div class="get_one_now_container" style={{textAlign: 'center', margin: '16px 0'}}>
<a class="get_one_now_item" style={{width: 'auto', padding: '10px 24px'}} href="https://wiki.fashionrobo.com/uartbasic/robotstudiopro/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Abrir Motion Editor 🖱️</font></span></strong>
</a></div>

Link do Remote Controller:

<div class="get_one_now_container" style={{textAlign: 'center', margin: '16px 0'}}>
<a class="get_one_now_item" style={{width: 'auto', padding: '10px 24px'}} href="https://wiki.fashionrobo.com/ps2v2/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Abrir Remote Controller 🖱️</font></span></strong>
</a></div>

## FAQ

## P1: Que bateria deve ser usada com o Atom-X?

R: Recomenda-se uma bateria Li-Po 2S ou 3S, usada com um conector XT60.

## P2: Outras placas controladoras principais podem ser usadas em vez da XIAO ESP32-S3?

R: O projeto é otimizado para a XIAO ESP32-S3, mas qualquer placa de desenvolvimento ESP32 com GPIO suficiente pode ser adaptada modificando o código.

## P3: Como faço para atualizar o firmware?

R: Conecte a XIAO ESP32-S3 ao seu computador via USB e envie o novo programa usando Arduino IDE ou PlatformIO.
