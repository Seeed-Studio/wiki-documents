---
description: Kit de Gateway LoRa/LoRaWAN
title: Kit de Gateway LoRa/LoRaWAN
keywords:
  - Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LoRa_LoRaWan_Gateway_Kit
sku: 110060622, 110060623
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LoRa_LoRaWan_Gateway_Kit/
---
<!-- ---
name: LoRa/LoRaWAN Gateway Kit
category: Wireless
bzurl:  https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html
prodimagename:
surveyurl: https://www.research.net/r/LoRa_LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3
sku: 110060622
--- -->
<!-- ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/LoraWan%20Getway%20868MHz.jpg) -->

LoRa é uma solução sem fio de longo alcance perfeita para criar redes de baixa potência e longa distância. Até agora lançamos várias placas “LoRa”, como Seeeduino LoRaWan e Grove LoRa Radio, etc. Também há um [SenseCAP M2 Multi-Platform LoRaWAN Indooor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) pronto para uso disponível para os usuários. Entretanto, se você quiser construir sua própria rede LoRa, há 3 coisas que você deve preparar para começar: um Gateway, pelo menos um Nó e um servidor local onde você possa monitorar todos os seus dispositivos.

Este kit fornece todos os elementos básicos de que você precisa: um Raspberry Pi 3, um Seeeduino LoRaWAN com GPS e um gateway & servidor local que permite coletar e transferir dados entre todos os seus nós LoRa. Conectando o gateway com o Seeeduino LoRaWAN e módulos Grove, você pode construir seu protótipo de IoT em poucos minutos.

Sobre o módulo gateway RHF0M301, ele é um módulo gateway LoRaWan de 10 canais (8 x Multi-SF + 1 x Standard LoRa + 1 x FSK) com uma porta DIP de 24 pinos na placa; os usuários podem facilmente conectar o RHF0M301 com a ponte PRI 2 RHF4T002, adaptador para Raspberry Pi 3 e RHF0M301. Também incluímos uma antena de 868MHz, um cartão SD de 8GB e cabos USB, cabos Ethernet e outros acessórios.

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

:::caution
Sempre conecte uma bateria Lipo de 3,7V caso o fornecimento de energia pela USB não seja suficiente. Usamos o kit de 868MHz neste wiki, mas este wiki funciona tanto para o kit de 868MHz quanto para o kit de 915MHz.

:::

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-s6z2{:center}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-s6z2">Kit de 868MHz para Raspberry Pi 3</th>
      <th className="tg-s6z2"><a href="https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></th>
    </tr>
    <tr>
      <td className="tg-5hgy">Kit de 915MHz para Raspberry Pi 3</td>
      <td className="tg-5hgy"><a href="https://www.seeedstudio.com/LoRa%2FLoRaWAN-Gateway-915MHz-for-Raspberry-Pi-3-p-2821.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></td>
    </tr>
  </tbody></table>

## Recursos

- Baixo consumo de energia & longa distância
- Confiabilidade em padrão industrial
- Solução econômica para construir rede LoRa /LoRaWAN
- Ricos acessórios de sensor e atuador
- Monitoramento em tempo real

## Visão geral de hardware

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png)

