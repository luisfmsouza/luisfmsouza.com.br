#Luís Felipe Souza

##Access :zap:

Link: http://www.luisfmsouza.com.br

#Plans :thought_balloon:
- Use [RSCSS](http://willianjusten.com.br/falando-sobre-rscss/) methodology
- Use PostCSS (also as a preprocessor) :ballot_box_with_check:
- NPM scripts (maybe!) :ballot_box_with_check:

#Using
- [PostCSS](https://github.com/postcss/postcss)
  - [PostCSS-CLI](https://github.com/postcss/postcss-cli): to make NPM scripts easyer
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [CSS Nano](https://github.com/ben-eb/cssnano)
  - [Font Magician](https://github.com/jonathantneal/postcss-font-magician)
  - [LostGrid](https://github.com/peterramsing/lost)
  - [cssnext](https://github.com/MoOx/postcss-cssnext)


#Deploy :rocket:

Heroku Pipeline is taking care of every deploy step.

First, every Pull Request should pass by an review. If everything is ok, deploy to staging is executed and the changes must be merged to `master`.

After the merge, a deploy to staging is automatically started.

If the staging review is ok, Heroku Pipeline also take care of a deploy to production.

Easy to ship and go online!
