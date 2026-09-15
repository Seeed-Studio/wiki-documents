---
description: Procedimento de calibração de CO₂ para o sensor meteorológico compacto SenseCAP S1000 V2 10-em-1.
title: Calibração de CO₂ do SenseCAP S1000 V2
keywords:
  - SenseCAP
  - SenseCAP S1000 V2
  - Calibração de CO2
  - Sensor Meteorológico Compacto
image: https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg
slug: /sensecap_s1000_v2_co2_calibration
sku: 101991024
last_update:
  date: 09/09/2026
  author: Zhai Chenyang
createdAt: '2026-09-09'
updatedAt: '2026-09-09'
url: https://wiki.seeedstudio.com/pt-br/sensecap_s1000_v2_co2_calibration/
---

# Calibração de CO₂ do SenseCAP S1000 V2

:::note
Este procedimento de calibração de CO₂ se aplica apenas ao **SKU 101991024** e não é compatível com a estação meteorológica multiem-um de CO₂ na versão IAP.
:::
   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg"/></div>
## Métodos de calibração

- **Correção Automática de Linha de Base (ABC):** O sensor identifica a menor concentração estável de CO₂ em um período específico e a ajusta para o alvo ABC, normalmente em torno de 400 ppm. Este método é adequado para escritórios, residências e outros ambientes que são ventilados regularmente e periodicamente atingem níveis de CO₂ de ar fresco externo. No S1000, o período de correção automática pode ser configurado usando `SA_ABC`, em horas.
- **Calibração de um ponto com alvo:** A leitura do sensor é ajustada para uma concentração conhecida de CO₂, como 1.000 ppm confirmados usando gás de calibração certificado ou um instrumento de referência confiável. Este método é adequado para calibração precisa em campo, ambientes com níveis consistentemente altos de CO₂ ou locais que não são regularmente expostos a ar fresco. No S1000, a concentração alvo pode ser inserida usando `SA_TC`, e a calibração de um ponto é executada imediatamente após a inserção do valor.

## Procedimento detalhado de calibração

### Procedimento de calibração automática ABC

#### Precauções antes de habilitar o ABC

- Durante cada ciclo de ABC, o ambiente deve atingir um nível de CO₂ próximo à concentração de fundo externa por um período de tempo e permanecer relativamente estável.
- O ABC é adequado para residências, escritórios, salas de aula e salas de reunião ventilados regularmente.
- Não é adequado para estufas, instalações de criação de animais, espaços continuamente ocupados ou fechados e ambientes onde CO₂ é adicionado intencionalmente.
- O ABC avalia tanto a menor concentração detectada quanto sua estabilidade; ele não trata simplesmente a menor leitura como 400 ppm.
- Desvios significativos de medição podem exigir vários ciclos de ABC para serem corrigidos gradualmente.

#### Configurar e habilitar o ABC

`SA_ABC` define o ciclo de calibração ABC para o sensor de CO₂ integrado ao sensor meteorológico compacto SenseCAP S1000 V2 10-em-1.

<div class="table-center">

| Parâmetro | Valor |
| --- | --- |
| Unidade | Horas |
| Faixa suportada | 0–65535 |
| Valor padrão | 0 (ABC desabilitado) |
| Valores que desabilitam o ABC | 0 e 65535 |
| Configuração recomendada | 180 horas (aproximadamente 7,5 dias) |

</div>

1. Conecte-se ao dispositivo através da porta serial de serviço.

