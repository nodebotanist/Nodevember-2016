#[fit] Docker for Devs

---

![left](./profile-large.jpg)

## About me

* Mx. Kas Perch
* @nodebotanist
* I do Node.JS on hardware!
* Dev Relations Engineer for WebtaskIO/Auth0
* Genderqueer

---

##[fit] Why should I care about Docker?<br/>I'm **not a devops engineer!**

![inline](./GIFS/nolife.gif)

---

##[fit] Maybe not. But you know what you are?<br/>**A problem solver.**

---

## Maybe you've encountered the following problems

* "Works on my machine!"
* > 2 versions of Node installed on your machine
	* (you know every nvm command by heart)
* You need a local copy of a database
	* Ever install PostgreSQL?
	* What happens when you add another app?

---

## Why Docker works for this

* Containers are automated/replicatable
* Containers are "quarrantined" from your machine
* Containers are easily shared

---

## Hold on. What's the diffirence between a container and a VM?

![inline](./img/Docker.png)

---

## Hold on. What's the diffirence between a container and a VM?

* lighter
* (usually) faster
* composable

---

##[fit] Okay, but I need to know a lot of DevOps to use these, right?

---

## Don't worry, you can do it!

![inline](./GIFS/pokecheer.gif)

---

##[fit] Let's start with<br/>**spinning up a redis db**

---

##  Vocabulary

A **Docker container** is an instance of a Docker image-- like a db, or a web server.

A **Docker Image** is a template that con be used to spin up **containers** or modified to create new images

---

## What we're gonna do

* pull down the redis image
* run it to create a container
* access that container with node

---

## Hopefully now I have piqued your interest

![inline](./GIFS/watsdis.gif)

---

##[fit] So, let's spin up a<br/>Node.JS web server with Express

---

## What we'll do

* Examine a Dockerfile
* Look at copying files from our computer to our container and running commands on an existing image
* Create our own image
* Run it!

---

## That's cool Kas. But...

What if I want to change my server WITHOUT rebuilding my image every single time

---

##[fit] Let's add a<br/>**host volume mount**</br>to our container

---

## A wha?

A **host volume mount** gives your container access to a subset of your host (computer's) filesystem

---

##[fit] Let's do it!

---

## Whoa.

Yeah! You now have a working web server that we can edit in real-time!

![inline](./GIFS/wat.gif)

---

##[fit] now let's do some<br/>real<br/>docker<br/>magic

---

## What we're going to

* Spin up a Redis db
* Connect it to our Express server
* Access and set stuff from our Express app
* **maintain live code editing**

---

## But first, a joke break

![inline](./GIFS/That Joke Will Definitely Ruffle Some Feathers.jpg)

---

## Okay, now that you've laughed (or groaned) off that feeling of

![inline](./GIFS/no-idea-what-im-doing.gif)

---

## Let's talk about docker-compose

* self-explanatory name, kinda
* Lets you compose multiple docker containers into one networked bundle

---

## What we'll do

* Create a docker-compose file using the redis image and the image we created
* spin up our db and Node containers with it
* designate a host file mount
* spin it up!

---

# Hopefully now you feel like this about Docker

![inline](./GIFS/try-it-cool.gif)

---

##[fit] To learn more, check out the Docker docs!

###[fit] \(They're **SUPER** great.\)

---

## Thanks for listening!

![inline](./GIFS/carl-sagan-youre-awesome.gif)

* @nodebotanist
* kas@auth0.com
* github.com/nodebotanist/Nodevember-2016