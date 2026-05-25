---
description: Xadow - BLE
title: Xadow - BLE
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_BLE/
---

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/813004001xadow_ble.jpg)

O Xadow - BLE é um módulo no formato Xadow compatível com Bluetooth Smart baseado no módulo HM-11. O Xadow - BLE pode ser usado em configurações de hardware onde normalmente é utilizado um módulo Xadow. Usando um Xadow - BLE, um sistema embarcado habilitado para Xadow pode se comunicar com computadores desktop, smartphones, tablets e até outros sistemas embarcados que forneçam Bluetooth Smart, também conhecido como Bluetooth Low Energy (BLE).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-p-1727.html)


## Recursos
---
- Compatível com formato XBee
- Protocolo Bluetooth: Especificação Bluetooth V4.0 BLE
- Frequência de trabalho: banda ISM de 2,4 GHz
- Forma de interface: uma porta serial
- Em ambiente aberto, dentro de 30 metros pode realizar comunicação entre módulos
- Para enviar e receber, não há limite de bytes entre módulos
- Método de modulação: GFSK (Gaussian Frequency Shift Keying)
- Potência de transmissão: - DBM, 23-6 DBM, 0 DBM, 6 DBM, pode ser modificada pelo comando AT
- Usa o chip TI CC2540, espaço de configuração de 256 KB, suporta comando AT, o usuário pode, conforme a necessidade, alterar o papel (modo mestre, escravo) e a taxa de baud da porta serial, nome do equipamento, parâmetros de pareamento como senhas, uso ágil.
- Alimentação: + 3,3 VDC 50 mA
- Temperatura de trabalho: - 5 ~ + 65 graus centígrados

## Especificação
---

|Especificação|	Valor|
|---|---|
|Microprocessador|	CC2540|
|Recursos|	Suporta comando AT, o usuário pode, conforme a necessidade, alterar o papel (modo mestre, escravo) e a taxa de baud da porta serial, nome do equipamento, parâmetros de pareamento como senha, uso flexível.|
|Tamanho da PCB	|24.5mmx30.5mmx0.8mm|
|Dimensão externa	|24.5mmx30.5mmx9.77mm|
|Alimentação	|3.3V|
|Protocolo de comunicação|	Uart(TTL)|
|Contagem de IO	|2|
|IO de entrada de tecla	|1|
|IO de LEDs indicadores	|1|
|Conectividade	|Soquete compatível com Xadow|


## Características elétricas
---
|Especificação	|Min|	Typ	|Max|	Unidade|
|---|---|---|---|---|
|Tensão máxima de entrada|	-0.3	|-|	3.6|	V|
|Tensão de entrada de trabalho|	2.0	|3.3|	3.6|	V|
|Corrente de transmissão	|-	|15	|-|	mA|
|Corrente de recepção	|-|	8.5	|-|	mA|
|Corrente em deep sleep	|-	|600	|-	|uA|
|Temperatura de operação|	-40	|-|	125|	°C|


## Definição dos pinos
---
![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Xadow_ble_pin.jpg)

:::note
    Apenas funções alternativas importantes são listadas; pode haver mais, consulte o datasheet.
:::
## Uso
---
**Comandos AT & Configuração**

**1）	Consultar o endereço MAC nativo**

Enviar: AT+ADDR?

Após envio bem-sucedido retorna: OK + LADD: endereço MAC (endereço com 12 caracteres)

**2）	Consultar a taxa de baud**

Enviar: AT+BAUD?

Após envio bem-sucedido retorna: OK + Get: [para1]

Escopo de para1: 0 ~ 8. Os parâmetros correspondem a: 0 representa 9600, 1, 2, representam 9600, 38400, 3 representa 57600, 4 representa 115200, 5 representa 4800, 6, 7 representam 1200, 8 representa 2400. A taxa de baud padrão é 9600.

**3）	Configurar a taxa de baud**

Enviar: AT+BAUD[para1]

Após envio bem-sucedido retorna: OK + Set:[para1]

Exemplo: enviar: AT+BAUD1, retorno: OK + Set: 2. A taxa de baud é configurada para 19200.

:::note
    Após mudar para 1200, o módulo não irá mais suportar as configurações por comando AT, e ao pressionar o PIO0 em standby, o módulo pode restaurar as configurações de fábrica. Não é recomendado usar essa taxa de baud. Após definir a taxa de baud, o módulo deve ser desligado e ligado novamente para que os novos parâmetros entrem em vigor.
:::
**4）	conectar, como dispositivo escravo, ao endereço bluetooth especificado**

Enviar: AT+CON[para1]

Após envio bem-sucedido retorna: OK + CONN[para2]

O intervalo de para2 é: A, E, F

Exemplo: sendo o endereço bluetooth: 0017EA0943AE, enviando AT+CON0017EA0943AE, o módulo retorna: OK + CONNA ou OK + CONNF ou OK + CONNE.

**5）	remover informações de pareamento do equipamento**

Enviar: AT+CLEAR

Após envio bem-sucedido retorna: OK + CLEAR

