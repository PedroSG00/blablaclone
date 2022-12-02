# blablaclone


# APP Resume
- User puede crear y solicitar viajes.
- Pasajero puede solicitar modificación de viaje y el conductor aceptarla.
- Si el usuario es mujer que pueda filtrar solo por conductoras.
- Posibilidad de crear viajes recurrentes con mismo origen, destino.
- Compartir viajes por la propia app o apps externas.
- User puede comentar en perfil de otro user.
 


# API ENDPOINTS

| HTTP METHOD | URI PATH | DESCRIPTION | JSON |
| --- | --- | --- | --- |
| GET | / | Index page |  |
| --- | --- | --- | --- |
| POST | /auth/sign-up | Auth Sign-up | ✔️ |
| POST | /auth/log-in | Auth Log-In | ✔️ |
| PUT | /auth/:user_id/edit | Edit User | ✔️ |
| GET | /auth/:user_id/delete | Delete User |  |
| --- | --- | --- | --- |
| GET | /trip/list | Trip list | ✔️ |
| GET | /trip/:id | Trip Details | ✔️ |
| POST | /trip/create | Create trip | ✔️ |
| PUT | /trip/:id/edit | Edit trip| ✔️ |
| DELETE | /trip/:id/delete | Delete trip | |
| --- | --- | --- | --- |
| GET | /comment/list | comment list | ✔️ |
| POST | /comment/create | Create comment | ✔️ |
| DELETE | /comment/:id/delete | Delete comment |  |