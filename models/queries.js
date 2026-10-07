const pool = require("./pool");

async function getMessagesBYId(id) {
    console.log("ID:", id);

    const messages = await pool.query(`SELECT messages.id AS message_id, messages.created_at, 
        messages.message, usernames.username FROM messages INNER JOIN 
        usernames ON messages.username_id = usernames.id WHERE messages.id = $1`, [id]);

    console.log("ROWS:", messages.rows);

    return messages.rows[0];
    
}

async function getUserID(username) {
    const { rows } = await pool.query('SELECT id FROM usernames WHERE username = $1', [username]);
    const id = rows[0].id;
    return id;
}

async function postMessage(message, username_id) { 
    await pool.query("INSERT INTO messages (message, username_id) VALUES ($1, $2)", [message, username_id]);
    
}

async function getMessagesAndUsernames() {
    const { rows } = await pool.query('SELECT * FROM messages INNER JOIN usernames ON messages.username_id = usernames.id');
    return rows;
    
}

module.exports = {

    getUserID,
    postMessage,
    getMessagesAndUsernames,
    getMessagesBYId
};