# Furry Octo Winner

The project was born to the need of a lesson from our school [ISEN Brest](http://isen-brest.fr).

# Installation

First, clone the project:

```bash
git clone https://github.com/FlorentinDUBOIS/furry-octo-winner.git
```

After that, install your database, all sql files that you may need are stored in the folder `sql`. Don't forget to rename the file `application.sample.properties` in `application.properties` and fill the settings of your database.



Go into the folder `server` and run the server:

```bash
./gradlew run
```

Enjoy! Your application is available [here](http://127.0.0.1:8080).