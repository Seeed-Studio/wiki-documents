---
title: Problemas Comuns do SenseCraft Robotics
description: Perguntas frequentes sobre conexão de dispositivos SenseCraft Robotics, calibração, coleta de dados, treinamento e execução de modelos.
keywords:
  - SenseCraft Robotics
  - FAQ
  - troubleshooting
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/calibration-joint-error.webp
slug: /sensecraft_robotics_common_issues
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

## Conexão e Detecção do Dispositivo

### O que devo fazer se as portas seriais não forem encontradas?

Verifique o seguinte:

- Certifique-se de que o cabo USB suporta transferência de dados.
- Certifique-se de que o braço robótico está ligado.
- Certifique-se de que o braço líder está conectado antes do braço seguidor.
- No macOS / Linux, certifique-se de que o sistema permite acesso à porta serial.
- Certifique-se de que nenhum outro programa está ocupando a porta serial.

Tente o seguinte:

1. Desconecte e reconecte o dispositivo.
2. Clique em "Scan Serial Ports".
3. Se a página relatar um problema de permissão, conclua o fluxo de permissão.
4. Se ainda falhar, reinicie o software ou o computador.

### O que devo fazer se o B601 RS não encontrar o CAN?

Verifique o seguinte:

- Certifique-se de que o adaptador e o driver CAN estão instalados.
- No Linux / Jetson, verifique se a interface SocketCAN existe, por exemplo `can0`.
- No macOS / Windows, verifique se o runtime do PCAN está disponível.
- Certifique-se de que o nome do canal CAN está correto.

### O que devo fazer se a câmera não tiver imagem ou se a taxa de quadros estiver baixa?

Sugestões:

- Reduza a resolução ou a qualidade da imagem.
- Reduza a velocidade de amostragem.
- Feche pré-visualizações desnecessárias.
- Evite usar a câmera em vários programas ao mesmo tempo.
- Faça uma nova varredura e vincule a câmera novamente.

## Calibração e Teleoperação

### O que devo fazer se a calibração falhar?

Sugestões:

- Verifique se os modelos de braço líder e braço seguidor foram selecionados corretamente.
- Verifique se as vinculações de porta não estão invertidas.
- Reposicione os braços robóticos na postura recomendada.
- Pare a calibração e inicie novamente.
- Verifique os logs de diagnóstico para determinar se o problema está relacionado a portas seriais, servos, CAN ou à etapa de postura.

### O que devo fazer se a direção da teleoperação estiver invertida ou o movimento estiver lento?

Sugestões:

- Calibre novamente.
- Verifique se os papéis de braço líder e braço seguidor estão conectados corretamente.
- Movimente-se suavemente e evite puxões bruscos.
- Para o B601 RS, reduza o passo máximo de movimento.
- Verifique os logs de diagnóstico da teleoperação.

## Coleta de Dados e Treinamento

### O que devo fazer se a qualidade dos dados gravados estiver ruim?

Sugestões:

- Grave novamente os episódios de baixa qualidade.
- Mantenha cada demonstração completa, estável e com ritmo consistente.
- Mantenha a posição da câmera e a iluminação estáveis.
- Use a página Dataset para inspecionar vídeos, quadros de amostra e curvas das juntas.
- Ao mesclar conjuntos de dados, mescle apenas dados com a mesma descrição de tarefa.

### O que devo fazer se o treinamento não puder ser iniciado?

Verifique o seguinte:

- Certifique-se de que um conjunto de dados treinável foi selecionado.
- Certifique-se de que você está conectado à sua conta SenseCraft para treinamento em nuvem.
- Certifique-se de que o runtime de treinamento local está completo.
- Para o GR00T, certifique-se de que o token HF, o acesso restrito, o runtime e as verificações de cache do modelo foram aprovados.

### O que devo fazer se nenhum modelo aparecer na página Run?

Causas comuns:

- O treinamento não foi concluído com sucesso.
- Os resultados do treinamento em nuvem não foram baixados para o computador local.
- O registro do modelo local falhou.

Tente o seguinte:

1. Volte para Training e verifique o status da tarefa.
2. Aguarde a conclusão do treinamento.
3. Certifique-se de que o modelo foi baixado / registrado.
4. Atualize a página Run.

### O que devo fazer se a calibração relatar "anormalidade detectada na junta do braço robótico"?

Se esse erro aparecer após clicar em "Start Calibration", verifique primeiro o braço líder.

Verifique nesta ordem:

1. Certifique-se de que a fonte de alimentação do braço robótico está ligada e que a tensão atende aos requisitos do dispositivo.
2. Volte para "Device Pairing" e confirme que o modelo de dispositivo selecionado corresponde ao braço robótico real.
3. Verifique a etapa "Bind Serial Port" e confirme que as portas seriais de líder e seguidor não estão invertidas.
4. Verifique a fiação do braço líder, a conexão em cadeia (daisy-chain) e a conexão USB.

