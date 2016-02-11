#Luís Felipe Souza

##Access :zap:

Link: http://www.luisfmsouza.com.br

#Plans :thought_balloon:
- Use [RSCSS](http://willianjusten.com.br/falando-sobre-rscss/) methodology
- Use PostCSS (also as a preprocessor)
- NPM scripts (maybe!)


#Deploy :rocket:

Heroku Pipeline is taking care of every deploy step. 

First, every Pull Request should pass by an review. If everything is ok, deploy to staging is executed and the changes must be merged to `master`.

After the merge, a deploy to staging is automatically started.

If the staging review is ok, Heroku Pipeline also take care of a deploy to production.

Easy to ship and go online!
