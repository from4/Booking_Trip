# Booking Tip

## Setup

---

- Installation

just run the following command:

`npm i`

- Server Setup

open terminal and run the follwing command

`npm start bt`

## Routes

- API

#### Global

> localhost:5000/api/

#### Specific routes
- login and registration

> .../users/login-user : Login user

> .../users/login-admin : Login admin

> .../users/login-super-admin : Login super admin

> .../users/login-user : Login user

> .../users/edit-profile : edit profile for all users including admin

> .../users/register-user : register user

> .../users/register-admin : register admin

> .../users/register-superadmin : register superadmin

- filters

> .../houses/houses : fetch all Houses

> .../houses/equipments : fetch all equipments

> .../houses/beds : fetch all beds

> .../houses/name : fetch houses by name

> .../houses/address : fetch houses by address

> .../houses/date : fetch houses by date

> .../houses/houses : fetch houses by nb_room

- house

> .../houses/add-house : add house

> .../houses/delete-house/:id : delete house by id

> .../houses/update-house/:id : update house by id

- rooms

> .../houses/add-rooms : add new room

> .../houses//delete-rooms/:id_house/:id_room : delete room by house id and  room id

> .../houses/update-rooms/:id : update room by id

- equipments


> .../houses/add-equipment : add equipment

> .../houses/delete-equipment/:id : delete equipment by id

> .../houses/update-equipment/:id : update equipment by id


- beds

> .../houses/add-beds : add bed

> .../houses/delete-beds/:id_house/:id_bed : delete bed by house id and bed id

> .../houses/update-beds/:id : update bed by id

#### Description

  > you'll find all the routes inside the routes directory you can edit or change them to your liking but make sure to not remove the /:id at the end.
