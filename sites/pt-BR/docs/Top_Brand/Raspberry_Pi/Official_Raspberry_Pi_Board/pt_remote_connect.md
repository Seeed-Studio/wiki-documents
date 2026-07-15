---
description: Conectar-se remotamente ao Raspberry Pi/reComputer
title: Conectar-se remotamente ao Raspberry Pi
keywords:
  - Raspberry_Pi
  - Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /remote_connect
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/remote_connect/
---

# Conectar-se remotamente ao Raspberry Pi/reComputer

Muitas vezes acontece de o usuário não conseguir acessar fisicamente o Raspberry Pi (reComputer ou outros dispositivos de borda) devido a certas limitações (como ausência de monitor adicional etc.). Portanto, é muito necessário conectar-se ao Raspberry Pi remotamente. Dependendo do sistema operacional em execução, há várias maneiras de estabelecer uma conexão com dispositivos de borda remotos. Neste projeto, de acordo com o sistema operacional (Linux) usado no Raspberry Pi, podemos usar o Secure Shell Protocol (SSH) para controlar máquinas remotamente.

## Primeiros Passos

SSH, também conhecido como Secure Shell ou Secure Socket Shell, é um protocolo de rede que oferece aos usuários, especialmente administradores de sistema, uma forma segura de acessar um computador por meio de uma rede não segura. O SSH é amplamente usado por administradores de rede para gerenciar sistemas e aplicações remotamente, permitindo que eles façam login em outro computador por meio de uma rede, executem comandos e movam arquivos de um computador para outro. Um servidor SSH, por padrão, escuta na porta 22 do protocolo Transmission Control Protocol (TCP).

### Materiais Necessários

- Dispositivos baseados em Linux (Raspberry Pi ou reComputer)
- PC

### Conexão Remota

Tomando o Raspberry Pi como exemplo, iremos abrir a porta SSH do Raspberry Pi e acessá-lo remotamente usando a interface SSH no PC. Para conectar ao Raspberry Pi a partir do computador, precisamos saber o endereço IP do Pi.
>Aviso: certifique-se de que o PC e o Raspberry Pi estejam na mesma LAN.

Se o seu dispositivo for um reComputer, você pode pular do passo 1 ao passo 3, pois a porta ssh é aberta por padrão. A seguir estão as etapas para conectar o Raspberry Pi ao computador.

**Passo 1.** Abra um novo terminal no Raspberry Pi e execute `sudo raspi-config.`O menu será exibido como abaixo e precisamos selecionar “Interfacing Options” e então pressionar ENTER

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_2.png"/></div>

**Passo 2.** Selecione “SSH” e pressione ENTER.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_3.png"/></div>

**Passo 3.** Selecione “Yes” e pressione ENTER.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_4.png"/></div>

Após algum tempo, receberemos a mensagem “The SSH server is enabled”.

 <div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_5.png"/></div>

**Passo 4.**  Abra um Terminal no Raspberry Pi e execute `ifconfig`
Podemos ver o endereço IP do Raspberry Pi mostrado como abaixo:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_6.png"/></div>

**Passo 5.** Abra o Terminal do PC e execute `ssh pi@192.168.6.215` e insira a senha do Raspberry Pi. O PC então se conectará ao Raspberry Pi remotamente.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png"/></div>
