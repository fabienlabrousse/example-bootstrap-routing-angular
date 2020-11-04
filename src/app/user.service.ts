import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    register(value: object): Observable<void> {
        // création -> POST localhost:8000/users
        return this.httpClient.post<void>('http://localhost:8000/users', value);
    }
}
