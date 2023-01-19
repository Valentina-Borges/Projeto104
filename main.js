//https://teachablemachine.withgoogle.com/models/D5TR9me8i/

Webcam.attach( '#camera');

  Webcam.set({
   width:350,
   heigth:300,
   image_format : 'png',
   png_quality:90

  });

  function take_snapshot()
  {
    Webcam.snap(function(data_uri) {
        document.grtElementByld("result").innerHTML = '<img id="selfie_image"'+data_uri+'"/>';
    });
  }

   console.log('ml5 version:', m15.version)

    //initialize the image Classifier mthod with MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D5TR9me8i/model.json',modelLoaded);