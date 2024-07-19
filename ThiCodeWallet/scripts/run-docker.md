# Rodar comandos no terminal, na pasta raiz que contém o docker-compose.yml

### Rodar docker para criar containers e imagens (-d para rodar em background)
docker-compose up -d

### Parar docker e remover containers
docker-compose down 

### Parar docker e remover tudo (-v para remover volumes, rmi para remover imagens e redes, local ou todas)
docker-compose down --rmi local -v

docker-compose down --rmi all -v
