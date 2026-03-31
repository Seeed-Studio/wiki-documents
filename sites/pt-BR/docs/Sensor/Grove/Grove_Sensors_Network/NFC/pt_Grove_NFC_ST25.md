---
description: Este Wiki é sobre o uso do Grove - NFC (ST25DV64).
title: Grove - NFC(ST25DV64)
keywords:
  - NFC
  - ST25DV64
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-nfc-st25dv64
sku: 101021093
last_update:
  date: 5/16/2023
  author: Stephen Lo
createdAt: '2023-05-17'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/grove-nfc-st25dv64/
---

# Grove - NFC (ST25DV64)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={450} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-NFC-ST25DV64KC-p-5688.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - NFC (ST25DV64) é uma placa de tag NFC/RFID inovadora e versátil baseada no avançado chip ST25DV64K da STMicroelectronics. Este chip dinâmico suporta os padrões de tag ISO/IEC 15693 e NFC Forum Tipo 5, tornando-o compatível com uma ampla variedade de dispositivos habilitados para NFC.

Projetado para makers, entusiastas de DIY e qualquer pessoa interessada em experimentar a tecnologia NFC, o Grove - NFC (ST25DV64) oferece uma solução simples e econômica para adicionar funcionalidade NFC aos seus projetos. Com sua natureza de código aberto, você não só pode usar esta placa como está, mas também ajustá-la para se adequar melhor às suas necessidades específicas, esteja você construindo um sistema de casa inteligente, um dispositivo de controle de acesso seguro, uma solução de pagamento sem contato ou um sistema de rastreamento de inventário.

O Grove - NFC (ST25DV64) é mais do que apenas uma tag NFC. Ele também é uma ferramenta poderosa que você pode usar para aprender sobre a tecnologia NFC e suas aplicações. Com seus recursos ricos, você pode explorar vários aspectos de NFC, desde transferência de dados e colheita de energia até proteção de dados e saída de propósito geral.

Esta placa foi projetada tendo a conveniência em mente. Ela possui o conector padrão Grove (HY2.0 - 4Pin), tornando-a facilmente compatível com outros módulos Grove. Além disso, funciona com sistemas de 3,3 V e 5 V, tornando-a uma solução flexível para suas necessidades de NFC.

Apesar de seu tamanho pequeno, o Grove - NFC (ST25DV64) é poderoso quando se trata de armazenamento. Ele oferece 64 Kbits de EEPROM, organizada em 2048 blocos de 32 bits cada, fornecendo amplo espaço para seus dados.

Nota: Lembre-se de que o Grove - NFC (ST25DV64) não vem com uma antena NFC. Você precisará comprar uma antena NFC de 13,56 MHz separada para usar com este produto. Você também pode comprar essa antena na Seeedstudio.

Se você é iniciante em NFC ou um desenvolvedor experiente procurando uma solução NFC fácil de usar, o Grove - NFC (ST25DV64) é uma excelente escolha. Seu hardware e software de código aberto, combinados com sua facilidade de uso e versatilidade, fazem dele uma ferramenta inestimável para qualquer projeto NFC.

:::tip
Lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que ajudará você a escolher o sensor de gás que melhor atenda às suas necessidades.
:::

## Recursos

- Baseado no chip ST25DV64K, com suporte aos padrões de tag ISO/IEC 15693 e NFC Forum Tipo 5
- 64 Kbits de EEPROM, organizada em 2048 blocos de 32 bits cada
- Colheita de energia e GPO (Saída de Propósito Geral)
- Modo de transferência rápida e múltiplos níveis de proteção de dados
- Compatível com sistemas de 3,3 V e 5 V
- Usa o conector padrão Grove (HY2.0 - 4Pin) para fácil integração com outros módulos Grove
- Hardware e software de código aberto

## Especificação

- Chip: ST25DV64K
- Frequência de operação: 13,56 MHz
- Protocolo: ISO/IEC 15693
- Interface de comunicação: I2C
- Conector Grove: HY2.0 de 4 pinos
- Tensão de operação: 3,3/5 V

## Conteúdo da Caixa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/2.jpg" alt="pir" width={500} height="auto" /></p>

- 1x Placa Grove - NFC(ST25DV64)
- 2x Cabos Grove (20 cm)

## Aplicações

- **Controle de Acesso:** Use o Grove - NFC (ST25DV64) como um cartão de acesso para sistemas de controle de acesso.
- **Automação Residencial Inteligente:** Armazene dados de configuração na tag para controlar dispositivos de casa inteligente ou acionar ações específicas.
- **Pagamentos Sem Contato:** Integre a tag em um sistema de pagamento para transações sem contato.
- **Pareamento de Dispositivos:** Simplifique o processo de pareamento entre dispositivos armazenando informações de conexão na tag NFC.
- **Rastreamento de Inventário:** Anexe a tag NFC aos produtos para armazenar informações do produto e simplificar o gerenciamento de inventário.

