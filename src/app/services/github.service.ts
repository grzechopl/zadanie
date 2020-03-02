import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

	constructor(private http:HttpClient) { }


	getRepos(username): Observable<any> {
	    return this.http.get('https://api.github.com/users/'+username+'/repos');
	}
	getBranches(username, id): Observable<any> {
	    return this.http.get('https://api.github.com/repos/'+username+'/'+id+'/branches');
	}
}
