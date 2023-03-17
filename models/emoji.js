
class Emoji {
    constructor() {
        const emojiList = ["😭", "😄", "😌", "🤓", "😎", "😤", "🤖", "😶‍🌫️", "🌏", "📸", "💿", "👋", "🌊", "✨"]
        this.char = emojiList[Math.floor(Math.random() * emojiList.length)]
    }
}

module.exports = { Emoji }
