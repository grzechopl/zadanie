import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-showrepos',
  templateUrl: './showrepos.component.html',
  styleUrls: ['./showrepos.component.scss']
})
export class ShowreposComponent implements OnInit {

	constructor(private router: Router,
				private route: ActivatedRoute,
				private githubService: GithubService) {

	}


	reponame: any;
 	username: string;

	dataSource: any;

	getFromRouter() {
		this.route.params.subscribe(params => {
	   		this.reponame = params['reponame'];
	   		this.username = params['username'];
		});
	}
	getRecords() {
		this.githubService.getBranches(this.username, this.reponame).subscribe(
			res => {
				this.dataSource = res;
	    	},
	    	err => {
	    		console.log(err.statusText)
	    });
	}	
	goBack() {
		this.router.navigate(['/dashboard/'+this.username]);
	}
	ngOnInit(): void {
		this.getFromRouter();
		this.getRecords();


	}

}