## Visão Geral de Hardware

### Mapa de Pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/3.png" alt="pir" width={600} height="auto" /></p>

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Materiais necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.3</th>
   <th>Antena NFC</th>
      <th>Grove - NFC(ST25DV64)</th>
  </tr>
    <tr>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://raw.githubusercontent.com/Longan-Labs/NFC_ST25DV_RES/main/images/NFC_ANTENNA.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={250} height="auto" /></p></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/NFC-Antenna-p-1805.html?queryID=32009a01d3dd8bba3d47aacebce9f91d&objectID=1138&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::note
**1**. Insira o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2**. Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - NFC (ST25DV64) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

:::note
O Grove - NFC (ST25DV64) não vem com uma antena NFC. Portanto, você precisará comprar uma antena NFC de 13,56 MHz separada para usar com este produto. Você também pode comprar essa antena na Seeedstudio.
:::

| Seeeduino     | Grove - NFC (ST25DV64) |
|---------------|-------------------------|
| 3.3/5V        | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [Biblioteca Arduino ST25DV](https://github.com/limengdu/ST25DV) do Github.

- **Passo 2.** Consulte [Como instalar biblioteca](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Após baixar e instalar a biblioteca corretamente, você pode encontrar um programa de exemplo chamado `ST25DV_HelloWorld.ino` na pasta de exemplos. Este programa é projetado para o módulo ST25DV.

```cpp
#include "ST25DVSensor.h"

#define DEV_I2C         Wire
ST25DV st25dv(12, -1, &DEV_I2C);

void setup() {
  const char uri_write_message[] = "seeedstudio.com";       // Uri message to write in the tag
  const char uri_write_protocol[] = URI_ID_0x01_STRING; // Uri protocol to write in the tag
  String uri_write = String(uri_write_protocol) + String(uri_write_message);
  String uri_read;

  // Initialize serial for output.
  Serial.begin(115200);

  // The wire instance used can be omitted in case you use default Wire instance
  if(st25dv.begin() == 0) {
    Serial.println("System Init done!");
  } else {
    Serial.println("System Init failed!");
    while(1);
  }

  if(st25dv.writeURI(uri_write_protocol, uri_write_message, "")) {
    Serial.println("Write failed!");
    while(1);
  }

  delay(100);

  if(st25dv.readURI(&uri_read)) {
    Serial.println("Read failed!");
    while(1);
  }

  Serial.println(uri_read.c_str());

  if(strcmp(uri_read.c_str(), uri_write.c_str()) == 0) {
    Serial.println("Successfully written and read!");
  } else {
    Serial.println("Read bad string!");
  }
}

void loop() {  
  //empty loop
} 
```

- **Passo 4.** Faça o upload do demo.

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Você obterá o resultado abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/5.png" alt="pir" width={700} height="auto" /></p>

Depois de fazer o upload do programa fornecido para o seu Arduino, o seu Grove - NFC (ST25DV64) se torna uma Tag NFC totalmente funcional, que pode operar de forma independente. Você pode removê-lo da sua placa Arduino; ele não requer nenhuma configuração adicional para funcionar.

Para testar sua funcionalidade, você precisará de um smartphone com NFC, Android ou Apple. A antena NFC desse dispositivo está localizada ao lado da câmera. No entanto, se você não tiver certeza sobre a localização da antena NFC no seu smartphone, será útil pesquisar isso online.

Coloque a antena NFC do telefone próxima à antena NFC do Grove - NFC (ST25DV64). Seu smartphone deve exibir um aviso solicitando a abertura de uma página da web em st.com. Essa resposta indica que seu Grove - NFC (ST25DV64) está funcionando corretamente como uma Tag NFC e demonstra a funcionalidade da demonstração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/4.jpg" alt="pir" width={300} height="auto" /></p>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://github.com/Longan-Labs/NFC_ST25DV_RES/raw/main/Grove%20-%20NFC(ST25DV64).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - NFC(ST25DV64)](https://files.seeedstudio.com/wiki/Grove-NFCST25/Grove-NFC(ST25DV64).zip)
- **[PDF]** [ST25DV64K Datasheet](https://files.seeedstudio.com/wiki/Grove-NFCST25/st25dv.pdf)

## Suporte Técnico e Discussão de Produtos

.

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
