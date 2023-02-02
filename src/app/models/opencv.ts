//   import * as cv from 'opencv4nodejs';

// const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);

// async function detectFaces(inputImage: string): Promise<void> {
//   const img = await cv.imreadAsync(inputImage);
//   const grayImg = await img.bgrToGrayAsync();
//   const faces = await classifier.detectMultiScaleAsync(grayImg);

//   faces.objects.forEach((face, i) => {
//     img.drawRectangle(
//       new cv.Rect(face.x, face.y, face.width, face.height),
//       new cv.Vec(255, 0, 0),
//       2
//     );
//   });

//   cv.imshowWait('Faces', img);
// }

// detectFaces('path/to/image.jpg');
