function startClassoficator(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/a6__cf64o/model.json",modelReadysab);
}

function modelReadysab(){
    classifier.classify(gotResult);
}

function gotResult(error , results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results);
        randor = Math.floor(Math.random() * 255) + 1;
        randog = Math.floor(Math.random() * 255) + 1;
        randob = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_labele").innerHTML = 'I can hear - '+ results[0].label;
        
        document.getElementById("result_labele").style.color = "rgb("+randor + "," + randog + "," + randob + ")";
        
        img00 =  document.getElementById('listen');
       
        

        if (results[0].label == "Background Noise"){
            img00.src = 'aliens-01.gif';
                    }
        else if (results[0].label == "cat"){
            
            img00.src = 'aliens-02.gif';
            
            
        }
        else if (results[0].label == "dog"){

            img00.src = 'aliens-03.gif';
            
        }
        
    }

}