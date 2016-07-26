# Auroral - Animated background gradients

Auroral is a collection of animated background gradients, that can be used almost anywhere. They are built with pure CSS.

# Demo

Demo will be here shortly

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

#Backgrounds

Currently available backgrounds (class names to be used in your container):

  - auroral-northern (Northern Lights style),
  - auroral-agrabah (Inspired by the colors of the night sky in [Aladdin](http://www.imdb.com/title/tt0103639/) :D)

## License

The library is [licensed](https://github.com/LunarLogic/starability/blob/master/LICENSE) under [The MIT License (MIT)](http://choosealicense.com/licenses/mit/).

Go to [Lunar Logic website](http://www.lunarlogic.io/) to learn more [about us](http://www.lunarlogic.io/company) and [our work](http://www.lunarlogic.io/portfolio).