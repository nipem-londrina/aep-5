const { connection } = require("../database/connection")

class Emoji {
    constructor() {
        const emojiList = ["😭", "😄", "😌", "🤓", "😎", "😤", "🤖", "😶‍🌫️", "🌏", "📸", "💿", "👋", "🌊", "✨"]
        this.char = emojiList[Math.floor(Math.random() * emojiList.length)]
    }

    async now() {
        const [result] = await connection.query("SELECT NOW() as datetime")
        return result[0].datetime
    }
}

module.exports = { Emoji }