### Lista de peças
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-0fxu{background-color:#6ab0de;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-0fxu">Número da peça</th>
      <th className="tg-0fxu">Nome da peça</th>
      <th className="tg-0fxu">Quantidade</th>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❶</font></td>
      <td className="tg-vn4c"><a href="https://wiki.seeedstudio.com/pt-br/Raspberry_Pi_3_Model_B/">Raspberry Pi 3</a></td>
      <td className="tg-vn4c">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❷</font></td>
      <td className="tg-031e">Módulo de gateway RHF0M301–868</td>
      <td className="tg-031e">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❸</font></td>
      <td className="tg-vn4c">Ponte PRI 2 RHF4T002</td>
      <td className="tg-vn4c">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❹</font></td>
      <td className="tg-031e"><a href="https://wiki.seeedstudio.com/pt-br/Seeeduino_LoRAWAN/">Seeeduino LoRaWAN com GPS (RHF76-052AM)</a></td>
      <td className="tg-031e">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❺</font></td>
      <td className="tg-vn4c">Adaptador USB para UART</td>
      <td className="tg-vn4c">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❻</font></td>
      <td className="tg-031e">atualizar para Cartão Micro SD de 16GB – Classe 10</td>
      <td className="tg-031e">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❼</font></td>
      <td className="tg-vn4c">Antena Rubber Duck 0dBi</td>
      <td className="tg-vn4c">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❽</font></td>
      <td className="tg-yw4l">Adaptador padrão americano 5V/2.1A com conector Micro USB</td>
      <td className="tg-yw4l">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❾</font></td>
      <td className="tg-6k2t">Cabo Micro USB 20cm</td>
      <td className="tg-6k2t">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❿</font></td>
      <td className="tg-yw4l">Cabo Micro USB 100cm</td>
      <td className="tg-yw4l">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">⓫</font></td>
      <td className="tg-6k2t">Cabo Ethernet RJ45 200cm</td>
      <td className="tg-6k2t">1 PEÇA</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">⓬</font></td>
      <td className="tg-yw4l">Cabo JST2.0 10cm</td>
      <td className="tg-yw4l">1 PEÇA</td>
    </tr>
  </tbody></table>

## Ideias de aplicação

- Internet das Coisas
- Casa inteligente
- Segurança
- Rede elétrica inteligente
- Fazenda inteligente
- Parque inteligente

## Primeiros passos

### Hardware

#### Visão geral das interfaces

Como há muitas interfaces aqui, é necessário conhecer as capacidades delas. Consulte a figura a seguir para obter detalhes.
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_interface.jpg)

- <font face size={5} font color="ffc000">❶</font> <strong>Entrada Micro-USB:</strong>
Todo o sistema usa esta interface Micro-USB para alimentação.

- <font face size={5} font color="ffc000">❷</font> <strong>Conector USB HOST:</strong>
 Fornece energia de saída para alimentar o Raspberry Pi

- <font face size={5} font color="ffc000">❸</font> <strong>Entrada de energia do Raspberry Pi:</strong> Entrada de energia para o Raspberry.

- <font face size={5} font color="ffc000">❹</font> <strong>HDMI:</strong> Interface de saída de vídeo digital em alta definição.

- <font face size={5} font color="ffc000">❺</font> <strong>Conector de fone de ouvido:</strong> Conector de fone de ouvido de 3,5mm

- <font face size={5} font color="ffc000">❻</font> <strong>Interface Ethernet:</strong> Você pode usar a interface Ethernet para conectar este sistema à Internet. Ou você pode usar Wifi depois de configurar a rede sem fio.

### Conexão de hardware

- Etapa 1. Conecte o **módulo de gateway RHF0M301–868** à **ponte PRI 2 RHF4T002**.
- Etapa 2. Conecte a **ponte PRI 2 RHF4T002** ao **Raspberry Pi 3**.
- Etapa 3. Conecte <font face size={5} font color="ffc000">❷</font> e <font face size={5} font color="ffc000">❸</font> através do cabo Micro-USB de 20cm.
- Etapa 4. Conecte o **Adaptador USB para UART** ao GPIO do **Raspberry Pi 3**. Conecte-os conforme mostrado na imagem abaixo.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/RX-TX.png)

- Etapa 5. Conecte o **Adaptador USB para UART** ao seu PC.
- Etapa 6. Conecte <font face size={5} font color="ffc000">❶</font> ao Adaptador Padrão de 5V/2.1A através do cabo Micro-USB de 100cm.

Quando você concluir todas as etapas, todo o sistema deverá estar como na imagem abaixo.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/connection.jpg)

## Software

### Ferramenta de software

No guia a seguir, as ferramentas abaixo serão necessárias; instale-as em seu computador.

- **[Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/)**, ferramenta serial portátil, usada para abrir a porta serial do Seeeduino LoRaWAN com GPS (RHF76-052AM) e enviar comandos AT para ele.
- **[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)**, ferramenta de terminal que inclui terminal serial e SSH, usada para controlar o Raspberry Pi.
- Navegador de Internet, usado para acessar o servidor LoRaWAN integrado RHF2S001 (recomenda-se usar Chrome ou Firefox).

:::note
Você pode ter outras ferramentas seriais favoritas, claro que pode usá‑las. Porém, se não tiver certeza sobre suas ferramentas, use as que recomendamos.

