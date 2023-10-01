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

first type this code:
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon 
(^ make sure this copy reaches to your file)

and then from the simon folder move to /usr/share/caddy 

