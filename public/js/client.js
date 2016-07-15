/**
 * Created by Mesasix on 15/07/2016.
 */
$(function () {

    $.get('/blocks', appendToList);

    //listen to submit event
    $('form').on('submit', function (event) {
        //prevent from immediately submitting the form
        event.preventDefault();
        var form = $(this);
        var blockData = form.serialize();

        $.ajax({
            type: 'POST',
            url: '/blocks',
            data: blockData
        }).done(function (blockName) {
            appendToList([blockName]);
            form.trigger('reset');

        });
    });

    function appendToList(blocks) {
        var list = [];
        for (var i in blocks){
            block = blocks[i];
            content = '<a href="/blocks/'+block+'">'+block+'</a>';
            list.push($('<li>', { html : content }));
        }
        $('.block-list').append(list);
    }


});