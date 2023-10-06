
$(document).ready(function(){
    displayStory();
})
$(function(){
    $("#submit_story").click(function(){
        var values = []
        for (var i = 0; i < $(".input_field").length; i++){
            values.push($(".input_field").eq(i).val())
        }
    })
})
function displayStory(){
    randomNumber = parseInt(Math.random()*stories.length)
    const story = stories[randomNumber];
    $("#story_title").html(story.title)
    $("#story_text").html(story.story)
    $("#input_fields").empty();
    for(var i = 0; i<story.inputs; i++){
        var input_html = `<input type = "text" class="input_field" id="input_${i}" placeholder = "entrada${i+1}" />`
        $("#input_fields").append(input_html)
    }
    $("#bank_words").empty();
    for(var i = 0; i < story.words.length; i++){
        var html = `<button class = "word_bank_button" > ${story.words[i]}</button>`
        $("#bank_words").append(html)
    }
}
$(function(){
    $(".input_field").keyup(function(){
        var id = $(this).attr("id");
        var input_number = id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val())
    })
    $("next_story").click(function(){
        displayStory();
    })
})
