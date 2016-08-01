# Auroral - Animated background gradients

Auroral is a collection of animated background gradients, that can be used almost anywhere. They are built with pure CSS. To learn how it works, [read the article](http://blog.lunarlogic.io/2016/let-your-website-cast-the-northern-lights-auroral/).

# Demo

You can test all effects on the [Auroral demo page](https://lunarlogic.github.io/auroral/).

#How to use

1. Include a container for a background inside a wanted element. It needs to have [one of the auroral classes](#backgrounds).

    ```html
    <section class="your-container">
      <div class="auroral-northern"></div>
    </section>
    ```

2. In the head of your html file, add [auroral stylesheet](https://github.com/LunarLogic/auroral/blob/master/css/auroral.css). Of course, you can add [minified version](https://github.com/LunarLogic/auroral/blob/master/min/style.css.min) instead.

    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="css/auroral.css"/>
    </head>
    ```

    Or:

    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="css/auroral.min.css"/>
    </head>
    ```

3. Make sure, that your container (the one in which you put the auroral container) has these rules in CSS:

    ```css
    .your-container {
      display: block; // if it is not a block element
      position: relative;
      overflow: hidden;
    }
    ```

# Stars!

What is a night sky without the stars? Add them by appending an element with the ***auroral-stars*** class right after the auroral container:

```html
  <section class="your-container">
    <div class="auroral-northern"></div>
    <div class="auroral-stars"></div>
  </section>
```

If you know how to use [Sass](http://sass-lang.com/) you can play with the ***$star-number*** variable, to make sure there is a right amount of them! It sits in [_stars.scss partial](https://github.com/LunarLogic/auroral/blob/master/scss/_stars.scss).


#Backgrounds

Currently available backgrounds (class names to be used in your container):

  - auroral-northern (Northern Lights style),
  - auroral-northern-intense ([Intense Northern Lights](http://mynorthwest.com/wp-content/uploads/cms/15/1540/154044.jpg)),
  - auroral-northern-dimmed ([Delicate Northern Lights](http://www.seattletimes.com/nation-world/photos-of-the-day-march-7-2016/)),
  - auroral-northern-dusk (Delicate Northern Lights spin-off),
  - auroral-northern-warm ([Warm Northern Lights](http://cdn.images.express.co.uk/img/dynamic/151/590x/Northern-Lights-586620.jpg)),
  - auroral-agrabah (Inspired by the colors of the night sky in [Aladdin](http://www.imdb.com/title/tt0103639/) :D).

## License

The library is [licensed](https://github.com/LunarLogic/starability/blob/master/LICENSE) under [The MIT License (MIT)](http://choosealicense.com/licenses/mit/).

Go to [Lunar Logic website](http://www.lunarlogic.io/) to learn more [about us](http://www.lunarlogic.io/company) and [our work](http://www.lunarlogic.io/portfolio).