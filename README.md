# blablaclone

# APP Resume
- User puede crear y solicitar viajes.
- Pasajero puede solicitar modificación de viaje y el conductor aceptarla.
- Si el usuario es mujer que pueda filtrar solo por conductoras.
- Posibilidad de crear viajes recurrentes con mismo origen, destino.
- Compartir viajes por la propia app o apps externas.
- Trazado de la ruta origen/paradas/destino
- User puede comentar en perfil de otro user.
- Darle la opción al conductor durante el formulario de creación de viaje que los pasajeros se unan automáticamente o de que el lo verifique.


# API SERVER ENDPOINTS

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
| GET | /chat/list | chat list | ✔️ |
| POST | /chat/create | Create chat | ✔️ |
| DELETE | /chat/:id/delete | Delete chat |  |


# CLIENT ENDPOINTS

| PATH | DESCRIPTION | PROTECTED |
| / | Index page |  |
| /auth/sign-up | Sign-Up page |  |
| /auth/log-in| Log-in page |  |
| --- | --- | --- |
| /search | Search-Form page |  |
| /create-trip | Create Trip Form page | USER/ADMIN |
| /create-trip/create-car | Creat Car Form page | USER/ADMIN |
| /trip/:trip_id| Details trip page | USER/ADMIN |
| /trip/:trip_id/chat| Details trip page | USER/ADMIN |
| --- | --- | --- |
| /places | Places page |  |
| /places/place_id | Place Details page |  |
| --- | --- | --- |
| /mytrips | User trips list page | USER/ADMIN |
| /mytrips/trip_id | User trip details page | USER/ADMIN |
| /mytrips/trip_id/edit | User trip edit form | USER/ADMIN |
| --- | --- | --- |
| /user | Profile page| USER/ADMIN |
| /user/edit | Edit profile form | USER/ADMIN |
| --- | --- | --- | 
| /stats | BlaBla Stats | ADMIN |
| /user-list | User list page | ADMIN | 
| /user-list/:user_id | User details page | ADMIN | 
| /user-list/:user_id/edit | User edit form page | ADMIN | 

# CLIENT PAGES

| PAGE | DESCRIPTION |
| --- | --- |
| HOME | Home page |
| SEARCH | Search page |
| TRIP | Trip page |
| PLACES | Places page |
| PROFILE | Profile page |
| CHATS | Chat page |
| ADMIN HOME | Admin Home page |
| ADMIN HOME | Admin user-list page |

# CLIENT COMPONENTS

| COMPONENTS |
| --- | 
| NavBar |
| --- | 
| Sign-Up Form | 
| Log-In Form |
| Edit Profile Form |
| --- |
| User List |
| User Card |
| --- |
| Create Trip Form | 
| Trip List |
| Trip |
| Trip-Card |
| --- |
| Create Vehicle Form |
| --- |
| Comments list |
| Comment |
| --- |
| Toast |

# CONTEXT
| CONTEXT |
| --- |
| Toast |
| Session user |




# BONUS
(¡¡¡¡BONUS!!!!!Que si no encuentra nada, te saque opciónes de rutas)
(BONUS 2 qUE TE SALGAN SUGERENCIAS DE VIAJES (GRACIAS VERO))