:::

### Conectar ao Servidor Local

#### Passo 1. Ligar e conectar ao PuTTY

a) Primeiro, certifique‑se de que a ferramenta serial e o RPi (Adaptador RHF4T002) estejam conectados corretamente.  

b) Conecte a ferramenta FT232 ao PC (Se a porta COM não for reconhecida corretamente, consulte [Virtual COM Port Drivers](https://www.ftdichip.com/Drivers/VCP.html))<!-- 源文件链接有误 -->

c) Abra o **Gerenciador de Dispositivos** do seu PC para obter a porta COM correta. Como COM15, por exemplo. Configure
o ExtraPuTTY de acordo com a imagem abaixo (Velocidade 115200, o restante use os padrões), clique em **Open**. Como o gateway ainda não foi iniciado, não haverá nada no terminal.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

d) Ligue o gateway. O log de boot será mostrado no terminal PuTTY e, ao final, ele pedirá para você inserir seu nome de usuário. Observe que leva 1 ou 2 minutos até aparecer o prompt.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/login_putty.png)

e)  Use o nome de usuário e senha padrão do RHF2S001 para fazer login. ( Nome de usuário: **rxhf**, Senha:
**risinghf** ). Observe que, ao digitar a senha, nada será exibido na tela

f)  Conecte o RHF2S001 ao roteador através de um cabo ethernet

g)  Execute **ifconfig** para verificar o endereço IP e o endereço MAC.
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_getip.png)

##### O IP está no quadrado azul, o endereço MAC está no quadrado laranja (Formato: b8:27:eb:xx:xx:xx)

:::note
Depois de obter o IP, é recomendável fazer login novamente no RHF2S001 via SSH. Porque o SSH é mais rápido (Ethernet em vez de UART) e estável. Normalmente usamos a ferramenta serial apenas para obter o IP. Reabra o PuTTY e use o módulo SSH para conectar novamente.

:::

Para fazer login via SSH, você precisa preencher o Hostname com o endereço IP que acabou de obter. E usar a porta 22, escolhendo o tipo de conexão SSH. Deixe as outras opções como padrão. Em seguida, simplesmente clique em **Open**.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

#### Passo 2. Expandir o Sistema de Arquivos do Cartão SD

Por padrão, a imagem habilita apenas 2GB para o sistema Raspbian; recomenda‑se expandir para usar todo o cartão SD (8GB ou 16GB). Caso contrário, o cartão SD ficará cheio em breve.
Execute o comando abaixo no terminal PuTTY para iniciar o raspi-config,  

```
sudo raspi-config
```

Escolha “Expand Filesystem”; quando terminar, reinicie para que tenha efeito. Execute o comando abaixo no terminal PuTTY para saber a capacidade e o uso do cartão SD.

```
df -h
```

Consulte as instruções da ferramenta raspi-config do Raspberry Pi para mais detalhes. Clique [aqui](https://www.raspberrypi.org/documentation/configuration/raspi-config.md) para ver mais.

#### Passo 3. Usar o servidor LoRaWAN integrado do RHF2S001

**a) Conectar o Gateway ao servidor interno**

Execute os comandos abaixo no terminal PuTTY e verifique o status:

```
sudo systemctl status pktfwd
```

Se o serviço pktfwd não estiver ativo, execute o comando abaixo para iniciá‑lo:

```
sudo systemctl enable pktfwd
sudo systemctl restart pktfwd
```

**b) Plano de Frequência**

Plano de Frequência para EU868
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">EU868</th>
    <th class="tg-s6z2">Uplink DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">867.1</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">867.3</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">867.5</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">867.7</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">867.9</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">868.1</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">868.3</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">868.5</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
</table>

Plano de Frequência para US915 HYBRID

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">US915</th>
    <th class="tg-s6z2">Uplink DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">902.3</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">902.5</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">902.7</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">902.9</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">903.1</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">903.3</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">903.5</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">903.7</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH64</td>
    <td class="tg-j0tj">903.0</td>
    <td class="tg-j0tj">DR4</td>
  </tr>
</table>

 **c) Configurações do RHF76-052AM**

 Agora vamos configurar o Seeeduino LoRaWAN com GPS (RHF76-052AM).

