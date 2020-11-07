import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form;
  image;
  brands;
  categories;
  genders;
  constructor(private sideNavService:SidenavService,private formBuilder:FormBuilder) {
    this.sideNavService.setVisible(false);
    this.sideNavService.setCartVisible(false);
    this.form=this.formBuilder.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      imagepath:['',Validators.required],
      brand:['',Validators.required],
      category:['',Validators.required],
      gender:['',Validators.required]
    });
   }

  ngOnInit() {
  }
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    if (file.size > 5242880) {
    
      this.form.controls['imagepath'].setValue('');
    } else {
      
      myReader.onloadend = (e) => {
        this.image = myReader.result;
        const array = this.image.split(',');
        this.form.controls['imagepath'].setValue(array[1]);
      };
      myReader.readAsDataURL(file);
    }


  }
}