Limpa com sucesso as informações de código de endereço do dispositivo que havia sido conectado.

**6）	consultar modo de trabalho do módulo**

Enviar: AT+MODE?

Após envio bem-sucedido retorna: OK + Get: [para]

Para: intervalo de 0 ~ 2. 0 representa modo transparência, 1 representa aquisição de PIO + controle remoto + transparência, 2 representa transparência + modo de controle remoto. O padrão é 0.

**7）	definir modo de trabalho do módulo: **

Enviar: AT+MODE[para1]

Após envio bem-sucedido retorna: OK + Set: [para]

**8）	consultar nome do dispositivo**

Enviar: AT+NAME?

Após envio bem-sucedido retorna: OK + NAME [para1]

**9）	definir o nome do dispositivo**

Enviar: AT+NAME[para1]

Após envio bem-sucedido retorna: OK + Set: [para1]

Exemplo: definir o nome do dispositivo para Seeed, enviando AT+NAMESeeed, retorna OK + Set: Seeed. Neste momento, o nome do módulo bluetooth foi alterado para Seeed. Observação: após a execução do comando, é necessário desligar e ligar a alimentação para que os parâmetros configurados tenham efeito.

**10）	consultar senha de pareamento**

Enviar: AT+PASS?

Após envio bem-sucedido retorna: OK + PASS: [para1]

O intervalo de para1 é 000000 ~ 999999, o padrão é 000000.

**11）	definir senha de pareamento**

Enviar: AT+PASS[para1]

Após envio bem-sucedido retorna: OK + Set: [para1]

**12）	restaurar configurações de fábrica**

Enviar: AT+RENEW

Após envio bem-sucedido retorna: OK + RENEW

Restaura as configurações padrão de fábrica do módulo; as configurações do módulo serão redefinidas, retornando ao estado padrão de fábrica, e após 500 ms de atraso o módulo será reiniciado. Se não houver necessidade, use com cuidado.

**13）	resetar módulo**

Enviar: AT+RESET

Após envio bem-sucedido retorna: OK + RESET

Após a execução do comando, o módulo irá reiniciar após um atraso de 500 ms.

**14）	definir modo mestre-escravo**
Send: AT+ROLE[para1]
Send after a successful return: OK + Set: [para1]


## HelloWorld
---
:::note
Ao conectar o Xadow-BLE à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
**//fazer o Xadow BLE atuar como um dispositivo BLE Master**

```
#define SerialBaud   9600
#define Serial1Baud  9600

void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // set master
    Serial1.print("AT+ROLE1");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

**//fazer o Xadow BLE atuar como um dispositivo BLE Slave**

```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // set slave
    Serial1.print("AT+ROLE0");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

## Comunicação BLE com Android
---
Aqui mostramos como fazer o Xadow - BLE se comunicar com seu telefone celular Android (Observação: a versão do sistema Android deve ser superior a 4.3).
1. Baixe o APP Android [aqui](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar) e instale-o em seu telefone celular Android.
2. Conecte seu Xadow BLE à Xadow MainBoard e, em seguida, copie o código de demonstração do dispositivo Xadow BLE Slave acima, compile e faça o upload para a Xadow MainBoard.
3. Abra uma Ferramenta Serial (por exemplo, SSCOM32) e abra a porta serial da Xadow MainBoard.
4. Abra o APK de exemplo BLE que você instalou no primeiro passo; será como a seguir:

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_start.png)

5. Clique no botão Start no centro da interface; ele começará a procurar dispositivos BLE escravos. O resultado da varredura será mostrado na lista de diálogo.

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_scanResult.png)

6. Selecione o Seeed BLE, ele tentará conectar-se ao Xadow BLE automaticamente.
7. Depois de conectar o dispositivo BLE escravo com sucesso, você verá que o UUID está nulo e você precisa escolher um da lista de Characteristics UUID List. Aqui escolhemos o UUID:0000ffe1-0000-1000-8000-00805f9b34fb

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_UUIDSelected.png)

8. OK, o momento empolgante chegou! Insira o comando (dados) na caixa de texto e clique no botão Send; a mensagem será enviada para os dispositivos BLE especificados. A caixa de texto recv mostrará a mensagem dos dispositivos escravos, como a seguir. Divirta-se!
![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_sendData.png)![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_recvData.png)


## Visualizador esquemático online
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle Xadow-BLE_v1.0](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip)
- [BLE_apk_for_Android](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar)
- [DataSheet do módulo BLE](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Bluetooth4_en.pdf)
- [Código-fonte BLE Android no GitHub](https://github.com/Seeed-Studio/BLE_Example)
- [Código-fonte 4.0 BLE IOS6](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMSoft_ios6.zip)
- [Código-fonte 4.0 BLE IOS7](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-HMSoft_ios7.zip)
- [Código-fonte 4.0 BLE Android](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-BluetoothLeGatt.rar)
- [Mais documentos URL](http://www.huamaosoft.com/index_en.asp?page=2&ID=1)

## Suporte técnico & Discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
