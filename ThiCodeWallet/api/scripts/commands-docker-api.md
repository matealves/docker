$ docker build -t api-wallet .

$ docker network create net-wallet

$ docker run --name api-wallet --network net-wallet -dp 127.0.0.1:5002:5002 api-wallet

-------------------------------------------------------------

$ docker run -d --name mongo-wallet -p 27017:27017 --network net-wallet mongo