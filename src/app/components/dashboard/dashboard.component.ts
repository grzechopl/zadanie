import { Component,OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router,ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	constructor(private githubService:GithubService,
				private formBuilder: FormBuilder,
				private _snackBar: MatSnackBar,
				private router: Router,
				private route: ActivatedRoute,
) {
		this.Form = this.formBuilder.group({
		    username: ['', Validators.required],
		});
	}


	Form: FormGroup;
	username: string;
	disableBtn: false;
	dataSource: any;
	showTable: boolean = false;
	displayedColumns: string[] = ['name', 'userName'];

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}



	sendRequest(username) {
		this.githubService.getRepos(username).subscribe(
			res => {
				this.showTable = true;
        		this.dataSource = new MatTableDataSource(res);
        		this.router.navigate(['/dashboard/'+this.username]);
        	},
        	err => {
        		this.openSnackBar(this.username+' '+err.statusText, 'OK')
        	});
	}

	goDetails(id) {
		this.router.navigate(['/show-repo/'+this.username+'/', id]);
	}
	isValid = new FormControl('', [Validators.required]);

	getErrorMessage() {
		return 'Pole wymagane';
	}

	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
		  duration: 5000
		});
	}
	checkIfNameExists() {
		this.route.params.subscribe(params => {
	   		this.username = params['username'];
			if(this.username === undefined) {
 			} else this.sendRequest(this.username);
		});
	}
	ngOnInit(): void {
		this.checkIfNameExists();
	}

}
