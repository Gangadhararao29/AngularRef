import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  offShoreData = ['Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Kochi'];
  onShoreData = ['US', 'Non US'];
  skillsData = [
    'HTML5,CSS3,JS',
    'Angular 8',
    'Express JS',
    'SASS',
    'React JS',
    'Node JS',
    'ES5,ES6,ES7',
    'Veu JS',
    'Mongo DB',
    'Bootstrap 4',
    'TypeScript',
  ];
  selectedSkills=[];
  skillsValidation=false;

  // selectMenuData=[];

  form: FormGroup;
  createFormModel() {
    this.form = this.fb.group({
      userName: ['', [Validators.required,Validators.pattern("^[a-zA-Z ]{5,30}$")]],
      userId:  ['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      projectId: ['', [Validators.required,Validators.pattern("^[0-9a-zA-z]{12}$")]],
      location: ['', [Validators.required]],
      locationDetail: ['', [Validators.required]],
      inputFile: ['', [Validators.required]],
      comments: ['', [Validators.required]],
      skills: this.createFormArray(),
    });
  }

  ngOnInit(): void {
    this.createFormModel();
    // console.log(this.form);
    
   // console.log("Controls",this.skillsArray.controls)
  }

  createFormArray() {
    const arr = this.skillsData.map((data) => {
      return this.fb.control(false);
    });
    // console.log("FormArray",new FormArray(arr))
    return this.fb.array(arr);
  }

  //form.controls.skills.controls
  get skillsArray() {
    return <FormArray>this.form.get('skills');
  }

  getSelectedSkillsValue() {
    this.selectedSkills=[];
    this.skillsArray.controls.forEach((control,i)=>{
      if (control.value){
        this.selectedSkills.push(this.skillsData[i]);
      }
    })

    if(this.selectedSkills.length>=5){
      this.skillsValidation=true;
    }
    else {
      this.skillsValidation=false;
    }
  }

  resetForm() {
    this.form.reset();
  }
  onClickSubmit(formData) {
    console.log('FORM_DATA :', formData);
  }
}

