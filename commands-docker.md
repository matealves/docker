# 📦 Comandos Docker — Guia Completo e Simples

## 🔨 BUILD

### Gerar build a partir do Dockerfile
```sh
docker build -t imagem:tag .
```

### Gerar build usando um Dockerfile específico
```sh
docker build -f Dockerfile.dev -t imagem:dev .
```

### Fazer build sem usar cache
```sh
docker build --no-cache -t imagem:tag .
```

## 📜 IMAGENS

### Listar imagens
```sh
docker image ls
```

### Remover imagem
```sh
docker rmi imagem:tag
docker rmi ID_da_imagem
```

### Inspecionar imagem
```sh
docker image inspect imagem:tag
```

### Renomear (taggear) imagem
```sh
docker tag imagem:tag novo_nome:tag
```

## 🏃 CONTAINERS

### Listar containers rodando
```sh
docker ps
```

### Listar todos containers
```sh
docker ps -a
```

### Criar e rodar container
```sh
docker run imagem
```

### Rodar container com nome
```sh
docker run --name nome_container imagem
```

### Rodar container em background
```sh
docker run -d imagem
```

### Rodar com bind de porta
```sh
docker run -d -p 8080:80 imagem
```

### Rodar com volume
```sh
docker run -d -v meu-volume:/caminho/no/container imagem
```

### Rodar usando network
```sh
docker run -d --network minha_network imagem
```

### Criar container temporário (debug)
```sh
docker run -it imagem /bin/bash
```

## 🔧 EXECUTAR / DEBUG

### Entrar no terminal de um container
```sh
docker exec -it nome_container /bin/bash
```

### Logs do container
```sh
docker logs nome_container
docker logs -f nome_container
```

## ⏹ PARAR / INICIAR / REINICIAR

### Parar container
```sh
docker stop nome_container
```

### Iniciar container parado
```sh
docker start nome_container
```

### Reiniciar container
```sh
docker restart nome_container
```

### Remover container
```sh
docker rm nome_container
docker rm -f nome_container
```

## 🌐 NETWORKS

### Listar networks
```sh
docker network ls
```

### Criar network
```sh
docker network create minha_network
```

### Inspecionar network
```sh
docker network inspect minha_network
```

## 💾 VOLUMES

### Listar volumes
```sh
docker volume ls
```

### Criar volume
```sh
docker volume create meu_volume
```

### Inspecionar volume
```sh
docker volume inspect meu_volume
```

### Remover volume
```sh
docker volume rm meu_volume
```

## 🧹 LIMPEZA (PRUNE)

### Remover tudo que não está sendo usado
```sh
docker system prune
```

### Remover tudo incluindo volumes
```sh
docker system prune --volumes
```

### Limpar cache de build
```sh
docker builder prune
```

## 🐳 DOCKER COMPOSE

### Subir containers em background
```sh
docker compose up -d
```

### Derrubar containers
```sh
docker compose down
```

### Derrubar + remover volumes
```sh
docker compose down -v
```

### Ver logs
```sh
docker compose logs
docker compose logs -f
```

### Rebuilar e subir
```sh
docker compose up -d --build
```

## 🔍 INSPEÇÃO

### Inspecionar container
```sh
docker inspect nome_container
```

### Ver consumo de recursos
```sh
docker stats
```

### Ver processos do container
```sh
docker top nome_container
```

## 🏷 TAGS

### Criar tag
```sh
docker tag minha_imagem:latest minha_imagem:v1
```

### Push para Docker Hub
```sh
docker push usuario/imagem:tag
```

### Login
```sh
docker login
```

## 📥 PULL

### Baixar imagem
```sh
docker pull nginx
docker pull node:18
```

## 📍 EXTRA

### Parar todos containers
```sh
docker stop $(docker ps -q)
```

### Remover todos containers
```sh
docker rm $(docker ps -aq)
```

### Remover todas imagens
```sh
docker rmi $(docker images -q)
```