2. Verifique o endereço ASCII do dispositivo usando as configurações seriais padrão abaixo.

   <div class="table-center">

   | Parâmetro | Valor padrão |
   | --- | --- |
   | Taxa de baud | 9600 |
   | Bits de parada | 1 |
   | Bits de dados | 8 |
   | Paridade | Nenhuma |

   </div>

   Se o terminal serial adicionar CRLF automaticamente, insira apenas `?`.

   **Enviar:**

   ```text
   ?
   ```

   **Resposta:**

   ```text
   0XA
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration1.png"/></div>

3. Use o endereço retornado nos comandos subsequentes. Se o endereço for `0`, envie o seguinte comando para definir o ciclo de ABC para o valor recomendado de 180 horas.

   **Enviar:**

   ```text
   0XA;SA_ABC=180
   ```

   **Resposta:**

   ```text
   0XA;SA_ABC=180
   ```

   Esta resposta indica que a configuração foi gravada com sucesso.

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration2.png"/></div>
4. Verifique a configuração atual.

   **Enviar:**

   ```text
   0XA;SA_ABC=?
   ```

   **Resposta:**

   ```text
   SA_ABC=180
   ```

   Uma resposta contendo `SA_ABC=180` confirma que o ABC está habilitado.


   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration3.png"/></div>

### Procedimento de calibração de um ponto com alvo

#### Preparação antes da calibração

1. Registre a leitura de CO₂ antes da calibração.
2. Certifique-se de que o dispositivo esteja energizado e se comunicando corretamente.
3. Permita que o gás de referência substitua completamente o gás original dentro da câmara de medição e atinja uma condição estável.
4. Evite que pessoas respirem diretamente em direção ao sensor.
5. Mantenha a temperatura, a umidade e a pressão o mais estáveis possível.

**Critérios de estabilidade recomendados**

- Permita tempo suficiente para que o gás de referência substitua completamente o gás original.
- Confirme que pelo menos 3–5 medições consecutivas apresentem apenas variação mínima.
- Certifique-se de que tanto o gás de calibração quanto o sensor estejam em temperatura estável.
- Mantenha a câmara de calibração ventilada à pressão atmosférica.
- Não aplique gás pressurizado diretamente ao sensor. Ao usar um cilindro de gás, utilize um regulador de pressão e tubulação adequada para controlar a vazão.

#### Calibração com alvo

A calibração com alvo é um método de calibração de um ponto para o sensor de CO₂ integrado ao sensor meteorológico compacto SenseCAP S1000 V2 10-em-1. Ela requer um gás de calibração certificado ou um instrumento de referência confiável com uma concentração conhecida de CO₂, como 400, 800, 1.000 ou 1.500 ppm.

`SA_TC` especifica o valor de calibração alvo em ppm. Ele não possui valor padrão e suporta uma faixa de 0–10000 ppm. Após a gravação de um valor válido, o dispositivo executa imediatamente uma calibração de um ponto.

#### Procedimento de calibração

Para os parâmetros seriais padrão e instruções sobre como verificar o endereço do dispositivo, consulte [Configurar e habilitar o ABC](#Configurar-e-habilitar-o-ABC).

1. Coloque o dispositivo em uma câmara de calibração adequada.

2. Introduza uma mistura de gás de CO₂ de concentração conhecida de acordo com os requisitos de operação da câmara de calibração.

3. Mantenha a câmara ventilada para preservar a pressão atmosférica. Monitore continuamente as leituras de CO₂ e aguarde até que a concentração de gás dentro da câmara se estabilize. Use o comando a seguir para verificar a leitura atual.

   **Enviar:**

   ```text
   0XA;G5?
   ```

   :::note
   Se o terminal serial adicionar CRLF automaticamente, insira o comando diretamente. Caso contrário, adicione `<CR><LF>` ao final do comando.
   :::

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration4.png"/></div>

4. Insira a concentração alvo conhecida. Por exemplo, ao usar gás de calibração certificado de 1.000 ppm, envie o seguinte comando.

   **Enviar:**

   ```text
   0XA;SA_TC=1000
   ```

   **Resposta:**

   ```text
   0XA;SA_TC=1000
   ```

   Esta resposta indica que o comando foi recebido com sucesso. O dispositivo executa a calibração de um ponto imediatamente após a gravação do valor.

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration5.png"/></div>

5. Aguarde pelo menos um ciclo de atualização de dados de CO₂, aproximadamente 16 segundos por padrão, e então verifique novamente a leitura.

   **Enviar:**

   ```text
   0XA;G5?
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration6.jpg"/></div>

:::note
Insira apenas a concentração verificada do gás de calibração ou do instrumento de referência. Não insira um valor estimado para a calibração com alvo.
:::

