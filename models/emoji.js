const { connection } = require("../database/connection")

class Emoji {
    constructor() {
        const emojiList = ["😭", "😄", "😌", "🤓", "😎", "😤", "🤖", "😶‍🌫️", "🌏", "📸", "💿", "👋", "🌊", "✨"]
        this.char = emojiList[Math.floor(Math.random() * emojiList.length)]
    }

    now(callback) {
        connection.query(
            "SELECT NOW() as datetime",
            (err, rows) => {
                if (err) {
                    callback("I don't know, sorry!")
                    return
                }
                callback(rows[0].datetime)
                return
            }
        )
    }
}

module.exports = { Emoji }
