var cat = 0
var dog = 0 


function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_FhSaDhkT/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("HELLO")
    classifier.classify(gotresult)
}



function gotresult(error,results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        randomnumber1 = Math.floor(Math.random()*255)+1
        randomnumber2 = Math.floor(Math.random()*255)+1
        randomnumber3 = Math.floor(Math.random()*255)+1 

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat
        document.getElementById("detected").style.color = "rgb("+randomnumber1+","+randomnumber2+","+randomnumber3+")"

        document.getElementById("animalvoice").innerHTML = "Detected voide is of - "+results[0].label
        document.getElementById("animalvoice").style.color = "rgb("+randomnumber1+","+randomnumber2+","+randomnumber3+")"

        img = document.getElementById("animal_images")
        if(results[0].label == "Barking"){
            img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fdog-bark-ruillu-m9pQ6KapT7Cq3DQ5DZ&psig=AOvVaw1mXwsRKaqyyfUbaGud0IR8&ust=1698677304153000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjEgZ7Am4IDFQAAAAAdAAAAABAE"
            dog =dog+1
        }
        else{
            img.src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fgifs%2FCreateDrop-meow-purr-meeow-NXMwzuFxRqQJWxw4Lm&psig=AOvVaw1cjfqjJO5i_5Q13_VCa7ia&ust=1698677454645000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjorObAm4IDFQAAAAAdAAAAABAE"
            cat = cat+1

        }
    
    }
}