- Primeiro, você precisa conectar o Seeeduino LoRaWAN GPS ao seu PC.

- Em seguida, abra a IDE **[Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/)** e copie o código abaixo para um novo sketch.

```
 void setup()
 {
     Serial1.begin(9600);
     SerialUSB.begin(115200);
 }

 void loop()
 {
     while(Serial1.available())
     {
         SerialUSB.write(Serial1.read());
     }
     while(SerialUSB.available())
     {
         Serial1.write(SerialUSB.read());
     }
 }
```

- Depois escolha a porta serial correta do Seeeduino Lora GPS e selecione a placa **Tool->Board->Seeeduino_LoRAWAN**. Após isso, você pode clicar no botão de upload. Se não conseguir encontrar Seeeduino_LoRAWAN na lista de placas ou não souber como enviar o código, clique [aqui](https://wiki.seeedstudio.com/pt-br/Seeeduino_LoRAWAN/#install-the-driver-for-windows) para mais informações.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/port_lora.png)

- Agora abra o monitor serial no canto superior direito (ou você pode pressionar Ctrl+Shift+M ao mesmo tempo). Escolha **Newline** (Esta opção adicionará "\r\n" ao final de cada comando.), defina a taxa de baud para 9600. Em seguida, digite os comandos abaixo e pressione **send**.

Para EU868

```
AT+FDEFAULT=RISINGHF
AT+DR=EU868
```

Para US915

```
 AT+FDEFAULT=RISINGHF
 AT+DR=US915HYBRID
 AT+RXWIN2=923.3,DR8
```

 ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/At_send.png)

:::caution
Depois de conectar o Seeeduino LoRaWAN com GPS ao seu computador, você pode encontrar duas portas seriais. Uma é para o Raspberry com PuTTY, outra é para o Seeeduino LoRaWAN GPS com SSCOM, escolha a correta.
:::

**d) Acessar o Console do Servidor Interno**

Digite no navegador o endereço IP (IP do seu gateway); ele irá redirecionar para o site abaixo.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_webin.png)

#### Passo 4. Usar o Seeeduino LoRaWAN GPS(RHF76-052AM) para acessar o servidor LoRaWAN

Existem dois modos; neste wiki falaremos apenas sobre o Modo ABP (Este modo é gratuito para qualquer pessoa). Para mais informações sobre o Modo OTAA (Este modo é comercial, você precisa pagar por ele), você pode clicar [aqui](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual-seeed-v2.1.pdf).

a) Encontre o botão "Application" no canto superior direito do site acima, clique nele e você verá uma nova página.

b) Agora você precisa do **APPEui**, **DevAddr**, **DevEui** do Seeeduino LoRaWAN para adicionar uma nova aplicação.
Para obter as informações de ID do Seeeduino LoRaWAN, você precisa digitar o comando abaixo no monitor serial da IDE Arduino. Clique em **Send** e você obterá o ID.

```
at+id
```

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/at%2Bid.png)

c) Preencha o espaço em branco com as informações de ID que você acabou de obter. Você pode preencher o nome e o proprietário como quiser (aqui usamos Seeed e meu apelido:), use o APPEui que você acabou de obter. Em seguida, clique no botão **Add**.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/applicationpage.png)

Então você irá para a página de configuração. Nesta página, escolhemos Personalised Motes. Preencha o **DevEUI** e o **DevAddr** com as informações de ID do seu Seeeduino LoRaWAN GPS. E defina o **NWKSKEY** e o **APPSKEY** como padrão. Você pode se referir à imagem abaixo.

- DevEui： Seeeduino LoRaWAN GPS obtido através do comando AT+ID
- DevAddr: Seeeduino LoRaWAN GPS obtido através do comando AT+ID
- NWKSKEY：Valor padrão 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：Valor padrão 2B7E151628AED2A6ABF7158809CF4F3C

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Add_info.png)

d) Para testar se você adicionou o dispositivo com sucesso, você pode usar o monitor serial da Arduino IDE e digitar o comando abaixo.

```
at+mode=lwabp

AT+CMSGHEX="0a 0b 0c 0d 0e"
```

Deve ficar parecido com algo abaixo.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test_send.png)

