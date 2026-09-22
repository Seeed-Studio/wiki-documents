---
description: "Capítulo 5 do Curso para Iniciantes em Inteligência Incorporada da Seeed — fundamentos do barramento CAN, quadros de dados padrão vs estendidos, a camada de enlace de dados CAN e SocketCAN."
title: Capítulo 5 - Barramento CAN e Comunicação com o Motor
keywords:
  - reBot
  - CAN Bus
  - CAN Protocol
  - SocketCAN
  - DM Motor
  - RS Motor
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_5
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 2 · Capítulo 5 · Teoria</span>
    <h2>5. Barramento CAN e Comunicação com o Motor</h2>
    <p>
      Capítulo 5 do Curso para Iniciantes em Inteligência Incorporada da Seeed — fundamentos do barramento CAN, quadros de dados padrão vs
      estendidos, a camada de enlace de dados CAN e SocketCAN.
    </p>
    <div className="hero-actions">
      <a href="#principles">Princípios do CAN</a>
      <a href="#protocol">Protocolo CAN</a>
      <a href="#socketcan">SocketCAN</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>5.1 Princípios Básicos do CAN</span>
    <span>5.2 Protocolo CAN</span>
    <span>5.3 SocketCAN</span>
  </div>
</section>

<RebotCourseNav />

<section className="section-card">
  <p>Após concluir esta seção, você deverá ser capaz de entender as seguintes questões:</p>

- Como um dado é enviado no barramento CAN;
- De quais partes é composto um quadro de dados CAN;
- O que representam, respectivamente, CAN ID, DLC e Data;
- Qual é a diferença entre quadros padrão e quadros estendidos;
- Quais são os papéis de campos como CRC e ACK.

Para o desenvolvimento prático, não é necessário memorizar desde o início cada bit de um quadro CAN.

:::tip
A coisa mais importante na fase iniciante é primeiro entender: **ID, DLC, Data**.
:::

</section>

## 5.1 Princípios Básicos do CAN

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Princípios</span>
    <h2>5.1 Princípios Básicos do CAN</h2>
  </div>

CAN é a abreviação de Controller Area Network e é um protocolo de comunicação serial padronizado internacionalmente pela ISO. A estrutura de rede do barramento CAN possui duas formas: malha fechada e malha aberta.

De modo geral, a estrutura de rede de barramento CAN usada por braços robóticos ou robôs utiliza um barramento CAN em malha fechada, isto é, um resistor de 120 ohms é conectado em cada extremidade do barramento, e as duas linhas de sinal formam um loop. Esse barramento CAN é definido pelo padrão ISO 11898 e é uma rede CAN de alta velocidade e curta distância, com taxa de comunicação de 125 kbit/s a 1 Mbit/s. Em uma taxa de comunicação de 1 Mbit/s, o comprimento máximo do barramento é de 40 m.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-01.png" alt="Rede de barramento CAN" />
</div>

O barramento é composto por duas linhas de sinal, CAN_L e CAN_H. O CAN transmite sinais diferenciais, representando o nível do barramento por meio da diferença de tensão entre as duas linhas de sinal, isto é, CAN_H - CAN_L. O nível correspondente ao valor lógico 1 é chamado de nível recessivo, e o correspondente ao valor lógico 0 é chamado de nível dominante. Na ISO 11898, o nível recessivo está próximo de uma diferença de tensão de 0, e o nível dominante está principalmente próximo de uma diferença de tensão de 2 V.

</section>

## 5.2 Protocolo CAN

<section id="protocol" className="section-card">
  <div className="section-title">
    <span>Protocolo</span>
    <h2>5.2 Protocolo CAN</h2>
  </div>

| Tipo de quadro | Finalidade do quadro |
| :--- | :--- |
| Quadro de dados | Envia dados |
| Quadro remoto | Solicita dados |
| Quadro de erro | Reporta erros do barramento |
| Quadro de sobrecarga | Solicita atraso |
| Espaço entre quadros | Separa quadros consecutivos |

:::note
Como os motores DM usam quadros de dados padrão CAN 2.0 e os motores RS usam o formato de quadro de dados estendido CAN 2.0, abaixo são apresentados apenas esses dois formatos de quadro de dados. Recomenda-se ler a introdução a seguir em conjunto com a seção de protocolo na folha de dados do motor.
:::

### 5.2.1 Quadro de Dados Padrão reBot DM (11 bytes no total)

