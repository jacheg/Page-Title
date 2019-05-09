var happy = ["https://www.92y.org/92streety/media/img/jewish/other/lg/happy-emoji.jpg", "https://knowledge.wharton.upenn.edu/wp-content/uploads/2016/01/compassion.jpg", "https://i.guim.co.uk/img/media/2589fa711843a42405ae233b71f85ead362f6659/0_103_2160_1296/master/2160.jpg?width=300&quality=85&auto=format&fit=max&s=a52d11a9ace574f1927043f8f66a6032"];

var sad = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxx6sy9d5lHc5m6BZQhFw3sMtlEKE8sAupq7NWjIauy0aufsN-", "https://usercontent2.hubstatic.com/12334281.jpg", "https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_large.png?v=1480481019"];

var angry = ["https://previews.123rf.com/images/stephaniezieber/stephaniezieber1606/stephaniezieber160600012/58761954-abstract-red-mad-angry-anger-face-emoji-emoticon-background.jpg", "https://ak0.picdn.net/shutterstock/videos/1017765850/thumb/1.jpg", "https://images3.alphacoders.com/601/thumb-350-601034.jpg"];

var hungry = ["https://assets.parents.com/s3fs-public/styles/nfp_1080_portrait/public/hungry-child.jpg?s6wZccXb7b6.w4eFYtyCXQvuguCPhmsN", "https://cdn2.stylecraze.com/wp-content/uploads/2018/04/How-To-Control-Hunger-%E2%80%93-20-Best-Strategies-To-Stop-Feeling-Hungry-All-The-Time.jpg", "https://i.ytimg.com/vi/iFQKA0MpHb4/maxresdefault.jpg"];


$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "Happy"){
        happyMood();
    } else if(input==="Sad"){
        sadMood();
    }else if(input==="Angry"){
        angryMood();
    }else if(input==="Hungry"){
        hungryMood();
    } else{
     alert("Please enter comedy, romance, or horror!");   
    }
});

function happyMood(){
    changeBackground("https://media.giphy.com/media/bSqqbVjGFtQ2c/giphy.gif");
    changeTextColor("yellow");
    displayImage(happy);
}

function sadMood(){
    changeBackground("https://i.ytimg.com/vi/22yQbNVqFOQ/maxresdefault.jpg");
    changeTextColor("blue");
    displayImage(sad);
}

function angryMood(){
    changeBackground("https://thumbs.dreamstime.com/t/burning-fire-flame-background-vector-eps-124271214.jpg");
    changeTextColor("red");
    displayImage(angry);
}

function hungryMood(){
    changeBackground("https://pinellascf.org/wp-content/uploads/hungry-boy.jpg");
    changeTextColor("purple");
    displayImage(hungry);
}

function displayImage(images){
     images.forEach(function(image){
        $(".images").append('<img src ='+ image + '>');
    });
}

function changeTextColor(color){
    $('body').css('color', color);
}

function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}