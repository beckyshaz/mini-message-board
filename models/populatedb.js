#! user/bin/env node

const { Client } = require("pg");

//username_id INTEGER REFERENCES usernames(id);

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
message TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
username_id INTEGER,

CONSTRAINT username_fk
FOREIGN KEY (username_id)
REFERENCES usernames(id)
);

INSERT INTO messages (message, username_id)
VALUES
    ('Hello world of postgresql', 7),
    ('Hi there!', 8),
    ('Hi beautiful people', 9),
    ('Nice to do this', 10),
    ('Nic to meet you too', 11),
    ('Good knowldge', 12);
    

`;

console.log(process.argv[2]);

async function main() {
    console.log('seeding...');
    
    

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
    

    
    
    /*const client = new Client({
        connectionString
        });*/
    
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
    
}

main()