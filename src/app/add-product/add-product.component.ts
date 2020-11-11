import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../Models/brand';
import { Category } from '../Models/category';
import { Gender } from '../Models/gender';
import { CategoryService } from '../Services/category.service';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form;
  image;
  brands:Brand[];
  categories:Category[];
  genders:Gender[];
  constructor(private sideNavService: SidenavService, private formBuilder: FormBuilder, private categoryService: CategoryService) {
    this.categoryService.getBrands().subscribe(data=>{
      this.brands=data;
    });
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
    this.categoryService.getGenders().subscribe(data=>{
      this.genders=data;
    })

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imagepath: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      gender: ['', Validators.required]
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
