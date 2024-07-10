# Comandos Docker

### Rodar / Instalar imagem
docker run -it "nome_imagem" ('node' ou 'ubuntu')

### Listar imagens (containers) rodando
docker ps

### Listar todas as imagens (containers), flag -a
docker ps -a

### Rodar container em background (não ocupar o terminal), flag -d
docker run -d "nome_imagem" ('nginx')

### Parar um container que está em background
docker stop "id_container" ou "name_container"

### Reiniciar um container interrompido
docker start "id_container" ou "name_container"

### Rodar imagem usando uma porta pré definida, flag -p
docker run -d -p 80:80 nginx

### Nomear um container ao executá-lo, flag --name
docker run -d -p 80:80 --name "new_name" nginx

### Listar logs do container
docker logs "id_container" ou "name_container"

### Remover container
docker rm "id_container" ou "name_container"

### Listar imagens
docker image ls

### Remover imagem
docker rmi "image_ID" ou "name_image"

### Gerar buid do Dockerfile
docker build -t "new-name-image" .

### Remover tudo que não está sendo utilizado
docker system prune
