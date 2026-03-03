---
description: Send message from Watcher & Node-RED to Open Interpreter
title: Watcher & Node-RED to Open Interpreter
keywords:
- watcher
- Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /watcher_node_red_to_open_interpreter
last_update:
  date: 08/19/2024
  author: Allen
---

# Watcher To Open Interpreter Quick Start

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## Part 1.What is [Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction)

Open Interpreter is an open-source tool that facilitates interaction between users and their computers by enabling natural language commands to execute code in various programming languages. It acts as a bridge, allowing users to write instructions in plain language, which the interpreter then translates into executable code. This enhances productivity and makes programming more accessible, especially for those who may not be familiar with coding syntax.

## Part 2.Operations in Node-RED

In this part, we need 4 modules to finish the job. There are **SenseCap Watcher OpenSteam, function, http request and debug** module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **SenseCap Watcher OpenSteam module**: Get message from Watcher to Node-RED.
2. **function module**: Process data to get what message you want.
3. **http request module**: Send message to Open Interpreter via http potocal.
4. **debug module**: Debug the whole work flow to check if everything is ok.

We will show you how to configure those modules in following steps.

### Step 1.Configure SenseCap Watcher OpenSteam module

Fisrt of all, you need to run a task in Watcher following the video below. If you want to know more [please click here](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

If you don't know how to send message from Watcher to Node_RED yet, [please click here](https://wiki.seeedstudio.com/watcher_to_node_red/).

### Step 2.Configure function module

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### Step 3.Configure http request module

We use POST request for security and send to port 3000, and we will use Open Interpreter to keep listening port 3000 later.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### Step 4.Configure debug module

Select as following image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

When finished configuration, don't forget to **Deploy** them.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## Part 3.Operations in Open Interpreter

:::tip
Before we keep continue, the prerequisite is you need to have Python development enviroment in your computer. 

If you haven't, [please click here for your reference.](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### Step 5.Install Open Interpreter

After installing Python, you can install Open Interpreter via Python easily, just one command.

```python
pip install open-interpreter
```

### Step 6.Start Open Interpreter

Interpreter have two mode, online mode and local mode. By default, Interpreter select online mode, using OpenAI GhatGPT gpt-4-turbo API Key. You can also set it to local mode that means you need to download model to run locally.

:::tip
I would recommend online mode because online mode is much faster and smarter than local mode and local mode often stuck.
:::

#### Online mode

1. Before we start, we need a OpenAI API Key. [You can click here](https://platform.openai.com/api-keys) to get one if you are a OpenAI GPT-4 paid member.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. And then, we input ```interpreter``` this command to start it and it require us input API Key. After that, we set the model to gpt-4-turbo successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### Local mode

1. Before we start, we need to download a model to run it locally. I would recommend **Ollama** here. [Click here to jump.](https://ollama.com/) You should download this application and install it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. When you install it successfully, run ```ollama``` in your **PowerShell(or Terminal)**,it will like following image. And then, run ```ollama run llama3.1``` to download model **llama3.1** and run. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. If you want to try other models, [click here to jump.](https://ollama.com/library) Just run ```ollama run xxx```.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. After installing model and run successfully, we can continue. We need to input ```interpreter -l``` this command to get into it，and then select **ollama** and **llama3.1**(the model you just download).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### Step 7.Run commands

:::tip
I try many times to run the following command in Interpreter, but not every times the reaction of Interpreter are the same.

So you need to interact with Interpreter according to its reaction. Sometimes you need to reboot it and try again.
:::

Here is my natural language command sent to Open Interpreter.

```
i want you to keep listening computer port 3000 and extract the image_url and open it in browser.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

In the first time, Interpreter said she initial setup only support GET requests for simplicity but my request is POST for security, so she can't support it and suggeset me to modify the server to handle POST requests. I said yes and she will run automatically.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

As you can see, the code run successfully, listening port 3000. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

Now, use Watcher to detect yourself. The image will be captured and opened in browser automatically.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

Congratulations on successfully integrating the Watcher and Open Interpreter applications! This achievement marks a significant step in your journey, showcasing your dedication and skill. As you move forward, you'll find even more fascinating concepts and tools to explore. Embrace the challenges and discoveries that lie ahead, and enjoy every moment of this exciting adventure!

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>