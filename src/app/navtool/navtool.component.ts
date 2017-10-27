import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-navtool',
  templateUrl: './navtool.component.html',
  styleUrls: ['./navtool.component.css']
})
export class NavtoolComponent {
  constructor(@Inject('$window') private $window) { }

  public back() {
      console.log(['$window = ', this.$window]);
      this.$window.history.back();
  }
}
