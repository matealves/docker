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

<!-- CRIAR -->

### Criar network
docker network create "name_network"

<!-- RODAR -->

### Rodar / Instalar imagem
docker run -it "nome_imagem" ('node' ou 'ubuntu')

### Rodar container em background (não ocupar o terminal), flag -d
docker run -d "nome_imagem" ('nginx')

### Rodar imagem usando uma porta pré definida, flag -p
docker run -d -p 80:80 nginx

### Nomear um container ao executá-lo, flag --name
docker run -dp 80:80 --name "new_name" nginx

### Rodar imagem em uma network
docker run -d --name "new-image-name" --network "name_network" "name_image"

<!-- PARAR EXECUÇÃO -->

### Parar um container que está em background
docker stop "id_container" ou "name_container"

<!-- REINICIAR EXECUÇÃO -->

### Reiniciar um container interrompido
docker start "id_container" ou "name_container"