Então volte ao site, clique em **Application->Seeed(o nome da Application que você acabou de adicionar)->View application data**, você verá os dados que acabou de enviar do Seeeduino_LoRAWAN. Parabéns! Trabalho concluído!

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test.png)

### Conectar ao Servidor Loriot

#### Etapa 1. Registro do Gateway no Servidor Loriot

a)  Novos usuários precisam registrar uma conta primeiro, clique em **[registration address](https://cn1.loriot.io/register.html)** <!--源文件链接有误 -->. Preencha UserName, Password e endereço de e-mail para se registrar, após o registro um e-mail será enviado para você, siga as instruções no e-mail para ativar.

b)  Após a ativação bem-sucedida, clique **[here](https://cn1.loriot.io/home/login.html)** <!-- 源文件链接有误 -->para fazer login. O nível padrão é “Community Network”, ele suporta 1 Gateway (RHF2S001) e 10 nós.

c)  Entre em **Dashboard -> Gateway**, clique em **Add Gateway** para começar a adicionar o Gateway.

d)  Selecione **Raspberry Pi 3**

e)  Configure como abaixo:

- Radio front-end  ->  RHF2S001 868/915 MHz(SX1257)
- BUS  ->  SPI

f)  Preencha o endereço MAC do seu RHF2S001, deve estar no formato b8:27:eb:xx:xx:xx. E também insira as informações de Localização do Gateway.  

g)  Clique em “Register Raspberry Pi gateway” para finalizar o registro.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_gateway.png)

h)  Clique no gateway registrado para entrar na página de configuração, altere “Frquency Plan” manualmente, o seu plano aqui é decidido pelo tipo do seu RHF2S001, os planos disponíveis são CN470，CN473，CN434，CN780，EU868, após selecionar atualize a página para obter o canal exato. Neste wiki escolhemos **EU868**.

i)  Execute o comando no terminal do putty：

```
cd /home/rxhf/loriot/1.0.2
sudo systemctl stop pktfwd
sudo gwrst
wget https://cn1.loriot.io/home/gwsw/loriot-risinghf-rhf2s008-rhf1257-SPI-0-latest.bin -O loriot-gw.bin
chmod +x loriot-gw.bin
./loriot-gw.bin -f -s cn1.loriot.io
```

j)  Finalize o registro do gateway. Você verá que o gateway está Connected agora. O próximo passo é registrar o nó.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/service_done.png)

#### Etapa 2. Conectar o dispositivo Node ao Servidor Loriot

**a) Obter os canais disponíveis do gateway**

Os canais atuais do gateway podem ser obtidos em **Dashboard -> Gateway -> Your Gateway** , você pode ver os canais disponíveis como na imagem abaixo.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/radio_list.png)

**b) Configuração do Seeeduino LoRAWAN GPS(RHF3M076)**

Abra o monitor serial da Arduino IDE, digite o comando abaixo.

```
at+ch
```  

Para confirmar o canal padrão do seu Seeeduino_LoRAWAN GPS, você obterá 3 canais. Se não houver canal disponível, você pode mudar os canais do Seeeduino_LoRAWAN com o comando abaixo.

```
at+ch=0,868.1
at+ch=1,868.3
at+ch=2,868.5
```

Então você pode usar **at+ch** novamente para verificar.

**c)  Adicionar Seeeduino_LoRAWAN GPS como um Nó ABP**

Faça login no servidor Loriot, clique em **Dash Board->Applications->SimpleApp** . Clique em **Import ABP** ，insira os itens abaixo：

- DevAddr: Seeeduino_LoRAWAN GPS obtido através do comando "AT+ID" (Observação: Loriot não suporta dois-pontos como conector,
é necessário removê-los manualmente)  
- FCntUp：Definir como 1
- FCntDn：Definir como 1
- NWKSKEY：Valor padrão 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：Valor padrão 2B7E151628AED2A6ABF7158809CF4F3C
- EUI：DEVEUI, Seeeduino_LoRAWAN GPS obtido através do comando "AT+ID"

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_apb.png)

Clique no botão **Import Device** para finalizar a importação do dispositivo.
Agora escolha **Dashboard -> Applications -> SampleApp** , você verá o novo Nó ABP que acabou de adicionar.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/inite_status_apb.png)

