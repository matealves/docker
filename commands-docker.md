# Comandos Docker

<!-- BUILD -->

### Gerar build a partir do Dockerfile
docker build -t "new-image-name" .

<!-- LISTAR -->

### Listar imagens (containers) rodando
docker ps

### Listar todas as imagens (containers), flag -a
docker ps -a

### Listar logs do container
docker logs "id_container" ou "name_container"

### Listar imagens
docker image ls

<!-- REMOVER -->

### Remover container
docker rm "id_container" ou "name_container"

### Remover imagem
docker rmi "image_ID" ou "name_image"

### Remover tudo que não está sendo utilizado
docker system prune
docker builder prune

<!-- RODAR / CRIAR -->

### Rodar / Instalar imagem
docker run -it "nome_imagem" ('node' ou 'ubuntu')

### Criar container com nome e executá-lo, flag --name
docker run -dp 80:80 --name "new_container_name" "name_image"

### Criar container vinculado a uma network, flag --network
docker run --name "new_container_name" --network "name_network" -dp 127.0.0.1:5002:5002 "name_image"

### Rodar container em background (não ocupar o terminal), flag -d
docker run -d "nome_imagem" ('nginx')

### Rodar imagem usando uma porta pré definida, flag -p
docker run -d -p 80:80 nginx

### Rodar imagem usando um volume pré definido, flag -v
docker run -d -v spa-volume:/var/www/html nginx

### Rodar imagem em uma network
docker run -d --name "new-image-name" --network "name_network" "name_image"

### Criar container temporário (para ver o que tem dentro)
docker run --name "name_container" -it "name_image"

### Entrar no container para ver o que tem nele (pelo terminal)
docker exec -it "name_container" /bin/bash
ls (lista diretórios e arquivos)
cat "name_file" (abre arquivo no terminal)

### Rodar docker-compose em background
docker compose up -d

<!-- CRIAR -->

### Criar network
docker network create "name_network"

<!-- PARAR EXECUÇÃO -->

### Parar um container que está em background
docker stop "id_container" ou "name_container"

<!-- REINICIAR EXECUÇÃO -->

### Reiniciar um container interrompido
docker start "id_container" ou "name_container"