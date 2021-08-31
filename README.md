# What is Linear A?

This site is temporarily available at [https://la.camdenmecklem.com/](https://la.camdenmecklem.com/). Someday I might add more info and put it up at a proper domain.

Linear A is one of the most mysterious writing scripts in world history. Used by the Minoans on ancient Crete, Linear A seems to have been used in a wide range of fields, from trading to religious rites. Even as later Minoan scripts, such as Linear B, have been deciphered, Linear A remains undeciphered. Over the years, scholars have theorized many different languages that it might represent, ranging from an early form of Greek to an Indo-Iranian language, or even a language isolate.

I created this website because I noticed that resources on Linear A tend to fit into one of two categories: 1) Good information but unattractive presentation, and 2) Slick presentation but questionable information. Inevitably, websites that look more appealing attract more visitors, especially those who are new to the topic. I wanted this website to serve as a pleasantly-designed, interactive introduction to Linear A that also serves as a stepping stone to other sources.

The sources include authoritative, scholarly sources such as [John Younger's website](https://people.ku.edu/~jyounger/LinearA/), as well as reliable popular sources. In order to represent the full range of work on the topic, I also link to some decipherment theories that are not as well accepted in the scholarly community, with their caveats clearly noted.

## About the code

This project is my first project built in TypeScript, and it has gone very well. I use enums and interfaces on the Characters and Resource pages to simplify management and handling of the data. The use of type annotations for functions has also helped me catch several bugs early, likely preventing hours' worth of debugging.

I also used Bulma, which I find to be the nicest-looking and most modern-feeling CSS framework. Variables such as color definitions are kept in ``/src/bulmaconfig.css`` and some extra styles are in ``/src/app.css``.

Although there is a lot of static text on this site, I chose not to use a site generator like Hugo or Jekyll. I don't expect the site to grow large enough to justify the added complexity. The current setup allows easy integration of React components such as activities, minigames, and other dynamic content, which seems at a glance to be a lot more complicated to use with a static site generator. If the site expands to a point where plain React becomes a major disadvantage, I will look into Next.js.

The list of characters is available at ``/src/utils/characters.tsx`` and the list of resources is available at ``/src/utils/resources.tsx``. New resources added to the resources file will automatically appear in the list on the site. New characters require a corresponding SVG to be placed in ``/public/characters``.

To make hosting work with GitHub Pages, I had to replace the default build script with ``rm -r docs && react-scripts build && mv build docs``, which renames the ``build`` folder to ``docs`` once the build is finished. GitHub Pages unfortunately only supports either the root folder or ``/docs``, but if they support ``/build`` in the future I will revert to the default build script.

### How to run

You can start the dev build with ``npm start`` and compile a production build with ``npm run build``.

## License

All original text on this site is licensed as [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). I also make use of third-party images, which are licensed under the indicated licenses.

Source code is [available on GitHub](https://github.com/mythmakerseven/linear-a) and is licensed under the [MIT License](https://mit-license.org/).

This website uses [Bootstrap Icons](https://icons.getbootstrap.com/) under the [MIT License](https://github.com/twbs/icons/blob/main/LICENSE.md).

All the Linear A character SVG images in ``/public/characters`` are in the public domain. They came from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Linear_A_signs), but I have made minor tweaks to some of them and I want to make sure my edited versions remain in the public domain.

Use of third-party materials does not imply the creator's endorsement of this website. If you have objections to your work appearing on this website, email me at [my first initial] at [my full name] dot com and I address your concerns or remove your work to your preference.
