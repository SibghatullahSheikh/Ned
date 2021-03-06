var plugin = {
              name        : 'greet',
              trigger     : ['hi', 'hello', 'hey', 'whatsup', 'yo', 'whattup', 'wattup', 'how are you', 'hows it going', 'wassup', 'whatsup', 'how you doin', 'how are you doing'],
              enabled     : 'true',
              fuzzy       : 'true',
              description : '',
              usage       : ''
             };

module.exports.plugin = plugin;

module.exports[plugin.name] = function(get)
{

    var generic = "Hello " + get.firstName;
    var greetings = ['excellent', 'superb', 'wonderful'];


    if(Util.it_has(get.fullMessage, 'it goin') || Util.it_has(get.fullMessage, 'e you'))
    {
        sendMessage(generic + ", I'm " + Util.chooseRandom(greetings) + ", fine thank you");
        return;
    }
    if(Util.it_has(get.fullMessage, 'you doin'))
    {
        sendMessage(generic + ", I'm " + Util.chooseRandom(greetings) + ", fine thank you");
        return;
    }
    else if(Util.it_has(get.fullMessage, 'dawg') || Util.it_has(get.fullMessage, 'dog'))
    {
        sendMessage("Yo Dawg");
        return;
    }
    else
    {
        sendMessage(generic);
    }

    return true;
}
