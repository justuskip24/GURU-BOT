export async function autoReply(m) {
    // Always respond to any incoming message
    this.sendMessage(m.chat, {
        text: `Hello @${m.sender.split('@')[0]}, this is an auto-reply message.`
    }, { quoted: m });

    // Optionally, you can react to the message with an emoji
    m.react('💬');

    // Indicate successful processing
    return true;
}
