import * as _ from "lodash";


export class GenericModel {
  public static galleryLoadCount:number = 0;

  static LikeButton(obj, isLike){
    if(isLike){
      if (!obj.isReact || obj.isReact && !obj.isLike) {//engage like
         obj.btnBgTypeDisLike= "";
         obj.btnBgTypeLike= "btn-success";
         obj.isLike= isLike;
         obj.isReact= true;
      }
      else {//disengage like
       obj.btnBgTypeDisLike= "";
       obj.btnBgTypeLike= "";
       obj.isLike= isLike;
       obj.isReact= false;
    }
     }
     else{
      if (!obj.isReact || obj.isReact && obj.isLike) {//engage dislike
        obj.btnBgTypeLike= "";
        obj.btnBgTypeDisLike= "btn-danger";
        obj.isLike= isLike;
        obj.isReact= true;
      }
      else {//disengage dislike
       obj.btnBgTypeDisLike= "";
       obj.btnBgTypeLike= "";
       obj.isLike= isLike;
       obj.isReact= false;
    }
     }

     return obj;
  }

  static VoteButton(obj, isLike){
    if(isLike){
      if (!obj.isReact || obj.isReact && !obj.isLike) {//engage like
         obj.btnBgTypeDisLike= "btn-outline-danger";
         obj.btnBgTypeLike= "btn-success";
         obj.isLike= isLike;
         obj.isReact= true;
      }
      else {//disengage like
       obj.btnBgTypeDisLike= "btn-outline-danger";
       obj.btnBgTypeLike= "btn-outline-success";
       obj.isLike= isLike;
       obj.isReact= false;
    }
     }
     else{
      if (!obj.isReact || obj.isReact && obj.isLike) {//engage dislike
        obj.btnBgTypeLike= "btn-outline-success";
        obj.btnBgTypeDisLike= "btn-danger";
        obj.isLike= isLike;
        obj.isReact= true;
      }
      else {//disengage dislike
       obj.btnBgTypeDisLike= "btn-outline-danger";
       obj.btnBgTypeLike= "btn-outline-success";
       obj.isLike= isLike;
       obj.isReact= false;
    }
     }

     return obj;
  }


         ControlButtonBgType(isLike: boolean, btnBgType: string) {
           if (isLike) {
             if (btnBgType == "btn-success") {
               btnBgType = "";
             } else {
               btnBgType = "btn-success";
             }
           } else {
             if (btnBgType == "btn-danger") {
               btnBgType = "";
             } else {
               btnBgType = "btn-danger";
             }
           }

           return btnBgType;
         }


         ControlButtonReactType(isLike: boolean, btnReactType: boolean) {
          if (isLike) {
            if (btnReactType) {
              btnReactType = false;
            } else {
              btnReactType = true;
            }
          } else {
            if (!btnReactType) {
              btnReactType = false;
            } else {
              btnReactType = true;
            }
          }

          return btnReactType;
        }



         static cardImageBase: string;

  static FileChangeEvent(fileInput: any) {

  let imageError: string;
  let isImageSaved: boolean;

    imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return "false";
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            imageError = 'Only Images are allowed ( JPG | PNG )';
            return "false";
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                //console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                  imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return "false";
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase = imgBase64Path;
                    isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                    setTimeout(() => {

                    }, 9000);
                  return this.cardImageBase;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);


    }
}

       }
