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

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
    
}

main()