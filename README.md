# Lead Manager
Fullstack project utilizing Django REST Framework, React functional components, Hooks, and Context API

## Setup
* After cloning repo, cd into it, and make sure you are running a current version of python3 and pip3
* Run: `pip3 install pipenv`
* Run: `pipenv shell`
* This will create a new virtual environment inside `~/.virtualenvs`

![example](https://i.imgur.com/eYaoe7L.png "venv startup example")
* If your virtual environment doesn't start automatically, run the following command for Windows: `source ~/.virtualenvs/<name-of-venv>/Scripts/activate`. Run the following command for Mac: `source ~/.virtualenvs/<name-of-venv>/bin/activate`

![example](https://i.imgur.com/g9slTNW.png "venv startup example")

* In the top-level directory of this project
* Run `pipenv install django djangorestframework django-rest-knox`
* Run `npm install`
* Open VSCode with `code .`
* Select the correct python interpreter: `ctrl + shift + p`. Key in 'python: select interpreter'
* Select the virtual environment you just created. In this example, it will be 'lead-manager-jPHjnGAV':virtualenv

![example](https://i.imgur.com/9926EAA.png "select interpreter")

* Back in the terminal, from the top-level directory, cd into `leadmanager/` which contains the file  `manage.py`, as well as the application directories for this project
* Run: `python manage.py makemigrations leads`, then `python manage.py migrate`

### Your project and database are now setup. You are ready to start the development server.

* In the same directory, run `python manage.py runserver`
* In another terminal window, navigate to the top-level project folder and run `npm run dev`
* Finally, in the Browser, visit `http://localhost:8000`

>Note: If nothing is initially displayed on the page,  and/or you're receiving '404 NOT FOUND' in the console, give it a minute, then refresh. You can also try restarting the server.

### Once you're finished inside your virtual environment, deactivate from the top-level directory with the command, `exit`

![example](https://i.imgur.com/7MXJqTc.png "exit virtual env")

Resources:

* Traversity Media's [tutorial series on youtube](https://www.youtube.com/watch?v=Uyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60&index=1)

* https://www.valentinog.com/blog/drf/#Django_REST_with_React_Django_and_React_together

* http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/