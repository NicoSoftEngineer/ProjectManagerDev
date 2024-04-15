import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-validate-token-page',
  standalone: true,
  imports: [],
  templateUrl: './validate-token-page.component.html',
  styleUrl: './validate-token-page.component.css'
})
export class ValidateTokenPageComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let param1 = params['param1'];
      let param2 = params['param2'];
      // You can perform further operations with these parameters
    });
  }
}
