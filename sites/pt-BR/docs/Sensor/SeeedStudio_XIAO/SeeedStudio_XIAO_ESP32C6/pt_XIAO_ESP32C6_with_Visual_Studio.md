---
description: Compile e envie um sketch Arduino de Wi-Fi para o XIAO ESP32C6 e, em seguida, faça passo a passo um limiar de sinal no Visual Studio usando o USB JTAG integrado.
title: XIAO ESP32C6 com Visual Studio
keywords:
  - XIAO
  - ESP32C6
  - Visual Studio
  - Arduino
  - USB JTAG
slug: /xiao_esp32c6_with_visual_studio
---

Este passo a passo se baseia no [exemplo de varredura de Wi-Fi](https://wiki.seeedstudio.com/pt-br/xiao_wifi_usage_esp32c6/#scan-nearby-wifi-networks) do XIAO ESP32C6. Você enviará um sketch Arduino que classifica o sinal amostrado mais forte em 2,4 GHz, depois irá parar na comparação e verá o valor mudar enquanto avança passo a passo. O USB JTAG integrado do XIAO funciona através do mesmo cabo de dados USB que você usa para enviar o sketch. [Referência do USB JTAG integrado da Espressif](https://docs.espressif.com/projects/esp-idf/en/stable/esp32c6/api-guides/jtag-debugging/configure-builtin-jtag.html)

## O que você precisa

- Um Seeed Studio XIAO ESP32C6 e um cabo de dados USB-C conectados diretamente ao seu computador com Windows.
- Microsoft Visual Studio 2022 ou 2026 com a carga de trabalho **Desktop development with C++** e a [extensão Visual Micro](https://marketplace.visualstudio.com/items?itemName=VisualMicro.ArduinoIDEforVisualStudio). Visual Micro é uma extensão de terceiros com licença de avaliação e paga.
- Um ponto de acesso Wi-Fi de 2,4 GHz ativo ao alcance. O sketch faz a varredura das redes próximas sem se conectar a elas.

## Selecione a placa e a porta

1. Na barra de ferramentas do Visual Micro, selecione o ambiente Arduino que você deseja usar. A opção **Arduino 2** usa a configuração do seu Arduino IDE 2. Se **esp32 by Espressif Systems** já estiver instalado nesse ambiente, vá para a etapa 2. Caso contrário, use **Micro Explorer → Board Manager** para instalar o pacote estável. Se Espressif não aparecer no Board Manager, adicione o índice de pacotes a partir das instruções da Seeed em **IDE Locations → Additional board manager JSON URLs**, salve e escolha **Check for Updates** no Board Manager. [Configuração da placa da Seeed](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#add-board) · [Visual Micro Board Manager](https://www.visualmicro.com/page/User-Guide.aspx?doc=Board-Manager.html)
2. Escolha **vMicro → New Arduino Project** e dê o nome `XiaoC6WifiSignal`. Selecione `XIAO_ESP32C6` como a placa e a porta COM que aparece quando você conecta o XIAO.
3. Defina **USB CDC On Boot** como **Enabled** em **vMicro → Board Options**. Isso direciona a saída `Serial` do sketch para o conector USB do XIAO.

## Envie o sketch de Wi-Fi

Substitua o conteúdo de `XiaoC6WifiSignal.ino` pelo sketch abaixo. Ele faz a varredura das redes, registra o RSSI amostrado mais forte em dBm e o compara com `-70 dBm`. Uma leitura de `-70 dBm` ou maior conta como forte.

```cpp
#include <WiFi.h>

volatile int32_t thresholdDbm = -70;
volatile int32_t strongestDbm = -127;
volatile bool strongSignal = false;

void setup() {
  Serial.begin(115200);
  WiFi.STA.begin(false);
}

void loop() {
  const int count = WiFi.scanNetworks();

  if (count > 0) {
    // WiFi.RSSI() takes an 8-bit scan-result index.
    const int sampleCount = min(count, 256);
    int32_t bestDbm = WiFi.RSSI(0);
    for (int index = 1; index < sampleCount; ++index) {
      const int32_t rssi = WiFi.RSSI(index);
      if (rssi > bestDbm) {
        bestDbm = rssi;
      }
    }

    strongestDbm = bestDbm;
    strongSignal = strongestDbm >= thresholdDbm;  // Set a breakpoint here.
    Serial.printf("%ld dBm (%s)\n", static_cast<long>(strongestDbm),
                  strongSignal ? "strong" : "weak");
  } else {
    Serial.println(count == 0 ? "No networks found" : "Wi-Fi scan failed");
  }

  WiFi.scanDelete();
  delay(4000);
}
```

Escolha **vMicro → Build & Upload**. Abra o **Serial Monitor** do Visual Micro para a porta COM da placa, defina-o para **115200 baud** e clique em **Connect**. Após uma varredura, espere uma linha como `-68 dBm (strong)` ou `-71 dBm (weak)`. Ative **Auto-Recon** se quiser que um monitor aberto se reconecte depois que a porta for liberada por um envio posterior.

## Faça passo a passo a comparação de sinal

1. Selecione a configuração de compilação **Debug**. Na barra de ferramentas do Visual Micro, defina o modo de depuração como **Hardware** e escolha **ESP32C6-USB**. Mantenha a placa definida como `XIAO_ESP32C6`. Para corresponder ao teste da placa, selecione **vMicro → Debugger → Disable Optimization → No Project + Libraries Optimization**.

   ![Barra de ferramentas do Visual Micro mostrando XIAO_ESP32C6, a porta COM, depuração por Hardware e ESP32C6-USB](./visual-studio-wifi/xiao-esp32-c6-setup.png)

2. Clique na margem esquerda da linha `strongSignal = strongestDbm >= thresholdDbm;` para definir um ponto de interrupção. Pressione **F5** para iniciar a depuração. O sketch é pausado nessa linha assim que uma varredura encontra uma rede.
3. No Visual Studio, abra **Debug → Windows → Watch → Watch 1**. Adicione `strongestDbm`, `thresholdDbm` e `strongSignal`. Neste ponto, `strongSignal` ainda mantém seu valor anterior.
4. Pressione **F10** uma vez para executar a comparação. O depurador avança para a linha `Serial.printf`. No teste de placa mostrado abaixo, `strongestDbm` era `-71`, `thresholdDbm` era `-70`, e a atribuição mudou `strongSignal` de `true` para `false`. Seu resultado dependerá das redes ao seu redor. A captura de tela mostra os valores em **Autos**.

   ![Após F10, a execução está na linha de impressão e Autos mostra strongestDbm em -71, thresholdDbm em -70 e strongSignal como false](./visual-studio-wifi/xiao-esp32-c6-f10-result.png)

5. Pressione **F5** para continuar. O Serial Monitor imprime a classificação. Em seguida, o sketch espera quatro segundos e inicia outra varredura. Para deixá-lo fazendo varreduras sem pausar, limpe o ponto de interrupção e pressione **F5** novamente.

As capturas de tela mostram o teste original na placa. O sketch acima usa a mesma comparação e limita o número de resultados de varredura que indexa a 256. Essa revisão foi compilada com Arduino-ESP32 3.3.13.

## Solução de problemas

- **O ponto de interrupção nunca é atingido.** A comparação é executada somente quando a varredura encontra pelo menos uma rede. Se o Serial Monitor mostrar `No networks found`, aproxime o XIAO de um ponto de acesso de 2,4 GHz. Se você precisar conectar o monitor manualmente enquanto o sketch estiver pausado, continue com **F5** antes de clicar em **Connect**.
- **A porta COM não aparece ou o envio expira.** Verifique se o cabo transmite dados, reconecte a placa e selecione a porta COM atual. Se o Windows ainda não a detectar, siga as [etapas de recuperação do bootloader da Seeed](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#bootloader-mode).
- **O USB JTAG desconecta ou o depurador trava.** Desconecte e reconecte o XIAO e aguarde o Windows reconhecê-lo. Se o depurador ainda estiver aguardando, pare a depuração e inicie uma nova sessão com **F5**. Para erros do OpenOCD ou verificações do perfil do depurador, consulte [Solução de problemas do USB JTAG do ESP32-C6](https://www.visualmicro.com/page/ESP32C6-USB-Debugging.aspx#usb-jtag-troubleshooting).

## Veja também

- [XIAO ESP32C6 com PlatformIO](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_with_platform_io/)
- [Uso de Wi-Fi no XIAO ESP32C6](https://wiki.seeedstudio.com/pt-br/xiao_wifi_usage_esp32c6/)
