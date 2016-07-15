/**
 * Created by Mesasix on 15/07/2016.
 */
$(function () {
    $.get('/blocks', appendToList);

    function appendToList(blocks) {
        var list = [];
        for (var block in blocks){
            list.push($('<li>', { text : blocks[block] }));
        }
        $('.block-list').append(list);
    }
});