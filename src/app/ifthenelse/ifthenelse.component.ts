import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifthenelse',
  templateUrl: './ifthenelse.component.html',
  styleUrls: ['./ifthenelse.component.css']
})
export class IfthenelseComponent implements OnInit {
isValid: boolean;
public dropDownValue = '';
  constructor() { }
  ngOnInit() {
  }

  ChangeData(valid: boolean) {
    this.isValid = valid;
  }
      SetDropDownValue(drpValue: any) {
        this.dropDownValue = drpValue.target.value;
    }
}
