$ cd ThiCodeWallet\spa

$ docker build -t spa-wallet .

$ docker run -d --name spa-wallet -v spa-volume:/var/www/html --network net-wallet spa-wallet

-----------------------------------------------------------

$ cd .. 

$ cd ThiCodeWallet\nginx

$ docker build -t nginx-wallet .

$ docker run -d --name nginx-container -v spa-volume:/var/www/html -p 80:80 --network net-wallet nginx-wallet