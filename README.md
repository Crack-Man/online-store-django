# online-store-django

## Install

### Backend
```shell
cd backend
python -m virtualenv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
```
To run the server:
```shell
python manage.py runserver
```

### Frontend

```shell
cd frontend
npm install
```

To run the server:
```shell
npm run serve
```