/**
 * Created by Mesasix on 15/07/2016.
 */
$(function () {

    $('form').on('submit', function (event) {
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

    $.get('/blocks', appendToList);

    function appendToList(blocks) {
        var list = [];
        for (var i in blocks){
            block = blocks[i];
            content = '<a href="/blocks/'+block+'">'+block+'</a>';
            list.push($('<li>', { text : blocks[i] }));
        }
        $('.block-list').append(list);
    }


});