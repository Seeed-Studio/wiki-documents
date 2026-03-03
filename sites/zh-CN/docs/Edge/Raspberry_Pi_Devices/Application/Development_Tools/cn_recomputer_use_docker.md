---
description: 本教程将向您展示如何在 reComputer 上使用 docker
title: 在 reComputer 上使用 docker
keywords:
  - Edge
  - RasberryPi 5
  - Docker
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/recomputer_use_docker.webp
slug: /use_docekr_on_recomputer
last_update:
  date: 08/25/2025
  author: Jiahao
no_comments: false # for Disqus
---

# 在 reComputer 上使用 docker

## 简介

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker.png" style={{width:300, height:'auto'}}/></div>

本教程介绍如何在 reComputer 盒子上使用 [docker](https://www.docker.com)。Docker 是一个开源平台，用于在轻量级、可移植的容器内自动化应用程序的部署、扩展和管理。容器允许开发人员将应用程序及其依赖项打包在一个一致的环境中，确保它们在不同的计算环境中顺利运行。

## 准备硬件

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 准备软件

### 更新系统

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### 安装 docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### 将当前用户添加到 docker 组

```bash
sudo usermod -aG docker $USER
reboot
```

### 检查 docker 版本

```bash
docker --version
```

结果如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker_version.png" style={{width:600, height:'auto'}}/></div>

## 使用 docker

### 创建您的项目

在这里，我们使用 `my_app` 作为示例来演示 `docker` 的使用。

```bash
mkdir my_app
cd my_app
```

### 创建 `src` 文件夹并创建 `main.py`

```bash
mkdir src && cd src
nano main.py
```

<details>
  <summary>main.py</summary>

```python
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os

app = FastAPI()

# Create directories if they don't exist
os.makedirs("static", exist_ok=True)
os.makedirs("templates", exist_ok=True)

# Mount static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up Jinja2 templates
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

```

</details>

### 创建 `static` 文件夹

```bash
cd .. && mkdir static
cd static
mkdir css && mkdir js
```

创建 `css` 文件：

```bash
cd css 
nano style.css
```

<details>
  <summary>style.css</summary>

```css
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    padding: 40px 0;
    color: white;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2rem;
    font-weight: 300;
}

main {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 25px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.card h2 {
    margin-top: 0;
    color: #667eea;
    display: flex;
    align-items: center;
    gap: 10px;
}

.card ul {
    padding-left: 20px;
}

.card li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.endpoint {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;
}

.endpoint code {
    background: #e9ecef;
    padding: 5px 10px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
}

.button {
    background: #667eea;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s ease;
}

.button:hover {
    background: #5a6fd8;
}

footer {
    text-align: center;
    padding: 30px 0;
    color: white;
    font-weight: 300;
}

footer p {
    margin: 0;
}

footer i {
    color: #ff6b6b;
}
```

</details>

然后创建 `js` 文件：

```bash
cd .. && mkdir js
cd js
nano main.js
```

<details>
  <summary>main.js</summary>

```js
// Simple JavaScript to add interactivity to the UI
document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the "Try it" button
    const tryButton = document.querySelector('.button');
    if (tryButton) {
        tryButton.addEventListener('click', function(e) {
            // Add a simple animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    }

    // Add a hover effect to the cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});
```

</details>

### 创建 `html` 文件

```bash
cd ../../
mkdir templates
nano index.html
```

<details>
  <summary>index.html</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FastAPI App</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }
        .container {
            background: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: #667eea;
        }
        .card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }
        .endpoint {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #e9ecef;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
        }
        code {
            background: #dee2e6;
            padding: 5px 10px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        .button {
            background: #667eea;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.2s ease;
        }
        .button:hover {
            background: #5a6fd8;
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>FastAPI Application</h1>
        <p>A modern, high-performance web application</p>

        <div class="card">
            <h2>About This App</h2>
            <p>This is a simple yet elegant web application built with FastAPI. It demonstrates how to create a beautiful UI with minimal code.</p>
        </div>

        <div class="card">
            <h2>Features</h2>
            <ul>
                <li>Fast and lightweight</li>
                <li>Responsive design</li>
                <li>Modern UI components</li>
                <li>RESTful API endpoints</li>
            </ul>
        </div>

        <div class="card">
            <h2>Try the API</h2>
            <p>You can access the API endpoints directly:</p>
            <div class="endpoint">
                <code>GET /items/{item_id}</code>
                <a href="/items/42" class="button">Try it</a>
            </div>
        </div>
    </div>

    <script src="/static/js/main.js"></script>
</body>
</html>
```

</details>

### 创建 `Dockerfile`

```bash
cd ..
nano Dockerfile
```

<details>
  <summary>Dockerfile</summary>

```Dockerfile
# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Create directories for templates and static files
RUN mkdir -p templates static

# Copy the source code into the container
COPY src/ ./src

# Copy the templates and static files into the container
COPY templates/ ./templates
COPY static/ ./static

# Expose the port that the application will run on
EXPOSE 8000

# Define the command to run the application
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

</details>

### 创建 `requirements.txt`

```bash
nano  requirements.txt
```

<details>
  <summary>requirements.txt</summary>

```bash
fastapi
uvicorn[standard]
jinja2
```

</details>

### 项目目录结构如下

```bash
tree
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker_tree.png" style={{width:600, height:'auto'}}/></div>

## 构建和发布镜像

### 构建镜像

>注意：如果您没有 [dockerhub](https://hub.docker.com/) 账户，请注册一个账户。`xxx` 是您的 docker hub 用户名。

```bash
docker build -t xxx/fastapi_app_ui:latest .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker_image.png" style={{width:1000, height:'auto'}}/></div>

### 测试镜像

```bash
docker image ls -a
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker_0.png" style={{width:1000, height:'auto'}}/></div>

```bash
docker run -d -p 8000:8000 jiahaoxyz/fastapi_app_ui
```

结果如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker_2.png" style={{width:1000, height:'auto'}}/></div>

### 发布镜像

并创建您自己的 [token](https://app.docker.com/settings)。

>注意：`xxx` 是您自己的 dockerhub 用户名

```sh
docker login -u xxx
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/dockerhub.png" style={{width:1000, height:'auto'}}/></div>

>注意：`xxx` 是您自己的 dockerhub 用户名

```sh
docker push xxx/fastapi_app_ui:latest
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker_3.png" style={{width:1000, height:'auto'}}/></div>

## 结果

您可以看到使用 Docker 打包的镜像已经上传到 Docker Hub，任何人都可以使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/docker_result.png" style={{width:1000, height:'auto'}}/></div>

您可以按如下方式使用我的镜像，这里是项目的 [github 页面](https://github.com/LJ-Hao/Use_Docker_on_reComputer_Raspberrypi)：

```sh
docker pull jiahaoxyz/fastapi_app_ui
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
