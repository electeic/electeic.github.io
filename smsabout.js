/*

Name    : Responsive HTML5 Chat

Responsive HTML5 Chat helps you to create useful chatbox on your website easly. 
You can change skin and sizes. You can read the installation and support documentation 
before you begin. If you do not find the answer, do not hesitate to send a message to me.

Owner   : Vatanay Ozbeyli
Web     : www.vatanay.com
Support : hi@vatanay.com

*/

function responsiveChat(element) {
    $(element).html('<form class="chat"><span></span><div class="messages"></div><input type="text" placeholder="Your message"><input type="submit" value="Send"></form>');

    function showLatestMessage() {
        $(element).find('.messages').scrollTop($(element).find('.messages').height());
    }
    showLatestMessage();


    $(element + ' input[type="text"]').keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $(element + ' input[type="submit"]').click();
        }
    });
    $(element + ' input[type="submit"]').click(function (event) {
        event.preventDefault();
        var message = $(element + ' input[type="text"]').val();
        if ($(element + ' input[type="text"]').val()) {
            var d = new Date();
            var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var month = d.getMonth() + 1;
            var day = d.getDate();
            var currentDate =
                (("" + day).length < 2 ? "0" : "") +
                day +
                "." +
                (("" + month).length < 2 ? "0" : "") +
                month +
                "." +
                d.getFullYear() +
                "&nbsp;&nbsp;" +
                clock;
            $(element + ' div.messages').append(
                '<div class="message"><div class="myMessage"><p>' +
                message +
                "</p><date>" +
                currentDate +
                "</date></div></div>"
            );
            setTimeout(function () {
                $(element + ' > span').addClass("spinner");
            }, 100);
            setTimeout(function () {
                $(element + ' > span').removeClass("spinner");
            }, 2000);
        }
        $(element + ' input[type="text"]').val("");
        showLatestMessage();
    });
}

function responsiveChatPush(element, sender, origin, date, message) {
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
}

/* Activating chatbox on element */
responsiveChat('.responsive-html5-chat');

/* Let's push some dummy data */
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', 'Hi, welcome to my webpage!');
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', '<img src="me_compressed.jpg" style="height: 100%; width: 100%;"/>');
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', 'My name is Ivan and I am an aspiring software engineer');
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', 'I graduated from USC with a B.S. in Computer Science in 2018 and looking for a full time position');
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', 'I am a highly competitive and motivated person who strives to influence the world');
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', 'My interests include finance, software, basketball, and continued learning');
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', 'I interned at Siemens PLM Software and Western Digital');
responsiveChatPush('.chat', 'Ivan Chen', 'you', 'today lmao', 'Reach out via my contacts. I would love to connect!');

/* DEMO */
if (parent == top) {
  $("a.article").show();
}
