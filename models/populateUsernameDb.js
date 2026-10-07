#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon'),
  ('saka sharon'),
  ('saka'),
  ('sharon');
`;

/*async function main() {
  console.log("seeding...");
  const connectionString = process.argv[2];
  const client = new Client({
    connectionString
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}*/
async function main() {
  console.log("seeding...");

  //const connectionString = process.argv[2];

  //console.log("URL provided:", !!connectionString);

  /*const client = new Client({
      connectionString
  });*/

  const client = new Client({
    host: "35.227.164.209",
    port: 5432,
    user: "sharon",
    password: "N24R3cq8Qd6xUf8798U3JG6It5Sz3Tun",
    database: "dbminidasboard",
    ssl: {
        rejectUnauthorized: false,
         servername: "dpg-db31tifavr4c739gktm0-a.oregon-postgres.render.com"
    }
});

  await client.connect();

  console.log("CONNECTED!");

  await client.query(SQL);
  await client.end();

  console.log("done");
}

main();

