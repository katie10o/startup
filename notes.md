knew solidly:
git status
git push
git pull
git add filename.txt
git add .
git commit -m "comment"

things to wok on:
the merger - it pops up after you try to pull something different than what you commited on VS vs GitHub


with ssh into server:
ssh -i path/to/PemKey/file ubuntu@[IPaddress] - connecting to ssh server
chmod 600 path/to/PemKey/file - restricting access for other users? safety measure 
ls -l (listing all the files with the long format)

my ip address: 44.219.3.88
domain name is silnawellness.com

to launch html files on to my server:

first be in the right directory and then type this code:
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon (simon is in services folder to see full packages look at services/simon/public)
(^ make sure this copy reaches to your file)

then log into the server
and then from the simon folder move to /usr/share/caddy 

mv * path/to/where/i/want


backend is pretty confusing, but basically there is the index.js file and then the public folder that contains the html, css, and js code for front end. You need to add functions to to both the backend and frontend js files if you want them to communicate. Also, postman is really really helpful in seeing how the data is being sent/recieved. 

database was really cool to learn and made the backend make more sense. Basically, you create the majority of your functions but there is some documentation with mongoDB
