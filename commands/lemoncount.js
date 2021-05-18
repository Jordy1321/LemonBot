module.exports = {
    name: 'lemoncount',
    description: "this is a ping command!",
    execute(message, args){
        message.reply("Calculating the yellow goodness").then(m => { 
            setTimeout(() => {
            m.edit(+ Math.floor(Math.random() * 691) + "Lemons")
            }, 2000)
        }
        )}
}