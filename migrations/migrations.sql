-- These migrations are to be performed manually using
 -- the psql console

DROP DATABASE IF EXISTS ;
CREATE DATABASE gallery;

\c gallery

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE animations (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  body VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users (id)
);
