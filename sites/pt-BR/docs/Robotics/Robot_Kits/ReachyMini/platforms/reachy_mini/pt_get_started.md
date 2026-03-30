---
description: Guia de configuração do Reachy Mini Wireless incluindo instruções de montagem, primeira inicialização, configuração de Wi-Fi, atualização do sistema e acesso SSH.
title: Guia de Configuração do Reachy Mini Wireless
slug: /reachymini_platforms_reachy_mini_get_started
keywords:
  - wireless
  - configuração
  - montagem
  - wi-fi
  - primeira inicialização
  - configuração
  - ssh
  - atualização
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_get_started/
---

# Reachy Mini (Wireless) - Guia de Configuração

O **Reachy Mini (Wireless)** é a versão autônoma alimentada por um Raspberry Pi 4. Ele funciona de forma independente usando sua bateria interna e conexão Wi‑Fi.

## 1. 🔧 Montagem

O Reachy Mini vem em forma de kit. Montá‑lo é o primeiro passo da sua jornada!

:::info Detalhes da Montagem
* **Tempo necessário:** de 2 a 3 horas.
* **Ferramentas:** Tudo está incluído na caixa.
* **Instruções:** Recomendamos fortemente seguir o guia em vídeo junto com o manual.
:::

:::tip Dica Profissional
Recomendamos fortemente manter o **Guia Online** ou o **vídeo de montagem** abertos junto com o livreto em papel (veja abaixo). A versão online inclui pequenos trechos em vídeo para cada etapa, o que torna a montagem muito mais fácil de entender.
:::

| **📖 Guia Digital Interativo** | **📺 Vídeo Completo de Montagem** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/digital_assembly_guide_preview_mini.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>[**Abrir Guia Passo a Passo**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>*(Inclui pequenos loops de vídeo)* | [![Watch on YouTube](https://img.youtube.com/vi/WeKKdnuXca4/maxresdefault.jpg)](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>[**Assistir no YouTube**](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>*(Vídeo com seções para cada etapa)* |

## 2. 🛜 Primeira Inicialização & Configuração do Wi‑Fi

Depois de montado, você precisa conectar o robô à sua rede Wi‑Fi.

:::tip Etapa 1: Ligar
Ligue o seu Reachy Mini.
:::

:::info Etapa 2: Conectar ao Reachy
Aguarde alguns instantes. O robô criará uma rede Wi‑Fi chamada **`reachy-mini-ap`**.
* **Senha:** `reachy-mini`
* *Ou escaneie o QR Code:*

![QR-Code reachy-mini-ap](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/qrcode-ap.png)
:::

:::tip Etapa 3: Configurar o Wi‑Fi
* Abra o seu navegador e vá para: **[http://reachy-mini.local:8000/settings](http://reachy-mini.local:8000/settings)**.
* Insira as credenciais do seu Wi‑Fi local (SSID e Senha) e clique em **"Connect"**.
* Aguarde alguns instantes para o Reachy Mini se conectar à sua rede Wi‑Fi. O ponto de acesso desaparecerá quando a conexão for estabelecida. Se a conexão falhar, o Reachy Mini irá reiniciar o ponto de acesso e você poderá tentar novamente.
:::

## 3. 🔄 Atualizar o Sistema

:::warning Recomendado
Antes de prosseguir, é altamente recomendado atualizar o seu robô para a versão mais recente.
:::

1.  **Abrir Settings:** Vá para **[http://reachy-mini.local:8000/settings](http://reachy-mini.local:8000/settings)**.
2.  **Verificar Atualizações:** Clique no botão **"Check for updates"**.
3.  **Instalar:** Se uma nova versão estiver disponível, siga as instruções na tela para instalá‑la.

## 4. 🕹️ Próximo Passo: Usando o Robô

Agora que o seu robô está online e atualizado, você pode começar a controlá‑lo!

👉 **[Vá para o Guia de Uso](/pt-br/reachymini_platforms_reachy_mini_usage)** para aprender como:
* Acessar o **Dashboard**.
* Instalar e executar **Apps** (como Conversa ou Jogos).
* Programar o seu Reachy com **Python**.

## 5. 💻 Avançado: Conectar‑se diretamente ao Raspberry Pi interno via SSH

:::info Credenciais SSH
Se você precisar se conectar ao Raspberry Pi interno do Reachy Mini via SSH, as credenciais são:
:::

```bash
username: pollen
password: root
```

Depois de conectado via SSH, você pode verificar a integridade do seu Raspberry Pi e da configuração do robô com:

```bash
reachyminios_check
```

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas & FAQ](/pt-br/reachymini_troubleshooting)**

## Modo Avançado

:::warning Guias Avançados
Se você precisar reinstalar o Raspberry Pi do zero ou criar uma imagem personalizada, siga os guias avançados abaixo.
:::

<!-- * **[Reflash the ISO](../reflash_the_rpi_ISO.md)** -->
<!-- * **[Install Daemon from a Specific Branch](../install_daemon_from_branch.md)** -->