| **Byte** | **Campo**         | **Atribuição de bits**                                   |
| -------- | ----------------- | -------------------------------------------------------- |
| Byte 1   | Informações do quadro | Bit 7: FF, Bit 6: RTR, Bit 5: X, Bit 4: X, Bits 3–0: DLC |
| Byte 2   | ID do quadro 1    | Bits 7–0: ID10–ID3                                       |
| Byte 3   | ID do quadro 2    | Bits 7–5: ID2–ID0, Bits 4–0: X                           |
| Byte 4   | Dado 1            | DATA1                                                    |
| Byte 5   | Dado 2            | DATA2                                                    |
| Byte 6   | Dado 3            | DATA3                                                    |
| Byte 7   | Dado 4            | DATA4                                                    |
| Byte 8   | Dado 5            | DATA5                                                    |
| Byte 9   | Dado 6            | DATA6                                                    |
| Byte 10  | Dado 7            | DATA7                                                    |
| Byte 11  | Dado 8            | DATA8                                                    |


**Parte de descrição do quadro (primeiros 3 bytes):**

- **O Byte 1 contém as informações do quadro.** O bit 7 (FF) indica o formato do quadro. Em um quadro padrão, FF é 0. O bit 6 (RTR) indica o tipo de quadro. RTR=0 indica um quadro de dados, e RTR=1 indica um quadro remoto. DLC indica o comprimento real dos dados quando se trata de um quadro de dados.
- **Os Bytes 2 a 5 são o ID do quadro.** O ID de um quadro de dados padrão possui 11 bits. Enviado sequencialmente de ID10 a ID0, pode haver 2<sup>11</sup> tipos de mensagens. A faixa de ID do quadro é: 000-7FF.

:::warning
É proibido que os 7 bits superiores sejam todos recessivos (configuração proibida: ID=1111111XXXX).
:::

**Parte de dados do quadro (últimos 8 bytes):**

- **Os Bytes 4~11 são os dados reais do quadro de dados.**

### 5.2.2 Quadro de Dados Estendido reBot RS (13 bytes)

| **Byte** | **Campo**         | **Atribuição de bits**                                   |
| -------- | ----------------- | -------------------------------------------------------- |
| Byte 1   | Informações do quadro | Bit 7: FF, Bit 6: RTR, Bit 5: X, Bit 4: X, Bits 3–0: DLC |
| Byte 2   | ID do quadro 1    | Bits 7–0: ID28–ID21                                      |
| Byte 3   | ID do quadro 2    | Bits 7–0: ID20–ID13                                      |
| Byte 4   | ID do quadro 3    | Bits 7–0: ID12–ID5                                       |
| Byte 5   | ID do quadro 4    | Bits 7–3: ID4–ID0, Bits 2–0: X                           |
| Byte 6   | Dado 1            | DATA1                                                    |
| Byte 7   | Dado 2            | DATA2                                                    |
| Byte 8   | Dado 3            | DATA3                                                    |
| Byte 9   | Dado 4            | DATA4                                                    |
| Byte 10  | Dado 5            | DATA5                                                    |
| Byte 11  | Dado 6            | DATA6                                                    |
| Byte 12  | Dado 7            | DATA7                                                    |
| Byte 13  | Dado 8            | DATA8                                                    |

**Parte de descrição do quadro (primeiros 5 bytes):**

- **O Byte 1 contém as informações do quadro.** O bit 7 (FF) indica o formato do quadro. Em um quadro estendido, FF é 1. O bit 6 (RTR) indica o tipo de quadro. RTR=0 indica um quadro de dados, e RTR=1 indica um quadro remoto. DLC indica o comprimento real dos dados quando se trata de um quadro de dados.
- **Os Bytes 2 a 5 são o ID do quadro.** O ID no formato estendido possui 29 bits. O ID básico vai de ID28 a ID18, e o ID estendido é representado por ID17 a ID0. O ID básico é o mesmo que o ID no formato padrão. Podem existir 2<sup>29</sup> tipos de mensagens, e há lacunas na camada de enlace de dados (transparentes para o operador). A faixa de ID do quadro é 0000 0000-1FFF FFFF.

:::warning
É proibido que os 7 bits superiores sejam todos recessivos (configuração proibida: ID básico=1111111XXXX).
:::

**Parte de dados do quadro (últimos 8 bytes):**

- **Os Bytes 6~13 são os dados reais do quadro de dados.**

### 5.2.3 Camada de Enlace de Dados CAN

O barramento CAN pode ser entendido como um "grupo de bate-papo". Muitos dispositivos estão conectados ao barramento, por exemplo:

- Controlador principal;
- Motores;
- Sensores;
- Sistema de gerenciamento de bateria;
- Outros módulos de controle.

Todos os dispositivos compartilham o mesmo barramento CAN. Quando um dispositivo deseja enviar dados, ele não pode simplesmente enviá-los de forma arbitrária; em vez disso, deve empacotar os dados em um **quadro de dados CAN** completo, de acordo com o formato especificado pelo protocolo CAN.

