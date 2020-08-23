$('#submit').click(function()
{
    $.ajax({
        url: '/',
        type:'POST',
        data:
        {
            userName: userName,
        },
        success: function(msg)
        {
            alert('UserName Sent');
        }               
    });
}