
module.exports.load = function(bot) 
{
    var triggers = /.*([Ee][Dd] are you skynet).*/;


    var callerRegEx   = new RegExp(assembleInput.source, "i");
    var pmCallerRegEx = new RegExp(assembleInput.source, "i");

    bot.onMessage(callerRegEx, onMessage);
    bot.onPrivateMessage(pmCallerRegEx, onMessage);
};


var onMessage = function(channel, frm, msg, x) 
{

    var self             = this;
    var isPrivateMessage = (arguments.length == 3) ? true : false;
    var from             = isPrivateMessage ? '' : frm;
    var tempMessage      = isPrivateMessage ? frm : msg;
    var roomName         = channel.split('@')[0];
    var isSingleWord     = (tempMessage.indexOf(" ") == -1) ? true : false;
    var message          = tempMessage

    var resp  = []
    
    var rand  = Math.floor(Math.random()*11);
    var words = message.split(' ').length

    if(rand == 7 || rand == 3)
    {
        self.message(channel, resp[Math.floor(Math.random()*resp.length)]);
    }


    return true;
};