Um quadro CAN pode ser entendido de forma simples como:

**Início do envio → Número da mensagem → Comprimento dos dados → Dados reais → Verificação dos dados → Confirmação de recebimento → Fim do envio**

A estrutura correspondente do quadro CAN pode ser simplificada como:

**SOF → ID → Campo de controle → DLC → Dados → CRC → ACK → EOF**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-02.png" alt="Estrutura do quadro CAN" />
</div>

Veja a tabela abaixo para uma explicação detalhada:

| Nome | Função |
| :--- | :--- |
| Segmento ocioso (barramento ocioso) | O barramento está em nível recessivo 1, e nenhum nó opera o barramento. Quando nenhum dispositivo está enviando dados, o barramento CAN está em estado ocioso. No momento, nenhum dispositivo está falando e todos estão aguardando. |
| Início de quadro (SOF) | SOF é fixado como um bit dominante `0`. Como o barramento CAN está em `1` quando ocioso, quando `0` aparece de repente no barramento, outros dispositivos sabem: um dispositivo começou a enviar dados. Portanto, o SOF pode ser entendido como: **"Estou começando a enviar."** |
| Segmento de arbitragem (ID do quadro, RTR ou SRR) | **ID** — pode ser entendido como o número desta mensagem. Por exemplo, no controle de motor, pode-se usar `0x01`: comando de controle do motor 1; `0x02`: comando de controle do motor 2, etc. **ID representa com mais precisão "a identidade ou o tipo da mensagem". Quanto menor o valor do ID, maior a prioridade.** <br/>**RTR** — é usado principalmente para distinguir: quadro de dados comum RTR=0 e quadro de requisição remota RTR=1. Ao enviar dados CAN comuns no dia a dia, RTR geralmente é 0. <br/>**SRR** — um bit de arbitragem dedicado a quadros estendidos, fixado em 1. Usado principalmente para garantir que, sob o mesmo ID básico, quadros padrão tenham prioridade sobre quadros estendidos. |
| Segmento de controle (IDE, bits reservados, DLC) | O bit IDE é usado para distinguir quadros padrão de quadros estendidos. **IDE = 1** quadro estendido, ID de 29 bits. **IDE = 0** quadro padrão, ID de 11 bits. O quadro estendido possui uma faixa de ID maior e pode fornecer mais números de mensagem. <br/>**DLC** — informa ao receptor quantos dados existem. Por exemplo: DLC = 1, indicando 1 Byte de dado (8 bits); DLC = 4, indicando 4 Bytes de dados (32 bits); DLC = 8, indicando 8 Bytes de dados (64 bits). |
| Campo de dados | Este é o conteúdo real dos dados, com comprimento correspondente ao DLC. Por exemplo, o controlador principal precisa enviar ao motor: posição alvo; velocidade alvo; torque alvo. **Verifique o protocolo de comunicação CAN fornecido pelo fabricante do dispositivo para confirmar o que cada byte representa.** |
| Segmento CRC | O "código de verificação" dos dados CAN. Realiza o cálculo CRC em todos os bits de dados, incluindo início de quadro, segmento de arbitragem, segmento de controle e segmento de dados. **Verifica se ocorreram erros durante a transmissão dos dados CAN.** O delimitador CRC deve estar em nível recessivo. |
| Segmento ACK | ACK — informa ao transmissor "Eu recebi". Após o transmissor terminar de enviar, ele libera o barramento para o nível recessivo 1. Se o receptor receber corretamente, precisa responder com nível dominante 0 neste bit. Nesse momento, o transmissor lê o slot ACK como 0, indicando que o ACK foi recebido. O delimitador ACK é quando o receptor libera o nível, que é recessivo. |
| Fim de quadro (EOF, **End Of Frame**) | A transmissão atual de dados CAN termina. 7 bits recessivos 1. |

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-03.png" alt="Camada de enlace de dados CAN" />
</div>

</section>

## 5.3 SocketCAN

<section id="socketcan" className="section-card">
  <div className="section-title">
    <span>Ferramentas</span>
    <h2>5.3 SocketCAN</h2>
  </div>

SocketCAN é uma implementação amplamente utilizada do protocolo CAN em sistemas Linux. O SocketCAN usa a API de socket e a tecnologia de pilha de rede do Linux para implementar drivers de dispositivos CAN como interfaces de rede, tornando-o fácil de usar e altamente compatível.

Documentação de referência para uso detalhado: <a href="https://docs.linuxkernel.org.cn/networking/can.html" target="_blank" rel="noopener noreferrer">https://docs.linuxkernel.org.cn/networking/can.html</a>

</section>

</div>