![Exemplo de erro de anormalidade na junta do braço robótico](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/calibration-joint-error.webp)

### O que devo fazer se a calibração relatar que a porta serial foi desconectada ou que a gravação falhou?

Se um erro como "dm-serial write failed" ou falha de gravação serial aparecer durante a calibração, geralmente o link serial não está conectado corretamente, o dispositivo não é reconhecido ou os papéis seriais estão vinculados incorretamente.

Pare a calibração primeiro, depois verifique as fontes de alimentação de líder e seguidor, o cabo USB, as vinculações de porta serial e o modelo do dispositivo. Após restaurar a conexão, clique em "Scan Serial Ports" novamente e recalcibre.

![Exemplo de erro de falha na gravação serial](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/calibration-serial-write-failed.webp)

### O que devo fazer se o braço seguidor relatar um erro após a conclusão da calibração do braço líder?

Se a calibração do braço líder estiver concluída, mas um erro aparecer ao mudar para a calibração do braço seguidor, concentre a solução de problemas no braço seguidor.

Verifique se o braço seguidor está ligado, se a tensão atende ao padrão e se a fiação do seguidor, a cadeia de servos, o CAN ou a conexão serial estão normais. Se necessário, vincule novamente a porta do seguidor antes de iniciar a calibração.

![Exemplo de erro de calibração do braço seguidor](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/follower-calibration-error.webp)

### A que devo prestar atenção na calibração automática do SoArm?

Antes da calibração automática do SoArm, certifique-se de que há espaço suficiente ao redor do braço robótico para evitar ferir pessoas ou colidir com objetos sobre a mesa.

Também confirme se o pulso do braço robótico tem limite de movimento. Se o pulso não tiver limite, a calibração automática não é recomendada porque o movimento pode puxar os cabos. Para outros problemas de calibração, consulte as verificações do ReBot/B601: fonte de alimentação, modelo do dispositivo, vinculação de portas e estado da fiação.

### O que devo fazer se a validação da teleoperação falhar?

Se a validação da teleoperação falhar, primeiro confirme que os braços líder e seguidor estão conectados e pareados corretamente.

Verifique nesta ordem:

1. Certifique-se de que a alimentação está ligada e de que a tensão atende ao padrão.
2. Certifique-se de que o dispositivo selecionado em Device Pairing corresponde ao modelo real do braço robótico.
3. Verifique se as portas seriais de líder e seguidor não estão invertidas.
4. Verifique se a fiação do braço líder está normal.
5. Calibre novamente e, em seguida, execute a validação da teleoperação com movimentos pequenos e lentos.

![Exemplo de falha na validação da teleoperação](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/teleoperation-validation-failed.webp)

## Câmera e Desempenho de Coleta

### Quais combinações de câmeras são recomendadas quando ocorrem erros de câmera durante a coleta no macOS?

Se ocorrerem erros relacionados à câmera durante a coleta no macOS, tente primeiro estas combinações:

1. Duas câmeras Hikvision: mantenha a taxa de quadros do braço robótico em no máximo 60 fps. A coleta a 120 fps pode falhar. Geralmente funciona, mas ainda podem aparecer problemas de compatibilidade em alguns ambientes.
2. Uma câmera Hikvision + Logi Webcams C270 HD Webcam: atualmente mais estável e também pode ser usada para coleta do braço robótico a 120 fps.
3. Duas Webcams C270 HD Webcam: também é uma combinação estável que cobre taxas de quadros comuns de coleta do braço robótico.

### Que problemas o desempenho insuficiente de coleta pode causar?

Quando o desempenho de coleta é insuficiente, botões como pular episódio atual, regravar episódio atual e encerrar coleta podem responder lentamente. Quedas de quadros também podem ocorrer. Por exemplo, se um episódio estiver configurado para 15 segundos, a página Dataset pode mostrar uma duração real menor que 15 segundos.

Recomenda-se manter uma única sessão de gravação em cerca de 20 episódios e depois organizar os dados com mesclagem de conjuntos de dados. Episódios demais em uma única sessão de coleta podem aumentar o risco de corrupção do conjunto de dados ou erros de gravação.

## Execução de Modelo

### O que devo confirmar antes de executar um modelo?

Antes de executar um modelo, use a teleoperação para confirmar que o hardware do braço robótico, a conexão, a calibração e o comportamento de seguimento estão normais. Certifique-se também de que o layout de câmera selecionado corresponde ao layout de câmera usado ao coletar os dados de treinamento do modelo; caso contrário, a qualidade da inferência pode ser afetada.