**d)  Enviar dados a partir do Seeeduino_LoRAWAN**

Volte ao monitor serial da Arduino IDE, envie o comando:

```
AT+CMSGHEX="0a 0b 0c 0d 0e"
```

Depois vá para **Dashboard -> Applications -> SampleApp ->Device** , clique no EUI do Node Device ou no DevAddr, você encontrará aqui os dados que acabou de enviar.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/final.png).

## Resumo

  Este artigo apresentou o LoRa/LoRaWAN Gateway Kit e o processo de criação do seu próprio gateway LoRaWAN. Cobrimos etapas-chave na conexão de hardware e na configuração das ferramentas de software, incluindo a conexão dos componentes necessários e a comunicação com o servidor LoRaWAN. Este método de gateway DIY oferece flexibilidade e personalização, permitindo que os usuários construam uma rede LoRaWAN robusta de acordo com suas necessidades.

  No entanto, para alguns usuários, criar seu próprio gateway LoRaWAN pode ser desafiador, e eles preferem dispositivos prontos para uso. Nós entendemos essa demanda e oferecemos a opção do [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html). Por apenas US$ 99, você pode comprar este gateway para construir sua própria rede LoRaWAN sem esforço. Dando um passo além, também fornecemos o [SenseCAP LoRaWAN Starter kit](https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html) voltado para iniciantes que estão explorando LoRaWAN. Este kit inclui um SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway, [XIAO ESP32-S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), [Grove-Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html) e dois sensores Grove. Ele é especificamente projetado para facilitar o processo de aprendizagem e experimentação com LoRaWAN.

 <div style={{ display: 'flex', justifyContent: 'center' }}>
  <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/114992981_45-M2_1.jpg" width={450} height="auto" style={{ marginRight: '20px' }} />
  </a>
  <a href="https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/1-114993166-sensecap-lorawan-starter-kit-eu-45font.jpg"  width={450} height="auto" />
  </a>
</div>

## FAQs

**P1: Como encontrar o firmware de fábrica?**

**R1:** Quando o firmware estiver corrompido ou acontecerem alguns erros graves, você pode baixar o [firmware](https://drive.google.com/open?id=1MVLQlxjhir_mWvKhvuqBsr1a0ievZRDC) aqui. Ele é apenas para raspberry 3b, NÃO suporta raspberry 3b +.

**P2: Como gerar a imagem mais recente?**

**R2:** Ele funciona bem tanto com raspberry 3b quanto com 3b+. Nós o testamos na imagem raspbian de 2018-11-13.

- Etapa 1. Baixe a [imagem mais recente do raspberry](https://www.raspberrypi.org/downloads/raspbian/)

- Etapa 2. Baixe libssl1.0.0.deb para o seu Raspberry Pi executando `wget https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/libssl1.0.0.deb`, e execute `sudo dpkg -i ./libssl1.0.0.deb` para instalá-lo no terminal.

- Etapa 3.  Execute `sudo raspi-config` no terminal, selecione _Interfacing Options_ -- _P4 SPI_ -- _YES_ para habilitar o SPI, para que o Raspberry Pi possa se comunicar com o RHF0M301.

- Etapa 4. Execute os seguintes comandos no terminal, baixe e inicie o gateway loriot.

```
wget https://cn1.loriot.io/home/gwsw/loriot-pi-3-rhf1257-SPI-0-latest.bin -O loriot-gw
chmod +x loriot-gw
./loriot-gw -f
```

## Recursos

- **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/LoRa_LoRaWan_Gateway_Kit.pdf)
- **[Uer Manual]** [User Manual](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual%20-%20v3.2.pdf).<!-- 源文件链接有误 -->
- **[More Reading]** <a href="/pt-br/Seeeduino_LoRAWAN" ><span><font size={"3"}> Wiki de Seeeduino LoRaWAN </font></span></a>
- **[More Reading]** [Site da RisingHF](http://www.risinghf.com/product/risinghf-iot-dicovery/?lang=en)
- **[Azure IoT Edge LoRaWAN]** [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)

## Projetos

**LoRa IoTea**: Um sistema de coleta automática de informações aplicado a plantações de chá. Faz parte da coleta inteligente de informações agrícolas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
