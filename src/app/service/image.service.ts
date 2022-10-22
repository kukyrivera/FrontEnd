import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event:any, name: string){
    const file = $event.target.files[0];
    const upimgRef = ref(this.storage, `img/` + name);
    uploadBytes(upimgRef, file).then(response => {this.getImage()}).catch(error => console.log(error));
  }

  getImage(){
    const getimgRef = ref(this.storage, 'img');
    list(getimgRef).then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    }).catch(error => console.log(error));
  }
}
