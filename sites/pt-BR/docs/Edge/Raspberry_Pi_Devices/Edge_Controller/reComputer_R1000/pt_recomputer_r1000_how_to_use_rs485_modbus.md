---
description: Este artigo apresenta principalmente como usar a função de comunicação 485 do reComputer R1000 e testa as funções de comunicação RS485 e Modbus.
title: Como usar rs485 e modbus com reComputer R1000
keywords:
  - Borda
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/r1000_connection_1.webp
slug: /recomputer_r1000_use_rs485_modbus_rtu
last_update:
  date: 12/20/2024
  author: Jiahao Li
createdAt: '2024-06-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_use_rs485_modbus_rtu/
---

## Introdução
Este artigo apresenta principalmente como usar a função de comunicação 485 do reComputer R1000 e testa as funções de comunicação RS485 e Modbus.

## Começando

Antes de iniciar este projeto, você pode precisar preparar antecipadamente seu hardware e software, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

* Usando [modbus poll](https://www.modbustools.com/modbus_poll.html) no seu PC com W10. Você também pode usar outras ferramentas de teste Modbus
* Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) no reComputer R1000 e no PC com W10. Você também pode usar outras ferramentas de teste Modbus
* Usando [mobaxterm](https://mobaxterm.mobatek.net/) no seu PC com W10. Você também pode usar outras ferramentas de teste de porta serial
* Você precisa baixar a ferramenta **minicom** usando o seguinte comando no reComputer R1000:
```sh
sudo apt-get install minicom
```

### Configuração de Hardware

Este teste usa um módulo RS485 para USB para conectar o reComputer R1000 e o PC com W10.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para ModbusTCP, usamos cabos Ethernet para conectar o PC com W10 e o reComputer R1000 a um switch para garantir que eles estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Configurar minicom no reComputer R1000v1.1

**NOTA:** Antes de usar RS485 com minicom, instale os drivers do r1000 como [aqui](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_flash_OS/#install-drivers).


### Primeiro, instale o minicom 

Instale o minicom tanto no seu computador host quanto no reComputer r1000 com o comando abaixo:

```
sudo apt install minicom
```

### Segundo, configure seu minicom da seguinte forma:

Abra um terminal com `Ctrl+Alt+T` e insira o comando como abaixo:

```
sudo minicom -D /dev/ttyAMA*
```
O `ttyAMA*` deve ser `ttyAMA2, ttyAMA3 ou ttyAMA4` dependendo de qual RS485 você usa.

E então digite `Ctal+A` e depois digite `Z`, você verá o minicom como abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

Digite `o` para configurar o minicom e selecione `Serial port setup`; você verá como abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

E então digite `F` e `H` para colocar o minicom no modo RS485; o resultado será mostrado como abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

Por fim, selecione `Exit` e pressione `Enter` para sair da configuração, como abaixo: 

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>


## Ação necessária para reComputer R1000 v1.0

Para o reComputer R1000 v1.0, o pino DE do transceptor 485 integrado fica fora de controle por padrão, o que significa que as interfaces só podem transmitir dados de forma unidirecional (apenas receber ou apenas enviar).

:::note
Para distinguir entre as revisões de hardware (v1.0 e v1.1), você pode consultar [Detalhes de mudanças do produto reComputer R1000 V1.1](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_v1_1_description/).
:::

Agora temos duas soluções, uma é **carregar um módulo de kernel que intercepta o driver UART, que recomendamos que você utilize**, e a outra é uma solução baseada em camada de aplicação que simplesmente chama o `libgpiod` para controlar os pinos DE. Você pode escolher uma com base em suas necessidades.

### Solução com módulo de kernel (recomendado)

#### Instalação

Primeiro, você precisa baixar o código-fonte do módulo de kernel. É um repositório independente, então você pode cloná-lo diretamente.

```shell
git clone https://github.com/bclswl0827/r1000v1-rs485-autoflow
cd r1000v1-rs485-autoflow
```

Em seguida, você precisa compilar o módulo de kernel.

```shell
make
```

Se você estiver recebendo erros durante a compilação, talvez precise instalar os cabeçalhos do kernel correspondentes ao kernel atualmente em execução. Presumimos que você esteja usando Raspberry Pi OS, então você pode usar o seguinte comando para instalar os cabeçalhos do kernel.

```shell
sudo apt-get install linux-headers-$(uname -r)
```

Depois disso, você pode compilar o módulo de kernel novamente.

#### Carregar o módulo de kernel

Depois que ele for compilado, você pode carregar o módulo de kernel executando o seguinte comando.

```shell
sudo insmod r1000v1-rs485-autoflow.ko
```

Se o módulo de kernel for carregado com sucesso, você deverá ver a seguinte mensagem no log do kernel; verifique-a com o comando `dmesg`.

```shell
[  256.037465] r1000v1_rs485_autoflow: RS-485 interface has been hooked successfully
```

Agora, você pode usar a ferramenta `minicom` para testar a comunicação RS485. Você também pode usar outras ferramentas de teste de porta serial (por exemplo, `picocom`).

Para carregar o kernel na inicialização, você pode adicionar este módulo ao arquivo `/etc/modules` usando o seguinte comando.

```shell
echo "r1000v1_rs485_autoflow" | sudo tee -a /etc/modules
```

Depois que o módulo for registrado, você precisa reiniciar o sistema para que as alterações entrem em vigor.

```shell
sudo reboot
```

#### Descarregar o módulo de kernel

Para descarregar o módulo de kernel, você pode executar o seguinte comando, e a interface RS485 integrada retornará ao modo somente recepção.

```shell
sudo rmmod r1000v1-rs485-autoflow
```

#### Adicionar o módulo com DKMS

DKMS (Dynamic Kernel Module Support) é um sistema que automatiza a compilação e instalação de módulos de kernel, sendo útil para gerenciar módulos em várias versões de kernel. Usando o DKMS, você pode garantir que seus módulos permaneçam compatíveis mesmo após uma atualização de kernel.

Para adicionar este módulo de kernel com DKMS, use o seguinte comando:

```shell
sudo make dkms_install
```

Este comando registrará o módulo no DKMS, irá compilá-lo e instalá-lo para a versão atual do kernel. Quando o kernel for atualizado no futuro, o DKMS irá automaticamente reconstruir e instalar o módulo para a nova versão, então você não precisará recompilá-lo manualmente.

### Solução em camada de aplicação

#### Usando script

- Além dos métodos mencionados neste artigo, também fornecemos um script que você pode executar usando o comando a seguir. Este script pode criar automaticamente um novo /dev/ttyx e então usar o número de dispositivo recém-criado para realizar comunicação rs485/modbus rtu, o que é suficiente
  ```shell
  curl -sSL https://raw.githubusercontent.com/Seeed-Projects/R1000-RS485-Util/main/setup_rs485.sh | sudo bash
  ```

#### Configuração manual

Primeiro, você precisa baixar o [**programa em C**](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE) que fornecemos e, em seguida, consultar o conteúdo do ReadMe. Compile e execute. 

```shell
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd seeed-linux-dtoverlays/tools/rs485_control_DE/
sudo apt-get install libgpiod-dev
gcc -o rs485_DE rs485_DE.c -lgpiod
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 
```

Este programa criará um novo dispositivo ttyAMAx, onde o número do dispositivo depende dos parâmetros que você insere ao executar o programa.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/cfg_c.gif" /></center>

:::note
- O exemplo acima mostra como usar uma interface RS485. Se você quiser usar três interfaces 485, pode usar o seguinte script para consegui-lo:
```shell
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 &
sudo ./rs485_DE /dev/ttyAMA3 /dev/gpiochip0 17 /dev/ttyAMA11 &
sudo ./rs485_DE /dev/ttyAMA5 /dev/gpiochip0 24 /dev/ttyAMA12 &
```
ttyAMA10~ttyAMA12 correspondem a ttyAMA2~ttyAMA5 um a um. Use ttyAMA10~ttyAMA12 em sua aplicação para comunicação normal (ttyAMA2~ttyAMA5 não podem ser usados; você precisa usar o número de dispositivo recém-criado pelo script)
:::

## Etapas para usar o teste Modbus RTU


**Etapa 1**: Insira o seguinte script no reComputer R1000 para abrir o software minicom

```shell
minicom -D /dev/ttyAMAx -b 9600
```
Entre eles, `-D` é seguido pelo número do dispositivo que você deseja abrir, `-b` se refere à taxa de baud, e o número do dispositivo precisa ser o número de dispositivo recém-criado na primeira etapa. Em seguida, abra o MobaXterm no PC com W10, crie um novo terminal de porta serial, selecione o número da porta serial e a taxa de baud é 9600; por fim, você pode realizar comunicação bidirecional com RS485. Como mostrado na figura, o conteúdo inserido no reComputer R1000 pode ser enviado via RS485. No PC com W10, o conteúdo inserido no PC com W10 também pode ser enviado para o reComputer R1000, e a comunicação bidirecional é normal.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>


**Passo 2**: Após testar a função RS485, você pode realizar o teste da função Modbus. Esta etapa permite que o reComputer R1000 seja testado como um escravo Modbus. Abra o software ModbusMechanic no reComputer R1000, selecione o número do dispositivo e a taxa de baud, depois clique na função de escravo simulado no canto superior esquerdo para adicionar duas bobinas; em seguida, abra o Modbus poll no W10 como estação mestre para ler as bobinas da estação escrava. Depois abra a janela de exibição do Modbus poll, e você verá que as mensagens de envio e recebimento do Modbus RTU estão normais.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**Passo 3**: Esta etapa permite que o reComputer R1000 seja testado como um mestre Modbus. Abra o software ModbusMechanic tanto no reComputer R1000 quanto no PC W10, e selecione o número do dispositivo e a taxa de baud. O PC W10 se refere ao terceiro passo de configuração. Selecione `Read Coils(0x01)` no reComputer R1000 para ler a bobina do escravo, defina `Slave Node` como 1, em `Register` selecione o endereço que você deseja ler e, por fim, clique em `Transmit packet`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>



## Etapas para usar o teste Modbus TCP

**Passo 1**: Abra o modbusmechanic no PC Win10 e no R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**Passo 2**: O R1000 atua como host Modbus TCP. Clique em `Tool => Start Slave Simulator` no PC W10, selecione `TCP` para TYPE, selecione `1` para Slave ID e depois adicione `Coils`; em seguida, insira o `IP` no R1000 e selecione `Read Coil` para Scan group. Insira `Slave Node` e `Register` e, por fim, clique em `Transmit packet`. Você pode ver que os dados do escravo foram lidos com sucesso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**Passo 3**: O R1000 atua como um escravo Modbus TCP. Consulte o segundo passo para a configuração. Você pode ver que o R1000 pode ler dados normalmente como escravo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>


Executar o programa de escravo Modbus TCP no R1000 precisa escutar a porta `502`, o que pode exigir permissões `sudo`. Se o seu aplicativo não conseguir escutar a porta `502`, tente adicionar permissões a ele.


## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
